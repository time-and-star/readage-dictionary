/* data/words/cet/author_r11.js — 常用词 R 批次 11（收尾），缺口 run-up ~ rut，共 6 条
 * （5 单词 + 1 短语：running costs）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 6 条均无考级标签（照抄队列 tags 空）。
 * 扫根结论：brief 全部显示 ←?（连字符词/未命中），自扫 run A1（author_r2，verb/noun）——
 * · 复合词取首成分：run-up←run A1（run+up 取首成分 run 在库，助跑/临近均由 run up 直连）。
 * · 留空项：rungs（rung 源自古英语 hrung 横杆，与 run「跑」非构词联系，切词假象且单数不在库）、
 *   runt（无可靠语义基）、rustic（与 rural 词干 rus/rur 不同且均不在库，兄弟派生不成立，判断项）、
 *   rut（与 rot/rug 形近非语义基），及短语 running costs（整体不取成分作根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r11.js 必须在 _cet_helper.js 之后加载');

  W('run-up', 'noun', '/ˈrʌn ʌp/', 'A1', [], '预备阶段；助跑', 'A period of preparation before an event, or a run taken to gain speed.', [
    ['预备阶段；临近阶段', 'The period of time just before an important event, when people are preparing for it.', '重要事件发生前、人们为此做准备的一段时间。', '可数，常与 to 连用，英式常用。', 'In the run-up to the election all parties campaigned hard.', '选举前夕各政党都全力拉票。', ['in the run-up to'], ['countdown'], 'noun', 'countable', '政治'],
    ['助跑', 'A short run taken to gain speed before jumping or throwing.', '为跳远或投掷等借速而做的一小段跑动。', '可数，体育用语。', 'Her run-up was spoiled by the wet track.', '她的助跑被湿滑的跑道打乱了。', ['a long run-up'], [], 'noun', 'countable', '体育'],
  ], 'run-ups', ['countdown'], 'run + up 复合词取首成分 run A1 在库（author_r2），助跑/临近均由 run up 动词短语语义直连，A1 继承（brief 显示 ←?，连字符词未命中，自扫确认）；家族/近义 countdown 倒计时、临近（队列原样，置预备阶段义项）');

  W('rungs', 'noun', '/rʌŋz/', '', [], '梯子横档；阶层（复数）', 'The steps of a ladder, or levels in a system of rank.', [
    ['梯子横档（复数）', 'The steps or bars of a ladder that you put your feet on.', '梯子上供脚踩的横木。', '用作复数；单数 rung 指一根横档，不在库。', 'He climbed the last two rungs of the ladder.', '他爬上了梯子最后两格横档。', ['the rungs of a ladder'], ['ladder'], 'noun', 'countable', '工具'],
    ['（事业的）阶层；级别', 'A level in a system of rank or progress.', '等级或晋升体系中的一级。', '常用复数，the rungs of...。', 'She moved up a rung and became a manager.', '她升了一级，当上了经理。', ['the next rung'], [], 'noun', 'countable', '职业'],
  ],'rungs', ['ladder'], '库内无可见词根——rung 源自古英语 hrung（横杆），与 run「跑」语义无构词联系（切词假象类），且单数 rung 不在库无根可继，留空；近义 ladder 梯子（队列原样，置横档义项）');

  W('running costs', 'noun', '/ˈrʌnɪŋ kɒsts/', '', [], '运营费用；日常开销', 'The regular money needed to keep a business or machine going.', [
    ['运营费用；日常开销', 'The regular costs of keeping a business, machine or vehicle in use.', '维持企业、机器或车辆运转的经常性开支。', '常用复数，作主语时谓语可单可复。', 'The new vans cut the running costs by a third.', '新货车把运营成本降了三分之一。', ['cut the running costs'], ['overhead'], 'noun', 'countable', '商务'],
  ], '', ['overhead'], '短语整体不取成分作根，分级留空；近义 overhead 间接费用、日常开支（队列原样，短语条目）').phrase = true;

  W('runt', 'noun', '/rʌnt/', '', [], '（一窝中）最弱小的幼崽', 'The smallest and weakest animal of a litter.', [
    ['（一窝中）最弱小的幼崽', 'The smallest and weakest animal in a litter of pigs or other animals.', '一窝小猪或其他动物中最小最弱的一只。', '可数；用于人时含矮小者贬义。', 'The runt of the litter was kept alive by hand.', '一窝中最弱小的那只靠人工喂养活了下来。', ['the runt of the litter'], ['shrimp'], 'noun', 'countable', '农业'],
  ], 'runts', [], '库内无可见词根（与 rat、rent 形近均非语义基），无把握留空；近义 shrimp 小虾、小个子（队列原样）');

  W('rustic', 'adjective', '/ˈrʌstɪk/', '', [], '乡村的；简朴的', 'Simple and typical of the countryside, or plain and roughly made.', [
    ['乡村的；有田园风味的', 'Typical of the countryside or of country life.', '典型的乡村或乡村生活的。', '多作定语。', 'We stayed in a rustic cottage by the lake.', '我们住在湖边一间乡村小屋里。', ['rustic charm'], ['rural'], 'adjective', '定语', '自然'],
    ['简朴粗陋的；未加修饰的', 'Made in a plain simple way, sometimes looking rough or unfinished.', '以简朴方式制作，有时显得粗糙未加修饰。', '多作定语。', 'The kitchen had rustic wooden shelves.', '厨房里装着简朴的木架子。', ['rustic furniture'], [], 'adjective', '定语', '家居'],
  ], '', ['rural'], '拉丁语 rusticus（乡村的）——与库内 rural（rur+al）词干 rus/rur 不同且均未在对方中全段可见，兄弟派生不成立，留空（判断项）；fam/syn rural 乡村的（队列原样，置乡村义项）');

  W('rut', 'noun', '/rʌt/', '', [], '车辙；例行常规', 'A deep mark made by wheels in soft ground, or a boring unchanging routine.', [
    ['车辙；沟槽', 'A deep track made by wheels in soft ground or mud.', '车轮在松软地面或泥地上压出的深痕。', '可数，常用复数。', 'The road was full of deep ruts after the rain.', '雨后路上满是深深的车辙。', ['deep ruts'], [], 'noun', 'countable', '交通'],
    ['例行常规；老一套', 'A way of life that has become boring because it never changes.', '因一成不变而变得乏味的生活方式。', '可数，常与 be in/get into a rut 连用。', 'He got stuck in a rut doing the same job for years.', '他多年做同一份工作，陷入了例行老套。', ['in a rut'], ['groove'], 'noun', 'countable', '心理'],
  ],'ruts', ['groove'], '库内无可见词根（与 rot 腐烂、rug 地毯形近均非语义基），无把握留空；近义 groove 沟槽、惯例（队列原样，置常规义项）');
})(typeof window !== 'undefined' ? window : globalThis);
