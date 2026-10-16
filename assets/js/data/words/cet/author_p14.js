/* data/words/cet/author_p14.js — 常用词 P 批次 14，缺口 précis ~ pyrotechnics，共 25 条
 * （18 单词 + 7 短语：pull out、pump in、put back、put in、put off、put out、put to death；
 * 其中 précis 为队列外补录——author_r2 的 resume 近义引用它但无词条，ref-only 转正）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（punishment、purify、
 * pursuit 为 CET4）。
 * 扫根结论：publish B1、punish B1（brief 根提示）；public A2、pure B1、pursue B2、
 * punctual B2（author_p3 扫描）——
 * · 透明后缀：publicize←public A2 + -ize、published←publish B1 + -ed、publisher←publish B1 + -er、
 *   punishment←punish B1 + -ment、purify←pure B1 + -ify。
 * · 拉丁词干交替：pursuit←pursue B2 + -it（pursu 全段共享，e→∅+it 同 -ion 类拉丁正字）。
 * · 留空项：punctuation（punctuate 不在库，punctual 与「标点」语义不直连）、pucker、puddle、
 *   puff、pulp、puncture（punct vs pierce 多字母差异）、pungent、puppet、puppy、puree
 *   （pure 虽可见但语义不直连）、pyrotechnics（pyro- 非自由成分、fire 不可见）——均无
 *   库内可继根。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p14.js 必须在 _cet_helper.js 之后加载');

  W('précis', 'noun', '/ˈpreɪsiː/', 'B2', [], '摘要；概要', 'A short summary of a speech or a piece of writing.', [
    ['摘要；概要', 'A short summary of a speech or a piece of writing.', '讲话或文章的简短摘要。', '可数。', 'Please write a précis of the report.', '请为这份报告写一篇摘要。', [], ['summary'], 'noun', 'countable', '书面'],
  ], 'précises',['precise'], '队列外补录（ref-only 转正）：author_r2 的 resume 近义引用 précis 此前无词条；拉丁 praecisus（截短）——precise（B2）全段共享（precis ⊂ precise）、语义直连（截短文稿→摘要），B2 继承（判断项）；近义 summary 摘要、概要');

  W('publicize', 'verb', '/ˈpʌblɪsaɪz/', 'A2', [], '宣传；公布', 'To make something widely known.', [
    ['宣传；公布', 'To make something widely known.', '使某事广为人知。', '及物。', 'The team publicized the event online.', '团队在网上宣传了该活动。', [], ['headline', 'promote'], 'verb', '及物', '媒体'],
  ], 'publicizes~publicized~publicized~publicizing',['public'], '←public A2 + -ize（透明后缀），A2 继承（brief 显示 ←?，自行扫根 public）；近义 headline 以标题突出、promote 推广');

  W('published', 'adjective', '/ˈpʌblɪʃt/', 'B1', [], '已出版的；已发布的', 'Made available to the public.', [
    ['已出版的；已发布的', 'Made available to the public.', '已面向公众提供的。', '分词形容词，多作定语。', 'Her published work spans three decades.', '她已出版的作品横跨三十年。', [], ['out'], 'adjective', '定语', '出版'],
  ], '',['publish'], '←publish B1 + -ed（透明后缀，分词形容词），B1 继承（brief 根提示）；近义 out 面世、出现（队列原样）');

  W('publisher', 'noun', '/ˈpʌblɪʃə/', 'B1', [], '出版者；出版商', 'A person or company that produces books or magazines.', [
    ['出版者；出版商', 'A person or company that produces books, magazines, or newspapers.', '出版书籍、杂志或报纸的人或公司。', '可数。', 'The publisher released the novel in May.', '出版商五月发行了这部小说。', [], ['newspaper'], 'noun', 'countable', '出版'],
  ], 'publishers',['publish'], '←publish B1 + -er（施事后缀），B1 继承（brief 根提示）；近义 newspaper 报社、报纸');

  W('pucker', 'verb', '/ˈpʌkə/', '', [], '起皱；皱起', 'To make the skin or lips form small folds.', [
    ['起皱；皱起', 'To make the skin or lips form small folds.', '使皮肤或嘴唇形成小褶皱。', '可及物。', 'She puckered her lips for the photo.', '她为拍照噘起了嘴唇。', ['pucker up'], ['purse'], 'verb', '及物', '外貌'],
  ], 'puckers~puckered~puckered~puckering', [], '无库内可见词根，留空；近义 purse 撅起、皱起');

  W('puddle', 'noun', '/ˈpʌdl/', '', [], '水洼；小水坑', 'A small pool of water on the ground.', [
    ['水洼；小水坑', 'A small pool of water on the ground.', '地面上的一小摊水。', '可数。', 'Rain filled the puddles on the path.', '雨水灌满了路上的水洼。', [], ['pool'], 'noun', 'countable', '自然'],
  ], 'puddles', [], '无库内可见词根，留空；近义 pool 水塘、水洼');

  W('puff', 'noun/verb', '/pʌf/', '', [], '喷出；（一口）烟', 'To breathe out in short bursts, or a small cloud of smoke.', [
    ['吹；喷出', 'To breathe out in short quick bursts.', '一阵阵地呼气。', '不及物或及物。', 'She puffed up the steep hill.', '她喘着气爬上了陡坡。', [], ['pant', 'swell'], 'verb', '不及物', '通用'],
    ['（一口）烟；一阵喷出物', 'A short forceful breath of air or smoke.', '一口用力呼出的气或烟。', '可数。', 'He took a puff of his pipe.', '他吸了一口烟斗。', [], ['smoke'], 'noun', 'countable', '通用'],
  ], 'puffs~puffed~puffed~puffing', ['pant'], '与 pant 同源（拟声类）但拼写不对应——无库内可见词根，留空；家族 pant 喘气，近 pant、swell 膨胀、smoke 烟');

  W('pull out', 'verb', '/pʊl aʊt/', '', [], '拔出；撤出', 'To remove something, or to leave a place.', [
    ['撤出；驶离', 'To leave a place or to withdraw from something.', '离开某地或从某事中退出。', '不及物短语，可带宾语。', 'The army pulled out before dawn.', '军队在黎明前撤出了。', [], ['withdraw'], 'verb', '不及物', '军事'],
    ['拔出', 'To remove something from where it is fixed.', '把某物从固定处取出。', '及物短语，可分开。', 'She pulled out the drawer.', '她拉开了抽屉。', [], ['extract'], 'verb', '及物', '通用'],
  ],'pulls out~pulled out~pulling out', [], 'pull + out；近义 withdraw 撤退、extract 拔出。短语分级留空').phrase = true;

  W('pulp', 'noun', '/pʌlp/', '', [], '果肉；纸浆', 'The soft flesh of fruit, or a soft mass of material.', [
    ['果肉', 'The soft fleshy part of a fruit.', '水果柔软多肉的部分。', '不可数。', 'Scoop the pulp out of the skin.', '把果肉从外皮里挖出来。', [], ['flesh'], 'noun', 'uncountable', '饮食'],
    ['纸浆', 'A soft mass of wood fibre used to make paper.', '用于造纸的柔软木质纤维团。', '不可数。', 'The mill ships pulp to the factory.', '这家厂把纸浆运往工厂。', [], [], 'noun', 'uncountable', '工业'],
  ],'pulps', [], '拉丁 pulpa（果肉）——无库内可见词根，留空；近义 flesh 果肉、肉质');

  W('pump in', 'verb', '/pʌmp ɪn/', '', [], '泵入；大量投入', 'To send liquid or money into something in large amounts.', [
    ['泵入', 'To send liquid into something with a pump.', '用泵把液体送入某物。', '及物短语，可分开。', 'They pumped in fresh water.', '他们泵入了新鲜水。', [], ['inject'], 'verb', '及物', '工业'],
    ['大量投入', 'To put large amounts of money into something.', '把大量资金投入某事。', '及物短语，可分开。', 'The firm pumped in capital.', '公司投入了大量资金。', [], [], 'verb', '及物', '金融'],
  ],'pumps in~pumped in~pumping in', [], 'pump + in；近义 inject 注入、灌输。短语分级留空').phrase = true;

  W('punctuation', 'noun', '/ˌpʌŋktʃuˈeɪʃən/', '', [], '标点；标点法', 'The use of marks such as commas in writing.', [
    ['标点；标点法', 'The use of marks such as commas in writing.', '写作中逗号等符号的使用。', '不可数。', 'Her punctuation is always clear.', '她的标点总是清楚明了。', [], ['hyphen'], 'noun', 'uncountable', '语法'],
  ], '', ['hyphen'], '拉丁 punctus（刺、点）——punctuate 不在库，punctual（准时的，B2）与「标点」语义不直连（保守同 placard 先例），留空；家族/近义 hyphen 连字符');

  W('puncture', 'noun/verb', '/ˈpʌŋktʃə/', '', [], '刺破；小孔', 'To make a small hole in something, or the hole so made.', [
    ['刺破；扎孔', 'To make a small hole in something such as a tyre.', '在轮胎等物体上扎出小孔。', '可及物。', 'A nail punctured the rear tyre.', '一颗钉子扎破了后胎。', ['puncture a tyre'], ['pierce'], 'verb', '及物', '交通'],
    ['小孔；爆胎', 'A small hole made by puncturing, or a burst tyre.', '扎出的小孔；或爆胎。', '可数。', 'The bike had a slow puncture.', '这辆自行车有个慢撒气的扎孔。', [], ['hole'], 'noun', 'countable', '交通'],
  ], 'punctures~punctured~punctured~puncturing', ['pierce'], '拉丁 punctura（刺）——与 pierce 拼写不对应（punct vs pierce 多字母差异），留空；家族 pierce 刺穿，近 hole 孔、pierce');

  W('pungent', 'adjective', '/ˈpʌndʒənt/', '', [], '刺鼻的；辛辣的', 'Having a strong sharp smell or taste.', [
    ['刺鼻的；辛辣的', 'Having a strong sharp smell or taste.', '有强烈刺鼻气味或味道的。', '多作定语。', 'The kitchen smelled of pungent garlic.', '厨房里有刺鼻的蒜味。', [], ['hot'], 'adjective', '定语', '饮食'],
  ], '', [], '拉丁 pungere（刺）——无库内可见词根，留空；近义 hot 辛辣的、刺激的');

  W('punishment', 'noun', '/ˈpʌnɪʃmənt/', 'B1', ['CET4'], '惩罚；处罚', 'A penalty for breaking a rule.', [
    ['惩罚；处罚', 'A penalty for breaking a rule.', '违反规则所受的处罚。', '可数或不可数。', 'The punishment fitted the crime.', '惩罚与罪行相称。', [], ['penalty', 'sentence'], 'noun', 'countable', '法律'],
  ], 'punishments',['penalty', 'sentence', 'punish'], '←punish B1 + -ment（透明后缀），B1 继承（brief 根提示）；家族 penalty 罚款、sentence 判决，近义同');

  W('puppet', 'noun', '/ˈpʌpɪt/', '', [], '傀儡；木偶', 'A figure moved by strings, or a person controlled by others.', [
    ['木偶', 'A figure moved by strings or a hand inside it.', '由线或内置的手操纵的玩偶。', '可数。', 'The children watched a puppet show.', '孩子们看了一场木偶戏。', [], [], 'noun', 'countable', '文化'],
    ['傀儡', 'A person controlled by somebody else.', '被他人控制的人。', '可数，常含贬义。', 'The ruler was a puppet of the army.', '这位统治者是军方的傀儡。', [], ['tool'], 'noun', 'countable', '政治'],
  ], 'puppets', [], '法语 poupette（小人偶）——无库内可见词根，留空；近义 tool 工具（傀儡义）');

  W('puppy', 'noun', '/ˈpʌpi/', '', [], '小狗；幼犬', 'A young dog.', [
    ['小狗；幼犬', 'A young dog.', '年幼的狗。', '可数。', 'The puppy chewed the slipper.', '小狗啃了拖鞋。', [], ['dog'], 'noun', 'countable', '家庭'],
  ], 'puppies', [], '无库内可见词根，留空；近义 dog 狗、犬');

  W('puree', 'noun', '/pjʊˈriː/', '', [], '泥；糊状食物', 'Food that has been cooked and pressed into a soft paste.', [
    ['泥；糊状食物', 'Food that has been cooked and pressed into a soft paste.', '煮熟后压成软糊的食物。', '可数或不可数。', 'The recipe calls for a smooth pea puree.', '这道菜要用细腻的豌豆泥。', [], ['paste'], 'noun', 'countable', '饮食'],
  ], 'purees', [], '法语 purée——pure（B1）虽全段可见但语义（菜泥）与「纯粹」不直连（保守同 placard 先例），留空；近义 paste 糊状物');

  W('purify', 'verb', '/ˈpjʊərɪfaɪ/', 'B1', ['CET4'], '净化；提纯', 'To make something free from dirt or impurities.', [
    ['净化；提纯', 'To make something free from dirt or impurities.', '使某物去除污物或杂质。', '可及物。', 'The plant purifies the water before release.', '这家工厂在排放前净化水质。', [], ['cleanse', 'distil', 'filter', 'refine'], 'verb', '及物', '科学'],
  ], 'purifies~purified~purified~purifying',['cleanse', 'distil', 'filter', 'refine', 'pure'], '←pure B1 + -ify（透明后缀），B1 继承（brief 显示 ←?，自行扫根 pure）；家族 cleanse 净化、distil 蒸馏、filter 过滤、refine 精炼，近义同');

  W('pursuit', 'noun', '/pəˈsjuːt/', 'B2', ['CET4'], '追求；追逐', 'The act of trying to achieve something or catch somebody.', [
    ['追求；追逐', 'The act of trying to achieve something or catch somebody.', '努力实现某事或抓住某人的行为。', '不可数，或复数可数（爱好）。', 'They joined the pursuit of new talent.', '他们加入了对新人才的追求。', [], ['chase', 'hobby', 'quest'], 'noun', 'uncountable', '通用'],
  ], 'pursuits',['pursue'], '←pursue B2 + -it（pursu 全段共享，e→∅+it 同 -ion 类拉丁正字），B2 继承（brief 显示 ←?，自行扫根 pursue）；近义 chase 追逐、hobby 爱好、quest 追求');

  W('put back', 'verb', '/pʊt bæk/', '', [], '放回；推迟', 'To return something to its place, or to delay something.', [
    ['放回', 'To return something to the place it came from.', '把某物放回原处。', '及物短语，可分开。', 'Put the tools back after use.', '用完把工具放回原处。', [], ['replace'], 'verb', '及物', '家居'],
    ['推迟', 'To delay something.', '推迟某事。', '及物短语，可分开。', 'They put the meeting back a week.', '他们把会议推迟了一周。', [], [], 'verb', '及物', '商务'],
  ],'puts back~put back~putting back', [], 'put + back；近义 replace 放回原处、取代。短语分级留空').phrase = true;

  W('put in', 'verb', '/pʊt ɪn/', '', [], '投入；提交', 'To spend effort or money, or to submit something.', [
    ['投入', 'To spend time or money on something.', '在某事上花费时间或金钱。', '及物短语，可分开。', 'She put in extra hours.', '她投入了额外工时。', [], ['invest'], 'verb', '及物', '商务'],
    ['提交；安装', 'To submit or install something.', '提交或安装某物。', '及物短语，可分开。', 'They put in a new window.', '他们装了一扇新窗。', [], ['insert'], 'verb', '及物', '家居'],
  ],'puts in~put in~putting in', ['insert'], 'put + in；家族 insert 插入，近 invest 投资、insert。短语分级留空').phrase = true;

  W('put off', 'verb', '/pʊt ɒf/', '', [], '推迟；使反感', 'To delay something, or to make somebody lose interest.', [
    ['推迟', 'To delay doing something.', '推迟做某事。', '及物短语，可分开。', 'They put off the trip until spring.', '他们把旅行推迟到春天。', [], ['delay', 'postpone'], 'verb', '及物', '商务'],
    ['使反感', 'To make somebody dislike something or somebody.', '使某人厌恶某事或某人。', '及物短语，可分开。', 'His manner put me off.', '他的态度让我反感。', [], [], 'verb', '及物', '心理'],
  ],'puts off~put off~putting off', [], 'put + off；近义 delay 延迟、postpone 推迟。短语分级留空').phrase = true;

  W('put out', 'verb', '/pʊt aʊt/', '', [], '熄灭；扑灭', 'To extinguish a fire or light.', [
    ['熄灭；扑灭', 'To extinguish a fire, light, or cigarette.', '熄灭火、灯或香烟。', '及物短语，可分开。', 'Firefighters put out the blaze.', '消防员扑灭了大火。', [], ['extinguish'], 'verb', '及物', '社会'],
  ], '', ['extinguish'], 'put + out；家族/近义 extinguish 熄灭、扑灭。短语分级留空').phrase = true;

  W('put to death', 'verb', '/pʊt tə deθ/', '', [], '处死；处决', 'To kill somebody as an official punishment.', [
    ['处死；处决', 'To kill somebody as a legal punishment.', '依法杀死某人。', '及物短语。', 'The court put the prisoner to death.', '法庭处死了那名囚犯。', [], ['execute'], 'verb', '及物', '法律'],
  ], '', [], 'put + to death；近义 execute 处决、执行死刑。短语分级留空').phrase = true;

  W('pyrotechnics', 'noun', '/ˌpaɪrəʊˈteknɪks/', '', [], '烟火技术；烟火表演', 'The art of making fireworks, or a display of them.', [
    ['烟火技术；烟火表演', 'The art of making fireworks, or a display of them.', '制造烟花的技术；或烟火表演。', '不可数。', 'The festival ended with pyrotechnics.', '节日以烟火表演收尾。', [], ['fireworks'], 'noun', 'uncountable', '娱乐'],
  ], '', ['fireworks'], '希腊 pyr（火）——pyro- 非自由成分、fire 拼写不可见，留空；家族/近义 fireworks 烟火');
})(typeof window !== 'undefined' ? window : globalThis);
