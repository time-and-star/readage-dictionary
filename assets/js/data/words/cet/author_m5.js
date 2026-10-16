/* data/words/cet/author_m5.js · 手敲词条 M（二·引用缺口批）：mannequin ~ meaningless（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（marriage/massive/mastery/mathematical/meaning/meaningful 见条目）。
 * 短语 1 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，-age 自有级留空，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m5.js 必须在 _cet_helper.js 之后加载');

  W('mannequin', 'noun', '/ˈmænɪkɪn/', '', [], '人体模型', 'A model of a body used to display clothes.', [
    ['人体模型', 'A model of a human body used to display clothes.', '展示服装的人体模型。', '可数。', 'A mannequin wore the new dress in the window.', '橱窗里的人体模特穿着新连衣裙。', [], ['model'], 'noun', 'countable', '外貌'],
  ], 'mannequins', [], '荷兰语 manneken（小人）——无库内派生根，故留空；近义 model 模特');

  W('manners', 'noun', '/ˈmænəz/', 'B1', [], '礼貌；举止（复数）', 'Polite behaviour in social situations.', [
    ['礼貌；举止（复数）', 'Polite behaviour in social situations.', '社交中的礼貌行为。', '复数形式：good manners。', 'She has excellent manners.', '她很有礼貌。', ['good manners'], ['etiquette'], 'noun', 'countable', '社交'],
  ], '', ['etiquette'], '←manner B1 + -s（复数），B1 继承（brief 根提示）；家族/近义 etiquette 礼仪');

  W('mantel', 'noun', '/ˈmæntl/', '', [], '壁炉台', 'A shelf above a fireplace.', [
    ['壁炉台', 'A shelf above a fireplace.', '壁炉上方的架子。', '可数。', 'The clock stood on the mantel.', '钟摆在壁炉台上。', [], ['fireplace'], 'noun', 'countable', '家居'],
  ], 'mantels', [], 'mantle（覆盖层）不在库，无库内派生根，故留空；近义 fireplace 壁炉');

  W('manufacturing', 'noun', '/ˌmænjuˈfæktʃərɪŋ/', 'B1', [], '制造业', 'The business of making goods in factories.', [
    ['制造业', 'The business of making goods in factories.', '工厂生产产品的行业。', '不可数。', 'Manufacturing employs thousands here.', '制造业在这里雇用了上千人。', [], ['industry'], 'noun', 'uncountable', '工业'],
  ], '', ['industry'], '←manufacture B1 + -ing（透明后缀），B1 继承（brief 根提示）；家族/近义 industry 工业');

  W('many-sided', 'adjective', '/ˌmeni ˈsaɪdɪd/', 'A1', [], '多方面的', 'Having many different aspects.', [
    ['多方面的', 'Having many different aspects.', '有许多不同侧面的。', '定语或表语。', 'The issue is many-sided and complex.', '这个问题多方面且复杂。', [], ['multilateral'], 'adjective', '定语/表语', '通用'],
  ], '', ['many'], 'many A1 + sided——首成分 many 在库，A1 继承（首成分规则）；近义 multilateral 多边的');

  W('marked', 'adjective', '/mɑːkt/', 'A2', [], '明显的；显著的', 'Very noticeable or clear.', [
    ['明显的；显著的', 'Very noticeable or clear.', '非常明显、显而易见的。', '定语或表语：a marked change。', 'There is a marked improvement.', '有明显的改善。', ['a marked change'], ['distinct'], 'adjective', '定语/表语', '通用'],
  ], '', ['mark'], '←mark A2 + -ed（透明后缀），A2 继承（brief 根提示）；近义 distinct 明显的');

  W('marker', 'noun', '/ˈmɑːkə/', 'A2', [], '标志；记号笔', 'A person or thing that marks.', [
    ['标志；记号笔', 'A person or thing that marks, or a pen for marking.', '标记物；也指标记笔。', '可数。', 'The trail has red markers at each turn.', '小径每个转弯处都有红色标志。', [], ['landmark', 'milestone'], 'noun', 'countable', '通用'],
  ], 'markers', ['landmark', 'milestone'], '←mark A2 + -er（施事/工具后缀），A2 继承（brief 根提示）；家族 landmark 地标、milestone 里程碑');

  W('marketplace', 'noun', '/ˈmɑːkɪtpleɪs/', 'A2', [], '集市；市场', 'A place where goods are sold.', [
    ['集市；市场', 'A place where goods are sold.', '买卖商品的场所。', '可数。', 'Farmers sold goods at the marketplace.', '农民在市场上卖货。', [], ['market'], 'noun', 'countable', '商务'],
  ], 'marketplaces', ['market'], 'market A2 + place——首成分 market 在库，A2 继承（首成分规则）；近义 market 市场');

  W('markup', 'noun', '/ˈmɑːkʌp/', 'A2', [], '加价；标记法', 'The amount added to a cost price.', [
    ['加价；标记法', 'The amount added to a cost price, or the way text is marked.', '加成率；也指标记文本的方式。', '可数。', 'The retailer added a 30 percent markup.', '零售商加价三成。', [], ['margin'], 'noun', 'countable', '商务'],
  ], 'markups', ['mark'], 'mark + up——首成分 mark A2 在库，A2 继承（首成分规则）；近义 margin 毛利、差价');

  W('maroon', 'verb', '/məˈruːn/', '', [], '使搁浅；使孤立', 'To leave someone with no way to leave.', [
    ['使搁浅；使孤立', 'To leave someone in a place with no way to leave.', '把人困在无法离开的地方。', '及物。', 'The storm marooned them on the island.', '风暴把他们困在了岛上。', [], ['strand'], 'verb', '及物', '通用'],
  ], 'maroons~marooned~marooned~marooning', ['strand'], '法语 marron（栗）——无库内派生根，故留空；家族/近义 strand 搁浅、困住（另有栗色义）');

  W('marque', 'noun', '/mɑːk/', '', [], '（汽车）品牌', 'A make or brand of car.', [
    ['（汽车）品牌', 'A make or brand of car.', '汽车的品牌、厂牌。', '可数，正式用语。', 'The French marque plans an electric model.', '这个法国品牌计划推出电动车型。', [], ['label'], 'noun', 'countable', '交通'],
  ], 'marques', [], '法语 marque（品牌）——与 mark 同源但拼写不可见（无 k），无库内可见根，故留空；近义 label 标签');

  W('marquee', 'noun', '/mɑːˈkiː/', '', [], '大帐篷', 'A large tent used for events.', [
    ['大帐篷', 'A large tent used for events.', '活动用的大帐篷。', '可数。', 'Guests gathered under the marquee.', '宾客们聚集在大帐篷下。', [], ['tent'], 'noun', 'countable', '通用'],
  ], 'marquees', [], '法语 marquise——无库内派生根，故留空；近义 tent 帐篷');

  W('marriage', 'noun', '/ˈmærɪdʒ/', '', ['CET4'], '婚姻；结婚', 'The legal union of two people.', [
    ['婚姻；结婚', 'The legal union of two people, or the state of being married.', '婚姻关系；也指结婚状态。', '可数或不可数。', 'Their marriage lasted fifty years.', '他们的婚姻持续了五十年。', ['marriage proposal'], ['union'], 'noun', 'countable', '家庭'],
  ], 'marriages', [], 'marry + -age——先例 passage（B2）与 pass（B1）脱钩，-age 不走词根继承，自身级无把握（CET4 标签不作 CEFR），故留空；近义 union 结合');

  W('martial', 'adjective', '/ˈmɑːʃl/', '', [], '军事的；武术的', 'Related to fighting or soldiers.', [
    ['军事的；武术的', 'Related to fighting or soldiers.', '与作战或军人相关的。', '定语，常组词：martial arts。', 'He studies martial arts every week.', '他每周都练武术。', ['martial arts'], ['military'], 'adjective', '定语', '体育'],
  ], '', [], '拉丁 Martius（战神马尔斯）——无库内派生根，故留空；近义 military 军事的');

  W('martin', 'noun', '/ˈmɑːtɪn/', '', [], '燕（斑燕）', 'A small bird with a forked tail.', [
    ['燕（斑燕）', 'A small bird with a forked tail.', '一种尾羽分叉的小鸟。', '可数。', 'A martin built its nest under the roof.', '一只燕子在屋檐下筑巢。', [], ['swallow'], 'noun', 'countable', '自然'],
  ], 'martins', [], '鸟名借词——无库内派生根，故留空；近义 swallow 燕子');

  W('masses', 'noun', '/ˈmæsɪz/', 'B1', [], '大众；大量（复数）', 'A large number of people.', [
    ['大众；大量（复数）', 'A large number of people, or a large amount.', '大批民众；也指大量。', '复数：the masses。', 'The masses demanded change.', '大众要求变革。', [], ['million', 'multitude'], 'noun', 'countable', '社会'],
  ], '', [], '←mass B1 + -s（复数），B1 继承（brief 根提示）；近义 million 百万（喻大量）、multitude 众多');

  W('massive', 'adjective', '/ˈmæsɪv/', 'B1', ['CET4'], '巨大的；大量的', 'Very large and heavy.', [
    ['巨大的；大量的', 'Very large and heavy, or very great in amount.', '体积大或数量巨大的。', '定语。', 'They made a massive effort to finish.', '他们为完成付出了巨大努力。', [], ['huge'], 'adjective', '定语', '通用'],
  ], '', ['huge'], '←mass B1 + -ive（透明后缀），B1 继承；家族/近义 huge 巨大的');

  W('masterwork', 'noun', '/ˈmɑːstəwɜːk/', 'B1', [], '杰作', 'A work of the highest quality.', [
    ['杰作', 'A work of the highest quality.', '最高水平的作品。', '可数。', 'The novel is his masterwork.', '这部小说是他的杰作。', [], ['masterpiece'], 'noun', 'countable', '艺术'],
  ], 'masterworks', ['masterpiece'], 'master + work——首成分 master B1 在库，B1 继承（首成分规则）；家族/近义 masterpiece 杰作');

  W('mastery', 'noun', '/ˈmɑːstəri/', 'B1', ['CET4'], '精通；掌握', 'Complete control or knowledge.', [
    ['精通；掌握', 'Complete control or knowledge of something.', '对某事的完全掌握。', '不可数：mastery of。', 'She achieved mastery of the language.', '她掌握了这门语言。', ['mastery of'], ['grip'], 'noun', 'uncountable', '教育'],
  ], '', ['master'], '←master B1 + -y（名词后缀，同 loyalty 模式），B1 继承；近义 grip 掌握');

  W('mates', 'noun', '/meɪts/', 'B1', [], '伙伴；同事（复数）', 'Friends or partners, plural of mate.', [
    ['伙伴；同事（复数）', 'Friends or partners, the plural of mate.', '朋友、伙伴，mate 的复数。', '复数。', 'He met his mates at the pub.', '他和伙伴们在酒馆碰了面。', [], ['lad'], 'noun', 'countable', '社交'],
  ], '', [], '←mate B1 + -s（复数），B1 继承（brief 根提示）；近义 lad 伙计');

  W('mathematical', 'adjective', '/ˌmæθəˈmætɪkl/', 'A2', ['CET4'], '数学的', 'Related to mathematics.', [
    ['数学的', 'Related to mathematics.', '与数学有关的。', '定语。', 'Mathematical models predict the spread.', '数学模型可以预测扩散。', [], ['numerical'], 'adjective', '定语', '科学'],
  ], '', ['math'], '词根 mathematics 不在库；词核 math A2（math 的缩略形）对学习者可见且语义直连，A2 继承（同 luncheon 词核模式）；近义 numerical 数字的');

  W('matters', 'noun', '/ˈmætəz/', 'A2', [], '事务；事（复数）', 'Things to be dealt with.', [
    ['事务；事（复数）', 'Things to be dealt with or considered.', '需要处理或考虑的事。', '复数：personal matters。', 'The matters were discussed in private.', '这些事情在私下讨论了。', [], ['thing'], 'noun', 'countable', '通用'],
  ], '', [], '←matter A2 + -s（复数），A2 继承（brief 根提示）；近义 thing 事情');

  W('maul', 'verb', '/mɔːl/', '', [], '（动物）严重抓伤', 'To attack and badly hurt someone.', [
    ['（动物）严重抓伤', 'To attack and badly hurt someone.', '袭击并严重伤害。', '及物。', 'The dog mauled the postman.', '狗把邮递员咬成了重伤。', [], ['savage'], 'verb', '及物', '健康'],
  ], 'mauls~mauled~mauled~mauling', [], '无库内派生根，故留空；近义 savage 袭击、凶残对待');

  W('mauve', 'adjective', '/məʊv/', '', [], '淡紫色的', 'A pale purple colour.', [
    ['淡紫色的', 'A pale purple colour.', '浅紫色。', '亦可作名词：淡紫色。', 'She wore a mauve scarf.', '她戴了条淡紫色围巾。', [], ['purple'], 'adjective', '定语/表语', '外貌'],
  ], '', [], '法语 mauve（锦葵）——无库内派生根，故留空；近义 purple 紫色的');

  W('maverick', 'noun/adjective', '/ˈmævərɪk/', '', [], '特立独行者；标新立异的', 'A person who refuses to follow the group.', [
    ['特立独行者；标新立异的', 'A person who refuses to follow the group, or not following rules.', '不服从群体的人；标新立异的。', '名词与形容词两用。', 'She was a maverick who ignored the rules.', '她是个不守规矩的特立独行者。', [], ['rebel'], 'noun/adjective', 'null', '性格'],
  ], '', [], '牧场主名 Maverick——无库内派生根，故留空；近义 rebel 反叛者');

  W('maxim', 'noun', '/ˈmæksɪm/', '', [], '格言；箴言', 'A short statement of a general truth.', [
    ['格言；箴言', 'A short statement of a general truth.', '概括一般真理的短句。', '可数。', 'He lives by one maxim: keep it simple.', '他信奉一句格言：保持简单。', [], ['proverb'], 'noun', 'countable', '通用'],
  ], 'maxims', ['proverb'], '拉丁 maximus（最大）——无库内派生根，故留空；家族/近义 proverb 谚语');

  W('may have', 'verb', '/ˌmeɪ ˈhæv/', '', [], '可能已经', 'Used to say something was possibly true.', [
    ['可能已经', 'Used to say that something was possibly true in the past.', '表示过去某事可能发生了。', '情态动词 + have 结构。', 'She may have missed the train.', '她可能已经错过了火车。', [], ['might'], 'verb', 'null', '语法'],
  ], '', [], 'may + have；近义 might 可能（过去）。短语分级留空').phrase = true;

  W('meagre', 'adjective', '/ˈmiːɡə/', '', [], '稀少的；微薄的', 'Very small in amount or quality.', [
    ['稀少的；微薄的', 'Very small in amount or quality.', '数量或质量很少的。', '定语。', 'The evidence was meagre and unclear.', '证据稀少且不清楚。', [], ['miserable', 'slender'], 'adjective', '定语', '通用'],
  ], '', [], '法语 megre——无库内派生根，故留空；近义 miserable 少得可怜的、slender 微薄的（英式拼写，美式 meager）');

  W('meaning', 'noun', '/ˈmiːnɪŋ/', 'A2', ['CET4'], '意思；含义', 'What a word or sign means.', [
    ['意思；含义', 'What a word, sign or action means.', '词、符号或行为所表达的内容。', '可数或不可数。', 'What is the meaning of this word?', '这个词是什么意思？', ['the meaning of'], ['sense'], 'noun', 'countable', '通用'],
  ], 'meanings', ['sense'], '←mean A2 + -ing（透明后缀），A2 继承（brief 根提示）；家族/近义 sense 意思、意义');

  W('meaningful', 'adjective', '/ˈmiːnɪŋfl/', 'A2', ['CET4'], '有意义的；意味深长的', 'Having a real meaning or value.', [
    ['有意义的；意味深长的', 'Having a real meaning or value.', '有实际意义或价值的。', '定语或表语。', 'They had a meaningful conversation.', '他们进行了一次有意义的谈话。', [], ['pregnant', 'significant', 'worthwhile'], 'adjective', '定语/表语', '通用'],
  ], '', ['meaning', 'significant'], '←meaning A2（←mean A2）+ -ful（透明后缀），A2 继承；家族 significant 重要的，近义 pregnant（with meaning）意味深长的、worthwhile 值得的');

  W('meaningless', 'adjective', '/ˈmiːnɪŋləs/', 'A2', [], '无意义的', 'Having no meaning or purpose.', [
    ['无意义的', 'Having no meaning or purpose.', '没有意义或目的的。', '定语或表语。', 'The debate seemed meaningless.', '这场辩论似乎毫无意义。', [], ['hollow'], 'adjective', '定语/表语', '通用'],
  ], '', ['meaning'], '←meaning A2 + -less（透明后缀），A2 继承；近义 hollow 空洞的');

})(typeof window !== 'undefined' ? window : globalThis);
