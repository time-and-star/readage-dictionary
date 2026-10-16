/* data/words/cet/author_r5.js — 常用词 R 批次 5，缺口 records ~ regimen，共 31 条
 * （29 单词 + 2 短语：refer to、reference book）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：recovery、reduction、reference、refinement、reflection、refusal；
 * CET6：redundancy、refugee）。
 * 扫根结论：reduce A2、refer B1、refine C1、reform B2、refresh B1（brief 根提示）；
 * count A1、create A1、angle B2、red A1、direct A2、do A1、recover B1、reflect B1、
 * fuel B1、refuse A2、gain B1、regime C1、record A2（本批扫描）——
 * · 透明后缀：recovery←recover B1 + -y、reduction←reduce A2 + -ation、
 *   reference←refer B1 + -ence、refinement←refine C1 + -ment、reflection←reflect B1 + -ion、
 *   reflector←reflect B1 + -or、reformer←reform B2 + -er、refreshed←refresh B1 + -ed、
 *   refusal←refuse A2 + -al、refined←refine C1 + -ed、records←record A2 复数单列（随根）。
 * · 同根继承：rectangle←angle B2（rect+angle，angle 全段可见且为语义成分，类比
 *   quadrangle←angle 先例）、regimen←regime C1（兄弟派生，regime 词首全段可见 +n）。
 * · re- 前缀取其后词根（前缀不作成分）：recount←count A1（「重新计数」直连，讲述义判断项披露）、
 *   recreate←create A1、redirect←direct A2、redo←do A1（形变同 do 不规则 redid/redone）、
 *   refuel←fuel B1（英式拼写 refuelled）、regain←gain B1。
 * · 留空项（无库内可继根）：recourse（re+course 切词假象）、redemption（re+deem 切词假象）、
 *   redress（re+dress 切词假象）、redundancy（redundant 不在库）、reef、reek、refugee、
 *   refurbish（re+fresh 词形不对应）、regal（re+gal 切词假象）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r5.js 必须在 _cet_helper.js 之后加载');

  W('records', 'noun', '/rɪˈkɔːdz/', 'A2', [], '记录；档案', 'Written information kept for later use.', [
    ['记录；档案', 'Written information kept for later use, especially about events or business.', '保存备用的书面信息，尤指事件或业务记录。', '用作复数。', 'The records are stored in the basement.', '档案存放在地下室。', [], ['archive'], 'noun', 'uncountable', '通用'],
  ], '',['record'], 'record 的复数形式单列词条（队列官方派生），CEFR 随根 record A2；近义 archive 档案、存档');

  W('recount', 'verb', '/rɪˈkaʊnt/', 'A1', [], '重新计票；讲述', 'To count again, or to tell a story.', [
    ['重新计票', 'To count votes or things again.', '重新计数选票或事物。', '可及物。', 'They recounted the ballots twice.', '他们把选票重新计了两次。', [], [], 'verb', '及物', '政治'],
    ['讲述', 'To tell a story or describe an event.', '讲述故事或描述事件。', '可及物。', 'She recounted her journey.', '她讲述了她的旅途。', [], ['narrate', 'retell'], 'verb', '及物', '通用'],
  ], 'recounts~recounted~recounted~recounting', ['narrate', 'retell'], 're- 前缀不作成分，取其后词根 count A1（「重新计数」语义直连；「讲述」义为再述判断项披露），A1 继承（brief 显示 ←?，自行扫根 count）；家族 narrate 叙述、retell 复述，近义同');

  W('recourse', 'noun', '/rɪˈkɔːs/', '', [], '求助；求助的对象', 'A source of help that can be turned to when needed.', [
    ['求助；求助的对象', 'A source of help that can be turned to when needed.', '需要时可以求助的来源。', '不可数，常与 to 连用。', 'He had no recourse but to leave.', '他除了离开别无他法。', [], ['resort'], 'noun', 'uncountable', '法律'],
  ], '', [], '拉丁 recursus（回流）——re+course 切词假象（course 非语义基，同 portend 先例），留空；近义 resort 求助、凭借');

  W('recovery', 'noun', '/rɪˈkʌvəri/', 'B1', ['CET4'], '恢复；痊愈', 'A return to a normal state after illness or difficulty.', [
    ['恢复；痊愈', 'A return to a normal state after illness or difficulty.', '病后或困难后恢复正常状态。', '可数或不可数。', 'Her recovery took three weeks.', '她用了三周才康复。', [], ['rally', 'salvage'], 'noun', 'uncountable', '通用'],
  ], 'recoveries',['recover'], '←recover B1 + -y（透明名词后缀），B1 继承（brief 显示 ←?，自行扫根 recover）；近义 rally 恢复元气、salvage 抢救、挽救');

  W('recreate', 'verb', '/ˌriːkriˈeɪt/', 'A1', [], '再创造；再现', 'To make something exist again, or copy it closely.', [
    ['再创造；再现', 'To make something exist again, or copy it closely.', '使某物再次存在；或紧密复制。', '可及物。', 'The film recreates life in the 1900s.', '这部电影再现了 1900 年代的生活。', [], ['reproduce'], 'verb', '及物', '通用'],
  ], 'recreates~recreated~recreated~recreating',['create'], 're- 前缀不作成分，取其后词根 create A1，A1 继承（brief 显示 ←?，自行扫根 create）；近义 reproduce 复制、再生产');

  W('rectangle', 'noun', '/ˈrektæŋɡl/', 'B2', [], '长方形；矩形', 'A flat shape with four straight sides and four right angles.', [
    ['长方形；矩形', 'A flat shape with four straight sides and four right angles.', '四条直边、四个直角的平面图形。', '可数。', 'Draw a rectangle on the paper.', '在纸上画一个长方形。', [], [], 'noun', 'countable', '教育'],
  ], 'rectangles', ['angle'], 'rect（直）+angle（角）——angle 全段可见且为语义成分，类比 quadrangle←angle B2 先例，B2 继承（brief 显示 ←?，自行扫描）；家族 angle 角、角度');

  W('redden', 'verb', '/ˈredn/', 'A1', [], '变红；脸红', 'To become red, especially in the face.', [
    ['变红；脸红', 'To become red, especially in the face.', '变红，尤指脸红。', '可不及物。', 'She reddened with embarrassment.', '她尴尬得脸红了。', [], ['flush'], 'verb', '不及物', '外貌'],
  ], 'reddens~reddened~reddened~reddening',['red'], '←red A1 + -den（-en 使动后缀，透明，同 darken 类判断项），A1 继承（brief 显示 ←?，自行扫根 red）；近义 flush 脸红、涨红');

  W('redemption', 'noun', '/rɪˈdempʃn/', '', [], '救赎；拯救', 'The act of saving somebody from sin, or recovering something.', [
    ['救赎；拯救', 'The act of saving somebody from sin, or recovering something.', '拯救某人脱离罪恶；或取回某物。', '不可数。', 'The story is about redemption and forgiveness.', '这个故事讲的是救赎与宽恕。', [], ['salvation'], 'noun', 'uncountable', '宗教'],
  ], '', ['salvation'], '拉丁 redimere（买回）——re+deem 切词假象（deem 非语义基），留空；家族/近义 salvation 救赎、拯救');

  W('redirect', 'verb', '/ˌriːdɪˈrekt/', 'A2', [], '改道；重新指引', 'To send something to a different place or direction.', [
    ['改道；重新指引', 'To send something to a different place or direction.', '把某物送往不同的地点或方向。', '可及物。', 'Police redirected the traffic.', '警察疏导了车流。', [], ['divert'], 'verb', '及物', '交通'],
  ], 'redirects~redirected~redirected~redirecting', ['divert'], 're- 前缀不作成分，取其后词根 direct A2，A2 继承（brief 显示 ←?，自行扫根 direct）；家族/近义 divert 使转向、改道');

  W('redo', 'verb', '/ˌriːˈduː/', 'A1', [], '重做', 'To do something again, especially to improve it.', [
    ['重做', 'To do something again, especially to improve it.', '再次做某事，尤为了改进。', '可及物。', 'The designers had to redo the logo.', '设计师们不得不重做标志。', [], ['repeat'], 'verb', '及物', '通用'],
  ], 'redoes~redid~redone~redoing', ['repeat'], 're- 前缀不作成分，取其后词根 do A1，A1 继承（brief 显示 ←?，自行扫根 do）；形变同 do 不规则变化（redid/redone）；近义 repeat 重复');

  W('redress', 'noun/verb', '/rɪˈdres/', '', [], '纠正；补偿', 'Something done to correct a wrong, or to set it right.', [
    ['纠正；补偿', 'Something done to correct a wrong or improve a bad situation.', '纠正错误或改善恶劣局面的行为。', '不可数。', 'The court awarded financial redress.', '法院判给了经济赔偿。', [], ['remedy'], 'noun', 'uncountable', '法律'],
    ['纠正；申冤', 'To correct a wrong or set right an injustice.', '纠正错误或平反不公。', '可及物。', 'The company tried to redress the balance.', '公司试图恢复平衡。', [], ['right'], 'verb', '及物', '法律'],
  ], 'redresses~redressed~redressed~redressing', [], '拉丁 reddere + rectus（使变直）——re+dress 切词假象（dress 非语义基），留空；近义 remedy 补救、right 纠正');

  W('reduction', 'noun', '/rɪˈdʌkʃn/', 'A2', ['CET4'], '减少；降低', 'The act or amount of making something smaller.', [
    ['减少；降低', 'The act or amount of making something smaller.', '使某物变小的行为或数量。', '可数或不可数。', 'We made a 20 percent reduction in costs.', '我们把成本降低了百分之二十。', [], ['cut', 'decrease', 'discount'], 'noun', 'countable', '商务'],
  ], 'reductions', ['discount'], 'brief 根提示 ←reduce A2 + -ation（reduce 全段可见，e→∅+ation），A2 继承；家族 discount 折扣，近 cut 削减、decrease 下降、discount');

  W('redundancy', 'noun', '/rɪˈdʌndənsi/', '', ['CET6'], '被裁冗余；多余', 'The state of not being needed, or being dismissed from a job.', [
    ['被裁冗余；多余', 'The state of not being needed, or being dismissed from a job.', '不再被需要的状态；或被裁员。', '可数或不可数。', 'The merger led to twenty redundancies.', '合并导致二十人被裁。', [], ['layoff'], 'noun', 'uncountable', '职业'],
  ], 'redundancies', ['layoff'], '拉丁 redundantus（溢出）——无库内可见词根（redundant 亦不在库），留空；家族/近义 layoff 裁员、解雇');

  W('reef', 'noun', '/riːf/', '', [], '礁；礁石', 'A line of rocks or sand near the surface of the sea.', [
    ['礁；礁石', 'A line of rocks or sand near the surface of the sea.', '靠近海面的岩石或沙洲线。', '可数。', 'The boat struck a coral reef.', '船撞上了珊瑚礁。', [], ['coral'], 'noun', 'countable', '自然'],
  ], 'reefs', ['coral'], '无库内可见词根，留空；家族/近义 coral 珊瑚');

  W('reek', 'verb', '/riːk/', '', [], '发出恶臭', 'To smell very bad.', [
    ['发出恶臭', 'To smell very bad.', '闻起来非常难闻。', '不及物，常与 of 连用。', 'The room reeked of smoke.', '房间里烟味刺鼻。', [], ['smell'], 'verb', '不及物', '通用'],
  ], 'reeks~reeked~reeked~reeking', [], '古诺尔斯 reykja（熏）——无库内可见词根，留空；近义 smell 闻、气味');

  W('refer to', 'verb', '/rɪˈfɜː tuː/', '', [], '提到；查阅', 'To look at something for information, or to mention it.', [
    ['提到；查阅', 'To look at a book or word for information, or to mention something.', '查阅书籍或词语获取信息；或提及某事。', '及物短语，可分开。', 'Refer to the glossary for new terms.', '新术语请查阅词汇表。', [], ['allude', 'consult', 'mention', 'touch'], 'verb', '及物', '通用'],
  ], '', ['mention'], 'refer + to；家族 mention 提到，近 allude 暗指、consult 查阅、mention、touch 涉及。短语分级留空').phrase = true;

  W('reference', 'noun', '/ˈrefrəns/', 'B1', ['CET4'], '参考；推荐人；参考文献', 'The act of consulting something, a recommender, or a list of sources.', [
    ['参考；查阅', 'The act of looking at something for information.', '为获取信息而查看某物的行为。', '不可数，常与 to 连用。', 'Keep the manual for easy reference.', '把手册放在手边以便随时查阅。', [], ['mention'], 'noun', 'uncountable', '通用'],
    ['推荐人；介绍人', 'A person who can tell others about your character and ability.', '能向他人介绍你品行与能力的人。', '可数。', 'List two references on your form.', '在表格上列出两位推荐人。', [], ['referee'], 'noun', 'countable', '职业'],
    ['参考文献', 'A list of sources of information at the end of a book or paper.', '书末或文末的信息来源清单。', '可数。', 'The essay includes fifty references.', '这篇论文列了五十篇参考文献。', [], ['bibliography'], 'noun', 'countable', '书面'],
  ], 'references',['mention', 'refer'], '←refer B1 + -ence（透明名词后缀），B1 继承（brief 根提示）；家族 mention 提到，近 bibliography 参考文献、mention、referee 裁判、推荐人');

  W('reference book', 'noun', '/ˈrefrəns bʊk/', '', [], '参考书；工具书', 'A book used to find information rather than to read from start to finish.', [
    ['参考书；工具书', 'A book used to find information rather than to read from start to finish.', '用于查资料而非通读的书。', '可数。', 'A dictionary is a reference book.', '词典就是一本工具书。', [], ['encyclopedia'], 'noun', 'countable', '出版'],
  ], '', ['encyclopedia'], 'reference + book；家族/近义 encyclopedia 百科全书。短语分级留空').phrase = true;

  W('refined', 'adjective', '/rɪˈfaɪnd/', 'C1', [], '文雅的；精炼的', 'Polished in manners or taste, or made pure by a process.', [
    ['文雅的；优雅的', 'Polished in manners or taste, or showing fine feeling.', '举止或品味考究的；或感觉细腻的。', '多作定语或表语。', 'She has refined tastes in art.', '她的艺术品位很雅致。', [], ['elegant', 'exquisite', 'sophisticated', 'subtle'], 'adjective', '定语/表语', '性格'],
    ['精炼的', 'Made pure by a process.', '经加工提纯的。', '多作定语。', 'The factory sells refined sugar.', '这家工厂卖精制糖。', [], [], 'adjective', '定语', '工业'],
  ], '',['elegant', 'exquisite', 'sophisticated', 'refine'], '←refine C1 + -ed（分词形容词），C1 继承（brief 根提示）；家族 elegant 优雅的、exquisite 精致的、sophisticated 精致而世故的，近义同 + subtle 细微的');

  W('refinement', 'noun', '/rɪˈfaɪnmənt/', 'C1', ['CET4'], '文雅；提炼', 'Improved manners, or the act of improving something.', [
    ['文雅；提炼', 'Improved manners, or the act of improving something.', '举止的改善；或改进某物的行为。', '可数或不可数。', 'City life brings a certain refinement.', '城市生活带来某种文雅熏陶。', [], ['culture'], 'noun', 'uncountable', '文化'],
  ], 'refinements',['culture', 'refine'], '←refine C1 + -ment（透明名词后缀），C1 继承（brief 根提示）；家族/近义 culture 文化、教养');

  W('reflection', 'noun', '/rɪˈflekʃn/', 'B1', ['CET4'], '倒影；反思', 'An image in a mirror or water, or careful thought.', [
    ['倒影；映像', 'An image seen in a mirror or on water.', '在镜子或水面上看到的影像。', '可数。', 'She looked at her reflection in the glass.', '她看着玻璃中自己的倒影。', [], ['image', 'mirror'], 'noun', 'countable', '科学'],
    ['反思；深思', 'Careful thought about something.', '对某事的仔细思考。', '可数或不可数。', 'The event prompted deep reflection.', '这件事引发了深思。', [], [], 'noun', 'uncountable', '心理'],
  ], 'reflections',['image', 'reflect'], '←reflect B1 + -ion（reflect 全段可见），B1 继承（brief 显示 ←?，自行扫根 reflect——链路器未命中，本批扫描确认 reflect B1 在库）；家族 image 图像，近 image、mirror 镜子');

  W('reflector', 'noun', '/rɪˈflektə/', 'B1', [], '反光器；反射器', 'A device that reflects light or heat.', [
    ['反光器；反射器', 'A device that reflects light or heat.', '反射光线或热量的装置。', '可数。', 'Fit reflectors to the wheels.', '给轮子装上反光器。', [], ['mirror'], 'noun', 'countable', '工具'],
  ], 'reflectors',['reflect'], '←reflect B1 + -or（-or 透明后缀，器物），B1 继承（brief 显示 ←?，自行扫根 reflect）；近义 mirror 镜子、反射面');

  W('reformer', 'noun', '/rɪˈfɔːmə/', 'B2', [], '改革者；革新者', 'Somebody who tries to change a system for the better.', [
    ['改革者；革新者', 'Somebody who tries to change a system for the better.', '试图改善制度的人。', '可数。', 'She was a famous prison reformer.', '她是著名的监狱改革者。', [], ['radical'], 'noun', 'countable', '政治'],
  ], 'reformers',['reform'], 'brief 根提示 ←reform B2 + -er（透明后缀），B2 继承；近义 radical 激进分子、激进的');

  W('refreshed', 'adjective', '/rɪˈfreʃt/', 'B1', [], '恢复精力的', 'Feeling better and less tired after rest or food.', [
    ['恢复精力的；神清气爽的', 'Feeling better and less tired after rest or food.', '休息或进食后感觉更好、不那么疲倦。', '多作表语。', 'I feel refreshed after a short walk.', '散了会儿步我感觉清爽多了。', [], ['fresh'], 'adjective', '表语', '健康'],
  ], '',['refresh'], '←refresh B1 + -ed（分词形容词），B1 继承（brief 根提示）；近义 fresh 精神焕发的、清新的');

  W('refuel', 'verb', '/ˌriːˈfjuːəl/', 'B1', [], '给…加油', 'To put more fuel into a vehicle or machine.', [
    ['给…加油', 'To put more fuel into a vehicle or machine.', '向车辆或机器加入更多燃料。', '可及物或不及物。', 'The plane refuels in Dubai.', '飞机在迪拜加油。', [], ['fuel'], 'verb', '及物', '交通'],
  ], 'refuels~refuelled~refuelled~refuelling',['fuel'], 're- 前缀不作成分，取其后词根 fuel B1，B1 继承（brief 显示 ←?，自行扫根 fuel）；近义 fuel 燃料、加油；英式拼写 refuelled/refuelling');

  W('refugee', 'noun', '/ˌrefjuˈdʒiː/', '', ['CET6'], '难民；逃亡者', 'Somebody forced to leave their country because of war or danger.', [
    ['难民；逃亡者', 'Somebody who has been forced to leave their country because of war or danger.', '因战争或危险被迫离开本国的人。', '可数。', 'Thousands of refugees crossed the border.', '数千名难民越过了边境。', [], ['exile'], 'noun', 'countable', '社会'],
  ], 'refugees', [], '拉丁 refugere（逃走）——re+fugee 切词假象（fuge 非语义基），留空；近义 exile 流亡者、被放逐者');

  W('refurbish', 'verb', '/ˌriːˈfɜːbɪʃ/', '', [], '翻新；整修', 'To renovate or redecorate a room or building.', [
    ['翻新；整修', 'To renovate or redecorate a room or building.', '翻新或重新装修房间或建筑。', '可及物。', 'The hotel was completely refurbished last year.', '酒店去年彻底翻新了。', [], ['renovate', 'upgrade'], 'verb', '及物', '家居'],
  ], 'refurbishes~refurbished~refurbished~refurbishing', ['renovate'], '拉丁 furbire（使光洁）——re+fresh 词形不对应（furbish 非库内 fresh），留空；家族 renovate 翻新，近 renovate、upgrade 升级');

  W('refusal', 'noun', '/rɪˈfjuːzl/', 'A2', ['CET4'], '拒绝；谢绝', 'The act of saying no to a request.', [
    ['拒绝；谢绝', 'The act of saying no to a request.', '对请求说不的行为。', '可数或不可数。', 'Her refusal surprised everyone.', '她的拒绝让所有人都很意外。', [], ['no'], 'noun', 'countable', '通用'],
  ], 'refusals',['refuse'], '←refuse A2 + -al（-al 透明名词后缀），A2 继承（brief 显示 ←?，自行扫根 refuse）；近义 no 不、拒绝（队列原样）');

  W('regain', 'verb', '/rɪˈɡeɪn/', 'B1', [], '恢复；重新获得', 'To get back something you had before.', [
    ['恢复；重新获得', 'To get back something you had before.', '重新得到曾有过的东西。', '可及物。', 'The team regained the lead.', '球队重新取得了领先。', [], ['recover'], 'verb', '及物', '通用'],
  ], 'regains~regained~regained~regaining', ['recover'], 're- 前缀不作成分，取其后词根 gain B1，B1 继承（brief 显示 ←?，自行扫根 gain）；家族/近义 recover 恢复、康复');

  W('regal', 'adjective', '/ˈriːɡl/', '', [], '帝王般的；堂皇的', 'Having the appearance of a king or queen, or very grand.', [
    ['帝王般的；堂皇的', 'Having the appearance of a king or queen, or very grand.', '有帝王气派的；或极其气派的。', '多作定语。', 'The palace has a regal air.', '这座宫殿颇有帝王气象。', [], ['imperial', 'royal'], 'adjective', '定语', '政治'],
  ], '', ['royal'], '拉丁 regalis（王的）——re+gal 为切词假象，留空；家族 royal 国王的、王室的，近 imperial 帝国的、royal');

  W('regimen', 'noun', '/ˈredʒɪmən/', 'C1', [], '养生法；生活制度', 'A fixed plan for food, exercise, or daily life.', [
    ['养生法；生活制度', 'A fixed plan for food, exercise, or daily life.', '饮食、锻炼或日常生活的固定安排。', '可数。', 'Follow a strict exercise regimen.', '遵循严格的锻炼计划。', [], ['regime'], 'noun', 'countable', '健康'],
  ], 'regimens',['regime'], '←regime C1（兄弟派生，regime 词首全段可见 +n，「生活制度」与「体制」语义直连，判断项披露），C1 继承（brief 显示 ←?，队列 refs 确认 regime 在库，本批扫描 C1）；近义 regime 政治体制、政权（队列原样）');
})(typeof window !== 'undefined' ? window : globalThis);
