/* data/words/cet/author_e6.js · 手敲词条 E（六·尾批）：explanation ~ eyelid（含 3 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_e6.js 必须在 _cet_helper.js 之后加载');

  W('explanation', 'noun', '/ˌekspləˈneɪʃn/', 'A1', ['CET4'], '解释；说明', 'Words that make something clear.', [
    ['解释；说明', 'Words that make something clear.', '把某事讲清楚的话。', '可数或不可数：give an explanation。', 'Give a brief explanation.', '请简要说明一下。', ['give an explanation'], ['exposition'], 'noun', 'uncountable/countable', '通用'],
  ], 'explanations', ['explain', 'exposition'], '←explain A1 + -ation（ai→a 音变，同 complaint），A1 继承；家族 exposition 阐释（正式）');

  W('exploiter', 'noun', '/ɪksˈplɔɪtə(r)/', 'B1', [], '剥削者', 'A person who uses others unfairly.', [
    ['剥削者', 'A person who uses others unfairly.', '不公平利用他人的人。', '可数，贬义。', 'The law protects workers from exploiters.', '法律保护工人不受剥削。', [], ['predator'], 'noun', 'countable', '社会'],
  ], 'exploiters', ['exploit'], '←exploit B1 剥削 + -er（表人），B1 继承；近义 predator 掠夺者');

  W('explorer', 'noun', '/ɪksˈplɔːrə(r)/', 'B1', [], '探险家', 'A person who travels to new places.', [
    ['探险家', 'A person who travels to new places.', '去新地方旅行的人。', '可数。', 'The explorer crossed the desert.', '探险家穿过了沙漠。', [], ['pioneer'], 'noun', 'countable', '职业'],
  ], 'explorers', ['explore'], '←explore B1 探险 + -r（表人），B1 继承；近义 pioneer 先驱');

  W('explosion', 'noun', '/ɪksˈpləʊʒn/', 'A2', ['CET4'], '爆炸', 'A sudden violent burst with noise.', [
    ['爆炸', 'A sudden violent burst with noise.', '伴随巨响的突然猛烈迸发。', '可数。', 'The explosion broke windows.', '爆炸震碎了窗户。', [], ['blast'], 'noun', 'countable', '自然'],
  ], 'explosions', ['explode', 'blast'], '←explode A2 爆炸 + -sion（d→s 音变），A2 继承；家族 blast 爆炸（口语）');

  W('explosive', 'adjective/noun', '/ɪksˈpləʊsɪv/', 'A2', ['CET4'], '爆炸的；炸药', 'Likely to explode, or a substance that explodes.', [
    ['爆炸的；炸药', 'Likely to explode, or a substance that explodes.', '可能爆炸的，或会爆炸的物质。', '可数（炸药）或形容词。', 'They found explosives in the car.', '他们在车里发现了炸药。', [], ['mine', 'volatile'], 'adjective/noun', 'null', '军事'],
  ], 'explosives', ['explode'], '←explode A2 + -sive（d→s 音变，同 decisive），A2 继承；近义 mine 地雷、volatile 易挥发的');

  W('exposed', 'adjective', '/ɪksˈpəʊzd/', 'B1', [], '暴露的；无遮蔽的', 'Not covered or protected.', [
    ['暴露的；无遮蔽的', 'Not covered or protected.', '没遮盖或保护的。', '分词形容词：be exposed to。', 'The wires were left exposed.', '电线裸露在外。', ['exposed to'], ['subject', 'vulnerable'], 'adjective', '表语', '通用'],
  ], '', ['expose', 'vulnerable'], '←expose B1 暴露 + -d，B1 继承；家族 vulnerable 脆弱的，近义 subject 经受的（subject to 易受…）');

  W('exposure', 'noun', '/ɪksˈpəʊʒə(r)/', 'B1', ['CET4'], '暴露；曝光', 'Being uncovered, or attention in media.', [
    ['暴露；曝光', 'Being uncovered, or attention in media.', '无遮蔽的状态，或媒体关注。', '不可数或可数。', 'The ad gave them wide exposure.', '广告让他们广受关注。', [], ['outing'], 'noun', 'uncountable/countable', '媒体'],
  ], 'exposures', ['expose'], '←expose B1 + -ure（e→ure，同 closure），B1 继承；近义 outing 外出（户外曝光义）');

  W('expression', 'noun', '/ɪksˈpreʃn/', 'A2', ['CET4'], '表达；表情；短语', 'Words that show feelings, a look on the face, or a fixed phrase.', [
    ['表达；表情；短语', 'Words that show feelings, a look on the face, or a fixed phrase.', '表露情感的话、脸上神情，或固定短语。', '可数或不可数。', 'Her expression changed suddenly.', '她的表情突然变了。', ['facial expression'], ['face', 'idiom', 'phrase', 'term', 'word'], 'noun', 'uncountable/countable', '通用'],
  ], 'expressions', ['express', 'face', 'idiom', 'phrase'], '←express A2 表达 + -ion，A2 继承；家族 face 表情、idiom 习语、phrase 短语，近义 term 术语、word 词');

  W('expressive', 'adjective', '/ɪksˈpresɪv/', 'A2', ['CET4'], '富于表现力的', 'Showing feelings clearly.', [
    ['富于表现力的', 'Showing feelings clearly.', '清楚表露情感的。', 'expressive eyes 会说话的眼睛。', 'She has expressive hands.', '她的手很有表现力。', [], ['eloquent', 'mobile'], 'adjective', '定语', '艺术'],
  ], '', ['express'], '←express A2 + -ive，A2 继承；近义 eloquent 雄辩的（表意有力的）、mobile 灵活的');

  W('extended', 'adjective', '/ɪksˈtendɪd/', 'B1', ['CET4'], '延长了的；扩展的', 'Made longer or larger.', [
    ['延长了的；扩展的', 'Made longer or larger.', '变长或变大的。', '分词形容词。', 'We took an extended trip.', '我们做了一次加长旅行。', [], ['long'], 'adjective', '定语', '通用'],
  ], '', ['extend'], '←extend B1 + -ed，B1 继承；近义 long 长的');

  W('extension', 'noun', '/ɪksˈtenʃn/', 'B1', ['CET4'], '延长；扩建；分机', 'Making longer, an added part, or a phone line.', [
    ['延长；扩建；分机', 'Making longer, an added part, or a phone line.', '变长、加建的部分，或电话分机。', '可数或不可数。', 'Call me on extension 203.', '打分机 203 找我。', [], ['annex'], 'noun', 'uncountable/countable', '通用'],
  ], 'extensions', ['extend'], '←extend B1 + -sion（d→s 音变），B1 继承；近义 annex 附属建筑');

  W('extensive', 'adjective', '/ɪksˈtensɪv/', 'B1', ['CET4'], '广泛的；大量的', 'Covering a large area or amount.', [
    ['广泛的；大量的', 'Covering a large area or amount.', '覆盖面积大或数量多的。', 'extensive damage 大面积破坏。', 'The fire caused extensive damage.', '大火造成大面积破坏。', [], ['wholesale', 'wide', 'widespread'], 'adjective', '定语', '通用'],
  ], '', ['extend', 'wide', 'widespread'], '←extend B1 + -sive（d→s 音变），B1 继承；家族 wide 广的、widespread 广泛的，近义 wholesale 大规模的');

  W('extinguished', 'adjective', '/ɪksˈtɪŋɡwɪʃt/', 'B1', [], '熄灭了的', 'No longer burning.', [
    ['熄灭了的', 'No longer burning.', '不再燃烧的。', '分词形容词。', 'Only an extinguished cigarette remained.', '只剩一支掐灭的烟。', [], ['out'], 'adjective', '定语', '通用'],
  ], '', ['extinguish'], '←extinguish B1 熄灭 + -ed，B1 继承；近义 out 熄灭的（be out 灯灭了）');

  W('extort', 'verb', '/ɪksˈtɔːt/', '', [], '勒索', 'To get money by threats.', [
    ['勒索', 'To get money by threats.', '用威胁搞到钱。', '及物：extort from。', 'They extorted money from shops.', '他们向商店勒索钱财。', ['extort from'], ['blackmail'], 'verb', '及物', '法律'],
  ], 'extorts~extorted~extorted~extorting', ['blackmail'], 'ex- 外 + tort 扭曲——语义非透明复合，故留空；家族 blackmail 敲诈');

  W('extra hours', 'noun', '/ˌekstrə ˈaʊəz/', '', [], '加班时间', 'Hours worked beyond the normal time.', [
    ['加班时间', 'Hours worked beyond the normal time.', '超出正常时间的工作时长。', '复数：work extra hours。', 'She works extra hours on Fridays.', '她周五加班。', ['work extra hours'], ['overtime'], 'noun', 'countable', '职业'],
  ], '', ['overtime'], 'extra 额外的 + hours 小时；近义 overtime 加班。短语分级留空').phrase = true;

  W('extra pay', 'noun', '/ˌekstrə ˈpeɪ/', '', [], '额外报酬', 'Money paid for extra work.', [
    ['额外报酬', 'Money paid for extra work.', '为额外工作付的钱。', '不可数。', 'They got extra pay for the holiday.', '他们假日加班有额外报酬。', [], ['overtime'], 'noun', 'uncountable', '职业'],
  ], '', ['overtime'], 'extra 额外的 + pay 报酬；近义 overtime 加班费。短语分级留空').phrase = true;

  W('extra time', 'noun', '/ˌekstrə ˈtaɪm/', '', [], '加时；加班', 'Time added to finish something, as in sports.', [
    ['加时；加班', 'Time added to finish something, as in sports.', '为完成某事加的时间，如体育加时。', '不可数：in extra time（加时赛中）。', 'The match went into extra time.', '比赛进入了加时。', ['in extra time'], ['overtime'], 'noun', 'uncountable', '体育'],
  ], '', ['overtime'], 'extra 额外的 + time 时间；家族 overtime 加时（体育）、近义 overtime 加班费。短语分级留空').phrase = true;

  W('extremely', 'adverb', '/ɪksˈtriːmli/', 'B1', [], '极其', 'Very much.', [
    ['极其', 'Very much.', '非常。', '副词。', 'The task is extremely hard.', '这任务极难。', [], ['deadly', 'indeed', 'jolly', 'most', 'super', 'very'], 'adverb', 'null', '通用'],
  ], '', ['extreme', 'very'], '←extreme B1 + -ly，B1 继承；家族 very 非常（最常用），近义 deadly 极其、indeed 的确、jolly 很（英式口语）、most 最、super 超级');

  W('extremist', 'noun', '/ɪksˈtriːmɪst/', 'B1', [], '极端分子', 'A person with extreme political views.', [
    ['极端分子', 'A person with extreme political views.', '持极端政治观点的人。', '可数，贬义。', 'The party expelled extremists.', '该党开除了极端分子。', [], ['fascist', 'militant', 'radical'], 'noun', 'countable', '政治'],
  ], 'extremists', ['extreme', 'fascist'], '←extreme B1 + -ist（e→ist），B1 继承；家族 fascist 法西斯分子，近义 militant 好战的、radical 激进的');

  W('extremity', 'noun', '/ɪksˈtreməti/', 'B1', ['CET4'], '末端；极端', 'The far end of something, or an extreme state.', [
    ['末端；极端', 'The far end of something, or an extreme state.', '某物的最远端，或极端状态。', '可数，常复数 extremities（四肢末端）。', 'They felt cold in their extremities.', '他们四肢末端发冷。', [], ['pole'], 'noun', 'countable', '健康'],
  ], 'extremities', ['extreme'], '←extreme B1 + -ity（e→ity），B1 继承；近义 pole 极（两极之一）');

  W('extrovert', 'noun', '/ˈekstrəvɜːt/', '', [], '外向者', 'A person who enjoys being with people.', [
    ['外向者', 'A person who enjoys being with people.', '喜欢和人在一起的人。', '可数，与 introvert 内向者相对。', 'She is a cheerful extrovert.', '她是个开朗的外向者。', [], ['outgoing'], 'noun', 'countable', '性格'],
  ], 'extroverts', [], 'extro- 外 + vert 转——vert 不在库，故留空；近义 outgoing 外向的。分级留空');

  W('exult', 'verb', '/ɪɡˈzʌlt/', '', [], '欢腾；雀跃', 'To feel great joy and show it.', [
    ['欢腾；雀跃', 'To feel great joy and show it.', '感到巨大喜悦并表现出来。', '不及物：exult in/at。', 'They exulted in their victory.', '他们为胜利欢腾。', ['exult in'], ['glory', 'rejoice'], 'verb', '不及物', '情感'],
  ], 'exults~exulted~exulted~exulting', ['rejoice'], '拉丁 exsultare（跳跃欢呼）——无库内派生根；家族 rejoice 欢庆，近义 glory 骄傲');

  W('eyelash', 'noun', '/ˈaɪlæʃ/', 'A1', [], '睫毛', 'One of the hairs on the edge of the eye.', [
    ['睫毛', 'One of the hairs on the edge of the eye.', '眼睛边缘的毛之一。', '可数，常复数 eyelashes。', 'She has long eyelashes.', '她睫毛很长。', [], ['lash'], 'noun', 'countable', '外貌'],
  ], 'eyelashes', ['eye', 'lash'], '←eye A1 + lash 睫毛，取首成分级 A1；家族 lash 睫毛');

  W('eyelid', 'noun', '/ˈaɪlɪd/', 'A1', [], '眼睑；眼皮', 'The skin that covers the eye.', [
    ['眼睑；眼皮', 'The skin that covers the eye.', '盖住眼睛的皮肤。', '可数。', 'His eyelids felt heavy.', '他眼皮发沉。', [], ['lid'], 'noun', 'countable', '健康'],
  ], 'eyelids', ['eye', 'lid'], '←eye A1 + lid 盖，取首成分级 A1；家族 lid 盖');

})(typeof window !== 'undefined' ? window : globalThis);
