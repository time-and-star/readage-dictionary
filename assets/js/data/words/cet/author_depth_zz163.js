(function () {
  'use strict';
  const D = globalThis.RA.D;
  const E = (origin, lemma) => ({ origin, prefix: null, root: null, suffix: null, source: 'https://www.etymonline.com/word/' + lemma.toLowerCase().replaceAll(' ', '-') });
  const C = (senseId, domain, en, zh, structure, grammar, rationale) => ({ senseId, domain, en, zh, structure, grammar, rationale, sourceType: 'authored' });
  const M = (wrong, right, reason, errorType = 'meaning') => ({ wrong, right, reason, errorType });
  const q = (sense, prompt, answer, d1, d2, explain, type = 'meaning') => ({ sense, prompt, answer, d1, d2, explain, type });
  const P = (w, origin, contexts, mistake, questions) => D(w, {
    etymology: E(origin, w), contexts: Array.isArray(contexts) ? contexts : [contexts], mistakes: [mistake],
    quiz: questions.map((x, i) => ({ id: w + '.q' + (i + 1), senseId: w + '.s' + x.sense, type: '辨义与用法', prompt: x.prompt, options: [x.answer, x.d1, x.d2], answer: x.answer, explain: x.explain, errorType: x.type }))
  });

  /* A163 checkpoint 1: manifest items 1–20, vessel–vibrato */
  P('vessel','Vessel came through Old French from Latin vāscellum, a diminutive of vās “container”; English uses it for a ship, a receptacle, or a blood-carrying tube.',[
    C('vessel.s1','航海','The research vessel left the harbor before dawn and carried a crew to the northern reef.','这艘科考船黎明前驶离港口，载着船员前往北部礁区。','The research vessel left the harbor / before dawn / and carried a crew.','vessel.s1 指船只；research 作前置修饰语。','载人出海的交通工具对应船义。'),
    C('vessel.s2','实验室','The technician poured the measured solvent into a sealed glass vessel before starting the reaction.','技术员把量好的溶剂倒进密封玻璃容器，然后开始反应。','The technician poured the solvent / into a sealed glass vessel / before the reaction.','vessel.s2 指盛装液体的容器。','玻璃容器用来盛溶剂。'),
    C('vessel.s3','医学','A healthy artery is a blood vessel that carries blood away from the heart.','健康的动脉是一种把血液从心脏输送出去的血管。','A healthy artery is a blood vessel / that carries blood / away from the heart.','blood vessel 是固定搭配；that 从句说明功能。','动脉输送血液，符合体内管道义。')
  ],M('The surgeon called the artery a vessel because it carried passengers across the bay.','The surgeon called the artery a blood vessel because it carried blood through the body.','动脉输送血液而不是乘客；此处应取 vessel 的解剖学义。'),[
    q(1,'What did the research vessel carry to the reef?','a crew','a glass reaction flask','blood away from the heart','vessel.s1 在句中指载人出海的船。','context'),
    q(2,'Why was the glass vessel sealed?','to hold the measured solvent during a reaction','to transport sailors across the bay','to pump blood from the heart','句中的容器盛放溶剂。','context'),
    q(3,'What does “blood vessel” name?','a tube that carries blood in the body','a ship used for medical research','a bowl for storing solvent','blood vessel 指体内输送血液的管道。','meaning'),
    q(3,'Which sentence uses vessel in the anatomical sense?','The small vessel carries blood through the tissue.','The vessel crossed the ocean with a crew.','She placed the broth in a ceramic vessel.','只有携带血液的句子使用解剖学义。','context')
  ]);
  P('vest','Vest is related to Latin vestis “garment”; the verb came through French vest(i)r from Latin vestīre “clothe,” and can mean confer a legal right.',[
    C('vest.s1','服装','The cyclist wore a reflective vest over her jacket so drivers could see her at dusk.','骑车人在夹克外穿了一件反光背心，让司机在黄昏时能看见她。','The cyclist wore a reflective vest / over her jacket / so drivers could see her.','vest.s1 指无袖上衣；reflective 修饰衣物。','反光背心是穿着的无袖服装。'),
    C('vest.s2','法律','Under the pension plan, the employer’s contribution will vest in Mara after five years of service.','按照养老金计划，玛拉服务满五年后，雇主缴纳的款项将归她依法享有。','The contribution will vest in Mara / after five years of service.','vest.s2 作动词，法律权利归属某人；will 后用原形。','年限届满后权益正式归属，体现法律义。')
  ],M('The pension contribution vested in Mara immediately, although the plan required five years of service and she had completed none.','The pension contribution will vest in Mara after she completes five years of service.','原句把尚未满足的既定条件说成已完成的法律归属。','context'),[
    q(1,'Why did the cyclist wear a vest?','so drivers could see her at dusk','to receive ownership of a pension','to carry blood through her arm','反光背心提高黄昏时的可见度。','context'),
    q(2,'When will the employer contribution vest in Mara?','after five years of service','before she joins the plan','only when she buys a reflective jacket','养老金权益在服务满五年后归属。','context'),
    q(2,'What does vest mean in the pension example?','become legally secured for someone','put on a sleeveless garment','make a road visible at night','此处 vest 指权利依法归属于某人。','meaning'),
    q(1,'Which item is a vest?','a sleeveless garment worn over a shirt','a legal right that has not yet accrued','a tube carrying blood','无袖并穿在衬衫外的衣物是 vest。','meaning')
  ]);
  P('vested','Vested is the past participle of vest, from Latin vestīre “clothe”; the adjective developed the sense of a right securely fixed in someone.',
    C('vested.s1','权益','After three years, the employee had a vested claim to the matching funds and could keep them after leaving the company.','三年后，员工对配比资金已有既得权益，即使离职也可以保留。','The employee had a vested claim / to the matching funds / after three years.','vested 修饰 claim，表示权利已经确立；had 表示过去状态。','离职后仍可保留资金，说明权益已归属。'),
    M('The employee had a vested claim to the bonus, but the contract said it could be taken away at any time without cause.','The employee had a vested claim to the bonus because the contract made the right secure and unconditional.','vested right 已确立且受保障；可随时无故撤销与此义矛盾。'),[
      q(1,'What could the employee keep after leaving?','the matching funds','the company’s office building','a blood vessel','既得权益使员工离职后仍可保留配比资金。','context'),
      q(1,'What does vested describe here?','a right that is securely established','a temporary offer with no guarantee','a sleeveless work uniform','vested 描述已经确立的权利。','meaning'),
      q(1,'Which benefit is vested?','one the employee is legally entitled to retain','one the employer may cancel at any moment','one that has not met its service condition','可依法保留的福利是 vested。','meaning'),
      q(1,'Why did the worker trust the vested claim?','the right had become secure under the plan','the claim was only a rumor','the funds were kept in a glass bowl','既得权益已根据计划确立。','context')
    ]);
  P('vestige','Vestige comes from Latin vestīgium “footprint, trace”; it denotes a small remnant or the tiniest amount of a quality.',[
    C('vestige.s1','历史遗迹','No vestige of the old wall remained after the road crews cleared the site.','道路施工队清理场地后，旧墙已不留一丝痕迹。','No vestige of the old wall remained / after the crews / cleared the site.','vestige.s1 指曾经存在之物留下的痕迹；no 与之构成否定。','拆除后不见旧墙的残迹。'),
    C('vestige.s2','程度','Even after the apology, a vestige of distrust remained between the two negotiators.','即使道歉之后，两位谈判者之间仍残留一丝不信任。','A vestige of distrust remained / between the negotiators / after the apology.','a vestige of + 抽象名词表示极少量。','不信任只剩极微小的一点。')
  ],M('A vestige of the fortress remained, although the archaeologists found absolutely no trace of it anywhere on the site.','A vestige of the fortress remained in a short section of buried stonework.','“毫无痕迹”与“仍有残迹”互相冲突。'),[
    q(1,'What remained after the road crews cleared the site?','no trace of the old wall','a complete new fortress','a vessel full of water','句中说旧墙没有留下任何痕迹。','context'),
    q(2,'What remained between the negotiators?','a tiny amount of distrust','a full record of the old wall','a legal right to the road','a vestige of distrust 指残留的一丝不信任。','context'),
    q(1,'A vestige is best described as?','a small remaining trace','a newly built structure','a formal refusal of a law','vestige 指过去事物留下的小痕迹。','meaning'),
    q(2,'Which phrase uses vestige for a very small amount?','a vestige of doubt','a vestige of a stone arch','a vestige of a ship crossing','抽象品质 doubt 可表示极少量。','meaning')
  ]);
  P('vestigial','Vestigial is formed from vestige with -al, ultimately from Latin vestīgium “trace”; it describes a reduced or nearly functionless remnant.',
    C('vestigial.s1','生物学','The whale’s vestigial pelvic bones are tiny remnants that no longer support walking.','鲸的退化骨盆骨是微小残留结构，不再用于支撑行走。','The whale’s vestigial pelvic bones are tiny remnants / that no longer support walking.','vestigial 修饰 bones，表示结构缩小且原功能大为减弱。','骨骼仍存在，却不再承担行走功能。'),
    M('The biologist called the whale’s pelvic bones vestigial because they were large, essential structures that fully supported walking on land.','The biologist called the whale’s pelvic bones vestigial because they are reduced remnants with little or no role in walking.','“巨大且完全发挥原功能”与退化残留的含义相反。'),[
      q(1,'What do the whale’s vestigial pelvic bones no longer support?','walking','blood circulation','the crew of a research ship','这些骨骼不再支撑行走。','context'),
      q(1,'What does vestigial mean in biology?','reduced and nearly functionless','newly developed and highly useful','legally secured for an employee','生物学义指缩小或几乎失去功能的残留结构。','meaning'),
      q(1,'Which is most likely vestigial?','a tiny remnant of an organ with little present function','a fully working limb used for walking','a newly formed blood vessel','现有功能很弱的器官残留最符合 vestigial。','context'),
      q(1,'Why are the whale bones described as vestigial?','they remain as reduced traces of an earlier structure','they are the whale’s main walking supports','they carry blood away from its heart','它们是遗留但功能减弱的结构。','meaning')
    ]);
  P('vet','Vet is a shortening of veterinary surgeon/doctor; the verb meaning “examine carefully” developed from the idea of a veterinary inspection.',[
    C('vet.s1','动物医疗','The vet cleaned the cut on the terrier’s paw and checked that no glass remained inside it.','兽医清理了梗犬爪上的伤口，并检查里面是否还留有玻璃。','The vet cleaned the cut / on the terrier’s paw / and checked for glass.','vet.s1 是 veterinary doctor 的口语缩略名词。','为狗检查伤口的人是兽医。'),
    C('vet.s2','审核','The editor will vet every historical quotation before it appears in the museum guide.','编辑会在历史引文收入博物馆指南前逐一核查。','The editor will vet every quotation / before it appears / in the museum guide.','vet.s2 作及物动词，表示仔细审查；will 后接原形。','引文发表前需要核验可靠性。')
  ],M('The museum editor vetted the quotation by publishing it immediately without checking its source or wording.','The museum editor vetted the quotation by checking its source and wording before publication.','未经检查就直接发表不属于仔细审核。','meaning'),[
    q(1,'What did the vet examine?','a cut on the dog’s paw','a historical quotation','a pension claim','兽医检查了狗爪上的伤口。','context'),
    q(2,'What will the editor vet?','each historical quotation','the terrier’s blood vessels','the employee’s pension funds','编辑会核查每一条历史引文。','context'),
    q(2,'What does vet mean as a verb?','examine carefully for accuracy or suitability','treat a sick animal only','grant someone a legal right','动词 vet 指仔细检查。','meaning'),
    q(1,'Who is a vet in the first example?','a doctor who treats animals','a museum editor checking sources','a person who owns a vessel','第一例中的 vet 是治疗动物的医生。','meaning')
  ]);
  P('veteran','Veteran comes through French from Latin veterānus, “old, experienced,” related to vetus “old”; it can name a former service member or an experienced worker.',[
    C('veteran.s1','军旅经历','The veteran spoke to the recruits about returning home after years of military service.','这位退伍军人向新兵讲述了多年服役后回家的经历。','The veteran spoke to the recruits / about returning home / after years of service.','veteran.s1 指曾在军队服役的人；service 在此指服役。','讲述军旅服役经历的人是退伍军人。'),
    C('veteran.s2','职业经验','A veteran nurse noticed the faint change in the patient’s breathing before the monitor sounded an alarm.','一位资深护士在监护仪报警前就注意到病人的呼吸出现了细微变化。','A veteran nurse noticed a change / before the monitor / sounded an alarm.','veteran 作定语形容职业经验丰富；notice 接宾语。','多年经验使护士更早发现细微变化。')
  ],M('The hospital described the newly hired nurse as a veteran even though she had never worked in healthcare before.','The hospital described the nurse with decades of clinical work as a veteran.','从未从事过相关工作的人不能因经验丰富而称为 veteran。'),[
    q(1,'Who spoke to the recruits?','a former service member','a newly hired nurse','a museum editor','军旅经历的讲述者是退伍军人。','context'),
    q(2,'What did the veteran nurse notice?','a subtle change in breathing','a fragment of an old wall','a right to pension funds','资深护士注意到呼吸变化。','context'),
    q(2,'A veteran worker is someone who?','has long experience in a job','has never worked in that field','has just been given a legal right','veteran 也指在某领域有长期经验的人。','meaning'),
    q(1,'Which person is a military veteran?','someone who previously served in the armed forces','someone who only applied for recruitment','someone who checks museum quotations','曾在军队服役的人是军旅义的 veteran。','meaning')
  ]);
  P('veterinarian','Veterinarian is built from veterinary and the person-forming -arian; veterinary goes back to Latin veterinārius, “of beasts of burden.”',
    C('veterinarian.s1','动物医疗','The veterinarian examined the foal’s swollen leg and ordered an X-ray before it returned to the stable.','兽医检查了小马驹肿胀的腿，并在它回马厩前安排了 X 光检查。','The veterinarian examined the leg / and ordered an X-ray / before the foal returned.','veterinarian 是职业名词；before 从句说明检查发生在回厩前。','诊断并治疗动物的专业医生是兽医。'),
    M('The veterinarian treated the injured foal, although she had no medical training and was not qualified to care for animals.','The veterinarian treated the injured foal after examining its leg and ordering an X-ray.','veterinarian 指有兽医学资格的专业人员，不是无训练者。'),[
      q(1,'What did the veterinarian examine?','the foal’s swollen leg','a ship’s glass container','a pension contribution','兽医检查了小马驹肿胀的腿。','context'),
      q(1,'What did the veterinarian order?','an X-ray','a museum guide','a vessel for blood','小马驹接受了 X 光检查。','context'),
      q(1,'A veterinarian is?','a doctor qualified to treat animals','a person who owns a boat','an editor of historical quotations','veterinarian 指具备治疗动物资质的医生。','meaning'),
      q(1,'Which professional should assess a sick dog?','a veterinarian','a ship captain','a pension administrator','生病的狗应由兽医评估。','context')
    ]);
  P('veterinary','Veterinary comes from Latin veterinārius, “of beasts of burden,” from veterīnae “working animals”; it concerns animal medicine and care.',[
    C('veterinary.s1','动物医学','The veterinary clinic keeps a separate recovery room for cats after surgery.','这家兽医诊所为术后的猫设有独立恢复室。','The veterinary clinic keeps a recovery room / for cats / after surgery.','veterinary 作形容词修饰 clinic，指动物医疗。','诊所为动物提供手术后照护。'),
    C('veterinary.s1','动物照护','The shelter arranged veterinary care for the injured fox before releasing it back into the woods.','收容所为受伤的狐狸安排兽医护理，然后才将它放回树林。','The shelter arranged veterinary care / for the injured fox / before releasing it.','veterinary 作前置修饰语，说明护理属于动物医疗。','狐狸在放归前接受动物医疗。')
  ],M('The veterinary clinic treated only broken engines and refused to see any animals.','The veterinary clinic treated injured animals and provided post-surgery care.','veterinary 表示与动物医疗有关，不是机械维修。'),[
    q(1,'What does the veterinary clinic provide for cats?','a recovery room after surgery','a place to store research vessels','a pension matching plan','诊所为术后猫提供恢复室。','context'),
    q(1,'What does veterinary mean?','relating to animal diseases and treatment','relating to the legal vesting of rights','relating to ships on the sea','veterinary 指动物疾病和治疗方面的。','meaning'),
    q(1,'Which service is veterinary?','medical care for a sick rabbit','an inspection of museum quotations','a sailor’s passage across a bay','给生病兔子提供医疗是兽医服务。','context'),
    q(1,'Why is the clinic called veterinary?','it treats animals and their illnesses','it repairs ship engines','it awards pension rights','它为动物及其疾病提供医疗。','meaning')
  ]);
  P('veto','Veto is Latin for “I forbid,” the first-person form of vetāre “forbid”; it names an official blocking power and the act of using it.',[
    C('veto.s1','政治制度','The council charter gives the mayor a veto over ordinances passed by the committee.','市政章程赋予市长否决委员会通过的条例的权力。','The charter gives the mayor a veto / over ordinances / passed by the committee.','veto.s1 作名词，指官方拒绝决定的权力。','市长拥有阻止条例生效的正式权力。'),
    C('veto.s2','决策','The chair vetoed the proposal because it would have left the clinic without emergency funding.','主席否决了这项提案，因为它会使诊所失去应急资金。','The chair vetoed the proposal / because it would have left / the clinic without funding.','veto.s2 作及物动词，过去式 vetoed。','主席正式拒绝提案。')
  ],M('The mayor used a veto to approve the ordinance and make it legally effective at once.','The mayor used a veto to block the ordinance from taking effect.','否决权用于阻止提案或法律生效，而不是批准它。'),[
    q(1,'Who holds veto power under the charter?','the mayor','the veterinary clinic','the research crew','章程把否决权赋予市长。','context'),
    q(2,'Why did the chair veto the proposal?','it would remove the clinic’s emergency funding','it would fund the clinic’s recovery room','it would carry a crew to the reef','提案会让诊所失去应急资金，所以主席否决它。','context'),
    q(1,'What is a veto?','an official power to block a decision','a medical examination of animals','a small remaining trace','veto 名词指官方阻止决定的权力。','meaning'),
    q(2,'If a chair vetoes a proposal, the chair?','officially refuses to allow it','grants it legal force','examines it for spelling only','动词 veto 指正式拒绝允许。','meaning')
  ]);
  P('vex','Vex came through French from Latin vexāre “shake, harass”; English uses it for irritating someone or puzzling them with a difficult issue.',[
    C('vex.s1','烦恼','The repeated delays vexed the passengers, who had already waited three hours for the ferry.','一再延误让乘客们很恼火，他们已经等渡船等了三个小时。','The repeated delays vexed the passengers / who had already waited / three hours.','vexed 是 vex 的过去式；关系从句说明乘客等待已久。','长时间等候遇上反复延误令人恼火。'),
    C('vex.s2','难题','The conflicting survey results continue to vex the researchers, who cannot explain the sharp difference.','相互矛盾的调查结果仍令研究人员困惑，他们无法解释如此显著的差异。','The results continue to vex the researchers / who cannot explain / the difference.','vex.s2 指难题使人困惑；continue to 后接原形。','研究人员无法解释结果差异。')
  ],M('The three-hour delay delighted and relaxed the passengers, so nothing about the ferry schedule vexed them.','The repeated three-hour delays vexed the passengers waiting for the ferry.','漫长而反复的延误使乘客烦恼，与 delighted and relaxed 相反。','meaning'),[
    q(1,'Why were the passengers vexed?','the ferry was repeatedly delayed','the ferry left exactly on time','the ship carried a veterinary team','乘客因渡船一再延误而烦恼。','context'),
    q(2,'What vexed the researchers?','conflicting survey results they could not explain','a clear answer to every question','the mayor’s legal veto','研究人员被无法解释的矛盾结果难住。','context'),
    q(1,'To vex someone is to?','irritate or worry them','grant them a right','treat their sick animal','vex 可以指使人烦恼。','meaning'),
    q(2,'Which problem would vex a researcher?','two reliable studies reporting incompatible results','one study with a clear and repeated result','a ferry leaving on schedule','相互冲突且难解释的结果会使研究人员困惑。','context')
  ]);
  P('vexingly','Vexingly is formed from vex plus -ing and the adverb suffix -ly; it means in a way that irritates or puzzles.',
    C('vexingly.s1','表达方式','The repair manual was vexingly vague about which wire to disconnect before opening the panel.','维修手册对打开面板前该断开哪根电线的说明含糊得令人恼火。','The manual was vexingly vague / about which wire to disconnect / before opening the panel.','vexingly 修饰形容词 vague，描述含糊造成的恼人感受。','关键安全步骤说明不清，令人困扰。'),
    M('The manual was vexingly clear about the correct wire, so every technician understood the instruction immediately.','The manual was vexingly vague about the correct wire, leaving technicians unsure.','清楚易懂不会令人 vexingly 困扰；原句前后矛盾。'),[
      q(1,'What was vexingly vague?','which wire to disconnect','the color of the clinic’s recovery room','the location of a research vessel','手册没有清楚说明该断开哪根电线。','context'),
      q(1,'How does vexingly describe the manual?','its vagueness irritates or puzzles the reader','it is clear and reassuring','it legally blocks an ordinance','vexingly 表示以恼人或令人困惑的方式。','meaning'),
      q(1,'Which instruction is vexingly vague?','“Disconnect the appropriate wire” with no diagram or label','“Disconnect the red wire labeled R”','“Turn off the power at the main switch”','缺少线索的模糊指令会令人困惑。','context'),
      q(1,'What reaction might vexingly unclear directions cause?','frustration about what to do','confidence that the task is obvious','a legal transfer of ownership','令人恼火的说明会使人不知所措。','meaning')
    ]);
  P('via','Via is a Latin preposition meaning “way” or “road”; English uses it for a route through a place or a means of doing something.',[
    C('via.s1','路线','We flew to Reykjavík via Copenhagen because the direct route was closed for repairs.','由于直飞航线维修关闭，我们经由哥本哈根飞往雷克雅未克。','We flew to Reykjavík via Copenhagen / because the direct route / was closed.','via 后接途中经过的地点。','哥本哈根是前往目的地的中转地点。'),
    C('via.s2','方式','The laboratory sent the results to the clinic via a secure digital portal.','实验室通过安全数字平台把结果发送给诊所。','The laboratory sent the results / via a secure digital portal / to the clinic.','via 后也可接采用的系统或方法。','数字平台是发送结果所用的方式。')
  ],M('The laboratory sent the results via the secure portal, meaning it deliberately avoided using that portal or any other method.','The laboratory sent the results via the secure portal to the clinic.','via 表示通过某方式；“避免使用该方式”与句意冲突。'),[
    q(1,'Where did the travelers go via?','Copenhagen','the veterinary clinic','the old wall','他们经由哥本哈根转机。','context'),
    q(2,'How did the lab send its results?','through a secure digital portal','by sailing on the research vessel','by giving the mayor a veto','via 引出发送结果所用的系统。','context'),
    q(1,'In “via Copenhagen,” via means?','passing through that place on the way','because of a legal right','in a way that irritates','此处 via 表示途中经过。','meaning'),
    q(2,'In “via a secure portal,” via means?','by using that method','without using any system','after a five-year vesting period','via 表示借助某个方法或系统。','meaning')
  ]);
  P('viability','Viability combines viable with -ity; viable came through French from Latin vīta “life” plus -able, and denotes practical success or ability to live.',[
    C('viability.s1','商业评估','The board questioned the viability of the rural clinic after its only grant was withdrawn.','唯一一笔拨款撤回后，董事会开始质疑这家乡村诊所能否持续运作。','The board questioned the viability / of the rural clinic / after its grant was withdrawn.','viability of + project/business 表示能否实际成功运作。','资金中断使诊所的持续运营能力受到质疑。'),
    C('viability.s2','生物学','The lab tested the viability of the seeds by checking which ones could germinate.','实验室通过检查哪些种子能够发芽来测试种子的存活能力。','The lab tested seed viability / by checking / which ones could germinate.','viability.s2 指生物存活或发育的能力。','能否发芽是种子存活能力的证据。')
  ],M('The board confirmed the clinic’s viability because it had permanently lost its only funding and could no longer provide any service.','The board questioned the clinic’s viability after its only grant was withdrawn.','唯一资金已失去、无法运营并不能证明机构可行。'),[
    q(1,'Why did the board question the clinic’s viability?','its only grant had been withdrawn','the seeds had germinated','it had acquired a research vessel','拨款撤回令诊所的持续运作能力成疑。','context'),
    q(2,'How did the lab test seed viability?','by checking whether seeds could germinate','by checking whether they could carry blood','by seeing whether a mayor could veto them','种子是否能发芽可以体现其存活能力。','context'),
    q(1,'A plan’s viability is its?','ability to work successfully in practice','legal power to block a vote','small remaining trace','viability 可指计划实际成功运作的能力。','meaning'),
    q(2,'A seed’s viability concerns whether it can?','live and develop','serve in the military','carry a crew across a bay','生物义的 viability 指能否存活、发育。','meaning')
  ]);
  P('viable','Viable came through French viable from Latin vīta “life” with -able; it describes something practicable or capable of living and developing.',[
    C('viable.s1','方案可行性','The engineers found a viable route for the pipeline that avoided both the wetland and the village.','工程师找到了一条可行的管线路线，既避开湿地也绕开村庄。','The engineers found a viable route / that avoided the wetland / and the village.','viable 修饰 route，表示方案在实际条件下可行。','路线满足环境和施工限制。','context'),
    C('viable.s2','生物学','The doctor explained that the embryo was not yet viable outside the womb.','医生解释说，胚胎在子宫外还不能存活发育。','The embryo was not yet viable / outside the womb.','viable.s2 指生物能够存活或继续发育。','句子明确讨论胚胎能否在体外存活。','medical')
  ],M('The engineers called the route viable even though it crossed an unstable cliff that no construction crew could reach.','The engineers proposed a viable route that crews could safely build around the wetland.','无法施工的线路不能称为实际可行。'),[
    q(1,'What made the pipeline route viable?','it avoided the wetland and the village','it crossed an unreachable cliff','it required no engineering study','路线避开了湿地和村庄，符合实际限制。','context'),
    q(2,'What did the doctor say about the embryo?','it could not yet survive outside the womb','it had already become a pipeline','it was a small remaining trace','医生说胚胎尚不能在子宫外存活。','context'),
    q(1,'A viable proposal is one that?','can succeed under real conditions','is impossible to carry out','has been formally vetoed','viable 的方案义指现实中可行。','meaning'),
    q(2,'In medicine, viable means able to?','live and develop','block a law','travel through Copenhagen','生物学里的 viable 指有能力存活和发育。','meaning')
  ]);
  P('viaduct','Viaduct combines Latin via “road” and duct from dūcere “lead”; the structure carries a road or railway across low ground or other obstacles.',
    C('viaduct.s1','交通工程','The new viaduct carries the railway over the valley, keeping the track level as the land drops away.','新高架桥让铁路从山谷上方通过，在地势下陷处仍保持轨道平稳。','The viaduct carries the railway / over the valley / as the land drops away.','viaduct 指多跨高架桥；carry ... over 表示架设跨越。','桥梁承载铁路跨越山谷。'),
    M('The railway viaduct descended to the valley floor and ended before it crossed the low ground.','The railway viaduct spans above the valley and carries the track across it.','没有跨越山谷的结构不能完成 viaduct 的功能。'),[
      q(1,'What does the viaduct carry?','the railway','blood through the body','an official veto','桥上铺设铁路轨道。','context'),
      q(1,'Where does the viaduct carry the track?','over the valley','through the clinic’s recovery room','under a sealed glass vessel','高架桥让铁路跨越山谷。','context'),
      q(1,'A viaduct is a kind of?','bridge that carries a route across low ground or obstacles','small container for liquid','right secured after five years','viaduct 是供道路或铁路跨越低地等障碍的桥。','meaning'),
      q(1,'Which structure is a viaduct?','a many-span bridge carrying a road above a valley','a tunnel that follows the valley floor','a vessel used to hold solvent','多跨桥把道路架过山谷，属于 viaduct。','context')
    ]);
  P('vibrant','Vibrant comes from Latin vibrant-, the stem of vibrāre “to shake”; figuratively it describes energetic activity or strong, vivid color.',[
    C('vibrant.s1','社区生活','The night market is vibrant after sunset, with musicians, food stalls, and families filling the square.','日落后夜市热闹非凡，广场里有乐手、摊位和许多家庭。','The night market is vibrant / after sunset / with musicians and families.','vibrant.s1 指充满活力；with 短语列出热闹的原因。','音乐和人群使夜市充满活力。'),
    C('vibrant.s2','色彩','A vibrant orange stripe makes the rescue boat easy to spot against the gray water.','一条鲜艳的橙色条纹让救援船在灰色水面上格外醒目。','A vibrant orange stripe makes the boat easy to spot / against gray water.','vibrant.s2 指色彩鲜明、浓烈。','橙色条纹与灰水形成鲜明对比。')
  ],M('The designer called the stripe vibrant even though it was pale gray and almost invisible against the water.','The designer chose a vibrant orange stripe that stood out against the gray water.','黯淡且几乎看不见的灰色不符合色彩鲜明的意思。'),[
    q(1,'What made the night market vibrant?','musicians, food stalls, and families','a silent empty square','a sealed vessel in a lab','摊位、乐手和人群使市场充满活力。','context'),
    q(2,'Why was the orange stripe useful?','its vivid color made the rescue boat easy to see','it gave the boat a legal veto','it carried blood through the hull','鲜明的橙色让船更醒目。','context'),
    q(1,'A vibrant neighborhood is?','full of energy and activity','empty and inactive','legally secure but inactive','vibrant 可形容充满活力的地方。','meaning'),
    q(2,'Which color is most likely vibrant?','a strong orange that stands out','a nearly invisible pale gray','a colorless transparent liquid','鲜明浓烈且醒目的橙色是 vibrant。','context')
  ]);
  P('vibrate','Vibrate comes from Latin vibrāre “to shake or brandish”; it means move rapidly back and forth or seem to tremble with a strong feeling.',[
    C('vibrate.s1','物理','The phone began to vibrate on the table when the emergency alert arrived.','紧急警报到达时，手机开始在桌面上振动。','The phone began to vibrate / on the table / when the alert arrived.','begin to 后接动词原形；vibrate 表示快速往复运动。','手机受到来电信号后发生快速振动。'),
    C('vibrate.s2','声音与情感','Her voice seemed to vibrate with relief when the doctor said the foal would recover.','医生说小马驹会康复时，她的声音仿佛因宽慰而微微发颤。','Her voice seemed to vibrate with relief / when the doctor spoke.','vibrate with + emotion 表示声音或地方充满某种强烈情感。','声音带着明显宽慰，体现比喻义。')
  ],M('The phone vibrated by remaining perfectly still on the table throughout the alert.','The phone vibrated by shaking rapidly on the table when the alert arrived.','完全静止不是 vibrate 的运动义。'),[
    q(1,'What made the phone vibrate?','an emergency alert','a mayor’s refusal','the loss of a clinic grant','紧急警报到达时手机振动。','context'),
    q(2,'What did the speaker’s voice vibrate with?','relief','orange color','a legal right','医生带来好消息后，她的声音充满宽慰。','context'),
    q(1,'To vibrate physically is to?','move rapidly back and forth','remain perfectly still','become legally vested','vibrate 的物理义是快速往复振动。','meaning'),
    q(2,'“The hall vibrated with excitement” means the hall?','seemed full of strong excitement','shook only because of a phone','was empty and silent','比喻义表示空间里充满强烈情绪。','meaning')
  ]);
  P('vibration','Vibration is formed from vibrate and -ion; it names a rapid back-and-forth movement or, in informal plural use, a felt atmosphere.',[
    C('vibration.s1','机械工程','The technician placed a sensor on the motor to measure vibration before replacing the worn bearing.','技术员在更换磨损轴承前把传感器装在电机上测量振动。','The technician measured vibration / on the motor / before replacing the bearing.','vibration.s1 为可测量的抖动运动；measure 作及物动词。','传感器测出电机的机械振动。'),
    C('vibration.s2','非正式感受','The visitors liked the café’s relaxed vibrations and stayed to listen to the guitarist.','访客喜欢这家咖啡馆轻松的氛围，便留下来听吉他手演奏。','The visitors liked the café’s relaxed vibrations / and stayed / to hear the music.','vibrations 常用复数表示对场所的感觉或气氛。','访客感受到轻松氛围并留下。')
  ],M('The sensor measured no vibration because the motor was shaking rapidly and repeatedly throughout the test.','The sensor measured strong vibration because the motor was shaking rapidly throughout the test.','快速反复抖动就是振动，不能同时说完全没有振动。'),[
    q(1,'Why did the technician use a sensor?','to measure the motor’s vibration','to record the café’s atmosphere','to grant a veto','传感器测量电机振动。','context'),
    q(2,'Why did the visitors stay at the café?','they liked its relaxed atmosphere','they wanted to inspect a blood vessel','they had to vest a legal right','relaxed vibrations 在此指轻松的氛围。','context'),
    q(1,'A machine’s vibration is?','its rapid shaking movement','its legal right to refuse a vote','a bright color','机械振动指快速抖动。','meaning'),
    q(2,'In casual speech, “good vibrations” usually means?','a pleasant atmosphere or feeling','rapid movement of a motor part','a vessel used for solvents','非正式表达指令人愉快的氛围或感觉。','meaning')
  ]);
  P('vibrato','Vibrato is borrowed from Italian vibrato, literally “vibrated,” from Latin vibrāre “shake”; it is a controlled wavering of musical pitch.',
    C('vibrato.s1','音乐','The violinist added a gentle vibrato to the sustained note without changing the melody.','小提琴手在延长音上加了轻柔的颤音，但没有改变旋律。','The violinist added a gentle vibrato / to the sustained note / without changing the melody.','vibrato 是音乐术语，指音高的规律性小幅起伏。','颤音修饰延长音而不改旋律。'),
    M('The singer used vibrato by holding every note at one perfectly fixed pitch with no wavering at all.','The singer used vibrato by letting the pitch waver gently around the intended note.','音高完全固定、毫无起伏不是 vibrato。','meaning'),[
      q(1,'What did the violinist add to the sustained note?','a gentle pitch wavering','a sudden change of melody','a legal veto','演奏者在延长音上加了轻柔颤音。','context'),
      q(1,'What changes during vibrato?','the pitch wavers slightly and regularly','the instrument becomes a vessel','the melody is always replaced','颤音使音高规律地轻微起伏。','meaning'),
      q(1,'Which performance uses vibrato?','a held note gently oscillates around its target pitch','a note remains mechanically flat with no pitch change','a musician stops playing before the note begins','延长音周围有轻柔音高起伏就是 vibrato。','context'),
      q(1,'Does vibrato necessarily change the melody?','no, it can color a sustained note without changing the melody','yes, it always replaces the whole melody','no, it means the violin is silent','例句中的颤音丰富音色但不改旋律。','meaning')
    ]);
  /* A163 checkpoint 2: manifest items 21–40, vice–views */
  P('vice','Vice has separate histories: the moral-fault noun is from Latin vitium “fault”; the deputy prefix reflects Latin vice “in place of”; the clamping tool came through French vis “screw.”',[
    C('vice.s1','品行','His one serious vice was gambling, and he joined a support group before the debts grew worse.','他唯一严重的恶习是赌博；在债务恶化前，他加入了互助小组。','His one serious vice was gambling / and he joined a support group / before the debts grew worse.','vice.s1 指坏习惯或道德缺点。','赌博被明确说成他的坏习惯。'),
    C('vice.s3','职务','The vice-chair led the meeting while the chair was away at a regional conference.','主席参加地区会议期间，副主席主持了会议。','The vice-chair led the meeting / while the chair / was away.','vice- 作前缀，表示职位仅次于首脑并可代理。','副主席在主席缺席时代为主持。'),
    C('vice.s4','工具','Clamp the metal strip in a bench vice before drilling the two holes.','钻两个孔之前，先把金属条夹在台钳里。','Clamp the metal strip / in a bench vice / before drilling.','vice.s4 指加工时用两片钳口固定物体的工具。','台钳把金属条夹稳以便钻孔。')
  ],M('She used a bench vice to keep the metal still, but the tool’s jaws never touched or held the strip.','She tightened the bench vice around the metal strip before drilling it.','台钳通过钳口夹住工件；未接触工件就不能固定它。','meaning'),[
    q(1,'What was the man’s vice?','gambling','chairing a meeting','drilling metal in a clamp','赌博是他的坏习惯。','context'),
    q(3,'Who led the meeting in the chair’s absence?','the vice-chair','the bench vice','the gambling support group','副主席代理主持会议。','context'),
    q(4,'What does a bench vice do?','holds a workpiece between jaws','records moving pictures','carries blood through the body','台钳用钳口夹住工件。','meaning'),
    q(1,'Which behavior is a vice in the moral sense?','a harmful habit such as compulsive gambling','a deputy’s temporary leadership','clamping a metal strip for drilling','道德义 vice 指有害的习惯或缺点。','meaning')
  ]);
  P('vicinity','Vicinity comes from Latin vicinitās “neighborhood,” from vicinus “near, neighboring”; it means a nearby area and can also approximate a number.',[
    C('vicinity.s1','地点','Residents in the vicinity of the station were asked to keep windows closed during the smoke test.','车站附近的居民被要求在烟雾测试期间关好窗户。','Residents in the vicinity of the station / were asked / to keep windows closed.','in the vicinity of + 地点表示在某地附近。','居民住在车站周围区域。'),
    C('vicinity.s2','估数','The repair is expected to cost in the vicinity of two thousand dollars, though the final bill may differ.','维修预计花费约两千美元，不过最终账单可能有所不同。','The repair may cost in the vicinity of two thousand dollars / though the final bill may differ.','in the vicinity of + 数量表示大约、接近。','金额是近似估计，不是精确数值。')
  ],M('The repair will cost in the vicinity of exactly $2,000.00, with no possible difference in the final bill.','The repair will cost in the vicinity of $2,000, though the final amount may vary.','vicinity 表示大约，不承诺精确到分。','word-choice'),[
    q(1,'Who was asked to close their windows?','residents near the station','people working at a distant airport','the repair technicians in the clinic','车站附近区域的居民收到通知。','context'),
    q(2,'What does the estimated repair cost mean?','roughly two thousand dollars','exactly two dollars','an area near the repair shop','in the vicinity of 引出大约金额。','context'),
    q(1,'The vicinity of a place is?','the area near it','its exact center only','a legal right over it','vicinity 指某地点周围的区域。','meaning'),
    q(2,'In “in the vicinity of 2,000,” vicinity means?','approximately that amount','strictly and exactly that amount','somewhere near a railway station','此处 vicinity 表示数值约为两千。','meaning')
  ]);
  P('vicious','Vicious comes from Latin vitiōsus “faulty, corrupt,” from vitium “fault”; it describes deliberate cruelty or something extremely severe.',[
    C('vicious.s1','行为','The dog was not vicious; it barked once, then backed away when the handler opened the gate.','这只狗并不凶恶；它叫了一声，训犬员打开门后便退开了。','The dog was not vicious / it barked once / then backed away.','vicious.s1 指残忍并有伤人意图；此句以否定表达。','退避而非攻击的行为不体现凶恶。'),
    C('vicious.s2','剧烈程度','A vicious storm tore shingles from the roofs and forced the ferry to stay in port.','一场猛烈的风暴掀掉了屋顶的瓦片，还迫使渡船停在港内。','A vicious storm tore shingles from roofs / and forced the ferry / to stay in port.','vicious.s2 可指非常猛烈、严重的事物。','风暴造成严重破坏并停航。')
  ],M('The vicious storm was harmless, with calm skies, no damage, and every ferry sailing on schedule.','The vicious storm damaged roofs and kept the ferry in port.','猛烈风暴造成破坏和停航，不可能同时毫无影响。'),[
    q(1,'How did the dog behave?','it barked once and backed away','it attacked the handler repeatedly','it tore shingles from houses','狗退开而没有表现出攻击性。','context'),
    q(2,'What did the vicious storm do?','damaged roofs and stopped the ferry','left the roofs untouched and the ferry on time','appointed a vice-chair','猛烈风暴掀掉屋瓦并使渡船停航。','context'),
    q(1,'A vicious person is likely to be?','cruel and intending to hurt','gentle and unwilling to cause harm','roughly two thousand dollars','vicious.s1 指残忍且有伤害意图。','meaning'),
    q(2,'A vicious storm is?','extremely severe and destructive','mild and harmless','a tool for holding metal','形容风暴时 vicious 表示猛烈严重。','meaning')
  ]);
  P('viciousness','Viciousness is formed from vicious and -ness; it names savage cruelty or spiteful intent.',
    C('viciousness.s1','行为评价','The report described the attack’s viciousness: the assailant kept striking after the victim could no longer resist.','报告描述了袭击的残忍程度：受害者已无力反抗，袭击者仍继续殴打。','The report described the attack’s viciousness / because the assailant kept striking / after resistance stopped.','viciousness 是抽象名词，指残忍或恶毒的程度。','在对方无法抵抗后仍继续攻击，体现残忍。'),
    M('The review praised the viciousness of the act because the attacker carefully stopped as soon as the victim was safe.','The report condemned the viciousness of the attack because the assailant kept striking an unable victim.','及时停止以保障安全不是残忍或恶毒。'),[
      q(1,'What made the attack vicious?','the assailant continued after the victim could not resist','the assailant stopped as soon as the victim was safe','the report estimated a repair bill','持续攻击不能抵抗的人体现残忍。','context'),
      q(1,'Viciousness is?','savage cruelty or spite','a nearby area','a pitch wavering in music','viciousness 指残忍或恶毒。','meaning'),
      q(1,'Which action shows viciousness?','deliberately hurting someone who can no longer defend themselves','ending a dispute without injury','checking a quotation for accuracy','故意伤害无力防御者体现恶毒。','context'),
      q(1,'The suffix -ness turns vicious into a word for?','the quality or degree of cruelty','a person who treats animals','an approximate amount','-ness 把形容词转为表示性质的名词。','word-formation')
    ]);
  P('vicissitude','Vicissitude came through French from Latin vicissitūdō, from vicis “change, turn”; it means an often uncontrollable change or a rise and fall in fortune.',[
    C('vicissitude.s1','人生变化','The memoir follows the vicissitudes of farm life, from years of drought to seasons of unexpected abundance.','这本回忆录记录了农场生活的种种变迁，从连年干旱到意外丰收。','The memoir follows the vicissitudes of farm life / from drought / to unexpected abundance.','vicissitude.s1 常以复数表示生活中不可控的变化。','旱灾与丰收交替体现生活变迁。'),
    C('vicissitude.s2','事业起落','After the vicissitudes of her political career, she returned to teaching in a small coastal town.','经历政治生涯的起起落落后，她回到一座海滨小镇教书。','After the vicissitudes of her career / she returned to teaching.','vicissitude.s2 指运气或事业的兴衰起落。','政治生涯有起有落，最后转回教学。')
  ],M('The memoir called two decades of identical weather and unchanged harvests the vicissitudes of farm life.','The memoir described alternating droughts and bumper harvests as vicissitudes of farm life.','长期毫无变化不是 vicissitudes 所指的起伏变迁。'),[
    q(1,'Which changes did the memoir describe?','drought followed by unexpected abundance','the same weather and harvest every year','a meeting led by the vice-chair','干旱和意外丰收交替是农场生活的变迁。','context'),
    q(2,'What did the politician experience?','ups and downs in her career','a glass vessel breaking','a severe storm at sea','vicissitudes 指其政治生涯的起落。','context'),
    q(1,'A vicissitude is often?','a change in life that may be beyond one’s control','a fixed condition that never changes','a small amount of distrust','vicissitude 常指不可控的人生变迁。','meaning'),
    q(2,'“The vicissitudes of fortune” refers to?','the rise and fall of luck or success','a tool that clamps metal','a person injured by a crime','该搭配指运气或成功的起落。','meaning')
  ]);
  P('victim','Victim comes from Latin victima, an animal offered in sacrifice; English broadened it to a person harmed by crime, disaster, or a situation.',[
    C('victim.s1','事故','The only victim of the kitchen fire was treated for smoke inhalation and released that evening.','厨房失火中唯一的受害者因吸入烟雾接受治疗，当晚便出院了。','The only victim of the fire / was treated for smoke inhalation / and released.','victim.s1 指因事故受伤害的人；of 表示导致伤害的事件。','火灾造成一人受伤并接受治疗。','medical'),
    C('victim.s2','受骗','Several customers became victims of the scam after they paid for concert tickets that did not exist.','几名顾客购买了根本不存在的演唱会门票，成了这场骗局的受害者。','Customers became victims of the scam / after paying / for nonexistent tickets.','victim of + scam 表示被骗局欺骗的人。','顾客因假票遭受经济损失。','finance')
  ],M('The customers were victims of the scam, but they received real tickets and lost no money.','The customers were victims of the scam because they paid for tickets that did not exist.','若票真实有效且无人受损，就不能说顾客是骗局受害者。','context'),[
    q(1,'What treatment did the fire victim receive?','care for smoke inhalation','a new concert ticket','an X-ray for a foal','火灾受害者接受了烟雾吸入治疗。','context'),
    q(2,'Why were the customers victims of a scam?','they paid for nonexistent tickets','they received valid tickets and lost nothing','they bought a glass vessel','假票使顾客蒙受损失。','context'),
    q(1,'A victim of an accident is someone who?','is harmed or injured by it','caused a nearby area','officially refused a law','victim 指因事故受到伤害的人。','meaning'),
    q(2,'A person can be a victim of a situation when they?','are tricked or suffer because of it','win every contest involved','inspect it for accuracy','受骗或因局势吃亏的人也可称为 victim。','meaning')
  ]);
  P('victimise','Victimise is victim plus the British spelling of -ise; it means treat someone unfairly, especially by blaming them unjustly.',
    C('victimise.s1','职场','The supervisor began to victimise Lee after Lee reported unsafe conditions, assigning impossible shifts as punishment.','李报告了不安全状况后，主管开始刁难他，把不可能完成的班次排给他作为惩罚。','The supervisor began to victimise Lee / after the report / by assigning impossible shifts.','victimise 是及物动词；British -ise 拼法有效。','主管因员工报告问题而惩罚性地不公平对待他。'),
    M('The supervisor victimised Lee by applying the same transparent schedule to everyone and never blaming him unfairly.','The supervisor victimised Lee by assigning punitive shifts after he reported unsafe conditions.','公平一致的安排且没有不公责怪，不构成 victimise。'),[
      q(1,'Why did the supervisor begin to victimise Lee?','Lee reported unsafe conditions','Lee won the team’s victory','Lee measured a machine’s vibration','主管在李报告问题后惩罚性地刁难他。','context'),
      q(1,'What did the supervisor do as punishment?','assigned impossible shifts','gave Lee a fair, shared schedule','sent him to inspect concert tickets','主管排给李不可能完成的班次。','context'),
      q(1,'To victimise a person is to?','treat them unfairly, often by blaming or punishing them','help them recover from an injury','defeat them fairly in a contest','victimise 指不公平地对待某人。','meaning'),
      q(1,'Is “victimise” an acceptable spelling?','yes, it is the British -ise spelling','no, it must always be “victimize”','no, it is only a noun','victimise 是标准英式拼写，-ize 也是另一变体。','spelling')
    ]);
  P('victor','Victor comes from Latin victor “conqueror,” from vincere “to conquer”; it names the person or side that defeats an opponent.',
    C('victor.s1','竞赛','The victor of the rowing final thanked both teammates before lifting the trophy.','赛艇决赛的胜者举起奖杯前，先感谢了两位队友。','The victor of the rowing final / thanked teammates / before lifting the trophy.','victor of + contest 指获胜者。','该队赢得决赛并获得奖杯。'),
    M('The victor of the final was the crew that lost by a wide margin and never crossed the finish line first.','The victor of the final was the crew that crossed the finish line first.','落败且未先到终点的一方不是胜者。'),[
      q(1,'What did the victor lift?','the trophy','a glass vessel','a railway viaduct','决赛胜者举起奖杯。','context'),
      q(1,'Who is the victor?','the person or side that defeats an opponent','the person harmed by an accident','the official who vetoes a law','victor 指战胜对手的人或一方。','meaning'),
      q(1,'Which crew is the victor?','the one that wins the final','the one that finishes last','the one that withdraws before racing','获胜决赛的一方是 victor。','context'),
      q(1,'The Latin root vincere means?','to conquer or defeat','to carry blood','to see a picture','victor 的词根 vincere 意为征服、战胜。','word-formation')
    ]);
  P('victorious','Victorious is formed from victory/victor with -ious; it describes someone who has come out as the winner.',
    C('victorious.s1','获胜','The victorious debate team returned to school with the regional cup after a close final.','辩论队在势均力敌的决赛中获胜后，带着地区奖杯回到学校。','The victorious debate team returned / with the regional cup / after the final.','victorious 作形容词修饰 team，表示赢得比赛。','队伍赢得决赛并带回奖杯。'),
    M('The victorious team celebrated, although it had been defeated in every round and received no award.','The victorious team celebrated after winning the close final and receiving the regional cup.','被每轮击败且未获奖的一方不能称为 victorious。'),[
      q(1,'What did the victorious team bring back?','the regional cup','a report about a vicious storm','a medical vessel','获胜队带回了地区奖杯。','context'),
      q(1,'A victorious player has?','won the contest','lost every round','been unfairly blamed','victorious 指比赛或斗争中胜出。','meaning'),
      q(1,'Which team is victorious?','the team that wins a close final','the team that loses the final','the team that leaves before playing','赢得决赛的队伍是 victorious。','context'),
      q(1,'Victorious is closest in meaning to?','triumphant','defeated','unfairly treated','victorious 与 triumphantly 获胜的意思接近。','meaning')
    ]);
  P('victory','Victory came through Old French victoire from Latin victōria, related to victor and vincere “conquer”; it means defeating an opponent or succeeding after effort.',[
    C('victory.s1','对抗赛','The team celebrated its victory over the defending champions with a quiet meal after the match.','球队赛后低调聚餐，庆祝战胜卫冕冠军。','The team celebrated its victory over the champions / after the match.','victory over + opponent 指击败对手。','球队赢了卫冕冠军。'),
    C('victory.s2','艰苦努力','For the family, getting the damaged house warm before winter was a victory after months of repairs.','对这家人来说，在冬季前让受损的房屋暖和起来，是数月修缮后取得的成功。','Getting the house warm before winter / was a victory / after months of repairs.','victory 可指艰苦努力后的成功结局，不必是比赛胜负。','家庭历经数月努力完成修缮。')
  ],M('The team called the match a victory over the champions even though the champions won and the team lost.','The team celebrated its victory after defeating the champions.','输给对手不能称为 victory over 对手。'),[
    q(1,'Whom did the team defeat?','the defending champions','the family repairing its house','the vice-chair','球队战胜了卫冕冠军。','context'),
    q(2,'Why was the warm house a victory for the family?','they succeeded after months of repairs','they won a rowing final','they received a veto','数月修缮后的成功可以称为 victory。','context'),
    q(1,'A victory over an opponent is?','success in defeating that opponent','a loss to that opponent','a nearby area around the match','victory over 表示战胜对手。','meaning'),
    q(2,'Can victory describe success outside a contest?','yes, it can describe a hard-won successful result','no, it only names a ship','no, it always means a failure','victory 也指艰苦努力后的成功。','meaning')
  ]);
  P('video','Video is from Latin vidēre “to see” through the phrase video (ego) “I see”; modern English applies it to recorded moving images, equipment, and recording.',[
    C('video.s1','媒体','The school posted a short video of the science fair so families who could not attend could watch it later.','学校发布了一段科学展的短视频，让无法到场的家人之后也能观看。','The school posted a short video / so families / could watch it later.','video.s1 指录下并能在屏幕观看的活动影像。','影像被发布供之后观看。'),
    C('video.s4','记录','A volunteer will video the graduation ceremony from the rear of the hall.','一名志愿者将在礼堂后方为毕业典礼录像。','A volunteer will video the ceremony / from the rear of the hall.','video.s4 作及物动词，表示录制活动影像。','志愿者用设备记录典礼。'),
    C('video.s2','设备','The old video in the media room can still play tapes, although its remote control is missing.','媒体室里的旧录像机仍能播放磁带，尽管遥控器不见了。','The old video can still play tapes / although its remote / is missing.','video.s2 口语中可指录放影像的机器或系统。','设备负责播放录像带。')
  ],M('The volunteer videoed the ceremony by refusing to record any moving pictures and leaving the camera switched off.','The volunteer videoed the ceremony by recording its moving images with a camera.','没有录制影像就没有 video 这场典礼。'),[
    q(1,'Why did the school post the video?','so absent families could watch the fair later','so the ceremony could be vetoed','so viewers could inspect a blood vessel','短片让未到场的家人之后观看科学展。','context'),
    q(4,'What will the volunteer do?','record moving pictures of the ceremony','show a right to the pension','clamp a metal strip','video 作动词指录制活动影像。','meaning'),
    q(2,'What can the old video in the media room do?','play tapes','carry a railway over a valley','treat sick animals','这里 video 指录放影像的设备。','context'),
    q(1,'A video is usually?','recorded moving pictures watched on a screen','a still written report only','a tool with jaws for clamping','video 名词通常指可在屏幕观看的活动影像。','meaning')
  ]);
  P('video-cassette','Video-cassette combines video with cassette, from French cassette “small box”; it is a plastic case containing magnetic tape for recorded pictures.',
    C('video-cassette.s1','旧式影音','The archivist placed the labeled video-cassette in a protective sleeve before shelving it.','档案员把贴好标签的盒式录像带放进保护套后才上架。','The archivist placed the video-cassette / in a protective sleeve / before shelving it.','video-cassette 指装有录像磁带的塑料盒。','录像带盒需要套子保护后存放。'),
    M('The archivist called the loose digital file a video-cassette even though it had no case or magnetic tape.','The archivist called the plastic case containing magnetic videotape a video-cassette.','无实体盒和磁带的数字文件不是盒式录像带。'),[
      q(1,'What did the archivist put in a sleeve?','the labeled video-cassette','a digital file with no tape','a blood vessel','档案员把录像带盒放进保护套。','context'),
      q(1,'What does a video-cassette contain?','magnetic tape for recorded pictures','a crew traveling by ship','a legal right to funds','盒内装有用于录像的磁带。','meaning'),
      q(1,'Which object is a video-cassette?','a plastic case holding videotape','a loose MP4 file on a server','a glass dish for solvent','装有录像磁带的塑料盒是 video-cassette。','context'),
      q(1,'Why was the cassette placed in a sleeve?','to protect the physical tape case in storage','to record a ceremony','to measure a storm’s vibration','档案员用保护套保存实体磁带盒。','context')
    ]);
  P('videocassette','Videocassette is the closed spelling of video-cassette, combining video and cassette (“small case”); it names a cassette used to record or play video.',
    C('videocassette.s1','影音存档','The family found a videocassette of the old school concert and borrowed a player to watch it.','一家人找到一盒旧校园音乐会录像带，又借来播放器观看。','The family found a videocassette / and borrowed a player / to watch it.','videocassette 是 video-cassette 的连写形式。','实体磁带盒需要播放器才能观看。'),
    M('They watched the videocassette on a player, although the item was only a cloud link and contained no cassette.','They watched the videocassette on a compatible player after finding the physical tape.','纯云端链接不是实体 cassette，不能按此义称作录像带盒。'),[
      q(1,'What did the family find?','a tape of the old school concert','a live concert ticket','a glass research vessel','他们找到一盒校园音乐会录像带。','context'),
      q(1,'What did they borrow?','a player for the videocassette','a veterinary clinic','a railway viaduct','他们借来播放器观看录像带。','context'),
      q(1,'Videocassette is?','a cassette used to record or play video','a live broadcast with no recording','a small blood-carrying tube','videocassette 指用于录放影像的磁带盒。','meaning'),
      q(1,'Which spelling is the closed form?','videocassette','video-casette','video cassette-tape','连写形式是 videocassette。','spelling')
    ]);
  P('videotape','Videotape joins video and tape; videotape can name magnetic tape that stores moving pictures and sound, or the act of recording them.',[
    C('videotape.s1','媒介','The museum transferred the fragile videotape to a digital archive before the magnetic coating deteriorated.','磁性涂层老化前，博物馆把脆弱的录像带转存到了数字档案。','The museum transferred the videotape / before its coating / deteriorated.','videotape.s1 指记录图像和声音的磁带。','磁带会因涂层老化而损坏。'),
    C('videotape.s2','录制','The crew videotaped the sea turtle’s release and sent the recording to the conservation team.','摄制组录下海龟放归过程，并把录像交给保护团队。','The crew videotaped the release / and sent the recording / to the team.','videotape.s2 作动词，过去式 videotaped。','摄制组记录放归的动态影像。')
  ],M('The crew videotaped the release by leaving the camera off and capturing no pictures or sound.','The crew videotaped the release by recording its pictures and sound.','没有录下任何影像或声音就不构成 videotape 该事件。'),[
    q(1,'What did the museum transfer?','a fragile magnetic videotape','a live sea turtle','a pension contribution','博物馆转存了脆弱的录像带。','context'),
    q(2,'What did the crew do at the release?','recorded it on video','placed a cassette in a sleeve','vetoed the conservation plan','摄制组为放归过程录像。','context'),
    q(1,'Videotape as a noun is?','magnetic tape for pictures and sound','a television viewer','a tool used to drill metal','videotape 名词指录有图像和声音的磁带。','meaning'),
    q(2,'Videotape as a verb means?','record a program or event on video','watch without recording anything','grant an official right','动词 videotape 指把节目或事件录下来。','meaning')
  ]);
  P('vie','Vie is recorded from Middle English and Anglo-French envier “challenge”; its earlier origin is uncertain, so no deeper root is asserted.',
    C('vie.s1','竞争','Three design firms will vie for the contract by presenting plans to restore the historic theater.','三家设计公司将提交修复历史剧院的方案，竞争这份合同。','Three design firms will vie for the contract / by presenting plans.','vie for + 奖品、职位或机会；will 后接原形。','三家公司争夺同一合同。'),
    M('The three firms agreed not to compete for the contract, yet the report said they would vie for the same prize.','The three firms would vie for the contract by submitting competing proposals.','若各方约定不竞争，就不能说它们正在争夺同一合同。','context'),[
      q(1,'What will the design firms vie for?','the theater restoration contract','a veterinary license','a glass vessel','三家公司竞争剧院修复合同。','context'),
      q(1,'How will the firms compete?','by presenting restoration plans','by withdrawing all proposals','by measuring a motor’s vibration','它们通过提交方案争取合同。','context'),
      q(1,'To vie is to?','compete with others for something','help someone recover from injury','watch a recorded film','vie 指与他人竞争以获得某物。','meaning'),
      q(1,'Which phrase correctly uses vie?','vie for a scholarship','vie a scholarship with a rival','vie to a scholarship','vie for a scholarship 是正确搭配；for 引出争取的机会。','collocation')
    ]);
  P('viennese','Viennese is formed from Vienna plus -ese, a suffix for inhabitants or things associated with a place; it means relating to Vienna or its people and style.',[
    C('viennese.s1','文化','The museum’s Viennese collection includes prints made by artists who worked in the Austrian capital.','博物馆的维也纳藏品包括曾在奥地利首都工作的艺术家创作的版画。','The museum’s Viennese collection includes prints / by artists / who worked in the capital.','Viennese 作形容词，首字母大写，表示与维也纳有关。','版画与维也纳艺术家相关。'),
    C('viennese.s1','音乐','The quartet performed a Viennese waltz at the opening of the exhibition.','四重奏乐团在展览开幕时演奏了一支维也纳华尔兹。','The quartet performed a Viennese waltz / at the exhibition opening.','Viennese 修饰音乐风格，形容词保持大写。','华尔兹与维也纳音乐风格相关。')
  ],M('The curator labeled the prints Viennese even though they were made in Vienna, Austria, and the label claimed they had no connection to the city.','The curator labeled the prints Viennese because they were made by artists working in Vienna.','原句把地点来源和“与该城无关”同时断言，语义矛盾。','context'),[
    q(1,'Where did the artists associated with the collection work?','in Vienna, the Austrian capital','in a rural clinic','on a ship crossing the bay','Viennese collection 与在维也纳工作的艺术家相关。','context'),
    q(1,'What does Viennese mean?','relating to Vienna, its people, or its style','relating to Venice in Italy','relating to a vessel’s cargo','Viennese 指与维也纳有关。','meaning'),
    q(1,'Which spelling is correct for the adjective?','Viennese','vienese','Viennies','地名派生形容词拼作 Viennese，并首字母大写。','spelling'),
    q(1,'A Viennese waltz is associated with?','Vienna and its musical style','a hospital for animals','the city of Copenhagen','Viennese waltz 指与维也纳相关的华尔兹。','context')
  ]);
  P('view','View came through Old French veue from veoir “see,” ultimately Latin vidēre; it can mean an opinion, a scene, looking at something, or considering it in a way.',[
    C('view.s1','意见','The committee’s view is that the bridge should be repaired before winter rather than replaced.','委员会认为这座桥应在冬季前维修，而不是更换。','The committee’s view is / that the bridge should be repaired / before winter.','view.s1 指对议题的看法；that 从句表达意见内容。','委员会提出了对桥梁维修的意见。'),
    C('view.s2','景色','From the cabin window, we had a clear view of the harbor and the research vessel.','从小屋窗户望去，我们可以清楚地看到港口和科考船。','We had a clear view of the harbor / from the cabin window.','view.s2 指从某处看见的景物。','窗外能看到港口和船。'),
    C('view.s3','观看','Visitors may view the restored film in the small theater after the archive talk.','档案讲座结束后，访客可以在小放映厅观看修复后的影片。','Visitors may view the restored film / after the archive talk.','view.s3 作及物动词，指观看或仔细查看。','访客在放映厅观看影片。'),
    C('view.s4','看待','The council views the footbridge as essential for residents on the far bank.','市议会认为这座人行桥对河对岸的居民至关重要。','The council views the footbridge / as essential / for residents.','view ... as ... 表示把某物看作或认为是某种情况。','市议会将桥视为必要设施。')
  ],M('The committee’s view was that the bridge must be repaired, but its report said the committee had no opinion on the bridge.','The committee’s view was that the bridge should be repaired before winter.','表达了明确立场就说明委员会有意见，不能同时说完全没有看法。'),[
    q(1,'What did the committee think should happen to the bridge?','it should be repaired before winter','it should be used as a theater','it should be carried over a valley','委员会认为桥应在冬季前维修。','context'),
    q(2,'What could be seen from the cabin?','the harbor and a research vessel','the committee’s written opinion','a clinic recovery room','窗户外能看到港口和科考船。','context'),
    q(3,'What may visitors do in the small theater?','watch the restored film','repair the bridge','view a legal pension right','view 作动词表示观看影片。','meaning'),
    q(4,'“The council views the footbridge as essential” means it?','considers the footbridge necessary','watches the bridge on a screen','has a clear scene of the harbor','view ... as ... 表示认为某物具有某性质。','meaning')
  ]);
  P('viewer','Viewer is formed from view and the agent suffix -er; it names someone who watches a screen or looks at an artwork.',[
    C('viewer.s1','影视','The documentary’s viewers sent questions to the filmmaker after the final credits appeared.','纪录片片尾字幕出现后，观众向导演发去了问题。','The documentary’s viewers sent questions / after the final credits.','viewer.s1 指观看电视或电影的人；viewers 是复数。','纪录片观众在看完后提问。','media'),
    C('viewer.s2','展览','A viewer paused in front of the landscape painting to study the tiny boats near the horizon.','一位观赏者在风景画前停下，仔细看地平线附近的小船。','A viewer paused in front of the painting / to study the boats.','viewer.s2 指观看画作或展览的人。','观赏者驻足观察画作细节。','art')
  ],M('The museum called her a viewer of the painting, although she never looked at the artwork or entered the gallery.','The museum called her a viewer because she stopped to examine the painting.','从未看过画作的人不是该画的观赏者。'),[
    q(1,'What did documentary viewers send?','questions to the filmmaker','a veto to the council','a blood vessel','观众在片尾字幕出现后给导演发问题。','context'),
    q(2,'What did the viewer study in the painting?','tiny boats near the horizon','a film’s final credits','a pension contribution','观赏者仔细观察画中的小船。','context'),
    q(1,'A viewer of a film is someone who?','watches it','records it without watching','acts as vice-chair','viewer 指观看电视或电影的人。','meaning'),
    q(2,'In a gallery, a viewer is?','someone looking at an artwork','the artist who painted it','the object displayed in the gallery','在展览中 viewer 是观看作品的人。','meaning')
  ]);
  P('viewpoint','Viewpoint combines view and point; it means either a particular way of thinking or a place from which a scene can be seen.',[
    C('viewpoint.s1','观点','From a tenant’s viewpoint, the proposed rent increase would make the apartment unaffordable.','从租户的角度看，拟议的租金上涨会让这套公寓变得负担不起。','From a tenant’s viewpoint / the proposed increase / would make the apartment unaffordable.','from someone’s viewpoint 表示从其立场或角度考虑。','句子呈现租户对涨租的看法。'),
    C('viewpoint.s2','观景点','We stopped at a marked viewpoint above the lake to photograph the islands at sunset.','我们在湖上方标记好的观景点停下，拍摄日落时的岛屿。','We stopped at a marked viewpoint / above the lake / to photograph the islands.','viewpoint.s2 指能清楚观看景色的位置。','该地点可俯瞰湖和岛屿。')
  ],M('From the tenant’s viewpoint, the rent increase was affordable, but the tenant’s statement said it would make the apartment impossible to pay for.','From the tenant’s viewpoint, the rent increase would make the apartment unaffordable.','同一立场下“负担得起”和“无法负担”自相矛盾。'),[
    q(1,'What would the rent increase do from the tenant’s viewpoint?','make the apartment unaffordable','create a lake viewpoint','record the apartment on videotape','租户认为涨租会让公寓无法负担。','context'),
    q(2,'Why did the hikers stop at the viewpoint?','to photograph the islands at sunset','to send questions to a filmmaker','to inspect a blood vessel','观景点能看到湖中岛屿。','context'),
    q(1,'A viewpoint can be?','a way of thinking about an issue','only a camera that records video','an official power to refuse a law','viewpoint 可指考虑问题的角度。','meaning'),
    q(2,'A marked viewpoint above a lake is?','a place with a good view of the scene','a written opinion about rent','a film viewer','湖上的标记观景点是能欣赏景色的位置。','meaning')
  ]);
  P('views','Views is the plural of view; it refers to opinions or beliefs considered together and can especially mean political opinions.',[
    C('views.s1','看法','The survey collected residents’ views on whether the riverside path should stay open at night.','这项调查收集了居民对河边步道是否应在夜间开放的看法。','The survey collected residents’ views / on whether the path / should stay open.','views.s1 是复数名词，指对某事的一组看法或信念。','问卷收集不同居民的意见。'),
    C('views.s2','政见','The candidate’s views on housing and public transport were published before the election.','选举前，这位候选人关于住房和公共交通的政见已公布。','The candidate’s views on housing and transport / were published / before the election.','views.s2 指关于政治事务的意见；on 引出主题。','候选人公布政策观点。')
  ],M('The candidate’s views on housing were published, but the article claimed the candidate had no opinions about housing or any political matter.','The candidate’s views on housing and transport were published before the election.','公布住房政见与声称完全没有相关观点相矛盾。'),[
    q(1,'What did the survey ask residents about?','whether the riverside path should stay open at night','whether a videocassette was magnetic','whether a storm was vicious','居民表达了对夜间开放步道的看法。','context'),
    q(2,'Which topics were in the candidate’s views?','housing and public transport','vibrato and violin pitch','blood vessels and surgery','候选人的政见涉及住房和公共交通。','context'),
    q(1,'Views can mean?','opinions or beliefs held about a subject','a single physical viewing screen','a cassette used to store video','views 指一组观点或信念。','meaning'),
    q(2,'Political views are opinions about?','political matters and policies','which painting a museum visitor sees','a ship’s route only','political views 指对政治事务或政策的意见。','meaning')
  ]);
  /* A163 checkpoint 3: manifest items 41–60, vigil–violate */
  P('vigil','Vigil comes from Latin vigilia “wakefulness, a watch,” from vigil “awake”; it is a period of staying awake, often for prayer or watch.',
    C('vigil.s1','纪念守夜','Neighbors held a candlelight vigil outside the hospital while the missing climber’s family waited for news.','失踪登山者的家人在医院等候消息时，邻居们在外面举行了烛光守夜。','Neighbors held a candlelight vigil / outside the hospital / while the family waited.','hold a vigil 表示举行守夜活动；while 引出同期情况。','参与者夜间聚集并保持清醒，表达关怀。'),
    M('The neighbors held a vigil by going home to sleep through the entire night and leaving the hospital entrance empty.','The neighbors held a vigil by staying awake together outside the hospital through the night.','守夜要求夜间保持清醒，回家睡觉与之相反。'),[
      q(1,'Where did neighbors hold the vigil?','outside the hospital','inside a vineyard','at a video archive','邻居在医院外守夜。','context'),
      q(1,'Why were they gathered?','the missing climber’s family was waiting for news','they were harvesting grapes','they were recording a music video','守夜表达对等待消息的家属的支持。','context'),
      q(1,'A vigil is usually a time of?','staying awake, often to watch or pray','sleeping through the night','competing for a prize','vigil 指夜间保持清醒的守候或祈祷。','meaning'),
      q(1,'Which activity is a vigil?','keeping an overnight watch for a missing person','taking a daytime nap after a match','recording a concert on tape','为失踪者通宵守候是 vigil。','context')
    ]);
  P('vigilance','Vigilance is from Latin vigilantia “wakefulness, watchfulness,” from vigilāre “stay awake”; it means attentive watchfulness for danger or continued alertness.',[
    C('vigilance.s1','安全','The guards maintained vigilance around the chemical store after a damaged lock was discovered.','发现锁具损坏后，守卫加强了对化学品仓库周围的警戒。','The guards maintained vigilance / around the chemical store / after a lock was damaged.','maintain vigilance 表示持续警戒；around 引出守护地点。','损坏的锁增加危险，守卫保持警惕。'),
    C('vigilance.s2','值守','After the overnight vigilance, the rescue volunteers took turns sleeping in the warm shelter.','经过一夜值守后，救援志愿者轮流在温暖的避难所里休息。','After the overnight vigilance / the volunteers took turns / sleeping.','vigilance.s2 指保持清醒、守望的状态。','志愿者通宵值守后才轮流休息。')
  ],M('The guards showed vigilance by leaving the damaged chemical store unobserved all night.','The guards showed vigilance by watching the damaged chemical store through the night.','无人看守不属于对危险保持密切注意。'),[
    q(1,'Why did the guards increase vigilance?','a lock on the chemical store was damaged','the vineyards needed a harvest','a violinist had finished a concert','损坏的锁提示可能有安全风险。','context'),
    q(2,'When did the rescue volunteers rest?','after an overnight watch','before starting the night shift','while the missing climber was still outdoors','志愿者通宵值守后才休息。','context'),
    q(1,'Vigilance means?','careful attention to possible danger','complete indifference to risk','a legal right to block a vote','vigilance 指对可能危险保持警惕。','meaning'),
    q(2,'The volunteers’ overnight vigilance involved?','staying awake and watchful','harvesting grapes','watching a recorded video','此处 vigilance 指夜间保持清醒戒备。','meaning')
  ]);
  P('vigilant','Vigilant comes from Latin vigilans, “watchful,” the present participle of vigilāre “stay awake”; it describes careful alertness or guarding.',[
    C('vigilant.s1','防范风险','A vigilant hiker checked the weather warnings before crossing the exposed ridge.','一位警觉的徒步者在穿越无遮蔽的山脊前查看了天气警报。','A vigilant hiker checked the warnings / before crossing / the exposed ridge.','vigilant 修饰 hiker，指谨慎留意危险。','徒步者先查看危险天气信息。','safety'),
    C('vigilant.s2','守卫','The night guard remained vigilant at the museum entrance until the alarm was repaired.','夜班守卫一直在博物馆入口保持警戒，直到警报修好。','The night guard remained vigilant / at the entrance / until the alarm was repaired.','remain vigilant 表示持续保持戒备。','守卫在警报修好前留心入口。','security')
  ],M('The vigilant guard ignored every warning light and left the museum entrance unattended during the alarm failure.','The vigilant guard watched the entrance closely until the alarm was repaired.','忽略警报且离岗与保持警惕、守护入口相反。'),[
    q(1,'What did the vigilant hiker check?','weather warnings','the candidate’s political views','the wine’s vintage label','徒步者先查看天气警报。','context'),
    q(2,'Where did the guard remain vigilant?','at the museum entrance','in a vineyard among the vines','on a video-cassette shelf','守卫持续看守博物馆入口。','context'),
    q(1,'A vigilant person is?','carefully alert to danger or trouble','unaware of every warning','extremely unpleasant','vigilant 指密切留意危险或麻烦。','meaning'),
    q(2,'Why was the night guard vigilant?','the alarm was not yet repaired','the grape harvest was complete','the museum’s video had won an award','警报未修好时，入口仍需有人戒备。','context')
  ]);
  P('vigor','Vigor came through French from Latin vigor “liveliness, force,” related to vigēre “be lively”; it means energy or effective force, including a law’s force.',[
    C('vigor.s1','精力','Despite her age, the gardener worked with vigor, turning the soil before the spring planting.','尽管年事已高，园丁仍精力充沛地翻土，为春季种植做准备。','The gardener worked with vigor / turning the soil / before spring planting.','with vigor 表示充满体力和精力。','园丁积极翻土准备种植。'),
    C('vigor.s2','效力','The court ruled that the old safety regulation remained in vigor until the replacement was formally adopted.','法院裁定，旧安全规章在替代条例正式通过之前仍然有效。','The regulation remained in vigor / until the replacement / was formally adopted.','remain in vigor 指仍具效力；此搭配较正式。','替代规定通过前旧规仍生效。')
  ],M('The safety regulation remained in vigor even though it had been repealed and no longer had any legal force.','The safety regulation remained in vigor until the replacement rule took effect.','已废除且不再具法律效力的条例不能说仍有效。','word-choice'),[
    q(1,'How did the gardener turn the soil?','with energy and vigor','without moving at all','with a legal veto','园丁精力充沛地翻土。','context'),
    q(2,'When did the old regulation stop being in vigor?','when the replacement was formally adopted','before it was ever introduced','when the gardener planted a vine','新规正式通过后，旧规才不再有效。','context'),
    q(1,'Vigor of body or mind is?','energy and strength','a nearby area','a person harmed by a crime','vigor 指身体或精神的活力。','meaning'),
    q(2,'A law in vigor is?','still effective and in force','repealed with no legal effect','being viewed on a screen','in vigor 在此指规章仍有效。','meaning')
  ]);
  P('vigorous','Vigorous is from vigor plus -ous, ultimately Latin vigor “force, energy”; it means full of energy or performed with force.',[
    C('vigorous.s1','体力','The vigorous young horse trotted for an hour without showing signs of fatigue.','这匹精力旺盛的小马慢跑了一个小时，没有显出疲倦。','The vigorous young horse trotted / for an hour / without fatigue.','vigorous.s1 指体力充沛、精力旺盛。','小马长时间活动仍不疲倦。'),
    C('vigorous.s2','运动','The doctor recommended vigorous exercise three times a week, but advised her to increase the pace gradually.','医生建议她每周进行三次高强度运动，但提醒她逐步提高速度。','The doctor recommended vigorous exercise / three times a week / with a gradual increase.','vigorous 修饰 exercise，强调强度和用力程度。','医生建议的锻炼强度较大。')
  ],M('The doctor called the exercise vigorous, although it involved sitting still and barely raising the pulse.','The doctor called the fast uphill cycling vigorous exercise.','静坐且几乎不提升心率不符合高强度运动。'),[
    q(1,'How long did the vigorous horse trot?','for an hour','for one minute before stopping','until it crossed a viaduct','小马慢跑了一小时且没有疲倦。','context'),
    q(2,'How often was vigorous exercise recommended?','three times a week','once every five years','only after a grape harvest','医生建议每周三次高强度锻炼。','context'),
    q(1,'A vigorous person is?','full of physical energy and strength','completely inactive','unfairly blamed','vigorous 可描述精力充沛的人。','meaning'),
    q(2,'Which is vigorous exercise?','fast uphill cycling','sitting still without raising the pulse','watching a video','快速上坡骑行需要较大强度。','context')
  ]);
  P('vigorously','Vigorously is the adverb formed from vigorous and -ly; it means with strength, energy, or force.',
    C('vigorously.s1','动作力度','The committee vigorously debated the proposal before voting to protect the clinic’s funding.','委员会在投票保护诊所资金之前，围绕提案进行了激烈辩论。','The committee vigorously debated / before voting / to protect the clinic’s funding.','vigorously 修饰 debated，表示辩论强烈、充满力度。','多方激烈讨论后进行表决。'),
    M('The committee debated the issue vigorously by saying nothing, avoiding every argument, and ending the meeting immediately.','The committee debated vigorously, with members forcefully defending opposing views.','沉默并避开争论不是有力地辩论。'),[
      q(1,'What did the committee debate vigorously?','a proposal affecting clinic funding','a recipe for vinegary salad','the color of a viola','委员会激烈讨论一项影响诊所资金的提案。','context'),
      q(1,'How does vigorously describe the debate?','it was energetic and forceful','it was silent and inactive','it was only an approximate estimate','vigorously 表示充满活力或力度地。','meaning'),
      q(1,'Which action is done vigorously?','arguing a position with energy and force','sitting silently without taking part','staying asleep during a vigil','充满力度地表达立场是 vigorously。','context'),
      q(1,'Vigorously is an adverb related to which adjective?','vigorous','vicarious','vicious','vigorously 由 vigorous 加 -ly 构成。','word-formation')
    ]);
  P('vigour','Vigour is the British spelling of vigor, from French vigueur and Latin vigor “force, energy”; it means energy, strength, or continuing effectiveness.',[
    C('vigour.s1','精神状态','After a month of rest, the patient began gardening again with renewed vigour.','休养一个月后，病人重新开始园艺劳动，精力也恢复了。','The patient began gardening / with renewed vigour / after a month of rest.','vigour.s1 指体力或精神上的活力；该拼法为英式英语。','休养后精力恢复并重新活动。'),
    C('vigour.s2','论证力度','The barrister defended the decision with vigour, answering each objection with evidence.','律师有力地为该决定辩护，用证据回应每一项反对意见。','The barrister defended the decision with vigour / answering each objection / with evidence.','with vigour 可表示活动或论证有力。','律师有力回应反对意见。')
  ],M('The barrister defended the decision with vigour by refusing to answer objections or provide any argument.','The barrister defended the decision with vigour by answering objections firmly with evidence.','拒绝回应与有力辩护不一致。'),[
    q(1,'What did the patient resume with renewed vigour?','gardening','a military vigil','video recording','病人恢复精力后重新做园艺。','context'),
    q(2,'How did the barrister defend the decision?','firmly, answering objections with evidence','silently, avoiding every objection','by using a bench vice','律师有力地以证据回应质疑。','context'),
    q(1,'What does vigour mean?','energy, strength, or healthy activity','a small trace from the past','a person who watches a film','vigour 指活力或力量。','meaning'),
    q(1,'Which spelling is standard in British English?','vigour','vigor only','viggour','英式英语常用 vigour，美式英语用 vigor。','spelling')
  ]);
  P('vile','Vile comes from Latin vilis “cheap, low, worthless”; it describes something extremely unpleasant or morally cruel.',[
    C('vile.s1','气味','A vile smell rose from the blocked drain, so the caretaker closed the hallway until it was cleaned.','堵塞的排水沟散发出一股恶臭，管理员便封闭走廊直到清理完毕。','A vile smell rose from the drain / so the caretaker / closed the hallway.','vile.s1 指极令人不快或恶心。','恶臭使走廊需要清理。'),
    C('vile.s2','行为','The judge condemned the vile act of threatening witnesses to stop them from giving evidence.','法官谴责了威胁证人、企图阻止他们作证的卑劣行为。','The judge condemned the vile act / of threatening witnesses / to prevent testimony.','vile.s2 指非常不道德或残忍的行为。','恐吓证人严重违背道德并应受谴责。')
  ],M('The judge praised the vile threat against witnesses as a generous and ethical act of public service.','The judge condemned the vile threat against witnesses as cruel and deeply immoral.','威胁证人是卑劣行为，不是慷慨且合乎道德的服务。'),[
    q(1,'What did the blocked drain produce?','a vile smell','a vibrant orange stripe','a musical vibrato','堵塞的排水沟发出恶臭。','context'),
    q(2,'What was condemned by the judge?','threatening witnesses to stop their testimony','letting witnesses testify safely','checking a legal rule’s vigor','法官谴责恐吓证人的行为。','context'),
    q(1,'Vile can describe something?','extremely unpleasant or disgusting','pleasant and mild','only approximately two thousand','vile 可指极其令人不快的事物。','meaning'),
    q(2,'A vile act is likely to be?','deeply immoral or cruel','a harmless routine choice','a standard musical technique','vile 的道德义表示非常不道德或残忍。','meaning')
  ]);
  P('villa','Villa comes from Italian villa, from Latin villa “country house, farm”; English uses it for a comfortable country or suburban house, often used for holidays.',[
    C('villa.s1','住宅','The retired couple bought a small villa outside the city, with a garden and room for visiting grandchildren.','这对退休夫妇在城外买了一栋小别墅，带花园，也有地方接待来访的孙辈。','The couple bought a villa / outside the city / with a garden.','villa.s1 指乡间或郊区的住宅。','城外住宅带有花园和舒适空间。'),
    C('villa.s2','度假','We rented a seaside villa for a week and cooked breakfast on the terrace each morning.','我们租了一栋海边度假别墅住了一周，每天早上都在露台上做早餐。','We rented a seaside villa / for a week / and cooked on the terrace.','villa.s2 指用于度假的大房子。','游客租屋度假并在露台用餐。')
  ],M('The travelers rented a seaside villa for their holiday, but the accommodation was a one-person tent with no house or rooms.','The travelers rented a seaside villa with rooms and a terrace for their holiday.','帐篷不是供度假使用的大房子，和 villa 不符。'),[
    q(1,'Where was the couple’s villa?','outside the city','inside the courthouse','on a video-cassette','这栋别墅位于城外。','context'),
    q(2,'How long did the travelers rent the seaside villa?','for a week','for one minute','until the harvest ended','他们租别墅度假一周。','context'),
    q(1,'A villa is generally?','a comfortable house in the country or suburbs','a small glass container','a bridge across a valley','villa 指乡间或郊区的住宅。','meaning'),
    q(2,'A holiday villa is?','a large house rented for a vacation','a tent with no rooms','a museum visitor','度假别墅是供度假使用的大房子。','meaning')
  ]);
  P('village','Village came through Old French village, from a term related to Latin villa “country house”; it means a rural settlement or, collectively, its residents.',[
    C('village.s1','聚落','The village lies between the river and the hills, with one shop and a primary school.','这个村庄位于河流和山丘之间，有一家商店和一所小学。','The village lies between the river and the hills / with one shop / and a school.','village.s1 指比城镇小的一组乡间房屋及建筑。','房屋、商店和学校组成村庄。'),
    C('village.s2','村民整体','The whole village welcomed the flood volunteers with hot tea after they repaired the footbridge.','志愿者修好人行桥后，全村人都用热茶欢迎他们。','The whole village welcomed the volunteers / after they repaired the footbridge.','the whole village 可用单数形式统称村民。','此处 village 指共同欢迎志愿者的居民群体。')
  ],M('The village welcomed the flood volunteers, but the report clarified that no residents took part or were present.','The village welcomed the volunteers after residents gathered with hot tea.','若没有居民参加，就不能说全体村民欢迎来访者。','meaning'),[
    q(1,'What facilities were in the village?','a shop and a primary school','a vineyard and a film archive','a veterinary operating room','村里有商店和小学。','context'),
    q(2,'What did the whole village do?','welcomed the flood volunteers','vetoed the river','recorded a violist','此处 village 代表村民整体，他们欢迎了志愿者。','context'),
    q(1,'A village is?','a small settlement of houses and buildings in the country','a large capital city','one isolated dwelling with no neighbors','village 指比镇小的乡间聚落。','meaning'),
    q(2,'In “the whole village welcomed them,” village means?','the people living in the place as a group','only the village school building','a single elected official','此用法把村民作为整体来称呼。','meaning')
  ]);
  P('villager','Villager is formed from village and the person suffix -er; it means an inhabitant of a village.',
    C('villager.s1','居民身份','A villager showed the survey team a footpath that did not appear on their map.','一位村民给调查队指了一条地图上没有标出的步道。','A villager showed the team a footpath / that did not appear / on the map.','villager 指住在村庄里的人；a 表示单数可数名词。','当地居民熟悉地图上未标注的小路。'),
    M('The visitor was called a villager even though she lived in a distant city and had never stayed in the village.','The resident who lived in the village showed the survey team the local footpath.','不住在村里的访客不是该村居民。'),[
      q(1,'What did the villager show the survey team?','a footpath missing from their map','a video-cassette in an archive','a court’s veto','当地村民指出一条地图上没有的小路。','context'),
      q(1,'A villager is?','a person who lives in a village','a person who visits once from a distant city','a person who records a film','villager 指村庄居民。','meaning'),
      q(1,'Which person is a villager?','someone whose home is in the rural settlement','a tourist staying one night at a hotel','a city official who vetoes an ordinance','住在乡村聚落的人是 villager。','context'),
      q(1,'What does the suffix -er add in villager?','a person associated with a village','a quality of being cruel','a device for recording video','-er 在此构成人的名称。','word-formation')
    ]);
  P('vindicate','Vindicate comes from Latin vindicāre “claim, avenge, punish”; English uses it to prove a person or decision right, or to justify a claim with facts.',[
    C('vindicate.s1','澄清名誉','New camera footage vindicated the guard, showing that he had left the entrance only to call an ambulance.','新监控影像还了守卫清白，显示他离开入口只是为了呼叫救护车。','New footage vindicated the guard / showing that he had left / to call an ambulance.','vindicate.s1 指以证据证明受质疑的人是对的。','录像澄清守卫离岗原因。','law'),
    C('vindicate.s2','理论证据','The later measurements vindicated the engineer’s prediction that the bridge would withstand the flood.','后来的测量结果证明工程师关于桥梁能经受洪水的预测是正确的。','The measurements vindicated the prediction / that the bridge would withstand / the flood.','vindicate.s2 指事实证明理论、观点或判断有根据。','测量结果支持工程师的预测。','engineering')
  ],M('The footage vindicated the guard by proving he abandoned the entrance for no reason, exactly as his critics had alleged.','The footage vindicated the guard by showing he left briefly to call an ambulance.','若证据证实指控，便没有证明其清白或正确。'),[
    q(1,'What did the camera footage show?','the guard left to call an ambulance','the guard ignored an emergency','the guard recorded a vineyard','影像表明守卫是去呼叫救护车。','context'),
    q(2,'What did later measurements vindicate?','the engineer’s prediction about the bridge','the claim that the bridge would collapse','a violinist’s concert program','测量结果证明工程师的预测有根据。','context'),
    q(1,'To vindicate a person is to?','prove that their actions were right after doubt or criticism','blame them unfairly for a crime','keep them awake at night','vindicate 可指证明受批评的人是对的。','meaning'),
    q(2,'Facts can vindicate a theory by?','showing that it is justified','making it impossible to test','turning it into a village','证据可以证明理论站得住脚。','meaning')
  ]);
  P('vindictive','Vindictive is from Latin vindicta “revenge” plus -ive; it describes a person or action motivated by a desire to retaliate.',
    C('vindictive.s1','报复行为','After the dispute, a vindictive landlord cut off the tenant’s heat to punish her for filing a complaint.','争执后，报复心重的房东切断租客暖气，惩罚她提出投诉。','A vindictive landlord cut off the heat / to punish the tenant / for complaining.','vindictive 修饰 landlord，指其行为出于报复心理。','房东因投诉而故意惩罚租客。'),
    M('The landlord was vindictive because he restored the tenant’s heat and made no effort to punish her for the complaint.','The landlord was vindictive because he cut off heat specifically to punish the tenant for complaining.','主动恢复供暖且没有报复意图，不符合 vindictive。'),[
      q(1,'Why did the landlord cut off the heat?','to punish the tenant for filing a complaint','to protect the tenant from a storm','to test the viability of a seed','他切断供暖是为了惩罚提出投诉的租客。','context'),
      q(1,'A vindictive person wants to?','take revenge or punish someone','forgive a dispute and help','watch a concert recording','vindictive 指有意报复的人或行为。','meaning'),
      q(1,'Which action is vindictive?','withholding heat to retaliate for a complaint','repairing the heating system promptly','listening to a tenant’s concern fairly','为投诉而故意断暖属于报复行为。','context'),
      q(1,'Vindictive is closest to?','revengeful','watchful','full of energy','vindictive 与 revengeful 意义接近。','meaning')
    ]);
  P('vine','Vine comes from Latin vīnea “vineyard, vine,” related to vīnum “wine”; it is a climbing plant, especially the grape-bearing plant.',[
    C('vine.s1','葡萄栽培','The grapevine was trained along a wire so each bunch received enough sunlight to ripen.','葡萄藤被牵引着沿铁丝生长，让每串葡萄都能获得足够阳光成熟。','The grapevine was trained along a wire / so each bunch / received sunlight.','vine.s1 指结葡萄的藤蔓；train 在此指引导植物生长方向。','葡萄藤攀附支架。'),
    C('vine.s2','攀缘植物','A thick vine climbed the garden wall and reached the balcony above it.','一条粗藤攀上花园墙，伸到了上方的阳台。','A thick vine climbed the garden wall / and reached the balcony.','vine.s2 可泛指茎柔软、攀缘或匍匐生长的植物。','藤蔓沿墙攀爬。')
  ],M('The grapevine was a vine even though it had no flexible stem and grew entirely as a deep-rooted tree with no climbing growth.','The grapevine was a vine whose flexible stems were trained along a support.','攀缘植物的藤茎柔韧并可依附支架生长。'),[
    q(1,'Why was the grapevine trained along a wire?','so grape bunches could receive sunlight','so the wire could veto the harvest','so the fruit could become a videocassette','支架把葡萄藤引向阳光。','context'),
    q(2,'What did the thick vine do?','climbed the garden wall','remained buried under the ground','held a metal strip in place','藤蔓攀上花园墙。','context'),
    q(1,'A vine is typically?','a climbing or creeping plant with flexible stems','a large vessel used at sea','a tree with no climbing growth','vine 通常指攀缘或匍匐生长的柔韧茎植物。','meaning'),
    q(1,'Which plant is a vine in the narrower sense?','a grape-bearing plant growing along a trellis','a rooted pine tree with a rigid trunk','a garden wall','葡萄藤是 vine 的典型例子。','meaning')
  ]);
  P('vinegar','Vinegar came through French vin aigre, literally “sour wine,” from vin “wine” and aigre “sour”; it is a sour liquid used in food.',[
    C('vinegar.s1','烹饪','Add a spoonful of vinegar to the dressing to balance the sweetness of the roasted vegetables.','在调味汁里加一勺醋，可以平衡烤蔬菜的甜味。','Add a spoonful of vinegar / to the dressing / to balance the sweetness.','vinegar.s1 是酸味液体；a spoonful of 为量词搭配。','醋用来调味并平衡甜味。'),
    C('vinegar.s2','文体描写','The reviewer’s vinegar showed in every sentence, which mocked the actors rather than assessing the play.','评论者的尖酸语气体现在每句话里，他是在嘲笑演员而非评价戏剧。','The reviewer’s vinegar showed / in every sentence / which mocked the actors.','vinegar 可文学性地比喻言辞的尖酸。','评论用语带着挖苦讥讽。')
  ],M('The cook added vinegar to the sauce for its sweet, sugary flavor and avoided any sour taste.','The cook added vinegar for its sharp sour taste, which balanced the sauce.','vinegar 的典型味道是酸，不是甜。'),[
    q(1,'Why did the cook add vinegar?','to balance the vegetables’ sweetness','to make the sauce taste only sugary','to record the recipe on tape','醋的酸味平衡了蔬菜的甜味。','context'),
    q(2,'What did the reviewer’s vinegar sound like?','sharp and mocking','warm and wholly admiring','a musical wavering pitch','比喻义 vinegar 指尖酸挖苦的言辞。','context'),
    q(1,'Vinegar is primarily?','a sour liquid used to season or preserve food','a sweet liquid made only for desserts','a tool for holding metal','vinegar 指调味或腌制食物的酸味液体。','meaning'),
    q(2,'“The writer’s vinegar” figuratively suggests?','a bitter or sour tone in the writing','a recipe ingredient in every sentence','the writer’s vineyard','文学性比喻指言辞尖酸。','meaning')
  ]);
  P('vinegary','Vinegary is formed from vinegar and -y; it means tasting or smelling sharply sour like vinegar, and can describe a bitter tone.',[
    C('vinegary.s1','味道','The salad dressing tasted vinegary, so the chef added olive oil and a little honey.','沙拉酱尝起来醋味太重，于是厨师加了橄榄油和一点蜂蜜。','The dressing tasted vinegary / so the chef added oil / and a little honey.','vinegary 描述明显的醋酸味；taste 作系动词接形容词。','过酸的调味汁通过加油和蜂蜜调整。'),
    C('vinegary.s1','气味','A vinegary smell rose from the jar after the fruit had fermented too long.','水果发酵过久后，罐子里散发出酸醋味。','A vinegary smell rose from the jar / after the fruit / fermented too long.','vinegary 可修饰 smell，表示像醋一样尖酸。','过度发酵产生醋样气味。')
  ],M('The dressing tasted vinegary, but it was completely sweet and had no trace of vinegar-like acidity.','The dressing tasted vinegary because its sharp acidic flavor overwhelmed the other ingredients.','没有任何酸味就不适合用 vinegary 描述。'),[
    q(1,'What did the chef add to the dressing?','olive oil and a little honey','more vinegar and lemon juice','a video-cassette','厨师用油和蜂蜜缓和过酸的味道。','context'),
    q(1,'Why did the jar smell vinegary?','the fruit had fermented too long','the fruit had been frozen immediately','a musician played a viola nearby','水果发酵过久产生酸醋味。','context'),
    q(1,'Vinegary means?','having a sharp taste or smell like vinegar','tasting completely sweet with no acidity','belonging to Vienna','vinegary 指像醋一样尖酸。','meaning'),
    q(1,'Which phrase uses vinegary naturally?','a vinegary dressing that needs a little honey','a vinegary blanket with no smell or flavor','a vinegary victory in a race','vinegary 常描述酸味过重的食物。','collocation')
  ]);
  P('vineyard','Vineyard combines vine with yard in the sense of an enclosed plot; it denotes land where grapes are cultivated, often for wine.',
    C('vineyard.s1','农业','The vineyard workers pruned the grapevines in winter so the plants would produce healthy fruit in summer.','葡萄园工人在冬天修剪葡萄藤，让植株夏天结出健康果实。','The vineyard workers pruned the vines / in winter / for healthy fruit later.','vineyard 指种植葡萄的土地；workers 作复数主语。','工人在园内修剪葡萄藤。'),
    M('The vineyard produced no grapes and contained no grapevines, only rows of metal instruments used by a violinist.','The vineyard contained rows of grapevines cultivated for their fruit.','没有葡萄藤的地块不是 vineyard。'),[
      q(1,'When did the workers prune the vines?','in winter','during a concert','after a court veto','葡萄园工人在冬天修剪葡萄藤。','context'),
      q(1,'What is grown in a vineyard?','grapes on vines','violas and violins','video-cassettes','葡萄园种植葡萄。','context'),
      q(1,'A vineyard is?','land where grapes are cultivated','a house rented for holidays','a bridge across a valley','vineyard 指种植葡萄的土地。','meaning'),
      q(1,'Which place is a vineyard?','a cultivated plot with rows of grapevines','an orchard with only apple trees','a music hall with a violinist','种植成行葡萄藤的地块是 vineyard。','context')
    ]);
  P('vintage','Vintage came through French vendage from Latin vindēmia “grape harvest”; it can name a wine’s grape year/place, the harvest itself, or something characteristic and excellent from a period.',[
    C('vintage.s1','葡萄酒','The label gives the wine’s vintage as 2018 and names the valley where the grapes were grown.','酒标注明这款酒的采收年份为2018年，并标出葡萄种植的山谷。','The label gives the wine’s vintage / as 2018 / and names the valley.','vintage.s1 指某批葡萄酒葡萄的采收年份和产地。','年份与产地都写在酒标上。'),
    C('vintage.s2','采收季','A late frost damaged the vines just before the vintage began, reducing the amount of fruit collected.','采收季开始前，一场晚霜损坏了葡萄藤，减少了收获量。','A late frost damaged the vines / just before the vintage / reducing the harvest.','vintage.s2 指葡萄采摘用于酿酒的过程或季节。','霜冻发生在采摘开始之前。','agriculture'),
    C('vintage.s3','经典时期','The shop restored a vintage radio from the 1940s, preserving its original dial and wooden case.','商店修复了一台20世纪40年代的经典收音机，保留了原装旋钮和木壳。','The shop restored a vintage radio / from the 1940s / preserving its case.','vintage.s3 指某个时期的典型或品质上乘之物。','老式收音机具有那个时期的风格。','collecting')
  ],M('The label called the wine’s vintage 2018 but said its grapes had been harvested in 2024 from a different named region.','The label listed the wine’s actual grape year and region as its vintage.','葡萄采收年份和产地信息相互矛盾，不能准确标作同一 vintage。','meaning'),[
    q(1,'What year was listed as the wine’s vintage?','2018','1940','2024','酒标给出的葡萄酒 vintage 年份为2018年。','context'),
    q(2,'What happened just before the vintage began?','a late frost damaged the vines','the radio was restored','the mayor used a veto','晚霜在葡萄采收开始前损坏了葡萄藤。','context'),
    q(3,'Why was the radio called vintage?','it came from the 1940s and kept its period style','it listed the year grapes were harvested','it was a new digital model','这台收音机来自特定年代并保留了当时风格。','meaning'),
    q(1,'A wine’s vintage identifies?','the year and place its grapes were grown','the violinist who played at a vineyard','the number of viewers who watched a video','葡萄酒 vintage 指葡萄采收年份与产地。','meaning')
  ]);
  P('viola','Viola was borrowed from Italian viola, the name of the bowed string instrument; its ultimate word history is uncertain, so no deeper origin is claimed.',
    C('viola.s1','弦乐器','The violist tuned the viola before the quartet rehearsed the slow movement.','四重奏排练慢乐章前，中提琴手先为中提琴调音。','The violist tuned the viola / before the quartet / rehearsed the slow movement.','viola 是用弓演奏的四弦乐器，音域低于小提琴。','乐团成员在排练前给中提琴调音。','music'),
    M('The orchestra labeled the larger, lower-pitched bowed instrument a viola but said it had only three strings and was played without a bow.','The orchestra labeled the four-stringed bowed instrument, larger and lower than a violin, a viola.','中提琴是四弦弓弦乐器；三弦且不用弓的描述不符。'),[
      q(1,'What did the violist tune?','the viola','the vineyard’s harvest','the video-cassette player','中提琴手调音的是中提琴。','context'),
      q(1,'When did the quartet rehearse?','after the viola was tuned','before the instrument was made','during a vineyard harvest','四重奏在中提琴调好音后排练。','context'),
      q(1,'A viola is played with?','a bow','a camera','a bench vice','viola 是弓弦乐器。','meaning'),
      q(1,'Compared with a violin, a viola is generally?','larger with a deeper sound','smaller with a higher sound','a kind of wind instrument','中提琴比小提琴大，音色更低。','meaning')
    ]);
  P('violate','Violate comes from Latin violāre “treat with violence, profane,” from vis “force”; it means break a rule, disrespect rights or privacy, or profane a sacred place.',[
    C('violate.s1','法规','The company was fined for violating the noise limit after its generators ran through the night.','发电机整夜运行，导致公司因违反噪声限值而被罚款。','The company was fined for violating the noise limit / after generators ran all night.','violate.s1 表示违反法律、规则或承诺；介词 for 后用动名词。','公司超过噪声限制，违反规定。','law'),
    C('violate.s2','隐私','A reporter violated the singer’s privacy by publishing photographs taken inside her home without consent.','记者未经同意发布在歌手家中拍摄的照片，侵犯了她的隐私。','A reporter violated the singer’s privacy / by publishing photographs / without consent.','violate.s2 指不尊重或侵犯个人权利、私人空间。','未经同意公开家中照片是侵犯隐私。','media'),
    C('violate.s3','宗教场所','The vandals violated the shrine by breaking its altar and scattering sacred objects.','破坏者打碎祭坛、散落圣物，亵渎了这座神殿。','The vandals violated the shrine / by breaking its altar / and scattering sacred objects.','violate.s3 指以不敬方式对待圣地。','蓄意破坏圣坛和圣物属于亵渎。','religion')
  ],M('The company complied with the noise rule all night, so the court fined it for violating the limit.','The company violated the noise rule by running loud generators through the night.','整夜遵守噪声规定与因违反规定被罚相矛盾。','meaning'),[
    q(1,'Why was the company fined?','its generators exceeded the noise limit','it held a quiet vigil','it grew grapes in a vineyard','发电机整夜运行违反了噪声限值。','context'),
    q(2,'How did the reporter violate the singer’s privacy?','published home photographs without consent','asked permission before taking any picture','watched an old concert video','未经同意发布家中照片侵犯隐私。','context'),
    q(3,'What did the vandals do to the shrine?','broke the altar and scattered sacred objects','restored its altar respectfully','recorded a music performance','破坏祭坛并散落圣物属于亵渎圣地。','context'),
    q(1,'To violate a rule is to?','break or disobey it','watch it carefully','make it more effective','violate a rule 指违反规定。','meaning')
  ]);
  /* A163 checkpoint 4: manifest items 61–80, violation–virulent */
  P('violation','Violation comes from Latin violātiō, from violāre “to treat with violence, profane”; it means breaking a rule or agreement, infringing rights, or a serious sexual crime.',[
    C('violation.s1','法规','The inspector recorded a violation of the fire code when the theater blocked both emergency exits.','剧院堵住两个紧急出口后，检查员记录了一项违反消防法规的行为。','The inspector recorded a violation / when the theater blocked / both emergency exits.','violation.s1 指违反法律、规定或协议的行为。','堵塞安全出口违反消防规定。','law'),
    C('violation.s2','权利','The complaint described the unauthorized search as a violation of the tenant’s privacy.','投诉称这次未经许可的搜查侵犯了租户的隐私。','The complaint described the search / as a violation of privacy.','violation.s2 指干涉或损害他人的权利。','未经许可进入私人空间侵犯隐私。','law'),
    C('violation.s3','刑法','The court treated forced sexual contact without consent as a serious violation of the survivor’s rights.','法院将未经同意的强迫性接触视为对幸存者权利的严重侵犯。','The court treated forced contact without consent / as a serious violation / of the survivor’s rights.','violation.s3 指强迫他人发生性行为的严重犯罪；此处用法律语境克制说明。','句子明确指出没有同意并构成严重侵害。','law')
  ],M('The theater blocked both emergency exits but the inspector recorded no violation because the fire code required every exit to remain clear.','The inspector recorded a fire-code violation because the theater blocked both emergency exits.','堵塞依法须畅通的出口就是违反消防法规。','meaning'),[
    q(1,'What violation did the inspector record?','blocking both emergency exits','keeping both exits clear','repairing a vineyard gate','剧院堵住两个出口违反消防规定。','context'),
    q(2,'What right did the unauthorized search violate?','the tenant’s privacy','the theater’s victory','a violinist’s technique','未经允许搜查侵犯了租户隐私。','context'),
    q(3,'Why did the court call the forced contact a violation?','it occurred without consent and seriously infringed the survivor’s rights','the survivor freely requested it','it broke a theater fire code only','未经同意的强迫接触属于对权利的严重侵害。','context'),
    q(1,'A violation of a rule is?','an act of breaking or disobeying it','an act of carefully following it','an opinion about a political issue','violation.s1 指违反规定的行为。','meaning')
  ]);
  P('violence','Violence comes from Latin violentia “vehemence, force,” related to violentus; it means physical force intended to harm or a powerful, uncontrolled force or feeling.',[
    C('violence.s1','人身伤害','The shelter installed stronger locks after a threat of violence against its night staff.','有人威胁要对夜班员工施暴后，收容所安装了更牢固的锁。','The shelter installed stronger locks / after a threat of violence / against staff.','violence.s1 指意图伤害或杀人的肢体暴力。','针对员工的威胁促使收容所加强安全。','safety'),
    C('violence.s2','自然力量','The violence of the waves broke the harbor barrier and pushed debris onto the road.','海浪的猛烈力量冲垮了港口屏障，把碎片推上道路。','The violence of the waves broke the barrier / and pushed debris / onto the road.','violence.s2 可指强烈而难控制的力量。','海浪的巨大力量造成破坏。','weather')
  ],M('The waves showed violence by remaining completely calm, leaving the harbor barrier intact and moving no debris.','The waves showed violence by breaking the barrier and driving debris onto the road.','平静且没有造成移动的海浪不体现猛烈力量。'),[
    q(1,'Why did the shelter strengthen its locks?','staff had been threatened with physical harm','the waves had damaged the harbor barrier','the staff wanted to grow grapes','员工受到施暴威胁，因此收容所加强安全。','context'),
    q(2,'What did the violence of the waves do?','broke the barrier and pushed debris onto the road','left the barrier untouched','recorded a concert','巨浪的强力冲破屏障并推动碎片。','context'),
    q(1,'Violence in its physical sense involves?','force intended to hurt or kill','a peaceful disagreement with no force','a legal right to refuse a law','violence.s1 指意图伤害或杀人的身体力量。','meaning'),
    q(2,'The violence of a storm can mean?','its powerful and hard-to-control force','a person’s quiet opinion','the age of a wine','violence 也可指风暴等难以控制的猛烈力量。','meaning')
  ]);
  P('violent','Violent comes through French from Latin violentus “impetuous, forceful,” from vis “force”; it describes intended physical harm or something sudden and extreme.',[
    C('violent.s1','攻击行为','The report says the assault was violent, and two bystanders called emergency services.','报告称这次袭击带有暴力，附近两名目击者拨打了急救电话。','The report says the assault was violent / and bystanders / called emergency services.','violent.s1 指使用武力伤害他人的。','目击者为暴力袭击呼叫急救。','law'),
    C('violent.s2','自然现象','A violent gust knocked a branch onto the path, so park staff closed the trail.','一阵猛烈的狂风把树枝吹落到小路上，公园工作人员因此关闭了步道。','A violent gust knocked a branch / onto the path / so staff closed it.','violent.s2 指突然、强烈且难以控制。','强风突然吹落树枝并造成危险。','weather')
  ],M('The report called the attack violent even though no force was used and the participants only exchanged calm, friendly greetings.','The report called the attack violent because the assailant used force to injure another person.','友好问候且未使用武力不构成暴力袭击。'),[
    q(1,'What did the bystanders do after the violent assault?','called emergency services','closed a vineyard','recorded the waves','目击者为暴力袭击呼叫急救。','context'),
    q(2,'What did the violent gust do?','knocked a branch onto the path','left every branch still','carried a crew across a bay','强风吹落树枝，工作人员关闭步道。','context'),
    q(1,'A violent attack involves?','physical force used to hurt someone','a mild disagreement with no force','a sharp but harmless color','violent.s1 指使用武力伤害他人的。','meaning'),
    q(2,'A violent gust is?','a sudden, powerful burst of wind','a gentle steady breeze','a legal rule still in force','violent.s2 可形容猛烈、突然的风。','meaning')
  ]);
  P('violently','Violently is formed from violent and -ly; it means with great physical force or with strong, uncontrolled emotion.',[
    C('violently.s1','身体力量','The loose shutter swung violently in the storm, striking the wall each time the wind changed direction.','暴风雨中，松动的百叶窗猛烈摆动，风向每变一次就撞上墙壁。','The shutter swung violently / in the storm / striking the wall.','violently.s1 修饰 swung，表示以巨大物理力量运动。','窗板被风猛烈吹动并反复撞墙。','weather'),
    C('violently.s2','情绪反应','When the false accusation appeared online, the artist reacted violently and demanded an immediate correction.','虚假指控出现在网上后，艺术家情绪激烈地作出反应，要求立即更正。','The artist reacted violently / when the false accusation appeared / and demanded a correction.','violently.s2 指带着强烈且失控的情绪反应；此处不是身体攻击。','艺术家对虚假指控反应强烈。','communication')
  ],M('The shutter moved violently by staying perfectly still and never touching the wall during the storm.','The shutter moved violently by swinging hard into the wall during the storm.','猛烈摆动与完全静止相互矛盾。'),[
    q(1,'What did the shutter hit?','the wall','the artist’s violin','a grape harvest','风中的百叶窗猛烈摆动并撞墙。','context'),
    q(2,'Why did the artist react violently?','a false accusation appeared online','the shutter stayed still','the vineyard announced its vintage','虚假指控使艺术家情绪强烈地回应。','context'),
    q(1,'Violently can describe movement?','with great physical force','without any motion','with a careful opinion','violently.s1 指以巨大力量运动。','meaning'),
    q(2,'In the artist example, violently describes?','a strong, uncontrolled emotional response','the physical speed of the shutter','a gentle agreement','此处指情绪反应强烈，而非身体动作。','meaning')
  ]);
  P('violet','Violet came through Old French violete from Latin viola, the flower’s name; it names a small flowering plant, a blue-purple color, or that color as an adjective.',[
    C('violet.s1','植物','A wild violet grew between the stones beside the garden gate, its sweet scent noticeable after rain.','一株野生紫罗兰长在花园门旁的石缝间，雨后香气格外明显。','A wild violet grew between the stones / beside the gate / and smelled sweet.','violet.s1 指开芳香小花的植物。','石缝中的小花有甜香。','botany'),
    C('violet.s2','颜色','The artist mixed blue and red paint to create a deep violet for the evening sky.','画家把蓝色和红色颜料混合，调出一种用于绘制夜空的深紫色。','The artist mixed blue and red / to create a deep violet / for the sky.','violet.s2 作名词表示蓝紫色。','混合颜料得到蓝紫色。','art'),
    C('violet.s3','颜色形容词','She wore a violet scarf that stood out against her charcoal coat.','她戴了一条紫罗兰色围巾，在炭灰色外套的衬托下很醒目。','She wore a violet scarf / that stood out / against the charcoal coat.','violet.s3 作形容词修饰 scarf。','围巾呈蓝紫色。','fashion')
  ],M('The artist called the blue-purple paint violet, although it was pure bright green with no blue or red in it.','The artist called the blue-purple paint violet.','纯绿色不属于蓝紫色。'),[
    q(1,'Where did the wild violet grow?','between stones beside the garden gate','on a violin bow','inside a video player','紫罗兰长在花园门旁的石缝里。','context'),
    q(2,'How did the artist make a deep violet color?','mixed blue and red paint','mixed only yellow paint','recorded a song on videotape','蓝色和红色混合可调出紫色。','context'),
    q(3,'What color was the scarf?','blue-purple','bright green','clear glass','violet scarf 指蓝紫色围巾。','meaning'),
    q(1,'A violet can be?','a small flowering plant','a bowed string instrument','a rural settlement','violet 名词也可指一种小花。','meaning')
  ]);
  P('violin','Violin came through Italian violino, a diminutive of viola; it is a bowed string instrument held under the chin, and the orchestral section of such instruments.',[
    C('violin.s1','乐器','The student rested the violin under her chin and drew the bow across the strings slowly.','学生把小提琴夹在下巴下，慢慢地用弓拉过琴弦。','The student rested the violin under her chin / and drew the bow / across the strings.','violin.s1 指夹在下巴下用弓演奏的弦乐器。','演奏方式对应小提琴。','music'),
    C('violin.s2','管弦乐队','The conductor asked the violins to begin the passage again while the cellos waited.','指挥请小提琴组重新演奏这一乐段，大提琴组则等待。','The conductor asked the violins / to begin again / while the cellos waited.','violin.s2 可指管弦乐队中的小提琴声部；常用复数。','句子以声部和大提琴组作对照。','music')
  ],M('The player called the instrument a violin but held it against the lips and blew into a mouthpiece.','The player called it a violin and held it under the chin while drawing a bow across its strings.','吹奏并使用吹嘴是管乐器的方式，不是小提琴。','meaning'),[
    q(1,'How did the student play the violin?','held it under her chin and used a bow','blew into a mouthpiece','struck it with a hammer','小提琴夹在下巴下，用弓拉奏。','context'),
    q(2,'Which section began the passage again?','the violins','the cellos only','the vineyard workers','指挥让小提琴组重奏乐段。','context'),
    q(1,'A violin is a?','string instrument played with a bow','wind instrument played through a mouthpiece','small purple flower','violin 是弓弦乐器。','meaning'),
    q(2,'In an orchestra, “the violins” can mean?','the group of violin players','the audience watching the concert','the strings on one instrument only','复数可指管弦乐队中的小提琴声部。','meaning')
  ]);
  P('violinist','Violinist combines violin and the performer suffix -ist; it means someone who plays the violin.',
    C('violinist.s1','演奏者','The violinist rehearsed the difficult solo slowly before performing it with the orchestra.','小提琴手在与乐团合演前，先慢慢练习了那段难度很高的独奏。','The violinist rehearsed the solo / slowly / before the performance.','violinist 指演奏小提琴的人；rehearse 后接名词宾语。','独奏者用小提琴练习乐段。','music'),
    M('The violinist performed the solo on a flute and never played a violin.','The violinist performed the solo on the violin.','只演奏长笛的人不符合 violinist 的职业名称。'),[
      q(1,'What did the violinist rehearse?','a difficult solo','a vineyard harvest','a fire-code inspection','小提琴手练习了难度很高的独奏。','context'),
      q(1,'When did the violinist rehearse it?','before performing with the orchestra','after the concert had ended years earlier','during a storm vigil','独奏在正式合演前排练。','context'),
      q(1,'A violinist is someone who?','plays the violin','plays only the flute','makes violins from grapevines','violinist 指演奏小提琴的人。','meaning'),
      q(1,'The suffix -ist in violinist indicates?','a person who performs or specializes in something','a quality or condition','a color like blue-purple','-ist 在此表示从事某种活动的人。','word-formation')
    ]);
  P('viral','Viral is formed from virus and -al; it means related to a virus or, in modern media use, spreading very quickly and widely online.',[
    C('viral.s1','公共卫生','The clinic tested the patient for a viral infection after several members of the household developed a fever.','家中多人发烧后，诊所为患者检测病毒感染。','The clinic tested for a viral infection / after several people / developed a fever.','viral 修饰 infection，指由病毒引起的感染。','多人发热后需要检查病毒感染。','medicine'),
    C('viral.s1','网络传播','The rescue video went viral after viewers shared it across several social platforms.','救援视频被观众在多个社交平台分享后迅速走红。','The rescue video went viral / after viewers shared it / across social platforms.','go viral 指网上迅速广泛传播。','大量转发使视频很快传播开来。','media')
  ],M('The video went viral online, but only one person saw it and nobody shared or discussed it.','The video went viral after thousands of viewers shared it online.','只有一人看见且无人转发不符合迅速广泛传播。'),[
    q(1,'Why did the clinic test for a viral infection?','several household members had developed a fever','the rescue video was popular','the patient played the violin','多人发烧，诊所检查病毒感染。','context'),
    q(1,'What happened to the rescue video?','it spread quickly across social platforms','it remained unseen by every viewer','it became a vineyard','视频被广泛分享，迅速走红。','context'),
    q(1,'A viral infection is?','one caused by a virus','one caused by a broken violin','a rule that has been repealed','viral 的医学义指与病毒有关。','meaning'),
    q(1,'When does a post go viral?','when it spreads rapidly and widely online','when it is never shared','when it is stored on an old cassette only','go viral 指内容在网上迅速广泛传播。','meaning')
  ]);
  P('virgin','Virgin comes from Latin virgō, virginis “maiden”; besides the noun for a person without sexual experience, it describes something unused, untouched, or first-pressed without extra treatment.',[
    C('virgin.s1','词义说明','The health glossary defines virgin as a person who has never had sexual intercourse, using the term descriptively rather than as a judgment.','健康词汇表将 virgin 定义为从未发生过性行为的人，并将其作为描述性用语而非评判。','The glossary defines virgin / as a person who has never had sexual intercourse / without making a judgment.','virgin.s1 是关于性经历的名词义；此处为克制的词义说明。','定义给出源词条中的名词义。','health'),
    C('virgin.s2','自然地貌','The surveyors crossed virgin forest where no logging road or settlement had previously disturbed the trees.','测绘人员穿过一片原始森林，此前没有伐木道路或聚落扰动其中的树木。','The surveyors crossed virgin forest / where no road or settlement / had disturbed the trees.','virgin.s2 修饰 forest，指尚未被人使用、触及或改变。','森林未受人类开发。','environment'),
    C('virgin.s3','食品加工','The label says the oil is virgin olive oil, made from the first pressing without extra chemical treatment.','标签说明这款油是初榨橄榄油，由首次压榨制成且未经额外化学处理。','The label says the oil is virgin / made from the first pressing / without extra treatment.','virgin.s3 描述首次压榨且无额外化学处理的油。','加工方式符合初榨定义。','food')
  ],M('The producer labeled the oil virgin even though it had been chemically refined and blended after several later pressings.','The producer labeled the oil virgin because it came from the first pressing and received no extra chemical treatment.','多次后续压榨并经化学精炼不符合初榨油的定义。'),[
    q(2,'What had not disturbed the virgin forest?','logging roads or settlements','a first pressing of olives','a viral infection','这片森林此前没有道路或聚落开发。','context'),
    q(3,'How was the virgin olive oil made?','from the first pressing without extra chemical treatment','by several later pressings and chemical refining','by fermenting it into vinegar','初榨油来自首次压榨且无额外化学处理。','context'),
    q(2,'Virgin land is land that?','has not yet been used or changed by people','has been fully developed and paved','belongs to a person from Virginia','virgin 可形容尚未开发或触及的土地。','meaning'),
      q(1,'What does virgin name as a noun in the glossary?','a person who has never had sexual intercourse','a forest not yet changed by people','oil from a first pressing','词条的名词义指从未发生过性行为的人。','meaning')
  ]);
  P('virginal','Virginal comes from Latin virginalis “of a maiden,” from virgō “maiden”; it describes something pure, unused, or associated with virginity.',
    C('virginal.s1','未使用','The conservator found the notebook in virginal condition, with every page clean and no writing inside.','修复师发现这本笔记本保存得像新的一样，每页干净，没有任何字迹。','The notebook was in virginal condition / with every page clean / and unwritten.','virginal.s1 可指纯净、未使用的状态。','未写过字的本子保持原样。','condition'),
    M('The notebook remained virginal, although every page was covered in ink and several had been torn out.','The notebook remained in virginal condition because its pages were clean and unused.','已经写满并撕页的本子并非未使用状态。'),[
      q(1,'What condition was the notebook in?','clean and unused','filled with ink','damaged by a storm','本子页页干净、尚未使用。','context'),
      q(1,'Virginal condition here means?','pure or unused','roughly two thousand','full of violent force','此处 virginal 指纯净未使用的状态。','meaning'),
      q(1,'Which object is in virginal condition?','a blank notebook with every page intact','a diary filled with writing and missing pages','a vintage radio with a broken dial','未写过且完整的本子保持 virginal 状态。','context'),
      q(1,'Virginal is derived from a word historically referring to?','a maiden or virgin','a village resident','a musical performance','virginal 源自与 maiden/virgin 有关的拉丁词。','word-formation')
    ]);
  P('virginian','Virginian is formed from Virginia and -an, a suffix for a person or thing associated with a place; it names an inhabitant or native of the U.S. state.',
    C('virginian.s1','地域身份','The Virginian showed the visitors a map of the coastal trail and explained how the state had changed.','这位弗吉尼亚人向访客展示沿海步道地图，并介绍了该州的变化。','The Virginian showed the visitors a map / and explained / how the state had changed.','Virginian 为地域身份名词，专名派生词首字母大写。','此人居住于或来自弗吉尼亚州。','geography'),
    M('The article called a lifelong resident of Oregon a Virginian, although she had never lived in or come from Virginia.','The article called the lifelong Virginia resident a Virginian.','俄勒冈本地人且与弗吉尼亚无关的人不应称为 Virginian。','word-choice'),[
      q(1,'What did the Virginian show the visitors?','a map of the coastal trail','a violin bow','a video-cassette','这位弗吉尼亚人展示了沿海步道地图。','context'),
      q(1,'A Virginian is a person from?','Virginia','Vienna','a village in Austria','Virginian 指来自或住在弗吉尼亚州的人。','meaning'),
      q(1,'Which capitalization is correct for the state resident?','Virginian','virginian','VirginIan','地名派生的专名身份词应大写。','capitalization'),
      q(1,'What does -an do in Virginian?','forms a word for a person associated with a place','marks a past-tense verb','means “small case”','-an 在此构成地域居民名称。','word-formation')
    ]);
  P('virgo','Virgo is Latin for “maiden”; it names the sixth zodiac sign, the constellation, and a person born under that sign.',
    C('virgo.s1','天文学与占星','The astronomy club identified Virgo on the star chart by locating its brightest star, Spica.','天文社通过寻找最亮的角宿一，在星图上辨认出室女座。','The club identified Virgo / on the star chart / by locating Spica.','Virgo 是专名，首字母大写；此处指星座。','星图上的角宿一帮助定位室女座。','astronomy'),
    M('The club identified Virgo as a constellation but wrote that it was the second zodiac sign, not the sixth.','The club identified Virgo as the sixth sign of the zodiac.','Virgo 是黄道十二宫第六宫，不是第二宫。','meaning'),[
      q(1,'How did the club locate Virgo?','by finding Spica on the chart','by locating a vineyard','by watching a viral video','社团通过星图上的角宿一定位室女座。','context'),
      q(1,'Virgo is which zodiac sign?','the sixth','the first','the twelfth','Virgo 是黄道第六宫。','meaning'),
      q(1,'Which spelling names the zodiac sign?','Virgo','virgo only when used as an adjective','Virgoe','星座名标准拼写并首字母大写为 Virgo。','capitalization'),
      q(1,'Virgo may refer to?','the constellation or the sign and a person born under it','a bowed instrument','a type of vinegar','Virgo 可指星座、星宫或该时段出生的人。','meaning')
    ]);
  P('virtual','Virtual comes from Medieval Latin virtualis “effective, potential,” from virtus “power”; it means computer-generated rather than physical, or almost equivalent in effect.',[
    C('virtual.s1','数字体验','The students toured a virtual museum with a headset, examining digital rooms instead of traveling to the city.','学生戴上头显参观虚拟博物馆，浏览数字展厅，无需前往那座城市。','The students toured a virtual museum / with a headset / instead of traveling.','virtual.s1 指由计算机生成、看似真实但并非实体的事物。','数字展厅由计算机呈现。','technology'),
    C('virtual.s2','实际状态','After the bridge closed, the island was in a state of virtual isolation even though one boat still ran each week.','桥关闭后，岛屿实际上几乎与外界隔绝，尽管每周仍有一班船。','The island was in virtual isolation / after the bridge closed / though one boat still ran.','virtual.s2 表示实际上几乎达到某种状态，未必名义上完全如此。','仍有少量船班，但实际隔绝状态接近成立。','usage')
  ],M('The island was in virtual isolation, and the sentence means it had no isolation at all and remained fully connected by frequent transport.','The island was in virtual isolation because regular transport had nearly ceased after the bridge closed.','virtual 在此表示实际上几乎如此，不是完全相反。'),[
    q(1,'How did the students visit the museum?','through a computer-generated headset tour','by traveling to the city in person','by watching a vineyard harvest','他们通过头显参观数字展厅。','context'),
    q(2,'Why was the island in virtual isolation?','the bridge closed and only one boat ran weekly','the bridge reopened and ferries ran hourly','it joined a virtual museum','交通极少使岛屿实际上几乎隔绝。','context'),
    q(1,'A virtual museum is?','a computer-generated environment that seems like a museum','a physical building made only of stone','a museum’s political viewpoint','virtual 指计算机生成的非实体环境。','meaning'),
    q(2,'“Virtual isolation” means?','almost complete isolation in practice','no isolation at all','a digital tour of an island','virtual.s2 表示实际情况几乎相当于隔绝。','meaning')
  ]);
  P('virtual world','Virtual world combines virtual and world; it names a computer-generated environment where multiple users interact as if in a shared real place.',
    C('virtual world.s1','网络环境','Players met in a virtual world to build a shared harbor and trade supplies through their avatars.','玩家在虚拟世界里会合，通过虚拟化身一起建造港口并交换物资。','Players met in a virtual world / to build a harbor / and trade supplies.','virtual world 指计算机生成、可多人参与并互动的环境。','多名玩家通过化身共同活动。','technology'),
    M('The game called its virtual world a shared computer environment, but users could not interact with one another or with anything inside it.','The game’s virtual world lets users interact with one another in a computer-generated setting.','无法互动的空白图像不符合多人参与并互动的 virtual world。','meaning'),[
      q(1,'What did the players build?','a shared harbor','a real vineyard','a violin','玩家在虚拟世界里共同建造港口。','context'),
      q(1,'How did players trade supplies?','through their avatars in the computer environment','by mailing physical grape harvests','by turning off the server','玩家以虚拟化身在环境里交换物资。','context'),
      q(1,'A virtual world is?','a computer-generated environment where users interact','a physical town with no computers','a single video file with no interaction','virtual world 指由计算机生成的多人互动环境。','meaning'),
      q(1,'What makes this setting a world rather than just a video?','users can take part and interact in it','it contains only a still photograph','it is a legal document','参与者可以在其中互动，使其成为虚拟世界。','meaning')
    ]);
  P('virtually','Virtually is from virtual plus -ly; it means almost completely or in effect, though not officially or literally so.',[
    C('virtually.s1','程度','The two printed maps are virtually identical except for a newly added footpath.','这两张印刷地图几乎完全相同，只多了一条新标出的步道。','The maps are virtually identical / except for one new footpath.','virtually.s1 修饰 identical，表示几乎完全如此。','差异只有一条新步道。','comparison'),
    C('virtually.s2','实际情况','With the only road closed, the mountain village was virtually inaccessible for three days.','唯一道路关闭后，这座山村实际上几乎有三天无法抵达。','The village was virtually inaccessible / while the only road / was closed.','virtually.s2 表示实际效果几乎如此，未必绝对如此。','没有道路且无法通行几乎成为现实。','travel')
  ],M('The maps were virtually identical, meaning they differed on every street, boundary, and label.','The maps were virtually identical, with only one minor footpath added to the newer copy.','virtually identical 表示几乎相同，不是处处不同。'),[
    q(1,'How did the two maps compare?','they were almost identical','they differed on every detail','one was a violin','两张地图只差一条步道，几乎相同。','context'),
    q(2,'Why was the village virtually inaccessible?','its only road was closed','it had several open roads','it was inside a virtual museum','唯一道路封闭后，村庄实际上几乎无法抵达。','context'),
    q(1,'Virtually identical means?','almost completely the same','officially unrelated','not similar in any way','virtually 表示几乎完全。','meaning'),
    q(2,'Virtually inaccessible may allow that?','access is not absolutely impossible, but is nearly so in practice','the place is easy to reach every hour','the village is computer-generated','virtually 可以表示现实中几乎无法抵达。','meaning')
  ]);
  P('virtue','Virtue comes from Latin virtūs “strength, excellence, worth,” from vir “man”; it means a moral good quality or an advantageous feature.',[
    C('virtue.s1','品德','Patience is a virtue that helped the mediator listen to both sides without interrupting.','耐心是一种美德，帮助调解员不打断任何一方，认真倾听双方意见。','Patience is a virtue / that helped the mediator / listen without interrupting.','virtue.s1 指道德上良好的品质或习惯。','耐心促成公平倾听。','ethics'),
    C('virtue.s2','优点','One virtue of the compact camera is its low weight, which makes it easy to carry on long walks.','这款小型相机的一个优点是重量轻，长途步行时容易携带。','One virtue of the camera is its low weight / which makes it easy to carry.','virtue.s2 指事物有利或良好的特征。','重量轻带来携带方便的好处。','technology')
  ],M('The camera’s chief virtue was its heavy weight, which made it difficult to carry on any walk.','One virtue of the camera was its low weight, making it easy to carry.','重且难携带不是该相机的优点。'),[
    q(1,'What did patience help the mediator do?','listen to both sides without interrupting','record the sides on a cassette','veto the meeting','耐心帮助调解员认真听双方意见。','context'),
    q(2,'Why is the camera’s low weight a virtue?','it is easy to carry on long walks','it makes the camera too heavy to lift','it helps it violate privacy','重量轻让相机适合长途携带。','context'),
    q(1,'A moral virtue is?','a good quality such as patience','a criminal violation','a forceful storm','virtue.s1 指耐心等道德优良品质。','meaning'),
    q(2,'A virtue of a product is?','an advantageous feature','a defect that makes it unusable','a person who repairs it','virtue.s2 指产品的优点。','meaning')
  ]);
  P('virtuosity','Virtuosity comes from Italian virtuoso, from virtù “skill, excellence,” ultimately Latin virtūs; it means brilliant mastery of technique.',
    C('virtuosity.s1','音乐表演','The pianist’s virtuosity was clear in the rapid passage, which she played cleanly without losing its expressive tone.','钢琴家在快速乐段中展现出精湛技艺，弹奏干净利落又不失表现力。','The pianist’s virtuosity was clear / in the rapid passage / played cleanly.','virtuosity 是抽象名词，指技术上的高超掌握。','快速而准确的演奏体现高超技巧。','music'),
    M('The review praised the pianist’s virtuosity, although she could not play the notes and stopped after every bar.','The review praised the pianist’s virtuosity because she played the demanding passage with brilliant control.','无法演奏且频频停顿并不能体现精湛技艺。'),[
      q(1,'Where was the pianist’s virtuosity clear?','in a rapid passage she played cleanly','in a silent room with no instrument','in a vineyard harvest','钢琴家在快速乐段中展现了高超技巧。','context'),
      q(1,'What does virtuosity mean?','brilliant mastery of technique','a nearby geographic area','a strong dislike of someone','virtuosity 指精湛的技术掌握。','meaning'),
      q(1,'Which performance shows virtuosity?','a difficult piece played accurately and expressively','a performer stopping after every note','a recording with no music','准确又富有表现力地演奏难曲体现技艺。','context'),
      q(1,'Virtuosity is especially associated with?','exceptional technical skill in performance','the legal force of an old rule','a blue-purple flower','词典义尤其常用于音乐表演技巧。','meaning')
    ]);
  P('virtuoso','Virtuoso came from Italian virtuoso, “skilled, learned,” from virtù “skill, excellence”; as a noun it is a highly accomplished musician or other expert.',[
    C('virtuoso.s1','音乐家','A violin virtuoso performed the concerto from memory, shaping each phrase with remarkable control.','一位小提琴大师凭记忆演奏协奏曲，每个乐句都处理得极为娴熟。','A violin virtuoso performed the concerto / from memory / with remarkable control.','virtuoso.s1 指技艺高超的音乐家。','凭记忆演奏协奏曲体现熟练技艺。','music'),
    C('virtuoso.s2','技艺大师','The pastry chef is a virtuoso with chocolate, creating thin decorations that remain crisp and precise.','这位糕点师是巧克力制作大师，能做出薄而挺括、精确的装饰。','The pastry chef is a virtuoso with chocolate / creating precise decorations.','virtuoso.s2 可指在任何活动中展现卓越技巧的人。','复杂巧克力装饰体现其技艺。','craft')
  ],M('The reviewer called the violinist a virtuoso, although the player could not perform the piece and had never learned the instrument.','The reviewer called the violinist a virtuoso after a controlled and technically demanding performance.','不会演奏该乐器的人不能因这场演奏称为大师。'),[
    q(1,'How did the violin virtuoso perform the concerto?','from memory with remarkable control','by reading no notes and stopping constantly','by making chocolate decorations','演奏家凭记忆并娴熟地演奏协奏曲。','context'),
    q(2,'What craft was the pastry chef skilled at?','making precise chocolate decorations','playing the violin','mapping the constellation Virgo','糕点师擅长制作精细的巧克力装饰。','context'),
      q(1,'A virtuoso is?','a musician with outstanding skill','a person who cannot play the instrument','a person injured by an accident','virtuoso 指技艺出众的音乐家。','meaning'),
    q(2,'The word virtuoso can also describe?','someone exceptionally skilled in another activity','any beginner regardless of ability','a legal violation','virtuoso 也可指在其他活动中技艺卓越的人。','meaning')
  ]);
  P('virtuous','Virtuous is formed from virtue and -ous, from Latin virtūs “excellence”; it means morally good, traditionally chaste, or describing a cycle where good effects reinforce one another.',[
    C('virtuous.s1','道德品质','The virtuous official refused the bribe and reported the offer to the ethics committee.','这位品德高尚的官员拒绝了贿赂，并向道德委员会报告此事。','The virtuous official refused the bribe / and reported the offer.','virtuous.s1 指具有良好道德品质的。','拒绝贿赂体现正直。','ethics'),
    C('virtuous.s3','良性循环','The city created a virtuous cycle: better buses attracted riders, whose fares helped fund more frequent service.','城市形成了良性循环：更好的公交吸引乘客，票款又为增加班次提供资金。','The city created a virtuous cycle / as better buses attracted riders / and fares funded service.','a virtuous cycle 指良好结果促成更多良好结果。','改善服务与增加客流互相促进。','economics')
  ],M('The city described its cycle as virtuous even though fewer riders reduced the budget, service worsened, and more riders left.','The city described its cycle as virtuous because improved service attracted riders and supported further improvements.','服务恶化导致乘客流失是恶性循环，不是良性循环。','word-choice'),[
    q(1,'What did the virtuous official do?','refused a bribe and reported it','accepted the bribe secretly','vetoed the ethics committee','官员拒绝贿赂并报告，体现正直。','context'),
    q(3,'What helped fund more frequent bus service?','fares from the additional riders','a decline in all bus use','a violinist’s concert','乘客增加带来的票款支持更多班次。','context'),
    q(1,'A virtuous person is?','morally good','deliberately cruel','almost inaccessible','virtue 的道德义是品德高尚。','meaning'),
    q(3,'A virtuous cycle is one where?','good effects reinforce further good results','each improvement causes a worse result','nothing changes in either direction','良性循环里正面结果会推动更多正面结果。','meaning')
  ]);
  P('virulent','Virulent comes from Latin virulentus “full of poison,” from virus “poison”; it describes a dangerous pathogen or criticism filled with hatred.',[
    C('virulent.s1','病原体','The lab isolated a virulent strain and required staff to use sealed protective equipment.','实验室分离出一种毒性很强的菌株，并要求员工使用密封防护装备。','The lab isolated a virulent strain / and required sealed protective equipment.','virulent.s1 描述传染性强或病情凶险的病原体。','菌株危险，因此要求加强防护。','medicine'),
    C('virulent.s1','疾病风险','The virulent infection spread quickly through the unvaccinated herd and made several animals critically ill.','这种毒性很强的感染在未接种疫苗的畜群中迅速传播，导致多只动物病危。','The infection spread quickly / through the unvaccinated herd / and made animals critically ill.','virulent 形容病原体的严重性与传播性。','感染快速传播并导致重症。','veterinary'),
    C('virulent.s1','言论','The columnist published a virulent attack on the judge, accusing her of corruption without offering evidence.','专栏作者发表了一篇充满敌意的文章攻击法官，却毫无证据地指控她腐败。','The columnist published a virulent attack / accusing the judge / without evidence.','virulent.s1 也可形容充满仇恨的批评或攻击。','文章语气恶毒且没有证据。','media')
  ],M('The lab called the harmless strain virulent even though it could not infect anyone, spread, or cause illness.','The lab called the dangerous, rapidly spreading strain virulent and required protective equipment.','不能感染、传播或致病的菌株不符合 virulent 的医学义。'),[
    q(1,'What did the lab require staff to use?','sealed protective equipment','a violin bow','a vineyard map','高危险菌株需要密封防护装备。','context'),
    q(1,'What happened in the unvaccinated herd?','a severe infection spread quickly and made animals critically ill','a harmless infection disappeared immediately','the animals performed a concerto','病原体迅速传播并导致动物病危。','context'),
    q(1,'A virulent pathogen is?','highly infectious or severe','unable to spread or cause illness','a gentle wildflower','virulent.s1 指传染性强或病情凶险。','meaning'),
    q(1,'A virulent attack in writing is?','an intensely hostile criticism','a neutral factual note','a praise-filled review','virulent 也形容充满敌意、恶毒的批评。','meaning')
  ]);
})();
