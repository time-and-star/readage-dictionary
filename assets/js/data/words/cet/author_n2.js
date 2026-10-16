/* data/words/cet/author_n2.js — 常用词 N 批次 2，缺口 nadir ~ negativity，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（共 6 条 CET4）。
 * 本批 4 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * 派生无可靠 CEFR 留空：nausea/naval 缺席（nauseous/nautical）、negative 为 negate 的父词
 * 不可逆向继承（logarithm 先例）、narcotic/nascent/nectar 等无库内可见派生根。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_n2.js 必须在 _cet_helper.js 之后加载');

  W('nadir', 'noun', '/ˈneɪdɪə(r)/', '', [], '最低点', 'The lowest point that something reaches.', [
    ['最低点', 'The lowest point that something reaches.', '事物所达到的最低点。', '正式用语，与 zenith（顶点）相对。', 'The morale of the team sank to its nadir after the loss.', '失利后球队的士气跌到了谷底。', [], ['worst'], 'noun', 'countable', '书面'],
  ], 'nadirs', [], '源自阿拉伯语 nadr 对点（天底），无库内派生根，留空；近义 worst 最坏的');

  W('nag', 'verb', '/næɡ/', '', [], '唠叨；纠缠地催', 'To keep complaining or finding fault with someone in an annoying way.', [
    ['唠叨；纠缠地催', 'To keep complaining or finding fault with someone in an annoying way.', '不停地抱怨、挑剔某人。', '及物，常与 about/over 连用。', 'She nagged him about the mess every day.', '她每天都为乱糟糟的事唠叨他。', ['nag about'], ['scold'], 'verb', '及物', '社交'],
  ], 'nags~nagged~nagged~nagging', ['scold'], '古北欧语 nagga（抱怨），无库内派生根，留空；家族/近义 scold 责骂');

  W('naive artist', 'noun', '/naɪˈiːv ˈɑːtɪst/', '', [], '素朴画家；天真派艺术家', 'An artist who works in a simple, self-taught style.', [
    ['素朴画家；天真派艺术家', 'An artist who works in a simple, self-taught style.', '以简朴、自学方式作画的艺术家。', '可数。', 'The naive artist sold paintings by the roadside.', '这位素朴画家在路边卖画。', [], ['primitive'], 'noun', 'countable', '艺术'],
  ], '', [], 'naive + artist；近义 primitive 朴素的、原始的。短语分级留空').phrase = true;

  W('named', 'adjective', '/neɪmd/', 'A1', [], '被命名为……的', 'Given a particular name.', [
    ['被命名为……的', 'Given a particular name.', '被赋予某个名字的。', '分词形容词，常后接具体名字。', 'A girl named Lily waited outside.', '一个叫 Lily 的女孩在外面。', ['be named after'], ['nominal', 'so-called'], 'adjective', '定语/表语', '通用'],
  ], '',['name'], '←name A1 + -ed（透明后缀），A1 继承（brief 根提示）；近义 nominal 名义上的、so-called 所谓的');

  W('nape', 'noun', '/neɪp/', '', [], '颈后', 'The back of the neck.', [
    ['颈后', 'The back of the neck.', '脖子后面的部分。', '可数，常作 the nape of the neck。', 'She felt a chill on the nape of her neck.', '她感到颈后一阵发凉。', ['the nape of the neck'], ['neck'], 'noun', 'countable', '健康'],
  ], 'napes', [], '源自古法语 nape（布），形含 nap 但与 nap（小睡）语义无关，切词假象，留空；近义 neck 脖子');

  W('narcotic', 'noun/adjective', '/nɑːˈkɒtɪk/', '', [], '麻醉剂；麻醉性毒品', 'A drug that makes you feel sleepy and takes away pain.', [
    ['麻醉剂；麻醉性毒品', 'A drug that makes you feel sleepy and takes away pain, or an illegal drug like it.', '使人昏睡、止痛的药物；亦指此类违禁毒品。', '可数或不可数，名词与形容词两用。', 'The doctor gave him a mild narcotic for the pain.', '医生给他开了温和的止痛麻醉药。', ['narcotic drug'], ['drug', 'heroin'], 'noun/adjective', 'countable', '健康'],
  ], 'narcotics', ['drug', 'heroin'], '希腊语 narkē（麻木），无库内可见派生根，留空；家族/近义 drug 药、heroin 海洛因');

  W('narrative', 'noun/adjective', '/ˈnærətɪv/', 'B2', ['CET4'], '叙事；故事', 'A story or a description of a series of events.', [
    ['叙事；故事', 'A story or a description of a series of events.', '对一系列事件的叙述或描述。', '可数；亦作形容词（叙事的）。', 'She wrote a narrative of the journey.', '她写下了这次旅行的记述。', ['narrative essay'], ['story', 'tale'], 'noun/adjective', 'countable', '文学'],
  ], 'narratives',['tale', 'narrate'], '←narrate B2 + -ive（透明后缀），B2 继承；家族 tale 故事，近义 story 故事');

  W('narrator', 'noun', '/nəˈreɪtə(r)/', 'B2', ['CET4'], '叙述者；旁白', 'A person who tells a story, or the voice that explains a film.', [
    ['叙述者；旁白', 'A person who tells a story, or the voice that explains a film.', '讲故事的人；影视中的画外解说。', '可数。', 'The narrator speaks in a calm, steady voice.', '叙述者的声音平静而稳定。', ['narrator voice'], ['teller'], 'noun', 'countable', '文学'],
  ], 'narrators',['teller', 'narrate'], '←narrate B2 + -or（施事后缀，同 analyst←analyze），B2 继承；家族 teller 讲述者');

  W('nascent', 'adjective', '/ˈnæsənt/', '', [], '新生的；初期的', 'Just beginning to exist and develop.', [
    ['新生的；初期的', 'Just beginning to exist and develop.', '刚刚开始存在并发展的。', '多作定语。', 'The nascent movement soon gained support.', '这场新生的运动很快获得了支持。', ['nascent stage'], ['infant'], 'adjective', '定语', '社会'],
  ], '', [], '拉丁语 nasci（出生）——与 infant 同为新生义，但形不含 nation/nature，无可见透明派生，留空；近义 infant 婴儿的、新生的');

  W('national', 'noun/adjective', '/ˈnæʃnəl/', 'B1', ['CET4'], '国家的；全国的；国民', 'Of or belonging to a whole nation.', [
    ['国家的；全国的', 'Of or belonging to a whole nation.', '属于整个国家的。', '形容词与名词（本国侨民）两用。', 'The national team won the final.', '国家队赢了决赛。', ['national park'], ['citizen', 'federal', 'nationwide'], 'noun/adjective', 'countable', '政治'],
  ], 'nationals',['citizen', 'federal', 'nationwide', 'nation'], '←nation B1 + -al（透明后缀），B1 继承；家族 citizen 公民、federal 联邦的、nationwide 全国范围的');

  W('nationalist', 'noun', '/ˈnæʃnəlɪst/', 'B1', ['CET4'], '民族主义者', 'A person who strongly supports the interests of their own nation.', [
    ['民族主义者', 'A person who strongly supports the interests of their own nation.', '强烈支持本民族利益的人。', '可数。', 'Nationalists marched through the capital.', '民族主义者在首都游行。', ['nationalist movement'], ['patriot'], 'noun', 'countable', '政治'],
  ], 'nationalists',['patriot', 'nation'], '←nation B1 + -ist（施事后缀，同 analyst←analyze），B1 继承；近义 patriot 爱国者');

  W('nationally', 'adverb', '/ˈnæʃnəli/', 'B1', [], '在全国范围内', 'In a way that covers or affects the whole country.', [
    ['在全国范围内', 'In a way that covers or affects the whole country.', '以覆盖或影响全国的方式。', '副词。', 'The policy was rolled out nationally last year.', '这项政策去年在全国推行。', ['nationally known'], ['nationwide'], 'adverb', 'null', '政治'],
  ], '',['nation'], '←nation B1 + -ally（-al + -ly 透明后缀），B1 继承；近义 nationwide 全国范围地');

  W('native land', 'noun', '/ˈneɪtɪv lænd/', '', [], '祖国；故乡', 'The country where a person was born.', [
    ['祖国；故乡', 'The country where a person was born.', '一个人出生的国家。', '多与物主代词连用，作不可数名词。', 'The singer left his native land at sixteen.', '那位歌手十六岁时离开了祖国。', [], ['homeland'], 'noun', 'uncountable', '地理'],
  ], '', ['homeland'], 'native + land；家族/近义 homeland 祖国。短语分级留空').phrase = true;

  W('natural', 'adjective', '/ˈnætʃrəl/', 'A2', ['CET4'], '自然的；天然的', 'Existing in nature and not made by people.', [
    ['自然的；天然的', 'Existing in nature and not made by people.', '存在于自然界、非人造的。', '定语或表语。', 'The park keeps its natural beauty untouched.', '这座公园保留着未被破坏的自然之美。', ['natural world'], ['born', 'inborn', 'inherent', 'organic', 'realistic', 'spontaneous', 'wild'], 'adjective', '定语/表语', '自然'],
  ], '',['inborn', 'organic', 'spontaneous', 'nature'], '←nature A2 + -al（透明后缀），A2 继承（brief 需扫根 nature）；家族 inborn 先天的、organic 有机的、spontaneous 自发的，近义 born、inherent、realistic、wild');

  W('nauseous', 'adjective', '/ˈnɔːʃəs/', '', [], '恶心的', 'Feeling as if you might vomit.', [
    ['恶心的', 'Feeling as if you might vomit.', '感觉要呕吐的。', '表语，常与 feel 连用。', 'The boat ride left me feeling nauseous.', '坐船让我感到恶心。', ['feel nauseous'], ['sick'], 'adjective', '表语', '健康'],
  ], '', [], '词根 nausea 缺席无级可继，留空；近义 sick 生病的、恶心的');

  W('nautical', 'adjective', '/ˈnɔːtɪkl/', '', [], '航海的；船舶的', 'Connected with ships, sailors and sailing.', [
    ['航海的；船舶的', 'Connected with ships, sailors and sailing.', '与船只、水手和航海有关的。', '多作定语，正式用语。', 'He collects nautical charts.', '他收集航海图。', ['nautical chart'], ['maritime'], 'adjective', '定语', '交通'],
  ], '', ['maritime'], '希腊语 naus（船）——无库内派生根（naval 缺席），留空；家族/近义 maritime 海事的');

  W('navigator', 'noun', '/ˈnævɪɡeɪtə(r)/', 'B2', [], '领航员；导航仪', 'A person who plans the route of a ship or aircraft, or a device that guides a vehicle.', [
    ['领航员；导航仪', 'A person who plans the route of a ship or aircraft, or a device that guides a vehicle.', '规划航线的人；也指导航设备。', '可数。', 'The navigator plotted the course on the map.', '领航员在地图上标出了航线。', [], ['pilot'], 'noun', 'countable', '交通'],
  ], 'navigators',['navigate'], '←navigate B2 + -or（施事后缀），B2 继承；近义 pilot 飞行员');

  W('nearest', 'adjective', '/ˈnɪərɪst/', 'A1', [], '最近的', 'The superlative form of near; closest in space, time or relationship.', [
    ['最近的', 'The superlative form of near; closest in space, time or relationship.', 'near 的最高级；空间、时间或关系上最接近的。', '定语或表语，常与 to 连用。', 'The nearest bank is two streets away.', '最近的银行在两条街外。', ['nearest neighbour'], ['immediate', 'next', 'proximate'], 'adjective', '定语/表语', '通用'],
  ], '',['proximate', 'near'], '←near A1 的最高级形式，A1 继承（brief 根提示）；家族 proximate 最接近的，近义 immediate 立即的、next 下一个');

  W('nearly', 'adverb', '/ˈnɪəli/', 'A1', ['CET4'], '几乎；将近', 'Almost; very nearly.', [
    ['几乎；将近', 'Almost; very nearly.', '几乎；差一点点。', '修饰动词、形容词与数词。', 'We are nearly there.', '我们快到了。', ['not nearly'], ['almost'], 'adverb', 'null', '通用'],
  ], '',['near'], '←near A1 + -ly（透明后缀），A1 继承（brief 根提示）；近义 almost 几乎');

  W('nearly all', 'adjective', '/ˈnɪəli ɔːl/', '', [], '几乎所有', 'Almost every one of a group.', [
    ['几乎所有', 'Almost every one of a group.', '某个群体中几乎全部。', '修饰复数名词或与 of 连用。', 'Nearly all of the tickets were sold.', '几乎所有票都卖光了。', ['nearly all of'], ['most'], 'adjective', 'null', '语法'],
  ], '', [], 'nearly + all；近义 most 大多数。短语分级留空').phrase = true;

  W('neaten', 'verb', '/ˈniːtn/', 'B1', [], '弄整洁', 'To make something neat and tidy.', [
    ['弄整洁', 'To make something neat and tidy.', '把某物弄整齐。', '及物，常与 up 连用。', 'She neatened the desk before the meeting.', '开会前她把办公桌收拾整齐了。', ['neaten up'], ['tidy'], 'verb', '及物', '家居'],
  ], 'neatens~neatened~neatened~neatening',['tidy', 'neat'], '←neat B1 + -en（透明后缀，使变整洁），B1 继承；家族/近义 tidy 整洁');

  W('necktie', 'noun', '/ˈnektaɪ/', 'A2', [], '领带', 'A narrow piece of cloth worn around the neck and tied in a knot.', [
    ['领带', 'A narrow piece of cloth worn around the neck and tied in a knot.', '系在颈部打结的窄布带。', '可数。', 'He loosened his necktie after the long meeting.', '漫长的会议后他松了松领带。', [], ['tie'], 'noun', 'countable', '外貌'],
  ], 'neckties',['neck', 'tie'], 'neck A2 + tie 复合词，首成分 neck 在库，A2 继承（minibus 模式）；近义 tie 领带');

  W('nectar', 'noun', '/ˈnektə(r)/', '', [], '花蜜；甘露', 'A sweet liquid produced by flowers, that bees collect.', [
    ['花蜜；甘露', 'A sweet liquid produced by flowers, that bees collect.', '花分泌的甜液，蜜蜂采集它。', '不可数。', 'Bees collect nectar from the flowers.', '蜜蜂从花中采集花蜜。', ['flower nectar'], ['honey'], 'noun', 'uncountable', '自然'],
  ], '', ['honey'], '希腊语 nektar（神酒），无库内派生根，留空；家族/近义 honey 蜂蜜');

  W('nectarine', 'noun', '/ˌnektəˈriːn/', '', [], '油桃', 'A type of peach with smooth skin.', [
    ['油桃', 'A type of peach with smooth skin.', '一种表皮光滑无毛的桃子。', '可数。', 'We bought a bag of nectarines.', '我们买了一袋油桃。', [], ['peach'], 'noun', 'countable', '饮食'],
  ], 'nectarines', [], 'nectar + -ine（因味甘得名），nectar 无级可继，留空；近义 peach 桃子');

  W('need to', 'verb', '/ˈniːd tuː/', '', [], '需要；必须', 'Used to say that something is necessary.', [
    ['需要；必须', 'Used to say that something is necessary.', '表示某事是必要的。', '情态结构：need to + 动词原形。', 'You need to finish this today.', '你今天需要完成这件事。', ['need to do'], ['must'], 'verb', 'null', '语法'],
  ], '', [], 'need + to；近义 must 必须。短语分级留空').phrase = true;

  W('needed', 'verb', '/ˈniːdɪd/', 'A1', [], '需要；过去需要', 'The past tense and past participle of need.', [
    ['需要；过去需要', 'The past tense and past participle of need, also used as an adjective meaning necessary.', 'need 的过去式与过去分词；亦作形容词（必要的）。', '可作谓语或定语。', 'We needed more time.', '我们需要更多时间。', ['badly needed'], ['necessary'], 'verb', '及物', '通用'],
  ], '',['necessary', 'need'], '←need A1 + -ed（透明后缀），A1 继承（brief 根提示）；近义 necessary 必要的');

  W('needlework', 'noun', '/ˈniːdlwɜːk/', 'B1', [], '针线活；刺绣', 'Sewing or embroidery done by hand.', [
    ['针线活；刺绣', 'Sewing or embroidery done by hand.', '手工缝纫或刺绣的活计。', '不可数。', 'Her needlework decorated the pillowcases.', '她的针线活装饰了枕套。', [], ['embroidery'], 'noun', 'uncountable', '家居'],
  ], '', ['embroidery'], 'needle B1 + work 复合词，首成分 needle 在库，B1 继承（minibus 模式）；近义 embroidery 刺绣');

  W('needs', 'noun', '/niːdz/', 'A1', [], '需要之物', 'The things that someone must have.', [
    ['需要之物', 'The things that someone must have.', '某人必须拥有的东西。', 'need 的复数形式，常作复数。', 'The charity provides basic needs for the homeless.', '这家慈善机构为无家可归者提供基本生活必需品。', ['basic needs'], ['necessary'], 'noun', 'countable', '社会'],
  ], '',['need'], '←need A1 的复数形式，A1 继承（brief 根提示）；近义 necessary 必要的');

  W('needy', 'adjective', '/ˈniːdi/', 'A1', ['CET4'], '贫困的', 'Poor and needing help from other people.', [
    ['贫困的', 'Poor and needing help from other people.', '贫困且需要他人帮助的。', '多作定语。', 'The charity supports needy families.', '这家慈善机构帮助贫困家庭。', ['needy families'], ['poor'], 'adjective', '定语', '社会'],
  ], '',['poor', 'need'], '←need A1 + -y（形容词化后缀），A1 继承；近义 poor 贫穷的');

  W('negative', 'noun/adjective', '/ˈneɡətɪv/', '', ['CET4'], '否定的；负面的', 'Saying or expressing no, or bad and without hope.', [
    ['否定的；负面的', 'Saying or expressing no, or bad and without hope.', '表示否定的；消极的。', '形容词与名词（否定词）两用。', 'He gave a negative answer.', '他给出了否定的回答。', ['negative feedback'], ['film', 'minus', 'no'], 'noun/adjective', 'countable', '通用'],
  ], 'negatives', ['minus'], '拉丁语 negare（拒绝）——英文 negate C1 系由本词逆生，父词不可继承子词级（logarithm 先例），留空；家族 minus 负号，近义 film 底片、no 不、minus 减去');

  W('negativity', 'noun', '/ˌneɡəˈtɪvəti/', '', [], '消极；否定态度', 'A tendency to focus on the bad side of things.', [
    ['消极；否定态度', 'A tendency to focus on the bad side of things.', '倾向于只看事物坏面的态度。', '不可数。', 'The negativity in the comments surprised him.', '评论中的消极态度让他吃惊。', ['constant negativity'], ['pessimism'], 'noun', 'uncountable', '心理'],
  ], '', [], '←negative + -ity（透明后缀），negative 留空故本词亦留空；近义 pessimism 悲观');
})(typeof window !== 'undefined' ? window : globalThis);
