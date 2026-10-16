/* data/words/cet/author_w7.js — W 批次 7，缺口 would rather ~ wrongdoing，共 14 条
 * （11 单词 + 3 短语；短语清单：would rather、would you、write for）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_w7.txt，widx 125-138，词头无残缺；brief 首行 woven、末行 wrongdoing）。
 * CET 标签照抄队列：CET4 × 3（wreckage、writer、writing）、CET6 × 0，其余 11 条 []。
 * brief：%TEMP%\opencode\_w7_brief.txt 共 11 行，与本批 11 个单词一一对应；
 *   3 行给出根提示（wrapper ←wrap [B1]、writer ←write [A1]、writing ←write [A1]），
 *   8 行显示 ←?，一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('word'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库）。
 * 扫根结论（自扫，第 4 参）：weave B2（author_w1.js）、wreck B2（author_w2.js）、
 *   wrong A1（author_w2.js）、wrap B1（author_w2.js）、write A1（author_w2.js）；
 *   wow、wretch、wring、writ、write-up、wrongdoing 本词均不在库。
 * brief 根提示复核通过（自扫同级）：wrap B1（author_w2.js，verb/noun）、
 *   write A1（author_w2.js，verb）。
 * · 继承（6 条）：
 *   woven←weave B2 + -en（-en 在 §5.4 清单，weave→woven 为不规则过去分词作形容词，语义直连）；
 *   write-up←write A1（复合词取首成分，规范 §5.3，判断项）；
 *   writer←write A1 + -er（-er 在 §5.4 清单，施动者，语义直连）；
 *   writing←write A1 + -ing（-ing 在 §5.4 清单，语义直连）；
 *   wrapper←wrap B1 + -er（-er 在 §5.4 清单，表工具/包覆物，语义直连；原第 4 参误留空，
 *     与本条继承声明及 wrap B1 实扫不符，主 agent 复核后改为 B1）；
 *   wrongdoing←wrong A1（复合词取首成分，规范 §5.3，判断项）。
 * · 留空（5 单词 + 3 短语）：wow（感叹词兼动词，库内无语源根，词首非全段共享，兄弟派生不成立，判断项）、
 *   wreckage（wreck B2 在库，但 -age 属 §5.7 明示「不在清单且无先例」后缀，留空，判断项）、
 *   wretch（库内无词源根，-etch 不在 §5.4 清单，留空）、
 *   wring（库内无词源根，库外词，留空）、
 *   writ（古旧名词，write 的过去分词名词化，词形与语义均已分化，无语义直连词根，留空）；
 *   3 条短语一律 §6 分级留空。
 * CEFR 分布（11 单词）：A1 × 4（write-up、writer、writing、wrongdoing）、B1 × 1（wrapper）、
 *   B2 × 1（woven）、留空 × 5（wow、wreckage、wretch、wring、writ）；短语 3 条全留空。
 *   （wreckage 第 4 参原写作 'CET4'.slice(0, 0) || '' 的混淆写法，主 agent 已改为字面量 ''。）
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_w7.js 必须在 _cet_helper.js 之后加载');

  W('would rather', 'verb', '/wʊd ˈrɑːðə/', '', [], '宁可；宁愿', 'Used to say that you prefer one choice to another.', [
    ['宁愿；宁可', 'Used to say that you would prefer to do or have one thing rather than another.', '用来表示比起另一选择更想做或更想要某事。', '后接动词原形，常构成 would rather do than do 结构，表主观偏好。', 'I would rather walk than wait an hour for the bus.', '我宁愿走路，也不想等一个小时的公交车。', ['would rather do than do', 'would rather stay'], ['prefer'], 'verb', '及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 prefer 更喜欢（队列原样，置唯一义项恰好一次）').phrase = true;

  W('would you', 'verb', '/wʊd juː/', '', [], '你愿意…吗；能否请你…', 'Used to make a polite request or offer.', [
    ['你愿意…吗；能否请你…', 'Used with a verb to make a polite request, offer or invitation.', '与动词连用，用于提出礼貌的请求、提供或邀请。', '句首引导疑问句构成客套语气，与 could you 近义，属日常口语高频表达。', 'Would you close the window, please?', '请把窗户关上好吗？', ['would you mind', 'would you please'], ['could'], 'verb', '及物', '口语'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 could 能、可以（队列原样，置唯一义项恰好一次）').phrase = true;

  W('woven', 'adjective', '/ˈwəʊvən/', 'B2', [], '织成的；编织的', 'Made by crossing threads over and under each other on a loom.', [
    ['织成的；编织的', 'Made by interlacing threads on a loom, or closely combined as if by weaving.', '在织机上交织线缕织成的，或如编织般紧密结合的。', '定语表语两用，本义指织物工艺，也用于 woven into 等引申结构。', 'The basket was made from finely woven grass.', '这只篮子是用精细编织的草料做成的。', ['woven fabric', 'woven into'], ['textile'], 'adjective', '定语/表语', '工业'],
  ], '',['weave'], 'brief ←?，按 §5.2 自扫根：weave B2 织（author_w1.js 第 4 参）+ -en（-en 在 §5.4 清单），woven 为 weave 的过去分词转形容词，语义直连，B2 继承；fam 队列为空故第 10 参 []，近义 textile 纺织品（队列原样，置唯一义项恰好一次）');

  W('wow', 'interjection', '/waʊ/', '', [], '哇；呀（表惊叹）', 'An exclamation used to show great surprise or admiration.', [
    ['哇；呀', 'A word shouted to express strong surprise, pleasure or admiration.', '用来表达强烈惊讶、愉悦或赞叹的喊词。', '感叹词，口语中使用，可独立成句，也可引出赞叹对象。', 'Wow, the view from the top is amazing.', '哇，山顶的景色太壮观了。', ['wow, that is great'], ['my'], 'interjection', '不及物', '口语'],
  ], '', ['my'], 'brief ←?，按 §5.2 自扫根：库内无 wow 的语义直连词根，词首非全段共享，兄弟派生不成立（§5.6），留空（判断项）；家族/近义 my 表示惊叹的语气词（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('wrapper', 'noun', '/ˈræpə/', 'B1', [], '包装纸；包装物', 'A piece of paper, plastic or cloth that covers and protects something.', [
    ['包装纸；包装物', 'A covering of paper, plastic or other material that is folded round something to protect it.', '包裹在物品外面起保护作用的纸、塑料或其他材料的覆盖物。', '可数，动词 wrap + -er 表工具；糖果纸、书籍封套等均可用。', 'She dropped the sweet wrapper into the bin.', '她把糖纸丢进了垃圾桶。', ['a sweet wrapper', 'plastic wrapper'], ['envelope'], 'noun', 'countable', '通用'],
  ], 'wrappers', ['envelope'], 'brief 根提示 ←wrap B1 包、裹（按 §5.2 自扫 author_w2.js 第 4 参复核为 B1，verb/noun）+ -er（-er 在 §5.4 清单，表工具），语义直连核对通过，但 wrap 未给出 wrapper 的继承级明示，wrap 在库 B1，wrapper 按 -er 派生继承 B1（判断项：透明 -er 派生）；家族/近义 envelope 信封、封套（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('wreckage', 'noun', '/ˈrekɪdʒ/', '', ['CET4'], '残骸；废墟', 'The broken parts of something that has been destroyed, especially a vehicle or building.', [
    ['残骸；废墟', 'The remains of something that has been damaged or destroyed, especially a plane, ship or building.', '某物被损毁后的残余部分，尤指飞机、船只或建筑。', '不可数，常与 of 连用，多见于事故与灾难报道。', 'Rescue teams searched the wreckage for survivors.', '救援队在残骸中搜寻幸存者。', ['the wreckage of a ship', 'search the wreckage'], ['debris'], 'noun', 'uncountable', '交通'],
  ], '', ['debris'], 'brief ←?，按 §5.2 自扫根：wreck B2 残骸、失事（author_w2.js 第 4 参）虽在库，但 -age 属规范 §5.7 明示「不在清单且无先例」后缀，留空（判断项）；家族/近义 debris 残骸、碎片（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET4 标签照抄队列');

  W('wretch', 'noun', '/retʃ/', '', [], '可怜虫；卑鄙的人', 'An unfortunate or unhappy person, or a wicked person.', [
    ['可怜的人；不幸的人', 'A person who is unfortunate or in a miserable situation.', '处境悲惨或处境可怜的人。', '可数，多带同情或轻蔑口吻，文学与口语均可见。', 'The poor wretch had nowhere to sleep that night.', '那个可怜虫当晚无处过夜。', ['a poor wretch'], ['worm'], 'noun', 'countable', '通用'],
    ['卑鄙的人；坏蛋', 'A person who behaves in a wicked or unpleasant way.', '行为恶劣或令人讨厌的人。', '可数，骂人语，语气较强。', 'He lied to his friends like the wretch he was.', '他像卑鄙小人一样对朋友撒谎。', ['a miserable wretch'], [], 'noun', 'countable', '口语'],
  ], 'wretches', ['worm'], 'brief ←?，按 §5.2 自扫根：库内无 wretch 的在库词根（-etch 不在 §5.4 清单），留空；近义 worm 可怜虫、卑鄙的人（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('wring', 'verb', '/rɪŋ/', '', [], '拧；绞；扭', 'To twist and squeeze something, especially to remove liquid.', [
    ['拧；绞（水）', 'To twist and squeeze cloth, clothes or hair in order to remove water from it.', '扭转并挤压布料、衣物或头发以除去水分。', '及物动词，常与 out 连用，过去式过去分词均为 wrung。', 'She wrung the water out of the wet towel.', '她把湿毛巾里的水拧了出来。', ['wring out the clothes', 'wring the water from'], ['extract'], 'verb', '及物', '家居'],
    ['扭；勒（脖子）', 'To twist something forcefully, or to kill an animal by twisting its neck.', '用力扭动某物，或扭断动物的脖子将其杀死。', '及物动词，本义与引申「wring somebody hand 紧握某人的手」均可见。', 'The farmer wrung the neck of the injured bird.', '农夫扭断了那只受伤鸟的脖子。', ['wring somebody hand'], [], 'verb', '及物', '农业'],
  ], 'wrings~wrung~wrung~wringing', [], 'brief ←?，按 §5.2 自扫根：库内无 wring 的在库词根，留空；fam 队列为空故第 10 参 []，近义 extract 榨取、提取（队列原样，置首义项恰好一次）');

  W('writ', 'noun', '/rɪt/', '', [], '令状；书面命令', 'A formal written order from a court of law.', [
    ['令状；法院书面命令', 'A written legal document from a court that orders somebody to do or not to do something.', '法院签发的、命令某人做或不得做某事的书面法律文件。', '可数，法律术语，常见于 issue/serve a writ 搭配。', 'The company was served with a writ by its former partner.', '这家公司收到了前合伙人送达的法院令状。', ['issue a writ', 'serve a writ on somebody'], ['warrant'], 'noun', 'countable', '法律'],
  ], 'writs', ['warrant'], 'brief ←?，按 §5.2 自扫根：writ 为古旧名词，源出 write 的过去分词名词化，但现代词形与语义（法院令状）已分化，无语义直连词根，留空（判断项）；近义 warrant 令状、授权令（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('write for', 'verb', '/raɪt fɔː/', '', [], '为…撰稿；替…写作', 'To produce written material for a newspaper, magazine or another writer.', [
    ['为…撰稿；替…写作', 'To write articles or other material that will appear under another name or in a particular publication.', '以他人名义或为某出版物撰写文章或其他文字材料。', '及物动词短语，常接报纸、杂志、委托人，代笔义与 ghost 近。', 'He wrote for a weekly magazine before his first novel came out.', '他的第一部小说出版前，他常为一家周刊撰稿。', ['write for a newspaper', 'write for a living'], ['ghost'], 'verb', '及物', '出版'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 ghost 代笔、为人写作（队列原样，置唯一义项恰好一次）').phrase = true;

  W('write-up', 'noun', '/ˈraɪt ʌp/', 'A1', [], '（书面）报道；评述', 'A written report or review, especially one published in a newspaper.', [
    ['（书面）报道；评述', 'A written article that reports on or reviews an event, performance or product.', '报道或评论事件、演出或产品的书面文章。', '可数，口语与媒体常用，常指报纸或网站上的短评。', 'The play received a glowing write-up in the local paper.', '这部戏在当地报纸上获得了一篇热情洋溢的评述。', ['a glowing write-up', 'get a good write-up'], ['report'], 'noun', 'countable', '媒体'],
  ], 'write-ups', ['report'], 'brief ←?，按 §5.2 自扫根：复合词 write-up = write + up，按规范 §5.3 取首成分 write A1 写（author_w2.js 第 4 参），「书面报道」与 write「写」语义直连，A1 继承（判断项：复合词首成分裁定）；家族/近义 report 报道（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('writer', 'noun', '/ˈraɪtə/', 'A1', ['CET4'], '作家；作者；撰稿人', 'A person who writes books, articles or other texts as a job or activity.', [
    ['作家；作者', 'A person whose job is writing books, stories or articles.', '以写书、故事或文章为职业的人。', '可数，动词 write + -er 表施动者，用法最广。', 'The writer finished her novel after three years of work.', '这位作家经过三年的写作完成了她的小说。', ['a famous writer', 'a science writer'], ['author'], 'noun', 'countable', '文学'],
    ['撰稿人；执笔者', 'A person who writes a particular text, letter or document.', '撰写某篇特定文字、书信或文件的人。', '可数，可指任何执笔写下文字的人，不限于职业作家。', 'He was the writer of the letter that changed the policy.', '他就是那封改变政策的信的执笔者。', ['the writer of the report'], ['poet'], 'noun', 'countable', '书面'],
  ], 'writers', ['author', 'poet'], 'brief 根提示 ←write A1 写（按 §5.2 自扫 author_w2.js 第 4 参复核为 A1，verb）+ -er（-er 在 §5.4 清单，表施动者），语义直连核对通过，A1 继承；家族 author 作者、poet 诗人（队列原样，入第 10 参），近义 author 置义项 1、poet 置义项 2（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('writing', 'noun', '/ˈraɪtɪŋ/', 'A1', ['CET4'], '写作；文字；著作', 'The activity of writing, or words that have been written.', [
    ['写作；书写', 'The activity or skill of marking words on paper or a screen.', '在纸上或屏幕上书写文字的活动或技能。', '不可数，write + -ing 转名词，泛指书写行为。', 'Writing by hand is still taught in primary school.', '小学里仍然教授手写。', ['creative writing', 'writing skills'], ['prose'], 'noun', 'uncountable', '教育'],
    ['文字；著作；作品', 'Words, letters or literary works that have been produced in written form.', '以书面形式产生的文字、书信或文学作品。', '不可数或可数视语境，常见于 the writings of 某位作者的作品。', 'Scholars still study the writings of ancient thinkers.', '学者们仍在研读古代思想家的著作。', ['the writings of somebody'], ['script'], 'noun', 'uncountable', '文学'],
  ],'writings', ['prose'], 'brief 根提示 ←write A1 写（按 §5.2 自扫 author_w2.js 第 4 参复核为 A1，verb）+ -ing（-ing 在 §5.4 清单），语义直连核对通过，A1 继承；不可数故 forms 留空；家族 prose 散文（队列原样，入第 10 参），近义 prose 置义项 1、script 置义项 2（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('wrongdoing', 'noun', '/ˈrɒŋˌduːɪŋ/', 'A1', [], '不法行为；坏事', 'Behaviour that is illegal or morally wrong.', [
    ['不法行为；坏事', 'Illegal, dishonest or immoral behaviour.', '违法的、不诚实的或不道德的行为。', '不可数或可数视语境，wrong + doing 复合，常与 admit、accuse of 连用。', 'The official denied any wrongdoing in the tender process.', '这名官员否认在招标过程中有任何不法行为。', ['deny wrongdoing', 'accuse somebody of wrongdoing'], ['malpractice'], 'noun', 'uncountable', '法律'],
  ], '', ['malpractice'], 'brief ←?，按 §5.2 自扫根：复合词 wrongdoing = wrong + doing，按规范 §5.3 取首成分 wrong A1 错误的、不道德的（author_w2.js 第 4 参），「不法行为」与 wrong「不正当」语义直连，A1 继承（判断项：复合词首成分裁定）；近义 malpractice 渎职、不法行为（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

})(typeof window !== 'undefined' ? window : globalThis);
