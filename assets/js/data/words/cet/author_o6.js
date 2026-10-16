/* data/words/cet/author_o6.js — 常用词 O 批次 6，缺口 orderly ~ outreach，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（7 条：CET4 6 =
 * orderly、orientation、original、originate、orphanage、outdoors；CET6 1 = outrageous）。
 * 本批 5 条短语：W(...) 返回后补 .phrase = true。
 * out- 作前缀不作成分（同 non-/mis- 模式），取其后词根级：outdo←do A1、outlive←live A1、
 * outnumber←number A1、outreach←reach A2、outhouse←house A1、outdistance←distance A2、
 * outburst←burst B2、outpost←post A2、outbound←bound B2；orphanage 因 -age 不在可继承清单
 * （同 marriage 先例）留空；original/originate←origin B1、ornate←ornament B2（词干 orn- 共享）、
 * outermost←outer B1 + -most（最高级词形变化，按比较级 -er 同类继承，判断项）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_o6.js 必须在 _cet_helper.js 之后加载');

  W('orderly', 'adjective/noun', '/ˈɔːdli/', 'A2', ['CET4'], '有条理的；护工', 'Well-ordered and calm, or a hospital helper.', [
    ['有条理的；井然有序的', 'Done in a well-ordered, calm way.', '有条不紊的；整齐的。', '定语或表语。', 'The crowd stayed orderly throughout.', '人群自始至终保持有序。', [], ['neat', 'tidy'], 'adjective', '定语/表语', '通用'],
    ['（医院）护工', 'A person who helps in a hospital.', '在医院帮忙的人。', '可数。', 'An orderly carried the patient to the ward.', '护工把病人送进了病房。', [], [], 'noun', 'countable', '健康'],
  ], 'orderlies',['order'], '←order A2 + -ly（形容词后缀 -ly，非副词 -ly），A2 继承（brief 根提示）；近义 neat 整洁的、tidy 整齐的');

  W('ordinary people', 'noun', '/ˈɔːdnri ˈpiːpl/', '', [], '普通人', 'People who are not special or privileged.', [
    ['普通人', 'People who are not special or privileged.', '不特别也不享有特权的人们。', '集合用法，谓语可用复数。', 'The show is meant for ordinary people.', '这个节目面向普通人。', [], ['street'], 'noun', 'countable', '通用'],
  ], '', [], 'ordinary + people；近义 street（队列原样引用，street people 街头普通人）。短语分级留空').phrase = true;

  W('organisms', 'noun', '/ˈɔːɡənɪzəmz/', 'B2', [], '生物体；有机体', 'Living things such as plants and animals.', [
    ['生物体；有机体', 'Living things such as plants and animals.', '植物、动物等生物。', 'organism 的复数形式。', 'Bacteria are tiny organisms.', '细菌是微小的生物体。', [], ['life'], 'noun', 'countable', '科学'],
  ], '',['organism'], '←organism B2 的复数形式，B2 继承（brief 根提示）；近义 life 生物、生命（队列原样引用）');

  W('organization', 'noun', '/ˌɔːɡənaɪˈzeɪʃn/', 'A2', [], '组织；团体', 'A group of people working together for a purpose, or the act of organizing.', [
    ['组织；团体', 'A group of people working together for a purpose, or the act of organizing.', '为某目的共同工作的人群；也指组织的行为。', '作团体可数，作行为不可数。', 'The charity runs as a non-profit organization.', '这家慈善机构作为非营利组织运作。', ['international organization'], ['body', 'institute', 'institution', 'machine', 'outfit', 'structure'], 'noun', 'countable', '社会'],
  ], 'organizations', ['institute', 'institution', 'organize'], '←organize A2 + -ation（e→a 名化），A2 继承（brief 根提示）；家族 institute 学会、institution 机构、organize 组织，近义 body 团体、machine 机器般的组织、outfit 班子、structure 结构');

  W('organizer', 'noun', '/ˈɔːɡənaɪzə(r)/', 'A2', [], '组织者', 'A person who plans and arranges an event or activity.', [
    ['组织者', 'A person who plans and arranges an event or activity.', '筹划并安排活动的人。', '可数。', 'She was the organizer of the charity run.', '她是那次慈善跑的组织者。', [], ['entrepreneur', 'host', 'whip'], 'noun', 'countable', '职业'],
  ], 'organizers',['host', 'organize'], '←organize A2 + -er（施事后缀，同 analyst 模式），A2 继承（brief 根提示）；家族 host 主人、主持人，近义 entrepreneur 创业者、whip 党鞭（组织议员者）');

  W('orientation', 'noun', '/ˌɔːriənˈteɪʃn/', 'B2', ['CET4'], '方向；迎新培训', 'The direction something faces, or an introduction to a new job or course.', [
    ['方向；迎新培训', 'The direction something faces, or an introduction to a new job or course.', '朝向；也指新工作或新课程的入门培训。', '可数或不可数。', 'New staff attended a two-day orientation.', '新员工参加了为期两天的入职培训。', ['orientation training'], [], 'noun', 'countable', '职业'],
  ], '', ['orient'], '←orient B2 + -ation（透明名化），B2 继承（brief 根提示）；家族 orient 使朝向、东方');

  W('original', 'adjective/noun', '/əˈrɪdʒənl/', 'B1', ['CET4'], '原始的；原件', 'Existing from the beginning, or the first version of something.', [
    ['原始的；原创的', 'Existing from the beginning, or new and not copied.', '从一开始就存在的；或新的、非抄袭的。', '定语或表语。', 'The original painting hangs in Vienna.', '原画挂在维也纳。', ['original idea'], ['first', 'novel'], 'adjective', '定语/表语', '艺术'],
    ['原件；原作', 'The original version of something.', '某物的最初版本或原件。', '可数。', 'Keep the original in a safe place.', '把原件放在安全的地方。', [], ['prototype'], 'noun', 'countable', '通用'],
  ], 'originals', ['novel', 'origin', 'prototype'], '←origin B1 + -al（透明后缀），B1 继承（brief 显示 ←?，自行扫根 origin）；家族 novel 新颖的、origin 起源、prototype 原型，近义 first 最初的');

  W('originate', 'verb', '/əˈrɪdʒɪneɪt/', 'B1', ['CET4'], '起源于', 'To come or bring into existence from something.', [
    ['起源于', 'To come or bring into existence from something.', '从某物而来或由其产生。', '不及物，常与 in/from 连用。', 'The error originated in a faulty sensor.', '这个错误源于一个故障传感器。', ['originate from'], ['derive', 'descend', 'hail'], 'verb', '不及物', '通用'],
  ], 'originates~originated~originated~originating', ['derive', 'origin'], '←origin B1 + -ate（透明后缀，origin 整段可见），B1 继承（brief 显示 ←?，自行扫根 origin）；家族 origin 起源、derive 派生，近义 descend 源自、hail 来自');

  W('originating in', 'verb', '/əˈrɪdʒɪneɪtɪŋ ɪn/', '', [], '起源于', 'Coming into existence in a particular place or time.', [
    ['起源于', 'Coming into existence in a particular place or time.', '在某时某地产生。', '动词短语，in 后接地点或时期。', 'The custom originating in the north is still kept.', '起源于北方的习俗仍被保留。', [], ['from'], 'verb', '及物', '语法'],
  ], '', [], 'originate + in；近义 from 来自。短语分级留空').phrase = true;

  W('ornate', 'adjective', '/ɔːˈneɪt/', 'B2', [], '华丽的；装饰繁复的', 'Very decorated with a lot of detail.', [
    ['华丽的；装饰繁复的', 'Very decorated with a lot of detail.', '带有大量细节装饰的。', '多作定语。', 'The hall was filled with ornate mirrors.', '大厅里满是华丽的镜子。', ['ornate style'], ['fancy'], 'adjective', '定语', '艺术'],
  ], '',['ornament'], '←ornament B2 词干 orn-（t→e 音变）+ -ate（透明后缀），B2 继承（brief 显示 ←?，自行扫根 ornament）；近义 fancy 花哨的、别致的');

  W('orphanage', 'noun', '/ˈɔːfənɪdʒ/', '', ['CET4'], '孤儿院', 'A home for children whose parents have died.', [
    ['孤儿院', 'A home for children whose parents have died.', '为失去父母的儿童设立的机构。', '可数。', 'She grew up in an orphanage.', '她在孤儿院长大。', [], [], 'noun', 'countable', '社会'],
  ], 'orphanages', ['orphan'], 'orphan + age；-age 后缀不在可继承清单（同 marriage 先例），orphan 虽在库（B2）仍留空；家族 orphan 孤儿');

  W('ought', 'verb', '/ɔːt/', '', [], '应该', 'Used to show that it is right or necessary to do something.', [
    ['应该', 'Used to show that it is right or necessary to do something.', '表示做某事正确或必要。', '情态动词，后接动词原形，美式常省略 to。', 'You ought to tell your parents.', '你应该告诉你的父母。', [], ['suppose'], 'verb', 'null', '语法'],
  ], '', [], '情态动词，无库内派生根，留空；近义 suppose 推测、认为（I suppose so）');

  W('ought to', 'verb', '/ˈɔːt tuː/', '', [], '应该', 'Used to show that it is right or necessary to do something.', [
    ['应该', 'Used to show that it is right or necessary to do something.', '表示做某事正确或必要。', '情态短语，后接动词原形。', 'You ought to rest after the long trip.', '长途旅行后你应该休息。', [], ['should'], 'verb', 'null', '语法'],
  ], '', ['should'], 'ought + to；家族/近义 should 应该。短语分级留空').phrase = true;

  W('oust', 'verb', '/aʊst/', '', [], '驱逐；罢免', 'To force somebody out of a position of power.', [
    ['驱逐；罢免', 'To force somebody out of a position of power.', '把某人赶出权力位置。', '及物，常与 from 连用。', 'The board ousted the chairman last week.', '董事会上周罢免了主席。', [], ['topple'], 'verb', '及物', '政治'],
  ], 'ousts~ousted~ousted~ousting', [], '古法语 oster（驱逐）——与 out 语义相关但拼写不连续，留空；近义 topple 推翻、使倒台');

  W('out of', 'preposition', '/aʊt ɒv/', '', [], '从……里出来；用尽', 'Away from the inside of something, or no longer having it.', [
    ['从……里出来；离开', 'Away from the inside or the surface of something.', '从内部或表面离开。', '介词短语。', 'She stepped out of the car.', '她从车里走出来。', [], [], 'preposition', 'null', '通用'],
    ['用尽；没有', 'No longer having something, such as money or supplies.', '不再拥有某物，如钱或供应。', '常作表语。', 'We are out of sugar.', '我们的糖用完了。', ['out of order'], [], 'preposition', 'null', '通用'],
  ], '', ['from'], 'out + of；家族 from 来自、自。短语分级留空').phrase = true;

  W('out of work', 'adjective', '/ˌaʊt ɒv ˈwɜːk/', '', [], '失业的', 'Not having a job.', [
    ['失业的', 'Not having a job.', '没有工作。', '表语。', 'He has been out of work since May.', '他从五月起就失业了。', [], ['unemployed'], 'adjective', 'null', '职业'],
  ], '', [], 'out of + work；近义 unemployed 失业的。短语分级留空').phrase = true;

  W('outbound', 'adjective', '/ˈaʊtbaʊnd/', 'B2', [], '外向的；出站的', 'Leaving a place, or travelling away from it.', [
    ['外向的；出站的', 'Leaving a place, or travelling away from it.', '离开某地的；向外出发的。', '多作定语。', 'The outbound flight leaves at dawn.', '去程航班黎明起飞。', ['outbound flight'], ['outgoing', 'outward'], 'adjective', '定语', '交通'],
  ], '',['bound'], 'out- 前缀不作成分，取 bound B2（开往、出发），B2 继承；近义 outgoing 外向的、outward 向外的');

  W('outburst', 'noun', '/ˈaʊtbɜːst/', 'B2', [], '爆发；迸发', 'A sudden strong expression of feeling or activity.', [
    ['爆发；迸发', 'A sudden strong expression of feeling or activity.', '感情或活动的突然强烈释放。', '可数。', 'She had an outburst of laughter.', '她爆发出一阵大笑。', ['outburst of'], ['fit', 'fireworks', 'outbreak'], 'noun', 'countable', '情感'],
  ], 'outbursts',['burst'], 'out- 前缀不作成分，取 burst B2（爆发），B2 继承；近义 fit 一阵、fireworks 火气、outbreak 突发');

  W('outdistance', 'verb', '/aʊtˈdɪstəns/', 'A2', [], '远远超过', 'To leave somebody far behind, especially in a race.', [
    ['远远超过', 'To leave somebody far behind, especially in a race.', '把某人远远甩在后面，尤指赛跑。', '及物。', 'Our runner outdistanced the rest by minutes.', '我们的选手领先其余人好几分钟。', [], ['overtake'], 'verb', '及物', '体育'],
  ], 'outdistances~outdistanced~outdistanced~outdistancing',['distance'], 'out- 前缀不作成分，取 distance A2（拉开距离），A2 继承；近义 overtake 超车、超过');

  W('outdo', 'verb', '/aʊtˈduː/', 'A1', [], '胜过；做得比……好', 'To do better than somebody else.', [
    ['胜过；做得比……好', 'To do better than somebody else.', '做得比别人好。', '及物。', 'They outdid themselves with the decorations.', '他们把装饰做得超出预期。', [], ['surpass'], 'verb', '及物', '通用'],
  ], 'outdoes~outdid~outdone~outdoing', ['surpass'], 'out- 前缀不作成分，取 do A1（做），A1 继承；家族/近义 surpass 超越、胜过');

  W('outdoors', 'noun/adverb', '/ˌaʊtˈdɔːz/', 'A2', ['CET4'], '户外；在户外', 'In the open air away from buildings.', [
    ['户外；在户外', 'In the open air away from buildings.', '在露天、远离建筑物处。', '名词或副词用法。', 'The children played outdoors all afternoon.', '孩子们整个下午都在户外玩。', ['live outdoors'], ['nature', 'outside'], 'noun/adverb', 'null', '自然'],
  ], '', ['outdoor'], '←outdoor A2 + -s（词形复数化），A2 继承（brief 根提示）；家族 outdoor 户外的，近义 nature 自然界、outside 外面');

  W('outermost', 'adjective', '/ˈaʊtməʊst/', 'B1', [], '最外面的；最远的', 'Farthest away from the centre or from land.', [
    ['最外面的；最远的', 'Farthest away from the centre or from land.', '离中心或陆地最远的。', '多作定语。', 'The village lies in the outermost region of the country.', '这个村庄位于该国最边远的地区。', ['outermost layer'], ['extreme'], 'adjective', '定语', '地理'],
  ], '',['outer'], '←outer B1 + -most（形容词最高级词形变化，按比较级 -er 同类继承，无库内先例属判断项），B1 继承（brief 显示 ←?，自行扫根 outer）；近义 extreme 极端的、最外的');

  W('outfits', 'noun', '/ˈaʊtfɪts/', 'B2', [], '全套服装；行头', 'A set of clothes worn together, or a set of equipment.', [
    ['全套服装；行头', 'A set of clothes worn together, or a set of equipment.', '配套穿着的一套衣服；也指全套装备。', 'outfit 的复数形式。', 'She bought three outfits for the trip.', '她为旅行买了三套行头。', [], ['wardrobe'], 'noun', 'countable', '外貌'],
  ], '',['outfit'], '←outfit B2 的复数形式，B2 继承（brief 根提示）；近义 wardrobe 全部衣物、衣橱');

  W('outfitter', 'noun', '/ˈaʊtfɪtə(r)/', 'B2', [], '服装商；装备商', 'A person or shop that sells clothes or outdoor equipment.', [
    ['服装商；装备商', 'A person or shop that sells clothes or outdoor equipment.', '卖服装或户外装备的人或店。', '可数。', 'The outfitter fitted her for hiking boots.', '装备商为她选配合脚的登山靴。', [], ['tailor'], 'noun', 'countable', '职业'],
  ], 'outfitters',['outfit'], '←outfit B2 + -er（施事后缀），B2 继承（brief 根提示）；近义 tailor 裁缝、服装店');

  W('outhouse', 'noun', '/ˈaʊthaʊs/', 'A1', [], '外屋；户外厕所', 'A small building outside a main house, especially a toilet.', [
    ['外屋；户外厕所', 'A small building outside a main house, especially a toilet.', '主屋外的小屋，尤指厕所。', '可数，美式常用。', 'The outhouse stands behind the cabin.', '外屋在小屋后面。', [], ['shed'], 'noun', 'countable', '家居'],
  ], 'outhouses',['house'], 'out- 前缀不作成分，取 house A1（屋子），A1 继承；近义 shed 棚屋');

  W('outlive', 'verb', '/aʊtˈlɪv/', 'A1', [], '比……活得长', 'To live longer than somebody or something.', [
    ['比……活得长', 'To live longer than somebody or something.', '比某人或某物活得久。', '及物。', 'She outlived both of her brothers.', '她比两个哥哥都活得久。', [], ['survive'], 'verb', '及物', '通用'],
  ], 'outlives~outlived~outlived~outliving', ['survive'], 'out- 前缀不作成分，取 live A1（生活、生存），A1 继承；家族/近义 survive 幸存、比……活得长');

  W('outnumber', 'verb', '/ˌaʊtˈnʌmbə(r)/', 'A1', [], '在数量上超过', 'To be greater in number than somebody or something.', [
    ['在数量上超过', 'To be greater in number than somebody or something.', '数量多于某人或某物。', '及物。', 'Women outnumber men in the audience.', '观众中女性人数超过男性。', [], ['predominate'], 'verb', '及物', '社会'],
  ], 'outnumbers~outnumbered~outnumbered~outnumbering',['number'], 'out- 前缀不作成分，取 number A1（数量），A1 继承；近义 predominate 占多数');

  W('outpost', 'noun', '/ˈaʊtpəʊst/', 'A2', [], '前哨站；边远聚居地', 'A small place far from a main area, used for trading or army work.', [
    ['前哨站；边远聚居地', 'A small place far from a main area, used for trading or army work.', '远离中心的小据点，用于贸易或军事。', '可数。', 'The troops built an outpost near the border.', '军队在边境附近建了一个前哨站。', [], ['frontier', 'satellite'], 'noun', 'countable', '军事'],
  ], 'outposts',['post'], 'out- 前缀不作成分，取 post A2（岗位、驻地），A2 继承；近义 frontier 边疆、satellite 附属站点');

  W('outraged', 'adjective', '/ˈaʊtreɪdʒd/', 'C1', [], '愤怒的', 'Feeling or showing great anger.', [
    ['愤怒的', 'Feeling or showing great anger.', '感到或表现出极大愤怒。', '定语或表语。', 'Residents were outraged by the noise.', '居民们对噪音感到愤怒。', ['outraged by'], ['indignant'], 'adjective', '定语/表语', '情感'],
  ], '',['indignant', 'outrage'], '←outrage C1 + -ed（透明后缀），C1 继承（brief 根提示）；家族/近义 indignant 愤慨的、愤愤不平的');

  W('outrageous', 'adjective', '/aʊtˈreɪdʒəs/', 'C1', ['CET6'], '令人愤慨的；骇人的', 'Very shocking and unacceptable.', [
    ['令人愤慨的；骇人的', 'Very shocking and unacceptable.', '非常令人震惊、不可接受的。', '多作定语。', 'The price was outrageous.', '这个价格高得离谱。', ['outrageous behaviour'], ['obscene'], 'adjective', '定语', '社会'],
  ], '',['obscene', 'outrage'], '←outrage C1 + -ous（透明后缀），C1 继承（brief 显示 ←?，outrage 经 outraged 扫根 C1）；家族/近义 obscene 猥亵的、令人发指的');

  W('outreach', 'noun', '/ˈaʊtriːtʃ/', 'A2', [], '外展服务；扩大触及', 'An effort to reach more people or to go beyond the usual limits.', [
    ['外展服务；扩大触及', 'An effort to reach more people or to go beyond the usual limits.', '触及更多人或超出通常限度的努力。', '不可数。', 'The church runs a youth outreach program.', '教会开展了一项青少年外展项目。', ['outreach program'], ['mission'], 'noun', 'uncountable', '社会'],
  ], '',['reach'], 'out- 前缀不作成分，取 reach A2（触及、达到），A2 继承；近义 mission 使命、布道活动');
})(typeof window !== 'undefined' ? window : globalThis);
