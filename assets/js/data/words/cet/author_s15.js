/* data/words/cet/author_s15.js — 常用词 S 批次 15，缺口 silencer ~ skilled，共 31 条
 * （29 单词 + 2 短语：similar to、sitting room）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 × 7：silvery、simplicity、simplify、simply、singer、sitting、skilled；本批无 CET6）。
 * 扫根说明：brief 文件 _s15_brief.txt 与本任务缺口不匹配（队列重排后被重生成，内容为
 * specialist ~ sporadic 段），故 29 个单词一律按规范 §5.2 自行扫根——纯文本 fs.readFileSync +
 * indexOf 扫 assets/js/data/words/cet/author_*.js 取第 4 参 CEFR（另以纯文本查 curated.js 的 level 字段，
 * 目标词均不在其中），未 require 全库。扫到的在库根：
 *   silent A2、silk B1、silver A2、similar A2、simple A1、simulate C1、simultaneous C1、sin B1、
 *   sincere B1、sing A1、sit A1、six A1、sixteen A1、sixty A1、size A1、skill A2（均 author_s2）、
 *   silence A2（author_s14）、song A1 与 spit B2（author_s3）、boil A2（author_b2）、
 *   stupid A2（author_s4）、virtual B2（author_v1）、meanwhile B1（author_m1）、likewise B2（author_l2）、
 *   expert A2（author_e2）、proficient B2（author_p3）——
 *   其中 silent 仅作 silencer 的同级互证，boil、stupid、virtual、meanwhile、likewise、expert、
 *   proficient、song、spit 均为队列 fam/syn 列的家族与近义对照词，不取作词根。
 * · 透明后缀直接继承（后缀在 §5.4 清单内，共 15）：silken←silk B1 + -en、
 *   similarly←similar A2 + -ly、simply←simple A1 + -ly、simulated←simulate C1 + -ed、
 *   simultaneously←simultaneous C1 + -ly、sincerely←sincere B1 + -ly、sinful←sin B1 + -ful、
 *   singer←sing A1 + -er、singing←sing A1 + -ing、sitter←sit A1 + -er、sitting←sit A1 + -ing、
 *   sixteenth←sixteen A1 + -th、sixth←six A1 + -th、sixtieth←sixty A1 + -th、skilled←skill A2 + -ed；
 * · 判断项继承（共 6，备注逐条披露「判断项」）：silencer←silence A2 + -er（工具/施事名词语义引申）、
 *   silvery←silver A2 + -y（-y 不在 §5.4 明列后缀中，按库内 noise→noisy、rain→rainy、cotton→cottony 先例）、
 *   simplicity←simple A1 + -ity（-ity 不在明列，同 author_s13.js severity←severe 先例）、
 *   simplify←simple A1 去 e + -ify（-ify 不在明列，按 author_f4.js falsify←false、
 *     author_p14.js purify←pure 先例作透明后缀，e→ify 正字类）、
 *   sizeable←size A1 + -able（取「尺寸大的」直连义，非「可被测量的」被动义）、
 *   skilful←skill A2 + -ful（英式拼写双 l 变单 l，正字交替同 author_s13.js shelve 先例）；
 * · 留空项（8 单词）：silhouette（法语借词）、silliness 与 silly（silly/sill 均不在库，无级可继）、
 *   simmer（库内无 simmer 的可见词根，boil 仅家族/近义对照，判断项）、
 *   sinew（与 sin B1 形近但语义不直连，切词假象判断项）、siren（希腊语 Seirēn 借词）、
 *   skewer（skew 不在库）、skid（斯堪的纳维亚语借词），
 *   及 2 个短语（整体不取成分作根，分级留空）。
 * CEFR 分布（29 单词）：A1 × 11（simplicity、simplify、simply、singer、singing、sitter、sitting、
 *   sixteenth、sixth、sixtieth、sizeable），A2 × 5（silencer、silvery、similarly、skilful、skilled），
 *   B1 × 3（silken、sincerely、sinful），C1 × 2（simulated、simultaneously），留空 × 8；2 短语一律 ''。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s15.js 必须在 _cet_helper.js 之后加载');

  W('silencer', 'noun', '/ˈsaɪlənsə/', 'A2', [], '消音器；沉默者', 'A part that cuts engine or gun noise, or a person who makes others keep quiet.', [
    ['消音器；静音装置', 'A device that cuts the noise made by an engine or a gun.', '降低发动机或枪支噪声的装置。', '可数，英式英语常用，美式常说 muffler。', 'The car needs a new silencer.', '这辆车需要换一个新的消音器。', ['an exhaust silencer', 'a gun silencer'], [], 'noun', 'countable', '交通'],
    ['使沉默的人；让人闭口的东西', 'A person or thing that makes someone stop talking.', '让人不再说话的人或事物。', '可数，多用于比喻，常与 act as 连用。', 'His stare acted as a silencer on the whole table.', '他这一瞪，全桌人都不说话了。', ['act as a silencer'], ['mute'], 'noun', 'countable', '社会'],
  ], 'silencers',['silence'], '自扫根（brief 缺口错位，见头注释）silence A2（author_s14）——silence + -er（-er 在 §5.4 清单，构成工具/施事名词），消音器即「使声音静止之物」，与 silence 直连，A2 继承（判断项：由动词义引申出工具名词语义）；silent A2（author_s2）同级可互证；近义 mute 沉默的、使沉默（队列原样，置义项2）');

  W('silhouette', 'noun', '/ˌsɪlʊˈet/', '', [], '剪影；轮廓', 'The outline of a person or object shown as a shape, often in art or photography.', [
    ['剪影；黑色轮廓像', 'The dark shape of a person or object seen against a lighter background.', '在亮背景衬托出的人或物的黑色形状。', '可数，常与 against 连用。', 'Her silhouette appeared at the window.', '她的剪影出现在窗口。', ['a silhouette against the light'], ['outline'], 'noun', 'countable', '艺术'],
    ['侧面轮廓；身影', 'The outline of a face or a figure seen from the side.', '从侧面看到的脸型或身形轮廓。', '可数，常与 of 连用。', 'I recognised him from his silhouette alone.', '我单凭他的身影就认出了他。', ['the silhouette of the hills'], ['profile', 'shadow'], 'noun', 'countable', '外貌'],
  ], 'silhouettes', [], '自扫根（brief 缺口错位，见头注释）——法语借词（源自人名 Silhouette），库内无可见词根可继，留空；近义 outline 轮廓（置首义项）、profile 侧面像与 shadow 影子（置义项2），均队列原样');

  W('silken', 'adjective', '/ˈsɪlkən/', 'B1', [], '丝的；柔滑的', 'Made of silk, or smooth and soft in the way silk is.', [
    ['丝的；丝绸制的', 'Made of silk or partly of silk.', '用丝绸或部分用丝绸做成的。', '多作定语，正式或文学语体。', 'She wore a silken scarf around her neck.', '她脖子上围着一条丝巾。', ['a silken scarf', 'silken fabric'], ['silk'], 'adjective', '定语', '外貌'],
    ['（头发等）柔滑的；（声音）柔和的', 'Smooth, soft and shiny, or pleasant to listen to.', '光滑柔软而有光泽的，或听着悦耳的。', '多作定语，用于文学化描写。', 'The cat had a silken coat.', '这只猫有一身柔滑的毛。', ['silken hair'], [], 'adjective', '定语', '外貌'],
  ], '', ['silk'], '自扫根（brief 缺口错位，见头注释）silk B1（author_s2）——silk + -en（-en 在 §5.4 清单，透明形容词后缀），B1 继承；家族/近义 silk 丝、丝绸（队列原样，置首义项）');

  W('silliness', 'noun', '/ˈsɪlinəs/', '', [], '愚蠢；荒唐', 'The quality of being silly, or a silly thing said or done.', [
    ['愚蠢；糊涂', 'The quality of showing a lack of sense or judgement.', '缺乏判断力、不明事理的表现。', '不可数，常与 of 连用。', 'She laughed at the silliness of her own mistake.', '她笑自己犯的糊涂错。', ['sheer silliness'], ['nonsense'], 'noun', 'uncountable', '性格'],
    ['蠢言行；荒唐事', 'A remark or an action that is stupid but usually not serious.', '愚蠢但多半不严重的言语或行为。', '可数，多指小事。', 'Do not worry about such silliness.', '别为这种蠢事操心。', ['petty silliness'], [], 'noun', 'countable', '社交'],
  ], '', [], '自扫根（brief 缺口错位，见头注释）——silly 与 sill 均不在库（自扫无级），-ness 虽在 §5.4 清单但无在库根词可取，留空；抽象多不可数故 forms 留空；近义 nonsense 胡说、荒唐（队列原样，置首义项）');

  W('silly', 'adjective', '/ˈsɪli/', '', [], '愚蠢的；可笑的', 'Not sensible or not serious, sometimes in a way that makes people laugh.', [
    ['愚蠢的；不明智的', 'Showing a lack of good judgement or common sense.', '缺乏良好判断力或常识的。', '多作定语或表语，语气可轻可重。', 'That was a silly thing to say.', '那话说得很蠢。', ['a silly mistake', 'do not be silly'], ['dumb', 'stupid'], 'adjective', '定语/表语', '性格'],
    ['可笑的；闹着玩的', 'Not serious, meant as a joke or done for fun.', '并不认真，是闹着玩或逗趣的。', '中性偏戏谑，常与 a bit、just 连用。', 'We were just being silly.', '我们只是在闹着玩。', ['just being silly'], [], 'adjective', '表语', '社交'],
  ], '', ['stupid'], '自扫根（brief 缺口错位，见头注释）——silly/sill 词根不在库（自扫无级），留空；fam stupid 愚蠢的、近义 dumb 呆的与 stupid 愚蠢的（队列原样，置首义项）');

  W('silvery', 'adjective', '/ˈsɪlvəri/', 'A2', ['CET4'], '银的；银白色的', 'Looking, sounding or shining like silver.', [
    ['银制的；含银的', 'Made of silver, or containing silver.', '用银做成的或含银的。', '多作定语。', 'She kept her silvery rings in a small box.', '她把银戒指收在一只小盒子里。', ['silvery jewellery'], ['silver'], 'adjective', '定语', '外貌'],
    ['银白色的；清脆的', 'Shining pale white like silver, or clear and pleasant to hear.', '像银一样泛浅白色光泽的，或清脆悦耳的。', '多作定语，形容月光、头发与声音。', 'Moonlight fell on her silvery hair.', '月光照在她银白色的头发上。', ['silvery light', 'silvery voice'], [], 'adjective', '定语', '外貌'],
  ], '',['silver'], '自扫根（brief 缺口错位，见头注释）silver A2（author_s2）——silver + -y（透明形容词后缀，按库内 noise→noisy、rain→rainy、cotton→cottony 先例），A2 继承（判断项：-y 不在 §5.4 明列后缀中）；近义 silver 银、银色的（队列原样，置首义项）');

  W('similar to', 'adjective', '/ˌsɪmɪlə ˈtuː/', '', [], '与…相似；与…相像', 'Almost the same as another person or thing in some respects.', [
    ['与…相似；与…相像', 'Like someone or something else in one or more ways, but not the same in every way.', '在某一方面像人或事物，但并非处处相同。', '形容词短语，to 后接名词或代词；多作表语，常与 be 连用。', 'Your voice is similar to mine.', '你的声音和我的相似。', ['be similar to', 'similar to each other'], ['like'], 'adjective', '表语', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 like 像、与…相似（队列原样，置唯一义项，短语条目）').phrase = true;

  W('similarly', 'adverb', '/ˈsɪmɪləli/', 'A2', [], '同样地；相似地', 'In much the same way as someone or something else.', [
    ['以相似的方式；同样地', 'In a way that is like something else.', '以与其他事物相似的方式。', '修饰动词，常与 treat、respond 等连用。', 'The two cases were handled similarly.', '这两个案子处理方式相同。', ['similarly placed'], ['likewise'], 'adverb', '不及物', '通用'],
    ['同样也；同样地', 'Used to say that the same is true of another person or thing.', '表示另一个人或事物的情况也一样。', '修饰动词或整个句子，位于句首时常用逗号隔开。', 'Sales fell, and profits fell similarly.', '销售额下降了，利润也同样下降。', ['similarly affected'], [], 'adverb', '不及物', '商务'],
  ], '', ['likewise'], '自扫根（brief 缺口错位，见头注释）similar A2（author_s2）——similar + -ly（-ly 在 §5.4 清单，透明副词后缀），A2 继承；家族/近义 likewise 同样地（队列原样，置首义项）');

  W('simmer', 'verb/noun', '/ˈsɪmə/', '', [], '煨；文火慢煮；（情绪）一触即发', 'To cook liquid almost to boiling point, or to be about to break out.', [
    ['煨；文火慢煮', 'To cook food gently in liquid that is almost but not quite boiling.', '把食物放在将沸未沸的液体里慢慢煮。', '不及物，主语多为汤汁或锅；常与 gently、slowly 连用。', 'Leave the soup to simmer for twenty minutes.', '让汤用文火煨二十分钟。', ['simmer gently', 'simmer for twenty minutes'], ['boil'], 'verb', '不及物', '饮食'],
    ['（怒火、情绪）即将爆发；强忍未发', 'To be about to break out, used of strong feelings such as anger.', '（强烈情绪，尤指怒火）眼看就要爆发。', '不及物，常与 with 连用；比喻用法。', 'Tension had been simmering in the area for months.', '这一带的紧张气氛已积聚数月。', ['simmer with rage'], [], 'verb', '不及物', '情感'],
    ['（煮食物的）文火；微沸状态', 'The state of a liquid that is simmering, or a period of cooking this way.', '液体微沸的状态，或用文火煮的一段时间。', '不可数，常与 over、at 连用。', 'Turn the heat down and keep it at a simmer.', '把火调小，保持微沸。', ['at a simmer'], [], 'noun', 'uncountable', '饮食'],
  ], 'simmers~simmered~simmered~simmering', ['boil'], '自扫根（brief 缺口错位，见头注释）——sim- 非在库词根段，库内无 simmer 的可见词根可继，留空（判断项：boil A2（author_b2）仅作家族/近义对照，非词源根，不取级）；近义 boil 煮沸、沸腾（队列原样，置首义项）');

  W('simplicity', 'noun', '/sɪmˈplɪsəti/', 'A1', ['CET4'], '简单；简单性；朴素', 'Being plain and uncomplicated, in thought, in design or in daily life.', [
    ['简单；容易', 'The quality of being easy to understand, easy to use or easy to do.', '容易理解、容易使用或容易做到的性质。', '不可数，常与 of 连用。', 'The simplicity of the design won the prize.', '简洁的设计得了奖。', ['design simplicity', 'for simplicity'], ['ease'], 'noun', 'uncountable', '通用'],
    ['朴素；简洁（的生活、语言或风格）', 'The quality of having no decoration and being plain and natural.', '不加修饰、朴实自然的特质。', '不可数，形容衣着、文风与生活方式。', 'She chose a life of simplicity in the country.', '她选择在乡间过朴素的生活。', ['live in simplicity'], [], 'noun', 'uncountable', '艺术'],
  ], '',['simple'], '自扫根（brief 缺口错位，见头注释）simple A1（author_s2）——simple + -ity（按 author_s13.js severity←severe、author_s12.js sensitivity←sensitive 先例作名词后缀处理），A1 继承（判断项：-ity 不在 §5.4 明列后缀中）；抽象不可数故 forms 留空；近义 ease 容易、轻松（队列原样，置首义项）');

  W('simplify', 'verb', '/ˈsɪmplɪfaɪ/', 'A1', ['CET4'], '简化；使更易懂', 'To reduce something to a simpler form.', [
    ['使简化；使更易懂', 'To make something easier to understand or easier to do.', '让某事更容易理解或更容易去做。', '及物动词，宾语为流程、规则、说明书等。', 'Try to simplify the instructions for beginners.', '试着把说明改得更适合初学者。', ['simplify the process', 'simplify the rules'], ['reduce'], 'verb', '及物', '教育'],
    ['精简；使更高效', 'To remove unnecessary parts so that something works more efficiently.', '去掉多余部分，让运作更高效。', '及物动词，常与 structure、range 搭配。', 'The firm simplified its product range.', '公司精简了产品线。', ['simplify the structure'], ['streamline'], 'verb', '及物', '商务'],
  ], 'simplifies~simplified~simplified~simplifying', ['streamline'], '自扫根（brief 缺口错位，见头注释）simple A1（author_s2）——simple 去 e + -ify（e→ify 正字类，按 author_f4.js falsify←false A2、author_p14.js purify←pure B1 先例作透明后缀），A1 继承（判断项：-ify 不在 §5.4 明列后缀中）；家族 streamline 精简、使合理化（队列原样），近义 reduce 减少（置首义项）、streamline 精简（置义项2），均队列原样');

  W('simply', 'adverb', '/ˈsɪmpli/', 'A1', ['CET4'], '简单地；仅仅；简直', 'In a plain and easy way, or only, or completely.', [
    ['简单地；不复杂地', 'In a way that is easy to do or easy to understand.', '以容易做或容易理解的方式。', '修饰动词，常与 explain、put 等连用。', 'She explained the rule simply.', '她把规则讲得很简单。', ['put it simply'], ['plain'], 'adverb', '不及物', '通用'],
    ['仅仅；只不过', 'Only; nothing more than.', '只是，不多不少。', '修饰动词，位置通常在动词之前。', 'I simply cannot believe it.', '我简直不能相信。', ['simply a matter of'], [], 'adverb', '不及物', '通用'],
    ['简直；完全', 'Used to emphasize that something is completely true.', '用来强调某事完全属实。', '修饰动词或整个句子，起加强语气的作用。', 'The plan simply will not work.', '这个计划根本行不通。', ['simply amazing'], [], 'adverb', '不及物', '通用'],
  ], '',['simple'], '自扫根（brief 缺口错位，见头注释）simple A1（author_s2）——simple + -ly（-ly 在 §5.4 清单，透明副词后缀），A1 继承；近义 plain 清楚地、明白地（队列原样，置首义项）');

  W('simulated', 'adjective', '/ˈsɪmjuleɪtɪd/', 'C1', [], '模拟的；假装的', 'Not genuine, but arranged to give the impression of the real thing.', [
    ['模拟的；仿真的', 'Made to look, feel or act like a real version of something.', '做成看起来、感觉起来或运作起来像真品的样子。', '多作定语，常与 test、environment 搭配。', 'The pilots trained in a simulated cockpit.', '飞行员在模拟驾驶舱里训练。', ['simulated exam', 'simulated environment'], ['virtual'], 'adjective', '定语', '科学'],
    ['假装的；冒充的', 'Not real but done or said to seem real, sometimes to deceive.', '并非真实却做得或说得像真的，有时带欺骗性。', '多作定语，含贬义。', 'He showed simulated concern for the team.', '他对团队表现出假装的关心。', ['simulated interest'], [], 'adjective', '定语', '性格'],
  ], '', ['virtual'], '自扫根（brief 缺口错位，见头注释）simulate C1（author_s2）——simulate + -ed（-ed 在 §5.4 清单，透明形容词后缀），C1 继承；fam virtual 虚拟的（队列原样），近义 virtual 虚拟的、模拟的（队列原样，置首义项）');

  W('simultaneously', 'adverb', '/ˌsɪməlˈteɪniəsli/', 'C1', [], '同时地', 'Happening at one and the same moment.', [
    ['同时地', 'At the same time as another event or action.', '与另一件事或动作在同一时刻发生。', '修饰动词，常与 with、while 连用。', 'The two events happened simultaneously.', '这两件事同时发生。', ['occur simultaneously'], [], 'adverb', '不及物', '通用'],
  ], '', ['meanwhile'], '自扫根（brief 缺口错位，见头注释）simultaneous C1（author_s2）——simultaneous + -ly（-ly 在 §5.4 清单，透明副词后缀），C1 继承；fam meanwhile 同时、其间（队列原样，置家族组），近义组队列未列');

  W('sincerely', 'adverb', '/sɪnˈsɪəli/', 'B1', [], '真诚地；谨上', 'In a way that is honest and true, and used in the closing of a letter.', [
    ['真诚地；真心地', 'In an honest and genuine way, with no attempt to pretend.', '以诚实、发自内心的方式，不作假。', '修饰动词，常与 believe、hope 等连用。', 'I sincerely hope you recover soon.', '我真心希望你早日康复。', ['sincerely hope'], [], 'adverb', '不及物', '情感'],
    ['（书信结尾敬语）谨上；敬上', 'Used at the end of a formal letter before the name of the person you are writing to.', '用于正式信函末尾、收信人姓名之前。', '信件落款套语，不作句子成分；英式常用 Yours sincerely，美式常用 Sincerely。', 'He signed the letter with sincerely and his name.', '他在信末写下 sincerely 和自己的名字。', ['Yours sincerely'], ['yours'], 'adverb', '不及物', '书面'],
  ], '',['sincere'], '自扫根（brief 缺口错位，见头注释）sincere B1（author_s2）——sincere + -ly（-ly 在 §5.4 清单，透明副词后缀），B1 继承；近义 yours 你的、你们的（队列原样，置书信义项，见 Yours sincerely 固定说法）');

  W('sinew', 'noun', '/ˈsɪnjuː/', '', [], '肌腱；筋；体力', 'The cord-like tissue joining muscle to bone, and the strength it gives.', [
    ['肌腱；筋', 'The tough cord that fastens a muscle to a bone.', '把肌肉牢牢连在骨头上的坚韧绳状组织。', '可数或不可数，常以复数 sinews 出现，属解剖与文学语体。', 'The runner tore a sinew in his calf.', '这名跑者拉伤了小腿的一根肌腱。', ['the sinews of the neck'], ['muscle'], 'noun', 'countable', '健康'],
    ['体力；力量；精力', 'Physical strength and the energy needed to do hard work.', '做辛苦工作所需的体力与精力。', '常用复数 sinews，书面语，常见搭配 the sinews of war。', 'The war strained the sinews of the economy.', '这场战争耗尽了经济的元气。', ['the sinews of war'], [], 'noun', 'countable', '书面'],
  ], 'sinews', [], '自扫根（brief 缺口错位，见头注释）——与 sin B1 罪（author_s2）形近但语义不直连（sinew 源自古英语 sinu 肌肉，与 sin 无关），切词假象判定留空（判断项）；近义 muscle 肌肉、力气（队列原样，置首义项）');

  W('sinful', 'adjective', '/ˈsɪnfl/', 'B1', [], '有罪的；邪恶的', 'Wicked, or breaking a moral or religious rule.', [
    ['有罪的；违背道德或宗教戒律的', 'Breaking a rule about what is right and wrong, especially in religion.', '违背是非准则、尤指宗教戒律的。', '多作表语或定语，宗教语体常见。', 'He confessed that he had been sinful.', '他承认自己有罪。', ['a sinful act'], [], 'adjective', '定语/表语', '宗教'],
    ['邪恶的；道德败坏的', 'Deeply wrong in a way that shocks other people.', '错得或坏得令旁人震惊的。', '多作定语，语气较重。', 'The novel tells of a sinful king.', '这部小说讲的是一位邪恶的国王。', ['a sinful heart'], ['wicked'], 'adjective', '定语', '性格'],
  ], '',['sin'], '自扫根（brief 缺口错位，见头注释）sin B1（author_s2）——sin + -ful（-ful 在 §5.4 清单，透明形容词后缀），B1 继承；近义 wicked 邪恶的、坏的（队列原样，置义项2）');

  W('singer', 'noun', '/ˈsɪŋə/', 'A1', ['CET4'], '歌手；歌唱家', 'Someone whose voice is used to make music, or who earns a living this way.', [
    ['歌手；歌唱家', 'A person who sings songs, especially as a job or in a band.', '唱歌的人，尤指以此为职业或在乐队中唱歌的人。', '可数，常与 pop、jazz、folk 等连用。', 'The singer forgot the words to the second verse.', '这位歌手忘了第二段的歌词。', ['a pop singer', 'lead singer'], [], 'noun', 'countable', '文化'],
    ['擅长唱（某种歌）的人', 'A person who sings in a stated way or in a particular style.', '以某种方式或某种风格唱歌的人。', '可数，常与 good、bad、beautiful 等连用。', 'She is a good singer but a poor dancer.', '她歌唱得好，舞跳得差。', ['a good singer'], [], 'noun', 'countable', '文化'],
  ], 'singers', ['song'], '自扫根（brief 缺口错位，见头注释）sing A1（author_s2）——sing + -er（-er 在 §5.4 清单，透明施事后缀），A1 继承；fam song 歌曲（队列原样，置家族组），近义组队列未列');

  W('singing', 'noun', '/ˈsɪŋɪŋ/', 'A1', [], '唱歌；歌声', 'Making music with the voice, together with the sound it produces.', [
    ['唱歌；歌唱（活动）', 'The activity or the skill of making musical sounds with the voice.', '用人声发出音乐的活动或技能。', '不可数，常与 in、of 连用，也可作定语。', 'She took a course in singing.', '她报了一个唱歌班。', ['singing lesson', 'in singing'], ['song'], 'noun', 'uncountable', '文化'],
    ['歌声；嗓音', 'The sound made by a person, bird or insect when singing.', '人、鸟或虫唱出的声音。', '不可数，多用形容词描述音质。', 'Her singing woke the whole street.', '她的歌声把整条街都吵醒了。', ['beautiful singing'], ['vocal'], 'noun', 'uncountable', '艺术'],
  ], '',['sing'], '自扫根（brief 缺口错位，见头注释）sing A1（author_s2）——sing + -ing（-ing 在 §5.4 清单，动名词后缀），A1 继承；抽象不可数故 forms 留空；近义 song 歌（置首义项）、vocal 嗓音、声乐部分（置义项2），均队列原样');

  W('siren', 'noun', '/ˈsaɪərən/', '', [], '警报器；汽笛；塞壬', 'A warning horn, a ship whistle, or the mythical singing temptress.', [
    ['警报器；警笛', 'A loud device that makes a rising and falling noise to warn people of danger.', '发出高低起伏声响、向人们示警的装置。', '可数，常与 go off、sound 连用。', 'The sirens of the fire engine filled the street.', '消防车的警笛声响彻街道。', ['air raid siren', 'sirens wailed'], ['horn'], 'noun', 'countable', '社会'],
    ['汽笛；（工厂或船上的）笛声', 'A loud whistle used by a ship or a factory to signal a change of shift.', '轮船或工厂用来发出信号的鸣笛。', '可数，多见于港口与工业语境。', 'The siren sounded the end of the shift.', '汽笛鸣响，宣告下班。', ['sound the siren'], [], 'noun', 'countable', '交通'],
    ['（神话）塞壬；诱人而危险的女子', 'In myth, a creature whose sweet singing lured sailors to their doom, and by extension a tempting woman.', '神话中以甜美歌声诱使水手丧命的女妖，引申指诱人而危险的女子。', '可数，文学语体。', 'Her voice played like a siren in his mind.', '她的声音像塞壬之歌在他脑中回响。', ['a siren call'], [], 'noun', 'countable', '文学'],
  ], 'sirens', [], '自扫根（brief 缺口错位，见头注释）——希腊语 Seirēn 借词，库内无可见词根可继，留空；近义 horn 喇叭、号角（队列原样，置首义项）');

  W('sitter', 'noun', '/ˈsɪtə/', 'A1', [], '代看孩子的人；（美术）模特', 'Someone who watches over children or pets, or who poses for a painter.', [
    ['代人照看孩子或宠物的人', 'A person who takes care of children or pets in their own home while the owners are away.', '在自己家里替外出的主人照看孩子或宠物的人。', '可数，口语中 babysitter 的缩略说法，多用 a sitter。', 'We need a sitter for Friday evening.', '我们周五晚上需要个看孩子的人。', ['find a sitter'], [], 'noun', 'countable', '家庭'],
    ['（美术或摄影的）模特；被画像的人', 'A person who sits still for an artist or a photographer to be painted or photographed.', '为画家或摄影师静坐摆姿势的人。', '可数，常见于美术与摄影语境。', 'The painter worked from a sitter in his studio.', '画家在画室里对着模特作画。', ['pose as a sitter'], ['model'], 'noun', 'countable', '艺术'],
  ], 'sitters',['sit'], '自扫根（brief 缺口错位，见头注释）sit A1（author_s2）——sit + -er（-er 在 §5.4 清单，透明施事后缀，指静坐不动的人；「代看孩子者」一义由「静坐看家」引申，与 sit 直连），A1 继承；近义 model 模特（队列原样，置义项2）');

  W('sitting', 'noun/adjective', '/ˈsɪtɪŋ/', 'A1', ['CET4'], '一次；一场；现任的', 'One occasion of a meeting or a meal, or holding an official position now.', [
    ['（会议、法庭的）一次；一届', 'One occasion of a meeting, a debate or a court case.', '会议、辩论或法庭审理的一次。', '可数，常与 of 连用。', 'The court resumes its sitting next Monday.', '法庭下周恢复开庭。', ['the opening sitting'], ['session'], 'noun', 'countable', '法律'],
    ['（就餐的）一场；一次就座', 'One period when people are served a meal in a restaurant or hall.', '餐馆或食堂供应一餐的一段时间。', '可数，常见于限时供餐的场合。', 'There will be two sittings for lunch.', '午餐将分两场进行。', ['two sittings'], [], 'noun', 'countable', '饮食'],
    ['现任的；在位的', 'Holding an official position at the present time.', '当下正担任某一职务的。', '形容词，只作定语，常见 a sitting president。', 'The sitting member lost the vote.', '现任议员在投票中落败。', ['the sitting president'], ['incumbent'], 'adjective', '定语', '政治'],
  ], 'sittings',['sit'], '自扫根（brief 缺口错位，见头注释）sit A1（author_s2）——sit + -ing（-ing 在 §5.4 清单，动名词后缀，指「就座的一次」与「在位的一段」），A1 继承；混合名词/形容词条目故 forms 取名词复数；近义 session 会议、会期（置首义项）、incumbent 现任的（置形容词义项），均队列原样');

  W('sitting room', 'noun', '/ˈsɪtɪŋ ruːm/', '', [], '起居室；客厅', 'The main room of a home used for relaxing in.', [
    ['起居室；客厅', 'A room in a house where family members sit together to talk, read or watch television.', '家里供家人坐在一起聊天、看电视或读书的房间。', '可数，英式英语常用，美式常说 living room。', 'The whole family met in the sitting room.', '全家人聚在客厅里。', ['a bright sitting room'], ['living-room'], 'noun', 'countable', '家居'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 living-room 起居室、客厅（队列原样，置唯一义项，短语条目）').phrase = true;

  W('sixteenth', 'number', '/ˌsɪksˈtiːnθ/', 'A1', [], '第十六；十六分之一', 'Number 16 in a counting order, or one of sixteen equal parts.', [
    ['第十六', 'Number 16 in a series, coming after the fifteenth position.', '序列中的第 16，排在第十五位之后。', '数词家族统一取序数词义。', 'Her flat is on the sixteenth floor.', '她的公寓在第十六层。', ['the sixteenth century', 'in sixteenth place'], ['sixteen'], 'number', 'null', '通用'],
    ['十六分之一', 'One of sixteen equal parts that something is divided into.', '把某物分成十六等份后其中的一份。', '数词家族统一取序数词义。分数义常与 of 连用，前面加 the。', 'Only a sixteenth of the land is farmed.', '只有十六分之一的土地在耕种。', ['a sixteenth of the total'], [], 'number', 'null', '数学'],
  ], '', ['sixteen'], '自扫根（brief 缺口错位，见头注释）sixteen A1（author_s2）——sixteen + -th（-th 在 §5.4 清单，透明序数后缀，先例 author_e3.js:112 eighteenth←eighteen），A1 继承；家族 sixteen 十六（基数词入家族组），近义 sixteen（置首义项，队列原样）');

  W('sixth', 'number', '/sɪksθ/', 'A1', [], '第六；六分之一', 'Number 6 in counting order, or one of six equal parts.', [
    ['第六', 'Number 6 in a series, coming after the fifth position.', '序列中的第 6，排在第五位之后。', '数词家族统一取序数词义。', 'June is the sixth month of the year.', '六月是一年中的第六个月。', ['the sixth sense', 'in sixth place'], ['six'], 'number', 'null', '通用'],
    ['六分之一', 'One of six equal parts of a whole.', '把某物分成六等份后其中的一份。', '数词家族统一取序数词义。分数义常与 of 连用，前面加 the。', 'A sixth of the cake was left.', '蛋糕还剩下六分之一。', ['a sixth of the total'], [], 'number', 'null', '数学'],
  ], '',['six'], '自扫根（brief 缺口错位，见头注释）six A1（author_s2）——six + -th（-th 在 §5.4 清单，透明序数后缀，同 seventeenth 先例），A1 继承；家族组队列未列故留空，近义 six（置首义项，队列原样）');

  W('sixtieth', 'number', '/ˈsɪkstiəθ/', 'A1', [], '第六十；六十分之一', 'Number 60 in counting order, or one of sixty equal parts.', [
    ['第六十', 'Number 60 in a series, coming after the fifty-ninth position.', '序列中的第 60，排在第五十九位之后。', '数词家族统一取序数词义。', 'This is her sixtieth birthday.', '这是她的第六十个生日。', ['the sixtieth year', 'in sixtieth place'], ['sixty'], 'number', 'null', '通用'],
    ['六十分之一', 'One of sixty equal parts of a whole.', '把某物分成六十等份后其中的一份。', '数词家族统一取序数词义。分数义常与 of 连用，前面加 the。', 'The error was no bigger than a sixtieth of a degree.', '误差不超过六十分之一度。', ['a sixtieth of a degree'], [], 'number', 'null', '数学'],
  ], '',['sixty'], '自扫根（brief 缺口错位，见头注释）sixty A1（author_s2）——sixty + -th（-th 在 §5.4 清单，透明序数后缀，同 seventeenth 先例），A1 继承；家族组队列未列故留空，近义 sixty（置首义项，队列原样）');

  W('sizeable', 'adjective', '/ˈsaɪzəbl/', 'A1', [], '相当大的；可观的', 'Big enough to be considered a lot or to be practical to use.', [
    ['相当大的；可观的', 'Fairly large in amount, number or degree.', '在数量、数目或程度上相当大。', '多作定语，常与 amount、sum、proportion 搭配。', 'They paid a sizeable amount for the flat.', '他们为这套公寓付了一笔可观的钱。', ['a sizeable amount', 'a sizeable proportion'], ['tidy'], 'adjective', '定语', '商务'],
    ['（面积）宽敞的；够用的', 'Big enough to be comfortable or practical to use.', '大到用起来舒适方便的。', '多作定语，形容房间与空间。', 'The flat has a sizeable kitchen.', '这套公寓有个相当宽敞的厨房。', ['a sizeable garden'], [], 'adjective', '定语', '家居'],
  ], '',['size'], '自扫根（brief 缺口错位，见头注释）size A1（author_s2）——size + -able（-able 在 §5.4 清单），取「尺寸大的」直连义，A1 继承（判断项：sizeable 语义为「相当大」，由 size 引申，非「可被测量的」被动义）；近义 tidy 可观的、相当多的（队列原样，置首义项）');

  W('skewer', 'noun/verb', '/ˈskjuːə/', '', [], '烤肉扦；串起来', 'A roasting pin for food, and the action of pushing food onto it.', [
    ['烤肉扦；串肉钎', 'A long metal or wooden pin used to hold pieces of food together while they are cooked.', '烤食物时把食物块串在一起的长金属或木制钎子。', '可数，常与 of 连用。', 'Thread the lamb onto a skewer.', '把羊肉串到钎子上。', ['a metal skewer', 'a kebab skewer'], ['spit'], 'noun', 'countable', '饮食'],
    ['用钎子串起；刺穿', 'To push a pointed stick through food or through something else.', '把尖头棍插过食物或其他东西。', '及物动词，本义为串食物，也可比喻言语伤人。', 'She skewered the pieces of chicken one by one.', '她把鸡肉一块块串起来。', ['skewer the meat'], [], 'verb', '及物', '饮食'],
  ], 'skewers~skewered~skewered~skewering', ['spit'], '自扫根（brief 缺口错位，见头注释）——skewer 的词根 skew 不在库（自扫无级），-er 后缀无在库词根可继，留空；fam/近义 spit 烤肉叉、炙叉（队列原样，置首义项），spit 与 skewer 同为烤肉工具的家族/近义对照，不取级');

  W('skid', 'noun/verb', '/skɪd/', '', [], '打滑；轮挡；滑橇', 'A slide of a vehicle wheel, or the act of sliding out of control.', [
    ['（车轮）打滑；滑行', 'To slide sideways out of control, used of a vehicle when its wheels lose grip.', '车辆车轮失去抓地力时侧向失控滑动。', '不及物，常与 on、into 连用。', 'The car skidded on the wet road.', '车在湿滑的路面上打了滑。', ['skid on ice', 'skid to a halt'], ['slip'], 'verb', '不及物', '交通'],
    ['（车辆的）打滑；溜滑', 'A sudden sliding movement of a vehicle on a slippery surface.', '车辆在湿滑路面上突然发生的滑动。', '可数，常见搭配 go into a skid。', 'The van went into a skid on the icy road.', '面包车在结冰的路面上打滑了。', ['go into a skid'], [], 'noun', 'countable', '交通'],
    ['（卡车或飞机的）轮挡；滑橇', 'A strip or a metal frame fixed under a vehicle or an aircraft to support it.', '装在车辆或飞机下方起支撑作用的条状物或金属架。', '可数，工程与航空语境。', 'The cargo is strapped to the skid.', '货物被固定在滑橇上。', ['a landing skid'], [], 'noun', 'countable', '工具'],
  ], 'skids~skidded~skidded~skidding', [], '自扫根（brief 缺口错位，见头注释）——斯堪的纳维亚语借词，库内无可见词根可继（skid 不在库），留空；近义 slip 滑、打滑（队列原样，置首义项）');

  W('skilful', 'adjective', '/ˈskɪlfl/', 'A2', [], '有技能的；熟练的', 'Good at doing something well, especially after practice.', [
    ['熟练的；有造诣的', 'Having or showing skill, gained through practice or natural ability.', '有技巧或显出技巧，来自练习或天赋。', '常与 at、in 连用，也可作表语；英式拼写。', 'She is skilful at repairing engines.', '她修发动机很在行。', ['skilful at doing', 'a skilful player'], ['expert', 'good'], 'adjective', '定语/表语', '职业'],
    ['巧妙的；得心应手的', 'Done in a clever and effective way, or easy to handle skilfully.', '做得巧妙有效，或用起来顺手灵巧。', '多作定语，形容手法、动作与工具。', 'A skilful move turned the game around.', '一记巧妙的走位扭转了比赛。', ['skilful hands', 'a skilful move'], ['great', 'handy'], 'adjective', '定语', '体育'],
  ], '', ['expert'], '自扫根（brief 缺口错位，见头注释）skill A2（author_s2）——skill + -ful（-ful 在 §5.4 清单），A2 继承（判断项：英式拼写 skill 双 l 变单 l，词干正字交替，同 author_s13.js shelve←shelf 先例）；fam expert 专家、内行（队列原样），近义 expert 内行的与 good 好的（置首义项）、great 高明的与 handy 手巧的（置义项2），均队列原样');

  W('skilled', 'adjective', '/skɪld/', 'A2', ['CET4'], '熟练的；有技能的', 'Well trained and able to work to a high standard.', [
    ['熟练的；有技术的', 'Having the knowledge and ability needed to do a job or a task well.', '具备把工作或任务做好所需的知识与能力。', '常与 in、at 连用，多作定语，常形容工人与技术。', 'They are looking for skilled workers.', '他们在招熟练工。', ['skilled labour', 'skilled workers'], ['proficient'], 'adjective', '定语', '职业'],
    ['有专长的；训练有素的', 'Good at a particular activity because of training or experience.', '因训练或经验而在某项活动上擅长。', '多作定语，常与 in 连用。', 'She is skilled in several languages.', '她通晓数种语言。', ['skilled in'], ['adept'], 'adjective', '定语', '教育'],
    ['（手艺）精巧的；精湛的', 'Needing or showing careful training and practice to do well.', '需要或显示出细致训练与实践才能做好。', '多作定语，形容工艺与技艺。', 'Skilled craftsmanship keeps the tradition alive.', '精湛的技艺让这一传统延续下来。', ['skilled craftsmanship'], ['accomplished'], 'adjective', '定语', '艺术'],
  ], '', ['proficient'], '自扫根（brief 缺口错位，见头注释）skill A2（author_s2）——skill + -ed（-ed 在 §5.4 清单，透明形容词后缀），A2 继承；fam proficient 熟练的、精通的（队列原样，置家族组），近义 proficient 精通的（置首义项）、adept 内行的（置义项2）、accomplished 有造诣的（置义项3），均队列原样');
})(typeof window !== 'undefined' ? window : globalThis);
