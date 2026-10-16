(function () {
  'use strict';
  const D = globalThis.RA.D;
  const E = (origin, lemma) => ({ origin, prefix: null, root: null, suffix: null, source: 'https://www.etymonline.com/word/' + lemma.toLowerCase().replaceAll(' ', '-') });
  const C = (senseId, domain, en, zh, structure, grammar, rationale) => ({ senseId, domain, en, zh, structure, grammar, rationale, sourceType: 'authored' });
  const M = (wrong, right, reason, errorType = 'meaning') => ({ wrong, right, reason, errorType });
  const q = (sense, prompt, answer, d1, d2, explain, type = 'meaning') => ({ sense, prompt, answer, d1, d2, explain, type });
  const P = (w, origin, contexts, mistake, questions) => D(w, {
    etymology: E(origin, w), contexts: Array.isArray(contexts) ? contexts : [contexts], mistakes: [mistake],
    quiz: questions.map((x, i) => ({ id: w + '.q' + (i + 1), senseId: w + '.s' + x.sense, type: '辨义与用法', prompt: x.prompt, options: [x.answer, x.d1, x.d2], answer: x.answer, explain: x.explain, errorType: x.type }))
  });

  /* A166 checkpoint 1: manifest items 1–20, water–watertight */
  P('water','Water is Old English wæter, from Proto-Germanic *watōr; it names the clear liquid, a sea area, and the act of supplying or pouring water.',[
    C('water.s1','饮水','The hikers filled their bottles with water at the spring before beginning the steep climb.','徒步者在开始陡峭攀登前，在泉水处把水壶灌满。','The hikers filled their bottles with water / at the spring / before the climb.','water.s1 是可饮用的清澈液体；fill ... with water 为自然搭配。','泉水被装入水壶供饮用。'),
    C('water.s2','航海','The research boat entered Canadian waters after the crew radioed the coast guard.','船员向海岸警卫队通报后，科考船驶入了加拿大海域。','The boat entered Canadian waters / after the crew radioed / the coast guard.','waters.s2 复数可指某国或地区的海域。','国名修饰 waters，表示所属海域。'),
    C('water.s3','园艺','Please water the seedlings at the base, keeping the leaves dry to limit fungal growth.','请给幼苗根部浇水，并保持叶片干燥以减少真菌生长。','Please water the seedlings / at the base / keeping their leaves dry.','water.s3 作及物动词，指给植物浇水。','水被浇到幼苗根部。'),
    C('water.s4','生理反应','Her eyes began to water in the cold wind, so she put on protective glasses.','冷风里她开始流眼泪，于是戴上了防护眼镜。','Her eyes began to water / in the cold wind / so she put on glasses.','water.s4 作不及物动词，指眼睛流泪或口中分泌唾液。','冷风刺激眼睛流泪。')
  ],M('The gardener watered the seedlings by withholding all water from the soil for a month.','The gardener watered the seedlings by giving the soil enough water to keep them alive.','不给土壤任何水不属于给植物浇水。'),[
    q(1,'Where did the hikers fill their bottles?','at the spring','in Canadian waters','at a water-clock display','泉水是徒步者装饮用水的地点。','context'),
    q(2,'Which water did the research boat enter?','Canadian waters','a glass of drinking water','a waterfall on the hillside','Canadian waters 指加拿大海域。','context'),
    q(3,'How should the seedlings be watered?','at the base, keeping the leaves dry','by leaving the soil dry','by pouring water on the radio','water 作动词指给植物浇水。','meaning'),
    q(4,'What happened to her eyes in the cold wind?','they began to produce tears','they became a waterway','they stopped producing any fluid','water 作动词可表示眼睛流泪。','context')
  ]);
  P('water cooler','Water cooler combines water and cooler; it names a machine or container that keeps drinking water cool, and by extension a public water-providing fixture.',[
    C('water cooler.s1','办公设施','The office water cooler stopped chilling the bottles, so the facilities team checked its compressor.','办公室的饮水机不再给水降温，因此设施团队检查了压缩机。','The office water cooler stopped chilling the bottles / so the team / checked its compressor.','water cooler.s1 指盛放并冷却饮用水的机器或容器。','制冷故障促使团队检查压缩机。','workplace'),
    C('water cooler.s2','公共设施','A water cooler beside the trail provided free drinking water for cyclists and walkers.','步道旁的饮水设施为骑行者和徒步者提供免费饮用水。','A water cooler beside the trail / provided free drinking water / for visitors.','water cooler.s2 可指公共饮水装置。','路人都可使用该饮水设施。','public')
  ],M('The office water cooler chilled the bottles even though it had no water supply, cooling unit, or container.','The office water cooler chilled drinking water in its reservoir.','完全没有供水、冷却或容器功能的设备不是 water cooler。'),[
    q(1,'What failed at the office?','the water cooler’s chilling function','the trail’s watercourse','the cyclists’ waterproof jackets','饮水机不再给水降温。','context'),
    q(2,'Who could use the trail-side water cooler?','cyclists and walkers','only the facilities team','only the office manager','步道边的装置为骑行者和徒步者供水。','context'),
    q(1,'A water cooler usually?','stores drinking water and keeps it cool','measures the time by dripping water','carries a boat over a stream','water cooler 指储水并冷却的机器或容器。','meaning'),
    q(1,'Which part might the facilities team inspect if a cooler stops chilling?','its compressor','a boat’s mast','a vineyard’s grapevine','制冷系统故障时可检查压缩机。','context')
  ]);
  P('water down','Water down combines water and down; literally it means dilute a liquid, and figuratively weaken the force, value, or effect of something.',[
    C('water down.s1','烹饪','The cook watered down the concentrated stock with hot water before adding it to the soup.','厨师先用热水稀释浓缩高汤，再把它加入汤里。','The cook watered down the stock / with hot water / before adding it.','water down.s1 作及物短语动词，过去式 watered；表示加水稀释。','加水降低了高汤浓度。','food'),
    C('water down.s2','政策','Negotiators rejected the watered-down proposal because it no longer required factories to reduce emissions.','谈判代表拒绝了被削弱的提案，因为它已不再要求工厂减少排放。','Negotiators rejected the watered-down proposal / because it no longer required / emission cuts.','watered-down 作复合形容词，表示内容或效力被削弱。','提案失去减少排放的要求，力度变弱。','policy')
  ],M('The chef watered down the stock by adding no liquid and making it more concentrated.','The chef watered down the stock by adding hot water and reducing its concentration.','没有加入液体、反而更浓不是稀释。'),[
    q(1,'What did the cook add to the concentrated stock?','hot water','extra salt crystals','a water-clock','加热水稀释浓缩高汤。','context'),
    q(2,'Why was the proposal called watered-down?','it no longer required emission cuts','it added a stronger factory limit','it introduced a watercourse','提案删掉了减排要求，政策力度被削弱。','context'),
    q(1,'To water down a liquid is to?','add water so it becomes less concentrated','remove all water so it grows stronger','freeze it into ice','water down 的字面义是加水稀释。','meaning'),
    q(2,'To water down a policy is to?','reduce its strength or effect','make it legally watertight','measure it with a clock','比喻义表示削弱政策的力量或效果。','meaning')
  ]);
  P('water-borne','Water-borne combines water and borne, the past participle of bear; it describes goods carried by water or disease spread through water.',[
    C('water-borne.s1','公共卫生','The health office traced the water-borne outbreak to a damaged pipe that had allowed sewage into the well.','卫生部门把这次水传播疾病暴发追溯到一根破损水管，污水由此进入水井。','The office traced the water-borne outbreak / to a damaged pipe / contaminating the well.','water-borne 修饰 outbreak，说明传播媒介是水。','受污染井水导致疾病传播。','health'),
    C('water-borne.s1','运输','The island’s water-borne freight arrives by barge because no road connects it to the mainland.','由于岛上没有通往大陆的公路，水运货物由驳船送达。','The island’s water-borne freight arrives / by barge / because no road connects it.','water-borne 也可形容靠水运输的货物。','货物由驳船运抵岛上。','transport')
  ],M('Officials called the outbreak water-borne even though testing showed it spread only through mosquito bites and never through water.','Officials called the outbreak water-borne after finding the pathogen in the contaminated well.','若病原体只经蚊虫叮咬传播，就不能称为水传播。'),[
    q(1,'What caused the water-borne outbreak?','sewage entered the well through a damaged pipe','mosquitoes bit every resident','a barge carried clean supplies','污染井水导致疾病传播。','context'),
    q(1,'Why did the island receive water-borne freight?','no road linked it to the mainland','the island had no waterfront','the cargo was too light for a barge','岛上没有公路，只能水运货物。','context'),
    q(1,'A water-borne disease is spread?','through contaminated water','only by direct sunlight','by a clock’s moving hands','water-borne disease 指经水传播的疾病。','meaning'),
    q(1,'Water-borne cargo is cargo?','transported by water','diluted with water','sealed against rain','water-borne 也可指由水路运输的货物。','meaning')
  ]);
  P('water-clock','Water-clock combines water with clock; ancient water clocks measured time by the controlled dripping or flow of water from a vessel.',
    C('water-clock.s1','古代计时','The museum’s water-clock measured an hour as water slowly drained from the marked upper vessel into the lower one.','博物馆的水钟以水从带刻度的上层容器缓慢流入下层容器的过程来计时。','The water-clock measured an hour / as water drained / from the marked vessel.','water-clock 指古代以水的滴流或流动计时的装置。','容器刻度与水位变化记录时间。','history'),
    M('The water-clock measured time with a battery-powered quartz display and no water or vessel.','The water-clock measured time by the steady flow of water between marked vessels.','石英电子屏而非水流计时的装置不是 water-clock。','meaning'),[
      q(1,'How did the museum’s water-clock measure an hour?','water drained from a marked vessel','a quartz battery display counted seconds','a motorboat crossed a lake','水位缓慢变化用于计时。','context'),
      q(1,'What moved in the water-clock?','water flowing between vessels','the hands of a waterproof watch only','a water-skiier behind a boat','水钟依靠水滴流或流动运作。','context'),
      q(1,'A water-clock is an ancient device that?','tells time by water dripping or flowing','keeps drinking water cool','measures the height of a waterfall','water-clock 以水流计时。','meaning'),
      q(1,'Which instrument is a water-clock?','a marked vessel that times intervals as water drains','a digital timer with no liquid','a modern waterpower generator','水从刻度容器流出并计时的装置是水钟。','meaning')
    ]);
  P('water-proof','Water-proof combines water and proof (“resistant to”); it describes something impervious to water or the treatment that makes it so, and is an older noun for a raincoat.',[
    C('water-proof.s1','户外装备','The guide wore a water-proof jacket during the downpour and stayed dry on the exposed ridge.','暴雨中，向导穿着防水夹克，在无遮蔽的山脊上仍保持干燥。','The guide wore a water-proof jacket / during the downpour / and stayed dry.','water-proof 作形容词修饰 jacket，表示不透水。','夹克阻挡雨水。','clothing'),
    C('water-proof.s1','材料处理','The label describes the water-proof coating that prevents rain from soaking into the canvas.','标签介绍了防水涂层，它能避免雨水浸入帆布。','The label describes the water-proof coating / that keeps rain / from soaking into canvas.','water-proof 也可指使材料防水的处理或涂层。','涂层阻挡水分渗入。','materials'),
    C('water-proof.s1','旧式用法','In the old travel diary, the porter hung his water-proof by the door after the storm.','在这本旧旅行日记里，暴雨后搬运工把雨衣挂在门边。','The porter hung his water-proof / by the door / after the storm.','water-proof 旧时也可作名词，指雨衣。','历史语境中的 water-proof 是一件雨衣。','historical')
  ],M('The water-proof jacket absorbed rain immediately and left the guide soaked through.','The water-proof jacket kept rain from soaking through to the guide’s clothes.','能让雨水迅速透过并浸湿穿着者的衣服，不具防水性。'),[
    q(1,'What did the water-proof jacket do in the downpour?','kept the guide dry','soaked the guide completely','measured an hour by dripping water','防水夹克使向导在暴雨中保持干燥。','context'),
    q(1,'What did the coating prevent?','rain from soaking into the canvas','water from flowing through a water-clock','a boat from entering a harbor','防水涂层阻挡雨水渗进帆布。','context'),
    q(1,'Water-proof means?','resistant to water passing through','designed to absorb every drop','used to measure time','water-proof 指不让水透过。','meaning'),
    q(1,'In the old diary, what did the porter hang up?','a water-proof raincoat','a water-clock for measuring the storm','a sheet of watercolor paper','旧式名词 water-proof 指雨衣。','context')
  ]);
  P('water-skiing','Water-skiing combines water and skiing; ski came into English from Norwegian skíð, a split piece of wood, and the sport is done on skis pulled by a motorboat.',
    C('water-skiing.s1','水上运动','The beginners practiced water-skiing in the calm bay while a motorboat pulled them on paired skis.','初学者在平静的海湾练习滑水，由摩托艇牵引他们脚下的双板。','The beginners practiced water-skiing / while a motorboat pulled them / on skis.','water-skiing 指由摩托艇牵引、脚踩水橇在水面滑行。','摩托艇牵引滑水者。','sport'),
    M('The athlete called it water-skiing while gliding on snow behind a chairlift with no boat or water.','The athlete practiced water-skiing by gliding over water on skis pulled by a motorboat.','在雪地滑行且没有水和牵引艇，不是 water-skiing。'),[
      q(1,'What pulled the beginners during water-skiing?','a motorboat','a water-clock','a river current alone','摩托艇牵引滑水者。','context'),
      q(1,'Where did they practice?','in a calm bay','on a snowy mountain','inside a watercourse pipe','他们在平静的海湾练习滑水。','context'),
      q(1,'Water-skiing involves?','gliding on water on skis pulled by a boat','skiing on snow behind a chairlift','paddling a canoe without skis','water-skiing 是船牵引下的水上滑行。','meaning'),
      q(1,'Which is required for the example sport?','skis and a motorboat on water','snow and a chairlift','a waterproof clock','例句中的滑水依靠水橇和摩托艇。','context')
    ]);
  P('waterborne','Waterborne is the closed spelling of water-borne, formed from water and borne; it describes something transported or spread by water.',[
    C('waterborne.s1','饮水安全','The inspector found a waterborne parasite in the town supply and ordered residents to boil tap water.','检查员在镇供水中发现水传播寄生虫，于是要求居民把自来水煮沸。','The inspector found a waterborne parasite / in the supply / and ordered boiling.','waterborne 修饰 parasite，说明其经水传播。','寄生虫在供水中被发现。','health'),
    C('waterborne.s1','航运','Waterborne timber reached the mill on a flat-bottomed barge from the logging camp upstream.','水运木材由一艘平底驳船从上游伐木营地送到了锯木厂。','Waterborne timber reached the mill / on a barge / from upstream.','waterborne 也可表示货物通过水路运输。','木材坐驳船抵达锯木厂。','transport')
  ],M('The town’s waterborne parasite spread only through airborne dust, and tests found none in the water supply.','The town’s parasite was waterborne because inspectors detected it in the contaminated supply.','只经空气传播且水中检测不到的寄生虫并非 waterborne。'),[
    q(1,'What did residents have to boil?','tap water','the mill’s timber','the motorboat’s fuel','寄生虫污染供水后要求煮沸自来水。','context'),
    q(1,'How did timber reach the mill?','by a barge on the water','by a chairlift over snow','by a water-clock','木材由驳船水运到锯木厂。','context'),
    q(1,'Waterborne means?','transported or spread by water','carried only by wind','resistant to water','waterborne 指由水运送或传播。','meaning'),
    q(1,'A waterborne parasite would most likely be found?','in contaminated drinking water','only in dry airborne dust','inside a waterproof jacket','水传播寄生虫可能存在于受污染的饮水中。','context')
  ]);
  P('watercolor','Watercolor combines water and color; the American spelling names water-based paint or a picture made with it, while British English commonly writes watercolour.',[
    C('watercolor.s1','绘画媒材','She painted the harbor in watercolor, using thin washes of blue to show the morning mist.','她用水彩画下港口，以薄薄的蓝色水层表现清晨的薄雾。','She painted the harbor in watercolor / using thin blue washes / for the mist.','watercolor 可指水性颜料媒材；美式拼写为一个 l。','薄涂水彩呈现朦胧港景。','art'),
    C('watercolor.s1','画作','The gallery displayed a watercolor of the old water-clock beside the artist’s notebook.','画廊展出了一幅描绘古水钟的水彩画，旁边是艺术家的笔记本。','The gallery displayed a watercolor / of the old water-clock / beside the notebook.','watercolor 也可指用水彩颜料完成的画。','作品是一幅水彩画。','art')
  ],M('She painted the harbor in watercolor, a medium that uses only dry oil paint and never mixes pigments with water.','She painted the harbor in watercolor, a water-based medium applied in thin washes.','水彩颜料以水调和，并非纯油性干颜料。'),[
    q(1,'How did the artist show the morning mist?','with thin blue washes','with thick waterproof plastic','with a digital clock','薄涂蓝色水彩表现薄雾。','context'),
    q(1,'What did the gallery display?','a water-based painting of the old water-clock','a water-clock made from paint','a boat used for water-skiing','画廊展出的是描绘水钟的水彩画。','context'),
    q(1,'Watercolor as a medium uses?','water-based paint','only dry oil with no water','magnetic video tape','水彩颜料以水为媒介。','meaning'),
    q(1,'Which spelling is common in American English?','watercolor','watercolour only','watercoler','美式拼写是 watercolor，英式常用 watercolour。','spelling')
  ]);
  P('watercourse','Watercourse combines water and course in the sense of a path; it means a channel through which water flows, natural or constructed.',[
    C('watercourse.s1','水利工程','The survey crew marked the artificial watercourse that carries irrigation water to the eastern fields.','测绘队标出了把灌溉水送往东部田地的人工水道。','The crew marked the watercourse / that carries irrigation water / to the fields.','watercourse.s1 指天然或人工的流水通道。','人工渠道把水输送到农田。','engineering'),
    C('watercourse.s2','溪流','A narrow watercourse runs through the woodland and joins the river below the footbridge.','一条狭窄溪流穿过林地，在人行桥下游汇入河流。','A narrow watercourse runs through the woodland / and joins the river.','watercourse.s2 可指天然小溪。','小溪流入较大的河流。','geography')
  ],M('The irrigation watercourse carried no water and had no channel, so it could not deliver anything to the fields.','The irrigation watercourse carried water through a channel to the fields.','没有水流也没有渠道就无法输水。'),[
    q(1,'Where did the artificial watercourse carry irrigation water?','to the eastern fields','to the water-clock museum','to the harbor’s open sea','渠道把灌溉水送到东部田地。','context'),
    q(2,'What happened to the narrow woodland watercourse?','it joined the river below the footbridge','it flowed uphill into a water cooler','it became a dry road','小溪在桥下汇入河流。','context'),
    q(1,'A watercourse is?','a channel through which water flows','a container that cools drinking water','a protective raincoat','watercourse 指水流经的通道。','meaning'),
    q(2,'A small natural watercourse may be?','a stream','a watershed ridge only','a waterfall painting','天然小水道可以是溪流。','meaning')
  ]);
  P('watercraft','Watercraft joins water and craft, with craft meaning a vehicle or skill; it names a vessel that travels on water or skill in handling one.',[
    C('watercraft.s1','航海','The harbor museum displays a traditional watercraft that local fishers once paddled along the coast.','港口博物馆展出一艘当地渔民曾沿海划行的传统船只。','The museum displays a traditional watercraft / that fishers once paddled / along the coast.','watercraft.s1 指任何在水上行驶的船只。','渔民用船沿海捕鱼。','transport'),
    C('watercraft.s1','航海技能','Safe watercraft requires reading the current and adjusting the boat before entering the narrow channel.','安全驾船需要判断水流，并在驶入狭窄水道前调整船只。','Safe watercraft requires reading the current / and adjusting the boat / before entry.','watercraft 也可指操船本领。','根据水流操控船只体现驾船技术。','skill')
  ],M('The museum labeled a sailing boat a watercraft but stated that it could not travel on water.','The museum labeled the boat a watercraft because it was designed to travel on water.','不能在水上行驶的器具不属于船只义 watercraft。'),[
    q(1,'What kind of object did the museum display?','a traditional boat once paddled by fishers','a water-based painting','a machine for measuring water','博物馆展出的是曾由渔民划行的船只。','context'),
    q(1,'What does safe watercraft require in the second example?','reading the current and adjusting the boat','adding water to a concentrated liquid','watching a water-clock','安全操船要判断水流并调整船只。','context'),
    q(1,'Watercraft can mean?','a vessel that travels on water','a bird living near a lake','a ridge dividing river systems','watercraft 指在水上行驶的船只。','meaning'),
    q(1,'“Skill in watercraft” refers to?','the ability to handle a vessel on water','the ability to paint with watercolor','the ability to cool drinking water','watercraft 也可指驾船技能。','meaning')
  ]);
  P('waterfall','Waterfall combines water and fall; it is a stream dropping from a high place, or anything that pours or hangs down in a similar way.',[
    C('waterfall.s1','自然地理','After the rain, the waterfall grew louder as more water dropped over the cliff into the pool.','降雨后，更多水从悬崖跌入水潭，瀑布声也变大了。','The waterfall grew louder / as more water dropped / over the cliff.','waterfall.s1 指从高处跌落的水流。','水从悬崖落下形成瀑布。','geography'),
    C('waterfall.s2','比喻外观','A waterfall of ivy hung over the old stone wall and nearly covered the gate.','常春藤像瀑布一样垂挂在旧石墙上，几乎遮住了大门。','A waterfall of ivy hung over the wall / and nearly covered the gate.','waterfall.s2 比喻像瀑布一样倾泻或垂落的东西。','藤叶大量下垂，外观像瀑布。','description')
  ],M('The waterfall was a dry, level stone terrace with no water dropping from any height.','The waterfall poured over the cliff into the pool below.','没有水流从高处落下的平地不是瀑布。'),[
    q(1,'What made the waterfall louder after rain?','more water fell over the cliff','the pool had dried out','the ivy was cut from a wall','雨后水量增大，使瀑布声更响。','context'),
    q(2,'What hung over the stone wall like a waterfall?','ivy','a water-clock','a vessel of drinking water','常春藤大量垂挂，像瀑布一样。','context'),
    q(1,'A waterfall is normally?','water falling from a high place','a flat dry terrace','a machine that cools water','waterfall 指从高处跌落的水流。','meaning'),
    q(2,'A “waterfall of ivy” describes ivy that?','hangs or pours down in a thick mass','grows only under the soil','flows through an underground pipe','比喻用法指藤叶大量垂挂。','meaning')
  ]);
  P('waterfowl','Waterfowl combines water and fowl; it names wild birds that live on or near water, including ducks, geese, and swans, sometimes counted as game.',[
    C('waterfowl.s1','野生动物','The reserve provides shallow ponds where waterfowl can feed and rest during migration.','保护区提供浅水池塘，让水禽迁徙时觅食和休息。','The reserve provides shallow ponds / where waterfowl can feed / during migration.','waterfowl.s1 指生活在水上或水边的野生鸟类。','池塘为迁徙水禽提供栖息地。','wildlife'),
    C('waterfowl.s2','狩猎管理','The annual survey counted waterfowl taken by licensed hunters so managers could set next season’s limits.','年度调查统计持证猎人捕获的水禽数量，以便管理人员制定下季限额。','The survey counted waterfowl / taken by licensed hunters / to set limits.','waterfowl.s2 指作为猎物被统计的水鸟。','统计结果用于制定狩猎限额。','conservation')
  ],M('The reserve counted its waterfowl as desert mammals that never live on or near water.','The reserve counted the ducks and geese as waterfowl because they live on or near water.','鸭和鹅是水鸟，不是从不近水的沙漠哺乳动物。'),[
    q(1,'What did the reserve provide for waterfowl?','shallow ponds for feeding and rest','a dry hillside with no water','a water-proof jacket','水禽可在浅水池塘觅食和休息。','context'),
    q(2,'Why did the survey count hunted waterfowl?','to set limits for the next season','to measure a waterfall','to make a watercourse','统计捕获数量帮助制定下一季限额。','context'),
    q(1,'Which animals are waterfowl?','ducks, geese, and swans','foxes, deer, and bears','trout, salmon, and eels','鸭、鹅、天鹅是水禽。','meaning'),
    q(2,'In a hunting report, waterfowl may refer to?','water birds counted as game','all birds regardless of habitat','only fish living in a pond','狩猎语境中 waterfowl 可指作为猎物统计的水鸟。','meaning')
  ]);
  P('waterfront','Waterfront combines water and front in the sense of an edge; it means land along a sea, lake, or river, especially a busy dockside district.',[
    C('waterfront.s1','城市地理','The town restored its waterfront path so residents could walk beside the river without crossing the freight yard.','小镇修复了滨水步道，让居民可以沿河散步而不必穿过货运场。','The town restored its waterfront path / so residents could walk / beside the river.','waterfront.s1 指沿海、湖或河的陆地。','步道沿河岸而建。','urban planning'),
    C('waterfront.s2','港口商业','Restaurants and small hotels filled the busy waterfront near the old ferry docks.','老渡船码头附近繁忙的滨水区开满了餐馆和小旅馆。','Restaurants and hotels filled the waterfront / near the old docks.','waterfront.s2 指码头附近繁华的商住区域。','餐馆和旅馆集中在码头周边。','travel')
  ],M('The waterfront district was miles inland, with no river, lake, sea, or dock nearby.','The waterfront district lay beside the old ferry docks on the river.','远离任何水域的内陆地区不是滨水区。'),[
    q(1,'Where was the restored path?','beside the river','across the dry desert','inside the water cooler','步道建在河边。','context'),
    q(2,'What filled the busy waterfront near the docks?','restaurants and small hotels','only a water-clock museum','dryland farms','餐馆和旅店在码头附近聚集。','context'),
    q(1,'A waterfront is land along?','a sea, lake, or river','a mountain ridge dividing river basins','a dry road far inland','waterfront 指沿水域边缘的陆地。','meaning'),
    q(2,'A busy dockside waterfront may include?','shops, restaurants, and homes','only waterfowl nests','a single water-skiing course far offshore','码头附近的繁忙滨水区常有商店和住宅。','meaning')
  ]);
  P('waterpower','Waterpower combines water and power; it means energy from falling or flowing water used to drive machinery or generate electricity.',
    C('waterpower.s1','能源','The mill used waterpower from the fast-moving stream to turn its grain stones.','磨坊利用湍急溪流的水力带动磨石。','The mill used waterpower / from the fast-moving stream / to turn the stones.','waterpower 指流水或落水转化成的机械能。','水流驱动磨坊设备。','energy'),
    M('The mill generated waterpower from a dry stream that had no moving or falling water.','The mill generated waterpower from the stream’s moving water.','没有流水就没有可供利用的水力。'),[
      q(1,'What did the mill’s waterpower turn?','the grain stones','a water-proof jacket','the water-clock hands','水力带动磨坊磨石。','context'),
      q(1,'Where did the energy come from?','the fast-moving stream','a silent video','a dry hillside','水力来自湍急溪流。','context'),
      q(1,'Waterpower is energy derived from?','falling or flowing water','windless dry air','the heat of a candle only','waterpower 指由落水或流水取得的能量。','meaning'),
      q(1,'Which facility uses waterpower?','a mill driven by a fast stream','a battery clock with no water','a raincoat factory','流水驱动的磨坊利用水力。','meaning')
    ]);
  P('waterproof','Waterproof combines water and proof (“resistant to”); as an adjective it blocks water, and as a verb it means treat material to make it water-resistant.',[
    C('waterproof.s1','装备','The waterproof case kept the camera dry when a wave washed over the kayak.','海浪冲过皮划艇时，防水外壳保护相机没有弄湿。','The waterproof case kept the camera dry / when a wave / washed over the kayak.','waterproof.s1 作形容词，表示水不能透过或渗入。','外壳阻挡海水。','outdoors'),
    C('waterproof.s2','材料加工','Workers waterproofed the basement wall with a membrane before backfilling the excavation.','工人在回填基坑前，先用防水膜处理地下室墙面。','Workers waterproofed the wall / with a membrane / before backfilling.','waterproof.s2 作动词，过去式 waterproofed，表示进行防水处理。','防水膜处理墙体以阻止渗漏。','construction')
  ],M('The case was waterproof, yet water passed through it and soaked the camera during the wave.','The waterproof case kept water from reaching the camera during the wave.','水能透过并浸湿相机的外壳并不防水。','meaning'),[
    q(1,'What protected the camera from the wave?','a waterproof case','a water-clock','a waterfowl nest','防水外壳保护相机免受海水浸湿。','context'),
    q(2,'What did workers do to the basement wall?','treated it with a membrane to block water','diluted it with water','built a watercourse through it','工人给地下室墙面做防水处理。','context'),
    q(1,'A waterproof object is made so that?','water cannot pass through or soak in','water flows through freely','it measures time by dripping','waterproof 作形容词指不透水。','meaning'),
    q(2,'To waterproof a wall is to?','treat it so water cannot get through','paint it with watercolor only','build a water-clock beside it','waterproof 作动词表示对材料作防水处理。','meaning')
  ]);
  P('waters','Waters is the plural of water; it can refer to water generally or, especially in maritime contexts, the sea or a particular country’s maritime area.',[
    C('waters.s1','大量水','After the storm, the swollen river’s waters covered the lower footpath and reached the bridge supports.','暴风雨后，河水上涨，淹没了下层步道并漫到桥墩处。','The river’s waters covered the footpath / and reached / the bridge supports.','waters.s1 可指大量的水或一片水域。','河水上涨并漫过步道。','weather'),
    C('waters.s2','海域','The research vessel left international waters and entered the country’s protected coastal waters.','科考船离开国际水域，驶入该国受保护的沿海海域。','The vessel left international waters / and entered protected coastal waters.','waters.s2 指某国或地区的海域，尤其涉及海上权利。','句子区分国际水域与国家沿海水域。','maritime')
  ],M('The vessel entered the country’s protected waters, but the report said it remained thousands of miles away in international waters.','The vessel entered the country’s protected coastal waters after leaving international waters.','已驶入沿海海域就不能同时仍处于远处的国际水域。'),[
    q(1,'What did the river’s waters cover?','the lower footpath','the dry mountain summit','a watercolor painting','上涨的河水淹没下层步道。','context'),
    q(2,'Where did the research vessel enter?','the country’s protected coastal waters','a water cooler in the office','an inland watercourse','船驶入该国受保护的沿海海域。','context'),
    q(1,'“The river’s waters” can mean?','a large amount or body of river water','only a single glass of water','a dry channel with no flow','waters 可指大量河水或水域。','meaning'),
    q(2,'A country’s waters often refer to?','its maritime area and coastal sea','the water inside a drinking cooler','its inland mountain villages only','国家 waters 常指其海域。','meaning')
  ]);
  P('watershed','Watershed combines water with shed in the sense of dividing or letting flow away; it names a ridge separating river systems, a river’s drainage region, or figuratively a decisive turning point.',[
    C('watershed.s1','地形','The ridge is a watershed: rain falling on its eastern slope flows to one river, while western rain reaches another.','这道山脊是一处分水岭：东坡的雨水流入一条河，西坡的雨水则流向另一条河。','The ridge is a watershed / as rain on each slope / reaches a different river.','watershed.s1 指分隔不同河流水系的山脊。','山脊两侧径流进入不同水系。','geography'),
    C('watershed.s1','流域与转折','The wetland restoration marked a watershed for the basin, changing how the region managed floodwater.','湿地修复成为该流域的转折点，改变了当地管理洪水的方式。','The restoration marked a watershed / for the basin / by changing flood management.','watershed 也可指河流排水的区域，并比喻决定性转折点。','修复改变了整个流域的管理方法。','environment')
  ],M('The ridge was a watershed even though rain on both sides drained into the same river system with no divide.','The ridge was a watershed because runoff on its two slopes flowed into separate river systems.','分水岭的关键是把水流分向不同水系。'),[
    q(1,'Where did rain from the eastern slope flow?','to one river, while western rain reached another','into the same river as every drop from the west','into a water cooler','山脊两侧的水流进入不同河流。','context'),
    q(1,'What did the wetland restoration change?','how the basin managed floodwater','the color of a watercolor','the motorboat’s water-skiing speed','湿地修复改变了流域洪水管理。','context'),
    q(1,'A geographic watershed may be?','a ridge that divides river drainage','a flat shore beside a lake','a machine for cooling water','watershed 可指把水流分向不同水系的山脊。','meaning'),
    q(1,'Figuratively, a watershed is?','a decisive turning point','a routine event with no effect','a narrow pipe carrying water','比喻义 watershed 指决定性的转折点。','meaning')
  ]);
  P('waterside','Waterside combines water and side; it means the area beside a body of water such as a river, lake, or sea.',
    C('waterside.s1','休闲地点','Families ate lunch at a waterside picnic table while boats passed along the lake.','船只驶过湖面时，几家人在水边野餐桌旁吃午餐。','Families ate at a waterside table / while boats passed / along the lake.','waterside 作定语表示位于水边。','桌子紧邻湖岸。','recreation'),
    M('The picnic table was called waterside even though it stood far inland on a dry plain with no lake or river nearby.','The picnic table stood waterside beside the lake.','远离湖河等水体的旱地不是水边。'),[
      q(1,'Where did the families eat lunch?','at a table beside the lake','on a ridge dividing two basins','inside a water-clock museum','野餐桌位于湖边。','context'),
      q(1,'What passed along the lake?','boats','waterproof jackets','watercolor paintings','湖上有船经过。','context'),
      q(1,'Waterside means?','the area beside a body of water','the bottom of a deep river','an inland dry plain','waterside 指河湖海旁边的区域。','meaning'),
      q(1,'Which location is waterside?','a café beside a harbor','a house miles from any water','a ridge between separate river basins','港口旁的咖啡馆位于水边。','context')
    ]);
  P('watertight','Watertight combines water and tight; it means sealed against water, and figuratively describes reasoning or evidence that cannot be faulted.',[
    C('watertight.s1','工程','The diver checked that the watertight hatch was sealed before the lower compartment filled with air.','潜水员检查防水舱口已密封，才让下层舱室充入空气。','The diver checked the watertight hatch / before the compartment / filled with air.','watertight.s1 指密封得水不能进入或漏出的。','舱口密封保护舱室。','engineering'),
    C('watertight.s2','论证','The defense built a watertight case from time-stamped records and independent witness statements.','辩方依据带时间戳的记录和独立证人陈述，建立了无懈可击的论证。','The defense built a watertight case / from time-stamped records / and independent statements.','watertight.s2 比喻论证严密、难以驳倒。','证据相互印证，论据严密。','law')
  ],M('The defense called its case watertight, although it relied on contradictory records and had no witnesses or supporting evidence.','The defense called its case watertight because consistent records and independent witnesses supported it.','互相矛盾且没有支持证据的论证并不严密。'),[
    q(1,'What did the diver check?','that the hatch was sealed against water','that a watercourse was dry','that the camera was waterproofed','潜水员检查舱口密封性。','context'),
    q(2,'What supported the defense’s watertight case?','time-stamped records and independent witnesses','contradictory accounts with no evidence','a watercolor of the courtroom','多种相互支持的证据使论证无懈可击。','context'),
    q(1,'A watertight hatch?','does not let water enter or escape','lets water pass through freely','is used to measure the flow of water','watertight.s1 指不漏水的。','meaning'),
    q(2,'A watertight argument is?','so well supported that it is hard to fault','full of gaps and contradictions','painted with watercolor','比喻用法指论据严密、难以驳倒。','meaning')
  ]);
  /* A166 checkpoint 2: manifest items 21–40, waterway–weakness */
  P('waterway','Waterway combines water and way in the sense of a route; it is a navigable river or canal, or a built channel that carries water.',[
    C('waterway.s1','航运','The cargo boat followed the inland waterway from the port to a canal that reached the factory town.','货船沿内河航道从港口驶向一条通往工厂城镇的运河。','The cargo boat followed the waterway / from the port / to the canal.','waterway.s1 指船只可以通行的河流或水道。','货船沿可通航路线行驶。','transport'),
    C('waterway.s2','灌溉','Engineers repaired the waterway that carries irrigation water from the reservoir to nearby farms.','工程师修复了把灌溉水从水库输送到附近农场的渠道。','Engineers repaired the waterway / that carries irrigation water / to farms.','waterway.s2 指为农田或城镇输水修建的渠道。','渠道将水从水库输送出去。','engineering')
  ],M('The cargo boat used the waterway to reach town, although the supposed route was a dry path with no water and no passage for boats.','The cargo boat followed the navigable canal waterway into town.','干燥陆路不是船只能够通行的水道。'),[
    q(1,'Where did the cargo boat travel?','along an inland river and canal','over a dry mountain path','through a water-clock','船沿内河和运河行驶。','context'),
    q(2,'What did engineers repair?','a channel carrying irrigation water','a road for cargo trucks','a motorboat used for water-skiing','工程师修复了灌溉水渠。','context'),
    q(1,'A navigable waterway is?','a river or canal boats can travel along','a dry ridge between watersheds','a body of water with no route','waterway 可指船只通行的河流或运河。','meaning'),
    q(2,'A built waterway may carry?','water to farms or towns','only pedestrians through a forest','a boat across a dry field','人工水道也可用于输水。','meaning')
  ]);
  P('waterworks','Waterworks combines water and works in the sense of industrial works; it names the buildings and pipes that collect and distribute a town’s water.',
    C('waterworks.s1','市政供水','The waterworks filtered river water and pumped it through pipes to homes across the district.','自来水厂过滤河水，再通过管网泵送到整个地区的住户。','The waterworks filtered river water / and pumped it / through pipes to homes.','waterworks.s1 指收集、处理和配送城镇用水的建筑与管网。','水厂处理河水并通过管网供水。','infrastructure'),
    M('The town’s waterworks distributed drinking water by shutting every pump and disconnecting all pipes from homes.','The town’s waterworks filtered the supply and pumped it through the distribution pipes.','关闭所有泵并断开管网不能配送城镇用水。'),[
      q(1,'What did the waterworks do to river water?','filtered it and pumped it to homes','turned it into a water-clock','used it to make watercolor','水厂过滤河水并将其泵送到住户。','context'),
      q(1,'What are waterworks?','the buildings and pipes that collect and distribute a town’s water','a waterfall and the stream below it','a ship’s equipment for crossing a lake','waterworks 指城镇供水建筑和管网。','meaning'),
      q(1,'Which facility is a waterworks?','a treatment plant connected to municipal pipes','a private bottle with no pipes','a road beside the river','连接市政管网的水处理厂属于 waterworks。','context'),
      q(1,'Why is waterworks often used as a singular-looking plural noun?','it names a coordinated facility or system as one entity','it always means many unrelated fountains','it is the plural of waterwork as a verb','waterworks 通常作为一套供水系统来指称。','grammar')
    ]);
  P('watery','Watery combines water and -y; it means containing much water, thin or diluted in taste, or pale and lacking color.',[
    C('watery.s1','食物','The soup tasted watery after too much stock was added, so the cook simmered it until it thickened.','加了太多高汤后，汤尝起来很稀，厨师便继续炖煮让它变浓。','The soup tasted watery / after too much stock / so it was simmered longer.','watery 描述味道稀淡或含水量过高；taste 作系动词。','汤被炖浓以弥补稀薄口感。','food'),
    C('watery.s1','外观','His watery eyes became red after the smoke from the fire drifted through the room.','火灾烟雾飘进屋后，他的眼睛泛泪发红。','His eyes became watery and red / after smoke / drifted through the room.','watery 也可表示眼睛含泪、流泪。','刺激性烟雾使眼睛流泪。','health')
  ],M('The watery soup was thick and concentrated, with almost no liquid in it.','The watery soup was thin, so the cook simmered it to concentrate the flavor.','浓稠且几乎没有液体的汤不能称为 watery。'),[
    q(1,'Why did the cook simmer the soup?','it tasted thin and watery','it was already too thick to stir','it had turned into a waterway','汤太稀，需要炖煮浓缩。','context'),
    q(1,'Why did his eyes become watery?','smoke drifted through the room','he read a water-clock','he looked at a dry map','烟雾刺激眼睛流泪。','context'),
    q(1,'A watery drink is often?','thin or diluted','very concentrated','sealed against all water','watery 可指味道稀淡或被稀释。','meaning'),
    q(1,'Watery eyes are eyes that?','contain tears or are producing them','are perfectly dry and irritated by no cause','have a blue-purple color only','watery eyes 指含泪或流泪的眼睛。','meaning')
  ]);
  P('watt','Watt is named after Scottish engineer James Watt; it is the SI unit measuring the rate of energy use or production, and labels a device’s power rating.',[
    C('watt.s1','电力单位','The lamp uses only six watts, so it draws far less power than the old workshop floodlight.','这盏灯只耗六瓦，功率远低于旧车间的泛光灯。','The lamp uses six watts / so it draws less power / than the old light.','watt.s1 是衡量功率的单位；单位名通常小写。','功率数值说明灯具耗电速率较低。','physics'),
    C('watt.s2','产品规格','A 900-watt microwave is powerful enough to heat the meal quickly without using the restaurant’s industrial oven.','这台900瓦的微波炉足以快速加热饭菜，不必使用餐馆的工业烤箱。','A 900-watt microwave is powerful enough / to heat the meal / quickly.','数字与 watt 作前置复合修饰语时通常用单数 watt。','设备规格说明其功率。','appliance')
  ],M('The label rated the lamp at six watts, meaning it consumed six kilograms of water each hour.','The label rated the lamp at six watts, a measure of its electrical power.','watt 衡量功率，不是水的质量或体积。','measurement'),[
    q(1,'How much power did the lamp use?','six watts','six gallons','six hours','灯具的功率是六瓦。','context'),
    q(2,'What does 900-watt describe?','the microwave’s power rating','the amount of water it contains','how many meals it serves','900-watt 表示微波炉的功率规格。','context'),
    q(1,'A watt measures?','the rate at which electrical energy is used or produced','the distance between two wave peaks','the volume of a watercourse','watt 是功率单位。','meaning'),
    q(2,'Which device has the higher stated power?','a 900-watt microwave','a six-watt lamp','a water-clock with no electrical rating','900瓦高于6瓦。','measurement')
  ]);
  P('wave','Wave is recorded in Old English; the noun and verb developed for movement to and fro, and now cover water ridges, signals, greetings, surges, and hair curves.',[
    C('wave.s1','海面','A wave lifted the small buoy and carried it several metres toward the rocky shore.','一个浪头托起小浮标，把它推向岩岸数米。','A wave lifted the buoy / and carried it / toward the rocky shore.','wave.s1 指海面或湖面上隆起并移动的水。','浮标随水面波浪移动。','ocean'),
    C('wave.s2','招手','The station manager waved to the departing train as it pulled away from the platform.','火车驶离站台时，站长向它挥手告别。','The manager waved to the train / as it pulled away / from the platform.','wave.s2 作动词，左右移动手或物体打招呼、示意。','站长向列车挥手。','gesture'),
    C('wave.s3','物理信号','The radio wave travelled through the antenna system and carried the weather report to the receiver.','无线电波穿过天线系统，把天气报告传到接收器。','The radio wave travelled through the antenna / and carried the report / to the receiver.','wave.s3 指光、声或无线电等能量的规则波动。','无线电波传送信号。','physics'),
    C('wave.s4','数量激增','A wave of complaints arrived after the company announced a sudden increase in the monthly fee.','公司宣布月费突然上涨后，投诉一下子大量涌来。','A wave of complaints arrived / after the fee increase / was announced.','a wave of + 复数名词比喻事件或数量突然增加。','许多投诉接连出现。','business'),
    C('wave.s5','发型','The stylist waved her hair with heated rollers before the evening performance.','晚间演出前，发型师用加热卷发器把她的头发烫成波浪卷。','The stylist waved her hair / with heated rollers / before the performance.','wave.s5 作动词，指把头发做成一连串弯曲或波浪。','卷发器把直发做成波浪形。','beauty')
  ],M('The manager waved to the departing train by holding both arms motionless at his sides.','The manager waved to the train by moving one hand from side to side.','手臂完全不动不是挥手示意。'),[
    q(1,'What did the wave carry toward shore?','a small buoy','a weather report','a large group of complaints','海浪推动浮标靠近岩岸。','context'),
    q(2,'How did the manager greet the departing train?','moved a hand from side to side','held both arms perfectly still','sent a radio signal from a receiver','他向列车挥手告别。','context'),
    q(3,'What carried the weather report to the receiver?','a radio wave','a wave of complaints','a water-skiier','无线电波传送天气报告。','context'),
    q(4,'“A wave of complaints” means?','a sudden large increase in complaints','a single raised line of seawater','a person waving to a train','该短语比喻投诉大量涌现。','meaning')
  ]);
  P('wavelength','Wavelength combines wave and length; in physics it is the distance between corresponding points on a wave, and figuratively it can mean a shared way of thinking.',[
    C('wavelength.s1','物理','The scientist calculated the wavelength by measuring the distance from one crest of the light wave to the next.','科学家测量光波一个波峰到下一个波峰的距离，计算出波长。','The scientist calculated wavelength / by measuring crest to crest.','wavelength.s1 指波上相邻同类点之间的距离。','测量相邻波峰得到波长。','physics'),
    C('wavelength.s2','人际理解','The new colleagues were on the same wavelength and quickly agreed on how to organize the field survey.','新同事们思路一致，很快就对如何组织实地调查达成共识。','The colleagues were on the same wavelength / and quickly agreed / on the survey plan.','on the same wavelength 是习语，表示思路相近、彼此理解。','他们容易达成共识。','communication')
  ],M('The scientists measured wavelength from one wave crest to the nearest unrelated tree, not to another point on the wave.','The scientists measured wavelength between matching points such as one crest and the next.','波长应在同一波形的对应点之间测量。','measurement'),[
    q(1,'How did the scientist calculate wavelength?','measured from one crest to the next','counted how many trees grew nearby','measured the length of a water cooler','相邻波峰之间的距离就是波长。','context'),
    q(2,'What did the colleagues do while on the same wavelength?','agreed quickly on a survey plan','argued because they could not understand each other','measured a radio antenna','思路相近的同事很快商定调查方案。','context'),
    q(1,'Wavelength is a distance between?','corresponding points on a wave','a wave and a shoreline','two water coolers','波长指波上相邻对应点之间的距离。','meaning'),
    q(2,'If two people are on the same wavelength, they?','understand one another and think similarly','are physically standing on a wave','disagree about every detail','习语表示彼此理解、思路一致。','meaning')
  ]);
  P('waver','Waver is related to Old English wafian “move to and fro”; it means hesitate, become less certain, or fluctuate in level or amount.',[
    C('waver.s1','犹豫','She began to waver before signing the contract when she noticed the early termination fee.','她注意到提前终止费用后，在签合同前开始犹豫。','She began to waver / before signing / when she noticed the fee.','waver.s1 指拿不定主意而迟疑。','新发现的费用使她犹豫是否签约。','decision'),
    C('waver.s2','信念','The witness did not waver in her account, even when the lawyer repeated the same question.','即使律师反复提出同一个问题，证人的陈述也没有动摇。','The witness did not waver / in her account / when questioned again.','waver.s2 指观点或确信程度略有动摇。','证人始终坚持原陈述。','law'),
    C('waver.s3','价格','Fuel prices wavered throughout the week as traders reacted to changing supply forecasts.','交易员根据不断变化的供应预测作出反应，燃油价格整周上下波动。','Fuel prices wavered / throughout the week / as forecasts changed.','waver.s3 指价格、数量或水平反复变化。','价格在一周内上下浮动。','finance')
  ],M('The witness wavered in her account, but her testimony remained exactly the same and she never hesitated or changed her certainty.','The witness did not waver in her account and repeated the same details confidently.','完全不迟疑、也未改变观点与“动摇”相反。'),[
    q(1,'Why did the customer begin to waver?','she noticed an early termination fee','the contract had already been signed a year earlier','the price was fixed by a watershed','额外费用使她犹豫。','context'),
    q(2,'How did the witness respond to repeated questions?','she did not change or weaken her account','she withdrew her statement at once','she waved to the train','证人没有动摇自己的陈述。','context'),
    q(3,'What happened to fuel prices during the week?','they fluctuated as supply forecasts changed','they stayed legally fixed forever','they became waterborne','燃油价格随预测变化而波动。','context'),
    q(1,'To waver before acting is to?','hesitate because one is unsure','move with complete certainty','make a water channel','waver 可指因不确定而犹豫。','meaning')
  ]);
  P('waves','Waves is the plural of wave; it can mean multiple moving lines on water or a large number of people or events arriving together.',[
    C('waves.s1','海况','The waves grew taller as the storm approached, and the ferry captain cancelled the evening crossing.','风暴逼近时海浪变高，渡船船长取消了晚间航班。','The waves grew taller / as the storm approached / so the crossing was cancelled.','waves.s1 是海面或湖面移动水线的复数。','海浪增高，影响渡船安全。','weather'),
    C('waves.s2','人群','Waves of visitors entered the museum after the doors opened, so staff directed them toward separate galleries.','博物馆开门后，一批批游客涌入，工作人员便引导他们前往不同展厅。','Waves of visitors entered / after the doors opened / so staff redirected them.','waves of + 人群比喻大量人分批到来。','游客大量涌入展馆。','public')
  ],M('Waves of visitors arrived at the museum, but the report said that nobody came through the doors all day.','Waves of visitors arrived after the museum opened, so staff directed them into the galleries.','游客大量到达与整天无人进门互相矛盾。'),[
    q(1,'Why did the ferry captain cancel the crossing?','the waves grew taller as a storm approached','the sea became perfectly calm','the water cooler stopped working','风暴逼近、海浪升高，船长取消航班。','context'),
    q(2,'What happened when the museum doors opened?','waves of visitors entered','no visitors came all day','water flowed into the galleries','开门后许多游客成批涌入。','context'),
    q(1,'Waves in the sea are?','raised moving lines of water','a group of museum employees','a kind of power unit','waves.s1 指海面上隆起移动的水线。','meaning'),
    q(2,'“Waves of visitors” means?','large groups arriving one after another','a single person waving','water moving across the sea','waves of visitors 比喻大量游客陆续到来。','meaning')
  ]);
  P('wavy','Wavy is formed from wave and -y; it describes a repeated wave shape or a series of gentle curves.',
    C('wavy.s1','形状','The old road follows a wavy line along the dunes, rising and dipping with the sandy ground.','旧路沿沙丘蜿蜒起伏，随着沙地地势上下弯曲。','The road follows a wavy line / along the dunes / rising and dipping.','wavy 修饰 line，表示呈一连串波浪或缓弯。','道路轮廓不断起伏。','landscape'),
    M('The map showed a wavy road as a perfectly straight line with no bends or curves.','The map showed the road as a wavy line that rose and dipped along the dunes.','没有弯曲的直线不符合 wavy。'),[
      q(1,'What did the old road follow?','a wavy line along the dunes','a perfectly straight line','a watercourse beneath a bridge','道路沿沙丘曲折起伏。','context'),
      q(1,'Wavy means?','forming a series of waves or gentle curves','flat and completely straight','sealed so water cannot enter','wavy 指呈波浪形或有一连串缓弯。','meaning'),
      q(1,'Which line is wavy?','one that rises and dips in repeated curves','one drawn perfectly straight with a ruler','one with no visible path','反复起伏弯曲的线是 wavy。','context'),
      q(1,'What noun is wavy formed from?','wave','waterworks','week','wavy 由 wave 加 -y 构成。','word-formation')
    ]);
  P('wax','The wax substance is Old English weax; the moon verb is Old English weaxan “grow.” The noun names the soft solid used in candles and polish, while the verbs mean coat a surface or appear fuller.',[
    C('wax.s1','材料','The beekeeper saved the beeswax to make candles after filtering out bits of wood and leaves.','养蜂人滤掉木屑和树叶后，把蜂蜡留下来制作蜡烛。','The beekeeper saved the wax / to make candles / after filtering debris.','wax.s1 指容易熔化、用于蜡烛或上光的软固体。','蜂蜡可熔化后制成蜡烛。','materials'),
    C('wax.s2','保养','Before the exhibition, the restorer waxed the wooden table to protect its polished surface.','展览前，修复师给木桌上蜡，以保护它抛光后的表面。','The restorer waxed the table / to protect its surface / before the exhibition.','wax.s2 作及物动词，表示在表面涂蜡或抛光。','蜡涂在木桌表面作保护。','craft'),
    C('wax.s3','月相','The moon will wax over the next two weeks, appearing fuller each night before the full moon.','接下来的两周里月亮会逐渐盈起，满月前每晚看起来都更圆。','The moon will wax / appearing fuller / each night before the full moon.','wax.s3 指月亮一夜比一夜看起来更圆。','月面逐渐变亮变圆。','astronomy')
  ],M('The restorer waxed the table by stripping away the coating and leaving the bare wood unprotected.','The restorer waxed the table by applying a protective layer of wax to its surface.','去除蜡层而不作保护不是上蜡。'),[
    q(1,'What did the beekeeper make from beeswax?','candles','a water-clock','a waterborne parasite','蜂蜡被留来制作蜡烛。','context'),
    q(2,'Why did the restorer wax the table?','to protect its polished surface','to remove every protective coating','to measure its wavelength','修复师给桌面涂蜡以保护表面。','context'),
    q(3,'What happens as the moon waxes?','it appears fuller each night','it becomes smaller each night','it is covered with beeswax','月亮盈起时看起来逐渐变圆。','meaning'),
    q(1,'Wax as a material is?','a soft solid used for candles or polish','a clear liquid that forms rivers','a unit of electrical power','wax 可指制作蜡烛或上光的软固体。','meaning')
  ]);
  P('waxy','Waxy is formed from wax and -y; it describes a wax-like texture or color, including an unusually pale, unhealthy appearance.',[
    C('waxy.s1','植物表面','The leaves have a waxy coating that helps them shed rain and retain moisture in dry weather.','这些叶片有一层蜡质表皮，能帮助雨水滑落，并在干燥天气保留水分。','The leaves have a waxy coating / that sheds rain / and retains moisture.','waxy.s1 指质地像蜡或覆有蜡状层。','蜡状表层使水珠滑落。','botany'),
    C('waxy.s1','面色','After fainting, the patient looked waxy and pale, so the nurse checked her pulse immediately.','病人昏厥后脸色蜡黄苍白，护士立即检查了她的脉搏。','The patient looked waxy and pale / after fainting / so the nurse checked her pulse.','waxy 可描述病态苍白的颜色。','昏厥后脸色苍白引起护理关注。','health')
  ],M('The patient looked waxy and pale, but the note said her complexion was rosy and perfectly healthy.','The patient looked waxy and pale after fainting, so the nurse checked her pulse.','苍白蜡黄与红润健康的描述不能同时成立。'),[
    q(1,'What do the leaves’ waxy coating help them do?','shed rain and retain moisture','absorb every drop through the surface','generate electrical power','蜡质表层帮助叶片排水并保湿。','context'),
    q(1,'Why did the nurse check the patient’s pulse?','she looked waxy and pale after fainting','her complexion was rosy and she felt well','she had just waxed a wooden table','病人昏厥后脸色蜡白，需要检查脉搏。','context'),
    q(1,'Waxy texture means?','resembling wax','made entirely of water','very rough like sand','waxy 可指质地像蜡。','meaning'),
    q(1,'A waxy complexion may look?','unusually pale and unhealthy','brightly flushed and vigorous','blue-purple like a violet','waxy 可形容病态苍白的面色。','meaning')
  ]);
  P('way','Way is Old English weg, from Proto-Germanic *wegaz “path”; it means a method, route, direction, respect, or—before a comparison—very much/far.',[
    C('way.s1','方法','The simplest way to reduce the pump’s noise was to place rubber pads beneath its feet.','降低水泵噪声最简单的方法是在泵脚下垫橡胶垫。','The simplest way to reduce noise / was to place rubber pads / under the pump.','way.s1 指做事的方法；way to do something 为常见结构。','橡胶垫是减噪的方法。','engineering'),
    C('way.s2','路线','We took the coastal way back to the hotel so we could stop at the harbor overlook.','我们沿海岸路返回酒店，这样就能在港口观景点停留。','We took the coastal way back / so we could stop / at the overlook.','way.s2 指从一地到另一地的道路或路线。','海岸路是返回酒店的路线。','travel'),
    C('way.s4','方面','In one important way, the new filter is better: it removes the parasite without reducing water flow.','从一个重要方面来说，新过滤器更好：它能去除寄生虫而不降低水流量。','In one important way / the new filter is better / because it preserves flow.','in one way 表示在某一方面。','句子列出过滤器的一个具体优点。','comparison')
  ],M('The simplest way to reduce the pump’s noise was to increase its speed and make it louder.','The simplest way to reduce the pump’s noise was to place rubber pads beneath it.','增加速度并使噪声更大与降低噪声目的相反。'),[
    q(1,'What was the simplest way to reduce pump noise?','put rubber pads beneath its feet','increase its speed','remove the waterway','橡胶垫能减少水泵震动噪声。','context'),
    q(2,'Which route did the travelers take back?','the coastal way','the inland watershed ridge','a virtual world','他们沿海岸路返回酒店。','context'),
    q(4,'“In one important way” means?','in one particular respect or detail','by following a road','by using the most difficult method','该短语表示在某一个方面。','meaning'),
    q(1,'A way to do something is?','a method for doing it','a unit of electrical power','a water-resistant coating','way.s1 指做事方法。','meaning')
  ]);
  P('way in','Way in combines way and in; it means an entrance route or, figuratively, a means of being accepted into a group, job, or industry.',[
    C('way in.s1','入口','The fire marshal marked the way in with illuminated signs so visitors could find the auditorium entrance.','消防检查员用发光标志标出入口路线，让访客能找到礼堂入口。','The marshal marked the way in / with illuminated signs / to the auditorium.','way in.s1 指进入某地的开口或路线。','标志指出进场路线。','safety'),
    C('way in.s2','入行途径','An internship at the local station gave the graduate a way in to broadcast journalism.','在当地电视台实习为这位毕业生提供了进入广播新闻行业的门路。','The internship gave the graduate a way in / to broadcast journalism.','way in.s2 指进入某群体、职业或行业的途径。','实习帮助毕业生进入该行业。','career')
  ],M('The illuminated signs marked the way in, but pointed visitors away from every entrance and toward a locked wall.','The signs marked the way in by pointing visitors toward the auditorium entrance.','指向封闭墙面而远离入口的标志没有标明进入路线。'),[
    q(1,'What did the signs help visitors find?','the auditorium entrance','the exit from the building','a job in broadcasting','发光标志指出礼堂入口。','context'),
    q(2,'What gave the graduate a way in to journalism?','an internship at the local station','a locked auditorium door','a watercourse','当地电视台实习提供了进入新闻行业的门路。','context'),
    q(1,'A way in to a building is?','an opening or route for entering','a route for leaving','a method of reducing pump noise','way in 可指进入某地的入口路线。','meaning'),
    q(2,'A way in to an industry is?','a means of being accepted into it','a door that is physically locked','a method to water down a liquid','比喻义指进入某行业的途径。','meaning')
  ]);
  P('way out','Way out combines way and out; it means a route for leaving a place or a means of escaping a difficult situation.',[
    C('way out.s1','疏散','During the drill, staff kept the way out clear so everyone could leave the hall quickly.','演习期间，工作人员保持出口通畅，让所有人都能迅速离开大厅。','Staff kept the way out clear / so everyone / could leave quickly.','way out.s1 指离开某地的路线或出口。','出口未被堵塞，便于疏散。','safety'),
    C('way out.s2','解决办法','Negotiators found a way out of the budget impasse by delaying the renovation rather than cancelling it.','谈判代表通过推迟而非取消翻修，找到了解决预算僵局的办法。','Negotiators found a way out of the impasse / by delaying the renovation.','way out of a problem 表示摆脱困境的办法。','推迟工程让预算僵局得到解决。','finance')
  ],M('Staff blocked the only way out during the drill so that everyone could leave the hall quickly.','Staff kept the only way out clear so everyone could leave quickly.','堵住唯一出口妨碍疏散，不是帮助离开。'),[
    q(1,'What did staff do during the drill?','kept the exit route clear','blocked the only doorway','built a watercourse','工作人员保持出口通畅。','context'),
    q(2,'How did negotiators solve the budget impasse?','delayed the renovation instead of cancelling it','cancelled every project and made no agreement','watered down the river','推迟翻修让双方找到解决办法。','context'),
    q(1,'A way out of a room is?','a route or opening for leaving','a route for entering','a channel built to carry irrigation water','way out 可指离开房间的出口。','meaning'),
    q(2,'A way out of a difficult situation is?','a means of resolving or escaping it','the wall that makes it worse','a warning about waterfowl','way out 也可指摆脱困境的办法。','meaning')
  ]);
  P('we','We is Old English wē, the first-person plural pronoun; it refers to the speaker and others, may include the listener generally, or may represent an author or institution.',[
    C('we.s1','日常表达','We will meet the survey team at the waterside before they begin mapping the channel.','我们将在测绘队开始绘制水道之前，在水边与他们会合。','We will meet the team / at the waterside / before the survey begins.','we.s1 指说话者与至少一名其他人。','说话者把自己和同伴包括在内。','conversation'),
    C('we.s2','泛指人们','We often take clean water for granted until a supply problem affects the whole town.','我们往往把干净的水视为理所当然，直到供水问题影响整座城镇。','We often take clean water for granted / until a supply problem / affects the town.','we.s2 可泛指人们，包括听者。','这里表达一般人的共同经验。','general'),
    C('we.s3','机构文体','We have reviewed your application and will send a decision by Friday, the admissions office wrote.','招生办公室写道：“我们已审阅您的申请，并将在周五前发送决定。”','We have reviewed your application / and will send a decision / by Friday.','we.s3 可由作者、编辑或机构用来代替 I。','招生办公室以机构名义发言。','writing')
  ],M('The letter said “We have reviewed your application,” but the writer claimed the pronoun meant only the applicant and excluded the admissions office.','The letter used we to speak on behalf of the admissions office.','we 在该正式信件中代表机构作者，而不是只指申请人。'),[
    q(1,'Where will the speaker meet the survey team?','at the waterside','at the waterworks office','inside a virtual world','说话者和同伴会在水边会合。','context'),
    q(2,'What can we mean in “We often take clean water for granted”?','people in general, including the listener','one named speaker only','a single watercourse','此处 we 泛指人们。','meaning'),
    q(3,'Who does we represent in the admissions letter?','the admissions office as the writer','only the applicant','the survey team','机构信件用 we 代表招生办公室。','context'),
    q(1,'We is which grammatical person?','first-person plural','third-person singular','second-person plural only','we 是第一人称复数代词。','grammar')
  ]);
  P('weak','Weak is Old English wāc “pliant, weak”; it describes low physical strength, poor effectiveness, or a substance or signal with little intensity.',[
    C('weak.s1','健康','After the fever, the patient felt weak and needed help walking from the clinic to the car.','发烧后，病人感到虚弱，需要别人扶着从诊所走到汽车旁。','The patient felt weak / and needed help walking / after the fever.','weak.s1 指身体力气不足。','病人需要帮助行走。','health'),
    C('weak.s2','论证','The committee rejected the weak proposal because it offered no cost estimate or evidence of public need.','委员会否决了这份薄弱的提案，因为它没有成本估算，也没有公众需求证据。','The committee rejected the weak proposal / because it offered no estimate / or evidence.','weak.s2 指论证无力、容易受到反驳。','提案缺少论据。','policy'),
    C('weak.s3','味道','The tea was weak after the leaves had been steeped for only a few seconds.','茶叶只浸泡了几秒，所以茶味很淡。','The tea was weak / after the leaves steeped / for only a few seconds.','weak.s3 可指味道或信号强度不足。','浸泡时间太短使茶味淡。','food')
  ],M('The tea was weak and intensely concentrated after the leaves steeped for only a few seconds.','The tea was weak and lightly flavored after the leaves steeped for only a few seconds.','短暂浸泡后的茶味淡，不是浓烈。'),[
    q(1,'Why did the patient need help walking?','the fever left the patient physically weak','the clinic was a waterway','the tea was too strong','发烧后病人身体虚弱。','context'),
    q(2,'Why was the proposal weak?','it lacked cost estimates and evidence','it supplied strong evidence and a full budget','it contained a waterproof case','缺少估算和证据使提案论据薄弱。','context'),
    q(3,'How did the tea taste?','light and not strongly flavored','very concentrated and intense','like a water-clock','茶叶泡得太短，茶味很淡。','context'),
    q(2,'A weak argument is one that?','is ineffective or easy to challenge','is supported by complete evidence','is physically tired after fever','weak 可指论据无力、容易被反驳。','meaning')
  ]);
  P('weaken','Weaken combines weak and -en; it means make something less strong, dilute a liquid, or become worse through age, wear, or damage.',[
    C('weaken.s1','影响力','Repeated delays weakened public confidence in the waterworks project.','一再延误削弱了公众对自来水厂项目的信心。','Repeated delays weakened public confidence / in the project.','weaken.s1 是及物动词，指降低力量、效力或信任。','延误使公众信心下降。','public affairs'),
    C('weaken.s2','稀释','The cook added broth to weaken the salty sauce without changing its basic flavor.','厨师加入高汤稀释过咸的酱汁，同时不改变它的基本味道。','The cook added broth / to weaken the salty sauce / without changing its flavor.','weaken.s2 指降低液体或混合物浓度。','加液体使酱汁变淡。','food'),
    C('weaken.s3','自然变差','The old footbridge weakened over decades of frost and repeated flooding.','这座旧人行桥经受数十年的冻融和反复洪水后逐渐变得脆弱。','The footbridge weakened / over decades of frost / and flooding.','weaken.s3 可不及物，指因年久、磨损或损坏而逐渐变弱。','冻融和洪水让桥梁逐渐受损。','engineering')
  ],M('The cook weakened the salty sauce by adding no liquid and making its flavor more concentrated.','The cook weakened the salty sauce by adding broth to dilute it.','不加液体且让味道更浓不会稀释酱汁。'),[
    q(1,'What weakened public confidence?','repeated project delays','a timely opening with full reports','a waterfowl survey','一再延期削弱了公众信心。','context'),
    q(2,'How did the cook weaken the sauce?','added broth to dilute it','added salt to intensify it','froze it into a water-clock','加入高汤使酱汁变淡。','context'),
    q(3,'Why did the footbridge weaken?','decades of frost and flooding damaged it','it was newly rebuilt with stronger supports','it was used as a watercolor','长期冻融和洪水使桥梁逐渐受损。','context'),
    q(1,'To weaken confidence is to?','make it less strong','make it impossible to change','measure it in watts','weaken 可指削弱信心或效力。','meaning')
  ]);
  P('weakling','Weakling combines weak with -ling, a suffix forming a person or thing; it names a physically frail person or, disapprovingly, someone seen as lacking courage.',[
    C('weakling.s1','体力','The coach called no one a weakling; instead, she adjusted training so each recovering athlete could build strength safely.','教练没有把任何人叫作弱者，而是调整训练，让每位康复中的运动员都能安全增强体力。','The coach called no one a weakling / and adjusted training / for recovering athletes.','weakling.s1 指身体虚弱、容易疲惫的人；例句以否定方式避免羞辱性标签。','教练采取支持性的训练安排。','sport'),
    C('weakling.s2','勇气','The novel’s bully mocked the new recruit as a weakling for refusing to join a dangerous prank.','小说里的恶霸嘲笑新兵是胆小鬼，因为他拒绝参与危险恶作剧。','The bully mocked the recruit as a weakling / for refusing / to join the prank.','weakling.s2 是贬义用法，指被认为面对危险缺乏勇气的人。','拒绝危险恶作剧被恶霸错误地视作怯懦。','literature')
  ],M('The bully called the recruit a weakling for showing courage and refusing to join a dangerous prank.','The bully called the recruit a weakling for refusing the dangerous prank, though the refusal was sensible.','拒绝危险行为可能是明智选择；恶霸的称呼是嘲讽性评价，不应当作客观事实。','register'),[
    q(1,'What did the coach do instead of labeling athletes weaklings?','adjusted training for safe strength-building','mocked them for recovering','made them join a dangerous prank','教练调整训练以帮助运动员恢复体力。','context'),
    q(2,'Why did the bully mock the recruit?','the recruit refused a dangerous prank','the recruit helped an injured teammate','the recruit repaired a waterworks pipe','恶霸把拒绝危险恶作剧视作缺乏勇气。','context'),
    q(1,'A weakling in the physical sense is?','a frail person with little strength','a person with exceptional stamina','a person who repairs water pipes','weakling.s1 指体力虚弱的人。','meaning'),
    q(2,'Calling someone a weakling is usually?','disapproving or insulting','a neutral medical diagnosis','a formal job title','weakling 常带贬义或侮辱意味。','register')
  ]);
  P('weakly','Weakly is formed from weak and -ly; as an adverb it means with little strength, and as an adjective it can mean physically feeble.',[
    C('weakly.s1','动作','The injured swimmer waved weakly from the shore until the lifeguard noticed and called for help.','受伤的游泳者在岸边无力地挥手，直到救生员看见并呼叫援助。','The swimmer waved weakly / from the shore / until the lifeguard noticed.','weakly 修饰 waved，说明动作缺少力气。','挥手动作微弱，显示体力不足。','health'),
    C('weakly.s1','健康状态','The doctor described the recovering patient as weakly but improving, and scheduled another check.','医生说康复中的病人身体仍虚弱但正在好转，并安排了复查。','The patient was weakly but improving / so the doctor / scheduled another check.','weakly 也可作形容词，表示身体虚弱。','病人仍虚弱，不过情况改善。','medical')
  ],M('The swimmer waved weakly by using strong, forceful gestures that could be seen from miles away.','The swimmer waved weakly with a small, low-strength movement from the shore.','非常有力且明显的动作不符合 weakly 的副词义。'),[
    q(1,'How did the injured swimmer signal?','with a low-strength wave from shore','with a powerful motorboat','with a water-clock','游泳者无力地挥手求助。','context'),
    q(1,'What did the doctor say about the patient?','still physically feeble but improving','fully recovered with no weakness','too strong to need another check','病人仍虚弱，但正在好转。','context'),
    q(1,'To wave weakly is to wave?','with little strength','with great force','in a way that is watertight','weakly 作副词表示动作无力。','meaning'),
    q(1,'Which sentence uses weakly as an adverb?','She weakly lifted her hand after the long illness.','She is a weakly patient recovering from illness.','The weakly of the bridge needs repair.','修饰 lifted 的 weakly 是副词。','grammar')
  ]);
  P('weakness','Weakness is formed from weak and -ness; it names a lack of physical energy or a flaw in a person or thing.',[
    C('weakness.s1','体力','The long hike exposed his weakness, so he stopped to rest and drink before the final climb.','长途徒步暴露出他的体力不足，因此他在最后一段攀登前停下来休息喝水。','The hike exposed his weakness / so he stopped / before the final climb.','weakness.s1 指体力或精力不足。','行程使体力不足显现。','health'),
    C('weakness.s2','产品缺陷','The report identified a weakness in the waterproof seal where the cable entered the casing.','报告指出电缆进入外壳处的防水密封存在缺陷。','The report identified a weakness / in the seal / where the cable entered.','weakness.s2 指结构或设计上的缺陷。','密封处有可能进水的薄弱点。','engineering')
  ],M('The report found no weakness in the seal, even though water leaked through the exact point it was meant to protect.','The report identified a weakness in the seal where water leaked through.','若水从密封处漏入，该处就存在缺陷。'),[
    q(1,'Why did the hiker stop?','the long hike exposed a lack of strength','the final climb had already ended','the hiker wanted to water the plants','长途徒步显出体力不足。','context'),
    q(2,'Where did the report find a weakness?','in the seal around the cable entry','in the waterfowl population','in the wavelength measurement','报告指出电缆入口密封处有缺陷。','context'),
    q(1,'Physical weakness is?','a lack of strength or energy','a strong and effective argument','a route for entering a building','weakness.s1 指体力或精力不足。','meaning'),
    q(2,'A weakness in a design is?','a flaw that can make it fail','an advantage that improves it','a way into a profession','weakness.s2 指结构或设计中的缺陷。','meaning')
  ]);
  /* A166 checkpoint 3: manifest items 41–60, wealth–website */
  P('wealth','Wealth is Old English wela “well-being, prosperity,” later wealth; it means a large amount of money or property, or a plentiful supply of something useful.',[
    C('wealth.s1','个人财产','The family used part of its wealth to restore the historic house and open it as a community library.','这家人拿出部分财产修复历史建筑，并把它开放为社区图书馆。','The family used part of its wealth / to restore the house / and open a library.','wealth.s1 指大量金钱、财产或贵重物品。','家庭的资产用于修缮和公益项目。','finance'),
    C('wealth.s2','资源','The archive contains a wealth of field notes that help researchers understand the watershed’s changing climate.','档案馆藏有大量实地笔记，帮助研究人员了解流域气候的变化。','The archive contains a wealth of field notes / that help researchers / study the watershed.','a wealth of + 复数名词表示大量有用之物。','丰富的笔记为研究提供资源。','research')
  ],M('The archive had a wealth of field notes, but the shelves were empty and no notes had ever been collected.','The archive had a wealth of field notes that researchers could consult.','空荡的档案馆没有大量笔记。'),[
    q(1,'What did the family use its wealth for?','restoring a house and opening a library','buying a water-skiing boat','building a water-clock','家庭拿出部分财产修复房屋并开办图书馆。','context'),
    q(2,'What does the archive contain a wealth of?','field notes about the watershed','empty folders','watt meters','档案馆有大量流域研究笔记。','context'),
    q(1,'Personal wealth usually includes?','money, property, and valuable possessions','only a person’s physical strength','a group of connected web pages','wealth.s1 指金钱、财产和贵重物品。','meaning'),
    q(2,'“A wealth of information” means?','a large amount of useful information','a small amount of water','information that belongs to one wealthy person','a wealth of 可表示大量有用信息。','meaning')
  ]);
  P('wealthy','Wealthy is formed from wealth and -y; it means having much money or property, and can describe a place or business with abundant resources.',[
    C('wealthy.s1','家庭','The wealthy family funded scholarships for students from the neighboring fishing villages.','这个富裕家庭为附近渔村的学生设立了奖学金。','The wealthy family funded scholarships / for students / from nearby villages.','wealthy.s1 指拥有大量金钱或财产的。','家庭有足够资源支持奖学金。','education'),
    C('wealthy.s2','地区经济','The region became wealthy through shipping and manufacturing, then invested in public schools and waterworks.','该地区通过航运和制造业变得富裕，随后投资建设公立学校和供水设施。','The region became wealthy / through shipping and manufacturing / then invested in services.','wealthy.s2 可形容财源、贸易或自然资源丰厚的地区。','产业发展为地区带来财富。','economics')
  ],M('The wealthy district had no money, trade, or natural resources and could not fund its basic services.','The wealthy district had strong trade and enough resources to fund its schools.','缺少资金、贸易和资源与富裕的描述矛盾。'),[
    q(1,'Who received scholarships funded by the family?','students from neighboring fishing villages','the family’s waterworks crew','only the regional mayor','富裕家庭为周边渔村学生提供奖学金。','context'),
    q(2,'How did the region become wealthy?','through shipping and manufacturing','by closing its port and factories','by collecting waves','该地区依靠航运和制造业发展富裕。','context'),
    q(1,'A wealthy household has?','a large amount of money or property','no assets or income','only a strong watercourse','wealthy 指拥有大量财富的。','meaning'),
    q(2,'A wealthy region may have?','abundant trade or natural resources','no industry and no income','only a single webpage','地区义 wealthy 可指贸易或资源丰厚。','meaning')
  ]);
  P('wean','Wean is recorded in Old English with senses of accustoming or diminishing; its deeper origin is uncertain. It means stop milk-feeding or gradually detach someone from dependence.',[
    C('wean.s1','动物照护','The farmer began to wean the lambs by introducing hay while they still stayed near their mothers.','农场主开始给小羊引入干草，让它们逐步断奶，同时仍留在母羊附近。','The farmer began to wean the lambs / by introducing hay / while they stayed near their mothers.','wean.s1 指逐步停止幼小哺乳动物只吃母乳。','固体饲料逐渐替代母乳。','animal care'),
    C('wean.s1','习惯改变','The clinician helped him wean himself off late-night energy drinks by replacing them with water and an earlier bedtime.','临床人员帮助他逐步戒掉深夜能量饮料，改喝水并提早睡觉。','The clinician helped him wean himself off energy drinks / by replacing them / with water.','wean someone off + 依赖物，指逐步使其摆脱依赖。','替代习惯帮助他逐渐戒除。','health')
  ],M('The farmer weaned the lambs by making them depend entirely on their mothers’ milk for longer and removing all solid feed.','The farmer weaned the lambs by gradually introducing hay and reducing their dependence on milk.','完全依赖母乳且不引入固体饲料是延迟而非断奶。'),[
    q(1,'How did the farmer begin to wean the lambs?','introduced hay while they stayed near their mothers','removed all food except milk','moved them into the waterworks','逐步引入干草有助于幼羊断奶。','context'),
    q(1,'What habit did the clinician help the patient wean himself off?','late-night energy drinks','drinking clean water','reading field notes','他逐步戒掉深夜饮用能量饮料的习惯。','context'),
    q(1,'To wean a young mammal is to?','gradually stop feeding it only its mother’s milk','make it drink only milk forever','teach it to swim','wean 的动物义是让幼崽逐步断奶。','meaning'),
    q(1,'To wean someone off a habit usually means?','help them gradually stop depending on it','force them to rely on it more','begin the habit for the first time','wean someone off 表示逐步使其摆脱依赖。','meaning')
  ]);
  P('weapon','Weapon is Old English wæpen, “instrument of fighting”; it means an object used to injure or kill, or figuratively a means of gaining advantage in a conflict.',[
    C('weapon.s1','安全检查','The guard secured the weapon before entering the crowded public hall.','守卫进入拥挤的公共大厅前先妥善收起了武器。','The guard secured the weapon / before entering / the crowded hall.','weapon.s1 指用来伤害或杀人的器物。','在进入公共场所前处理武器。','safety'),
    C('weapon.s2','竞争策略','The negotiator used verified cost data as a weapon in the debate over the factory contract.','谈判代表把核实过的成本数据当作工厂合同辩论中的有力手段。','The negotiator used cost data as a weapon / in the debate / over the contract.','weapon.s2 比喻冲突或竞争中用来取得优势的手段。','数据支持谈判立场。','business')
  ],M('The guard described the loaded firearm as a harmless weapon that could not injure anyone.','The guard secured the loaded firearm because it could injure someone.','能造成伤害的枪械不能称为无害器物。'),[
    q(1,'What did the guard secure?','the weapon','the contract’s cost data','the water-clock','守卫妥善收起了武器。','context'),
    q(2,'What did the negotiator use as a weapon?','verified cost data','a loaded firearm','a water-ski','谈判代表以数据作为竞争中的有力手段。','context'),
    q(1,'A weapon is an object intended to?','hurt or kill','keep drinking water cool','measure electrical power','weapon 的实体义是用于伤害或杀人的器物。','meaning'),
    q(2,'A “weapon in a debate” is figuratively?','a means of gaining an advantage','a physical object used in the debate','an exit from the meeting room','比喻义 weapon 是竞争中取得优势的手段。','meaning')
  ]);
  P('weaponry','Weaponry is formed from weapon and -ry; it means weapons considered collectively, especially an army’s arms, or collectively the means used in competition.',[
    C('weaponry.s1','军事装备','The report compared the two armies’ weaponry, including their artillery, aircraft, and defensive systems.','报告比较了两支军队的军械，包括火炮、飞机和防御系统。','The report compared the armies’ weaponry / including artillery / and defensive systems.','weaponry.s1 指作为整体的一套武器装备。','列出的武器和防御系统构成军械。','military'),
    C('weaponry.s2','竞赛手段','In the tournament, accurate scouting reports became part of the team’s weaponry against stronger opponents.','在锦标赛中，准确的侦察报告成为这支队伍对抗强敌的手段之一。','Scouting reports became part of the team’s weaponry / against stronger opponents.','weaponry.s2 比喻一组可用来赢得冲突或竞赛的手段。','侦察资料为队伍提供竞争优势。','sport')
  ],M('The report listed artillery and aircraft as an army’s weaponry but defined the word as a single pair of shoes.','The report treated the army’s artillery and aircraft as part of its weaponry.','weaponry 指成组军械，不是鞋子。'),[
    q(1,'What equipment did the report compare?','artillery, aircraft, and defensive systems','water coolers and water clocks','only the soldiers’ boots','报告比较了军队的武器和防御装备。','context'),
    q(2,'How did scouting reports help the tournament team?','they became tools against stronger opponents','they replaced all players','they diluted the opponent’s water','侦察报告成为队伍对抗强敌的手段。','context'),
    q(1,'Weaponry means?','weapons considered as a group','one harmless household object','a single report about weather','weaponry 指一组武器装备。','meaning'),
    q(2,'Figurative weaponry in a competition may include?','several strategies for gaining an advantage','only a physical firearm','a public waterworks system','比喻义 weaponry 指一组竞争手段。','meaning')
  ]);
  P('wear','Wear is Old English werian “clothe, cover, protect”; it means have clothing or an expression on, become damaged through use, endure, or a type of clothing/use.',[
    C('wear.s1','服饰','She wore a bright safety vest so the road crew could see her in the rain.','她穿了一件颜色鲜亮的安全背心，让道路施工人员在雨中也能看见她。','She wore a bright vest / so the road crew / could see her in the rain.','wear.s1 作及物动词，指穿衣、戴饰物或留某种发型。','背心穿在身上提高可见度。','clothing'),
    C('wear.s2','磨损','The rubber soles wear quickly on rough stone, so hikers replace the boots before long trips.','橡胶鞋底在粗糙石面上磨损很快，所以徒步者在长途旅行前会换鞋。','The rubber soles wear quickly / on rough stone / so hikers replace the boots.','wear.s2 不及物，指因持续使用而变薄、损坏；也可指耐用。','粗糙地面使鞋底磨损。','materials'),
    C('wear.s3','表情','He wore a worried expression while waiting for the weather report from the mountain station.','等待山站的天气报告时，他脸上带着担忧的表情。','He wore a worried expression / while waiting / for the report.','wear.s3 指脸上带着某种表情。','worried 修饰脸上的神情。','emotion'),
    C('wear.s4','衣物类别','The store sells rain wear for cyclists, including waterproof coats and reflective trousers.','这家店出售骑行雨具，包括防水外套和反光裤。','The store sells rain wear / including coats / and reflective trousers.','wear.s4 名词可表示某一类衣服。','rain wear 指雨天穿着的服装。','retail')
  ],M('The rubber soles wore quickly, so the hikers said they remained completely unworn after thousands of miles.','The rubber soles wore quickly after repeated trips over rough stone.','磨损很快与长途使用后仍全新未磨损相矛盾。'),[
    q(1,'Why did the road crew see the woman?','she wore a bright safety vest','she wore a dark, invisible coat','she had a watercourse','反光背心使她在雨中更醒目。','context'),
    q(2,'Why did hikers replace the boots?','their rubber soles wore quickly on rough stone','the soles became more durable every mile','they needed water-fowl shoes','鞋底在粗糙石面上磨损很快。','context'),
    q(3,'What did the man wear while waiting?','a worried expression','a water-proof clock','a pair of rubber soles','他脸上带着担忧神情。','meaning'),
    q(4,'What does rain wear mean in the shop description?','clothing designed for rainy conditions','the amount a boot has been used','a facial expression','rain wear 指雨天穿着的服装。','meaning')
  ]);
  P('wear away','Wear away combines wear and away; it means be gradually rubbed or dissolved until little remains, or become weaker little by little.',[
    C('wear away.s1','侵蚀','The river can wear away the bank during floods, exposing tree roots along the bend.','洪水期间河水会逐渐冲蚀河岸，使弯道旁的树根裸露出来。','The river can wear away the bank / during floods / exposing tree roots.','wear away.s1 指逐渐被摩擦或溶蚀掉。','水流一点点侵蚀河岸。','geography'),
    C('wear away.s2','信心消退','Months of unanswered complaints wore away the tenants’ trust in the management company.','数月投诉无人回应，逐渐消磨了租户对物业公司的信任。','Unanswered complaints wore away the tenants’ trust / over several months.','wear away.s2 可比喻某种感觉或力量逐渐减弱。','长期不回应使信任慢慢消失。','business')
  ],M('The river wore away the bank by depositing new soil and making the bank steadily larger.','The river wore away the bank by carrying soil downstream during floods.','搬运土壤并使河岸缩小是侵蚀，不是堆积增大。'),[
    q(1,'What exposed tree roots along the bend?','the river wore away the bank','the river deposited new soil','the waterworks painted the bank','河水冲蚀河岸后树根裸露。','context'),
    q(2,'What wore away the tenants’ trust?','months of unanswered complaints','a prompt and helpful response','a new waterside path','长期没有回应逐渐消磨了租户信任。','context'),
    q(1,'To wear away a bank is to?','gradually erode it','build it up with fresh soil','make it waterproof','wear away 指逐渐磨蚀或溶掉。','meaning'),
    q(2,'Trust that wears away?','becomes weaker little by little','grows instantly stronger','turns into a watercourse','比喻义指信任逐渐减弱。','meaning')
  ]);
  P('wearability','Wearability is formed from wearable/wear and -ability; it names how practical, comfortable, or durable clothing or a coating is in use.',
    C('wearability.s1','服装设计','The designers tested the coat’s wearability by having cyclists use it in rain over several weeks.','设计师让骑行者在数周雨天里穿这件外套，以测试它的穿用性能。','The designers tested the coat’s wearability / by having cyclists use it / in rain.','wearability 指衣服穿起来是否实用、舒适和耐用。','长期雨天试穿评估真实穿用效果。','clothing'),
    M('The coat had excellent wearability, but testers found it uncomfortable, impractical, and torn after its first use.','The coat had good wearability because it stayed comfortable and durable through repeated rainy rides.','不舒适、不实用且一次就撕破，不能说穿用性能优异。'),[
      q(1,'How did the designers test the coat’s wearability?','cyclists wore it in rain for several weeks','they measured its wattage','they left it in a water-clock','设计师让骑行者在雨天反复穿用测试。','context'),
      q(1,'Wearability concerns a garment’s?','practicality, comfort, and durability in use','color alone before it is made','ability to carry water','wearability 评估服装实穿性、舒适度和耐久性。','meaning'),
      q(1,'Which coat has better wearability?','one comfortable coat that lasts through repeated rainy rides','one coat that tears after its first use','one coat that cannot be put on','舒适且耐用的外套穿用性能更好。','context'),
      q(1,'Wearability is a noun formed from?','wearable/wear plus -ability','water plus -clock','week plus -day','wearability 表示可穿用或耐穿的性质。','word-formation')
    ]);
  P('wearer','Wearer is formed from wear and the agent suffix -er; it means the person who wears or uses the item mentioned.',
    C('wearer.s1','防护装备','The helmet’s wearer tightened the chin strap before entering the construction zone.','进入施工区前，头盔佩戴者先收紧了下巴带。','The helmet’s wearer tightened the strap / before entering / the construction zone.','wearer 指穿着或佩戴某物的人。','佩戴者在进入施工区前调整头盔。','safety'),
    M('The helmet’s wearer was the person who designed it, although the designer had never put the helmet on.','The helmet’s wearer was the worker who put it on before entering the site.','没有佩戴头盔的人不是该物品的 wearer。'),[
      q(1,'What did the helmet’s wearer tighten?','the chin strap','a waterside path','a watercourse','佩戴者收紧下巴带。','context'),
      q(1,'Who is the wearer of a jacket?','the person who has it on','the person who designed it but never wore it','the person who sold a website','wearer 指实际穿戴物品的人。','meaning'),
      q(1,'Which person is the wearer?','the worker wearing a helmet in the construction zone','the factory that produced the helmet','the designer who never tried it on','施工区里戴着头盔的工人是 wearer。','context'),
      q(1,'The suffix -er in wearer refers to?','the person doing or experiencing the action','a past-tense form','a unit of electrical power','-er 在此表示执行 wear 的人。','word-formation')
    ]);
  P('weariness','Weariness is formed from weary and -ness; it means physical tiredness or mental boredom and impatience.',[
    C('weariness.s1','身体疲劳','The crew’s weariness showed after the overnight crossing, so the captain delayed unloading until they had rested.','通宵航行后，船员显出疲倦，船长便等大家休息后再卸货。','The crew’s weariness showed / after the overnight crossing / so unloading was delayed.','weariness.s1 指身体疲倦、精力不足。','通宵工作导致船员疲劳。','work'),
    C('weariness.s1','厌烦','Her weariness with repeated delays was clear when she stopped checking the departure board.','反复延误令她十分厌烦，后来她干脆不再查看出发屏。','Her weariness with repeated delays was clear / when she stopped checking / the board.','weariness 也可指对持续事情感到厌烦。','反复延误使她失去耐心。','travel')
  ],M('The crew showed weariness after the overnight crossing, but every sailor was fully rested, alert, and eager for another sleepless shift.','The crew showed weariness after the overnight crossing and needed time to rest.','通宵航行后完全休息充分且精力充沛，不符合疲倦状态。'),[
    q(1,'Why did the captain delay unloading?','the crew was tired after an overnight crossing','the crew had slept all night and was fully rested','the waterway had turned into a website','船员通宵航行后疲倦，需要休息。','context'),
    q(1,'What made the traveler weary?','repeated departure delays','a prompt train leaving on time','a good night of sleep','反复延误使她厌烦。','context'),
    q(1,'Weariness can mean?','physical tiredness or mental boredom','great electrical power','a route into a building','weariness 指身体疲劳或精神厌烦。','meaning'),
    q(1,'Which sentence uses weariness for boredom?','Her weariness with repeated delays made her stop checking the board.','His weariness after a night shift made him need sleep.','The coat’s weariness was measured by cyclists.','对延误感到厌烦的句子使用的是精神厌烦义。','meaning')
  ]);
  P('weary','Weary is Old English wērig “tired”; it means very tired, bored or impatient after something lasts too long, and as a verb it means tire or become tired of something.',[
    C('weary.s1','劳累','The weary rescue workers sat beside the river after carrying supplies up the hill all afternoon.','整下午把物资搬上山后，疲惫的救援人员坐在河边休息。','The weary workers sat beside the river / after carrying supplies / all afternoon.','weary.s1 作形容词，指身心非常疲惫。','长时间搬运使救援人员劳累。','work'),
    C('weary.s2','厌烦','Commuters grew weary of the daily service cancellations and began arranging rides with neighbors.','通勤者对每天的班次取消感到厌烦，开始和邻居拼车。','Commuters grew weary of cancellations / and began arranging / shared rides.','weary of + 名词表示因事情持续太久而厌烦。','每天取消使乘客失去耐心。','transport'),
    C('weary.s3','使疲倦','The long inspection can weary even experienced crews when every pipe must be checked by hand.','每根管道都要手工检查时，这种漫长的检查连经验丰富的团队也会感到疲倦。','The long inspection can weary crews / when every pipe / must be checked by hand.','weary.s3 作动词，表示使某人疲倦。','重复检查使团队劳累。','work')
  ],M('The weary rescue workers had just carried supplies all afternoon, but the report said they were completely rested and full of energy.','The weary rescue workers were tired after carrying supplies all afternoon.','整下午搬运后疲惫与完全休息充分的描述相矛盾。'),[
    q(1,'Why were the rescue workers weary?','they carried supplies up the hill all afternoon','they slept through the afternoon','they listened to a webcast','长时间搬运使救援人员疲倦。','context'),
    q(2,'What did commuters grow weary of?','daily service cancellations','trains arriving on schedule','sharing rides with neighbors','每日班次取消令通勤者厌烦。','context'),
    q(3,'What can weary even experienced crews?','a long inspection requiring every pipe to be checked by hand','a short break after finishing work','a quiet waterside lunch','漫长且重复的检查会让团队疲倦。','context'),
    q(2,'To be weary of something is to be?','tired of it or impatient with it','physically soaked by it','very interested in it','weary of 指对持续的事情感到厌倦。','meaning')
  ]);
  P('weather','Weather is Old English weder, “air, sky, storm”; it names local atmospheric conditions, or as a verb means survive a storm/difficulty or be changed by exposure.',[
    C('weather.s1','预报','The weather forecast predicts rain by noon, so the outdoor webcast will move into the library.','天气预报预计中午前会下雨，因此户外网络直播将移入图书馆。','The weather forecast predicts rain / by noon / so the webcast will move indoors.','weather.s1 指某地某时的气温、雨、风和日照。','天气状况决定直播场地。','forecast'),
    C('weather.s2','渡过困难','The small business weathered the supply shortage by repairing old equipment and sharing deliveries with a neighbor.','这家小企业通过维修旧设备并与邻居共享配送，挺过了供应短缺。','The business weathered the shortage / by repairing equipment / and sharing deliveries.','weather.s2 作动词，指安全渡过风暴或困难时期。','企业采取办法渡过供应危机。','business'),
    C('weather.s3','风化','Exposed wooden shingles weathered to a gray color after years of sun, rain, and wind.','木瓦经多年日晒、雨淋和风吹后风化成灰色。','The shingles weathered to gray / after years of sun / rain, and wind.','weather.s3 作动词，指材料因日晒雨淋而变色或变形。','长期暴露造成木瓦颜色变化。','materials')
  ],M('The shop weathered the supply shortage by closing permanently before it could continue operating.','The shop weathered the supply shortage by repairing equipment and sharing deliveries until supplies returned.','永久停业是未能渡过困难，而不是安全渡过。'),[
    q(1,'What did the forecast predict?','rain by noon','a dry winter with no clouds','a rise in the watershed','天气预报说中午前会下雨。','context'),
    q(2,'How did the small business weather the shortage?','repaired equipment and shared deliveries','stopped operating permanently','added water to its products','企业维修设备并共享配送，渡过供应短缺。','context'),
    q(3,'What changed the wooden shingles’ color?','years of exposure to sun, rain, and wind','a new webcast','a water cooler','日晒雨淋风吹使木瓦风化变灰。','context'),
    q(2,'To weather a difficult period is to?','survive or come safely through it','make it more severe','predict the temperature','动词 weather 可表示安全渡过困难。','meaning')
  ]);
  P('weathering','Weathering is formed from weather and -ing; it names the natural breakdown of rock/material by rain, frost, heat, and wind, or the worn appearance this leaves.',[
    C('weathering.s1','地质','The cliff’s weathering created shallow grooves where rainwater had repeatedly run over the sandstone.','悬崖上的风化形成了浅沟，雨水曾一再沿砂岩表面流过。','Weathering created grooves / where rainwater / ran over the sandstone.','weathering 指岩石受雨、霜、冷热与风影响而逐渐碎裂。','雨水长期冲刷造成岩面沟槽。','geology'),
    C('weathering.s1','建筑材料','The survey photographed the weathering on the wooden gate, including its faded paint and roughened surface.','测绘人员拍下木门上的风化旧貌，包括褪色的油漆和粗糙表面。','The survey photographed weathering on the gate / including faded paint / and a rough surface.','weathering 也可指材料长期暴露后的磨损外观。','褪色和粗糙是长期暴露留下的痕迹。','construction')
  ],M('The sandstone showed weathering because it was newly polished, smooth, and completely unchanged by rain or frost.','The sandstone showed weathering in grooves carved by years of rain and frost.','未经侵蚀且表面完全未变的岩石不呈现风化痕迹。'),[
    q(1,'What created grooves in the cliff?','repeated rainwater running over sandstone','a fresh coat of polish','a water-powered mill','雨水长期冲刷砂岩形成沟槽。','context'),
    q(1,'What did the survey photograph on the gate?','faded paint and a roughened surface','a new glossy finish','a virtual world','褪色和粗糙表面是风化旧貌。','context'),
    q(1,'Weathering is the natural breakdown caused by?','rain, frost, heat, and wind','a web page and a webcast','only gentle indoor use','weathering 指自然环境造成的岩石或材料分解。','meaning'),
    q(1,'Weathering on a wooden gate may look like?','faded paint and a rough surface','fresh paint with no exposure marks','a waterway cut through stone','长期暴露可使木门褪色、变粗糙。','meaning')
  ]);
  P('weave','Weave is Old English wefan “interlace threads”; it means make fabric, combine details into a whole, move with turns, or the pattern of threads in cloth.',[
    C('weave.s1','纺织','The artisan wove a narrow blue border into the blanket using a wooden handloom.','手艺人用木织机把一条窄蓝边织进毯子。','The artisan wove a blue border / into the blanket / on a handloom.','weave.s1 的过去式是 wove，表示交错纱线织物。','织机使经纬线交错。','craft'),
    C('weave.s2','叙事','The historian wove diary entries and official letters into a single account of the flood.','历史学家把日记摘录和官方信件编织成一篇关于洪水的完整叙述。','The historian wove diary entries and letters / into a single account / of the flood.','weave.s2 指把细节组织成一个整体；wove 为过去式。','不同来源被组合成叙述。','writing'),
    C('weave.s3','穿行','The cyclist wove carefully through the crowded market, slowing near pedestrians and food carts.','骑行者小心地穿过拥挤的市场，在行人和餐车旁减速。','The cyclist wove through the market / slowing near pedestrians / and carts.','weave.s3 指不断转向地穿行；不规则过去式为 wove。','骑行路线在人群和摊车间迂回。','travel'),
    C('weave.s4','织物结构','The close weave of the canvas kept dust out of the equipment bag.','帆布紧密的织法阻止灰尘进入器材包。','The close weave of the canvas / kept dust / out of the bag.','weave.s4 作名词，指织物中经纬线的排列方式。','紧密织法挡住灰尘。','textiles')
  ],M('The artisan wove the blanket by laying every thread parallel without crossing any threads over or under another.','The artisan wove the blanket by interlacing the threads over and under one another.','织造需要交错穿线，而不是所有线平行放置。'),[
    q(1,'What did the artisan weave into the blanket?','a narrow blue border','a diary entry','a watercourse','手艺人把蓝色窄边织入毯子。','context'),
    q(2,'What did the historian weave into one account?','diary entries and official letters','threads of blue yarn','a cyclist through the market','历史学家把日记和信件编成叙述。','context'),
    q(3,'How did the cyclist move through the market?','turned and changed direction among people and carts','rode in a perfectly straight line through empty land','stopped to weave a blanket','骑行者在人群和餐车之间迂回穿行。','context'),
    q(4,'The weave of a fabric is?','the arrangement of its interlaced threads','the story printed on its label','the person wearing it','织法指织物中纱线的排列方式。','meaning')
  ]);
  P('weaver','Weaver is formed from weave and the agent suffix -er; it names a person who makes cloth, and can also name a bird that weaves a hanging nest.',[
    C('weaver.s1','手工艺','The weaver checked the tension on the loom before beginning a patterned wool scarf.','织工开始织有图案的羊毛围巾前，先检查织机上的张力。','The weaver checked the loom / before beginning / a wool scarf.','weaver.s1 指以织造为工作的人。','织工在织物制作前调试织机。','craft'),
    C('weaver.s1','鸟类','A weaver built a hanging nest from grass strips under the bridge, close to the river reeds.','一只织布鸟在桥下用草条编了一个悬巢，巢靠近河边的芦苇。','A weaver built a hanging nest / from grass strips / under the bridge.','weaver 也可指编织悬巢的鸟。','鸟用草条编制悬挂的巢。','wildlife')
  ],M('The weaver built a hanging nest from grass, but the field guide identified it as a person working at a loom and not a bird.','The bird weaver built a hanging nest from grass strips beneath the bridge.','用草编巢的动物义 weaver 指鸟，而不是织工。'),[
    q(1,'What did the human weaver check?','the loom’s tension','the bridge’s wavelength','the water cooler’s temperature','织工先检查织机张力。','context'),
    q(1,'What did the bird weaver build?','a hanging nest from grass','a wool scarf on a loom','a waterway','织布鸟用草条搭建悬巢。','context'),
    q(1,'A weaver may be?','a person who makes cloth','only a person who wears clothes','a water-powered machine','weaver 指织布者。','meaning'),
    q(1,'A bird called a weaver is known for?','building a woven hanging nest','measuring watts','living only in a water-clock','织布鸟以编织悬挂鸟巢闻名。','context')
  ]);
  P('weaverbird','Weaverbird combines weaver and bird; it names a songbird, especially in Africa and Asia, known for weaving elaborate nests.',
    C('weaverbird.s1','鸟类','The weaverbird stitched grass blades into a hanging nest at the end of a thin branch.','织布鸟把草叶编成巢，悬挂在一根细枝末端。','The weaverbird stitched grass / into a hanging nest / at the branch’s end.','weaverbird 指以编织复杂巢著称的鸣禽。','鸟将草叶编织成悬巢。','wildlife'),
    M('The guide identified the weaverbird by its elaborate nest, although the bird had no nest and built nothing from grass.','The guide identified the weaverbird by the hanging grass nest it had woven.','编织悬巢是识别织布鸟的重要特征。'),[
      q(1,'What did the weaverbird use to build its nest?','grass blades','a water-proof coating','web pages','鸟用草叶编织鸟巢。','context'),
      q(1,'Where was its nest?','at the end of a thin branch','inside a waterworks pipe','under a boat','鸟巢悬挂在细枝末端。','context'),
      q(1,'A weaverbird is a songbird known for?','weaving elaborate nests','carrying a water-skiier','changing the weather','织布鸟以编织复杂鸟巢闻名。','meaning'),
      q(1,'Which habitat detail fits a weaverbird nest?','a woven grass nest hanging from a branch','a stone channel carrying irrigation water','a wax coating on a leaf','悬挂在树枝上的草编巢符合织布鸟特征。','context')
    ]);
  P('web','Web is Old English webb “woven fabric,” from wefan “weave”; it names a spider’s net, the connected pages of the internet, a complex network, or covering/trapping as if with a net.',[
    C('web.s1','自然','A spider’s web stretched between two reeds and held several tiny insects after the rain.','一张蜘蛛网横在两根芦苇之间，雨后粘住了几只小昆虫。','A spider’s web stretched between reeds / and held insects / after the rain.','web.s1 指蜘蛛用细黏丝编成的网。','蛛网捕住昆虫。','nature'),
    C('web.s2','互联网','The museum’s web includes separate pages for its collections, opening hours, and research archive.','博物馆的网站由藏品、开放时间和研究档案等独立页面组成。','The museum’s web includes separate pages / for collections / and the archive.','web.s2 指互联网上相互连接的网页系统。','多个页面构成网络系统。','technology'),
    C('web.s3','复杂关系','Investigators uncovered a web of payments linking the contractor to several shell companies.','调查人员揭露了一系列付款关系，将承包商与数家空壳公司联系起来。','Investigators uncovered a web of payments / linking the contractor / to several companies.','web.s3 比喻彼此紧密相连的复杂关系。','多笔资金往来构成复杂网络。','investigation'),
    C('web.s4','覆盖或困住','The vines webbed the broken fence so completely that the gate could no longer swing open.','藤蔓像网一样缠住了破栅栏，大门再也无法打开。','The vines webbed the fence / so completely / that the gate could not swing.','web.s4 作动词，表示像网一样覆盖或困住。','藤蔓缠绕栅栏阻碍大门。','garden')
  ],M('The spider’s web trapped insects, but the note said it was a solid sheet with no threads and could catch nothing.','The spider’s web caught insects on its fine sticky threads.','没有细丝且不能捕捉东西的实心板不是蜘蛛网。'),[
    q(1,'What did the spider’s web hold?','tiny insects','a contractor’s payments','a museum’s opening hours','蛛网粘住了小昆虫。','context'),
    q(2,'What pages were part of the museum’s web?','collections, hours, and research archive pages','only one printed map','the waterworks and watershed','博物馆网站有多个不同主题页面。','context'),
    q(3,'What did investigators uncover?','a complex network of payments','a simple spider’s thread only','a new watercourse','web 可比喻复杂联系网络。','meaning'),
    q(4,'What happened when vines webbed the fence?','they covered and trapped it so the gate could not swing','they removed every vine and opened the gate','they made a webpage','动词 web 表示像网一样覆盖或困住。','meaning')
  ]);
  P('webcast','Webcast combines web and broadcast; it names an audio or video program sent out live or recorded over the internet, or the act of transmitting it.',[
    C('webcast.s1','线上活动','The university webcast the public lecture so alumni abroad could watch the recording later.','大学把公开讲座通过网络播出，让海外校友之后也能观看录像。','The university webcast the lecture / so alumni abroad / could watch later.','webcast.s1 可作动词，表示通过互联网发送节目；过去式 webcast。','讲座网络播出供海外校友观看。','education'),
    C('webcast.s1','媒体节目','The evening webcast included a live interview with the weather team before the storm briefing.','晚间网络节目在风暴简报前安排了一场天气团队的直播访谈。','The evening webcast included a live interview / before the briefing.','webcast 也作名词，指通过互联网播出的音频或视频节目。','节目包含实时访谈。','media')
  ],M('The university webcast the lecture by keeping the camera off and sending no audio or pictures over the internet.','The university webcast the lecture by streaming its video and audio online.','没有图像或声音在线传输就没有网络播出。'),[
    q(1,'Why did the university webcast the lecture?','so alumni abroad could watch it later','so the lecture could stay inside the room only','to measure a wavelength','网络播出让海外校友能够观看讲座。','context'),
    q(1,'What did the evening webcast include?','a live interview with the weather team','a water-skiing race only on paper','a spiderweb','晚间节目包含天气团队直播访谈。','context'),
    q(1,'A webcast is?','an audio or video program sent over the internet','a printed page in a book','a water channel for boats','webcast 指通过互联网播出的节目。','meaning'),
    q(1,'To webcast a lecture is to?','send it out over the internet','weave it into a blanket','dilute its sound with water','webcast 作动词意为网络播出。','meaning')
  ]);
  P('webpage','Webpage combines web and page; it is one separate document or page within a larger website.',
    C('webpage.s1','网站内容','The webpage lists the museum’s current hours, ticket prices, and accessibility information.','该网页列出博物馆当前开放时间、票价和无障碍信息。','The webpage lists opening hours / ticket prices / and accessibility information.','webpage 指构成网站的单独页面。','这是网站中的一页，提供实用信息。','technology'),
    M('The museum called its webpage the entire website, even though it was only one of several connected pages under the same address.','The museum’s webpage was one page within its larger website.','网站中的单页不等于包含全部内容的整个网站。'),[
      q(1,'What information did the webpage list?','hours, prices, and accessibility details','the weathering of the museum walls only','a water-skiing route','网页列出开放时间、票价和无障碍信息。','context'),
      q(1,'A webpage is?','one separate page within a website','a whole group of sites under different addresses','a paper page with no online version','webpage 指网站中的一个单独页面。','meaning'),
      q(1,'Which is a webpage?','the museum’s online page listing ticket prices','the entire internet','the building where tickets are sold','列票价的线上页面是 webpage。','context'),
      q(1,'How can several webpages relate to one another?','they can be connected as parts of the same website','they must each have a different owner','they can only exist on paper','多个网页可以组成同一网站。','meaning')
    ]);
  P('website','Website combines web and site; it is a connected group of internet pages under one address and owner, or an online place for a subject’s information.',[
    C('website.s1','线上门户','The city website links to separate pages for permits, transit schedules, and public water reports.','市政府网站链接到许可证、交通时刻表和公共供水报告等独立页面。','The city website links to pages / for permits / transit, and water reports.','website.s1 指同一地址下相互连接的一组网页。','多个页面由同一门户连接。','government'),
    C('website.s2','信息来源','The researcher used the museum’s website as the online source for its archive catalog and opening hours.','研究人员通过博物馆网站查阅档案目录和开放时间。','The researcher used the website / as an online source / for the catalog and hours.','website.s2 指发布特定主题信息的网上地点。','博物馆网站提供档案及访问信息。','research')
  ],M('The city website contained only one disconnected page under several unrelated owners, with no shared address.','The city website connected its service pages under one address and public owner.','没有关联、且地址和所有者各异的单页不构成同一网站。'),[
    q(1,'What pages did the city website link to?','permits, transit schedules, and water reports','only a spider’s web','a single paper map','市政府网站连接多种公共服务页面。','context'),
    q(2,'What did the researcher find on the museum’s website?','the archive catalog and opening hours','the researcher’s private diary only','a river’s wavelength','博物馆网站提供档案目录和开放时间。','context'),
    q(1,'A website is usually?','a connected group of pages under one address and owner','one printed sheet with no links','a network of sticky spider threads','website 指一组相互连接的网络页面。','meaning'),
    q(2,'A museum website can be?','an online place publishing the museum’s information','a physical gallery with no online information','a watercourse near the museum','website 也可指发布某主题信息的网络地点。','meaning')
  ]);
  /* A166 checkpoint 4: manifest items 61–80, wed–weighing machine */
  P('wed','Wed is Old English weddian “pledge, promise”; it means marry, or join two elements firmly, including joining someone to an idea.',[
    C('wed.s1','婚姻','The couple will wed at the courthouse on Friday and celebrate with their families afterward.','这对伴侣周五将在法院登记结婚，之后与家人一起庆祝。','The couple will wed / at the courthouse / on Friday.','wed.s1 作动词，指与某人结婚；will 后接原形。','两人举行结婚仪式。','family'),
    C('wed.s2','创作结合','The documentary weds archival film with new interviews to show how the harbor changed.','这部纪录片把档案影像与新访谈结合起来，展现港口的变化。','The documentary weds archival film / with new interviews / to tell the harbor’s story.','wed.s2 指把两种事物结合，wed 是不规则过去式/第三人称形式。','影片将旧影像和新访谈融合。','media')
  ],M('The documentary wedded archival film with new interviews by keeping the two sources completely separate and never combining them.','The documentary wedded archival film with new interviews to create one account of the harbor.','将材料完全分开而不结合，与 wed 的比喻义相反。'),[
    q(1,'Where will the couple wed?','at the courthouse','at a watercourse','on a webcast only','他们将在法院结婚。','context'),
    q(2,'What did the documentary wed together?','archival film and new interviews','a water-clock and a watershed','a marriage ceremony and a weekday','纪录片将档案影像和新访谈结合。','context'),
    q(1,'To wed someone is to?','marry that person','measure their weight','remove weeds from a garden','wed 的常见动词义是与某人结婚。','meaning'),
    q(2,'To wed two ideas is to?','combine them closely','keep them entirely separate','weigh them on a machine','wed 也可表示把两个要素结合起来。','meaning')
  ]);
  P('wedding','Wedding is formed from wed and -ing; it names the ceremony and celebration of a marriage, or a close joining of two elements.',[
    C('wedding.s1','婚礼','The wedding began at noon, and the guests moved to the garden for the reception after the ceremony.','婚礼中午开始，仪式结束后宾客移步花园参加招待会。','The wedding began at noon / and guests moved / to the garden afterward.','wedding.s1 指两人结婚的仪式及庆祝活动。','仪式与后续庆祝构成婚礼。','family'),
    C('wedding.s2','融合','The chef’s menu was a wedding of local seafood and spices brought by sailors from overseas.','厨师的菜单将本地海鲜与水手从海外带来的香料巧妙结合。','The menu was a wedding of local seafood / and overseas spices.','wedding.s2 比喻两种事物紧密结合。','菜品融合本地与外来食材。','food')
  ],M('The ceremony was called a wedding, but the couple did not marry and the event celebrated no joining of the two people.','The ceremony was their wedding, where the couple married and celebrated with guests.','没有结婚或结合的庆典不符合婚礼义。'),[
    q(1,'When did the wedding begin?','at noon','on Wednesday at midnight','after the guests left the garden','婚礼中午开始。','context'),
    q(2,'What did the chef’s menu combine?','local seafood and overseas spices','two unrelated waterworks','a weaverbird and a weekday','比喻义 wedding 指菜品元素的巧妙结合。','context'),
    q(1,'A wedding is a ceremony where?','two people get married','two people weigh a machine','a river divides a watershed','wedding 指结婚仪式与庆祝。','meaning'),
    q(2,'A “wedding of flavors” means?','a close combination of different flavors','a marriage ceremony held in a kitchen','a list of ingredients kept apart','该比喻指不同风味紧密融合。','meaning')
  ]);
  P('wedge','Wedge is Old English wecg, a tool thick at one end and thin at the other; it also names triangular pieces, forcing something into a gap, or creating division.',[
    C('wedge.s1','工具','The carpenter tapped a wooden wedge into the split to keep the door frame from shifting.','木匠把木楔轻轻敲进裂缝，防止门框移位。','The carpenter tapped a wooden wedge / into the split / to hold the frame.','wedge.s1 指一端厚一端薄、可撑开或固定物体的工具。','木楔卡进缝隙稳定门框。','craft'),
    C('wedge.s2','食物','She shared a wedge of lemon with each guest so they could squeeze it over the fish.','她给每位客人分了一角柠檬，让大家挤汁淋在鱼上。','She shared a wedge of lemon / with each guest / for the fish.','wedge.s2 指呈楔形或三角形的一块食物。','柠檬被切成楔形。','food'),
    C('wedge.s3','塞入','He wedged the suitcase into the narrow compartment above the train seat.','他把行李箱硬塞进火车座位上方狭窄的行李格。','He wedged the suitcase / into the narrow compartment / above the seat.','wedge.s3 作及物动词，表示把东西用力塞进窄处。','行李箱被挤入狭小空间。','travel'),
    C('wedge.s4','制造分裂','The rumor drove a wedge between the neighbors, who had shared the garden for years.','谣言在邻居之间制造了隔阂，他们此前多年共同照料花园。','The rumor drove a wedge between the neighbors / who had shared the garden.','drive a wedge between 是使原本团结的人产生分歧。','谣言破坏邻里关系。','community')
  ],M('The carpenter used a wedge to hold the frame, but the tool was a thin uniform strip that could not enter or support the split.','The carpenter tapped the thick-to-thin wedge into the split to stabilize the frame.','不能进入缝隙或撑住结构的薄片不具楔子的作用。'),[
    q(1,'Why did the carpenter tap in the wedge?','to keep the door frame from shifting','to flavor the fish','to create a webpage','木楔撑住裂缝，防止门框移位。','context'),
    q(2,'What did each guest receive?','a triangular piece of lemon','a wooden door frame','a suitcase','wedge 可指一角柠檬等楔形食物。','context'),
    q(3,'Where did the traveler put the suitcase?','into a narrow compartment above the seat','under a wide open platform','inside a water-clock','他把行李箱用力塞进行李格。','context'),
    q(4,'To drive a wedge between people is to?','cause disagreement between them','help them become closer','measure the distance between them','该习语指在人际关系中制造分歧。','meaning')
  ]);
  P('wedge-shaped','Wedge-shaped combines wedge and shaped; it describes something tapering from a thick end to a thin end like a wedge.',
    C('wedge-shaped.s1','几何外形','The wedge-shaped stone fit tightly into the gap beneath the garden gate.','这块楔形石头紧紧卡进花园门下的缝隙。','The wedge-shaped stone fit / into the gap / beneath the gate.','wedge-shaped 作形容词，描述一端厚、一端薄的形状。','石块形状使它能卡进缝隙。','construction'),
    M('The label called the stone wedge-shaped, although it was a perfect sphere with equal thickness on every side.','The label called the stone wedge-shaped because it tapered from a thick end to a thin one.','球体各处同样厚，没有楔形的渐窄轮廓。'),[
      q(1,'Where did the wedge-shaped stone fit?','in the gap beneath the garden gate','in a water cooler','on a flat webpage','楔形石头卡进门下缝隙。','context'),
      q(1,'A wedge-shaped object tapers?','from a thicker end toward a thinner end','equally in every direction like a sphere','only in its color','wedge-shaped 指一端厚一端薄。','meaning'),
      q(1,'Which object is wedge-shaped?','a piece thick at one end and narrow at the other','a perfect sphere','a flat square plate of equal thickness','一端厚一端薄的物件呈楔形。','context'),
      q(1,'Why could the stone fit the narrow gap?','its shape narrowed toward one end','it was spherical','it was made of water','逐渐变窄的形状帮助石块卡入缝隙。','context')
    ]);
  P('Wednesday','Wednesday is Old English Wōdnesdæg, “Woden’s day,” named for the Germanic god Woden, identified with Norse Odin.',
    C('Wednesday.s1','日程','The clinic is closed on Wednesday, so patients should collect prescriptions before Tuesday evening.','诊所星期三休息，因此病人应在周二晚上之前取药。','The clinic is closed on Wednesday / so patients should collect prescriptions / before Tuesday evening.','Wednesday 是专有日期名词，首字母大写。','周三休诊，需提前取药。','schedule'),
    M('The clinic is closed on Wednesday, which the notice identifies as the day after Thursday and before Friday.','The clinic is closed on Wednesday, the day after Tuesday and before Thursday.','notice 把 Wednesday 的周序说错了。','meaning'),[
      q(1,'When is the clinic closed?','Wednesday','Saturday and Sunday','every weekday','诊所星期三休息。','context'),
      q(1,'What should patients collect before Tuesday evening?','their prescriptions','a wedge-shaped stone','the clinic’s waterworks','患者要提前取处方药。','context'),
      q(1,'Wednesday falls between which days?','Tuesday and Thursday','Monday and Tuesday','Thursday and Friday','Wednesday 是星期二之后、星期四之前。','meaning'),
      q(1,'Which spelling is correct for the day?','Wednesday','Wendsday','Wenesday','星期三标准拼写为 Wednesday。','spelling')
    ]);
  P('wee','Wee is a Scottish and Northern English informal adjective meaning “very small”; its deeper word history is uncertain, so no unsupported root is proposed.',
    [C('wee.s1','口语描述','They rented a wee cottage beside the river, just large enough for two people and a small stove.','他们在河边租了一间小小的 cottage，刚好住两个人并放得下一只小炉子。','They rented a wee cottage / beside the river / just large enough for two.','wee.s1 是口语形容词，表示非常小。','有限的空间说明 cottage 很小。','informal'),
    C('wee.s1','英式口语','Before the long coach ride, he asked to have a wee at the service station.','长途巴士行程前，他在服务区提出要去小便。','He asked to have a wee / at the service station / before the coach ride.','wee 在英式口语中也可作名词，指小便。','乘车前他提出去洗手间。','informal')],
    M('They rented a wee cottage that held two hundred guests, six halls, and an indoor stadium.','They rented a wee cottage just large enough for two people.','能容纳数百人和大型设施的建筑不符合 wee 所表达的“小”。'),[
      q(1,'How large was the cottage?','just large enough for two people','large enough for two hundred guests','as big as a stadium','小屋只够两个人住，说明它很小。','context'),
      q(1,'Wee is an informal word meaning?','very small','extremely wealthy','waterproof','wee 指非常小。','meaning'),
      q(1,'Which phrase sounds natural in informal British speech?','a wee cottage','a wee industrial complex for thousands','a wee weeknight','wee 可口语修饰小屋等小物件。','collocation'),
      q(1,'What does wee mean as a British informal noun?','an act of urinating','a person who weaves cloth','a seven-day period','wee 也可作英式口语名词，指小便。','meaning')
    ]);
  P('weed','Weed is Old English wēod “grass, herb”; it means an unwanted wild plant, removing such plants, or figuratively removing unwanted items from a group.',[
    C('weed.s1','园艺','A weed grew between the tomato plants and competed with them for water and sunlight.','一株杂草长在番茄植株之间，与它们争夺水分和阳光。','A weed grew between the tomato plants / competing for water / and sunlight.','weed.s1 指长在不希望其生长处的野生植物。','杂草影响作物生长。','gardening'),
    C('weed.s2','除草','The gardeners weeded the path by hand before laying new gravel between the stones.','园丁们在石缝间铺新砾石前，先用手给小路除草。','The gardeners weeded the path / by hand / before laying gravel.','weed.s2 作及物动词，过去式 weeded。','他们清除小路上的杂草。','gardening'),
    C('weed.s3','筛除','The editor weeded duplicate entries from the database before publishing the catalog.','编辑在发布目录前，从数据库中筛除了重复条目。','The editor weeded duplicate entries / from the database / before publication.','weed.s3 比喻从群体中去掉不需要的人或事物。','重复记录被清除。','editing')
  ],M('The gardener weeded the path by planting more unwanted wild plants between the stones.','The gardener weeded the path by removing unwanted plants between the stones.','种下更多杂草与清除杂草相反。'),[
    q(1,'What competed with the tomato plants?','an unwanted weed','a watercourse','a weaverbird','杂草与番茄争夺阳光和水分。','context'),
    q(2,'How did the gardeners weed the path?','removed unwanted plants by hand','planted more unwanted plants','watered every stone','园丁手工清除小路上的杂草。','context'),
    q(3,'What did the editor remove from the database?','duplicate entries','the entire website','a river watershed','编辑筛除了重复记录。','context'),
    q(1,'A weed is usually?','a wild plant growing where people do not want it','a cultivated crop planted in rows','a garden tool for digging','weed 名词指不受欢迎地生长的野草。','meaning')
  ]);
  P('weedy','Weedy is formed from weed and -y; it means overgrown with weeds, or, of a person or plant, thin and lacking strength.',[
    C('weedy.s1','花园','The neglected border looked weedy after a wet spring, so the gardener cleared it before planting bulbs.','潮湿的春季过后，疏于照料的花坛边长满杂草，园丁先清理再种球根。','The border looked weedy / after a wet spring / so the gardener cleared it.','weedy.s1 可指杂草丛生。','花坛边长满不需要的植物。','gardening'),
    C('weedy.s1','体格','The weedy sapling bent in the wind because its stem was thin and had not yet developed strong roots.','这棵瘦弱的小树苗被风吹弯，因为它的茎很细，根系也尚未长壮。','The weedy sapling bent / because its stem was thin / and roots were weak.','weedy 也可指植物或人瘦长无力。','细茎和弱根使幼树不强壮。','botany')
  ],M('The garden border was weedy, but it contained no unwanted plants and was perfectly clear.','The garden border was weedy because unwanted plants had spread through it.','没有杂草的干净花坛不叫 weedy。'),[
    q(1,'Why did the gardener clear the border?','it had become overgrown with weeds','it was completely free of plants','the bulbs had already bloomed','花坛边长满杂草后需要清理。','context'),
    q(1,'Why did the sapling bend in the wind?','it had a thin stem and weak roots','it had a thick trunk and deep roots','it was a waterborne plant','小树苗瘦弱、根系不强。','context'),
    q(1,'A weedy garden is?','overgrown with unwanted plants','carefully weeded and clear','full of healthy flowers only','weedy 指杂草丛生。','meaning'),
    q(1,'A weedy person or plant may be?','thin and lacking strength','broad and exceptionally strong','covered in waterproof material','weedy 也可形容瘦長無力。','meaning')
  ]);
  P('week','Week is Old English wice, from Proto-Germanic *wikōn; it means a seven-day period or the days and hours when someone works.',[
    C('week.s1','时间段','The repair team expects to finish the waterworks inspection within a week of receiving the new valves.','维修团队预计在收到新阀门后一周内完成供水设施检查。','The team expects to finish within a week / of receiving / the new valves.','week.s1 通常指七天的一段时间。','从收到阀门起算七天。','schedule'),
    C('week.s2','工作安排','She works a four-day week and spends Fridays caring for her father.','她每周工作四天，周五照料父亲。','She works a four-day week / and spends Fridays / caring for her father.','week.s2 指一周里某人的工作日和工作时数。','四天是她固定的工作周。','work'),
    C('week.s3','连续七天','The package should arrive one week after dispatch, even if the seven days do not begin on Monday.','包裹应在发出后一周送达，即使这七天并非从星期一开始。','The package should arrive one week after dispatch / regardless of the starting day.','week.s3 可指任意连续七天，不必从星期一开始。','起点由发货日决定。','delivery')
  ],M('She works a four-day week, but the schedule lists five workdays every week.','She works a four-day week, with Friday reserved for caregiving.','四天工作周与五个固定工作日不符。'),[
    q(1,'How long is the repair team’s expected period?','within seven days','within one weekday','for a whole year','预计一周内完成检查。','context'),
    q(2,'How many days does she work each week?','four','five','seven','她每周工作四天。','context'),
    q(3,'Does a one-week delivery period always start on Monday?','no, it can be any consecutive seven days','yes, it always begins on Monday','no, a week must be one workday','week.s3 可从任意一天开始连续计算七天。','meaning'),
    q(1,'A week is usually a period of?','seven days','four hours','one month','week 通常指七天。','meaning')
  ]);
  P('weekday','Weekday combines week and day; it means a day other than Saturday or Sunday, especially an ordinary day when schools and offices are open.',[
    C('weekday.s1','日历','The museum is open every weekday but closes on Saturday and Sunday.','博物馆每个工作日开放，星期六和星期日则关闭。','The museum is open every weekday / but closes / on Saturday and Sunday.','weekday.s1 指星期一至星期五之一，不包括周末。','周末两天关闭说明其余工作日营业。','schedule'),
    C('weekday.s2','日常生活','On an ordinary weekday, the clinic sees most patients before the evening rush.','在普通工作日，诊所大多在晚间高峰前接诊。','On an ordinary weekday / the clinic sees patients / before the evening rush.','weekday.s2 强调学校、办公室通常开放的普通日子。','诊所在工作日正常接诊。','health')
  ],M('The museum called Saturday a weekday even though its notice said it was closed every Saturday and Sunday.','The museum called Monday a weekday and closed on Saturday and Sunday.','星期六属于周末，不是普通工作日。'),[
    q(1,'When is the museum open?','on weekdays, Monday through Friday','only on Saturday and Sunday','only on Wednesday evening','博物馆工作日开放，周末关闭。','context'),
    q(2,'When does the clinic see most patients?','on an ordinary working day before the evening rush','only on public holidays','during a weaverbird migration','诊所在普通工作日接诊。','context'),
    q(1,'A weekday is usually?','a day other than Saturday or Sunday','Saturday or Sunday only','any seven-day period','weekday 通常指周一至周五。','meaning'),
    q(2,'Why might weekday hours differ from weekend hours?','schools and offices are usually open on weekdays','weekdays are always holidays','weekdays contain no evenings','工作日是学校和办公室通常开放的日子。','meaning')
  ]);
  P('weekend','Weekend combines week and end; it names Saturday and Sunday for many people, the period or trip occupying those days, or the act of spending them somewhere.',[
    C('weekend.s1','休假','The office closes for the weekend at six on Friday and reopens Monday morning.','办公室周五六点起周末休息，周一早晨重新开放。','The office closes for the weekend / on Friday / and reopens Monday.','weekend.s1 通常指星期六和星期日。','关门时段跨越周末。','work'),
    C('weekend.s2','短途旅行','They planned a weekend in the mountains, leaving after work Friday and returning Sunday night.','他们计划在山里度过一个周末，周五下班后出发，周日晚上返回。','They planned a weekend in the mountains / leaving Friday / and returning Sunday.','weekend.s2 指占据周末的时间或短途旅行。','行程覆盖周六和周日。','travel'),
    C('weekend.s3','动词用法','We weekend at the lake whenever the cabin is free and the forecast is clear.','只要小屋有空、天气预报晴朗，我们就会去湖边过周末。','We weekend at the lake / whenever the cabin is free.','weekend.s3 作动词，常接地点，表示在那里度过周末。','湖边是他们过周末的地点。','travel')
  ],M('They weekended at the mountain cabin from Monday through Thursday, although the entry said they spent the weekend there.','They weekended at the cabin from Friday evening through Sunday.','周一至周四不属于通常意义上的周末。'),[
    q(1,'When does the office close for the weekend?','at six on Friday','on Monday morning','at noon on Wednesday','办公室周五六点开始周末休息。','context'),
    q(2,'How long was the mountain trip?','from Friday after work until Sunday night','from Monday through Thursday','one hour on Wednesday','旅行覆盖星期六、星期日。','context'),
    q(3,'What does “we weekend at the lake” mean?','we spend the weekend there','we work every weekday there','we weigh the lake water','weekend 作动词表示在某地度过周末。','meaning'),
    q(1,'For many people, the weekend consists of?','Saturday and Sunday','Monday and Tuesday','all seven days','weekend 通常指星期六和星期日。','meaning')
  ]);
  P('weekly','Weekly is formed from week and -ly; it means happening once a week, can modify a verb as an adverb, or names a publication issued each week.',[
    C('weekly.s1','频率','The water-quality team holds a weekly meeting every Thursday to review the latest samples.','水质团队每周四开一次例会，审查最新样本。','The team holds a weekly meeting / every Thursday / to review samples.','weekly.s1 作形容词，表示每周发生一次。','固定每周四开会。','work'),
    C('weekly.s2','频率副词','The nurse checks the patient’s wound weekly until it has fully healed.','伤口完全愈合前，护士每周检查一次。','The nurse checks the wound weekly / until it has healed.','weekly.s2 作副词，表示每周一次地。','检查频率为每周一次。','health'),
    C('weekly.s3','出版物','The town’s weekly publishes local council decisions and school notices each Wednesday.','镇上的周刊每星期三刊登地方议会决议和学校通知。','The town’s weekly publishes notices / each Wednesday.','weekly.s3 作名词，指每周出版的报纸或杂志。','该出版物每周发行。','media')
  ],M('The nurse checked the wound weekly by examining it every hour without any weekly interval.','The nurse checked the wound weekly, returning once every seven days.','每小时检查不是每周一次。'),[
    q(1,'When does the team hold its weekly meeting?','every Thursday','once each decade','only on weekends','团队每周四开会。','context'),
    q(2,'How often does the nurse check the wound?','once a week','every hour','once a year','weekly 作副词指每周一次。','context'),
    q(3,'What does the town’s weekly publish?','council decisions and school notices','only one issue every year','a water-clock','weekly 名词指每周出版物。','context'),
    q(1,'A weekly event happens?','once each week','once each day','once each century','weekly 表示每周一次。','meaning')
  ]);
  P('weeknight','Weeknight combines week and night; it is an evening of an ordinary weekday, as opposed to an evening at the weekend.',
    C('weeknight.s1','作息','On a weeknight, the family eats dinner early so the children can finish homework before bed.','工作日晚上，家人会早点吃晚饭，让孩子们睡前完成作业。','On a weeknight / the family eats early / so the children can finish homework.','weeknight 指星期一至星期五的普通夜晚。','作业和早睡是工作日晚间安排。','family'),
    M('They called Saturday evening a weeknight even though it was the middle of the weekend.','They called Wednesday evening a weeknight because it was an ordinary weekday night.','星期六晚上属于周末，不是工作日晚上。'),[
      q(1,'Why does the family eat early on a weeknight?','so the children can finish homework before bed','so they can sleep through a weekend trip','to weigh a machine','工作日晚间早点吃饭便于完成作业。','context'),
      q(1,'Which evening is a weeknight?','Wednesday evening','Saturday evening','Sunday afternoon','星期三晚上是普通工作日夜晚。','meaning'),
      q(1,'A weeknight is contrasted with?','a weekend evening','a weekday morning','a full seven-day week','weeknight 与周末晚上相对。','meaning'),
      q(1,'Which plan sounds typical for a weeknight?','finish homework after an early dinner','stay away for a long weekend trip','sleep until noon every day','工作日夜晚常安排早晚餐和作业。','context')
    ]);
  P('weeks','Weeks is the plural of week; it means separate seven-day periods in sequence or a stretch of time measured in weeks.',[
    C('weeks.s1','多个周期','The repairs took three weeks, with a safety inspection at the end of each seven-day period.','维修花了三个星期，每个七天周期结束时都进行安全检查。','The repairs took three weeks / with an inspection / at each period’s end.','weeks.s1 指连续一个接一个的七天时段。','三周包括三个相继的七天周期。','schedule'),
    C('weeks.s2','模糊时长','She had been waiting weeks for the replacement pump, not merely a few days.','她已经等替换水泵等了好几周，而不只是几天。','She had been waiting weeks / not merely / a few days.','weeks.s2 指以周而非天计算的一段时间。','等待时长有数周。','time')
  ],M('She had waited weeks for the pump, but the note said she had waited only ten minutes.','She had waited weeks for the replacement pump, not merely a few days.','数周等待与十分钟的时长不一致。'),[
    q(1,'How long did the repairs take?','three weeks','three weekdays','three hours','维修用了三个星期。','context'),
    q(2,'How long had she waited for the pump?','weeks','only a few minutes','one weekend','她等替换水泵等了好几周。','context'),
    q(1,'Weeks can refer to?','several periods of seven days in a row','a single hour','only Saturdays and Sundays','weeks 是多个七天时段。','meaning'),
    q(2,'If someone has waited weeks, the wait is?','measured in weeks rather than just days','always less than an hour','exactly one weekday','weeks 可表示以周为单位的一段时间。','meaning')
  ]);
  P('weep','Weep is Old English wēpan “cry”; it means shed tears, show deep sadness, describe liquid flowing from a wound, or a period of crying.',[
    C('weep.s1','悲伤','She wept quietly when the family read the letters left by their grandfather.','家人读祖父留下的信时，她静静地哭了。','She wept quietly / when the family read / their grandfather’s letters.','weep.s1 指哭泣、流泪；weep 是不规则过去式。','阅读遗信使她流泪。','family'),
    C('weep.s2','哀悼','The community continued to weep for the neighbors lost in the flood long after the rescue ended.','救援结束很久后，社区仍为洪水中失去的邻居哀悼。','The community continued to weep for the neighbors / lost in the flood.','weep for + 人表示为其悲伤、哀悼。','社区仍为遇难邻居感到悲痛。','community'),
    C('weep.s3','伤口渗液','The nurse covered the wound with a clean dressing because it continued to weep clear fluid.','伤口仍渗出清液，护士便用干净敷料将它包扎起来。','The wound continued to weep / clear fluid / so the nurse covered it.','weep.s3 可指伤口流出液体。','伤口有液体渗出，需要敷料。','medical')
  ],M('The wound began to weep clear fluid, but the nurse recorded that it produced no liquid at all.','The wound began to weep clear fluid, so the nurse covered it with a dressing.','有液体渗出与完全没有液体不相容。'),[
    q(1,'What made her weep?','the family reading her grandfather’s letters','a clear sky','a newly installed pump','家人读祖父的信让她哭泣。','context'),
    q(2,'Who did the community weep for?','neighbors lost in the flood','visitors at the museum','the waterworks crew after a successful repair','社区为洪水中失去的邻居哀悼。','context'),
    q(3,'What did the wound weep?','clear fluid','a watercourse','a weekly magazine','伤口渗出清液。','context'),
    q(1,'To weep is to?','cry and let tears fall','laugh loudly','measure a garment','weep 的常见义是哭泣流泪。','meaning')
  ]);
  P('weeping','Weeping is the -ing form of weep and also a noun; it means crying because of sadness, grief, or pain, or full of tears.',[
    C('weeping.s1','哭泣','The child’s weeping stopped when her aunt came in and sat beside her.','姑妈进来坐在孩子身边后，孩子的哭泣停了下来。','The child’s weeping stopped / when her aunt / sat beside her.','weeping.s1 作名词，指哭泣这一行为。','哭泣随安慰而停止。','family'),
    C('weeping.s2','含泪','He gave a weeping account of the evacuation, pausing several times to wipe his eyes.','他含泪讲述疏散经过，中间几次停下来擦眼睛。','He gave a weeping account / pausing / to wipe his eyes.','weeping.s2 作形容词，形容人或面容满是泪水。','擦眼睛说明叙述者满含泪水。','emotion')
  ],M('The child’s weeping stopped, but she continued to cry loudly without any pause or comfort.','The child’s weeping stopped after her aunt sat beside her.','哭声仍持续就不能说 weeping 已停止。'),[
    q(1,'What stopped when the aunt arrived?','the child’s weeping','the weekly meeting','the watercourse','姑妈到来后孩子停止哭泣。','context'),
    q(2,'What did the man do while giving a weeping account?','paused to wipe his eyes','laughed without tears','wove a blanket','他含泪讲述疏散经历，并擦拭眼睛。','context'),
    q(1,'Weeping as a noun is?','the act of crying','a type of weaving','a time period of seven days','weeping 名词指哭泣行为。','meaning'),
    q(2,'A weeping face is?','full of tears','completely dry and expressionless','a webpage with many links','weeping 形容词指满是泪水。','meaning')
  ]);
  P('weft','Weft is Old English weft, from wefan “weave”; it is the yarn that runs across a cloth from edge to edge, crossing the lengthwise warp threads.',
    C('weft.s1','纺织','The weaver chose a red weft that crossed the blue warp to create a checked wool cloth.','织工选用红色纬线穿过蓝色经线，织成格纹羊毛布。','The red weft crossed the blue warp / to create / a checked cloth.','weft.s1 指横向穿过布幅、与经线交织的纱。','红色纬线与蓝色经线交错。','textiles'),
    M('The red weft ran lengthwise from top to bottom, parallel to the warp and never crossing it.','The red weft ran across the cloth, crossing the lengthwise warp threads.','纬线横向穿过布面并与经线交织，不与经线平行。'),[
      q(1,'What did the red weft cross?','the blue warp','a waterway','a weeknight','红色纬线穿过蓝色经线。','context'),
      q(1,'What pattern did the yarns create?','checked wool cloth','a water-proof coat','a virtual website','经纬线交织形成格纹羊毛布。','context'),
      q(1,'Weft is the yarn that runs?','across the cloth from edge to edge','lengthwise along the warp only','around a water cooler','weft 指横向穿过布幅的纱线。','meaning'),
      q(1,'Which direction does weft run relative to warp?','across it, crossing the lengthwise threads','parallel to it without crossing','through the cloth only as a color','纬线横向与经线交织。','meaning')
    ]);
  P('weigh','Weigh is Old English wegan “carry, weigh”; it means measure weight, have a stated weight, consider carefully, or burden someone emotionally.',[
    C('weigh.s1','称量','The technician weighed each water sample before adding the preservative to the bottles.','技术员先称量每份水样，再把防腐剂加入瓶中。','The technician weighed each sample / before adding / the preservative.','weigh.s1 指测量物品重量；weighed 为规则过去式。','样本逐份称量。','laboratory'),
    C('weigh.s2','重量数值','The delivery weighs twelve kilograms, so one person can lift it safely with a cart.','这件货物重十二公斤，因此一个人用推车就能安全搬运。','The delivery weighs twelve kilograms / so it can be moved / with a cart.','weigh.s2 表示具有某个重量；后接重量数值。','货物的重量为12公斤。','shipping'),
    C('weigh.s3','权衡','Before choosing a weekday schedule, the manager weighed staff needs against the cost of opening late.','在选择工作日安排前，经理权衡了员工需求与延长营业时间的成本。','The manager weighed staff needs / against the cost / of opening late.','weigh ... against ... 指仔细权衡两方面。','管理者比较员工需求和成本。','business'),
    C('weigh.s4','忧虑负担','The risk of losing the water supply weighed on residents until the replacement pipe was installed.','在替换水管装好之前，可能失去供水的风险一直让居民忧心。','The risk weighed on residents / until the replacement pipe / was installed.','weigh on someone 指成为心理负担、使人忧虑。','供水风险让居民心情沉重。','community')
  ],M('The parcel weighs twelve kilograms, but the shipping label says it has no weight at all.','The parcel weighs twelve kilograms, as shown on the shipping label.','有明确的重量数值却说完全没有重量，自相矛盾。'),[
    q(1,'What did the technician do before adding preservative?','weighed each water sample','wove a new blanket','watered the seedlings','技术员先称量水样。','context'),
    q(2,'How heavy was the delivery?','twelve kilograms','one weekday','a few weeks','货物重十二公斤。','context'),
    q(3,'What did the manager weigh?','staff needs against the cost of opening late','the water sample on a scale','the weft against the warp','weigh 可指仔细权衡两个方面。','context'),
    q(4,'If a risk weighs on residents, it?','causes them ongoing worry','measures their body weight','makes the risk disappear','weigh on 指成为心理负担。','meaning')
  ]);
  P('weigh down','Weigh down combines weigh and down; it means make something heavy enough to press or sink, or burden someone with worry.',[
    C('weigh down.s1','物理重量','The wet canvas weighed down the tent rope, pulling the loose corner toward the ground.','湿帆布把帐篷绳压得下垂，松动的角也被拉向地面。','The wet canvas weighed down the rope / pulling the corner / toward the ground.','weigh down.s1 指使某物变重并压下。','湿帆布的重量向下拉扯绳索。','outdoors'),
    C('weigh down.s2','心理负担','Uncertainty about the layoffs weighed down the staff throughout the month.','整个月里，裁员的不确定性一直让员工心情沉重。','Uncertainty about layoffs weighed down the staff / throughout the month.','weigh down.s2 比喻使人忧虑疲惫。','长期不确定性带来心理压力。','work')
  ],M('The wet canvas weighed down the rope by lifting it upward and making it lighter.','The wet canvas weighed down the rope by adding weight and pulling it toward the ground.','增加重量会向下压，不会使绳子变轻上升。'),[
    q(1,'What did the wet canvas do to the rope?','pulled it downward','lifted it and made it lighter','wove it into a blanket','湿帆布把绳索向下压。','context'),
    q(2,'What weighed down the staff?','uncertainty about layoffs','a successful wedding','a weaverbird’s nest','裁员的不确定性让员工忧心。','context'),
    q(1,'To weigh down an object is to?','make it heavy and press it downward','make it lighter and lift it','measure its length','weigh down 的字面义是使某物变重、下压。','meaning'),
    q(2,'A problem that weighs down a person?','burdens them with worry','helps them relax','measures their weight','比喻义表示问题使人心情沉重。','meaning')
  ]);
  P('weighing machine','Weighing machine combines weighing and machine; it is equipment or a scale used to measure the weight of people, vehicles, goods, or food.',[
    C('weighing machine.s1','物流','The truck stopped on the weighing machine at the depot so staff could record its loaded weight.','卡车在仓库的称重机上停下，工作人员记录装货后的重量。','The truck stopped on the weighing machine / so staff could record / its loaded weight.','weighing machine.s1 指给车辆或货物称重的设备。','卡车被放在称重设备上记录重量。','transport'),
    C('weighing machine.s2','厨房','She put the flour on a small weighing machine to measure the amount for the bread recipe.','她把面粉放在小秤上，称出面包食谱所需的用量。','She put the flour on a small weighing machine / to measure the amount / for the recipe.','weighing machine.s2 可指称食物或体重的小秤。','厨房秤测量面粉的重量。','food')
  ],M('The kitchen weighing machine measured the flour without detecting weight or displaying any measurement.','The kitchen weighing machine measured the flour’s weight for the recipe.','不测重量的设备不能称为 weighing machine。','meaning'),[
    q(1,'Where did the truck stop?','on the depot’s weighing machine','on a waterway','at a weaverbird nest','卡车停上仓库称重机。','context'),
    q(2,'What did she measure for the bread recipe?','the amount of flour','the width of a webpage','the weekly weather','小秤称量面粉用量。','context'),
    q(1,'A weighing machine is used to?','measure the weight of people, vehicles, or goods','measure a wavelength','weave yarn across cloth','weighing machine 指称重设备。','meaning'),
    q(2,'Which device is a weighing machine?','a small kitchen scale for flour','a clock that measures time by dripping water','a machine that cools drinking water','用来称面粉的厨房秤是 weighing machine。','context')
  ]);
})();
