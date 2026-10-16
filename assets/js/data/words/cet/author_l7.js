/* data/words/cet/author_l7.js · 手敲词条 L（七·引用缺口批）：limping ~ logarithm（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（linear/linguistics/lioness/literature/living/location/lodging 见条目）。
 * 短语 2 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_l7.js 必须在 _cet_helper.js 之后加载');

  W('limping', 'adjective', '/ˈlɪmpɪŋ/', 'B2', [], '跛行的', 'Walking with difficulty.', [
    ['跛行的', 'Walking with difficulty because of an injured leg.', '因腿伤而走路不便的。', '定语或表语。', 'The limping man sat down.', '那个跛脚的男人坐下了。', [], ['lame'], 'adjective', '定语/表语', '健康'],
  ], '',['limp'], '←limp B2 + -ing（透明后缀），B2 继承（brief 根提示）；近义 lame 跛的');

  W('line up', 'verb', '/ˌlaɪn ˈʌp/', '', [], '排队；列队', 'To stand in a line, or to arrange in a line.', [
    ['排队；列队', 'To stand in a row waiting, or to arrange things in a row.', '排成一列；也指把…排好。', '不及物短语，亦可及物。', 'We lined up for tickets.', '我们排队买票。', [], ['queue'], 'verb', '不及物', '通用'],
  ], '', [], 'line + up；近义 queue 排队。短语分级留空').phrase = true;

  W('lineage', 'noun', '/ˈlɪniɪdʒ/', '', [], '血统；世系', 'The line of people you descend from.', [
    ['血统；世系', 'The line of ancestors you descend from.', '家族代代相传的血脉世系。', '可数。', 'They traced their lineage to Ireland.', '他们把世系追溯到爱尔兰。', [], ['generation'], 'noun', 'countable', '家庭'],
  ], 'lineages', [], 'line + -age——先例 passage（B2）与 pass（B1）脱钩、leverage 同此留空，-age 不走词根继承，自身级无把握，故留空；近义 generation 世代');

  W('linear', 'adjective', '/ˈlɪniə/', 'A1', ['CET4'], '线性的；直线的', 'Made of or relating to lines.', [
    ['线性的；直线的', 'Made of or relating to straight lines.', '由直线构成或与直线相关的。', '定语。', 'The data shows a linear trend.', '数据显示出线性趋势。', ['linear growth'], ['straight'], 'adjective', '定语', '通用'],
  ], '',['line'], 'line A1 + -ar（透明后缀，同 -al），A1 继承（先例 circle A2 → circular A2 继承）；近义 straight 笔直的');

  W('lingerie', 'noun', '/ˈlɒŋʒəri/', '', [], '女式内衣', 'Women underwear.', [
    ['女式内衣', 'Underwear for women.', '女性贴身内衣（法语借词）。', '不可数。', 'She bought lingerie in Paris.', '她在巴黎买了内衣。', [], ['underwear'], 'noun', 'uncountable', '外貌'],
  ], '', ['underwear'], '法语 lingerie——无库内派生根，故留空；家族/近义 underwear 内衣');

  W('linguistics', 'noun', '/lɪŋˈɡwɪstɪks/', 'B2', ['CET6'], '语言学', 'The study of language.', [
    ['语言学', 'The scientific study of language.', '研究语言的学科。', '不可数。', 'Linguistics studies how language works.', '语言学研究语言如何运作。', [], [], 'noun', 'uncountable', '教育'],
  ], '', ['linguistic'], '←linguistic B2 + -s（学科形式），B2 继承（brief 根提示）；家族 linguistic 语言学的');

  W('lining', 'noun', '/ˈlaɪnɪŋ/', 'A1', [], '内衬；衬里', 'A material covering the inside of something.', [
    ['内衬；衬里', 'A material that covers the inside of a coat or bag.', '外套、包袋等的内层材料。', '不可数。', 'The jacket has a silk lining.', '这件外套有丝绸衬里。', [], ['liner'], 'noun', 'uncountable', '外貌'],
  ], '',['liner', 'line'], '←line A1 + -ing（透明后缀），A1 继承（brief 根提示）；家族/近义 liner 衬里、邮轮');

  W('lioness', 'noun', '/ˈlaɪənəs/', 'A1', ['CET4'], '母狮', 'A female lion.', [
    ['母狮', 'A female lion.', '雌性的狮子。', '可数。', 'The lioness led the hunt.', '母狮领头捕猎。', [], [], 'noun', 'countable', '自然'],
  ], 'lionesses', ['lion'], '←lion A1 + -ess（阴性后缀），A1 继承；家族 lion 狮子');

  W('lip colour', 'noun', '/ˈlɪp ˌkʌlə/', '', [], '唇色；口红', 'Colour applied to the lips.', [
    ['唇色；口红', 'Colour put on the lips.', '涂在嘴唇上的颜色。', '可数。', 'She chose a pink lip colour.', '她选了粉色口红。', [], ['lipstick'], 'noun', 'countable', '外貌'],
  ], '', [], 'lip + colour；近义 lipstick 口红。短语分级留空').phrase = true;

  W('lipid', 'noun', '/ˈlaɪpɪd/', '', [], '脂质', 'A natural oily substance in the body.', [
    ['脂质', 'A natural oily substance found in living things.', '生物体内的天然油性物质。', '可数，科学术语。', 'Lipids store energy in the body.', '脂质在体内储存能量。', [], ['fat'], 'noun', 'countable', '科学'],
  ], 'lipids', [], '希腊 lipos（脂肪）——形含 lip（A2 嘴唇）但非派生（切词假象），故留空；近义 fat 脂肪');

  W('lips', 'noun', '/lɪps/', 'A2', [], '嘴唇（复数）', 'The two parts around the mouth.', [
    ['嘴唇（复数）', 'The two soft parts around the mouth.', '口周围的两片软组织，lip 的复数。', '复数。', 'Her lips were dry.', '她嘴唇干裂。', [], ['mouth'], 'noun', 'countable', '外貌'],
  ], '',['mouth', 'lip'], '←lip A2 + -s（复数），A2 继承（inflected 桶）；家族/近义 mouth 嘴');

  W('liquefy', 'verb', '/ˈlɪkwɪfaɪ/', 'B1', [], '液化；融化', 'To make or become liquid.', [
    ['液化；融化', 'To make something liquid, or become liquid.', '由固态变为液态。', '可及物或不及物。', 'Heat liquefies the wax.', '热量使蜡液化。', [], ['condense'], 'verb', '及物', '科学'],
  ], 'liquefies~liquefied~liquefied~liquefying',['condense', 'liquid'], '←liquid B1（d 脱落、i→e 音变）+ -ify（使役后缀），B1 继承；家族/近义 condense 凝结');

  W('literature', 'noun', '/ˈlɪtrətʃə/', '', ['CET4'], '文学；文献', 'Written works valued as art.', [
    ['文学；文献', 'Written works valued for their artistic quality, or books on a subject.', '有艺术价值的作品；也指某专业的文献。', '不可数。', 'She loves Russian literature.', '她喜爱俄罗斯文学。', [], ['fiction', 'letter'], 'noun', 'uncountable', '文学'],
  ], '', ['literary'], '拉丁 littera（文字）——letter 不可见、形似 liter（升）但非派生，无库内可见根，故留空；家族 literary 文学的，近义 fiction 小说、letter 信件');

  W('litigate', 'verb', '/ˈlɪtɪɡeɪt/', '', [], '提起诉讼', 'To take a case to court.', [
    ['提起诉讼', 'To take a disagreement to court for a decision.', '把纠纷提交法庭裁决。', '不及物，正式用语。', 'They chose not to litigate.', '他们选择不上诉法庭。', [], ['sue'], 'verb', '不及物', '法律'],
  ], 'litigates~litigated~litigated~litigating', ['sue'], '拉丁 litigāre——无库内派生根，故留空；家族/近义 sue 起诉');

  W('litigation', 'noun', '/ˌlɪtɪˈɡeɪʃn/', '', [], '诉讼；打官司', 'The act of taking a case to court.', [
    ['诉讼；打官司', 'The process of taking a case to a court of law.', '通过法庭解决纠纷的过程。', '不可数。', 'The firm threatened litigation.', '这家公司扬言要起诉。', [], ['lawsuit'], 'noun', 'uncountable', '法律'],
  ], '',['litigate'], 'litigate + -ion——首成分 litigate（本批，等级留空），无级可继，故留空；近义 lawsuit 诉讼');

  W('little-known', 'adjective', '/ˌlɪtl ˈnəʊn/', 'A1', [], '鲜为人知的', 'Known by only a few people.', [
    ['鲜为人知的', 'Known by only a few people.', '只有很少人知道的。', '定语。', 'The author is little-known outside Poland.', '这位作者在波兰以外鲜为人知。', [], ['obscure'], 'adjective', '定语', '通用'],
  ], '',['little', 'known'], 'little A1 + known（独立分词形，等级留空）——首成分 little 在库，A1 继承；近义 obscure 鲜为人知的');

  W('liven', 'verb', '/ˈlaɪvn/', 'A1', [], '使活跃', 'To make something more lively.', [
    ['使活跃', 'To make something more interesting and lively.', '使气氛更活跃。', '及物，常组词：liven up。', 'She livened the party with music.', '她用音乐让聚会活跃起来。', ['liven up'], ['spice'], 'verb', '及物', '娱乐'],
  ], 'livens~livened~livened~livening',['live'], '←live A1 + -en（使役后缀），A1 继承（同 liken 模式）；近义 spice 增添趣味');

  W('livery', 'noun', '/ˈlɪvəri/', '', [], '制服；专用服装', 'A special uniform worn by staff.', [
    ['制服；专用服装', 'A special uniform worn by servants or drivers of one owner.', '仆役或车夫穿着的专用制服。', '可数。', 'The drivers wore the green livery.', '车夫们穿着绿色制服。', [], ['uniform'], 'noun', 'countable', '通用'],
  ], 'liveries', [], '法语 livrée（交付→马夫制服）——形含 live（A1）但非派生（切词假象），故留空；近义 uniform 制服');

  W('living', 'noun/adjective', '/ˈlɪvɪŋ/', 'A1', ['CET4'], '生计；活着的', 'A way of earning money, or alive now.', [
    ['生计；活着的', 'The way someone earns money for life, or alive at present.', '谋生方式；也指现存的。', '名词与形容词两用：living language 活的语言。', 'Teaching is a good living.', '教书是份不错的生计。', ['make a living'], ['alive', 'animate', 'bread', 'life', 'livelihood', 'viable', 'vital'], 'noun/adjective', 'null', '职业'],
  ], '', ['life', 'live', 'livelihood'], '←live A1 + -ing（透明后缀），A1 继承（brief 根提示）；家族 life 生命、live 活、livelihood 生计，近义 alive 活着的、animate 有生命的、viable 可存活的、vital 有活力的');

  W('loaded', 'adjective', '/ˈləʊdɪd/', 'B1', [], '满载的；（俚）有身孕的', 'Carrying a full load.', [
    ['满载的；（俚）有身孕的', 'Carrying a full amount; slang also means pregnant.', '装满东西；俚语也指怀孕、有钱。', '定语或表语：loaded with。', 'The cart was loaded with hay.', '马车上装满了干草。', ['loaded with'], ['pregnant'], 'adjective', '定语/表语', '通用'],
  ], '',['load'], '←load B1 + -ed（透明后缀），B1 继承（brief 根提示）；近义 pregnant 怀孕的（俚语义同现）');

  W('loathe', 'verb', '/ləʊð/', '', [], '厌恶；憎恨', 'To hate someone or something very much.', [
    ['厌恶；憎恨', 'To hate someone or something very much.', '极其讨厌、深恶痛绝。', '及物：loathe doing sth。', 'I loathe violence.', '我痛恨暴力。', ['loathe doing'], ['despise', 'hate'], 'verb', '及物', '情感'],
  ], 'loathes~loathed~loathed~loathing', ['despise', 'hate'], '古英语 lāthian——无库内派生根（loath 不在库），故留空；家族 despise 鄙视、hate 憎恨');

  W('loathing', 'noun', '/ˈləʊðɪŋ/', '', [], '厌恶；憎恶', 'A strong feeling of hate.', [
    ['厌恶；憎恶', 'A strong feeling of hate towards something.', '强烈的反感与憎恶。', '可数：a loathing for。', 'She felt a loathing for the task.', '她对这项任务感到厌恶。', ['a loathing for'], ['disgust', 'hate'], 'noun', 'countable', '情感'],
  ], '',['loathe'], '←loathe（本批，等级留空）+ -ing，无级可继，故留空；近义 disgust 厌恶、hate 憎恨');

  W('lobe', 'noun', '/ləʊb/', '', [], '耳垂；（器官）叶', 'A rounded part of the ear or an organ.', [
    ['耳垂；（器官）叶', 'The rounded part of the ear, or a rounded part of an organ.', '耳垂；也指肺、脑等的叶状部分。', '可数。', 'The earring rested on her lobe.', '耳环挂在她的耳垂上。', [], ['hemisphere'], 'noun', 'countable', '健康'],
  ], 'lobes', [], '希腊 lobos——无库内派生根，故留空；近义 hemisphere（脑）半球（叶区相关）');

  W('location', 'noun', '/ləʊˈkeɪʃn/', 'B1', ['CET4'], '地点；位置', 'A particular place.', [
    ['地点；位置', 'A particular place where something is.', '某物所在的特定地方。', '可数。', 'They filmed at a remote location.', '他们在一处偏远地点拍摄。', ['prime location'], ['place', 'position', 'site', 'situation', 'spot', 'venue', 'whereabouts'], 'noun', 'countable', '通用'],
  ], 'locations',['place', 'site', 'situation', 'venue', 'whereabouts', 'locate'], '←locate B1 + -ion（透明后缀，e→ion），B1 继承（同 legislation 模式）；家族 place 地点、site 场址、situation 位置、venue 场地、whereabouts 下落，近义 spot 地点');

  W('loch', 'noun', '/lɒk/', '', [], '湖泊', 'A long narrow lake in Scotland.', [
    ['湖泊', 'A long narrow lake, especially in Scotland.', '狭长的湖，尤指苏格兰。', '可数。', 'The loch lay between two hills.', '湖位于两山之间。', [], ['lake'], 'noun', 'countable', '自然'],
  ], 'lochs', [], '苏格兰盖尔语——无库内派生根，故留空；近义 lake 湖');

  W('locks', 'noun', '/lɒks/', 'A2', [], '卷发（复数）', 'Long hair in thick curls.', [
    ['卷发（复数）', 'Long hair, especially in thick curls.', '浓密的长发，lock 的复数义。', '复数。', 'Her dark locks fell past her shoulders.', '她深色的长发垂过肩头。', [], ['hair'], 'noun', 'countable', '外貌'],
  ], '',['hair', 'lock'], '←lock A2 + -s（复数），A2 继承（inflected 桶，卷发义）；家族/近义 hair 头发');

  W('lodestone', 'noun', '/ˈləʊdstəʊn/', '', [], '天然磁石', 'A piece of magnetite that attracts iron.', [
    ['天然磁石', 'A naturally magnetized stone that attracts iron.', '能吸铁的天然磁石。', '可数。', 'The lodestone pointed north.', '天然磁石指向北方。', [], ['magnet'], 'noun', 'countable', '科学'],
  ], 'lodestones',['stone'], 'lode + stone——首成分 lode 不在库（与 load 同源异拼），无级可继，故留空；近义 magnet 磁铁');

  W('lodger', 'noun', '/ˈlɒdʒə/', 'B2', [], '房客', 'A person who rents a room in a house.', [
    ['房客', 'A person who rents a room in someone else house.', '租住别人家房间的人。', '可数。', 'The lodger rented the attic room.', '房客租下了阁楼房间。', [], ['tenant'], 'noun', 'countable', '家庭'],
  ], 'lodgers',['lodge'], '←lodge B2 + -er（施事后缀），B2 继承（brief 根提示）；近义 tenant 租户');

  W('lodging', 'noun', '/ˈlɒdʒɪŋ/', 'B2', ['CET4'], '寄宿处；住宿', 'A place to stay for a period.', [
    ['寄宿处；住宿', 'A place to stay for a short time.', '临时住宿的地方。', '不可数或复数。', 'They found lodging for the night.', '他们找到了过夜的地方。', [], ['accommodation'], 'noun', 'uncountable', '家庭'],
  ], '',['accommodation', 'lodge'], '←lodge B2 + -ing（透明后缀），B2 继承（brief 根提示）；家族/近义 accommodation 住宿');

  W('loft', 'noun', '/lɒft/', '', [], '阁楼', 'A space just below the roof of a house.', [
    ['阁楼', 'A space just below the roof of a house, often used for storage.', '屋顶下的空间，多用于储物。', '可数。', 'They converted the loft into a bedroom.', '他们把阁楼改成了卧室。', [], ['attic'], 'noun', 'countable', '家居'],
  ], 'lofts', [], '古诺尔斯语 loft（阁楼）——无库内派生根，故留空；近义 attic 阁楼');

  W('logarithm', 'noun', '/ˈlɒɡərɪðəm/', '', [], '对数', 'The power to which a number must be raised.', [
    ['对数', 'The power to which a base number must be raised to get another number.', '数学中使底数得到某值的指数。', '可数，数学术语。', 'The slide rule uses logarithms.', '计算尺用到对数。', [], ['log'], 'noun', 'countable', '科学'],
  ], 'logarithms', [], '希腊 logos + arithmos——log（B1）为本词的缩略形而非词根（反向包含），无库内根可继，故留空；近义 log 对数');

})(typeof window !== 'undefined' ? window : globalThis);
