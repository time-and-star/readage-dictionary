/* data/words/cet/author_s13.js — 常用词 S 批次 13，缺口 seventh ~ shopping centre，共 31 条
 * （27 单词 + 4 短语：shoot up、shop assistant、shop price、shopping centre）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 × 4：severity、sharpen、shipment、shipping；本批无 CET6）。
 * 扫根说明：brief 文件 _s13_brief.txt 与本任务缺口不匹配（队列重排后被重生成，内容为
 * smirk ~ solemnity 段），故 27 个单词一律按规范 §5.2 自行扫根——纯文本 fs.readFileSync +
 * indexOf 扫 assets/js/data/words/cet/author_*.js 取第 4 参 CEFR（curated.js 看 level 字段），
 * 未 require 全库。扫到的根：seven A1、seventy A1、severe B2、sex B1（author_s5 / author_s6），
 * shake A2、share A2、sharp B1、sheet A2、shelf A2、shell B1（author_s6），
 * shine A2、ship A2、shock B1、shop A1（author_s2）；另 sew B1（author_s6）为 sewer 的误链排除，
 * shallow B2（author_s6）仅作 shoal 的近义对照，两者均不取级。
 * · 直接继承（后缀在 §5.4 清单内）：seventh←seven A1 + -th、seventieth←seventy A1 + -th、
 *   shared←share A2 + -ed、sharpen←sharp B1 + -en、shining←shine A2 + -ing、
 *   shipment←ship A2 + -ment、shipping←ship A2 + -ing、shocking←shock B1 + -ing；
 * · 规则继承：shake-up←shake A2、shellfish←shell B1、shopkeeper←shop A1
 *   （复合词取首成分，规范 §5.3，run-up←run 与 firefighter←fire 先例）、
 *   sheets←sheet A2（复数形式单列，同 sales←sale A2 先例）；
 * · 判断项继承（备注逐条披露）：severity←severe B2 + -ity、sexuality←sex B1 + -uality
 *   （-ity 类不在本批可继清单，按 s12 sensitivity / sentimentality 先例）、
 *   shelve←shelf A2（f→v 词干正字交替，同 e→∅+ation 正字类判断）；
 * · 留空项（12 单词）：sewer（与 sew 形近但语义不直连，切词假象判断项）、shack、sham、shank、
 *   shard、shawl、shears（shear 不在库）、sheath、shimmer、shirk、
 *   shoal（与 shallow 非词首全段共享，§5.6 兄弟派生不成立）、shoddy，
 *   及 4 个短语（整体不取成分作根，分级留空）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s13.js 必须在 _cet_helper.js 之后加载');

  W('seventh', 'number', '/ˈsevnθ/', 'A1', [], '第七；七分之一', 'Number 7 in counting order, or one of seven equal parts.', [
    ['第七', 'Number 7 in a series, coming after the sixth position.', '序列中的第 7，排在第六位之后。', '数词家族统一取序数词义。', 'July is the seventh month of the year.', '七月是一年中的第七个月。', ['the seventh day', 'in seventh place'], ['seven'], 'number', 'null', '通用'],
    ['七分之一', 'One of seven equal parts that something is divided into.', '把某物分成七等份后其中的一份。', '数词家族统一取序数词义。分数义常与 of 连用，前面加 the。', 'Only a seventh of the work was finished.', '这项工作只完成了七分之一。', ['a seventh of the total'], [], 'number', 'null', '数学'],
  ], '', ['seven'], '自扫根（brief 缺口错位，见头注释）seven A1（author_s5）——seven + -th（透明序数后缀，先例 author_e3.js:112 eighteenth），A1 继承；家族 seven 七（基数词入家族组），近义 seven（置首义项，队列原样）');

  W('seventieth', 'number', '/ˈsevnθiəθ/', 'A1', [], '第七十；七十分之一', 'Number 70 in counting order, or one of seventy equal parts.', [
    ['第七十', 'Number 70 in a series, coming after the sixty-ninth position.', '序列中的第 70，排在第六十九位之后。', '数词家族统一取序数词义。', 'Her flat is on the seventieth floor of the tower.', '她的公寓在塔楼第七十层。', ['the seventieth time', 'the seventieth entry'], ['seventy'], 'number', 'null', '通用'],
    ['七十分之一', 'One of seventy equal parts of a whole.', '把某物分成七十等份后其中的一份。', '数词家族统一取序数词义。分数义常与 of 连用，前面加 the。', 'The gap was no bigger than a seventieth of a millimetre.', '误差不超过七十分之一毫米。', ['a seventieth of a millimetre'], [], 'number', 'null', '数学'],
  ], '', ['seventy'], '自扫根（brief 缺口错位，见头注释）seventy A1（author_s5）——seventy + -th（透明序数后缀，同 seventeenth 先例），A1 继承；家族 seventy 七十（基数词入家族组），近义 seventy（置首义项，队列原样）');

  W('severity', 'noun', '/sɪˈverəti/', 'B2', ['CET4'], '严重性；严厉', 'How serious and how harsh something is.', [
    ['严重性；严峻', 'The degree to which something such as an illness, a problem or the weather is serious.', '疾病、问题或天气等的严重程度。', '不可数，常与 of 连用；正式语体。', 'No one expected the severity of the storm.', '没有人料到这场风暴如此猛烈。', ['the severity of the pain', 'the severity of the crisis'], ['gravity'], 'noun', 'uncountable', '健康'],
    ['严厉；苛刻', 'The quality of being very strict, harsh or cruel in behaviour and judgement.', '行为与评判上非常严格、苛刻乃至残酷的特质。', '不可数，多用于描述惩罚、批评与态度。', 'He was shocked by the severity of the criticism.', '他被批评的严厉程度震住了。', ['with great severity', 'the severity of the punishment'], ['rigor'], 'noun', 'uncountable', '性格'],
  ], '', ['rigor'], '自扫根（brief 缺口错位，见头注释）severe B2（author_s6）——severe + -ity（-ity 类名词后缀，按 s12 sensitivity/sentimentality 先例），B2 继承（判断项：-ity 不在本批可继清单）；抽象不可数故 forms 留空；家族 rigor 严格、严苛，近义 gravity 严峻、严重（置首义项）、rigor 严厉、苛刻（置义项2），均队列原样');

  W('sewer', 'noun', '/ˈsuːə/', '', [], '下水道；排污管道', 'The underground drain line that takes used water out of a town.', [
    ['下水道；阴沟', 'A pipe or channel under a street that carries waste water and sewage away.', '铺设在街道下、排放污水与废水的管道或沟渠。', '可数，常与 system、pipe 连用。', 'The old sewer overflowed after the heavy rain.', '大雨过后这条旧下水道溢流了。', ['a sewer system', 'a blocked sewer'], ['drain'], 'noun', 'countable', '家居'],
  ], 'sewers', ['drain'], '自扫根（brief 缺口错位，见头注释）——与 sew B1 缝纫（author_s6）形近但语义不直连（下水道义源自古法语 eseu 洗涤，非 sew 派生），切词假象判定留空（判断项）；家族/近义 drain 排水管、下水道（队列原样，置唯一义项）');

  W('sexuality', 'noun', '/ˌseksʃuˈæləti/', 'B1', [], '性；性欲；性特征', 'The whole way a person lives and shows sexual feeling, together with the traits linked to it.', [
    ['性欲；性行为方式', 'The way a person experiences sexual desire and gives expression to it.', '一个人体验性欲并加以表达的方式。', '不可数；学术、医学与社会学语境常用。', 'The study looked at sexuality across different cultures.', '这项研究考察了不同文化中的性观念。', ['human sexuality'], ['sex'], 'noun', 'uncountable', '心理'],
    ['性征；性别相关特质', 'The qualities that society links with being male or female.', '社会把个人与男性或女性联系起来时所依据的特质。', '不可数，常与 identity、role 连用。', 'The book explores sexuality and social roles.', '这本书探讨性征与社会角色。', ['sexuality and identity'], [], 'noun', 'uncountable', '社会'],
  ],'sexualities',['sex'], '自扫根（brief 缺口错位，见头注释）sex B1（author_s6）——sex + -uality（-ity 类名词后缀，按 s12 sentimentality/sensitivity 先例），B1 继承（判断项：-uality 不在本批可继清单，中间形式 sexual 不在库）；抽象不可数故 forms 留空；近义 sex 性、性行为（队列原样，置首义项）');

  W('shack', 'noun', '/ʃæk/', '', [], '棚屋；简陋小屋', 'A rough little building for living in or storing things.', [
    ['棚屋；简陋小屋', 'A small building made roughly, used for living in or for keeping things.', '粗糙搭建的小房子，供居住或存放物品。', '可数，常带简陋与临时意味。', 'They sheltered from the rain in a wooden shack.', '他们在一间木棚屋里躲雨。', ['a wooden shack', 'a mountain shack'], ['hut'], 'noun', 'countable', '家居'],
  ], 'shacks', ['hut'], '自扫根（brief 缺口错位，见头注释）——美式口语借词，来源不确，库内无可见词根可继，留空；家族/近义 hut 小屋（队列原样，置唯一义项）');

  W('shake-up', 'noun', '/ˈʃeɪk ʌp/', 'A2', [], '改组；大整顿', 'A big change in how an organization or system is organized.', [
    ['改组；大整顿', 'A big change in the way an organization, team or system is run.', '对组织、团队或体制运作方式的重大改变。', '可数，常与 of 连用，也与 carry out、mount 连用。', 'The new boss ordered a shake-up of the whole department.', '新上司下令对整个部门进行大改组。', ['a major shake-up', 'a shake-up of the system'], ['reshuffle'], 'noun', 'countable', '职业'],
  ], 'shake-ups', ['reshuffle'], '自扫根（brief 缺口错位，见头注释）shake A2（author_s6）——复合词取首成分（规范 §5.3，run-up←run 先例），整体义由 shake up 引申为大改组、与 shake 直连，A2 继承；家族/近义 reshuffle 重组、改组（队列原样，置唯一义项）');

  W('sham', 'noun/adjective', '/ʃæm/', '', [], '假冒；虚假的', 'A pretence that is not genuine, or an imitation meant to mislead.', [
    ['假冒；赝品', 'Something that is not real but is made to look real in order to deceive people.', '并非真品却做成以假乱真、用来骗人的东西。', '可数，常与 of 连用。', 'The certificate turned out to be a clever sham.', '这张证书结果是个巧妙的赝品。', ['a clever sham', 'a sham of a hearing'], ['fraud'], 'noun', 'countable', '法律'],
    ['虚假的；装样子的', 'Not genuine or real, but only pretending to be so.', '并非真实，只是装出那个样子。', '多作定语，常形容 anger、concern、identity 等抽象名词。', 'She showed only a sham concern for the rules.', '她对规则只表现出虚假的在意。', ['sham anger', 'a sham fight'], [], 'adjective', '定语', '性格'],
  ], 'shams', [], '自扫根（brief 缺口错位，见头注释）——17 世纪口语缩略语，来源不确，库内无可见词根可继，留空；近义 fraud 欺诈、骗局（队列原样，置首义项）');

  W('shank', 'noun', '/ʃæŋk/', '', [], '柄杆；小腿', 'The slender shaft of a tool and the middle section of a leg.', [
    ['柄杆；杆身', 'The long thin part of a tool, nail or piece of equipment that joins its ends.', '连接工具、钉子或设备两端的细长部分。', '可数，机械与器具用语。', 'The shank of the drill broke under pressure.', '钻头的柄杆在压力下断了。', ['the shank of a tool'], [], 'noun', 'countable', '工具'],
    ['（人或动物的）小腿', 'The part of the leg between the knee and the ankle, in people or animals.', '人或动物膝盖与脚踝之间的那段小腿。', '可数，正式语体与兽医语境常用。', 'The horse had a scar on its front shank.', '这匹马的前小腿上有一道疤。', ['a leg shank'], ['leg'], 'noun', 'countable', '健康'],
  ], 'shanks', [], '自扫根（brief 缺口错位，见头注释）——日耳曼语基础词，库内无可见词根可继，留空；近义 leg 腿、小腿（队列原样，置第二义项）');

  W('shard', 'noun', '/ʃɑːd/', '', [], '碎片；碎块', 'A broken off piece with sharp edges, as of glass or stone.', [
    ['碎片；碎块', 'A small sharp piece of something such as glass, pottery or rock that has broken off.', '玻璃、陶器或岩石等破碎后脱落的带边小块。', '可数，常见于考古、新闻与科学报道。', 'They found a shard of green glass in the soil.', '他们在土里发现一块绿色玻璃碎片。', ['a shard of glass'], ['fragment'], 'noun', 'countable', '科学'],
  ], 'shards', [], '自扫根（brief 缺口错位，见头注释）——古英语基础词，库内无可见词根可继，留空；近义 fragment 碎片、片段（队列原样，置唯一义项）');

  W('shared', 'adjective', '/ʃeəd/', 'A2', [], '共享的；共同的', 'Belonging to or done by several people at once instead of one alone.', [
    ['共用的；共有的', 'Used or available to more than one person rather than to one person alone.', '由多人使用或享有，而不是一个人独占的。', '多作定语或表语，常与 with 连用。', 'The kitchen is shared by all the residents.', '厨房由所有住户共用。', ['a shared file', 'shared with others'], ['common'], 'adjective', '定语/表语', '家居'],
    ['集体的；共同承担的', 'Belonging to a group or done by a group of people as a whole.', '属于整个群体、或由群体共同完成的。', '多作定语，常与 responsibility、effort 搭配。', 'It was a shared effort by the whole team.', '这是全队共同努力的结果。', ['shared responsibility'], ['collective'], 'adjective', '定语', '社会'],
    ['相互的；彼此的', 'Felt or done by two or more people toward each other.', '两人或多人之间相互给予或感受到的。', '多作表语，常与 feeling、understanding 搭配。', 'The two sides reached a shared understanding.', '双方达成了共同的理解。', ['a shared understanding'], ['mutual', 'reciprocal'], 'adjective', '定语/表语', '社交'],
  ], '', ['collective', 'mutual'], '自扫根（brief 缺口错位，见头注释）share A2（author_s6）——share + -ed（透明形容词后缀），A2 继承；家族 collective 集体的、mutual 相互的（入家族组），近义 common（置首义项）、collective（置义项2）、mutual、reciprocal（置义项3），均队列原样');

  W('sharpen', 'verb', '/ˈʃɑːpn/', 'B1', ['CET4'], '使锋利；使增强', 'To make something sharp, or to make it stronger and clearer.', [
    ['使锋利；削尖', 'To make the edge of a knife, tool or blade sharp.', '让刀、工具或刀刃变得锋利。', '及物动词，宾语为具体器具。', 'He stopped to sharpen the knife on a stone.', '他停下来在石头上磨刀。', ['sharpen a pencil', 'sharpen the blade'], ['grind'], 'verb', '及物', '工具'],
    ['使更加敏锐；使增强', 'To make a feeling, quality or image stronger and more intense.', '让某种感觉、特质或画面变得更强烈、更清晰。', '及物动词，常与 focus、image、sense 搭配。', 'She took a break to sharpen her mind before the test.', '她休息了一会儿，让头脑在考试前更清醒。', ['sharpen the focus', 'sharpen the image'], [], 'verb', '及物', '心理'],
  ], 'sharpens~sharpened~sharpened~sharpening', ['grind'], '自扫根（brief 缺口错位，见头注释）sharp B1（author_s6）——sharp + -en（使动透明后缀，同 sadden←sad A1 先例），B1 继承；家族/近义 grind 磨、磨快（队列原样，置首义项）');

  W('shawl', 'noun', '/ʃɔːl/', '', [], '披肩；围巾', 'A wrapping cloth for the upper body and shoulders.', [
    ['披肩；围巾', 'A piece of cloth worn by a woman over the head, shoulders or arms.', '妇女披在头、肩或手臂上的一块布。', '可数，针织或织物制，常与 of 连用。', 'She wrapped a woollen shawl around her shoulders.', '她把一条羊毛披肩裹在肩上。', ['a woollen shawl'], ['wrap'], 'noun', 'countable', '外貌'],
  ], 'shawls', [], '自扫根（brief 缺口错位，见头注释）——乌尔都语与波斯语借词，库内无可见词根可继，留空；近义 wrap 披巾、围裹物（队列原样，置唯一义项）');

  W('shears', 'noun', '/ʃɪəz/', '', [], '大剪刀；剪切机', 'A large cutting tool with two long blades, used for heavy cutting jobs.', [
    ['大剪刀；长剪', 'A large tool like a pair of scissors, used for cutting grass, branches, metal or hair.', '一种类似剪刀的大工具，用于剪草、修剪枝条、剪金属或理发。', '常以复数形式出现，作主语时谓语用复数。', 'The gardener trimmed the hedge with a pair of shears.', '园丁用大剪修剪树篱。', ['a pair of shears', 'garden shears'], ['scissors'], 'noun', 'countable', '工具'],
  ], '', ['scissors'], 'shears 为 shear 的复数形单列词条，但自扫 shear 不在库（brief 缺口错位，见头注释），无级可继，留空；复数形式单列故 forms 留空；家族/近义 scissors 剪刀（队列原样，置唯一义项）');

  W('sheath', 'noun', '/ʃiːθ/', '', [], '鞘；护套', 'A close cover for a blade or a pointed object, or a thin layer wrapping a stem.', [
    ['鞘；刀鞘', 'A cover for a knife, sword or spear blade that keeps the sharp edge safe.', '保护刀、剑或长矛刃口的套子。', '可数，常与 of 连用；复数写成 sheaths。', 'He slid the sword back into its leather sheath.', '他把剑插回皮鞘。', ['a leather sheath', 'a knife sheath'], ['quiver'], 'noun', 'countable', '工具'],
    ['（植物或解剖上的）鞘', 'A thin layer of tissue or leaf base that wraps around a stem or an organ.', '包在茎或器官外面的薄膜状组织或叶基。', '可数，植物学与解剖学术语。', 'The leaf sheath protects the young shoot.', '叶鞘保护着幼芽。', ['a leaf sheath'], [], 'noun', 'countable', '科学'],
  ], 'sheaths', [], '自扫根（brief 缺口错位，见头注释）——日耳曼语基础词，库内无可见词根可继，留空；近义 quiver 箭囊（与 sheath 同为盛刃盛箭的护套器具，队列原样，置首义项）');

  W('sheets', 'noun', '/ˈʃiːts/', 'A2', [], '床单；薄片（复数）', 'Flat pieces of material, or the cloth covers used on a bed.', [
    ['（复数）床单', 'The pieces of cloth that cover a bed and are slept on.', '铺在床上供人睡卧的布单。', '复数形式单列词条；常与 of 连用，谓语用复数。', 'Clean sheets were put on the bed before the guests arrived.', '客人到来前床上换上了干净床单。', ['a set of sheets', 'clean sheets'], ['linen'], 'noun', 'countable', '家居'],
    ['（复数）一张张的片状物', 'Flat thin pieces of a material such as paper, glass or ice.', '纸张、玻璃或冰等材料的扁平薄片。', '复数形式单列词条；常与 of 连用。', 'Sheets of rain swept across the valley.', '一阵阵雨幕扫过山谷。', ['sheets of paper', 'sheets of ice'], [], 'noun', 'countable', '自然'],
  ],'sheets', ['linen'], '自扫根（brief 缺口错位，见头注释）sheet A2（author_s6）——sheet 的复数形式单列词条（同 sales←sale A2 先例），A2 继承；复数形式单列故 forms 留空；家族/近义 linen 床上用品、亚麻布（队列原样，置首义项）');

  W('shellfish', 'noun', '/ˈʃelfɪʃ/', 'B1', [], '贝类；甲壳类水产品', 'Shell bearing creatures from the sea that people eat.', [
    ['贝类；有壳水生动物', 'Sea animals that have a shell, such as crabs, oysters, shrimps and mussels.', '有壳的海产动物，如螃蟹、牡蛎、虾和贻贝。', '单复数同形，集合名词；常与 seafood 连用。', 'Shellfish from this bay are sold all over the country.', '这个海湾出产的贝类行销全国。', ['fresh shellfish', 'shellfish allergy'], ['crab'], 'noun', 'countable', '饮食'],
  ], '', ['crab'], '自扫根（brief 缺口错位，见头注释）shell B1（author_s6）——shell + fish 复合词取首成分（规范 §5.3，run-up←run 先例），有壳水产与 shell 直连，B1 继承；单复同形故 forms 留空；家族/近义 crab 螃蟹（队列原样，置唯一义项）');

  W('shelve', 'verb', '/ʃelv/', 'A2', [], '把…上架；搁置', 'To place items on a shelf, or to hold a plan back.', [
    ['把…放到架上', 'To put objects on a shelf or to arrange them on shelves.', '把物品摆放到架子上。', '及物动词，宾语为具体物品；常与 away 连用。', 'She shelved the jars along the wall.', '她把罐子沿墙摆上架子。', ['shelve the books', 'shelve the jars'], [], 'verb', '及物', '家居'],
    ['搁置；暂缓', 'To decide to postpone or drop a plan, project or idea.', '决定推迟或放弃某个计划、项目或想法。', '及物动词，宾语为抽象事物；新闻语体常用。', 'The council shelved the plan for a new road.', '委员会搁置了新建道路的计划。', ['shelve the plan', 'shelve an idea'], ['park'], 'verb', '及物', '政治'],
  ], 'shelves~shelved~shelved~shelving',['shelf'], '自扫根（brief 缺口错位，见头注释）shelf A2（author_s6）——shelf 去 f 加 ve 再带动词词尾（f→v 词干正字交替，同 e→∅+ation 正字类判断），上架与搁置义均与 shelf 直连，A2 继承（判断项：f→v 交替不在本批可继清单）；近义 park 停放、搁置（口语，队列原样，置第二义项）');

  W('shimmer', 'noun/verb', '/ˈʃɪmə/', '', [], '微光；闪烁', 'Gentle moving brightness, and the way something shines with it.', [
    ['闪烁；发微光', 'To shine with a soft light that seems to move or change.', '发出似乎在移动或变化的柔和光芒。', '不及物，主语多为水面、织物或光线；常与 with 连用。', 'The silk shimmered in the candlelight.', '丝绸在烛光下闪闪发光。', ['shimmer with light'], ['gleam'], 'verb', '不及物', '艺术'],
    ['微光；闪光', 'A soft light that moves slightly, or the effect that it creates.', '轻轻晃动的柔和光亮或其造成的光影效果。', '可数或不可数，常与 of 连用。', 'A faint shimmer rose from the hot road.', '热路面上升起一层微光。', ['a faint shimmer'], [], 'noun', 'uncountable', '自然'],
  ], 'shimmers~shimmered~shimmered~shimmering', ['gleam'], '自扫根（brief 缺口错位，见头注释）——-er 后缀下 shimm 并非在库词根（切词不成立），库内无可继根，留空；家族/近义 gleam 微光、闪烁（队列原样，置首义项）');

  W('shining', 'adjective', '/ˈʃaɪnɪŋ/', 'A2', [], '发光的；杰出的', 'Radiant in appearance, or outstanding in quality.', [
    ['发光的；闪耀的', 'Giving off light in a steady glow and looking bright.', '持续发出光亮、看上去明亮生辉的。', '多作定语，常与 light、surface 搭配。', 'The shining moon lit the path home.', '皎洁的月亮照亮了回家的路。', ['shining light', 'a shining surface'], ['bright'], 'adjective', '定语', '自然'],
    ['杰出的；卓越的', 'Very good, successful or impressive, and worth copying.', '非常出色、成功、令人钦佩而值得效仿的。', '多作定语，常见说法 a shining example。', 'Every trainee hopes to be a shining example.', '每个受训者都希望成为出色的榜样。', ['a shining example'], [], 'adjective', '定语', '职业'],
  ], '',['shine'], '自扫根（brief 缺口错位，见头注释）shine A2（author_s2）——shine + -ing（透明后缀），A2 继承；近义 bright 明亮的、发光的（队列原样，置首义项）');

  W('shipment', 'noun', '/ˈʃɪpmənt/', 'A2', ['CET4'], '装运；一批货物', 'The sending of goods to a buyer, or the batch of goods sent.', [
    ['装运；运送', 'The act of sending goods from one place to another by ship, truck or plane.', '把货物用船、卡车或飞机从一地运往另一地的过程。', '不可数或可数，商务与物流用语，常与 of 连用。', 'Goods are checked before shipment.', '货物在装运前要接受检查。', ['before shipment', 'shipment of goods'], ['transit'], 'noun', 'uncountable', '物流'],
    ['一批货；一批装运的货物', 'A quantity of goods that are sent out together at one time.', '一次同时发出的一批货物。', '可数，常与 of 连用。', 'A shipment of medical supplies arrived this morning.', '一批医疗物资今晨运到。', ['a shipment of rice'], [], 'noun', 'countable', '物流'],
  ], 'shipments',['ship'], '自扫根（brief 缺口错位，见头注释）ship A2（author_s2）——ship + -ment（透明名词后缀），A2 继承；近义 transit 运输、运送（队列原样，置首义项）');

  W('shipping', 'noun', '/ˈʃɪpɪŋ/', 'A2', ['CET4'], '航运；船舶（总称）', 'Carrying goods and people from place to place, and the ships engaged in it.', [
    ['航运业；海运', 'The business of moving cargo by sea or by other routes.', '经海路或其他途径运送货物的业务。', '不可数，行业用语，常与 container、cargo 搭配。', 'The company handles shipping between Asian ports.', '这家公司经营亚洲各港口间的航运业务。', ['container shipping', 'shipping costs'], ['freight'], 'noun', 'uncountable', '物流'],
    ['（总称）船舶；商船队', 'The ships of a country or a company, thought of as one group.', '把一个国家或公司的船只看作一个整体。', '不可数，常与 merchant 连用。', 'Merchant shipping passed the harbour in a long line.', '商船队排成长列驶过港口。', ['merchant shipping'], ['marine'], 'noun', 'uncountable', '交通'],
  ], '',['ship'], '自扫根（brief 缺口错位，见头注释）ship A2（author_s2）——ship + -ing（透明动名词后缀），A2 继承；抽象不可数故 forms 留空；近义 freight 货运（置首义项）、marine 海运的、船舶的（置义项2，取其与商船队相关义），均队列原样');

  W('shirk', 'verb', '/ʃɜːk/', '', [], '逃避；推卸', 'To dodge an obligation that belongs to you.', [
    ['逃避；推卸', 'To avoid doing a job or a duty that you are expected to do.', '躲开本应由自己承担的工作或责任。', '及物动词，宾语为任务与责任，常与 duty、work 搭配。', 'He never shirked a difficult task.', '他从不躲避艰巨的任务。', ['shirk responsibility', 'shirk the duty'], ['dodge'], 'verb', '及物', '职业'],
  ], 'shirks~shirked~shirked~shirking', [], '自扫根（brief 缺口错位，见头注释）——德语 schirken 借词，库内无可见词根可继，留空；近义 dodge 躲避、推诿（队列原样，置唯一义项）');

  W('shoal', 'noun', '/ʃəʊl/', '', [], '鱼群；浅滩', 'A crowd of fish moving as one body, or a shallow stretch of water.', [
    ['鱼群', 'A large group of fish that swim together in the same direction.', '朝同一方向游动的一大群鱼。', '可数，常与 of 连用。', 'A shoal of silver fish passed below the boat.', '一群银色的鱼从船下游过。', ['a shoal of fish'], ['school'], 'noun', 'countable', '自然'],
    ['浅滩；浅水处', 'A shallow place in a river or the sea, where sand or rock lies near the surface.', '河里或海中水底沙石贴近水面的浅处。', '可数，常与 of 连用，航行用语。', 'The boat ran aground on a hidden shoal.', '船在隐蔽的浅滩上搁浅了。', ['a hidden shoal'], ['shallow'], 'noun', 'countable', '地理'],
  ], 'shoals', [], '自扫根（brief 缺口错位，见头注释）——与 shallow B2（author_s6）虽同源，但非词首全段共享（规范 §5.6 兄弟派生不成立），不取级留空；近义 school 鱼群（置首义项）、shallow 浅滩（置义项2），均队列原样');

  W('shocking', 'adjective', '/ˈʃɒkɪŋ/', 'B1', [], '令人震惊的；极其过分的', 'Either offensive in a strong way, or big enough to alarm people.', [
    ['令人震惊的；骇人的', 'Very bad, rude or unacceptable, so that it makes people feel upset and surprised.', '糟糕、无礼或不可接受到让人吃惊不适的程度。', '多作定语或表语，语气较强。', 'The conditions in the camp were shocking.', '营地里的条件令人震惊。', ['a shocking story'], ['obscene'], 'adjective', '定语/表语', '社会'],
    ['极大的；过分的', 'Very great or severe, used to emphasize a quantity or an amount.', '形容数量或程度极大、过分，用于强调。', '多作定语，口语中常带夸张语气。', 'They charged a shocking price for the room.', '他们对这间房开了个离谱的价。', ['a shocking amount'], [], 'adjective', '定语', '商务'],
  ], '',['shock'], '自扫根（brief 缺口错位，见头注释）shock B1（author_s2）——shock + -ing（透明形容词后缀），B1 继承；近义 obscene 淫秽的、猥亵的（队列原样，置首义项）');

  W('shoddy', 'adjective', '/ˈʃɒdi/', '', [], '劣质的；卑劣的', 'Poor in workmanship and lacking in honest effort.', [
    ['劣质的；粗制滥造的', 'Made badly from cheap materials and likely to fall apart soon.', '用廉价材料粗劣制作、很快就会坏的。', '多作定语，也可作表语，含贬义。', 'The fittings were shoddy and failed within a year.', '这些配件质量低劣，一年内就坏了。', ['shoddy workmanship'], ['cheap'], 'adjective', '定语/表语', '工业'],
    ['卑劣的；不诚实的', 'Done without care or honesty and showing no respect for others.', '做事马虎而不诚实、对他人缺乏尊重。', '多作定语，形容行为与做法。', 'They complained about the shoddy treatment of the staff.', '他们投诉对员工的恶劣待遇。', ['shoddy treatment'], [], 'adjective', '定语', '性格'],
  ], '', [], '自扫根（brief 缺口错位，见头注释）——19 世纪英国俚语，来源不确，库内无可见词根可继，留空；近义 cheap 廉价的、质次价低的（队列原样，置首义项）');

  W('shoot up', 'verb', '/ʃuːt ʌp/', '', [], '猛涨；飞快长高', 'To jump upward in level or height within a short time.', [
    ['（价格等）猛涨；飙升', 'To rise very quickly to a high level.', '迅速上升到很高的水平。', '不及物短语，主语多为价格、数量与利率，常与 sharply 连用。', 'Food prices shot up after the dry summer.', '干旱的夏天过后食品价格猛涨。', ['prices shoot up', 'shoot up sharply'], ['rocket'], 'verb', '不及物', '商务'],
    ['快速长高', 'To grow taller very quickly, used of children and young animals.', '（孩子或幼小动物）长得很快。', '不及物短语，口语常用。', 'The twins shot up during the summer holidays.', '这对双胞胎暑假期间猛长了个子。', ['shoot up in height'], [], 'verb', '不及物', '家庭'],
  ],'shoots up~shot up~shooting up', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 rocket 迅速上升、飞涨（队列原样，置首义项，短语条目）').phrase = true;

  W('shop assistant', 'noun', '/ˈʃɒp əsɪstənt/', '', [], '店员；营业员', 'Shop staff whose job is dealing with people who buy.', [
    ['店员；营业员', 'A person who works in a shop and serves customers.', '在商店里为顾客服务的工作人员。', '可数，英式英语常用。', 'The shop assistant found the right size in the back room.', '店员在后面仓库里找到了合适的尺码。', ['a part-time shop assistant'], ['clerk'], 'noun', 'countable', '职业'],
  ], '', ['clerk'], '短语整体不取成分作根，分级留空（规范 §6）；家族/近义 clerk 店员、职员（队列原样，置唯一义项，短语条目）').phrase = true;

  W('shop price', 'noun', '/ˈʃɒp praɪs/', '', [], '商店售价；零售价格', 'What a shop charges the public for what it sells.', [
    ['商店售价；零售价', 'The price that customers pay for goods in a shop.', '顾客在商店购买商品所付的价格。', '可数，常与 of 连用，与出厂价、批发价相对。', 'The shop price rose while the factory price stayed flat.', '商店售价上涨而出厂价保持平稳。', ['the shop price of bread'], ['retail'], 'noun', 'countable', '商务'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 retail 零售（与 shop price 同属零售价场合，队列原样，置唯一义项，短语条目）').phrase = true;

  W('shopkeeper', 'noun', '/ˈʃɔːpkiːpə/', 'A1', [], '店主；零售商人', 'The owner behind the counter of a retail shop.', [
    ['店主；零售店老板', 'A person who owns or runs a small shop.', '拥有或经营一家小店的人。', '可数，中性词，英式与美式均用。', 'The shopkeeper unlocked the door at seven each morning.', '店主每天早上七点开店门。', ['a local shopkeeper'], ['grocer'], 'noun', 'countable', '职业'],
  ], 'shopkeepers', ['grocer'], '自扫根（brief 缺口错位，见头注释）shop A1（author_s2）——shop + keeper 复合词取首成分（规范 §5.3，firefighter←fire 先例），店主与 shop 直连，A1 继承；家族/近义 grocer 食品杂货店主（队列原样，置唯一义项）');

  W('shopping centre', 'noun', '/ˈʃɒpɪŋ sentə/', '', [], '购物中心；商业中心', 'A site where many stores gather under one management.', [
    ['购物中心；商业中心', 'A group of shops and services in one place, usually with parking and covered walkways.', '把若干商店与服务设施集中在一处、通常带停车场与顶廊的地方。', '可数，英式英语用 centre，美式写 center。', 'The new shopping centre opened last month.', '新购物中心上月开业。', ['a large shopping centre'], ['mall'], 'noun', 'countable', '商务'],
  ], '', ['mall'], '短语整体不取成分作根，分级留空（规范 §6）；家族/近义 mall 购物中心（队列原样，置唯一义项，短语条目）').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
