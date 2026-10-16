/* data/words/cet/author_t7.js — T 批次 7，缺口 trading ~ tress，共 31 条
 * （29 单词 + 2 短语；短语清单：trash can、travel document）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_t7.txt，widx 187-217，词头无残缺，顺序与明细一致）。
 * CET 标签照抄队列：CET4 × 10（traditional、trailer、trainee、trainer、training、
 *   transformation、transmission、transparency、transportation、treatment），CET6 × 0，
 *   其余 19 个单词 + 2 短语共 21 条 []。
 * brief：%TEMP%\opencode\_t7_brief.txt 共 29 行，与本批 29 个单词一一对应（首行 trading、末行 tress）；
 *   10 行给出根提示（trade A2、trail B2、train A1 ×2、transform B2、transport A2 ×2、
 *   travel A1、treat A2、tree A1），19 行显示 ←?，一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('word'") 取第 4 参，扫 assets/js/data/words/cet/author_*.js，
 *   未 require 全库；短语不入 brief）。
 * 扫根结论（自扫，第 4 参）——用于继承的根：tradition A2、transmit B2、transparent B2（author_t2.js）、
 *   trap B1、tread C1、tremble B2、trend B1（author_t3.js）、door A1（author_d2.js）、
 *   pose B2（author_p2.js）、pass A2（author_p1.js）；
 *   用于留空裁定的对照扫描：triple B2、tram A2、track A2、trait B2（author_t3/t2.js）、
 *   verse B2（author_v1.js）、aspire C1（author_a5.js）、progress A2、congress B2（author_p3/c4.js）。
 * brief 根提示复核通过（自扫同级）：trade A2、trail B2、train A1、transform B2（author_t2.js）、
 *   transport A2、travel A1、treat A2、tree A1（author_t3.js）；trainee 的根 train A1 同此复核。
 * · 继承（21 条）：
 *   trading←trade A2 + -ing、traditional←tradition A2 + -al、
 *   traditionalist←tradition A2 + -al + -ist（判断项：多步派生，先例 specialist←special A2）、
 *   trailer←trail B2 + -er、trainee←train A1 + -ee（判断项：-ee 不在 §5.4 清单，先例
 *   examinees←examine A2、lessees←lease B2）、trainer←train A1 + -er、training←train A1 + -ing、
 *   transformation←transform B2 + -ation、transmission←transmit B2 + -mission（t→ss 词干交替，
 *   先例 emission←emit、submission←submit，§5.5）、
 *   transparency←transparent B2 + -ence（先例 consistency←consistent B2）、
 *   transportation←transport A2 + -ation、transporter←transport A2 + -er、
 *   transpose←pose B2（首成分 trans- 为前缀性成分，按 §5.3 取其后词根，判断项）、
 *   trapdoor←trap B1 + door（复合取首成分，判断项）、traveller←travel A1 + -er（英式双写 l）、
 *   treadle←tread C1 + -le（判断项：-le 不在 §5.4 清单，先例 prickle 因根不在库而留空）、
 *   treatment←treat A2 + -ment、trees←tree A1 + -s（判断项：复数形式单列词条）、
 *   tremor←tremble B2 + -or（判断项：词干 -le→-or）、trendy←trend B1 + -y（§4b，先例 noisy←noise A1）、
 *   trespass←pass A2（首成分 tres- 为 trans- 前缀变体，按 §5.3 取其后词根，判断项）。
 * · 留空（8 单词 + 2 短语）：traitor（与 trait 形近但语义不直连，切词假象 §5.7）、
 *   trajectory（库内无 traject 词根，-ory 无根可继；与 track 形近非同源）、
 *   tramp（库内无 -amp 词根；与 tram 形近但语义不直连）、
 *   transgress（库内无 gress 词根；progress/congress 仅同词尾，词首非全段共享）、
 *   transpire（库内无 spire 词根；与 aspire 仅同词尾，词首非全段共享）、
 *   traverse（库内 verse 义为「诗节」，与「横穿」语义不直连）、
 *   treble（与 triple 同源但词首非全段共享，§5.6 不满足）、
 *   tress（库内无 -ress 词根；与 dress、stress 形近非同源，切词假象）；
 *   2 条短语一律 §6 分级留空。
 * CEFR 分布（29 单词）：A1 × 5（trainee、trainer、training、traveller、trees）、
 *   A2 × 7（trading、traditional、traditionalist、transportation、transporter、treatment、trespass）、
 *   B1 × 2（trapdoor、trendy）、B2 × 6（trailer、transformation、transmission、transparency、
 *   transpose、tremor）、C1 × 1（treadle）、留空 × 8；短语 2 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t7.js 必须在 _cet_helper.js 之后加载');

  W('trading', 'noun', '/ˈtreɪdɪŋ/', 'A2', [], '贸易；商业买卖', 'The business of buying and selling goods or services.', [
    ['贸易；买卖', 'The activity of buying and selling goods, services or currency.', '买卖商品、服务或货币的活动。', '不可数名词，常与 international、free 连用；形式上是 trade 的动名词。', 'Trading with other countries expanded fast.', '与其他国家的贸易迅速扩大。', ['international trading', 'trading partner'], ['merchant'], 'noun', 'uncountable', '商务'],
    ['交易行为；做买卖', 'The act of taking part in buying and selling as a business activity.', '以商业方式参与买卖的行为。', '不可数，常与 in 连用；由动名词转化而来。', 'The new rules limit trading in shares.', '新规则限制股票交易。', ['trading in shares'], [], 'noun', 'uncountable', '金融'],
  ], '',['trade'], 'brief 根提示 ←trade A2 贸易（自扫 author_t2.js 第 4 参复核为 A2）+ -ing（-ing 在 §5.4 清单，动名词转名词），A2 继承；动名词作抽象名词故 forms 留空；近义 merchant 商人（队列原样，置首义项恰好一次）');

  W('traditional', 'adjective', '/trəˈdɪʃənl/', 'A2', ['CET4'], '传统的；按惯例的', 'Following the customs and ways that have existed for a long time.', [
    ['传统的；因袭的', 'Following long-established customs, methods or beliefs.', '长期沿用的习俗、方法或信仰。', '既作定语也作表语，常与 with 连用。', 'They serve traditional food at the inn.', '这家小旅馆供应传统食物。', ['traditional food', 'traditional methods'], ['conservative', 'old-fashioned'], 'adjective', '定语/表语', '文化'],
    ['民间的（故事、音乐）', 'Belonging to the stories, songs or skills passed down among ordinary people.', '在普通民众中口耳相传的故事、歌曲或技艺。', '多作定语，常修饰 music、story、craft。', 'The band plays traditional tunes.', '这支乐队演奏民间曲调。', ['traditional music'], ['folk'], 'adjective', '定语', '文化'],
    ['正统的（做法、流派）', 'Following the accepted forms of a religion, art or science.', '遵循某一宗教、艺术或学科公认形式的。', '多作定语，常修饰 practice、style。', 'He trained in traditional medicine.', '他受训于传统医术。', ['traditional medicine'], ['orthodox'], 'adjective', '定语', '宗教'],
  ], '', ['conservative', 'folk', 'old-fashioned', 'orthodox'], 'brief ←?，按 §5.2 自扫根 tradition A2 传统（author_t2.js 第 4 参）+ -al（-al 在 §5.4 清单，语义直连），A2 继承；家族 conservative 保守的、folk 民间的、old-fashioned 过时的、orthodox 正统的（队列原样，fam 入第 10 参），近义 conservative、old-fashioned 置义项 1，folk 置义项 2，orthodox 置义项 3（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('traditionalist', 'noun', '/trəˈdɪʃənəlɪst/', 'A2', [], '传统主义者；因循守旧者', 'A person who prefers traditional ways and resists change.', [
    ['传统主义者；守旧者', 'A person who likes old customs and dislikes new methods.', '喜欢旧有习俗、不喜欢新方法的人。', '可数，常含不愿改变的意味。', 'He is a traditionalist in the kitchen.', '他在厨房里是个守旧派。', ['a political traditionalist'], ['conservative'], 'noun', 'countable', '性格'],
  ], 'traditionalists',['tradition'], 'brief ←?，按 §5.2 自扫根 tradition A2 传统（author_t2.js 第 4 参）——tradition + -al + -ist（-al、-ist 均透明，-ist 先例 specialist←special A2、extremist←extreme B1），A2 继承（判断项：多步派生，同 theoretical←theory 模式）；近义 conservative 保守者（队列原样，置唯一义项恰好一次）');

  W('trailer', 'noun', '/ˈtreɪlə/', 'B2', ['CET4'], '挂车；预告片', 'A vehicle pulled behind another, or a short film advertising a film.', [
    ['挂车；拖车', 'A vehicle or container that is pulled behind a lorry or car.', '挂在卡车或汽车后面牵引的车辆或容器。', '可数，英式也可指大篷车。', 'They loaded the goods onto the trailer.', '他们把货物装上了拖车。', ['a trailer park'], ['caravan'], 'noun', 'countable', '交通'],
    ['（影视）预告片', 'A short film showing scenes from an upcoming film or programme.', '展示即将上映影片或节目片段的短片。', '可数，与 preview 同义。', 'The trailer drew huge crowds online.', '预告片在网上吸引了大量观众。', ['a film trailer'], ['preview'], 'noun', 'countable', '媒体'],
  ], 'trailers', ['caravan', 'preview'], 'brief 根提示 ←trail B2 拖曳（自扫 author_t2.js 第 4 参复核为 B2）+ -er（-er 在 §5.4 清单，表物），B2 继承；家族/近义 caravan 大篷车与 preview 预告片（队列原样，fam 入第 10 参，syn 置义项 1 与义项 2 各恰好一次）；CET4 标签照抄队列');

  W('trainee', 'noun', '/treɪˈniː/', 'A1', ['CET4'], '受训者；实习生', 'A person who is being trained for a job or skill.', [
    ['受训者；实习生', 'A person learning the skills needed for a job, especially at the start.', '正在学习某项工作所需技能的人，尤其在起步阶段。', '可数，常与 of、for 连用。', 'Each trainee is paired with an experienced mentor.', '每名受训者都与一位有经验的导师结对。', ['a trainee teacher'], ['apprentice', 'recruit'], 'noun', 'countable', '职业'],
  ], 'trainees',['train'], 'brief ←?，按 §5.2 自扫根 train A1 训练（author_t2.js 第 4 参）+ -ee（表受训者，先例 examinees←examine A2、lessees←lease B2），A1 继承（判断项：-ee 不在 §5.4 清单但库内先例充分）；近义 apprentice 学徒与 recruit 新成员（队列原样，置唯一义项各恰好一次）；CET4 标签照抄队列');

  W('trainer', 'noun', '/ˈtreɪnə/', 'A1', ['CET4'], '教练；训练者', 'A person who teaches and prepares a person or animal.', [
    ['教练；指导者', 'A person who teaches a sport or skill and prepares someone to improve.', '教授某种运动或技能并帮助某人提高的人。', '可数，体育语境最常用。', 'Her trainer set a strict schedule.', '她的教练定了一份严格的计划。', ['a fitness trainer'], ['coach'], 'noun', 'countable', '体育'],
    ['（英式）运动鞋；训练鞋', 'A soft shoe made for sport or casual wear.', '为运动或日常休闲制作的软底鞋。', '可数，英式用法，美式常说 sneaker。', 'He bought a new pair of trainers.', '他买了一双新运动鞋。', ['a pair of trainers'], [], 'noun', 'countable', '外貌'],
  ], 'trainers', ['coach'], 'brief 根提示 ←train A1 训练（自扫 author_t2.js 第 4 参复核为 A1）+ -er（-er 在 §5.4 清单，表人），A1 继承；家族/近义 coach 教练（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('training', 'noun', '/ˈtreɪnɪŋ/', 'A1', ['CET4'], '训练；培训', 'The process of learning the skills needed for a job or activity.', [
    ['培训；训练（过程）', 'The process of teaching a person the practical skills for a job or task.', '教给某人某项工作或任务所需实际技能的过程。', '不可数，常与 for、in 连用。', 'The role requires six months of training.', '这个岗位需要六个月的培训。', ['initial training', 'in training'], [], 'noun', 'uncountable', '教育'],
    ['（体育）锻炼', 'Physical exercise done to keep fit or to prepare for an event.', '为保持健康或备战赛事而进行的身体锻炼。', '不可数，常说 training session。', 'Their training paid off in the final.', '他们的训练在决赛中见效了。', ['pre-season training'], ['workout'], 'noun', 'uncountable', '体育'],
  ], '', ['workout'], 'brief 根提示 ←train A1 训练（自扫 author_t2.js 第 4 参复核为 A1）+ -ing（-ing 在 §5.4 清单，动名词转名词），A1 继承；抽象不可数故 forms 留空（同 thinking 模式）；家族/近义 workout 锻炼（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）；CET4 标签照抄队列');

  W('traitor', 'noun', '/ˈtreɪtə/', '', [], '叛徒；出卖者', 'A person who betrays a friend, group or country.', [
    ['叛徒；背叛者', 'A person who is disloyal to a friend, organisation or country.', '对朋友、组织或国家不忠的人。', '可数，语气强烈，多用于政治与冲突语境。', 'He was called a traitor by his own side.', '他被自己人称作叛徒。', ['a traitor to the nation'], ['rat'], 'noun', 'countable', '政治'],
  ], 'traitors', ['rat'], 'brief ←?，自扫根：库内无在库词源根——与 trait B2 特征形近但语义不直连（traitor 指「背叛者」，trait 指「特征」），切词假象（§5.7），故留空；家族/近义 rat 卑鄙小人、告密者（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('trajectory', 'noun', '/trəˈdʒektəri/', '', [], '轨迹；弹道；发展走势', 'The curved path followed by a moving object.', [
    ['轨迹；飞行路径', 'The curved path that an object or a substance follows through space.', '物体或物质在空中所循的曲线路径。', '可数，常与 of 连用，科学语境常用。', 'The missile followed a steep trajectory.', '导弹沿着陡峭的弹道飞行。', ['the trajectory of a ball'], ['orbit'], 'noun', 'countable', '科学'],
    ['发展轨迹；走势', 'The course of development or change over time.', '事物随时间发展变化的进程。', '可数，常与 of 连用，多用于报道与研究。', 'The economy is on an upward trajectory.', '经济正处在上升轨道上。', ['a career trajectory'], [], 'noun', 'countable', '商务'],
  ], 'trajectories', [], 'brief ←?，自扫根：库内无 traject 的在库词根（-ory 虽有先例 mandatory←mandate C1，但根词不在库），与 track A2 轨迹形近但非同源（切词假象 §5.7），故留空；近义 orbit 轨道（队列原样，置首义项恰好一次）');

  W('tramp', 'noun/verb', '/træmp/', '', [], '流浪者；沉重脚步行走', 'A person with no fixed home, or to walk heavily.', [
    ['流浪者；徒步旅行者', 'A person who walks from place to place with no home or job.', '没有固定住所或工作、四处走动的人。', '可数，含贬义或同情意味。', 'A tramp slept under the bridge.', '一个流浪汉睡在桥下。', ['an old tramp'], [], 'noun', 'countable', '社会'],
    ['（重步）行走；长途跋涉', 'To walk heavily or for a long distance with effort.', '费力地沉重行走，或长途步行。', '不及物动词，常与 along、through 连用。', 'They tramped through the woods all day.', '他们在树林里走了一整天。', ['tramp along'], ['stamp', 'trek'], 'verb', '不及物', '通用'],
  ], 'tramps~tramped~tramped~tramping', ['trek'], 'brief ←?，自扫根：库内无在库词根（-amp 不在 §5.4 清单；与 tram A2 有轨电车形近但语义不直连，切词假象 §5.7），故留空；家族 trek 长途跋涉（队列原样，fam 入第 10 参），近义 stamp 重踏与 trek 艰苦跋涉（队列原样，置义项 2 各恰好一次）');

  W('transformation', 'noun', '/ˌtrænsfɔːˈmeɪʃn/', 'B2', ['CET4'], '转变；彻底改变', 'A complete change in form, appearance or character.', [
    ['转变；改造', 'A change that makes something very different from before.', '使某物与此前大不相同的变化。', '可数，常与 of、in 连用。', 'The reform brought a remarkable transformation in the schools.', '改革给学校带来了显著变化。', ['a complete transformation'], ['revolution'], 'noun', 'countable', '社会'],
    ['（数学、科学）变换', 'A rule or operation that changes a shape, a value or an equation.', '改变图形、数值或算式的规则或运算。', '可数，数学科学术语。', 'A rotation is a type of geometric transformation.', '旋转是一种几何变换。', ['a transformation rule'], [], 'noun', 'countable', '数学'],
  ], 'transformations',['transform'], 'brief 根提示 ←transform B2 变形（自扫 author_t2.js 第 4 参复核为 B2）+ -ation（-ation 在 §5.4 清单，动词转名词），B2 继承；近义 revolution 彻底变革（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('transgress', 'verb', '/trænzˈɡres/', '', [], '违反；越界', 'To break a law, a rule or a moral limit.', [
    ['违反；触犯', 'To break a law, a rule or an agreement.', '违反法律、规定或协议。', '及物动词，书面语。', 'He transgressed the rules of the club.', '他违反了俱乐部的规章。', ['transgress the law'], [], 'verb', '及物', '法律'],
    ['越界；逾越戒律', 'To go beyond what a religion or a moral code allows.', '超出宗教戒律或道德准则所允许的范围。', '不及物动词，常与 against 连用。', 'The old code warns against transgressing.', '古老律法告诫不得越界妄为。', ['transgress against'], ['sin'], 'verb', '不及物', '宗教'],
  ], 'transgresses~transgressed~transgressed~transgressing', [], 'brief ←?，自扫根：库内无 gress 的在库词根（-gress 不在 §5.4 清单；progress 与 congress 仅共享词尾，词首非全段共享，§5.6 兄弟派生不满足），故留空；近义 sin 违反戒律、有过（队列原样，置义项 2 恰好一次）');

  W('transmission', 'noun', '/ˌtrænzˈmɪʃn/', 'B2', ['CET4'], '传播；传送；传递装置', 'The act of sending out something, or the equipment that passes it on.', [
    ['传播；传送', 'The act of passing a signal, a message or a disease from one person or place to another.', '把信号、信息或疾病从一人或一处传到另一处的行为。', '不可数或可数，常与 of 连用。', 'The transmission of the disease was quickly contained.', '该病的传播很快被控制住。', ['transmission of signals'], [], 'noun', 'uncountable', '科学'],
    ['无线电发送；转播', 'The broadcasting of a radio or a television signal.', '广播或电视信号的发射。', '可数，常与 radio 连用。', 'The radio transmission reached the far coast.', '这次无线电信号传到了远处的海岸。', ['radio transmission'], ['radio', 'relay'], 'noun', 'countable', '媒体'],
    ['（汽车）变速箱', 'The part of a vehicle that carries power from the engine to the wheels.', '把发动机动力传到车轮的部件。', '可数，汽车用语。', 'The car has a manual transmission.', '这辆车配的是手动变速箱。', ['gear transmission'], [], 'noun', 'countable', '工业'],
  ], 'transmissions',['transmit'], 'brief ←?，按 §5.2 自扫根 transmit B2 传输（author_t2.js 第 4 参）+ -mission（-sion 在 §5.4 清单，-mit→-mission 同 emission←emit、submission←submit 先例，§5.5），B2 继承；近义 radio 广播与 relay 转播（队列原样，置义项 2 各恰好一次）；CET4 标签照抄队列');

  W('transparency', 'noun', '/trænsˈpærənsi/', 'B2', ['CET4'], '透明；透明度；公开', 'The quality of being open to view or easy to understand.', [
    ['透明；透明度', 'The quality of allowing light to pass through so that objects can be seen.', '允许光线透过、从而看得见物体的性质。', '不可数，科学与日常均可。', 'The transparency of the glass is excellent.', '这种玻璃的透明度极佳。', ['light transparency'], ['clarity'], 'noun', 'uncountable', '科学'],
    ['透明；公开（度）', 'The quality of being open and honest so that others can see how things work.', '公开诚实、让外界看清运作方式的性质。', '不可数，常与 of 连用，用于政务与商业。', 'Greater transparency would build trust.', '更高的透明度会建立信任。', ['financial transparency'], [], 'noun', 'uncountable', '商务'],
    ['（投影用）透明胶片', 'A sheet of clear plastic with a picture on it, projected onto a screen.', '印有图案、可投影到屏幕上的透明塑料片。', '可数，多用复数形式。', 'She prepared six slides for the talk.', '她为讲座准备了六张胶片。', ['a transparency of the map'], ['slide'], 'noun', 'countable', '媒体'],
  ], 'transparencies', ['clarity'], 'brief ←?，按 §5.2 自扫根 transparent B2 透明的（author_t2.js 第 4 参）+ -ence（-ence 在 §5.4 清单，-ent→-ency 同 consistency←consistent B2 先例），B2 继承；家族/近义 clarity 清晰（队列原样，fam 入第 10 参，syn 置首义项恰好一次），近义 slide 幻灯片（队列原样，置义项 3 恰好一次）；CET4 标签照抄队列');

  W('transpire', 'verb', '/trænˈspaɪə/', '', [], '发生；为人所知', 'To happen, or to become known.', [
    ['发生（正式用语）', 'To happen, especially in a way that was not known before.', '（尤指以此前不为人知的方式）发生。', '不及物动词，正式语体，常用形式主语 it，例句不用缩写。', 'It later transpired that the files were missing.', '后来才知那些文件已经不见了。', ['it transpired that'], [], 'verb', '不及物', '书面'],
    ['逐渐显露；为人所知', 'To become known over time.', '随着时间推移逐渐被知晓。', '不及物动词，常与 that 从句连用。', 'The full story transpired only years later.', '完整经过多年以后才为人所知。', ['as transpired'], ['emerge'], 'verb', '不及物', '书面'],
  ], 'transpires~transpired~transpired~transpiring', [], 'brief ←?，自扫根：库内无 spire 的在库词根（-spire 不在 §5.4 清单；与 aspire C1 仅共享词尾，词首非全段共享，§5.6 兄弟派生不满足），故留空；近义 emerge 显露、出现（队列原样，置义项 2 恰好一次）');

  W('transportation', 'noun', '/ˌtrænspɔːˈteɪʃn/', 'A2', ['CET4'], '运输；运送系统', 'The act of carrying people or goods from place to place.', [
    ['运输；运送', 'The act of moving people or goods from one place to another.', '把人或货物从一处运到另一处的行为。', '不可数，美式常用，英式多用 transport。', 'The transportation of goods by rail is cheap.', '用铁路运输货物很便宜。', ['public transportation'], ['transport'], 'noun', 'uncountable', '交通'],
    ['交通运输系统', 'The system of vehicles and routes that people use to travel.', '人们出行所使用的车辆与路线系统。', '不可数，常与 public 连用。', 'The city expanded its public transportation.', '这座城市扩大了公共交通系统。', ['a transportation network'], [], 'noun', 'uncountable', '交通'],
  ], '',['transport'], 'brief 根提示 ←transport A2 运输（自扫 author_t3.js 第 4 参复核为 A2）+ -ation（-ation 在 §5.4 清单），A2 继承；不可数故 forms 留空；近义 transport 运输（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('transporter', 'noun', '/trænˈspɔːtə/', 'A2', [], '运输者；运输车', 'A vehicle or a person that carries goods from place to place.', [
    ['运输车；运输船', 'A large vehicle or a ship built to carry goods.', '为运货而制造的大型车辆或船只。', '可数，工业与物流用语。', 'The transporter delivered the parts on time.', '运输车按时送到了零件。', ['a car transporter'], ['carrier'], 'noun', 'countable', '物流'],
  ], 'transporters', ['carrier'], 'brief 根提示 ←transport A2 运输（自扫 author_t3.js 第 4 参复核为 A2）+ -er（-er 在 §5.4 清单，表人或工具），A2 继承；家族/近义 carrier 承运人（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('transpose', 'verb', '/trænzˈpəʊz/', 'B2', [], '调换位置；互换', 'To change the order or position of two or more things.', [
    ['调换位置；互换', 'To change the position or the order of two or more things.', '改变两个或多个事物的位置或次序。', '及物动词，书面语，常与 with 连用。', 'He transposed the two columns of the table.', '他把表格的两列互换了位置。', ['transpose the order'], ['invert'], 'verb', '及物', '数学'],
    ['（音乐）移调', 'To move a piece of music into a different key.', '把乐曲改用另一个调来演奏或书写。', '及物动词，音乐术语。', 'The arranger transposed the song into G.', '编曲者把这首歌移了调。', ['transpose a piece'], [], 'verb', '及物', '艺术'],
  ], 'transposes~transposed~transposed~transposing',['pose'], 'brief ←?，按 §5.2 自扫根 pose B2 放置（author_p2.js 第 4 参）——首成分 trans- 为前缀性成分，按 §5.3 取其后词根，「调换位置」与 pose「放置」语义直连，B2 继承（判断项：前缀+词根裁定，同 self-control←control 模式，供主 agent 裁定）；近义 invert 颠倒、对调（队列原样，置首义项恰好一次）');

  W('trapdoor', 'noun', '/ˈtræpdɔː/', 'B1', [], '活板门；地板门', 'A small door set in a floor or ceiling that can be opened.', [
    ['活板门；翻板门', 'A small door lying flush in a floor, a wall or a ceiling, opened by lifting.', '与地板、墙壁或天花板齐平、需掀起打开的小门。', '可数，常见于舞台、地窖与阁楼。', 'The actor disappeared through a trapdoor.', '演员从活板门下场了。', ['a trapdoor in the floor'], ['hatch'], 'noun', 'countable', '家居'],
  ], 'trapdoors',['trap'], 'brief ←?，自扫：复合词 trapdoor = trap B1 陷阱 + door A1 门（分别自扫 author_t3.js、author_d2.js 第 4 参），按 §5.3 取首成分 trap B1，「活板门（翻板）」与 trap「陷阱、翻板」语义直连，B1 继承（判断项：复合词首成分裁定，同 thickset←thick 模式）；近义 hatch 舱口、开口（队列原样，置唯一义项恰好一次）');

  W('trash can', 'noun', '/træʃ kæn/', '', [], '垃圾桶', 'A container for rubbish, kept in a kitchen or on the street.', [
    ['垃圾桶；废纸篓', 'A container that holds rubbish until it is emptied.', '在清倒之前用来盛放垃圾的容器。', '可数；美式常用，英式多说 bin 或 dustbin。', 'She threw the paper into the trash can.', '她把纸扔进了垃圾桶。', ['an empty trash can'], ['bin'], 'noun', 'countable', '家居'],
  ], '', ['bin'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 bin 垃圾桶（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）').phrase = true;

  W('travel document', 'noun', '/ˈtrævl ˌdɒkjumənt/', '', [], '旅行证件', 'An official paper that a person needs to cross borders.', [
    ['旅行证件；旅行文件', 'An official paper such as a passport that a person shows when travelling between countries.', '跨国旅行时须出示的护照等官方文件。', '可数；正式用语，涵盖护照、签证、通行证。', 'Check that your travel document is still valid.', '确认你的旅行证件仍然有效。', ['a valid travel document'], ['passport'], 'noun', 'countable', '法律'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 passport 护照（队列原样，置唯一义项恰好一次）').phrase = true;

  W('traveller', 'noun', '/ˈtrævlə/', 'A1', [], '旅行者；旅客', 'A person who is travelling from one place to another.', [
    ['旅行者；旅行的人', 'A person who is on a journey to a place far away.', '正在前往远处某地的人。', '可数，英式拼写双写 l。', 'The hostel is popular with young travellers.', '这家旅舍很受年轻旅行者欢迎。', ['a seasoned traveller'], ['passenger'], 'noun', 'countable', '交通'],
    ['（宗教）朝圣者', 'A person who journeys to a sacred place for religious reasons.', '出于宗教原因前往圣地的人。', '可数，常与 on 连用。', 'Pilgrims walked the old road to the shrine.', '朝圣者沿着古道走向圣所。', ['a pilgrim path'], ['pilgrim'], 'noun', 'countable', '宗教'],
  ], 'travellers', ['passenger', 'pilgrim'], 'brief 根提示 ←travel A1 旅行（自扫 author_t3.js 第 4 参复核为 A1）+ -er（-er 在 §5.4 清单，表人，英式双写 l），A1 继承；家族 passenger 旅客与 pilgrim 朝圣者（队列原样，fam 入第 10 参），近义 passenger 置首义项、pilgrim 置义项 2（队列原样，各恰好一次）');

  W('traverse', 'verb/noun', '/trəˈvɜːs/', '', [], '横穿；穿越', 'To go across or through a place from one side to the other.', [
    ['横穿；穿越', 'To cross a place or an area from one side to the other.', '从一边到另一边越过某地。', '及物动词，书面语。', 'The hikers traversed the ridge before dawn.', '登山者在黎明前翻越了山脊。', ['traverse the desert'], ['cross'], 'verb', '及物', '地理'],
    ['横越；横贯（经历）', 'An act of crossing a place, especially a long or a difficult one.', '越过某地的行为，尤指漫长或艰难的一次。', '可数，书面语。', 'The traverse of the plateau took a week.', '这次横穿高原花了一周。', ['a difficult traverse'], [], 'noun', 'countable', '地理'],
  ], 'traverses~traversed~traversed~traversing', ['cross'], 'brief ←?，自扫根：库内 verse B2 义为「诗节」，与「横穿」语义不直连（trans- 前缀在库无词根可继，verse 亦非本词词源词根），故留空（判断项，供主 agent 裁定）；家族/近义 cross 穿过、交叉（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('treadle', 'noun/verb', '/ˈtriːdl/', 'C1', [], '（脚）踏板；踩踏板', 'A pedal worked by the foot to drive a machine.', [
    ['（脚）踏板', 'A lever worked by the foot to keep a machine moving.', '用脚踩动、使机器持续运转的杠杆。', '可数，旧式织布机、缝纫机常用。', 'The wheel turned as she pressed the treadle.', '她踩下踏板，轮子转了起来。', ['press the treadle'], ['pedal'], 'noun', 'countable', '工业'],
    ['踩动踏板', 'To work a treadle with the foot.', '用脚踩动踏板。', '及物动词，用例较旧式。', 'He treadled steadily for an hour.', '他稳稳地踩了一个小时踏板。', ['treadle a machine'], [], 'verb', '及物', '工业'],
  ], 'treadles~treadled~treadled~treadling',['tread'], 'brief ←?，按 §5.2 自扫根 tread C1 踩、踏（author_t3.js 第 4 参）+ -le（指小/工具后缀，-le 不在 §5.4 清单；先例 prickle 的 -le 分析因 prick 不在库而留空，本词条根词在库且「脚踏板」与「踩踏」语义直连），C1 继承（判断项：-le 清单外后缀，供主 agent 裁定）；近义 pedal 踏板（队列原样，置首义项恰好一次）');

  W('treatment', 'noun', '/ˈtriːtmənt/', 'A2', ['CET4'], '治疗；对待；处理', 'The care given to someone or the way something is handled.', [
    ['治疗；疗法', 'Medical care given to try to cure an illness or an injury.', '为治愈疾病或伤病而进行的医疗处置。', '可数或不可数，常与 for 连用。', 'New treatment improved her chances.', '新的治疗提高了她康复的机会。', ['a treatment for cancer'], ['medication', 'remedy', 'therapy'], 'noun', 'uncountable', '健康'],
    ['对待；待遇', 'The way in which a person or a group is treated by others.', '某人或某群体受到他人对待的方式。', '不可数，常与 of 连用，与 rights 相关。', 'They protested at the treatment of workers.', '他们抗议对工人的待遇。', ['fair treatment'], [], 'noun', 'uncountable', '社会'],
    ['处理；处置', 'The way in which a problem, a material or a substance is dealt with.', '对问题、材料或物质的处理方式。', '不可数，常与 of 连用。', 'The treatment of waste must meet new rules.', '废物处理必须符合新规。', ['the treatment of data'], ['procedure'], 'noun', 'uncountable', '工业'],
  ], 'treatments', ['therapy'], 'brief 根提示 ←treat A2 治疗（自扫 author_t3.js 第 4 参复核为 A2）+ -ment（-ment 在 §5.4 清单），A2 继承；家族 therapy 治疗（队列原样，fam 入第 10 参），近义 medication 药物、remedy 疗法、therapy 治疗置首义项，procedure 步骤、程序置义项 3（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('treble', 'adjective/noun', '/ˈtrebl/', '', [], '三倍的；最高音部', 'Three times as much, or the highest part in music.', [
    ['三倍的', 'Three times as much or as many in amount.', '数量为三倍的。', '常作定语或表语；动词形式表示「使增至三倍」。', 'The offer was for treble the usual fee.', '开价是通常费用的三倍。', ['treble the amount'], ['triple'], 'adjective', '定语/表语', '数学'],
    ['（音乐）最高音部；高音', 'The highest part in music, or a very high singing voice.', '音乐中最高的声部，或极高的歌声。', '可数，常与 the 连用，多指童声或女高音。', 'The treble carried the melody above the choir.', '高音部在合唱团上方唱出主旋律。', ['sing in the treble'], [], 'noun', 'countable', '艺术'],
  ], 'trebles', ['triple'], 'brief ←?，自扫根：与 triple B2 三倍（author_t3.js 第 4 参）同源，但词首非全段共享（treble 与 triple 中段 b~p 音变、e~i 音变），§5.6 兄弟派生须整段可见，库内亦无可继先例，故留空（判断项，供主 agent 裁定）；家族/近义 triple 三倍的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('trees', 'noun', '/triːz/', 'A1', [], '树（复数）', 'The plural of tree; tall plants with a trunk and branches.', [
    ['树（复数）', 'The plural of tree; tall plants with a woody trunk and branches.', 'tree 的复数；长有木质树干和枝条的高大植物。', '复数形式，单数 tree 另立词条；作主语时谓语多用复数。', 'Old trees line the river bank.', '老树沿着河岸排列。', ['tall trees'], ['timber'], 'noun', 'countable', '自然'],
  ], '',['tree'], 'brief 根提示 ←tree A1 树（自扫 author_t3.js 第 4 参复核为 A1）+ -s（复数形式单列词条，forms 留空并注明，同 things←thing A1、systems←system A2 先例），A1 继承（判断项：-s 复数化不在 §5.4 清单）；近义 timber 木材、树木（队列原样，置唯一义项恰好一次）');

  W('tremor', 'noun', '/ˈtremə/', 'B2', [], '震颤；颤抖；轻微震动', 'A slight shaking movement of the earth, the body or the voice.', [
    ['（地面的）震动；小地震', 'A slight shaking movement of the earth, sometimes before or after an earthquake.', '地面的轻微震动，常发生在地震前后。', '可数，常与 of 连用。', 'A mild tremor shook the coast at dawn.', '清晨一次轻微震动撼动了海岸。', ['a tremor of earthquake'], ['earthquake', 'quake'], 'noun', 'countable', '自然'],
    ['（身体、声音的）颤抖', 'A slight shaking movement of the voice, the hand or the body.', '声音、手或身体的轻微抖动。', '可数，常与 of 连用，多由情绪引起。', 'A tremor in her voice betrayed her nerves.', '她声音里的一丝颤抖露出了紧张。', ['a tremor of fear'], ['shiver'], 'noun', 'countable', '健康'],
  ], 'tremors', ['earthquake'], 'brief ←?，按 §5.2 自扫根 tremble B2 颤抖（author_t3.js 第 4 参）+ -or（-or 在 §5.4 清单，动词转名词，tremble 去 -le 加 -or），B2 继承（判断项：词干 -le→-or 变化）；家族 earthquake 地震（队列原样，fam 入第 10 参），近义 earthquake 地震与 quake 地震置首义项、shiver 颤抖置义项 2（队列原样，各恰好一次）');

  W('trendy', 'adjective', '/ˈtrendi/', 'B1', [], '时髦的；流行的', 'Very fashionable and popular at the moment.', [
    ['时髦的；时尚的', 'Very fashionable and popular at a particular time.', '在某个时期非常时尚、受欢迎的。', '既作定语也作表语，口语常用，可含褒贬。', 'They opened a trendy cafe near the station.', '他们在车站附近开了一家时髦咖啡馆。', ['trendy clothes'], ['hip', 'in'], 'adjective', '定语/表语', '社交'],
  ], '',['trend'], 'brief ←?，按 §5.2 自扫根 trend B1 趋势（author_t3.js 第 4 参）+ -y（§4b -y 形容词后缀可继，先例 noisy←noise A1、sugary←sugar A1），B1 继承；近义 hip 时髦的与 in 流行的（队列原样，置唯一义项各恰好一次）');

  W('trespass', 'verb/noun', '/ˈtrespəs/', 'A2', [], '非法侵入；擅自闯入', 'To enter land or a building without permission.', [
    ['非法侵入；擅自闯入', 'To go onto private land or into a building without permission.', '未经许可进入他人土地或建筑物。', '不及物动词，常与 on、upon 连用；名词用法同义。', 'He was fined for trespassing on the estate.', '他因擅闯庄园被罚款。', ['trespass on land'], ['intrude'], 'verb', '不及物', '法律'],
    ['（法律）侵害；越界行为', 'An act of going onto someone land without permission.', '未经许可进入他人土地的行为。', '可数，正式与法律用语。', 'The sign warns against trespass.', '警示牌告示不得越界侵入。', ['commit a trespass'], [], 'noun', 'countable', '法律'],
  ], 'trespasses~trespassed~trespassed~trespassing', ['intrude'], 'brief ←?，按 §5.2 自扫根 pass A2 通过（author_p1.js 第 4 参）——首成分 tres-（trans- 变体）为前缀性成分，按 §5.3 取其后词根，「越界通过→非法侵入」与 pass 语义直连，A2 继承（判断项：前缀+词根裁定，同 self-control←control 模式，供主 agent 裁定）；家族/近义 intrude 侵入（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('tress', 'noun', '/tres/', '', [], '一绺长发；（复数）秀发', 'A long lock of hair, or hair worn long.', [
    ['一绺长发', 'A long thick lock of hair.', '又长又厚的一绺头发。', '可数，文学与描写语体，常用复数 tresses 指满头长发。', 'A single tress had come loose.', '一绺头发松了下来。', ['a golden tress'], ['lock'], 'noun', 'countable', '外貌'],
    ['（复数）长发；秀发', 'Long hair of a woman, often mentioned in poetry.', '常在诗歌中提到的女子长发。', '通常用复数形式 tresses。', 'Her tresses fell past her shoulders.', '她的长发垂过肩头。', ['dark tresses'], [], 'noun', 'countable', '外貌'],
  ], 'tresses', [], 'brief ←?，自扫根：库内无在库词源根（-ress 不在 §5.4 清单；与 dress、stress 形近但非同源，切词假象 §5.7），故留空；近义 lock 一绺头发（队列原样，置首义项恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
