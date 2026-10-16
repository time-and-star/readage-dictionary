/* data/words/cet/author_f4.js · 手敲词条 F（四·前段）：facade ~ farce（含 6 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_f4.js 必须在 _cet_helper.js 之后加载');

  W('facade', 'noun', '/fəˈsɑːd/', '', [], '门面；表象', 'The front of a building, or a false appearance.', [
    ['门面；表象', 'The front of a building, or a false appearance.', '建筑物的正面，或虚假的外表。', '可数，亦拼 façade。', 'The hotel has a grand facade.', '这家酒店门面气派。', [], ['surface'], 'noun', 'countable', '家居'],
  ], 'facades', [], '法语 façade——无库内派生根；近义 surface 表面。分级留空');

  W('face-down', 'adjective/adverb', '/ˈfeɪs daʊn/', 'A1', [], '脸朝下的；俯卧地', 'With the face towards the ground.', [
    ['脸朝下的；俯卧地', 'With the face towards the ground.', '脸朝着地面。', '复合形容词或副词。', 'He lay face-down on the bed.', '他脸朝下趴在床上。', [], ['prone'], 'adjective/adverb', 'null', '通用'],
  ], '', ['face', 'down'], 'face 脸 + down 朝下，取首成分级 A1；近义 prone 俯卧的');

  W('facilitate', 'verb', '/fəˈsɪlɪteɪt/', 'B1', ['CET4'], '促进；使便利', 'To make something easier.', [
    ['促进；使便利', 'To make something easier.', '使某事更容易。', '及物，正式。', 'The new road facilitates trade.', '新路促进了贸易。', [], ['enable'], 'verb', '及物', '商务'],
  ], 'facilitates~facilitated~facilitated~facilitating', ['facility', 'enable'], '←facility B1 便利 + -ate（y→ate，同 beautify），B1 继承；家族 enable 使能够');

  W('facilities', 'noun', '/fəˈsɪlətiz/', 'B1', [], '设施', 'Buildings or equipment for an activity.', [
    ['设施', 'Buildings or equipment for an activity.', '用于某项活动的建筑或设备。', '复数：sports facilities。', 'The hotel has great facilities.', '这家酒店设施很好。', ['sports facilities'], ['infrastructure'], 'noun', 'countable', '通用'],
  ], '', ['facility', 'infrastructure'], '←facility B1 + -ies，B1 继承；家族 infrastructure 基础设施');

  W('facing', 'verb/adjective', '/ˈfeɪsɪŋ/', 'A1', [], '面对；朝向', 'Directing the face towards, or opposite to.', [
    ['面对；朝向', 'Directing the face towards, or opposite to.', '脸朝向，或与…相对。', '动词分词或形容词。', 'Our room faces the sea.', '我们房间朝海。', ['face to face'], ['opposite'], 'verb/adjective', 'null', '通用'],
  ], '', ['face'], '←face A1 + -ing，A1 继承；近义 opposite 相对的');

  W('fad', 'noun', '/fæd/', '', [], '一时风尚', 'Something popular for a short time.', [
    ['一时风尚', 'Something popular for a short time.', '短时间流行的东西。', '可数。', 'The game became a passing fad.', '这游戏成了一阵风。', ['a passing fad'], ['rage', 'vogue'], 'noun', 'countable', '文化'],
  ], 'fads', [], '来源不明的新词——无库内派生根；近义 rage 热潮、vogue 流行。分级留空');

  W('failure', 'noun', '/ˈfeɪljə(r)/', 'A2', ['CET4'], '失败；故障', 'Not doing well, or a broken thing or person.', [
    ['失败；故障', 'Not doing well, or a broken thing or person.', '做不好，或坏掉的东西或人。', '可数或不可数。', 'The engine failure delayed us.', '发动机故障耽误了我们。', [], ['breakdown', 'collapse', 'disaster', 'lemon', 'reject', 'turkey'], 'noun', 'uncountable/countable', '通用'],
  ], 'failures', ['fail', 'breakdown'], '←fail A2 + -ure，A2 继承；家族 breakdown 故障，近义 collapse 倒塌、disaster 灾难、lemon 次品、reject 次品、turkey 失败之作');

  W('fair-skinned', 'adjective', '/ˌfeə ˈskɪnd/', 'A2', [], '白皮肤的', 'Having light-coloured skin.', [
    ['白皮肤的', 'Having light-coloured skin.', '皮肤颜色浅的。', '复合形容词。', 'She is fair-skinned.', '她皮肤很白。', [], ['white'], 'adjective', '定语/表语', '外貌'],
  ], '', ['fair', 'skin'], '←fair A2 白皙的 + -skinned，取首成分级 A2；近义 white 白的');

  W('fairly', 'adverb', '/ˈfeəli/', 'A2', ['CET4'], '相当；公平地', 'Quite, or in a fair way.', [
    ['相当；公平地', 'Quite, or in a fair way.', '颇，或以公平的方式。', '副词：fairly tall 相当高。', 'The test was fairly easy.', '考试相当容易。', [], ['fair', 'pretty', 'rather', 'somewhat'], 'adverb', 'null', '通用'],
  ], '', ['fair'], '←fair A2 + -ly，A2 继承；近义 fair 公平地、pretty 相当、rather 颇、somewhat 稍微');

  W('fairness', 'noun', '/ˈfeənəs/', 'A2', [], '公平', 'The quality of being fair.', [
    ['公平', 'The quality of being fair.', '公正的品质。', '不可数：in fairness（公平地说）。', 'In fairness, he tried hard.', '公平地说，他尽力了。', ['in fairness'], ['equity', 'justice'], 'noun', 'uncountable', '社会'],
  ], '', ['fair', 'equity', 'justice'], '←fair A2 + -ness，A2 继承；家族 equity 公平、justice 正义');

  W('faithful', 'adjective', '/ˈfeɪθfl/', 'B1', ['CET4'], '忠实的', 'Loyal and able to be trusted.', [
    ['忠实的', 'Loyal and able to be trusted.', '忠诚可信的。', 'faithful to 对…忠诚。', 'They are faithful friends.', '他们是忠实的朋友。', ['faithful to'], ['loyal'], 'adjective', '定语/表语', '家庭'],
  ], '', ['faith', 'loyal'], '←faith B1 信仰 + -ful，B1 继承；家族 loyal 忠诚的（最常用）');

  W('falcon', 'noun', '/ˈfɔːlkən/', '', [], '猎鹰', 'A bird that hunts other birds and animals.', [
    ['猎鹰', 'A bird that hunts other birds and animals.', '捕食鸟兽的鸟。', '可数。', 'The falcon dived at its prey.', '猎鹰扑向猎物。', [], ['hawk'], 'noun', 'countable', '自然'],
  ], 'falcons', [], '拉丁 falco——无库内派生根；近义 hawk 鹰。分级留空');

  W('fall back', 'verb', '/ˌfɔːl ˈbæk/', '', [], '退却；倒下', 'To move back when forced to.', [
    ['退却；倒下', 'To move back when forced to.', '被迫后退。', '不及物短语，军事常用。', 'The troops fell back at night.', '部队夜间后撤了。', [], ['retreat'], 'verb', '不及物', '军事'],
  ], '', ['retreat'], 'fall 倒 + back 回；近义 retreat 撤退。短语分级留空').phrase = true;

  W('fall back on', 'verb', '/ˌfɔːl ˈbæk ɒn/', '', [], '求助于；依赖', 'To use something when nothing else works.', [
    ['求助于；依赖', 'To use something when nothing else works.', '别无他法时动用某物。', '及物短语。', 'We fell back on our savings.', '我们动用了积蓄。', [], ['resort'], 'verb', '及物', '通用'],
  ], '', ['resort'], 'fall back 退回 + on 到…上；近义 resort 诉诸（resort to 求助）。短语分级留空').phrase = true;

  W('fall behind', 'verb', '/ˌfɔːl bɪˈhaɪnd/', '', [], '落后', 'To fail to keep level with others.', [
    ['落后', 'To fail to keep level with others.', '没能跟上别人。', '不及物短语。', 'He fell behind in maths.', '他数学掉队了。', [], ['lag'], 'verb', '不及物', '教育'],
  ], '', ['lag'], 'fall 掉 + behind 在后面；近义 lag 落后。短语分级留空').phrase = true;

  W('fall due', 'verb', '/ˌfɔːl ˈdjuː/', '', [], '到期', 'To reach the time to be paid or done.', [
    ['到期', 'To reach the time to be paid or done.', '到了该付或该做的时点。', '不及物短语，多指款项。', 'The rent falls due monthly.', '房租按月到期。', [], ['mature'], 'verb', '不及物', '商务'],
  ], '', ['mature'], 'fall 到来 + due 到期的；近义 mature 到期（票据成熟）。短语分级留空').phrase = true;

  W('fallacy', 'noun', '/ˈfæləsi/', '', [], '谬论', 'A false belief or wrong reasoning.', [
    ['谬论', 'A false belief or wrong reasoning.', '错误的信念或推理。', '可数。', 'It is a fallacy to judge by looks.', '以貌取人是谬见。', [], ['myth', 'superstition'], 'noun', 'countable', '书面'],
  ], 'fallacies', ['myth', 'superstition'], 'fall 掉落 + -acy——假切分（与 fall 无关，拉丁 fallacia 欺骗），故留空；家族 myth 谬传、superstition 迷信');

  W('falling', 'verb/adjective', '/ˈfɔːlɪŋ/', 'A1', [], '掉落；下落的', 'Coming down, or growing less.', [
    ['掉落；下落的', 'Coming down, or growing less.', '落下来，或变少。', '动词分词或形容词。', 'Falling leaves covered the path.', '落叶盖满了小路。', [], ['downward'], 'verb/adjective', 'null', '自然'],
  ], '', ['fall'], '←fall A1 + -ing，A1 继承；近义 downward 向下的');

  W('falsehood', 'noun', '/ˈfɔːlshʊd/', 'A2', ['CET4'], '谎言；虚假', 'A lie, or the state of being untrue.', [
    ['谎言；虚假', 'A lie, or the state of being untrue.', '谎话，或不真实的状态。', '可数或不可数。', 'The story is full of falsehood.', '这故事满是谎言。', [], ['fiction', 'lie'], 'noun', 'uncountable/countable', '社会'],
  ], 'falsehoods', ['false', 'lie'], '←false A2 假的 + -hood，A2 继承；家族 lie 谎言（最常用），近义 fiction 虚构');

  W('falsify', 'verb', '/ˈfɔːlsɪfaɪ/', 'A2', [], '伪造；篡改', 'To change records to cheat.', [
    ['伪造；篡改', 'To change records to cheat.', '改动记录以作弊。', '及物。', 'He falsified the accounts.', '他伪造了账目。', [], ['doctor', 'manipulate'], 'verb', '及物', '法律'],
  ], 'falsifies~falsified~falsified~falsifying', ['false', 'doctor'], '←false A2 + -ify（e→ify，同 beautify），A2 继承；家族 doctor 篡改（单据），近义 manipulate 操纵');

  W('falter', 'verb', '/ˈfɔːltə(r)/', '', [], '踌躇；衰弱', 'To lose strength or confidence.', [
    ['踌躇；衰弱', 'To lose strength or confidence.', '失去力气或信心。', '不及物。', 'Her voice faltered.', '她的声音发颤了。', [], ['stumble'], 'verb', '不及物', '通用'],
  ], 'falters~faltered~faltered~faltering', ['stumble'], '疑为 fault 的变体——词根不可见，故留空；家族 stumble 蹒跚（结巴）');

  W('familiarity', 'noun', '/fəˌmɪliˈærəti/', 'A2', ['CET4'], '熟悉', 'Good knowledge of something.', [
    ['熟悉', 'Good knowledge of something.', '对某事的了解。', '不可数：familiarity with。', 'His familiarity with cars helped.', '他懂车，帮了忙。', ['familiarity with'], ['acquaintance'], 'noun', 'uncountable', '通用'],
  ], '', ['familiar'], '←familiar A2 熟悉的 + -ity，A2 继承；近义 acquaintance 相识（泛泛之交）');

  W('familiarize', 'verb', '/fəˈmɪliəraɪz/', 'A2', [], '使熟悉', 'To teach someone about something.', [
    ['使熟悉', 'To teach someone about something.', '教某人了解某事。', '及物：familiarize with。', 'The course familiarized us with tools.', '课程让我们熟悉了工具。', ['familiarize with'], ['acquaint'], 'verb', '及物', '教育'],
  ], 'familiarizes~familiarized~familiarized~familiarizing', ['familiar'], '←familiar A2 + -ize，A2 继承；近义 acquaint 使认识');

  W('family name', 'noun', '/ˈfæməli neɪm/', '', [], '姓', 'The name shared by a family; surname.', [
    ['姓', 'The name shared by a family; surname.', '家族共用的名字；姓氏。', '可数。', 'Her family name is Wang.', '她姓王。', [], ['maiden', 'surname'], 'noun', 'countable', '家庭'],
  ], '', ['surname'], 'family 家庭 + name 名；家族 surname 姓（最常用），近义 maiden 娘家姓。短语分级留空').phrase = true;

  W('famous', 'adjective', '/ˈfeɪməs/', 'B1', ['CET4'], '著名的', 'Known by many people.', [
    ['著名的', 'Known by many people.', '很多人知道的。', 'be famous for 因…出名。', 'The city is famous for tea.', '这座城市以茶闻名。', ['famous for'], ['household', 'notorious', 'prominent', 'well-known'], 'adjective', '定语/表语', '文化'],
  ], '', ['fame', 'prominent', 'well-known'], '←fame B1 名声 + -ous（e→ous，同 nervous），B1 继承；家族 prominent 杰出的、well-known 众所周知的，近义 household 家喻户晓的、notorious 臭名昭著的');

  W('fanaticism', 'noun', '/fəˈnætɪsɪzəm/', '', [], '狂热', 'Extreme and unreasonable enthusiasm.', [
    ['狂热', 'Extreme and unreasonable enthusiasm.', '极端不理智的热情。', '不可数，贬义。', 'Religious fanaticism caused wars.', '宗教狂热引发了战争。', [], ['zeal'], 'noun', 'uncountable', '宗教'],
  ], '', [], 'fanatic 狂热者（本词库未收）+ -ism——词根不可见，故留空；近义 zeal 热忱。分级留空');

  W('fantastic', 'adjective', '/fænˈtæstɪk/', 'B1', ['CET4'], '极好的；奇异的', 'Very good, or strange like fantasy.', [
    ['极好的；奇异的', 'Very good, or strange like fantasy.', '非常好的，或如幻想般奇异的。', '口语常用表赞叹。', 'We had a fantastic time.', '我们玩得非常开心。', [], ['fabulous', 'incredible'], 'adjective', '定语/表语', '情感'],
  ], '', ['fantasy'], '←fantasy B1 幻想 + -tic（y→tic，同 ecstatic），B1 继承；近义 fabulous 极好的、incredible 难以置信的');

  W('far from', 'adverb', '/ˈfɑː frɒm/', '', [], '远非；一点也不', 'Not at all; the opposite of.', [
    ['远非；一点也不', 'Not at all; the opposite of.', '根本不，正相反。', '副词短语：far from easy 一点不容易。', 'The task was far from easy.', '这活一点也不容易。', [], ['nowhere'], 'adverb', 'null', '通用'],
  ], '', ['nowhere'], 'far 远 + from 从；近义 nowhere 毫不（nowhere near 差得远）。短语分级留空').phrase = true;

  W('far-reaching', 'adjective', '/ˌfɑː ˈriːtʃɪŋ/', 'A1', [], '深远的', 'Affecting many things over time.', [
    ['深远的', 'Affecting many things over time.', '长时间影响很多事物的。', '复合形容词。', 'The decision had far-reaching effects.', '决定影响深远。', [], ['widespread'], 'adjective', '定语', '社会'],
  ], '', ['far', 'reach'], 'far 远 + reaching，取首成分级 A1；近义 widespread 广泛的');

  W('farce', 'noun', '/fɑːs/', '', [], '闹剧；笑柄', 'A funny play, or a ridiculous event.', [
    ['闹剧；笑柄', 'A funny play, or a ridiculous event.', '滑稽戏，或荒唐事。', '可数。', 'The trial turned into a farce.', '审判变成了一场闹剧。', [], ['absurdity', 'joke'], 'noun', 'countable', '文化'],
  ], 'farces', [], '拉丁 farcire（填充）——无库内派生根；近义 absurdity 荒谬、joke 笑话。分级留空');

  W('farmer', 'noun', '/ˈfɑːmə(r)/', 'A1', ['CET4'], '农民', 'A person who owns or works on a farm.', [
    ['农民', 'A person who owns or works on a farm.', '拥有农场或在农场干活的人。', '可数。', 'The farmer grows wheat.', '农民种小麦。', [], ['peasant'], 'noun', 'countable', '职业'],
  ], 'farmers', ['farm', 'peasant'], '←farm A1 农场 + -er（表人），A1 继承；家族 peasant 佃农');

  W('farming', 'noun', '/ˈfɑːmɪŋ/', 'A1', ['CET4'], 'farming；农业', 'The work of running a farm.', [
    ['farming；农业', 'The work of running a farm.', '经营农场的工作。', '不可数。', 'Farming feeds the nation.', '农业养活了国家。', [], ['agriculture'], 'noun', 'uncountable', '职业'],
  ], '', ['farm'], '←farm A1 + -ing，A1 继承；近义 agriculture 农业（大农业）');

  W('fashionable', 'adjective', '/ˈfæʃnəbl/', 'A2', ['CET4'], '流行的；时髦的', 'Popular at the present time.', [
    ['流行的；时髦的', 'Popular at the present time.', '眼下流行的。', 'a fashionable dress 时装。', 'Long coats are fashionable again.', '长大衣又流行了。', [], ['cool', 'in'], 'adjective', '定语/表语', '文化'],
  ], '', ['fashion'], '←fashion A2 时尚 + -able，A2 继承；近义 cool 酷的、in 时髦的（in 义）');

  W('fast asleep', 'adjective', '/ˌfɑːst əˈsliːp/', '', [], '熟睡的', 'Sleeping deeply.', [
    ['熟睡的', 'Sleeping deeply.', '睡得很沉。', '表语形容词短语。', 'The baby is fast asleep.', '宝宝睡熟了。', [], ['sound'], 'adjective', '表语', '健康'],
  ], '', ['sound'], 'fast 紧 + asleep 睡着；近义 sound 酣睡的（sound sleep 酣睡）。短语分级留空').phrase = true;

  W('fast train', 'noun', '/ˌfɑːst ˈtreɪn/', '', [], '快车', 'A train that does not stop often.', [
    ['快车', 'A train that does not stop often.', '停站少的火车。', '可数。', 'We took a fast train.', '我们坐了快车。', [], ['express'], 'noun', 'countable', '交通'],
  ], '', ['express'], 'fast 快的 + train 火车；近义 express 特快（列车）。短语分级留空').phrase = true;

  W('fastener', 'noun', '/ˈfɑːsnə(r)/', 'B1', [], '扣件；系物', 'Something that joins two things.', [
    ['扣件；系物', 'Something that joins two things.', '把两样东西连起来的物件。', '可数。', 'The fastener on the bag broke.', '包上的扣子坏了。', [], ['clip', 'nut', 'screw', 'zip'], 'noun', 'countable', '家居'],
  ], 'fasteners', ['fasten', 'clip'], '←fasten B1 系紧 + -er（表物），B1 继承；家族 clip 夹子，近义 nut 螺母、screw 螺丝、zip 拉链');

  W('fastening', 'noun', '/ˈfɑːsnɪŋ/', 'B1', [], '系紧；扣件', 'The act of joining, or the thing used.', [
    ['系紧；扣件', 'The act of joining, or the thing used.', '系紧的动作，或用的物件。', '可数或不可数。', 'Check all the fastenings.', '检查所有扣件。', [], ['lock'], 'noun', 'uncountable/countable', '家居'],
  ], 'fastenings', ['fasten'], '←fasten B1 + -ing，B1 继承；近义 lock 锁');

  W('fastidious', 'adjective', '/fæˈstɪdiəs/', '', [], '挑剔的；一丝不苟的', 'Hard to please; loving every detail right.', [
    ['挑剔的；一丝不苟的', 'Hard to please; loving every detail right.', '难伺候的、事事求细的。', '较文。', 'She is fastidious about food.', '她对吃很挑剔。', [], ['meticulous'], 'adjective', '定语/表语', '性格'],
  ], '', [], 'fast 快 + -idious——假切分（与 fast 无关，拉丁 fastidium 厌恶），故留空；近义 meticulous 一丝不苟的');

  W('fatherland', 'noun', '/ˈfɑːðəlænd/', 'A1', [], '祖国', 'The country where you were born.', [
    ['祖国', 'The country where you were born.', '出生的国家。', '可数。', 'He loves his fatherland.', '他热爱祖国。', [], ['homeland'], 'noun', 'countable', '政治'],
  ], 'fatherlands', ['father', 'land'], 'father 父亲 + land 国土，取首成分级 A1；近义 homeland 祖国');

  W('fathom', 'verb', '/ˈfæðəm/', '', [], '理解；测水深', 'To understand, or measure sea depth.', [
    ['理解；测水深', 'To understand, or measure sea depth.', '弄懂，或量海水深度。', '及物，较文；名词义为长度单位「浔」。', 'I cannot fathom his motives.', '我猜不透他的动机。', [], ['penetrate'], 'verb', '及物', '书面'],
  ], 'fathoms~fathomed~fathomed~fathoming', [], '古英语 faethm（张开双臂）——无库内派生根；近义 penetrate 看透。分级留空');

  W('faucet', 'noun', '/ˈfɔːsɪt/', '', [], '水龙头', 'A tap that controls water flow.', [
    ['水龙头', 'A tap that controls water flow.', '控制水流的开关。', '可数，美式；英式用 tap。', 'Turn off the faucet.', '关掉水龙头。', [], ['tap'], 'noun', 'countable', '家居'],
  ], 'faucets', ['tap'], '古法语 fausset——无库内派生根；家族 tap 水龙头（英式）。分级留空');

  W('faulty', 'adjective', '/ˈfɔːlti/', 'B1', ['CET4'], '有毛病的', 'Not working right; with faults.', [
    ['有毛病的', 'Not working right; with faults.', '运转不正常、有毛病的。', 'faulty goods 次品。', 'The machine is faulty.', '这机器有毛病。', [], ['wrong'], 'adjective', '定语/表语', '工业'],
  ], '', ['fault'], '←fault B1 故障 + -y，B1 继承；近义 wrong 坏的（出问题的）');

  W('fauna', 'noun', '/ˈfɔːnə/', '', [], '动物群', 'All the animals of an area.', [
    ['动物群', 'All the animals of an area.', '某地区所有的动物。', '不可数，与 flora 植物群相对。', 'The island has rich fauna.', '岛上动物丰富。', [], ['wildlife'], 'noun', 'uncountable', '自然'],
  ], '', ['wildlife'], '拉丁 Fauna（畜牧女神）——无库内派生根；家族 wildlife 野生动物。分级留空');

  W('favourable', 'adjective', '/ˈfeɪvrəbl/', 'B1', [], '有利的；赞成的', 'Good for what you want, or showing approval.', [
    ['有利的；赞成的', 'Good for what you want, or showing approval.', '对所求有利的，或表示赞成的。', 'favourable conditions 有利条件。', 'The weather is favourable.', '天气有利。', [], ['conducive', 'hospitable'], 'adjective', '定语/表语', '通用'],
  ], '', ['favor', 'conducive'], '←favor B1（-our/-or 变体拼写，同 colour），B1 继承；家族 conducive 有利的，近义 hospitable 宜人的');

  W('favourite', 'adjective/noun', '/ˈfeɪvrɪt/', 'B1', [], '最喜欢的；宠儿', 'Liked best, or the liked person or thing.', [
    ['最喜欢的；宠儿', 'Liked best, or the liked person or thing.', '最喜欢的，或受宠的人或物。', '可数（宠儿）或形容词。', 'Blue is my favourite colour.', '蓝色是我最喜欢的颜色。', [], ['darling', 'pet', 'popular'], 'adjective/noun', 'null', '情感'],
  ], 'favourites', ['favor'], '←favor B1（-our 变体），B1 继承；近义 darling 宠儿、pet 偏爱之物、popular 受欢迎的');

  W('fearful', 'adjective', '/ˈfɪəfl/', 'A2', ['CET4'], '害怕的；可怕的', 'Afraid, or causing fear.', [
    ['害怕的；可怕的', 'Afraid, or causing fear.', '害怕的，或让人害怕的。', 'be fearful of 害怕。', 'The child was fearful of dogs.', '孩子怕狗。', ['fearful of'], ['timid'], 'adjective', '定语/表语', '情感'],
  ], '', ['fear', 'timid'], '←fear A2 害怕 + -ful，A2 继承；家族 timid 胆小的');

  W('fearless', 'adjective', '/ˈfɪələs/', 'A2', [], '无畏的', 'Not afraid.', [
    ['无畏的', 'Not afraid.', '不害怕的。', 'a fearless fighter 无畏的战士。', 'The fearless boy climbed up.', '无畏的男孩爬了上去。', [], ['hardy'], 'adjective', '定语', '性格'],
  ], '', ['fear'], '←fear A2 + -less（无…的，同 defenceless），A2 继承；近义 hardy 勇敢的（坚毅的）');

  W('features', 'noun', '/ˈfiːtʃəz/', 'B1', [], '面貌；特征（复数）', 'Parts of the face, or special qualities; plural of feature.', [
    ['面貌；特征（复数）', 'Parts of the face, or special qualities; plural of feature.', '脸的部位，或事物的特点；feature 的复数。', '复数。', 'His features look tired.', '他面容疲倦。', [], ['mug'], 'noun', 'countable', '外貌'],
  ], '', ['feature'], '←feature B1 + -s，B1 继承；近义 mug 脸（俚语）');

  W('feces', 'noun', '/ˈfiːsiːz/', '', [], '粪便（美式）', 'Waste passed out of the body; American spelling.', [
    ['粪便（美式）', 'Waste passed out of the body; American spelling.', '身体排出的废物；美式拼写。', '不可数，正式；英式拼 faeces。', 'The sample contained feces.', '样本含粪便。', [], ['stool'], 'noun', 'uncountable', '健康'],
  ], '', ['stool'], 'faeces 的美式拼写——对应词形不在库，无等级可继承，故留空；家族 stool 粪便（医用）');

  W('fed up', 'adjective', '/ˌfed ˈʌp/', '', [], '厌倦的', 'Bored or tired of something.', [
    ['厌倦的', 'Bored or tired of something.', '对某事厌烦。', '表语形容词短语：be fed up with。', 'I am fed up with waiting.', '我等得不耐烦了。', ['fed up with'], ['weary'], 'adjective', '表语', '情感'],
  ], '', ['weary'], 'feed 喂 + up 满（喂饱了→腻了）；近义 weary 厌倦的。短语分级留空').phrase = true;

  W('feel for', 'verb', '/ˌfiːl ˈfɔː(r)/', '', [], '同情', 'To feel pity for someone.', [
    ['同情', 'To feel pity for someone.', '为某人感到难过。', '及物短语。', 'I feel for the victims.', '我同情受害者。', [], ['pity'], 'verb', '及物', '情感'],
  ], '', ['pity'], 'feel 感到 + for 为了；近义 pity 怜悯。短语分级留空').phrase = true;

  W('feel like', 'verb', '/ˌfiːl ˈlaɪk/', '', [], '想；想要', 'To want to do or have something.', [
    ['想；想要', 'To want to do or have something.', '想做或想要某事某物。', '及物短语：feel like doing。', 'I feel like a walk.', '我想散散步。', ['feel like doing'], ['fancy'], 'verb', '及物', '通用'],
  ], '', ['fancy'], 'feel 感到 + like 像（感觉像→想要）；近义 fancy 想要（英式）。短语分级留空').phrase = true;

  W('feeling', 'noun', '/ˈfiːlɪŋ/', 'A1', ['CET4'], '感觉；感情', 'What you feel in body or heart.', [
    ['感觉；感情', 'What you feel in body or heart.', '身体或内心的感受。', '可数或不可数。', 'I have a good feeling about it.', '我对此感觉很好。', [], ['emotion', 'intuition', 'sensation', 'sense', 'sentiment'], 'noun', 'uncountable/countable', '情感'],
  ], '', ['feel', 'emotion', 'sensation', 'sense', 'sentiment'], '←feel A1 + -ing，A1 继承；家族 emotion 情绪、sensation 知觉、sense 感觉、sentiment 情怀，近义 intuition 直觉');

  W('feelings', 'noun', '/ˈfiːlɪŋz/', 'A1', [], '感情（复数）', 'Emotions; plural of feeling.', [
    ['感情（复数）', 'Emotions; plural of feeling.', '情绪；feeling 的复数。', '复数：hurt feelings 伤害感情。', 'You hurt my feelings.', '你伤了我的心。', ['hurt feelings'], ['heart'], 'noun', 'countable', '情感'],
  ], '', ['feeling'], '←feeling（本批新词 A1）+ -s，A1 继承；近义 heart 心（感情）');

  W('fees', 'noun', '/fiːz/', 'A2', [], '费用', 'Money paid for a service.', [
    ['费用', 'Money paid for a service.', '为服务付的钱。', '复数：school fees 学费。', 'School fees rose again.', '学费又涨了。', ['school fees'], ['tuition'], 'noun', 'countable', '商务'],
  ], '', ['fee', 'tuition'], '←fee A2 + -s，A2 继承；家族 tuition 学费');

  W('feet', 'noun', '/fiːt/', 'A1', [], '脚（复数）', 'Plural of foot.', [
    ['脚（复数）', 'Plural of foot.', 'foot 的复数。', '复数：on foot 步行。', 'Wash your feet before bed.', '睡前洗脚。', [], ['foot'], 'noun', 'countable', '健康'],
  ], '', ['foot'], 'foot A1 的不规则复数，A1 继承；近义 foot 脚（单数）');

  W('feign', 'verb', '/feɪn/', '', [], '假装', 'To pretend to feel or do something.', [
    ['假装', 'To pretend to feel or do something.', '假装有某种感受或做某事。', '及物，较文。', 'She feigned surprise.', '她假装惊讶。', [], ['pretend', 'simulate'], 'verb', '及物', '通用'],
  ], 'feigns~feigned~feigned~feigning', ['pretend'], '古法语 feindre——无库内派生根；家族 pretend 假装（最常用），近义 simulate 模仿');

  W('fellowship', 'noun', '/ˈfeləʊʃɪp/', 'B1', ['CET4'], '友谊；奖学金', 'Friendly feeling, or money for study.', [
    ['友谊；奖学金', 'Friendly feeling, or money for study.', '友情，或求学资助金。', '不可数或可数。', 'The college offered him a fellowship.', '学院给了他奖学金。', [], ['solidarity'], 'noun', 'uncountable/countable', '教育'],
  ], 'fellowships', ['fellow'], '←fellow B1 同伴 + -ship，B1 继承；近义 solidarity 团结（情谊）');

  W('females', 'noun', '/ˈfiːmeɪlz/', 'A2', [], '女性（复数）', 'Women or female animals; plural of female.', [
    ['女性（复数）', 'Women or female animals; plural of female.', '女人或雌性动物；female 的复数。', '复数。', 'The study covered 200 females.', '研究覆盖了200名女性。', [], ['woman'], 'noun', 'countable', '社会'],
  ], '', ['female'], '←female A2 + -s，A2 继承；近义 woman 女人');

  W('fen', 'noun', '/fen/', '', [], '沼泽', 'Low wet land.', [
    ['沼泽', 'Low wet land.', '低洼潮湿的地。', '可数或不可数。', 'Ducks live in the fen.', '鸭子住在沼泽里。', [], ['marsh'], 'noun', 'countable', '自然'],
  ], 'fens', [], '古英语 fenn——无库内派生根；近义 marsh 沼泽。分级留空');

})(typeof window !== 'undefined' ? window : globalThis);
