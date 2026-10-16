/* data/words/cet/author_h6.js · 手敲词条 H（六·前段）：headbutt ~ herder（含 2 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_h6.js 必须在 _cet_helper.js 之后加载');

  W('headbutt', 'noun/verb', '/ˈhedbʌt/', 'A1', [], '头槌', 'A hit with the head.', [
    ['头槌', 'A hit with the head.', '用头撞击。', '可数或及物动词。', 'He headbutted the door open.', '他用头撞开了门。', [], ['butt'], 'noun/verb', 'null', '通用'],
  ], 'headbutts~headbutted~headbutted~headbutting', ['head', 'butt'], '←head A1 + butt（首成分），A1 继承；近义 butt 撞击');

  W('header', 'noun', '/ˈhedə(r)/', 'A1', [], '页眉；头球', 'Text at the top, or a ball hit by the head.', [
    ['页眉；头球', 'Text at the top, or a ball hit by the head.', '顶部文字，或用头顶的球。', '可数。', 'Check the page header.', '检查页眉。', [], ['heading'], 'noun', 'countable', '通用'],
  ], 'headers', ['head', 'heading'], '←head A1 + -er（表物），A1 继承；家族 heading 标题');

  W('headland', 'noun', '/ˈhedlænd/', 'A1', [], '海角', 'High land by the sea.', [
    ['海角', 'High land by the sea.', '海边的高地。', '可数。', 'We walked to the headland.', '我们走到海角。', [], ['cape', 'peninsula'], 'noun', 'countable', '自然'],
  ], 'headlands', ['head', 'land', 'cape', 'peninsula'], '←head A1 + land（首成分），A1 继承；家族 cape 海角、peninsula 半岛');

  W('headstrong', 'adjective', '/ˈhedstrɒŋ/', 'A1', [], '倔强的', 'Not listening to advice.', [
    ['倔强的', 'Not listening to advice.', '不听劝的。', 'a headstrong youth 倔强的年轻人。', 'The headstrong boy refused help.', '倔强的男孩拒绝帮忙。', [], ['stubborn'], 'adjective', '定语', '性格'],
  ], '', ['head', 'strong'], '←head A1 + strong（首成分），A1 继承；近义 stubborn 固执的');

  W('headway', 'noun', '/ˈhedweɪ/', 'A1', [], '进展', 'Forward movement.', [
    ['进展', 'Forward movement.', '向前推进。', '不可数：make headway。', 'We made little headway.', '我们进展不大。', ['make headway'], ['progress'], 'noun', 'uncountable', '通用'],
  ], '', ['head', 'way'], '←head A1 + way（首成分），A1 继承；近义 progress 进步');

  W('healing', 'noun', '/ˈhiːlɪŋ/', 'B2', [], '愈合', 'Becoming healthy again.', [
    ['愈合', 'Becoming healthy again.', '重新变健康。', '不可数。', 'Sleep aids healing.', '睡眠助恢复。', [], ['medicine'], 'noun', 'uncountable', '健康'],
  ], '', ['heal'], '←heal B2 + -ing，B2 继承；近义 medicine 医药（治疗手段）');

  W('health care', 'noun', '/ˈhelθ keə(r)/', '', [], '医疗保健', 'Care for sick people.', [
    ['医疗保健', 'Care for sick people.', '照顾病人的服务。', '不可数，美式常用。', 'Health care costs rose fast.', '医疗费涨得快。', [], ['Medicare'], 'noun', 'uncountable', '健康'],
  ], '', ['Medicare'], 'health 健康 + care 照料；近义 Medicare 联邦医保。短语分级留空').phrase = true;

  W('health club', 'noun', '/ˈhelθ klʌb/', '', [], '健身俱乐部', 'A place to exercise and relax.', [
    ['健身俱乐部', 'A place to exercise and relax.', '锻炼放松的场所。', '可数。', 'She joined a health club.', '她加入了健身俱乐部。', [], ['gym'], 'noun', 'countable', '健康'],
  ], '', ['gym'], 'health 健康 + club 俱乐部；家族 gym 健身房。短语分级留空').phrase = true;

  W('healthcare', 'noun', '/ˈhelθkeə(r)/', 'A2', [], '医疗', 'Health services as a system.', [
    ['医疗', 'Health services as a system.', '成体系的卫生服务。', '不可数。', 'Healthcare needs more funds.', '医疗需要更多资金。', [], ['health'], 'noun', 'uncountable', '健康'],
  ], '', ['health', 'care'], '←health A2 + care（首成分），A2 继承；近义 health 健康（卫生义）');

  W('healthy', 'adjective', '/ˈhelθi/', 'A2', ['CET4'], '健康的', 'Well and strong.', [
    ['健康的', 'Well and strong.', '良好强壮的。', 'a healthy diet 健康饮食。', 'Eat healthy food daily.', '每天吃健康食物。', [], ['fit', 'normal', 'well', 'wholesome'], 'adjective', '定语/表语', '健康'],
  ], '', ['health', 'fit', 'well', 'wholesome'], '←health A2 + -y，A2 继承；家族 fit 健壮的、well 健康的、wholesome 有益健康的，近义 normal 正常的');

  W('hearing', 'noun', '/ˈhɪərɪŋ/', 'A1', ['CET4'], '听力；听证会', 'Hearing sounds, or a court meeting.', [
    ['听力；听证会', 'Hearing sounds, or a court meeting.', '听见声音，或法庭会议。', '可数或不可数。', 'His hearing is sharp.', '他听力敏锐。', [], ['ear', 'trial'], 'noun', 'uncountable/countable', '通用'],
  ], 'hearings', ['hear', 'ear', 'trial'], '←hear A1 + -ing，A1 继承；家族 ear 耳朵、trial 审讯');

  W('hearsay', 'noun', '/ˈhɪəseɪ/', 'A1', [], '传闻', 'Things heard from others.', [
    ['传闻', 'Things heard from others.', '从别人那儿听来的事。', '不可数：by hearsay 道听途说。', 'Do not trust hearsay.', '别信传闻。', ['by hearsay'], ['rumor'], 'noun', 'uncountable', '通用'],
  ], '', ['hear', 'say', 'rumor'], '←hear A1 + say（首成分），A1 继承；家族 rumor 谣言');

  W('heartbeat', 'noun', '/ˈhɑːtbiːt/', 'A1', [], '心跳', 'Beats of the heart.', [
    ['心跳', 'Beats of the heart.', '心脏的跳动。', '可数，常单数。', 'Her heartbeat quickened.', '她心跳加快。', [], ['pulse'], 'noun', 'countable', '健康'],
  ], 'heartbeats', ['heart', 'beat', 'pulse'], '←heart A1 + beat（首成分），A1 继承；家族 pulse 脉搏');

  W('hearth', 'noun', '/hɑːθ/', '', [], '壁炉边', 'The floor by a fireplace.', [
    ['壁炉边', 'The floor by a fireplace.', '壁炉前的地面。', '可数，文学常用。', 'They sat round the hearth.', '他们围坐在壁炉边。', [], ['fireplace'], 'noun', 'countable', '家居'],
  ], 'hearths', ['fireplace'], '古英语 heorth，无透明派生，留空；家族 fireplace 壁炉');

  W('heartless', 'adjective', '/ˈhɑːtləs/', 'A1', [], '无情的', 'Cruel and cold.', [
    ['无情的', 'Cruel and cold.', '残忍冷酷的。', 'a heartless remark 无情的话。', 'It was a heartless joke.', '那是个无情的玩笑。', [], ['cruel'], 'adjective', '定语', '性格'],
  ], '', ['heart', 'cruel'], '←heart A1 + -less（无…的），A1 继承；家族 cruel 残忍的');

  W('hearty', 'adjective', '/ˈhɑːti/', 'A1', ['CET4'], '热情的', 'Warm and strong.', [
    ['热情的', 'Warm and strong.', '温暖有力的。', 'a hearty welcome 热烈欢迎。', 'They gave a hearty laugh.', '他们开怀大笑。', [], ['warm'], 'adjective', '定语/表语', '情感'],
  ], '', ['heart'], '←heart A1 + -y，A1 继承；近义 warm 热情的');

  W('heated', 'adjective', '/ˈhiːtɪd/', 'A2', ['CET4'], '激烈的', 'Angry and excited.', [
    ['激烈的', 'Angry and excited.', '又气又激动。', 'a heated debate 激烈辩论。', 'The debate got heated.', '辩论激烈起来。', [], ['fierce', 'warm'], 'adjective', '定语/表语', '通用'],
  ], '', ['heat'], '←heat A2 + -ed，A2 继承；近义 fierce 猛烈的、warm 热烈的');

  W('heater', 'noun', '/ˈhiːtə(r)/', 'A2', [], '加热器', 'A device that warms.', [
    ['加热器', 'A device that warms.', '取暖的装置。', '可数。', 'Turn on the heater.', '打开加热器。', [], ['furnace', 'stove'], 'noun', 'countable', '家居'],
  ], 'heaters', ['heat', 'stove'], '←heat A2 + -er（表物），A2 继承；家族 stove 炉子，近义 furnace 熔炉');

  W('heavens', 'noun', '/ˈhevnz/', 'B1', [], '天空（复数）', 'The sky as heaven; plural of heaven.', [
    ['天空（复数）', 'The sky as heaven; plural of heaven.', '天国的天空；heaven 的复数。', '复数：thank heavens 谢天谢地。', 'Thank heavens you are safe.', '谢天谢地你没事。', ['thank heavens'], ['sky'], 'noun', 'countable', '宗教'],
  ], '', ['heaven', 'sky'], '←heaven B1 + -s，B1 继承；家族 sky 天空');

  W('heavily', 'adverb', '/ˈhevɪli/', 'A2', [], '重重地', 'With great weight or force.', [
    ['重重地', 'With great weight or force.', '分量重或用力大。', '副词：rain heavily 下大雨。', 'It rained heavily last night.', '昨夜雨很大。', ['rain heavily'], ['hard', 'heavy'], 'adverb', 'null', '通用'],
  ], '', ['heavy'], '←heavy A2 + -ly，A2 继承；近义 hard 猛烈地、heavy 沉重地');

  W('heed', 'verb/noun', '/hiːd/', '', [], '注意', 'To pay attention.', [
    ['注意', 'To pay attention.', '留心。', '及物或可数名词：pay heed。', 'Heed my warning.', '听我的警告。', ['pay heed'], ['listen'], 'verb/noun', 'null', '通用'],
  ], 'heeds~heeded~heeded~heeding', ['listen'], '古英语 hedan，无透明派生，留空；家族 listen 听从');

  W('heedless', 'adjective', '/ˈhiːdləs/', '', [], '不留心的', 'Not paying attention.', [
    ['不留心的', 'Not paying attention.', '不注意的。', 'heedless of danger 不顾危险。', 'Heedless drivers cause crashes.', '粗心的司机酿车祸。', ['heedless of'], ['reckless'], 'adjective', '定语', '性格'],
  ], '', ['heed'], '←heed（本批新词、无等级）+ -less，故仍留空；近义 reckless 鲁莽的');

  W('heighten', 'verb', '/ˈhaɪtn/', 'A2', ['CET4'], '提高', 'To make higher or stronger.', [
    ['提高', 'To make higher or stronger.', '使更高更强。', '及物或不及物。', 'Fear heightened senses.', '恐惧让人感官更敏锐。', [], ['enhance'], 'verb', '及物', '通用'],
  ], 'heightens~heightened~heightened~heightening', ['height'], '←height A2 + -en，A2 继承；近义 enhance 提高');

  W('helical', 'adjective', '/ˈhelɪkl/', '', [], '螺旋形的', 'Shaped like a screw.', [
    ['螺旋形的', 'Shaped like a screw.', '像螺丝的形状。', 'a helical stair 螺旋楼梯。', 'DNA has a helical form.', 'DNA 是螺旋形。', [], ['spiral'], 'adjective', '定语', '科学'],
  ], '', ['helix'], '←helix（本批新词、无等级）x→c，故仍留空；近义 spiral 螺旋的');

  W('helix', 'noun', '/ˈhiːlɪks/', '', [], '螺旋', 'A screw-like curve.', [
    ['螺旋', 'A screw-like curve.', '螺丝样的曲线。', '可数，复数 helixes。', 'The wire forms a helix.', '铁丝绕成螺旋。', [], ['spiral'], 'noun', 'countable', '科学'],
  ], 'helixes', ['spiral'], '希腊语 helix（螺旋）；家族 spiral 螺旋');

  W('helm', 'noun', '/helm/', '', [], '舵', 'A wheel steering a ship.', [
    ['舵', 'A wheel steering a ship.', '掌船方向的轮。', '可数：at the helm 掌舵。', 'She took the helm.', '她掌舵。', ['at the helm'], ['wheel'], 'noun', 'countable', '交通'],
  ], 'helms', [], '古英语 helma（舵柄）；近义 wheel 方向盘');

  W('helper', 'noun', '/ˈhelpə(r)/', 'A1', [], '帮手', 'One who helps.', [
    ['帮手', 'One who helps.', '帮忙的人。', '可数。', 'She hired two helpers.', '她雇了两个帮手。', [], ['volunteer'], 'noun', 'countable', '职业'],
  ], 'helpers', ['help', 'volunteer'], '←help A1 + -er（表人），A1 继承；家族 volunteer 志愿者');

  W('helpful', 'adjective', '/ˈhelpfl/', 'A1', ['CET4'], '有帮助的', 'Giving help.', [
    ['有帮助的', 'Giving help.', '提供帮助的。', 'be helpful to 对…有帮助。', 'The guide was helpful.', '向导帮了大忙。', ['helpful to'], ['forthcoming'], 'adjective', '定语/表语', '通用'],
  ], '', ['help'], '←help A1 + -ful，A1 继承；近义 forthcoming 乐助的');

  W('helping', 'noun', '/ˈhelpɪŋ/', 'A1', [], '一份食物', 'A plate of food served.', [
    ['一份食物', 'A plate of food served.', '端上的一盘食物。', '可数：a second helping 再来一份。', 'He took a big helping.', '他盛了一大盘。', ['a second helping'], ['portion'], 'noun', 'countable', '饮食'],
  ], '', ['help'], '←help A1 + -ing，A1 继承；近义 portion 一份');

  W('herder', 'noun', '/ˈhɜːdə(r)/', 'B2', [], '牧民', 'One tending farm animals.', [
    ['牧民', 'One tending farm animals.', '放养牲畜的人。', '可数。', 'Herders moved the sheep.', '牧民赶着羊群。', [], ['shepherd'], 'noun', 'countable', '职业'],
  ], 'herders', ['herd', 'shepherd'], '←herd B2 + -er（表人），B2 继承；家族 shepherd 牧羊人');

  W('hereafter', 'adverb/noun', '/ˌhɪərˈɑːftə(r)/', 'A1', [], '此后', 'From now on, or later life.', [
    ['此后', 'From now on, or later life.', '从今往后，或来世。', '副词或可数名词，正式。', 'Hereafter, be on time.', '今后请准时。', [], ['future', 'henceforth'], 'adverb/noun', 'null', '书面'],
  ], '', ['here', 'after', 'henceforth'], '←here A1 + after（首成分），A1 继承；家族 henceforth 今后，近义 future 未来');

  W('herewith', 'adverb', '/ˌhɪəˈwɪð/', 'A1', [], '随函', 'Along with this letter.', [
    ['随函', 'Along with this letter.', '随这封信一起。', '副词，公文用语。', 'I send the bill herewith.', '账单随函附上。', [], ['hereby'], 'adverb', 'null', '书面'],
  ], '', ['here', 'with', 'hereby'], '←here A1 + with（首成分），A1 继承；家族 hereby 特此');

  W('heroic', 'adjective', '/hɪˈrəʊɪk/', 'A2', ['CET4'], '英勇的', 'Very brave like a hero.', [
    ['英勇的', 'Very brave like a hero.', '像英雄一样勇敢。', 'a heroic rescue 英勇营救。', 'Firemen made heroic efforts.', '消防员英勇奋战。', [], ['epic'], 'adjective', '定语', '通用'],
  ], '', ['hero', 'epic'], '←hero A2 + -ic，A2 继承；家族 epic 史诗般的');

  W('hesitant', 'adjective', '/ˈhezɪtənt/', 'B2', ['CET4'], '犹豫的', 'Slow to act or speak.', [
    ['犹豫的', 'Slow to act or speak.', '行动说话慢吞吞。', 'be hesitant about 对…犹豫。', 'She felt hesitant about asking.', '她不好意思开口问。', ['hesitant about'], ['reluctant', 'tentative'], 'adjective', '定语/表语', '情感'],
  ], '', ['hesitate', 'reluctant', 'tentative'], '←hesitate B2 + -ant（e→ant），B2 继承；家族 reluctant 不情愿的、tentative 试探的');

  W('hey', 'interjection', '/heɪ/', '', [], '嘿', 'Used to call or greet.', [
    ['嘿', 'Used to call or greet.', '用来喊人或打招呼。', '感叹词，口语。', 'Hey, wait for me.', '嘿，等等我。', [], ['hi', 'you'], 'interjection', 'null', '口语'],
  ], '', ['hi'], '感叹词，无透明派生，留空；家族 hi 嗨，近义 you 你（hey you 喂）');

  W('hi-tech', 'adjective', '/ˌhaɪ ˈtek/', 'B2', [], '高科技的', 'Using new machines and tools.', [
    ['高科技的', 'Using new machines and tools.', '用新机器新工具的。', 'hi-tech firms 高科技公司。', 'It is a hi-tech lab.', '这是高科技实验室。', [], ['high-tech'], 'adjective', '定语', '科学'],
  ], '', ['high-tech'], '←high-tech B2（截短变体），B2 继承；家族 high-tech 高科技');

  W('hidden', 'adjective', '/ˈhɪdn/', 'A2', [], '隐藏的', 'Kept out of sight.', [
    ['隐藏的', 'Kept out of sight.', '不让人看见的。', '分词形容词：hidden costs 隐性成本。', 'A hidden camera filmed them.', '隐藏摄像机拍下了他们。', [], ['invisible', 'secret'], 'adjective', '定语', '通用'],
  ], '', ['hide', 'invisible', 'secret'], '←hide A2 的不规则分词（同 bidden），A2 继承；家族 invisible 看不见的、secret 秘密的');

  W('hideous', 'adjective', '/ˈhɪdiəs/', 'A2', [], '丑恶的', 'Very ugly or shocking.', [
    ['丑恶的', 'Very ugly or shocking.', '非常丑或骇人的。', 'a hideous crime 可怕的罪行。', 'The mask looks hideous.', '面具很吓人。', [], ['ugly'], 'adjective', '定语', '外貌'],
  ], '', ['hide'], '←hide A2（躲藏义转“见不得人”）+ -eous，A2 继承；近义 ugly 丑的');

  W('high point', 'noun', '/ˌhaɪ ˈpɔɪnt/', '', [], '高潮', 'The best moment.', [
    ['高潮', 'The best moment.', '最好的时刻。', '可数。', 'Dinner was the high point.', '晚餐是高潮。', [], ['highlight'], 'noun', 'countable', '通用'],
  ], '', ['highlight'], 'high 高 + point 点；近义 highlight 高光时刻。短语分级留空').phrase = true;

  W('high-end', 'adjective', '/ˌhaɪ ˈend/', 'A1', [], '高端的', 'Costly and fine.', [
    ['高端的', 'Costly and fine.', '贵而好的。', 'high-end phones 高端手机。', 'They sell high-end goods.', '他们卖高端货。', [], ['premium'], 'adjective', '定语', '商务'],
  ], '', ['high', 'end'], 'high 高 + end 端，取首成分 high A1 级；近义 premium 高级的');

  W('high-ranking', 'adjective', '/ˌhaɪ ˈræŋkɪŋ/', 'A1', [], '高级别的', 'High in rank.', [
    ['高级别的', 'High in rank.', '级别高的。', 'high-ranking officers 高级军官。', 'A high-ranking team came.', '高级别团队来了。', [], ['senior'], 'adjective', '定语', '职业'],
  ], '', ['high', 'rank'], 'high 高 + ranking，取首成分级 A1；近义 senior 高级的');

  W('high-rise', 'noun/adjective', '/ˈhaɪ raɪz/', 'A1', [], '高层建筑', 'A very tall building.', [
    ['高层建筑', 'A very tall building.', '很高的楼。', '可数或形容词。', 'They live in a high-rise.', '他们住高层。', [], ['skyscraper'], 'noun/adjective', 'null', '家居'],
  ], 'high-rises', ['skyscraper'], 'high 高 + rise 升，取首成分级 A1；家族 skyscraper 摩天楼');

  W('high-school', 'adjective/noun', '/ˈhaɪ skuːl/', 'A1', [], '高中的', 'About school for teens.', [
    ['高中的', 'About school for teens.', '青少年的学校。', '可数（学校）或形容词，美式常用。', 'She teaches high-school math.', '她教高中数学。', [], ['secondary'], 'adjective/noun', 'null', '教育'],
  ], 'high-schools', ['high', 'school'], 'high 高 + school 学校，取首成分级 A1；近义 secondary 中学的');

  W('higher', 'adjective/adverb', '/ˈhaɪə(r)/', 'A1', [], '更高的', 'More high; comparative of high.', [
    ['更高的', 'More high; comparative of high.', '更高；high 的比较级。', '形容词或副词比较级。', 'Prices climbed higher.', '价格涨得更高。', [], ['tertiary', 'upper'], 'adjective/adverb', 'null', '通用'],
  ], '', ['tertiary', 'upper'], 'high A1 的比较级，A1 继承；家族 tertiary 第三级的、upper 更高的');

  W('highest', 'adjective/adverb', '/ˈhaɪɪst/', 'A1', [], '最高的', 'Most high; superlative of high.', [
    ['最高的', 'Most high; superlative of high.', '最高；high 的最高级。', 'the highest mountain 最高的山。', 'It is the highest paid job.', '这是最高薪的工作。', ['the highest'], ['maximum', 'supreme', 'top'], 'adjective/adverb', 'null', '通用'],
  ], '', ['supreme'], 'high A1 的最高级，A1 继承；家族 supreme 最高的，近义 maximum 最大、top 顶端');

  W('hilarious', 'adjective', '/hɪˈleəriəs/', '', [], '极好笑的', 'Very funny.', [
    ['极好笑的', 'Very funny.', '非常滑稽。', 'a hilarious show 爆笑演出。', 'The film was hilarious.', '电影爆笑。', [], ['hysterical'], 'adjective', '定语/表语', '情感'],
  ], '', ['hysterical'], '拉丁 hilarus，无透明派生，留空；家族 hysterical 歇斯底里的（笑疯义）');

  W('hillock', 'noun', '/ˈhɪlək/', 'A1', [], '小山丘', 'A small hill.', [
    ['小山丘', 'A small hill.', '小山包。', '可数。', 'Sheep graze on the hillock.', '羊在小山包吃草。', [], ['hill'], 'noun', 'countable', '自然'],
  ], 'hillocks', ['hill'], '←hill A1 + -ock（表小），A1 继承；近义 hill 山丘');

  W('hind', 'adjective/noun', '/haɪnd/', '', [], '后面的', 'At the back.', [
    ['后面的', 'At the back.', '在后部的。', 'hind legs 后腿。', 'The horse hurt a hind leg.', '马伤了后腿。', ['hind legs'], ['rear'], 'adjective/noun', 'null', '通用'],
  ], '', [], '古英语 hind（后面的）——无透明派生；近义 rear 后部');

  W('hindrance', 'noun', '/ˈhɪndrəns/', '', ['CET4'], '障碍', 'A thing blocking progress.', [
    ['障碍', 'A thing blocking progress.', '挡路的东西。', '可数或不可数。', 'Rain was no hindrance.', '雨不算障碍。', [], ['obstacle'], 'noun', 'uncountable/countable', '通用'],
  ], 'hindrances', ['obstacle'], 'hinder 阻碍（hinder 不可见于 hindrance，同 entrance 模式），故留空；家族 obstacle 障碍');

  W('hindsight', 'noun', '/ˈhaɪndsaɪt/', '', [], '事后之明', 'Knowing after it happens.', [
    ['事后之明', 'Knowing after it happens.', '事后才明白。', '不可数：in hindsight 事后看。', 'In hindsight, we were wrong.', '事后看我们错了。', ['in hindsight'], ['retrospect'], 'noun', 'uncountable', '通用'],
  ], '', ['retrospect'], 'hind 后 + sight 视力——首成分 hind（本批新词、无等级），故留空；家族 retrospect 回顾');

  W('hinge on', 'verb', '/ˈhɪndʒ ɒn/', '', [], '取决于', 'To depend on something.', [
    ['取决于', 'To depend on something.', '由某事决定。', '不及物短语。', 'All hinges on the vote.', '一切取决于投票。', [], ['depend'], 'verb', '不及物', '通用'],
  ], '', [], 'hinge 铰链 + on 在…上；近义 depend 依赖。短语分级留空').phrase = true;

  W('hinterland', 'noun', '/ˈhɪntəlænd/', '', [], '内地', 'Land away from the coast.', [
    ['内地', 'Land away from the coast.', '远离海岸的地。', '可数或不可数。', 'Goods came from the hinterland.', '货物来自内地。', [], ['interior'], 'noun', 'uncountable/countable', '自然'],
  ], 'hinterlands', ['land'], '德语 hinter（后面）+ land——hinter 不在库，故留空；近义 interior 内地');

  W('hip-hop', 'noun', '/ˈhɪp hɒp/', 'B1', [], '嘻哈', 'Street music with rhythms.', [
    ['嘻哈', 'Street music with rhythms.', '带节奏的街头音乐。', '不可数。', 'He loves hip-hop.', '他爱嘻哈。', [], ['rap'], 'noun', 'uncountable', '文化'],
  ], '', ['hip', 'hop'], 'hip 时髦 + hop 跳，取首成分 hip B1 级；近义 rap 说唱');

  W('hire charge', 'noun', '/ˈhaɪə tʃɑːdʒ/', '', [], '租赁费', 'Money paid to rent things.', [
    ['租赁费', 'Money paid to rent things.', '租东西付的钱。', '可数，英式常用。', 'The hire charge is fair.', '租赁费公道。', [], ['rent'], 'noun', 'countable', '商务'],
  ], '', [], 'hire 租 + charge 收费；近义 rent 租金。短语分级留空').phrase = true;

  W('historic', 'adjective', '/hɪˈstɒrɪk/', 'A1', ['CET4'], '历史性的', 'Famous in history.', [
    ['历史性的', 'Famous in history.', '历史上出名的。', 'a historic win 历史性胜利。', 'It was a historic day.', '那是历史性的一天。', [], ['landmark'], 'adjective', '定语', '历史'],
  ], '', ['history'], '←history A1 + -ic（y→ic），A1 继承；近义 landmark 里程碑式的');

  W('hit back', 'verb', '/ˌhɪt ˈbæk/', '', [], '回击', 'To strike in return.', [
    ['回击', 'To strike in return.', '打回去。', '及物或不及物短语。', 'They hit back at critics.', '他们回击批评者。', [], ['retaliate'], 'verb', '及物', '通用'],
  ], '', ['retaliate'], 'hit 打 + back 回；家族 retaliate 报复。短语分级留空').phrase = true;

  W('hitch', 'verb/noun', '/hɪtʃ/', '', [], '搭便车；小故障', 'A free ride, or a small snag.', [
    ['搭便车；小故障', 'A free ride, or a small snag.', '免费搭车，或小毛病。', '可数或不及物动词：hitch a ride。', 'We hitched a ride south.', '我们搭车南下。', ['hitch a ride'], ['thumb'], 'verb/noun', 'null', '交通'],
  ], 'hitches~hitched~hitched~hitching', ['thumb'], '来源不明；家族 thumb 搭车（hitchhike 搭便车）');

  W('hither', 'adverb', '/ˈhɪðə(r)/', '', [], '到这里', 'To this place.', [
    ['到这里', 'To this place.', '到这个地方。', '副词，古语；hither and thither 到处。', 'Come hither, child.', '过来，孩子。', ['hither and thither'], ['here'], 'adverb', 'null', '书面'],
  ], '', [], '古英语 hider——与 hit 无关（brief ←hit 系切词 artifact），故留空；近义 here 这里');

  W('hitter', 'noun', '/ˈhɪtə(r)/', 'A1', [], '击球手', 'One who hits balls.', [
    ['击球手', 'One who hits balls.', '打球的人。', '可数。', 'He is a strong hitter.', '他是强棒。', [], ['batter'], 'noun', 'countable', '体育'],
  ], 'hitters', ['hit'], '←hit A1 + -ter（表人），A1 继承；近义 batter 击球手');

  W('hobble', 'verb/noun', '/ˈhɒbl/', '', [], '跛行', 'To walk with difficulty.', [
    ['跛行', 'To walk with difficulty.', '走路一瘸一拐。', '不及物或可数名词。', 'The old dog hobbled along.', '老狗一瘸一拐。', [], ['limp'], 'verb/noun', 'null', '健康'],
  ], 'hobbles~hobbled~hobbled~hobbling', ['limp'], '拟声语源；家族 limp 跛行');

})(typeof window !== 'undefined' ? window : globalThis);
