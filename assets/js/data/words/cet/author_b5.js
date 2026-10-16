/* data/words/cet/author_b5.js · 手敲词条 B（五）：behaviour ~ blurt（含 7 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_b5.js 必须在 _cet_helper.js 之后加载');

  W('behaviour', 'noun', '/bɪˈheɪvjə(r)/', 'A2', [], '行为；举止', 'The way that a person behaves in particular situations.', [
    ['行为；举止', 'The way that a person behaves on a particular occasion or in general.', '某人在特定场合或一般情况下的行为方式。', '可数或不可数；英式拼写，美式写 behavior。', 'Her behaviour at the meeting surprised everyone.', '她在会上的举止让众人吃惊。', ['change your behaviour'], ['conduct', 'manner'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['conduct'], '←behave A2 表现 + -iour（英式后缀），A2 继承；家族 conduct 行为（正式），近义 manner 举止风度');

  W('beige', 'noun/adjective', '/beɪʒ/', '', [], '米色；米色的', 'A pale yellowish-brown colour, or of that colour.', [
    ['米色；浅棕黄色', 'A pale yellowish-brown colour.', '浅黄褐色、偏奶白带棕的颜色。', '不可数，指颜色本身。', 'The walls were painted a soft beige.', '墙壁刷成了柔和的米色。', ['a shade of beige'], ['cream', 'tan'], 'noun', 'uncountable', '外貌'],
    ['米色的', 'Of a pale yellowish-brown colour.', '浅黄褐色的。', '作定语，修饰衣物、墙面等。', 'She wore a beige coat.', '她穿了件米色大衣。', ['beige handbag'], [], 'adjective', '定语', '外貌'],
  ], '', ['cream', 'tan'], '近义 cream 奶油色（更白黄）、tan 棕褐色（更黄黑）；beige 居中偏灰');

  W('belated', 'adjective', '/bɪˈleɪtɪd/', 'A1', [], '迟来的；迟到的', 'Happening or arriving later than expected.', [
    ['迟来的；迟到的', 'Happening later than expected or later than it should have.', '比预期或应有时间晚发生的。', '常见 belated birthday wish（补上的生日祝福）。', 'Please accept my belated congratulations.', '请接受我迟来的祝贺。', ['a belated apology'], ['overdue'], 'adjective', '定语', '通用'],
  ], '', ['overdue'], 'be- + late A1 迟 + -ed，A1 继承；近义 overdue 逾期未还的（账单、任务）');

  W('belatedly', 'adverb', '/bɪˈleɪtɪdli/', 'A1', [], '迟晚地；迟迟地', 'Later than expected or than it should have been.', [
    ['迟晚地；迟迟地', 'At a time later than expected or appropriate.', '在晚于预期或恰当的时间点。', '常修饰 realize、apologize、arrive。', 'We belatedly realized the mistake.', '我们迟迟才意识到这个错误。', ['belatedly realize'], ['late'], 'adverb', 'null', '通用'],
  ], '', ['late'], '←late A1 迟 + be- + -ly，A1 继承；近义 late 迟（通用）');

  W('belief system', 'noun', '/bɪˈliːf ˈsɪstəm/', '', [], '信仰体系；信念系统', 'A set of religious, political, or moral ideas that someone accepts as true.', [
    ['信仰体系；信念系统', 'A set of ideas, especially religious or political, that a person or group accepts as true.', '个人或群体认同为真的一套观念，尤指宗教或政治的。', '可数；比 religion 范围更广，可含道德与世界观。', 'The culture had its own belief system.', '这种文化有它自己的信仰体系。', ['competing belief systems'], ['ideology'], 'noun', 'countable', '宗教'],
  ], '', ['ideology'], 'belief 信仰 + system 体系；近义 ideology 意识形态（多指政治纲领）').phrase = true;

  W('beliefs', 'noun', '/bɪˈliːfs/', 'B1', [], '信念；信仰', 'Ideas or opinions that someone accepts as true.', [
    ['信念；信仰', 'Ideas or opinions that someone holds to be true, especially about morals or religion.', '某人认为真实的想法或见解，尤指道德或宗教方面。', '复数形式；常见 hold/have beliefs。', 'He held firm beliefs about justice.', '他对正义抱有坚定的信念。', ['deeply held beliefs'], ['politics', 'value'], 'noun', 'uncountable/countable', '宗教'],
  ], '', ['politics', 'value'], '←belief B1 信念 + -s（复数专义「多项信念」）；近义 politics 政见、value 价值观');

  W('believable', 'adjective', '/bɪˈliːvəbl/', 'A1', [], '可信的；看似真实的', 'Possible to believe; seeming to be true or real.', [
    ['可信的；能令人相信的', 'Possible to believe, or seeming to be true or real.', '能够让人相信、看起来真实的。', '反义 unbelievable；修饰 story、excuse 等。', 'The excuse was hardly believable.', '这个借口几乎不可信。', ['barely believable'], ['credible', 'plausible'], 'adjective', '定语/表语', '通用'],
  ], '', ['credible', 'plausible'], '←believe A1 相信 + -able（能……的），A1 继承；家族 credible 可信的、plausible 似真的');

  W('believed', 'adjective/verb', '/bɪˈliːvd/', 'A1', [], '被相信的；believe 的过去式', 'The past form of believe, or accepted as true by people.', [
    ['（believe 的过去式与过去分词）', 'The past form of the verb believe.', '动词 believe 的过去形式。', '规则变化：believe - believed - believed。', 'She believed every word he said.', '她相信他说的每个字。', [], [], 'verb', '及物', '通用'],
    ['被相信的；被认为的', 'Thought to be true by people.', '被人们认为是真实的。', '作定语，常见 the believed cause（被认为的原因）。', 'The believed cause was a short circuit.', '被认为的原因是短路。', ['the believed cause'], ['thought'], 'adjective', '定语', '书面'],
  ], '', ['thought'], '←believe A1 的过去分词形式，A1 继承；近义 thought 被想到的（被考虑到的）');

  W('believer', 'noun', '/bɪˈliːvə(r)/', 'A1', [], '信徒；信奉……的人', 'A person who accepts an idea as true or follows a religion.', [
    ['信徒；信奉者', 'A person who follows a particular religion or accepts an idea as true.', '信奉某种宗教或认同某种观念的人。', '常见 strong/devout believer（虔诚的信奉者）。', 'He is a firm believer in hard work.', '他是勤奋的坚定信奉者。', ['a strong believer in'], ['convert'], 'noun', 'countable', '宗教'],
  ], 'believers', ['believe'], '←believe A1 + -er（表人），A1 继承；近义 convert 皈依者（改宗入教的人）');

  W('belittle', 'verb', '/bɪˈlɪtl/', '', [], '贬低；小看', 'To make someone or something seem less important than it really is.', [
    ['贬低；小看', 'To make someone or something seem less important or valuable than they really are.', '使某人某事显得不如实际重要或有价值。', '及物，常见 belittle sb/sth。', 'He belittled her achievements.', '他贬低了她的成就。', ['belittle your chances'], ['depreciate', 'diminish', 'underestimate'], 'verb', '及物', '书面'],
  ], 'belittles~belittled~belittled~belittling', ['depreciate', 'diminish'], 'be- + little 的习语化复合动词，分级留空；家族 depreciate 贬低、diminish 减损，近义 underestimate 低估');

  W('bell-bottoms', 'noun', '/ˈbelbɒtəmz/', '', [], '喇叭裤', 'Trousers whose legs are wide and flare out at the bottom.', [
    ['喇叭裤', 'Trousers whose legs are wide and flare out at the bottom.', '裤腿下摆张开呈喇叭形的裤子。', '复数形式，1960-70 年代流行的款式。', 'She wore flared bell-bottoms and boots.', '她穿着喇叭裤和长靴。', ['flared bell-bottoms'], ['flare'], 'noun', 'countable', '外貌'],
  ], '', ['flare'], 'bell 钟形 + bottoms 裤腿部分；近义 flare（喇叭形）flare pants；时尚词分级留空');

  W('bellow', 'verb/noun', '/ˈbeləʊ/', '', [], '吼叫；（牛等的）吼声', 'To shout in a loud deep voice, or such a shout.', [
    ['吼叫；大声怒吼', 'To shout very loudly in a deep voice, usually when angry.', '（常因愤怒）以低沉的嗓音大声喊叫。', '可作动词，不及物或及物（out an order）。', 'The captain bellowed an order.', '船长吼出一道命令。', ['bellow at'], ['roar'], 'verb', '不及物', '通用'],
    ['（牛等的）吼声', 'The deep loud cry of a bull or other large animal.', '公牛等大型动物发出的低沉吼声。', '可数，动物语境。', 'The bellow of a bull echoed across the valley.', '公牛的吼声在山谷间回荡。', [], ['roar'], 'noun', 'countable', '动物'],
  ], 'bellows~bellowed~bellowed~bellowing', ['roar'], '家族 roar（狮虎等吼叫）；bellow 为拟声音，更低沉粗犷，多指人吼或牛吼');

  W('belonging', 'noun', '/bɪˈlɒŋɪŋ/', 'A2', [], '归属感', 'The feeling of being happy and accepted as part of a group.', [
    ['归属感', 'The feeling of being happy and accepted as part of a group.', '作为群体一员并被接纳的满足感。', '不可数，常见 a sense of belonging。', 'The club gave her a sense of belonging.', '俱乐部给了她归属感。', ['a sense of belonging'], ['identity'], 'noun', 'uncountable', '心理'],
  ], '', ['identity'], '←belong A2 属于 + -ing（名词化），A2 继承；近义 identity 认同感、身份意识');

  W('belonging to', 'preposition', '/bɪˈlɒŋɪŋ tuː/', '', [], '属于；归……所有', 'Owned by someone; being the property of someone.', [
    ['属于；归……所有', 'Used to say who owns something.', '说明某物归谁所有。', '后置定语形式，比 of 冗长但正式；belong to 属于。', 'The house belonging to him was sold.', '属于他的那栋房子卖掉了。', ['the name belonging to the owner'], ['of'], 'preposition', 'null', '通用'],
  ], '', ['of'], 'belong to 属于；本形式作后置定语；近义 of 表所属（the house of him 语法上用 his）').phrase = true;

  W('belongings', 'noun', '/bɪˈlɒŋɪŋz/', 'A2', ['CET4'], '随身物品；私人物品', 'The things that you own, especially the ones you carry with you.', [
    ['随身物品；私人物品', 'The objects that belong to you, especially the ones you carry with you.', '属于你的物件，尤指随身携带的。', '复数形式，常见 personal belongings。', 'Pack your belongings in a small bag.', '把你的随身物品装进小包里。', ['personal belongings'], ['property'], 'noun', 'uncountable', '通用'],
  ], '', ['property'], '←belong A2 + -ings（复数专义「所有物」），A2 继承；近义 property 财产（更正式，可含不动产）');

  W('below ground', 'adverb', '/bɪˌləʊ ˈɡraʊnd/', '', [], '在地下；地面以下', 'Under the surface of the ground.', [
    ['在地下；地面以下', 'Under the surface of the earth.', '在地表以下的位置。', '可作状语或表语；反义 above ground。', 'The tunnels run below ground for miles.', '隧道在地下延伸好几英里。', ['go below ground'], ['underground'], 'adverb', 'null', '通用'],
  ], '', ['underground'], 'below 在下 + ground 地面；近义 underground 地下的（可作定语）。短语分级留空').phrase = true;

  W('benefactor', 'noun', '/ˈbenɪfæktə(r)/', '', [], '捐助人；恩人', 'A person who gives money or help to a good cause.', [
    ['捐助人；恩人', 'A person who gives money, help, or gifts to a person or organization.', '向个人或机构提供金钱、帮助或礼物的人。', '可数，正式用语。', 'A silent benefactor paid for the new library.', '一位匿名捐助人出资建了新图书馆。', ['a generous benefactor'], ['patron'], 'noun', 'countable', '社会'],
  ], 'benefactors', [], 'bene-（好）+ factor（做）；近义 patron 赞助人/主顾（更常用）；词根无可靠分级故留空');

  W('beneficial', 'adjective', '/ˌbenɪˈfɪʃl/', 'B1', ['CET4'], '有益的；有利的', 'Helpful or useful; producing a good result.', [
    ['有益的；有利的', 'Helpful, useful, or producing a good effect.', '有帮助、能产生好效果的。', 'be beneficial to sb/sth；正式用语。', 'Regular exercise is beneficial to health.', '规律运动有益健康。', ['beneficial effect'], ['good'], 'adjective', '定语/表语', '健康'],
  ], '', ['good'], '←benefit B1 好处 + -icial（形容词后缀），B1 继承；家族 good 好的（good for ≈ beneficial to）');

  W('benefits', 'noun', '/ˈbenɪfɪts/', 'B1', [], '福利（金）；好处', 'Extra money and advantages given to employees, or the good effects of something.', [
    ['福利（金）；津贴', 'Extra money or advantages that employees get in addition to their salary.', '雇员在工资之外获得的额外钱款或优待。', '常用复数，常见 employee benefits（员工福利）。', 'The job offers good benefits and a pension.', '这份工作提供优厚的福利和养老金。', ['employee benefits'], ['welfare'], 'noun', 'uncountable/countable', '商务'],
    ['好处；益处（复数）', 'The good effects or advantages of something.', '某事物的积极效果或优势。', '常见 the benefits of sth。', 'The benefits of the new system are clear.', '新系统的好处是明摆着的。', ['the benefits of'], [], 'noun', 'uncountable', '通用'],
  ],'benefits', ['welfare'], '←benefit B1 + -s（复数专义），B1 继承；家族 welfare 福利（社会保障体系义）');

  W('bequeath', 'verb', '/bɪˈkwiːθ/', '', [], '遗赠；传下', 'To leave money or property to someone in a will.', [
    ['遗赠；（遗嘱中）留给', 'To formally arrange for someone to receive your money or property after you die.', '在遗嘱中正式安排死后把金钱或财产交给某人。', '及物，法律正式用语：bequeath sth to sb。', 'She bequeathed her estate to the university.', '她把遗产遗赠给了大学。', ['bequeath to'], ['will'], 'verb', '及物', '法律'],
    ['传下（名声、传统）', 'To hand down a custom, reputation, or tradition to later generations.', '把风俗、名声或传统传给后代。', '较文：bequeath a legacy to posterity。', 'They bequeathed a fine musical tradition.', '他们传下了一段美好的音乐传统。', ['bequeath a legacy'], [], 'verb', '及物', '书面'],
  ], 'bequeaths~bequeathed~bequeathed~bequeathing', [], '古旧动词，分级留空；近义 will 遗嘱（名词）；第一义正式法律语体');

  W('bequest', 'noun', '/bɪˈkwest/', '', [], '遗赠物；遗产', 'Money or property given to someone in a will.', [
    ['遗赠物；遗产', 'Money or property that is given to someone after the person who owned it dies.', '原主人死后留给他的金钱或财产。', '可数，法律正式用语。', 'The museum received a bequest of rare paintings.', '博物馆收到一批稀有画作的遗赠。', ['a bequest to'], ['legacy'], 'noun', 'countable', '法律'],
  ], 'bequests', [], '与 bequeath 同根的名词形式，分级留空；近义 legacy 遗产（可含抽象义「遗产传统」）');

  W('berate', 'verb', '/bɪˈreɪt/', '', [], '严斥；痛骂', 'To scold someone angrily and for a long time.', [
    ['严斥；痛骂', 'To criticize or scold someone angrily for a long time.', '长时间愤怒地批评或责骂某人。', '及物，较文：berate sb for sth。', 'She berated him for being late.', '她因他迟到而痛骂了他。', ['berate him for'], ['scold'], 'verb', '及物', '书面'],
  ], 'berates~berated~berated~berating', [], '近义 scold 斥责（通用）；berate 语气更重、持续更久、较正式');

  W('bereave', 'verb', '/bɪˈriːv/', '', [], '使丧失（亲人）；夺去', 'To take away a loved one from someone through death.', [
    ['使丧失亲人', 'To cause someone to lose a loved one through death.', '因死亡使某人失去亲人。', '正式用语；失去亲人者称 the bereaved。', 'The war bereaved her of her two sons.', '战争夺走了她的两个儿子。', ['bereaved families'], ['orphan', 'widow'], 'verb', '及物', '书面'],
  ], 'bereaves~bereaved~bereaved~bereaving', ['widow'], 'be- + reave（抢夺）古旧动词，分级留空；家族 widow 寡妇，近义 orphan 孤儿（丧失亲人的身份词）');

  W('berth', 'noun', '/bɜːθ/', '', [], '泊位；卧铺', 'A place for a ship to stop, or a bed on a train or ship.', [
    ['泊位；锚位', 'A place where a ship can stop and be tied up in a port.', '船只在港口停靠系泊的位置。', '可数，航海用语：take up a berth。', 'The ferry found a berth on the north side.', '渡轮在北侧找到了泊位。', ['take up a berth'], ['dock'], 'noun', 'countable', '交通'],
    ['卧铺；铺位', 'A bed on a train, ship, or aircraft.', '火车、轮船或飞机上的铺位。', '可数，英式常用；sleeper berth 卧铺车厢。', 'We shared a two-berth cabin.', '我们合住一间双铺客舱。', ['a lower berth'], [], 'noun', 'countable', '交通'],
  ], 'berths', [], '与 birth（出生）同音；近义 dock 船坞、码头（停靠设施）');

  W('bespoke', 'adjective', '/bɪˈspəʊk/', '', [], '定制的；待议的', 'Made specially for a particular person, or (British) still being discussed.', [
    ['定制的；量身定做的', 'Made to order for one particular customer.', '为特定顾客专门制作的。', '英式，尤指服装；美式多用 custom-made。', 'He wore a bespoke suit.', '他穿着一套定制西装。', ['a bespoke service'], ['custom'], 'adjective', '定语', '商务'],
    ['（英式）待议的；暂时的', 'Being discussed but not yet decided (British).', '正在讨论但尚未决定的（英式旧用法）。', '较古旧，常见 matters bespoke（待议事项）。', 'The report covers matters bespoke to the committee.', '报告涉及委员会的待议事项。', [], [], 'adjective', '定语', '书面'],
  ], '', ['custom'], 'bespeak 的分词演变而来；近义 custom 定制的（custom-made 美式常用）');

  W('biased', 'adjective', '/ˈbaɪəst/', 'B2', [], '有偏见的；偏袒的', 'Not fair because personal opinions influence a decision.', [
    ['有偏见的；不公正的', 'Not fair because personal opinions influence how you judge or decide something.', '因个人意见影响判断而不公正的。', 'be biased against/towards sb。', 'The report was biased against local people.', '这份报告对当地人有偏见。', ['biased towards'], ['partisan', 'subjective'], 'adjective', '定语/表语', '法律'],
  ], '', ['partisan', 'subjective'], '←bias B2 偏见 + -ed，B2 继承；家族 subjective 主观的，近义 partisan 党派性的、偏袒一方的');

  W('bicarbonate', 'noun', '/baɪˈkɑːbənət/', '', [], '碳酸氢盐；小苏打', 'A white chemical compound used in baking and cleaning.', [
    ['碳酸氢盐；小苏打', 'A white powder (sodium bicarbonate) used in baking and for cleaning.', '白色粉末（碳酸氢钠），用于烘焙和清洁。', '不可数，常见 bicarbonate of soda。', 'Add a spoon of bicarbonate to the dough.', '往面团里加一勺小苏打。', ['bicarbonate of soda'], ['soda'], 'noun', 'uncountable', '科学'],
  ], '', ['soda'], 'bi-（二）+ carbon（碳）+ -ate（盐类后缀）；近义 soda 常指 bicarbonate of soda 小苏打');

  W('bicker', 'verb', '/ˈbɪkə(r)/', '', [], '争吵；拌嘴', 'To argue repeatedly about unimportant things.', [
    ['争吵；拌嘴', 'To argue repeatedly about small and unimportant matters.', '为琐碎小事反复争执。', '不及物，常见 bicker over/about sth。', 'The children bickered over the remote control.', '孩子们为遥控器拌起嘴来。', ['bicker over'], ['quarrel'], 'verb', '不及物', '通用'],
  ], 'bickers~bickered~bickered~bickering', [], '近义 quarrel 吵架（通用、程度更深）；bicker 特指琐碎口角');

  W('big cat', 'noun', '/ˌbɪɡ ˈkæt/', '', [], '大型猫科动物', 'A large wild animal of the cat family.', [
    ['大型猫科动物', 'A large wild animal belonging to the cat family, such as a lion or tiger.', '猫科中的大型野生动物，如狮、虎。', '可数，复数 big cats；动物保护语境常见。', 'Lions and leopards are both big cats.', '狮子和豹都属于大型猫科动物。', ['endangered big cats'], ['lion'], 'noun', 'countable', '动物'],
  ], '', ['lion'], 'big 大 + cat 猫；近义 lion 狮子（最典型代表）。短语分级留空').phrase = true;

  W('bigotry', 'noun', '/ˈbɪɡətri/', '', [], '偏执；顽固不化', 'Strong unreasonable dislike of people who are different.', [
    ['偏执；顽固的排斥', 'Intolerance of people who hold different opinions or belong to other groups.', '对不同意见者或不同群体的强烈而不合理排斥。', '不可数，正式、书面用语。', 'Religious bigotry has no place in modern society.', '宗教偏执在现代社会没有容身之地。', [], ['prejudice'], 'noun', 'uncountable', '政治'],
  ], '', ['prejudice'], 'bigot 偏执者（本词库未单列）+ -ry（抽象名词）；近义 prejudice 偏见（更通用、可数）');

  W('bill of fare', 'noun', '/ˌbɪl əv ˈfeə(r)/', '', [], '菜单；菜谱', 'A list of the food and drinks available in a restaurant.', [
    ['菜单；菜谱', 'A formal list of the dishes available at a restaurant.', '餐馆所提供菜肴的正式列表。', '可数，旧式或正式说法；现代多说 menu。', 'The inn printed a new bill of fare each day.', '客栈每天都印一份新菜单。', [], ['menu'], 'noun', 'countable', '饮食'],
  ], '', ['menu'], 'bill（清单）+ of + fare（食物）；近义 menu 菜单（现代通用）。短语分级留空').phrase = true;

  W('billfold', 'noun', '/ˈbɪlfəʊld/', '', [], '（折叠式）皮夹；钱包', 'A small folding case for holding paper money and cards.', [
    ['皮夹；折叠钱包', 'A small folding case for carrying paper money and cards.', '装纸币和卡片的小型对折钱包。', '可数，主美式；英式多用 wallet。', 'He pulled a worn billfold from his jacket pocket.', '他从夹克口袋里掏出一个旧皮夹。', ['a leather billfold'], ['wallet'], 'noun', 'countable', '购物'],
  ], 'billfolds', ['wallet'], 'bill（钞票）+ fold（折）；家族 wallet 钱包（通用）；billfold 主美式说法');

  W('binding', 'adjective/noun', '/ˈbaɪndɪŋ/', 'B2', [], '有约束力的；装订', 'Having the force of an agreement, or the way a book is covered.', [
    ['有约束力的', 'Legally or formally making someone obey an agreement or rule.', '在法律或形式上迫使某人遵守协议或规则的。', '常见 binding agreement/decision。', 'The contract is legally binding.', '这份合同具有法律约束力。', ['a binding agreement'], ['incumbent'], 'adjective', '定语', '法律'],
    ['装订；封面', 'The way a book is bound, or its cover.', '书籍的装订方式，或书的封面。', '可数，出版用语：hardback binding 精装。', 'The volume had a leather binding.', '那卷书是皮革装订的。', ['a leather binding'], [], 'noun', 'countable', '艺术'],
  ],'bindings', ['incumbent'], '←bind B2 捆绑/约束 + -ing，B2 继承；近义 incumbent 有义务的（正式，it is incumbent on sb）');

  W('biological', 'adjective', '/ˌbaɪəˈlɒdʒɪkl/', 'A2', ['CET4'], '生物学的；亲生的', 'Connected with the science of living things, or with blood relationship.', [
    ['生物学的；与生物学有关的', 'Connected with biology or the study of living things.', '与生物学或生命科学研究相关的。', '常见 biological research/science。', 'She devoted herself to biological research.', '她致力于生物学研究。', ['biological science'], ['organic', 'physiological'], 'adjective', '定语', '科学'],
    ['亲生的；血缘的', 'Connected by blood; natural rather than adopted.', '有血缘关系的、亲生的（而非收养的）。', '常见 biological parent/family（亲生父母/家庭）。', 'They found their biological father later.', '他们后来找到了自己的亲生父亲。', ['a biological child'], [], 'adjective', '定语', '社会'],
  ], '', ['organic', 'physiological'], '←biology A2 生物学 + -ical，A2 继承；家族 biology、organic 生物的、physiological 生理的');

  W('biosphere', 'noun', '/ˈbaɪəʊsfɪə(r)/', '', [], '生物圈', 'The parts of the Earth where life exists.', [
    ['生物圈', 'The regions of the Earth and its atmosphere where living organisms exist.', '地球上存在生物的区域及其大气层。', '可数，科学术语；与 geosphere、hydrosphere 并列。', 'Humans have changed the whole biosphere.', '人类已经改变了整个生物圈。', [], ['ecosystem'], 'noun', 'countable', '科学'],
  ], 'biospheres', ['ecosystem'], 'bio-（生命）+ sphere（圈层）；家族 ecosystem 生态系统（生物与其环境的整体）；词根无可靠分级故留空');

  W('biro', 'noun', '/ˈbaɪrəʊ/', '', [], '圆珠笔', 'A ballpoint pen, especially one made by the Biro brand.', [
    ['圆珠笔', 'A pen with a tiny ball at the point that rolls ink onto the paper.', '笔尖小球滚动出墨的笔，即圆珠笔。', '可数，英式常用；源自商标 Biro，已通名化。', 'She jotted the number down with a biro.', '她用圆珠笔匆匆记下号码。', ['a pack of biros'], ['pen'], 'noun', 'countable', '通用'],
  ], 'biros', [], '商标 Biro 通名化（eponym）的英式说法；美式多说 ballpoint；近义 pen 笔（统称）');

  W('birth name', 'noun', '/ˌbɜːθ ˈneɪm/', '', [], '出生名；本名', 'The name you were given when you were born.', [
    ['出生名；本名', 'The name you were given at birth, before any change of name.', '出生时取的名字，改名之前的。', '可数，与 maiden name（娘家姓）相近。', 'She kept her birth name after marriage.', '她婚后保留了本姓。', [], ['maiden'], 'noun', 'countable', '社会'],
  ], '', ['maiden'], 'birth 出生 + name 名字；近义 maiden name 娘家姓；反义 married name 婚后姓。短语分级留空').phrase = true;

  W('birthplace', 'noun', '/ˈbɜːθpleɪs/', 'A2', [], '出生地；发源地', 'The place where someone was born, or where something began.', [
    ['出生地；故乡', 'The place where a person was born.', '某人出生的地方。', '可数，birth A2 + place A1 复合。', 'Dublin was the birthplace of many writers.', '都柏林是许多作家的出生地。', ['the birthplace of'], ['home'], 'noun', 'countable', '社会'],
    ['发源地；策源地', 'The place where something began to exist.', '某事物最早出现的地方。', '常见 the birthplace of democracy/jazz。', 'New Orleans is the birthplace of jazz.', '新奥尔良是爵士乐的发源地。', [], ['cradle'], 'noun', 'countable', '书面'],
  ], 'birthplaces', ['birth', 'place'], '←birth A2 出生 + place A1 地方，取首成分级 A2；近义 home 家乡、cradle 发源地（比喻）');

  W('bison', 'noun', '/ˈbaɪsn/', '', [], '野牛', 'A large wild animal of the cattle family with thick fur.', [
    ['野牛', 'A large heavy animal of the cattle family, with thick fur on its head and shoulders.', '牛科大型厚毛动物，头肩部长有厚毛。', '单复数同形；北美与欧洲均有分布，濒危物种。', 'A herd of bison crossed the plain.', '一群野牛穿过平原。', ['a herd of bison'], ['buffalo'], 'noun', 'countable', '动物'],
  ], '', ['buffalo'], '单复数同形（bison/ bison）；家族 buffalo 水牛/野牛（更宽泛的近缘词）；分级留空');

  W('bistro', 'noun', '/ˈbiːstrəʊ/', '', [], '小酒馆；小餐馆', 'A small restaurant serving simple meals and wine.', [
    ['小酒馆；小餐馆', 'A small, informal restaurant serving simple meals, especially in France.', '小型、非正式的餐馆，供应简餐，尤见于法国。', '可数，复数 bistros。', 'We ate at a little bistro near the station.', '我们在车站附近的小餐馆吃了饭。', [], ['restaurant'], 'noun', 'countable', '饮食'],
  ], 'bistros', [], '法语借词；近义 restaurant 餐馆（统称、规模不限）；分级留空');

  W('blackout', 'noun', '/ˈblækaʊt/', '', [], '停电；灯火管制；昏厥', 'A period when the electricity supply fails, or a loss of consciousness.', [
    ['停电；断电', 'A period when there is no electricity in an area.', '某地区没有电的时段。', '可数，也指战时灯火管制。', 'The storm caused a citywide blackout.', '风暴造成了全城停电。', ['a power blackout'], [], 'noun', 'countable', '科技'],
    ['昏厥；失去知觉', 'A brief loss of consciousness.', '短暂失去知觉。', '可数，医学与口语用法。', 'She had a blackout during the exam.', '她在考试中晕了过去。', [], ['faint'], 'noun', 'countable', '医学'],
  ], 'blackouts', [], 'black 黑 + out 断；停电/灯火管制与昏厥两义；近义 faint 昏厥（动词更常用）；分级留空');

  W('blamed', 'adjective/verb', '/bleɪmd/', 'B1', [], '被责怪的；blame 的过去式', 'The past form of blame, or held responsible for something bad.', [
    ['（blame 的过去式与过去分词）', 'The past form of the verb blame.', '动词 blame 的过去形式。', '规则变化：blame - blamed - blamed。', 'She blamed herself for the delay.', '她把延误归咎于自己。', [], [], 'verb', '及物', '通用'],
    ['被指责的；被归咎的', 'Held responsible for something bad.', '被认为应对坏事负责的。', '作表语，常见 be blamed for sth。', 'The driver was blamed for the accident.', '司机因事故受到指责。', ['be blamed for'], ['accused'], 'adjective', '表语', '法律'],
  ], '', ['accused'], '←blame B1 责怪 + -ed，B1 继承；近义 accused 被指控的（已进入司法程序）');

  W('blameless', 'adjective', '/ˈbleɪmləs/', 'B1', [], '无可指责的；清白的', 'Not deserving blame; having done nothing wrong.', [
    ['无可指责的；无辜的', 'Not deserving to be blamed, because you have done nothing wrong.', '不应受责备的，因为没有做错任何事。', '常见 keep/preserve a blameless record。', 'He led a blameless life.', '他一生无可指责。', ['blameless in'], ['innocent'], 'adjective', '定语/表语', '法律'],
  ], '', ['innocent'], '←blame B1 责怪 + -less（无……的），B1 继承；近义 innocent 清白的、无罪的');

  W('blanch', 'verb', '/blɑːntʃ/', '', [], '（烹调）焯；使变白', 'To put food briefly into boiling water, or to make something become pale.', [
    ['（烹调）焯（菜）；烫去皮', 'To put vegetables or fruit briefly into boiling water, especially before peeling.', '把蔬菜或水果短暂放入沸水，尤指去皮前。', '及物，烹饪用语。', 'Blanch the tomatoes to remove their skins.', '把番茄焯一下以便去皮。', ['blanch in water'], [], 'verb', '及物', '饮食'],
    ['使变苍白', 'To make someones face become white with fear or shock.', '使某人因恐惧或震惊而脸色发白。', '较文：be blanched with fear。', 'His face blanched at the news.', '听到消息他的脸变得煞白。', [], ['pale'], 'verb', '及物', '书面'],
  ], 'blanches~blanched~blanched~blanching', [], '近义 pale 变苍白（更通用、可不及物）；blanch 焯水义为烹饪专业词；分级留空');

  W('bland', 'adjective', '/blænd/', '', [], '清淡的；乏味的', 'Having little flavour, or not interesting and showing no emotion.', [
    ['（食物）清淡的；无味的', 'Food or drink that has no strong or interesting flavour.', '没有浓烈或特别味道的食物饮料。', '可形容饮食；反义 spicy/tasty。', 'The soup was too bland for my taste.', '这汤对我来说太淡了。', ['a bland diet'], ['mild'], 'adjective', '定语', '饮食'],
    ['乏味的；不动声色的', 'Not interesting, and showing no excitement or emotion.', '不有趣的，且不表露激动或情感的。', '形容谈话、风格、笑容。', 'He gave a bland smile and changed the subject.', '他淡淡一笑，换了话题。', ['a bland expression'], ['tame'], 'adjective', '定语', '书面'],
  ], '', ['mild', 'tame'], '近义 mild 温和的（中性）、tame 平淡温顺的；bland 多指无味、无聊；分级留空');

  W('blasted', 'adjective', '/ˈblɑːstɪd/', 'B2', [], '被炸毁的；（咒骂）讨厌的', 'Destroyed by an explosion, or very unpleasant (informal).', [
    ['被炸毁的；遭摧毁的', 'Destroyed or damaged by an explosion.', '被爆炸毁坏或损坏的。', 'blast 的过去分词作定语。', 'The blasted forest took years to recover.', '被炸毁的森林过了好多年才恢复。', [], [], 'adjective', '定语', '军事'],
    ['（加强语气，委婉咒骂）讨厌的', 'Used to emphasize annoyance, as a polite form of bloody.', '用于加强恼怒语气，是 bloody 的委婉说法。', '英式口语，常作 bloody 的替代。', 'This blasted computer will not start.', '这台破电脑就是开不了机。', [], ['wretched'], 'adjective', '定语', '口语'],
  ], '', ['wretched'], '←blast B2 爆炸 + -ed，B2 继承；近义 wretched 糟糕的/可怜的（语气相近）');

  W('blatant', 'adjective', '/ˈbleɪtənt/', '', [], '公然的；明目张胆的', 'Very obvious and done in a way that is not acceptable.', [
    ['公然的；明目张胆的', 'Very obvious and done in a way that makes people angry.', '非常明显且令人无法接受地做出来的。', '贬义，修饰 lie、disregard、example 等。', 'That was a blatant lie.', '那是赤裸裸的谎言。', ['blatant disregard'], ['obvious', 'overt', 'patent'], 'adjective', '定语', '书面'],
  ], '', ['obvious', 'overt', 'patent'], '近义 obvious 明显（中性）、overt 公开的（正式）、patent 显然的；blatant 贬义「明目张胆」；分级留空');

  W('blazer', 'noun', '/ˈbleɪzə(r)/', 'B2', [], '（运动）夹克；西装外套', 'A light jacket, often part of a uniform or suit.', [
    ['（运动）夹克；制服上衣', 'A light jacket of a single colour, often worn as part of a uniform or suit.', '单色的轻便夹克，常作为制服或西装的一部分。', '可数；常见 school blazer（校服外套）。', 'He wore a navy blazer with grey trousers.', '他穿了件藏青色夹克配灰裤子。', ['school blazer'], ['jacket'], 'noun', 'countable', '外貌'],
  ], 'blazers', ['blaze'], '←blaze B2（原指鲜亮条纹）+ -er（表物），B2 继承；近义 jacket 夹克（统称）');

  W('blemish', 'noun/verb', '/ˈblemɪʃ/', '', [], '瑕疵；玷污', 'A small mark that makes something less perfect, or to damage a reputation.', [
    ['瑕疵；缺点', 'A small mark or fault that spoils the appearance or quality of something.', '破坏外观或完美度的小痕迹或缺点。', '可数：a blemish on sth。', 'The scratch was the only blemish on the table.', '那道划痕是桌子上唯一的瑕疵。', ['without blemish'], ['flaw', 'scar'], 'noun', 'countable', '通用'],
    ['玷污；损害（名誉）', 'To damage someones good reputation.', '损害某人的良好声誉。', '较文：blemish a record（污损记录）。', 'One mistake can blemish a long career.', '一个失误就能玷污漫长的职业生涯。', [], [], 'verb', '及物', '书面'],
  ], 'blemishes~blemished~blemished~blemishing', [], '近义 flaw 缺陷（结构性问题）、scar 伤疤（物理或记忆）；blemish 多指表面瑕疵；分级留空');

  W('blessing', 'noun', '/ˈblesɪŋ/', 'B2', ['CET4'], '幸事；祝福；批准', 'Something good you are grateful for, or God favour.', [
    ['幸事；令人感激的好事', 'Something that is good and that you are grateful to have.', '你庆幸拥有的好事。', '可数，常见 a blessing in disguise（因祸得福）。', 'Losing that job was a blessing in disguise.', '丢掉那份工作反倒因祸得福。', ['count your blessings'], ['mercy'], 'noun', 'countable', '通用'],
    ['祝福；祷告', 'God favour, or a prayer asking for it.', '上帝的恩典，或祈求恩典的祷告。', '宗教语境；give a blessing 表「同意」。', 'They asked for a blessing on the journey.', '他们为旅途祈福。', ['ask for a blessing'], [], 'noun', 'uncountable', '宗教'],
  ], 'blessings', ['bless'], '←bless B2 祝福 + -ing，B2 继承；近义 mercy 仁慈（宽恕义更重）');

  W('bliss', 'noun', '/blɪs/', '', [], '极乐；巨大的幸福', 'Perfect happiness; great joy.', [
    ['极乐；极大的幸福', 'A state of perfect happiness and enjoyment.', '完美幸福、无比快乐的状态。', '不可数，常与 in 连用。', 'She was in bliss on the beach.', '她在海滩上惬意极了。', ['ignorance is bliss'], ['heaven', 'paradise'], 'noun', 'uncountable', '心理'],
  ], '', ['heaven', 'paradise'], '家族 paradise 天堂；近义 heaven 天堂/极乐；ignorance is bliss 眼不见心不烦；分级留空');

  W('blockade', 'noun/verb', '/blɒkˈkeɪd/', '', [], '封锁；实施封锁', 'An official order to prevent people or goods entering or leaving a place.', [
    ['封锁（行动）', 'An official order that prevents ships, goods, or people from entering or leaving a place.', '阻止船舶、货物或人员进出的官方命令。', '可数或不可数；常见 impose/lift a blockade。', 'The navy imposed a blockade on the port.', '海军对港口实施了封锁。', ['lift the blockade'], ['siege'], 'noun', 'uncountable/countable', '军事'],
    ['实施封锁；包围', 'To surround a place with forces to prevent people or goods getting in or out.', '用兵力包围某地以阻止人员货物进出。', '及物动词。', 'Ships blockaded the harbour for weeks.', '舰船封锁了港口数周。', [], [], 'verb', '及物', '军事'],
  ], 'blockades~blockaded~blockaded~blockading', ['siege'], '←block A2 阻塞 + -ade（行为名词后缀）；-ade 不在 §5.4 清单且库内无 -ade 继承先例，按 §4c 无先例留空（判断项，主 agent 全库审计改判，原备注与留空参数矛盾已修正）；家族 siege 围困（包围并断绝补给）');

  W('blockage', 'noun', '/ˈblɒkɪdʒ/', 'A2', [], '阻塞；堵塞物', 'Something that blocks a passage, or the state of being blocked.', [
    ['阻塞（状态）；堵塞', 'The state of being blocked so that nothing can move through.', '被堵塞、无法通行的状态。', '可数或不可数，交通与管道语境。', 'A blockage in the pipe caused flooding.', '管道堵塞造成了积水。', ['remove the blockage'], ['jam'], 'noun', 'countable', '通用'],
    ['堵塞物', 'Something that blocks a hole, pipe, or road.', '堵住洞口、管道或道路的东西。', '可数。', 'Workers cleared a blockage of leaves from the drain.', '工人清出了排水沟里成堆的落叶堵塞物。', [], [], 'noun', 'countable', '通用'],
  ], 'blockages', ['block'], '←block A2 阻塞 + -age（名词后缀），A2 继承；近义 jam 堵塞（多指交通拥挤）');

  W('bloody', 'adjective/adverb', '/ˈblʌdi/', 'A2', ['CET4'], '血腥的；带血的；（加强语气）', 'Covered with blood, or used to emphasize a feeling.', [
    ['血腥的；血淋淋的', 'Covered with or containing a lot of blood.', '沾满或含有大量血液的。', '可作定语或表语；bloody murder 血腥的谋杀。', 'The knight cleaned a bloody wound.', '骑士清理了一处血淋淋的伤口。', ['a bloody battle'], [], 'adjective', '定语', '通用'],
    ['（肉）带血的；半生的', 'Of meat containing blood; not fully cooked.', '（肉）带血、未全熟的。', '英式口语 bloody rare =（牛排）半生带血。', 'How do you like your steak — bloody or well done?', '牛排你要带血的还是全熟的？', ['bloody rare'], ['rare'], 'adjective', '定语', '饮食'],
    ['（英式口语，加强语气）该死的', 'Used to emphasize a feeling or statement, especially in British English.', '用于加强语气，尤见于英式口语。', '较粗俗，正式场合避免；blasted 较委婉。', 'This bloody traffic is endless.', '这该死的交通没完没了。', ['bloody hell'], [], 'adverb', 'null', '口语'],
  ], '', ['rare'], '←blood A2 血 + -y（多……的），A2 继承；近义 rare（牛排）半熟的；第三义为粗俗加强语');

  W('blot', 'noun/verb', '/blɒt/', '', [], '墨渍；玷污；吸干', 'A dirty mark, or to make paper dry, or to damage a reputation.', [
    ['墨渍；污点', 'A mark made by ink, or any small dirty spot on a surface.', '墨水造成的痕迹，或表面上的小污点。', '可数；blot on a reputation 指名誉污点。', 'There was a blot of ink on the page.', '纸上有一滴墨渍。', ['an ink blot'], ['stain'], 'noun', 'countable', '通用'],
    ['（用吸墨纸）吸干', 'To make ink dry by pressing special paper onto it.', '用吸墨纸压在纸上把墨吸干。', '旧式书写用语；blot the ink。', 'She blotted the letter before folding it.', '她把信吸干墨后再折起。', [], [], 'verb', '及物', '通用'],
  ], 'blots~blotted~blotted~blotting', [], '近义 stain 污渍（更难洗掉）；blot out 涂抹掉、blot on a reputation 指名誉污点；分级留空');

  W('blow up', 'verb', '/ˌbləʊ ˈʌp/', '', [], '爆炸；充气；勃然大怒', 'To explode, to fill with air, or to become very angry.', [
    ['爆炸；炸毁', 'To explode, or to make a bomb or building explode.', '爆炸，或使炸弹、建筑爆炸。', '及物/不及物。', 'The car blew up without warning.', '汽车毫无征兆地爆炸了。', ['blow up the bridge'], ['blast', 'explode'], 'verb', '及物/不及物', '军事'],
    ['充气；吹大', 'To fill something with air.', '给某物充气。', '及物，常见 blow up a balloon。', 'The kids blew up balloons for the party.', '孩子们为聚会吹起了气球。', ['blow up a balloon'], ['inflate'], 'verb', '及物', '通用'],
    ['勃然大怒', 'To become very angry.', '突然非常生气。', '不及物，口语：blow up at sb。', 'He blew up at the slightest criticism.', '他受到丁点批评就大发雷霆。', ['blow up at'], ['explode'], 'verb', '不及物', '口语'],
  ],'blows up~blew up~blown up~blowing up', ['explode', 'inflate'], '短语动词：爆炸/充气/发怒三义；家族 explode 爆炸、inflate 充气，近义 blast 爆炸。分级留空').phrase = true;

  W('blower', 'noun', '/ˈbləʊə(r)/', 'A2', [], '鼓风机；吹风机', 'A machine or device that blows air.', [
    ['鼓风机；吹风机', 'A machine that blows a current of air, used for drying or heating.', '吹出气流的机器，用于吹干或加热。', '可数，常见 hair blower、leaf blower。', 'The leaf blower made a terrible noise.', '吹叶机噪音刺耳。', ['hair blower'], ['fan'], 'noun', 'countable', '工业'],
  ], 'blowers', ['blow'], '←blow A2 吹 + -er（表物），A2 继承；近义 fan 风扇（扇风而非集中吹风）');

  W('blues', 'noun', '/bluːz/', 'A1', [], '布鲁斯音乐；忧郁', 'A style of music, or a feeling of sadness.', [
    ['布鲁斯音乐', 'A style of music from African American culture, with sad songs and a slow rhythm.', '源自非裔美国文化的音乐风格，歌曲忧伤、节奏缓慢。', '不可数，the Blues 首字母可大写。', 'He plays guitar in a blues band.', '他在一支布鲁斯乐队里弹吉他。', ['the blues'], ['jazz'], 'noun', 'uncountable', '艺术'],
    ['忧郁；沮丧', 'A state of deep sadness and hopelessness.', '深沉而无助的忧郁状态。', 'have/feel the blues（习语）。', 'After the holiday I had the blues for a week.', '假期过后我郁闷了一周。', ['have the blues'], [], 'noun', 'uncountable', '心理'],
  ],'blues', ['jazz'], '←blue A1 忧郁的 + -s（风格化复数）；近义 jazz 爵士乐（同源文化语境）；have the blues 情绪低落');

  W('bluntness', 'noun', '/ˈblʌntnəs/', 'C1', [], '直率；迟钝', 'The quality of being blunt in speech or sensation.', [
    ['直率；不拐弯抹角', 'The quality of saying things in a very direct way, without being polite.', '以非常直接的方式说话、不顾及礼貌的特点。', '不可数；blunt 说话直的名词形。', 'She was surprised by the bluntness of his reply.', '她对他回答的直率感到吃惊。', [], ['abruptness'], 'noun', 'uncountable', '通用'],
    ['（感觉的）迟钝；麻木', 'The state of being slow or dull in feeling.', '感觉迟缓、不敏锐的状态。', '医学语境亦指痛觉迟钝。', 'The injury caused a bluntness in his fingertips.', '受伤使他的指尖变得迟钝。', [], [], 'noun', 'uncountable', '健康'],
  ], '', ['abruptness'], '←blunt C1 直率/钝的 + -ness，C1 继承；近义 abruptness 突兀（语气生硬）');

  W('blurt', 'verb', '/blɜːt/', '', [], '脱口而出；突然说出', 'To say something suddenly and without thinking.', [
    ['脱口而出；不假思索地说', 'To say something suddenly, before you have time to think about it.', '来不及想就脱口而出。', '常与 out 连用：blurt sth out。', 'She blurted out the secret.', '她把秘密脱口而出了。', ['blurt out'], ['pant'], 'verb', '及物', '口语'],
  ], 'blurts~blurted~blurted~blurting', [], '常见 blurt out；近义 pant 喘着气说（急促且气喘）；分级留空');

})(typeof window !== 'undefined' ? window : globalThis);
