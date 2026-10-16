/* data/words/cet/author_s16.js — 常用词 S 批次 16，缺口 skillet ~ smug，共 31 条
 * （31 单词 + 0 短语：本批无短语条目，全文件无短语标记）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 × 2：slightly、slipper；本批无 CET6）。
 * brief 说明：%TEMP%\opencode\_s16_brief.txt 的 31 行内容是 sporting ~ starboard，
 *   与本批 31 词完全不对应（队列于 23:46 被 letter_queue 重写、brief 仍按旧 widx 186-217 重生成，
 *   区间落在别的词上，见文件头存疑项）；仅 _s13_brief.txt 首 5 行恰好覆盖本批末 5 词
 *   （smirk、smother、smoulder、sms、smug，均显示 ←?）。
 *   故本批 31 条一律按 ←? 处理，逐一纯文本 fs.readFileSync + indexOf 扫 assets/js/data/words/cet/
 *   author_*.js 取第 4 参 CEFR（未 require 全库），curated.js 看 level 字段。
 * 扫根结论（自扫）：slight B1、slip B1、slack C1、sleep A1、small A1（author_s2/s6.js 第 4 参）——
 * · 透明后缀/规则继承：slightly←slight B1 + -ly、slipper←slip B1 + -er（工具类）、
 *   sleeping←sleep A1 + -ing（动名词转名词）、smaller←small A1 + -er（比较级）、
 *   slacks←slack C1 + -s（复数化，由「松弛」引申为宽松长裤，
 *   判断项：-s 不在明示可继清单，按库内 sales←sale A2 先例）；
 * · 复合词取首成分（规范 §5.3，run-up←run 先例）：small-scale←small A1、
 *   smallholder←small A1（holder A1 在 author_h7.js 同级佐证）；
 * · 形近但语义不直连、切词假象判断项，留空：skillet（skill A2）、skipper（skip B1，
 *   词源为荷兰语 schip 船）、skit（ski A2）、slime（slim B1）、slumber（slum C1、lumber）、
 *   smother（mother A1）；smoulder（与 smoke A1 仅词首部分共享、非整段可见，
 *   兄弟派生不成立，规范 §5.6 判断项）；
 * · 库内无根或后缀不在清单，留空：slab、slant（-ant）、slay、sleek、sleet、slick、slit、slop、
 *   slothful（-ful 透明但根词 sloth 不在库）、slug、slur、sly（-y 不在清单，规范 §5.7）、
 *   smack、smear、smirk、sms（首字母缩略语 Short Message Service）、smug。
 *   共 7 条继承（slacks、sleeping、slipper、slightly、small-scale、smaller、smallholder），
 *   24 条留空；义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s16.js 必须在 _cet_helper.js 之后加载');

  W('skillet', 'noun', '/ˈskɪlɪt/', '', [], '平底煎锅；长柄小锅', 'A small flat pan with a long handle used for frying.', [
    ['平底煎锅', 'A metal pan with a flat bottom and a long handle, used for frying meat, eggs or other food.', '带平底和长柄的金属锅，用来煎肉、煎蛋等食物。', '可数；锅体比一般煎锅小，多做一人份的饭菜。', 'She fried two eggs in an iron skillet.', '她用一只铸铁平底锅煎了两个蛋。', ['an iron skillet', 'fry in a skillet'], ['pan'], 'noun', 'countable', '饮食'],
  ], 'skillets', [], 'brief 不对应（区间落错，见文件头），按 ←? 自扫：库内无 skillet 可继根；skill A2 形近但语义不直连，切词假象判断项留空；近义 pan 平底锅（队列原样，置唯一义项）');

  W('skipper', 'noun/verb', '/ˈskɪpə/', '', [], '船长；队长；率领', 'The leader of a ship, boat or team, or to act as that leader.', [
    ['船长；艇长', 'A person who controls a ship or an aircraft and gives orders to the crew.', '指挥船只或飞机并给船员发出指令的人。', '可数；口语中也指运动队的队长。', 'The skipper ordered the crew to lower the sails.', '船长命令船员降下风帆。', ['the boat skipper', 'the team skipper'], ['captain'], 'noun', 'countable', '交通'],
    ['担任船长；率领', 'To be the captain of a boat, a team or a group and give the orders.', '担任船长或队长并发出指令。', '及物动词，宾语是船、队伍或项目。', 'She skippered the yacht all the way to the island.', '她全程指挥这艘帆船驶向那座岛。', ['skipper a boat', 'skipper the team'], [], 'verb', '及物', '体育'],
  ], 'skippers~skippered~skippered~skippering', ['captain'], 'brief 不对应，按 ←? 自扫：skip B1 形近但语义不直连（skipper 源自荷兰语 schip 船，与「跳过」无关），切词假象判断项留空；家族/近义 captain 队长（队列原样，置首义项）');

  W('skit', 'noun', '/skɪt/', '', [], '简短滑稽表演；小品', 'A short theatrical performance that is meant to be funny.', [
    ['讽刺短剧；滑稽小品', 'A short, funny performance or play, often one that makes fun of a person or a situation.', '简短幽默的表演或小品，常用来讽刺某人或某种情形。', '可数；多见于课堂、舞台与电视节目。', 'The class wrote a skit about the first day of school.', '全班编了一出关于开学第一天的短剧。', ['a comedy skit', 'write a skit'], ['sketch'], 'noun', 'countable', '娱乐'],
  ], 'skits', [], 'brief 不对应，按 ←? 自扫：库内无 skit 可继根；ski A2 形近但语义不直连，切词假象判断项留空；近义 sketch 短小表演（队列原样，置唯一义项）');

  W('slab', 'noun', '/slæb/', '', [], '厚板；厚片；一块', 'A thick flat piece of a hard material or of food.', [
    ['厚板；平板', 'A thick, flat piece of stone, concrete or other hard material.', '石头、混凝土等硬材料做成的厚平板。', '可数，常与 of 连用。', 'They laid a slab of concrete across the muddy ground.', '他们在泥地上铺了一块混凝土板。', ['a slab of concrete', 'a paving slab'], ['tablet', 'tile'], 'noun', 'countable', '工业'],
    ['（食物）一块', 'A thick piece of food such as cake, bread or cheese.', '蛋糕、面包或奶酪等切成的厚块。', '可数，多与 of 连用，常见于非正式语境。', 'He cut himself a thick slab of fruit cake.', '他给自己切了一大块水果蛋糕。', ['a slab of cake', 'a slab of cheese'], [], 'noun', 'countable', '饮食'],
  ], 'slabs', [], 'brief 不对应，按 ←? 自扫：库内无 slab 可继根，-ab 不在可继清单，留空；近义 tablet 厚片、tile 板状片（队列原样，置首义项）');

  W('slacks', 'noun', '/slæks/', 'C1', [], '日常穿着的宽松裤子', 'Loose comfortable trousers worn as casual clothing.', [
    ['宽松长裤；便裤', 'Trousers that are loose and comfortable, worn as informal everyday clothing.', '宽松舒适的裤子，日常非正式场合穿着。', '常用复数 slacks，整体作单数概念，常与 a pair of 连用。', 'He changed into dark slacks before the meeting.', '开会前他换上了一条深色便裤。', ['a pair of slacks', 'dark slacks'], ['pants', 'trousers'], 'noun', 'countable', '外貌'],
  ], '',['slack'], 'brief 不对应，自扫 slack C1（author_s2.js 第 4 参）——slack 松弛的引申为宽松长裤，-s 复数化，C1 继承（判断项：-s 不在明示可继清单，按库内 sales←sale A2 先例）；复数形式单列词条，forms 留空；近义 pants、trousers 裤子（队列原样，置唯一义项）');

  W('slant', 'noun/verb', '/slɑːnt/', '', [], '斜线；斜度；倾向性', 'A slope, a biased angle of looking at something, or to lean to one side.', [
    ['斜线；斜面', 'A sloping line, surface or direction; the angle at which something leans.', '倾斜的线条、表面或方向，即某物所倾的角度。', '可数；常与 at 连用。', 'The roof has a slight slant to let the rain run off.', '屋顶有一点倾斜，好让雨水流走。', ['a gentle slant', 'at a slant'], ['slope'], 'noun', 'countable', '地理'],
    ['（观点的）倾向性', 'A particular way of describing or reporting something that shows one point of view.', '报道或论述某事时所表现出的单一立场或角度。', '可数，常与 on 连用；新闻与评论用语。', 'The article gives a strongly political slant to the news.', '这篇文章给这则新闻加上了很浓的政治倾向。', ['a political slant', 'a new slant on'], ['spin'], 'noun', 'countable', '媒体'],
    ['倾斜；歪向一边', 'To lean or slope in one direction rather than staying straight.', '不保持正直而偏向某一方向。', '不及物动词，主语是倾斜的物体。', 'The tall trees slant towards the sea in the wind.', '那些高树被风吹得朝大海倾斜。', ['slant towards', 'slant to one side'], [], 'verb', '不及物', '自然'],
  ], 'slants~slanted~slanted~slanting', ['slope'], 'brief 不对应，按 ←? 自扫：-ant 不在可继清单，库内亦无 slant 可见词根（源自古北欧语），留空；家族 slope 斜坡、近义 spin 倾向性说法（队列原样，slope 家族入第 10 参兼置首义项近义，spin 置第二义项）');

  W('slay', 'verb', '/sleɪ/', '', [], '杀死；使（观众）大笑不止', 'To kill somebody, or to make an audience laugh a lot.', [
    ['杀死；杀害', 'To kill a person or an animal, especially in a violent way.', '杀死人或动物，尤指以暴力方式。', '及物动词，较旧或文学化的用法，常见于新闻标题与故事。', 'The soldier was slain in the first battle of the war.', '这名士兵在战争的首次战役中阵亡。', ['slay an enemy', 'be slain in battle'], ['kill', 'murder'], 'verb', '及物', '历史'],
    ['使（观众）大笑', 'To make people laugh a lot, especially during a performance.', '让观众在表演中大笑不止。', '及物动词，非正式用法，宾语是观众或听众。', 'The comedian slayed the crowd with one short story.', '这位喜剧演员用一个短故事逗得全场大笑。', ['slay the crowd', 'slay the audience'], [], 'verb', '及物', '娱乐'],
  ], 'slays~slew~slain~slaying', [], 'brief 不对应，按 ←? 自扫：库内无 slay 可继根（古英语强变化动词），kill、murder 为近义非构词根，留空；近义 kill 杀死、murder 谋杀（队列原样，置首义项）');

  W('sleek', 'adjective', '/sliːk/', '', [], '光滑的；时髦而流畅的', 'Smooth, shiny and stylish in shape, movement or design.', [
    ['光滑的；闪亮的', 'Smooth, shiny and free from rough edges or loose parts.', '表面平整光滑、没有毛糙或多余部分。', '多作定语，也可作表语。', 'The polished wood gave the table a sleek finish.', '抛光后的木面让这张桌子显得光滑亮泽。', ['sleek furniture', 'a sleek surface'], [], 'adjective', '定语/表语', '家居'],
    ['时髦而流畅的；有科技感的', 'Looking modern, elegant and advanced in design.', '外形现代、优雅且富有先进感。', '多作定语，常修饰产品、设计与造型。', 'The new phone has a sleek high-tech look.', '这款新手机有着流线型的高科技外观。', ['a sleek design', 'a sleek new model'], ['high-tech'], 'adjective', '定语', '工业'],
  ], '', [], 'brief 不对应，按 ←? 自扫：库内无 sleek 可继根（源自古北欧语），-eek 不在可继清单，留空；近义 high-tech 高科技感的（队列原样，置第二义项）');

  W('sleeping', 'noun/adjective', '/ˈsliːpɪŋ/', 'A1', [], '睡觉；睡着的状态', 'Rest obtained by sleeping, or the condition of being asleep.', [
    ['睡眠', 'The natural period of rest in which the body and mind are inactive and the eyes are closed.', '身体与大脑停止活动、闭上双眼的自然休息状态。', '不可数，常与 go to、lack 等连用。', 'An hour of sleeping helps her focus in the morning.', '睡上一小时能让她上午集中精神。', ['eight hours of sleeping', 'lack of sleeping'], [], 'noun', 'uncountable', '健康'],
    ['睡着的', 'Being asleep; used to describe a person, an animal or a place where somebody is asleep.', '处于睡着的状态；形容人、动物或有人在睡觉的地方。', '只作定语，放在名词前面。', 'The room was quiet except for a sleeping baby.', '屋里很安静，只有一个睡着的婴儿。', ['a sleeping child', 'a sleeping bag'], ['asleep'], 'adjective', '定语', '健康'],
  ], '',['sleep'], 'brief 不对应，自扫 sleep A1（author_s2.js 第 4 参）——sleep + -ing（动名词转名词，-ing 透明后缀），A1 继承；名词义不可数且形容词无词形变化，forms 留空；近义 asleep 睡着的（队列原样，置第二义项）');

  W('sleet', 'noun/verb', '/sliːt/', '', [], '雨夹雪天气；下冰雨', 'Rain that turns to ice as it falls, or such weather.', [
    ['雨夹雪；冻雨', 'Rain that falls as small pieces of ice, or snow that turns to rain before it reaches the ground.', '落下的雨变成小冰粒，或雪在落地前化成雨的天气现象。', '不可数；常由形式主语 it 引出。', 'A cold wind brought sleet by the evening.', '傍晚时冷风带来了雨夹雪。', ['heavy sleet', 'a mix of sleet and snow'], ['hail'], 'noun', 'uncountable', '自然'],
    ['下（雨夹雪）', 'To fall as sleet, used with the word it as the subject.', '以 it 作主语，表示下起雨夹雪。', '不及物动词，主语通常是形式主语 it。', 'It sleeted all through the morning.', '整个上午都在下雨夹雪。', ['it sleets'], [], 'verb', '不及物', '自然'],
  ], 'sleets~sleeted~sleeted~sleeting', [], 'brief 不对应，按 ←? 自扫：库内无 sleet 可继根（源自古英语），-eet 不在可继清单，留空；近义 hail 冰雹（队列原样，置首义项）');

  W('slick', 'adjective/noun', '/slɪk/', '', [], '滑溜的；讨巧的；浮油层', 'Smooth and slippery, clever but not always honest, or a layer of oil on water.', [
    ['滑溜的；打滑的', 'Smooth, wet or polished so that it is hard to hold or to stand on.', '湿润或打磨得发亮、难以抓握或站立的表面。', '多作定语，常形容路面、油污与抛光面。', 'The floor was slick with rainwater.', '地板被雨水打得很滑。', ['a slick floor', 'slick with oil'], [], 'adjective', '定语/表语', '家居'],
    ['（言辞）讨巧圆滑的', 'Clever, smooth and ready-made, but not always completely sincere or reliable.', '说话巧妙现成、听上去可信，却未必完全真诚可靠。', '可作定语或表语，常形容回答、推销与手法。', 'He gave a slick answer that satisfied nobody.', '他给了一个油滑的回答，谁也不满意。', ['a slick answer', 'a slick sales job'], ['pat', 'plausible'], 'adjective', '定语/表语', '社交'],
    ['浮油层；油膜', 'A thin layer of oil or another liquid floating on the surface of water.', '漂在水面上的一薄层油或其他液体。', '可数，常见搭配 oil slick。', 'Workers cleaned a slick of fuel from the harbour.', '工人们清除了港口水面的浮油。', ['an oil slick', 'a fuel slick'], [], 'noun', 'countable', '环境'],
  ], 'slicks', [], 'brief 不对应，按 ←? 自扫：库内无 slick 可继根，-ick 不在可继清单，留空；近义 pat 现成的、plausible 似乎可信的（队列原样，置第二义项）');

  W('slightly', 'adverb', '/ˈslaɪtli/', 'B1', ['CET4'], '在很小的程度上；少许地', 'To only a slight extent or degree.', [
    ['稍微；略微', 'A little but not much; to a small degree in amount, size or degree.', '数量或程度上很小，只有一点点。', '程度副词，修饰动词。也可修饰形容词与比较级，说明幅度很小。', 'The room was slightly colder than the hall.', '这间屋子比门厅稍微冷一些。', ['slightly bigger', 'slightly change'], ['little', 'somewhat'], 'adverb', '不及物', '通用'],
    ['（身材）瘦小地', 'In a way that describes somebody as small and thin in build.', '形容身材瘦小。', '程度副词，修饰动词，常见于被动结构 be slightly built。', 'The team was slightly built but very quick.', '这支队身材瘦小但非常灵活。', ['a slightly built player'], [], 'adverb', '不及物', '外貌'],
  ], '', ['somewhat'], 'brief 不对应，自扫 slight B1（author_s2.js 第 4 参）——slight + -ly（透明副词后缀），语义直连，B1 继承；家族 somewhat 稍微、近义 little 一点点（队列原样，somewhat 兼家族入第 10 参与首义项近义，little 置首义项）');

  W('slime', 'noun', '/slaɪm/', '', [], '黏液；黏滑污泥', 'A thick slippery liquid or wet mud.', [
    ['体表黏液', 'A thick, wet and slippery liquid that covers the skin of certain small creatures.', '覆盖在某些小动物体表的湿黏液体。', '不可数；也用于故事与游戏中想象的黏性物质。', 'The bottom of the tank was covered in green slime.', '水箱底部覆着一层绿色黏液。', ['green slime', 'a coat of slime'], [], 'noun', 'uncountable', '自然'],
    ['黏滑的污泥', 'Soft, wet mud that makes a surface slippery and dirty.', '让地面变得又滑又脏的湿软泥浆。', '不可数，常形容河岸与积水处。', 'We sank into the slime along the river bank.', '我们陷进了河岸边的黏泥里。', ['river slime'], ['mud'], 'noun', 'uncountable', '自然'],
  ], '', [], 'brief 不对应，按 ←? 自扫：与 slim B1 形近但语义不直连（slim 苗条、slime 黏液，词源不同），切词假象判断项留空；近义 mud 泥浆（队列原样，置第二义项）');

  W('slipper', 'noun', '/ˈslɪpə/', 'B1', ['CET4'], '在家穿的软便鞋；拖鞋', 'A soft house shoe that the foot slides into.', [
    ['拖鞋；室内便鞋', 'A light house shoe with an open back that the foot slides into without using the hands.', '后跟敞开、不用手也能一脚蹬进去的室内软鞋。', '可数，常用复数 slippers；a pair of slippers 一双拖鞋。', 'She left her slippers by the bedroom door.', '她把拖鞋放在卧室门口。', ['a pair of slippers', 'woollen slippers'], ['mule'], 'noun', 'countable', '家居'],
  ], 'slippers', ['mule'], 'brief 不对应，自扫 slip B1（author_s2.js 第 4 参）——slip 滑入 + -er（工具类透明后缀），拖鞋即一脚蹬入的鞋，语义直连，B1 继承；家族/近义 mule 封闭式拖鞋（队列原样，置唯一义项）');

  W('slit', 'noun/verb', '/slɪt/', '', [], '细长开口；狭缝；切开', 'A long narrow opening, or to make such an opening.', [
    ['窄缝；细长开口', 'A thin, narrow opening made in a surface such as fabric, paper or wood.', '在布料、纸张或木材等表面开出的细长口子。', '可数，常与 in 连用。', 'There is a slit for letters in the front door.', '前门上有一道投信的狭缝。', ['a narrow slit', 'a slit in the fabric'], ['slot'], 'noun', 'countable', '工具'],
    ['（墙上的）窥视狭孔；枪眼', 'A narrow opening in a wall, used for looking through or firing through.', '墙上开的窄缝，用来观望或射击。', '可数，多见于城堡、掩体等建筑。', 'Guards watched the street through a stone slit.', '守卫透过石制狭孔观察街道。', ['a firing slit', 'a viewing slit'], ['loophole'], 'noun', 'countable', '军事'],
    ['切开；划出狭缝', 'To make a long narrow cut or opening in something.', '在某物上划出一道又长又窄的口子。', '及物动词，常见于布料、纸张与包装。', 'She slit the envelope open with a knife.', '她用刀把信封划开。', ['slit open', 'slit the paper'], [], 'verb', '及物', '工具'],
  ], 'slits~slit~slit~slitting', [], 'brief 不对应，按 ←? 自扫：库内无 slit 可继根（源自古北欧语），-it 不在可继清单，留空；近义 slot 狭槽、loophole 窥孔（队列原样，slot 置首义项、loophole 置第二义项）');

  W('slop', 'noun/verb', '/slɒp/', '', [], '泔水；泼洒的液体；泼洒', 'Waste liquid or food, or to spill it in a messy way.', [
    ['泔水；残羹剩汁', 'Liquid or soft food that has been spilt, or waste food given to animals.', '洒出来的液体或稀软食物，也指喂牲口的残羹剩饭。', '不可数；复数 slops 多指泔水与残食。', 'The slop from the kitchen bucket smelled sour.', '厨房桶里的泔水闻起来发酸。', ['kitchen slop', 'feed the slops'], [], 'noun', 'uncountable', '饮食'],
    ['泼洒；溅出', 'To let liquid fall outside a container by mistake, or fall in a messy way.', '不小心让液体洒出容器，或弄得四处飞溅。', '及物动词，常与 over、out 连用，也可不带宾语。', 'He slopped soup over the edge of the bowl.', '他把汤洒到了碗沿外。', ['slop over', 'slop out'], ['spill'], 'verb', '及物', '饮食'],
  ], 'slops~slopped~slopped~slopping', [], 'brief 不对应，按 ←? 自扫：库内无 slop 可继根，-op 不在可继清单，留空；近义 spill 泼洒（队列原样，置第二义项）');

  W('slothful', 'adjective', '/ˈsləʊθfl/', '', [], '不愿出力的；懒散的', 'Not willing to work or make any effort.', [
    ['懒惰的；怠惰的', 'Not willing to work or make any effort; slow and lazy about doing things.', '不愿工作或出力，做事迟缓懒散。', '较文雅的用语，多作定语，也可作表语。', 'A slothful clerk let the letters pile up on his desk.', '一个懒惰的职员让信件在桌上堆了起来。', ['a slothful habit', 'slothful workers'], ['lazy'], 'adjective', '定语/表语', '性格'],
  ], '', [], 'brief 不对应，按 ←? 自扫：-ful 虽为透明形容词后缀，但根词 sloth 不在库内（无级可继），留空；近义 lazy 懒惰的（队列原样，置唯一义项）');

  W('slug', 'noun/verb', '/slʌɡ/', '', [], '蛞蝓；弹丸；猛击', 'A shellless garden creature, a heavy bullet, or a hard blow.', [
    ['蛞蝓；鼻涕虫', 'A small soft grey creature without a shell that lives in gardens and moves slowly on a slimy surface.', '花园里常见的无壳小软体动物，靠分泌黏液缓慢爬行。', '可数；与蜗牛亲缘相近但没有壳。', 'A slug left a shiny trail across the leaf.', '一只蛞蝓在叶子上留下了一道闪亮的痕迹。', ['a garden slug', 'slug trail'], ['snail'], 'noun', 'countable', '自然'],
    ['弹丸；枪弹', 'A heavy piece of metal used as a bullet, shaped for firing from a gun.', '用作子弹、按枪膛形状制成的重金属块。', '可数，常见于军事与狩猎语境。', 'The slug passed through the wooden fence.', '弹丸穿过了木栅栏。', ['a lead slug', 'fire a slug'], [], 'noun', 'countable', '军事'],
    ['猛击；重击', 'To hit something or somebody very hard with a closed hand or a heavy object.', '用拳头或重物用力击打。', '及物动词，非正式用语。', 'The batter slugged the ball far into the left field.', '击球手把球猛击进左外场。', ['slug the ball', 'slug it out'], [], 'verb', '及物', '体育'],
  ], 'slugs~slugged~slugged~slugging', ['snail'], 'brief 不对应，按 ←? 自扫：库内无 slug 可继根，-ug 不在可继清单，留空；家族/近义 snail 蜗牛（队列原样，置首义项）');

  W('slumber', 'noun/verb', '/ˈslʌmbə/', '', [], '安稳的睡眠；睡', 'To rest in sleep, or the state of being asleep.', [
    ['睡眠；安睡', 'A sleep or sleeping period, referred to in a gentle and literary way.', '睡眠或一段睡着的时间，多用于温和或文学性的表达。', '不可数，常见于 fall into、sink into 等搭配。', 'She fell into a deep slumber in the armchair.', '她在扶手椅里沉沉睡去。', ['fall into a deep slumber', 'peaceful slumber'], ['sleep'], 'noun', 'uncountable', '健康'],
    ['睡；安睡', 'To sleep, especially quietly and peacefully.', '睡觉，尤指安静安稳地睡。', '不及物动词，多用于文学描写。', 'The old house slumbered under a blanket of snow.', '老房子在雪毯下静静安睡。', ['slumber peacefully', 'slumber through the night'], [], 'verb', '不及物', '文学'],
  ], 'slumbers~slumbered~slumbered~slumbering', ['sleep'], 'brief 不对应，按 ←? 自扫：库内无 slumber 可继根（slum C1、lumber 与语义均不直连，切词假象判断项），词尾 -der 非独立后缀，留空；家族/近义 sleep 睡眠（队列原样，置首义项）');

  W('slur', 'noun/verb', '/slɜː/', '', [], '侮辱性言辞；含糊地说', 'An insulting remark, or to speak unclearly or say something insulting.', [
    ['侮辱性言辞；中伤话', 'An insulting remark about a person or a group, often about their race, background or way of life.', '针对个人或群体的侮辱性话语，常涉及种族、出身或生活方式。', '可数，常与 make、use 连用。', 'The speech contained a cruel slur against the workers.', '这篇讲话里含着针对工人的恶毒中伤。', ['a cruel slur', 'a racial slur'], ['insult'], 'noun', 'countable', '社会'],
    ['侮辱；中伤', 'To say something insulting and unfair about a person or a reputation.', '说出有损他人名誉的侮辱性话语。', '及物动词，宾语是人、群体或名誉。', 'He was accused of slurring the whole profession.', '他被指责中伤了整个行业。', ['slur a group', 'slur a profession'], [], 'verb', '及物', '社会'],
    ['（因醉酒或疾病）含糊地说', 'To talk in a way that is not clear because of drink, tiredness or illness.', '因醉酒、疲劳或疾病而说话含混不清。', '不及物动词，也可作及物动词。', 'After two drinks his words began to slur.', '两杯酒下肚后他说话开始含混。', ['words begin to slur'], [], 'verb', '不及物', '健康'],
  ], 'slurs~slurred~slurred~slurring', [], 'brief 不对应，按 ←? 自扫：库内无 slur 可继根，-ur 不在可继清单，留空；近义 insult 侮辱（队列原样，置首义项）');

  W('sly', 'adjective', '/slaɪ/', '', [], '狡猾的；暗中的', 'Clever at tricking people, or done secretly.', [
    ['狡猾的；鬼鬼祟祟的', 'Clever at deceiving people in a secret way that is hard to notice.', '善于以不易察觉的秘密方式欺骗他人。', '可作定语或表语，常与 about 连用。', 'He gave a sly look across the table and said nothing.', '他朝桌子对面狡黠地看了一眼，什么也没说。', ['a sly look', 'a sly trick'], ['cunning'], 'adjective', '定语/表语', '性格'],
    ['暗中的；会心的', 'Done quietly and secretly, as if to avoid being noticed, such as a look or a joke.', '悄悄进行、不欲人注意的，如眼神或玩笑。', '多作定语，常见于 a sly glance、a sly grin。', 'She gave a sly glance at the hidden present.', '她偷偷瞥了一眼藏好的礼物。', ['a sly glance', 'a sly grin'], [], 'adjective', '定语', '情感'],
  ], '', ['cunning'], 'brief 不对应，按 ←? 自扫：-y 不在可继清单（规范 §5.7），库内亦无 sly 词根，留空；家族/近义 cunning 狡猾的（队列原样，置首义项）');

  W('smack', 'noun/verb', '/smæk/', '', [], '一巴掌；用力拍打；啪的一声', 'A sharp slap, a hard blow, or to hit with an open hand.', [
    ['（打脸的）一巴掌', 'A sharp hit with the open hand, especially on the face.', '张开手掌的快速击打，尤指打在脸上。', '可数，常与 across、in the face 连用。', 'The boy got a smack on the wrist for grabbing the food.', '男孩因为抢食物手腕上挨了一下。', ['a smack on the hand', 'a smack in the face'], ['slap'], 'noun', 'countable', '社交'],
    ['（用力）拍打；重击', 'To hit something or somebody with a flat hand or with a heavy object.', '用平摊的手或重物击打某人或某物。', '及物动词，常见搭配 smack the table。', 'He smacked the table to stop the argument.', '他拍了一下桌子，停止了争吵。', ['smack the table', 'smack a ball'], [], 'verb', '及物', '社交'],
    ['（撞击的）啪的一声', 'A sharp sound made by something hitting a surface with force.', '物体用力撞击表面发出的清脆响声。', '可数，常与 loud 连用。', 'The door closed with a loud smack.', '门啪的一声关上了。', ['a loud smack', 'shut with a smack'], [], 'noun', 'countable', '通用'],
  ], 'smacks~smacked~smacked~smacking', ['slap'], 'brief 不对应，按 ←? 自扫：库内无 smack 可继根（源自低地德语），-ack 不在可继清单，留空；家族/近义 slap 掌掴（队列原样，置首义项）');

  W('small-scale', 'adjective', '/ˌsmɔːl ˈskeɪl/', 'A1', [], '规模有限的；按比例缩小的', 'Smaller in size or number than usual, or made on a reduced scale.', [
    ['规模有限的', 'Involving only a small number of people, things or activities compared with the usual size.', '与通常规模相比，只涉及少数人、物或活动。', '多作定语，常修饰 project、study、operation 等。', 'They ran a small-scale test before the full launch.', '他们在全面推出前做了一次小规模试验。', ['a small-scale project', 'a small-scale study'], [], 'adjective', '定语', '商务'],
    ['小型的；缩微的', 'Made much smaller than the real thing while keeping the same shape.', '保持形状不变而按比例做小的。', '多作定语，常修饰 model、version 等。', 'The club built a small-scale model of the bridge.', '俱乐部做了一座这座桥的缩微模型。', ['a small-scale model', 'a small-scale version'], ['miniature'], 'adjective', '定语', '科学'],
  ], '',['small'], 'brief 不对应，自扫复合词取首成分 small A1（author_s6.js 第 4 参，规范 §5.3 run-up←run 同例），语义直连，A1 继承；近义 miniature 微型的（队列原样，置第二义项）');

  W('smaller', 'adjective', '/ˈsmɔːlə/', 'A1', [], '更小的；更少的', 'The comparative form meaning less in size or number.', [
    ['（尺寸、程度）更小的', 'Being less in size, amount or importance than somebody or something else.', '在尺寸、数量或重要性上比另一者更小。', '形容词 small 的比较级，常与 than 连用。', 'They moved into a slightly smaller flat.', '他们搬进了一套稍小的公寓。', ['a smaller size', 'smaller than before'], [], 'adjective', '定语/表语', '通用'],
    ['（数量）更少的', 'Used to say that the number of things of one kind is lower than before.', '表示某类事物的数量比以前更少。', '作定语修饰复数名词，常见于书面与商务语境。', 'The company reported a smaller number of complaints.', '公司报告的投诉数量有所减少。', ['a smaller number', 'smaller profits'], ['less'], 'adjective', '定语', '商务'],
  ], '',['small'], 'brief 不对应，自扫 small A1（author_s6.js 第 4 参）——small + -er（比较级透明后缀），语义直连，A1 继承；近义 less 更少（队列原样，置第二义项）');

  W('smallholder', 'noun', '/ˈsmɔːlhəʊldə/', 'A1', [], '经营小块土地的人；小农', 'Somebody who owns or rents a small piece of farm land.', [
    ['小农；自耕农', 'A person who owns or rents a small piece of land and grows crops or keeps animals on it.', '拥有或租用小块土地并种植作物、饲养牲畜的人。', '可数；多见于农业与土地政策语境。', 'Each smallholder was given two hectares of land.', '每位小农都分到了两公顷土地。', ['a smallholder farm', 'land for smallholders'], ['peasant'], 'noun', 'countable', '农业'],
  ], 'smallholders', ['peasant'], 'brief 不对应，自扫复合词取首成分 small A1（author_s6.js 第 4 参，规范 §5.3；holder A1 在 author_h7.js 同级佐证），A1 继承；家族/近义 peasant 农民（队列原样，置唯一义项）');

  W('smear', 'noun/verb', '/smɪə/', '', [], '涂抹；污迹；诽谤', 'To spread something roughly over a surface, the mark it leaves, or a false damaging claim.', [
    ['涂抹；抹上', 'To spread a soft or wet substance over a surface in a rough or uneven way.', '把柔软或湿润的东西粗略地涂在表面上。', '及物动词，常与 on、with 连用。', 'She smeared butter over the hot toast.', '她把黄油抹在热吐司上。', ['smear butter on', 'smear with paint'], ['spread'], 'verb', '及物', '饮食'],
    ['污迹；涂抹处', 'A dirty or unclear mark left by spreading something, or a thin layer put on a surface.', '涂抹后留下的脏污痕迹，或薄薄涂上的一层。', '可数；医学语境指涂片。', 'There was a smear of jam on the plate.', '盘子上有一块果酱污迹。', ['a smear of paint', 'a throat smear'], [], 'noun', 'countable', '健康'],
    ['诽谤；中伤', 'A false and unfair statement intended to damage the good name of a person.', '为损害他人名誉而散布的不实言论。', '可数；常见搭配 character smear。', 'The campaign was full of smears about the opponent.', '这场竞选充满了对对手的诽谤。', ['a smear campaign', 'a character smear'], [], 'noun', 'countable', '政治'],
  ], 'smears~smeared~smeared~smearing', [], 'brief 不对应，按 ←? 自扫：库内无 smear 可继根（源自古英语 smērian），-ear 不在可继清单，留空；近义 spread 涂开（队列原样，置首义项）');

  W('smirk', 'noun/verb', '/smɜːk/', '', [], '自满的笑；假笑', 'A pleased, self-satisfied smile, or to smile that way.', [
    ['得意的笑；幸灾乐祸的笑', 'A pleased, self-satisfied smile, especially one that shows amusement at the trouble of others.', '得意或自满的笑容，尤指因他人倒霉而感到好笑的那种。', '可数，常与 on 连用。', 'She could not hide the smirk on her face after the joke.', '那个笑话讲完后，她掩饰不住一脸得意的笑。', ['a smirk on the face', 'wipe the smirk off'], ['grin'], 'noun', 'countable', '情感'],
    ['得意地笑；假笑', 'To smile in a pleased and self-satisfied way, often without meaning to be friendly.', '带着得意或不友好的意味笑。', '不及物动词，常与 at 连用。', 'The winner smirked at the losing team.', '获胜者朝输掉的队伍得意地笑了。', ['smirk at', 'smirk with delight'], [], 'verb', '不及物', '情感'],
  ], 'smirks~smirked~smirked~smirking', [], 'brief（_s13_brief 首行恰好覆盖本批）显示 ←?，自扫库内无 smirk 可继根（源自中古德语），-irk 不在可继清单，留空；近义 grin 咧嘴笑（队列原样，置首义项）');

  W('smother', 'verb', '/ˈsmʌðə/', '', [], '使窒息；厚厚覆盖；抑制', 'To stop somebody breathing, cover food completely, or hold back a feeling.', [
    ['使窒息；闷住', 'To make it hard for somebody to breathe by covering the face or filling the air with smoke.', '通过捂住面部或弥漫的烟雾使人呼吸困难。', '及物动词，常见于事故与火场报道。', 'The thick smoke smothered the firefighters as they climbed the stairs.', '浓烟让正在上楼的消防员透不过气。', ['be smothered in smoke'], [], 'verb', '及物', '健康'],
    ['（用调料）厚厚覆盖', 'To cover food completely with sauce, sugar, cream or another topping.', '用酱汁、糖、奶油等把食物完全盖住。', '及物动词，常与 in、with 连用。', 'She smothered the pancakes in honey.', '她在薄饼上浇满了蜂蜜。', ['smother with cream', 'smother in sugar'], [], 'verb', '及物', '饮食'],
    ['抑制；掩盖（感情）', 'To hide a feeling or to stop something from developing.', '把感情藏起来不表现出来，或压制某种事物的发展。', '及物动词，常见搭配 smother a laugh、smother a fire。', 'He smothered a laugh when he saw the hat.', '看到那顶帽子时他忍住了笑。', ['smother a laugh', 'smother the fire'], ['stifle'], 'verb', '及物', '情感'],
  ], 'smothers~smothered~smothered~smothering', [], 'brief（_s13_brief 第 2 行恰好覆盖本批）显示 ←?，自扫：与 mother A1 形近但语义不直连，切词假象判断项留空；近义 stifle 抑制（队列原样，置第三义项）');

  W('smoulder', 'verb', '/ˈsməʊldə/', '', [], '闷烧；压抑在心中', 'To burn slowly with smoke, or to exist without being expressed.', [
    ['（无焰）闷烧', 'To burn slowly with plenty of smoke but without a flame.', '缓慢燃烧、冒出大量烟却没有火焰。', '不及物动词，英式拼写 smoulder，美式 smolder。', 'The heap of leaves smouldered for hours.', '那堆树叶闷烧了好几个小时。', ['smoulder for hours', 'a smouldering fire'], ['smoke'], 'verb', '不及物', '自然'],
    ['（感情）压抑在心中', 'To exist or be felt strongly for a long time without being expressed.', '某种强烈感情长期存在却未表露出来。', '不及物动词，常与 with 连用，多用于文学描写。', 'She smouldered with anger through the whole meeting.', '整场会议她都压着一肚子火。', ['smoulder with anger', 'smoulder with resentment'], [], 'verb', '不及物', '情感'],
  ], 'smoulders~smouldered~smouldered~smouldering', [], 'brief（_s13_brief 第 3 行恰好覆盖本批）显示 ←?，自扫：与 smoke A1 语义相关但仅词首部分共享、非整段可见，兄弟派生不成立（规范 §5.6 判断项），词尾 -der 非后缀，留空；近义 smoke 冒烟（队列原样，置首义项）');

  W('sms', 'noun', '/ˌes em ˈes/', '', [], '手机之间的简短文字信息', 'A short text message sent from one mobile phone to another.', [
    ['短信；手机短信', 'A short written message sent from one mobile phone to another.', '从一部手机发送到另一部手机的简短文字信息。', '可数，复数同形；源自 Short Message Service。', 'She sent a quick sms to say she would be late.', '她发了条短信说会迟到。', ['send an sms', 'an sms message'], ['text'], 'noun', 'countable', '媒体'],
  ], '', [], 'brief（_s13_brief 第 4 行恰好覆盖本批）显示 ←?，首字母缩略语（Short Message Service），非词根派生，text 为近义非构词根，留空；缩略语复数不常用，forms 留空；近义 text 短信（队列原样，置唯一义项）');

  W('smug', 'adjective', '/smʌɡ/', '', [], '对自己过于满意的样子；傲然自得', 'Feeling too pleased with yourself.', [
    ['自鸣得意的；自满的', 'Too pleased with yourself, as if you think you are better than everybody else.', '对自己过于满意，仿佛别人都不如自己。', '可作定语或表语，含贬义。', 'He looked smug after hearing the praise.', '听到表扬后他显得很得意。', ['a smug expression', 'look smug'], ['complacent'], 'adjective', '定语/表语', '性格'],
    ['（表情）自得而安然的', 'Showing a calm and satisfied look, with the mouth closed and the chin slightly raised.', '嘴角紧闭、下巴微抬，显出安逸满足的神情。', '多作定语，形容面容与神态。', 'The cat had a smug look after its meal.', '猫吃饱后一脸惬意的样子。', ['a smug grin', 'a smug face'], [], 'adjective', '定语', '外貌'],
  ], '', ['complacent'], 'brief（_s13_brief 第 5 行恰好覆盖本批）显示 ←?，自扫库内无 smug 可继根，-ug 不在可继清单，留空；家族/近义 complacent 自满的（队列原样，置首义项）');
})(typeof window !== 'undefined' ? window : globalThis);
