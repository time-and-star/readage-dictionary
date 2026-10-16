/* data/words/cet/author_h7.js · 手敲词条 H（七·前段）：hoe ~ hopefulness（含 6 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_h7.js 必须在 _cet_helper.js 之后加载');

  W('hoe', 'noun/verb', '/həʊ/', '', [], '锄头；锄地', 'A tool for weeds, or to use it.', [
    ['锄头；锄地', 'A tool for weeds, or to use it.', '除草的工具，或用它除草。', '可数或及物动词。', 'She hoed the garden.', '她给花园锄草。', [], ['weed'], 'noun/verb', 'null', '自然'],
  ], 'hoes~hoed~hoed~hoeing', [], '日耳曼语源；近义 weed 杂草（除草对象）');

  W('hog', 'noun/verb', '/hɒɡ/', '', [], '猪；独占', 'A pig, or to take all.', [
    ['猪；独占', 'A pig, or to take all.', '猪，或独占一切。', '可数或及物动词：hog the road 占道。', 'Do not hog the blanket.', '别独占毯子。', ['hog the road'], ['pig'], 'noun/verb', 'null', '通用'],
  ], 'hogs~hogged~hogged~hogging', ['pig'], '古英语 hogg；家族 pig 猪');

  W('hold back', 'verb', '/ˌhəʊld ˈbæk/', '', [], '忍住；保留', 'To stop oneself, or keep back.', [
    ['忍住；保留', 'To stop oneself, or keep back.', '忍住自己，或留下不说。', '及物或不及物短语。', 'She held back tears.', '她忍住眼泪。', [], ['refrain', 'repress', 'restrain', 'suppress'], 'verb', '及物', '情感'],
  ], '', ['restrain'], 'hold 握住 + back 回；家族 restrain 克制，近义 refrain 忍住、repress 压抑、suppress 镇压。短语分级留空').phrase = true;

  W('hold on', 'verb', '/ˌhəʊld ˈɒn/', '', [], '等一下；坚持', 'To wait, or keep grip.', [
    ['等一下；坚持', 'To wait, or keep grip.', '等一等，或抓牢。', '不及物短语。', 'Hold on, I am coming.', '等下，我就来。', [], ['wait'], 'verb', '不及物', '口语'],
  ], '', [], 'hold 握住 + on 继续；近义 wait 等。短语分级留空').phrase = true;

  W('hold-up', 'noun', '/ˈhəʊld ʌp/', 'A1', [], '抢劫；耽搁', 'A robbery, or a delay.', [
    ['抢劫；耽搁', 'A robbery, or a delay.', '抢劫，或耽搁。', '可数。', 'There was a hold-up on the road.', '路上有抢劫。', [], ['delay'], 'noun', 'countable', '社会'],
  ], 'hold-ups', ['hold', 'up', 'delay'], '←hold A1 + up，A1 继承；家族 delay 耽搁');

  W('holder', 'noun', '/ˈhəʊldə(r)/', 'A1', [], '持有者；容器', 'One holding, or a container.', [
    ['持有者；容器', 'One holding, or a container.', '拿着的人，或装东西的器具。', '可数。', 'He is a ticket holder.', '他是持票人。', [], ['wallet'], 'noun', 'countable', '通用'],
  ], 'holders', ['hold'], '←hold A1 + -er（表人/物），A1 继承；近义 wallet 钱包（证件夹义）');

  W('holdings', 'noun', '/ˈhəʊldɪŋz/', 'A1', [], '持有股（复数）', 'Shares owned; plural of holding.', [
    ['持有股（复数）', 'Shares owned; plural of holding.', '拥有的股份；holding 的复数。', '复数。', 'She sold her holdings.', '她卖了持股。', [], ['portfolio'], 'noun', 'countable', '商务'],
  ], '', ['hold', 'portfolio'], '←hold A1 + -ings，A1 继承；家族 portfolio 投资组合');

  W('holdover', 'noun', '/ˈhəʊldəʊvə(r)/', 'A1', [], '遗留物', 'Something kept from before.', [
    ['遗留物', 'Something kept from before.', '以前留下的东西。', '可数。', 'The rule is a holdover.', '这规定是遗留物。', [], ['relic'], 'noun', 'countable', '通用'],
  ], 'holdovers', ['hold', 'over'], '←hold A1 + over，A1 继承；近义 relic 遗物');

  W('holy person', 'noun', '/ˈhəʊli ˈpɜːsn/', '', [], '圣人', 'A very good religious person.', [
    ['圣人', 'A very good religious person.', '非常善良的信教的人。', '可数。', 'They called him a holy person.', '人们称他圣人。', [], ['saint'], 'noun', 'countable', '宗教'],
  ], '', ['saint'], 'holy 神圣的 + person 人；家族 saint 圣人。短语分级留空').phrase = true;

  W('holy place', 'noun', '/ˈhəʊli ˈpleɪs/', '', [], '圣地', 'A place for worship.', [
    ['圣地', 'A place for worship.', '礼拜的地方。', '可数。', 'They guard the holy place.', '他们守护圣地。', [], ['sanctuary'], 'noun', 'countable', '宗教'],
  ], '', [], 'holy 神圣的 + place 地方；近义 sanctuary 圣所。短语分级留空').phrase = true;

  W('homage', 'noun', '/ˈhɒmɪdʒ/', '', [], '敬意', 'Deep respect shown.', [
    ['敬意', 'Deep respect shown.', '表示的深深敬意。', '不可数：pay homage 致敬。', 'They paid homage to heroes.', '他们向英雄致敬。', ['pay homage'], ['tribute'], 'noun', 'uncountable', '文化'],
  ], '', ['tribute'], '古法语 homage；家族 tribute 颂扬');

  W('home guard', 'noun', '/ˌhəʊm ˈɡɑːd/', '', [], '国民警卫队', 'Volunteers guarding home land.', [
    ['国民警卫队', 'Volunteers guarding home land.', '守卫本土的志愿者。', '可数，英式历史用语。', 'He joined the home guard.', '他加入了国民警卫队。', [], ['militia'], 'noun', 'countable', '军事'],
  ], '', [], 'home 家乡 + guard 警卫；近义 militia 民兵。短语分级留空').phrase = true;

  W('home loan', 'noun', '/ˌhəʊm ˈləʊn/', '', [], '房贷', 'Money lent to buy a house.', [
    ['房贷', 'Money lent to buy a house.', '借来买房的钱。', '可数。', 'They applied for a home loan.', '他们申请了房贷。', [], ['mortgage'], 'noun', 'countable', '商务'],
  ], '', [], 'home 房子 + loan 贷款；近义 mortgage 按揭。短语分级留空').phrase = true;

  W('homeless', 'adjective', '/ˈhəʊmləs/', 'A1', ['CET4'], '无家可归的', 'With no home.', [
    ['无家可归的', 'With no home.', '没有家的。', 'the homeless 无家可归者。', 'Help the homeless people.', '帮助无家可归的人。', ['the homeless'], ['stray'], 'adjective', '定语/表语', '社会'],
  ], '', ['home'], '←home A1 + -less（无…的），A1 继承；近义 stray 流浪的');

  W('homemaker', 'noun', '/ˈhəʊmmeɪkə(r)/', 'A1', [], '持家者', 'One running a home.', [
    ['持家者', 'One running a home.', '操持家庭的人。', '可数。', 'She is a proud homemaker.', '她是自豪的持家人。', [], ['housewife'], 'noun', 'countable', '家庭'],
  ], 'homemakers', ['home', 'make', 'housewife'], '←home A1 + maker（首成分），A1 继承；家族 housewife 家庭主妇');

  W('homepage', 'noun', '/ˈhəʊmpeɪdʒ/', 'A1', [], '主页', 'The first page of a site.', [
    ['主页', 'The first page of a site.', '网站的第一页。', '可数。', 'Set it as your homepage.', '设它为主页。', [], ['website'], 'noun', 'countable', '媒体'],
  ], 'homepages', ['home', 'page', 'website'], '←home A1 + page（首成分），A1 继承；家族 website 网站');

  W('homewards', 'adverb', '/ˈhəʊmwədz/', 'A1', [], '回家', 'Towards home.', [
    ['回家', 'Towards home.', '朝家里。', '副词，亦拼 homeward。', 'They headed homewards.', '他们往家走。', [], ['home'], 'adverb', 'null', '通用'],
  ], '', ['home'], '←home A1 + -wards，A1 继承；近义 home 家（home 副词义）');

  W('homicide', 'noun', '/ˈhɒmɪsaɪd/', '', [], '杀人', 'Killing a person.', [
    ['杀人', 'Killing a person.', '杀死人。', '可数或不可数，法律用语。', 'He was charged with homicide.', '他被控杀人。', [], ['murder'], 'noun', 'uncountable/countable', '法律'],
  ], 'homicides', ['murder'], '拉丁 homo（人）+ -cide（杀）——词根不可见，故留空；家族 murder 谋杀');

  W('honesty', 'noun', '/ˈɒnəsti/', 'A2', ['CET4'], '诚实', 'Telling the truth.', [
    ['诚实', 'Telling the truth.', '说真话。', '不可数：in all honesty 说实在。', 'In all honesty, I forgot.', '说实在，我忘了。', ['in all honesty'], ['integrity'], 'noun', 'uncountable', '性格'],
  ], '', ['honest', 'integrity'], '←honest A2 + -y，A2 继承；家族 integrity 正直');

  W('honeyed', 'adjective', '/ˈhʌnid/', 'A2', [], '甜美的', 'Sweet like honey.', [
    ['甜美的', 'Sweet like honey.', '像蜜一样甜。', 'honeyed words 甜言蜜语。', 'She spoke in honeyed tones.', '她用甜美的语调说话。', [], ['sweet'], 'adjective', '定语', '情感'],
  ], '', ['honey'], '←honey A2 + -ed，A2 继承；近义 sweet 甜的');

  W('honk', 'verb/noun', '/hɒŋk/', '', [], '按喇叭', 'A car horn sound.', [
    ['按喇叭', 'A car horn sound.', '汽车喇叭声。', '可数或不及物动词。', 'Taxis honked in traffic.', '出租车在车流中按喇叭。', [], ['horn'], 'verb/noun', 'null', '交通'],
  ], 'honks~honked~honked~honking', [], '拟声语源；近义 horn 喇叭');

  W('honorarium', 'noun', '/ˌɒnəˈreəriəm/', 'B1', [], '酬金', 'Money paid for a service.', [
    ['酬金', 'Money paid for a service.', '为服务付的钱。', '可数，正式。', 'She got an honorarium.', '她拿到一笔酬金。', [], ['fee'], 'noun', 'countable', '商务'],
  ], 'honorariums', ['honor'], '←honor B1 + -arium，B1 继承；近义 fee 费用');

  W('honourable', 'adjective', '/ˈɒnərəbl/', '', [], ' honorable的；正直的', 'Right and deserving respect.', [
    ['体面的；正直的', 'Right and deserving respect.', '正当应受尊敬的。', 'honourable members 尊敬的议员。', 'He is an honourable man.', '他是正直的人。', [], ['noble', 'upright', 'worthy'], 'adjective', '定语/表语', '性格'],
  ], '', ['noble'], 'honour（变体，词条为 honor B1）+ -able——honour 非词目，故留空；家族 noble 高尚的，近义 upright 正直的、worthy 值得的');

  W('hoot', 'verb/noun', '/huːt/', '', [], '鸣笛；嘲笑', 'A horn sound, or to laugh at.', [
    ['鸣笛；嘲笑', 'A horn sound, or to laugh at.', '喇叭声，或嘲笑。', '可数或不及物动词。', 'Owls hoot at night.', '猫头鹰夜里叫。', [], ['whistle'], 'verb/noun', 'null', '通用'],
  ], 'hoots~hooted~hooted~hooting', [], '拟声语源；近义 whistle 吹口哨');

  W('hooter', 'noun', '/ˈhuːtə(r)/', '', [], '喇叭；鼻子', 'A horn, or a nose in slang.', [
    ['喇叭；鼻子', 'A horn, or a nose in slang.', '喇叭，或俚语的鼻子。', '可数，口语。', 'The bus driver hit the hooter.', '司机按了喇叭。', [], ['horn'], 'noun', 'countable', '口语'],
  ], 'hooters', ['hoot'], '←hoot（本批新词、无等级）+ -er，故仍留空；近义 horn 喇叭');

  W('hoover', 'verb/noun', '/ˈhuːvə(r)/', '', [], '吸尘', 'To clean with a vacuum.', [
    ['吸尘', 'To clean with a vacuum.', '用吸尘器打扫。', '可数或及物动词，英式常用。', 'Hoover the carpet weekly.', '每周吸一次地毯。', [], ['vacuum'], 'verb/noun', 'null', '家居'],
  ], 'hoovers~hoovered~hoovered~hoovering', [], 'Hoover 商标动词化；近义 vacuum 吸尘。分级留空');

  W('hopefulness', 'noun', '/ˈhəʊpflnəs/', '', [], ' hopeful；抱有希望', 'Feeling full of hope.', [
    ['充满希望', 'Feeling full of hope.', '满怀希望。', '不可数。', 'Hopefulness filled the room.', '满屋都是希望。', [], ['optimism'], 'noun', 'uncountable', '情感'],
  ], '', ['hopeful'], 'hopeful（不在库）+ -ness——词根不可见，故留空；近义 optimism 乐观');

  W('hopelessness', 'noun', '/ˈhəʊpləsnəs/', '', [], '绝望', 'Feeling no hope.', [
    ['绝望', 'Feeling no hope.', '毫无希望。', '不可数。', 'Hopelessness grew daily.', '绝望与日俱增。', [], ['despair'], 'noun', 'uncountable', '情感'],
  ], '', ['despair'], 'hopeless（不在库）+ -ness——词根不可见，故留空；家族 despair 绝望');

  W('horizontal', 'adjective', '/ˌhɒrɪˈzɒntl/', 'B2', ['CET4'], '水平的', 'Flat and level.', [
    ['水平的', 'Flat and level.', '平平的。', 'horizontal lines 水平线。', 'Draw a horizontal line.', '画条水平线。', [], [], 'adjective', '定语', '科学'],
  ], '', ['horizon', 'vertical'], '←horizon B2 + -tal，B2 继承；家族 vertical 垂直的');

  W('horrible', 'adjective', '/ˈhɒrəbl/', 'B1', ['CET4'], '可怕的', 'Causing fear or dislike.', [
    ['可怕的', 'Causing fear or dislike.', '引起害怕或反感。', 'a horrible smell 难闻的气味。', 'What horrible weather.', '多糟的天气。', [], ['nasty', 'terrible'], 'adjective', '定语/表语', '通用'],
  ], '', ['horror', 'terrible'], '←horror B1 + -ible（or→ible，同 terrible），B1 继承；家族 terrible 可怕的，近义 nasty 恶心的');

  W('horrify', 'verb', '/ˈhɒrɪfaɪ/', 'B1', ['CET4'], '惊骇', 'To shock badly.', [
    ['惊骇', 'To shock badly.', '严重惊吓。', '及物：be horrified。', 'The news horrified us.', '消息把我们惊呆了。', [], ['appal'], 'verb', '及物', '情感'],
  ], 'horrifies~horrified~horrified~horrifying', ['horror'], '←horror B1 + -ify（or→ify），B1 继承；近义 appal 惊骇');

  W('horseman', 'noun', '/ˈhɔːsmən/', 'A2', [], '骑手', 'A man riding a horse.', [
    ['骑手', 'A man riding a horse.', '骑马的男人。', '可数，复数 horsemen。', 'The horseman rode off.', '骑手骑走了。', [], ['jockey'], 'noun', 'countable', '职业'],
  ], 'horsemen', ['horse', 'man'], '←horse A2 + man（首成分），A2 继承；近义 jockey 骑师');

  W('hostel', 'noun', '/ˈhɒstl/', 'B1', [], '招待所', 'A cheap place to stay.', [
    ['招待所', 'A cheap place to stay.', '便宜的住处。', '可数：youth hostel 青年旅社。', 'We stayed in a hostel.', '我们住招待所。', ['youth hostel'], ['shelter'], 'noun', 'countable', '商务'],
  ], 'hostels', ['host'], '←host B1 + -el，B1 继承；近义 shelter 收容所');

  W('hostess', 'noun', '/həʊˈstes/', 'B1', ['CET4'], '女主人', 'A woman hosting guests.', [
    ['女主人', 'A woman hosting guests.', '招待客人的女人。', '可数。', 'The hostess served tea.', '女主人上茶。', [], ['host'], 'noun', 'countable', '家庭'],
  ], 'hostesses', ['host'], '←host B1 + -ess（表女性），B1 继承；近义 host 主人');

  W('hostility', 'noun', '/hɒˈstɪləti/', 'C1', ['CET4'], '敌意', 'Angry opposition.', [
    ['敌意', 'Angry opposition.', '愤怒的反对。', '可数或不可数。', 'Old hostility remains.', '旧敌意还在。', [], ['antagonism'], 'noun', 'uncountable/countable', '社会'],
  ], 'hostilities', ['hostile'], '←hostile C1 + -ity，C1 继承；近义 antagonism 敌对');

  W('hot air', 'noun', '/ˌhɒt ˈeə(r)/', '', [], '空话', 'Empty boastful talk.', [
    ['空话', 'Empty boastful talk.', '空洞自夸的话。', '不可数：full of hot air 满嘴空话。', 'His speech was hot air.', '他讲话全是空话。', ['full of hot air'], ['rhetoric'], 'noun', 'uncountable', '口语'],
  ], '', ['rhetoric'], 'hot 热 + air 空气（空话）；近义 rhetoric 空话。短语分级留空').phrase = true;

  W('hotbed', 'noun', '/ˈhɒtbed/', 'A1', [], '温床', 'A place where things grow.', [
    ['温床', 'A place where things grow.', '东西滋生的地方。', '可数，比喻义常用。', 'The city is a hotbed of art.', '这城是艺术温床。', [], ['hive'], 'noun', 'countable', '社会'],
  ], 'hotbeds', ['hot', 'bed'], '←hot A1 + bed（首成分），A1 继承；近义 hive 滋生地');

  W('hothouse', 'noun', '/ˈhɒthaʊs/', 'A1', [], '温室', 'A warm glass house for plants.', [
    ['温室', 'A warm glass house for plants.', '种植物的暖玻璃房。', '可数。', 'Orchids grow in hothouses.', '兰花种温室里。', [], ['greenhouse'], 'noun', 'countable', '自然'],
  ], 'hothouses', ['hot', 'house', 'greenhouse'], '←hot A1 + house（首成分），A1 继承；家族 greenhouse 温室');

  W('hours', 'noun', '/ˈaʊəz/', 'A1', [], '小时（复数）', 'Sixty minutes; plural of hour.', [
    ['小时（复数）', 'Sixty minutes; plural of hour.', '六十分钟；hour 的复数。', '复数：office hours 办公时间。', 'The shop keeps long hours.', '这店营业时间长。', ['office hours'], ['time'], 'noun', 'countable', '通用'],
  ], '', ['hour'], '←hour A1 + -s，A1 继承；近义 time 时间');

  W('housing', 'noun', '/ˈhaʊzɪŋ/', 'A1', ['CET4'], '住房', 'Houses to live in.', [
    ['住房', 'Houses to live in.', '住的房子。', '不可数：affordable housing。', 'Housing costs keep rising.', '房价一直涨。', [], ['accommodation'], 'noun', 'uncountable', '社会'],
  ], '', ['house'], '←house A1 + -ing，A1 继承；近义 accommodation 住处');

  W('how much', 'adverb', '/ˌhaʊ ˈmʌtʃ/', '', [], '多少', 'Asking the amount or price.', [
    ['多少', 'Asking the amount or price.', '问数量或价格。', '疑问短语：how much is it。', 'How much is the ticket?', '票多少钱。', [], ['what'], 'adverb', 'null', '通用'],
  ], '', ['what'], 'how 怎样 + much 多少；近义 what 什么（what 义）。短语分级留空').phrase = true;

  W('how on earth', 'adverb', '/ˌhaʊ ɒn ˈɜːθ/', '', [], '究竟', 'Asking with surprise.', [
    ['究竟', 'Asking with surprise.', '惊讶地问。', '疑问短语，表惊讶。', 'How on earth did it happen?', '这究竟怎么发生的。', [], ['however'], 'adverb', 'null', '口语'],
  ], '', ['however'], 'how 怎样 + on earth 究竟；近义 however 到底。短语分级留空').phrase = true;

  W('hub', 'noun', '/hʌb/', '', [], '中心', 'The core of activities.', [
    ['中心', 'The core of activities.', '活动的核心。', '可数：a transport hub。', 'The city is a trade hub.', '这城是贸易中心。', ['transport hub'], ['junction'], 'noun', 'countable', '商务'],
  ], 'hubs', [], '来源不明；近义 junction 枢纽');

  W('human resources', 'noun', '/ˌhjuːmən rɪˈzɔːsɪz/', '', [], '人力资源', 'Workers of a firm.', [
    ['人力资源', 'Workers of a firm.', '公司的员工。', '复数：HR 部门。', 'Human resources hired staff.', '人事部招了人。', [], ['personnel'], 'noun', 'countable', '职业'],
  ], '', ['personnel'], 'human 人 + resources 资源；近义 personnel 人事。短语分级留空').phrase = true;

  W('humanity', 'noun', '/hjuːˈmænəti/', 'A2', ['CET4'], '人类；人道', 'All people, or kindness.', [
    ['人类；人道', 'All people, or kindness.', '所有人，或仁慈。', '不可数。', 'The doctors showed humanity.', '医生有人道精神。', [], ['man', 'mankind'], 'noun', 'uncountable', '社会'],
  ], '', ['human', 'mankind'], '←human A2 + -ity，A2 继承；家族 mankind 人类，近义 man 人');

  W('humankind', 'noun', '/ˌhjuːmənˈkaɪnd/', 'A2', [], '人类', 'All humans together.', [
    ['人类；人道', 'All humans together.', '所有人一起。', '不可数，正式。', 'War threatens humankind.', '战争威胁人类。', [], ['man', 'mankind'], 'noun', 'uncountable', '社会'],
  ], '', ['human', 'kind', 'mankind'], '←human A2 + kind（首成分），A2 继承；家族 mankind 人类，近义 man 人');

  W('humans', 'noun', '/ˈhjuːmənz/', 'A2', [], '人类（复数）', 'People; plural of human.', [
    ['人类（复数）', 'People; plural of human.', '人们；human 的复数。', '复数。', 'Humans need water.', '人类需要水。', [], ['people'], 'noun', 'countable', '社会'],
  ], '', ['human'], '←human A2 + -s，A2 继承；近义 people 人们');

  W('humorist', 'noun', '/ˈhjuːmərɪst/', 'B2', [], '幽默作家', 'One writing funny works.', [
    ['幽默作家', 'One writing funny works.', '写滑稽作品的人。', '可数。', 'The humorist told jokes.', '幽默作家讲笑话。', [], ['wit'], 'noun', 'countable', '职业'],
  ], 'humorists', ['humor'], '←humor B2 + -ist，B2 继承；近义 wit 妙人');

  W('hunch', 'noun/verb', '/hʌntʃ/', '', [], '预感；弯腰', 'A feeling, or to bend over.', [
    ['预感；弯腰', 'A feeling, or to bend over.', '一种感觉，或弯下腰。', '可数或不及物动词：have a hunch。', 'I have a hunch it rains.', '我预感要下雨。', ['have a hunch'], ['instinct', 'intuition', 'stoop'], 'noun/verb', 'null', '通用'],
  ], 'hunches~hunched~hunched~hunching', ['intuition'], '来源不明；家族 intuition 直觉，近义 instinct 本能、stoop 弯腰');

  W('hunter', 'noun', '/ˈhʌntə(r)/', 'A2', ['CET4'], '猎人', 'One hunting animals.', [
    ['猎人', 'One hunting animals.', '打猎的人。', '可数。', 'The hunter tracked deer.', '猎人追踪鹿。', [], ['predator'], 'noun', 'countable', '职业'],
  ], 'hunters', ['hunt', 'predator'], '←hunt A2 + -er（表人），A2 继承；家族 predator 捕食者');

  W('husk', 'noun/verb', '/hʌsk/', '', [], '外壳；去壳', 'Dry cover of seeds.', [
    ['外壳；去壳', 'Dry cover of seeds.', '种子的干皮。', '可数或及物动词。', 'Peel the husk off corn.', '剥掉玉米皮。', [], ['shell'], 'noun/verb', 'null', '饮食'],
  ], 'husks~husked~husked~husking', [], '低地德语 huske；近义 shell 壳');

  W('hymn', 'noun', '/hɪm/', '', [], '赞美诗', 'A religious song.', [
    ['赞美诗', 'A religious song.', '宗教歌曲。', '可数。', 'They sang a hymn.', '他们唱赞美诗。', [], ['chant'], 'noun', 'countable', '宗教'],
  ], 'hymns', ['chant'], '希腊语 hymnos；家族 chant 圣歌');

  W('hyperlink', 'noun/verb', '/ˈhaɪpəlɪŋk/', '', [], '超链接', 'A link to another page.', [
    ['超链接', 'A link to another page.', '跳到别页的链接。', '可数或及物动词：click the hyperlink。', 'Click the hyperlink below.', '点下面的超链接。', ['click the hyperlink'], ['link'], 'noun/verb', 'null', '媒体'],
  ], 'hyperlinks~hyperlinked~hyperlinked~hyperlinking', ['link'], 'hyper- 超 + link 链接——hyper- 非透明前缀且不在库，故留空；近义 link 链接');

})(typeof window !== 'undefined' ? window : globalThis);
