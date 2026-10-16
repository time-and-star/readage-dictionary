/* data/words/cet/author_p13.js — 常用词 P 批次 13，缺口 proposer ~ publicity，共 31 条
 * （28 单词 + 3 短语：provide for、public affairs、public health）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（9 条 CET4：
 * proposition、prospective、protection、protective、proud、provision、psychological、
 * publication、publicity；prosperity、psychiatrist 为 CET6）。
 * 扫根结论：propose B1、prospect B2、prosper C1、protect B1、protest B1、public A2
 * （brief 根提示）；property B1、prosecute C1、psychology B2、provide A2、pride B1
 * （author_p3 扫描）——
 * · 透明后缀：proposer←propose B1 + -er、proposition←propose B1 + -ition（propos 全段共享）、
 *   prosecutor←prosecute C1 + -or、prospective←prospect B2 + -ive、prospects←prospect B2 复数、
 *   prosperity←prosper C1 + -ity、protected←protect B1 + -ed、protection←protect B1 + -ion、
 *   protective←protect B1 + -ive、protector←protect B1 + -or、protester←protest B1 + -er、
 *   provisional←provision A2 + -al、publication←public A2 + -ation、publicity←public A2 + -ity。
 * · 拉丁词干交替：provision←provide A2 + -ion（provid→provis 的 d→s，同 describe→description
 *   类）；provisions←provision A2 复数（给养义）。
 * · 兄弟派生（词首 psych 全段共享，同 pharmacology←pharmacy 先例）：psychiatrist、
 *   psychosomatic←psychology B2（psychiatry/somatic 不在库，判断项披露）。
 * · 留空项：proprietary（与 property 同源但拼写不完全对应）、protrude（与 project 无词形
 *   对应）、proud（与 pride 同源但多字母差异）、prudence/prudent（同源兄弟互不在库）、
 *   pry、psyche、publican（publicanus 与 public 语义不直连）、protagonist（proto- 非自由
 *   成分）——均无库内可继根。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p13.js 必须在 _cet_helper.js 之后加载');

  W('proposer', 'noun', '/prəˈpəʊzə/', 'B1', [], '提议者', 'A person who makes a proposal.', [
    ['提议者', 'A person who makes a proposal.', '提出提议的人。', '可数。', 'The proposer outlined the plan.', '提议者概述了计划。', [], ['sponsor'], 'noun', 'countable', '通用'],
  ], 'proposers',['propose'], '←propose B1 + -er（施事后缀），B1 继承（brief 根提示）；近义 sponsor 赞助人、发起人');

  W('proposition', 'noun', '/ˌprɒpəˈzɪʃən/', 'B1', ['CET4'], '提议；命题', 'A proposal or a statement that can be proved.', [
    ['提议；建议', 'A proposal or suggestion, especially in business.', '提议，尤指商业上的。', '可数。', 'They backed the new proposition.', '他们支持了这个新提议。', [], ['solicit'], 'noun', 'countable', '通用'],
    ['命题', 'A statement that can be proved or disproved.', '可以证明或推翻的陈述。', '可数，逻辑学术语。', 'Each proposition is numbered.', '每个命题都标了号。', [], [], 'noun', 'countable', '科学'],
  ], 'propositions',['propose'], '←propose B1 + -ition（propos 全段共享，-ition 同 -ion 类），B1 继承（brief 显示 ←?，经 proposer←propose[B1] 根提示确认）；近义 solicit 征求、招揽');

  W('proprietary', 'adjective', '/prəˈpraɪətəri/', '', [], '专有的；专利的', 'Owned by a company as a special product.', [
    ['专有的；专利的', 'Owned by a company as a special product.', '作为特殊产品由公司拥有的。', '多作定语。', 'The brand holds a proprietary formula.', '该品牌持有专有配方。', ['proprietary rights'], ['patent'], 'adjective', '定语', '法律'],
  ], '', [], '拉丁 proprius（自己的）——与 property 同源但拼写不完全对应（同 poor→poverty 类保守），留空；近义 patent 专利的、专有的');

  W('prosecutor', 'noun', '/ˈprɒsɪkjuːtə/', 'C1', [], '检察官；公诉人', 'A person who conducts a case in court against somebody.', [
    ['检察官；公诉人', 'A person who conducts a case in court against somebody.', '在法庭上对某人提起诉讼的人。', '可数。', 'The prosecutor called two witnesses.', '检察官传唤了两名证人。', [], ['accuser'], 'noun', 'countable', '法律'],
  ], 'prosecutors',['prosecute'], '←prosecute C1 + -or（透明后缀），C1 继承（brief 显示 ←?，自行扫根 prosecute）；近义 accuser 控告者、原告');

  W('prospective', 'adjective', '/prəˈspektɪv/', 'B2', ['CET4'], '预期的；未来的', 'Expected or likely to happen.', [
    ['预期的；未来的', 'Expected or likely to happen.', '预期会发生的。', '多作定语。', 'Prospective buyers visited the flat.', '潜在买家参观了公寓。', ['prospective buyer'], ['future', 'probable'], 'adjective', '定语', '通用'],
  ], '',['prospect'], '←prospect B2 + -ive（透明后缀，prospect 全段可见），B2 继承（brief 显示 ←?，经 prospects←prospect[B2] 根提示确认）；近义 future 未来的、probable 可能的');

  W('prospects', 'noun', '/ˈprɒspekts/', 'B2', [], '前途；前景（复数）', 'The chances of future success.', [
    ['前途；前景（复数）', 'The chances of future success.', '未来成功的机会。', '常用复数形式。', 'The job offers good prospects.', '这份工作前景不错。', [], ['future'], 'noun', 'countable', '通用'],
  ], '',['future', 'prospect'], '←prospect B2 的复数形式（前景义），B2 继承（brief 根提示）；家族/近义 future 未来、前景');

  W('prosperity', 'noun', '/prəˈsperəti/', 'C1', ['CET6'], '繁荣；兴旺', 'The state of being successful, especially economically.', [
    ['繁荣；兴旺', 'The state of being successful, especially economically.', '成功的状态，尤指经济上。', '不可数。', 'Trade brought new prosperity.', '贸易带来了新的繁荣。', ['economic prosperity'], ['well-being'], 'noun', 'uncountable', '金融'],
  ], '',['prosper'], '←prosper C1 + -ity（透明后缀），C1 继承（brief 根提示）；近义 well-being 幸福、安康');

  W('protagonist', 'noun', '/prəˈtæɡənɪst/', '', [], '主角；主人公', 'The main character in a story or play.', [
    ['主角；主人公', 'The main character in a story or play.', '故事或戏剧中的主要人物。', '可数。', 'The protagonist faces a hard choice.', '主角面临艰难抉择。', [], ['hero'], 'noun', 'countable', '文化'],
  ], 'protagonists', [], '希腊 protagonistes（第一演员）——proto-（第一）非自由成分、-gon 不在库，留空；近义 hero 主角、英雄');

  W('protected', 'adjective', '/prəˈtektɪd/', 'B1', [], '受保护的', 'Kept safe from harm.', [
    ['受保护的', 'Kept safe from harm.', '被保护免受伤害的。', '多作表语。', 'The site is fully protected.', '该遗址已全面保护。', [], ['immune', 'secure'], 'adjective', '表语', '通用'],
  ], '',['protect'], '←protect B1 + -ed（透明后缀，分词形容词），B1 继承（brief 根提示）；近义 immune 免疫的、secure 安全的');

  W('protection', 'noun', '/prəˈtekʃən/', 'B1', ['CET4'], '保护；防护', 'The act of keeping somebody or something safe.', [
    ['保护；防护', 'The act of keeping somebody or something safe.', '保护某人或某物的行为。', '不可数。', 'The law offers protection to witnesses.', '法律为证人提供保护。', ['sun protection'], ['guard', 'hedge', 'refuge', 'safeguard', 'shield', 'shelter'], 'noun', 'uncountable', '通用'],
  ], '',['safeguard', 'shelter', 'protect'], '←protect B1 + -ion（protect 全段可见），B1 继承（brief 显示 ←?，经 protected←protect[B1] 根提示确认）；家族 safeguard 保障、shelter 庇护，近 guard 守卫、hedge 防护、refuge 避难、safeguard、shield 盾牌、shelter');

  W('protective', 'adjective', '/prəˈtektɪv/', 'B1', ['CET4'], '保护的；防护的', 'Giving protection.', [
    ['保护的；防护的', 'Giving protection.', '提供保护的。', '多作定语。', 'Protective clothing is required here.', '这里要求穿防护服。', ['protective gear'], ['outdoor'], 'adjective', '定语', '通用'],
  ], '',['protect'], '←protect B1 + -ive（透明后缀），B1 继承（brief 显示 ←?，经 protected←protect[B1] 根提示确认）；近义 outdoor 户外的（队列原样，指防护服用途）');

  W('protector', 'noun', '/prəˈtektə/', 'B1', [], '保护者；保护装置', 'A person or thing that protects.', [
    ['保护者；保护装置', 'A person or thing that protects.', '保护他人或他物的人或物。', '可数。', 'A phone protector saved the screen.', '手机保护壳救了屏幕。', [], ['patron'], 'noun', 'countable', '通用'],
  ], 'protectors',['protect'], '←protect B1 + -or（透明后缀），B1 继承（brief 显示 ←?，经 protected←protect[B1] 根提示确认）；近义 patron 保护人、赞助人');

  W('protester', 'noun', '/ˈprəʊtestə/', 'B1', [], '抗议者；示威者', 'A person who publicly objects to something.', [
    ['抗议者；示威者', 'A person who publicly objects to something.', '公开反对某事的人。', '可数。', 'Each protester carried a sign.', '每位抗议者都举着标语。', [], ['dissident'], 'noun', 'countable', '政治'],
  ], 'protesters',['dissident', 'protest'], '←protest B1 + -er（施事后缀），B1 继承（brief 根提示）；家族/近义 dissident 持异议者');

  W('protrude', 'verb', '/prəˈtruːd/', '', [], '突出；伸出', 'To stick out from a surface.', [
    ['突出；伸出', 'To stick out from a surface.', '从表面伸出来。', '不及物。', 'The bone protrudes under the skin.', '骨头在皮肤下凸出。', [], ['project'], 'verb', '不及物', '通用'],
  ], 'protrudes~protruded~protruded~protruding', [], '拉丁 protrudere（推出）——与 project 无词形对应（t/j 之别），留空；近义 project 突出、伸出');

  W('proud', 'adjective', '/praʊd/', '', ['CET4'], '自豪的；骄傲的', 'Feeling pleasure in something done by yourself or somebody close.', [
    ['自豪的；骄傲的', 'Feeling pleasure in something done by yourself or somebody close.', '因自己或亲近之人所做的事而感到高兴。', '定语或表语，常与 of 连用。', 'She was proud of the result.', '她为结果感到自豪。', ['proud of'], ['grand', 'vain'], 'adjective', '定语/表语', '性格'],
  ], '', ['proudly'], 'proudly 是副词，表示自豪地或骄傲地；近义 grand 崇高的、vain 虚荣的。');

  W('provide for', 'verb', '/prəˈvaɪd fɔː/', '', [], '供养；赡养', 'To give somebody the money and things they need.', [
    ['供养；赡养', 'To give somebody the money and things they need.', '供给某人所需的钱和东西。', '及物短语，可分开。', 'He works to provide for his family.', '他工作养家。', ['provide for a family'], ['maintain'], 'verb', '及物', '家庭'],
    ['为…做准备', 'To prepare for something possible in the future.', '为将来可能发生的事做准备。', '及物短语。', 'Saving provides for hard times.', '储蓄为艰难时日做准备。', [], [], 'verb', '及物', '通用'],
  ],'provides for~provided for~providing for', [], 'provide + for；近义 maintain 维持、供养。短语分级留空').phrase = true;

  W('provision', 'noun', '/prəˈvɪʒən/', 'A2', ['CET4'], '条款；供给', 'A statement in a contract, or the act of supplying.', [
    ['条款；规定', 'A statement in a contract or law.', '合同或法律中的规定。', '可数。', 'The final provision bans subletting.', '最后一条条款禁止转租。', [], ['clause', 'term'], 'noun', 'countable', '法律'],
    ['供给；提供', 'The act of supplying something.', '供应某物的行为。', '不可数。', 'The provision of tools took a week.', '工具的供给花了一周。', [], [], 'noun', 'uncountable', '通用'],
  ], 'provisions',['clause', 'provide'], '←provide A2 + -ion（provid→provis 的 d→s 词干变化，同 describe→description 类拉丁交替），A2 继承（brief 显示 ←?，自行扫根 provide）；家族 clause 条款，近 term 条文');

  W('provisional', 'adjective', '/prəˈvɪʒənəl/', 'A2', [], '临时的；暂定的', 'For the present time only.', [
    ['临时的；暂定的', 'For the present time only.', '仅为当前时间有效的。', '多作定语。', 'They signed a provisional agreement.', '他们签了临时协议。', ['provisional government'], ['interim', 'temporary', 'tentative'], 'adjective', '定语', '通用'],
  ], '',['interim', 'temporary', 'tentative', 'provision'], '←provision A2 + -al（透明后缀），A2 继承（brief 显示 ←?，经 provision 的 provide 根链确认）；家族 interim 临时的、temporary 暂时的、tentative 试探性的，近义同');

  W('provisions', 'noun', '/prəˈvɪʒənz/', 'A2', [], '给养；食物储备（复数）', 'Food and supplies kept for a journey or hard times.', [
    ['给养；食物储备（复数）', 'Food and supplies kept for a journey or hard times.', '为旅程或艰难时日储备的食物与用品。', '常用复数形式。', 'They bought provisions for the trip.', '他们买了旅行给养。', [], ['meat'], 'noun', 'countable', '饮食'],
  ], '',['provision'], '←provision A2 的复数形式（给养义），A2 继承（brief 显示 ←?，经 provision 的 provide 根链确认）；近义 meat 食物、口粮');

  W('prudence', 'noun', '/ˈpruːdəns/', '', [], '谨慎；审慎', 'Careful good judgement.', [
    ['谨慎；审慎', 'Careful good judgement.', '谨慎的良好判断。', '不可数。', 'Prudence suggested waiting.', '谨慎建议等待。', [], ['foresight'], 'noun', 'uncountable', '性格'],
  ], '', [], '拉丁 prudens（provident 的缩合）——prudent/prudence 互为同源且均不在既有库中，无成分级可继，留空；近义 foresight 远见、先见');

  W('prudent', 'adjective', '/ˈpruːdənt/', '', [], '谨慎的；审慎的', 'Careful and sensible.', [
    ['谨慎的；审慎的', 'Careful and sensible.', '小心而明智的。', '多作定语或表语。', 'A prudent investor checks twice.', '谨慎的投资者会检查两遍。', [], ['discreet', 'wise'], 'adjective', '定语/表语', '性格'],
  ], '', ['discreet'], '拉丁 prudens——prudence 同批补录、不在既有库中，无根可继，留空；家族 discreet 谨慎的，近 wise 明智的');

  W('pry', 'verb', '/praɪ/', '', [], '打探；撬开', 'To try to find out about others, or to force something open.', [
    ['打探；窥探', 'To try to find out about somebody else life.', '试图探知别人的私事。', '不及物，常与 into 连用。', 'Neighbors pried into the affair.', '邻居打探那件事。', ['pry into'], ['nose'], 'verb', '不及物', '社交'],
    ['撬开', 'To force something open with a tool.', '用工具撬开某物。', '及物，常与 open 连用。', 'They pried the door open.', '他们撬开了门。', ['pry open'], ['lever'], 'verb', '及物', '工具'],
  ], 'pries~pried~pried~prying', ['nose'], '与 prise 同源但拼写不对应——无库内可见词根，留空；家族 nose 爱打探者、鼻子，近 lever 杠杆、nose');

  W('psyche', 'noun', '/ˈsaɪki/', '', [], '心灵；精神世界', 'The mind or soul.', [
    ['心灵；精神世界', 'The mind or soul.', '心智或灵魂。', '可数，较正式。', 'The film explores the human psyche.', '这部电影探索人类心灵。', [], ['soul'], 'noun', 'countable', '心理'],
  ], 'psyches', [], '希腊 psykhē（灵魂）——无库内可见词根，留空；近义 soul 灵魂、心灵');

  W('psychiatrist', 'noun', '/saɪˈkaɪətrɪst/', 'B2', ['CET6'], '精神科医生', 'A doctor who treats mental illness.', [
    ['精神科医生', 'A doctor who treats mental illness.', '治疗精神疾病的医生。', '可数。', 'The psychiatrist prescribed therapy.', '精神科医生开了治疗方案。', [], ['shrink'], 'noun', 'countable', '健康'],
  ], 'psychiatrists',['psychology'], '←psychology B2（词干 psych 词首全段共享，psychiatry 不在库），B2 继承（brief 显示 ←?，自行扫根 psychology，兄弟派生同 pharmacology←pharmacy 先例）；近义 shrink 精神科医生（俚语）');

  W('psychological', 'adjective', '/ˌsaɪkəˈlɒdʒɪkl/', 'B2', ['CET4'], '心理的；心理学的', 'Relating to the mind or to psychology.', [
    ['心理的；心理学的', 'Relating to the mind or to psychology.', '与心智或心理学有关的。', '多作定语。', 'The test measures psychological traits.', '该测试测量心理特征。', ['psychological support'], ['moral', 'mental'], 'adjective', '定语', '心理'],
  ], '',['mental', 'psychology'], '←psychology B2 + -ical（-ical = -ic+-al 透明），B2 继承（brief 显示 ←?，自行扫根 psychology）；家族 mental 精神的，近 moral 道德的、mental');

  W('psychosomatic', 'adjective', '/ˌsaɪkəʊsəˈmætɪk/', 'B2', [], '心身性的', 'Of an illness caused or made worse by the mind rather than the body.', [
    ['心身性的', 'Of an illness caused or made worse by the mind rather than the body.', '由心理而非身体引起或加重的疾病的。', '多作定语。', 'Her headaches are psychosomatic.', '她的头痛是心因性的。', [], ['hysterical'], 'adjective', '定语', '健康'],
  ], '',['psychology'], '←psychology B2（词干 psych 词首全段共享，somatic 意为「身体的」），B2 继承（brief 显示 ←?，自行扫根 psychology，兄弟派生；判断项，身心义与心理学直连）；近义 hysterical 癔症的、歇斯底里的');

  W('public affairs', 'noun', '/pʌˈbɪlɪk əˈfeəz/', '', [], '公共事务', 'Matters concerning the public and government.', [
    ['公共事务', 'Matters concerning the public and government.', '涉及公众与政府的事务。', '常用作学科名。', 'She teaches public affairs.', '她教授公共事务。', [], ['politics'], 'noun', 'uncountable', '政治'],
  ], '', [], 'public + affairs；近义 politics 政治、政务。短语分级留空').phrase = true;

  W('public health', 'noun', '/pʌˈbɪlɪk helθ/', '', [], '公共卫生', 'The health of the public as a whole.', [
    ['公共卫生', 'The health of the public as a whole.', '整体公众的健康状况。', '不可数。', 'The city improved public health services.', '城市改善了公共卫生服务。', [], ['sanitation'], 'noun', 'uncountable', '健康'],
  ], '', ['sanitation'], 'public + health；家族/近义 sanitation 环境卫生、卫生设施。短语分级留空').phrase = true;

  W('publican', 'noun', '/ˈpʌblɪkən/', '', [], '酒馆老板；（古罗马）税吏', 'The person who owns or runs a pub, or a Roman tax collector.', [
    ['酒馆老板；（古罗马）税吏', 'The person who owns or runs a pub, or a Roman tax collector.', '拥有或经营酒馆的人；或古罗马税吏。', '可数。', 'The publican pulled a fresh pint.', '酒馆老板打了一品脱新酒。', [], ['landlord'], 'noun', 'countable', '饮食'],
  ], 'publicans', [], '拉丁 publicanus（税吏）——词首虽含 public（A2）但语义（酒馆老板/税吏）与「公共的」不直连（保守同 placard 先例），留空；近义 landlord 房东、店主');

  W('publication', 'noun', '/ˌpʌblɪˈkeɪʃən/', 'A2', ['CET4'], '出版物；发行', 'A book, magazine, or the act of publishing.', [
    ['出版物；发行', 'A book, magazine, or the act of publishing.', '书、杂志；或出版的行为。', '可数或不可数。', 'The publication hit the shelves in June.', '该出版物六月上架。', [], ['release'], 'noun', 'countable', '出版'],
  ], 'publications',['public'], '←public A2 + -ation（透明后缀），A2 继承（brief 根提示）；近义 release 发行、发布');

  W('publicity', 'noun', '/pʌˈblɪsəti/', 'A2', ['CET4'], '公众关注；宣传', 'Attention in the media for somebody or something.', [
    ['公众关注；宣传', 'Attention in the media for somebody or something.', '媒体对某人或某事的关注。', '不可数。', 'The scandal generated huge publicity.', '丑闻引起了巨大关注。', [], ['propaganda'], 'noun', 'uncountable', '媒体'],
  ], '',['propaganda', 'public'], '←public A2 + -ity（透明后缀），A2 继承（brief 根提示）；家族/近义 propaganda 宣传、鼓吹');
})(typeof window !== 'undefined' ? window : globalThis);
