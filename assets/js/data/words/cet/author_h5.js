/* data/words/cet/author_h5.js · 手敲词条 H（五·前段）：habitu ~ happen to（含 8 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_h5.js 必须在 _cet_helper.js 之后加载');

  W('habitu', 'noun', '/həˈbɪtʃuː/', '', [], '惯例', 'A regular habit or custom.', [
    ['惯例', 'A regular habit or custom.', '固定的习惯或常规做法。', '罕见词，义同 habit，多见于旧文本。', 'He kept his morning habitu.', '他保持着早上的惯例。', [], ['regular'], 'noun', 'uncountable', '书面'],
  ], '', [], '词形疑为 habit 的异体或残缺形，无透明派生，留空；近义 regular 常规的（refs 镜像）');

  W('habitual', 'adjective', '/həˈbɪtʃuəl/', 'A2', ['CET4'], '习惯性的', 'Done regularly as a habit.', [
    ['习惯性的', 'Done regularly as a habit.', '作为习惯经常做的。', 'habitual action 习惯性动作。', 'He is a habitual smoker.', '他是个老烟枪。', ['habitual action'], ['accustomed', 'frequent'], 'adjective', '定语', '通用'],
  ], '', ['habit'], '←habit A2 + -ual，A2 继承；近义 accustomed 习惯了的、frequent 频繁的');

  W('habituate', 'verb', '/həˈbɪtʃueɪt/', 'A2', [], '使习惯', 'To make someone get used to something.', [
    ['使习惯', 'To make someone get used to something.', '使某人对某事习以为常。', 'habituate A to B 使 A 习惯 B。', 'They habituated the dog to noise.', '他们让狗习惯了噪音。', ['habituate to'], ['accustom'], 'verb', '及物', '通用'],
  ], 'habituates~habituated~habituated~habituating', ['habit'], '←habit A2 + -uate，A2 继承；近义 accustom 使习惯');

  W('hacker', 'noun', '/ˈhækə(r)/', 'C1', ['CET4'], '黑客', 'One who breaks into computer systems.', [
    ['黑客', 'One who breaks into computer systems.', '非法侵入电脑系统的人。', '可数。', 'The hacker stole the data.', '黑客偷走了数据。', [], ['cracker'], 'noun', 'countable', '科学'],
  ], 'hackers', ['hack'], '←hack C1 + -er（表人），C1 继承；近义 cracker 破解者');

  W('had better', 'modal verb', '/hæd ˈbetə(r)/', '', [], '最好', 'Should; it is wise to.', [
    ['最好', 'Should; it is wise to do something.', '应该；做某事是明智的。', '后接动词原形，表建议。', 'You had better leave now.', '你最好现在就走。', [], ['oughtto', 'should'], 'modal verb', 'null', '口语'],
  ], '', [], 'had + better 构成建议句式；近义 oughtto 应该、should 应该。短语分级留空').phrase = true;

  W('hairbreadth', 'noun', '/ˈheəbredθ/', 'A1', [], '毫厘之差', 'A very narrow margin.', [
    ['毫厘之差', 'A very narrow margin.', '极小的差距。', 'a hairbreadth escape 死里逃生。', 'He won by a hairbreadth.', '他以毫厘之差获胜。', ['by a hairbreadth'], ['hair'], 'noun', 'uncountable', '通用'],
  ], '', ['hair', 'breadth'], '←hair A1 + breadth（首成分），A1 继承；近义 hair 毫发');

  W('hairdresser', 'noun', '/ˈheədresə(r)/', 'A1', [], '理发师', 'One who cuts hair.', [
    ['理发师', 'One who cuts hair.', '给人理发的人。', '可数。', 'She went to the hairdresser.', '她去理了发。', [], ['barber'], 'noun', 'countable', '职业'],
  ], 'hairdressers', ['hair', 'dress'], '←hair A1 + dresser（首成分），A1 继承；近义 barber 理发师');

  W('half a dozen', 'noun', '/ˌhɑːf ə ˈdʌzn/', '', [], '半打', 'Six in number.', [
    ['半打', 'Six in number.', '数量为六。', 'half a dozen eggs 半打鸡蛋。', 'He bought half a dozen eggs.', '他买了半打鸡蛋。', [], ['six'], 'noun', 'countable', '通用'],
  ], '', ['six'], 'half 一半 + dozen 打；家族 six 六。短语分级留空').phrase = true;

  W('half-hearted', 'adjective', '/ˌhɑːf ˈhɑːtɪd/', 'A1', [], '不热心的', 'Not enthusiastic.', [
    ['不热心的', 'Not enthusiastic.', '缺乏热情的。', 'a half-hearted attempt 敷衍的尝试。', 'He made a half-hearted apology.', '他敷衍地道了歉。', [], ['reluctant'], 'adjective', '定语', '情感'],
  ], '', ['half', 'heart'], '←half A1 + hearted（首成分），A1 继承；近义 reluctant 不情愿的');

  W('hall of residence', 'noun', '/ˌhɔːl əv ˈrezɪdəns/', '', [], '学生宿舍', 'A college dormitory building.', [
    ['学生宿舍', 'A college dormitory building.', '大学的学生宿舍楼。', '可数，英式常用。', 'She lives in a hall of residence.', '她住在学生宿舍里。', [], ['dormitory'], 'noun', 'countable', '教育'],
  ], '', ['dormitory'], 'hall 大厅 + residence 住处；家族 dormitory 宿舍。短语分级留空').phrase = true;

  W('hallmark', 'noun', '/ˈhɔːlmɑːk/', 'A2', [], '标志', 'A mark of quality or identity.', [
    ['标志', 'A mark of quality or identity.', '品质或身份的标志。', '可数。', 'Care is the hallmark of her work.', '细心是她工作的标志。', [], ['trademark'], 'noun', 'countable', '通用'],
  ], 'hallmarks', ['hall', 'mark'], '←hall A2 + mark（首成分），A2 继承；近义 trademark 商标');

  W('hallowed', 'adjective', '/ˈhæləʊd/', '', [], '神圣的', 'Made holy.', [
    ['神圣的', 'Made holy.', '被视为神圣的。', 'hallowed ground 圣地。', 'They stood on hallowed ground.', '他们站在圣地上。', [], ['sacred'], 'adjective', '定语', '宗教'],
  ], '', [], 'hallow 祝圣不在库，无透明派生，留空；近义 sacred 神圣的');

  W('hallucination', 'noun', '/həˌluːsɪˈneɪʃn/', '', [], '幻觉', 'Seeing unreal things.', [
    ['幻觉', 'Seeing unreal things.', '看到不存在的东西。', '可数或不可数。', 'Fever caused hallucinations.', '发烧引起了幻觉。', [], ['vision'], 'noun', 'uncountable/countable', '健康'],
  ], 'hallucinations', [], 'hallucinate 致幻不在库，无透明派生，留空；近义 vision 幻象');

  W('hallway', 'noun', '/ˈhɔːlweɪ/', 'A2', [], '走廊', 'A passage in a house.', [
    ['走廊', 'A passage in a house.', '房子里的通道。', '可数。', 'The kids ran down the hallway.', '孩子们沿走廊跑去。', [], ['corridor', 'passage'], 'noun', 'countable', '家居'],
  ], 'hallways', ['hall', 'way', 'corridor'], '←hall A2 + way（首成分），A2 继承；家族 corridor 走廊，近义 passage 通道');

  W('hamlet', 'noun', '/ˈhæmlət/', 'B1', [], '小村庄', 'A very small village.', [
    ['小村庄', 'A very small village.', '很小的村子。', '可数。', 'He grew up in a hamlet.', '他在小村庄长大。', [], ['village'], 'noun', 'countable', '社会'],
  ], 'hamlets', ['ham', 'village'], '←ham B1 + -let（表小），B1 继承；家族 village 村庄');

  W('hand in', 'verb', '/ˌhænd ˈɪn/', '', [], '上交', 'To give homework to a teacher.', [
    ['上交', 'To give homework to a teacher.', '把作业交给老师。', '及物短语：hand in homework。', 'Hand in your papers now.', '现在交卷。', ['hand in'], ['submit'], 'verb', '及物', '教育'],
  ], '', ['submit'], 'hand 手 + in 进入；家族 submit 提交。短语分级留空').phrase = true;

  W('hand out', 'verb', '/ˌhænd ˈaʊt/', '', [], '分发', 'To give things to people.', [
    ['分发', 'To give things to people.', '把东西发给人们。', '及物短语。', 'They handed out leaflets.', '他们分发传单。', ['hand out'], ['distribute', 'dole'], 'verb', '及物', '通用'],
  ], '', ['distribute', 'dole'], 'hand 手 + out 向外；家族 distribute 分发、dole 救济。短语分级留空').phrase = true;

  W('hand over', 'verb', '/ˌhænd ˈəʊvə(r)/', '', [], '移交', 'To give control to another.', [
    ['移交', 'To give control to another.', '把控制权交给另一方。', '及物短语。', 'He handed over the keys.', '他交出了钥匙。', ['hand over'], ['surrender'], 'verb', '及物', '通用'],
  ], '', [], 'hand 手 + over 越过；近义 surrender 交出。短语分级留空').phrase = true;

  W('hand-operated', 'adjective', '/ˈhænd ˌɒpəreɪtɪd/', 'A1', [], '手动的', 'Worked by hand.', [
    ['手动的', 'Worked by hand.', '用手操作的。', 'a hand-operated pump 手动泵。', 'The mill is hand-operated.', '这磨坊是手动的。', [], ['manual'], 'adjective', '定语', '工业'],
  ], '', ['hand', 'operate'], '←hand A1 + operated（首成分），A1 继承；近义 manual 手动的');

  W('handbag', 'noun', '/ˈhændbæɡ/', 'A1', [], '手提包', 'A small bag carried by hand.', [
    ['手提包', 'A small bag carried by hand.', '手提的小包。', '可数。', 'She put keys in her handbag.', '她把钥匙放进手提包。', [], ['purse'], 'noun', 'countable', '家居'],
  ], 'handbags', ['hand', 'bag', 'purse'], '←hand A1 + bag（首成分），A1 继承；家族 purse 钱包');

  W('handgun', 'noun', '/ˈhændɡʌn/', 'A1', [], '手枪', 'A small gun held in one hand.', [
    ['手枪', 'A small gun held in one hand.', '单手持的小枪。', '可数。', 'Police carry handguns.', '警察配手枪。', [], ['pistol'], 'noun', 'countable', '军事'],
  ], 'handguns', ['hand', 'gun', 'pistol'], '←hand A1 + gun（首成分），A1 继承；家族 pistol 手枪');

  W('handiwork', 'noun', '/ˈhændiwɜːk/', 'B1', [], '手工艺品', 'Things made by hand.', [
    ['手工艺品', 'Things made by hand.', '手工做的东西。', '不可数。', 'The market sells local handiwork.', '市场卖本地手工艺品。', [], ['handicraft'], 'noun', 'uncountable', '艺术'],
  ], '', ['handy', 'work', 'handicraft'], '←handy B1 + work（y→i），B1 继承；家族 handicraft 手工艺');

  W('hands-on', 'adjective', '/ˌhændz ˈɒn/', 'A1', [], '实践的', 'Learned by doing.', [
    ['实践的', 'Learned by doing.', '动手做学会的。', 'hands-on training 实操培训。', 'The course is hands-on.', '这课重实操。', [], ['practical'], 'adjective', '定语/表语', '教育'],
  ], '', ['hand', 'on'], '←hand A1 + s + on（首成分），A1 继承；近义 practical 实际的');

  W('handset', 'noun', '/ˈhændset/', 'A1', [], '听筒', 'The part of a phone held to the ear.', [
    ['听筒', 'The part of a phone held to the ear.', '贴着耳朵的电话部件。', '可数。', 'He picked up the handset.', '他拿起听筒。', [], ['telephone'], 'noun', 'countable', '通用'],
  ], 'handsets', ['hand', 'set'], '←hand A1 + set（首成分），A1 继承；近义 telephone 电话');

  W('hanger', 'noun', '/ˈhæŋə(r)/', 'A2', [], '衣架', 'A thing to hang clothes on.', [
    ['衣架', 'A thing to hang clothes on.', '挂衣服的东西。', '可数。', 'Put the coat on a hanger.', '把大衣挂衣架上。', [], ['hook'], 'noun', 'countable', '家居'],
  ], 'hangers', ['hang', 'hook'], '←hang A2 + -er（表物），A2 继承；家族 hook 钩子');

  W('hanger-on', 'noun', '/ˌhæŋər ˈɒn/', 'A2', [], '食客；攀附者', 'One living off others.', [
    ['食客；攀附者', 'One living off others.', '靠别人过活的人。', '可数，贬义。', 'He is a mere hanger-on.', '他不过是个攀附者。', [], ['parasite'], 'noun', 'countable', '社会'],
  ], 'hangers-on', ['hanger'], '←hanger（本批 A2）+ on，同批继承；近义 parasite 寄生者');

  W('hangout', 'noun', '/ˈhæŋaʊt/', 'A2', [], '常去之地', 'A place visited often.', [
    ['常去之地', 'A place visited often.', '常去的地方。', '可数，口语。', 'The cafe is our hangout.', '咖啡馆是我们的老地方。', [], ['haunt'], 'noun', 'countable', '口语'],
  ], 'hangouts', ['hang', 'out'], '←hang A2 + out，A2 继承；近义 haunt 常去处');

  W('haphazard', 'adjective', '/hæpˈhæzəd/', '', [], '随意的', 'With no plan.', [
    ['随意的', 'With no plan.', '没有计划的。', 'a haphazard search 胡乱搜寻。', 'His notes are haphazard.', '他的笔记很杂乱。', [], ['random'], 'adjective', '定语', '通用'],
  ], '', [], 'hap 运气不在库，无透明派生，留空；近义 random 随机的');

  W('happen again', 'verb', '/ˌhæpən əˈɡen/', '', [], '再次发生', 'To occur one more time.', [
    ['再次发生', 'To occur one more time.', '又发生一次。', '不及物短语。', 'It may happen again.', '这事可能重演。', [], ['repeat'], 'verb', '不及物', '通用'],
  ], '', [], 'happen 发生 + again 又；近义 repeat 重演。短语分级留空').phrase = true;

  W('happen to', 'verb', '/ˌhæpən ˈtuː/', '', [], '碰巧', 'To do by chance.', [
    ['碰巧', 'To do by chance.', '偶然做某事。', 'happen to do 碰巧做。', 'I happen to know him.', '我碰巧认识他。', ['happen to'], ['should'], 'verb', '不及物', '通用'],
  ], '', [], 'happen 发生 + to 表偶然；近义 should 竟然。短语分级留空').phrase = true;

  W('happiness', 'noun', '/ˈhæpinəs/', 'A1', ['CET4'], '幸福', 'Feeling great joy.', [
    ['幸福', 'Feeling great joy.', '感到极大的快乐。', '不可数：find happiness。', 'Money cannot buy happiness.', '金钱买不到幸福。', [], ['joy', 'sunshine'], 'noun', 'uncountable', '情感'],
  ], '', ['happy', 'joy', 'sunshine'], '←happy A1 + -ness（y→iness），A1 继承；家族 joy 快乐、sunshine 阳光');

  W('hard hat', 'noun', '/ˌhɑːd ˈhæt/', '', [], '安全帽', 'A helmet for workers.', [
    ['安全帽', 'A helmet for workers.', '工人戴的帽子。', '可数。', 'Wear a hard hat on site.', '进工地戴安全帽。', [], ['helmet'], 'noun', 'countable', '职业'],
  ], '', ['helmet'], 'hard 硬 + hat 帽；家族 helmet 头盔。短语分级留空').phrase = true;

  W('hard of hearing', 'adjective', '/ˌhɑːd əv ˈhɪərɪŋ/', '', [], '听力受损的', 'Unable to hear well.', [
    ['听力受损的', 'Unable to hear well.', '听不太清的。', '表语形容词短语，委婉语。', 'My grandpa is hard of hearing.', '爷爷耳朵背。', [], ['deaf'], 'adjective', '表语', '健康'],
  ], '', ['deaf'], 'hard 难 + hearing 听见；家族 deaf 聋的。短语分级留空').phrase = true;

  W('hard work', 'noun', '/ˌhɑːd ˈwɜːk/', '', [], '努力', 'Great effort in doing.', [
    ['努力', 'Great effort in doing.', '做事花大力气。', '不可数。', 'Success takes hard work.', '成功需要努力。', [], ['industry'], 'noun', 'uncountable', '通用'],
  ], '', [], 'hard 难 + work 工作；近义 industry 勤奋。短语分级留空').phrase = true;

  W('harden', 'verb', '/ˈhɑːdn/', 'A1', ['CET4'], '变硬', 'To become hard.', [
    ['变硬', 'To become hard.', '变得硬。', '及物或不及物。', 'Cement hardens fast.', '水泥干得快。', [], ['crust', 'temper'], 'verb', '不及物', '通用'],
  ], 'hardens~hardened~hardened~hardening', ['hard'], '←hard A1 + -en，A1 继承；近义 crust 结壳、temper 锻炼');

  W('hardliner', 'noun', '/ˌhɑːdˈlaɪnə(r)/', 'A1', [], '强硬派', 'One keeping a strict line.', [
    ['强硬派', 'One keeping a strict line.', '坚持强硬路线的人。', '可数。', 'Hardliners opposed the deal.', '强硬派反对协议。', [], ['hawk'], 'noun', 'countable', '政治'],
  ], 'hardliners', ['hard', 'line'], '←hard A1 + liner（首成分），A1 继承；近义 hawk 鹰派');

  W('hardly any', 'adverb', '/ˈhɑːdli ˈeni/', '', [], '几乎没有', 'Almost none.', [
    ['几乎没有', 'Almost none.', '差不多没有。', 'hardly any water 几乎没水。', 'We have hardly any milk.', '牛奶几乎没了。', [], ['few'], 'adverb', 'null', '通用'],
  ], '', [], 'hardly 几乎不 + any 一些；近义 few 很少。短语分级留空').phrase = true;

  W('hardly ever', 'adverb', '/ˈhɑːdli ˈevə(r)/', '', [], '几乎从不', 'Almost never.', [
    ['几乎从不', 'Almost never.', '差不多从不。', 'hardly ever rains 几乎不下雨。', 'He hardly ever calls.', '他几乎从不打电话。', [], ['seldom'], 'adverb', 'null', '通用'],
  ], '', ['seldom'], 'hardly 几乎不 + ever 曾经；家族 seldom 很少。短语分级留空').phrase = true;

  W('hardworking', 'adjective', '/ˌhɑːdˈwɜːkɪŋ/', 'A1', [], '勤奋的', 'Working hard.', [
    ['勤奋的', 'Working hard.', '工作努力的。', 'a hardworking student 勤奋的学生。', 'She is hardworking.', '她很勤奋。', [], ['diligent'], 'adjective', '定语/表语', '职业'],
  ], '', ['hard', 'work', 'diligent'], '←hard A1 + working（首成分），A1 继承；家族 diligent 勤奋的');

  W('hare', 'noun', '/heə(r)/', '', [], '野兔', 'A fast wild rabbit-like animal.', [
    ['野兔', 'A fast wild rabbit-like animal.', '跑得快的野生兔形动物。', '可数。', 'A hare crossed the field.', '野兔穿过田野。', [], ['rabbit'], 'noun', 'countable', '自然'],
  ], 'hares', ['rabbit'], '古英语 hara，无透明派生，留空；家族 rabbit 兔子');

  W('harmful', 'adjective', '/ˈhɑːmfl/', 'B1', ['CET4'], '有害的', 'Causing harm.', [
    ['有害的', 'Causing harm.', '造成伤害的。', 'harmful to 对…有害。', 'Smoking is harmful to health.', '吸烟有害健康。', ['harmful to'], ['evil', 'ill', 'toxic'], 'adjective', '定语/表语', '健康'],
  ], '', ['harm', 'evil', 'toxic'], '←harm B1 + -ful，B1 继承；家族 evil 坏的、toxic 有毒的，近义 ill 有害的');

  W('harmless', 'adjective', '/ˈhɑːmləs/', 'B1', ['CET4'], '无害的', 'Causing no harm.', [
    ['无害的', 'Causing no harm.', '不造成伤害的。', 'a harmless joke 无伤大雅的玩笑。', 'The spider is harmless.', '这蜘蛛无害。', [], ['benign', 'innocent', 'safe'], 'adjective', '定语/表语', '通用'],
  ], '', ['harm', 'benign'], '←harm B1 + -less，B1 继承；家族 benign 良性的，近义 innocent 无辜的、safe 安全的');

  W('harmonize', 'verb', '/ˈhɑːmənaɪz/', 'B2', [], '协调', 'To bring into agreement.', [
    ['协调', 'To bring into agreement.', '使达成一致。', '及物或不及物：harmonize with。', 'They harmonized the rules.', '他们协调了规则。', ['harmonize with'], ['blend', 'reconcile', 'unify'], 'verb', '及物', '通用'],
  ], 'harmonizes~harmonized~harmonized~harmonizing', ['harmony', 'reconcile'], '←harmony B2 + -ize（y→ize），B2 继承；家族 reconcile 和解，近义 blend 融合、unify 统一');

  W('harry', 'verb', '/ˈhæri/', '', [], '骚扰', 'To bother again and again.', [
    ['骚扰', 'To bother again and again.', '一再打扰。', '及物，较文。', 'Reporters harried the star.', '记者围追明星。', [], ['harass'], 'verb', '及物', '通用'],
  ], 'harries~harried~harried~harrying', [], '古英语 hergian，无透明派生，留空；近义 harass 骚扰');

  W('harshness', 'noun', '/ˈhɑːʃnəs/', 'B2', [], '严厉', 'Being harsh or severe.', [
    ['严厉', 'Being harsh or severe.', '严厉苛刻。', '不可数。', 'The harshness shocked us.', '严厉让我们吃惊。', [], ['rigor'], 'noun', 'uncountable', '通用'],
  ], '', ['harsh'], '←harsh B2 + -ness，B2 继承；近义 rigor 严格');

  W('hasten', 'verb', '/ˈheɪsn/', 'C1', ['CET4'], '催促；加速', 'To hurry or speed up.', [
    ['催促；加速', 'To hurry or speed up.', '催快或加快。', '及物或不及物。', 'They hastened the work.', '他们赶工。', [], ['accelerate', 'hurry', 'rush', 'speed'], 'verb', '及物', '通用'],
  ], 'hastens~hastened~hastened~hastening', ['haste'], '←haste C1 + n，C1 继承；近义 accelerate 加速、hurry 赶紧、rush 冲、speed 加速');

  W('hasty', 'adjective', '/ˈheɪsti/', 'C1', ['CET4'], '匆忙的', 'Done too fast.', [
    ['匆忙的', 'Done too fast.', '做得太快的。', 'a hasty decision 草率决定。', 'Do not make a hasty choice.', '别草率选择。', [], ['premature', 'previous', 'rash', 'snap'], 'adjective', '定语', '通用'],
  ], '', ['haste', 'premature'], '←haste C1 + y（e→y），C1 继承；家族 premature 过早的，近义 previous 以前的、rash 轻率的、snap 仓促的');

  W('hatchet', 'noun', '/ˈhætʃɪt/', 'B2', [], '短柄斧', 'A small ax for one hand.', [
    ['短柄斧', 'A small ax for one hand.', '单手用的小斧。', '可数：bury the hatchet 讲和。', 'He split wood with a hatchet.', '他用短柄斧劈柴。', ['bury the hatchet'], ['ax'], 'noun', 'countable', '家居'],
  ], 'hatchets', ['hatch'], '←hatch B2 + -et（表小），B2 继承；近义 ax 斧');

  W('hatred', 'noun', '/ˈheɪtrɪd/', 'A2', ['CET4'], '憎恨', 'Very strong hate.', [
    ['憎恨', 'Very strong hate.', '非常强烈的恨。', '不可数：hatred for/of。', 'Hatred solves nothing.', '憎恨解决不了问题。', ['hatred for'], ['hate'], 'noun', 'uncountable', '情感'],
  ], '', ['hate', 'malice'], '←hate A2 + -red（表状态，同 kindred），A2 继承；家族 malice 恶意；brief ←hat 系切词 artifact，弃用');

  W('haughty', 'adjective', '/ˈhɔːti/', '', [], '傲慢的', 'Proud in a cold way.', [
    ['傲慢的', 'Proud in a cold way.', '冷冰冰的高傲。', 'a haughty look 傲慢的眼神。', 'She gave a haughty reply.', '她傲慢地回答。', [], ['arrogant', 'lofty'], 'adjective', '定语', '性格'],
  ], '', [], '古法语 halt（高）演变，无透明派生，留空；近义 arrogant 傲慢的、lofty 高傲的');

  W('haunch', 'noun', '/hɔːntʃ/', '', [], '臀部；后腿', 'Hip and upper leg.', [
    ['臀部；后腿', 'Hip and upper leg.', '臀部和大腿上部。', '可数，常复数。', 'The dog sat on its haunches.', '狗蹲坐着。', ['on its haunches'], ['hip'], 'noun', 'countable', '健康'],
  ], 'haunches', ['hip'], '古法语 hanche，无透明派生，留空；家族 hip 臀部');

  W('have fun', 'verb', '/ˌhæv ˈfʌn/', '', [], '玩得开心', 'To enjoy oneself.', [
    ['玩得开心', 'To enjoy oneself.', '过得愉快。', '不及物短语。', 'Have fun at the party.', '聚会玩开心。', [], ['enjoy'], 'verb', '不及物', '口语'],
  ], '', [], 'have 有 + fun 乐趣；近义 enjoy 享受。短语分级留空').phrase = true;

  W('have on', 'verb', '/ˌhæv ˈɒn/', '', [], '穿着', 'To wear clothes.', [
    ['穿着', 'To wear clothes.', '穿着衣服。', '及物短语。', 'She has a red coat on.', '她穿着红外套。', [], ['wear'], 'verb', '及物', '外貌'],
  ], '', [], 'have 有 + on 在身上；近义 wear 穿。短语分级留空').phrase = true;

  W('have to', 'modal verb', '/ˈhæv tuː/', '', [], '必须', 'Must; need to.', [
    ['必须', 'Must; need to.', '不得不。', '后接动词原形，表义务。', 'You have to wait here.', '你必须在这儿等。', [], ['must', 'need'], 'modal verb', 'null', '通用'],
  ], '', ['must'], 'have 有 + to 表义务；家族 must 必须，近义 need 需要。短语分级留空').phrase = true;

  W('having', 'verb', '/ˈhævɪŋ/', 'A1', [], '有（动名词）', 'Owning or holding.', [
    ['有（动名词）', 'Owning or holding.', '拥有或持有。', 'have 的动名词/分词形。', 'Having friends helps a lot.', '有朋友帮助很大。', [], ['with'], 'verb', '及物', '通用'],
  ], '', ['have', 'with'], '←have A1 + -ing，A1 继承；家族 with 有着（with 义）');

  W('hawker', 'noun', '/ˈhɔːkə(r)/', 'C1', [], '小贩', 'One selling goods in streets.', [
    ['小贩', 'One selling goods in streets.', '街上卖货的人。', '可数。', 'Hawkers lined the road.', '小贩沿街摆摊。', [], ['vendor'], 'noun', 'countable', '职业'],
  ], 'hawkers', ['hawk'], '←hawk C1 + -er（表人），C1 继承；近义 vendor 摊贩');

  W('hazy', 'adjective', '/ˈheɪzi/', 'C1', ['CET4'], '朦胧的', 'Not clear, like mist.', [
    ['朦胧的', 'Not clear, like mist.', '不清楚，像有雾。', 'a hazy photo 模糊的照片。', 'The hills look hazy.', '山丘雾蒙蒙。', [], ['vague'], 'adjective', '定语/表语', '自然'],
  ], '', ['haze', 'vague'], '←haze C1 + y（e→y），C1 继承；家族 vague 模糊的');

  W('head of state', 'noun', '/ˌhed əv ˈsteɪt/', '', [], '国家元首', 'The top leader of a country.', [
    ['国家元首', 'The top leader of a country.', '国家的最高领导人。', '可数。', 'The head of state spoke first.', '国家元首先发言。', [], ['president'], 'noun', 'countable', '政治'],
  ], '', [], 'head 首脑 + state 国家；近义 president 总统。短语分级留空').phrase = true;

  W('head office', 'noun', '/ˌhed ˈɒfɪs/', '', [], '总部', 'The main office of a firm.', [
    ['总部', 'The main office of a firm.', '公司的主要办公室。', '可数。', 'Head office is in London.', '总部在伦敦。', [], ['headquarters'], 'noun', 'countable', '商务'],
  ], '', ['headquarters'], 'head 首 + office 办公室；家族 headquarters 总部。短语分级留空').phrase = true;

  W('head teacher', 'noun', '/ˌhed ˈtiːtʃə(r)/', '', [], '校长', 'The top teacher of a school.', [
    ['校长', 'The top teacher of a school.', '学校的最高负责人。', '可数，英式常用。', 'The head teacher praised us.', '校长表扬了我们。', [], ['headmaster'], 'noun', 'countable', '教育'],
  ], '', ['headmaster'], 'head 首 + teacher 老师；家族 headmaster 校长（男校长）。短语分级留空').phrase = true;

})(typeof window !== 'undefined' ? window : globalThis);
