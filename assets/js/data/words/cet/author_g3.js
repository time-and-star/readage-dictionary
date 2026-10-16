/* data/words/cet/author_g3.js · 手敲词条 G（三·前段）：gluttony ~ grace period（含 16 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_g3.js 必须在 _cet_helper.js 之后加载');

  W('gluttony', 'noun', '/ˈɡlʌtəni/', '', [], '暴食', 'Eating far too much.', [
    ['暴食', 'Eating far too much.', '吃得太多。', '不可数，正式；七宗罪之一。', 'Gluttony harms health.', '暴食伤身。', [], ['greed'], 'noun', 'uncountable', '健康'],
  ], '', ['glutton'], '←glutton（g2 新词、无等级）+ -y，故仍留空；近义 greed 贪婪');

  W('gnash', 'verb', '/næʃ/', '', [], '咬牙切齿', 'To grind the teeth in anger.', [
    ['咬牙切齿', 'To grind the teeth in anger.', '因愤怒磨牙。', '不及物：gnash at。', 'He gnashed at the news.', '他听到消息咬牙切齿。', [], ['grind'], 'verb', '不及物', '情感'],
  ], 'gnashes~gnashed~gnashed~gnashing', [], '中古英语 gnasten——无库内派生根；近义 grind 磨牙。分级留空');

  W('gnat', 'noun', '/næt/', '', [], '蚋；小飞虫', 'A tiny flying insect that bites.', [
    ['蚋；小飞虫', 'A tiny flying insect that bites.', '咬人的小飞虫。', '可数。', 'Gnats swarm at dusk.', '黄昏蚋群飞舞。', [], ['mosquito'], 'noun', 'countable', '自然'],
  ], 'gnats', ['mosquito'], '古英语 gnaet——无库内派生根；家族 mosquito 蚊子');

  W('go back', 'verb', '/ˌɡəʊ ˈbæk/', '', [], '回去；追溯', 'To return, or start from an earlier time.', [
    ['回去；追溯', 'To return, or start from an earlier time.', '返回，或从更早说起。', '不及物短语。', 'We went back home.', '我们回家了。', [], ['return'], 'verb', '不及物', '通用'],
  ], '', ['return'], 'go 走 + back 回；近义 return 返回。短语分级留空').phrase = true;

  W('go backwards', 'verb', '/ˌɡəʊ ˈbækwədz/', '', [], '倒退', 'To move in reverse.', [
    ['倒退', 'To move in reverse.', '往反方向走。', '不及物短语。', 'The car went backwards.', '车倒退了。', [], ['reverse'], 'verb', '不及物', '交通'],
  ], '', ['reverse'], 'go 走 + backwards 向后；近义 reverse 倒车。短语分级留空').phrase = true;

  W('go before', 'verb', '/ˌɡəʊ bɪˈfɔː(r)/', '', [], '在…之前', 'To happen earlier than.', [
    ['在…之前', 'To happen earlier than.', '比…先发生。', '不及物短语。', 'Lunch goes before the meeting.', '午饭在会前。', [], ['precede'], 'verb', '不及物', '通用'],
  ], '', ['precede'], 'go 走 + before 在前；近义 precede 先于。短语分级留空').phrase = true;

  W('go by', 'verb', '/ˌɡəʊ ˈbaɪ/', '', [], '经过；遵守', 'To pass, or follow rules.', [
    ['经过；遵守', 'To pass, or follow rules.', '经过，或遵守规则。', '不及物或及物短语：go by the book（按规矩）。', 'Time goes by fast.', '时间过得快。', ['go by the book'], ['elapse', 'pass'], 'verb', '不及物', '通用'],
  ], '', ['elapse', 'pass'], 'go 走 + by 经过；家族 elapse 消逝、pass 经过。短语分级留空').phrase = true;

  W('go down', 'verb', '/ˌɡəʊ ˈdaʊn/', '', [], '下降；沉没', 'To fall or sink.', [
    ['下降；沉没', 'To fall or sink.', '掉下或沉没。', '不及物短语。', 'The ship went down.', '船沉了。', [], ['descend', 'set'], 'verb', '不及物', '通用'],
  ], '', ['descend'], 'go 走 + down 下；家族 descend 下降，近义 set 落下（太阳落山）。短语分级留空').phrase = true;

  W('go in', 'verb', '/ˌɡəʊ ˈɪn/', '', [], '进去', 'To enter.', [
    ['进去', 'To enter.', '进入里面。', '不及物短语。', 'They went in quietly.', '他们悄悄进去了。', [], ['enter'], 'verb', '不及物', '通用'],
  ], '', ['enter'], 'go 走 + in 进；近义 enter 进入。短语分级留空').phrase = true;

  W('go off', 'verb', '/ˌɡəʊ ˈɒf/', '', [], '爆炸；变质；响起', 'To explode, go bad, or ring.', [
    ['爆炸；变质；响起', 'To explode, go bad, or ring.', '爆炸、变质或响起。', '不及物短语。', 'The alarm went off.', '闹钟响了。', [], ['spoil'], 'verb', '不及物', '通用'],
  ], '', ['spoil'], 'go 走 + off 掉；近义 spoil 变质。短语分级留空').phrase = true;

  W('go on', 'verb', '/ˌɡəʊ ˈɒn/', '', [], '继续；发生', 'To continue, or happen.', [
    ['继续；发生', 'To continue, or happen.', '继续下去，或发生。', '不及物短语。', 'The show must go on.', '演出必须继续。', [], ['proceed'], 'verb', '不及物', '通用'],
  ], '', ['proceed'], 'go 走 + on 继续；近义 proceed 继续进行。短语分级留空').phrase = true;

  W('go on foot', 'verb', '/ˌɡəʊ ɒn ˈfʊt/', '', [], '步行', 'To walk somewhere.', [
    ['步行', 'To walk somewhere.', '走到某处。', '不及物短语。', 'We went on foot.', '我们步行去的。', [], ['walk'], 'verb', '不及物', '交通'],
  ], '', ['walk'], 'go 走 + on foot 徒步；近义 walk 步行。短语分级留空').phrase = true;

  W('go over', 'verb', '/ˌɡəʊ ˈəʊvə(r)/', '', [], '检查；复习', 'To check carefully.', [
    ['检查；复习', 'To check carefully.', '仔细检查。', '及物短语。', 'Go over your answers.', '检查一下答案。', [], ['review'], 'verb', '及物', '教育'],
  ], '', ['review'], 'go 走 + over 遍；近义 review 复习。短语分级留空').phrase = true;

  W('go past', 'verb', '/ˌɡəʊ ˈpɑːst/', '', [], '经过', 'To move beyond.', [
    ['经过', 'To move beyond.', '从旁边走过。', '不及物或及物短语。', 'They went past the bank.', '他们经过了银行。', [], ['pass'], 'verb', '不及物', '交通'],
  ], '', ['pass'], 'go 走 + past 经过；近义 pass 经过。短语分级留空').phrase = true;

  W('go through', 'verb', '/ˌɡəʊ ˈθruː/', '', [], '经历；检查', 'To suffer, or check one by one.', [
    ['经历；检查', 'To suffer, or check one by one.', '遭受，或逐一检查。', '及物短语。', 'She went through hard times.', '她经历了艰难岁月。', [], ['undergo'], 'verb', '及物', '通用'],
  ], '', ['undergo'], 'go 穿 + through 过；家族 undergo 经历。短语分级留空').phrase = true;

  W('go to bed', 'verb', '/ˌɡəʊ tə ˈbed/', '', [], '上床睡觉', 'To lie down to sleep.', [
    ['上床睡觉', 'To lie down to sleep.', '躺下睡觉。', '不及物短语。', 'Kids go to bed early.', '孩子早早上床睡。', [], ['retire'], 'verb', '不及物', '家居'],
  ], '', ['retire'], 'go 去 + to bed 床上；近义 retire 就寝（正式）。短语分级留空').phrase = true;

  W('go with', 'verb', '/ˌɡəʊ ˈwɪð/', '', [], '配；伴随', 'To match, or join.', [
    ['配；伴随', 'To match, or join.', '相配，或加入。', '及物短语。', 'Red goes with black.', '红配黑好看。', [], ['accompany', 'match'], 'verb', '及物', '通用'],
  ], '', ['accompany', 'match'], 'go 走 + with 和…一起；近义 accompany 陪伴、match 相配。短语分级留空').phrase = true;

  W('go-ahead', 'noun/adjective', '/ˈɡəʊ əhed/', 'A1', [], '批准；积极的', 'Permission to start, or eager.', [
    ['批准；积极的', 'Permission to start, or eager.', '开工许可，或积极的。', '可数（批准）或形容词：get the go-ahead。', 'We got the go-ahead.', '我们拿到了批准。', ['get the go-ahead'], ['okay'], 'noun/adjective', 'null', '商务'],
  ], '', ['go', 'ahead'], 'go 走 + ahead 向前，取首成分 go（动词在库）级 A1；近义 okay 同意');

  W('goad', 'noun/verb', '/ɡəʊd/', '', [], '刺激；驱策', 'A sharp stick, or to push someone.', [
    ['刺激；驱策', 'A sharp stick, or to push someone.', '尖棒，或催促某人。', '可数或及物动词：goad into。', 'They goaded him into action.', '他们激他行动。', ['goad into'], ['egg', 'spur'], 'noun/verb', 'null', '通用'],
  ], 'goads~goaded~goaded~goading', [], '古英语 gad——无库内派生根；近义 egg 怂恿（egg on 怂恿）、spur 刺激');

  W('gobble', 'verb', '/ˈɡɒbl/', '', [], '狼吞虎咽', 'To eat very fast.', [
    ['狼吞虎咽', 'To eat very fast.', '吃得非常快。', '及物或不及物。', 'He gobbled his dinner.', '他狼吞虎咽吃晚饭。', [], ['devour', 'wolf'], 'verb', '及物', '饮食'],
  ], 'gobbles~gobbled~gobbled~gobbling', ['devour'], '拟声语源——无库内派生根；家族 devour 吞食，近义 wolf 狼吞虎咽');

  W('gobbledygook', 'noun', '/ˈɡɒbldɪɡuːk/', '', [], '官话套话', 'Complicated official talk.', [
    ['官话套话', 'Complicated official talk.', '复杂难懂的官方话。', '不可数，贬义。', 'The letter is pure gobbledygook.', '这信全是官话。', [], ['jargon'], 'noun', 'uncountable', '书面'],
  ], '', ['gobble'], '←gobble（本批新词、无等级）+ dygook，故仍留空；近义 jargon 行话');

  W('golden', 'adjective', '/ˈɡəʊldən/', 'A1', ['CET4'], '金的；金色的', 'Made of gold, or gold-coloured.', [
    ['金的；金色的', 'Made of gold, or gold-coloured.', '金做的，或金色的。', 'a golden chance 难得的机会。', 'They won golden medals.', '他们赢得了金牌。', [], ['gold', 'honey', 'yellow'], 'adjective', '定语', '通用'],
  ], '', ['gold', 'yellow'], '←gold A1 + -en，A1 继承；家族 gold 金子、yellow 黄色，近义 honey 蜜色的');

  W('good person', 'noun', '/ˌɡʊd ˈpɜːsn/', '', [], '好人', 'A kind moral person.', [
    ['好人', 'A kind moral person.', '善良正派的人。', '可数。', 'She is a good person.', '她是个好人。', [], ['saint'], 'noun', 'countable', '性格'],
  ], '', ['saint'], 'good 好的 + person 人；近义 saint 圣人（好人）。短语分级留空').phrase = true;

  W('good-looking', 'adjective', '/ˌɡʊd ˈlʊkɪŋ/', 'A1', [], '好看的', 'Nice to look at.', [
    ['好看的', 'Nice to look at.', '看着顺眼的。', 'a good-looking boy 帅小伙。', 'He is good-looking.', '他长得帅。', [], ['handsome'], 'adjective', '定语/表语', '外貌'],
  ], '', ['good', 'look'], 'good 好 + looking，取首成分 good（形容词在库）级 A1；近义 handsome 英俊的');

  W('good-natured', 'adjective', '/ˌɡʊd ˈneɪtʃəd/', 'A1', [], '和善的', 'Kind and gentle.', [
    ['和善的', 'Kind and gentle.', '和气温和的。', 'a good-natured host 和善的主人。', 'Our teacher is good-natured.', '老师很和善。', [], ['amiable'], 'adjective', '定语/表语', '性格'],
  ], '', ['good', 'nature'], 'good 好 + natured，取首成分级 A1；近义 amiable 和蔼的');

  W('gosh', 'interjection', '/ɡɒʃ/', '', [], '哎呀；天哪', 'Showing surprise.', [
    ['哎呀；天哪', 'Showing surprise.', '表示惊讶。', '感叹词，口语；God 的委婉语。', 'Gosh, that is big.', '哇，好大。', [], ['goodness'], 'interjection', 'null', '口语'],
  ], '', [], 'God 的委婉语；近义 goodness 天哪（my goodness）。分级留空');

  W('gourd', 'noun', '/ɡʊəd/', '', [], '葫芦', 'A large hard-skinned fruit.', [
    ['葫芦', 'A large hard-skinned fruit.', '皮硬的大果子。', '可数。', 'They grew gourds.', '他们种葫芦。', [], ['pumpkin'], 'noun', 'countable', '饮食'],
  ], 'gourds', ['pumpkin'], '古法语 gourde——无库内派生根；家族 pumpkin 南瓜');

  W('government', 'noun', '/ˈɡʌvnmənt/', 'B2', ['CET4'], '政府', 'The group ruling a country.', [
    ['政府', 'The group ruling a country.', '统治国家的集团。', '可数或不可数。', 'The government resigned.', '政府辞职了。', [], ['politics', 'public', 'regime', 'state'], 'noun', 'uncountable/countable', '政治'],
  ], 'governments', ['govern', 'politics', 'regime'], '←govern B2 统治 + -ment，B2 继承；家族 politics 政治、regime 政权，近义 public 公共的、state 国家');

  W('gp', 'noun', '/ˌdʒiː ˈpiː/', '', [], '全科医生', 'A general doctor in Britain.', [
    ['全科医生', 'A general doctor in Britain.', '英国的普通医生。', '可数，缩略：General Practitioner。', 'See your gp first.', '先看全科医生。', [], ['doctor'], 'noun', 'countable', '健康'],
  ], 'gps', [], 'General Practitioner 的缩略；近义 doctor 医生。分级留空');

  W('grace period', 'noun', '/ˈɡreɪs ˈpɪəriəd/', '', [], '宽限期；蜜月期', 'Extra time allowed, or a sweet start.', [
    ['宽限期；蜜月期', 'Extra time allowed, or a sweet start.', '多给的时间，或甜蜜开头。', '可数。', 'The loan has a grace period.', '贷款有宽限期。', [], ['honeymoon'], 'noun', 'countable', '商务'],
  ], '', ['honeymoon'], 'grace 宽恕 + period 期；近义 honeymoon 蜜月（初期）。短语分级留空').phrase = true;

  W('graceful', 'adjective', '/ˈɡreɪsfl/', 'B2', ['CET4'], '优雅的', 'Beautiful in movement.', [
    ['优雅的', 'Beautiful in movement.', '动作美的。', 'a graceful dancer 优雅的舞者。', 'Swans are graceful birds.', '天鹅优雅。', [], ['elegant'], 'adjective', '定语', '艺术'],
  ], '', ['grace', 'elegant'], '←grace B2 + -ful，B2 继承；家族 elegant 优雅的');

  W('gradation', 'noun', '/ɡrəˈdeɪʃn/', 'B1', [], '渐变；等级', 'Steps of change or rank.', [
    ['渐变；等级', 'Steps of change or rank.', '变化或级别的阶梯。', '可数或不可数。', 'The colours show gradation.', '颜色有渐变。', [], ['hierarchy'], 'noun', 'uncountable/countable', '科学'],
  ], 'gradations', ['grade'], '←grade B1 + -ation，B1 继承；近义 hierarchy 等级');

  W('gradient', 'noun', '/ˈɡreɪdiənt/', 'B1', [], '坡度', 'How steep a slope is.', [
    ['坡度', 'How steep a slope is.', '斜坡有多陡。', '可数。', 'The road has a steep gradient.', '这路坡很陡。', [], ['incline', 'slope'], 'noun', 'countable', '交通'],
  ], 'gradients', ['grade'], '←grade B1 + -ient（e→ient），B1 继承；近义 incline 斜坡、slope 坡');

  W('graft', 'noun/verb', '/ɡrɑːft/', '', [], '嫁接；贿赂', 'Joining plants, or illegal gain.', [
    ['嫁接；贿赂', 'Joining plants, or illegal gain.', '接合植物，或非法所得。', '可数或及物动词。', 'They grafted new branches.', '他们嫁接了新枝。', [], ['transplant'], 'noun/verb', 'null', '自然'],
  ], 'grafts~grafted~grafted~grafting', ['transplant'], '古法语 grafe——无库内派生根；家族 transplant 移植');

  W('grammatical person', 'noun', '/ɡrəˈmætɪkl ˈpɜːsn/', '', [], '语法人称', 'First, second, or third person.', [
    ['语法人称', 'First, second, or third person.', '第一、第二或第三人称。', '可数，语法用语。', 'We is first person plural.', 'we 是第一人称复数。', [], ['person'], 'noun', 'countable', '语法'],
  ], '', ['person'], 'grammatical 语法的 + person 人称；近义 person 人。短语分级留空').phrase = true;

  W('granddaughter', 'noun', '/ˈɡrændɔːtə(r)/', 'B1', ['CET4'], '孙女；外孙女', 'The daughter of your child.', [
    ['孙女；外孙女', 'The daughter of your child.', '孩子的女儿。', '可数。', 'His granddaughter visits weekly.', '孙女每周来看他。', [], ['grandchild'], 'noun', 'countable', '家庭'],
  ], 'granddaughters', ['grand', 'daughter', 'grandchild'], '←grand B1 + daughter 女儿，B1 继承；家族 grandchild 孙辈');

  W('grandeur', 'noun', '/ˈɡrændʒə(r)/', 'B1', [], '壮丽', 'Great beauty and size.', [
    ['壮丽', 'Great beauty and size.', '又美又大。', '不可数。', 'We admired the grandeur.', '我们赞叹壮丽。', [], ['majesty'], 'noun', 'uncountable', '文化'],
  ], '', ['grand'], '←grand B1 + -eur，B1 继承；近义 majesty 雄伟');

  W('grandfather', 'noun', '/ˈɡrænfɑːðə(r)/', 'B1', ['CET4'], '祖父；外祖父', 'The father of your parent.', [
    ['祖父；外祖父', 'The father of your parent.', '父母的父亲。', '可数。', 'My grandfather farms rice.', '祖父种水稻。', [], ['grandparent'], 'noun', 'countable', '家庭'],
  ], 'grandfathers', ['grand', 'father', 'grandparent'], '←grand B1 + father 父亲，B1 继承；家族 grandparent 祖父母');

  W('grandmother', 'noun', '/ˈɡrænmʌðə(r)/', 'B1', ['CET4'], '祖母；外祖母', 'The mother of your parent.', [
    ['祖母；外祖母', 'The mother of your parent.', '父母的母亲。', '可数。', 'Her grandmother tells stories.', '祖母讲故事。', [], ['grandparent'], 'noun', 'countable', '家庭'],
  ], 'grandmothers', ['grand', 'mother', 'grandparent'], '←grand B1 + mother 母亲，B1 继承；家族 grandparent 祖父母');

  W('grandson', 'noun', '/ˈɡrænsʌn/', 'B1', ['CET4'], '孙子；外孙', 'The son of your child.', [
    ['孙子；外孙', 'The son of your child.', '孩子的儿子。', '可数。', 'Their grandson is five.', '孙子五岁了。', [], ['grandchild'], 'noun', 'countable', '家庭'],
  ], 'grandsons', ['grand', 'son', 'grandchild'], '←grand B1 + son 儿子，B1 继承；家族 grandchild 孙辈');

  W('graphic', 'adjective/noun', '/ˈɡræfɪk/', 'B1', ['CET4'], '生动的；图表', 'Clear and detailed, or a picture.', [
    ['生动的；图表', 'Clear and detailed, or a picture.', '清楚详细的，或图片。', '可数（图表）或形容词。', 'The book gives graphic detail.', '书描写得很生动。', [], ['explicit', 'visual', 'vivid'], 'adjective/noun', 'null', '媒体'],
  ], 'graphics', ['graph', 'visual', 'vivid'], '←graph B1 图表 + -ic，B1 继承；家族 visual 视觉的、vivid 鲜明的，近义 explicit 明白的');

  W('grapple', 'verb/noun', '/ˈɡræpl/', '', [], '扭打；努力应对', 'To fight closely, or struggle with.', [
    ['扭打；努力应对', 'To fight closely, or struggle with.', '近身打斗，或努力对付。', '不及物或可数名词：grapple with。', 'He grappled with the problem.', '他努力对付难题。', ['grapple with'], ['wrestle'], 'verb/noun', 'null', '通用'],
  ], 'grapples~grappled~grappled~grappling', ['wrestle'], '古法语 grapil——无库内派生根；家族 wrestle 摔跤');

  W('grate', 'noun/verb', '/ɡreɪt/', '', [], '磨碎；炉栅', 'To shred food, or a metal frame.', [
    ['磨碎；炉栅', 'To shred food, or a metal frame.', '擦碎食物，或金属架子。', '可数或及物动词。', 'Grate the cheese finely.', '把奶酪擦细。', [], ['jar'], 'noun/verb', 'null', '饮食'],
  ], 'grates~grated~grated~grating', [], '古法语 grater（磨擦）/拉丁 crates（格栅）——两义同形，无库内派生根；近义 jar 刺耳声');

  W('gratify', 'verb', '/ˈɡrætɪfaɪ/', '', [], '使满足', 'To please someone fully.', [
    ['使满足', 'To please someone fully.', '让某人充分高兴。', '及物。', 'Good results gratified us.', '好成绩让我们欣慰。', [], ['indulge'], 'verb', '及物', '情感'],
  ], 'gratifies~gratified~gratified~gratifying', [], 'grat-（拉丁 gratus 喜悦）+ -ify——词根不可见，故留空；近义 indulge 满足');

  W('grating', 'noun/adjective', '/ˈɡreɪtɪŋ/', '', [], '格栅；刺耳的', 'Bars over a hole, or harsh sound.', [
    ['格栅；刺耳的', 'Bars over a hole, or harsh sound.', '洞口的栏条，或刺耳声。', '可数或形容词。', 'A grating covered the drain.', '格栅盖着下水道。', [], ['grid', 'harsh'], 'noun/adjective', 'null', '家居'],
  ], 'gratings', ['grate'], '←grate（本批新词、无等级）+ -ing，故仍留空；近义 grid 格栅、harsh 刺耳的');

  W('gratis', 'adverb/adjective', '/ˈɡrɑːtɪs/', '', [], '免费的', 'Without payment.', [
    ['免费的', 'Without payment.', '不用付钱。', '副词或形容词，正式。', 'Drinks are gratis tonight.', '今晚饮料免费。', [], ['free'], 'adverb/adjective', 'null', '商务'],
  ], '', [], '拉丁 gratis——无库内派生根；近义 free 免费的。分级留空');

  W('gratuity', 'noun', '/ɡrəˈtjuːəti/', '', [], '小费', 'Money given for service.', [
    ['小费', 'Money given for service.', '为服务给的钱。', '可数或不可数。', 'Gratuities are welcome.', '欢迎给小费。', [], ['tip'], 'noun', 'uncountable/countable', '商务'],
  ], 'gratuities', ['gratis'], '←gratis（本批新词、无等级）同源姐妹，故仍留空；近义 tip 小费');

  W('graveyard', 'noun', '/ˈɡreɪvjɑːd/', 'B2', [], '墓地', 'A place where the dead rest.', [
    ['墓地', 'A place where the dead rest.', '死者安息的地方。', '可数。', 'The old graveyard is quiet.', '老墓地很安静。', [], ['cemetery'], 'noun', 'countable', '社会'],
  ], 'graveyards', ['grave', 'yard', 'cemetery'], '←grave B2 坟墓 + yard 场，取首成分级 B2；家族 cemetery 墓地');

  W('gravy', 'noun', '/ˈɡreɪvi/', '', [], '肉汁', 'Hot sauce from meat.', [
    ['肉汁', 'Hot sauce from meat.', '肉做出的热酱汁。', '不可数。', 'Pour gravy on potatoes.', '土豆上浇肉汁。', [], ['sauce'], 'noun', 'uncountable', '饮食'],
  ], '', ['sauce'], '古法语 grave——无库内派生根；家族 sauce 酱汁');

  W('greater', 'adjective', '/ˈɡreɪtə(r)/', 'A1', [], '更大的', 'Bigger; comparative of great.', [
    ['更大的', 'Bigger; comparative of great.', '更大；great 的比较级。', '形容词比较级。', 'Shanghai is greater in size.', '上海面积更大。', [], ['more'], 'adjective', '定语', '通用'],
  ], '', ['more'], 'great A1 的比较级，A1 继承；家族 more 更多');

  W('greatest', 'adjective', '/ˈɡreɪtɪst/', 'A1', [], '最大的', 'Biggest; superlative of great.', [
    ['最大的', 'Biggest; superlative of great.', '最大；great 的最高级。', 'the greatest 最伟大。', 'He is our greatest writer.', '他是我们最伟大的作家。', ['the greatest'], ['maximum', 'most', 'utmost'], 'adjective', '定语', '文化'],
  ], '', ['utmost'], 'great A1 的最高级，A1 继承；家族 utmost 极度，近义 maximum 最大、most 最');

  W('greenery', 'noun', '/ˈɡriːnəri/', 'A1', [], '绿色植物', 'Green plants and leaves.', [
    ['绿色植物', 'Green plants and leaves.', '绿色的植物叶子。', '不可数。', 'The park is full of greenery.', '公园满是绿色。', [], ['plant', 'vegetation'], 'noun', 'uncountable', '自然'],
  ], '', ['green'], '←green A1 + -ery（表场所，同 eatery），A1 继承；近义 plant 植物、vegetation 植被');

  W('greens', 'noun', '/ɡriːnz/', 'A1', [], '青菜（复数）', 'Green vegetables; plural of green.', [
    ['青菜（复数）', 'Green vegetables; plural of green.', '绿色蔬菜；green 的复数。', '复数。', 'Eat your greens.', '把青菜吃了。', [], ['salad', 'vegetable'], 'noun', 'countable', '饮食'],
  ], '', ['green', 'salad', 'vegetable'], '←green A1 + -s，A1 继承；家族 salad 沙拉、vegetable 蔬菜');

  W('greeting', 'noun', '/ˈɡriːtɪŋ/', 'B1', ['CET4'], '问候', 'Words said on meeting.', [
    ['问候', 'Words said on meeting.', '见面说的话。', '可数。', 'They exchanged greetings.', '他们互致问候。', [], ['hello', 'salute', 'welcome'], 'noun', 'countable', '社交'],
  ], '', ['greet', 'hello', 'salute'], '←greet B1 + -ing，B1 继承；家族 hello 你好、salute 致敬，近义 welcome 欢迎');

  W('greetings', 'noun', '/ˈɡriːtɪŋz/', 'B1', [], '问候（复数）', 'Kind words sent to someone; plural of greeting.', [
    ['问候（复数）', 'Kind words sent to someone; plural of greeting.', '寄给某人的问候语；greeting 的复数。', '复数：send greetings。', 'Send them my greetings.', '代我向他们问好。', ['send greetings'], ['regard'], 'noun', 'countable', '社交'],
  ], '', ['greeting'], '←greeting（本批新词 B1）+ -s，B1 继承；近义 regard 问候（regards 致意）');

  W('gridiron', 'noun', '/ˈɡrɪdaɪən/', 'C1', [], '烤架；橄榄球场', 'A grill, or a football field.', [
    ['烤架；橄榄球场', 'A grill, or a football field.', '烤架，或橄榄球场。', '可数，美式。', 'Steaks cooked on a gridiron.', '牛排在烤架上烤。', [], ['grill'], 'noun', 'countable', '体育'],
  ], 'gridirons', ['grid', 'iron'], '←grid C1 + iron 铁，取首成分级 C1；近义 grill 烤架');

  W('grieve', 'verb', '/ɡriːv/', 'B2', ['CET4'], '悲伤', 'To feel deep sadness.', [
    ['悲伤', 'To feel deep sadness.', '感到深切悲伤。', '不及物或及物：grieve for/over。', 'They grieved for weeks.', '他们悲伤了数周。', ['grieve for'], ['mourn'], 'verb', '不及物', '情感'],
  ], 'grieves~grieved~grieved~grieving', ['grief', 'mourn'], '←grief B2 悲痛 + -e（f→ve，同 thieve），B2 继承；家族 mourn 哀悼');

  W('grilled', 'adjective', '/ɡrɪld/', 'C1', [], '烤的', 'Cooked on a grill.', [
    ['烤的', 'Cooked on a grill.', '在烤架上做的。', '分词形容词。', 'I like grilled fish.', '我喜欢烤鱼。', [], ['roast'], 'adjective', '定语', '饮食'],
  ], '', ['grill'], '←grill C1 + -ed，C1 继承；近义 roast 烤的');

  W('grime', 'noun', '/ɡraɪm/', '', [], '污垢', 'Thick black dirt.', [
    ['污垢', 'Thick black dirt.', '厚厚的黑垢。', '不可数。', 'Wash the grime away.', '洗掉污垢。', [], ['dirt'], 'noun', 'uncountable', '家居'],
  ], '', ['dirt'], '中古英语语源——无库内派生根；家族 dirt 污垢');

  W('grinder', 'noun', '/ˈɡraɪndə(r)/', 'B2', [], '研磨机', 'A machine that crushes.', [
    ['研磨机', 'A machine that crushes.', '压碎东西的机器。', '可数。', 'The grinder crushes beans.', '研磨机磨豆子。', [], ['mill'], 'noun', 'countable', '工业'],
  ], 'grinders', ['grind'], '←grind B2 磨碎 + -er（表物），B2 继承；近义 mill 磨坊（磨粉机）');

})(typeof window !== 'undefined' ? window : globalThis);
