/* data/words/cet/author_d5.js · 手敲词条 D（五·尾批）：dressmaker ~ dynamics（含 2 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_d5.js 必须在 _cet_helper.js 之后加载');

  W('dressmaker', 'noun', '/ˈdresmeɪkə(r)/', 'A1', [], '裁缝；服装师', 'A person who makes women dresses or clothes to order.', [
    ['裁缝；服装师', 'A person who makes women dresses or clothes to order.', '定制女装或服装的人。', '可数，今多用 tailor。', 'The dressmaker took her measurements.', '裁缝量了她的尺寸。', [], ['tailor'], 'noun', 'countable', '职业'],
  ], 'dressmakers', ['tailor'], 'dress A1 衣裙 + maker 制作者，取首成分级 A1；家族 tailor 裁缝（男装、通用）');

  W('dribble', 'verb', '/ˈdrɪbl/', '', [], '淌下；运球', 'To fall in small drops, or to bounce a ball while moving.', [
    ['淌流；流口水', 'To fall in small drops, or to let saliva fall from the mouth.', '成小滴流下，或口水从口中流出。', '不及物或及物。', 'The baby dribbled on his shirt.', '口水滴在了宝宝衬衫上。', [], ['trickle'], 'verb', '不及物', '健康'],
    ['（篮球）运球', 'To bounce a ball repeatedly while moving.', '移动时连续拍球。', '不及物或及物，体育用语。', 'He dribbled past two defenders.', '他带球晃过两名防守队员。', [], [], 'verb', '及物', '体育'],
  ], 'dribbles~dribbled~dribbled~dribbling', ['trickle'], '家族 trickle 细流（水成滴流下）。分级留空');

  W('drifter', 'noun', '/ˈdrɪftə(r)/', 'B1', [], '漂泊者；流浪汉', 'A person who moves from place to place with no settled home or job.', [
    ['漂泊者；流浪汉', 'A person who moves from place to place with no settled home or job.', '四处漂泊、无固定家业的人。', '可数，含贬义或同情。', 'The bar was full of drifters.', '酒吧里尽是流浪汉。', [], ['transient'], 'noun', 'countable', '社会'],
  ], 'drifters', ['drift'], '←drift B1 漂泊 + -er（表人），B1 继承；近义 transient 短暂停留者（旅居者）');

  W('drinks', 'noun', '/drɪŋks/', 'A1', [], '饮料；酒水（复数）', 'Liquids for drinking, especially those served at a gathering.', [
    ['饮料；酒水（复数）', 'Liquids for drinking, especially those served at a gathering.', '饮品，尤指聚会上的酒水。', 'drink 的复数：soft drinks（软饮）。', 'They ordered some drinks.', '他们点了些饮料。', ['soft drinks'], ['refreshment'], 'noun', 'countable', '饮食'],
  ], '', ['drink'], '←drink A1 + -s，A1 继承；近义 refreshment 茶点饮料（招待用语）');

  W('drive back', 'verb', '/ˌdraɪv ˈbæk/', '', [], '击退；驱赶', 'To force someone or something to retreat.', [
    ['击退；驱赶', 'To force someone or something to retreat.', '迫使某人或某物撤退。', '及物短语：drive back the enemy。', 'They drove back the attackers.', '他们击退了进攻者。', ['drive back the tide'], ['repel'], 'verb', '及物', '军事'],
  ], '', ['repel'], 'drive 驱赶 + back 回，把……逼退；家族 repel 击退（正式）。短语分级留空').phrase = true;

  W('driver', 'noun', '/ˈdraɪvə(r)/', 'A1', ['CET4'], '司机；驱动程序', 'A person who drives a vehicle, or a program that makes hardware work.', [
    ['司机；驾驶员', 'A person who drives a vehicle.', '驾驶车辆的人。', '可数：a bus driver。', 'The driver stopped at the light.', '司机在红灯前停了车。', ['a taxi driver'], [], 'noun', 'countable', '交通'],
    ['驱动程序；驱动器', 'A program or device that makes hardware work.', '使硬件运作的程序或装置。', '可数，技术用语：a device driver。', 'Update the graphics driver.', '更新显卡驱动程序。', ['device driver'], ['engine'], 'noun', 'countable', '科技'],
  ], 'drivers', ['drive'], '←drive A1 + -er（表人/物），A1 继承；第二义近义 engine 发动机（驱动核心）');

  W('drizzle', 'noun/verb', '/ˈdrɪzl/', '', [], '毛毛雨；下毛毛雨', 'Very fine rain, or to rain very lightly.', [
    ['毛毛雨', 'Very fine rain.', '极细的小雨。', '不可数。', 'A light drizzle fell all morning.', '整个上午飘着毛毛细雨。', [], ['rain'], 'noun', 'uncountable', '自然'],
    ['下毛毛雨', 'To rain very lightly.', '下很小的雨。', '不及物。', 'It is drizzling outside.', '外面正下着小雨。', [], [], 'verb', '不及物', '自然'],
  ], 'drizzles~drizzled~drizzled~drizzling', [], '近义 rain 雨（最常用、雨量更大）。分级留空');

  W('drone', 'noun/verb', '/drəʊn/', '', [], '嗡嗡声；无人机', 'A continuous low humming sound, or a small pilotless aircraft.', [
    ['嗡嗡声；嗡嗡响', 'A continuous low humming sound, or to make such a sound.', '持续的低沉嗡嗡声，或发出这种声音。', '可数（声）；亦作不及物动词 drone on（喋喋不休）。', 'The drone of the bees filled the garden.', '蜜蜂的嗡嗡声充满了花园。', [], ['hum'], 'noun', 'countable', '通用'],
    ['无人驾驶飞机', 'A small aircraft flown without a pilot on board.', '无人驾驶的小型飞行器。', '可数，现代用语。', 'The drone filmed the coastline.', '无人机拍摄了海岸线。', ['a combat drone'], [], 'noun', 'countable', '科技'],
  ], 'drones~droned~droned~droning', ['hum'], '家族 hum 嗡嗡声（较轻的哼响）。分级留空');

  W('drudge', 'verb', '/drʌdʒ/', '', [], '做苦工；苦干', 'To do hard, boring work for a long time.', [
    ['做苦工；苦干', 'To do hard, boring work for a long time.', '长时间做又苦又单调的活。', '不及物：drudge away。', 'He drudged away all weekend.', '他整个周末都在做苦工。', ['drudge away'], ['slave'], 'verb', '不及物', '社会'],
  ], 'drudges~drudged~drudged~drudging', [], '近义 slave 做苦工（slave away 像奴隶般干活）。分级留空');

  W('drudgery', 'noun', '/ˈdrʌdʒəri/', '', [], '苦差事；单调苦工', 'Hard, boring work that you have to do.', [
    ['苦差事；单调苦工', 'Hard, boring work that you have to do.', '必须做的又苦又单调的活。', '不可数。', 'The drudgery of washing wore her down.', '洗洗涮涮的苦差事让她疲惫不堪。', [], ['grind', 'toil'], 'noun', 'uncountable', '社会'],
  ], '', ['toil'], '←drudge（本词库无可靠分级）+ -ery，故留空；家族 toil 辛劳（长时间费力），近义 grind 苦差（the grind 日常苦活）');

  W('drugstore', 'noun', '/ˈdrʌɡstɔː(r)/', 'A2', [], '药房；杂货药店', 'A shop that sells medicines and also everyday goods.', [
    ['药房；杂货药店', 'A shop that sells medicines and also everyday goods.', '卖药也卖日用品的商店。', '可数，美式常用。', 'The drugstore is open all night.', '药房整夜营业。', [], ['pharmacy'], 'noun', 'countable', '健康'],
  ], 'drugstores', ['pharmacy'], 'drug A2 药 + store 店，取首成分级 A2；家族 pharmacy 药房（通用、兼调剂义）');

  W('drumstick', 'noun', '/ˈdrʌmstɪk/', 'A2', [], '鼓槌；鸡腿下段', 'A stick for hitting a drum, or the lower part of a chicken leg.', [
    ['鼓槌；（食用）鸡腿下段', 'A stick for hitting a drum, or the lower part of a chicken leg.', '敲鼓的棍，或鸡腿的下段。', '可数。', 'He hit the drum with the drumstick.', '他用鼓槌敲鼓。', [], ['thigh'], 'noun', 'countable', '艺术'],
  ], 'drumsticks', ['drum', 'stick'], 'drum A2 鼓 + stick 棍，取首成分级 A2；近义 thigh（鸡）大腿上段（与 drumstick 下段对照）');

  W('drunkard', 'noun', '/ˈdrʌŋkəd/', 'B1', ['CET4'], '酒鬼；醉汉', 'A person who drinks alcohol too often.', [
    ['酒鬼；醉汉', 'A person who drinks alcohol too often.', '饮酒过频的人。', '可数，贬义。', 'The drunkard fell asleep on the bench.', '那个醉汉在长椅上睡着了。', [], ['drunk'], 'noun', 'countable', '健康'],
  ], 'drunkards', ['drunk'], '←drunk B1 醉的 + -ard（表人，含贬义），B1 继承；家族 drunk 醉汉（更常用）');

  W('dry spell', 'noun', '/ˌdraɪ ˈspel/', '', [], '干旱期；旱季', 'A long period of little or no rain.', [
    ['干旱期；旱季', 'A long period of little or no rain.', '一段很长的少雨或无雨期。', '可数：a dry spell。', 'The region faced a long dry spell.', '该地区面临长期干旱。', [], ['drought'], 'noun', 'countable', '自然'],
  ], '', ['drought'], 'dry 干的 + spell 一段时间（时段义），指少雨时段；家族 drought 干旱（更严重、农业义）。短语分级留空').phrase = true;

  W('duct', 'noun', '/dʌkt/', '', [], '导管；管道', 'A tube or channel that carries air, liquid, or cables.', [
    ['导管；管道', 'A tube or channel that carries air, liquid, or cables.', '输送空气、液体或线缆的管状通道。', '可数：air duct（通风管）。', 'The duct carries hot air outside.', '管道把热空气排到外面。', ['air duct'], ['canal'], 'noun', 'countable', '工业'],
  ], 'ducts', ['canal'], '拉丁 ductus（引导）；家族 canal 运河（大型水道）。分级留空');

  W('dud', 'noun', '/dʌd/', '', [], '哑弹；废品', 'Something that fails to work, especially a bomb that does not explode.', [
    ['哑弹；废品', 'Something that fails to work, especially a bomb that does not explode.', '失效的东西，尤指不爆炸的炸弹。', '可数，非正式。', 'The shell was a dud.', '这枚炮弹是哑弹。', [], ['lemon'], 'noun', 'countable', '军事'],
  ], 'duds', [], '非正式俚语；近义 lemon 柠檬（俚：破车、废品）。分级留空');

  W('duel', 'noun', '/ˈdjuːəl/', '', [], '决斗；对决', 'A formal fight with weapons between two people, or any close contest.', [
    ['决斗；对决', 'A formal fight with weapons between two people, or any close contest.', '两人间的正式武器决斗，或任何激烈对抗。', '可数。', 'The two editors fought a public duel.', '两位编辑展开了一场公开论战。', ['a duel of wits'], ['fence'], 'noun', 'countable', '文化'],
  ], 'duels', [], '拉丁 duellum（两人之战）；近义 fence 击剑（决斗常以剑进行）。分级留空');

  W('dummy', 'noun', '/ˈdʌmi/', '', [], '仿制品；假人；傻瓜', 'Something that looks real but is not, or a foolish person.', [
    ['仿制品；假人；傻瓜', 'Something that looks real but is not, or a foolish person.', '看起来真但并非真的东西，或傻瓜。', '可数：a shop dummy（假人模特）。', 'The shop window used a dummy in the coat.', '商店橱窗里给大衣用了假人模特。', ['a crash dummy'], ['fool'], 'noun', 'countable', '通用'],
  ], 'dummies', [], '昵称形衍生；近义 fool 傻瓜（指人）。分级留空');

  W('duo', 'noun', '/ˈduːəʊ/', '', [], '二人组合；一对', 'Two people who work or perform together.', [
    ['二人组合；一对', 'Two people who work or perform together.', '一起工作或表演的两人。', '可数，复数 duos。', 'The comedy duo entertained the crowd.', '这对喜剧二人组逗乐了观众。', ['a singing duo'], ['pair'], 'noun', 'countable', '艺术'],
  ], 'duos', [], '意大利语 duo（二）；近义 pair 一对（通用）。分级留空');

  W('dupe', 'noun/verb', '/djuːp/', '', [], '愚弄；受骗者', 'To trick someone, or a person who is tricked.', [
    ['愚弄；上当', 'To trick someone into doing or believing something.', '把某人骗去做或相信某事。', '及物：dupe into。', 'He was duped into signing the contract.', '他被骗签了合同。', ['dupe into'], ['pigeon'], 'verb', '及物', '通用'],
    ['受骗者；糊涂虫', 'A person who is easily tricked.', '容易上当的人。', '可数。', 'The letter found an easy dupe.', '这封信找到了一个好骗的傻瓜。', [], [], 'noun', 'countable', '通用'],
  ], 'dupes~duped~duped~duping', [], '法语 dupe（鸽子→好骗者）；近义 pigeon 鸽子（俚：易上当者、冤大头）。分级留空');

  W('durability', 'noun', '/ˌdjʊərəˈbɪləti/', 'B2', ['CET4'], '耐用性；耐久', 'The quality of lasting a long time without breaking.', [
    ['耐用性；耐久', 'The quality of lasting a long time without breaking.', '能长久使用而不坏的性质。', '不可数或可数。', 'The durability of the boots impressed them.', '这双靴子的耐用性给他们留下了印象。', [], ['longevity'], 'noun', 'uncountable/countable', '工业'],
  ], '', ['durable'], '←durable B2 + -ity，B2 继承；近义 longevity 长寿（生命长久）');

  W('dwelling', 'noun', '/ˈdwelɪŋ/', 'B2', ['CET6'], '住宅；住所', 'A house or place where someone lives.', [
    ['住宅；住所', 'A house or place where someone lives.', '某人居住的房子或地方。', '可数，较正式。', 'The valley has dwellings scattered along it.', '山谷里散落着住户。', ['human dwellings'], ['habitat', 'house'], 'noun', 'countable', '社会'],
  ], 'dwellings', ['house'], '←dwell B2 居住 + -ing（表物），B2 继承；家族 house 房子（最常用），近义 habitat 栖息地（动物居所）');

  W('dynamics', 'noun', '/daɪˈnæmɪks/', 'B2', ['CET4'], '动力学；动态', 'The science of forces and motion, or the forces that cause change.', [
    ['动力学；动态', 'The science of forces and motion, or the forces that cause change.', '力与运动的科学，或引起变化的力量。', '形式为复数，作单数义。', 'The dynamics of the team are shifting.', '团队的动态正在变化。', ['group dynamics'], ['mechanic'], 'noun', 'uncountable/countable', '科学'],
  ], '', ['dynamic'], '←dynamic B2 + -s，B2 继承；近义 mechanic 力学（工程学科）');

})(typeof window !== 'undefined' ? window : globalThis);
