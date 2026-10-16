/* data/words/cet/author_d4.js · 手敲词条 D（四）：difference ~ discolour（0 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_d4.js 必须在 _cet_helper.js 之后加载');

  W('difference', 'noun', '/ˈdɪfrəns/', 'B1', ['CET4'], '差别；分歧', 'The way in which two or more things are not the same, or a disagreement.', [
    ['差别；差异', 'The way in which two or more things are not the same.', '两个或多个事物不相同之处。', '可数：a difference between。', 'There is a big difference between the two plans.', '两个方案有很大差别。', ['a difference between'], ['contrast', 'gap', 'margin'], 'noun', 'countable', '通用'],
    ['分歧；争执', 'A disagreement between people.', '人们之间的意见不合。', '可数：have a difference。', 'They patched up their difference.', '他们弥合了分歧。', ['settle differences'], [], 'noun', 'countable', '社会'],
  ], 'differences', ['contrast', 'gap', 'margin'], '←differ B1 + -ence，B1 继承；家族 contrast 对比、gap 差距、margin 差额（均可表差异量）');

  W('different', 'adjective', '/ˈdɪfrənt/', 'B1', ['CET4'], '不同的；各异的', 'Not the same as another person or thing.', [
    ['不同的；各异的', 'Not the same as another person or thing.', '与他人或他物不一样的。', '常用 be different from。', 'Their opinions are different from mine.', '他们的意见和我的不同。', ['different from'], ['distinct', 'diverse', 'other', 'separate', 'various'], 'adjective', '定语/表语', '通用'],
  ], '', ['distinct', 'diverse', 'various'], '←differ B1 + -ent，B1 继承；家族 distinct 明显不同的、diverse 多样的、various 各种的，近义 other 另外的、separate 分开的');

  W('differently', 'adverb', '/ˈdɪfrəntli/', 'B1', [], '不同地；以不同方式', 'In a way that is not the same.', [
    ['不同地；以不同方式', 'In a way that is not the same.', '以不相同的方式。', '作状语：act differently。', 'She treated them differently.', '她区别对待他们。', [], ['otherwise'], 'adverb', 'null', '通用'],
  ], '', ['otherwise'], '←differ B1 + -ent + -ly，B1 继承；家族 otherwise 否则、以别的方式（B1）');

  W('difficulty', 'noun', '/ˈdɪfɪkəlti/', 'A1', ['CET4'], '困难；难题', 'The state of being hard to do, or a thing that is hard to deal with.', [
    ['困难；艰难', 'The state of being hard to do or deal with.', '难做、难应付的状态。', '不可数或可数：have difficulty (in) doing。', 'He had difficulty finding a job.', '他找工作有困难。', ['have difficulty in'], ['hurdle', 'obstacle', 'problem', 'rub', 'strait', 'trouble'], 'noun', 'uncountable/countable', '通用'],
    ['难题；难事', 'A thing that is hard to deal with.', '难以处理的事情。', '可数：the difficulties of the task。', 'The technical difficulties were endless.', '技术难题没完没了。', [], [], 'noun', 'countable', '通用'],
  ], 'difficulties', ['problem', 'strait'], '←difficult A1 + -y，A1 继承；家族 problem 问题、strait 困境（常用复数 straits），近义 hurdle 难关、obstacle 障碍、rub 小麻烦、trouble 麻烦');

  W('digestion', 'noun', '/daɪˈdʒestʃn/', 'B1', ['CET4'], '消化；消化能力', 'The process of breaking down food in the body, or the ability to do it.', [
    ['消化；消化能力', 'The process of breaking down food in the body, or the ability to do it.', '体内分解食物的过程，或消化能力。', '不可数。', 'Rich food is hard for digestion.', '油腻食物难以消化。', ['aid digestion'], ['metabolism'], 'noun', 'uncountable', '健康'],
  ], '', ['metabolism'], '←digest B1 + -ion，B1 继承；家族 metabolism 新陈代谢（体内化学过程总称）');

  W('digital', 'adjective', '/ˈdɪdʒɪtl/', 'B1', ['CET4'], '数字的；数码的', 'Storing or showing information as numbers, especially electronic signals.', [
    ['数字的；数码的', 'Storing or showing information as numbers, especially electronic signals.', '以数字形式存储或显示信息的，尤指电子信号。', '常见 digital camera（数码相机）。', 'The clock shows digital time.', '这个钟显示数字时间。', ['digital camera'], ['numerical', 'online', 'virtual'], 'adjective', '定语', '科技'],
  ], '', ['online'], '←digit B1 数字 + -al，B1 继承；家族 online 在线的，近义 numerical 数值的、virtual 虚拟的');

  W('digitize', 'verb', '/ˈdɪdʒɪtaɪz/', 'B1', [], '数字化；数模转换', 'To change information into a digital form.', [
    ['数字化；数模转换', 'To change information into a digital form.', '把信息转换成数字形式。', '及物：digitize the records。', 'The library digitized its old maps.', '图书馆把旧地图数字化了。', [], ['scan'], 'verb', '及物', '科技'],
  ], 'digitizes~digitized~digitized~digitizing', ['digit'], '←digit B1 + -ize（使……化），B1 继承；近义 scan 扫描（用设备读取图像）');

  W('digression', 'noun', '/daɪˈɡreʃn/', '', [], '离题；扯开', 'A temporary departure from the main subject in speech or writing.', [
    ['离题；扯开', 'A temporary departure from the main subject in speech or writing.', '讲话或写作中暂时离开主题。', '可数：go on a digression。', 'The speech was full of digressions.', '演讲里尽是离题的话。', ['a brief digression'], ['excursion'], 'noun', 'countable', '书面'],
], 'digressions', ['digress'], 'digress 离题（本词库未收）+ -ion，故留空；近义 excursion 跑题（话题暂时岔开）。分级留空');

  W('dike', 'noun', '/daɪk/', '', [], '堤坝；沟渠', 'A wall or bank built to keep out water, or a ditch.', [
    ['堤坝；沟渠', 'A wall or bank built to keep out water, or a ditch.', '挡水的堤岸，或沟渠。', '可数，美式亦拼 dyke。', 'The dike held through the flood.', '洪水期间堤坝撑住了。', ['build a dike'], [], 'noun', 'countable', '自然'],
  ], 'dikes', ['dam'], '家族 dam 水坝（拦河蓄水，通用词）。分级留空');

  W('diligence', 'noun', '/ˈdɪlɪdʒəns/', 'B1', ['CET4'], '勤勉；用功', 'Careful and persistent work effort.', [
    ['勤勉；用功', 'Careful and persistent work effort.', '认真而持续的努力。', '不可数。', 'The report shows diligence and care.', '这份报告体现了勤勉与细心。', [], ['industry'], 'noun', 'uncountable', '教育'],
  ], '', ['industry'], '←diligent B1 + -ence，B1 继承；家族 industry 勤劳（不可数义）');

  W('diligently', 'adverb', '/ˈdɪlɪdʒəntli/', 'B1', [], '勤勉地；用功地', 'In a careful and hard-working way.', [
    ['勤勉地；用功地', 'In a careful and hard-working way.', '以认真努力的方式。', '作状语。', 'He diligently copied every note.', '他认真抄了每一页笔记。', [], ['hard'], 'adverb', 'null', '教育'],
  ], '', ['diligent'], '←diligent B1 + -ly，B1 继承；近义 hard 努力地（work hard）');

  W('dimensions', 'noun', '/daɪˈmenʃnz/', 'B1', [], '尺寸；大小（复数）', 'The measured size of something in length, width, and height.', [
    ['尺寸；大小（复数）', 'The measured size of something in length, width, and height.', '某物长宽高等测量大小。', '常用复数：the dimensions of。', 'What are the dimensions of the room?', '房间的尺寸是多少？', ['the dimensions of'], ['size'], 'noun', 'countable', '通用'],
  ], '', ['dimension'], '←dimension B1 + -s，B1 继承；近义 size 大小（最常用）');

  W('dimness', 'noun', '/ˈdɪmnəs/', 'B1', [], '昏暗；模糊', 'The state of being dim or not bright.', [
    ['昏暗；模糊', 'The state of being dim or not bright.', '昏暗、不亮的状态。', '不可数。', 'The dimness of the room made reading hard.', '屋里太暗，看书都难。', [], ['gloom'], 'noun', 'uncountable', '自然'],
  ], '', ['dim'], '←dim B1 + -ness，B1 继承；近义 gloom 昏暗（兼忧郁义）');

  W('din', 'noun', '/dɪn/', '', [], '喧闹声；嘈杂', 'A loud, continuous, unpleasant noise.', [
    ['喧闹声；嘈杂', 'A loud, continuous, unpleasant noise.', '持续大声的刺耳噪音。', '不可数或可数：the din of。', 'The din of traffic kept them awake.', '车流的喧闹吵得他们睡不着。', ['a din of'], ['noise'], 'noun', 'uncountable', '通用'],
  ], '', ['noise'], '家族 noise 噪声（最常用、可数）。分级留空');

  W('diner', 'noun', '/ˈdaɪnə(r)/', 'B1', ['CET4'], '（路边）小餐馆', 'A small restaurant where simple meals are served.', [
    ['（路边）小餐馆', 'A small restaurant where simple meals are served.', '供应简餐的小饭馆。', '可数，美式常用。', 'We ate at a roadside diner.', '我们在路边小餐馆吃的饭。', [], ['restaurant'], 'noun', 'countable', '饮食'],
  ], 'diners', ['restaurant'], '←dine B1 用餐 + -er（表场所），B1 继承；家族 restaurant 餐馆（通用）');

  W('diplomacy', 'noun', '/dɪˈpləʊməsi/', 'B1', ['CET4'], '外交；外交手腕', 'The management of relations between countries, or skill in dealing with people.', [
    ['外交；外交手腕', 'The management of relations between countries, or skill in dealing with people.', '国家间关系的处理，或与人周旋的技巧。', '不可数。', 'The crisis was resolved by quiet diplomacy.', '危机经幕后斡旋化解。', ['diplomatic skills'], ['tact'], 'noun', 'uncountable', '政治'],
  ], '', ['tact'], '←diploma B1（词形可见）+ -cy，B1 继承；近义 tact 圆通（人际分寸感）');

  W('diplomatic', 'adjective', '/ˌdɪpləˈmætɪk/', 'B2', ['CET4'], '外交的；得体的', 'Relating to dealings between countries, or tactful with people.', [
    ['外交的；得体的', 'Relating to dealings between countries, or showing skill in dealing with people.', '与国家交往有关的，或处事得体的。', '常见 diplomatic relations（外交关系）。', 'She gave a diplomatic reply.', '她给了一个委婉得体的答复。', ['diplomatic relations'], ['foreign'], 'adjective', '定语', '政治'],
  ], '', ['diplomat'], '←diplomat B2 + -ic，B2 继承；近义 foreign 外国的（foreign service 外交服务）');

  W('direction', 'noun', '/dəˈrekʃn/', 'A2', ['CET4'], '方向；指示', 'The way in which someone moves, or an official order about what to do.', [
    ['方向；方位', 'The way in which someone or something moves or is pointed.', '人或物移动、朝向的路线。', '可数或不可数：in the direction of。', 'They changed direction at the bridge.', '他们在桥边改变了方向。', ['in this direction'], ['bearing', 'heading', 'way'], 'noun', 'countable', '交通'],
    ['指示；指令', 'An official order about what to do.', '关于该做什么的正式指示。', '常用复数：directions。', 'Follow the directions on the packet.', '按包装上的说明操作。', ['follow directions'], [], 'noun', 'uncountable/countable', '通用'],
  ], 'directions', ['direct'], '←direct A2 + -ion，A2 继承；第一义近义 bearing 方位、heading 航向、way 方向');

  W('directive', 'noun', '/dəˈrektɪv/', 'A2', [], '指令；指示', 'An official order that says what must be done.', [
    ['指令；指示', 'An official order that says what must be done.', '规定必须做什么的正式命令。', '可数：issue a directive。', 'The EU issued a new directive.', '欧盟发布了一项新指令。', ['issue a directive'], ['mandate'], 'noun', 'countable', '法律'],
  ], 'directives', ['direct'], '←direct A2 + -ive（表物），A2 继承；近义 mandate 授权命令（授权范围内的指示）');

  W('directly', 'adverb', '/dəˈrektli/', 'A2', [], '直接地；径直地', 'With nothing in between; straight.', [
    ['直接地；径直地', 'With nothing in between; straight.', '中间没有间隔地；径直。', '作状语。', 'The road leads directly to the coast.', '这条路直通海岸。', ['directly above'], ['straight'], 'adverb', 'null', '通用'],
  ], '', ['direct'], '←direct A2 + -ly，A2 继承；近义 straight 一直（笔直地）');

  W('director', 'noun', '/dəˈrektə(r)/', 'A2', ['CET4'], '主任；导演；董事', 'A person who manages an organization, department, or film.', [
    ['主任；导演；董事', 'A person who manages an organization, department, or film.', '管理机构、部门或影片的人。', '可数：board of directors（董事会）。', 'She was appointed director of the museum.', '她被任命为博物馆馆长。', ['a board of directors'], ['dean'], 'noun', 'countable', '职业'],
  ], 'directors', ['dean'], '←direct A2 指挥 + -or（表人），A2 继承；近义 dean 院长（大学、学院）');

  W('dirty', 'adjective/verb', '/ˈdɜːti/', 'A2', ['CET4'], '脏的；弄脏', 'Not clean; to make something not clean.', [
    ['脏的；肮脏的', 'Covered with an unwanted substance; not clean.', '沾上污物的；不干净的。', '反义 clean。', 'Your shoes are dirty again.', '你的鞋又脏了。', ['dirty hands'], ['foul', 'soil'], 'adjective', '定语/表语', '家居'],
    ['弄脏', 'To make something dirty.', '把某物弄脏。', '及物。', 'Be careful not to dirty the carpet.', '小心别弄脏了地毯。', [], [], 'verb', '及物', '家居'],
  ], 'dirties~dirtied~dirtied~dirtying', ['soil'], '←dirt A2 污垢 + -y，A2 继承；家族 soil 弄脏、土壤，近义 foul 弄脏的（C1，含恶臭义）');

  W('disability', 'noun', '/ˌdɪsəˈbɪləti/', 'A1', ['CET4'], '残疾；障碍', 'A physical or mental condition that limits a person movements or activities.', [
    ['残疾；障碍', 'A physical or mental condition that limits a person movements or activities.', '限制人行动或活动的身体、精神状况。', '可数或不可数。', 'The law protects people with disability.', '法律保护残障人士。', ['a severe disability'], ['handicap'], 'noun', 'uncountable/countable', '健康'],
  ], 'disabilities', ['ability'], '←ability A1 能力 + dis-（反向），A1 继承；近义 handicap 障碍（旧式用语，今多避免用于人）');

  W('disadvantage', 'noun', '/ˌdɪsədˈvɑːntɪdʒ/', 'A2', [], '不利；劣势', 'A condition that makes success harder.', [
    ['不利；劣势', 'A condition that makes success harder.', '使成功更困难的状况。', '可数：to the disadvantage of。', 'His height was an advantage, not a disadvantage.', '他的身高是优势不是劣势。', ['at a disadvantage'], ['drawback', 'handicap', 'minus'], 'noun', 'countable', '通用'],
  ], 'disadvantages', ['advantage', 'drawback', 'handicap'], '←advantage A2 + dis-（反向），A2 继承；家族 drawback 缺点、handicap 障碍，近义 minus 不利因素');

  W('disagreement', 'noun', '/ˌdɪsəˈɡriːmənt/', 'A2', ['CET4'], '分歧；不一致', 'A lack of agreement between people.', [
    ['分歧；不一致', 'A lack of agreement between people.', '人们之间意见不一致。', '可数或不可数：a disagreement over。', 'They had a disagreement over money.', '他们在钱上起了争执。', ['a disagreement between'], ['dissent', 'odds'], 'noun', 'uncountable/countable', '社会'],
  ], 'disagreements', ['dissent'], '←disagree A2 + -ment，A2 继承；家族 dissent 异议（正式、公开反对），近义 odds 分歧（at odds 不和）');

  W('disastrous', 'adjective', '/dɪˈzɑːstrəs/', 'A2', ['CET4'], '灾难性的；极糟的', 'Causing a lot of damage or very bad results.', [
    ['灾难性的；极糟的', 'Causing a lot of damage or very bad results.', '造成巨大损失或极坏结果的。', '常见 disastrous mistake/failure。', 'The launch was a disastrous failure.', '这次发射是灾难性的失败。', ['a disastrous effect'], ['fatal'], 'adjective', '定语', '通用'],
  ], '', ['disaster'], '←disaster A2 + -ous，A2 继承；近义 fatal 致命的（导致死亡或失败）');

  W('disband', 'verb', '/dɪsˈbænd/', 'A2', [], '解散；拆散', 'To break up a group or organization.', [
    ['解散；拆散', 'To break up a group or organization.', '解散团体或组织。', '不及物或及物。', 'The band decided to disband.', '乐队决定解散了。', ['disband the unit'], ['dismiss', 'dissolve'], 'verb', '及物', '社会'],
  ], 'disbands~disbanded~disbanded~disbanding', ['dissolve'], '←band A2 乐队、一伙 + dis-（散），A2 继承；家族 dissolve 解散（正式终止），近义 dismiss 解散（队伍）');

  W('disclaim', 'verb', '/dɪsˈkleɪm/', 'B1', [], '否认；拒绝承担责任', 'To say that you do not accept or are not responsible for something.', [
    ['否认；拒绝承担责任', 'To say that you do not accept or are not responsible for something.', '声明不接受或不对某事负责。', '及物：disclaim responsibility。', 'The firm disclaimed any knowledge of the leak.', '该公司否认知情泄密一事。', ['disclaim responsibility'], ['deny'], 'verb', '及物', '书面'],
  ], 'disclaims~disclaimed~disclaimed~disclaiming', ['claim'], '←claim B1 + dis-（否认责任），B1 继承；近义 deny 否认（最常用）');

  W('disclosure', 'noun', '/dɪsˈkləʊʒə(r)/', 'B2', ['CET6'], '透露；披露', 'The act of making secret information known.', [
    ['透露；披露', 'The act of making secret information known.', '把秘密信息公开出来的行为。', '可数或不可数：public disclosure。', 'The disclosure shocked the public.', '这一披露震惊了公众。', ['public disclosure'], ['leak'], 'noun', 'uncountable/countable', '书面'],
  ], 'disclosures', ['disclose'], '←disclose B2 + -ure（名词化），B2 继承；近义 leak 泄漏（未经许可流出）');

  W('discolour', 'verb', '/dɪsˈkʌlə(r)/', 'A1', [], '褪色；使变色', 'To lose colour, or to make something lose its colour.', [
    ['褪色；使变色', 'To lose colour, or to make something lose its colour.', '褪色，或使某物变色。', '不及物或及物，英式拼写；美式 discolor。', 'The sun discoloured the plastic.', '太阳把塑料晒褪色了。', [], ['yellow'], 'verb', '及物', '家居'],
  ], 'discolours~discoloured~discoloured~discolouring', ['color'], '←color A1（英式 colour 变体）+ dis-（去色），A1 继承；近义 yellow 变黄（泛黄褪色）');

  W('discounted', 'adjective', '/ˈdɪskaʊntɪd/', 'B1', [], '打折的；贴现的', 'Sold at less than the usual price.', [
    ['打折的；贴现的', 'Sold at less than the usual price.', '以低于平常价格出售的。', '常见 discounted price。', 'These tickets are heavily discounted.', '这些票折扣很大。', ['discounted rates'], ['off'], 'adjective', '定语', '商务'],
  ], '', ['discount'], '←discount B1 + -ed，B1 继承；近义 off 打折的（ten yuan off 减十元）');

  W('discouragement', 'noun', '/dɪsˈkʌrɪdʒmənt/', 'B1', [], '泄气；劝阻', 'The act of making someone less confident, or the feeling of being put off.', [
    ['泄气；劝阻', 'The act of making someone less confident, or the feeling of being put off.', '使人泄气的行为，或灰心的感觉。', '不可数或可数。', 'His discouragement showed in his work.', '他的沮丧表现在了工作中。', [], ['dismay'], 'noun', 'uncountable/countable', '通用'],
  ], 'discouragements', ['discourage'], '←discourage B1 + -ment，B1 继承；近义 dismay 沮丧（吃惊又失望）');

  W('discourteous', 'adjective', '/dɪsˈkɜːtiəs/', '', [], '无礼的；失礼的', 'Not showing politeness or respect.', [
    ['无礼的；失礼的', 'Not showing politeness or respect.', '不表示礼貌或尊重的。', '较 formal。', 'The reply was discourteous.', '这个答复很无礼。', ['a discourteous remark'], ['rude'], 'adjective', '定语/表语', '通用'],
], '', ['courteous'], '←courteous 有礼貌的（本词库无可靠分级）+ dis-（反向），故留空；近义 rude 粗鲁的（A2、常用）');

  W('discovered', 'adjective', '/dɪˈskʌvəd/', 'A2', [], '被发现的', 'Found or noticed for the first time.', [
    ['被发现的', 'Found or noticed for the first time.', '首次被找到或注意到的。', '分词形容词：newly discovered。', 'They studied the newly discovered species.', '他们研究了这个新发现的物种。', ['newly discovered'], ['found'], 'adjective', '定语', '科学'],
  ], '', ['discover'], '←discover A2 + -ed，A2 继承；近义 found 被发现的（find 的过去分词）');

  W('discovery', 'noun', '/dɪˈskʌvəri/', 'A2', ['CET4'], '发现；发觉', 'The act of finding something for the first time.', [
    ['发现；发觉', 'The act of finding something for the first time.', '首次找到某物的行为。', '可数或不可数：make a discovery。', 'The discovery changed medicine.', '这项发现改变了医学。', ['make a discovery'], ['find'], 'noun', 'countable', '科学'],
  ], 'discoveries', ['discover'], '←discover A2 + -y，A2 继承；近义 find 发现物（口语常用）');

  W('discredit', 'verb', '/dɪsˈkredɪt/', 'B1', [], '使失去信誉；败坏名声', 'To make people stop believing or trusting someone.', [
    ['使失去信誉；败坏名声', 'To make people stop believing or trusting someone.', '使人们不再相信或信任某人。', '及物：discredit a theory（否定理论）。', 'The scandal discredited the whole team.', '丑闻使整个团队名誉扫地。', ['discredit an idea'], ['reflect'], 'verb', '及物', '书面'],
  ], 'discredits~discredited~discredited~discrediting', ['credit'], '←credit B1 信用 + dis-（失去信任），B1 继承；近义 reflect 反映、招致（refs 镜像）');

  W('discretion', 'noun', '/dɪˈskreʃn/', 'B2', [], '谨慎；自行裁量', 'Careful judgement in speech and action, or the freedom to decide.', [
    ['谨慎；自行裁量', 'Careful judgement in speech and action, or the freedom to decide something.', '言行上的谨慎判断，或自行决定的自由。', '不可数：at the discretion of（由……酌定）。', 'Use your discretion when replying.', '回复时请自行斟酌。', ['at the discretion of'], ['tact'], 'noun', 'uncountable', '通用'],
  ], '', ['tact'], '←discreet B2 谨慎的（-eet/-et 音变），B2 继承；家族 tact 圆通（处事得体）');

  W('discussion', 'noun', '/dɪˈskʌʃn/', 'A2', ['CET4'], '讨论；商谈', 'The act of talking about something with other people.', [
    ['讨论；商谈', 'The act of talking about something with other people.', '与他人谈论某事的行为。', '可数或不可数：have a discussion。', 'We had a long discussion about the plan.', '我们对计划作了长时间讨论。', ['under discussion'], ['conference', 'debate', 'discourse', 'forum'], 'noun', 'uncountable/countable', '通用'],
  ], 'discussions', ['discourse', 'forum'], '←discuss A2 + -ion，A2 继承；家族 discourse 论述、forum 论坛，近义 conference 会议、debate 辩论');

  W('disdain', 'noun', '/dɪˈdeɪn/', '', [], '蔑视；鄙夷', 'The feeling that someone or something is not worth your respect.', [
    ['蔑视；鄙夷', 'The feeling that someone or something is not worth your respect.', '认为某人某事不值得尊重的感觉。', '不可数：look with disdain。', 'She regarded the offer with disdain.', '她轻蔑地看待这个提议。', ['look with disdain'], ['scorn'], 'noun', 'uncountable', '通用'],
  ], '', [], '近义 scorn 轻蔑（更强烈、更公开）。分级留空');

  W('disfigure', 'verb', '/dɪsˈfɪɡə(r)/', 'B1', [], '毁容；损害外观', 'To spoil the appearance of a person or thing.', [
    ['毁容；损害外观', 'To spoil the appearance of a person or thing.', '破坏人或物的外观。', '及物：badly disfigured。', 'The burn scarred and disfigured his hand.', '烧伤在他手上留下疤痕、毁了外观。', [], ['scar'], 'verb', '及物', '健康'],
  ], 'disfigures~disfigured~disfigured~disfiguring', ['figure'], '←figure B1 外形 + dis-（变坏），B1 继承；近义 scar 留疤（留下永久痕迹）');

  W('disgrace', 'noun/verb', '/dɪsˈɡreɪs/', 'B2', [], '耻辱；使丢脸', 'A loss of reputation, or to make someone feel shame.', [
    ['耻辱；丢脸', 'A loss of reputation, or a person who behaves shamefully.', '名誉丧失，或丢脸的人。', '不可数或可数：bring disgrace on。', 'The act brought disgrace on the family.', '这一行为给家族带来了耻辱。', ['in disgrace'], ['reproach', 'scandal', 'shame', 'stigma'], 'noun', 'uncountable/countable', '社会'],
    ['使丢脸；使受辱', 'To make someone feel shame.', '使某人感到羞耻。', '及物：disgrace yourself。', 'He disgraced himself at the banquet.', '他在宴会上丢了脸。', ['disgrace oneself'], [], 'verb', '及物', '社会'],
  ], 'disgraces~disgraced~disgraced~disgracing', ['scandal', 'stigma'], '←grace B2 体面 + dis-（失），B2 继承；家族 scandal 丑闻、stigma 耻辱标记，近义 reproach 责备、shame 羞耻');

  W('disgusting', 'adjective', '/dɪsˈɡʌstɪŋ/', 'B2', ['CET4'], '令人作呕的', 'Very unpleasant; making you feel sick.', [
    ['令人作呕的', 'Very unpleasant; making you feel sick.', '非常令人不快的、使人恶心的。', '较 informal。', 'The smell was disgusting.', '这气味真恶心。', ['disgusting behaviour'], ['gross'], 'adjective', '定语/表语', '通用'],
  ], '', ['disgust'], '←disgust B2 + -ing，B2 继承；近义 gross 恶心的（美式口语）');

  W('dish up', 'verb', '/ˌdɪʃ ˈʌp/', '', [], '端上（饭菜）；上菜', 'To put food onto plates ready to be eaten.', [
    ['端上（饭菜）；上菜', 'To put food onto plates ready to be eaten.', '把食物盛到盘里端上桌。', '不及物或及物：dish it up。', 'Mother dished up the stew.', '妈妈把炖菜盛了出来。', ['dish up the food'], ['serve'], 'verb', '及物', '饮食'],
  ], '', ['serve'], 'dish 盘 + up 起，把菜装盘端出；近义 serve 供应（上菜，最常用）。短语分级留空').phrase = true;

  W('dishearten', 'verb', '/dɪsˈhɑːtn/', 'A1', [], '使灰心；使丧失勇气', 'To make someone feel less confident or hopeful.', [
    ['使灰心；使丧失勇气', 'To make someone feel less confident or hopeful.', '使某人失去信心或希望。', '及物，常被动 be disheartened。', 'The repeated failures disheartened the team.', '一再的失败让团队灰心了。', ['be disheartened by'], ['depress', 'discourage', 'dismay'], 'verb', '及物', '通用'],
  ], 'disheartens~disheartened~disheartened~disheartening', ['discourage', 'dismay'], '←heart A1 心 + -en + dis-（去），A1 继承；家族 discourage 使泄气、dismay 使沮丧，近义 depress 使抑郁');

  W('dishonest', 'adjective', '/dɪsˈɒnɪst/', 'A2', [], '不诚实的', 'Not telling the truth; inclined to cheat.', [
    ['不诚实的', 'Not telling the truth; inclined to cheat.', '不说真话的、倾向于欺骗的。', '常见 dishonest answer。', 'He gave a dishonest answer.', '他给了个不诚实的回答。', ['a dishonest claim'], ['corrupt'], 'adjective', '定语/表语', '通用'],
  ], '', ['corrupt'], '←honest A2 + dis-（反向），A2 继承；家族 corrupt 腐败的（营私舞弊）');

  W('disinformation', 'noun', '/ˌdɪsɪnfəˈmeɪʃn/', 'B1', [], '虚假信息', 'False information deliberately spread to mislead.', [
    ['虚假信息；有意散布的假消息', 'False information deliberately spread to mislead.', '为误导而故意散布的假消息。', '不可数。', 'The campaign was pure disinformation.', '这场运动纯粹是造谣宣传。', [], ['propaganda'], 'noun', 'uncountable', '媒体'],
  ], '', ['inform'], '←inform B1 告知 + dis-（反向）+ -ation，B1 继承；近义 propaganda 宣传（带倾向性信息）');

  W('disloyal', 'adjective', '/dɪsˈlɔɪəl/', 'B2', [], '不忠的', 'Not loyal; betraying a person or group.', [
    ['不忠的', 'Not loyal; betraying a person or group.', '不忠诚的、背叛人的。', 'be disloyal to。', 'He was disloyal to his friends.', '他对朋友不忠。', ['disloyal to'], ['false'], 'adjective', '定语/表语', '通用'],
  ], '', ['loyal'], '←loyal B2 + dis-（反向），B2 继承；近义 false 不忠实的（false to 待人不忠）');

  W('dismal', 'adjective', '/ˈdɪzl/', '', [], '阴郁的；凄凉的', 'Sad, gloomy, and causing unhappiness.', [
    ['阴郁的；凄凉的', 'Sad, gloomy, and causing unhappiness.', '悲伤阴沉、令人不快的。', '常见 dismal failure/prospect。', 'Sales were dismal last month.', '上月销售惨淡。', ['a dismal place'], ['miserable'], 'adjective', '定语/表语', '通用'],
  ], '', [], '拉丁 dies malus（凶日）；近义 miserable 痛苦的（更强调难受）。分级留空');

  W('dismissal', 'noun', '/dɪsˈmɪsl/', 'B1', ['CET4'], '解雇；驳回', 'The act of sending someone away from a job, or rejecting an idea.', [
    ['解雇；开除', 'The act of sending someone away from their job.', '让人离职的行为。', '不可数或可数：his dismissal。', 'The dismissal of five workers caused anger.', '解雇五名工人引起了愤怒。', ['the dismissal of an appeal'], ['layoff'], 'noun', 'uncountable/countable', '商务'],
    ['驳回；不予考虑', 'The act of rejecting an idea or request.', '拒绝考虑想法或请求的行为。', '不可数：dismissal of the claim。', 'The judge ordered dismissal of the case.', '法官下令驳回该案。', [], [], 'noun', 'uncountable', '法律'],
  ], 'dismissals', ['layoff'], '←dismiss B1 + -al，B1 继承；家族 layoff 裁员（因无活可干而解雇）');

  W('dismissed', 'adjective', '/dɪsˈmɪst/', 'B1', [], '被解雇的；被驳回的', 'Removed from a job, or an idea rejected.', [
    ['被解雇的；被驳回的', 'Removed from a job, or an idea that has been rejected.', '被辞退的，或（想法）被驳回的。', '分词形容词：get dismissed。', 'He was dismissed for lateness.', '他因迟到被解雇。', ['wrongly dismissed'], ['redundant'], 'adjective', '定语/表语', '商务'],
  ], '', ['dismiss'], '←dismiss B1 + -ed，B1 继承；近义 redundant 被裁减的（因岗位取消）');

  W('disobedient', 'adjective', '/ˌdɪsəˈbiːdiənt/', '', [], '不服从的；违抗的', 'Not doing what one is told to do.', [
    ['不服从的；违抗的', 'Not doing what one is told to do.', '不听从吩咐的。', 'be disobedient to。', 'The dog was disobedient on the walk.', '狗散步时不听话。', ['a disobedient child'], ['naughty'], 'adjective', '定语/表语', '家庭'],
  ], '', ['naughty'], 'obedient 服从的（本词库未收），故留空；家族 naughty 顽皮的（不听话、程度轻）');

  W('disobey', 'verb', '/ˌdɪsəˈbeɪ/', 'A2', [], '不服从；违抗', 'To refuse to do what someone in authority tells you to do.', [
    ['不服从；违抗', 'To refuse to do what someone in authority tells you to do.', '拒绝听从权威者的指示。', '不及物或及物。', 'The soldier disobeyed the order.', '那名士兵违抗了命令。', ['disobey the rules'], ['defy'], 'verb', '及物', '通用'],
  ], 'disobeys~disobeyed~disobeyed~disobeying', ['defy'], '←obey A2 + dis-（反向），A2 继承；家族 defy 公然违抗（更强烈、正面挑战）');

  W('disparity', 'noun', '/dɪˈspærəti/', '', [], '差距；不平等', 'A great difference between things, especially in status or amount.', [
    ['差距；不平等', 'A great difference between things, especially in status or amount.', '事物间（尤指地位或数量上）的巨大差异。', '可数或不可数：disparity between。', 'The disparity between rich and poor is growing.', '贫富差距在扩大。', ['a disparity in'], ['gap'], 'noun', 'uncountable/countable', '社会'],
  ], 'disparities', [], 'parity 均等（本词库未收）+ dis-（不），故留空；近义 gap 差距（最常用）');

  W('dispense with', 'verb', '/dɪˈspens wɪð/', '', [], '免除；不再需要', 'To get rid of something or stop using it.', [
    ['免除；不再需要', 'To get rid of something or stop using it.', '去掉某物或不再使用。', '及物短语：dispense with formalities。', 'We can dispense with the introductions.', '我们可以省去介绍了。', ['dispense with the rules'], ['waive'], 'verb', '及物', '商务'],
  ], '', ['waive'], 'dispense 分发 + with，义为省去不用；近义 waive 放弃（权利、要求）。短语分级留空').phrase = true;

  W('display case', 'noun', '/dɪˈspleɪ keɪs/', '', [], '陈列柜；展示柜', 'A glass case for showing objects to the public.', [
    ['陈列柜；展示柜', 'A glass case for showing objects to the public.', '向公众展示物品的玻璃柜。', '可数。', 'The vase sat in a display case.', '花瓶摆在陈列柜里。', [], ['showcase'], 'noun', 'countable', '家居'],
  ], '', ['showcase'], 'display 展示 + case 柜子；近义 showcase 陈列柜（兼动词展示义）。短语分级留空').phrase = true;

  W('dispose of', 'verb', '/dɪˈspəʊz ɒv/', '', [], '处理掉；丢弃', 'To get rid of something by dealing with it or throwing it away.', [
    ['处理掉；丢弃', 'To get rid of something by dealing with it or throwing it away.', '通过处理或扔掉去掉某物。', '及物短语，of 后接宾语。', 'They disposed of the waste safely.', '他们安全处理掉了废弃物。', ['dispose of the evidence'], ['rid'], 'verb', '及物', '工业'],
  ], '', ['rid'], 'dispose 处置 + of，义为清除处理；近义 rid 使摆脱（rid of 去掉）。短语分级留空').phrase = true;

  W('disprove', 'verb', '/dɪsˈpruːv/', 'B1', [], '证明…是假的', 'To show that something is false.', [
    ['证明…是假的', 'To show that something is false.', '表明某事是假的。', '及物。', 'The data disproves the theory.', '这些数据证伪了该理论。', ['disprove a claim'], ['explode', 'refute'], 'verb', '及物', '科学'],
  ], 'disproves~disproved~disproved~disproving', ['refute'], '←prove B1 证明 + dis-（反），B1 继承；家族 refute 驳斥（措辞反驳），近义 explode 戳穿（揭穿谎言）');

  W('disreputable', 'adjective', '/dɪsˈrepjətəbl/', 'C1', [], '声名狼藉的；不体面的', 'Having a bad reputation; not respectable.', [
    ['声名狼藉的；不体面的', 'Having a bad reputation; not respectable.', '名声不好的、不体面的。', '较 formal。', 'They stayed in a disreputable inn.', '他们住在一家破败不体面的小客栈。', ['a disreputable area'], ['notorious'], 'adjective', '定语', '通用'],
  ], '', ['notorious'], '←repute C1 名声（-e 脱落 + -able）+ dis-（坏），C1 继承；家族 notorious 臭名昭著的');

  W('disrespect', 'noun', '/ˌdɪsrɪˈspekt/', 'B1', [], '不尊重；无礼', 'A lack of respect for someone or something.', [
    ['不尊重；无礼', 'A lack of respect for someone or something.', '对人或对事缺乏尊重。', '不可数：show disrespect。', 'The reply showed disrespect for the rules.', '这个答复表现出对规则的不尊重。', ['show disrespect to'], ['contempt'], 'noun', 'uncountable', '通用'],
  ], '', ['contempt'], '←respect B1 + dis-（反向），B1 继承；家族 contempt 轻蔑（更强烈、含鄙视）');

  W('disseminate', 'verb', '/dɪˈsemɪneɪt/', '', [], '散布；传播', 'To spread information or ideas widely.', [
    ['散布；传播', 'To spread information or ideas widely.', '广泛散布信息或观念。', '及物，正式。', 'The agency disseminated the findings.', '该机构传播了这些研究结果。', ['disseminate information'], ['diffuse'], 'verb', '及物', '书面'],
  ], 'disseminates~disseminated~disseminated~disseminating', ['diffuse'], '拉丁 semi（种子）+ dis-（散）——与 seminar 同源而不同形，故留空；家族 diffuse 扩散（广为散开）');

})(typeof window !== 'undefined' ? window : globalThis);
