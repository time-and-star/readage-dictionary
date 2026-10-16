/* data/words/cet/author_depth_d3.js
 * 手敲深度补丁：analogy–arrow（200）.
 * 只补已有词条的词源、例句、语境、错误与检测，不新增词头。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('analogy', {
      etymology: {
        origin: 'analogy 按现成英语词整词记，意思是「类比；类推」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'analogy',
            text: '现代英语：类比；类推。'
          }
        ],
        formationLogic: '不硬拆。看到 analogy 就想到「类比」。',
        mnemonic: '先记中文「类比」，再把英文 analogy 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an analogy to make the abstract point concrete.',
          chinese: '这节课用一个「类比」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'analogy.s1',
          en: 'The lecture used an analogy to make the abstract point concrete.',
          zh: '这节课用一个「类比」的例子，把抽象的论点讲具体。',
          structure: 'analogy / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「类比」，对应英文释义：A comparison between two things that share features.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the analogy of about the topic.',
          right: 'This analogy belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 analogy。',
          rule: '名词 analogy（类比）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'analogy.q1',
          senseId: 'analogy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「类比」.',
          options: [
            'analogy',
            'analysis',
            'analyst'
          ],
          answer: 'analogy',
          explain: 'analogy 对应「类比」。'
        },
        {
          id: 'analogy.q2',
          senseId: 'analogy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits analogy?',
          options: [
            '类比',
            '分析',
            '分析师'
          ],
          answer: '类比',
          explain: '按本词条，analogy 是「类比」。'
        },
        {
          id: 'analogy.q3',
          senseId: 'analogy.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「类比」.',
          options: [
            'analogy',
            'analysis',
            'analyst'
          ],
          answer: 'analogy',
          explain: '空缺处用 analogy，不要换成相邻词 analysis。'
        },
        {
          id: 'analogy.q4',
          senseId: 'analogy.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse analogy with a neighbour in this list. Which one means 「类比」?',
          options: [
            'analogy',
            'analysis',
            'analyst'
          ],
          answer: 'analogy',
          explain: 'analysis 与 analyst 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'analysis',
          'analyst'
        ]
      }
    });

  D('analysis', {
      etymology: {
        origin: 'analysis 按现成英语词整词记，意思是「分析；分析报告」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'analysis',
            text: '现代英语：分析；分析报告。'
          }
        ],
        formationLogic: '不硬拆。看到 analysis 就想到「分析」。',
        mnemonic: '先记中文「分析」，再把英文 analysis 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an analysis to make the abstract point concrete.',
          chinese: '这节课用一个「分析」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'analysis.s1',
          en: 'The lecture used an analysis to make the abstract point concrete.',
          zh: '这节课用一个「分析」的例子，把抽象的论点讲具体。',
          structure: 'analysis / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「分析」，对应英文释义：A detailed examination of something to understand it better; a written report of this.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the analysis of about the topic.',
          right: 'This analysis belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 analysis。',
          rule: '名词 analysis（分析）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'analysis.q1',
          senseId: 'analysis.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「分析」.',
          options: [
            'analysis',
            'analyst',
            'analyze'
          ],
          answer: 'analysis',
          explain: 'analysis 对应「分析」。'
        },
        {
          id: 'analysis.q2',
          senseId: 'analysis.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits analysis?',
          options: [
            '分析',
            '分析师',
            '无关说法'
          ],
          answer: '分析',
          explain: '按本词条，analysis 是「分析」。'
        },
        {
          id: 'analysis.q3',
          senseId: 'analysis.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「分析」.',
          options: [
            'analysis',
            'analyst',
            'analyze'
          ],
          answer: 'analysis',
          explain: '空缺处用 analysis，不要换成相邻词 analyst。'
        },
        {
          id: 'analysis.q4',
          senseId: 'analysis.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse analysis with a neighbour in this list. Which one means 「分析」?',
          options: [
            'analysis',
            'analyst',
            'analyze'
          ],
          answer: 'analysis',
          explain: 'analyst 与 analyze 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'analyst',
          'analyze'
        ]
      }
    });

  D('analyst', {
      etymology: {
        origin: 'analyst 按现成英语词整词记，意思是「分析师；分析员」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'analyst',
            text: '现代英语：分析师；分析员。'
          }
        ],
        formationLogic: '不硬拆。看到 analyst 就想到「分析师」。',
        mnemonic: '先记中文「分析师」，再把英文 analyst 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an analyst to make the abstract point concrete.',
          chinese: '这节课用一个「分析师」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'analyst.s1',
          en: 'The lecture used an analyst to make the abstract point concrete.',
          zh: '这节课用一个「分析师」的例子，把抽象的论点讲具体。',
          structure: 'analyst / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「分析师」，对应英文释义：A person whose job is to examine and judge situations or data.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the analyst of about the topic.',
          right: 'This analyst belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 analyst。',
          rule: '名词 analyst（分析师）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'analyst.q1',
          senseId: 'analyst.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「分析师」.',
          options: [
            'analyst',
            'analyze',
            'ancestor'
          ],
          answer: 'analyst',
          explain: 'analyst 对应「分析师」。'
        },
        {
          id: 'analyst.q2',
          senseId: 'analyst.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits analyst?',
          options: [
            '分析师',
            '其他义项',
            '祖先'
          ],
          answer: '分析师',
          explain: '按本词条，analyst 是「分析师」。'
        },
        {
          id: 'analyst.q3',
          senseId: 'analyst.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「分析师」.',
          options: [
            'analyst',
            'analyze',
            'ancestor'
          ],
          answer: 'analyst',
          explain: '空缺处用 analyst，不要换成相邻词 analyze。'
        },
        {
          id: 'analyst.q4',
          senseId: 'analyst.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse analyst with a neighbour in this list. Which one means 「分析师」?',
          options: [
            'analyst',
            'analyze',
            'ancestor'
          ],
          answer: 'analyst',
          explain: 'analyze 与 ancestor 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'analyze',
          'ancestor'
        ]
      }
    });

  D('analyze', {
      etymology: {
        origin: 'analyze 按现成英语词整词记，意思是「分析」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'analyze',
            text: '现代英语：分析。'
          }
        ],
        formationLogic: '不硬拆。看到 analyze 就想到「分析」。',
        mnemonic: '先记中文「分析」，再把英文 analyze 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Analyze the graph before you write the conclusion.',
          chinese: '先分析图表，再写结论。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'analyze.s1',
          en: 'Analyze the graph before you write the conclusion.',
          zh: '先分析图表，再写结论。',
          structure: 'analyze / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「分析」，对应英文释义：To examine something in detail to understand it better.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They analyze about the result without a reason.',
          right: 'They analyze the result and give a reason.',
          reason: 'analyze 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + analyze + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'analyze.q1',
          senseId: 'analyze.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「分析」.',
          options: [
            'analyze',
            'ancestor',
            'ancestry'
          ],
          answer: 'analyze',
          explain: 'analyze 对应「分析」。'
        },
        {
          id: 'analyze.q2',
          senseId: 'analyze.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits analyze?',
          options: [
            '分析',
            '祖先',
            '无关说法'
          ],
          answer: '分析',
          explain: '按本词条，analyze 是「分析」。'
        },
        {
          id: 'analyze.q3',
          senseId: 'analyze.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「分析」.',
          options: [
            'analyze',
            'ancestor',
            'ancestry'
          ],
          answer: 'analyze',
          explain: '空缺处用 analyze，不要换成相邻词 ancestor。'
        },
        {
          id: 'analyze.q4',
          senseId: 'analyze.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse analyze with a neighbour in this list. Which one means 「分析」?',
          options: [
            'analyze',
            'ancestor',
            'ancestry'
          ],
          answer: 'analyze',
          explain: 'ancestor 与 ancestry 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ancestor',
          'ancestry'
        ]
      }
    });

  D('ancestor', {
      etymology: {
        origin: 'ancestor 按现成英语词整词记，意思是「祖先；祖宗」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ancestor',
            text: '现代英语：祖先；祖宗。'
          }
        ],
        formationLogic: '不硬拆。看到 ancestor 就想到「祖先」。',
        mnemonic: '先记中文「祖先」，再把英文 ancestor 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an ancestor to make the abstract point concrete.',
          chinese: '这节课用一个「祖先」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ancestor.s1',
          en: 'The lecture used an ancestor to make the abstract point concrete.',
          zh: '这节课用一个「祖先」的例子，把抽象的论点讲具体。',
          structure: 'ancestor / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「祖先」，对应英文释义：A person in your family who lived long ago.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ancestor of about the topic.',
          right: 'This ancestor belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ancestor。',
          rule: '名词 ancestor（祖先）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ancestor.q1',
          senseId: 'ancestor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「祖先」.',
          options: [
            'ancestor',
            'ancestry',
            'anchor'
          ],
          answer: 'ancestor',
          explain: 'ancestor 对应「祖先」。'
        },
        {
          id: 'ancestor.q2',
          senseId: 'ancestor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ancestor?',
          options: [
            '祖先',
            '无关说法',
            '反方向'
          ],
          answer: '祖先',
          explain: '按本词条，ancestor 是「祖先」。'
        },
        {
          id: 'ancestor.q3',
          senseId: 'ancestor.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「祖先」.',
          options: [
            'ancestor',
            'ancestry',
            'anchor'
          ],
          answer: 'ancestor',
          explain: '空缺处用 ancestor，不要换成相邻词 ancestry。'
        },
        {
          id: 'ancestor.q4',
          senseId: 'ancestor.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ancestor with a neighbour in this list. Which one means 「祖先」?',
          options: [
            'ancestor',
            'ancestry',
            'anchor'
          ],
          answer: 'ancestor',
          explain: 'ancestry 与 anchor 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ancestry',
          'anchor'
        ]
      }
    });

  D('ancestry', {
      etymology: {
        origin: 'ancestry 按现成英语词整词记，意思是「祖先；世系」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ancestry',
            text: '现代英语：祖先；世系。'
          }
        ],
        formationLogic: '不硬拆。看到 ancestry 就想到「祖先」。',
        mnemonic: '先记中文「祖先」，再把英文 ancestry 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an ancestry to make the abstract point concrete.',
          chinese: '这节课用一个「祖先」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ancestry.s1',
          en: 'The lecture used an ancestry to make the abstract point concrete.',
          zh: '这节课用一个「祖先」的例子，把抽象的论点讲具体。',
          structure: 'ancestry / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「祖先」，对应英文释义：The people in your family who lived a long time ago; your family origin.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ancestry of about the topic.',
          right: 'This ancestry belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ancestry。',
          rule: '名词 ancestry（祖先）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ancestry.q1',
          senseId: 'ancestry.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「祖先」.',
          options: [
            'ancestry',
            'anchor',
            'ancient'
          ],
          answer: 'ancestry',
          explain: 'ancestry 对应「祖先」。'
        },
        {
          id: 'ancestry.q2',
          senseId: 'ancestry.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ancestry?',
          options: [
            '祖先',
            '其他义项',
            '无关说法'
          ],
          answer: '祖先',
          explain: '按本词条，ancestry 是「祖先」。'
        },
        {
          id: 'ancestry.q3',
          senseId: 'ancestry.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「祖先」.',
          options: [
            'ancestry',
            'anchor',
            'ancient'
          ],
          answer: 'ancestry',
          explain: '空缺处用 ancestry，不要换成相邻词 anchor。'
        },
        {
          id: 'ancestry.q4',
          senseId: 'ancestry.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ancestry with a neighbour in this list. Which one means 「祖先」?',
          options: [
            'ancestry',
            'anchor',
            'ancient'
          ],
          answer: 'ancestry',
          explain: 'anchor 与 ancient 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anchor',
          'ancient'
        ]
      }
    });

  D('anchor', {
      etymology: {
        origin: 'anchor 按现成英语词整词记，意思是「锚；使固定；主播」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anchor',
            text: '现代英语：锚；使固定；主播。'
          }
        ],
        formationLogic: '不硬拆。看到 anchor 就想到「锚」。',
        mnemonic: '先记中文「锚」，再把英文 anchor 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anchor to make the abstract point concrete.',
          chinese: '这节课用一个「锚」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anchor.s1',
          en: 'The lecture used an anchor to make the abstract point concrete.',
          zh: '这节课用一个「锚」的例子，把抽象的论点讲具体。',
          structure: 'anchor / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「锚」，对应英文释义：A heavy object that keeps a ship in place; to fix firmly; a news presenter.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anchor of about the topic.',
          right: 'This anchor belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anchor。',
          rule: '名词 anchor（锚）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anchor.q1',
          senseId: 'anchor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「锚」.',
          options: [
            'anchor',
            'ancient',
            'ancients'
          ],
          answer: 'anchor',
          explain: 'anchor 对应「锚」。'
        },
        {
          id: 'anchor.q2',
          senseId: 'anchor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anchor?',
          options: [
            '锚',
            '其他义项',
            '古人'
          ],
          answer: '锚',
          explain: '按本词条，anchor 是「锚」。'
        },
        {
          id: 'anchor.q3',
          senseId: 'anchor.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「锚」.',
          options: [
            'anchor',
            'ancient',
            'ancients'
          ],
          answer: 'anchor',
          explain: '空缺处用 anchor，不要换成相邻词 ancient。'
        },
        {
          id: 'anchor.q4',
          senseId: 'anchor.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anchor with a neighbour in this list. Which one means 「锚」?',
          options: [
            'anchor',
            'ancient',
            'ancients'
          ],
          answer: 'anchor',
          explain: 'ancient 与 ancients 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ancient',
          'ancients'
        ]
      }
    });

  D('ancient', {
      etymology: {
        origin: 'ancient 按现成英语词整词记，意思是「古代的；古老的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ancient',
            text: '现代英语：古代的；古老的。'
          }
        ],
        formationLogic: '不硬拆。看到 ancient 就想到「古代的」。',
        mnemonic: '先记中文「古代的」，再把英文 ancient 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A ancient result needs a second look before anyone acts on it.',
          chinese: '一个「古代的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'ancient.s1',
          en: 'A ancient result needs a second look before anyone acts on it.',
          zh: '一个「古代的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'ancient / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「古代的」，对应英文释义：Belonging to a time very long ago; very old.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very anciently surprising to us.',
          right: 'The news was ancient.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + ancient。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a ancient + 名词。'
        }
      ],
      quiz: [
        {
          id: 'ancient.q1',
          senseId: 'ancient.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「古代的」.',
          options: [
            'ancient',
            'ancients',
            'and'
          ],
          answer: 'ancient',
          explain: 'ancient 对应「古代的」。'
        },
        {
          id: 'ancient.q2',
          senseId: 'ancient.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ancient?',
          options: [
            '古代的',
            '古人',
            '和'
          ],
          answer: '古代的',
          explain: '按本词条，ancient 是「古代的」。'
        },
        {
          id: 'ancient.q3',
          senseId: 'ancient.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'ancient',
            'ancients',
            'and'
          ],
          answer: 'ancient',
          explain: '空缺处用 ancient，不要换成相邻词 ancients。'
        },
        {
          id: 'ancient.q4',
          senseId: 'ancient.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ancient with a neighbour in this list. Which one means 「古代的」?',
          options: [
            'ancient',
            'ancients',
            'and'
          ],
          answer: 'ancient',
          explain: 'ancients 与 and 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ancients',
          'and'
        ]
      }
    });

  D('ancients', {
      etymology: {
        origin: '英语派生：ancient + -s。复数或动词第三人称。整词义为「古人；古代民族」。',
        prefix: null,
        root: {
          text: 'ancient',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-s',
          gloss: '复数或动词第三人称'
        },
        history: [
          {
            label: 'ancient',
            text: '基础词，先掌握「ancient」。'
          },
          {
            label: 'ancients',
            text: '英语派生形式，教学义是「古人；古代民族」。'
          }
        ],
        formationLogic: '在 ancient 上加 -s，得到 ancients。',
        mnemonic: '先记中文「古人」，再把英文 ancients 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The ancients left records of floods on stone and clay.',
          chinese: '古人把洪水记录留在石头和泥板上。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ancients.s1',
          en: 'The ancients left records of floods on stone and clay.',
          zh: '古人把洪水记录留在石头和泥板上。',
          structure: 'ancients / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「古人」，对应英文释义：People who lived in ancient times, or the civilizations of the ancient world.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ancients of about the topic.',
          right: 'This ancients belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ancients。',
          rule: '名词 ancients（古人）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ancients.q1',
          senseId: 'ancients.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「古人」.',
          options: [
            'ancients',
            'and',
            'anecdotal'
          ],
          answer: 'ancients',
          explain: 'ancients 对应「古人」。'
        },
        {
          id: 'ancients.q2',
          senseId: 'ancients.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ancients?',
          options: [
            '古人',
            '和',
            '轶事的'
          ],
          answer: '古人',
          explain: '按本词条，ancients 是「古人」。'
        },
        {
          id: 'ancients.q3',
          senseId: 'ancients.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「古人」.',
          options: [
            'ancients',
            'and',
            'anecdotal'
          ],
          answer: 'ancients',
          explain: '空缺处用 ancients，不要换成相邻词 and。'
        },
        {
          id: 'ancients.q4',
          senseId: 'ancients.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ancients with a neighbour in this list. Which one means 「古人」?',
          options: [
            'ancients',
            'and',
            'anecdotal'
          ],
          answer: 'ancients',
          explain: 'and 与 anecdotal 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'and',
          'anecdotal'
        ]
      }
    });

  D('and', {
      etymology: {
        origin: 'and 按现成英语词整词记，意思是「和；而且；然后」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'and',
            text: '现代英语：和；而且；然后。'
          }
        ],
        formationLogic: '不硬拆。看到 and 就想到「和」。',
        mnemonic: '先记中文「和」，再把英文 and 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Read the question and the options before you choose.',
          chinese: '先读问题和选项，然后再选。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'and.s1',
          en: 'Read the question and the options before you choose.',
          zh: '先读问题和选项，然后再选。',
          structure: 'and / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「和」，对应英文释义：Used to join words or parts of sentences.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the and of about the topic.',
          right: 'This and belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 and。',
          rule: '名词 and（和）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'and.q1',
          senseId: 'and.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「和」.',
          options: [
            'and',
            'anecdotal',
            'anecdote'
          ],
          answer: 'and',
          explain: 'and 对应「和」。'
        },
        {
          id: 'and.q2',
          senseId: 'and.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits and?',
          options: [
            '和',
            '轶事的',
            '轶事'
          ],
          answer: '和',
          explain: '按本词条，and 是「和」。'
        },
        {
          id: 'and.q3',
          senseId: 'and.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「和」.',
          options: [
            'and',
            'anecdotal',
            'anecdote'
          ],
          answer: 'and',
          explain: '空缺处用 and，不要换成相邻词 anecdotal。'
        },
        {
          id: 'and.q4',
          senseId: 'and.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse and with a neighbour in this list. Which one means 「和」?',
          options: [
            'and',
            'anecdotal',
            'anecdote'
          ],
          answer: 'and',
          explain: 'anecdotal 与 anecdote 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anecdotal',
          'anecdote'
        ]
      }
    });

  D('anecdotal', {
      etymology: {
        origin: '英语派生：anecdote + -al。形容词后缀。整词义为「轶事的；传闻的」。',
        prefix: null,
        root: {
          text: 'anecdote',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'anecdote',
            text: '基础词，先掌握「轶事」。'
          },
          {
            label: 'anecdotal',
            text: '英语派生形式，教学义是「轶事的；传闻的」。'
          }
        ],
        formationLogic: '在 anecdote 上加 -al，得到 anecdotal。',
        mnemonic: '先记中文「轶事的」，再把英文 anecdotal 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A anecdotal result needs a second look before anyone acts on it.',
          chinese: '一个「轶事的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'anecdotal.s1',
          en: 'A anecdotal result needs a second look before anyone acts on it.',
          zh: '一个「轶事的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'anecdotal / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「轶事的」，对应英文释义：Based on personal stories rather than facts or systematic research.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very anecdotally surprising to us.',
          right: 'The news was anecdotal.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + anecdotal。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a anecdotal + 名词。'
        }
      ],
      quiz: [
        {
          id: 'anecdotal.q1',
          senseId: 'anecdotal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「轶事的」.',
          options: [
            'anecdotal',
            'anecdote',
            'anew'
          ],
          answer: 'anecdotal',
          explain: 'anecdotal 对应「轶事的」。'
        },
        {
          id: 'anecdotal.q2',
          senseId: 'anecdotal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anecdotal?',
          options: [
            '轶事的',
            '轶事',
            '无关说法'
          ],
          answer: '轶事的',
          explain: '按本词条，anecdotal 是「轶事的」。'
        },
        {
          id: 'anecdotal.q3',
          senseId: 'anecdotal.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'anecdotal',
            'anecdote',
            'anew'
          ],
          answer: 'anecdotal',
          explain: '空缺处用 anecdotal，不要换成相邻词 anecdote。'
        },
        {
          id: 'anecdotal.q4',
          senseId: 'anecdotal.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anecdotal with a neighbour in this list. Which one means 「轶事的」?',
          options: [
            'anecdotal',
            'anecdote',
            'anew'
          ],
          answer: 'anecdotal',
          explain: 'anecdote 与 anew 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anecdote',
          'anew'
        ]
      }
    });

  D('anecdote', {
      etymology: {
        origin: 'anecdote 按现成英语词整词记，意思是「轶事；趣闻」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anecdote',
            text: '现代英语：轶事；趣闻。'
          }
        ],
        formationLogic: '不硬拆。看到 anecdote 就想到「轶事」。',
        mnemonic: '先记中文「轶事」，再把英文 anecdote 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anecdote to make the abstract point concrete.',
          chinese: '这节课用一个「轶事」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anecdote.s1',
          en: 'The lecture used an anecdote to make the abstract point concrete.',
          zh: '这节课用一个「轶事」的例子，把抽象的论点讲具体。',
          structure: 'anecdote / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「轶事」，对应英文释义：A short, interesting story about a real person or event.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anecdote of about the topic.',
          right: 'This anecdote belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anecdote。',
          rule: '名词 anecdote（轶事）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anecdote.q1',
          senseId: 'anecdote.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「轶事」.',
          options: [
            'anecdote',
            'anew',
            'angel'
          ],
          answer: 'anecdote',
          explain: 'anecdote 对应「轶事」。'
        },
        {
          id: 'anecdote.q2',
          senseId: 'anecdote.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anecdote?',
          options: [
            '轶事',
            '其他义项',
            '天使'
          ],
          answer: '轶事',
          explain: '按本词条，anecdote 是「轶事」。'
        },
        {
          id: 'anecdote.q3',
          senseId: 'anecdote.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「轶事」.',
          options: [
            'anecdote',
            'anew',
            'angel'
          ],
          answer: 'anecdote',
          explain: '空缺处用 anecdote，不要换成相邻词 anew。'
        },
        {
          id: 'anecdote.q4',
          senseId: 'anecdote.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anecdote with a neighbour in this list. Which one means 「轶事」?',
          options: [
            'anecdote',
            'anew',
            'angel'
          ],
          answer: 'anecdote',
          explain: 'anew 与 angel 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anew',
          'angel'
        ]
      }
    });

  D('anew', {
      etymology: {
        origin: '英语派生：前缀 a-（处于某种状态）加 new（新的）。教学义是「重新；再」。',
        prefix: {
          text: 'a-',
          gloss: '处于某种状态'
        },
        root: {
          text: 'new',
          gloss: '新的'
        },
        suffix: null,
        history: [
          {
            label: 'new',
            text: '新的'
          },
          {
            label: 'anew',
            text: '加上 a- 之后，现代英语里表示「重新；再」。'
          }
        ],
        formationLogic: 'a- 与 new 合在一起理解，不另造古典词形。',
        mnemonic: '先记中文「重新」，再把英文 anew 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change anew, so the class could follow each step.',
          chinese: '她「重新」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anew.s1',
          en: 'She explained the change anew, so the class could follow each step.',
          zh: '她「重新」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'anew / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「重新」，对应英文释义：Again, often in a new or different way.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a anew answer.',
          right: 'She answered anew.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + anew，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'anew.q1',
          senseId: 'anew.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「重新」.',
          options: [
            'anew',
            'angel',
            'angelic'
          ],
          answer: 'anew',
          explain: 'anew 对应「重新」。'
        },
        {
          id: 'anew.q2',
          senseId: 'anew.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anew?',
          options: [
            '重新',
            '天使',
            '天使般的'
          ],
          answer: '重新',
          explain: '按本词条，anew 是「重新」。'
        },
        {
          id: 'anew.q3',
          senseId: 'anew.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「重新」.',
          options: [
            'anew',
            'angel',
            'angelic'
          ],
          answer: 'anew',
          explain: '空缺处用 anew，不要换成相邻词 angel。'
        },
        {
          id: 'anew.q4',
          senseId: 'anew.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anew with a neighbour in this list. Which one means 「重新」?',
          options: [
            'anew',
            'angel',
            'angelic'
          ],
          answer: 'anew',
          explain: 'angel 与 angelic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'angel',
          'angelic'
        ]
      }
    });

  D('angel', {
      etymology: {
        origin: 'angel 按现成英语词整词记，意思是「天使；善良的人」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'angel',
            text: '现代英语：天使；善良的人。'
          }
        ],
        formationLogic: '不硬拆。看到 angel 就想到「天使」。',
        mnemonic: '先记中文「天使」，再把英文 angel 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an angel to make the abstract point concrete.',
          chinese: '这节课用一个「天使」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'angel.s1',
          en: 'The lecture used an angel to make the abstract point concrete.',
          zh: '这节课用一个「天使」的例子，把抽象的论点讲具体。',
          structure: 'angel / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「天使」，对应英文释义：A spiritual being in religion; a very kind person.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the angel of about the topic.',
          right: 'This angel belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 angel。',
          rule: '名词 angel（天使）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'angel.q1',
          senseId: 'angel.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「天使」.',
          options: [
            'angel',
            'angelic',
            'anger'
          ],
          answer: 'angel',
          explain: 'angel 对应「天使」。'
        },
        {
          id: 'angel.q2',
          senseId: 'angel.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits angel?',
          options: [
            '天使',
            '天使般的',
            '生气'
          ],
          answer: '天使',
          explain: '按本词条，angel 是「天使」。'
        },
        {
          id: 'angel.q3',
          senseId: 'angel.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「天使」.',
          options: [
            'angel',
            'angelic',
            'anger'
          ],
          answer: 'angel',
          explain: '空缺处用 angel，不要换成相邻词 angelic。'
        },
        {
          id: 'angel.q4',
          senseId: 'angel.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse angel with a neighbour in this list. Which one means 「天使」?',
          options: [
            'angel',
            'angelic',
            'anger'
          ],
          answer: 'angel',
          explain: 'angelic 与 anger 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'angelic',
          'anger'
        ]
      }
    });

  D('angelic', {
      etymology: {
        origin: '英语派生：angel + -ic。形容词后缀。整词义为「天使般的；极善良的」。',
        prefix: null,
        root: {
          text: 'angel',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ic',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'angel',
            text: '基础词，先掌握「天使」。'
          },
          {
            label: 'angelic',
            text: '英语派生形式，教学义是「天使般的；极善良的」。'
          }
        ],
        formationLogic: '在 angel 上加 -ic，得到 angelic。',
        mnemonic: '先记中文「天使般的」，再把英文 angelic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A angelic result needs a second look before anyone acts on it.',
          chinese: '一个「天使般的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'angelic.s1',
          en: 'A angelic result needs a second look before anyone acts on it.',
          zh: '一个「天使般的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'angelic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「天使般的」，对应英文释义：Very kind, gentle, and innocent, like an angel.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very angelicly surprising to us.',
          right: 'The news was angelic.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + angelic。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a angelic + 名词。'
        }
      ],
      quiz: [
        {
          id: 'angelic.q1',
          senseId: 'angelic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「天使般的」.',
          options: [
            'angelic',
            'anger',
            'angle'
          ],
          answer: 'angelic',
          explain: 'angelic 对应「天使般的」。'
        },
        {
          id: 'angelic.q2',
          senseId: 'angelic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits angelic?',
          options: [
            '天使般的',
            '生气',
            '无关说法'
          ],
          answer: '天使般的',
          explain: '按本词条，angelic 是「天使般的」。'
        },
        {
          id: 'angelic.q3',
          senseId: 'angelic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'angelic',
            'anger',
            'angle'
          ],
          answer: 'angelic',
          explain: '空缺处用 angelic，不要换成相邻词 anger。'
        },
        {
          id: 'angelic.q4',
          senseId: 'angelic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse angelic with a neighbour in this list. Which one means 「天使般的」?',
          options: [
            'angelic',
            'anger',
            'angle'
          ],
          answer: 'angelic',
          explain: 'anger 与 angle 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anger',
          'angle'
        ]
      }
    });

  D('anger', {
      etymology: {
        origin: 'anger 按现成英语词整词记，意思是「生气；愤怒；发怒」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anger',
            text: '现代英语：生气；愤怒；发怒。'
          }
        ],
        formationLogic: '不硬拆。看到 anger 就想到「生气」。',
        mnemonic: '先记中文「生气」，再把英文 anger 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anger to make the abstract point concrete.',
          chinese: '这节课用一个「生气」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anger.s1',
          en: 'The lecture used an anger to make the abstract point concrete.',
          zh: '这节课用一个「生气」的例子，把抽象的论点讲具体。',
          structure: 'anger / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「生气」，对应英文释义：A strong feeling of annoyance; to make someone angry.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anger of about the topic.',
          right: 'This anger belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anger。',
          rule: '名词 anger（生气）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anger.q1',
          senseId: 'anger.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「生气」.',
          options: [
            'anger',
            'angle',
            'angrily'
          ],
          answer: 'anger',
          explain: 'anger 对应「生气」。'
        },
        {
          id: 'anger.q2',
          senseId: 'anger.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anger?',
          options: [
            '生气',
            '其他义项',
            '无关说法'
          ],
          answer: '生气',
          explain: '按本词条，anger 是「生气」。'
        },
        {
          id: 'anger.q3',
          senseId: 'anger.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「生气」.',
          options: [
            'anger',
            'angle',
            'angrily'
          ],
          answer: 'anger',
          explain: '空缺处用 anger，不要换成相邻词 angle。'
        },
        {
          id: 'anger.q4',
          senseId: 'anger.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anger with a neighbour in this list. Which one means 「生气」?',
          options: [
            'anger',
            'angle',
            'angrily'
          ],
          answer: 'anger',
          explain: 'angle 与 angrily 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'angle',
          'angrily'
        ]
      }
    });

  D('angle', {
      etymology: {
        origin: 'angle 按现成英语词整词记，意思是「角度；立场；斜置」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'angle',
            text: '现代英语：角度；立场；斜置。'
          }
        ],
        formationLogic: '不硬拆。看到 angle 就想到「角度」。',
        mnemonic: '先记中文「角度」，再把英文 angle 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an angle to make the abstract point concrete.',
          chinese: '这节课用一个「角度」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'angle.s1',
          en: 'The lecture used an angle to make the abstract point concrete.',
          zh: '这节课用一个「角度」的例子，把抽象的论点讲具体。',
          structure: 'angle / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「角度」，对应英文释义：The space between two lines; a point of view; to place at an angle.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the angle of about the topic.',
          right: 'This angle belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 angle。',
          rule: '名词 angle（角度）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'angle.q1',
          senseId: 'angle.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「角度」.',
          options: [
            'angle',
            'angrily',
            'angry'
          ],
          answer: 'angle',
          explain: 'angle 对应「角度」。'
        },
        {
          id: 'angle.q2',
          senseId: 'angle.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits angle?',
          options: [
            '角度',
            '其他义项',
            '无关说法'
          ],
          answer: '角度',
          explain: '按本词条，angle 是「角度」。'
        },
        {
          id: 'angle.q3',
          senseId: 'angle.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「角度」.',
          options: [
            'angle',
            'angrily',
            'angry'
          ],
          answer: 'angle',
          explain: '空缺处用 angle，不要换成相邻词 angrily。'
        },
        {
          id: 'angle.q4',
          senseId: 'angle.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse angle with a neighbour in this list. Which one means 「角度」?',
          options: [
            'angle',
            'angrily',
            'angry'
          ],
          answer: 'angle',
          explain: 'angrily 与 angry 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'angrily',
          'angry'
        ]
      }
    });

  D('angrily', {
      etymology: {
        origin: '英语派生：angry + -ly。副词后缀，表示方式。整词义为「生气地；愤怒地」。',
        prefix: null,
        root: {
          text: 'angry',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'angry',
            text: '基础词，先掌握「angry」。'
          },
          {
            label: 'angrily',
            text: '英语派生形式，教学义是「生气地；愤怒地」。'
          }
        ],
        formationLogic: '在 angry 上加 -ly，得到 angrily。',
        mnemonic: '先记中文「生气地」，再把英文 angrily 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change angrily, so the class could follow each step.',
          chinese: '她「生气地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'angrily.s1',
          en: 'She explained the change angrily, so the class could follow each step.',
          zh: '她「生气地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'angrily / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「生气地」，对应英文释义：In a way that shows you are angry.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a angrily answer.',
          right: 'She answered angrily.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + angrily，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'angrily.q1',
          senseId: 'angrily.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「生气地」.',
          options: [
            'angrily',
            'angry',
            'anguish'
          ],
          answer: 'angrily',
          explain: 'angrily 对应「生气地」。'
        },
        {
          id: 'angrily.q2',
          senseId: 'angrily.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits angrily?',
          options: [
            '生气地',
            '其他义项',
            '无关说法'
          ],
          answer: '生气地',
          explain: '按本词条，angrily 是「生气地」。'
        },
        {
          id: 'angrily.q3',
          senseId: 'angrily.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「生气地」.',
          options: [
            'angrily',
            'angry',
            'anguish'
          ],
          answer: 'angrily',
          explain: '空缺处用 angrily，不要换成相邻词 angry。'
        },
        {
          id: 'angrily.q4',
          senseId: 'angrily.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse angrily with a neighbour in this list. Which one means 「生气地」?',
          options: [
            'angrily',
            'angry',
            'anguish'
          ],
          answer: 'angrily',
          explain: 'angry 与 anguish 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'angry',
          'anguish'
        ]
      }
    });

  D('angry', {
      etymology: {
        origin: 'angry 按现成英语词整词记，意思是「生气的；愤怒的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'angry',
            text: '现代英语：生气的；愤怒的。'
          }
        ],
        formationLogic: '不硬拆。看到 angry 就想到「生气的」。',
        mnemonic: '先记中文「生气的」，再把英文 angry 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A angry result needs a second look before anyone acts on it.',
          chinese: '一个「生气的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'angry.s1',
          en: 'A angry result needs a second look before anyone acts on it.',
          zh: '一个「生气的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'angry / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「生气的」，对应英文释义：Feeling strong displeasure.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very angryly surprising to us.',
          right: 'The news was angry.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + angry。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a angry + 名词。'
        }
      ],
      quiz: [
        {
          id: 'angry.q1',
          senseId: 'angry.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「生气的」.',
          options: [
            'angry',
            'anguish',
            'anguished'
          ],
          answer: 'angry',
          explain: 'angry 对应「生气的」。'
        },
        {
          id: 'angry.q2',
          senseId: 'angry.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits angry?',
          options: [
            '生气的',
            '其他义项',
            '痛苦的'
          ],
          answer: '生气的',
          explain: '按本词条，angry 是「生气的」。'
        },
        {
          id: 'angry.q3',
          senseId: 'angry.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'angry',
            'anguish',
            'anguished'
          ],
          answer: 'angry',
          explain: '空缺处用 angry，不要换成相邻词 anguish。'
        },
        {
          id: 'angry.q4',
          senseId: 'angry.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse angry with a neighbour in this list. Which one means 「生气的」?',
          options: [
            'angry',
            'anguish',
            'anguished'
          ],
          answer: 'angry',
          explain: 'anguish 与 anguished 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anguish',
          'anguished'
        ]
      }
    });

  D('anguish', {
      etymology: {
        origin: 'anguish 按现成英语词整词记，意思是「极度痛苦」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anguish',
            text: '现代英语：极度痛苦。'
          }
        ],
        formationLogic: '不硬拆。看到 anguish 就想到「极度痛苦」。',
        mnemonic: '先记中文「极度痛苦」，再把英文 anguish 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anguish to make the abstract point concrete.',
          chinese: '这节课用一个「极度痛苦」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anguish.s1',
          en: 'The lecture used an anguish to make the abstract point concrete.',
          zh: '这节课用一个「极度痛苦」的例子，把抽象的论点讲具体。',
          structure: 'anguish / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「极度痛苦」，对应英文释义：Severe mental or physical suffering.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anguish of about the topic.',
          right: 'This anguish belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anguish。',
          rule: '名词 anguish（极度痛苦）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anguish.q1',
          senseId: 'anguish.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「极度痛苦」.',
          options: [
            'anguish',
            'anguished',
            'angular'
          ],
          answer: 'anguish',
          explain: 'anguish 对应「极度痛苦」。'
        },
        {
          id: 'anguish.q2',
          senseId: 'anguish.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anguish?',
          options: [
            '极度痛苦',
            '痛苦的',
            '无关说法'
          ],
          answer: '极度痛苦',
          explain: '按本词条，anguish 是「极度痛苦」。'
        },
        {
          id: 'anguish.q3',
          senseId: 'anguish.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「极度痛苦」.',
          options: [
            'anguish',
            'anguished',
            'angular'
          ],
          answer: 'anguish',
          explain: '空缺处用 anguish，不要换成相邻词 anguished。'
        },
        {
          id: 'anguish.q4',
          senseId: 'anguish.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anguish with a neighbour in this list. Which one means 「极度痛苦」?',
          options: [
            'anguish',
            'anguished',
            'angular'
          ],
          answer: 'anguish',
          explain: 'anguished 与 angular 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anguished',
          'angular'
        ]
      }
    });

  D('anguished', {
      etymology: {
        origin: '英语派生：anguish + -ed。形容词后缀，表示已经如此。整词义为「痛苦的；苦恼的」。',
        prefix: null,
        root: {
          text: 'anguish',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'anguish',
            text: '基础词，先掌握「anguish」。'
          },
          {
            label: 'anguished',
            text: '英语派生形式，教学义是「痛苦的；苦恼的」。'
          }
        ],
        formationLogic: '在 anguish 上加 -ed，得到 anguished。',
        mnemonic: '先记中文「痛苦的」，再把英文 anguished 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A anguished result needs a second look before anyone acts on it.',
          chinese: '一个「痛苦的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'anguished.s1',
          en: 'A anguished result needs a second look before anyone acts on it.',
          zh: '一个「痛苦的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'anguished / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「痛苦的」，对应英文释义：Showing or feeling extreme mental pain or worry.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very anguishedly surprising to us.',
          right: 'The news was anguished.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + anguished。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a anguished + 名词。'
        }
      ],
      quiz: [
        {
          id: 'anguished.q1',
          senseId: 'anguished.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「痛苦的」.',
          options: [
            'anguished',
            'angular',
            'animal'
          ],
          answer: 'anguished',
          explain: 'anguished 对应「痛苦的」。'
        },
        {
          id: 'anguished.q2',
          senseId: 'anguished.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anguished?',
          options: [
            '痛苦的',
            '其他义项',
            '无关说法'
          ],
          answer: '痛苦的',
          explain: '按本词条，anguished 是「痛苦的」。'
        },
        {
          id: 'anguished.q3',
          senseId: 'anguished.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'anguished',
            'angular',
            'animal'
          ],
          answer: 'anguished',
          explain: '空缺处用 anguished，不要换成相邻词 angular。'
        },
        {
          id: 'anguished.q4',
          senseId: 'anguished.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anguished with a neighbour in this list. Which one means 「痛苦的」?',
          options: [
            'anguished',
            'angular',
            'animal'
          ],
          answer: 'anguished',
          explain: 'angular 与 animal 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'angular',
          'animal'
        ]
      }
    });

  D('angular', {
      etymology: {
        origin: 'angular 按现成英语词整词记，意思是「有棱角的；瘦削的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'angular',
            text: '现代英语：有棱角的；瘦削的。'
          }
        ],
        formationLogic: '不硬拆。看到 angular 就想到「有棱角的」。',
        mnemonic: '先记中文「有棱角的」，再把英文 angular 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A angular result needs a second look before anyone acts on it.',
          chinese: '一个「有棱角的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'angular.s1',
          en: 'A angular result needs a second look before anyone acts on it.',
          zh: '一个「有棱角的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'angular / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「有棱角的」，对应英文释义：Having sharp angles or corners; (of a face) thin and bony.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very angularly surprising to us.',
          right: 'The news was angular.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + angular。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a angular + 名词。'
        }
      ],
      quiz: [
        {
          id: 'angular.q1',
          senseId: 'angular.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「有棱角的」.',
          options: [
            'angular',
            'animal',
            'animality'
          ],
          answer: 'angular',
          explain: 'angular 对应「有棱角的」。'
        },
        {
          id: 'angular.q2',
          senseId: 'angular.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits angular?',
          options: [
            '有棱角的',
            '其他义项',
            '兽性'
          ],
          answer: '有棱角的',
          explain: '按本词条，angular 是「有棱角的」。'
        },
        {
          id: 'angular.q3',
          senseId: 'angular.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'angular',
            'animal',
            'animality'
          ],
          answer: 'angular',
          explain: '空缺处用 angular，不要换成相邻词 animal。'
        },
        {
          id: 'angular.q4',
          senseId: 'angular.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse angular with a neighbour in this list. Which one means 「有棱角的」?',
          options: [
            'angular',
            'animal',
            'animality'
          ],
          answer: 'angular',
          explain: 'animal 与 animality 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'animal',
          'animality'
        ]
      }
    });

  D('animal', {
      etymology: {
        origin: 'animal 按现成英语词整词记，意思是「动物」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'animal',
            text: '现代英语：动物。'
          }
        ],
        formationLogic: '不硬拆。看到 animal 就想到「动物」。',
        mnemonic: '先记中文「动物」，再把英文 animal 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an animal to make the abstract point concrete.',
          chinese: '这节课用一个「动物」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'animal.s1',
          en: 'The lecture used an animal to make the abstract point concrete.',
          zh: '这节课用一个「动物」的例子，把抽象的论点讲具体。',
          structure: 'animal / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「动物」，对应英文释义：A living creature that is not a plant or person.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the animal of about the topic.',
          right: 'This animal belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 animal。',
          rule: '名词 animal（动物）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'animal.q1',
          senseId: 'animal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「动物」.',
          options: [
            'animal',
            'animality',
            'animals'
          ],
          answer: 'animal',
          explain: 'animal 对应「动物」。'
        },
        {
          id: 'animal.q2',
          senseId: 'animal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits animal?',
          options: [
            '动物',
            '兽性',
            '无关说法'
          ],
          answer: '动物',
          explain: '按本词条，animal 是「动物」。'
        },
        {
          id: 'animal.q3',
          senseId: 'animal.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「动物」.',
          options: [
            'animal',
            'animality',
            'animals'
          ],
          answer: 'animal',
          explain: '空缺处用 animal，不要换成相邻词 animality。'
        },
        {
          id: 'animal.q4',
          senseId: 'animal.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse animal with a neighbour in this list. Which one means 「动物」?',
          options: [
            'animal',
            'animality',
            'animals'
          ],
          answer: 'animal',
          explain: 'animality 与 animals 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'animality',
          'animals'
        ]
      }
    });

  D('animality', {
      etymology: {
        origin: '英语派生：animal + -ity。把形容词变成名词。整词义为「兽性；动物性」。',
        prefix: null,
        root: {
          text: 'animal',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ity',
          gloss: '把形容词变成名词'
        },
        history: [
          {
            label: 'animal',
            text: '基础词，先掌握「animal」。'
          },
          {
            label: 'animality',
            text: '英语派生形式，教学义是「兽性；动物性」。'
          }
        ],
        formationLogic: '在 animal 上加 -ity，得到 animality。',
        mnemonic: '先记中文「兽性」，再把英文 animality 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an animality to make the abstract point concrete.',
          chinese: '这节课用一个「兽性」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'animality.s1',
          en: 'The lecture used an animality to make the abstract point concrete.',
          zh: '这节课用一个「兽性」的例子，把抽象的论点讲具体。',
          structure: 'animality / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「兽性」，对应英文释义：The qualities and needs of animals as opposed to thinking or moral behaviour.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the animality of about the topic.',
          right: 'This animality belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 animality。',
          rule: '名词 animality（兽性）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'animality.q1',
          senseId: 'animality.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「兽性」.',
          options: [
            'animality',
            'animals',
            'animate'
          ],
          answer: 'animality',
          explain: 'animality 对应「兽性」。'
        },
        {
          id: 'animality.q2',
          senseId: 'animality.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits animality?',
          options: [
            '兽性',
            '其他义项',
            '无关说法'
          ],
          answer: '兽性',
          explain: '按本词条，animality 是「兽性」。'
        },
        {
          id: 'animality.q3',
          senseId: 'animality.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「兽性」.',
          options: [
            'animality',
            'animals',
            'animate'
          ],
          answer: 'animality',
          explain: '空缺处用 animality，不要换成相邻词 animals。'
        },
        {
          id: 'animality.q4',
          senseId: 'animality.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse animality with a neighbour in this list. Which one means 「兽性」?',
          options: [
            'animality',
            'animals',
            'animate'
          ],
          answer: 'animality',
          explain: 'animals 与 animate 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'animals',
          'animate'
        ]
      }
    });

  D('animals', {
      etymology: {
        origin: '英语派生：animal + -s。复数或动词第三人称。整词义为「动物（复数形式）」。',
        prefix: null,
        root: {
          text: 'animal',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-s',
          gloss: '复数或动词第三人称'
        },
        history: [
          {
            label: 'animal',
            text: '基础词，先掌握「animal」。'
          },
          {
            label: 'animals',
            text: '英语派生形式，教学义是「动物（复数形式）」。'
          }
        ],
        formationLogic: '在 animal 上加 -s，得到 animals。',
        mnemonic: '先记中文「动物（复数形式）」，再把英文 animals 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The animals were moved indoors before the storm.',
          chinese: '暴风雨来临前，动物被转移到室内。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'animals.s1',
          en: 'The animals were moved indoors before the storm.',
          zh: '暴风雨来临前，动物被转移到室内。',
          structure: 'animals / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「动物（复数形式）」，对应英文释义：Plural of animal, used to refer to all creatures that are not plants or people.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the animals of about the topic.',
          right: 'This animals belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 animals。',
          rule: '名词 animals（动物（复数形式））前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'animals.q1',
          senseId: 'animals.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「动物（复数形式）」.',
          options: [
            'animals',
            'animate',
            'animated'
          ],
          answer: 'animals',
          explain: 'animals 对应「动物（复数形式）」。'
        },
        {
          id: 'animals.q2',
          senseId: 'animals.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits animals?',
          options: [
            '动物（复数形式）',
            '其他义项',
            '活跃的'
          ],
          answer: '动物（复数形式）',
          explain: '按本词条，animals 是「动物（复数形式）」。'
        },
        {
          id: 'animals.q3',
          senseId: 'animals.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「动物（复数形式）」.',
          options: [
            'animals',
            'animate',
            'animated'
          ],
          answer: 'animals',
          explain: '空缺处用 animals，不要换成相邻词 animate。'
        },
        {
          id: 'animals.q4',
          senseId: 'animals.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse animals with a neighbour in this list. Which one means 「动物（复数形式）」?',
          options: [
            'animals',
            'animate',
            'animated'
          ],
          answer: 'animals',
          explain: 'animate 与 animated 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'animate',
          'animated'
        ]
      }
    });

  D('animate', {
      etymology: {
        origin: 'animate 按现成英语词整词记，意思是「使有活力；动画的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'animate',
            text: '现代英语：使有活力；动画的。'
          }
        ],
        formationLogic: '不硬拆。看到 animate 就想到「使有活力」。',
        mnemonic: '先记中文「使有活力」，再把英文 animate 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will animate the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（使有活力）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'animate.s1',
          en: 'The team will animate the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（使有活力）。',
          structure: 'animate / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「使有活力」，对应英文释义：To give life or energy to something; made to look as if alive.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They animate about the result without a reason.',
          right: 'They animate the result and give a reason.',
          reason: 'animate 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + animate + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'animate.q1',
          senseId: 'animate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「使有活力」.',
          options: [
            'animate',
            'animated',
            'animation'
          ],
          answer: 'animate',
          explain: 'animate 对应「使有活力」。'
        },
        {
          id: 'animate.q2',
          senseId: 'animate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits animate?',
          options: [
            '使有活力',
            '活跃的',
            '动画片'
          ],
          answer: '使有活力',
          explain: '按本词条，animate 是「使有活力」。'
        },
        {
          id: 'animate.q3',
          senseId: 'animate.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「使有活力」.',
          options: [
            'animate',
            'animated',
            'animation'
          ],
          answer: 'animate',
          explain: '空缺处用 animate，不要换成相邻词 animated。'
        },
        {
          id: 'animate.q4',
          senseId: 'animate.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse animate with a neighbour in this list. Which one means 「使有活力」?',
          options: [
            'animate',
            'animated',
            'animation'
          ],
          answer: 'animate',
          explain: 'animated 与 animation 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'animated',
          'animation'
        ]
      }
    });

  D('animated', {
      etymology: {
        origin: '英语派生：animate + -ed。形容词后缀，表示已经如此。整词义为「活跃的；动画的」。',
        prefix: null,
        root: {
          text: 'animate',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'animate',
            text: '基础词，先掌握「animate」。'
          },
          {
            label: 'animated',
            text: '英语派生形式，教学义是「活跃的；动画的」。'
          }
        ],
        formationLogic: '在 animate 上加 -ed，得到 animated。',
        mnemonic: '先记中文「活跃的」，再把英文 animated 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A animated result needs a second look before anyone acts on it.',
          chinese: '一个「活跃的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'animated.s1',
          en: 'A animated result needs a second look before anyone acts on it.',
          zh: '一个「活跃的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'animated / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「活跃的」，对应英文释义：Full of life and energy; made to appear to move.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very animatedly surprising to us.',
          right: 'The news was animated.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + animated。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a animated + 名词。'
        }
      ],
      quiz: [
        {
          id: 'animated.q1',
          senseId: 'animated.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「活跃的」.',
          options: [
            'animated',
            'animation',
            'ankle'
          ],
          answer: 'animated',
          explain: 'animated 对应「活跃的」。'
        },
        {
          id: 'animated.q2',
          senseId: 'animated.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits animated?',
          options: [
            '活跃的',
            '动画片',
            '无关说法'
          ],
          answer: '活跃的',
          explain: '按本词条，animated 是「活跃的」。'
        },
        {
          id: 'animated.q3',
          senseId: 'animated.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'animated',
            'animation',
            'ankle'
          ],
          answer: 'animated',
          explain: '空缺处用 animated，不要换成相邻词 animation。'
        },
        {
          id: 'animated.q4',
          senseId: 'animated.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse animated with a neighbour in this list. Which one means 「活跃的」?',
          options: [
            'animated',
            'animation',
            'ankle'
          ],
          answer: 'animated',
          explain: 'animation 与 ankle 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'animation',
          'ankle'
        ]
      }
    });

  D('animation', {
      etymology: {
        origin: 'animation 按现成英语词整词记，意思是「动画片；生气；动画制作」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'animation',
            text: '现代英语：动画片；生气；动画制作。'
          }
        ],
        formationLogic: '不硬拆。看到 animation 就想到「动画片」。',
        mnemonic: '先记中文「动画片」，再把英文 animation 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an animation to make the abstract point concrete.',
          chinese: '这节课用一个「动画片」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'animation.s1',
          en: 'The lecture used an animation to make the abstract point concrete.',
          zh: '这节课用一个「动画片」的例子，把抽象的论点讲具体。',
          structure: 'animation / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「动画片」，对应英文释义：Cartoons made to appear moving; liveliness and energy; the technique of making them.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the animation of about the topic.',
          right: 'This animation belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 animation。',
          rule: '名词 animation（动画片）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'animation.q1',
          senseId: 'animation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「动画片」.',
          options: [
            'animation',
            'ankle',
            'annex'
          ],
          answer: 'animation',
          explain: 'animation 对应「动画片」。'
        },
        {
          id: 'animation.q2',
          senseId: 'animation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits animation?',
          options: [
            '动画片',
            '其他义项',
            '无关说法'
          ],
          answer: '动画片',
          explain: '按本词条，animation 是「动画片」。'
        },
        {
          id: 'animation.q3',
          senseId: 'animation.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「动画片」.',
          options: [
            'animation',
            'ankle',
            'annex'
          ],
          answer: 'animation',
          explain: '空缺处用 animation，不要换成相邻词 ankle。'
        },
        {
          id: 'animation.q4',
          senseId: 'animation.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse animation with a neighbour in this list. Which one means 「动画片」?',
          options: [
            'animation',
            'ankle',
            'annex'
          ],
          answer: 'animation',
          explain: 'ankle 与 annex 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ankle',
          'annex'
        ]
      }
    });

  D('ankle', {
      etymology: {
        origin: 'ankle 按现成英语词整词记，意思是「脚踝」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ankle',
            text: '现代英语：脚踝。'
          }
        ],
        formationLogic: '不硬拆。看到 ankle 就想到「脚踝」。',
        mnemonic: '先记中文「脚踝」，再把英文 ankle 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an ankle to make the abstract point concrete.',
          chinese: '这节课用一个「脚踝」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ankle.s1',
          en: 'The lecture used an ankle to make the abstract point concrete.',
          zh: '这节课用一个「脚踝」的例子，把抽象的论点讲具体。',
          structure: 'ankle / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「脚踝」，对应英文释义：The joint where the foot joins the leg.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ankle of about the topic.',
          right: 'This ankle belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ankle。',
          rule: '名词 ankle（脚踝）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ankle.q1',
          senseId: 'ankle.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「脚踝」.',
          options: [
            'ankle',
            'annex',
            'annexation'
          ],
          answer: 'ankle',
          explain: 'ankle 对应「脚踝」。'
        },
        {
          id: 'ankle.q2',
          senseId: 'ankle.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ankle?',
          options: [
            '脚踝',
            '其他义项',
            '吞并'
          ],
          answer: '脚踝',
          explain: '按本词条，ankle 是「脚踝」。'
        },
        {
          id: 'ankle.q3',
          senseId: 'ankle.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「脚踝」.',
          options: [
            'ankle',
            'annex',
            'annexation'
          ],
          answer: 'ankle',
          explain: '空缺处用 ankle，不要换成相邻词 annex。'
        },
        {
          id: 'ankle.q4',
          senseId: 'ankle.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ankle with a neighbour in this list. Which one means 「脚踝」?',
          options: [
            'ankle',
            'annex',
            'annexation'
          ],
          answer: 'ankle',
          explain: 'annex 与 annexation 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annex',
          'annexation'
        ]
      }
    });

  D('annex', {
      etymology: {
        origin: 'annex 按现成英语词整词记，意思是「吞并；附加物」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'annex',
            text: '现代英语：吞并；附加物。'
          }
        ],
        formationLogic: '不硬拆。看到 annex 就想到「吞并」。',
        mnemonic: '先记中文「吞并」，再把英文 annex 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will annex the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（吞并）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'annex.s1',
          en: 'The team will annex the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（吞并）。',
          structure: 'annex / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「吞并」，对应英文释义：To take control of a territory; a building added to a larger one.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They annex about the result without a reason.',
          right: 'They annex the result and give a reason.',
          reason: 'annex 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + annex + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'annex.q1',
          senseId: 'annex.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「吞并」.',
          options: [
            'annex',
            'annexation',
            'anniversary'
          ],
          answer: 'annex',
          explain: 'annex 对应「吞并」。'
        },
        {
          id: 'annex.q2',
          senseId: 'annex.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annex?',
          options: [
            '吞并',
            '反方向',
            '周年纪念日'
          ],
          answer: '吞并',
          explain: '按本词条，annex 是「吞并」。'
        },
        {
          id: 'annex.q3',
          senseId: 'annex.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「吞并」.',
          options: [
            'annex',
            'annexation',
            'anniversary'
          ],
          answer: 'annex',
          explain: '空缺处用 annex，不要换成相邻词 annexation。'
        },
        {
          id: 'annex.q4',
          senseId: 'annex.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annex with a neighbour in this list. Which one means 「吞并」?',
          options: [
            'annex',
            'annexation',
            'anniversary'
          ],
          answer: 'annex',
          explain: 'annexation 与 anniversary 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annexation',
          'anniversary'
        ]
      }
    });

  D('annexation', {
      etymology: {
        origin: '英语派生：annex + -ation。名词后缀，表示行为或结果。整词义为「吞并；合并」。',
        prefix: null,
        root: {
          text: 'annex',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ation',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'annex',
            text: '基础词，先掌握「annex」。'
          },
          {
            label: 'annexation',
            text: '英语派生形式，教学义是「吞并；合并」。'
          }
        ],
        formationLogic: '在 annex 上加 -ation，得到 annexation。',
        mnemonic: '先记中文「吞并」，再把英文 annexation 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an annexation to make the abstract point concrete.',
          chinese: '这节课用一个「吞并」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'annexation.s1',
          en: 'The lecture used an annexation to make the abstract point concrete.',
          zh: '这节课用一个「吞并」的例子，把抽象的论点讲具体。',
          structure: 'annexation / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「吞并」，对应英文释义：The act of taking control of a territory or property by force or official action.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the annexation of about the topic.',
          right: 'This annexation belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 annexation。',
          rule: '名词 annexation（吞并）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'annexation.q1',
          senseId: 'annexation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「吞并」.',
          options: [
            'annexation',
            'anniversary',
            'announce'
          ],
          answer: 'annexation',
          explain: 'annexation 对应「吞并」。'
        },
        {
          id: 'annexation.q2',
          senseId: 'annexation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annexation?',
          options: [
            '吞并',
            '周年纪念日',
            '宣布'
          ],
          answer: '吞并',
          explain: '按本词条，annexation 是「吞并」。'
        },
        {
          id: 'annexation.q3',
          senseId: 'annexation.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「吞并」.',
          options: [
            'annexation',
            'anniversary',
            'announce'
          ],
          answer: 'annexation',
          explain: '空缺处用 annexation，不要换成相邻词 anniversary。'
        },
        {
          id: 'annexation.q4',
          senseId: 'annexation.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annexation with a neighbour in this list. Which one means 「吞并」?',
          options: [
            'annexation',
            'anniversary',
            'announce'
          ],
          answer: 'annexation',
          explain: 'anniversary 与 announce 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anniversary',
          'announce'
        ]
      }
    });

  D('anniversary', {
      etymology: {
        origin: 'anniversary 按现成英语词整词记，意思是「周年纪念日」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anniversary',
            text: '现代英语：周年纪念日。'
          }
        ],
        formationLogic: '不硬拆。看到 anniversary 就想到「周年纪念日」。',
        mnemonic: '先记中文「周年纪念日」，再把英文 anniversary 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anniversary to make the abstract point concrete.',
          chinese: '这节课用一个「周年纪念日」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anniversary.s1',
          en: 'The lecture used an anniversary to make the abstract point concrete.',
          zh: '这节课用一个「周年纪念日」的例子，把抽象的论点讲具体。',
          structure: 'anniversary / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「周年纪念日」，对应英文释义：A date that is remembered because of an event in a past year.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anniversary of about the topic.',
          right: 'This anniversary belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anniversary。',
          rule: '名词 anniversary（周年纪念日）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anniversary.q1',
          senseId: 'anniversary.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「周年纪念日」.',
          options: [
            'anniversary',
            'announce',
            'announcement'
          ],
          answer: 'anniversary',
          explain: 'anniversary 对应「周年纪念日」。'
        },
        {
          id: 'anniversary.q2',
          senseId: 'anniversary.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anniversary?',
          options: [
            '周年纪念日',
            '宣布',
            '无关说法'
          ],
          answer: '周年纪念日',
          explain: '按本词条，anniversary 是「周年纪念日」。'
        },
        {
          id: 'anniversary.q3',
          senseId: 'anniversary.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「周年纪念日」.',
          options: [
            'anniversary',
            'announce',
            'announcement'
          ],
          answer: 'anniversary',
          explain: '空缺处用 anniversary，不要换成相邻词 announce。'
        },
        {
          id: 'anniversary.q4',
          senseId: 'anniversary.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anniversary with a neighbour in this list. Which one means 「周年纪念日」?',
          options: [
            'anniversary',
            'announce',
            'announcement'
          ],
          answer: 'anniversary',
          explain: 'announce 与 announcement 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'announce',
          'announcement'
        ]
      }
    });

  D('announce', {
      etymology: {
        origin: 'announce 按现成英语词整词记，意思是「宣布；播报」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'announce',
            text: '现代英语：宣布；播报。'
          }
        ],
        formationLogic: '不硬拆。看到 announce 就想到「宣布」。',
        mnemonic: '先记中文「宣布」，再把英文 announce 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will announce the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（宣布）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'announce.s1',
          en: 'The team will announce the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（宣布）。',
          structure: 'announce / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「宣布」，对应英文释义：To tell people officially about something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They announce about the result without a reason.',
          right: 'They announce the result and give a reason.',
          reason: 'announce 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + announce + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'announce.q1',
          senseId: 'announce.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「宣布」.',
          options: [
            'announce',
            'announcement',
            'announcer'
          ],
          answer: 'announce',
          explain: 'announce 对应「宣布」。'
        },
        {
          id: 'announce.q2',
          senseId: 'announce.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits announce?',
          options: [
            '宣布',
            '其他义项',
            '播音员'
          ],
          answer: '宣布',
          explain: '按本词条，announce 是「宣布」。'
        },
        {
          id: 'announce.q3',
          senseId: 'announce.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「宣布」.',
          options: [
            'announce',
            'announcement',
            'announcer'
          ],
          answer: 'announce',
          explain: '空缺处用 announce，不要换成相邻词 announcement。'
        },
        {
          id: 'announce.q4',
          senseId: 'announce.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse announce with a neighbour in this list. Which one means 「宣布」?',
          options: [
            'announce',
            'announcement',
            'announcer'
          ],
          answer: 'announce',
          explain: 'announcement 与 announcer 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'announcement',
          'announcer'
        ]
      }
    });

  D('announcement', {
      etymology: {
        origin: '英语派生：announce + -ment。名词后缀，表示行为或结果。整词义为「公告；通告」。',
        prefix: null,
        root: {
          text: 'announce',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ment',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'announce',
            text: '基础词，先掌握「宣布」。'
          },
          {
            label: 'announcement',
            text: '英语派生形式，教学义是「公告；通告」。'
          }
        ],
        formationLogic: '在 announce 上加 -ment，得到 announcement。',
        mnemonic: '先记中文「公告」，再把英文 announcement 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an announcement to make the abstract point concrete.',
          chinese: '这节课用一个「公告」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'announcement.s1',
          en: 'The lecture used an announcement to make the abstract point concrete.',
          zh: '这节课用一个「公告」的例子，把抽象的论点讲具体。',
          structure: 'announcement / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「公告」，对应英文释义：A public statement that gives people new information.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the announcement of about the topic.',
          right: 'This announcement belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 announcement。',
          rule: '名词 announcement（公告）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'announcement.q1',
          senseId: 'announcement.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「公告」.',
          options: [
            'announcement',
            'announcer',
            'annoy'
          ],
          answer: 'announcement',
          explain: 'announcement 对应「公告」。'
        },
        {
          id: 'announcement.q2',
          senseId: 'announcement.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits announcement?',
          options: [
            '公告',
            '播音员',
            '无关说法'
          ],
          answer: '公告',
          explain: '按本词条，announcement 是「公告」。'
        },
        {
          id: 'announcement.q3',
          senseId: 'announcement.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「公告」.',
          options: [
            'announcement',
            'announcer',
            'annoy'
          ],
          answer: 'announcement',
          explain: '空缺处用 announcement，不要换成相邻词 announcer。'
        },
        {
          id: 'announcement.q4',
          senseId: 'announcement.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse announcement with a neighbour in this list. Which one means 「公告」?',
          options: [
            'announcement',
            'announcer',
            'annoy'
          ],
          answer: 'announcement',
          explain: 'announcer 与 annoy 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'announcer',
          'annoy'
        ]
      }
    });

  D('announcer', {
      etymology: {
        origin: '英语派生：announce + -er。表示做该事的人。整词义为「播音员；节目主持人」。',
        prefix: null,
        root: {
          text: 'announce',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-er',
          gloss: '表示做该事的人'
        },
        history: [
          {
            label: 'announce',
            text: '基础词，先掌握「宣布」。'
          },
          {
            label: 'announcer',
            text: '英语派生形式，教学义是「播音员；节目主持人」。'
          }
        ],
        formationLogic: '在 announce 上加 -er，得到 announcer。',
        mnemonic: '先记中文「播音员」，再把英文 announcer 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an announcer to make the abstract point concrete.',
          chinese: '这节课用一个「播音员」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'announcer.s1',
          en: 'The lecture used an announcer to make the abstract point concrete.',
          zh: '这节课用一个「播音员」的例子，把抽象的论点讲具体。',
          structure: 'announcer / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「播音员」，对应英文释义：A person whose job is to introduce programs or read the news on radio or television.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the announcer of about the topic.',
          right: 'This announcer belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 announcer。',
          rule: '名词 announcer（播音员）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'announcer.q1',
          senseId: 'announcer.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「播音员」.',
          options: [
            'announcer',
            'annoy',
            'annoyance'
          ],
          answer: 'announcer',
          explain: 'announcer 对应「播音员」。'
        },
        {
          id: 'announcer.q2',
          senseId: 'announcer.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits announcer?',
          options: [
            '播音员',
            '其他义项',
            '烦恼'
          ],
          answer: '播音员',
          explain: '按本词条，announcer 是「播音员」。'
        },
        {
          id: 'announcer.q3',
          senseId: 'announcer.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「播音员」.',
          options: [
            'announcer',
            'annoy',
            'annoyance'
          ],
          answer: 'announcer',
          explain: '空缺处用 announcer，不要换成相邻词 annoy。'
        },
        {
          id: 'announcer.q4',
          senseId: 'announcer.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse announcer with a neighbour in this list. Which one means 「播音员」?',
          options: [
            'announcer',
            'annoy',
            'annoyance'
          ],
          answer: 'announcer',
          explain: 'annoy 与 annoyance 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annoy',
          'annoyance'
        ]
      }
    });

  D('annoy', {
      etymology: {
        origin: 'annoy 按现成英语词整词记，意思是「使烦恼；打扰」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'annoy',
            text: '现代英语：使烦恼；打扰。'
          }
        ],
        formationLogic: '不硬拆。看到 annoy 就想到「使烦恼」。',
        mnemonic: '先记中文「使烦恼」，再把英文 annoy 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will annoy the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（使烦恼）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'annoy.s1',
          en: 'The team will annoy the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（使烦恼）。',
          structure: 'annoy / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「使烦恼」，对应英文释义：To make someone a little angry.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They annoy about the result without a reason.',
          right: 'They annoy the result and give a reason.',
          reason: 'annoy 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + annoy + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'annoy.q1',
          senseId: 'annoy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「使烦恼」.',
          options: [
            'annoy',
            'annoyance',
            'annoyed'
          ],
          answer: 'annoy',
          explain: 'annoy 对应「使烦恼」。'
        },
        {
          id: 'annoy.q2',
          senseId: 'annoy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annoy?',
          options: [
            '使烦恼',
            '烦恼',
            '无关说法'
          ],
          answer: '使烦恼',
          explain: '按本词条，annoy 是「使烦恼」。'
        },
        {
          id: 'annoy.q3',
          senseId: 'annoy.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「使烦恼」.',
          options: [
            'annoy',
            'annoyance',
            'annoyed'
          ],
          answer: 'annoy',
          explain: '空缺处用 annoy，不要换成相邻词 annoyance。'
        },
        {
          id: 'annoy.q4',
          senseId: 'annoy.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annoy with a neighbour in this list. Which one means 「使烦恼」?',
          options: [
            'annoy',
            'annoyance',
            'annoyed'
          ],
          answer: 'annoy',
          explain: 'annoyance 与 annoyed 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annoyance',
          'annoyed'
        ]
      }
    });

  D('annoyance', {
      etymology: {
        origin: '英语派生：annoy + -ance。名词后缀。整词义为「烦恼；厌烦」。',
        prefix: null,
        root: {
          text: 'annoy',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ance',
          gloss: '名词后缀'
        },
        history: [
          {
            label: 'annoy',
            text: '基础词，先掌握「annoy」。'
          },
          {
            label: 'annoyance',
            text: '英语派生形式，教学义是「烦恼；厌烦」。'
          }
        ],
        formationLogic: '在 annoy 上加 -ance，得到 annoyance。',
        mnemonic: '先记中文「烦恼」，再把英文 annoyance 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an annoyance to make the abstract point concrete.',
          chinese: '这节课用一个「烦恼」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'annoyance.s1',
          en: 'The lecture used an annoyance to make the abstract point concrete.',
          zh: '这节课用一个「烦恼」的例子，把抽象的论点讲具体。',
          structure: 'annoyance / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「烦恼」，对应英文释义：A feeling of being slightly angry or upset; something that causes this feeling.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the annoyance of about the topic.',
          right: 'This annoyance belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 annoyance。',
          rule: '名词 annoyance（烦恼）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'annoyance.q1',
          senseId: 'annoyance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「烦恼」.',
          options: [
            'annoyance',
            'annoyed',
            'annoying'
          ],
          answer: 'annoyance',
          explain: 'annoyance 对应「烦恼」。'
        },
        {
          id: 'annoyance.q2',
          senseId: 'annoyance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annoyance?',
          options: [
            '烦恼',
            '其他义项',
            '恼人的'
          ],
          answer: '烦恼',
          explain: '按本词条，annoyance 是「烦恼」。'
        },
        {
          id: 'annoyance.q3',
          senseId: 'annoyance.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「烦恼」.',
          options: [
            'annoyance',
            'annoyed',
            'annoying'
          ],
          answer: 'annoyance',
          explain: '空缺处用 annoyance，不要换成相邻词 annoyed。'
        },
        {
          id: 'annoyance.q4',
          senseId: 'annoyance.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annoyance with a neighbour in this list. Which one means 「烦恼」?',
          options: [
            'annoyance',
            'annoyed',
            'annoying'
          ],
          answer: 'annoyance',
          explain: 'annoyed 与 annoying 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annoyed',
          'annoying'
        ]
      }
    });

  D('annoyed', {
      etymology: {
        origin: '英语派生：annoy + -ed。形容词后缀，表示已经如此。整词义为「恼怒的；生气的」。',
        prefix: null,
        root: {
          text: 'annoy',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'annoy',
            text: '基础词，先掌握「annoy」。'
          },
          {
            label: 'annoyed',
            text: '英语派生形式，教学义是「恼怒的；生气的」。'
          }
        ],
        formationLogic: '在 annoy 上加 -ed，得到 annoyed。',
        mnemonic: '先记中文「恼怒的」，再把英文 annoyed 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A annoyed result needs a second look before anyone acts on it.',
          chinese: '一个「恼怒的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'annoyed.s1',
          en: 'A annoyed result needs a second look before anyone acts on it.',
          zh: '一个「恼怒的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'annoyed / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「恼怒的」，对应英文释义：Slightly angry because of something that has happened.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very annoyedly surprising to us.',
          right: 'The news was annoyed.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + annoyed。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a annoyed + 名词。'
        }
      ],
      quiz: [
        {
          id: 'annoyed.q1',
          senseId: 'annoyed.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「恼怒的」.',
          options: [
            'annoyed',
            'annoying',
            'annual'
          ],
          answer: 'annoyed',
          explain: 'annoyed 对应「恼怒的」。'
        },
        {
          id: 'annoyed.q2',
          senseId: 'annoyed.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annoyed?',
          options: [
            '恼怒的',
            '恼人的',
            '每年的'
          ],
          answer: '恼怒的',
          explain: '按本词条，annoyed 是「恼怒的」。'
        },
        {
          id: 'annoyed.q3',
          senseId: 'annoyed.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'annoyed',
            'annoying',
            'annual'
          ],
          answer: 'annoyed',
          explain: '空缺处用 annoyed，不要换成相邻词 annoying。'
        },
        {
          id: 'annoyed.q4',
          senseId: 'annoyed.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annoyed with a neighbour in this list. Which one means 「恼怒的」?',
          options: [
            'annoyed',
            'annoying',
            'annual'
          ],
          answer: 'annoyed',
          explain: 'annoying 与 annual 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annoying',
          'annual'
        ]
      }
    });

  D('annoying', {
      etymology: {
        origin: '英语派生：annoy + -ing。形容词或名词后缀。整词义为「恼人的；讨厌的」。',
        prefix: null,
        root: {
          text: 'annoy',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ing',
          gloss: '形容词或名词后缀'
        },
        history: [
          {
            label: 'annoy',
            text: '基础词，先掌握「annoy」。'
          },
          {
            label: 'annoying',
            text: '英语派生形式，教学义是「恼人的；讨厌的」。'
          }
        ],
        formationLogic: '在 annoy 上加 -ing，得到 annoying。',
        mnemonic: '先记中文「恼人的」，再把英文 annoying 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A annoying result needs a second look before anyone acts on it.',
          chinese: '一个「恼人的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'annoying.s1',
          en: 'A annoying result needs a second look before anyone acts on it.',
          zh: '一个「恼人的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'annoying / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「恼人的」，对应英文释义：Making you feel slightly angry or upset.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very annoyingly surprising to us.',
          right: 'The news was annoying.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + annoying。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a annoying + 名词。'
        }
      ],
      quiz: [
        {
          id: 'annoying.q1',
          senseId: 'annoying.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「恼人的」.',
          options: [
            'annoying',
            'annual',
            'annually'
          ],
          answer: 'annoying',
          explain: 'annoying 对应「恼人的」。'
        },
        {
          id: 'annoying.q2',
          senseId: 'annoying.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annoying?',
          options: [
            '恼人的',
            '每年的',
            '每年'
          ],
          answer: '恼人的',
          explain: '按本词条，annoying 是「恼人的」。'
        },
        {
          id: 'annoying.q3',
          senseId: 'annoying.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'annoying',
            'annual',
            'annually'
          ],
          answer: 'annoying',
          explain: '空缺处用 annoying，不要换成相邻词 annual。'
        },
        {
          id: 'annoying.q4',
          senseId: 'annoying.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annoying with a neighbour in this list. Which one means 「恼人的」?',
          options: [
            'annoying',
            'annual',
            'annually'
          ],
          answer: 'annoying',
          explain: 'annual 与 annually 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annual',
          'annually'
        ]
      }
    });

  D('annual', {
      etymology: {
        origin: 'annual 按现成英语词整词记，意思是「每年的；年度的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'annual',
            text: '现代英语：每年的；年度的。'
          }
        ],
        formationLogic: '不硬拆。看到 annual 就想到「每年的」。',
        mnemonic: '先记中文「每年的」，再把英文 annual 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A annual result needs a second look before anyone acts on it.',
          chinese: '一个「每年的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'annual.s1',
          en: 'A annual result needs a second look before anyone acts on it.',
          zh: '一个「每年的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'annual / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「每年的」，对应英文释义：Happening once a year.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very annually surprising to us.',
          right: 'The news was annual.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + annual。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a annual + 名词。'
        }
      ],
      quiz: [
        {
          id: 'annual.q1',
          senseId: 'annual.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「每年的」.',
          options: [
            'annual',
            'annually',
            'annul'
          ],
          answer: 'annual',
          explain: 'annual 对应「每年的」。'
        },
        {
          id: 'annual.q2',
          senseId: 'annual.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annual?',
          options: [
            '每年的',
            '每年',
            '废除'
          ],
          answer: '每年的',
          explain: '按本词条，annual 是「每年的」。'
        },
        {
          id: 'annual.q3',
          senseId: 'annual.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'annual',
            'annually',
            'annul'
          ],
          answer: 'annual',
          explain: '空缺处用 annual，不要换成相邻词 annually。'
        },
        {
          id: 'annual.q4',
          senseId: 'annual.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annual with a neighbour in this list. Which one means 「每年的」?',
          options: [
            'annual',
            'annually',
            'annul'
          ],
          answer: 'annual',
          explain: 'annually 与 annul 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annually',
          'annul'
        ]
      }
    });

  D('annually', {
      etymology: {
        origin: '英语派生：annual + -ly。副词后缀，表示方式。整词义为「每年；一年一度」。',
        prefix: null,
        root: {
          text: 'annual',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'annual',
            text: '基础词，先掌握「每年的」。'
          },
          {
            label: 'annually',
            text: '英语派生形式，教学义是「每年；一年一度」。'
          }
        ],
        formationLogic: '在 annual 上加 -ly，得到 annually。',
        mnemonic: '先记中文「每年」，再把英文 annually 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change annually, so the class could follow each step.',
          chinese: '她「每年」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'annually.s1',
          en: 'She explained the change annually, so the class could follow each step.',
          zh: '她「每年」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'annually / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「每年」，对应英文释义：Once a year or every year.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a annually answer.',
          right: 'She answered annually.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + annually，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'annually.q1',
          senseId: 'annually.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「每年」.',
          options: [
            'annually',
            'annul',
            'anomaly'
          ],
          answer: 'annually',
          explain: 'annually 对应「每年」。'
        },
        {
          id: 'annually.q2',
          senseId: 'annually.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annually?',
          options: [
            '每年',
            '废除',
            '反常事物'
          ],
          answer: '每年',
          explain: '按本词条，annually 是「每年」。'
        },
        {
          id: 'annually.q3',
          senseId: 'annually.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「每年」.',
          options: [
            'annually',
            'annul',
            'anomaly'
          ],
          answer: 'annually',
          explain: '空缺处用 annually，不要换成相邻词 annul。'
        },
        {
          id: 'annually.q4',
          senseId: 'annually.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annually with a neighbour in this list. Which one means 「每年」?',
          options: [
            'annually',
            'annul',
            'anomaly'
          ],
          answer: 'annually',
          explain: 'annul 与 anomaly 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'annul',
          'anomaly'
        ]
      }
    });

  D('annul', {
      etymology: {
        origin: 'annul 按现成英语词整词记，意思是「废除；宣告无效」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'annul',
            text: '现代英语：废除；宣告无效。'
          }
        ],
        formationLogic: '不硬拆。看到 annul 就想到「废除」。',
        mnemonic: '先记中文「废除」，再把英文 annul 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will annul the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（废除）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'annul.s1',
          en: 'The team will annul the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（废除）。',
          structure: 'annul / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「废除」，对应英文释义：To declare something legally invalid or not existing.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They annul about the result without a reason.',
          right: 'They annul the result and give a reason.',
          reason: 'annul 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + annul + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'annul.q1',
          senseId: 'annul.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「废除」.',
          options: [
            'annul',
            'anomaly',
            'anonymity'
          ],
          answer: 'annul',
          explain: 'annul 对应「废除」。'
        },
        {
          id: 'annul.q2',
          senseId: 'annul.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits annul?',
          options: [
            '废除',
            '反常事物',
            '匿名'
          ],
          answer: '废除',
          explain: '按本词条，annul 是「废除」。'
        },
        {
          id: 'annul.q3',
          senseId: 'annul.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「废除」.',
          options: [
            'annul',
            'anomaly',
            'anonymity'
          ],
          answer: 'annul',
          explain: '空缺处用 annul，不要换成相邻词 anomaly。'
        },
        {
          id: 'annul.q4',
          senseId: 'annul.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse annul with a neighbour in this list. Which one means 「废除」?',
          options: [
            'annul',
            'anomaly',
            'anonymity'
          ],
          answer: 'annul',
          explain: 'anomaly 与 anonymity 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anomaly',
          'anonymity'
        ]
      }
    });

  D('anomaly', {
      etymology: {
        origin: 'anomaly 按现成英语词整词记，意思是「反常事物；异常」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anomaly',
            text: '现代英语：反常事物；异常。'
          }
        ],
        formationLogic: '不硬拆。看到 anomaly 就想到「反常事物」。',
        mnemonic: '先记中文「反常事物」，再把英文 anomaly 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anomaly to make the abstract point concrete.',
          chinese: '这节课用一个「反常事物」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anomaly.s1',
          en: 'The lecture used an anomaly to make the abstract point concrete.',
          zh: '这节课用一个「反常事物」的例子，把抽象的论点讲具体。',
          structure: 'anomaly / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「反常事物」，对应英文释义：Something that deviates from what is standard, normal, or expected.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anomaly of about the topic.',
          right: 'This anomaly belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anomaly。',
          rule: '名词 anomaly（反常事物）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anomaly.q1',
          senseId: 'anomaly.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「反常事物」.',
          options: [
            'anomaly',
            'anonymity',
            'anonymous'
          ],
          answer: 'anomaly',
          explain: 'anomaly 对应「反常事物」。'
        },
        {
          id: 'anomaly.q2',
          senseId: 'anomaly.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anomaly?',
          options: [
            '反常事物',
            '匿名',
            '匿名的'
          ],
          answer: '反常事物',
          explain: '按本词条，anomaly 是「反常事物」。'
        },
        {
          id: 'anomaly.q3',
          senseId: 'anomaly.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「反常事物」.',
          options: [
            'anomaly',
            'anonymity',
            'anonymous'
          ],
          answer: 'anomaly',
          explain: '空缺处用 anomaly，不要换成相邻词 anonymity。'
        },
        {
          id: 'anomaly.q4',
          senseId: 'anomaly.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anomaly with a neighbour in this list. Which one means 「反常事物」?',
          options: [
            'anomaly',
            'anonymity',
            'anonymous'
          ],
          answer: 'anomaly',
          explain: 'anonymity 与 anonymous 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anonymity',
          'anonymous'
        ]
      }
    });

  D('anonymity', {
      etymology: {
        origin: '英语里可以看见前缀 an-（没有）。教学上整词记为「匿名；无名」，不补未核实的古典词干拼写。',
        prefix: {
          text: 'an-',
          gloss: '没有'
        },
        root: null,
        suffix: null,
        history: [
          {
            label: 'an-',
            text: '没有'
          },
          {
            label: 'anonymity',
            text: '现代英语词义：匿名；无名。'
          }
        ],
        formationLogic: '抓住 an- 的意思，再整词记忆 anonymity。',
        mnemonic: '先记中文「匿名」，再把英文 anonymity 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anonymity to make the abstract point concrete.',
          chinese: '这节课用一个「匿名」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anonymity.s1',
          en: 'The lecture used an anonymity to make the abstract point concrete.',
          zh: '这节课用一个「匿名」的例子，把抽象的论点讲具体。',
          structure: 'anonymity / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「匿名」，对应英文释义：The state of being unknown by name or having your name kept secret.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anonymity of about the topic.',
          right: 'This anonymity belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anonymity。',
          rule: '名词 anonymity（匿名）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anonymity.q1',
          senseId: 'anonymity.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「匿名」.',
          options: [
            'anonymity',
            'anonymous',
            'anonymously'
          ],
          answer: 'anonymity',
          explain: 'anonymity 对应「匿名」。'
        },
        {
          id: 'anonymity.q2',
          senseId: 'anonymity.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anonymity?',
          options: [
            '匿名',
            '匿名的',
            '匿名地'
          ],
          answer: '匿名',
          explain: '按本词条，anonymity 是「匿名」。'
        },
        {
          id: 'anonymity.q3',
          senseId: 'anonymity.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「匿名」.',
          options: [
            'anonymity',
            'anonymous',
            'anonymously'
          ],
          answer: 'anonymity',
          explain: '空缺处用 anonymity，不要换成相邻词 anonymous。'
        },
        {
          id: 'anonymity.q4',
          senseId: 'anonymity.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anonymity with a neighbour in this list. Which one means 「匿名」?',
          options: [
            'anonymity',
            'anonymous',
            'anonymously'
          ],
          answer: 'anonymity',
          explain: 'anonymous 与 anonymously 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anonymous',
          'anonymously'
        ]
      }
    });

  D('anonymous', {
      etymology: {
        origin: '英语里可以看见前缀 an-（没有）。教学上整词记为「匿名的；无名的」，不补未核实的古典词干拼写。',
        prefix: {
          text: 'an-',
          gloss: '没有'
        },
        root: null,
        suffix: null,
        history: [
          {
            label: 'an-',
            text: '没有'
          },
          {
            label: 'anonymous',
            text: '现代英语词义：匿名的；无名的。'
          }
        ],
        formationLogic: '抓住 an- 的意思，再整词记忆 anonymous。',
        mnemonic: '先记中文「匿名的」，再把英文 anonymous 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A anonymous result needs a second look before anyone acts on it.',
          chinese: '一个「匿名的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'anonymous.s1',
          en: 'A anonymous result needs a second look before anyone acts on it.',
          zh: '一个「匿名的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'anonymous / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「匿名的」，对应英文释义：With a name that is not known or not given.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very anonymously surprising to us.',
          right: 'The news was anonymous.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + anonymous。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a anonymous + 名词。'
        }
      ],
      quiz: [
        {
          id: 'anonymous.q1',
          senseId: 'anonymous.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「匿名的」.',
          options: [
            'anonymous',
            'anonymously',
            'another'
          ],
          answer: 'anonymous',
          explain: 'anonymous 对应「匿名的」。'
        },
        {
          id: 'anonymous.q2',
          senseId: 'anonymous.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anonymous?',
          options: [
            '匿名的',
            '匿名地',
            '另一个'
          ],
          answer: '匿名的',
          explain: '按本词条，anonymous 是「匿名的」。'
        },
        {
          id: 'anonymous.q3',
          senseId: 'anonymous.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'anonymous',
            'anonymously',
            'another'
          ],
          answer: 'anonymous',
          explain: '空缺处用 anonymous，不要换成相邻词 anonymously。'
        },
        {
          id: 'anonymous.q4',
          senseId: 'anonymous.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anonymous with a neighbour in this list. Which one means 「匿名的」?',
          options: [
            'anonymous',
            'anonymously',
            'another'
          ],
          answer: 'anonymous',
          explain: 'anonymously 与 another 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anonymously',
          'another'
        ]
      }
    });

  D('anonymously', {
      etymology: {
        origin: '英语派生：anonymous + -ly。副词后缀，表示方式。整词义为「匿名地」。',
        prefix: {
          text: 'an-',
          gloss: '没有'
        },
        root: {
          text: 'anonymous',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'anonymous',
            text: '基础词，先掌握「匿名的」。'
          },
          {
            label: 'anonymously',
            text: '英语派生形式，教学义是「匿名地」。'
          }
        ],
        formationLogic: '在 anonymous 上加 -ly，得到 anonymously。',
        mnemonic: '先记中文「匿名地」，再把英文 anonymously 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change anonymously, so the class could follow each step.',
          chinese: '她「匿名地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anonymously.s1',
          en: 'She explained the change anonymously, so the class could follow each step.',
          zh: '她「匿名地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'anonymously / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「匿名地」，对应英文释义：Without revealing your name.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a anonymously answer.',
          right: 'She answered anonymously.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + anonymously，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'anonymously.q1',
          senseId: 'anonymously.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「匿名地」.',
          options: [
            'anonymously',
            'another',
            'answer'
          ],
          answer: 'anonymously',
          explain: 'anonymously 对应「匿名地」。'
        },
        {
          id: 'anonymously.q2',
          senseId: 'anonymously.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anonymously?',
          options: [
            '匿名地',
            '另一个',
            '无关说法'
          ],
          answer: '匿名地',
          explain: '按本词条，anonymously 是「匿名地」。'
        },
        {
          id: 'anonymously.q3',
          senseId: 'anonymously.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「匿名地」.',
          options: [
            'anonymously',
            'another',
            'answer'
          ],
          answer: 'anonymously',
          explain: '空缺处用 anonymously，不要换成相邻词 another。'
        },
        {
          id: 'anonymously.q4',
          senseId: 'anonymously.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anonymously with a neighbour in this list. Which one means 「匿名地」?',
          options: [
            'anonymously',
            'another',
            'answer'
          ],
          answer: 'anonymously',
          explain: 'another 与 answer 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'another',
          'answer'
        ]
      }
    });

  D('another', {
      etymology: {
        origin: '英语派生：与 other（另外的）同族。教学义是「另一个；再一个」。',
        prefix: null,
        root: {
          text: 'other',
          gloss: '另外的'
        },
        suffix: null,
        history: [
          {
            label: 'other',
            text: '另外的'
          },
          {
            label: 'another',
            text: '现代英语：另一个；再一个。'
          }
        ],
        formationLogic: '先认 other，再记 another 多出来的部分。',
        mnemonic: '先记中文「另一个」，再把英文 another 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Learners meet another in almost every paragraph, so the grammar note is worth rereading.',
          chinese: '学习者几乎每段都会遇到 another（另一个），语法说明值得再读一遍。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'another.s1',
          en: 'Learners meet another in almost every paragraph, so the grammar note is worth rereading.',
          zh: '学习者几乎每段都会遇到 another（另一个），语法说明值得再读一遍。',
          structure: 'another / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「另一个」，对应英文释义：One more; a different one.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the another of about the topic.',
          right: 'This another belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 another。',
          rule: '名词 another（另一个）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'another.q1',
          senseId: 'another.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「另一个」.',
          options: [
            'another',
            'answer',
            'answerability'
          ],
          answer: 'another',
          explain: 'another 对应「另一个」。'
        },
        {
          id: 'another.q2',
          senseId: 'another.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits another?',
          options: [
            '另一个',
            '其他义项',
            '负责任'
          ],
          answer: '另一个',
          explain: '按本词条，another 是「另一个」。'
        },
        {
          id: 'another.q3',
          senseId: 'another.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「另一个」.',
          options: [
            'another',
            'answer',
            'answerability'
          ],
          answer: 'another',
          explain: '空缺处用 another，不要换成相邻词 answer。'
        },
        {
          id: 'another.q4',
          senseId: 'another.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse another with a neighbour in this list. Which one means 「另一个」?',
          options: [
            'another',
            'answer',
            'answerability'
          ],
          answer: 'another',
          explain: 'answer 与 answerability 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'answer',
          'answerability'
        ]
      }
    });

  D('answer', {
      etymology: {
        origin: 'answer 按现成英语词整词记，意思是「回答；答案；接听」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'answer',
            text: '现代英语：回答；答案；接听。'
          }
        ],
        formationLogic: '不硬拆。看到 answer 就想到「回答」。',
        mnemonic: '先记中文「回答」，再把英文 answer 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an answer to make the abstract point concrete.',
          chinese: '这节课用一个「回答」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'answer.s1',
          en: 'The lecture used an answer to make the abstract point concrete.',
          zh: '这节课用一个「回答」的例子，把抽象的论点讲具体。',
          structure: 'answer / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「回答」，对应英文释义：Something you say or write back; to reply; to pick up the phone.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the answer of about the topic.',
          right: 'This answer belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 answer。',
          rule: '名词 answer（回答）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'answer.q1',
          senseId: 'answer.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「回答」.',
          options: [
            'answer',
            'answerability',
            'ant'
          ],
          answer: 'answer',
          explain: 'answer 对应「回答」。'
        },
        {
          id: 'answer.q2',
          senseId: 'answer.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits answer?',
          options: [
            '回答',
            '负责任',
            '无关说法'
          ],
          answer: '回答',
          explain: '按本词条，answer 是「回答」。'
        },
        {
          id: 'answer.q3',
          senseId: 'answer.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「回答」.',
          options: [
            'answer',
            'answerability',
            'ant'
          ],
          answer: 'answer',
          explain: '空缺处用 answer，不要换成相邻词 answerability。'
        },
        {
          id: 'answer.q4',
          senseId: 'answer.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse answer with a neighbour in this list. Which one means 「回答」?',
          options: [
            'answer',
            'answerability',
            'ant'
          ],
          answer: 'answer',
          explain: 'answerability 与 ant 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'answerability',
          'ant'
        ]
      }
    });

  D('answerability', {
      etymology: {
        origin: 'answerability 按现成英语词整词记，意思是「负责任；有责任说明」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'answerability',
            text: '现代英语：负责任；有责任说明。'
          }
        ],
        formationLogic: '不硬拆。看到 answerability 就想到「负责任」。',
        mnemonic: '先记中文「负责任」，再把英文 answerability 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an answerability to make the abstract point concrete.',
          chinese: '这节课用一个「负责任」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'answerability.s1',
          en: 'The lecture used an answerability to make the abstract point concrete.',
          zh: '这节课用一个「负责任」的例子，把抽象的论点讲具体。',
          structure: 'answerability / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「负责任」，对应英文释义：The duty of being responsible for what you do and having to explain your actions.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the answerability of about the topic.',
          right: 'This answerability belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 answerability。',
          rule: '名词 answerability（负责任）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'answerability.q1',
          senseId: 'answerability.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「负责任」.',
          options: [
            'answerability',
            'ant',
            'antagonism'
          ],
          answer: 'answerability',
          explain: 'answerability 对应「负责任」。'
        },
        {
          id: 'answerability.q2',
          senseId: 'answerability.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits answerability?',
          options: [
            '负责任',
            '其他义项',
            '敌对'
          ],
          answer: '负责任',
          explain: '按本词条，answerability 是「负责任」。'
        },
        {
          id: 'answerability.q3',
          senseId: 'answerability.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「负责任」.',
          options: [
            'answerability',
            'ant',
            'antagonism'
          ],
          answer: 'answerability',
          explain: '空缺处用 answerability，不要换成相邻词 ant。'
        },
        {
          id: 'answerability.q4',
          senseId: 'answerability.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse answerability with a neighbour in this list. Which one means 「负责任」?',
          options: [
            'answerability',
            'ant',
            'antagonism'
          ],
          answer: 'answerability',
          explain: 'ant 与 antagonism 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ant',
          'antagonism'
        ]
      }
    });

  D('ant', {
      etymology: {
        origin: 'ant 按现成英语词整词记，意思是「蚂蚁」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ant',
            text: '现代英语：蚂蚁。'
          }
        ],
        formationLogic: '不硬拆。看到 ant 就想到「蚂蚁」。',
        mnemonic: '先记中文「蚂蚁」，再把英文 ant 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an ant to make the abstract point concrete.',
          chinese: '这节课用一个「蚂蚁」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ant.s1',
          en: 'The lecture used an ant to make the abstract point concrete.',
          zh: '这节课用一个「蚂蚁」的例子，把抽象的论点讲具体。',
          structure: 'ant / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「蚂蚁」，对应英文释义：A small insect that lives in organized groups.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ant of about the topic.',
          right: 'This ant belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ant。',
          rule: '名词 ant（蚂蚁）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ant.q1',
          senseId: 'ant.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「蚂蚁」.',
          options: [
            'ant',
            'antagonism',
            'antagonist'
          ],
          answer: 'ant',
          explain: 'ant 对应「蚂蚁」。'
        },
        {
          id: 'ant.q2',
          senseId: 'ant.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ant?',
          options: [
            '蚂蚁',
            '敌对',
            '无关说法'
          ],
          answer: '蚂蚁',
          explain: '按本词条，ant 是「蚂蚁」。'
        },
        {
          id: 'ant.q3',
          senseId: 'ant.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「蚂蚁」.',
          options: [
            'ant',
            'antagonism',
            'antagonist'
          ],
          answer: 'ant',
          explain: '空缺处用 ant，不要换成相邻词 antagonism。'
        },
        {
          id: 'ant.q4',
          senseId: 'ant.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ant with a neighbour in this list. Which one means 「蚂蚁」?',
          options: [
            'ant',
            'antagonism',
            'antagonist'
          ],
          answer: 'ant',
          explain: 'antagonism 与 antagonist 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antagonism',
          'antagonist'
        ]
      }
    });

  D('antagonism', {
      etymology: {
        origin: 'antagonism 按现成英语词整词记，意思是「敌对；对抗情绪」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antagonism',
            text: '现代英语：敌对；对抗情绪。'
          }
        ],
        formationLogic: '不硬拆。看到 antagonism 就想到「敌对」。',
        mnemonic: '先记中文「敌对」，再把英文 antagonism 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antagonism to make the abstract point concrete.',
          chinese: '这节课用一个「敌对」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antagonism.s1',
          en: 'The lecture used an antagonism to make the abstract point concrete.',
          zh: '这节课用一个「敌对」的例子，把抽象的论点讲具体。',
          structure: 'antagonism / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「敌对」，对应英文释义：Strong dislike or opposition between people.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antagonism of about the topic.',
          right: 'This antagonism belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antagonism。',
          rule: '名词 antagonism（敌对）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antagonism.q1',
          senseId: 'antagonism.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「敌对」.',
          options: [
            'antagonism',
            'antagonist',
            'antagonistic'
          ],
          answer: 'antagonism',
          explain: 'antagonism 对应「敌对」。'
        },
        {
          id: 'antagonism.q2',
          senseId: 'antagonism.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antagonism?',
          options: [
            '敌对',
            '其他义项',
            '敌对的'
          ],
          answer: '敌对',
          explain: '按本词条，antagonism 是「敌对」。'
        },
        {
          id: 'antagonism.q3',
          senseId: 'antagonism.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「敌对」.',
          options: [
            'antagonism',
            'antagonist',
            'antagonistic'
          ],
          answer: 'antagonism',
          explain: '空缺处用 antagonism，不要换成相邻词 antagonist。'
        },
        {
          id: 'antagonism.q4',
          senseId: 'antagonism.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antagonism with a neighbour in this list. Which one means 「敌对」?',
          options: [
            'antagonism',
            'antagonist',
            'antagonistic'
          ],
          answer: 'antagonism',
          explain: 'antagonist 与 antagonistic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antagonist',
          'antagonistic'
        ]
      }
    });

  D('antagonist', {
      etymology: {
        origin: 'antagonist 按现成英语词整词记，意思是「对手；敌手；反派」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antagonist',
            text: '现代英语：对手；敌手；反派。'
          }
        ],
        formationLogic: '不硬拆。看到 antagonist 就想到「对手」。',
        mnemonic: '先记中文「对手」，再把英文 antagonist 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antagonist to make the abstract point concrete.',
          chinese: '这节课用一个「对手」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antagonist.s1',
          en: 'The lecture used an antagonist to make the abstract point concrete.',
          zh: '这节课用一个「对手」的例子，把抽象的论点讲具体。',
          structure: 'antagonist / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「对手」，对应英文释义：Someone who opposes another person or group; the main opponent in a story.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antagonist of about the topic.',
          right: 'This antagonist belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antagonist。',
          rule: '名词 antagonist（对手）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antagonist.q1',
          senseId: 'antagonist.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「对手」.',
          options: [
            'antagonist',
            'antagonistic',
            'antagonize'
          ],
          answer: 'antagonist',
          explain: 'antagonist 对应「对手」。'
        },
        {
          id: 'antagonist.q2',
          senseId: 'antagonist.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antagonist?',
          options: [
            '对手',
            '敌对的',
            '使敌对'
          ],
          answer: '对手',
          explain: '按本词条，antagonist 是「对手」。'
        },
        {
          id: 'antagonist.q3',
          senseId: 'antagonist.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「对手」.',
          options: [
            'antagonist',
            'antagonistic',
            'antagonize'
          ],
          answer: 'antagonist',
          explain: '空缺处用 antagonist，不要换成相邻词 antagonistic。'
        },
        {
          id: 'antagonist.q4',
          senseId: 'antagonist.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antagonist with a neighbour in this list. Which one means 「对手」?',
          options: [
            'antagonist',
            'antagonistic',
            'antagonize'
          ],
          answer: 'antagonist',
          explain: 'antagonistic 与 antagonize 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antagonistic',
          'antagonize'
        ]
      }
    });

  D('antagonistic', {
      etymology: {
        origin: '英语派生：antagonist + -ic。形容词后缀。整词义为「敌对的；对抗的」。',
        prefix: null,
        root: {
          text: 'antagonist',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ic',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'antagonist',
            text: '基础词，先掌握「antagonist」。'
          },
          {
            label: 'antagonistic',
            text: '英语派生形式，教学义是「敌对的；对抗的」。'
          }
        ],
        formationLogic: '在 antagonist 上加 -ic，得到 antagonistic。',
        mnemonic: '先记中文「敌对的」，再把英文 antagonistic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A antagonistic result needs a second look before anyone acts on it.',
          chinese: '一个「敌对的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'antagonistic.s1',
          en: 'A antagonistic result needs a second look before anyone acts on it.',
          zh: '一个「敌对的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'antagonistic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「敌对的」，对应英文释义：Showing or feeling active opposition and hostility towards someone.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very antagonisticly surprising to us.',
          right: 'The news was antagonistic.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + antagonistic。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a antagonistic + 名词。'
        }
      ],
      quiz: [
        {
          id: 'antagonistic.q1',
          senseId: 'antagonistic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「敌对的」.',
          options: [
            'antagonistic',
            'antagonize',
            'antenna'
          ],
          answer: 'antagonistic',
          explain: 'antagonistic 对应「敌对的」。'
        },
        {
          id: 'antagonistic.q2',
          senseId: 'antagonistic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antagonistic?',
          options: [
            '敌对的',
            '使敌对',
            '天线'
          ],
          answer: '敌对的',
          explain: '按本词条，antagonistic 是「敌对的」。'
        },
        {
          id: 'antagonistic.q3',
          senseId: 'antagonistic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'antagonistic',
            'antagonize',
            'antenna'
          ],
          answer: 'antagonistic',
          explain: '空缺处用 antagonistic，不要换成相邻词 antagonize。'
        },
        {
          id: 'antagonistic.q4',
          senseId: 'antagonistic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antagonistic with a neighbour in this list. Which one means 「敌对的」?',
          options: [
            'antagonistic',
            'antagonize',
            'antenna'
          ],
          answer: 'antagonistic',
          explain: 'antagonize 与 antenna 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antagonize',
          'antenna'
        ]
      }
    });

  D('antagonize', {
      etymology: {
        origin: 'antagonize 按现成英语词整词记，意思是「使敌对；激怒」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antagonize',
            text: '现代英语：使敌对；激怒。'
          }
        ],
        formationLogic: '不硬拆。看到 antagonize 就想到「使敌对」。',
        mnemonic: '先记中文「使敌对」，再把英文 antagonize 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will antagonize the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（使敌对）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'antagonize.s1',
          en: 'The team will antagonize the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（使敌对）。',
          structure: 'antagonize / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「使敌对」，对应英文释义：To cause someone to become angry, hostile, or opposed to you.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They antagonize about the result without a reason.',
          right: 'They antagonize the result and give a reason.',
          reason: 'antagonize 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + antagonize + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'antagonize.q1',
          senseId: 'antagonize.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「使敌对」.',
          options: [
            'antagonize',
            'antenna',
            'antennae'
          ],
          answer: 'antagonize',
          explain: 'antagonize 对应「使敌对」。'
        },
        {
          id: 'antagonize.q2',
          senseId: 'antagonize.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antagonize?',
          options: [
            '使敌对',
            '天线',
            '触角'
          ],
          answer: '使敌对',
          explain: '按本词条，antagonize 是「使敌对」。'
        },
        {
          id: 'antagonize.q3',
          senseId: 'antagonize.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「使敌对」.',
          options: [
            'antagonize',
            'antenna',
            'antennae'
          ],
          answer: 'antagonize',
          explain: '空缺处用 antagonize，不要换成相邻词 antenna。'
        },
        {
          id: 'antagonize.q4',
          senseId: 'antagonize.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antagonize with a neighbour in this list. Which one means 「使敌对」?',
          options: [
            'antagonize',
            'antenna',
            'antennae'
          ],
          answer: 'antagonize',
          explain: 'antenna 与 antennae 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antenna',
          'antennae'
        ]
      }
    });

  D('antenna', {
      etymology: {
        origin: 'antenna 按现成英语词整词记，意思是「天线；触角」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antenna',
            text: '现代英语：天线；触角。'
          }
        ],
        formationLogic: '不硬拆。看到 antenna 就想到「天线」。',
        mnemonic: '先记中文「天线」，再把英文 antenna 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antenna to make the abstract point concrete.',
          chinese: '这节课用一个「天线」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antenna.s1',
          en: 'The lecture used an antenna to make the abstract point concrete.',
          zh: '这节课用一个「天线」的例子，把抽象的论点讲具体。',
          structure: 'antenna / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「天线」，对应英文释义：A device for sending or receiving radio signals; an insect\'s feeler.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antenna of about the topic.',
          right: 'This antenna belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antenna。',
          rule: '名词 antenna（天线）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antenna.q1',
          senseId: 'antenna.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「天线」.',
          options: [
            'antenna',
            'antennae',
            'anthology'
          ],
          answer: 'antenna',
          explain: 'antenna 对应「天线」。'
        },
        {
          id: 'antenna.q2',
          senseId: 'antenna.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antenna?',
          options: [
            '天线',
            '触角',
            '选集'
          ],
          answer: '天线',
          explain: '按本词条，antenna 是「天线」。'
        },
        {
          id: 'antenna.q3',
          senseId: 'antenna.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「天线」.',
          options: [
            'antenna',
            'antennae',
            'anthology'
          ],
          answer: 'antenna',
          explain: '空缺处用 antenna，不要换成相邻词 antennae。'
        },
        {
          id: 'antenna.q4',
          senseId: 'antenna.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antenna with a neighbour in this list. Which one means 「天线」?',
          options: [
            'antenna',
            'antennae',
            'anthology'
          ],
          answer: 'antenna',
          explain: 'antennae 与 anthology 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antennae',
          'anthology'
        ]
      }
    });

  D('antennae', {
      etymology: {
        origin: 'antennae 按现成英语词整词记，意思是「触角；触须（复数）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antennae',
            text: '现代英语：触角；触须（复数）。'
          }
        ],
        formationLogic: '不硬拆。看到 antennae 就想到「触角」。',
        mnemonic: '先记中文「触角」，再把英文 antennae 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The beetle uses its antennae to test the air.',
          chinese: '甲虫用触角试探空气。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antennae.s1',
          en: 'The beetle uses its antennae to test the air.',
          zh: '甲虫用触角试探空气。',
          structure: 'antennae / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「触角」，对应英文释义：The pair of long thin feelers on the head of an insect or other small creature.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antennae of about the topic.',
          right: 'This antennae belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antennae。',
          rule: '名词 antennae（触角）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antennae.q1',
          senseId: 'antennae.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「触角」.',
          options: [
            'antennae',
            'anthology',
            'antibiotic'
          ],
          answer: 'antennae',
          explain: 'antennae 对应「触角」。'
        },
        {
          id: 'antennae.q2',
          senseId: 'antennae.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antennae?',
          options: [
            '触角',
            '选集',
            '抗生素'
          ],
          answer: '触角',
          explain: '按本词条，antennae 是「触角」。'
        },
        {
          id: 'antennae.q3',
          senseId: 'antennae.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「触角」.',
          options: [
            'antennae',
            'anthology',
            'antibiotic'
          ],
          answer: 'antennae',
          explain: '空缺处用 antennae，不要换成相邻词 anthology。'
        },
        {
          id: 'antennae.q4',
          senseId: 'antennae.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antennae with a neighbour in this list. Which one means 「触角」?',
          options: [
            'antennae',
            'anthology',
            'antibiotic'
          ],
          answer: 'antennae',
          explain: 'anthology 与 antibiotic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anthology',
          'antibiotic'
        ]
      }
    });

  D('anthology', {
      etymology: {
        origin: 'anthology 按现成英语词整词记，意思是「选集；文集」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anthology',
            text: '现代英语：选集；文集。'
          }
        ],
        formationLogic: '不硬拆。看到 anthology 就想到「选集」。',
        mnemonic: '先记中文「选集」，再把英文 anthology 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anthology to make the abstract point concrete.',
          chinese: '这节课用一个「选集」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anthology.s1',
          en: 'The lecture used an anthology to make the abstract point concrete.',
          zh: '这节课用一个「选集」的例子，把抽象的论点讲具体。',
          structure: 'anthology / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「选集」，对应英文释义：A collection of poems, stories, or songs by different authors, or any collection of good pieces.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anthology of about the topic.',
          right: 'This anthology belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anthology。',
          rule: '名词 anthology（选集）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anthology.q1',
          senseId: 'anthology.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「选集」.',
          options: [
            'anthology',
            'antibiotic',
            'antibiotics'
          ],
          answer: 'anthology',
          explain: 'anthology 对应「选集」。'
        },
        {
          id: 'anthology.q2',
          senseId: 'anthology.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anthology?',
          options: [
            '选集',
            '抗生素',
            '抗生素（复数形式）'
          ],
          answer: '选集',
          explain: '按本词条，anthology 是「选集」。'
        },
        {
          id: 'anthology.q3',
          senseId: 'anthology.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「选集」.',
          options: [
            'anthology',
            'antibiotic',
            'antibiotics'
          ],
          answer: 'anthology',
          explain: '空缺处用 anthology，不要换成相邻词 antibiotic。'
        },
        {
          id: 'anthology.q4',
          senseId: 'anthology.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anthology with a neighbour in this list. Which one means 「选集」?',
          options: [
            'anthology',
            'antibiotic',
            'antibiotics'
          ],
          answer: 'anthology',
          explain: 'antibiotic 与 antibiotics 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antibiotic',
          'antibiotics'
        ]
      }
    });

  D('antibiotic', {
      etymology: {
        origin: '英语里可以看见前缀 anti-（对抗、防止）。教学上整词记为「抗生素」，不补未核实的古典词干拼写。',
        prefix: {
          text: 'anti-',
          gloss: '对抗、防止'
        },
        root: null,
        suffix: null,
        history: [
          {
            label: 'anti-',
            text: '对抗、防止'
          },
          {
            label: 'antibiotic',
            text: '现代英语词义：抗生素。'
          }
        ],
        formationLogic: '抓住 anti- 的意思，再整词记忆 antibiotic。',
        mnemonic: '先记中文「抗生素」，再把英文 antibiotic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antibiotic to make the abstract point concrete.',
          chinese: '这节课用一个「抗生素」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antibiotic.s1',
          en: 'The lecture used an antibiotic to make the abstract point concrete.',
          zh: '这节课用一个「抗生素」的例子，把抽象的论点讲具体。',
          structure: 'antibiotic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「抗生素」，对应英文释义：A medicine that kills bacteria.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antibiotic of about the topic.',
          right: 'This antibiotic belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antibiotic。',
          rule: '名词 antibiotic（抗生素）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antibiotic.q1',
          senseId: 'antibiotic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「抗生素」.',
          options: [
            'antibiotic',
            'antibiotics',
            'anticipate'
          ],
          answer: 'antibiotic',
          explain: 'antibiotic 对应「抗生素」。'
        },
        {
          id: 'antibiotic.q2',
          senseId: 'antibiotic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antibiotic?',
          options: [
            '抗生素',
            '抗生素（复数形式）',
            '无关说法'
          ],
          answer: '抗生素',
          explain: '按本词条，antibiotic 是「抗生素」。'
        },
        {
          id: 'antibiotic.q3',
          senseId: 'antibiotic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「抗生素」.',
          options: [
            'antibiotic',
            'antibiotics',
            'anticipate'
          ],
          answer: 'antibiotic',
          explain: '空缺处用 antibiotic，不要换成相邻词 antibiotics。'
        },
        {
          id: 'antibiotic.q4',
          senseId: 'antibiotic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antibiotic with a neighbour in this list. Which one means 「抗生素」?',
          options: [
            'antibiotic',
            'antibiotics',
            'anticipate'
          ],
          answer: 'antibiotic',
          explain: 'antibiotics 与 anticipate 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antibiotics',
          'anticipate'
        ]
      }
    });

  D('antibiotics', {
      etymology: {
        origin: '英语派生：antibiotic + -s。复数或动词第三人称。整词义为「抗生素（复数形式）」。',
        prefix: {
          text: 'anti-',
          gloss: '对抗、防止'
        },
        root: {
          text: 'antibiotic',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-s',
          gloss: '复数或动词第三人称'
        },
        history: [
          {
            label: 'antibiotic',
            text: '基础词，先掌握「抗生素」。'
          },
          {
            label: 'antibiotics',
            text: '英语派生形式，教学义是「抗生素（复数形式）」。'
          }
        ],
        formationLogic: '在 antibiotic 上加 -s，得到 antibiotics。',
        mnemonic: '先记中文「抗生素（复数形式）」，再把英文 antibiotics 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Antibiotics do not cure an illness caused by a virus.',
          chinese: '抗生素治不好病毒引起的病。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antibiotics.s1',
          en: 'Antibiotics do not cure an illness caused by a virus.',
          zh: '抗生素治不好病毒引起的病。',
          structure: 'antibiotics / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「抗生素（复数形式）」，对应英文释义：Medicines that kill bacteria or stop them from growing, used to treat infections.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antibiotics of about the topic.',
          right: 'This antibiotics belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antibiotics。',
          rule: '名词 antibiotics（抗生素（复数形式））前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antibiotics.q1',
          senseId: 'antibiotics.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「抗生素（复数形式）」.',
          options: [
            'antibiotics',
            'anticipate',
            'anticipation'
          ],
          answer: 'antibiotics',
          explain: 'antibiotics 对应「抗生素（复数形式）」。'
        },
        {
          id: 'antibiotics.q2',
          senseId: 'antibiotics.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antibiotics?',
          options: [
            '抗生素（复数形式）',
            '其他义项',
            '预期'
          ],
          answer: '抗生素（复数形式）',
          explain: '按本词条，antibiotics 是「抗生素（复数形式）」。'
        },
        {
          id: 'antibiotics.q3',
          senseId: 'antibiotics.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「抗生素（复数形式）」.',
          options: [
            'antibiotics',
            'anticipate',
            'anticipation'
          ],
          answer: 'antibiotics',
          explain: '空缺处用 antibiotics，不要换成相邻词 anticipate。'
        },
        {
          id: 'antibiotics.q4',
          senseId: 'antibiotics.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antibiotics with a neighbour in this list. Which one means 「抗生素（复数形式）」?',
          options: [
            'antibiotics',
            'anticipate',
            'anticipation'
          ],
          answer: 'antibiotics',
          explain: 'anticipate 与 anticipation 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anticipate',
          'anticipation'
        ]
      }
    });

  D('anticipate', {
      etymology: {
        origin: 'anticipate 按现成英语词整词记，意思是「预期；预料；抢先」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anticipate',
            text: '现代英语：预期；预料；抢先。'
          }
        ],
        formationLogic: '不硬拆。看到 anticipate 就想到「预期」。',
        mnemonic: '先记中文「预期」，再把英文 anticipate 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will anticipate the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（预期）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'anticipate.s1',
          en: 'The team will anticipate the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（预期）。',
          structure: 'anticipate / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「预期」，对应英文释义：To expect something to happen; to act before others.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They anticipate about the result without a reason.',
          right: 'They anticipate the result and give a reason.',
          reason: 'anticipate 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + anticipate + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'anticipate.q1',
          senseId: 'anticipate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「预期」.',
          options: [
            'anticipate',
            'anticipation',
            'antique'
          ],
          answer: 'anticipate',
          explain: 'anticipate 对应「预期」。'
        },
        {
          id: 'anticipate.q2',
          senseId: 'anticipate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anticipate?',
          options: [
            '预期',
            '反方向',
            '无关说法'
          ],
          answer: '预期',
          explain: '按本词条，anticipate 是「预期」。'
        },
        {
          id: 'anticipate.q3',
          senseId: 'anticipate.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「预期」.',
          options: [
            'anticipate',
            'anticipation',
            'antique'
          ],
          answer: 'anticipate',
          explain: '空缺处用 anticipate，不要换成相邻词 anticipation。'
        },
        {
          id: 'anticipate.q4',
          senseId: 'anticipate.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anticipate with a neighbour in this list. Which one means 「预期」?',
          options: [
            'anticipate',
            'anticipation',
            'antique'
          ],
          answer: 'anticipate',
          explain: 'anticipation 与 antique 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anticipation',
          'antique'
        ]
      }
    });

  D('anticipation', {
      etymology: {
        origin: 'anticipation 按现成英语词整词记，意思是「预期；期待」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anticipation',
            text: '现代英语：预期；期待。'
          }
        ],
        formationLogic: '不硬拆。看到 anticipation 就想到「预期」。',
        mnemonic: '先记中文「预期」，再把英文 anticipation 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anticipation to make the abstract point concrete.',
          chinese: '这节课用一个「预期」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anticipation.s1',
          en: 'The lecture used an anticipation to make the abstract point concrete.',
          zh: '这节课用一个「预期」的例子，把抽象的论点讲具体。',
          structure: 'anticipation / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「预期」，对应英文释义：The act of expecting or looking forward to something happening.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anticipation of about the topic.',
          right: 'This anticipation belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anticipation。',
          rule: '名词 anticipation（预期）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anticipation.q1',
          senseId: 'anticipation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「预期」.',
          options: [
            'anticipation',
            'antique',
            'antler'
          ],
          answer: 'anticipation',
          explain: 'anticipation 对应「预期」。'
        },
        {
          id: 'anticipation.q2',
          senseId: 'anticipation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anticipation?',
          options: [
            '预期',
            '其他义项',
            '鹿角'
          ],
          answer: '预期',
          explain: '按本词条，anticipation 是「预期」。'
        },
        {
          id: 'anticipation.q3',
          senseId: 'anticipation.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「预期」.',
          options: [
            'anticipation',
            'antique',
            'antler'
          ],
          answer: 'anticipation',
          explain: '空缺处用 anticipation，不要换成相邻词 antique。'
        },
        {
          id: 'anticipation.q4',
          senseId: 'anticipation.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anticipation with a neighbour in this list. Which one means 「预期」?',
          options: [
            'anticipation',
            'antique',
            'antler'
          ],
          answer: 'anticipation',
          explain: 'antique 与 antler 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antique',
          'antler'
        ]
      }
    });

  D('antique', {
      etymology: {
        origin: 'antique 按现成英语词整词记，意思是「古董；古董的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antique',
            text: '现代英语：古董；古董的。'
          }
        ],
        formationLogic: '不硬拆。看到 antique 就想到「古董」。',
        mnemonic: '先记中文「古董」，再把英文 antique 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antique to make the abstract point concrete.',
          chinese: '这节课用一个「古董」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antique.s1',
          en: 'The lecture used an antique to make the abstract point concrete.',
          zh: '这节课用一个「古董」的例子，把抽象的论点讲具体。',
          structure: 'antique / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「古董」，对应英文释义：An old object that is valuable because of its age.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antique of about the topic.',
          right: 'This antique belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antique。',
          rule: '名词 antique（古董）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antique.q1',
          senseId: 'antique.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「古董」.',
          options: [
            'antique',
            'antler',
            'antonym'
          ],
          answer: 'antique',
          explain: 'antique 对应「古董」。'
        },
        {
          id: 'antique.q2',
          senseId: 'antique.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antique?',
          options: [
            '古董',
            '鹿角',
            '反义词'
          ],
          answer: '古董',
          explain: '按本词条，antique 是「古董」。'
        },
        {
          id: 'antique.q3',
          senseId: 'antique.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「古董」.',
          options: [
            'antique',
            'antler',
            'antonym'
          ],
          answer: 'antique',
          explain: '空缺处用 antique，不要换成相邻词 antler。'
        },
        {
          id: 'antique.q4',
          senseId: 'antique.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antique with a neighbour in this list. Which one means 「古董」?',
          options: [
            'antique',
            'antler',
            'antonym'
          ],
          answer: 'antique',
          explain: 'antler 与 antonym 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antler',
          'antonym'
        ]
      }
    });

  D('antler', {
      etymology: {
        origin: 'antler 按现成英语词整词记，意思是「鹿角；角枝」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antler',
            text: '现代英语：鹿角；角枝。'
          }
        ],
        formationLogic: '不硬拆。看到 antler 就想到「鹿角」。',
        mnemonic: '先记中文「鹿角」，再把英文 antler 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antler to make the abstract point concrete.',
          chinese: '这节课用一个「鹿角」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antler.s1',
          en: 'The lecture used an antler to make the abstract point concrete.',
          zh: '这节课用一个「鹿角」的例子，把抽象的论点讲具体。',
          structure: 'antler / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「鹿角」，对应英文释义：Each of the large branching horns on the head of a deer.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antler of about the topic.',
          right: 'This antler belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antler。',
          rule: '名词 antler（鹿角）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antler.q1',
          senseId: 'antler.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「鹿角」.',
          options: [
            'antler',
            'antonym',
            'anxiety'
          ],
          answer: 'antler',
          explain: 'antler 对应「鹿角」。'
        },
        {
          id: 'antler.q2',
          senseId: 'antler.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antler?',
          options: [
            '鹿角',
            '反义词',
            '焦虑'
          ],
          answer: '鹿角',
          explain: '按本词条，antler 是「鹿角」。'
        },
        {
          id: 'antler.q3',
          senseId: 'antler.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「鹿角」.',
          options: [
            'antler',
            'antonym',
            'anxiety'
          ],
          answer: 'antler',
          explain: '空缺处用 antler，不要换成相邻词 antonym。'
        },
        {
          id: 'antler.q4',
          senseId: 'antler.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antler with a neighbour in this list. Which one means 「鹿角」?',
          options: [
            'antler',
            'antonym',
            'anxiety'
          ],
          answer: 'antler',
          explain: 'antonym 与 anxiety 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'antonym',
          'anxiety'
        ]
      }
    });

  D('antonym', {
      etymology: {
        origin: 'antonym 按现成英语词整词记，意思是「反义词」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'antonym',
            text: '现代英语：反义词。'
          }
        ],
        formationLogic: '不硬拆。看到 antonym 就想到「反义词」。',
        mnemonic: '先记中文「反义词」，再把英文 antonym 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an antonym to make the abstract point concrete.',
          chinese: '这节课用一个「反义词」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'antonym.s1',
          en: 'The lecture used an antonym to make the abstract point concrete.',
          zh: '这节课用一个「反义词」的例子，把抽象的论点讲具体。',
          structure: 'antonym / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「反义词」，对应英文释义：A word with the opposite meaning of another word.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the antonym of about the topic.',
          right: 'This antonym belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 antonym。',
          rule: '名词 antonym（反义词）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'antonym.q1',
          senseId: 'antonym.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「反义词」.',
          options: [
            'antonym',
            'anxiety',
            'anxious'
          ],
          answer: 'antonym',
          explain: 'antonym 对应「反义词」。'
        },
        {
          id: 'antonym.q2',
          senseId: 'antonym.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits antonym?',
          options: [
            '反义词',
            '焦虑',
            '焦虑的'
          ],
          answer: '反义词',
          explain: '按本词条，antonym 是「反义词」。'
        },
        {
          id: 'antonym.q3',
          senseId: 'antonym.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「反义词」.',
          options: [
            'antonym',
            'anxiety',
            'anxious'
          ],
          answer: 'antonym',
          explain: '空缺处用 antonym，不要换成相邻词 anxiety。'
        },
        {
          id: 'antonym.q4',
          senseId: 'antonym.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse antonym with a neighbour in this list. Which one means 「反义词」?',
          options: [
            'antonym',
            'anxiety',
            'anxious'
          ],
          answer: 'antonym',
          explain: 'anxiety 与 anxious 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anxiety',
          'anxious'
        ]
      }
    });

  D('anxiety', {
      etymology: {
        origin: 'anxiety 按现成英语词整词记，意思是「焦虑；担心」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anxiety',
            text: '现代英语：焦虑；担心。'
          }
        ],
        formationLogic: '不硬拆。看到 anxiety 就想到「焦虑」。',
        mnemonic: '先记中文「焦虑」，再把英文 anxiety 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an anxiety to make the abstract point concrete.',
          chinese: '这节课用一个「焦虑」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anxiety.s1',
          en: 'The lecture used an anxiety to make the abstract point concrete.',
          zh: '这节课用一个「焦虑」的例子，把抽象的论点讲具体。',
          structure: 'anxiety / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「焦虑」，对应英文释义：A feeling of worry, nervousness, or unease about something with an uncertain outcome.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anxiety of about the topic.',
          right: 'This anxiety belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anxiety。',
          rule: '名词 anxiety（焦虑）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anxiety.q1',
          senseId: 'anxiety.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「焦虑」.',
          options: [
            'anxiety',
            'anxious',
            'anxiously'
          ],
          answer: 'anxiety',
          explain: 'anxiety 对应「焦虑」。'
        },
        {
          id: 'anxiety.q2',
          senseId: 'anxiety.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anxiety?',
          options: [
            '焦虑',
            '焦虑的',
            '焦虑地'
          ],
          answer: '焦虑',
          explain: '按本词条，anxiety 是「焦虑」。'
        },
        {
          id: 'anxiety.q3',
          senseId: 'anxiety.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「焦虑」.',
          options: [
            'anxiety',
            'anxious',
            'anxiously'
          ],
          answer: 'anxiety',
          explain: '空缺处用 anxiety，不要换成相邻词 anxious。'
        },
        {
          id: 'anxiety.q4',
          senseId: 'anxiety.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anxiety with a neighbour in this list. Which one means 「焦虑」?',
          options: [
            'anxiety',
            'anxious',
            'anxiously'
          ],
          answer: 'anxiety',
          explain: 'anxious 与 anxiously 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anxious',
          'anxiously'
        ]
      }
    });

  D('anxious', {
      etymology: {
        origin: 'anxious 按现成英语词整词记，意思是「焦虑的；渴望的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'anxious',
            text: '现代英语：焦虑的；渴望的。'
          }
        ],
        formationLogic: '不硬拆。看到 anxious 就想到「焦虑的」。',
        mnemonic: '先记中文「焦虑的」，再把英文 anxious 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A anxious result needs a second look before anyone acts on it.',
          chinese: '一个「焦虑的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'anxious.s1',
          en: 'A anxious result needs a second look before anyone acts on it.',
          zh: '一个「焦虑的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'anxious / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「焦虑的」，对应英文释义：Worried about something; strongly wanting something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very anxiously surprising to us.',
          right: 'The news was anxious.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + anxious。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a anxious + 名词。'
        }
      ],
      quiz: [
        {
          id: 'anxious.q1',
          senseId: 'anxious.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「焦虑的」.',
          options: [
            'anxious',
            'anxiously',
            'any'
          ],
          answer: 'anxious',
          explain: 'anxious 对应「焦虑的」。'
        },
        {
          id: 'anxious.q2',
          senseId: 'anxious.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anxious?',
          options: [
            '焦虑的',
            '焦虑地',
            '任何'
          ],
          answer: '焦虑的',
          explain: '按本词条，anxious 是「焦虑的」。'
        },
        {
          id: 'anxious.q3',
          senseId: 'anxious.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'anxious',
            'anxiously',
            'any'
          ],
          answer: 'anxious',
          explain: '空缺处用 anxious，不要换成相邻词 anxiously。'
        },
        {
          id: 'anxious.q4',
          senseId: 'anxious.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anxious with a neighbour in this list. Which one means 「焦虑的」?',
          options: [
            'anxious',
            'anxiously',
            'any'
          ],
          answer: 'anxious',
          explain: 'anxiously 与 any 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anxiously',
          'any'
        ]
      }
    });

  D('anxiously', {
      etymology: {
        origin: '英语派生：anxious + -ly。副词后缀，表示方式。整词义为「焦虑地；不安地」。',
        prefix: null,
        root: {
          text: 'anxious',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'anxious',
            text: '基础词，先掌握「焦虑的」。'
          },
          {
            label: 'anxiously',
            text: '英语派生形式，教学义是「焦虑地；不安地」。'
          }
        ],
        formationLogic: '在 anxious 上加 -ly，得到 anxiously。',
        mnemonic: '先记中文「焦虑地」，再把英文 anxiously 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change anxiously, so the class could follow each step.',
          chinese: '她「焦虑地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anxiously.s1',
          en: 'She explained the change anxiously, so the class could follow each step.',
          zh: '她「焦虑地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'anxiously / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「焦虑地」，对应英文释义：In a way that shows you are worried or nervous.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a anxiously answer.',
          right: 'She answered anxiously.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + anxiously，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'anxiously.q1',
          senseId: 'anxiously.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「焦虑地」.',
          options: [
            'anxiously',
            'any',
            'anybody'
          ],
          answer: 'anxiously',
          explain: 'anxiously 对应「焦虑地」。'
        },
        {
          id: 'anxiously.q2',
          senseId: 'anxiously.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anxiously?',
          options: [
            '焦虑地',
            '任何',
            '任何人'
          ],
          answer: '焦虑地',
          explain: '按本词条，anxiously 是「焦虑地」。'
        },
        {
          id: 'anxiously.q3',
          senseId: 'anxiously.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「焦虑地」.',
          options: [
            'anxiously',
            'any',
            'anybody'
          ],
          answer: 'anxiously',
          explain: '空缺处用 anxiously，不要换成相邻词 any。'
        },
        {
          id: 'anxiously.q4',
          senseId: 'anxiously.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anxiously with a neighbour in this list. Which one means 「焦虑地」?',
          options: [
            'anxiously',
            'any',
            'anybody'
          ],
          answer: 'anxiously',
          explain: 'any 与 anybody 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'any',
          'anybody'
        ]
      }
    });

  D('any', {
      etymology: {
        origin: 'any 按现成英语词整词记，意思是「任何；一些」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'any',
            text: '现代英语：任何；一些。'
          }
        ],
        formationLogic: '不硬拆。看到 any 就想到「任何」。',
        mnemonic: '先记中文「任何」，再把英文 any 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Learners meet any in almost every paragraph, so the grammar note is worth rereading.',
          chinese: '学习者几乎每段都会遇到 any（任何），语法说明值得再读一遍。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'any.s1',
          en: 'Learners meet any in almost every paragraph, so the grammar note is worth rereading.',
          zh: '学习者几乎每段都会遇到 any（任何），语法说明值得再读一遍。',
          structure: 'any / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「任何」，对应英文释义：One or some of a thing; no matter which.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the any of about the topic.',
          right: 'This any belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 any。',
          rule: '名词 any（任何）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'any.q1',
          senseId: 'any.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任何」.',
          options: [
            'any',
            'anybody',
            'anyhow'
          ],
          answer: 'any',
          explain: 'any 对应「任何」。'
        },
        {
          id: 'any.q2',
          senseId: 'any.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits any?',
          options: [
            '任何',
            '任何人',
            '无关说法'
          ],
          answer: '任何',
          explain: '按本词条，any 是「任何」。'
        },
        {
          id: 'any.q3',
          senseId: 'any.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「任何」.',
          options: [
            'any',
            'anybody',
            'anyhow'
          ],
          answer: 'any',
          explain: '空缺处用 any，不要换成相邻词 anybody。'
        },
        {
          id: 'any.q4',
          senseId: 'any.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse any with a neighbour in this list. Which one means 「任何」?',
          options: [
            'any',
            'anybody',
            'anyhow'
          ],
          answer: 'any',
          explain: 'anybody 与 anyhow 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anybody',
          'anyhow'
        ]
      }
    });

  D('anybody', {
      etymology: {
        origin: '英语派生：与 any（任一）同族。教学义是「任何人」。',
        prefix: null,
        root: {
          text: 'any',
          gloss: '任一'
        },
        suffix: null,
        history: [
          {
            label: 'any',
            text: '任一'
          },
          {
            label: 'anybody',
            text: '现代英语：任何人。'
          }
        ],
        formationLogic: '先认 any，再记 anybody 多出来的部分。',
        mnemonic: '先记中文「任何人」，再把英文 anybody 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Learners meet anybody in almost every paragraph, so the grammar note is worth rereading.',
          chinese: '学习者几乎每段都会遇到 anybody（任何人），语法说明值得再读一遍。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anybody.s1',
          en: 'Learners meet anybody in almost every paragraph, so the grammar note is worth rereading.',
          zh: '学习者几乎每段都会遇到 anybody（任何人），语法说明值得再读一遍。',
          structure: 'anybody / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「任何人」，对应英文释义：Any person.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anybody of about the topic.',
          right: 'This anybody belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anybody。',
          rule: '名词 anybody（任何人）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anybody.q1',
          senseId: 'anybody.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任何人」.',
          options: [
            'anybody',
            'anyhow',
            'anything'
          ],
          answer: 'anybody',
          explain: 'anybody 对应「任何人」。'
        },
        {
          id: 'anybody.q2',
          senseId: 'anybody.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anybody?',
          options: [
            '任何人',
            '其他义项',
            '无关说法'
          ],
          answer: '任何人',
          explain: '按本词条，anybody 是「任何人」。'
        },
        {
          id: 'anybody.q3',
          senseId: 'anybody.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「任何人」.',
          options: [
            'anybody',
            'anyhow',
            'anything'
          ],
          answer: 'anybody',
          explain: '空缺处用 anybody，不要换成相邻词 anyhow。'
        },
        {
          id: 'anybody.q4',
          senseId: 'anybody.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anybody with a neighbour in this list. Which one means 「任何人」?',
          options: [
            'anybody',
            'anyhow',
            'anything'
          ],
          answer: 'anybody',
          explain: 'anyhow 与 anything 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anyhow',
          'anything'
        ]
      }
    });

  D('anyhow', {
      etymology: {
        origin: '英语派生：与 any（任一）同族。教学义是「无论如何；不管怎样」。',
        prefix: null,
        root: {
          text: 'any',
          gloss: '任一'
        },
        suffix: null,
        history: [
          {
            label: 'any',
            text: '任一'
          },
          {
            label: 'anyhow',
            text: '现代英语：无论如何；不管怎样。'
          }
        ],
        formationLogic: '先认 any，再记 anyhow 多出来的部分。',
        mnemonic: '先记中文「无论如何」，再把英文 anyhow 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change anyhow, so the class could follow each step.',
          chinese: '她「无论如何」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anyhow.s1',
          en: 'She explained the change anyhow, so the class could follow each step.',
          zh: '她「无论如何」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'anyhow / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「无论如何」，对应英文释义：In spite of something; anyway.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a anyhow answer.',
          right: 'She answered anyhow.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + anyhow，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'anyhow.q1',
          senseId: 'anyhow.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「无论如何」.',
          options: [
            'anyhow',
            'anything',
            'anyway'
          ],
          answer: 'anyhow',
          explain: 'anyhow 对应「无论如何」。'
        },
        {
          id: 'anyhow.q2',
          senseId: 'anyhow.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anyhow?',
          options: [
            '无论如何',
            '其他义项',
            '无关说法'
          ],
          answer: '无论如何',
          explain: '按本词条，anyhow 是「无论如何」。'
        },
        {
          id: 'anyhow.q3',
          senseId: 'anyhow.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「无论如何」.',
          options: [
            'anyhow',
            'anything',
            'anyway'
          ],
          answer: 'anyhow',
          explain: '空缺处用 anyhow，不要换成相邻词 anything。'
        },
        {
          id: 'anyhow.q4',
          senseId: 'anyhow.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anyhow with a neighbour in this list. Which one means 「无论如何」?',
          options: [
            'anyhow',
            'anything',
            'anyway'
          ],
          answer: 'anyhow',
          explain: 'anything 与 anyway 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anything',
          'anyway'
        ]
      }
    });

  D('anything', {
      etymology: {
        origin: '英语派生：与 any（任一）同族。教学义是「任何事物」。',
        prefix: null,
        root: {
          text: 'any',
          gloss: '任一'
        },
        suffix: null,
        history: [
          {
            label: 'any',
            text: '任一'
          },
          {
            label: 'anything',
            text: '现代英语：任何事物。'
          }
        ],
        formationLogic: '先认 any，再记 anything 多出来的部分。',
        mnemonic: '先记中文「任何事物」，再把英文 anything 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Learners meet anything in almost every paragraph, so the grammar note is worth rereading.',
          chinese: '学习者几乎每段都会遇到 anything（任何事物），语法说明值得再读一遍。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anything.s1',
          en: 'Learners meet anything in almost every paragraph, so the grammar note is worth rereading.',
          zh: '学习者几乎每段都会遇到 anything（任何事物），语法说明值得再读一遍。',
          structure: 'anything / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「任何事物」，对应英文释义：Any object, event or fact.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the anything of about the topic.',
          right: 'This anything belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 anything。',
          rule: '名词 anything（任何事物）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'anything.q1',
          senseId: 'anything.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任何事物」.',
          options: [
            'anything',
            'anyway',
            'anywhere'
          ],
          answer: 'anything',
          explain: 'anything 对应「任何事物」。'
        },
        {
          id: 'anything.q2',
          senseId: 'anything.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anything?',
          options: [
            '任何事物',
            '无论如何',
            '无关说法'
          ],
          answer: '任何事物',
          explain: '按本词条，anything 是「任何事物」。'
        },
        {
          id: 'anything.q3',
          senseId: 'anything.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「任何事物」.',
          options: [
            'anything',
            'anyway',
            'anywhere'
          ],
          answer: 'anything',
          explain: '空缺处用 anything，不要换成相邻词 anyway。'
        },
        {
          id: 'anything.q4',
          senseId: 'anything.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anything with a neighbour in this list. Which one means 「任何事物」?',
          options: [
            'anything',
            'anyway',
            'anywhere'
          ],
          answer: 'anything',
          explain: 'anyway 与 anywhere 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anyway',
          'anywhere'
        ]
      }
    });

  D('anyway', {
      etymology: {
        origin: '英语派生：与 any（任一）同族。教学义是「无论如何；反正」。',
        prefix: null,
        root: {
          text: 'any',
          gloss: '任一'
        },
        suffix: null,
        history: [
          {
            label: 'any',
            text: '任一'
          },
          {
            label: 'anyway',
            text: '现代英语：无论如何；反正。'
          }
        ],
        formationLogic: '先认 any，再记 anyway 多出来的部分。',
        mnemonic: '先记中文「无论如何」，再把英文 anyway 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change anyway, so the class could follow each step.',
          chinese: '她「无论如何」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anyway.s1',
          en: 'She explained the change anyway, so the class could follow each step.',
          zh: '她「无论如何」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'anyway / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「无论如何」，对应英文释义：In spite of that; used to change or end a topic.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a anyway answer.',
          right: 'She answered anyway.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + anyway，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'anyway.q1',
          senseId: 'anyway.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「无论如何」.',
          options: [
            'anyway',
            'anywhere',
            'apart'
          ],
          answer: 'anyway',
          explain: 'anyway 对应「无论如何」。'
        },
        {
          id: 'anyway.q2',
          senseId: 'anyway.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anyway?',
          options: [
            '无论如何',
            '其他义项',
            '分开'
          ],
          answer: '无论如何',
          explain: '按本词条，anyway 是「无论如何」。'
        },
        {
          id: 'anyway.q3',
          senseId: 'anyway.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「无论如何」.',
          options: [
            'anyway',
            'anywhere',
            'apart'
          ],
          answer: 'anyway',
          explain: '空缺处用 anyway，不要换成相邻词 anywhere。'
        },
        {
          id: 'anyway.q4',
          senseId: 'anyway.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anyway with a neighbour in this list. Which one means 「无论如何」?',
          options: [
            'anyway',
            'anywhere',
            'apart'
          ],
          answer: 'anyway',
          explain: 'anywhere 与 apart 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'anywhere',
          'apart'
        ]
      }
    });

  D('anywhere', {
      etymology: {
        origin: '英语派生：与 any（任一）同族。教学义是「任何地方」。',
        prefix: null,
        root: {
          text: 'any',
          gloss: '任一'
        },
        suffix: null,
        history: [
          {
            label: 'any',
            text: '任一'
          },
          {
            label: 'anywhere',
            text: '现代英语：任何地方。'
          }
        ],
        formationLogic: '先认 any，再记 anywhere 多出来的部分。',
        mnemonic: '先记中文「任何地方」，再把英文 anywhere 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change anywhere, so the class could follow each step.',
          chinese: '她「任何地方」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'anywhere.s1',
          en: 'She explained the change anywhere, so the class could follow each step.',
          zh: '她「任何地方」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'anywhere / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「任何地方」，对应英文释义：In or to any place.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a anywhere answer.',
          right: 'She answered anywhere.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + anywhere，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'anywhere.q1',
          senseId: 'anywhere.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任何地方」.',
          options: [
            'anywhere',
            'apart',
            'apart from that'
          ],
          answer: 'anywhere',
          explain: 'anywhere 对应「任何地方」。'
        },
        {
          id: 'anywhere.q2',
          senseId: 'anywhere.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits anywhere?',
          options: [
            '任何地方',
            '分开',
            '除此之外'
          ],
          answer: '任何地方',
          explain: '按本词条，anywhere 是「任何地方」。'
        },
        {
          id: 'anywhere.q3',
          senseId: 'anywhere.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「任何地方」.',
          options: [
            'anywhere',
            'apart',
            'apart from that'
          ],
          answer: 'anywhere',
          explain: '空缺处用 anywhere，不要换成相邻词 apart。'
        },
        {
          id: 'anywhere.q4',
          senseId: 'anywhere.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse anywhere with a neighbour in this list. Which one means 「任何地方」?',
          options: [
            'anywhere',
            'apart',
            'apart from that'
          ],
          answer: 'anywhere',
          explain: 'apart 与 apart from that 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apart',
          'apart from that'
        ]
      }
    });

  D('apart', {
      etymology: {
        origin: '英语派生：前缀 a-（到一边、分开）加 part（部分；分开的一块）。教学义是「分开；相隔；成碎片」。',
        prefix: {
          text: 'a-',
          gloss: '到一边、分开'
        },
        root: {
          text: 'part',
          gloss: '部分；分开的一块'
        },
        suffix: null,
        history: [
          {
            label: 'part',
            text: '部分；分开的一块'
          },
          {
            label: 'apart',
            text: '加上 a- 之后，现代英语里表示「分开；相隔；成碎片」。'
          }
        ],
        formationLogic: 'a- 与 part 合在一起理解，不另造古典词形。',
        mnemonic: '先记中文「分开」，再把英文 apart 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change apart, so the class could follow each step.',
          chinese: '她「分开」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apart.s1',
          en: 'She explained the change apart, so the class could follow each step.',
          zh: '她「分开」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'apart / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「分开」，对应英文释义：Separated by distance or time; into pieces.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a apart answer.',
          right: 'She answered apart.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + apart，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'apart.q1',
          senseId: 'apart.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「分开」.',
          options: [
            'apart',
            'apart from that',
            'apartment'
          ],
          answer: 'apart',
          explain: 'apart 对应「分开」。'
        },
        {
          id: 'apart.q2',
          senseId: 'apart.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apart?',
          options: [
            '分开',
            '除此之外',
            '公寓'
          ],
          answer: '分开',
          explain: '按本词条，apart 是「分开」。'
        },
        {
          id: 'apart.q3',
          senseId: 'apart.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「分开」.',
          options: [
            'apart',
            'apart from that',
            'apartment'
          ],
          answer: 'apart',
          explain: '空缺处用 apart，不要换成相邻词 apart from that。'
        },
        {
          id: 'apart.q4',
          senseId: 'apart.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apart with a neighbour in this list. Which one means 「分开」?',
          options: [
            'apart',
            'apart from that',
            'apartment'
          ],
          answer: 'apart',
          explain: 'apart from that 与 apartment 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apart from that',
          'apartment'
        ]
      }
    });

  D('apart from that', {
      etymology: {
        origin: 'apart from that 按现成英语词整词记，意思是「除此之外；此外」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apart from that',
            text: '现代英语：除此之外；此外。'
          }
        ],
        formationLogic: '不硬拆。看到 apart from that 就想到「除此之外」。',
        mnemonic: '先记中文「除此之外」，再把英文 apart from that 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Apart from that, the timetable can stay as it is.',
          chinese: '除此之外，时间表可以保持不变。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apart from that.s1',
          en: 'Apart from that, the timetable can stay as it is.',
          zh: '除此之外，时间表可以保持不变。',
          structure: 'apart from that / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「除此之外」，对应英文释义：Used to mention one more thing after everything else that has been said.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a apart from that answer.',
          right: 'She answered apart from that.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + apart from that，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'apart from that.q1',
          senseId: 'apart from that.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「除此之外」.',
          options: [
            'apart from that',
            'apartment',
            'apathetic'
          ],
          answer: 'apart from that',
          explain: 'apart from that 对应「除此之外」。'
        },
        {
          id: 'apart from that.q2',
          senseId: 'apart from that.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apart from that?',
          options: [
            '除此之外',
            '公寓',
            '漠不关心的'
          ],
          answer: '除此之外',
          explain: '按本词条，apart from that 是「除此之外」。'
        },
        {
          id: 'apart from that.q3',
          senseId: 'apart from that.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「除此之外」.',
          options: [
            'apart from that',
            'apartment',
            'apathetic'
          ],
          answer: 'apart from that',
          explain: '空缺处用 apart from that，不要换成相邻词 apartment。'
        },
        {
          id: 'apart from that.q4',
          senseId: 'apart from that.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apart from that with a neighbour in this list. Which one means 「除此之外」?',
          options: [
            'apart from that',
            'apartment',
            'apathetic'
          ],
          answer: 'apart from that',
          explain: 'apartment 与 apathetic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apartment',
          'apathetic'
        ]
      }
    });

  D('apartment', {
      etymology: {
        origin: '英语派生：apart + -ment。名词后缀，表示行为或结果。整词义为「公寓；一套房间」。',
        prefix: null,
        root: {
          text: 'apart',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ment',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'apart',
            text: '基础词，先掌握「分开」。'
          },
          {
            label: 'apartment',
            text: '英语派生形式，教学义是「公寓；一套房间」。'
          }
        ],
        formationLogic: '在 apart 上加 -ment，得到 apartment。',
        mnemonic: '先记中文「公寓」，再把英文 apartment 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apartment to make the abstract point concrete.',
          chinese: '这节课用一个「公寓」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apartment.s1',
          en: 'The lecture used an apartment to make the abstract point concrete.',
          zh: '这节课用一个「公寓」的例子，把抽象的论点讲具体。',
          structure: 'apartment / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「公寓」，对应英文释义：A set of rooms for living in a larger building.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apartment of about the topic.',
          right: 'This apartment belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apartment。',
          rule: '名词 apartment（公寓）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apartment.q1',
          senseId: 'apartment.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「公寓」.',
          options: [
            'apartment',
            'apathetic',
            'apathy'
          ],
          answer: 'apartment',
          explain: 'apartment 对应「公寓」。'
        },
        {
          id: 'apartment.q2',
          senseId: 'apartment.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apartment?',
          options: [
            '公寓',
            '漠不关心的',
            '冷漠'
          ],
          answer: '公寓',
          explain: '按本词条，apartment 是「公寓」。'
        },
        {
          id: 'apartment.q3',
          senseId: 'apartment.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「公寓」.',
          options: [
            'apartment',
            'apathetic',
            'apathy'
          ],
          answer: 'apartment',
          explain: '空缺处用 apartment，不要换成相邻词 apathetic。'
        },
        {
          id: 'apartment.q4',
          senseId: 'apartment.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apartment with a neighbour in this list. Which one means 「公寓」?',
          options: [
            'apartment',
            'apathetic',
            'apathy'
          ],
          answer: 'apartment',
          explain: 'apathetic 与 apathy 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apathetic',
          'apathy'
        ]
      }
    });

  D('apathetic', {
      etymology: {
        origin: 'apathetic 按现成英语词整词记，意思是「漠不关心的；无动于衷的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apathetic',
            text: '现代英语：漠不关心的；无动于衷的。'
          }
        ],
        formationLogic: '不硬拆。看到 apathetic 就想到「漠不关心的」。',
        mnemonic: '先记中文「漠不关心的」，再把英文 apathetic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A apathetic result needs a second look before anyone acts on it.',
          chinese: '一个「漠不关心的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'apathetic.s1',
          en: 'A apathetic result needs a second look before anyone acts on it.',
          zh: '一个「漠不关心的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'apathetic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「漠不关心的」，对应英文释义：Showing no interest, energy, or concern about something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very apatheticly surprising to us.',
          right: 'The news was apathetic.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + apathetic。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a apathetic + 名词。'
        }
      ],
      quiz: [
        {
          id: 'apathetic.q1',
          senseId: 'apathetic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「漠不关心的」.',
          options: [
            'apathetic',
            'apathy',
            'ape'
          ],
          answer: 'apathetic',
          explain: 'apathetic 对应「漠不关心的」。'
        },
        {
          id: 'apathetic.q2',
          senseId: 'apathetic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apathetic?',
          options: [
            '漠不关心的',
            '冷漠',
            '无关说法'
          ],
          answer: '漠不关心的',
          explain: '按本词条，apathetic 是「漠不关心的」。'
        },
        {
          id: 'apathetic.q3',
          senseId: 'apathetic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'apathetic',
            'apathy',
            'ape'
          ],
          answer: 'apathetic',
          explain: '空缺处用 apathetic，不要换成相邻词 apathy。'
        },
        {
          id: 'apathetic.q4',
          senseId: 'apathetic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apathetic with a neighbour in this list. Which one means 「漠不关心的」?',
          options: [
            'apathetic',
            'apathy',
            'ape'
          ],
          answer: 'apathetic',
          explain: 'apathy 与 ape 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apathy',
          'ape'
        ]
      }
    });

  D('apathy', {
      etymology: {
        origin: 'apathy 按现成英语词整词记，意思是「冷漠；无动于衷」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apathy',
            text: '现代英语：冷漠；无动于衷。'
          }
        ],
        formationLogic: '不硬拆。看到 apathy 就想到「冷漠」。',
        mnemonic: '先记中文「冷漠」，再把英文 apathy 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apathy to make the abstract point concrete.',
          chinese: '这节课用一个「冷漠」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apathy.s1',
          en: 'The lecture used an apathy to make the abstract point concrete.',
          zh: '这节课用一个「冷漠」的例子，把抽象的论点讲具体。',
          structure: 'apathy / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「冷漠」，对应英文释义：A lack of interest, enthusiasm, or concern about something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apathy of about the topic.',
          right: 'This apathy belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apathy。',
          rule: '名词 apathy（冷漠）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apathy.q1',
          senseId: 'apathy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「冷漠」.',
          options: [
            'apathy',
            'ape',
            'apiece'
          ],
          answer: 'apathy',
          explain: 'apathy 对应「冷漠」。'
        },
        {
          id: 'apathy.q2',
          senseId: 'apathy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apathy?',
          options: [
            '冷漠',
            '其他义项',
            '每个'
          ],
          answer: '冷漠',
          explain: '按本词条，apathy 是「冷漠」。'
        },
        {
          id: 'apathy.q3',
          senseId: 'apathy.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「冷漠」.',
          options: [
            'apathy',
            'ape',
            'apiece'
          ],
          answer: 'apathy',
          explain: '空缺处用 apathy，不要换成相邻词 ape。'
        },
        {
          id: 'apathy.q4',
          senseId: 'apathy.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apathy with a neighbour in this list. Which one means 「冷漠」?',
          options: [
            'apathy',
            'ape',
            'apiece'
          ],
          answer: 'apathy',
          explain: 'ape 与 apiece 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ape',
          'apiece'
        ]
      }
    });

  D('ape', {
      etymology: {
        origin: 'ape 按现成英语词整词记，意思是「猿；模仿」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ape',
            text: '现代英语：猿；模仿。'
          }
        ],
        formationLogic: '不硬拆。看到 ape 就想到「猿」。',
        mnemonic: '先记中文「猿」，再把英文 ape 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an ape to make the abstract point concrete.',
          chinese: '这节课用一个「猿」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ape.s1',
          en: 'The lecture used an ape to make the abstract point concrete.',
          zh: '这节课用一个「猿」的例子，把抽象的论点讲具体。',
          structure: 'ape / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「猿」，对应英文释义：A large monkey-like animal without a tail; to copy someone.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ape of about the topic.',
          right: 'This ape belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ape。',
          rule: '名词 ape（猿）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ape.q1',
          senseId: 'ape.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「猿」.',
          options: [
            'ape',
            'apiece',
            'apologetic'
          ],
          answer: 'ape',
          explain: 'ape 对应「猿」。'
        },
        {
          id: 'ape.q2',
          senseId: 'ape.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ape?',
          options: [
            '猿',
            '每个',
            '道歉的'
          ],
          answer: '猿',
          explain: '按本词条，ape 是「猿」。'
        },
        {
          id: 'ape.q3',
          senseId: 'ape.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「猿」.',
          options: [
            'ape',
            'apiece',
            'apologetic'
          ],
          answer: 'ape',
          explain: '空缺处用 ape，不要换成相邻词 apiece。'
        },
        {
          id: 'ape.q4',
          senseId: 'ape.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ape with a neighbour in this list. Which one means 「猿」?',
          options: [
            'ape',
            'apiece',
            'apologetic'
          ],
          answer: 'ape',
          explain: 'apiece 与 apologetic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apiece',
          'apologetic'
        ]
      }
    });

  D('apiece', {
      etymology: {
        origin: 'apiece 按现成英语词整词记，意思是「每个；每人；各」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apiece',
            text: '现代英语：每个；每人；各。'
          }
        ],
        formationLogic: '不硬拆。看到 apiece 就想到「每个」。',
        mnemonic: '先记中文「每个」，再把英文 apiece 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change apiece, so the class could follow each step.',
          chinese: '她「每个」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apiece.s1',
          en: 'She explained the change apiece, so the class could follow each step.',
          zh: '她「每个」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'apiece / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「每个」，对应英文释义：For each one of a group; separately for each person or thing.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a apiece answer.',
          right: 'She answered apiece.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + apiece，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'apiece.q1',
          senseId: 'apiece.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「每个」.',
          options: [
            'apiece',
            'apologetic',
            'apologize'
          ],
          answer: 'apiece',
          explain: 'apiece 对应「每个」。'
        },
        {
          id: 'apiece.q2',
          senseId: 'apiece.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apiece?',
          options: [
            '每个',
            '道歉的',
            '道歉'
          ],
          answer: '每个',
          explain: '按本词条，apiece 是「每个」。'
        },
        {
          id: 'apiece.q3',
          senseId: 'apiece.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「每个」.',
          options: [
            'apiece',
            'apologetic',
            'apologize'
          ],
          answer: 'apiece',
          explain: '空缺处用 apiece，不要换成相邻词 apologetic。'
        },
        {
          id: 'apiece.q4',
          senseId: 'apiece.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apiece with a neighbour in this list. Which one means 「每个」?',
          options: [
            'apiece',
            'apologetic',
            'apologize'
          ],
          answer: 'apiece',
          explain: 'apologetic 与 apologize 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apologetic',
          'apologize'
        ]
      }
    });

  D('apologetic', {
      etymology: {
        origin: 'apologetic 按现成英语词整词记，意思是「道歉的；歉疚的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apologetic',
            text: '现代英语：道歉的；歉疚的。'
          }
        ],
        formationLogic: '不硬拆。看到 apologetic 就想到「道歉的」。',
        mnemonic: '先记中文「道歉的」，再把英文 apologetic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A apologetic result needs a second look before anyone acts on it.',
          chinese: '一个「道歉的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'apologetic.s1',
          en: 'A apologetic result needs a second look before anyone acts on it.',
          zh: '一个「道歉的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'apologetic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「道歉的」，对应英文释义：Showing that you are sorry for something you have done.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very apologeticly surprising to us.',
          right: 'The news was apologetic.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + apologetic。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a apologetic + 名词。'
        }
      ],
      quiz: [
        {
          id: 'apologetic.q1',
          senseId: 'apologetic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「道歉的」.',
          options: [
            'apologetic',
            'apologize',
            'apology'
          ],
          answer: 'apologetic',
          explain: 'apologetic 对应「道歉的」。'
        },
        {
          id: 'apologetic.q2',
          senseId: 'apologetic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apologetic?',
          options: [
            '道歉的',
            '道歉',
            '其他义项'
          ],
          answer: '道歉的',
          explain: '按本词条，apologetic 是「道歉的」。'
        },
        {
          id: 'apologetic.q3',
          senseId: 'apologetic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'apologetic',
            'apologize',
            'apology'
          ],
          answer: 'apologetic',
          explain: '空缺处用 apologetic，不要换成相邻词 apologize。'
        },
        {
          id: 'apologetic.q4',
          senseId: 'apologetic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apologetic with a neighbour in this list. Which one means 「道歉的」?',
          options: [
            'apologetic',
            'apologize',
            'apology'
          ],
          answer: 'apologetic',
          explain: 'apologize 与 apology 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apologize',
          'apology'
        ]
      }
    });

  D('apologize', {
      etymology: {
        origin: 'apologize 按现成英语词整词记，意思是「道歉；谢罪」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apologize',
            text: '现代英语：道歉；谢罪。'
          }
        ],
        formationLogic: '不硬拆。看到 apologize 就想到「道歉」。',
        mnemonic: '先记中文「道歉」，再把英文 apologize 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will apologize the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（道歉）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'apologize.s1',
          en: 'The team will apologize the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（道歉）。',
          structure: 'apologize / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「道歉」，对应英文释义：To say that you are sorry for something you have done or said.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They apologize about the result without a reason.',
          right: 'They apologize the result and give a reason.',
          reason: 'apologize 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + apologize + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'apologize.q1',
          senseId: 'apologize.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「道歉」.',
          options: [
            'apologize',
            'apology',
            'app'
          ],
          answer: 'apologize',
          explain: 'apologize 对应「道歉」。'
        },
        {
          id: 'apologize.q2',
          senseId: 'apologize.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apologize?',
          options: [
            '道歉',
            '其他义项',
            '无关说法'
          ],
          answer: '道歉',
          explain: '按本词条，apologize 是「道歉」。'
        },
        {
          id: 'apologize.q3',
          senseId: 'apologize.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「道歉」.',
          options: [
            'apologize',
            'apology',
            'app'
          ],
          answer: 'apologize',
          explain: '空缺处用 apologize，不要换成相邻词 apology。'
        },
        {
          id: 'apologize.q4',
          senseId: 'apologize.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apologize with a neighbour in this list. Which one means 「道歉」?',
          options: [
            'apologize',
            'apology',
            'app'
          ],
          answer: 'apologize',
          explain: 'apology 与 app 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apology',
          'app'
        ]
      }
    });

  D('apology', {
      etymology: {
        origin: 'apology 按现成英语词整词记，意思是「道歉；辩解」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apology',
            text: '现代英语：道歉；辩解。'
          }
        ],
        formationLogic: '不硬拆。看到 apology 就想到「道歉」。',
        mnemonic: '先记中文「道歉」，再把英文 apology 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apology to make the abstract point concrete.',
          chinese: '这节课用一个「道歉」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apology.s1',
          en: 'The lecture used an apology to make the abstract point concrete.',
          zh: '这节课用一个「道歉」的例子，把抽象的论点讲具体。',
          structure: 'apology / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「道歉」，对应英文释义：Words that show you are sorry for something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apology of about the topic.',
          right: 'This apology belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apology。',
          rule: '名词 apology（道歉）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apology.q1',
          senseId: 'apology.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「道歉」.',
          options: [
            'apology',
            'app',
            'appal'
          ],
          answer: 'apology',
          explain: 'apology 对应「道歉」。'
        },
        {
          id: 'apology.q2',
          senseId: 'apology.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apology?',
          options: [
            '道歉',
            '其他义项',
            '使震惊'
          ],
          answer: '道歉',
          explain: '按本词条，apology 是「道歉」。'
        },
        {
          id: 'apology.q3',
          senseId: 'apology.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「道歉」.',
          options: [
            'apology',
            'app',
            'appal'
          ],
          answer: 'apology',
          explain: '空缺处用 apology，不要换成相邻词 app。'
        },
        {
          id: 'apology.q4',
          senseId: 'apology.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apology with a neighbour in this list. Which one means 「道歉」?',
          options: [
            'apology',
            'app',
            'appal'
          ],
          answer: 'apology',
          explain: 'app 与 appal 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'app',
          'appal'
        ]
      }
    });

  D('app', {
      etymology: {
        origin: 'app 按现成英语词整词记，意思是「应用程序」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'app',
            text: '现代英语：应用程序。'
          }
        ],
        formationLogic: '不硬拆。看到 app 就想到「应用程序」。',
        mnemonic: '先记中文「应用程序」，再把英文 app 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an app to make the abstract point concrete.',
          chinese: '这节课用一个「应用程序」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'app.s1',
          en: 'The lecture used an app to make the abstract point concrete.',
          zh: '这节课用一个「应用程序」的例子，把抽象的论点讲具体。',
          structure: 'app / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「应用程序」，对应英文释义：A computer program, especially one for a phone.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the app of about the topic.',
          right: 'This app belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 app。',
          rule: '名词 app（应用程序）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'app.q1',
          senseId: 'app.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「应用程序」.',
          options: [
            'app',
            'appal',
            'appalling'
          ],
          answer: 'app',
          explain: 'app 对应「应用程序」。'
        },
        {
          id: 'app.q2',
          senseId: 'app.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits app?',
          options: [
            '应用程序',
            '使震惊',
            '骇人的'
          ],
          answer: '应用程序',
          explain: '按本词条，app 是「应用程序」。'
        },
        {
          id: 'app.q3',
          senseId: 'app.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「应用程序」.',
          options: [
            'app',
            'appal',
            'appalling'
          ],
          answer: 'app',
          explain: '空缺处用 app，不要换成相邻词 appal。'
        },
        {
          id: 'app.q4',
          senseId: 'app.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse app with a neighbour in this list. Which one means 「应用程序」?',
          options: [
            'app',
            'appal',
            'appalling'
          ],
          answer: 'app',
          explain: 'appal 与 appalling 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appal',
          'appalling'
        ]
      }
    });

  D('appal', {
      etymology: {
        origin: '英语派生：app + -al。形容词后缀。整词义为「使震惊」。',
        prefix: null,
        root: {
          text: 'app',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'app',
            text: '基础词，先掌握「app」。'
          },
          {
            label: 'appal',
            text: '英语派生形式，教学义是「使震惊」。'
          }
        ],
        formationLogic: '在 app 上加 -al，得到 appal。',
        mnemonic: '先记中文「使震惊」，再把英文 appal 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The photos of the fire appal visitors who stop to look.',
          chinese: '火灾照片让驻足观看的人感到震惊。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appal.s1',
          en: 'The photos of the fire appal visitors who stop to look.',
          zh: '火灾照片让驻足观看的人感到震惊。',
          structure: 'appal / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「使震惊」，对应英文释义：To shock someone very much.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appal about the result without a reason.',
          right: 'They appal the result and give a reason.',
          reason: 'appal 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appal + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appal.q1',
          senseId: 'appal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「使震惊」.',
          options: [
            'appal',
            'appalling',
            'apparatus'
          ],
          answer: 'appal',
          explain: 'appal 对应「使震惊」。'
        },
        {
          id: 'appal.q2',
          senseId: 'appal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appal?',
          options: [
            '使震惊',
            '骇人的',
            '无关说法'
          ],
          answer: '使震惊',
          explain: '按本词条，appal 是「使震惊」。'
        },
        {
          id: 'appal.q3',
          senseId: 'appal.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「使震惊」.',
          options: [
            'appal',
            'appalling',
            'apparatus'
          ],
          answer: 'appal',
          explain: '空缺处用 appal，不要换成相邻词 appalling。'
        },
        {
          id: 'appal.q4',
          senseId: 'appal.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appal with a neighbour in this list. Which one means 「使震惊」?',
          options: [
            'appal',
            'appalling',
            'apparatus'
          ],
          answer: 'appal',
          explain: 'appalling 与 apparatus 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appalling',
          'apparatus'
        ]
      }
    });

  D('appalling', {
      etymology: {
        origin: 'appalling 按现成英语词整词记，意思是「骇人的；极糟的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appalling',
            text: '现代英语：骇人的；极糟的。'
          }
        ],
        formationLogic: '不硬拆。看到 appalling 就想到「骇人的」。',
        mnemonic: '先记中文「骇人的」，再把英文 appalling 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A appalling result needs a second look before anyone acts on it.',
          chinese: '一个「骇人的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'appalling.s1',
          en: 'A appalling result needs a second look before anyone acts on it.',
          zh: '一个「骇人的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'appalling / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「骇人的」，对应英文释义：Very bad, shocking, or terrible.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very appallingly surprising to us.',
          right: 'The news was appalling.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + appalling。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a appalling + 名词。'
        }
      ],
      quiz: [
        {
          id: 'appalling.q1',
          senseId: 'appalling.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「骇人的」.',
          options: [
            'appalling',
            'apparatus',
            'apparatuses'
          ],
          answer: 'appalling',
          explain: 'appalling 对应「骇人的」。'
        },
        {
          id: 'appalling.q2',
          senseId: 'appalling.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appalling?',
          options: [
            '骇人的',
            '其他义项',
            '无关说法'
          ],
          answer: '骇人的',
          explain: '按本词条，appalling 是「骇人的」。'
        },
        {
          id: 'appalling.q3',
          senseId: 'appalling.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'appalling',
            'apparatus',
            'apparatuses'
          ],
          answer: 'appalling',
          explain: '空缺处用 appalling，不要换成相邻词 apparatus。'
        },
        {
          id: 'appalling.q4',
          senseId: 'appalling.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appalling with a neighbour in this list. Which one means 「骇人的」?',
          options: [
            'appalling',
            'apparatus',
            'apparatuses'
          ],
          answer: 'appalling',
          explain: 'apparatus 与 apparatuses 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apparatus',
          'apparatuses'
        ]
      }
    });

  D('apparatus', {
      etymology: {
        origin: 'apparatus 按现成英语词整词记，意思是「设备；器械；机构」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apparatus',
            text: '现代英语：设备；器械；机构。'
          }
        ],
        formationLogic: '不硬拆。看到 apparatus 就想到「设备」。',
        mnemonic: '先记中文「设备」，再把英文 apparatus 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apparatus to make the abstract point concrete.',
          chinese: '这节课用一个「设备」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apparatus.s1',
          en: 'The lecture used an apparatus to make the abstract point concrete.',
          zh: '这节课用一个「设备」的例子，把抽象的论点讲具体。',
          structure: 'apparatus / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「设备」，对应英文释义：Equipment for a purpose; the organization of a group.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apparatus of about the topic.',
          right: 'This apparatus belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apparatus。',
          rule: '名词 apparatus（设备）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apparatus.q1',
          senseId: 'apparatus.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「设备」.',
          options: [
            'apparatus',
            'apparatuses',
            'apparel'
          ],
          answer: 'apparatus',
          explain: 'apparatus 对应「设备」。'
        },
        {
          id: 'apparatus.q2',
          senseId: 'apparatus.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apparatus?',
          options: [
            '设备',
            '其他义项',
            '衣服'
          ],
          answer: '设备',
          explain: '按本词条，apparatus 是「设备」。'
        },
        {
          id: 'apparatus.q3',
          senseId: 'apparatus.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「设备」.',
          options: [
            'apparatus',
            'apparatuses',
            'apparel'
          ],
          answer: 'apparatus',
          explain: '空缺处用 apparatus，不要换成相邻词 apparatuses。'
        },
        {
          id: 'apparatus.q4',
          senseId: 'apparatus.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apparatus with a neighbour in this list. Which one means 「设备」?',
          options: [
            'apparatus',
            'apparatuses',
            'apparel'
          ],
          answer: 'apparatus',
          explain: 'apparatuses 与 apparel 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apparatuses',
          'apparel'
        ]
      }
    });

  D('apparatuses', {
      etymology: {
        origin: '英语派生：apparatus + -s。复数或动词第三人称。整词义为「仪器；装置；机构（复数）」。',
        prefix: null,
        root: {
          text: 'apparatus',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-s',
          gloss: '复数或动词第三人称'
        },
        history: [
          {
            label: 'apparatus',
            text: '基础词，先掌握「apparatus」。'
          },
          {
            label: 'apparatuses',
            text: '英语派生形式，教学义是「仪器；装置；机构（复数）」。'
          }
        ],
        formationLogic: '在 apparatus 上加 -s，得到 apparatuses。',
        mnemonic: '先记中文「仪器」，再把英文 apparatuses 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The two apparatuses measure the same pressure in different ways.',
          chinese: '这两套器械用不同方法测同一种压力。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apparatuses.s1',
          en: 'The two apparatuses measure the same pressure in different ways.',
          zh: '这两套器械用不同方法测同一种压力。',
          structure: 'apparatuses / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「仪器」，对应英文释义：Plural of apparatus, meaning equipment or an organization for a purpose.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apparatuses of about the topic.',
          right: 'This apparatuses belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apparatuses。',
          rule: '名词 apparatuses（仪器）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apparatuses.q1',
          senseId: 'apparatuses.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「仪器」.',
          options: [
            'apparatuses',
            'apparel',
            'apparent'
          ],
          answer: 'apparatuses',
          explain: 'apparatuses 对应「仪器」。'
        },
        {
          id: 'apparatuses.q2',
          senseId: 'apparatuses.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apparatuses?',
          options: [
            '仪器',
            '衣服',
            '无关说法'
          ],
          answer: '仪器',
          explain: '按本词条，apparatuses 是「仪器」。'
        },
        {
          id: 'apparatuses.q3',
          senseId: 'apparatuses.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「仪器」.',
          options: [
            'apparatuses',
            'apparel',
            'apparent'
          ],
          answer: 'apparatuses',
          explain: '空缺处用 apparatuses，不要换成相邻词 apparel。'
        },
        {
          id: 'apparatuses.q4',
          senseId: 'apparatuses.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apparatuses with a neighbour in this list. Which one means 「仪器」?',
          options: [
            'apparatuses',
            'apparel',
            'apparent'
          ],
          answer: 'apparatuses',
          explain: 'apparel 与 apparent 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apparel',
          'apparent'
        ]
      }
    });

  D('apparel', {
      etymology: {
        origin: 'apparel 按现成英语词整词记，意思是「衣服；服装（总称）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apparel',
            text: '现代英语：衣服；服装（总称）。'
          }
        ],
        formationLogic: '不硬拆。看到 apparel 就想到「衣服」。',
        mnemonic: '先记中文「衣服」，再把英文 apparel 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apparel to make the abstract point concrete.',
          chinese: '这节课用一个「衣服」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apparel.s1',
          en: 'The lecture used an apparel to make the abstract point concrete.',
          zh: '这节课用一个「衣服」的例子，把抽象的论点讲具体。',
          structure: 'apparel / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「衣服」，对应英文释义：Clothes, especially of a particular type or for a particular purpose.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apparel of about the topic.',
          right: 'This apparel belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apparel。',
          rule: '名词 apparel（衣服）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apparel.q1',
          senseId: 'apparel.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「衣服」.',
          options: [
            'apparel',
            'apparent',
            'apparently'
          ],
          answer: 'apparel',
          explain: 'apparel 对应「衣服」。'
        },
        {
          id: 'apparel.q2',
          senseId: 'apparel.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apparel?',
          options: [
            '衣服',
            '其他义项',
            '显然'
          ],
          answer: '衣服',
          explain: '按本词条，apparel 是「衣服」。'
        },
        {
          id: 'apparel.q3',
          senseId: 'apparel.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「衣服」.',
          options: [
            'apparel',
            'apparent',
            'apparently'
          ],
          answer: 'apparel',
          explain: '空缺处用 apparel，不要换成相邻词 apparent。'
        },
        {
          id: 'apparel.q4',
          senseId: 'apparel.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apparel with a neighbour in this list. Which one means 「衣服」?',
          options: [
            'apparel',
            'apparent',
            'apparently'
          ],
          answer: 'apparel',
          explain: 'apparent 与 apparently 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apparent',
          'apparently'
        ]
      }
    });

  D('apparent', {
      etymology: {
        origin: 'apparent 按现成英语词整词记，意思是「明显的；表面上的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apparent',
            text: '现代英语：明显的；表面上的。'
          }
        ],
        formationLogic: '不硬拆。看到 apparent 就想到「明显的」。',
        mnemonic: '先记中文「明显的」，再把英文 apparent 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A apparent result needs a second look before anyone acts on it.',
          chinese: '一个「明显的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'apparent.s1',
          en: 'A apparent result needs a second look before anyone acts on it.',
          zh: '一个「明显的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'apparent / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「明显的」，对应英文释义：Easy to see or understand; seeming real but maybe not.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very apparently surprising to us.',
          right: 'The news was apparent.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + apparent。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a apparent + 名词。'
        }
      ],
      quiz: [
        {
          id: 'apparent.q1',
          senseId: 'apparent.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「明显的」.',
          options: [
            'apparent',
            'apparently',
            'appeal'
          ],
          answer: 'apparent',
          explain: 'apparent 对应「明显的」。'
        },
        {
          id: 'apparent.q2',
          senseId: 'apparent.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apparent?',
          options: [
            '明显的',
            '显然',
            '呼吁'
          ],
          answer: '明显的',
          explain: '按本词条，apparent 是「明显的」。'
        },
        {
          id: 'apparent.q3',
          senseId: 'apparent.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'apparent',
            'apparently',
            'appeal'
          ],
          answer: 'apparent',
          explain: '空缺处用 apparent，不要换成相邻词 apparently。'
        },
        {
          id: 'apparent.q4',
          senseId: 'apparent.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apparent with a neighbour in this list. Which one means 「明显的」?',
          options: [
            'apparent',
            'apparently',
            'appeal'
          ],
          answer: 'apparent',
          explain: 'apparently 与 appeal 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apparently',
          'appeal'
        ]
      }
    });

  D('apparently', {
      etymology: {
        origin: '英语派生：apparent + -ly。副词后缀，表示方式。整词义为「显然；据说」。',
        prefix: null,
        root: {
          text: 'apparent',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'apparent',
            text: '基础词，先掌握「apparent」。'
          },
          {
            label: 'apparently',
            text: '英语派生形式，教学义是「显然；据说」。'
          }
        ],
        formationLogic: '在 apparent 上加 -ly，得到 apparently。',
        mnemonic: '先记中文「显然」，再把英文 apparently 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change apparently, so the class could follow each step.',
          chinese: '她「显然」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apparently.s1',
          en: 'She explained the change apparently, so the class could follow each step.',
          zh: '她「显然」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'apparently / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「显然」，对应英文释义：Based on what you have heard or been told; as seems to be the case.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a apparently answer.',
          right: 'She answered apparently.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + apparently，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'apparently.q1',
          senseId: 'apparently.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「显然」.',
          options: [
            'apparently',
            'appeal',
            'appeal to'
          ],
          answer: 'apparently',
          explain: 'apparently 对应「显然」。'
        },
        {
          id: 'apparently.q2',
          senseId: 'apparently.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apparently?',
          options: [
            '显然',
            '呼吁',
            '吸引'
          ],
          answer: '显然',
          explain: '按本词条，apparently 是「显然」。'
        },
        {
          id: 'apparently.q3',
          senseId: 'apparently.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「显然」.',
          options: [
            'apparently',
            'appeal',
            'appeal to'
          ],
          answer: 'apparently',
          explain: '空缺处用 apparently，不要换成相邻词 appeal。'
        },
        {
          id: 'apparently.q4',
          senseId: 'apparently.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apparently with a neighbour in this list. Which one means 「显然」?',
          options: [
            'apparently',
            'appeal',
            'appeal to'
          ],
          answer: 'apparently',
          explain: 'appeal 与 appeal to 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appeal',
          'appeal to'
        ]
      }
    });

  D('appeal', {
      etymology: {
        origin: 'appeal 按现成英语词整词记，意思是「呼吁；吸引力；上诉」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appeal',
            text: '现代英语：呼吁；吸引力；上诉。'
          }
        ],
        formationLogic: '不硬拆。看到 appeal 就想到「呼吁」。',
        mnemonic: '先记中文「呼吁」，再把英文 appeal 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appeal to make the abstract point concrete.',
          chinese: '这节课用一个「呼吁」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appeal.s1',
          en: 'The lecture used an appeal to make the abstract point concrete.',
          zh: '这节课用一个「呼吁」的例子，把抽象的论点讲具体。',
          structure: 'appeal / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「呼吁」，对应英文释义：A strong request; the quality of attracting people; to ask a court to change a decision.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appeal of about the topic.',
          right: 'This appeal belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appeal。',
          rule: '名词 appeal（呼吁）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appeal.q1',
          senseId: 'appeal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「呼吁」.',
          options: [
            'appeal',
            'appeal to',
            'appealing'
          ],
          answer: 'appeal',
          explain: 'appeal 对应「呼吁」。'
        },
        {
          id: 'appeal.q2',
          senseId: 'appeal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appeal?',
          options: [
            '呼吁',
            '吸引',
            '有吸引力的'
          ],
          answer: '呼吁',
          explain: '按本词条，appeal 是「呼吁」。'
        },
        {
          id: 'appeal.q3',
          senseId: 'appeal.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「呼吁」.',
          options: [
            'appeal',
            'appeal to',
            'appealing'
          ],
          answer: 'appeal',
          explain: '空缺处用 appeal，不要换成相邻词 appeal to。'
        },
        {
          id: 'appeal.q4',
          senseId: 'appeal.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appeal with a neighbour in this list. Which one means 「呼吁」?',
          options: [
            'appeal',
            'appeal to',
            'appealing'
          ],
          answer: 'appeal',
          explain: 'appeal to 与 appealing 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appeal to',
          'appealing'
        ]
      }
    });

  D('appeal to', {
      etymology: {
        origin: 'appeal to 按现成英语词整词记，意思是「吸引；呼吁」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appeal to',
            text: '现代英语：吸引；呼吁。'
          }
        ],
        formationLogic: '不硬拆。看到 appeal to 就想到「吸引」。',
        mnemonic: '先记中文「吸引」，再把英文 appeal to 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The quiet campus does not appeal to every applicant.',
          chinese: '安静的校园并不会吸引每一个申请者。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appeal to.s1',
          en: 'The quiet campus does not appeal to every applicant.',
          zh: '安静的校园并不会吸引每一个申请者。',
          structure: 'appeal to / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「吸引」，对应英文释义：To make someone interested, or to ask officially for something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appeal to about the result without a reason.',
          right: 'They appeal to the result and give a reason.',
          reason: 'appeal to 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appeal to + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appeal to.q1',
          senseId: 'appeal to.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「吸引」.',
          options: [
            'appeal to',
            'appealing',
            'appear'
          ],
          answer: 'appeal to',
          explain: 'appeal to 对应「吸引」。'
        },
        {
          id: 'appeal to.q2',
          senseId: 'appeal to.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appeal to?',
          options: [
            '吸引',
            '有吸引力的',
            '无关说法'
          ],
          answer: '吸引',
          explain: '按本词条，appeal to 是「吸引」。'
        },
        {
          id: 'appeal to.q3',
          senseId: 'appeal to.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「吸引」.',
          options: [
            'appeal to',
            'appealing',
            'appear'
          ],
          answer: 'appeal to',
          explain: '空缺处用 appeal to，不要换成相邻词 appealing。'
        },
        {
          id: 'appeal to.q4',
          senseId: 'appeal to.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appeal to with a neighbour in this list. Which one means 「吸引」?',
          options: [
            'appeal to',
            'appealing',
            'appear'
          ],
          answer: 'appeal to',
          explain: 'appealing 与 appear 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appealing',
          'appear'
        ]
      }
    });

  D('appealing', {
      etymology: {
        origin: '英语派生：appeal + -ing。形容词或名词后缀。整词义为「有吸引力的；恳求的」。',
        prefix: null,
        root: {
          text: 'appeal',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ing',
          gloss: '形容词或名词后缀'
        },
        history: [
          {
            label: 'appeal',
            text: '基础词，先掌握「呼吁」。'
          },
          {
            label: 'appealing',
            text: '英语派生形式，教学义是「有吸引力的；恳求的」。'
          }
        ],
        formationLogic: '在 appeal 上加 -ing，得到 appealing。',
        mnemonic: '先记中文「有吸引力的」，再把英文 appealing 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A appealing result needs a second look before anyone acts on it.',
          chinese: '一个「有吸引力的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'appealing.s1',
          en: 'A appealing result needs a second look before anyone acts on it.',
          zh: '一个「有吸引力的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'appealing / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「有吸引力的」，对应英文释义：Attractive or interesting; making you want to do or have something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very appealingly surprising to us.',
          right: 'The news was appealing.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + appealing。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a appealing + 名词。'
        }
      ],
      quiz: [
        {
          id: 'appealing.q1',
          senseId: 'appealing.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「有吸引力的」.',
          options: [
            'appealing',
            'appear',
            'appearance'
          ],
          answer: 'appealing',
          explain: 'appealing 对应「有吸引力的」。'
        },
        {
          id: 'appealing.q2',
          senseId: 'appealing.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appealing?',
          options: [
            '有吸引力的',
            '其他义项',
            '无关说法'
          ],
          answer: '有吸引力的',
          explain: '按本词条，appealing 是「有吸引力的」。'
        },
        {
          id: 'appealing.q3',
          senseId: 'appealing.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'appealing',
            'appear',
            'appearance'
          ],
          answer: 'appealing',
          explain: '空缺处用 appealing，不要换成相邻词 appear。'
        },
        {
          id: 'appealing.q4',
          senseId: 'appealing.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appealing with a neighbour in this list. Which one means 「有吸引力的」?',
          options: [
            'appealing',
            'appear',
            'appearance'
          ],
          answer: 'appealing',
          explain: 'appear 与 appearance 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appear',
          'appearance'
        ]
      }
    });

  D('appear', {
      etymology: {
        origin: 'appear 按现成英语词整词记，意思是「出现；显得；似乎」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appear',
            text: '现代英语：出现；显得；似乎。'
          }
        ],
        formationLogic: '不硬拆。看到 appear 就想到「出现」。',
        mnemonic: '先记中文「出现」，再把英文 appear 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will appear the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（出现）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appear.s1',
          en: 'The team will appear the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（出现）。',
          structure: 'appear / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「出现」，对应英文释义：To start to be seen; to seem.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appear about the result without a reason.',
          right: 'They appear the result and give a reason.',
          reason: 'appear 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appear + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appear.q1',
          senseId: 'appear.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「出现」.',
          options: [
            'appear',
            'appearance',
            'appease'
          ],
          answer: 'appear',
          explain: 'appear 对应「出现」。'
        },
        {
          id: 'appear.q2',
          senseId: 'appear.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appear?',
          options: [
            '出现',
            '其他义项',
            '安抚'
          ],
          answer: '出现',
          explain: '按本词条，appear 是「出现」。'
        },
        {
          id: 'appear.q3',
          senseId: 'appear.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「出现」.',
          options: [
            'appear',
            'appearance',
            'appease'
          ],
          answer: 'appear',
          explain: '空缺处用 appear，不要换成相邻词 appearance。'
        },
        {
          id: 'appear.q4',
          senseId: 'appear.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appear with a neighbour in this list. Which one means 「出现」?',
          options: [
            'appear',
            'appearance',
            'appease'
          ],
          answer: 'appear',
          explain: 'appearance 与 appease 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appearance',
          'appease'
        ]
      }
    });

  D('appearance', {
      etymology: {
        origin: '英语派生：appear + -ance。名词后缀。整词义为「外貌；出现；表象」。',
        prefix: null,
        root: {
          text: 'appear',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ance',
          gloss: '名词后缀'
        },
        history: [
          {
            label: 'appear',
            text: '基础词，先掌握「appear」。'
          },
          {
            label: 'appearance',
            text: '英语派生形式，教学义是「外貌；出现；表象」。'
          }
        ],
        formationLogic: '在 appear 上加 -ance，得到 appearance。',
        mnemonic: '先记中文「外貌」，再把英文 appearance 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appearance to make the abstract point concrete.',
          chinese: '这节课用一个「外貌」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appearance.s1',
          en: 'The lecture used an appearance to make the abstract point concrete.',
          zh: '这节课用一个「外貌」的例子，把抽象的论点讲具体。',
          structure: 'appearance / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「外貌」，对应英文释义：The way someone or something looks; the act of coming into view or being present.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appearance of about the topic.',
          right: 'This appearance belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appearance。',
          rule: '名词 appearance（外貌）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appearance.q1',
          senseId: 'appearance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「外貌」.',
          options: [
            'appearance',
            'appease',
            'appeasement'
          ],
          answer: 'appearance',
          explain: 'appearance 对应「外貌」。'
        },
        {
          id: 'appearance.q2',
          senseId: 'appearance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appearance?',
          options: [
            '外貌',
            '安抚',
            '其他义项'
          ],
          answer: '外貌',
          explain: '按本词条，appearance 是「外貌」。'
        },
        {
          id: 'appearance.q3',
          senseId: 'appearance.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「外貌」.',
          options: [
            'appearance',
            'appease',
            'appeasement'
          ],
          answer: 'appearance',
          explain: '空缺处用 appearance，不要换成相邻词 appease。'
        },
        {
          id: 'appearance.q4',
          senseId: 'appearance.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appearance with a neighbour in this list. Which one means 「外貌」?',
          options: [
            'appearance',
            'appease',
            'appeasement'
          ],
          answer: 'appearance',
          explain: 'appease 与 appeasement 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appease',
          'appeasement'
        ]
      }
    });

  D('appease', {
      etymology: {
        origin: 'appease 按现成英语词整词记，意思是「安抚；平息」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appease',
            text: '现代英语：安抚；平息。'
          }
        ],
        formationLogic: '不硬拆。看到 appease 就想到「安抚」。',
        mnemonic: '先记中文「安抚」，再把英文 appease 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will appease the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（安抚）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appease.s1',
          en: 'The team will appease the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（安抚）。',
          structure: 'appease / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「安抚」，对应英文释义：To make someone calmer by giving them what they want.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appease about the result without a reason.',
          right: 'They appease the result and give a reason.',
          reason: 'appease 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appease + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appease.q1',
          senseId: 'appease.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「安抚」.',
          options: [
            'appease',
            'appeasement',
            'appendage'
          ],
          answer: 'appease',
          explain: 'appease 对应「安抚」。'
        },
        {
          id: 'appease.q2',
          senseId: 'appease.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appease?',
          options: [
            '安抚',
            '其他义项',
            '无关说法'
          ],
          answer: '安抚',
          explain: '按本词条，appease 是「安抚」。'
        },
        {
          id: 'appease.q3',
          senseId: 'appease.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「安抚」.',
          options: [
            'appease',
            'appeasement',
            'appendage'
          ],
          answer: 'appease',
          explain: '空缺处用 appease，不要换成相邻词 appeasement。'
        },
        {
          id: 'appease.q4',
          senseId: 'appease.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appease with a neighbour in this list. Which one means 「安抚」?',
          options: [
            'appease',
            'appeasement',
            'appendage'
          ],
          answer: 'appease',
          explain: 'appeasement 与 appendage 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appeasement',
          'appendage'
        ]
      }
    });

  D('appeasement', {
      etymology: {
        origin: '英语派生：appease + -ment。名词后缀，表示行为或结果。整词义为「安抚；绥靖」。',
        prefix: null,
        root: {
          text: 'appease',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ment',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'appease',
            text: '基础词，先掌握「安抚」。'
          },
          {
            label: 'appeasement',
            text: '英语派生形式，教学义是「安抚；绥靖」。'
          }
        ],
        formationLogic: '在 appease 上加 -ment，得到 appeasement。',
        mnemonic: '先记中文「安抚」，再把英文 appeasement 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appeasement to make the abstract point concrete.',
          chinese: '这节课用一个「安抚」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appeasement.s1',
          en: 'The lecture used an appeasement to make the abstract point concrete.',
          zh: '这节课用一个「安抚」的例子，把抽象的论点讲具体。',
          structure: 'appeasement / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「安抚」，对应英文释义：The act of giving in to someones demands in order to avoid conflict.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appeasement of about the topic.',
          right: 'This appeasement belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appeasement。',
          rule: '名词 appeasement（安抚）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appeasement.q1',
          senseId: 'appeasement.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「安抚」.',
          options: [
            'appeasement',
            'appendage',
            'appendices'
          ],
          answer: 'appeasement',
          explain: 'appeasement 对应「安抚」。'
        },
        {
          id: 'appeasement.q2',
          senseId: 'appeasement.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appeasement?',
          options: [
            '安抚',
            '其他义项',
            '附录'
          ],
          answer: '安抚',
          explain: '按本词条，appeasement 是「安抚」。'
        },
        {
          id: 'appeasement.q3',
          senseId: 'appeasement.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「安抚」.',
          options: [
            'appeasement',
            'appendage',
            'appendices'
          ],
          answer: 'appeasement',
          explain: '空缺处用 appeasement，不要换成相邻词 appendage。'
        },
        {
          id: 'appeasement.q4',
          senseId: 'appeasement.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appeasement with a neighbour in this list. Which one means 「安抚」?',
          options: [
            'appeasement',
            'appendage',
            'appendices'
          ],
          answer: 'appeasement',
          explain: 'appendage 与 appendices 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appendage',
          'appendices'
        ]
      }
    });

  D('appendage', {
      etymology: {
        origin: 'appendage 按现成英语词整词记，意思是「附属物；附肢」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appendage',
            text: '现代英语：附属物；附肢。'
          }
        ],
        formationLogic: '不硬拆。看到 appendage 就想到「附属物」。',
        mnemonic: '先记中文「附属物」，再把英文 appendage 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appendage to make the abstract point concrete.',
          chinese: '这节课用一个「附属物」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appendage.s1',
          en: 'The lecture used an appendage to make the abstract point concrete.',
          zh: '这节课用一个「附属物」的例子，把抽象的论点讲具体。',
          structure: 'appendage / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「附属物」，对应英文释义：A part that is joined to or connected with the main part of something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appendage of about the topic.',
          right: 'This appendage belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appendage。',
          rule: '名词 appendage（附属物）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appendage.q1',
          senseId: 'appendage.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「附属物」.',
          options: [
            'appendage',
            'appendices',
            'appendicitis'
          ],
          answer: 'appendage',
          explain: 'appendage 对应「附属物」。'
        },
        {
          id: 'appendage.q2',
          senseId: 'appendage.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appendage?',
          options: [
            '附属物',
            '附录',
            '阑尾炎'
          ],
          answer: '附属物',
          explain: '按本词条，appendage 是「附属物」。'
        },
        {
          id: 'appendage.q3',
          senseId: 'appendage.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「附属物」.',
          options: [
            'appendage',
            'appendices',
            'appendicitis'
          ],
          answer: 'appendage',
          explain: '空缺处用 appendage，不要换成相邻词 appendices。'
        },
        {
          id: 'appendage.q4',
          senseId: 'appendage.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appendage with a neighbour in this list. Which one means 「附属物」?',
          options: [
            'appendage',
            'appendices',
            'appendicitis'
          ],
          answer: 'appendage',
          explain: 'appendices 与 appendicitis 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appendices',
          'appendicitis'
        ]
      }
    });

  D('appendices', {
      etymology: {
        origin: 'appendices 按现成英语词整词记，意思是「附录；阑尾（复数）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appendices',
            text: '现代英语：附录；阑尾（复数）。'
          }
        ],
        formationLogic: '不硬拆。看到 appendices 就想到「附录」。',
        mnemonic: '先记中文「附录」，再把英文 appendices 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Both appendices list the raw figures from the survey.',
          chinese: '两个附录都列出了调查的原始数字。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appendices.s1',
          en: 'Both appendices list the raw figures from the survey.',
          zh: '两个附录都列出了调查的原始数字。',
          structure: 'appendices / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「附录」，对应英文释义：Plural of appendix: extra sections at the end of a book, or the small organs in the body.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appendices of about the topic.',
          right: 'This appendices belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appendices。',
          rule: '名词 appendices（附录）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appendices.q1',
          senseId: 'appendices.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「附录」.',
          options: [
            'appendices',
            'appendicitis',
            'appendix'
          ],
          answer: 'appendices',
          explain: 'appendices 对应「附录」。'
        },
        {
          id: 'appendices.q2',
          senseId: 'appendices.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appendices?',
          options: [
            '附录',
            '阑尾炎',
            '无关说法'
          ],
          answer: '附录',
          explain: '按本词条，appendices 是「附录」。'
        },
        {
          id: 'appendices.q3',
          senseId: 'appendices.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「附录」.',
          options: [
            'appendices',
            'appendicitis',
            'appendix'
          ],
          answer: 'appendices',
          explain: '空缺处用 appendices，不要换成相邻词 appendicitis。'
        },
        {
          id: 'appendices.q4',
          senseId: 'appendices.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appendices with a neighbour in this list. Which one means 「附录」?',
          options: [
            'appendices',
            'appendicitis',
            'appendix'
          ],
          answer: 'appendices',
          explain: 'appendicitis 与 appendix 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appendicitis',
          'appendix'
        ]
      }
    });

  D('appendicitis', {
      etymology: {
        origin: 'appendicitis 按现成英语词整词记，意思是「阑尾炎」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appendicitis',
            text: '现代英语：阑尾炎。'
          }
        ],
        formationLogic: '不硬拆。看到 appendicitis 就想到「阑尾炎」。',
        mnemonic: '先记中文「阑尾炎」，再把英文 appendicitis 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appendicitis to make the abstract point concrete.',
          chinese: '这节课用一个「阑尾炎」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appendicitis.s1',
          en: 'The lecture used an appendicitis to make the abstract point concrete.',
          zh: '这节课用一个「阑尾炎」的例子，把抽象的论点讲具体。',
          structure: 'appendicitis / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「阑尾炎」，对应英文释义：Inflammation of the appendix, which causes severe pain in the lower right side of the stomach.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appendicitis of about the topic.',
          right: 'This appendicitis belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appendicitis。',
          rule: '名词 appendicitis（阑尾炎）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appendicitis.q1',
          senseId: 'appendicitis.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「阑尾炎」.',
          options: [
            'appendicitis',
            'appendix',
            'appetite'
          ],
          answer: 'appendicitis',
          explain: 'appendicitis 对应「阑尾炎」。'
        },
        {
          id: 'appendicitis.q2',
          senseId: 'appendicitis.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appendicitis?',
          options: [
            '阑尾炎',
            '附录',
            '食欲'
          ],
          answer: '阑尾炎',
          explain: '按本词条，appendicitis 是「阑尾炎」。'
        },
        {
          id: 'appendicitis.q3',
          senseId: 'appendicitis.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「阑尾炎」.',
          options: [
            'appendicitis',
            'appendix',
            'appetite'
          ],
          answer: 'appendicitis',
          explain: '空缺处用 appendicitis，不要换成相邻词 appendix。'
        },
        {
          id: 'appendicitis.q4',
          senseId: 'appendicitis.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appendicitis with a neighbour in this list. Which one means 「阑尾炎」?',
          options: [
            'appendicitis',
            'appendix',
            'appetite'
          ],
          answer: 'appendicitis',
          explain: 'appendix 与 appetite 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appendix',
          'appetite'
        ]
      }
    });

  D('appendix', {
      etymology: {
        origin: 'appendix 按现成英语词整词记，意思是「附录；阑尾」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appendix',
            text: '现代英语：附录；阑尾。'
          }
        ],
        formationLogic: '不硬拆。看到 appendix 就想到「附录」。',
        mnemonic: '先记中文「附录」，再把英文 appendix 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appendix to make the abstract point concrete.',
          chinese: '这节课用一个「附录」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appendix.s1',
          en: 'The lecture used an appendix to make the abstract point concrete.',
          zh: '这节课用一个「附录」的例子，把抽象的论点讲具体。',
          structure: 'appendix / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「附录」，对应英文释义：Extra information at the end of a book; a small organ in the body.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appendix of about the topic.',
          right: 'This appendix belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appendix。',
          rule: '名词 appendix（附录）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appendix.q1',
          senseId: 'appendix.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「附录」.',
          options: [
            'appendix',
            'appetite',
            'appetizer'
          ],
          answer: 'appendix',
          explain: 'appendix 对应「附录」。'
        },
        {
          id: 'appendix.q2',
          senseId: 'appendix.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appendix?',
          options: [
            '附录',
            '食欲',
            '开胃菜'
          ],
          answer: '附录',
          explain: '按本词条，appendix 是「附录」。'
        },
        {
          id: 'appendix.q3',
          senseId: 'appendix.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「附录」.',
          options: [
            'appendix',
            'appetite',
            'appetizer'
          ],
          answer: 'appendix',
          explain: '空缺处用 appendix，不要换成相邻词 appetite。'
        },
        {
          id: 'appendix.q4',
          senseId: 'appendix.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appendix with a neighbour in this list. Which one means 「附录」?',
          options: [
            'appendix',
            'appetite',
            'appetizer'
          ],
          answer: 'appendix',
          explain: 'appetite 与 appetizer 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appetite',
          'appetizer'
        ]
      }
    });

  D('appetite', {
      etymology: {
        origin: 'appetite 按现成英语词整词记，意思是「食欲；欲望」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appetite',
            text: '现代英语：食欲；欲望。'
          }
        ],
        formationLogic: '不硬拆。看到 appetite 就想到「食欲」。',
        mnemonic: '先记中文「食欲」，再把英文 appetite 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appetite to make the abstract point concrete.',
          chinese: '这节课用一个「食欲」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appetite.s1',
          en: 'The lecture used an appetite to make the abstract point concrete.',
          zh: '这节课用一个「食欲」的例子，把抽象的论点讲具体。',
          structure: 'appetite / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「食欲」，对应英文释义：The wish to eat; a strong desire for something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appetite of about the topic.',
          right: 'This appetite belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appetite。',
          rule: '名词 appetite（食欲）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appetite.q1',
          senseId: 'appetite.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「食欲」.',
          options: [
            'appetite',
            'appetizer',
            'applaud'
          ],
          answer: 'appetite',
          explain: 'appetite 对应「食欲」。'
        },
        {
          id: 'appetite.q2',
          senseId: 'appetite.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appetite?',
          options: [
            '食欲',
            '开胃菜',
            '鼓掌'
          ],
          answer: '食欲',
          explain: '按本词条，appetite 是「食欲」。'
        },
        {
          id: 'appetite.q3',
          senseId: 'appetite.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「食欲」.',
          options: [
            'appetite',
            'appetizer',
            'applaud'
          ],
          answer: 'appetite',
          explain: '空缺处用 appetite，不要换成相邻词 appetizer。'
        },
        {
          id: 'appetite.q4',
          senseId: 'appetite.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appetite with a neighbour in this list. Which one means 「食欲」?',
          options: [
            'appetite',
            'appetizer',
            'applaud'
          ],
          answer: 'appetite',
          explain: 'appetizer 与 applaud 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appetizer',
          'applaud'
        ]
      }
    });

  D('appetizer', {
      etymology: {
        origin: 'appetizer 按现成英语词整词记，意思是「开胃菜；开胃食品」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appetizer',
            text: '现代英语：开胃菜；开胃食品。'
          }
        ],
        formationLogic: '不硬拆。看到 appetizer 就想到「开胃菜」。',
        mnemonic: '先记中文「开胃菜」，再把英文 appetizer 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appetizer to make the abstract point concrete.',
          chinese: '这节课用一个「开胃菜」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appetizer.s1',
          en: 'The lecture used an appetizer to make the abstract point concrete.',
          zh: '这节课用一个「开胃菜」的例子，把抽象的论点讲具体。',
          structure: 'appetizer / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「开胃菜」，对应英文释义：A small amount of food served before the main meal to make you hungry.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appetizer of about the topic.',
          right: 'This appetizer belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appetizer。',
          rule: '名词 appetizer（开胃菜）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appetizer.q1',
          senseId: 'appetizer.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「开胃菜」.',
          options: [
            'appetizer',
            'applaud',
            'applause'
          ],
          answer: 'appetizer',
          explain: 'appetizer 对应「开胃菜」。'
        },
        {
          id: 'appetizer.q2',
          senseId: 'appetizer.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appetizer?',
          options: [
            '开胃菜',
            '鼓掌',
            '反方向'
          ],
          answer: '开胃菜',
          explain: '按本词条，appetizer 是「开胃菜」。'
        },
        {
          id: 'appetizer.q3',
          senseId: 'appetizer.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「开胃菜」.',
          options: [
            'appetizer',
            'applaud',
            'applause'
          ],
          answer: 'appetizer',
          explain: '空缺处用 appetizer，不要换成相邻词 applaud。'
        },
        {
          id: 'appetizer.q4',
          senseId: 'appetizer.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appetizer with a neighbour in this list. Which one means 「开胃菜」?',
          options: [
            'appetizer',
            'applaud',
            'applause'
          ],
          answer: 'appetizer',
          explain: 'applaud 与 applause 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'applaud',
          'applause'
        ]
      }
    });

  D('applaud', {
      etymology: {
        origin: 'applaud 按现成英语词整词记，意思是「鼓掌；称赞」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'applaud',
            text: '现代英语：鼓掌；称赞。'
          }
        ],
        formationLogic: '不硬拆。看到 applaud 就想到「鼓掌」。',
        mnemonic: '先记中文「鼓掌」，再把英文 applaud 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will applaud the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（鼓掌）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'applaud.s1',
          en: 'The team will applaud the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（鼓掌）。',
          structure: 'applaud / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「鼓掌」，对应英文释义：To clap to show approval; to praise.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They applaud about the result without a reason.',
          right: 'They applaud the result and give a reason.',
          reason: 'applaud 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + applaud + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'applaud.q1',
          senseId: 'applaud.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「鼓掌」.',
          options: [
            'applaud',
            'applause',
            'apple'
          ],
          answer: 'applaud',
          explain: 'applaud 对应「鼓掌」。'
        },
        {
          id: 'applaud.q2',
          senseId: 'applaud.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits applaud?',
          options: [
            '鼓掌',
            '反方向',
            '无关说法'
          ],
          answer: '鼓掌',
          explain: '按本词条，applaud 是「鼓掌」。'
        },
        {
          id: 'applaud.q3',
          senseId: 'applaud.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「鼓掌」.',
          options: [
            'applaud',
            'applause',
            'apple'
          ],
          answer: 'applaud',
          explain: '空缺处用 applaud，不要换成相邻词 applause。'
        },
        {
          id: 'applaud.q4',
          senseId: 'applaud.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse applaud with a neighbour in this list. Which one means 「鼓掌」?',
          options: [
            'applaud',
            'applause',
            'apple'
          ],
          answer: 'applaud',
          explain: 'applause 与 apple 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'applause',
          'apple'
        ]
      }
    });

  D('applause', {
      etymology: {
        origin: 'applause 按现成英语词整词记，意思是「鼓掌；喝彩」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'applause',
            text: '现代英语：鼓掌；喝彩。'
          }
        ],
        formationLogic: '不硬拆。看到 applause 就想到「鼓掌」。',
        mnemonic: '先记中文「鼓掌」，再把英文 applause 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an applause to make the abstract point concrete.',
          chinese: '这节课用一个「鼓掌」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'applause.s1',
          en: 'The lecture used an applause to make the abstract point concrete.',
          zh: '这节课用一个「鼓掌」的例子，把抽象的论点讲具体。',
          structure: 'applause / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「鼓掌」，对应英文释义：The sound made by a group of people clapping their hands to show approval.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the applause of about the topic.',
          right: 'This applause belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 applause。',
          rule: '名词 applause（鼓掌）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'applause.q1',
          senseId: 'applause.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「鼓掌」.',
          options: [
            'applause',
            'apple',
            'appliance'
          ],
          answer: 'applause',
          explain: 'applause 对应「鼓掌」。'
        },
        {
          id: 'applause.q2',
          senseId: 'applause.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits applause?',
          options: [
            '鼓掌',
            '其他义项',
            '无关说法'
          ],
          answer: '鼓掌',
          explain: '按本词条，applause 是「鼓掌」。'
        },
        {
          id: 'applause.q3',
          senseId: 'applause.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「鼓掌」.',
          options: [
            'applause',
            'apple',
            'appliance'
          ],
          answer: 'applause',
          explain: '空缺处用 applause，不要换成相邻词 apple。'
        },
        {
          id: 'applause.q4',
          senseId: 'applause.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse applause with a neighbour in this list. Which one means 「鼓掌」?',
          options: [
            'applause',
            'apple',
            'appliance'
          ],
          answer: 'applause',
          explain: 'apple 与 appliance 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apple',
          'appliance'
        ]
      }
    });

  D('apple', {
      etymology: {
        origin: 'apple 按现成英语词整词记，意思是「苹果」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apple',
            text: '现代英语：苹果。'
          }
        ],
        formationLogic: '不硬拆。看到 apple 就想到「苹果」。',
        mnemonic: '先记中文「苹果」，再把英文 apple 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apple to make the abstract point concrete.',
          chinese: '这节课用一个「苹果」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apple.s1',
          en: 'The lecture used an apple to make the abstract point concrete.',
          zh: '这节课用一个「苹果」的例子，把抽象的论点讲具体。',
          structure: 'apple / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「苹果」，对应英文释义：A round fruit with red or green skin.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apple of about the topic.',
          right: 'This apple belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apple。',
          rule: '名词 apple（苹果）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apple.q1',
          senseId: 'apple.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「苹果」.',
          options: [
            'apple',
            'appliance',
            'applicable'
          ],
          answer: 'apple',
          explain: 'apple 对应「苹果」。'
        },
        {
          id: 'apple.q2',
          senseId: 'apple.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apple?',
          options: [
            '苹果',
            '其他义项',
            '适用的'
          ],
          answer: '苹果',
          explain: '按本词条，apple 是「苹果」。'
        },
        {
          id: 'apple.q3',
          senseId: 'apple.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「苹果」.',
          options: [
            'apple',
            'appliance',
            'applicable'
          ],
          answer: 'apple',
          explain: '空缺处用 apple，不要换成相邻词 appliance。'
        },
        {
          id: 'apple.q4',
          senseId: 'apple.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apple with a neighbour in this list. Which one means 「苹果」?',
          options: [
            'apple',
            'appliance',
            'applicable'
          ],
          answer: 'apple',
          explain: 'appliance 与 applicable 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appliance',
          'applicable'
        ]
      }
    });

  D('appliance', {
      etymology: {
        origin: '英语派生：apply + -ance。名词后缀。整词义为「（家用）电器」。',
        prefix: null,
        root: {
          text: 'apply',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ance',
          gloss: '名词后缀'
        },
        history: [
          {
            label: 'apply',
            text: '基础词，先掌握「申请」。'
          },
          {
            label: 'appliance',
            text: '英语派生形式，教学义是「（家用）电器」。'
          }
        ],
        formationLogic: '在 apply 上加 -ance，得到 appliance。',
        mnemonic: '先记中文「（家用）电器」，再把英文 appliance 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appliance to make the abstract point concrete.',
          chinese: '这节课用一个「（家用）电器」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appliance.s1',
          en: 'The lecture used an appliance to make the abstract point concrete.',
          zh: '这节课用一个「（家用）电器」的例子，把抽象的论点讲具体。',
          structure: 'appliance / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「（家用）电器」，对应英文释义：A machine used in the home, such as a fridge.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appliance of about the topic.',
          right: 'This appliance belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appliance。',
          rule: '名词 appliance（（家用）电器）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appliance.q1',
          senseId: 'appliance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「（家用）电器」.',
          options: [
            'appliance',
            'applicable',
            'applicant'
          ],
          answer: 'appliance',
          explain: 'appliance 对应「（家用）电器」。'
        },
        {
          id: 'appliance.q2',
          senseId: 'appliance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appliance?',
          options: [
            '（家用）电器',
            '适用的',
            '申请人'
          ],
          answer: '（家用）电器',
          explain: '按本词条，appliance 是「（家用）电器」。'
        },
        {
          id: 'appliance.q3',
          senseId: 'appliance.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「（家用）电器」.',
          options: [
            'appliance',
            'applicable',
            'applicant'
          ],
          answer: 'appliance',
          explain: '空缺处用 appliance，不要换成相邻词 applicable。'
        },
        {
          id: 'appliance.q4',
          senseId: 'appliance.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appliance with a neighbour in this list. Which one means 「（家用）电器」?',
          options: [
            'appliance',
            'applicable',
            'applicant'
          ],
          answer: 'appliance',
          explain: 'applicable 与 applicant 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'applicable',
          'applicant'
        ]
      }
    });

  D('applicable', {
      etymology: {
        origin: 'applicable 按现成英语词整词记，意思是「适用的；相关的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'applicable',
            text: '现代英语：适用的；相关的。'
          }
        ],
        formationLogic: '不硬拆。看到 applicable 就想到「适用的」。',
        mnemonic: '先记中文「适用的」，再把英文 applicable 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A applicable result needs a second look before anyone acts on it.',
          chinese: '一个「适用的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'applicable.s1',
          en: 'A applicable result needs a second look before anyone acts on it.',
          zh: '一个「适用的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'applicable / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「适用的」，对应英文释义：Relevant or appropriate to a particular person or situation.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very applicablely surprising to us.',
          right: 'The news was applicable.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + applicable。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a applicable + 名词。'
        }
      ],
      quiz: [
        {
          id: 'applicable.q1',
          senseId: 'applicable.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「适用的」.',
          options: [
            'applicable',
            'applicant',
            'application'
          ],
          answer: 'applicable',
          explain: 'applicable 对应「适用的」。'
        },
        {
          id: 'applicable.q2',
          senseId: 'applicable.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits applicable?',
          options: [
            '适用的',
            '申请人',
            '无关说法'
          ],
          answer: '适用的',
          explain: '按本词条，applicable 是「适用的」。'
        },
        {
          id: 'applicable.q3',
          senseId: 'applicable.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'applicable',
            'applicant',
            'application'
          ],
          answer: 'applicable',
          explain: '空缺处用 applicable，不要换成相邻词 applicant。'
        },
        {
          id: 'applicable.q4',
          senseId: 'applicable.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse applicable with a neighbour in this list. Which one means 「适用的」?',
          options: [
            'applicable',
            'applicant',
            'application'
          ],
          answer: 'applicable',
          explain: 'applicant 与 application 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'applicant',
          'application'
        ]
      }
    });

  D('applicant', {
      etymology: {
        origin: 'applicant 按现成英语词整词记，意思是「申请人」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'applicant',
            text: '现代英语：申请人。'
          }
        ],
        formationLogic: '不硬拆。看到 applicant 就想到「申请人」。',
        mnemonic: '先记中文「申请人」，再把英文 applicant 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an applicant to make the abstract point concrete.',
          chinese: '这节课用一个「申请人」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'applicant.s1',
          en: 'The lecture used an applicant to make the abstract point concrete.',
          zh: '这节课用一个「申请人」的例子，把抽象的论点讲具体。',
          structure: 'applicant / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「申请人」，对应英文释义：A person who formally applies for a job, course, or other opportunity.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the applicant of about the topic.',
          right: 'This applicant belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 applicant。',
          rule: '名词 applicant（申请人）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'applicant.q1',
          senseId: 'applicant.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「申请人」.',
          options: [
            'applicant',
            'application',
            'applied'
          ],
          answer: 'applicant',
          explain: 'applicant 对应「申请人」。'
        },
        {
          id: 'applicant.q2',
          senseId: 'applicant.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits applicant?',
          options: [
            '申请人',
            '其他义项',
            '应用的'
          ],
          answer: '申请人',
          explain: '按本词条，applicant 是「申请人」。'
        },
        {
          id: 'applicant.q3',
          senseId: 'applicant.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「申请人」.',
          options: [
            'applicant',
            'application',
            'applied'
          ],
          answer: 'applicant',
          explain: '空缺处用 applicant，不要换成相邻词 application。'
        },
        {
          id: 'applicant.q4',
          senseId: 'applicant.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse applicant with a neighbour in this list. Which one means 「申请人」?',
          options: [
            'applicant',
            'application',
            'applied'
          ],
          answer: 'applicant',
          explain: 'application 与 applied 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'application',
          'applied'
        ]
      }
    });

  D('application', {
      etymology: {
        origin: 'application 按现成英语词整词记，意思是「申请；应用；应用程序」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'application',
            text: '现代英语：申请；应用；应用程序。'
          }
        ],
        formationLogic: '不硬拆。看到 application 就想到「申请」。',
        mnemonic: '先记中文「申请」，再把英文 application 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an application to make the abstract point concrete.',
          chinese: '这节课用一个「申请」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'application.s1',
          en: 'The lecture used an application to make the abstract point concrete.',
          zh: '这节课用一个「申请」的例子，把抽象的论点讲具体。',
          structure: 'application / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「申请」，对应英文释义：A formal request for something; the practical use of a theory or method; a computer program.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the application of about the topic.',
          right: 'This application belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 application。',
          rule: '名词 application（申请）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'application.q1',
          senseId: 'application.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「申请」.',
          options: [
            'application',
            'applied',
            'apply'
          ],
          answer: 'application',
          explain: 'application 对应「申请」。'
        },
        {
          id: 'application.q2',
          senseId: 'application.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits application?',
          options: [
            '申请',
            '应用的',
            '其他义项'
          ],
          answer: '申请',
          explain: '按本词条，application 是「申请」。'
        },
        {
          id: 'application.q3',
          senseId: 'application.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「申请」.',
          options: [
            'application',
            'applied',
            'apply'
          ],
          answer: 'application',
          explain: '空缺处用 application，不要换成相邻词 applied。'
        },
        {
          id: 'application.q4',
          senseId: 'application.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse application with a neighbour in this list. Which one means 「申请」?',
          options: [
            'application',
            'applied',
            'apply'
          ],
          answer: 'application',
          explain: 'applied 与 apply 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'applied',
          'apply'
        ]
      }
    });

  D('applied', {
      etymology: {
        origin: '英语派生：apply + -ed。形容词后缀，表示已经如此。整词义为「应用的；实用的」。',
        prefix: null,
        root: {
          text: 'apply',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'apply',
            text: '基础词，先掌握「申请」。'
          },
          {
            label: 'applied',
            text: '英语派生形式，教学义是「应用的；实用的」。'
          }
        ],
        formationLogic: '在 apply 上加 -ed，得到 applied。',
        mnemonic: '先记中文「应用的」，再把英文 applied 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A applied result needs a second look before anyone acts on it.',
          chinese: '一个「应用的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'applied.s1',
          en: 'A applied result needs a second look before anyone acts on it.',
          zh: '一个「应用的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'applied / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「应用的」，对应英文释义：Used for a practical purpose rather than as pure theory.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very appliedly surprising to us.',
          right: 'The news was applied.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + applied。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a applied + 名词。'
        }
      ],
      quiz: [
        {
          id: 'applied.q1',
          senseId: 'applied.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「应用的」.',
          options: [
            'applied',
            'apply',
            'appoint'
          ],
          answer: 'applied',
          explain: 'applied 对应「应用的」。'
        },
        {
          id: 'applied.q2',
          senseId: 'applied.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits applied?',
          options: [
            '应用的',
            '申请',
            '任命'
          ],
          answer: '应用的',
          explain: '按本词条，applied 是「应用的」。'
        },
        {
          id: 'applied.q3',
          senseId: 'applied.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'applied',
            'apply',
            'appoint'
          ],
          answer: 'applied',
          explain: '空缺处用 applied，不要换成相邻词 apply。'
        },
        {
          id: 'applied.q4',
          senseId: 'applied.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse applied with a neighbour in this list. Which one means 「应用的」?',
          options: [
            'applied',
            'apply',
            'appoint'
          ],
          answer: 'applied',
          explain: 'apply 与 appoint 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apply',
          'appoint'
        ]
      }
    });

  D('apply', {
      etymology: {
        origin: '英语派生：app + -ly。副词后缀，表示方式。整词义为「申请；应用；涂」。',
        prefix: null,
        root: {
          text: 'app',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'app',
            text: '基础词，先掌握「app」。'
          },
          {
            label: 'apply',
            text: '英语派生形式，教学义是「申请；应用；涂」。'
          }
        ],
        formationLogic: '在 app 上加 -ly，得到 apply。',
        mnemonic: '先记中文「申请」，再把英文 apply 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Apply the rule to a fresh example, not only to the one in the book.',
          chinese: '把这条规则用到一个新例子上，不要只对着书里的那一个。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'apply.s1',
          en: 'Apply the rule to a fresh example, not only to the one in the book.',
          zh: '把这条规则用到一个新例子上，不要只对着书里的那一个。',
          structure: 'apply / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「申请」，对应英文释义：To make a formal request; to use something; to put on a surface.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They apply about the result without a reason.',
          right: 'They apply the result and give a reason.',
          reason: 'apply 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + apply + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'apply.q1',
          senseId: 'apply.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「申请」.',
          options: [
            'apply',
            'appoint',
            'appointment'
          ],
          answer: 'apply',
          explain: 'apply 对应「申请」。'
        },
        {
          id: 'apply.q2',
          senseId: 'apply.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apply?',
          options: [
            '申请',
            '任命',
            '预约'
          ],
          answer: '申请',
          explain: '按本词条，apply 是「申请」。'
        },
        {
          id: 'apply.q3',
          senseId: 'apply.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「申请」.',
          options: [
            'apply',
            'appoint',
            'appointment'
          ],
          answer: 'apply',
          explain: '空缺处用 apply，不要换成相邻词 appoint。'
        },
        {
          id: 'apply.q4',
          senseId: 'apply.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apply with a neighbour in this list. Which one means 「申请」?',
          options: [
            'apply',
            'appoint',
            'appointment'
          ],
          answer: 'apply',
          explain: 'appoint 与 appointment 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appoint',
          'appointment'
        ]
      }
    });

  D('appoint', {
      etymology: {
        origin: 'appoint 按现成英语词整词记，意思是「任命；约定」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appoint',
            text: '现代英语：任命；约定。'
          }
        ],
        formationLogic: '不硬拆。看到 appoint 就想到「任命」。',
        mnemonic: '先记中文「任命」，再把英文 appoint 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will appoint the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（任命）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appoint.s1',
          en: 'The team will appoint the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（任命）。',
          structure: 'appoint / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「任命」，对应英文释义：To choose someone for a job; to set a time.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appoint about the result without a reason.',
          right: 'They appoint the result and give a reason.',
          reason: 'appoint 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appoint + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appoint.q1',
          senseId: 'appoint.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任命」.',
          options: [
            'appoint',
            'appointment',
            'appraisal'
          ],
          answer: 'appoint',
          explain: 'appoint 对应「任命」。'
        },
        {
          id: 'appoint.q2',
          senseId: 'appoint.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appoint?',
          options: [
            '任命',
            '预约',
            '评估'
          ],
          answer: '任命',
          explain: '按本词条，appoint 是「任命」。'
        },
        {
          id: 'appoint.q3',
          senseId: 'appoint.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「任命」.',
          options: [
            'appoint',
            'appointment',
            'appraisal'
          ],
          answer: 'appoint',
          explain: '空缺处用 appoint，不要换成相邻词 appointment。'
        },
        {
          id: 'appoint.q4',
          senseId: 'appoint.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appoint with a neighbour in this list. Which one means 「任命」?',
          options: [
            'appoint',
            'appointment',
            'appraisal'
          ],
          answer: 'appoint',
          explain: 'appointment 与 appraisal 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appointment',
          'appraisal'
        ]
      }
    });

  D('appointment', {
      etymology: {
        origin: '英语派生：appoint + -ment。名词后缀，表示行为或结果。整词义为「预约；任命」。',
        prefix: null,
        root: {
          text: 'appoint',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ment',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'appoint',
            text: '基础词，先掌握「任命」。'
          },
          {
            label: 'appointment',
            text: '英语派生形式，教学义是「预约；任命」。'
          }
        ],
        formationLogic: '在 appoint 上加 -ment，得到 appointment。',
        mnemonic: '先记中文「预约」，再把英文 appointment 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appointment to make the abstract point concrete.',
          chinese: '这节课用一个「预约」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appointment.s1',
          en: 'The lecture used an appointment to make the abstract point concrete.',
          zh: '这节课用一个「预约」的例子，把抽象的论点讲具体。',
          structure: 'appointment / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「预约」，对应英文释义：An arrangement to meet someone at a particular time; the act of giving someone a job.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appointment of about the topic.',
          right: 'This appointment belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appointment。',
          rule: '名词 appointment（预约）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appointment.q1',
          senseId: 'appointment.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「预约」.',
          options: [
            'appointment',
            'appraisal',
            'appraise'
          ],
          answer: 'appointment',
          explain: 'appointment 对应「预约」。'
        },
        {
          id: 'appointment.q2',
          senseId: 'appointment.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appointment?',
          options: [
            '预约',
            '评估',
            '无关说法'
          ],
          answer: '预约',
          explain: '按本词条，appointment 是「预约」。'
        },
        {
          id: 'appointment.q3',
          senseId: 'appointment.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「预约」.',
          options: [
            'appointment',
            'appraisal',
            'appraise'
          ],
          answer: 'appointment',
          explain: '空缺处用 appointment，不要换成相邻词 appraisal。'
        },
        {
          id: 'appointment.q4',
          senseId: 'appointment.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appointment with a neighbour in this list. Which one means 「预约」?',
          options: [
            'appointment',
            'appraisal',
            'appraise'
          ],
          answer: 'appointment',
          explain: 'appraisal 与 appraise 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appraisal',
          'appraise'
        ]
      }
    });

  D('appraisal', {
      etymology: {
        origin: '英语派生：appraise + -al。形容词后缀。整词义为「评估；评价」。',
        prefix: null,
        root: {
          text: 'appraise',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'appraise',
            text: '基础词，先掌握「评估」。'
          },
          {
            label: 'appraisal',
            text: '英语派生形式，教学义是「评估；评价」。'
          }
        ],
        formationLogic: '在 appraise 上加 -al，得到 appraisal。',
        mnemonic: '先记中文「评估」，再把英文 appraisal 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appraisal to make the abstract point concrete.',
          chinese: '这节课用一个「评估」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appraisal.s1',
          en: 'The lecture used an appraisal to make the abstract point concrete.',
          zh: '这节课用一个「评估」的例子，把抽象的论点讲具体。',
          structure: 'appraisal / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「评估」，对应英文释义：A judgment about the value, quality, or nature of someone or something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appraisal of about the topic.',
          right: 'This appraisal belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appraisal。',
          rule: '名词 appraisal（评估）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appraisal.q1',
          senseId: 'appraisal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「评估」.',
          options: [
            'appraisal',
            'appraise',
            'appreciate'
          ],
          answer: 'appraisal',
          explain: 'appraisal 对应「评估」。'
        },
        {
          id: 'appraisal.q2',
          senseId: 'appraisal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appraisal?',
          options: [
            '评估',
            '无关说法',
            '感激'
          ],
          answer: '评估',
          explain: '按本词条，appraisal 是「评估」。'
        },
        {
          id: 'appraisal.q3',
          senseId: 'appraisal.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「评估」.',
          options: [
            'appraisal',
            'appraise',
            'appreciate'
          ],
          answer: 'appraisal',
          explain: '空缺处用 appraisal，不要换成相邻词 appraise。'
        },
        {
          id: 'appraisal.q4',
          senseId: 'appraisal.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appraisal with a neighbour in this list. Which one means 「评估」?',
          options: [
            'appraisal',
            'appraise',
            'appreciate'
          ],
          answer: 'appraisal',
          explain: 'appraise 与 appreciate 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appraise',
          'appreciate'
        ]
      }
    });

  D('appraise', {
      etymology: {
        origin: 'appraise 按现成英语词整词记，意思是「评估；评价」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appraise',
            text: '现代英语：评估；评价。'
          }
        ],
        formationLogic: '不硬拆。看到 appraise 就想到「评估」。',
        mnemonic: '先记中文「评估」，再把英文 appraise 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will appraise the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（评估）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appraise.s1',
          en: 'The team will appraise the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（评估）。',
          structure: 'appraise / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「评估」，对应英文释义：To judge the value or quality of something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appraise about the result without a reason.',
          right: 'They appraise the result and give a reason.',
          reason: 'appraise 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appraise + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appraise.q1',
          senseId: 'appraise.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「评估」.',
          options: [
            'appraise',
            'appreciate',
            'appreciation'
          ],
          answer: 'appraise',
          explain: 'appraise 对应「评估」。'
        },
        {
          id: 'appraise.q2',
          senseId: 'appraise.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appraise?',
          options: [
            '评估',
            '感激',
            '其他义项'
          ],
          answer: '评估',
          explain: '按本词条，appraise 是「评估」。'
        },
        {
          id: 'appraise.q3',
          senseId: 'appraise.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「评估」.',
          options: [
            'appraise',
            'appreciate',
            'appreciation'
          ],
          answer: 'appraise',
          explain: '空缺处用 appraise，不要换成相邻词 appreciate。'
        },
        {
          id: 'appraise.q4',
          senseId: 'appraise.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appraise with a neighbour in this list. Which one means 「评估」?',
          options: [
            'appraise',
            'appreciate',
            'appreciation'
          ],
          answer: 'appraise',
          explain: 'appreciate 与 appreciation 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appreciate',
          'appreciation'
        ]
      }
    });

  D('appreciate', {
      etymology: {
        origin: 'appreciate 按现成英语词整词记，意思是「感激；欣赏；增值」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appreciate',
            text: '现代英语：感激；欣赏；增值。'
          }
        ],
        formationLogic: '不硬拆。看到 appreciate 就想到「感激」。',
        mnemonic: '先记中文「感激」，再把英文 appreciate 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will appreciate the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（感激）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'appreciate.s1',
          en: 'The team will appreciate the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（感激）。',
          structure: 'appreciate / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「感激」，对应英文释义：To be grateful; to understand the value of; to rise in value.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They appreciate about the result without a reason.',
          right: 'They appreciate the result and give a reason.',
          reason: 'appreciate 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + appreciate + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'appreciate.q1',
          senseId: 'appreciate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「感激」.',
          options: [
            'appreciate',
            'appreciation',
            'appreciative'
          ],
          answer: 'appreciate',
          explain: 'appreciate 对应「感激」。'
        },
        {
          id: 'appreciate.q2',
          senseId: 'appreciate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appreciate?',
          options: [
            '感激',
            '其他义项',
            '感激的'
          ],
          answer: '感激',
          explain: '按本词条，appreciate 是「感激」。'
        },
        {
          id: 'appreciate.q3',
          senseId: 'appreciate.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「感激」.',
          options: [
            'appreciate',
            'appreciation',
            'appreciative'
          ],
          answer: 'appreciate',
          explain: '空缺处用 appreciate，不要换成相邻词 appreciation。'
        },
        {
          id: 'appreciate.q4',
          senseId: 'appreciate.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appreciate with a neighbour in this list. Which one means 「感激」?',
          options: [
            'appreciate',
            'appreciation',
            'appreciative'
          ],
          answer: 'appreciate',
          explain: 'appreciation 与 appreciative 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appreciation',
          'appreciative'
        ]
      }
    });

  D('appreciation', {
      etymology: {
        origin: 'appreciation 按现成英语词整词记，意思是「感激；欣赏；增值」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appreciation',
            text: '现代英语：感激；欣赏；增值。'
          }
        ],
        formationLogic: '不硬拆。看到 appreciation 就想到「感激」。',
        mnemonic: '先记中文「感激」，再把英文 appreciation 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appreciation to make the abstract point concrete.',
          chinese: '这节课用一个「感激」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appreciation.s1',
          en: 'The lecture used an appreciation to make the abstract point concrete.',
          zh: '这节课用一个「感激」的例子，把抽象的论点讲具体。',
          structure: 'appreciation / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「感激」，对应英文释义：Gratitude for something; understanding and enjoyment of something good; an increase in value.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appreciation of about the topic.',
          right: 'This appreciation belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appreciation。',
          rule: '名词 appreciation（感激）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appreciation.q1',
          senseId: 'appreciation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「感激」.',
          options: [
            'appreciation',
            'appreciative',
            'apprentice'
          ],
          answer: 'appreciation',
          explain: 'appreciation 对应「感激」。'
        },
        {
          id: 'appreciation.q2',
          senseId: 'appreciation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appreciation?',
          options: [
            '感激',
            '感激的',
            '无关说法'
          ],
          answer: '感激',
          explain: '按本词条，appreciation 是「感激」。'
        },
        {
          id: 'appreciation.q3',
          senseId: 'appreciation.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「感激」.',
          options: [
            'appreciation',
            'appreciative',
            'apprentice'
          ],
          answer: 'appreciation',
          explain: '空缺处用 appreciation，不要换成相邻词 appreciative。'
        },
        {
          id: 'appreciation.q4',
          senseId: 'appreciation.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appreciation with a neighbour in this list. Which one means 「感激」?',
          options: [
            'appreciation',
            'appreciative',
            'apprentice'
          ],
          answer: 'appreciation',
          explain: 'appreciative 与 apprentice 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appreciative',
          'apprentice'
        ]
      }
    });

  D('appreciative', {
      etymology: {
        origin: '英语派生：appreciate + -ive。形容词后缀。整词义为「感激的；欣赏的」。',
        prefix: null,
        root: {
          text: 'appreciate',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ive',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'appreciate',
            text: '基础词，先掌握「感激」。'
          },
          {
            label: 'appreciative',
            text: '英语派生形式，教学义是「感激的；欣赏的」。'
          }
        ],
        formationLogic: '在 appreciate 上加 -ive，得到 appreciative。',
        mnemonic: '先记中文「感激的」，再把英文 appreciative 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A appreciative result needs a second look before anyone acts on it.',
          chinese: '一个「感激的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'appreciative.s1',
          en: 'A appreciative result needs a second look before anyone acts on it.',
          zh: '一个「感激的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'appreciative / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「感激的」，对应英文释义：Feeling or showing that you are grateful and enjoy something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very appreciatively surprising to us.',
          right: 'The news was appreciative.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + appreciative。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a appreciative + 名词。'
        }
      ],
      quiz: [
        {
          id: 'appreciative.q1',
          senseId: 'appreciative.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「感激的」.',
          options: [
            'appreciative',
            'apprentice',
            'apprenticeship'
          ],
          answer: 'appreciative',
          explain: 'appreciative 对应「感激的」。'
        },
        {
          id: 'appreciative.q2',
          senseId: 'appreciative.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appreciative?',
          options: [
            '感激的',
            '其他义项',
            '无关说法'
          ],
          answer: '感激的',
          explain: '按本词条，appreciative 是「感激的」。'
        },
        {
          id: 'appreciative.q3',
          senseId: 'appreciative.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'appreciative',
            'apprentice',
            'apprenticeship'
          ],
          answer: 'appreciative',
          explain: '空缺处用 appreciative，不要换成相邻词 apprentice。'
        },
        {
          id: 'appreciative.q4',
          senseId: 'appreciative.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appreciative with a neighbour in this list. Which one means 「感激的」?',
          options: [
            'appreciative',
            'apprentice',
            'apprenticeship'
          ],
          answer: 'appreciative',
          explain: 'apprentice 与 apprenticeship 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apprentice',
          'apprenticeship'
        ]
      }
    });

  D('apprentice', {
      etymology: {
        origin: 'apprentice 按现成英语词整词记，意思是「学徒」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apprentice',
            text: '现代英语：学徒。'
          }
        ],
        formationLogic: '不硬拆。看到 apprentice 就想到「学徒」。',
        mnemonic: '先记中文「学徒」，再把英文 apprentice 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apprentice to make the abstract point concrete.',
          chinese: '这节课用一个「学徒」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apprentice.s1',
          en: 'The lecture used an apprentice to make the abstract point concrete.',
          zh: '这节课用一个「学徒」的例子，把抽象的论点讲具体。',
          structure: 'apprentice / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「学徒」，对应英文释义：A young person who works for someone to learn a skill.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apprentice of about the topic.',
          right: 'This apprentice belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apprentice。',
          rule: '名词 apprentice（学徒）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apprentice.q1',
          senseId: 'apprentice.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「学徒」.',
          options: [
            'apprentice',
            'apprenticeship',
            'approachable'
          ],
          answer: 'apprentice',
          explain: 'apprentice 对应「学徒」。'
        },
        {
          id: 'apprentice.q2',
          senseId: 'apprentice.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apprentice?',
          options: [
            '学徒',
            '其他义项',
            '无关说法'
          ],
          answer: '学徒',
          explain: '按本词条，apprentice 是「学徒」。'
        },
        {
          id: 'apprentice.q3',
          senseId: 'apprentice.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「学徒」.',
          options: [
            'apprentice',
            'apprenticeship',
            'approachable'
          ],
          answer: 'apprentice',
          explain: '空缺处用 apprentice，不要换成相邻词 apprenticeship。'
        },
        {
          id: 'apprentice.q4',
          senseId: 'apprentice.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apprentice with a neighbour in this list. Which one means 「学徒」?',
          options: [
            'apprentice',
            'apprenticeship',
            'approachable'
          ],
          answer: 'apprentice',
          explain: 'apprenticeship 与 approachable 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apprenticeship',
          'approachable'
        ]
      }
    });

  D('apprenticeship', {
      etymology: {
        origin: '英语派生：apprentice + -ship。名词后缀，表示身份或时期。整词义为「学徒期；学徒身份」。',
        prefix: null,
        root: {
          text: 'apprentice',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ship',
          gloss: '名词后缀，表示身份或时期'
        },
        history: [
          {
            label: 'apprentice',
            text: '基础词，先掌握「apprentice」。'
          },
          {
            label: 'apprenticeship',
            text: '英语派生形式，教学义是「学徒期；学徒身份」。'
          }
        ],
        formationLogic: '在 apprentice 上加 -ship，得到 apprenticeship。',
        mnemonic: '先记中文「学徒期」，再把英文 apprenticeship 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apprenticeship to make the abstract point concrete.',
          chinese: '这节课用一个「学徒期」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apprenticeship.s1',
          en: 'The lecture used an apprenticeship to make the abstract point concrete.',
          zh: '这节课用一个「学徒期」的例子，把抽象的论点讲具体。',
          structure: 'apprenticeship / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「学徒期」，对应英文释义：A period of time spent learning a skill or job by working with an experienced person.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apprenticeship of about the topic.',
          right: 'This apprenticeship belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apprenticeship。',
          rule: '名词 apprenticeship（学徒期）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apprenticeship.q1',
          senseId: 'apprenticeship.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「学徒期」.',
          options: [
            'apprenticeship',
            'approachable',
            'approaching'
          ],
          answer: 'apprenticeship',
          explain: 'apprenticeship 对应「学徒期」。'
        },
        {
          id: 'apprenticeship.q2',
          senseId: 'apprenticeship.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apprenticeship?',
          options: [
            '学徒期',
            '其他义项',
            '无关说法'
          ],
          answer: '学徒期',
          explain: '按本词条，apprenticeship 是「学徒期」。'
        },
        {
          id: 'apprenticeship.q3',
          senseId: 'apprenticeship.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「学徒期」.',
          options: [
            'apprenticeship',
            'approachable',
            'approaching'
          ],
          answer: 'apprenticeship',
          explain: '空缺处用 apprenticeship，不要换成相邻词 approachable。'
        },
        {
          id: 'apprenticeship.q4',
          senseId: 'apprenticeship.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apprenticeship with a neighbour in this list. Which one means 「学徒期」?',
          options: [
            'apprenticeship',
            'approachable',
            'approaching'
          ],
          answer: 'apprenticeship',
          explain: 'approachable 与 approaching 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approachable',
          'approaching'
        ]
      }
    });

  D('approachable', {
      etymology: {
        origin: 'approachable 按现成英语词整词记，意思是「易接近的；亲切的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'approachable',
            text: '现代英语：易接近的；亲切的。'
          }
        ],
        formationLogic: '不硬拆。看到 approachable 就想到「易接近的」。',
        mnemonic: '先记中文「易接近的」，再把英文 approachable 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A approachable result needs a second look before anyone acts on it.',
          chinese: '一个「易接近的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'approachable.s1',
          en: 'A approachable result needs a second look before anyone acts on it.',
          zh: '一个「易接近的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'approachable / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「易接近的」，对应英文释义：Friendly and easy to talk to; easy to reach or deal with.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very approachablely surprising to us.',
          right: 'The news was approachable.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + approachable。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a approachable + 名词。'
        }
      ],
      quiz: [
        {
          id: 'approachable.q1',
          senseId: 'approachable.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「易接近的」.',
          options: [
            'approachable',
            'approaching',
            'appropriate'
          ],
          answer: 'approachable',
          explain: 'approachable 对应「易接近的」。'
        },
        {
          id: 'approachable.q2',
          senseId: 'approachable.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approachable?',
          options: [
            '易接近的',
            '其他义项',
            '无关说法'
          ],
          answer: '易接近的',
          explain: '按本词条，approachable 是「易接近的」。'
        },
        {
          id: 'approachable.q3',
          senseId: 'approachable.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'approachable',
            'approaching',
            'appropriate'
          ],
          answer: 'approachable',
          explain: '空缺处用 approachable，不要换成相邻词 approaching。'
        },
        {
          id: 'approachable.q4',
          senseId: 'approachable.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approachable with a neighbour in this list. Which one means 「易接近的」?',
          options: [
            'approachable',
            'approaching',
            'appropriate'
          ],
          answer: 'approachable',
          explain: 'approaching 与 appropriate 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approaching',
          'appropriate'
        ]
      }
    });

  D('approaching', {
      etymology: {
        origin: 'approaching 按现成英语词整词记，意思是「接近；即将来临的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'approaching',
            text: '现代英语：接近；即将来临的。'
          }
        ],
        formationLogic: '不硬拆。看到 approaching 就想到「接近」。',
        mnemonic: '先记中文「接近」，再把英文 approaching 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an approaching to make the abstract point concrete.',
          chinese: '这节课用一个「接近」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'approaching.s1',
          en: 'The lecture used an approaching to make the abstract point concrete.',
          zh: '这节课用一个「接近」的例子，把抽象的论点讲具体。',
          structure: 'approaching / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「接近」，对应英文释义：Getting close to a place, time, or value; about to happen.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the approaching of about the topic.',
          right: 'This approaching belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 approaching。',
          rule: '名词 approaching（接近）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'approaching.q1',
          senseId: 'approaching.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「接近」.',
          options: [
            'approaching',
            'appropriate',
            'appropriately'
          ],
          answer: 'approaching',
          explain: 'approaching 对应「接近」。'
        },
        {
          id: 'approaching.q2',
          senseId: 'approaching.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approaching?',
          options: [
            '接近',
            '其他义项',
            '适当地'
          ],
          answer: '接近',
          explain: '按本词条，approaching 是「接近」。'
        },
        {
          id: 'approaching.q3',
          senseId: 'approaching.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「接近」.',
          options: [
            'approaching',
            'appropriate',
            'appropriately'
          ],
          answer: 'approaching',
          explain: '空缺处用 approaching，不要换成相邻词 appropriate。'
        },
        {
          id: 'approaching.q4',
          senseId: 'approaching.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approaching with a neighbour in this list. Which one means 「接近」?',
          options: [
            'approaching',
            'appropriate',
            'appropriately'
          ],
          answer: 'approaching',
          explain: 'appropriate 与 appropriately 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appropriate',
          'appropriately'
        ]
      }
    });

  D('appropriate', {
      etymology: {
        origin: 'appropriate 按现成英语词整词记，意思是「适当的；挪用」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appropriate',
            text: '现代英语：适当的；挪用。'
          }
        ],
        formationLogic: '不硬拆。看到 appropriate 就想到「适当的」。',
        mnemonic: '先记中文「适当的」，再把英文 appropriate 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A appropriate result needs a second look before anyone acts on it.',
          chinese: '一个「适当的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'appropriate.s1',
          en: 'A appropriate result needs a second look before anyone acts on it.',
          zh: '一个「适当的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'appropriate / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「适当的」，对应英文释义：Suitable for a situation; to take something for yourself.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very appropriately surprising to us.',
          right: 'The news was appropriate.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + appropriate。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a appropriate + 名词。'
        }
      ],
      quiz: [
        {
          id: 'appropriate.q1',
          senseId: 'appropriate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「适当的」.',
          options: [
            'appropriate',
            'appropriately',
            'appropriation'
          ],
          answer: 'appropriate',
          explain: 'appropriate 对应「适当的」。'
        },
        {
          id: 'appropriate.q2',
          senseId: 'appropriate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appropriate?',
          options: [
            '适当的',
            '适当地',
            '无关说法'
          ],
          answer: '适当的',
          explain: '按本词条，appropriate 是「适当的」。'
        },
        {
          id: 'appropriate.q3',
          senseId: 'appropriate.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'appropriate',
            'appropriately',
            'appropriation'
          ],
          answer: 'appropriate',
          explain: '空缺处用 appropriate，不要换成相邻词 appropriately。'
        },
        {
          id: 'appropriate.q4',
          senseId: 'appropriate.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appropriate with a neighbour in this list. Which one means 「适当的」?',
          options: [
            'appropriate',
            'appropriately',
            'appropriation'
          ],
          answer: 'appropriate',
          explain: 'appropriately 与 appropriation 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appropriately',
          'appropriation'
        ]
      }
    });

  D('appropriately', {
      etymology: {
        origin: '英语派生：appropriate + -ly。副词后缀，表示方式。整词义为「适当地；相称地」。',
        prefix: null,
        root: {
          text: 'appropriate',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'appropriate',
            text: '基础词，先掌握「appropriate」。'
          },
          {
            label: 'appropriately',
            text: '英语派生形式，教学义是「适当地；相称地」。'
          }
        ],
        formationLogic: '在 appropriate 上加 -ly，得到 appropriately。',
        mnemonic: '先记中文「适当地」，再把英文 appropriately 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change appropriately, so the class could follow each step.',
          chinese: '她「适当地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appropriately.s1',
          en: 'She explained the change appropriately, so the class could follow each step.',
          zh: '她「适当地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'appropriately / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「适当地」，对应英文释义：In a way that is suitable or proper for the situation.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a appropriately answer.',
          right: 'She answered appropriately.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + appropriately，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'appropriately.q1',
          senseId: 'appropriately.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「适当地」.',
          options: [
            'appropriately',
            'appropriation',
            'approval'
          ],
          answer: 'appropriately',
          explain: 'appropriately 对应「适当地」。'
        },
        {
          id: 'appropriately.q2',
          senseId: 'appropriately.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appropriately?',
          options: [
            '适当地',
            '其他义项',
            '批准'
          ],
          answer: '适当地',
          explain: '按本词条，appropriately 是「适当地」。'
        },
        {
          id: 'appropriately.q3',
          senseId: 'appropriately.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「适当地」.',
          options: [
            'appropriately',
            'appropriation',
            'approval'
          ],
          answer: 'appropriately',
          explain: '空缺处用 appropriately，不要换成相邻词 appropriation。'
        },
        {
          id: 'appropriately.q4',
          senseId: 'appropriately.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appropriately with a neighbour in this list. Which one means 「适当地」?',
          options: [
            'appropriately',
            'appropriation',
            'approval'
          ],
          answer: 'appropriately',
          explain: 'appropriation 与 approval 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'appropriation',
          'approval'
        ]
      }
    });

  D('appropriation', {
      etymology: {
        origin: 'appropriation 按现成英语词整词记，意思是「挪用；拨款；占有」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'appropriation',
            text: '现代英语：挪用；拨款；占有。'
          }
        ],
        formationLogic: '不硬拆。看到 appropriation 就想到「挪用」。',
        mnemonic: '先记中文「挪用」，再把英文 appropriation 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an appropriation to make the abstract point concrete.',
          chinese: '这节课用一个「挪用」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'appropriation.s1',
          en: 'The lecture used an appropriation to make the abstract point concrete.',
          zh: '这节课用一个「挪用」的例子，把抽象的论点讲具体。',
          structure: 'appropriation / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「挪用」，对应英文释义：The act of taking something for your own use, or setting money aside for a purpose.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the appropriation of about the topic.',
          right: 'This appropriation belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 appropriation。',
          rule: '名词 appropriation（挪用）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'appropriation.q1',
          senseId: 'appropriation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「挪用」.',
          options: [
            'appropriation',
            'approval',
            'approve'
          ],
          answer: 'appropriation',
          explain: 'appropriation 对应「挪用」。'
        },
        {
          id: 'appropriation.q2',
          senseId: 'appropriation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits appropriation?',
          options: [
            '挪用',
            '批准',
            '无关说法'
          ],
          answer: '挪用',
          explain: '按本词条，appropriation 是「挪用」。'
        },
        {
          id: 'appropriation.q3',
          senseId: 'appropriation.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「挪用」.',
          options: [
            'appropriation',
            'approval',
            'approve'
          ],
          answer: 'appropriation',
          explain: '空缺处用 appropriation，不要换成相邻词 approval。'
        },
        {
          id: 'appropriation.q4',
          senseId: 'appropriation.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse appropriation with a neighbour in this list. Which one means 「挪用」?',
          options: [
            'appropriation',
            'approval',
            'approve'
          ],
          answer: 'appropriation',
          explain: 'approval 与 approve 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approval',
          'approve'
        ]
      }
    });

  D('approval', {
      etymology: {
        origin: '英语派生：approve + -al。形容词后缀。整词义为「批准；赞成」。',
        prefix: null,
        root: {
          text: 'approve',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'approve',
            text: '基础词，先掌握「批准」。'
          },
          {
            label: 'approval',
            text: '英语派生形式，教学义是「批准；赞成」。'
          }
        ],
        formationLogic: '在 approve 上加 -al，得到 approval。',
        mnemonic: '先记中文「批准」，再把英文 approval 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an approval to make the abstract point concrete.',
          chinese: '这节课用一个「批准」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'approval.s1',
          en: 'The lecture used an approval to make the abstract point concrete.',
          zh: '这节课用一个「批准」的例子，把抽象的论点讲具体。',
          structure: 'approval / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「批准」，对应英文释义：Permission for something to be done, or the feeling that something is good or acceptable.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the approval of about the topic.',
          right: 'This approval belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 approval。',
          rule: '名词 approval（批准）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'approval.q1',
          senseId: 'approval.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「批准」.',
          options: [
            'approval',
            'approve',
            'approved'
          ],
          answer: 'approval',
          explain: 'approval 对应「批准」。'
        },
        {
          id: 'approval.q2',
          senseId: 'approval.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approval?',
          options: [
            '批准',
            '无关说法',
            '认可的'
          ],
          answer: '批准',
          explain: '按本词条，approval 是「批准」。'
        },
        {
          id: 'approval.q3',
          senseId: 'approval.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「批准」.',
          options: [
            'approval',
            'approve',
            'approved'
          ],
          answer: 'approval',
          explain: '空缺处用 approval，不要换成相邻词 approve。'
        },
        {
          id: 'approval.q4',
          senseId: 'approval.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approval with a neighbour in this list. Which one means 「批准」?',
          options: [
            'approval',
            'approve',
            'approved'
          ],
          answer: 'approval',
          explain: 'approve 与 approved 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approve',
          'approved'
        ]
      }
    });

  D('approve', {
      etymology: {
        origin: 'approve 按现成英语词整词记，意思是「批准；赞成」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'approve',
            text: '现代英语：批准；赞成。'
          }
        ],
        formationLogic: '不硬拆。看到 approve 就想到「批准」。',
        mnemonic: '先记中文「批准」，再把英文 approve 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will approve the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（批准）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'approve.s1',
          en: 'The team will approve the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（批准）。',
          structure: 'approve / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「批准」，对应英文释义：To officially agree to something; to think well of.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They approve about the result without a reason.',
          right: 'They approve the result and give a reason.',
          reason: 'approve 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + approve + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'approve.q1',
          senseId: 'approve.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「批准」.',
          options: [
            'approve',
            'approved',
            'approximate'
          ],
          answer: 'approve',
          explain: 'approve 对应「批准」。'
        },
        {
          id: 'approve.q2',
          senseId: 'approve.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approve?',
          options: [
            '批准',
            '认可的',
            '大约的'
          ],
          answer: '批准',
          explain: '按本词条，approve 是「批准」。'
        },
        {
          id: 'approve.q3',
          senseId: 'approve.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「批准」.',
          options: [
            'approve',
            'approved',
            'approximate'
          ],
          answer: 'approve',
          explain: '空缺处用 approve，不要换成相邻词 approved。'
        },
        {
          id: 'approve.q4',
          senseId: 'approve.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approve with a neighbour in this list. Which one means 「批准」?',
          options: [
            'approve',
            'approved',
            'approximate'
          ],
          answer: 'approve',
          explain: 'approved 与 approximate 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approved',
          'approximate'
        ]
      }
    });

  D('approved', {
      etymology: {
        origin: '英语派生：approve + -ed。形容词后缀，表示已经如此。整词义为「认可的；核准的」。',
        prefix: null,
        root: {
          text: 'approve',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'approve',
            text: '基础词，先掌握「批准」。'
          },
          {
            label: 'approved',
            text: '英语派生形式，教学义是「认可的；核准的」。'
          }
        ],
        formationLogic: '在 approve 上加 -ed，得到 approved。',
        mnemonic: '先记中文「认可的」，再把英文 approved 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A approved result needs a second look before anyone acts on it.',
          chinese: '一个「认可的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'approved.s1',
          en: 'A approved result needs a second look before anyone acts on it.',
          zh: '一个「认可的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'approved / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「认可的」，对应英文释义：Accepted officially as satisfactory or allowed.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very approvedly surprising to us.',
          right: 'The news was approved.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + approved。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a approved + 名词。'
        }
      ],
      quiz: [
        {
          id: 'approved.q1',
          senseId: 'approved.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「认可的」.',
          options: [
            'approved',
            'approximate',
            'approximately'
          ],
          answer: 'approved',
          explain: 'approved 对应「认可的」。'
        },
        {
          id: 'approved.q2',
          senseId: 'approved.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approved?',
          options: [
            '认可的',
            '大约的',
            '大约'
          ],
          answer: '认可的',
          explain: '按本词条，approved 是「认可的」。'
        },
        {
          id: 'approved.q3',
          senseId: 'approved.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'approved',
            'approximate',
            'approximately'
          ],
          answer: 'approved',
          explain: '空缺处用 approved，不要换成相邻词 approximate。'
        },
        {
          id: 'approved.q4',
          senseId: 'approved.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approved with a neighbour in this list. Which one means 「认可的」?',
          options: [
            'approved',
            'approximate',
            'approximately'
          ],
          answer: 'approved',
          explain: 'approximate 与 approximately 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approximate',
          'approximately'
        ]
      }
    });

  D('approximate', {
      etymology: {
        origin: 'approximate 按现成英语词整词记，意思是「大约的；接近；近似」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'approximate',
            text: '现代英语：大约的；接近；近似。'
          }
        ],
        formationLogic: '不硬拆。看到 approximate 就想到「大约的」。',
        mnemonic: '先记中文「大约的」，再把英文 approximate 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A approximate result needs a second look before anyone acts on it.',
          chinese: '一个「大约的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'approximate.s1',
          en: 'A approximate result needs a second look before anyone acts on it.',
          zh: '一个「大约的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'approximate / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「大约的」，对应英文释义：Almost correct but not exact; to be close to.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very approximately surprising to us.',
          right: 'The news was approximate.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + approximate。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a approximate + 名词。'
        }
      ],
      quiz: [
        {
          id: 'approximate.q1',
          senseId: 'approximate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「大约的」.',
          options: [
            'approximate',
            'approximately',
            'approximation'
          ],
          answer: 'approximate',
          explain: 'approximate 对应「大约的」。'
        },
        {
          id: 'approximate.q2',
          senseId: 'approximate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approximate?',
          options: [
            '大约的',
            '大约',
            '无关说法'
          ],
          answer: '大约的',
          explain: '按本词条，approximate 是「大约的」。'
        },
        {
          id: 'approximate.q3',
          senseId: 'approximate.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'approximate',
            'approximately',
            'approximation'
          ],
          answer: 'approximate',
          explain: '空缺处用 approximate，不要换成相邻词 approximately。'
        },
        {
          id: 'approximate.q4',
          senseId: 'approximate.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approximate with a neighbour in this list. Which one means 「大约的」?',
          options: [
            'approximate',
            'approximately',
            'approximation'
          ],
          answer: 'approximate',
          explain: 'approximately 与 approximation 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approximately',
          'approximation'
        ]
      }
    });

  D('approximately', {
      etymology: {
        origin: '英语派生：approximate + -ly。副词后缀，表示方式。整词义为「大约；大概」。',
        prefix: null,
        root: {
          text: 'approximate',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'approximate',
            text: '基础词，先掌握「大约的」。'
          },
          {
            label: 'approximately',
            text: '英语派生形式，教学义是「大约；大概」。'
          }
        ],
        formationLogic: '在 approximate 上加 -ly，得到 approximately。',
        mnemonic: '先记中文「大约」，再把英文 approximately 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change approximately, so the class could follow each step.',
          chinese: '她「大约」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'approximately.s1',
          en: 'She explained the change approximately, so the class could follow each step.',
          zh: '她「大约」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'approximately / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「大约」，对应英文释义：Close to a particular number or time but not exactly.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a approximately answer.',
          right: 'She answered approximately.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + approximately，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'approximately.q1',
          senseId: 'approximately.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「大约」.',
          options: [
            'approximately',
            'approximation',
            'apricot'
          ],
          answer: 'approximately',
          explain: 'approximately 对应「大约」。'
        },
        {
          id: 'approximately.q2',
          senseId: 'approximately.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approximately?',
          options: [
            '大约',
            '其他义项',
            '杏'
          ],
          answer: '大约',
          explain: '按本词条，approximately 是「大约」。'
        },
        {
          id: 'approximately.q3',
          senseId: 'approximately.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「大约」.',
          options: [
            'approximately',
            'approximation',
            'apricot'
          ],
          answer: 'approximately',
          explain: '空缺处用 approximately，不要换成相邻词 approximation。'
        },
        {
          id: 'approximately.q4',
          senseId: 'approximately.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approximately with a neighbour in this list. Which one means 「大约」?',
          options: [
            'approximately',
            'approximation',
            'apricot'
          ],
          answer: 'approximately',
          explain: 'approximation 与 apricot 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'approximation',
          'apricot'
        ]
      }
    });

  D('approximation', {
      etymology: {
        origin: 'approximation 按现成英语词整词记，意思是「近似值；近似」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'approximation',
            text: '现代英语：近似值；近似。'
          }
        ],
        formationLogic: '不硬拆。看到 approximation 就想到「近似值」。',
        mnemonic: '先记中文「近似值」，再把英文 approximation 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an approximation to make the abstract point concrete.',
          chinese: '这节课用一个「近似值」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'approximation.s1',
          en: 'The lecture used an approximation to make the abstract point concrete.',
          zh: '这节课用一个「近似值」的例子，把抽象的论点讲具体。',
          structure: 'approximation / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「近似值」，对应英文释义：A number or result that is close to the correct one but not exact.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the approximation of about the topic.',
          right: 'This approximation belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 approximation。',
          rule: '名词 approximation（近似值）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'approximation.q1',
          senseId: 'approximation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「近似值」.',
          options: [
            'approximation',
            'apricot',
            'April'
          ],
          answer: 'approximation',
          explain: 'approximation 对应「近似值」。'
        },
        {
          id: 'approximation.q2',
          senseId: 'approximation.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits approximation?',
          options: [
            '近似值',
            '杏',
            '无关说法'
          ],
          answer: '近似值',
          explain: '按本词条，approximation 是「近似值」。'
        },
        {
          id: 'approximation.q3',
          senseId: 'approximation.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「近似值」.',
          options: [
            'approximation',
            'apricot',
            'April'
          ],
          answer: 'approximation',
          explain: '空缺处用 approximation，不要换成相邻词 apricot。'
        },
        {
          id: 'approximation.q4',
          senseId: 'approximation.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse approximation with a neighbour in this list. Which one means 「近似值」?',
          options: [
            'approximation',
            'apricot',
            'April'
          ],
          answer: 'approximation',
          explain: 'apricot 与 April 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apricot',
          'April'
        ]
      }
    });

  D('apricot', {
      etymology: {
        origin: 'apricot 按现成英语词整词记，意思是「杏；杏黄色」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apricot',
            text: '现代英语：杏；杏黄色。'
          }
        ],
        formationLogic: '不硬拆。看到 apricot 就想到「杏」。',
        mnemonic: '先记中文「杏」，再把英文 apricot 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apricot to make the abstract point concrete.',
          chinese: '这节课用一个「杏」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apricot.s1',
          en: 'The lecture used an apricot to make the abstract point concrete.',
          zh: '这节课用一个「杏」的例子，把抽象的论点讲具体。',
          structure: 'apricot / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「杏」，对应英文释义：A small orange fruit with a stone in the middle, or the colour of its skin.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apricot of about the topic.',
          right: 'This apricot belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apricot。',
          rule: '名词 apricot（杏）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apricot.q1',
          senseId: 'apricot.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「杏」.',
          options: [
            'apricot',
            'April',
            'apron'
          ],
          answer: 'apricot',
          explain: 'apricot 对应「杏」。'
        },
        {
          id: 'apricot.q2',
          senseId: 'apricot.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apricot?',
          options: [
            '杏',
            '其他义项',
            '无关说法'
          ],
          answer: '杏',
          explain: '按本词条，apricot 是「杏」。'
        },
        {
          id: 'apricot.q3',
          senseId: 'apricot.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「杏」.',
          options: [
            'apricot',
            'April',
            'apron'
          ],
          answer: 'apricot',
          explain: '空缺处用 apricot，不要换成相邻词 April。'
        },
        {
          id: 'apricot.q4',
          senseId: 'apricot.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apricot with a neighbour in this list. Which one means 「杏」?',
          options: [
            'apricot',
            'April',
            'apron'
          ],
          answer: 'apricot',
          explain: 'April 与 apron 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'April',
          'apron'
        ]
      }
    });

  D('April', {
      etymology: {
        origin: 'April 按现成英语词整词记，意思是「四月」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'April',
            text: '现代英语：四月。'
          }
        ],
        formationLogic: '不硬拆。看到 April 就想到「四月」。',
        mnemonic: '先记中文「四月」，再把英文 April 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The exam window opens in April and closes in June.',
          chinese: '考试窗口四月打开，六月关闭。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'April.s1',
          en: 'The exam window opens in April and closes in June.',
          zh: '考试窗口四月打开，六月关闭。',
          structure: 'April / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「四月」，对应英文释义：The fourth month of the year.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the April of about the topic.',
          right: 'This April belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 April。',
          rule: '名词 April（四月）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'April.q1',
          senseId: 'April.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「四月」.',
          options: [
            'April',
            'apron',
            'apt'
          ],
          answer: 'April',
          explain: 'April 对应「四月」。'
        },
        {
          id: 'April.q2',
          senseId: 'April.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits April?',
          options: [
            '四月',
            '其他义项',
            '无关说法'
          ],
          answer: '四月',
          explain: '按本词条，April 是「四月」。'
        },
        {
          id: 'April.q3',
          senseId: 'April.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「四月」.',
          options: [
            'April',
            'apron',
            'apt'
          ],
          answer: 'April',
          explain: '空缺处用 April，不要换成相邻词 apron。'
        },
        {
          id: 'April.q4',
          senseId: 'April.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse April with a neighbour in this list. Which one means 「四月」?',
          options: [
            'April',
            'apron',
            'apt'
          ],
          answer: 'April',
          explain: 'apron 与 apt 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apron',
          'apt'
        ]
      }
    });

  D('apron', {
      etymology: {
        origin: 'apron 按现成英语词整词记，意思是「围裙；停机坪」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apron',
            text: '现代英语：围裙；停机坪。'
          }
        ],
        formationLogic: '不硬拆。看到 apron 就想到「围裙」。',
        mnemonic: '先记中文「围裙」，再把英文 apron 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an apron to make the abstract point concrete.',
          chinese: '这节课用一个「围裙」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'apron.s1',
          en: 'The lecture used an apron to make the abstract point concrete.',
          zh: '这节课用一个「围裙」的例子，把抽象的论点讲具体。',
          structure: 'apron / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「围裙」，对应英文释义：A piece of cloth worn to protect clothes; an airport parking area.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the apron of about the topic.',
          right: 'This apron belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 apron。',
          rule: '名词 apron（围裙）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'apron.q1',
          senseId: 'apron.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「围裙」.',
          options: [
            'apron',
            'apt',
            'aptitude'
          ],
          answer: 'apron',
          explain: 'apron 对应「围裙」。'
        },
        {
          id: 'apron.q2',
          senseId: 'apron.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apron?',
          options: [
            '围裙',
            '其他义项',
            '天赋'
          ],
          answer: '围裙',
          explain: '按本词条，apron 是「围裙」。'
        },
        {
          id: 'apron.q3',
          senseId: 'apron.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「围裙」.',
          options: [
            'apron',
            'apt',
            'aptitude'
          ],
          answer: 'apron',
          explain: '空缺处用 apron，不要换成相邻词 apt。'
        },
        {
          id: 'apron.q4',
          senseId: 'apron.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apron with a neighbour in this list. Which one means 「围裙」?',
          options: [
            'apron',
            'apt',
            'aptitude'
          ],
          answer: 'apron',
          explain: 'apt 与 aptitude 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'apt',
          'aptitude'
        ]
      }
    });

  D('apt', {
      etymology: {
        origin: 'apt 按现成英语词整词记，意思是「恰当的；易于……的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'apt',
            text: '现代英语：恰当的；易于……的。'
          }
        ],
        formationLogic: '不硬拆。看到 apt 就想到「恰当的」。',
        mnemonic: '先记中文「恰当的」，再把英文 apt 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A apt result needs a second look before anyone acts on it.',
          chinese: '一个「恰当的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'apt.s1',
          en: 'A apt result needs a second look before anyone acts on it.',
          zh: '一个「恰当的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'apt / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「恰当的」，对应英文释义：Suitable; likely to behave in a certain way.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very aptly surprising to us.',
          right: 'The news was apt.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + apt。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a apt + 名词。'
        }
      ],
      quiz: [
        {
          id: 'apt.q1',
          senseId: 'apt.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「恰当的」.',
          options: [
            'apt',
            'aptitude',
            'aptitude test'
          ],
          answer: 'apt',
          explain: 'apt 对应「恰当的」。'
        },
        {
          id: 'apt.q2',
          senseId: 'apt.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits apt?',
          options: [
            '恰当的',
            '天赋',
            '无关说法'
          ],
          answer: '恰当的',
          explain: '按本词条，apt 是「恰当的」。'
        },
        {
          id: 'apt.q3',
          senseId: 'apt.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'apt',
            'aptitude',
            'aptitude test'
          ],
          answer: 'apt',
          explain: '空缺处用 apt，不要换成相邻词 aptitude。'
        },
        {
          id: 'apt.q4',
          senseId: 'apt.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse apt with a neighbour in this list. Which one means 「恰当的」?',
          options: [
            'apt',
            'aptitude',
            'aptitude test'
          ],
          answer: 'apt',
          explain: 'aptitude 与 aptitude test 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aptitude',
          'aptitude test'
        ]
      }
    });

  D('aptitude', {
      etymology: {
        origin: 'aptitude 按现成英语词整词记，意思是「天赋；资质」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'aptitude',
            text: '现代英语：天赋；资质。'
          }
        ],
        formationLogic: '不硬拆。看到 aptitude 就想到「天赋」。',
        mnemonic: '先记中文「天赋」，再把英文 aptitude 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an aptitude to make the abstract point concrete.',
          chinese: '这节课用一个「天赋」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'aptitude.s1',
          en: 'The lecture used an aptitude to make the abstract point concrete.',
          zh: '这节课用一个「天赋」的例子，把抽象的论点讲具体。',
          structure: 'aptitude / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「天赋」，对应英文释义：Natural ability or skill at something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the aptitude of about the topic.',
          right: 'This aptitude belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 aptitude。',
          rule: '名词 aptitude（天赋）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'aptitude.q1',
          senseId: 'aptitude.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「天赋」.',
          options: [
            'aptitude',
            'aptitude test',
            'aptly'
          ],
          answer: 'aptitude',
          explain: 'aptitude 对应「天赋」。'
        },
        {
          id: 'aptitude.q2',
          senseId: 'aptitude.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aptitude?',
          options: [
            '天赋',
            '其他义项',
            '恰当地'
          ],
          answer: '天赋',
          explain: '按本词条，aptitude 是「天赋」。'
        },
        {
          id: 'aptitude.q3',
          senseId: 'aptitude.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「天赋」.',
          options: [
            'aptitude',
            'aptitude test',
            'aptly'
          ],
          answer: 'aptitude',
          explain: '空缺处用 aptitude，不要换成相邻词 aptitude test。'
        },
        {
          id: 'aptitude.q4',
          senseId: 'aptitude.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aptitude with a neighbour in this list. Which one means 「天赋」?',
          options: [
            'aptitude',
            'aptitude test',
            'aptly'
          ],
          answer: 'aptitude',
          explain: 'aptitude test 与 aptly 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aptitude test',
          'aptly'
        ]
      }
    });

  D('aptitude test', {
      etymology: {
        origin: '英语派生：与 aptitude（能力倾向）同族。教学义是「能力倾向测试」。',
        prefix: null,
        root: {
          text: 'aptitude',
          gloss: '能力倾向'
        },
        suffix: null,
        history: [
          {
            label: 'aptitude',
            text: '能力倾向'
          },
          {
            label: 'aptitude test',
            text: '现代英语：能力倾向测试。'
          }
        ],
        formationLogic: '先认 aptitude，再记 aptitude test 多出来的部分。',
        mnemonic: '先记中文「能力倾向测试」，再把英文 aptitude test 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The aptitude test asks how you solve new problems, not what you memorised yesterday.',
          chinese: '能力倾向测试问的是你怎么解新题，不是昨天背了什么。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'aptitude test.s1',
          en: 'The aptitude test asks how you solve new problems, not what you memorised yesterday.',
          zh: '能力倾向测试问的是你怎么解新题，不是昨天背了什么。',
          structure: 'aptitude test / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「能力倾向测试」，对应英文释义：An exam that measures how well someone is likely to do in a particular activity.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the aptitude test of about the topic.',
          right: 'This aptitude test belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 aptitude test。',
          rule: '名词 aptitude test（能力倾向测试）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'aptitude test.q1',
          senseId: 'aptitude test.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「能力倾向测试」.',
          options: [
            'aptitude test',
            'aptly',
            'arachnid'
          ],
          answer: 'aptitude test',
          explain: 'aptitude test 对应「能力倾向测试」。'
        },
        {
          id: 'aptitude test.q2',
          senseId: 'aptitude test.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aptitude test?',
          options: [
            '能力倾向测试',
            '恰当地',
            '蛛形纲动物'
          ],
          answer: '能力倾向测试',
          explain: '按本词条，aptitude test 是「能力倾向测试」。'
        },
        {
          id: 'aptitude test.q3',
          senseId: 'aptitude test.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「能力倾向测试」.',
          options: [
            'aptitude test',
            'aptly',
            'arachnid'
          ],
          answer: 'aptitude test',
          explain: '空缺处用 aptitude test，不要换成相邻词 aptly。'
        },
        {
          id: 'aptitude test.q4',
          senseId: 'aptitude test.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aptitude test with a neighbour in this list. Which one means 「能力倾向测试」?',
          options: [
            'aptitude test',
            'aptly',
            'arachnid'
          ],
          answer: 'aptitude test',
          explain: 'aptly 与 arachnid 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aptly',
          'arachnid'
        ]
      }
    });

  D('aptly', {
      etymology: {
        origin: '英语派生：apt + -ly。副词后缀，表示方式。整词义为「恰当地；贴切地」。',
        prefix: null,
        root: {
          text: 'apt',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'apt',
            text: '基础词，先掌握「apt」。'
          },
          {
            label: 'aptly',
            text: '英语派生形式，教学义是「恰当地；贴切地」。'
          }
        ],
        formationLogic: '在 apt 上加 -ly，得到 aptly。',
        mnemonic: '先记中文「恰当地」，再把英文 aptly 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change aptly, so the class could follow each step.',
          chinese: '她「恰当地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'aptly.s1',
          en: 'She explained the change aptly, so the class could follow each step.',
          zh: '她「恰当地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'aptly / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「恰当地」，对应英文释义：In a way that is very suitable or accurate for the situation.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a aptly answer.',
          right: 'She answered aptly.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + aptly，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'aptly.q1',
          senseId: 'aptly.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「恰当地」.',
          options: [
            'aptly',
            'arachnid',
            'arbitrarily'
          ],
          answer: 'aptly',
          explain: 'aptly 对应「恰当地」。'
        },
        {
          id: 'aptly.q2',
          senseId: 'aptly.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aptly?',
          options: [
            '恰当地',
            '蛛形纲动物',
            '任意地'
          ],
          answer: '恰当地',
          explain: '按本词条，aptly 是「恰当地」。'
        },
        {
          id: 'aptly.q3',
          senseId: 'aptly.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「恰当地」.',
          options: [
            'aptly',
            'arachnid',
            'arbitrarily'
          ],
          answer: 'aptly',
          explain: '空缺处用 aptly，不要换成相邻词 arachnid。'
        },
        {
          id: 'aptly.q4',
          senseId: 'aptly.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aptly with a neighbour in this list. Which one means 「恰当地」?',
          options: [
            'aptly',
            'arachnid',
            'arbitrarily'
          ],
          answer: 'aptly',
          explain: 'arachnid 与 arbitrarily 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arachnid',
          'arbitrarily'
        ]
      }
    });

  D('arachnid', {
      etymology: {
        origin: 'arachnid 按现成英语词整词记，意思是「蛛形纲动物」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arachnid',
            text: '现代英语：蛛形纲动物。'
          }
        ],
        formationLogic: '不硬拆。看到 arachnid 就想到「蛛形纲动物」。',
        mnemonic: '先记中文「蛛形纲动物」，再把英文 arachnid 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arachnid to make the abstract point concrete.',
          chinese: '这节课用一个「蛛形纲动物」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arachnid.s1',
          en: 'The lecture used an arachnid to make the abstract point concrete.',
          zh: '这节课用一个「蛛形纲动物」的例子，把抽象的论点讲具体。',
          structure: 'arachnid / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「蛛形纲动物」，对应英文释义：A type of creature with eight legs, such as a spider, scorpion, or tick.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arachnid of about the topic.',
          right: 'This arachnid belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arachnid。',
          rule: '名词 arachnid（蛛形纲动物）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arachnid.q1',
          senseId: 'arachnid.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「蛛形纲动物」.',
          options: [
            'arachnid',
            'arbitrarily',
            'arbitrary'
          ],
          answer: 'arachnid',
          explain: 'arachnid 对应「蛛形纲动物」。'
        },
        {
          id: 'arachnid.q2',
          senseId: 'arachnid.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arachnid?',
          options: [
            '蛛形纲动物',
            '任意地',
            '任意的'
          ],
          answer: '蛛形纲动物',
          explain: '按本词条，arachnid 是「蛛形纲动物」。'
        },
        {
          id: 'arachnid.q3',
          senseId: 'arachnid.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「蛛形纲动物」.',
          options: [
            'arachnid',
            'arbitrarily',
            'arbitrary'
          ],
          answer: 'arachnid',
          explain: '空缺处用 arachnid，不要换成相邻词 arbitrarily。'
        },
        {
          id: 'arachnid.q4',
          senseId: 'arachnid.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arachnid with a neighbour in this list. Which one means 「蛛形纲动物」?',
          options: [
            'arachnid',
            'arbitrarily',
            'arbitrary'
          ],
          answer: 'arachnid',
          explain: 'arbitrarily 与 arbitrary 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arbitrarily',
          'arbitrary'
        ]
      }
    });

  D('arbitrarily', {
      etymology: {
        origin: '英语派生：arbitrary + -ly。副词后缀，表示方式。整词义为「任意地；武断地」。',
        prefix: null,
        root: {
          text: 'arbitrary',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'arbitrary',
            text: '基础词，先掌握「任意的」。'
          },
          {
            label: 'arbitrarily',
            text: '英语派生形式，教学义是「任意地；武断地」。'
          }
        ],
        formationLogic: '在 arbitrary 上加 -ly，得到 arbitrarily。',
        mnemonic: '先记中文「任意地」，再把英文 arbitrarily 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change arbitrarily, so the class could follow each step.',
          chinese: '她「任意地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arbitrarily.s1',
          en: 'She explained the change arbitrarily, so the class could follow each step.',
          zh: '她「任意地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'arbitrarily / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「任意地」，对应英文释义：In a way that seems random or decided by personal choice rather than reason.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a arbitrarily answer.',
          right: 'She answered arbitrarily.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + arbitrarily，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'arbitrarily.q1',
          senseId: 'arbitrarily.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任意地」.',
          options: [
            'arbitrarily',
            'arbitrary',
            'arbitrate'
          ],
          answer: 'arbitrarily',
          explain: 'arbitrarily 对应「任意地」。'
        },
        {
          id: 'arbitrarily.q2',
          senseId: 'arbitrarily.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arbitrarily?',
          options: [
            '任意地',
            '任意的',
            '仲裁'
          ],
          answer: '任意地',
          explain: '按本词条，arbitrarily 是「任意地」。'
        },
        {
          id: 'arbitrarily.q3',
          senseId: 'arbitrarily.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「任意地」.',
          options: [
            'arbitrarily',
            'arbitrary',
            'arbitrate'
          ],
          answer: 'arbitrarily',
          explain: '空缺处用 arbitrarily，不要换成相邻词 arbitrary。'
        },
        {
          id: 'arbitrarily.q4',
          senseId: 'arbitrarily.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arbitrarily with a neighbour in this list. Which one means 「任意地」?',
          options: [
            'arbitrarily',
            'arbitrary',
            'arbitrate'
          ],
          answer: 'arbitrarily',
          explain: 'arbitrary 与 arbitrate 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arbitrary',
          'arbitrate'
        ]
      }
    });

  D('arbitrary', {
      etymology: {
        origin: 'arbitrary 按现成英语词整词记，意思是「任意的；武断的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arbitrary',
            text: '现代英语：任意的；武断的。'
          }
        ],
        formationLogic: '不硬拆。看到 arbitrary 就想到「任意的」。',
        mnemonic: '先记中文「任意的」，再把英文 arbitrary 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A arbitrary result needs a second look before anyone acts on it.',
          chinese: '一个「任意的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'arbitrary.s1',
          en: 'A arbitrary result needs a second look before anyone acts on it.',
          zh: '一个「任意的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'arbitrary / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「任意的」，对应英文释义：Not based on reasons or a system; decided by chance or personal choice.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very arbitraryly surprising to us.',
          right: 'The news was arbitrary.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + arbitrary。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a arbitrary + 名词。'
        }
      ],
      quiz: [
        {
          id: 'arbitrary.q1',
          senseId: 'arbitrary.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「任意的」.',
          options: [
            'arbitrary',
            'arbitrate',
            'arbitration'
          ],
          answer: 'arbitrary',
          explain: 'arbitrary 对应「任意的」。'
        },
        {
          id: 'arbitrary.q2',
          senseId: 'arbitrary.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arbitrary?',
          options: [
            '任意的',
            '仲裁',
            '无关说法'
          ],
          answer: '任意的',
          explain: '按本词条，arbitrary 是「任意的」。'
        },
        {
          id: 'arbitrary.q3',
          senseId: 'arbitrary.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'arbitrary',
            'arbitrate',
            'arbitration'
          ],
          answer: 'arbitrary',
          explain: '空缺处用 arbitrary，不要换成相邻词 arbitrate。'
        },
        {
          id: 'arbitrary.q4',
          senseId: 'arbitrary.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arbitrary with a neighbour in this list. Which one means 「任意的」?',
          options: [
            'arbitrary',
            'arbitrate',
            'arbitration'
          ],
          answer: 'arbitrary',
          explain: 'arbitrate 与 arbitration 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arbitrate',
          'arbitration'
        ]
      }
    });

  D('arbitrate', {
      etymology: {
        origin: 'arbitrate 按现成英语词整词记，意思是「仲裁；公断」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arbitrate',
            text: '现代英语：仲裁；公断。'
          }
        ],
        formationLogic: '不硬拆。看到 arbitrate 就想到「仲裁」。',
        mnemonic: '先记中文「仲裁」，再把英文 arbitrate 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will arbitrate the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（仲裁）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arbitrate.s1',
          en: 'The team will arbitrate the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（仲裁）。',
          structure: 'arbitrate / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「仲裁」，对应英文释义：To officially settle an argument between two sides.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arbitrate about the result without a reason.',
          right: 'They arbitrate the result and give a reason.',
          reason: 'arbitrate 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arbitrate + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arbitrate.q1',
          senseId: 'arbitrate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「仲裁」.',
          options: [
            'arbitrate',
            'arbitration',
            'arbitrator'
          ],
          answer: 'arbitrate',
          explain: 'arbitrate 对应「仲裁」。'
        },
        {
          id: 'arbitrate.q2',
          senseId: 'arbitrate.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arbitrate?',
          options: [
            '仲裁',
            '其他义项',
            '仲裁人'
          ],
          answer: '仲裁',
          explain: '按本词条，arbitrate 是「仲裁」。'
        },
        {
          id: 'arbitrate.q3',
          senseId: 'arbitrate.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「仲裁」.',
          options: [
            'arbitrate',
            'arbitration',
            'arbitrator'
          ],
          answer: 'arbitrate',
          explain: '空缺处用 arbitrate，不要换成相邻词 arbitration。'
        },
        {
          id: 'arbitrate.q4',
          senseId: 'arbitrate.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arbitrate with a neighbour in this list. Which one means 「仲裁」?',
          options: [
            'arbitrate',
            'arbitration',
            'arbitrator'
          ],
          answer: 'arbitrate',
          explain: 'arbitration 与 arbitrator 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arbitration',
          'arbitrator'
        ]
      }
    });

  D('arbitration', {
      etymology: {
        origin: 'arbitration 按现成英语词整词记，意思是「仲裁」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arbitration',
            text: '现代英语：仲裁。'
          }
        ],
        formationLogic: '不硬拆。看到 arbitration 就想到「仲裁」。',
        mnemonic: '先记中文「仲裁」，再把英文 arbitration 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arbitration to make the abstract point concrete.',
          chinese: '这节课用一个「仲裁」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arbitration.s1',
          en: 'The lecture used an arbitration to make the abstract point concrete.',
          zh: '这节课用一个「仲裁」的例子，把抽象的论点讲具体。',
          structure: 'arbitration / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「仲裁」，对应英文释义：Settling a disagreement between two sides by an independent person chosen by both.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arbitration of about the topic.',
          right: 'This arbitration belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arbitration。',
          rule: '名词 arbitration（仲裁）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arbitration.q1',
          senseId: 'arbitration.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「仲裁」.',
          options: [
            'arbitration',
            'arbitrator',
            'arc'
          ],
          answer: 'arbitration',
          explain: 'arbitration 对应「仲裁」。'
        },
        {
          id: 'arbitration.q2',
          senseId: 'arbitration.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arbitration?',
          options: [
            '仲裁',
            '仲裁人',
            '弧'
          ],
          answer: '仲裁',
          explain: '按本词条，arbitration 是「仲裁」。'
        },
        {
          id: 'arbitration.q3',
          senseId: 'arbitration.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「仲裁」.',
          options: [
            'arbitration',
            'arbitrator',
            'arc'
          ],
          answer: 'arbitration',
          explain: '空缺处用 arbitration，不要换成相邻词 arbitrator。'
        },
        {
          id: 'arbitration.q4',
          senseId: 'arbitration.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arbitration with a neighbour in this list. Which one means 「仲裁」?',
          options: [
            'arbitration',
            'arbitrator',
            'arc'
          ],
          answer: 'arbitration',
          explain: 'arbitrator 与 arc 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arbitrator',
          'arc'
        ]
      }
    });

  D('arbitrator', {
      etymology: {
        origin: '英语派生：arbitrate + -or。表示做该事的人。整词义为「仲裁人；公断人」。',
        prefix: null,
        root: {
          text: 'arbitrate',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-or',
          gloss: '表示做该事的人'
        },
        history: [
          {
            label: 'arbitrate',
            text: '基础词，先掌握「仲裁」。'
          },
          {
            label: 'arbitrator',
            text: '英语派生形式，教学义是「仲裁人；公断人」。'
          }
        ],
        formationLogic: '在 arbitrate 上加 -or，得到 arbitrator。',
        mnemonic: '先记中文「仲裁人」，再把英文 arbitrator 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arbitrator to make the abstract point concrete.',
          chinese: '这节课用一个「仲裁人」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arbitrator.s1',
          en: 'The lecture used an arbitrator to make the abstract point concrete.',
          zh: '这节课用一个「仲裁人」的例子，把抽象的论点讲具体。',
          structure: 'arbitrator / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「仲裁人」，对应英文释义：A person chosen to settle a dispute between two sides.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arbitrator of about the topic.',
          right: 'This arbitrator belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arbitrator。',
          rule: '名词 arbitrator（仲裁人）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arbitrator.q1',
          senseId: 'arbitrator.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「仲裁人」.',
          options: [
            'arbitrator',
            'arc',
            'arc lamp'
          ],
          answer: 'arbitrator',
          explain: 'arbitrator 对应「仲裁人」。'
        },
        {
          id: 'arbitrator.q2',
          senseId: 'arbitrator.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arbitrator?',
          options: [
            '仲裁人',
            '弧',
            '弧光灯'
          ],
          answer: '仲裁人',
          explain: '按本词条，arbitrator 是「仲裁人」。'
        },
        {
          id: 'arbitrator.q3',
          senseId: 'arbitrator.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「仲裁人」.',
          options: [
            'arbitrator',
            'arc',
            'arc lamp'
          ],
          answer: 'arbitrator',
          explain: '空缺处用 arbitrator，不要换成相邻词 arc。'
        },
        {
          id: 'arbitrator.q4',
          senseId: 'arbitrator.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arbitrator with a neighbour in this list. Which one means 「仲裁人」?',
          options: [
            'arbitrator',
            'arc',
            'arc lamp'
          ],
          answer: 'arbitrator',
          explain: 'arc 与 arc lamp 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arc',
          'arc lamp'
        ]
      }
    });

  D('arc', {
      etymology: {
        origin: 'arc 按现成英语词整词记，意思是「弧；弧线；电弧」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arc',
            text: '现代英语：弧；弧线；电弧。'
          }
        ],
        formationLogic: '不硬拆。看到 arc 就想到「弧」。',
        mnemonic: '先记中文「弧」，再把英文 arc 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arc to make the abstract point concrete.',
          chinese: '这节课用一个「弧」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arc.s1',
          en: 'The lecture used an arc to make the abstract point concrete.',
          zh: '这节课用一个「弧」的例子，把抽象的论点讲具体。',
          structure: 'arc / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「弧」，对应英文释义：A curved shape or line.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arc of about the topic.',
          right: 'This arc belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arc。',
          rule: '名词 arc（弧）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arc.q1',
          senseId: 'arc.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「弧」.',
          options: [
            'arc',
            'arc lamp',
            'arch'
          ],
          answer: 'arc',
          explain: 'arc 对应「弧」。'
        },
        {
          id: 'arc.q2',
          senseId: 'arc.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arc?',
          options: [
            '弧',
            '弧光灯',
            '拱'
          ],
          answer: '弧',
          explain: '按本词条，arc 是「弧」。'
        },
        {
          id: 'arc.q3',
          senseId: 'arc.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「弧」.',
          options: [
            'arc',
            'arc lamp',
            'arch'
          ],
          answer: 'arc',
          explain: '空缺处用 arc，不要换成相邻词 arc lamp。'
        },
        {
          id: 'arc.q4',
          senseId: 'arc.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arc with a neighbour in this list. Which one means 「弧」?',
          options: [
            'arc',
            'arc lamp',
            'arch'
          ],
          answer: 'arc',
          explain: 'arc lamp 与 arch 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arc lamp',
          'arch'
        ]
      }
    });

  D('arc lamp', {
      etymology: {
        origin: '英语派生：与 arc（电弧）同族。教学义是「弧光灯」。',
        prefix: null,
        root: {
          text: 'arc',
          gloss: '电弧'
        },
        suffix: null,
        history: [
          {
            label: 'arc',
            text: '电弧'
          },
          {
            label: 'arc lamp',
            text: '现代英语：弧光灯。'
          }
        ],
        formationLogic: '先认 arc，再记 arc lamp 多出来的部分。',
        mnemonic: '先记中文「弧光灯」，再把英文 arc lamp 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'An arc lamp lit the old workshop from the far wall.',
          chinese: '一盏弧光灯从车间远处的墙上照过来。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arc lamp.s1',
          en: 'An arc lamp lit the old workshop from the far wall.',
          zh: '一盏弧光灯从车间远处的墙上照过来。',
          structure: 'arc lamp / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「弧光灯」，对应英文释义：A lamp that gives light from an electric arc between two electrodes.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arc lamp of about the topic.',
          right: 'This arc lamp belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arc lamp。',
          rule: '名词 arc lamp（弧光灯）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arc lamp.q1',
          senseId: 'arc lamp.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「弧光灯」.',
          options: [
            'arc lamp',
            'arch',
            'arched'
          ],
          answer: 'arc lamp',
          explain: 'arc lamp 对应「弧光灯」。'
        },
        {
          id: 'arc lamp.q2',
          senseId: 'arc lamp.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arc lamp?',
          options: [
            '弧光灯',
            '拱',
            '拱形的'
          ],
          answer: '弧光灯',
          explain: '按本词条，arc lamp 是「弧光灯」。'
        },
        {
          id: 'arc lamp.q3',
          senseId: 'arc lamp.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「弧光灯」.',
          options: [
            'arc lamp',
            'arch',
            'arched'
          ],
          answer: 'arc lamp',
          explain: '空缺处用 arc lamp，不要换成相邻词 arch。'
        },
        {
          id: 'arc lamp.q4',
          senseId: 'arc lamp.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arc lamp with a neighbour in this list. Which one means 「弧光灯」?',
          options: [
            'arc lamp',
            'arch',
            'arched'
          ],
          answer: 'arc lamp',
          explain: 'arch 与 arched 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arch',
          'arched'
        ]
      }
    });

  D('arch', {
      etymology: {
        origin: 'arch 按现成英语词整词记，意思是「拱；拱门；拱起」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arch',
            text: '现代英语：拱；拱门；拱起。'
          }
        ],
        formationLogic: '不硬拆。看到 arch 就想到「拱」。',
        mnemonic: '先记中文「拱」，再把英文 arch 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arch to make the abstract point concrete.',
          chinese: '这节课用一个「拱」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arch.s1',
          en: 'The lecture used an arch to make the abstract point concrete.',
          zh: '这节课用一个「拱」的例子，把抽象的论点讲具体。',
          structure: 'arch / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「拱」，对应英文释义：A curved structure; to form a curve.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arch of about the topic.',
          right: 'This arch belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arch。',
          rule: '名词 arch（拱）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arch.q1',
          senseId: 'arch.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「拱」.',
          options: [
            'arch',
            'arched',
            'archetype'
          ],
          answer: 'arch',
          explain: 'arch 对应「拱」。'
        },
        {
          id: 'arch.q2',
          senseId: 'arch.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arch?',
          options: [
            '拱',
            '拱形的',
            '原型'
          ],
          answer: '拱',
          explain: '按本词条，arch 是「拱」。'
        },
        {
          id: 'arch.q3',
          senseId: 'arch.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「拱」.',
          options: [
            'arch',
            'arched',
            'archetype'
          ],
          answer: 'arch',
          explain: '空缺处用 arch，不要换成相邻词 arched。'
        },
        {
          id: 'arch.q4',
          senseId: 'arch.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arch with a neighbour in this list. Which one means 「拱」?',
          options: [
            'arch',
            'arched',
            'archetype'
          ],
          answer: 'arch',
          explain: 'arched 与 archetype 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arched',
          'archetype'
        ]
      }
    });

  D('arched', {
      etymology: {
        origin: '英语派生：arch + -ed。形容词后缀，表示已经如此。整词义为「拱形的；弯成弓形的」。',
        prefix: null,
        root: {
          text: 'arch',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'arch',
            text: '基础词，先掌握「拱」。'
          },
          {
            label: 'arched',
            text: '英语派生形式，教学义是「拱形的；弯成弓形的」。'
          }
        ],
        formationLogic: '在 arch 上加 -ed，得到 arched。',
        mnemonic: '先记中文「拱形的」，再把英文 arched 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A arched result needs a second look before anyone acts on it.',
          chinese: '一个「拱形的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'arched.s1',
          en: 'A arched result needs a second look before anyone acts on it.',
          zh: '一个「拱形的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'arched / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「拱形的」，对应英文释义：Having the shape of a curve; supported by arches.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very archedly surprising to us.',
          right: 'The news was arched.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + arched。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a arched + 名词。'
        }
      ],
      quiz: [
        {
          id: 'arched.q1',
          senseId: 'arched.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「拱形的」.',
          options: [
            'arched',
            'archetype',
            'architect'
          ],
          answer: 'arched',
          explain: 'arched 对应「拱形的」。'
        },
        {
          id: 'arched.q2',
          senseId: 'arched.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arched?',
          options: [
            '拱形的',
            '原型',
            '建筑师'
          ],
          answer: '拱形的',
          explain: '按本词条，arched 是「拱形的」。'
        },
        {
          id: 'arched.q3',
          senseId: 'arched.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'arched',
            'archetype',
            'architect'
          ],
          answer: 'arched',
          explain: '空缺处用 arched，不要换成相邻词 archetype。'
        },
        {
          id: 'arched.q4',
          senseId: 'arched.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arched with a neighbour in this list. Which one means 「拱形的」?',
          options: [
            'arched',
            'archetype',
            'architect'
          ],
          answer: 'arched',
          explain: 'archetype 与 architect 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'archetype',
          'architect'
        ]
      }
    });

  D('archetype', {
      etymology: {
        origin: 'archetype 按现成英语词整词记，意思是「原型；典型」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'archetype',
            text: '现代英语：原型；典型。'
          }
        ],
        formationLogic: '不硬拆。看到 archetype 就想到「原型」。',
        mnemonic: '先记中文「原型」，再把英文 archetype 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an archetype to make the abstract point concrete.',
          chinese: '这节课用一个「原型」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'archetype.s1',
          en: 'The lecture used an archetype to make the abstract point concrete.',
          zh: '这节课用一个「原型」的例子，把抽象的论点讲具体。',
          structure: 'archetype / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「原型」，对应英文释义：The original model or a very typical example of something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the archetype of about the topic.',
          right: 'This archetype belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 archetype。',
          rule: '名词 archetype（原型）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'archetype.q1',
          senseId: 'archetype.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「原型」.',
          options: [
            'archetype',
            'architect',
            'architectural'
          ],
          answer: 'archetype',
          explain: 'archetype 对应「原型」。'
        },
        {
          id: 'archetype.q2',
          senseId: 'archetype.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits archetype?',
          options: [
            '原型',
            '建筑师',
            '无关说法'
          ],
          answer: '原型',
          explain: '按本词条，archetype 是「原型」。'
        },
        {
          id: 'archetype.q3',
          senseId: 'archetype.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「原型」.',
          options: [
            'archetype',
            'architect',
            'architectural'
          ],
          answer: 'archetype',
          explain: '空缺处用 archetype，不要换成相邻词 architect。'
        },
        {
          id: 'archetype.q4',
          senseId: 'archetype.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse archetype with a neighbour in this list. Which one means 「原型」?',
          options: [
            'archetype',
            'architect',
            'architectural'
          ],
          answer: 'archetype',
          explain: 'architect 与 architectural 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'architect',
          'architectural'
        ]
      }
    });

  D('architect', {
      etymology: {
        origin: 'architect 按现成英语词整词记，意思是「建筑师；设计者」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'architect',
            text: '现代英语：建筑师；设计者。'
          }
        ],
        formationLogic: '不硬拆。看到 architect 就想到「建筑师」。',
        mnemonic: '先记中文「建筑师」，再把英文 architect 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an architect to make the abstract point concrete.',
          chinese: '这节课用一个「建筑师」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'architect.s1',
          en: 'The lecture used an architect to make the abstract point concrete.',
          zh: '这节课用一个「建筑师」的例子，把抽象的论点讲具体。',
          structure: 'architect / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「建筑师」，对应英文释义：A person who designs buildings; the creator of a plan.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the architect of about the topic.',
          right: 'This architect belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 architect。',
          rule: '名词 architect（建筑师）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'architect.q1',
          senseId: 'architect.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「建筑师」.',
          options: [
            'architect',
            'architectural',
            'architecture'
          ],
          answer: 'architect',
          explain: 'architect 对应「建筑师」。'
        },
        {
          id: 'architect.q2',
          senseId: 'architect.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits architect?',
          options: [
            '建筑师',
            '其他义项',
            '无关说法'
          ],
          answer: '建筑师',
          explain: '按本词条，architect 是「建筑师」。'
        },
        {
          id: 'architect.q3',
          senseId: 'architect.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「建筑师」.',
          options: [
            'architect',
            'architectural',
            'architecture'
          ],
          answer: 'architect',
          explain: '空缺处用 architect，不要换成相邻词 architectural。'
        },
        {
          id: 'architect.q4',
          senseId: 'architect.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse architect with a neighbour in this list. Which one means 「建筑师」?',
          options: [
            'architect',
            'architectural',
            'architecture'
          ],
          answer: 'architect',
          explain: 'architectural 与 architecture 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'architectural',
          'architecture'
        ]
      }
    });

  D('architectural', {
      etymology: {
        origin: '英语派生：architecture + -al。形容词后缀。整词义为「建筑学的；建筑方面的」。',
        prefix: null,
        root: {
          text: 'architecture',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'architecture',
            text: '基础词，先掌握「architecture」。'
          },
          {
            label: 'architectural',
            text: '英语派生形式，教学义是「建筑学的；建筑方面的」。'
          }
        ],
        formationLogic: '在 architecture 上加 -al，得到 architectural。',
        mnemonic: '先记中文「建筑学的」，再把英文 architectural 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A architectural result needs a second look before anyone acts on it.',
          chinese: '一个「建筑学的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'architectural.s1',
          en: 'A architectural result needs a second look before anyone acts on it.',
          zh: '一个「建筑学的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'architectural / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「建筑学的」，对应英文释义：Connected with the design and style of buildings.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very architecturally surprising to us.',
          right: 'The news was architectural.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + architectural。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a architectural + 名词。'
        }
      ],
      quiz: [
        {
          id: 'architectural.q1',
          senseId: 'architectural.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「建筑学的」.',
          options: [
            'architectural',
            'architecture',
            'archive'
          ],
          answer: 'architectural',
          explain: 'architectural 对应「建筑学的」。'
        },
        {
          id: 'architectural.q2',
          senseId: 'architectural.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits architectural?',
          options: [
            '建筑学的',
            '其他义项',
            '档案'
          ],
          answer: '建筑学的',
          explain: '按本词条，architectural 是「建筑学的」。'
        },
        {
          id: 'architectural.q3',
          senseId: 'architectural.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'architectural',
            'architecture',
            'archive'
          ],
          answer: 'architectural',
          explain: '空缺处用 architectural，不要换成相邻词 architecture。'
        },
        {
          id: 'architectural.q4',
          senseId: 'architectural.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse architectural with a neighbour in this list. Which one means 「建筑学的」?',
          options: [
            'architectural',
            'architecture',
            'archive'
          ],
          answer: 'architectural',
          explain: 'architecture 与 archive 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'architecture',
          'archive'
        ]
      }
    });

  D('architecture', {
      etymology: {
        origin: 'architecture 按现成英语词整词记，意思是「建筑学；建筑风格」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'architecture',
            text: '现代英语：建筑学；建筑风格。'
          }
        ],
        formationLogic: '不硬拆。看到 architecture 就想到「建筑学」。',
        mnemonic: '先记中文「建筑学」，再把英文 architecture 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an architecture to make the abstract point concrete.',
          chinese: '这节课用一个「建筑学」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'architecture.s1',
          en: 'The lecture used an architecture to make the abstract point concrete.',
          zh: '这节课用一个「建筑学」的例子，把抽象的论点讲具体。',
          structure: 'architecture / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「建筑学」，对应英文释义：The art of designing buildings; the style of buildings.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the architecture of about the topic.',
          right: 'This architecture belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 architecture。',
          rule: '名词 architecture（建筑学）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'architecture.q1',
          senseId: 'architecture.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「建筑学」.',
          options: [
            'architecture',
            'archive',
            'archivist'
          ],
          answer: 'architecture',
          explain: 'architecture 对应「建筑学」。'
        },
        {
          id: 'architecture.q2',
          senseId: 'architecture.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits architecture?',
          options: [
            '建筑学',
            '档案',
            '档案管理员'
          ],
          answer: '建筑学',
          explain: '按本词条，architecture 是「建筑学」。'
        },
        {
          id: 'architecture.q3',
          senseId: 'architecture.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「建筑学」.',
          options: [
            'architecture',
            'archive',
            'archivist'
          ],
          answer: 'architecture',
          explain: '空缺处用 architecture，不要换成相邻词 archive。'
        },
        {
          id: 'architecture.q4',
          senseId: 'architecture.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse architecture with a neighbour in this list. Which one means 「建筑学」?',
          options: [
            'architecture',
            'archive',
            'archivist'
          ],
          answer: 'architecture',
          explain: 'archive 与 archivist 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'archive',
          'archivist'
        ]
      }
    });

  D('archive', {
      etymology: {
        origin: '英语派生：arch + -ive。形容词后缀。整词义为「档案；把……存档」。',
        prefix: null,
        root: {
          text: 'arch',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ive',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'arch',
            text: '基础词，先掌握「拱」。'
          },
          {
            label: 'archive',
            text: '英语派生形式，教学义是「档案；把……存档」。'
          }
        ],
        formationLogic: '在 arch 上加 -ive，得到 archive。',
        mnemonic: '先记中文「档案」，再把英文 archive 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an archive to make the abstract point concrete.',
          chinese: '这节课用一个「档案」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'archive.s1',
          en: 'The lecture used an archive to make the abstract point concrete.',
          zh: '这节课用一个「档案」的例子，把抽象的论点讲具体。',
          structure: 'archive / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「档案」，对应英文释义：A collection of old records; to store documents.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the archive of about the topic.',
          right: 'This archive belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 archive。',
          rule: '名词 archive（档案）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'archive.q1',
          senseId: 'archive.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「档案」.',
          options: [
            'archive',
            'archivist',
            'ardent'
          ],
          answer: 'archive',
          explain: 'archive 对应「档案」。'
        },
        {
          id: 'archive.q2',
          senseId: 'archive.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits archive?',
          options: [
            '档案',
            '档案管理员',
            '热心的'
          ],
          answer: '档案',
          explain: '按本词条，archive 是「档案」。'
        },
        {
          id: 'archive.q3',
          senseId: 'archive.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「档案」.',
          options: [
            'archive',
            'archivist',
            'ardent'
          ],
          answer: 'archive',
          explain: '空缺处用 archive，不要换成相邻词 archivist。'
        },
        {
          id: 'archive.q4',
          senseId: 'archive.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse archive with a neighbour in this list. Which one means 「档案」?',
          options: [
            'archive',
            'archivist',
            'ardent'
          ],
          answer: 'archive',
          explain: 'archivist 与 ardent 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'archivist',
          'ardent'
        ]
      }
    });

  D('archivist', {
      etymology: {
        origin: '英语派生：archive + -ist。表示从事该事的人。整词义为「档案管理员」。',
        prefix: null,
        root: {
          text: 'archive',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ist',
          gloss: '表示从事该事的人'
        },
        history: [
          {
            label: 'archive',
            text: '基础词，先掌握「档案」。'
          },
          {
            label: 'archivist',
            text: '英语派生形式，教学义是「档案管理员」。'
          }
        ],
        formationLogic: '在 archive 上加 -ist，得到 archivist。',
        mnemonic: '先记中文「档案管理员」，再把英文 archivist 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an archivist to make the abstract point concrete.',
          chinese: '这节课用一个「档案管理员」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'archivist.s1',
          en: 'The lecture used an archivist to make the abstract point concrete.',
          zh: '这节课用一个「档案管理员」的例子，把抽象的论点讲具体。',
          structure: 'archivist / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「档案管理员」，对应英文释义：A person who works in a place where historical documents are kept and arranged.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the archivist of about the topic.',
          right: 'This archivist belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 archivist。',
          rule: '名词 archivist（档案管理员）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'archivist.q1',
          senseId: 'archivist.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「档案管理员」.',
          options: [
            'archivist',
            'ardent',
            'ardently'
          ],
          answer: 'archivist',
          explain: 'archivist 对应「档案管理员」。'
        },
        {
          id: 'archivist.q2',
          senseId: 'archivist.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits archivist?',
          options: [
            '档案管理员',
            '热心的',
            '热情地'
          ],
          answer: '档案管理员',
          explain: '按本词条，archivist 是「档案管理员」。'
        },
        {
          id: 'archivist.q3',
          senseId: 'archivist.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「档案管理员」.',
          options: [
            'archivist',
            'ardent',
            'ardently'
          ],
          answer: 'archivist',
          explain: '空缺处用 archivist，不要换成相邻词 ardent。'
        },
        {
          id: 'archivist.q4',
          senseId: 'archivist.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse archivist with a neighbour in this list. Which one means 「档案管理员」?',
          options: [
            'archivist',
            'ardent',
            'ardently'
          ],
          answer: 'archivist',
          explain: 'ardent 与 ardently 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ardent',
          'ardently'
        ]
      }
    });

  D('ardent', {
      etymology: {
        origin: 'ardent 按现成英语词整词记，意思是「热心的；热烈的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ardent',
            text: '现代英语：热心的；热烈的。'
          }
        ],
        formationLogic: '不硬拆。看到 ardent 就想到「热心的」。',
        mnemonic: '先记中文「热心的」，再把英文 ardent 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A ardent result needs a second look before anyone acts on it.',
          chinese: '一个「热心的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'ardent.s1',
          en: 'A ardent result needs a second look before anyone acts on it.',
          zh: '一个「热心的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'ardent / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「热心的」，对应英文释义：Showing very strong feelings, especially of love or support.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very ardently surprising to us.',
          right: 'The news was ardent.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + ardent。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a ardent + 名词。'
        }
      ],
      quiz: [
        {
          id: 'ardent.q1',
          senseId: 'ardent.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「热心的」.',
          options: [
            'ardent',
            'ardently',
            'ardor'
          ],
          answer: 'ardent',
          explain: 'ardent 对应「热心的」。'
        },
        {
          id: 'ardent.q2',
          senseId: 'ardent.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ardent?',
          options: [
            '热心的',
            '热情地',
            '热情'
          ],
          answer: '热心的',
          explain: '按本词条，ardent 是「热心的」。'
        },
        {
          id: 'ardent.q3',
          senseId: 'ardent.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'ardent',
            'ardently',
            'ardor'
          ],
          answer: 'ardent',
          explain: '空缺处用 ardent，不要换成相邻词 ardently。'
        },
        {
          id: 'ardent.q4',
          senseId: 'ardent.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ardent with a neighbour in this list. Which one means 「热心的」?',
          options: [
            'ardent',
            'ardently',
            'ardor'
          ],
          answer: 'ardent',
          explain: 'ardently 与 ardor 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ardently',
          'ardor'
        ]
      }
    });

  D('ardently', {
      etymology: {
        origin: '英语派生：ardent + -ly。副词后缀，表示方式。整词义为「热情地；热烈地」。',
        prefix: null,
        root: {
          text: 'ardent',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ly',
          gloss: '副词后缀，表示方式'
        },
        history: [
          {
            label: 'ardent',
            text: '基础词，先掌握「热心的」。'
          },
          {
            label: 'ardently',
            text: '英语派生形式，教学义是「热情地；热烈地」。'
          }
        ],
        formationLogic: '在 ardent 上加 -ly，得到 ardently。',
        mnemonic: '先记中文「热情地」，再把英文 ardently 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'She explained the change ardently, so the class could follow each step.',
          chinese: '她「热情地」地说明了这一变化，班上的人才能跟上每一步。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ardently.s1',
          en: 'She explained the change ardently, so the class could follow each step.',
          zh: '她「热情地」地说明了这一变化，班上的人才能跟上每一步。',
          structure: 'ardently / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '副词修饰动词或整句，不单独作名词的定语。',
          rationale: '本句用的是「热情地」，对应英文释义：In a way that shows very strong feeling or enthusiasm.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'She gave a ardently answer.',
          right: 'She answered ardently.',
          reason: '副词修饰动词，不直接放在名词前当形容词。',
          rule: '动词 + ardently，或把句子改成对应的形容词。',
          special: '句末或动词后通常比硬塞在名词前更自然。'
        }
      ],
      quiz: [
        {
          id: 'ardently.q1',
          senseId: 'ardently.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「热情地」.',
          options: [
            'ardently',
            'ardor',
            'area'
          ],
          answer: 'ardently',
          explain: 'ardently 对应「热情地」。'
        },
        {
          id: 'ardently.q2',
          senseId: 'ardently.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ardently?',
          options: [
            '热情地',
            '热情',
            '无关说法'
          ],
          answer: '热情地',
          explain: '按本词条，ardently 是「热情地」。'
        },
        {
          id: 'ardently.q3',
          senseId: 'ardently.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「热情地」.',
          options: [
            'ardently',
            'ardor',
            'area'
          ],
          answer: 'ardently',
          explain: '空缺处用 ardently，不要换成相邻词 ardor。'
        },
        {
          id: 'ardently.q4',
          senseId: 'ardently.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ardently with a neighbour in this list. Which one means 「热情地」?',
          options: [
            'ardently',
            'ardor',
            'area'
          ],
          answer: 'ardently',
          explain: 'ardor 与 area 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'ardor',
          'area'
        ]
      }
    });

  D('ardor', {
      etymology: {
        origin: 'ardor 按现成英语词整词记，意思是「热情；热忱（美式）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'ardor',
            text: '现代英语：热情；热忱（美式）。'
          }
        ],
        formationLogic: '不硬拆。看到 ardor 就想到「热情」。',
        mnemonic: '先记中文「热情」，再把英文 ardor 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an ardor to make the abstract point concrete.',
          chinese: '这节课用一个「热情」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'ardor.s1',
          en: 'The lecture used an ardor to make the abstract point concrete.',
          zh: '这节课用一个「热情」的例子，把抽象的论点讲具体。',
          structure: 'ardor / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「热情」，对应英文释义：Very strong enthusiasm or passion for something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the ardor of about the topic.',
          right: 'This ardor belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 ardor。',
          rule: '名词 ardor（热情）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'ardor.q1',
          senseId: 'ardor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「热情」.',
          options: [
            'ardor',
            'area',
            'arena'
          ],
          answer: 'ardor',
          explain: 'ardor 对应「热情」。'
        },
        {
          id: 'ardor.q2',
          senseId: 'ardor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits ardor?',
          options: [
            '热情',
            '其他义项',
            '竞技场'
          ],
          answer: '热情',
          explain: '按本词条，ardor 是「热情」。'
        },
        {
          id: 'ardor.q3',
          senseId: 'ardor.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「热情」.',
          options: [
            'ardor',
            'area',
            'arena'
          ],
          answer: 'ardor',
          explain: '空缺处用 ardor，不要换成相邻词 area。'
        },
        {
          id: 'ardor.q4',
          senseId: 'ardor.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse ardor with a neighbour in this list. Which one means 「热情」?',
          options: [
            'ardor',
            'area',
            'arena'
          ],
          answer: 'ardor',
          explain: 'area 与 arena 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'area',
          'arena'
        ]
      }
    });

  D('area', {
      etymology: {
        origin: 'area 按现成英语词整词记，意思是「地区；面积；领域」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'area',
            text: '现代英语：地区；面积；领域。'
          }
        ],
        formationLogic: '不硬拆。看到 area 就想到「地区」。',
        mnemonic: '先记中文「地区」，再把英文 area 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an area to make the abstract point concrete.',
          chinese: '这节课用一个「地区」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'area.s1',
          en: 'The lecture used an area to make the abstract point concrete.',
          zh: '这节课用一个「地区」的例子，把抽象的论点讲具体。',
          structure: 'area / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「地区」，对应英文释义：A part of a place, city or subject; the size of a surface.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the area of about the topic.',
          right: 'This area belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 area。',
          rule: '名词 area（地区）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'area.q1',
          senseId: 'area.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「地区」.',
          options: [
            'area',
            'arena',
            'argue'
          ],
          answer: 'area',
          explain: 'area 对应「地区」。'
        },
        {
          id: 'area.q2',
          senseId: 'area.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits area?',
          options: [
            '地区',
            '竞技场',
            '无关说法'
          ],
          answer: '地区',
          explain: '按本词条，area 是「地区」。'
        },
        {
          id: 'area.q3',
          senseId: 'area.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「地区」.',
          options: [
            'area',
            'arena',
            'argue'
          ],
          answer: 'area',
          explain: '空缺处用 area，不要换成相邻词 arena。'
        },
        {
          id: 'area.q4',
          senseId: 'area.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse area with a neighbour in this list. Which one means 「地区」?',
          options: [
            'area',
            'arena',
            'argue'
          ],
          answer: 'area',
          explain: 'arena 与 argue 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arena',
          'argue'
        ]
      }
    });

  D('arena', {
      etymology: {
        origin: 'arena 按现成英语词整词记，意思是「竞技场；舞台；领域」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arena',
            text: '现代英语：竞技场；舞台；领域。'
          }
        ],
        formationLogic: '不硬拆。看到 arena 就想到「竞技场」。',
        mnemonic: '先记中文「竞技场」，再把英文 arena 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arena to make the abstract point concrete.',
          chinese: '这节课用一个「竞技场」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arena.s1',
          en: 'The lecture used an arena to make the abstract point concrete.',
          zh: '这节课用一个「竞技场」的例子，把抽象的论点讲具体。',
          structure: 'arena / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「竞技场」，对应英文释义：A place for sports or public events; an area of activity.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arena of about the topic.',
          right: 'This arena belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arena。',
          rule: '名词 arena（竞技场）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arena.q1',
          senseId: 'arena.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「竞技场」.',
          options: [
            'arena',
            'argue',
            'argument'
          ],
          answer: 'arena',
          explain: 'arena 对应「竞技场」。'
        },
        {
          id: 'arena.q2',
          senseId: 'arena.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arena?',
          options: [
            '竞技场',
            '其他义项',
            '无关说法'
          ],
          answer: '竞技场',
          explain: '按本词条，arena 是「竞技场」。'
        },
        {
          id: 'arena.q3',
          senseId: 'arena.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「竞技场」.',
          options: [
            'arena',
            'argue',
            'argument'
          ],
          answer: 'arena',
          explain: '空缺处用 arena，不要换成相邻词 argue。'
        },
        {
          id: 'arena.q4',
          senseId: 'arena.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arena with a neighbour in this list. Which one means 「竞技场」?',
          options: [
            'arena',
            'argue',
            'argument'
          ],
          answer: 'arena',
          explain: 'argue 与 argument 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'argue',
          'argument'
        ]
      }
    });

  D('argue', {
      etymology: {
        origin: 'argue 按现成英语词整词记，意思是「争论；主张；辩论」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'argue',
            text: '现代英语：争论；主张；辩论。'
          }
        ],
        formationLogic: '不硬拆。看到 argue 就想到「争论」。',
        mnemonic: '先记中文「争论」，再把英文 argue 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will argue the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（争论）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'argue.s1',
          en: 'The team will argue the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（争论）。',
          structure: 'argue / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「争论」，对应英文释义：To disagree angrily; to give reasons for an opinion.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They argue about the result without a reason.',
          right: 'They argue the result and give a reason.',
          reason: 'argue 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + argue + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'argue.q1',
          senseId: 'argue.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「争论」.',
          options: [
            'argue',
            'argument',
            'argumentative'
          ],
          answer: 'argue',
          explain: 'argue 对应「争论」。'
        },
        {
          id: 'argue.q2',
          senseId: 'argue.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits argue?',
          options: [
            '争论',
            '其他义项',
            '无关说法'
          ],
          answer: '争论',
          explain: '按本词条，argue 是「争论」。'
        },
        {
          id: 'argue.q3',
          senseId: 'argue.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「争论」.',
          options: [
            'argue',
            'argument',
            'argumentative'
          ],
          answer: 'argue',
          explain: '空缺处用 argue，不要换成相邻词 argument。'
        },
        {
          id: 'argue.q4',
          senseId: 'argue.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse argue with a neighbour in this list. Which one means 「争论」?',
          options: [
            'argue',
            'argument',
            'argumentative'
          ],
          answer: 'argue',
          explain: 'argument 与 argumentative 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'argument',
          'argumentative'
        ]
      }
    });

  D('argument', {
      etymology: {
        origin: '英语派生：argue + -ment。名词后缀，表示行为或结果。整词义为「争论；论点；论据」。',
        prefix: null,
        root: {
          text: 'argue',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ment',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'argue',
            text: '基础词，先掌握「argue」。'
          },
          {
            label: 'argument',
            text: '英语派生形式，教学义是「争论；论点；论据」。'
          }
        ],
        formationLogic: '在 argue 上加 -ment，得到 argument。',
        mnemonic: '先记中文「争论」，再把英文 argument 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an argument to make the abstract point concrete.',
          chinese: '这节课用一个「争论」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'argument.s1',
          en: 'The lecture used an argument to make the abstract point concrete.',
          zh: '这节课用一个「争论」的例子，把抽象的论点讲具体。',
          structure: 'argument / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「争论」，对应英文释义：An angry disagreement; a reason given to support an opinion; the reasons in a piece of writing.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the argument of about the topic.',
          right: 'This argument belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 argument。',
          rule: '名词 argument（争论）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'argument.q1',
          senseId: 'argument.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「争论」.',
          options: [
            'argument',
            'argumentative',
            'arid'
          ],
          answer: 'argument',
          explain: 'argument 对应「争论」。'
        },
        {
          id: 'argument.q2',
          senseId: 'argument.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits argument?',
          options: [
            '争论',
            '其他义项',
            '干旱的'
          ],
          answer: '争论',
          explain: '按本词条，argument 是「争论」。'
        },
        {
          id: 'argument.q3',
          senseId: 'argument.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「争论」.',
          options: [
            'argument',
            'argumentative',
            'arid'
          ],
          answer: 'argument',
          explain: '空缺处用 argument，不要换成相邻词 argumentative。'
        },
        {
          id: 'argument.q4',
          senseId: 'argument.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse argument with a neighbour in this list. Which one means 「争论」?',
          options: [
            'argument',
            'argumentative',
            'arid'
          ],
          answer: 'argument',
          explain: 'argumentative 与 arid 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'argumentative',
          'arid'
        ]
      }
    });

  D('argumentative', {
      etymology: {
        origin: 'argumentative 按现成英语词整词记，意思是「好争辩的；提出论点的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'argumentative',
            text: '现代英语：好争辩的；提出论点的。'
          }
        ],
        formationLogic: '不硬拆。看到 argumentative 就想到「好争辩的」。',
        mnemonic: '先记中文「好争辩的」，再把英文 argumentative 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A argumentative result needs a second look before anyone acts on it.',
          chinese: '一个「好争辩的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'argumentative.s1',
          en: 'A argumentative result needs a second look before anyone acts on it.',
          zh: '一个「好争辩的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'argumentative / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「好争辩的」，对应英文释义：Likely to argue or disagree with people; well-reasoned and based on arguments.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very argumentatively surprising to us.',
          right: 'The news was argumentative.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + argumentative。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a argumentative + 名词。'
        }
      ],
      quiz: [
        {
          id: 'argumentative.q1',
          senseId: 'argumentative.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「好争辩的」.',
          options: [
            'argumentative',
            'arid',
            'arise'
          ],
          answer: 'argumentative',
          explain: 'argumentative 对应「好争辩的」。'
        },
        {
          id: 'argumentative.q2',
          senseId: 'argumentative.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits argumentative?',
          options: [
            '好争辩的',
            '干旱的',
            '出现'
          ],
          answer: '好争辩的',
          explain: '按本词条，argumentative 是「好争辩的」。'
        },
        {
          id: 'argumentative.q3',
          senseId: 'argumentative.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'argumentative',
            'arid',
            'arise'
          ],
          answer: 'argumentative',
          explain: '空缺处用 argumentative，不要换成相邻词 arid。'
        },
        {
          id: 'argumentative.q4',
          senseId: 'argumentative.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse argumentative with a neighbour in this list. Which one means 「好争辩的」?',
          options: [
            'argumentative',
            'arid',
            'arise'
          ],
          answer: 'argumentative',
          explain: 'arid 与 arise 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arid',
          'arise'
        ]
      }
    });

  D('arid', {
      etymology: {
        origin: 'arid 按现成英语词整词记，意思是「干旱的；贫瘠的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arid',
            text: '现代英语：干旱的；贫瘠的。'
          }
        ],
        formationLogic: '不硬拆。看到 arid 就想到「干旱的」。',
        mnemonic: '先记中文「干旱的」，再把英文 arid 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A arid result needs a second look before anyone acts on it.',
          chinese: '一个「干旱的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'arid.s1',
          en: 'A arid result needs a second look before anyone acts on it.',
          zh: '一个「干旱的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'arid / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「干旱的」，对应英文释义：Very dry with little or no rain; not producing much because it is dry.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very aridly surprising to us.',
          right: 'The news was arid.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + arid。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a arid + 名词。'
        }
      ],
      quiz: [
        {
          id: 'arid.q1',
          senseId: 'arid.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「干旱的」.',
          options: [
            'arid',
            'arise',
            'arisen'
          ],
          answer: 'arid',
          explain: 'arid 对应「干旱的」。'
        },
        {
          id: 'arid.q2',
          senseId: 'arid.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arid?',
          options: [
            '干旱的',
            '出现',
            '无关说法'
          ],
          answer: '干旱的',
          explain: '按本词条，arid 是「干旱的」。'
        },
        {
          id: 'arid.q3',
          senseId: 'arid.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'arid',
            'arise',
            'arisen'
          ],
          answer: 'arid',
          explain: '空缺处用 arid，不要换成相邻词 arise。'
        },
        {
          id: 'arid.q4',
          senseId: 'arid.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arid with a neighbour in this list. Which one means 「干旱的」?',
          options: [
            'arid',
            'arise',
            'arisen'
          ],
          answer: 'arid',
          explain: 'arise 与 arisen 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arise',
          'arisen'
        ]
      }
    });

  D('arise', {
      etymology: {
        origin: 'arise 按现成英语词整词记，意思是「出现；发生；起因于」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arise',
            text: '现代英语：出现；发生；起因于。'
          }
        ],
        formationLogic: '不硬拆。看到 arise 就想到「出现」。',
        mnemonic: '先记中文「出现」，再把英文 arise 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Questions arise when the sample is too small.',
          chinese: '样本太小时，问题就会出现。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arise.s1',
          en: 'Questions arise when the sample is too small.',
          zh: '样本太小时，问题就会出现。',
          structure: 'arise / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「出现」，对应英文释义：To happen; to come from something.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arise about the result without a reason.',
          right: 'They arise the result and give a reason.',
          reason: 'arise 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arise + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arise.q1',
          senseId: 'arise.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「出现」.',
          options: [
            'arise',
            'arisen',
            'aristocracy'
          ],
          answer: 'arise',
          explain: 'arise 对应「出现」。'
        },
        {
          id: 'arise.q2',
          senseId: 'arise.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arise?',
          options: [
            '出现',
            '其他义项',
            '贵族'
          ],
          answer: '出现',
          explain: '按本词条，arise 是「出现」。'
        },
        {
          id: 'arise.q3',
          senseId: 'arise.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「出现」.',
          options: [
            'arise',
            'arisen',
            'aristocracy'
          ],
          answer: 'arise',
          explain: '空缺处用 arise，不要换成相邻词 arisen。'
        },
        {
          id: 'arise.q4',
          senseId: 'arise.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arise with a neighbour in this list. Which one means 「出现」?',
          options: [
            'arise',
            'arisen',
            'aristocracy'
          ],
          answer: 'arise',
          explain: 'arisen 与 aristocracy 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arisen',
          'aristocracy'
        ]
      }
    });

  D('arisen', {
      etymology: {
        origin: 'arisen 按现成英语词整词记，意思是「出现；产生（arise 的过去分词）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arisen',
            text: '现代英语：出现；产生（arise 的过去分词）。'
          }
        ],
        formationLogic: '不硬拆。看到 arisen 就想到「出现」。',
        mnemonic: '先记中文「出现」，再把英文 arisen 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A funding gap has arisen since the grant was delayed.',
          chinese: '拨款被推迟以后，出现了资金缺口。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arisen.s1',
          en: 'A funding gap has arisen since the grant was delayed.',
          zh: '拨款被推迟以后，出现了资金缺口。',
          structure: 'arisen / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「出现」，对应英文释义：Past participle of arise: to happen or appear.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arisen about the result without a reason.',
          right: 'They arisen the result and give a reason.',
          reason: 'arisen 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arisen + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arisen.q1',
          senseId: 'arisen.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「出现」.',
          options: [
            'arisen',
            'aristocracy',
            'aristocrat'
          ],
          answer: 'arisen',
          explain: 'arisen 对应「出现」。'
        },
        {
          id: 'arisen.q2',
          senseId: 'arisen.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arisen?',
          options: [
            '出现',
            '贵族',
            '无关说法'
          ],
          answer: '出现',
          explain: '按本词条，arisen 是「出现」。'
        },
        {
          id: 'arisen.q3',
          senseId: 'arisen.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「出现」.',
          options: [
            'arisen',
            'aristocracy',
            'aristocrat'
          ],
          answer: 'arisen',
          explain: '空缺处用 arisen，不要换成相邻词 aristocracy。'
        },
        {
          id: 'arisen.q4',
          senseId: 'arisen.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arisen with a neighbour in this list. Which one means 「出现」?',
          options: [
            'arisen',
            'aristocracy',
            'aristocrat'
          ],
          answer: 'arisen',
          explain: 'aristocracy 与 aristocrat 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aristocracy',
          'aristocrat'
        ]
      }
    });

  D('aristocracy', {
      etymology: {
        origin: 'aristocracy 按现成英语词整词记，意思是「贵族；贵族统治」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'aristocracy',
            text: '现代英语：贵族；贵族统治。'
          }
        ],
        formationLogic: '不硬拆。看到 aristocracy 就想到「贵族」。',
        mnemonic: '先记中文「贵族」，再把英文 aristocracy 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an aristocracy to make the abstract point concrete.',
          chinese: '这节课用一个「贵族」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'aristocracy.s1',
          en: 'The lecture used an aristocracy to make the abstract point concrete.',
          zh: '这节课用一个「贵族」的例子，把抽象的论点讲具体。',
          structure: 'aristocracy / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「贵族」，对应英文释义：The highest social class, or a government by such a class.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the aristocracy of about the topic.',
          right: 'This aristocracy belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 aristocracy。',
          rule: '名词 aristocracy（贵族）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'aristocracy.q1',
          senseId: 'aristocracy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「贵族」.',
          options: [
            'aristocracy',
            'aristocrat',
            'aristocratic'
          ],
          answer: 'aristocracy',
          explain: 'aristocracy 对应「贵族」。'
        },
        {
          id: 'aristocracy.q2',
          senseId: 'aristocracy.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aristocracy?',
          options: [
            '贵族',
            '其他义项',
            '贵族的'
          ],
          answer: '贵族',
          explain: '按本词条，aristocracy 是「贵族」。'
        },
        {
          id: 'aristocracy.q3',
          senseId: 'aristocracy.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「贵族」.',
          options: [
            'aristocracy',
            'aristocrat',
            'aristocratic'
          ],
          answer: 'aristocracy',
          explain: '空缺处用 aristocracy，不要换成相邻词 aristocrat。'
        },
        {
          id: 'aristocracy.q4',
          senseId: 'aristocracy.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aristocracy with a neighbour in this list. Which one means 「贵族」?',
          options: [
            'aristocracy',
            'aristocrat',
            'aristocratic'
          ],
          answer: 'aristocracy',
          explain: 'aristocrat 与 aristocratic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aristocrat',
          'aristocratic'
        ]
      }
    });

  D('aristocrat', {
      etymology: {
        origin: 'aristocrat 按现成英语词整词记，意思是「贵族」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'aristocrat',
            text: '现代英语：贵族。'
          }
        ],
        formationLogic: '不硬拆。看到 aristocrat 就想到「贵族」。',
        mnemonic: '先记中文「贵族」，再把英文 aristocrat 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an aristocrat to make the abstract point concrete.',
          chinese: '这节课用一个「贵族」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'aristocrat.s1',
          en: 'The lecture used an aristocrat to make the abstract point concrete.',
          zh: '这节课用一个「贵族」的例子，把抽象的论点讲具体。',
          structure: 'aristocrat / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「贵族」，对应英文释义：A person of the highest social class.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the aristocrat of about the topic.',
          right: 'This aristocrat belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 aristocrat。',
          rule: '名词 aristocrat（贵族）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'aristocrat.q1',
          senseId: 'aristocrat.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「贵族」.',
          options: [
            'aristocrat',
            'aristocratic',
            'arithmetic'
          ],
          answer: 'aristocrat',
          explain: 'aristocrat 对应「贵族」。'
        },
        {
          id: 'aristocrat.q2',
          senseId: 'aristocrat.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aristocrat?',
          options: [
            '贵族',
            '贵族的',
            '无关说法'
          ],
          answer: '贵族',
          explain: '按本词条，aristocrat 是「贵族」。'
        },
        {
          id: 'aristocrat.q3',
          senseId: 'aristocrat.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「贵族」.',
          options: [
            'aristocrat',
            'aristocratic',
            'arithmetic'
          ],
          answer: 'aristocrat',
          explain: '空缺处用 aristocrat，不要换成相邻词 aristocratic。'
        },
        {
          id: 'aristocrat.q4',
          senseId: 'aristocrat.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aristocrat with a neighbour in this list. Which one means 「贵族」?',
          options: [
            'aristocrat',
            'aristocratic',
            'arithmetic'
          ],
          answer: 'aristocrat',
          explain: 'aristocratic 与 arithmetic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aristocratic',
          'arithmetic'
        ]
      }
    });

  D('aristocratic', {
      etymology: {
        origin: '英语派生：aristocrat + -ic。形容词后缀。整词义为「贵族的；高贵的」。',
        prefix: null,
        root: {
          text: 'aristocrat',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ic',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'aristocrat',
            text: '基础词，先掌握「aristocrat」。'
          },
          {
            label: 'aristocratic',
            text: '英语派生形式，教学义是「贵族的；高贵的」。'
          }
        ],
        formationLogic: '在 aristocrat 上加 -ic，得到 aristocratic。',
        mnemonic: '先记中文「贵族的」，再把英文 aristocratic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A aristocratic result needs a second look before anyone acts on it.',
          chinese: '一个「贵族的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'aristocratic.s1',
          en: 'A aristocratic result needs a second look before anyone acts on it.',
          zh: '一个「贵族的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'aristocratic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「贵族的」，对应英文释义：Belonging to or typical of the highest social class.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very aristocraticly surprising to us.',
          right: 'The news was aristocratic.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + aristocratic。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a aristocratic + 名词。'
        }
      ],
      quiz: [
        {
          id: 'aristocratic.q1',
          senseId: 'aristocratic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「贵族的」.',
          options: [
            'aristocratic',
            'arithmetic',
            'arithmetical'
          ],
          answer: 'aristocratic',
          explain: 'aristocratic 对应「贵族的」。'
        },
        {
          id: 'aristocratic.q2',
          senseId: 'aristocratic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aristocratic?',
          options: [
            '贵族的',
            '其他义项',
            '算术的'
          ],
          answer: '贵族的',
          explain: '按本词条，aristocratic 是「贵族的」。'
        },
        {
          id: 'aristocratic.q3',
          senseId: 'aristocratic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'aristocratic',
            'arithmetic',
            'arithmetical'
          ],
          answer: 'aristocratic',
          explain: '空缺处用 aristocratic，不要换成相邻词 arithmetic。'
        },
        {
          id: 'aristocratic.q4',
          senseId: 'aristocratic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aristocratic with a neighbour in this list. Which one means 「贵族的」?',
          options: [
            'aristocratic',
            'arithmetic',
            'arithmetical'
          ],
          answer: 'aristocratic',
          explain: 'arithmetic 与 arithmetical 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arithmetic',
          'arithmetical'
        ]
      }
    });

  D('arithmetic', {
      etymology: {
        origin: 'arithmetic 按现成英语词整词记，意思是「算术」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arithmetic',
            text: '现代英语：算术。'
          }
        ],
        formationLogic: '不硬拆。看到 arithmetic 就想到「算术」。',
        mnemonic: '先记中文「算术」，再把英文 arithmetic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arithmetic to make the abstract point concrete.',
          chinese: '这节课用一个「算术」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arithmetic.s1',
          en: 'The lecture used an arithmetic to make the abstract point concrete.',
          zh: '这节课用一个「算术」的例子，把抽象的论点讲具体。',
          structure: 'arithmetic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「算术」，对应英文释义：The part of mathematics about adding, multiplying, etc.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arithmetic of about the topic.',
          right: 'This arithmetic belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arithmetic。',
          rule: '名词 arithmetic（算术）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arithmetic.q1',
          senseId: 'arithmetic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「算术」.',
          options: [
            'arithmetic',
            'arithmetical',
            'arm'
          ],
          answer: 'arithmetic',
          explain: 'arithmetic 对应「算术」。'
        },
        {
          id: 'arithmetic.q2',
          senseId: 'arithmetic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arithmetic?',
          options: [
            '算术',
            '算术的',
            '无关说法'
          ],
          answer: '算术',
          explain: '按本词条，arithmetic 是「算术」。'
        },
        {
          id: 'arithmetic.q3',
          senseId: 'arithmetic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「算术」.',
          options: [
            'arithmetic',
            'arithmetical',
            'arm'
          ],
          answer: 'arithmetic',
          explain: '空缺处用 arithmetic，不要换成相邻词 arithmetical。'
        },
        {
          id: 'arithmetic.q4',
          senseId: 'arithmetic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arithmetic with a neighbour in this list. Which one means 「算术」?',
          options: [
            'arithmetic',
            'arithmetical',
            'arm'
          ],
          answer: 'arithmetic',
          explain: 'arithmetical 与 arm 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arithmetical',
          'arm'
        ]
      }
    });

  D('arithmetical', {
      etymology: {
        origin: '英语派生：arithmetic + -al。形容词后缀。整词义为「算术的；关于计算的」。',
        prefix: null,
        root: {
          text: 'arithmetic',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'arithmetic',
            text: '基础词，先掌握「arithmetic」。'
          },
          {
            label: 'arithmetical',
            text: '英语派生形式，教学义是「算术的；关于计算的」。'
          }
        ],
        formationLogic: '在 arithmetic 上加 -al，得到 arithmetical。',
        mnemonic: '先记中文「算术的」，再把英文 arithmetical 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A arithmetical result needs a second look before anyone acts on it.',
          chinese: '一个「算术的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'arithmetical.s1',
          en: 'A arithmetical result needs a second look before anyone acts on it.',
          zh: '一个「算术的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'arithmetical / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「算术的」，对应英文释义：Connected with or involving simple calculations with numbers.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very arithmetically surprising to us.',
          right: 'The news was arithmetical.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + arithmetical。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a arithmetical + 名词。'
        }
      ],
      quiz: [
        {
          id: 'arithmetical.q1',
          senseId: 'arithmetical.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「算术的」.',
          options: [
            'arithmetical',
            'arm',
            'armada'
          ],
          answer: 'arithmetical',
          explain: 'arithmetical 对应「算术的」。'
        },
        {
          id: 'arithmetical.q2',
          senseId: 'arithmetical.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arithmetical?',
          options: [
            '算术的',
            '其他义项',
            '无关说法'
          ],
          answer: '算术的',
          explain: '按本词条，arithmetical 是「算术的」。'
        },
        {
          id: 'arithmetical.q3',
          senseId: 'arithmetical.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'arithmetical',
            'arm',
            'armada'
          ],
          answer: 'arithmetical',
          explain: '空缺处用 arithmetical，不要换成相邻词 arm。'
        },
        {
          id: 'arithmetical.q4',
          senseId: 'arithmetical.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arithmetical with a neighbour in this list. Which one means 「算术的」?',
          options: [
            'arithmetical',
            'arm',
            'armada'
          ],
          answer: 'arithmetical',
          explain: 'arm 与 armada 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arm',
          'armada'
        ]
      }
    });

  D('arm', {
      etymology: {
        origin: 'arm 按现成英语词整词记，意思是「手臂；武器；武装」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arm',
            text: '现代英语：手臂；武器；武装。'
          }
        ],
        formationLogic: '不硬拆。看到 arm 就想到「手臂」。',
        mnemonic: '先记中文「手臂」，再把英文 arm 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arm to make the abstract point concrete.',
          chinese: '这节课用一个「手臂」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arm.s1',
          en: 'The lecture used an arm to make the abstract point concrete.',
          zh: '这节课用一个「手臂」的例子，把抽象的论点讲具体。',
          structure: 'arm / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「手臂」，对应英文释义：The long body part from shoulder to hand; to give weapons.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arm of about the topic.',
          right: 'This arm belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arm。',
          rule: '名词 arm（手臂）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arm.q1',
          senseId: 'arm.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「手臂」.',
          options: [
            'arm',
            'armada',
            'armament'
          ],
          answer: 'arm',
          explain: 'arm 对应「手臂」。'
        },
        {
          id: 'arm.q2',
          senseId: 'arm.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arm?',
          options: [
            '手臂',
            '其他义项',
            '军备'
          ],
          answer: '手臂',
          explain: '按本词条，arm 是「手臂」。'
        },
        {
          id: 'arm.q3',
          senseId: 'arm.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「手臂」.',
          options: [
            'arm',
            'armada',
            'armament'
          ],
          answer: 'arm',
          explain: '空缺处用 arm，不要换成相邻词 armada。'
        },
        {
          id: 'arm.q4',
          senseId: 'arm.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arm with a neighbour in this list. Which one means 「手臂」?',
          options: [
            'arm',
            'armada',
            'armament'
          ],
          answer: 'arm',
          explain: 'armada 与 armament 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armada',
          'armament'
        ]
      }
    });

  D('armada', {
      etymology: {
        origin: 'armada 按现成英语词整词记，意思是「舰队；一大群」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'armada',
            text: '现代英语：舰队；一大群。'
          }
        ],
        formationLogic: '不硬拆。看到 armada 就想到「舰队」。',
        mnemonic: '先记中文「舰队」，再把英文 armada 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an armada to make the abstract point concrete.',
          chinese: '这节课用一个「舰队」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'armada.s1',
          en: 'The lecture used an armada to make the abstract point concrete.',
          zh: '这节课用一个「舰队」的例子，把抽象的论点讲具体。',
          structure: 'armada / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「舰队」，对应英文释义：A large fleet of warships, or a large group of things moving together.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the armada of about the topic.',
          right: 'This armada belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 armada。',
          rule: '名词 armada（舰队）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'armada.q1',
          senseId: 'armada.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「舰队」.',
          options: [
            'armada',
            'armament',
            'armchair'
          ],
          answer: 'armada',
          explain: 'armada 对应「舰队」。'
        },
        {
          id: 'armada.q2',
          senseId: 'armada.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armada?',
          options: [
            '舰队',
            '军备',
            '扶手椅'
          ],
          answer: '舰队',
          explain: '按本词条，armada 是「舰队」。'
        },
        {
          id: 'armada.q3',
          senseId: 'armada.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「舰队」.',
          options: [
            'armada',
            'armament',
            'armchair'
          ],
          answer: 'armada',
          explain: '空缺处用 armada，不要换成相邻词 armament。'
        },
        {
          id: 'armada.q4',
          senseId: 'armada.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armada with a neighbour in this list. Which one means 「舰队」?',
          options: [
            'armada',
            'armament',
            'armchair'
          ],
          answer: 'armada',
          explain: 'armament 与 armchair 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armament',
          'armchair'
        ]
      }
    });

  D('armament', {
      etymology: {
        origin: 'armament 按现成英语词整词记，意思是「军备；武装」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'armament',
            text: '现代英语：军备；武装。'
          }
        ],
        formationLogic: '不硬拆。看到 armament 就想到「军备」。',
        mnemonic: '先记中文「军备」，再把英文 armament 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an armament to make the abstract point concrete.',
          chinese: '这节课用一个「军备」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'armament.s1',
          en: 'The lecture used an armament to make the abstract point concrete.',
          zh: '这节课用一个「军备」的例子，把抽象的论点讲具体。',
          structure: 'armament / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「军备」，对应英文释义：Weapons and military equipment, or the process of equipping an army.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the armament of about the topic.',
          right: 'This armament belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 armament。',
          rule: '名词 armament（军备）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'armament.q1',
          senseId: 'armament.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「军备」.',
          options: [
            'armament',
            'armchair',
            'armed'
          ],
          answer: 'armament',
          explain: 'armament 对应「军备」。'
        },
        {
          id: 'armament.q2',
          senseId: 'armament.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armament?',
          options: [
            '军备',
            '扶手椅',
            '武装的'
          ],
          answer: '军备',
          explain: '按本词条，armament 是「军备」。'
        },
        {
          id: 'armament.q3',
          senseId: 'armament.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「军备」.',
          options: [
            'armament',
            'armchair',
            'armed'
          ],
          answer: 'armament',
          explain: '空缺处用 armament，不要换成相邻词 armchair。'
        },
        {
          id: 'armament.q4',
          senseId: 'armament.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armament with a neighbour in this list. Which one means 「军备」?',
          options: [
            'armament',
            'armchair',
            'armed'
          ],
          answer: 'armament',
          explain: 'armchair 与 armed 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armchair',
          'armed'
        ]
      }
    });

  D('armchair', {
      etymology: {
        origin: '英语派生：与 arm（手臂；扶手）同族。教学义是「扶手椅；空谈的」。',
        prefix: null,
        root: {
          text: 'arm',
          gloss: '手臂；扶手'
        },
        suffix: null,
        history: [
          {
            label: 'arm',
            text: '手臂；扶手'
          },
          {
            label: 'armchair',
            text: '现代英语：扶手椅；空谈的。'
          }
        ],
        formationLogic: '先认 arm，再记 armchair 多出来的部分。',
        mnemonic: '先记中文「扶手椅」，再把英文 armchair 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an armchair to make the abstract point concrete.',
          chinese: '这节课用一个「扶手椅」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'armchair.s1',
          en: 'The lecture used an armchair to make the abstract point concrete.',
          zh: '这节课用一个「扶手椅」的例子，把抽象的论点讲具体。',
          structure: 'armchair / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「扶手椅」，对应英文释义：A comfortable chair with sides to rest your arms on; theoretical rather than practical.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the armchair of about the topic.',
          right: 'This armchair belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 armchair。',
          rule: '名词 armchair（扶手椅）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'armchair.q1',
          senseId: 'armchair.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「扶手椅」.',
          options: [
            'armchair',
            'armed',
            'armed forces'
          ],
          answer: 'armchair',
          explain: 'armchair 对应「扶手椅」。'
        },
        {
          id: 'armchair.q2',
          senseId: 'armchair.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armchair?',
          options: [
            '扶手椅',
            '武装的',
            '武装力量'
          ],
          answer: '扶手椅',
          explain: '按本词条，armchair 是「扶手椅」。'
        },
        {
          id: 'armchair.q3',
          senseId: 'armchair.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「扶手椅」.',
          options: [
            'armchair',
            'armed',
            'armed forces'
          ],
          answer: 'armchair',
          explain: '空缺处用 armchair，不要换成相邻词 armed。'
        },
        {
          id: 'armchair.q4',
          senseId: 'armchair.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armchair with a neighbour in this list. Which one means 「扶手椅」?',
          options: [
            'armchair',
            'armed',
            'armed forces'
          ],
          answer: 'armchair',
          explain: 'armed 与 armed forces 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armed',
          'armed forces'
        ]
      }
    });

  D('armed', {
      etymology: {
        origin: '英语派生：arm + -ed。形容词后缀，表示已经如此。整词义为「武装的；带枪的」。',
        prefix: null,
        root: {
          text: 'arm',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'arm',
            text: '基础词，先掌握「arm」。'
          },
          {
            label: 'armed',
            text: '英语派生形式，教学义是「武装的；带枪的」。'
          }
        ],
        formationLogic: '在 arm 上加 -ed，得到 armed。',
        mnemonic: '先记中文「武装的」，再把英文 armed 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A armed result needs a second look before anyone acts on it.',
          chinese: '一个「武装的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'armed.s1',
          en: 'A armed result needs a second look before anyone acts on it.',
          zh: '一个「武装的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'armed / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「武装的」，对应英文释义：Carrying weapons, or involving the use of weapons.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very armedly surprising to us.',
          right: 'The news was armed.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + armed。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a armed + 名词。'
        }
      ],
      quiz: [
        {
          id: 'armed.q1',
          senseId: 'armed.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「武装的」.',
          options: [
            'armed',
            'armed forces',
            'armor'
          ],
          answer: 'armed',
          explain: 'armed 对应「武装的」。'
        },
        {
          id: 'armed.q2',
          senseId: 'armed.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armed?',
          options: [
            '武装的',
            '武装力量',
            '盔甲'
          ],
          answer: '武装的',
          explain: '按本词条，armed 是「武装的」。'
        },
        {
          id: 'armed.q3',
          senseId: 'armed.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'armed',
            'armed forces',
            'armor'
          ],
          answer: 'armed',
          explain: '空缺处用 armed，不要换成相邻词 armed forces。'
        },
        {
          id: 'armed.q4',
          senseId: 'armed.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armed with a neighbour in this list. Which one means 「武装的」?',
          options: [
            'armed',
            'armed forces',
            'armor'
          ],
          answer: 'armed',
          explain: 'armed forces 与 armor 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armed forces',
          'armor'
        ]
      }
    });

  D('armed forces', {
      etymology: {
        origin: '英语派生：与 armed（武装的）同族。教学义是「武装力量；军队」。',
        prefix: null,
        root: {
          text: 'armed',
          gloss: '武装的'
        },
        suffix: null,
        history: [
          {
            label: 'armed',
            text: '武装的'
          },
          {
            label: 'armed forces',
            text: '现代英语：武装力量；军队。'
          }
        ],
        formationLogic: '先认 armed，再记 armed forces 多出来的部分。',
        mnemonic: '先记中文「武装力量」，再把英文 armed forces 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The armed forces train for floods as well as for combat.',
          chinese: '武装力量既为作战训练，也为洪水训练。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'armed forces.s1',
          en: 'The armed forces train for floods as well as for combat.',
          zh: '武装力量既为作战训练，也为洪水训练。',
          structure: 'armed forces / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「武装力量」，对应英文释义：The military forces of a country.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the armed forces of about the topic.',
          right: 'This armed forces belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 armed forces。',
          rule: '名词 armed forces（武装力量）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'armed forces.q1',
          senseId: 'armed forces.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「武装力量」.',
          options: [
            'armed forces',
            'armor',
            'armored'
          ],
          answer: 'armed forces',
          explain: 'armed forces 对应「武装力量」。'
        },
        {
          id: 'armed forces.q2',
          senseId: 'armed forces.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armed forces?',
          options: [
            '武装力量',
            '盔甲',
            '装甲的'
          ],
          answer: '武装力量',
          explain: '按本词条，armed forces 是「武装力量」。'
        },
        {
          id: 'armed forces.q3',
          senseId: 'armed forces.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「武装力量」.',
          options: [
            'armed forces',
            'armor',
            'armored'
          ],
          answer: 'armed forces',
          explain: '空缺处用 armed forces，不要换成相邻词 armor。'
        },
        {
          id: 'armed forces.q4',
          senseId: 'armed forces.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armed forces with a neighbour in this list. Which one means 「武装力量」?',
          options: [
            'armed forces',
            'armor',
            'armored'
          ],
          answer: 'armed forces',
          explain: 'armor 与 armored 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armor',
          'armored'
        ]
      }
    });

  D('armor', {
      etymology: {
        origin: '英语派生：arm + -or。表示做该事的人。整词义为「盔甲；装甲」。',
        prefix: null,
        root: {
          text: 'arm',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-or',
          gloss: '表示做该事的人'
        },
        history: [
          {
            label: 'arm',
            text: '基础词，先掌握「arm」。'
          },
          {
            label: 'armor',
            text: '英语派生形式，教学义是「盔甲；装甲」。'
          }
        ],
        formationLogic: '在 arm 上加 -or，得到 armor。',
        mnemonic: '先记中文「盔甲」，再把英文 armor 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an armor to make the abstract point concrete.',
          chinese: '这节课用一个「盔甲」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'armor.s1',
          en: 'The lecture used an armor to make the abstract point concrete.',
          zh: '这节课用一个「盔甲」的例子，把抽象的论点讲具体。',
          structure: 'armor / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「盔甲」，对应英文释义：Metal covering worn by soldiers or fixed to vehicles.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the armor of about the topic.',
          right: 'This armor belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 armor。',
          rule: '名词 armor（盔甲）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'armor.q1',
          senseId: 'armor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「盔甲」.',
          options: [
            'armor',
            'armored',
            'arms'
          ],
          answer: 'armor',
          explain: 'armor 对应「盔甲」。'
        },
        {
          id: 'armor.q2',
          senseId: 'armor.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armor?',
          options: [
            '盔甲',
            '装甲的',
            '武器'
          ],
          answer: '盔甲',
          explain: '按本词条，armor 是「盔甲」。'
        },
        {
          id: 'armor.q3',
          senseId: 'armor.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「盔甲」.',
          options: [
            'armor',
            'armored',
            'arms'
          ],
          answer: 'armor',
          explain: '空缺处用 armor，不要换成相邻词 armored。'
        },
        {
          id: 'armor.q4',
          senseId: 'armor.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armor with a neighbour in this list. Which one means 「盔甲」?',
          options: [
            'armor',
            'armored',
            'arms'
          ],
          answer: 'armor',
          explain: 'armored 与 arms 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'armored',
          'arms'
        ]
      }
    });

  D('armored', {
      etymology: {
        origin: '英语派生：armor + -ed。形容词后缀，表示已经如此。整词义为「装甲的；武装的」。',
        prefix: null,
        root: {
          text: 'armor',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ed',
          gloss: '形容词后缀，表示已经如此'
        },
        history: [
          {
            label: 'armor',
            text: '基础词，先掌握「盔甲」。'
          },
          {
            label: 'armored',
            text: '英语派生形式，教学义是「装甲的；武装的」。'
          }
        ],
        formationLogic: '在 armor 上加 -ed，得到 armored。',
        mnemonic: '先记中文「装甲的」，再把英文 armored 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A armored result needs a second look before anyone acts on it.',
          chinese: '一个「装甲的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'armored.s1',
          en: 'A armored result needs a second look before anyone acts on it.',
          zh: '一个「装甲的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'armored / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「装甲的」，对应英文释义：Protected by metal plates, or carried in a vehicle protected in this way.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very armoredly surprising to us.',
          right: 'The news was armored.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + armored。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a armored + 名词。'
        }
      ],
      quiz: [
        {
          id: 'armored.q1',
          senseId: 'armored.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「装甲的」.',
          options: [
            'armored',
            'arms',
            'army'
          ],
          answer: 'armored',
          explain: 'armored 对应「装甲的」。'
        },
        {
          id: 'armored.q2',
          senseId: 'armored.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits armored?',
          options: [
            '装甲的',
            '武器',
            '无关说法'
          ],
          answer: '装甲的',
          explain: '按本词条，armored 是「装甲的」。'
        },
        {
          id: 'armored.q3',
          senseId: 'armored.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'armored',
            'arms',
            'army'
          ],
          answer: 'armored',
          explain: '空缺处用 armored，不要换成相邻词 arms。'
        },
        {
          id: 'armored.q4',
          senseId: 'armored.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse armored with a neighbour in this list. Which one means 「装甲的」?',
          options: [
            'armored',
            'arms',
            'army'
          ],
          answer: 'armored',
          explain: 'arms 与 army 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arms',
          'army'
        ]
      }
    });

  D('arms', {
      etymology: {
        origin: '英语派生：arm + -s。复数或动词第三人称。整词义为「武器；军火」。',
        prefix: null,
        root: {
          text: 'arm',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-s',
          gloss: '复数或动词第三人称'
        },
        history: [
          {
            label: 'arm',
            text: '基础词，先掌握「arm」。'
          },
          {
            label: 'arms',
            text: '英语派生形式，教学义是「武器；军火」。'
          }
        ],
        formationLogic: '在 arm 上加 -s，得到 arms。',
        mnemonic: '先记中文「武器」，再把英文 arms 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The treaty limits arms but does not end the dispute.',
          chinese: '条约限制武器，但并没有结束争端。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arms.s1',
          en: 'The treaty limits arms but does not end the dispute.',
          zh: '条约限制武器，但并没有结束争端。',
          structure: 'arms / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「武器」，对应英文释义：Weapons, especially those used by a military force.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arms of about the topic.',
          right: 'This arms belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arms。',
          rule: '名词 arms（武器）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arms.q1',
          senseId: 'arms.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「武器」.',
          options: [
            'arms',
            'army',
            'aroma'
          ],
          answer: 'arms',
          explain: 'arms 对应「武器」。'
        },
        {
          id: 'arms.q2',
          senseId: 'arms.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arms?',
          options: [
            '武器',
            '其他义项',
            '芳香'
          ],
          answer: '武器',
          explain: '按本词条，arms 是「武器」。'
        },
        {
          id: 'arms.q3',
          senseId: 'arms.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「武器」.',
          options: [
            'arms',
            'army',
            'aroma'
          ],
          answer: 'arms',
          explain: '空缺处用 arms，不要换成相邻词 army。'
        },
        {
          id: 'arms.q4',
          senseId: 'arms.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arms with a neighbour in this list. Which one means 「武器」?',
          options: [
            'arms',
            'army',
            'aroma'
          ],
          answer: 'arms',
          explain: 'army 与 aroma 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'army',
          'aroma'
        ]
      }
    });

  D('army', {
      etymology: {
        origin: 'army 按现成英语词整词记，意思是「军队；陆军；大批」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'army',
            text: '现代英语：军队；陆军；大批。'
          }
        ],
        formationLogic: '不硬拆。看到 army 就想到「军队」。',
        mnemonic: '先记中文「军队」，再把英文 army 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an army to make the abstract point concrete.',
          chinese: '这节课用一个「军队」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'army.s1',
          en: 'The lecture used an army to make the abstract point concrete.',
          zh: '这节课用一个「军队」的例子，把抽象的论点讲具体。',
          structure: 'army / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「军队」，对应英文释义：A country\'s military land force; a large group.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the army of about the topic.',
          right: 'This army belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 army。',
          rule: '名词 army（军队）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'army.q1',
          senseId: 'army.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「军队」.',
          options: [
            'army',
            'aroma',
            'aromatic'
          ],
          answer: 'army',
          explain: 'army 对应「军队」。'
        },
        {
          id: 'army.q2',
          senseId: 'army.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits army?',
          options: [
            '军队',
            '芳香',
            '芳香的'
          ],
          answer: '军队',
          explain: '按本词条，army 是「军队」。'
        },
        {
          id: 'army.q3',
          senseId: 'army.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「军队」.',
          options: [
            'army',
            'aroma',
            'aromatic'
          ],
          answer: 'army',
          explain: '空缺处用 army，不要换成相邻词 aroma。'
        },
        {
          id: 'army.q4',
          senseId: 'army.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse army with a neighbour in this list. Which one means 「军队」?',
          options: [
            'army',
            'aroma',
            'aromatic'
          ],
          answer: 'army',
          explain: 'aroma 与 aromatic 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aroma',
          'aromatic'
        ]
      }
    });

  D('aroma', {
      etymology: {
        origin: 'aroma 按现成英语词整词记，意思是「芳香；香味」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'aroma',
            text: '现代英语：芳香；香味。'
          }
        ],
        formationLogic: '不硬拆。看到 aroma 就想到「芳香」。',
        mnemonic: '先记中文「芳香」，再把英文 aroma 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an aroma to make the abstract point concrete.',
          chinese: '这节课用一个「芳香」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'aroma.s1',
          en: 'The lecture used an aroma to make the abstract point concrete.',
          zh: '这节课用一个「芳香」的例子，把抽象的论点讲具体。',
          structure: 'aroma / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「芳香」，对应英文释义：A strong, usually pleasant smell.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the aroma of about the topic.',
          right: 'This aroma belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 aroma。',
          rule: '名词 aroma（芳香）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'aroma.q1',
          senseId: 'aroma.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「芳香」.',
          options: [
            'aroma',
            'aromatic',
            'arose'
          ],
          answer: 'aroma',
          explain: 'aroma 对应「芳香」。'
        },
        {
          id: 'aroma.q2',
          senseId: 'aroma.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aroma?',
          options: [
            '芳香',
            '芳香的',
            '出现'
          ],
          answer: '芳香',
          explain: '按本词条，aroma 是「芳香」。'
        },
        {
          id: 'aroma.q3',
          senseId: 'aroma.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「芳香」.',
          options: [
            'aroma',
            'aromatic',
            'arose'
          ],
          answer: 'aroma',
          explain: '空缺处用 aroma，不要换成相邻词 aromatic。'
        },
        {
          id: 'aroma.q4',
          senseId: 'aroma.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aroma with a neighbour in this list. Which one means 「芳香」?',
          options: [
            'aroma',
            'aromatic',
            'arose'
          ],
          answer: 'aroma',
          explain: 'aromatic 与 arose 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'aromatic',
          'arose'
        ]
      }
    });

  D('aromatic', {
      etymology: {
        origin: 'aromatic 按现成英语词整词记，意思是「芳香的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'aromatic',
            text: '现代英语：芳香的。'
          }
        ],
        formationLogic: '不硬拆。看到 aromatic 就想到「芳香的」。',
        mnemonic: '先记中文「芳香的」，再把英文 aromatic 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A aromatic result needs a second look before anyone acts on it.',
          chinese: '一个「芳香的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'aromatic.s1',
          en: 'A aromatic result needs a second look before anyone acts on it.',
          zh: '一个「芳香的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'aromatic / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「芳香的」，对应英文释义：Having a strong, pleasant smell.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very aromaticly surprising to us.',
          right: 'The news was aromatic.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + aromatic。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a aromatic + 名词。'
        }
      ],
      quiz: [
        {
          id: 'aromatic.q1',
          senseId: 'aromatic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「芳香的」.',
          options: [
            'aromatic',
            'arose',
            'around'
          ],
          answer: 'aromatic',
          explain: 'aromatic 对应「芳香的」。'
        },
        {
          id: 'aromatic.q2',
          senseId: 'aromatic.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits aromatic?',
          options: [
            '芳香的',
            '出现',
            '无关说法'
          ],
          answer: '芳香的',
          explain: '按本词条，aromatic 是「芳香的」。'
        },
        {
          id: 'aromatic.q3',
          senseId: 'aromatic.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'aromatic',
            'arose',
            'around'
          ],
          answer: 'aromatic',
          explain: '空缺处用 aromatic，不要换成相邻词 arose。'
        },
        {
          id: 'aromatic.q4',
          senseId: 'aromatic.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse aromatic with a neighbour in this list. Which one means 「芳香的」?',
          options: [
            'aromatic',
            'arose',
            'around'
          ],
          answer: 'aromatic',
          explain: 'arose 与 around 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arose',
          'around'
        ]
      }
    });

  D('arose', {
      etymology: {
        origin: 'arose 按现成英语词整词记，意思是「出现；发生（arise 的过去式）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arose',
            text: '现代英语：出现；发生（arise 的过去式）。'
          }
        ],
        formationLogic: '不硬拆。看到 arose 就想到「出现」。',
        mnemonic: '先记中文「出现」，再把英文 arose 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A sharp disagreement arose once the two reports were compared.',
          chinese: '两份报告一对，激烈的分歧就出现了。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arose.s1',
          en: 'A sharp disagreement arose once the two reports were compared.',
          zh: '两份报告一对，激烈的分歧就出现了。',
          structure: 'arose / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「出现」，对应英文释义：Past tense of arise: to happen or come into being.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arose about the result without a reason.',
          right: 'They arose the result and give a reason.',
          reason: 'arose 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arose + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arose.q1',
          senseId: 'arose.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「出现」.',
          options: [
            'arose',
            'around',
            'arousal'
          ],
          answer: 'arose',
          explain: 'arose 对应「出现」。'
        },
        {
          id: 'arose.q2',
          senseId: 'arose.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arose?',
          options: [
            '出现',
            '其他义项',
            '唤起'
          ],
          answer: '出现',
          explain: '按本词条，arose 是「出现」。'
        },
        {
          id: 'arose.q3',
          senseId: 'arose.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「出现」.',
          options: [
            'arose',
            'around',
            'arousal'
          ],
          answer: 'arose',
          explain: '空缺处用 arose，不要换成相邻词 around。'
        },
        {
          id: 'arose.q4',
          senseId: 'arose.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arose with a neighbour in this list. Which one means 「出现」?',
          options: [
            'arose',
            'around',
            'arousal'
          ],
          answer: 'arose',
          explain: 'around 与 arousal 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'around',
          'arousal'
        ]
      }
    });

  D('around', {
      etymology: {
        origin: 'around 按现成英语词整词记，意思是「围绕；大约；到处」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'around',
            text: '现代英语：围绕；大约；到处。'
          }
        ],
        formationLogic: '不硬拆。看到 around 就想到「围绕」。',
        mnemonic: '先记中文「围绕」，再把英文 around 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Learners meet around in almost every paragraph, so the grammar note is worth rereading.',
          chinese: '学习者几乎每段都会遇到 around（围绕），语法说明值得再读一遍。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'around.s1',
          en: 'Learners meet around in almost every paragraph, so the grammar note is worth rereading.',
          zh: '学习者几乎每段都会遇到 around（围绕），语法说明值得再读一遍。',
          structure: 'around / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「围绕」，对应英文释义：Surrounding; near; approximately; here and there.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the around of about the topic.',
          right: 'This around belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 around。',
          rule: '名词 around（围绕）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'around.q1',
          senseId: 'around.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「围绕」.',
          options: [
            'around',
            'arousal',
            'arouse'
          ],
          answer: 'around',
          explain: 'around 对应「围绕」。'
        },
        {
          id: 'around.q2',
          senseId: 'around.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits around?',
          options: [
            '围绕',
            '唤起',
            '其他义项'
          ],
          answer: '围绕',
          explain: '按本词条，around 是「围绕」。'
        },
        {
          id: 'around.q3',
          senseId: 'around.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「围绕」.',
          options: [
            'around',
            'arousal',
            'arouse'
          ],
          answer: 'around',
          explain: '空缺处用 around，不要换成相邻词 arousal。'
        },
        {
          id: 'around.q4',
          senseId: 'around.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse around with a neighbour in this list. Which one means 「围绕」?',
          options: [
            'around',
            'arousal',
            'arouse'
          ],
          answer: 'around',
          explain: 'arousal 与 arouse 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arousal',
          'arouse'
        ]
      }
    });

  D('arousal', {
      etymology: {
        origin: '英语派生：arouse + -al。形容词后缀。整词义为「唤起；激发」。',
        prefix: null,
        root: {
          text: 'arouse',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'arouse',
            text: '基础词，先掌握「唤起」。'
          },
          {
            label: 'arousal',
            text: '英语派生形式，教学义是「唤起；激发」。'
          }
        ],
        formationLogic: '在 arouse 上加 -al，得到 arousal。',
        mnemonic: '先记中文「唤起」，再把英文 arousal 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arousal to make the abstract point concrete.',
          chinese: '这节课用一个「唤起」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arousal.s1',
          en: 'The lecture used an arousal to make the abstract point concrete.',
          zh: '这节课用一个「唤起」的例子，把抽象的论点讲具体。',
          structure: 'arousal / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「唤起」，对应英文释义：The act of causing a feeling, reaction, or state of alertness to begin.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arousal of about the topic.',
          right: 'This arousal belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arousal。',
          rule: '名词 arousal（唤起）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arousal.q1',
          senseId: 'arousal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「唤起」.',
          options: [
            'arousal',
            'arouse',
            'arrange'
          ],
          answer: 'arousal',
          explain: 'arousal 对应「唤起」。'
        },
        {
          id: 'arousal.q2',
          senseId: 'arousal.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arousal?',
          options: [
            '唤起',
            '其他义项',
            '无关说法'
          ],
          answer: '唤起',
          explain: '按本词条，arousal 是「唤起」。'
        },
        {
          id: 'arousal.q3',
          senseId: 'arousal.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「唤起」.',
          options: [
            'arousal',
            'arouse',
            'arrange'
          ],
          answer: 'arousal',
          explain: '空缺处用 arousal，不要换成相邻词 arouse。'
        },
        {
          id: 'arousal.q4',
          senseId: 'arousal.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arousal with a neighbour in this list. Which one means 「唤起」?',
          options: [
            'arousal',
            'arouse',
            'arrange'
          ],
          answer: 'arousal',
          explain: 'arouse 与 arrange 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arouse',
          'arrange'
        ]
      }
    });

  D('arouse', {
      etymology: {
        origin: 'arouse 按现成英语词整词记，意思是「唤起；激发」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arouse',
            text: '现代英语：唤起；激发。'
          }
        ],
        formationLogic: '不硬拆。看到 arouse 就想到「唤起」。',
        mnemonic: '先记中文「唤起」，再把英文 arouse 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will arouse the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（唤起）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arouse.s1',
          en: 'The team will arouse the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（唤起）。',
          structure: 'arouse / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「唤起」，对应英文释义：To cause a feeling or reaction.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arouse about the result without a reason.',
          right: 'They arouse the result and give a reason.',
          reason: 'arouse 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arouse + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arouse.q1',
          senseId: 'arouse.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「唤起」.',
          options: [
            'arouse',
            'arrange',
            'arrangement'
          ],
          answer: 'arouse',
          explain: 'arouse 对应「唤起」。'
        },
        {
          id: 'arouse.q2',
          senseId: 'arouse.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arouse?',
          options: [
            '唤起',
            '其他义项',
            '无关说法'
          ],
          answer: '唤起',
          explain: '按本词条，arouse 是「唤起」。'
        },
        {
          id: 'arouse.q3',
          senseId: 'arouse.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「唤起」.',
          options: [
            'arouse',
            'arrange',
            'arrangement'
          ],
          answer: 'arouse',
          explain: '空缺处用 arouse，不要换成相邻词 arrange。'
        },
        {
          id: 'arouse.q4',
          senseId: 'arouse.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arouse with a neighbour in this list. Which one means 「唤起」?',
          options: [
            'arouse',
            'arrange',
            'arrangement'
          ],
          answer: 'arouse',
          explain: 'arrange 与 arrangement 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrange',
          'arrangement'
        ]
      }
    });

  D('arrange', {
      etymology: {
        origin: 'arrange 按现成英语词整词记，意思是「安排；整理；商定」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrange',
            text: '现代英语：安排；整理；商定。'
          }
        ],
        formationLogic: '不硬拆。看到 arrange 就想到「安排」。',
        mnemonic: '先记中文「安排」，再把英文 arrange 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will arrange the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（安排）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arrange.s1',
          en: 'The team will arrange the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（安排）。',
          structure: 'arrange / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「安排」，对应英文释义：To plan or organize; to put things in order.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arrange about the result without a reason.',
          right: 'They arrange the result and give a reason.',
          reason: 'arrange 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arrange + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arrange.q1',
          senseId: 'arrange.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「安排」.',
          options: [
            'arrange',
            'arrangement',
            'arrangements'
          ],
          answer: 'arrange',
          explain: 'arrange 对应「安排」。'
        },
        {
          id: 'arrange.q2',
          senseId: 'arrange.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrange?',
          options: [
            '安排',
            '其他义项',
            '筹备'
          ],
          answer: '安排',
          explain: '按本词条，arrange 是「安排」。'
        },
        {
          id: 'arrange.q3',
          senseId: 'arrange.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「安排」.',
          options: [
            'arrange',
            'arrangement',
            'arrangements'
          ],
          answer: 'arrange',
          explain: '空缺处用 arrange，不要换成相邻词 arrangement。'
        },
        {
          id: 'arrange.q4',
          senseId: 'arrange.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrange with a neighbour in this list. Which one means 「安排」?',
          options: [
            'arrange',
            'arrangement',
            'arrangements'
          ],
          answer: 'arrange',
          explain: 'arrangement 与 arrangements 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrangement',
          'arrangements'
        ]
      }
    });

  D('arrangement', {
      etymology: {
        origin: '英语派生：arrange + -ment。名词后缀，表示行为或结果。整词义为「安排；排列；整理」。',
        prefix: null,
        root: {
          text: 'arrange',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ment',
          gloss: '名词后缀，表示行为或结果'
        },
        history: [
          {
            label: 'arrange',
            text: '基础词，先掌握「arrange」。'
          },
          {
            label: 'arrangement',
            text: '英语派生形式，教学义是「安排；排列；整理」。'
          }
        ],
        formationLogic: '在 arrange 上加 -ment，得到 arrangement。',
        mnemonic: '先记中文「安排」，再把英文 arrangement 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arrangement to make the abstract point concrete.',
          chinese: '这节课用一个「安排」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arrangement.s1',
          en: 'The lecture used an arrangement to make the abstract point concrete.',
          zh: '这节课用一个「安排」的例子，把抽象的论点讲具体。',
          structure: 'arrangement / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「安排」，对应英文释义：A plan for how something will happen, or the way things are placed.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arrangement of about the topic.',
          right: 'This arrangement belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arrangement。',
          rule: '名词 arrangement（安排）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arrangement.q1',
          senseId: 'arrangement.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「安排」.',
          options: [
            'arrangement',
            'arrangements',
            'array'
          ],
          answer: 'arrangement',
          explain: 'arrangement 对应「安排」。'
        },
        {
          id: 'arrangement.q2',
          senseId: 'arrangement.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrangement?',
          options: [
            '安排',
            '筹备',
            '无关说法'
          ],
          answer: '安排',
          explain: '按本词条，arrangement 是「安排」。'
        },
        {
          id: 'arrangement.q3',
          senseId: 'arrangement.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「安排」.',
          options: [
            'arrangement',
            'arrangements',
            'array'
          ],
          answer: 'arrangement',
          explain: '空缺处用 arrangement，不要换成相邻词 arrangements。'
        },
        {
          id: 'arrangement.q4',
          senseId: 'arrangement.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrangement with a neighbour in this list. Which one means 「安排」?',
          options: [
            'arrangement',
            'arrangements',
            'array'
          ],
          answer: 'arrangement',
          explain: 'arrangements 与 array 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrangements',
          'array'
        ]
      }
    });

  D('arrangements', {
      etymology: {
        origin: '英语派生：arrangement + -s。复数或动词第三人称。整词义为「筹备；安排（复数形式）」。',
        prefix: null,
        root: {
          text: 'arrangement',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-s',
          gloss: '复数或动词第三人称'
        },
        history: [
          {
            label: 'arrangement',
            text: '基础词，先掌握「arrangement」。'
          },
          {
            label: 'arrangements',
            text: '英语派生形式，教学义是「筹备；安排（复数形式）」。'
          }
        ],
        formationLogic: '在 arrangement 上加 -s，得到 arrangements。',
        mnemonic: '先记中文「筹备」，再把英文 arrangements 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'Travel arrangements should be confirmed in writing.',
          chinese: '行程安排应当用书面形式确认。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arrangements.s1',
          en: 'Travel arrangements should be confirmed in writing.',
          zh: '行程安排应当用书面形式确认。',
          structure: 'arrangements / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「筹备」，对应英文释义：The plans and preparations made for something to happen.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arrangements of about the topic.',
          right: 'This arrangements belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arrangements。',
          rule: '名词 arrangements（筹备）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arrangements.q1',
          senseId: 'arrangements.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「筹备」.',
          options: [
            'arrangements',
            'array',
            'arrest'
          ],
          answer: 'arrangements',
          explain: 'arrangements 对应「筹备」。'
        },
        {
          id: 'arrangements.q2',
          senseId: 'arrangements.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrangements?',
          options: [
            '筹备',
            '其他义项',
            '逮捕'
          ],
          answer: '筹备',
          explain: '按本词条，arrangements 是「筹备」。'
        },
        {
          id: 'arrangements.q3',
          senseId: 'arrangements.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「筹备」.',
          options: [
            'arrangements',
            'array',
            'arrest'
          ],
          answer: 'arrangements',
          explain: '空缺处用 arrangements，不要换成相邻词 array。'
        },
        {
          id: 'arrangements.q4',
          senseId: 'arrangements.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrangements with a neighbour in this list. Which one means 「筹备」?',
          options: [
            'arrangements',
            'array',
            'arrest'
          ],
          answer: 'arrangements',
          explain: 'array 与 arrest 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'array',
          'arrest'
        ]
      }
    });

  D('array', {
      etymology: {
        origin: 'array 按现成英语词整词记，意思是「排列；大批；数组」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'array',
            text: '现代英语：排列；大批；数组。'
          }
        ],
        formationLogic: '不硬拆。看到 array 就想到「排列」。',
        mnemonic: '先记中文「排列」，再把英文 array 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an array to make the abstract point concrete.',
          chinese: '这节课用一个「排列」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'array.s1',
          en: 'The lecture used an array to make the abstract point concrete.',
          zh: '这节课用一个「排列」的例子，把抽象的论点讲具体。',
          structure: 'array / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「排列」，对应英文释义：A group of things displayed or available; to arrange.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the array of about the topic.',
          right: 'This array belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 array。',
          rule: '名词 array（排列）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'array.q1',
          senseId: 'array.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「排列」.',
          options: [
            'array',
            'arrest',
            'arresting'
          ],
          answer: 'array',
          explain: 'array 对应「排列」。'
        },
        {
          id: 'array.q2',
          senseId: 'array.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits array?',
          options: [
            '排列',
            '逮捕',
            '引人注目的'
          ],
          answer: '排列',
          explain: '按本词条，array 是「排列」。'
        },
        {
          id: 'array.q3',
          senseId: 'array.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「排列」.',
          options: [
            'array',
            'arrest',
            'arresting'
          ],
          answer: 'array',
          explain: '空缺处用 array，不要换成相邻词 arrest。'
        },
        {
          id: 'array.q4',
          senseId: 'array.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse array with a neighbour in this list. Which one means 「排列」?',
          options: [
            'array',
            'arrest',
            'arresting'
          ],
          answer: 'array',
          explain: 'arrest 与 arresting 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrest',
          'arresting'
        ]
      }
    });

  D('arrest', {
      etymology: {
        origin: 'arrest 按现成英语词整词记，意思是「逮捕；阻止」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrest',
            text: '现代英语：逮捕；阻止。'
          }
        ],
        formationLogic: '不硬拆。看到 arrest 就想到「逮捕」。',
        mnemonic: '先记中文「逮捕」，再把英文 arrest 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will arrest the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（逮捕）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arrest.s1',
          en: 'The team will arrest the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（逮捕）。',
          structure: 'arrest / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「逮捕」，对应英文释义：To take someone to the police station because of a crime.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arrest about the result without a reason.',
          right: 'They arrest the result and give a reason.',
          reason: 'arrest 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arrest + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arrest.q1',
          senseId: 'arrest.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「逮捕」.',
          options: [
            'arrest',
            'arresting',
            'arrival'
          ],
          answer: 'arrest',
          explain: 'arrest 对应「逮捕」。'
        },
        {
          id: 'arrest.q2',
          senseId: 'arrest.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrest?',
          options: [
            '逮捕',
            '引人注目的',
            '到达'
          ],
          answer: '逮捕',
          explain: '按本词条，arrest 是「逮捕」。'
        },
        {
          id: 'arrest.q3',
          senseId: 'arrest.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「逮捕」.',
          options: [
            'arrest',
            'arresting',
            'arrival'
          ],
          answer: 'arrest',
          explain: '空缺处用 arrest，不要换成相邻词 arresting。'
        },
        {
          id: 'arrest.q4',
          senseId: 'arrest.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrest with a neighbour in this list. Which one means 「逮捕」?',
          options: [
            'arrest',
            'arresting',
            'arrival'
          ],
          answer: 'arrest',
          explain: 'arresting 与 arrival 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arresting',
          'arrival'
        ]
      }
    });

  D('arresting', {
      etymology: {
        origin: '英语派生：arrest + -ing。形容词或名词后缀。整词义为「引人注目的；醒目的」。',
        prefix: null,
        root: {
          text: 'arrest',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-ing',
          gloss: '形容词或名词后缀'
        },
        history: [
          {
            label: 'arrest',
            text: '基础词，先掌握「逮捕」。'
          },
          {
            label: 'arresting',
            text: '英语派生形式，教学义是「引人注目的；醒目的」。'
          }
        ],
        formationLogic: '在 arrest 上加 -ing，得到 arresting。',
        mnemonic: '先记中文「引人注目的」，再把英文 arresting 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A arresting result needs a second look before anyone acts on it.',
          chinese: '一个「引人注目的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'arresting.s1',
          en: 'A arresting result needs a second look before anyone acts on it.',
          zh: '一个「引人注目的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'arresting / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「引人注目的」，对应英文释义：So unusual, interesting, or attractive that it immediately catches your attention.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very arrestingly surprising to us.',
          right: 'The news was arresting.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + arresting。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a arresting + 名词。'
        }
      ],
      quiz: [
        {
          id: 'arresting.q1',
          senseId: 'arresting.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「引人注目的」.',
          options: [
            'arresting',
            'arrival',
            'arrive'
          ],
          answer: 'arresting',
          explain: 'arresting 对应「引人注目的」。'
        },
        {
          id: 'arresting.q2',
          senseId: 'arresting.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arresting?',
          options: [
            '引人注目的',
            '到达',
            '反方向'
          ],
          answer: '引人注目的',
          explain: '按本词条，arresting 是「引人注目的」。'
        },
        {
          id: 'arresting.q3',
          senseId: 'arresting.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'arresting',
            'arrival',
            'arrive'
          ],
          answer: 'arresting',
          explain: '空缺处用 arresting，不要换成相邻词 arrival。'
        },
        {
          id: 'arresting.q4',
          senseId: 'arresting.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arresting with a neighbour in this list. Which one means 「引人注目的」?',
          options: [
            'arresting',
            'arrival',
            'arrive'
          ],
          answer: 'arresting',
          explain: 'arrival 与 arrive 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrival',
          'arrive'
        ]
      }
    });

  D('arrival', {
      etymology: {
        origin: '英语派生：arrive + -al。形容词后缀。整词义为「到达；到来」。',
        prefix: null,
        root: {
          text: 'arrive',
          gloss: '同批词表里的基础词'
        },
        suffix: {
          text: '-al',
          gloss: '形容词后缀'
        },
        history: [
          {
            label: 'arrive',
            text: '基础词，先掌握「到达」。'
          },
          {
            label: 'arrival',
            text: '英语派生形式，教学义是「到达；到来」。'
          }
        ],
        formationLogic: '在 arrive 上加 -al，得到 arrival。',
        mnemonic: '先记中文「到达」，再把英文 arrival 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arrival to make the abstract point concrete.',
          chinese: '这节课用一个「到达」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arrival.s1',
          en: 'The lecture used an arrival to make the abstract point concrete.',
          zh: '这节课用一个「到达」的例子，把抽象的论点讲具体。',
          structure: 'arrival / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「到达」，对应英文释义：The act of reaching a place or the fact of something new coming.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arrival of about the topic.',
          right: 'This arrival belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arrival。',
          rule: '名词 arrival（到达）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arrival.q1',
          senseId: 'arrival.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「到达」.',
          options: [
            'arrival',
            'arrive',
            'arrive at'
          ],
          answer: 'arrival',
          explain: 'arrival 对应「到达」。'
        },
        {
          id: 'arrival.q2',
          senseId: 'arrival.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrival?',
          options: [
            '到达',
            '反方向',
            '其他义项'
          ],
          answer: '到达',
          explain: '按本词条，arrival 是「到达」。'
        },
        {
          id: 'arrival.q3',
          senseId: 'arrival.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「到达」.',
          options: [
            'arrival',
            'arrive',
            'arrive at'
          ],
          answer: 'arrival',
          explain: '空缺处用 arrival，不要换成相邻词 arrive。'
        },
        {
          id: 'arrival.q4',
          senseId: 'arrival.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrival with a neighbour in this list. Which one means 「到达」?',
          options: [
            'arrival',
            'arrive',
            'arrive at'
          ],
          answer: 'arrival',
          explain: 'arrive 与 arrive at 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrive',
          'arrive at'
        ]
      }
    });

  D('arrive', {
      etymology: {
        origin: 'arrive 按现成英语词整词记，意思是「到达；得出（结论）」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrive',
            text: '现代英语：到达；得出（结论）。'
          }
        ],
        formationLogic: '不硬拆。看到 arrive 就想到「到达」。',
        mnemonic: '先记中文「到达」，再把英文 arrive 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The team will arrive the case again after the new data arrive.',
          chinese: '新数据到达后，小组会再次处理这件事（到达）。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arrive.s1',
          en: 'The team will arrive the case again after the new data arrive.',
          zh: '新数据到达后，小组会再次处理这件事（到达）。',
          structure: 'arrive / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「到达」，对应英文释义：To reach a place; to reach a decision or stage.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arrive about the result without a reason.',
          right: 'They arrive the result and give a reason.',
          reason: 'arrive 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arrive + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arrive.q1',
          senseId: 'arrive.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「到达」.',
          options: [
            'arrive',
            'arrive at',
            'arrogance'
          ],
          answer: 'arrive',
          explain: 'arrive 对应「到达」。'
        },
        {
          id: 'arrive.q2',
          senseId: 'arrive.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrive?',
          options: [
            '到达',
            '其他义项',
            '傲慢'
          ],
          answer: '到达',
          explain: '按本词条，arrive 是「到达」。'
        },
        {
          id: 'arrive.q3',
          senseId: 'arrive.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「到达」.',
          options: [
            'arrive',
            'arrive at',
            'arrogance'
          ],
          answer: 'arrive',
          explain: '空缺处用 arrive，不要换成相邻词 arrive at。'
        },
        {
          id: 'arrive.q4',
          senseId: 'arrive.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrive with a neighbour in this list. Which one means 「到达」?',
          options: [
            'arrive',
            'arrive at',
            'arrogance'
          ],
          answer: 'arrive',
          explain: 'arrive at 与 arrogance 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrive at',
          'arrogance'
        ]
      }
    });

  D('arrive at', {
      etymology: {
        origin: 'arrive at 按现成英语词整词记，意思是「到达；达成」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrive at',
            text: '现代英语：到达；达成。'
          }
        ],
        formationLogic: '不硬拆。看到 arrive at 就想到「到达」。',
        mnemonic: '先记中文「到达」，再把英文 arrive at 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The group did not arrive at a decision until midnight.',
          chinese: '小组直到午夜才达成决定。'
        }
      ],
      contexts: [
        {
          domain: '写作 · 动词',
          senseId: 'arrive at.s1',
          en: 'The group did not arrive at a decision until midnight.',
          zh: '小组直到午夜才达成决定。',
          structure: 'arrive at / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '动词携带宾语或补足成分，时态与主语一致。',
          rationale: '本句用的是「到达」，对应英文释义：To reach a place, or to come to a decision or solution.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'They arrive at about the result without a reason.',
          right: 'They arrive at the result and give a reason.',
          reason: 'arrive at 作动词时，先看它要不要直接宾语，不要随手加 about。',
          rule: '先写出「谁 + arrive at + 对象」，再补原因从句。',
          special: '过去式和过去分词若与原形不同，不能用原形代替。'
        }
      ],
      quiz: [
        {
          id: 'arrive at.q1',
          senseId: 'arrive at.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「到达」.',
          options: [
            'arrive at',
            'arrogance',
            'arrogant'
          ],
          answer: 'arrive at',
          explain: 'arrive at 对应「到达」。'
        },
        {
          id: 'arrive at.q2',
          senseId: 'arrive at.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrive at?',
          options: [
            '到达',
            '傲慢',
            '傲慢的'
          ],
          answer: '到达',
          explain: '按本词条，arrive at 是「到达」。'
        },
        {
          id: 'arrive at.q3',
          senseId: 'arrive at.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「到达」.',
          options: [
            'arrive at',
            'arrogance',
            'arrogant'
          ],
          answer: 'arrive at',
          explain: '空缺处用 arrive at，不要换成相邻词 arrogance。'
        },
        {
          id: 'arrive at.q4',
          senseId: 'arrive at.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrive at with a neighbour in this list. Which one means 「到达」?',
          options: [
            'arrive at',
            'arrogance',
            'arrogant'
          ],
          answer: 'arrive at',
          explain: 'arrogance 与 arrogant 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrogance',
          'arrogant'
        ]
      }
    });

  D('arrogance', {
      etymology: {
        origin: 'arrogance 按现成英语词整词记，意思是「傲慢；自大」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrogance',
            text: '现代英语：傲慢；自大。'
          }
        ],
        formationLogic: '不硬拆。看到 arrogance 就想到「傲慢」。',
        mnemonic: '先记中文「傲慢」，再把英文 arrogance 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arrogance to make the abstract point concrete.',
          chinese: '这节课用一个「傲慢」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arrogance.s1',
          en: 'The lecture used an arrogance to make the abstract point concrete.',
          zh: '这节课用一个「傲慢」的例子，把抽象的论点讲具体。',
          structure: 'arrogance / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「傲慢」，对应英文释义：The quality of behaving in a rude, entitled, or overly confident way.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arrogance of about the topic.',
          right: 'This arrogance belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arrogance。',
          rule: '名词 arrogance（傲慢）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arrogance.q1',
          senseId: 'arrogance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「傲慢」.',
          options: [
            'arrogance',
            'arrogant',
            'arrow'
          ],
          answer: 'arrogance',
          explain: 'arrogance 对应「傲慢」。'
        },
        {
          id: 'arrogance.q2',
          senseId: 'arrogance.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrogance?',
          options: [
            '傲慢',
            '傲慢的',
            '无关说法'
          ],
          answer: '傲慢',
          explain: '按本词条，arrogance 是「傲慢」。'
        },
        {
          id: 'arrogance.q3',
          senseId: 'arrogance.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「傲慢」.',
          options: [
            'arrogance',
            'arrogant',
            'arrow'
          ],
          answer: 'arrogance',
          explain: '空缺处用 arrogance，不要换成相邻词 arrogant。'
        },
        {
          id: 'arrogance.q4',
          senseId: 'arrogance.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrogance with a neighbour in this list. Which one means 「傲慢」?',
          options: [
            'arrogance',
            'arrogant',
            'arrow'
          ],
          answer: 'arrogance',
          explain: 'arrogant 与 arrow 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrogant',
          'arrow'
        ]
      }
    });

  D('arrogant', {
      etymology: {
        origin: 'arrogant 按现成英语词整词记，意思是「傲慢的；自大的」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrogant',
            text: '现代英语：傲慢的；自大的。'
          }
        ],
        formationLogic: '不硬拆。看到 arrogant 就想到「傲慢的」。',
        mnemonic: '先记中文「傲慢的」，再把英文 arrogant 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'A arrogant result needs a second look before anyone acts on it.',
          chinese: '一个「傲慢的」的结果，在有人据此行动之前需要再看一遍。'
        }
      ],
      contexts: [
        {
          domain: '阅读 · 修饰',
          senseId: 'arrogant.s1',
          en: 'A arrogant result needs a second look before anyone acts on it.',
          zh: '一个「傲慢的」的结果，在有人据此行动之前需要再看一遍。',
          structure: 'arrogant / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「傲慢的」，对应英文释义：Behaving as if you are better than others.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'grammar',
          wrong: 'The news was very arrogantly surprising to us.',
          right: 'The news was arrogant.',
          reason: '形容词直接作表语，不要再叠一个生造的 -ly。',
          rule: 'be + arrogant。若要修饰动词，先确认词典里是否另有副词。',
          special: '修饰名词放在名词前：a arrogant + 名词。'
        }
      ],
      quiz: [
        {
          id: 'arrogant.q1',
          senseId: 'arrogant.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「傲慢的」.',
          options: [
            'arrogant',
            'arrow',
            'analogy'
          ],
          answer: 'arrogant',
          explain: 'arrogant 对应「傲慢的」。'
        },
        {
          id: 'arrogant.q2',
          senseId: 'arrogant.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrogant?',
          options: [
            '傲慢的',
            '其他义项',
            '类比'
          ],
          answer: '傲慢的',
          explain: '按本词条，arrogant 是「傲慢的」。'
        },
        {
          id: 'arrogant.q3',
          senseId: 'arrogant.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'We need a _____ result, not a random guess.',
          options: [
            'arrogant',
            'arrow',
            'analogy'
          ],
          answer: 'arrogant',
          explain: '空缺处用 arrogant，不要换成相邻词 arrow。'
        },
        {
          id: 'arrogant.q4',
          senseId: 'arrogant.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrogant with a neighbour in this list. Which one means 「傲慢的」?',
          options: [
            'arrogant',
            'arrow',
            'analogy'
          ],
          answer: 'arrogant',
          explain: 'arrow 与 analogy 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'arrow',
          'analogy'
        ]
      }
    });

  D('arrow', {
      etymology: {
        origin: 'arrow 按现成英语词整词记，意思是「箭；箭头」。不拆未核实的拉丁或希腊词根。',
        prefix: null,
        root: null,
        suffix: null,
        history: [
          {
            label: '整词',
            text: '词形固定，教学上不另造古典拼写。'
          },
          {
            label: 'arrow',
            text: '现代英语：箭；箭头。'
          }
        ],
        formationLogic: '不硬拆。看到 arrow 就想到「箭」。',
        mnemonic: '先记中文「箭」，再把英文 arrow 放回句子。',
        note: '只写英语内部能看见的派生。古典语源未在本条展开。',
        source: '教学转写，供核对'
      },
      extraExamples: [
        {
          sense: 1,
          english: 'The lecture used an arrow to make the abstract point concrete.',
          chinese: '这节课用一个「箭」的例子，把抽象的论点讲具体。'
        }
      ],
      contexts: [
        {
          domain: '考试 · 词义',
          senseId: 'arrow.s1',
          en: 'The lecture used an arrow to make the abstract point concrete.',
          zh: '这节课用一个「箭」的例子，把抽象的论点讲具体。',
          structure: 'arrow / 出现在本句的核心位置 / 其余成分交代场合。',
          grammar: '按词性放在主语、表语或名词短语里。',
          rationale: '本句用的是「箭」，对应英文释义：A thin straight weapon shot from a bow; a sign shaped like this.',
          sourceType: 'authored'
        }
      ],
      mistakes: [
        {
          errorType: 'collocation',
          wrong: 'This is the arrow of about the topic.',
          right: 'This arrow belongs to the topic we are discussing.',
          reason: 'of about 叠用介词，不能用来连接 arrow。',
          rule: '名词 arrow（箭）前用冠词或限定词，后面用 of 或从句，不要 of about。',
          special: '可数与不可数要按该词条的用法，不能一律加 a。'
        }
      ],
      quiz: [
        {
          id: 'arrow.q1',
          senseId: 'arrow.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Choose the word that means 「箭」.',
          options: [
            'arrow',
            'analogy',
            'analysis'
          ],
          answer: 'arrow',
          explain: 'arrow 对应「箭」。'
        },
        {
          id: 'arrow.q2',
          senseId: 'arrow.s1',
          errorType: 'meaning',
          type: '词义',
          prompt: 'Which gloss fits arrow?',
          options: [
            '箭',
            '类比',
            '分析'
          ],
          answer: '箭',
          explain: '按本词条，arrow 是「箭」。'
        },
        {
          id: 'arrow.q3',
          senseId: 'arrow.s1',
          errorType: 'collocation',
          type: '搭配',
          prompt: 'Fill the blank with the correct form related to 「箭」.',
          options: [
            'arrow',
            'analogy',
            'analysis'
          ],
          answer: 'arrow',
          explain: '空缺处用 arrow，不要换成相邻词 analogy。'
        },
        {
          id: 'arrow.q4',
          senseId: 'arrow.s1',
          errorType: 'confusable',
          type: '易混',
          prompt: 'Do not confuse arrow with a neighbour in this list. Which one means 「箭」?',
          options: [
            'arrow',
            'analogy',
            'analysis'
          ],
          answer: 'arrow',
          explain: 'analogy 与 analysis 是另外的词条。'
        }
      ],
      usage: {
        domains: [
          '考试',
          '阅读'
        ],
        tone: '中性，教学用语',
        commonConfusion: [
          'analogy',
          'analysis'
        ]
      }
    });

})(typeof window !== 'undefined' ? window : globalThis);
