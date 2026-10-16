/* data/words/cet/author_l3.js · 手敲词条 L（三·引用缺口批）：labour force ~ law enforcement（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批仅 later = CET4）。
 * 短语 4 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_l3.js 必须在 _cet_helper.js 之后加载');

  W('labour force', 'noun', '/ˌlæbə ˈfɔːs/', '', [], '劳动力', 'All the people who are able to work.', [
    ['劳动力', 'All the people who are able to work.', '一个国家或地区所有能工作的人。', '不可数；与 workforce 同义，英式常拼 labour。', 'The labour force has grown.', '劳动力扩大了。', [], ['workforce'], 'noun', 'uncountable', '职业'],
  ], '', [], 'labour + force；近义 workforce 劳动力。短语分级留空').phrase = true;

  W('labourer', 'noun', '/ˈleɪbərə/', 'B2', [], '体力劳动者', 'A person who does physical work.', [
    ['体力劳动者', 'A person who does physical work for money.', '靠出卖体力干活的人。', '可数；英式拼 labourer，美式 laborer。', 'My grandfather was a farm labourer.', '我的祖父是个农场工。', [], ['hand'], 'noun', 'countable', '职业'],
  ], 'labourers',['labour'], 'labour（= labor B2 已登记变体）+ -er（施事后缀），B2 继承；近义 hand 手；（a good hand 熟手）');

  W('lacking', 'adjective', '/ˈlækɪŋ/', 'B1', [], '缺乏的', 'Not having enough of something.', [
    ['缺乏的', 'Not having enough of something.', '某方面不够、有所欠缺。', '表语：be lacking in。', 'The plan is lacking in detail.', '这个方案缺少细节。', ['be lacking in'], ['deficient', 'missing', 'short', 'without'], 'adjective', '表语', '通用'],
  ], '',['deficient', 'without', 'lack'], '←lack B1 + -ing（透明后缀），B1 继承；近义 missing 缺少的、short 不足的');

  W('lacrosse', 'noun', '/ləˈkrɒs/', '', [], '长曲棍球', 'A game played with a long netted stick.', [
    ['长曲棍球', 'A game played with a long netted stick.', '用带网兜的长球棍争球入门的运动。', '不可数。', 'She plays lacrosse at school.', '她在学校打长曲棍球。', [], [], 'noun', 'uncountable', '体育'],
  ], '', ['hockey'], '法语 la crosse（球棍）——无库内派生根，故留空；家族 hockey 曲棍球（器材与打法相近）');

  W('ladle', 'noun/verb', '/ˈleɪdl/', '', [], '长柄勺；舀取', 'A long-handled spoon, or to serve with it.', [
    ['长柄勺；舀取', 'A long-handled spoon for serving soup, or to scoop with it.', '盛汤用的长柄勺；也指用勺舀。', '可数；动词义为用勺舀取。', 'She ladled the soup into bowls.', '她用勺把汤盛进碗里。', [], ['spoon'], 'noun/verb', 'null', '饮食'],
  ], 'ladles~ladled~ladled~ladling', ['spoon'], '中古英语 ladel——无库内可见词根（spoon 为近义非词根），故留空；近义 spoon 勺子');

  W('laid off', 'verb', '/leɪd ɒf/', '', [], '被裁员', 'To stop employing someone, or to be dismissed.', [
    ['被裁员', 'To stop employing someone, or to lose a job this way.', '资方裁减人员；也指被裁。', '短语动词，兼作表语形容词。', 'He was laid off last week.', '他上周被裁员了。', ['be laid off'], ['redundant'], 'verb/adjective', 'null', '职业'],
  ], '', [], 'lay + off；近义 redundant 被裁的（因冗余）。短语分级留空').phrase = true;

  W('laid-back', 'adjective', '/ˈlaɪdbæk/', '', [], '悠闲的；放松的', 'Calm and relaxed.', [
    ['悠闲的；放松的', 'Calm and relaxed, without much hurry.', '不慌不忙、随和放松的。', '定语或表语。', 'He has a laid-back attitude.', '他态度很随和。', [], ['easy-going'], 'adjective', '定语/表语', '性格'],
  ], '', ['easy-going'], 'laid + back 复合——首成分 laid 非词目（lay 的过去分词形），无级可继，故留空；近义 easy-going 悠闲的');

  W('lair', 'noun', '/leə/', '', [], '兽穴', 'A place where a wild animal rests.', [
    ['兽穴', 'A place where a wild animal rests or hides.', '野兽休息或藏身之处。', '可数。', 'The lion returned to its lair.', '狮子回到了它的洞穴。', [], ['nest'], 'noun', 'countable', '自然'],
  ], 'lairs', [], '古英语 leger（躺卧处）——无库内派生根，故留空；近义 nest 巢');

  W('laity', 'noun', '/ˈleɪəti/', 'B1', [], '平信徒；外行', 'Ordinary people who are not members of a profession.', [
    ['平信徒；外行', 'The members of a church who are not clergy, or ordinary people outside a field.', '教会中的普通信徒；也泛指某领域的外行。', '常与 the 连用，不可数。', 'The sermon was aimed at the laity.', '这篇布道是讲给平信徒听的。', ['the laity'], ['layman'], 'noun', 'uncountable', '宗教'],
  ], '',['lay'], 'lay B1（世俗的、非神职的，形容词义在库）+ -ity（透明后缀），B1 继承（同 ability / activity / intensity 模式）；近义 layman 平信徒、外行');

  W('lament', 'noun/verb', '/ˈlæmənt/', '', [], '哀悼；哀叹', 'To express deep sorrow, or an expression of it.', [
    ['哀悼；哀叹', 'To express deep sorrow about something, or a song or speech that does so.', '为某事深表悲痛；也指哀歌、哀辞。', '可数或不可数；较正式。', 'The song laments the war.', '这首歌哀叹那场战争。', ['a lament for'], ['deplore', 'mourn', 'regret', 'weep'], 'noun/verb', 'null', '情感'],
  ], 'laments~lamented~lamented~lamenting', ['deplore', 'mourn'], '拉丁 lamentum——无库内派生根，故留空；家族 deplore 哀叹、mourn 哀悼，近义 regret 惋惜、weep 哭泣');

  W('lampoon', 'noun/verb', '/læmˈpuːn/', '', [], '讽刺；抨击', 'A sharp public mockery, or to mock sharply.', [
    ['讽刺；抨击', 'A written or filmed attack that mocks someone, or to attack in this way.', '以作品尖刻嘲讽；也指讽刺作品。', '可数；较正式。', 'The cartoon lampooned the mayor.', '这幅漫画抨击了市长。', [], ['satire'], 'noun/verb', 'null', '媒体'],
  ], 'lampoons~lampooned~lampooned~lampooning', [], '法语 lampon——虽含 lamp（A1 灯）但非派生（切词假象），故留空；近义 satire 讽刺（作品）');

  W('lance', 'noun/verb', '/lɑːns/', '', [], '长矛；刺穿', 'A long spear, or to pierce with it.', [
    ['长矛；刺穿', 'A long spear used by knights, or to cut open with a sharp tool.', '骑士使用的长矛；也指（医）刺开。', '可数；动词较专业。', 'The knight leveled his lance.', '骑士把长矛放平。', [], ['spear'], 'noun/verb', 'null', '军事'],
  ], 'lances~lanced~lanced~lancing', ['spear'], '拉丁 lancea——无库内派生根，故留空；家族 spear 矛、标枪');

  W('landfill', 'noun', '/ˈlændfɪl/', 'A2', [], '垃圾填埋场', 'A place where waste is buried.', [
    ['垃圾填埋场', 'A site where waste is buried under the ground.', '把垃圾埋入地下的场所。', '可数。', 'The waste goes to the landfill.', '这些垃圾被运去填埋场。', [], ['dump'], 'noun', 'countable', '环境'],
  ], 'landfills', ['dump'], 'land A2 土地 + fill A1 填——首成分 land 在库，A2 继承；近义 dump 垃圾场');

  W('landmass', 'noun', '/ˈlændmæs/', 'A2', [], '大陆块', 'A very large area of land.', [
    ['大陆块', 'A very large continuous area of land.', '连成一片的巨大陆地。', '可数。', 'Asia is the largest landmass.', '亚洲是最大的陆块。', [], ['mainland'], 'noun', 'countable', '地理'],
  ], 'landmasses', ['mainland'], 'land A2 土地 + mass B1 块——首成分 land 在库，A2 继承；近义 mainland 大陆');

  W('languish', 'verb', '/ˈlæŋɡwɪʃ/', '', [], '变得虚弱；停滞', 'To grow weak or fail to progress.', [
    ['变得虚弱；停滞', 'To grow weak, or to fail to make progress.', '因缺少照料而衰弱，或长期停滞不前。', '不及物。', 'The plants languished in the heat.', '植物在高温下枯萎了。', ['languish in'], ['stagnate'], 'verb', '不及物', '通用'],
  ], 'languishes~languished~languished~languishing', ['stagnate'], '拉丁 languēre——无库内派生根，故留空；家族 stagnate 停滞、不发展');

  W('lantern', 'noun', '/ˈlæntən/', '', [], '灯笼', 'A lamp in a case that you can carry.', [
    ['灯笼', 'A lamp protected by a case, often carried outdoors.', '有罩可提的灯，多用于户外。', '可数。', 'They hung a lantern by the door.', '他们在门边挂了一盏灯笼。', ['a paper lantern'], ['lamp', 'pumpkin'], 'noun', 'countable', '家居'],
  ], 'lanterns', ['lamp'], '古英语 lantērne——与 lamp 形近但非派生（切词假象），故留空；近义 lamp 灯、pumpkin 南瓜（南瓜灯）');

  W('lapse', 'noun/verb', '/læps/', '', [], '失效；失误', 'The end of validity, or a small error.', [
    ['失效；失误', 'The end of a period when something is valid, or a small mistake caused by carelessness.', '（许可证、期限）失效；也指一时疏忽。', '可数；动词不及物：lapse into 陷入。', 'His licence will lapse in June.', '他的执照六月失效。', ['a lapse of memory'], ['expire', 'oversight'], 'noun/verb', 'null', '法律'],
  ], 'lapses~lapsed~lapsed~lapsing', ['expire'], '拉丁 lapsus——无库内派生根，故留空；家族 expire 到期失效，近义 oversight 疏忽');

  W('larboard', 'noun', '/ˈlɑːbəd/', '', [], '左舷', 'The left side of a ship.', [
    ['左舷', 'The left side of a ship when you are facing forward.', '船朝前看时的左侧。', '可数，古旧航海用语，现通用 port。', 'The ship listed to larboard.', '船向左舷倾斜。', [], ['port'], 'noun', 'countable', '交通'],
  ], 'larboards',['board'], 'lade + board 复合——首成分 lade 不在库，无级可继，故留空；近义 port 左舷（现代用语）');

  W('larceny', 'noun', '/ˈlɑːsəni/', '', [], '盗窃罪', 'The crime of taking something that belongs to someone else.', [
    ['盗窃罪', 'The crime of secretly taking property from another person.', '非法拿走他人财物的犯罪。', '不可数；法律术语，grand larceny 重盗窃罪。', 'He was charged with grand larceny.', '他被控重盗窃罪。', ['grand larceny'], ['theft'], 'noun', 'uncountable', '法律'],
  ], '', [], '经法语 larcin ← 拉丁 latrocinium——无库内派生根，故留空；近义 theft 盗窃');

  W('larva', 'noun', '/ˈlɑːvə/', '', [], '幼虫', 'The young form of an insect.', [
    ['幼虫', 'The young form of an insect before it becomes an adult.', '昆虫变成成虫之前的幼体。', '可数；复数 larvae。', 'The larva hatched in the water.', '幼虫在水里孵化了。', [], ['worm'], 'noun', 'countable', '科学'],
  ], 'larvae', ['worm'], '拉丁 larva（幽灵、面具）——无库内派生根，故留空；家族 worm 虫（幼体形态相近）');

  W('lassie', 'noun', '/ˈlæsi/', 'C1', [], '少女；小姑娘', 'A young girl or woman.', [
    ['少女；小姑娘', 'A young girl or young woman.', '年轻女孩、姑娘。', '可数；苏格兰及方言用语。', 'The lassie herded the sheep.', '这个小姑娘在放羊。', [], ['lass'], 'noun', 'countable', '社会'],
  ], 'lassies', ['lass'], 'lass C1 少女 + -ie（指小后缀），C1 继承；家族 lass 少女（苏格兰/方言）');

  W('last name', 'noun', '/ˌlɑːst ˈneɪm/', '', [], '姓', 'The family name you share with your family.', [
    ['姓', 'The name you share with other members of your family.', '与家人共用的姓氏。', '可数。', 'Please write your last name here.', '请把您的姓写在这里。', [], ['surname'], 'noun', 'countable', '通用'],
  ], '', ['surname'], 'last + name；近义 surname 姓氏。短语分级留空').phrase = true;

  W('lasting', 'adjective', '/ˈlɑːstɪŋ/', 'A1', [], '持久的', 'Continuing for a long time.', [
    ['持久的', 'Continuing for a long time.', '长时间持续、不轻易消失的。', '定语。', 'The war left lasting scars.', '战争留下了持久的创伤。', ['lasting peace'], ['durable', 'permanent'], 'adjective', '定语', '通用'],
  ], '',['durable', 'permanent', 'last'], '←last A1 持续 + -ing（透明后缀），A1 继承；近义 durable 耐久的、permanent 永久的');

  W('later', 'adverb/adjective', '/ˈleɪtə/', 'A1', ['CET4'], '后来；较晚的', 'After the present time, or coming after.', [
    ['后来；较晚的', 'At a time after now, or coming after something else in time.', '在现在或某事之后的时间；也指后面的。', '副词与形容词两用。', 'I will tell you later.', '我稍后告诉你。', ['see you later'], ['afterward', 'latter', 'subsequent'], 'adverb/adjective', 'null', '通用'],
  ], '',['latter', 'subsequent', 'late'], '←late A1 + -er（比较级），A1 继承；近义 afterward 后来、latter 后者的、subsequent 随后的');

  W('lateral', 'adjective', '/ˈlætrəl/', '', [], '侧面的', 'Of or from the side.', [
    ['侧面的', 'Of, at, or from the side of something.', '位于或来自某物侧面的。', '定语。', 'The nerve runs along the lateral edge.', '神经沿侧缘延伸。', ['lateral line'], ['temporal'], 'adjective', '定语', '通用'],
  ], '', [], '拉丁 latus（侧面）——虽含 late（A1 晚）但非派生（切词假象），故留空；近义 temporal 时间的（与空间对举）');

  W('laterally', 'adverb', '/ˈlætərəli/', '', [], '横向地；侧面地', 'In a lateral direction.', [
    ['横向地；侧面地', 'In a direction to the side.', '朝侧面的方向。', '副词。', 'Move the panel laterally.', '把面板横向移动。', [], ['sideways'], 'adverb', 'null', '通用'],
  ], '',['sideways', 'lateral'], '←lateral（本批在库，等级留空）+ -ly，无级可继，故留空；近义 sideways 侧向地');

  W('latest', 'adjective', '/ˈleɪtɪst/', 'A1', [], '最新的', 'Most recent.', [
    ['最新的', 'Most recent; happening or made now.', '最近的、刚出的。', '定语或表语：at the latest 最迟。', 'Her latest book is very good.', '她最新的这本书很好。', ['at the latest'], ['last', 'recent', 'up-to-date'], 'adjective', '定语/表语', '通用'],
  ], '',['recent', 'late'], '←late A1 + -est（最高级），A1 继承；近义 last 最后的、recent 最近的、up-to-date 最新的');

  W('latex', 'noun', '/ˈleɪteks/', '', [], '乳胶', 'A milky liquid from plants, used to make rubber.', [
    ['乳胶', 'A milky white liquid from some plants, used to make rubber.', '某些植物分泌的白色乳汁，用于制橡胶。', '不可数。', 'The gloves are made of natural latex.', '这副手套是天然乳胶做的。', ['natural latex'], ['rubber'], 'noun', 'uncountable', '科学'],
  ], '', [], '拉丁 latex（乳汁）——无库内派生根，故留空；近义 rubber 橡胶（天然乳胶制）');

  W('lather', 'noun/verb', '/ˈlɑːðə/', '', [], '泡沫；起泡沫', 'Foam from soap, or to work up foam.', [
    ['泡沫；起泡沫', 'The white foam you get when soap is mixed with water, or to produce it.', '肥皂加水搅出的泡沫；也指起泡沫。', '不可数；动词可及物或不及物。', 'The soap produced a thick lather.', '肥皂搓出了厚泡沫。', [], ['soap'], 'noun/verb', 'null', '家居'],
  ], 'lathers~lathered~lathered~lathering', [], '古英语 lēthrie——无库内派生根，故留空；近义 soap 肥皂（起泡）');

  W('launderette', 'noun', '/ˌlɔːndəˈret/', '', [], '自助洗衣店', 'A shop with machines for washing clothes.', [
    ['自助洗衣店', 'A shop where you pay to use washing machines.', '投币使用洗衣机的店铺。', '可数，英式；美式 laundromat。', 'There is a launderette on the corner.', '街角有家自助洗衣店。', [], ['laundry'], 'noun', 'countable', '家居'],
  ], 'launderettes', [], 'launder + -ette——首成分 launder 不在库（laundry B1 为近义而非词根），无级可继，故留空；近义 laundry 洗衣店');

  W('law enforcement', 'noun', '/ˌlɔː ɪnˈfɔːsmənt/', '', [], '执法', 'The people and system that apply the law.', [
    ['执法', 'The officials and agencies that make sure laws are obeyed.', '执行法律的人员与机构。', '不可数。', 'Law enforcement arrested two men.', '执法人员逮捕了两人。', [], ['police'], 'noun', 'uncountable', '法律'],
  ], '', ['police'], 'law + enforcement；近义 police 警方（执法主体）。短语分级留空').phrase = true;

})(typeof window !== 'undefined' ? window : globalThis);
