/* data/words/cet/author_t6.js — T 批次 6，缺口 titan ~ tradesperson，共 31 条
 * （25 单词 + 6 短语；短语清单：tobacco pipe、together with、top story、
 *   touch down、tower over、toy with）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_t6.txt，widx 156-186，词头无残缺）。
 * CET 标签照抄队列：CET4 × 4（tolerable、tolerant、topical、tourism），CET6 × 0，其余 27 条 []。
 * brief：%TEMP%\opencode\_t6_brief.txt 共 25 行，与本批 25 个单词一一对应（首行 titan、末行 tradesperson）；
 *   5 行给出根提示（tool A2、total A2、tour A2、tower A2、trade A2），20 行显示 ←?，
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf 定位词头行取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；curated.js 另按纯文本键名核对，
 *   不含本批词与其根）。
 * 扫根结论（自扫，第 4 参）：title A2、tolerate B2、ton B1、tool A2、top A1、topic A2、
 *   total A2、tough B1、tour A2、tower A2、track A2、trade A2、toxic B2（均 author_t2.js）、
 *   coat A1（author_c3.js）、person A1（author_p1.js）、stool B1（author_s4.js，仅作比对，不予采用）；
 *   brief 根提示复核通过（自扫同级）：tool A2、total A2、tour A2、tower A2、trade A2（均 author_t2.js）。
 * · 透明继承（7 条）：tolerable←tolerate B2 + -able、topical←topic A2 + -al、totally←total A2 + -ly、
 *   toughen←tough B1 + -en、touring←tour A2 + -ing、towering←tower A2 + -ing、trader←trade A2 + -er
 *   （-able/-al/-ly/-en/-ing/-er 均在 §5.4 清单）。
 * · 判断项继承（8 条）：
 *   tolerant←tolerate B2 + -ant（-ant 不在 §5.4 明示清单，按库内 resistant←resist B2、
 *     radiant←radiate B2 先例裁定）；
 *   titular←title A2 + -ar（e→∅ 正字，按库内 circular←circle A2 → -ar 先例）；
 *   tourism←tour A2 + -ism（-ism 不在清单，按库内 terrorism←terror B2、journalism←journal B1 先例）；
 *   tonne←ton B1（英式公制拼写变体，词首 ton 全段共享、重量单位语义直连，同 madame←madam B1 先例）；
 *   tools←tool A2 + -s（复数形式单列，按库内 things←thing A1、systems←system A2 先例）；
 *   topcoat←top A1、trackpad←track A2、tradesperson←trade A2（复合词按 §5.3 取首成分级）。
 * · 留空（10 单词 + 6 短语）：titan（库内无词源根，与 giant 无词首全段共享，§5.6 不成立）、
 *   titter（拟声基础词，根词即本词，无可继根）、
 *   toadstool（首成分 toad 不在库，后成分 stool B1 与「毒蘑菇」语义不直连，§5.3）、
 *   tomb（-omb 不在 §5.4 清单，与 bomb、comb 切词假象 §5.7）、
 *   tome（-ome 不在清单，与 home、some 切词假象 §5.7）、
 *   torment（-ment 在清单但根词即本词，库内无更低词源根）、
 *   torrent（-ent 需在库根词，库内无 torrent 的词源根）、
 *   tortoise（-oise 不在清单，库内无词源根）、
 *   totalitarian（-itarian 不在清单且库内无 -arian/-itian 先例，§5.4 条 4c）、
 *   toxin（toxic 未整段出现在 toxin 中，§5.6 不成立，-in 无库内先例）；6 条短语一律 §6 分级留空。
 * CEFR 分布（25 单词）：A1 × 1、A2 × 10、B1 × 2、B2 × 2、留空 × 10；短语 6 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t6.js 必须在 _cet_helper.js 之后加载');

  W('titan', 'noun', '/ˈtaɪtn/', '', [], '巨神；巨人、巨头', 'The giant gods of Greek myth, and by extension a person or firm of great power.', [
    ['提坦巨神', 'One of the huge gods of ancient Greek myth who ruled before the Olympian gods.', '希腊神话中在奥林匹斯诸神掌权之前统治世界的巨神。', '可数，源自神话；现代英语也借它形容体量或力量惊人的人与事物。', 'The poem tells how the Titans lost the war against Zeus.', '这首诗讲述提坦诸神如何在与宙斯的战争中落败。', ['the war of the Titans'], [], 'noun', 'countable', '文化'],
    ['巨人；巨头', 'A person or an organization that is very powerful or important in a particular field.', '在某一领域中实力极强或地位极重要的人或机构。', '可数，常与 of 连用，多见于新闻与商业评论。', 'She is a titan of the electronics industry.', '她是电子行业的巨头。', ['a business titan'], ['giant'], 'noun', 'countable', '商务'],
  ],'titans', ['giant'], 'brief ←?，按 §5.2 自扫根：库内无 titan 的在库词源根（希腊神名），与 giant 无词首全段共享，§5.6 兄弟派生不成立，留空（判断项）；家族/近义 giant 巨人（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('titter', 'verb/noun', '/ˈtɪtə/', '', [], '窃笑；短促的笑', 'To laugh briefly and nervously, or such a short laugh.', [
    ['窃笑；咯咯地笑', 'To give a short, nervous laugh while trying not to laugh out loud.', '想放声大笑却又忍着，发出短促而紧张的笑声。', '不及物动词，常与 at 连用，略带嘲弄或尴尬色彩。', 'The class began to titter at his accent.', '全班因为他的口音而窃笑起来。', ['titter at something'], ['giggle'], 'verb', '不及物', '通用'],
    ['窃笑声', 'A short laugh that is only partly allowed out.', '只放出一半的短促笑声。', '可数，常与 short、nervous 等词连用。', 'A titter ran through the audience.', '观众席中掠过一阵窃笑。', ['a nervous titter'], [], 'noun', 'countable', '通用'],
  ], 'titters~tittered~tittered~tittering', ['giggle'], 'brief ←?，按 §5.2 自扫根：库内无 titter 的在库词源根（拟声基础词，根词即本词，-er 不构成可继后缀），留空；家族/近义 giggle 咯咯笑（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('titular', 'adjective', '/ˈtɪtjʊlə/', 'A2', [], '挂名的；以……命名的', 'Having a name or title only, or serving as the source of a title.', [
    ['挂名的；有名无实的', 'Holding only the name or title of a job, position or prize, without the duties or power that usually go with it.', '只有职位、头衔或奖项之名，却不享有通常与之相伴的职责或权力。', '多作定语，常与 role、position、head 等词连用。', 'He holds the titular role of chairman with no real authority.', '他挂着主席的名号，却没有实权。', ['titular head', 'titular role'], ['nominal'], 'adjective', '定语/表语', '职业'],
    ['以……命名的；标题的', 'Being the person or work from which a book, film or organization takes its name.', '作为书籍、影片或机构名称来源的人或作品。', '多作定语，常见于影视与出版语境。', 'She played the titular hero in the new film.', '她在新片中饰演片名所指的主角。', ['the titular character'], [], 'adjective', '定语', '艺术'],
  ], '', ['nominal'], 'brief ←?，按 §5.2 自扫根 title A2 头衔、标题（author_t2.js 第 4 参）——title 去 e 加 -ar（e→∅ 正字变化，-ar 形容后缀同 -al，按库内 author_l7.js circular←circle A2 先例），A2 继承（判断项：-ar 不在 §5.4 明示清单）；家族/近义 nominal 名义上的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('toadstool', 'noun', '/ˈtəʊdstuːl/', '', [], '毒蘑菇；菌盖宽大的蘑菇', 'A wide-capped fungus, many kinds of which are not safe to eat.', [
    ['毒蘑菇；伞菌', 'A fungus with a wide domed cap, often brightly coloured and not safe to eat.', '菌盖宽大呈圆顶状、常色彩鲜艳且不可食用的菌类。', '可数，与可食用的食用菌相对，多见于童话与野外描写。', 'Children are taught never to pick a toadstool.', '孩子们被教导绝不可采食毒蘑菇。', ['a red toadstool'], ['mushroom'], 'noun', 'countable', '自然'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：复合词 toadstool = toad + stool，首成分 toad（蟾蜍）不在库，按 §5.3 转取后成分 stool B1（author_s4.js 第 4 参），但 stool 本义凳子与「毒蘑菇」语义不直连，无可继根，留空（判断项）；近义 mushroom 蘑菇（队列原样，置唯一义项恰好一次）');

  W('tolerable', 'adjective', '/ˈtɒlərəbl/', 'B2', ['CET4'], '尚可接受的；尚能忍受的', 'Barely good enough to accept, or possible to put up with.', [
    ['尚可接受的；过得去的', 'Good enough to be accepted, though not of a high standard.', '虽算不上高标准，但可以被接受。', '多作表语，常以 quite 修饰，含勉强认可之意。', 'The food was tolerable, if not impressive.', '这饭菜算不上出众，但也还过得去。', ['quite tolerable'], ['acceptable'], 'adjective', '表语', '通用'],
    ['（痛苦等）尚能忍受的', 'Possible to bear without too much difficulty.', '不至于太难受，尚可承受。', '多作表语，主语常为疼痛、天气等事物。', 'The pain became tolerable after the tablet.', '服药之后疼痛变得可以忍受。', ['barely tolerable'], [], 'adjective', '表语', '健康'],
  ], '',['tolerate'], 'brief ←?，按 §5.2 自扫根 tolerate B2 容忍（author_t2.js 第 4 参）——tolerate + -able（-able 在 §5.4 清单，透明形容词后缀），B2 继承；近义 acceptable 可接受的（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('tolerant', 'adjective', '/ˈtɒlərənt/', 'B2', ['CET4'], '宽容的；能忍受的', 'Accepting of people and ideas that differ, and able to put up with difficulty.', [
    ['宽容的；容忍差异的', 'Willing to accept beliefs, behaviour or people that are different from your own.', '愿意接受与自己不同的信仰、行为或人群。', '多作表语，常与 of 连用；谈社会风气常说 tolerant society。', 'The city is fairly tolerant of different traditions.', '这座城市对不同传统相当宽容。', ['tolerant of others'], ['liberal'], 'adjective', '定语/表语', '社会'],
    ['能忍受的；容得下的', 'Able to accept pain, delay or trouble without becoming annoyed or upset.', '能够承受疼痛、延误或麻烦而不恼火。', '多作表语，常与 of 连用，语气比 patient 正式。', 'He is tolerant of criticism and never takes it personally.', '他能接受批评，从不往心里去。', ['tolerant of noise'], ['patient'], 'adjective', '表语', '性格'],
  ], '', ['liberal'], 'brief ←?，按 §5.2 自扫根 tolerate B2 容忍（author_t2.js 第 4 参）——tolerate 词干 tolerat + -ant（-ant 透明形容词后缀，按库内 author_r8.js resistant←resist B2、author_r3.js radiant←radiate B2 先例），B2 继承（判断项：-ant 不在 §5.4 明示清单，按库内先例面裁定）；家族 liberal 宽容的（队列原样，入第 10 参），近义 liberal 置义项 1、patient 能忍耐的置义项 2（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('tomb', 'noun', '/tuːm/', '', [], '坟墓；陵墓', 'A stone grave, or a large burial structure built for a ruler.', [
    ['坟墓；墓穴', 'A place where a dead person is buried, especially one marked or built with stone.', '安葬死者的处所，尤指以石材标志或砌成的墓穴。', '可数，常与 ancient、royal 等词连用。', 'They found a tomb hidden beneath the temple.', '他们在神庙下方发现了一座隐藏的墓室。', ['an ancient tomb'], ['grave'], 'noun', 'countable', '历史'],
    ['陵墓；石砌墓葬建筑', 'A large stone structure built as a burial place for a ruler.', '为统治者建造的大型石砌安葬建筑。', '可数，多见于考古与历史语境。', 'The pharaoh was laid to rest inside the sealed chamber.', '法老被安葬在这间封闭的墓室中。', ['a royal tomb'], ['pyramid'], 'noun', 'countable', '历史'],
  ], 'tombs', ['grave'], 'brief ←?，按 §5.2 自扫根：库内无 tomb 的在库词源根（-omb 不在 §5.4 清单，与库内 bomb、comb 形近属切词假象，规范 §5.7），留空（判断项）；家族 grave 坟墓（队列原样，入第 10 参），近义 grave 置义项 1、pyramid 金字塔置义项 2（队列原样，各恰好一次）');

  W('tome', 'noun', '/təʊm/', '', [], '大部头；厚重的巨著', 'A big, heavy book, often a serious or scholarly one.', [
    ['大部头；巨著', 'A large, heavy book, especially one forming part of a set or dealing with a serious scholarly subject.', '又大又厚的书，尤指成套著作中的一卷，或学术性强的皇皇巨著。', '可数，带诙谐或敬意，常见于 a tome on 结构。', 'He carried a heavy tome on medieval history.', '他抱着一本厚重的中世纪史巨著。', ['a weighty tome'], ['volume'], 'noun', 'countable', '出版'],
  ], 'tomes', [], 'brief ←?，按 §5.2 自扫根：库内无 tome 的在库词源根（-ome 为词尾而非可继后缀，与库内 home、some 形近属切词假象，规范 §5.7），留空（判断项）；近义 volume 大部头、卷册（队列原样，置唯一义项恰好一次）');

  W('tonne', 'noun', '/tɒn/', 'B1', [], '公吨；吨', 'The metric unit of mass that is one thousand kilograms.', [
    ['公吨；吨', 'A unit of weight equal to one thousand kilograms, used as the standard metric unit.', '等于一千千克的重量单位，是标准的公制单位。', '可数，常与具体数量连用，属国际单位制中的质量单位。', 'The lorry can carry three tonnes of sand.', '这辆卡车能装三吨沙子。', ['ten tonnes'], ['ton'], 'noun', 'countable', '科学'],
  ], 'tonnes', ['ton'], 'brief ←?，按 §5.2 自扫根 ton B1 吨（author_t2.js 第 4 参）——tonne 为 ton 的英式公制拼写变体，词首 ton 全段共享、同为重量单位语义直连，B1 继承（判断项：-ne 拼写尾不在 §5.4 清单，按库内 author_m4.js madame←madam B1 拼写变体先例裁定，供主 agent 裁定）；家族/近义 ton 吨（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('tools', 'noun', '/tuːlz/', 'A2', [], '工具；手段', 'Implements for practical work, or means of getting a task done.', [
    ['手工工具；器具（复数）', 'Devices such as hammers, drills or spanners that are used to do practical work.', '锤子、电钻、扳手之类用来完成实际工作的器具。', 'tool 的复数形式单列词条；作主语时谓语用复数。', 'He keeps his tools in a metal box.', '他把工具放在一个金属箱里。', ['garden tools', 'power tools'], ['hardware'], 'noun', 'countable', '工具'],
    ['（完成任务的）手段、方法', 'Something used to achieve a result or to carry out a task.', '用来达成结果或完成某项任务的事物。', '常用复数，常与 of、for 连用，多用于比喻义。', 'These tools help teachers assess progress.', '这些手段帮助教师评估学习进度。', ['tools for learning'], [], 'noun', 'countable', '教育'],
  ],'tools', ['hardware'], 'brief 根提示 ←tool A2 工具（自扫 author_t2.js 第 4 参复核为 A2）+ -s（复数形式单列词条，forms 留空并注明，按库内 author_t4.js things←thing A1、author_s25.js systems←system A2 先例），A2 继承（判断项：-s 复数化不在 §5.4 清单）；家族/近义 hardware 硬件、五金器具（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('topcoat', 'noun', '/ˈtəʊpkəʊt/', 'A1', [], '外套；面漆', 'An outer coat of clothing, or the final layer of paint.', [
    ['外套；大衣', 'A coat worn over other clothes, especially a long warm coat.', '穿在其他衣服外面的外套，尤指长而保暖的大衣。', '可数，与内层衣物相对，冬季常用。', 'She threw on a topcoat before leaving.', '她出门前随手披上一件大衣。', ['a winter topcoat'], ['overcoat'], 'noun', 'countable', '外貌'],
    ['面漆；最后一道涂层', 'The final layer of paint put on a surface, applied over the base coat.', '涂在底漆之上的最后一层漆。', '可数或不可数，常见于装修与制造业语境。', 'Two coats of topcoat will give a hard finish.', '两层面漆可形成坚硬的表面。', ['apply a topcoat'], [], 'noun', 'countable', '工业'],
  ], 'topcoats',['top'], 'brief ←?，按 §5.2 自扫根：复合词 topcoat = top + coat，两成分分别自扫 top A1（author_t2.js 第 4 参）、coat A1（author_c3.js 第 4 参），按规范 §5.3 取首成分 top A1，「穿在外层的外套、外层涂料」与 top「顶部、外层」语义直连，A1 继承（判断项：复合词首成分裁定，同 author_t4.js thickset←thick A2 先例）；近义 overcoat 大衣（队列原样，置首义项恰好一次）');

  W('topical', 'adjective', '/ˈtɒpɪkl/', 'A2', ['CET4'], '时事的；外用的', 'About a subject of the moment, or applied to the surface of the body.', [
    ['时事的；当前热门的', 'Relating to an event or subject that is happening now and is of present interest.', '与当下正在发生、且引起人们关注的事件或话题有关的。', '多作定语，常见于新闻报道与讨论。', 'The report raised a topical question about housing.', '这份报告提出了一个当前热门的住房问题。', ['topical issue'], [], 'adjective', '定语', '媒体'],
    ['外用的；体表的', 'Applied to the outside of the body rather than taken internally, such as a cream or an ointment.', '施于身体表面而非内服的，如乳膏或软膏。', '多作定语，常见于医学与药品说明。', 'The doctor prescribed a topical cream for the rash.', '医生开了一种外用药膏治皮疹。', ['topical cream'], ['external'], 'adjective', '定语', '健康'],
  ], '',['topic'], 'brief ←?，按 §5.2 自扫根 topic A2 话题（author_t2.js 第 4 参）——topic + -al（-al 在 §5.4 清单，透明形容词后缀），A2 继承；近义 external 外部的、体表的（队列原样，置义项 2 恰好一次）；CET4 标签照抄队列');

  W('torment', 'verb/noun', '/ˈtɔːment, tɔːˈment/', '', [], '折磨；使痛苦的事物', 'To cause great suffering, or the suffering that is caused.', [
    ['折磨；使极度痛苦', 'To cause someone great physical or mental suffering over a long time.', '在很长一段时间里给某人造成极大的身体或精神痛苦。', '及物动词，常以人作宾语，多用被动结构 be tormented by。', 'He was tormented by memories of the accident.', '他被事故的回忆折磨着。', ['be tormented by pain'], ['torture', 'rack'], 'verb', '及物', '心理'],
    ['（记忆、忧虑）缠绕；使不得安宁', 'To keep troubling someone again and again, especially in the mind.', '（尤指在头脑中）反复困扰某人。', '及物动词，宾语多为 memory、doubt、fear 等抽象名词。', 'The same doubt tormented him for years.', '同一个疑问困扰了他多年。', ['tormented by doubt'], ['haunt'], 'verb', '及物', '心理'],
    ['骚扰；迫害', 'To treat someone in a cruel and unfair way over a long time because of what they believe or who they are.', '因他人的信仰或身份而长期以残酷不公的方式对待他们。', '及物动词，语气正式，宾语常为少数群体或持不同意见者。', 'Members of the group were persecuted for their faith.', '该群体的成员因信仰受到了迫害。', ['a campaign of persecution'], ['harass', 'persecute'], 'verb', '及物', '社会'],
    ['折磨；折磨人的事物', 'Continual severe suffering, or a person or thing that causes it.', '持续的剧烈痛苦，或造成这种痛苦的人或事物。', '多作不可数名词，常见于 of 结构与文学描写。', 'The doubt was a torment that never left him.', '那份疑虑成了挥之不去的折磨。', ['the torment of waiting'], ['hell'], 'noun', 'uncountable', '情感'],
  ], 'torments~tormented~tormented~tormenting', ['harass', 'rack', 'torture'], 'brief ←?，按 §5.2 自扫根：库内无 torment 的在库词源根（-ment 在 §5.4 清单，但根词即本词；与库内 torture 仅共享词首 tor，非全段共享，§5.6 不成立），留空（判断项）；家族 harass 骚扰、rack 折磨、torture 拷问（队列原样，入第 10 参），近义 torture 置义项 1、haunt 置义项 2、harass 与 persecute 置义项 3、hell 地狱置义项 4（队列原样，各恰好一次）');

  W('torrent', 'noun', '/ˈtɒrənt/', '', [], '洪流；（话语、事件的）迸发', 'A violent rush of water, or a sudden rush of words and feeling.', [
    ['洪流；急流', 'A fast flowing stream of water, especially one that is violent.', '湍急奔流的水，尤指势头猛烈的水流。', '可数，常与 of 连用，多见于山地与暴雨描写。', 'A torrent of water rushed down the gorge.', '一股急流冲下峡谷。', ['mountain torrent'], ['flood', 'rapid'], 'noun', 'countable', '自然'],
    ['（话语、情感的）迸发，连珠炮', 'A sudden and very large amount of something that arrives quickly one after another.', '突然出现且接踵而至的大量事物。', '可数，常与 of 连用，多形容话语或情感猛烈迸发。', 'She faced a torrent of criticism after the interview.', '采访之后她遭到连珠炮般的批评。', ['a torrent of abuse'], [], 'noun', 'countable', '媒体'],
  ], 'torrents', [], 'brief ←?，按 §5.2 自扫根：库内无 torrent 的在库词源根（-ent 需以在库根词为前提，torrent 自身即词根，库内无更低词源根），留空（判断项）；近义 flood 洪水、rapid 急流（队列原样，置首义项恰好一次）');

  W('tortoise', 'noun', '/ˈtɔːtəs/', '', [], '陆龟；有硬壳的爬行动物', 'A slow land reptile with a shell it can pull itself into.', [
    ['陆龟；龟', 'A slow moving land animal with a hard shell that it can withdraw into.', '行动缓慢、带坚硬外壳并可缩入壳中的陆生动物。', '可数，多生活于陆地，与水生龟类相对。', 'The tortoise lives far longer than most pets.', '陆龟的寿命比多数宠物长得多。', ['a giant tortoise'], ['turtle'], 'noun', 'countable', '自然'],
  ], 'tortoises', ['turtle'], 'brief ←?，按 §5.2 自扫根：库内无 tortoise 的在库词源根（-oise 不在 §5.4 清单，亦无库内先例），留空（判断项）；家族/近义 turtle 龟、海龟（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('totalitarian', 'adjective', '/ˌtɒtəˈlɪteəriən/', '', [], '极权主义的；权力高度集中的', 'Giving total power to one party or leader, with no opposition allowed.', [
    ['极权主义的', 'Relating to a political system in which one party or leader holds total control and forbids opposition.', '指一个政党或领袖掌握全部权力并禁止反对意见的政治制度。', '多作定语，常与 regime、state、rule 等词连用。', 'The country spent decades under a totalitarian regime.', '这个国家在极权统治下度过了数十年。', ['a totalitarian state'], ['fascist'], 'adjective', '定语/表语', '政治'],
  ], '', ['fascist'], 'brief ←?，按 §5.2 自扫根 total A2 全部的（author_t2.js 第 4 参）——total + -itarian（-itarian 不在 §5.4 清单，库内亦无 -arian/-itarian 后缀先例，按规范 §5.4 条 4c「无先例且无把握留空」），留空（判断项，供主 agent 裁定）；家族/近义 fascist 法西斯的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('totally', 'adverb', '/ˈtəʊtli/', 'A2', [], '全然地；彻底地', 'To a complete degree; altogether.', [
    ['完全地；彻底地', 'In every way, and to the fullest extent, so that nothing remains.', '在所有方面都达到最大程度，不余一点。', '修饰动词。常与 agree、different、wrong 等词连用以加强语气。', 'I totally agree with your plan.', '我完全同意你的计划。', ['totally different', 'totally agree'], ['absolutely'], 'adverb', '不及物', '通用'],
  ], '',['total'], 'brief 根提示 ←total A2 全部的（自扫 author_t2.js 第 4 参复核为 A2）+ -ly（-ly 在 §5.4 清单，透明副词后缀），A2 继承；近义 absolutely 绝对地、完全地（队列原样，置唯一义项恰好一次）');

  W('toughen', 'verb', '/ˈtʌfn/', 'B1', [], '使坚韧；变坚强', 'To become stronger, or to make something stronger.', [
    ['使坚韧；使结实', 'To make a material, a plant or a person stronger and better able to withstand difficulty.', '使材料、植物或人变得更结实、更能承受困难。', '及物动词，常与 up 连用，宾语可以是人也可以是物。', 'The training will toughen the young players.', '这项训练会让年轻球员变得更硬朗。', ['toughen up'], ['temper'], 'verb', '及物', '体育'],
    ['变得坚强；变得强悍', 'To become stronger, harder or less easily upset.', '变得更坚强、更硬朗，或更不易被打动。', '不及物动词，常与 up 连用。', 'She toughened after years of working in the trade.', '在这一行干了多年之后她变得强硬起来。', ['toughen up'], [], 'verb', '不及物', '性格'],
  ], 'toughens~toughened~toughened~toughening',['tough'], 'brief ←?，按 §5.2 自扫根 tough B1 艰强的（author_t2.js 第 4 参）——tough + -en（-en 在 §5.4 清单，使役后缀，同库内 soften←soft A1、stiffen←stiff B2 先例），B1 继承；近义 temper 使坚韧、回火（队列原样，置首义项恰好一次）');

  W('touring', 'noun', '/ˈtʊərɪŋ/', 'A2', [], '游览旅行；巡回演出', 'Leisure travel around a place, or travelling from place to give performances.', [
    ['游览旅行；游历', 'Travelling around a place for pleasure, visiting interesting or famous sites.', '为休闲而到各地游览，参观有趣或著名的景点。', '不可数，常与 car、bike、country 等词连用。', 'We spent two weeks touring the west coast.', '我们花了两周时间游览西海岸。', ['touring holiday'], ['sightseeing'], 'noun', 'uncountable', '娱乐'],
    ['巡回演出；巡游', 'Travelling from place to place to give performances or take part in events.', '从一地到另一地进行演出或参加活动。', '不可数，常见于音乐、戏剧与体育语境。', 'The band returns to Europe for a touring season.', '这支乐队将回欧洲进行一轮巡演。', ['a touring season'], [], 'noun', 'uncountable', '艺术'],
  ], '', ['sightseeing'], 'brief 根提示 ←tour A2 旅行、游览（自扫 author_t2.js 第 4 参复核为 A2）+ -ing（-ing 在 §5.4 清单，动名词转名词，同 author_t4.js thinking←think A1 体例），A2 继承；动名词名词无复数，forms 留空；家族/近义 sightseeing 观光（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('tourism', 'noun', '/ˈtʊərɪzəm/', 'A2', ['CET4'], '旅游业；观光活动', 'The holiday business, and the activity of visiting interesting places.', [
    ['旅游业；观光产业', 'The business of providing holidays, hotels and services for people who are visiting a place.', '为来访者提供假期、住宿与服务的产业。', '不可数，常与 industry、revenue 等词连用。', 'Tourism earns the region much of its income.', '旅游业为该地区带来了大部分收入。', ['the tourism industry'], [], 'noun', 'uncountable', '商务'],
    ['观光活动；游览', 'The activity of visiting famous or interesting places for pleasure.', '出于兴趣参观著名或有趣地方的活动。', '不可数，常与 mass、cultural 等词连用。', 'Mass tourism has changed the old town.', '大众观光改变了这座老城。', ['cultural tourism'], ['sightseeing'], 'noun', 'uncountable', '娱乐'],
  ],'tourisms', ['sightseeing'], 'brief 显示 ←?，按 §5.2 自扫根 tour A2 旅行（author_t2.js 第 4 参）——tour + -ism（-ism 不在 §5.4 清单，判断项：按库内 author_t3.js terrorism←terror B2、author_j2.js journalism←journal B1 先例裁定），A2 继承；抽象不可数故 forms 留空；家族/近义 sightseeing 观光（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）；CET4 标签照抄队列');

  W('towering', 'adjective', '/ˈtaʊərɪŋ/', 'A2', [], '高耸的；超群的', 'Very tall or very great, standing far above the rest.', [
    ['高耸的；极高的', 'Extremely tall, so that it seems to reach far up into the sky.', '极高，仿佛一直伸向天空。', '多作定语，形容悬崖、建筑等高大之物。', 'Towering cliffs rose on either side of the bay.', '海湾两侧耸立着陡峭的悬崖。', ['towering cliffs'], ['lofty'], 'adjective', '定语', '自然'],
    ['（成就、地位）超群的，出众的', 'Greater than others of its kind in ability, size or importance.', '在能力、体量或重要性上远超同类。', '多作定语，常见于 a towering figure、a towering achievement。', 'He is a towering figure in modern engineering.', '他是现代工程界举足轻重的人物。', ['a towering achievement'], [], 'adjective', '定语', '科学'],
  ], '',['tower'], 'brief 根提示 ←tower A2 塔（自扫 author_t2.js 第 4 参复核为 A2）+ -ing（-ing 在 §5.4 清单，分词作形容词），A2 继承；形容词故 forms 留空；近义 lofty 高耸的、崇高的（队列原样，置首义项恰好一次）');

  W('toxin', 'noun', '/ˈtɒksɪn/', '', [], '毒素；毒质', 'A poisonous substance produced by a living thing.', [
    ['毒素；毒质', 'A poisonous substance produced by a living thing, such as a bacterium, plant or animal.', '由细菌、植物或动物等生物产生的有毒物质。', '可数，科学与医学用语，常指生物来源的毒物。', 'Some bacteria release a toxin that causes illness.', '有些细菌会释放致病的毒素。', ['a deadly toxin'], ['poison'], 'noun', 'countable', '科学'],
  ], 'toxins', ['poison'], 'brief ←?，按 §5.2 自扫根 toxic B2 有毒的（author_t2.js 第 4 参）——toxic 未整段出现在 toxin 中（尾部 c 与 n 不同，§5.6 兄弟派生要求整段可见），-in 亦不在 §5.4 清单且无库内先例，留空（判断项）；家族/近义 poison 毒物（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('trackpad', 'noun', '/ˈtrækpæd/', 'A2', [], '触控板；笔记本的指点板', 'A flat pad built into a laptop that controls the pointer.', [
    ['触控板；轨迹板', 'A flat part of a laptop that you move a finger across to control the pointer on the screen.', '笔记本电脑上一块用手指滑动以控制屏幕指针的平板。', '可数，功能相当于外接的指点设备，几乎每台笔记本都有。', 'The trackpad stopped responding after the update.', '系统更新之后触控板失灵了。', ['use the trackpad'], ['mouse'], 'noun', 'countable', '工具'],
  ], 'trackpads',['track'], 'brief ←?，按 §5.2 自扫根：复合词 trackpad = track + pad，首成分 track A2 追踪（author_t2.js 第 4 参）在库，按规范 §5.3 取首成分级，「以手指追踪移动指针的板」与 track 语义直连，A2 继承（判断项：复合词首成分裁定，同 author_t4.js thickset←thick A2 先例）；近义 mouse 鼠标（队列原样，置唯一义项恰好一次）');

  W('trader', 'noun', '/ˈtreɪdə/', 'A2', [], '商人；交易员', 'A person who buys and sells goods or financial products.', [
    ['商人；贸易商', 'A person or company that buys and sells goods, especially in large amounts.', '买卖商品的人或公司，尤指大宗交易者。', '可数，常与 in 连用，多见于商业报道。', 'The trader specialises in second-hand machinery.', '这名商人专营二手机械。', ['a local trader'], ['merchant'], 'noun', 'countable', '商务'],
    ['（金融市场的）交易员', 'A person who buys and sells shares, currencies or other financial products.', '买卖股票、货币或其他金融产品的人。', '可数，常见于金融新闻，常说 day trader。', 'The bank hired twenty new traders.', '这家银行新聘了二十名交易员。', ['a currency trader'], [], 'noun', 'countable', '金融'],
  ], 'traders', ['merchant'], 'brief 根提示 ←trade A2 贸易（自扫 author_t2.js 第 4 参复核为 A2）+ -er（-er 在 §5.4 清单，施事后缀，同库内 thinker←think A1 体例），A2 继承；家族/近义 merchant 商人（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('tradesperson', 'noun', '/ˈtreɪdspɜːsn/', 'A2', [], '技术工人；行业从业者', 'A skilled worker in a particular trade or craft.', [
    ['技术工人；手艺人', 'A person who works in a particular trade or craft, usually with practical skills learned over time.', '从事某一行业或手艺、通常具备长期实践技能的人。', '可数，中性正式用语，多指管道工、电工、木工等技术工种。', 'We need a tradesperson to fit the new boiler.', '我们需要一名技术工人来安装新锅炉。', ['a qualified tradesperson'], ['plumber'], 'noun', 'countable', '职业'],
  ], 'tradespeople',['trade'], 'brief ←?，按 §5.2 自扫根：复合词 tradesperson = trade + person，两成分分别自扫 trade A2 贸易（author_t2.js 第 4 参）、person A1 人（author_p1.js 第 4 参），按规范 §5.3 取首成分 trade A2，「从事某一行业的人」与 trade 语义直连，A2 继承（判断项：复合词首成分裁定，供主 agent 裁定）；近义 plumber 管道工（队列原样，置唯一义项恰好一次）');

  W('tobacco pipe', 'noun', '/təˈbəʊk paɪp/', '', [], '烟斗；吸烟用的管具', 'A smoking device with a bowl for burning tobacco and a stem held in the mouth.', [
    ['烟斗', 'A smoking device with a small bowl at one end for burning tobacco and a stem that the smoker holds in the mouth.', '一端有小斗钵用于燃烧烟草、另一端含在吸烟者嘴里的管具。', '可数，与卷烟、雪茄相对，多见于文学描写。', 'His grandfather smoked a tobacco pipe after supper.', '他的祖父晚饭后总会抽一斗烟。', ['a tobacco pipe'], ['pipe'], 'noun', 'countable', '娱乐'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 pipe 烟斗（队列原样，置唯一义项恰好一次）').phrase = true;

  W('together with', 'preposition', '/təˈɡeðə wɪð/', '', [], '连同；与……一道', 'In company with someone or something else; as an addition to it.', [
    ['连同；与……一道', 'In company with someone or something else, as an addition to it.', '与某人或某物作伴，作为对已提及事物的补充。', '介词，后接名词或代词，把人或物一并计入，语气较正式。', 'He sent the form together with a short letter.', '他把表格连同一封短信一并寄出。', ['together with his family'], ['along'], 'preposition', 'null', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 along 一道、一起（队列原样，置唯一义项恰好一次）').phrase = true;

  W('top story', 'noun', '/ˌtɒp ˈstɔːri/', '', [], '头条新闻；头版头条', 'The most important news item, placed at the top of a page or bulletin.', [
    ['头条新闻；头版头条', 'The main and most important news item, shown at the top of a page, broadcast or website.', '放在版面、广播或网站首页最上方、最重要的一条新闻。', '可数，常见于新闻编辑与播报语境。', 'The top story today concerns the election.', '今天的头条新闻与选举有关。', ['the top story of the day'], ['headline'], 'noun', 'countable', '媒体'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 headline 大标题、头条（队列原样，置唯一义项恰好一次）').phrase = true;

  W('touch down', 'verb', '/ˌtʌtʃ ˈdaʊn/', '', [], '（飞机）着陆；（橄榄球）达阵', 'Of an aircraft, to land, or in football to score.', [
    ['（飞机）着陆；降落', 'Of an aircraft, to come down and arrive on the ground.', '（指飞机）下降并抵达地面。', '不及物动词，航空用语，常与 at、on 连用。', 'The plane touched down ten minutes late.', '飞机晚了十分钟着陆。', ['touch down safely'], ['land'], 'verb', '不及物', '交通'],
    ['（美式橄榄球）达阵得分', 'In American football, to score by carrying the ball into the opposing end zone.', '在美式橄榄球中，把球带入对方端区而得分。', '不及物动词，也可作名词，主用于体育报道。', 'They touched down twice in the second half.', '他们在下半场两次达阵得分。', ['touch down twice'], [], 'verb', '不及物', '体育'],
  ],'touches down~touched down~touching down', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 land 着陆、降落（队列原样，置首义项恰好一次）').phrase = true;

  W('tower over', 'verb', '/ˌtaʊər ˈəʊvə/', '', [], '远高于；在规模上压倒', 'To stand far above something, or to dwarf it in size or power.', [
    ['远高于；耸立于', 'To be much taller than everything else around it.', '比周围一切都要高出许多。', '不及物动词，多用于建筑、悬崖等具体事物。', 'The castle towers over the small town.', '城堡高高耸立于这座小城之上。', ['tower over the houses'], [], 'verb', '不及物', '地理'],
    ['（规模、力量上）压倒，主宰', 'To be much greater in size, power or importance than someone or something else.', '在体量、力量或重要性上远超某人或某物。', '不及物动词，常与 rival、competitor 等词连用，多用于比喻。', 'One firm towers over every rival in the region.', '有一家公司在该地区远超所有对手。', ['tower over the competition'], ['dominate'], 'verb', '不及物', '商务'],
  ],'towers over~towered over~towering over', ['dominate'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 dominate 支配、主宰（队列原样，入第 10 参），近义 dominate 置义项 2 恰好一次').phrase = true;

  W('toy with', 'verb', '/ˌtɔɪ wɪð/', '', [], '把玩；不认真地考虑', 'To handle something playfully, or to consider an idea without committing to it.', [
    ['把玩；摆弄', 'To handle something in a playful way without any serious purpose.', '以玩闹的方式摆弄某物，并无认真目的。', '不及物动词，常与 object、idea 等词连用，也可作及物。', 'He toyed with the pen during the meeting.', '开会时他把那支笔摆弄来摆弄去。', ['toy with a pen'], [], 'verb', '不及物', '通用'],
    ['（不认真地）考虑，动……的念头', 'To think about an idea only casually, without deciding to act on it.', '只是随意想想某个念头，并不打算付诸行动。', '不及物动词，常与 idea、thought 连用，多与 would 连用。', 'They toyed with the idea of moving abroad.', '他们动过移居国外的念头。', ['toy with the idea'], ['flirt'], 'verb', '不及物', '心理'],
  ],'toys with~toyed with~toying with', ['flirt'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 flirt 调情、不认真对待（队列原样，入第 10 参），近义 flirt 不认真考虑置义项 2 恰好一次').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
