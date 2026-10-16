/* H4 rewrite draft. Quiz wording and examples are individually authored. */
(function (global) {
  'use strict';
  const D = global.RA.D;
  function add(lemma, example, chinese, questions) {
    D(lemma, {
      extraExamples: [{ sense: questions[0][0], english: example, chinese }],
      quiz: questions.map((q, i) => ({
        id: `${lemma}.q${i + 1}`, senseId: `${lemma}.s${q[0]}`,
        errorType: q[1], type: q[1], prompt: q[2], options: q[3], answer: q[4], explain: q[5],
      })),
    });
  }

  add('half', 'Half of the orchestra rehearsed in the smaller room while the brass section waited outside.', '一半乐团在较小的房间排练，铜管乐组则在外面等候。', [
    [1,'meaning','Half of the tickets sold before noon means what fraction sold?',['One of two equal parts','Every ticket','Exactly two tickets'],'One of two equal parts','half 表示整体的二分之一，票数本身可以多于两张。'],
    [2,'grammar','Choose the natural phrase for a period lasting thirty minutes.',['half an hour','a half hourly','half to an hour'],'half an hour','hour 以元音音素开头，因此用 an；half an hour 是常用说法。'],
    [3,'meaning','The glass is half full describes its contents as:',['partly filling it','completely empty','twice its capacity'],'partly filling it','此处 half 作副词，说明 full 的程度。'],
    [4,'meaning','In a football report, “the first half” is:',['the opening period of play','one of two teams','the interval after the match'],'the opening period of play','half 也可指比赛的两个时段之一。'],
  ]);
  add('half a dozen', 'The community kitchen ordered half a dozen extra bowls for volunteers arriving after work.', '社区厨房额外订了六只碗，给下班后赶来的志愿者使用。', [
    [1,'meaning','A shopkeeper packs half a dozen pears; how many go in the bag?',['Six','Twelve','Three'],'Six','a dozen 是十二，half a dozen 是其中的一半。'],
    [1,'grammar','Complete the order: “Please bring half a dozen ___.”',['muffins','muffin','muffines'],'muffins','数量短语 half a dozen 后通常接复数可数名词。'],
    [1,'usage','Which situation best fits “half a dozen volunteers”?',['Six people volunteered','Twelve people volunteered','One person volunteered twice'],'Six people volunteered','该短语直接表示六个或六位。'],
    [1,'collocation','A baker sold half a dozen ___ before the shop closed.',['bagels','bagel of','bagelses'],'bagels','自然结构为 half a dozen + 复数名词。'],
  ]);
  add('half-hearted', 'The council made a half-hearted attempt to repair the playground, leaving several broken swings untouched.', '市政会敷衍地尝试维修游乐场，却没有修理几架坏掉的秋千。', [
    [1,'meaning','A half-hearted apology is most likely:',['insincere or lacking effort','deeply enthusiastic','given by half the audience'],'insincere or lacking effort','half-hearted 描述投入或热情不足。'],
    [1,'grammar','Choose the adjective in “a ___ response”.',['half-hearted','half-heartedly','half heart'],'half-hearted','response 是名词，前面需要形容词 half-hearted。'],
    [1,'collocation','Which noun naturally follows half-hearted in a review?',['attempt','thermometer','postcode'],'attempt','half-hearted attempt 是常见搭配，表示不够认真的尝试。'],
    [1,'confusable','The actors performed ___, as if they wanted to leave early.',['half-heartedly','half-hearted','half a heart'],'half-heartedly','修饰 performed 要用副词 half-heartedly。'],
  ]);
  add('halfway', 'We were halfway through the documentary when the projector overheated and shut down.', '纪录片放到一半时，投影仪过热关机了。', [
    [1,'meaning','A café halfway between the station and campus is located:',['at the middle point','inside the station','beyond the campus'],'at the middle point','空间用法表示两地之间的中点附近。'],
    [2,'grammar','Choose the phrase meaning “in the middle of reading the novel.”',['halfway through the novel','halfway under the novel','halfway beside the novel'],'halfway through the novel','halfway through 表示过程或时间已经过半。'],
    [3,'meaning','A halfway solution to a dispute is:',['a compromise, not a complete answer','a solution reached in half an hour','a solution that failed entirely'],'a compromise, not a complete answer','形容词义可表示不彻底或折中的。'],
    [1,'collocation','To ask both sides to compromise, say “meet each other ___.”',['halfway','halfly','middleway'],'halfway','meet someone halfway 是常见表达，意为各让一步。'],
  ]);
  add('halite', 'Geologists found a band of halite beneath the clay layer and collected crystals for laboratory analysis.', '地质学家在黏土层下发现一层岩盐，并采集晶体送往实验室分析。', [
    [1,'meaning','A mineral sample labeled halite is chiefly:',['rock salt','granite','coal'],'rock salt','halite 是矿物岩盐的名称。'],
    [1,'register','Which label belongs on a grocery shelf for cooking salt?',['table salt','halite crystals','sodium deposit specimen'],'table salt','普通食盐零售通常称 salt；halite 是矿物学用语。'],
    [1,'context','A geologist examining halite would most likely use a:',['mineral microscope','bread oven','sewing machine'],'mineral microscope','halite 是矿物，适合在地质或矿物研究语境中讨论。'],
    [1,'collocation','Which phrase refers to naturally occurring halite?',['a halite deposit','a halite recipe','a halite passenger'],'a halite deposit','deposit 可指地下矿床，与矿物 halite 搭配合理。'],
  ]);
  add('hall', 'Guests left their muddy boots in the hall before entering the family’s living room.', '客人进起居室前把沾泥的靴子留在门厅里。', [
    [1,'meaning','In “Leave your coat in the hall,” the hall is most likely:',['the entrance space inside a home','an outdoor garden','a kitchen cupboard'],'the entrance space inside a home','hall 可指房屋入口内侧的门厅。'],
    [2,'meaning','A graduation ceremony with hundreds of seats may take place in a:',['large hall','coat pocket','narrow staircase'],'large hall','hall 可指供集会或典礼使用的大房间。'],
    [3,'meaning','A student who lives in a university hall lives in:',['student accommodation','a concert venue','a public corridor'],'student accommodation','hall 在大学语境可指学生宿舍楼。'],
    [4,'confusable','Which phrase clearly names a passage connecting rooms?',['down the hallway','inside the concert hall','at the town hall'],'down the hallway','hallway 专指走廊；hall 还可指大厅或门厅。'],
  ]);
  add('hall of residence', 'First-year students were assigned rooms in a hall of residence a short walk from the lecture buildings.', '一年级学生被安排住进离教学楼步行不远的学生宿舍。', [
    [1,'meaning','A British university hall of residence is primarily a place to:',['live as a student','hold a courtroom trial','store sports equipment'],'live as a student','该短语指大学生居住的宿舍楼。'],
    [1,'register','Which notice would most likely be posted in a hall of residence?',['Quiet hours begin at ten','Departures leave from platform three','Fresh bread is sold here'],'Quiet hours begin at ten','住宿楼常张贴关于安静时段等住户规则。'],
    [1,'collocation','A new student may apply for a room in a:',['hall of residence','hall of concert','residence of lecture'],'hall of residence','固定表达是 hall of residence。'],
    [1,'meaning','If Maya “lives in a hall of residence,” she probably:',['has student accommodation','works as a concert singer','owns a village hall'],'has student accommodation','句子说明她住在大学宿舍，而不是在大厅工作。'],
  ]);
  add('hallmark', 'Careful source-checking has become a hallmark of the journal’s science reporting.', '仔细核对来源已成为这家期刊科学报道的鲜明特点。', [
    [1,'meaning','The hallmark of a reliable guide is the feature that most clearly:',['identifies its quality','lists its page numbers','hides its author'],'identifies its quality','hallmark 指能体现品质或特征的标志。'],
    [1,'grammar','Choose the natural sentence.',['Patience is a hallmark of her teaching.','Patience is a hallmarkly of her teaching.','Patience hallmark her teaching.'],'Patience is a hallmark of her teaching.','a hallmark of + 名词表示某物的显著特征。'],
    [1,'collocation','Which noun phrase is natural?',['a hallmark of excellence','a hallmark to excellence','a hallmark at excellence'],'a hallmark of excellence','hallmark 常与 of 连用说明标志何种品质。'],
    [1,'meaning','If honesty is the hallmark of a witness, it is the witness’s:',['distinctive quality','job title','physical height'],'distinctive quality','此处 hallmark 表示鲜明、可识别的特征。'],
  ]);
  add('hallowed', 'The team paused before the hallowed stadium entrance, where generations of players had celebrated victories.', '球队在那座神圣球场的入口前停下；几代球员曾在那里庆祝胜利。', [
    [1,'meaning','A hallowed place is treated as:',['sacred or deeply respected','recently painted','open only at night'],'sacred or deeply respected','hallowed 描述被视为神圣或备受敬重的事物。'],
    [1,'collocation','Which phrase suits a memorial with great historical respect?',['hallowed ground','hallowed receipt','hallowed timetable'],'hallowed ground','hallowed ground 是指神圣或受敬重之地的自然搭配。'],
    [1,'register','A writer calls an old library “hallowed” to convey:',['reverence','its exact temperature','that it is newly built'],'reverence','该词带有尊崇意味，不是普通的年代或温度描述。'],
    [1,'meaning','A hallowed tradition is one that people:',['regard with deep respect','have just invented yesterday','find impossible to remember'],'regard with deep respect','形容词强调传统受到尊崇。'],
  ]);
  add('hallucination', 'After several sleepless nights, the patient reported a brief hallucination of lights moving across the ceiling.', '连续几夜没睡后，病人说自己短暂看到天花板上有光点移动的幻觉。', [
    [1,'meaning','A hallucination is a perception that:',['seems real without an external source','is shared by every observer','is deliberately drawn on a map'],'seems real without an external source','幻觉是没有相应外界刺激却产生的感知。'],
    [1,'context','A doctor hearing about a hallucination would ask about:',['what the patient perceived','the patient’s favorite recipe','the color of the clinic walls only'],'what the patient perceived','判断幻觉需要了解病人感知到的内容及情境。'],
    [1,'grammar','Complete the sentence: “The fever caused ___.”',['a hallucination','a hallucinate','hallucinatoryly'],'a hallucination','cause 后接名词 hallucination；后两项不是合适的名词形式。'],
    [1,'meaning','If someone describes a hallucination, the event was:',['perceived but not actually present','a documented public performance','a planned conversation'],'perceived but not actually present','hallucination 是一种主观感知，并非真实出现的对象。'],
  ]);
  add('hallway', 'A motion sensor switched on the hallway lights as the residents returned from the garden.', '住户从花园回来时，感应器打开了走廊的灯。', [
    [1,'meaning','A hallway usually lets people:',['walk between rooms or entrances','cook a meal','sleep outdoors'],'walk between rooms or entrances','hallway 是建筑物内连接空间的通道。'],
    [1,'collocation','The children ran ___ to answer the doorbell.',['down the hallway','across the kettle','under the calendar'],'down the hallway','down the hallway 是表示沿走廊移动的自然搭配。'],
    [1,'meaning','A narrow hallway is part of a building’s:',['interior passageway','roof garden','water system'],'interior passageway','hallway 指室内走廊，不是屋顶或管道。'],
    [1,'confusable','A large room for a concert is a concert ___, not a hallway.',['hall','closet','corridor'],'hall','hall 可指大型活动空间，hallway 是狭长通道。'],
  ]);
  add('halt', 'The railway company halted service after inspectors found a cracked support beside the bridge.', '检查人员在桥旁发现支撑结构开裂后，铁路公司暂停了运营。', [
    [1,'meaning','When a moving train halts, it:',['stops','speeds up','changes its color'],'stops','动词 halt 的不及物用法表示停止移动或运行。'],
    [2,'grammar','Which sentence uses halt with an object?',['The storm halted ferry service.','The ferry halted at noon.','A halt came suddenly.'],'The storm halted ferry service.','及物用法后直接接被停止的活动或事物。'],
    [3,'meaning','A call for “a halt to the fighting” asks for:',['an end to the fighting','more weapons','a longer battle'],'an end to the fighting','名词 halt 可指活动的停止或暂停。'],
    [1,'collocation','A train that stops entirely may “come to a ___.”',['halt','halting','halves'],'halt','come to a halt 是表示停下来的固定搭配。'],
  ]);
  add('halve', 'The cook halved the recipe because only three guests could attend the dinner.', '厨师把食谱用量减半，因为只有三位客人能来吃饭。', [
    [1,'meaning','If a shop halves the price, the new price is:',['one-half of the old price','twice the old price','unchanged'],'one-half of the old price','halve 表示把数量或价格减到一半。'],
    [1,'grammar','Choose the correct past form: “They ___ the oranges before juicing them.”',['halved','halveded','halve'],'halved','halve 的过去式直接加 d，拼作 halved。'],
    [1,'collocation','A hospital hopes to ___ waiting times by adding another clinic.',['halve','halfly','halves'],'halve','halve waiting times 表示把等待时间减半。'],
    [1,'meaning','To halve a piece of paper is to divide it into:',['two equal parts','four unequal strips','a dozen pieces'],'two equal parts','halve 的核心动作是分成两半。'],
  ]);
  add('ham', 'The deli sliced the smoked ham thinly and layered it with mustard in a toasted sandwich.', '熟食店把烟熏火腿切薄片，夹上芥末做成烤三明治。', [
    [1,'meaning','A ham sandwich normally contains meat from a:',['pig','salmon','lamb'],'pig','食物义 ham 是猪腿部位腌制或熏制的肉。'],
    [3,'meaning','A radio ham is someone who:',['operates amateur radio equipment','sells sandwiches','repairs stage curtains'],'operates amateur radio equipment','ham 也可指业余无线电爱好者。'],
    [4,'meaning','An actor who “hams it up” is acting:',['in an exaggerated way','without speaking','as a radio host'],'in an exaggerated way','ham it up 是演得过火、夸张的习语。'],
    [2,'usage','In a butcher’s shop, “a leg of ham” refers to:',['a preserved cut from a pig’s hind leg','a radio antenna','a theatrical costume'],'a preserved cut from a pig’s hind leg','ham 也指猪后腿制成的整块火腿。'],
  ]);
  add('hamburger', 'The food truck served a grilled hamburger with pickles, lettuce, and a toasted bun.', '餐车供应烤汉堡，配有腌黄瓜、生菜和烤面包胚。', [
    [1,'meaning','A hamburger served in a bun is usually:',['a sandwich with a beef patty','a bowl of raw rice','a slice of ham'],'a sandwich with a beef patty','hamburger 常指夹在圆面包中的牛肉饼。'],
    [2,'meaning','Before placing it in a bun, a cook grills the hamburger as:',['a flat beef patty','a whole loaf','a glass of milk'],'a flat beef patty','该词还可指单独的汉堡牛肉饼。'],
    [3,'meaning','In a US grocery list, “one pound of hamburger” most likely means:',['ground beef','one finished sandwich','one pork chop'],'ground beef','美式用法中 hamburger 也可指碎牛肉。'],
    [1,'collocation','A menu may offer a hamburger with fries and a cold ___.',['drink','drank','drunk'],'drink','drink 是菜单中与汉堡搭配的饮品名词。'],
  ]);
  add('hamlet', 'The bus visits the coastal hamlet only twice a week, so residents plan their shopping carefully.', '公交车每周只去两次海边小村庄，因此居民会仔细安排采购。', [
    [1,'meaning','A hamlet is generally smaller than a:',['village','continent','mountain range'],'village','hamlet 指规模很小的村落。'],
    [1,'context','A person in a hamlet may need to travel to a nearby town for:',['a wider range of services','a different climate','a passport to enter the street'],'a wider range of services','小村庄通常设施较少，居民可能需去附近城镇办事。'],
    [1,'collocation','The old stone church stands at the center of the quiet ___.',['hamlet','hamletly','hamletness'],'hamlet','hamlet 是可数名词，可自然地作地点主语。'],
    [1,'meaning','Which description best fits a hamlet?',['a tiny rural settlement','a crowded capital city','a temporary market stall'],'a tiny rural settlement','hamlet 指很小的村庄或聚居点。'],
  ]);
  D('hamlin', {
    extraExamples: [
      { sense: 1, english: 'Hamlin appears as the family name of two witnesses in the court record.', chinese: 'Hamlin 是法庭记录中两名证人的姓氏。' },
      { sense: 2, english: 'The grower harvested Hamlin oranges before the later sweet-orange varieties ripened.', chinese: '其他晚熟甜橙品种成熟前，种植户就采收了哈姆林甜橙。' },
    ],
    contexts: [
      { domain: '姓名', senseId: 'hamlin.s1', en: 'The archivist capitalized Hamlin in the index because it was the witness’s surname, not a common noun.', zh: '档案员在索引中把 Hamlin 首字母大写，因为它是证人的姓氏，而非普通名词。', grammar: '用作姓氏时按专名大写。', rationale: 'witness’s surname 明确指向姓氏义。', sourceType: 'authored' },
      { domain: '农业', senseId: 'hamlin.s2', en: 'Warm weather helped the orchard’s Hamlin oranges ripen early enough for the first winter shipment.', zh: '温暖的天气使果园的哈姆林甜橙早早成熟，赶上了冬季首批发货。', grammar: 'Hamlin 作品种名修饰复数 oranges。', rationale: 'orchard、ripen 和 shipment 指向甜橙品种义。', sourceType: 'authored' },
    ],
    mistakes: [{ errorType: 'spelling', wrong: 'The clerk entered the surname as hamlin on the form.', right: 'The clerk entered the surname as Hamlin on the form.', reason: '这里是具体姓氏，专名首字母应大写；只改大小写即可保留原意。', rule: '姓名作专名时首字母大写。', special: '词典词头可按词库惯例小写，句中实际人名仍写 Hamlin。' }],
    quiz: [
      { id: 'hamlin.q1', senseId: 'hamlin.s1', errorType: 'meaning', type: '词义', prompt: 'In “Hamlin appears in the witness list,” Hamlin is a person’s _____.', options: ['family name', 'orange variety', 'job title'], answer: 'family name', explain: '原词条第一义是姓氏，也可见于地名和公司名。' },
      { id: 'hamlin.q2', senseId: 'hamlin.s2', errorType: 'meaning', type: '词义', prompt: 'A crate labeled “Hamlin oranges” contains which kind of fruit?', options: ['an early sweet-orange variety', 'a bitter lemon variety', 'a type of apple'], answer: 'an early sweet-orange variety', explain: 'Hamlin 也指一种早熟甜橙。' },
      { id: 'hamlin.q3', senseId: 'hamlin.s2', errorType: 'collocation', type: '搭配', prompt: 'Choose the natural crop label for this orange variety.', options: ['Hamlin oranges', 'Hamlin wheat', 'Hamlin olives'], answer: 'Hamlin oranges', explain: 'Hamlin orange 是词条列出的品种搭配。' },
      { id: 'hamlin.q4', senseId: 'hamlin.s1', errorType: 'spelling', type: '大小写', prompt: 'In a sentence about a witness’s surname, choose the standard spelling.', options: ['Hamlin', 'hamlin', 'HAMLIN as ordinary capitalization'], answer: 'Hamlin', explain: '具体姓氏作专名时通常写作 Hamlin。' },
    ],
  });
  add('hammer', 'The stage crew used a small hammer to secure the loose floorboard before the dancers arrived.', '舞者到来前，舞台工作人员用小锤子固定松动的地板。', [
    [1,'meaning','A carpenter reaches for a hammer when needing to:',['drive a nail','measure a room’s temperature','paint a wall'],'drive a nail','工具义 hammer 常用于敲钉子。'],
    [3,'grammar','Complete the action: “She ___ the nail into the wood.”',['hammered','hammer','hammering'],'hammered','句子讲述过去发生的动作，需要过去式 hammered。'],
    [4,'meaning','A coach who hammers home a safety rule:',['emphasizes it repeatedly','removes it from the handbook','whispers it only once'],'emphasizes it repeatedly','hammer home 是反复强调某个观点。'],
    [5,'meaning','At an auction, the “final hammer” signals that the item is:',['sold when bidding ends','being repaired','made of steel'],'sold when bidding ends','拍卖木槌落下可表示竞价结束、成交。'],
  ]);
  add('hammerhead', 'A hammerhead shark moved slowly through the aquarium tank while visitors watched from the glass tunnel.', '一条双髻鲨在水族馆池中缓缓游动，游客隔着玻璃隧道观看。', [
    [1,'meaning','A hammerhead shark is named for its unusually shaped:',['head','tail fin','teeth'],'head','hammerhead 作为动物名指头部两侧展开的鲨鱼。'],
    [1,'context','A marine biologist studying a hammerhead would work with:',['a shark','a hammer tool','a songbird'],'a shark','hammerhead 常指双髻鲨，是一种鲨鱼。'],
    [1,'collocation','Choose the accurate phrase for the animal.',['a hammerhead shark','a hammerhead screwdriver','a hammerhead feather'],'a hammerhead shark','hammerhead 与 shark 组成常见动物名称。'],
    [1,'meaning','The “hammer” part of hammerhead describes the animal’s:',['broad, hammer-like head shape','diet of metal tools','ability to build houses'],'broad, hammer-like head shape','名称来自头部轮廓相似，不表示它使用工具。'],
  ]);
  add('hamper', 'Thick smoke hampered the firefighters’ search, forcing them to move slowly through the warehouse.', '浓烟妨碍消防员搜寻，迫使他们缓慢穿过仓库。', [
    [1,'meaning','Heavy rain may hamper an outdoor event by:',['making it harder to proceed','guaranteeing clear skies','providing extra seating'],'making it harder to proceed','动词 hamper 表示妨碍进展，但不一定完全阻止。'],
    [2,'meaning','A picnic hamper is a:',['large basket for food','small kitchen knife','rain jacket'],'large basket for food','hamper 也指装食物或野餐用品的大篮子。'],
    [3,'meaning','In American English, a laundry hamper holds:',['dirty clothes','clean plates','garden soil'],'dirty clothes','laundry hamper 指放待洗衣物的篮子。'],
    [1,'grammar','Choose the sentence with the correct object:',['Fog hampered the search.','Fog hampered at the search.','Fog was hampered the search.'],'Fog hampered the search.','及物动词 hamper 后直接接受阻碍的活动或事物。'],
  ]);
  add('hampshire', 'The family spent a week walking the chalk hills of Hampshire before taking the train back to London.', '这家人在汉普郡的白垩丘陵徒步一周，然后乘火车返回伦敦。', [
    [1,'meaning','Hampshire is the name of a:',['county in southern England','mountain range in Peru','city in Japan'],'county in southern England','此处 Hampshire 按专名用法指英格兰的郡。'],
    [1,'capitalization','How should the place name be written in a sentence?',['Hampshire','hampshire','HAMPshire'],'Hampshire','专名 Hampshire 首字母大写。'],
    [1,'context','A train ticket to Hampshire would be booked for travel to:',['a place in England','a kind of sandwich','a weather condition'],'a place in England','句中 Hampshire 是旅行目的地的地名。'],
    [1,'meaning','A resident of Hampshire lives in:',['a geographic county','a school subject','a musical instrument'],'a geographic county','Hampshire 是地理专名，不是普通物品名称。'],
  ]);
  add('hamster', 'The children filled the hamster’s water bottle and added fresh paper bedding to its cage.', '孩子们给仓鼠的饮水瓶添水，又在笼子里换上新的纸垫料。', [
    [1,'meaning','A hamster is a small:',['rodent often kept as a pet','tropical fish','bird of prey'],'rodent often kept as a pet','仓鼠是常见的小型啮齿动物宠物。'],
    [1,'context','A hamster usually needs which item in its enclosure?',['a wheel for exercise','a saddle for riding','a saltwater reef'],'a wheel for exercise','宠物仓鼠常使用滚轮活动。'],
    [1,'grammar','Choose the plural form: “Two ___ slept in separate cages.”',['hamsters','hamsteres','hamster’s'],'hamsters','规则复数在 hamster 后加 -s。'],
    [1,'meaning','A hamster storing food in its cheeks is showing a behavior of:',['a small rodent','a house cat','a sea turtle'],'a small rodent','储食是仓鼠等啮齿动物常见的行为。'],
  ]);
  add('hand', 'A volunteer offered a hand to the cyclist whose chain had slipped beside the road.', '骑车人的链条在路边脱落时，一位志愿者主动伸手帮忙。', [
    [1,'meaning','The palm and fingers together form your:',['hand','wristwatch','elbow'],'hand','hand 的基本义是手臂末端的手部。'],
    [2,'meaning','On an analog clock, the minute hand points to:',['the current minute','the date','the weather'],'the current minute','钟表的 hand 可指指示时间的指针。'],
    [4,'idiom','If a neighbor gives you a hand moving a sofa, the neighbor:',['helps you','hands you a clock','asks you to leave'],'helps you','give someone a hand 是“帮某人一把”。'],
    [5,'grammar','The clerk will ___ the receipt to each customer.',['hand','hands to','handing'],'hand','hand 作动词表示递交，后面直接接物品。'],
  ]);
  add('hand in', 'Please hand in your signed permission form at the office before the school trip on Friday.', '请在周五校外活动前把签好字的同意书交到办公室。', [
    [1,'meaning','A student who hands in an essay has:',['submitted it','borrowed it','translated it aloud'],'submitted it','hand in 表示把作业或文件交上去。'],
    [1,'grammar','Choose the correct phrase: “Remember to ___ your assignment.”',['hand in','hand at','hand into to'],'hand in','hand in 是可分短语动词；assignment 是交付对象。'],
    [1,'word-order','With a pronoun, choose the natural order.',['Hand it in by noon.','Hand in it by noon.','Hand to in it by noon.'],'Hand it in by noon.','宾语代词通常放在 hand 和 in 之间。'],
    [1,'context','A worker should hand in a lost key to:',['the reception desk','the nearest tree','a private notebook'],'the reception desk','交还失物时，hand in 表示交到负责的地方。'],
  ]);
  add('hand out', 'At the entrance, two volunteers will hand out maps showing the safest route through the festival grounds.', '入口处，两名志愿者将分发标有节庆场地安全路线的地图。', [
    [1,'meaning','If a teacher hands out worksheets, the teacher:',['distributes them','collects them for grading','writes them from memory'],'distributes them','hand out 表示把物品分发给多人。'],
    [1,'grammar','Complete the instruction: “Could you ___ these badges to the guests?”',['hand out','hand over to out','handed out'],'hand out','情态动词 could 后用原形短语动词 hand out。'],
    [1,'word-order','Choose the correct placement of the pronoun.',['She handed them out.','She handed out them.','She out handed them.'],'She handed them out.','代词宾语置于 hand 与 out 之间。'],
    [1,'meaning','Which action is best described as handing out leaflets?',['giving one leaflet to each passerby','taking all leaflets home','printing a single leaflet'],'giving one leaflet to each passerby','hand out 强调向多人逐份发放。'],
  ]);
  add('hand over', 'The retiring director will hand over the laboratory keys and project files to her successor.', '即将退休的主管将把实验室钥匙和项目文件移交给继任者。', [
    [1,'meaning','A manager who hands over responsibility:',['transfers it to someone else','keeps it secret','destroys the records'],'transfers it to someone else','hand over 可表示把控制权或职责转交给他人。'],
    [1,'grammar','Complete the sentence: “The suspect was asked to ___ his passport.”',['hand over','hand across','handed over'],'hand over','ask someone to 后接动词原形 hand over。'],
    [1,'word-order','With a pronoun, choose the natural sentence.',['Hand it over to the officer.','Hand over it to the officer.','Hand to over it the officer.'],'Hand it over to the officer.','代词宾语放在 hand 与 over 之间。'],
    [1,'context','A peaceful change of government may involve one leader handing power ___ another.',['over to','out from','in at'],'over to','hand power over to someone 表示把权力移交给对方。'],
  ]);
  add('hand-operated', 'The field team used a hand-operated pump because the remote campsite had no electrical supply.', '野外小组使用手动泵，因为偏远营地没有电力供应。', [
    [1,'meaning','A hand-operated pump is powered mainly by:',['a person’s physical action','a wall socket','a solar panel only'],'a person’s physical action','hand-operated 表示由手动操作，而非自动或电驱。'],
    [1,'grammar','Choose the correct modifier: “a ___ coffee grinder”.',['hand-operated','hand-operatingly','hand operate'],'hand-operated','名词前使用复合形容词 hand-operated。'],
    [1,'context','A museum might display a hand-operated machine to show:',['how it works without a motor','how it connects to Wi-Fi','how it is stored underwater'],'how it works without a motor','手动设备靠人的动作运行。'],
    [1,'meaning','If a device is not hand-operated, it may instead be:',['powered automatically','made of paper','used only outdoors'],'powered automatically','手动操作与自动/动力驱动相对。'],
  ]);
  add('handbag', 'She found her travel card in a zipped pocket inside the handbag she carried onto the bus.', '她在带上公交车的手提包内侧拉链口袋里找到了交通卡。', [
    [1,'meaning','A handbag is usually carried to hold:',['personal belongings','garden soil','large furniture'],'personal belongings','handbag 是随身携带、装个人物品的包。'],
    [1,'collocation','She placed her wallet inside her leather ___.',['handbag','handbagged','handbagses'],'handbag','leather handbag 是自然的材质加名词搭配。'],
    [1,'grammar','Choose the plural: “The shop displayed three ___.”',['handbags','handbagies','handbag’s'],'handbags','handbag 以辅音音素结尾，复数直接加 -s。'],
    [1,'meaning','Which item would most naturally be kept in a handbag?',['a set of keys','a garden fence','a dining table'],'a set of keys','手提包通常存放钥匙等随身小物件。'],
  ]);
  add('handball', 'The school’s handball team practiced quick passes against the gym wall before the regional tournament.', '学校手球队在地区赛前对着体育馆墙练习快速传球。', [
    [1,'meaning','In the indoor sport handball, players mainly move the ball by:',['throwing it with their hands','kicking it into a goal','hitting it with a bat'],'throwing it with their hands','团队手球以手传球和投射为主要动作。'],
    [1,'context','A handball referee would watch for players:',['handling and throwing the ball legally','serving food to spectators','swimming between goals'],'handling and throwing the ball legally','手球比赛由手持球、传球与投射构成。'],
    [1,'meaning','A “handball match” is a competition between:',['teams playing a ball sport','two orchestras','groups of chess players'],'teams playing a ball sport','handball 是球类运动名称。'],
    [1,'confusable','A player scores in handball by throwing the ball into the:',['opposing goal','basketball hoop only','audience seats'],'opposing goal','手球的得分目标是对方球门。'],
  ]);
  add('handbook', 'The new volunteers received a handbook explaining emergency procedures, contact numbers, and opening times.', '新志愿者拿到一本手册，里面说明了应急流程、联系电话和开放时间。', [
    [1,'meaning','A volunteer handbook is most useful for finding:',['instructions and practical information','the latest weather radar','a novel’s ending'],'instructions and practical information','handbook 是提供某主题信息或说明的实用手册。'],
    [1,'collocation','The employee handbook sets out workplace ___.',['policies','puddles','passengers'],'policies','handbook 常收录规则、政策或操作指引。'],
    [2,'meaning','A travel handbook would help a visitor learn about:',['places and local customs','engine oil levels','a patient’s blood type'],'places and local customs','旅行手册面向旅客，提供目的地信息。'],
    [1,'confusable','A handbook is usually a guide to information, while a diary records:',['personal daily events','machine instructions only','airport runways'],'personal daily events','handbook 与记录个人日常的 diary 功能不同。'],
  ]);
  add('handcraft', 'Local artisans handcraft each wooden bowl, sanding the rim smooth before applying a food-safe finish.', '当地工匠手工制作每只木碗，先把碗沿打磨光滑，再涂上食品安全涂层。', [
    [1,'meaning','If artisans handcraft a bowl, they:',['make it by hand','order it from a factory','paint a picture on it only'],'make it by hand','handcraft 作动词表示手工制作。'],
    [1,'grammar','Choose the correct form: “The potter ___ each cup herself.”',['handcrafts','handcraftedly','handcrafting'],'handcrafts','第三人称单数一般现在时加 -s：handcrafts。'],
    [1,'context','A handcraft fair is likely to feature:',['objects made by skilled makers','mass-produced fuel','weather forecasts'],'objects made by skilled makers','handcraft 关注手工制作的技能或产品。'],
    [1,'meaning','Which sentence uses handcraft as a verb?',['They handcraft leather notebooks.','The handcraft was repaired by rain.','She bought a handcraftly bag.'],'They handcraft leather notebooks.','该句 handcraft 直接表示制作物品。'],
  ]);
  add('handedness', 'The study recorded each child’s handedness before comparing performance on the drawing task.', '研究先记录每个孩子的惯用手，再比较他们完成绘画任务的表现。', [
    [1,'meaning','A person’s handedness describes whether they mainly use the:',['left or right hand','front or back door','first or last name'],'left or right hand','handedness 指惯用左手或右手的偏好。'],
    [1,'context','A researcher studying handedness might ask a child which hand they use to:',['write a sentence','hear a bell','smell a flower'],'write a sentence','书写常用于判断惯用手。'],
    [1,'grammar','Complete the noun phrase: “a preference for left-handed ___.”',['handedness','handed','handily'],'handedness','这里需要表示惯用手偏好的名词 handedness。'],
    [1,'meaning','Ambidexterity differs from strong handedness because an ambidextrous person can:',['use both hands with similar skill','only use the left hand','not move either hand'],'use both hands with similar skill','handedness 指手的使用倾向，双手同样灵巧则是另一种情况。'],
  ]);
  add('handful', 'A handful of roasted almonds kept the hikers going until they reached the next village.', '一把烤杏仁让徒步者撑到抵达下一个村庄。', [
    [1,'meaning','She picked up a handful of sand. How much sand did she take?',['as much as one hand can hold','a truckload','exactly one grain'],'as much as one hand can hold','handful 的字面义是一手能抓起的量。'],
    [1,'grammar','Choose the usual agreement: “A handful of students ___ waiting.”',['are','is','be'],'are','handful of 后接复数名词时，动词常与 students 一致。'],
    [1,'meaning','A handful of people attended the meeting means:',['only a small number came','the room was completely full','everyone in town came'],'only a small number came','handful 也可比喻少数人或少量事物。'],
    [1,'collocation','A cook might add a handful of ___ to a salad.',['spinach leaves','furniture','sunlight'],'spinach leaves','手抓的一把适合修饰可以抓取的食材。'],
  ]);
  add('handgun', 'The safety instructor explained how the locked case prevents unauthorized access to a handgun.', '安全讲师说明上锁的箱子如何防止他人擅自接触手枪。', [
    [1,'meaning','A handgun is designed to be fired while held:',['in one hand','over a shoulder like a backpack','underwater only'],'in one hand','handgun 指可手持的枪械，通常包括手枪。'],
    [1,'context','A licensed owner should keep a handgun:',['secured and inaccessible to children','loaded on a kitchen table','in a public hallway'],'secured and inaccessible to children','枪械安全语境强调妥善上锁、避免儿童接触。'],
    [1,'collocation','A small handgun is also commonly called a:',['pistol','lantern','compass'],'pistol','pistol 是 handgun 的近义词。'],
    [1,'meaning','The prefix hand- in handgun points to the weapon being:',['hand-held','made of paper','used to repair hands'],'hand-held','名称强调这类枪可以手持，不说明制作材料。'],
  ]);
  add('handicap', 'The steep steps were a handicap for visitors using wheelchairs until the museum installed a ramp.', '博物馆安装坡道前，陡峭的台阶给使用轮椅的访客造成了不便。', [
    [1,'meaning','A lack of reliable transport can be a handicap because it:',['makes progress or access harder','guarantees success','removes every obstacle'],'makes progress or access harder','handicap 可泛指妨碍成功或行动的不利条件。'],
    [2,'usage','Modern writing about people usually prefers “person with a disability” over:',['a handicapped person','a person attending a concert','a patient with a cold'],'a handicapped person','称呼残障人士时，优先使用以人为本且尊重的表达。'],
    [3,'meaning','In a handicap race, a faster competitor may receive:',['a disadvantage to balance the contest','a guaranteed victory','a different sport'],'a disadvantage to balance the contest','体育义 handicap 是让强者承担的不利条件，以平衡机会。'],
    [4,'grammar','In “Injuries handicapped the team,” handicapped means the injuries:',['put the team at a disadvantage','trained the team to win','gave the team new equipment'],'put the team at a disadvantage','动词 handicap 表示使某人或团队处于不利地位。'],
  ]);
  add('handicapped', 'The theater offers reserved accessible seating so that handicapped visitors can enter without using the stairs.', '剧院设有无障碍预留座位，使行动不便的访客无需走楼梯即可入场。', [
    [1,'usage','When referring to people, which wording is generally more respectful today?',['people with disabilities','the handicappeds','the defectives'],'people with disabilities','people-first 说法通常更尊重，也避免把人简化成标签。'],
    [1,'meaning','A handicapped-accessible entrance is designed to:',['reduce barriers for disabled visitors','keep all visitors outside','replace the theater stage'],'reduce barriers for disabled visitors','此处表达的是为有行动障碍者改善通行条件。'],
    [1,'grammar','Choose the natural phrase in contemporary writing.',['a person with a disability','a disability person','a handicappedly person'],'a person with a disability','名词搭配应使用清楚、尊重的表达。'],
    [1,'context','A venue improves access by installing:',['a step-free entrance','a taller staircase','a narrower doorway'],'a step-free entrance','无台阶入口可减少行动障碍。'],
  ]);
  add('handicraft', 'The museum displayed a regional handicraft made from reeds gathered along the river.', '博物馆展出了一件用河边采集的芦苇制作的地方手工艺品。', [
    [1,'meaning','Traditional handicraft is work made chiefly by:',['skilled hand processes','a weather station','a computer virus'],'skilled hand processes','handicraft 可指手工制作的技艺或行业。'],
    [2,'meaning','A market selling local handicrafts is selling:',['objects made by hand','only factory machines','second-hand books'],'objects made by hand','handicrafts 复数常指手工艺品。'],
    [1,'collocation','The region is famous for its woven ___.',['handicraft','handicraftly','handycrafts only'],'handicraft','woven handicraft 指编织手工艺品或相关技艺。'],
    [2,'grammar','Choose the plural phrase: “The gallery displayed several local ___.”',['handicrafts','handicraftes','handicraft’s'],'handicrafts','handicraft 作为具体作品时可数，复数加 -s。'],
  ]);
  add('handiwork', 'The cracked garden gate was the handiwork of a storm, not a careless repair by the caretaker.', '花园门的破裂是暴风雨造成的，并非管理员粗心维修的结果。', [
    [1,'meaning','If a broken window is “the handiwork of vandals,” it was:',['caused or done by them','made by a professional glazier','a gift from the owner'],'caused or done by them','handiwork 可指某人做成的作品或造成的结果，常带评价色彩。'],
    [1,'usage','The phrase “the handiwork of the frost” treats frost as:',['the cause of visible damage','a skilled carpenter','a kind of handmade cloth'],'the cause of visible damage','该表达可把结果归因于某种力量或行为者。'],
    [1,'grammar','Complete the sentence: “These carvings are the ___ of local artists.”',['handiwork','handiworkses','handyworkly'],'handiwork','handiwork 通常作不可数名词，表示作品或成果。'],
    [1,'meaning','A teacher praising a model as a child’s handiwork means the child:',['made it','bought it secretly','watched someone else make it'],'made it','handiwork 指某人亲手完成的作品。'],
  ]);
  add('handkerchief', 'He pulled a clean handkerchief from his pocket and offered it to the child with the runny nose.', '他从口袋里掏出一块干净手帕，递给流鼻涕的孩子。', [
    [1,'meaning','A handkerchief is a small piece of cloth used to:',['wipe one’s nose or face','cover a dining table','dry a swimming pool'],'wipe one’s nose or face','手帕是随身携带、用于擦拭的小布片。'],
    [1,'collocation','She embroidered her initials on a cotton ___.',['handkerchief','handkerchiefly','handkerchiefing'],'handkerchief','cotton handkerchief 是自然的材质搭配。'],
    [1,'grammar','Choose the correct plural.',['handkerchiefs','handkerchieves','handkerchiefes'],'handkerchiefs','以 f 结尾的 handkerchief 通常直接加 s。'],
    [1,'context','A person at a formal dinner might keep a handkerchief in a:',['jacket pocket','refrigerator freezer','shoe sole'],'jacket pocket','手帕通常可折好放在衣袋中随身携带。'],
  ]);
  add('handle', 'The nurse handled the frightened puppy gently while the veterinarian examined its injured paw.', '兽医检查小狗受伤的爪子时，护士轻柔地抱着它。', [
    [1,'meaning','A supervisor who handles a complaint must:',['deal with it','hide the mailbox','turn it into a handle'],'deal with it','handle 可表示处理问题、投诉或局面。'],
    [2,'meaning','A label saying “Handle with care” warns people to:',['move the package gently','open it immediately','leave it in the rain'],'move the package gently','此处 handle 是拿取、搬动，提示轻拿轻放。'],
    [3,'meaning','A skilled driver can handle a truck means the driver can:',['operate it competently','carry it by hand','paint its tires'],'operate it competently','handle 可指操纵机器或驾驶车辆。'],
    [4,'meaning','Turn the handle to open the window. What should you turn?',['the part designed for gripping','the glass pane','the curtain'],'the part designed for gripping','名词 handle 指供人握住并操作物体的把手。'],
  ]);
  add('handling', 'The museum trains new staff in the careful handling of fragile pottery before they assist with an exhibit.', '博物馆在新员工协助布展前，培训他们如何谨慎搬动易碎陶器。', [
    [1,'meaning','Careful handling of a glass sculpture means:',['moving it gently and safely','selling it without permission','leaving it in direct sunlight'],'moving it gently and safely','handling 在此表示拿取或处置物品的方式。'],
    [1,'collocation','The airline apologized for the rough ___ of passengers’ luggage.',['handling','handle','handledly'],'handling','rough handling 是指粗暴搬运的自然搭配。'],
    [1,'meaning','A company’s handling of a complaint refers to how it:',['deals with the complaint','manufactures the complaint','handles a suitcase'],'deals with the complaint','handling 也可指处理事务或问题的方式。'],
    [1,'grammar','Choose the noun phrase: “the ___ of confidential data”.',['handling','handle','handy'],'handling','the 后此处需要名词 handling，表示数据的处理方式。'],
  ]);
  add('handmade', 'The market stall sells handmade notebooks whose covers are printed and bound by a small local workshop.', '集市摊位出售手工笔记本，封面由当地小作坊印刷并装订。', [
    [1,'meaning','A handmade bowl was primarily:',['made by a person’s hands','produced entirely by a robot','found growing on a tree'],'made by a person’s hands','handmade 强调由人手工制作。'],
    [1,'grammar','Choose the natural description: “a ___ wool scarf”.',['handmade','hand-maked','handmakingly'],'handmade','handmade 是名词前使用的形容词形式。'],
    [1,'context','A label saying “handmade locally” most directly tells buyers about:',['how and where it was produced','how long it will rain','who will wear it'],'how and where it was produced','该标签突出手工制作以及本地生产。'],
    [1,'meaning','Which product is most likely handmade?',['a ceramic mug shaped and painted by an artisan','a factory batch made by an automated line','a digital file downloaded online'],'a ceramic mug shaped and painted by an artisan','陶艺师亲手塑形和绘制符合 handmade 的含义。'],
  ]);
  add('handout', 'The lecturer uploaded a one-page handout summarizing the formulas students would need for the exam.', '讲师上传了一页讲义，概括学生考试要用到的公式。', [
    [1,'meaning','A handout distributed in class is usually:',['a sheet of information for students','a piece of furniture','a final exam score'],'a sheet of information for students','课堂 handout 通常是发给学生的资料或讲义。'],
    [1,'collocation','The instructor gave each visitor a printed ___ about the exhibit.',['handout','handoutful','handed out'],'handout','printed handout 指印发的资料单。'],
    [1,'grammar','Choose the plural: “The students kept their ___.”',['handouts','handouties','handout’s'],'handouts','handout 作为可数名词，复数直接加 -s。'],
    [1,'meaning','Which item is most likely called a handout at a seminar?',['a page outlining the speaker’s key points','the building’s heating system','a participant’s lunch box'],'a page outlining the speaker’s key points','研讨会资料单概述演讲内容，符合 handout 的用法。'],
  ]);
  add('hands-on', 'The nursing course includes hands-on practice with bandages before students work with patients.', '护理课程安排学生先练习包扎，再接触患者。', [
    [1,'meaning','Hands-on training asks learners to:',['practice the task themselves','only read about it','watch a silent film'],'practice the task themselves','hands-on 强调亲自参与和动手实践。'],
    [1,'collocation','The workshop offers ___ experience repairing bicycles.',['hands-on','hands-offly','handful-on'],'hands-on','hands-on experience 是常见搭配，指实践经验。'],
    [1,'grammar','Choose the correctly hyphenated modifier: “a ___ science lesson”.',['hands-on','hands onness','hand-oned'],'hands-on','作名词前定语时通常写作带连字符的 hands-on。'],
    [1,'meaning','A hands-on manager is one who tends to:',['be directly involved in the work','avoid meeting the team','manage only from another country'],'be directly involved in the work','形容管理者时，hands-on 表示亲自参与、务实。'],
  ]);
  add('handset', 'The technician replaced the cracked handset after testing the telephone base and its connection.', '技术员检测电话底座和线路后，更换了破裂的听筒。', [
    [1,'meaning','On a traditional telephone, the handset is the part you:',['hold to speak and listen','use to dial a bicycle','wear around your ankle'],'hold to speak and listen','handset 指电话中拿在手里通话的部分。'],
    [1,'context','A caller lifts the handset before:',['making or answering a call','printing a photograph','turning on a kettle'],'making or answering a call','拿起听筒是传统电话通话的常见动作。'],
    [1,'collocation','The cordless phone’s ___ needs charging before use.',['handset','handsetly','handsetses'],'handset','cordless handset 指无绳电话的手持机。'],
    [1,'meaning','If a handset has a broken speaker, the user may have trouble:',['hearing the person on the call','opening a window','sending a paper letter'],'hearing the person on the call','听筒中的扬声部件用于通话时收听对方声音。'],
  ]);
  add('handsome', 'The charity received a handsome donation that paid for new books at three rural schools.', '慈善机构收到一笔可观的捐款，为三所乡村学校购买了新书。', [
    [1,'meaning','A handsome young man is being described as:',['good-looking','wealthy by definition','very tall by definition'],'good-looking','handsome 常形容男子外貌英俊。'],
    [2,'meaning','Calling a woman handsome traditionally suggests she looks:',['striking and dignified','angry at everyone','like a child'],'striking and dignified','传统用法也可形容女性端庄、健美。'],
    [3,'meaning','A handsome profit is:',['a large and impressive profit','a profit paid in coins shaped like hands','a loss'],'a large and impressive profit','handsome 可形容数额可观、丰厚。'],
    [4,'collocation','Which phrase means a generous act?',['a handsome gesture','a handsome temperature','a handsomely gesture'],'a handsome gesture','handsome gesture 指慷慨或大方的举动。'],
  ]);
  add('handsomely', 'The contractor was paid handsomely for completing the bridge repairs ahead of schedule.', '承包商因提前完成桥梁维修而获得了丰厚报酬。', [
    [1,'meaning','If a firm pays someone handsomely, it pays:',['a generous amount','nothing at all','only in old coins'],'a generous amount','handsomely 可表示金额丰厚、慷慨。'],
    [1,'grammar','Choose the adverb modifying “rewarded”: “She was ___ rewarded.”',['handsomely','handsome','handsomeness'],'handsomely','此处修饰过去分词 rewarded，需要副词。'],
    [1,'context','An investment that pays off handsomely has produced:',['a very good return','a broken receipt','no benefit'],'a very good return','handsomely 也可表示结果丰厚或令人满意。'],
    [1,'word-form','Which spelling is the adverb formed from handsome?',['handsomely','handsomeley','handsomly'],'handsomely','handsome 去 e 加 -ly，构成 handsomely。'],
  ]);
  add('handwriting', 'The archivist recognized the explorer’s handwriting in a faded note dated from the first expedition.', '档案员在一张首次远征时期的褪色便条上认出了探险家的笔迹。', [
    [1,'meaning','A person’s handwriting refers to:',['their style of writing by hand','their spoken accent','their printed email address'],'their style of writing by hand','handwriting 指手写的字迹或书写风格。'],
    [1,'collocation','The teacher could barely read his untidy ___.',['handwriting','handwrite','handwrittenly'],'handwriting','untidy handwriting 是自然搭配，形容字迹潦草。'],
    [1,'meaning','A note “in her own handwriting” was:',['written by her personally','typed by a printer','recorded by a camera'],'written by her personally','该表达说明便条是她亲笔写下的。'],
    [1,'grammar','Which form names the skill or style?',['handwriting','handwrited','handwrittenly'],'handwriting','handwriting 是名词；handwritten 通常作形容词。'],
  ]);
  add('handy', 'Keep a flashlight handy in the hallway in case the power goes out during the night.', '在走廊里放一支手电筒备用，以防夜间停电。', [
    [1,'meaning','A handy tool is one that is:',['useful and convenient','too large to carry','already broken'],'useful and convenient','handy 可表示实用、方便。'],
    [2,'meaning','A handy mechanic is especially:',['skilled at practical tasks','good at writing poetry only','afraid of all tools'],'skilled at practical tasks','handy 也可形容动手能力强、手巧。'],
    [3,'meaning','If the station is handy to the hotel, it is:',['nearby and easy to reach','closed for the winter','under the hotel basement'],'nearby and easy to reach','handy to 可表示地点近便、容易到达。'],
    [1,'grammar','Leave the emergency numbers ___ by the phone.',['handy','handilyly','handle'],'handy','leave + 宾语 + handy 表示把东西放在手边备用。'],
  ]);
  add('hang', 'They hang the wet coats near the door so the hallway floor stays dry.', '他们把湿外套挂在门边，以免走廊地板被弄湿。', [
    [1,'grammar','Choose the simple past of hang meaning “suspend”: “She ___ the picture yesterday.”',['hung','hanged','hang'],'hung','悬挂义 hang 的过去式通常是 hung。'],
    [3,'meaning','The teenagers hang out at the café after school means they:',['spend time there casually','install a sign there','serve customers there'],'spend time there casually','hang out 表示闲逛或与人消磨时间。'],
    [4,'meaning','“The curtains hang unevenly” describes how they:',['fall or are suspended','were purchased','are being washed'],'fall or are suspended','名词 hang 可描述悬垂的方式或状态。'],
    [1,'collocation','A coat is usually ___ on a hook, not “putted” there.',['hung','hanged','hangs'],'hung','悬挂衣物时用 hang，过去分词是 hung。'],
  ]);
  add('hanger', 'She chose a padded hanger to keep the shoulders of her silk dress from losing their shape.', '她选了一个软垫衣架，避免真丝裙的肩部变形。', [
    [1,'meaning','A hanger is used to:',['hold clothes while they are stored','measure a person’s height','stitch a torn sleeve'],'hold clothes while they are stored','hanger 通常指用来挂放衣服的衣架。'],
    [1,'collocation','Put the wet jacket on a sturdy coat ___.',['hanger','hanker','hanging'],'hanger','coat hanger 是常见组合，指外套衣架。'],
    [1,'grammar','Choose the plural: “There are spare ___ in the closet.”',['hangers','hangeres','hanger’s'],'hangers','hanger 的规则复数形式是 hangers。'],
    [1,'meaning','A wooden hanger belongs in a:',['wardrobe','fish tank','toolbox only'],'wardrobe','衣架通常放在衣柜中供挂衣物使用。'],
  ]);
  add('hanger-on', 'The old singer disliked the hanger-on who appeared at every party but never offered to help.', '那位老歌手不喜欢这个总出席每场派对、却从不帮忙的攀附者。', [
    [1,'meaning','A hanger-on around a celebrity often:',['seeks company or benefits without contributing much','manages the celebrity’s schedule professionally','works as a stage carpenter'],'seeks company or benefits without contributing much','hanger-on 指依附他人、靠近名人或有权势者的人，常含贬义。'],
    [1,'tone','Calling someone a hanger-on usually sounds:',['critical or disapproving','highly respectful','purely scientific'],'critical or disapproving','该词通常带贬义，暗示对方攀附。'],
    [1,'grammar','Choose the correct plural: “Several ___ followed the politician.”',['hangers-on','hanger-ons','hangers-oners'],'hangers-on','复合名词的中心词 hanger 变复数，on 保持不变。'],
    [1,'context','A wealthy host’s hanger-on may stay nearby mainly to:',['gain favors or access','repair the roof','deliver official mail'],'gain favors or access','词义强调依附某人以获取好处或接近机会。'],
  ]);
  add('hangout', 'The corner bookstore became the neighborhood’s hangout because it stayed open late and welcomed students.', '街角书店营业到很晚又欢迎学生，逐渐成了社区常去的聚会地点。', [
    [1,'meaning','A favorite hangout is a place people:',['visit regularly to relax or socialize','must avoid at all times','use only to store luggage'],'visit regularly to relax or socialize','hangout 是常去、休闲或社交的地方。'],
    [1,'register','The word hangout is most natural in:',['casual conversation','a formal court judgment','a chemical formula'],'casual conversation','hangout 属于较口语的表达。'],
    [1,'grammar','Choose the article: “That diner is ___ for local musicians.”',['a popular hangout','popular hangoutly','the hang out'],'a popular hangout','hangout 作可数名词，单数前用 a。'],
    [1,'meaning','If the park is the teenagers’ hangout, they probably:',['meet there often','built it themselves','work there as guards'],'meet there often','常去地点是 hangout 的核心意思。'],
  ]);
  add('hanker', 'After months abroad, she began to hanker after the fresh bread sold at her neighborhood bakery.', '在国外待了几个月后，她开始想念家附近面包店卖的新鲜面包。', [
    [1,'meaning','To hanker after a quiet weekend is to:',['want one strongly','avoid it deliberately','schedule it for someone else'],'want one strongly','hanker after 表示强烈渴望某物。'],
    [1,'grammar','Complete the pattern: “He hankers ___ a simpler life.”',['after','against','between'],'after','hanker 常与 after 连用，表示渴望。'],
    [1,'register','Hanker is more likely in writing that is:',['slightly literary or expressive','a computer command','a legal measurement'],'slightly literary or expressive','hanker 比 want 更有表现力，常见于较书面语境。'],
    [1,'meaning','Someone hankering for home is:',['longing to return or feel at home','trying to sell a house','locking the front door'],'longing to return or feel at home','此处 hanker for 表示心里很想念或渴望。'],
  ]);
  add('haphazard', 'The files were stored in a haphazard order, so the researcher had to search every drawer.', '文件存放得杂乱无章，研究人员只好逐个抽屉查找。', [
    [1,'meaning','A haphazard search is one conducted:',['without a clear plan or order','according to a precise map','by trained dogs only'],'without a clear plan or order','haphazard 表示缺乏计划、安排随意。'],
    [1,'grammar','Choose the adjective before “arrangement.”',['haphazard','haphazardly','haphazardness'],'haphazard','arrangement 是名词，前面需要形容词。'],
    [1,'context','A haphazard pile of tools would be:',['mixed together with little organization','sorted by size in labeled boxes','locked in separate cabinets'],'mixed together with little organization','杂乱堆放体现没有清楚的安排。'],
    [1,'meaning','A haphazard method is unlikely to be:',['systematic','random','disorganized'],'systematic','haphazard 与 systematic（有系统的）意思相反。'],
  ]);
  add('haphazardly', 'The seedlings had been planted haphazardly, leaving some crowded together and others far apart.', '幼苗被随意种下，有些挤在一起，有些相隔很远。', [
    [1,'grammar','Choose the adverb modifying “placed”: “The boxes were ___ placed.”',['haphazardly','haphazard','haphazardness'],'haphazardly','修饰 placed 需要副词 haphazardly。'],
    [1,'meaning','If papers are arranged haphazardly, they are arranged:',['with little order','alphabetically','by exact date'],'with little order','该副词说明排列缺少秩序或计划。'],
    [1,'word-form','Which spelling is the adverb from haphazard?',['haphazardly','haphazardley','haphazardless'],'haphazardly','形容词后直接加 -ly，拼作 haphazardly。'],
    [1,'context','A crew that haphazardly loads boxes may leave:',['unstable gaps and uneven stacks','every item in a labeled slot','the truck perfectly balanced'],'unstable gaps and uneven stacks','随意装载会造成凌乱、无序的摆放。'],
  ]);
  add('happen', 'A brief power cut happened just as the audience settled into their seats for the concert.', '观众刚坐好准备听音乐会时，突然短暂停电了。', [
    [1,'meaning','If an accident happens, it:',['takes place','is carefully prevented','belongs to someone'],'takes place','happen 的基本义是发生。'],
    [2,'grammar','Choose the sentence meaning “I was in the area by chance.”',['I happened to be nearby.','I happened the nearby.','I was happen nearby.'],'I happened to be nearby.','happen to + 动词原形可表示碰巧做某事。'],
    [1,'grammar','Complete: “What ___ to the missing page?”',['happened','did happen to did','happens yesterday'],'happened','询问过去发生的事用 happened。'],
    [1,'collocation','The meeting will ___ at the town library on Tuesday.',['happen','make','do'],'happen','事件可用 happen 表示发生；此处将来时用 will happen。'],
  ]);
  add('happen again', 'The same delay may happen again if the loose cable is not repaired before the next trip.', '如果松动的电缆在下次出行前没有修好，同样的延误可能再次发生。', [
    [1,'meaning','If a leak happens again, it:',['occurs one more time','has never occurred','is immediately repaired'],'occurs one more time','happen again 表示同一事件再次发生。'],
    [1,'grammar','Choose the natural sentence.',['The error may happen again.','The error may happens again.','The error may happened again.'],'The error may happen again.','情态动词 may 后接动词原形 happen。'],
    [1,'context','A technician asks whether the fault could happen again to learn if it may:',['recur','change its color','become a person'],'recur','询问是否再次发生就是询问故障是否会复发。'],
    [1,'word-order','Where does again naturally go?',['It could happen again tomorrow.','Again it happen could tomorrow.','It again could happened tomorrow.'],'It could happen again tomorrow.','again 常置于动词短语后，表示事件重现。'],
  ]);
  add('happen to', 'I happen to know the curator, so I can introduce you before the gallery opens.', '我碰巧认识馆长，所以可以在画廊开门前为你们介绍。', [
    [1,'meaning','“I happen to have a spare key” means I:',['by chance have one','planned to lose one','need someone to make one'],'by chance have one','happen to + 动词表示碰巧发生或碰巧做某事。'],
    [1,'grammar','Complete the structure: “Did you happen ___ see my notebook?”',['to','for','at'],'to','happen to do 中 to 后接动词原形。'],
    [1,'meaning','“Do you happen to know her?” is often a polite way to ask whether you:',['possibly know her','are certain to avoid her','have met her today only'],'possibly know her','此结构也可委婉提出询问，语气较缓和。'],
    [1,'confusable','Choose the standard phrase.',['She happened to find the address.','She happened finding the address.','She happened for find the address.'],'She happened to find the address.','happen 后接不定式 to find，不接动名词或 for。'],
  ]);
  add('happily', 'The rescued dog settled happily beside the fireplace once its new family brought out a blanket.', '新主人拿出毯子后，被救助的狗便开心地依偎在壁炉旁。', [
    [1,'meaning','If a child happily agrees to help, the child agrees:',['with pleasure','underwater','without understanding'],'with pleasure','happily 可表示愉快地、乐意地。'],
    [1,'grammar','Choose the adverb: “The neighbors ___ shared their garden tools.”',['happily','happy','happiness'],'happily','shared 是动词，用副词 happily 修饰。'],
    [1,'meaning','“They lived happily ever after” describes an ending that is:',['content and joyful','unexpectedly tragic','unfinished'],'content and joyful','该习语常以幸福快乐的生活作为故事结尾。'],
    [1,'word-form','Which form fits “smiled ___ at the photograph”?',['happily','happyly','happierly'],'happily','happy 去 y 加 i，再加 -ly，形成 happily。'],
  ]);
  add('happiness', 'For the retired teacher, happiness meant having time to read outside and visit her grandchildren.', '对这位退休教师来说，幸福就是有时间在户外读书、探望孙辈。', [
    [1,'meaning','In the example, happiness means a feeling of:',['joy and contentment','physical height','financial paperwork'],'joy and contentment','happiness 指快乐或满足的状态。'],
    [1,'grammar','Choose the noun: “Her ___ came from helping neighbors.”',['happiness','happy','happily'],'happiness','主语位置需要名词 happiness。'],
    [1,'collocation','Which phrase is natural?',['a sense of happiness','a happinessly sense','sense happinesses'],'a sense of happiness','a sense of happiness 是表达幸福感的自然搭配。'],
    [1,'meaning','“Money cannot guarantee happiness” means money cannot ensure:',['a joyful, satisfying life','that every bill is printed','a person’s age'],'a joyful, satisfying life','句中 happiness 指幸福感，不是财富本身。'],
  ]);
  add('happy', 'The children were happy to discover that the cancelled picnic had been rescheduled for Sunday.', '孩子们得知取消的野餐改到星期日后很高兴。', [
    [1,'meaning','If the children are happy about the new date, they feel:',['pleased','sleepy by definition','angry at the weather'],'pleased','happy 的常见义是感到高兴、愉快。'],
    [2,'meaning','A happy coincidence is one that is:',['fortunate or pleasing','a deliberate mistake','always noisy'],'fortunate or pleasing','happy 也可形容幸运、令人欣慰的情况。'],
    [3,'grammar','Choose the phrase expressing willingness.',['I would be happy to help.','I would be happiness helping.','I happyly help to.'],'I would be happy to help.','be happy to do 表示乐意做某事。'],
    [1,'collocation','A pleased person might say “I’m ___ with the result.”',['happy','happily','happiness'],'happy','be happy with something 表示对某事满意。'],
  ]);
  add('harass', 'Several callers continued to harass the witness, so the court issued an order restricting contact.', '几名来电者持续骚扰证人，因此法院下令限制与其接触。', [
    [1,'meaning','To harass a colleague is to:',['trouble or pressure them repeatedly','give them a promotion','invite them to lunch once'],'trouble or pressure them repeatedly','harass 强调持续、反复地打扰或骚扰。'],
    [1,'grammar','Choose the correct form: “The callers ___ her at work.”',['harassed','harassation','harassingly'],'harassed','叙述过去的骚扰行为用规则过去式 harassed。'],
    [1,'context','Repeated unwanted messages may be described as:',['harassment','hospitality','handwriting'],'harassment','反复的、不受欢迎的接触属于骚扰。'],
    [1,'meaning','Which action most clearly counts as harassment?',['repeatedly sending threatening messages after being told to stop','asking one polite question','sending a requested appointment reminder'],'repeatedly sending threatening messages after being told to stop','反复且不受欢迎的威胁性联系符合 harass 的意思。'],
  ]);
  add('harassment', 'The company investigated reports of workplace harassment and interviewed employees who had witnessed the behavior.', '公司调查职场骚扰报告，并访谈了目睹相关行为的员工。', [
    [1,'meaning','Workplace harassment involves behavior that repeatedly:',['intimidates or troubles someone','rewards careful work','organizes a meeting'],'intimidates or troubles someone','harassment 指持续性的骚扰或威吓行为。'],
    [1,'grammar','Choose the noun in “a policy against sexual ___.”',['harassment','harass','harassing'],'harassment','介词 against 后此处需要名词 harassment。'],
    [1,'context','A report of harassment should be handled by:',['following a fair investigation process','ignoring the person reporting it','sharing the report as gossip'],'following a fair investigation process','正式投诉应按公正程序处理，而不是忽视或传播。'],
    [1,'word-form','The noun derived from harass is spelled:',['harassment','harasment','harassation'],'harassment','正确拼写是 harassment，包含双 s。'],
  ]);
  add('harbor', 'Fishing boats returned to the harbor before the storm reached the coast.', '风暴抵达海岸前，渔船返回了港口。', [
    [1,'meaning','A harbor provides ships with:',['sheltered water','a mountain trail','a dry airport runway'],'sheltered water','harbor 的名词义是供船只停泊避风的港湾。'],
    [2,'meaning','A safe harbor for refugees would be a place offering:',['protection','a fishing license','a ship’s engine'],'protection','harbor 也可比喻为庇护或安全之所。'],
    [3,'meaning','To harbor resentment is to:',['keep the feeling inside over time','announce it once and forget it','turn it into a harbor'],'keep the feeling inside over time','动词 harbor 可表示心中怀有某种想法或感情。'],
    [4,'meaning','A person who harbors a fugitive is accused of:',['hiding and protecting them','helping police search','selling them a ticket'],'hiding and protecting them','法律语境中 harbor 可表示窝藏、包庇被追捕者。'],
  ]);
  add('hard', 'The hikers worked hard to reach the shelter before the temperature dropped after sunset.', '日落降温前，徒步者努力赶到了避难所。', [
    [1,'meaning','A hard stone is difficult to:',['bend or break','hear','count'],'bend or break','hard 可描述坚固、不易弯曲或破裂。'],
    [2,'meaning','A hard question is one that is:',['difficult to answer','made of metal','asked outdoors'],'difficult to answer','hard 可表示困难、费力。'],
    [4,'grammar','Choose the adverb meaning “with effort”: “They trained ___.”',['hard','hardly','hardness'],'hard','hard 作副词可表示努力地；hardly 是“几乎不”。'],
    [5,'meaning','If rain fell hard all night, it fell:',['heavily','silently','uphill'],'heavily','hard 作副词也可描述雨势猛烈。'],
  ]);
  add('hard hat', 'Everyone entering the construction zone wore a hard hat beneath the overhead crane.', '所有进入施工区的人都在高架起重机下戴着安全帽。', [
    [1,'meaning','Workers wear a hard hat mainly to protect their:',['head','ankles','lunch'],'head','hard hat 是工地安全帽，用于保护头部。'],
    [1,'context','A sign at a building site says “Hard hats required” because:',['objects could fall from above','the floor is carpeted','the weather is warm'],'objects could fall from above','施工现场要求戴安全帽，常为防止坠物伤头。'],
    [1,'collocation','Visitors must put on a ___ before entering the work area.',['hard hat','hard shoe','hat of hard'],'hard hat','hard hat 是安全帽的固定名词短语。'],
    [1,'meaning','A hard hat is protective equipment, not:',['ordinary formal headwear','a safety helmet','a construction helmet'],'ordinary formal headwear','该词指防护头盔，而非礼帽等普通帽子。'],
  ]);
  add('hard of hearing', 'Although she is hard of hearing, the professor follows lectures easily with the captioning system.', '虽然教授听力受损，但借助字幕系统，她仍能轻松跟上讲座。', [
    [1,'meaning','Someone who is hard of hearing has:',['reduced hearing ability','difficulty seeing colors','a sore throat'],'reduced hearing ability','hard of hearing 是委婉表达，指听力受损。'],
    [1,'grammar','Choose the standard phrase: “My grandfather is ___.”',['hard of hearing','hard for hearing','hardly hearing of'],'hard of hearing','固定短语为 be hard of hearing。'],
    [1,'usage','When addressing someone who is hard of hearing, a helpful action is to:',['face them and speak clearly','shout from another room','cover your mouth'],'face them and speak clearly','面对对方清楚说话便于读唇和听清。'],
    [1,'meaning','The phrase is generally used to describe a person with:',['some degree of hearing loss','a broken hearing aid only','a temporary dislike of music'],'some degree of hearing loss','该短语描述听力不佳，不限定是否使用助听设备。'],
  ]);
  add('hard work', 'Restoring the old theater took hard work from volunteers who repaired seats, painted walls, and cleaned the stage.', '修复旧剧院需要志愿者付出辛勤劳动，他们修座椅、刷墙并清理舞台。', [
    [1,'meaning','Hard work usually requires:',['a great deal of effort','no time or energy','a special uniform'],'a great deal of effort','hard work 指需要投入大量精力的工作或努力。'],
    [1,'grammar','Choose the natural phrase: “The project took ___.”',['hard work','a hard works','hardly work'],'hard work','hard work 通常作不可数名词短语。'],
    [1,'collocation','Success came after months of ___ and careful planning.',['hard work','hardly working','hardness work'],'hard work','“after months of hard work”是自然表达。'],
    [1,'meaning','A job can be hard work even if it is:',['rewarding','impossible to start','done without effort'],'rewarding','hard work 描述投入大，不意味着工作没有回报。'],
  ]);
  add('hard-working', 'The hard-working nurses stayed after their shift to help organize the emergency supplies.', '勤奋的护士们下班后留下来帮忙整理应急物资。', [
    [1,'meaning','A hard-working employee is generally:',['diligent and industrious','almost never at work','physically difficult to hire'],'diligent and industrious','hard-working 形容勤奋、努力工作的人。'],
    [1,'grammar','Choose the adjective: “a ___ research team”.',['hard-working','hard-workingly','hardly-working'],'hard-working','复合形容词作名词前定语，写作 hard-working。'],
    [1,'confusable','Which sentence means “the staff were nearly doing no work”?',['The staff were hardly working.','The staff were hard-working.','The staff had hard work.'],'The staff were hardly working.','hardly working 表示几乎没工作，hard-working 则表示勤勉。'],
    [1,'context','Which detail best supports calling a student hard-working?',['She revises carefully every evening.','She owns a new backpack.','She sits near the window.'],'She revises carefully every evening.','持续认真复习能体现勤勉。'],
  ]);
  add('harden', 'The clay will harden overnight if it is left undisturbed in a cool, dry room.', '黏土若在阴凉干燥的房间里静置一夜，就会变硬。', [
    [1,'meaning','When wet cement hardens, it:',['becomes firm','turns into water','loses all weight'],'becomes firm','harden 作不及物动词表示变硬、变坚固。'],
    [1,'grammar','Choose the correct past form: “The paint ___ by morning.”',['hardened','hard','hardeningly'],'hardened','描述过去完成的变化用 hardened。'],
    [1,'meaning','A person may “harden their attitude” by becoming:',['less sympathetic or more strict','more colorful','physically taller'],'less sympathetic or more strict','harden 也可比喻态度变得冷硬、不易动摇。'],
    [1,'collocation','The cold air can ___ the butter, making it difficult to spread.',['harden','hardness','hardly'],'harden','harden the butter 表示使黄油变硬。'],
  ]);
  add('hardheaded', 'The hardheaded negotiator rejected vague promises and asked for a written delivery date.', '这位固执务实的谈判者拒绝含糊承诺，坚持要求写明交货日期。', [
    [1,'meaning','A hardheaded decision-maker is usually:',['practical and stubborn','easily distracted by music','unable to use their head'],'practical and stubborn','hardheaded 可形容固执、务实且不易被说服。'],
    [1,'grammar','Choose the correct modifier: “a ___ businesswoman”.',['hardheaded','hardheadedly','hard head'],'hardheaded','名词前要用形容词 hardheaded。'],
    [1,'context','A hardheaded investor is most likely to ask about:',['costs and likely returns','the color of the office curtains','the chef’s favorite song'],'costs and likely returns','务实的投资者会关注成本和收益。'],
    [1,'meaning','Calling someone hardheaded may suggest they are difficult to:',['persuade','recognize by their shoes','hear over the phone'],'persuade','该词常指顽固、不肯轻易改变主意。'],
  ]);
  add('hardliner', 'The party’s hardliner opposed the compromise and demanded stricter conditions in the treaty.', '该党强硬派反对妥协，要求条约加入更严格的条件。', [
    [1,'meaning','A political hardliner tends to favor:',['a strict, uncompromising position','immediate compromise on every issue','avoiding all public policy'],'a strict, uncompromising position','hardliner 指坚持强硬路线的人。'],
    [1,'grammar','Choose the plural: “Several ___ rejected the proposal.”',['hardliners','hardliner’s','hardlinerly'],'hardliners','规则复数直接在 hardliner 后加 -s。'],
    [1,'context','A newspaper might call a negotiator a hardliner if they:',['refuse to soften their demands','withdraw from the talks quietly','accept every suggested change'],'refuse to soften their demands','不愿放宽条件体现强硬立场。'],
    [1,'meaning','In a debate, hardliner is closest to:',['hawkish advocate','neutral observer','casual visitor'],'hawkish advocate','该词常近似指立场强硬、鹰派的人。'],
  ]);
  add('hardly', 'The hall was so quiet that we could hardly hear the clock ticking at the far end.', '大厅十分安静，可我们几乎听不到远处时钟的滴答声。', [
    [1,'meaning','“I hardly know the new neighbors” means:',['I know very little about them','I know them extremely well','I have never heard their names because they are loud'],'I know very little about them','hardly 表示几乎不，带有近否定含义。'],
    [2,'meaning','“It is hardly surprising that the road is closed” means the closure is:',['not very surprising','completely impossible','the best surprise ever'],'not very surprising','hardly 可用于缓和语气，表示并不令人意外。'],
    [3,'grammar','Complete the inversion: “Hardly ___ we arrived when it began to rain.”',['had','did have','were'],'had','hardly 置于句首且表示刚……就时，常用过去完成时倒装。'],
    [1,'confusable','Choose the sentence meaning “almost no one came.”',['Hardly anyone came.','Hard people came.','People came hard.'],'Hardly anyone came.','hardly anyone 表示几乎没有人；hard people 是“坚硬的人”。'],
  ]);
  add('hardly any', 'There was hardly any shade along the exposed trail, so the hikers rested beneath a bridge.', '那段无遮蔽的步道几乎没有阴凉处，因此徒步者在桥下休息。', [
    [1,'meaning','If there is hardly any bread left, there is:',['almost none','more than enough','exactly one loaf'],'almost none','hardly any 表示数量几乎为零。'],
    [1,'grammar','Complete the sentence with an uncountable noun: “We have ___ information.”',['hardly any','hardly many','hardly a few'],'hardly any','information 不可数，使用 hardly any。'],
    [1,'grammar','Choose the agreement: “There ___ hardly any seats left.”',['are','is','be'],'are','seats 是复数，there be 结构使用 are。'],
    [1,'confusable','Which sentence avoids an unnecessary double negative?',['There is hardly any milk.','There is hardly no milk.','There isn’t hardly no milk.'],'There is hardly any milk.','hardly 已有近否定意味，应与 any 搭配表达几乎没有。'],
  ]);
  add('hardly ever', 'Because the village bus stops early, Mara hardly ever visits the library on weekday evenings.', '村里的公交车很早停运，所以玛拉工作日晚上几乎不去图书馆。', [
    [1,'meaning','Someone who hardly ever travels abroad does so:',['very rarely','every weekend','twice each day'],'very rarely','hardly ever 表示频率极低，接近 almost never。'],
    [1,'word-order','Choose the natural word order.',['He hardly ever misses practice.','He ever hardly misses practice.','He misses ever hardly practice.'],'He hardly ever misses practice.','hardly ever 通常放在实义动词前。'],
    [1,'grammar','Choose the correct verb: “My aunt hardly ever ___ television.”',['watches','watch','watching'],'watches','主语 my aunt 是第三人称单数，动词用 watches。'],
    [1,'meaning','If it hardly ever snows here, snow is:',['uncommon','certain every morning','permanent'],'uncommon','该短语描述事件很少发生。'],
  ]);
  add('hardness', 'The laboratory measured the hardness of each alloy before approving it for use in the bridge supports.', '实验室测量了每种合金的硬度，之后才批准用于桥梁支撑结构。', [
    [1,'meaning','A material’s hardness measures how resistant it is to:',['scratching or indentation','being heard','changing its name'],'scratching or indentation','材料义 hardness 指坚硬程度或抗刮能力。'],
    [1,'grammar','Choose the noun: “The ___ of the stone surprised the sculptor.”',['hardness','hard','hardly'],'hardness','主语位置需要表示性质的名词 hardness。'],
    [1,'collocation','A scientist may compare the ___ of two metals.',['hardness','hardly','hardlyness'],'hardness','compare the hardness of 是材料测试中的自然表达。'],
    [2,'meaning','In “the hardness of life,” hardness refers to:',['difficulty or severity','a person’s shoe size','a mineral’s polish'],'difficulty or severity','抽象语境中 hardness 可指生活严酷或艰难。'],
  ]);
  add('hardship', 'The relief fund helped families facing hardship after the flood damaged homes and closed local businesses.', '洪水毁坏房屋并迫使当地商铺停业后，救济基金帮助了陷入困境的家庭。', [
    [1,'meaning','Financial hardship usually involves:',['serious money difficulties','a large unexpected bonus','a new bank building'],'serious money difficulties','financial hardship 指经济上的艰难处境。'],
    [2,'meaning','A biography describing many hardships recounts:',['difficult experiences endured','a list of easy victories','the writer’s favorite meals'],'difficult experiences endured','复数 hardships 可指经历的多种具体苦难。'],
    [1,'collocation','The family struggled to ___ hardship during the drought.',['overcome','earn','enter into a hardness'],'overcome','overcome hardship 表示克服困境，是自然搭配。'],
    [1,'grammar','Choose the usual form after “great”: “They endured great ___.”',['hardship','hardshipses','hardly'],'hardship','泛指艰难处境时 hardship 常作不可数名词。'],
  ]);
  add('hardware', 'The technician replaced the computer’s damaged hardware but kept the customer’s files and software intact.', '技术员更换了电脑损坏的硬件，同时保留了客户的文件和软件。', [
    [1,'meaning','A hardware store commonly sells:',['tools, screws, and locks','computer games only','fresh vegetables'],'tools, screws, and locks','hardware 可指家用或园艺五金器具。'],
    [2,'meaning','A computer’s hardware includes its:',['physical components','passwords only','website text'],'physical components','计算机义 hardware 指设备的实体部件。'],
    [3,'meaning','Military hardware refers to:',['weapons and heavy equipment','uniform colors only','soldiers’ personal opinions'],'weapons and heavy equipment','该义指军事装备和重型武器。'],
    [2,'grammar','Choose the standard mass-noun phrase.',['computer hardware','many computer hardwares','a computer hardware'],'computer hardware','计算机硬件通常作不可数集合名词，不加复数 s。'],
  ]);
  add('hardwired', 'The emergency switch is hardwired to cut power even if the building’s control software stops responding.', '即使楼宇控制软件失灵，紧急开关也会通过固定线路切断电源。', [
    [1,'meaning','A hardwired alarm is physically connected by:',['electrical cables','a spoken instruction','a paper label'],'electrical cables','设备语境中的 hardwired 指通过固定线路连接。'],
    [2,'meaning','If someone is hardwired to notice small details, they seem:',['naturally inclined to do so','connected to an electrical outlet','unable to see details'],'naturally inclined to do so','比喻用法表示某种倾向似乎天生或根深蒂固。'],
    [1,'grammar','Complete the structure: “The sensor is hardwired ___ trigger the alarm.”',['to','for','at'],'to','常用 be hardwired to do something。'],
    [1,'confusable','A hardwired circuit can keep working when the wireless network:',['fails','gets a password','is painted blue'],'fails','实体线路连接不同于无线网络，因此网络故障不必然影响线路。'],
  ]);

})(typeof window !== 'undefined' ? window : globalThis);
