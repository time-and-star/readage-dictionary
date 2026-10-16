/* 独立重写草稿：第3组 80 词；逐词手写，待审后再决定是否替换正式补丁。 */
(function (global) {
  'use strict';
  const D = global.RA.D;
  function put(w, x) {
    const p = {
      extraExamples: [{ sense: x.es || 1, english: x.example, chinese: x.exampleZh }],
      contexts: [{ domain: x.domain, senseId: `${w}.s${x.cs || 1}`, en: x.scene, zh: x.sceneZh, rationale: x.rationale, sourceType: 'authored' }],
      mistakes: [{ errorType: x.me, wrong: x.wrong, right: x.right, reason: x.reason }],
      quiz: x.q.map((a, i) => ({ id: `${w}.q${i + 1}`, senseId: `${w}.s${a[0]}`, errorType: a[1], type: a[2], prompt: a[3], options: a[4], answer: a[5], explain: a[6] }))
    };
    if (x.origin) p.etymology = { origin: x.origin };
    D(w, p);
  }

  put('guarantor', {domain:'贷款',example:'Mina’s uncle agreed to be the guarantor for her first apartment lease.',exampleZh:'米娜的叔叔同意为她的第一份公寓租约做担保人。',scene:'The lender called the guarantor only after the borrower missed two payments.',sceneZh:'借款人连续两次逾期后，贷款方才联系担保人。',rationale:'借款违约后联系的是承担担保责任的人。',me:'grammar',wrong:'Each guarantors must sign the final page.',right:'Each guarantor must sign the final page.',reason:'each 后接单数名词，谓语也用单数形式。',origin:'由 guarantee 与表示人的后缀 -or 构成。',q:[
    [1,'meaning','词义','If a borrower defaults, the lender may seek payment from the _____.',['guarantor','guarantee','guaranteed'],'guarantor','guarantor 是承担担保责任的人；guarantee 是保证本身。'],
    [1,'collocation','搭配','Complete the lease phrase: act as a _____ for the tenant.',['guarantor','guarantee','guardian'],'guarantor','act as a guarantor 表示担任担保人。'],
    [1,'grammar','词形','The bank needs one _____ to co-sign the loan.',['guarantor','guaranteeing','guarantees'],'guarantor','one 后需要可数名词单数。'],
    [1,'distinction','辨析','Which word names the person rather than the promise?',['guarantor','guarantee','guaranteed'],'guarantor','担保人是 guarantor，担保或保证是 guarantee。']
  ]});

  put('guard', {domain:'安全',example:'A volunteer guarded the nesting area until the last turtle reached the water.',exampleZh:'最后一只海龟爬到水边前，一名志愿者一直守着筑巢区。',scene:'Store staff guard the medicine cabinet and record every time it is opened.',sceneZh:'店员看守药品柜，并记录每次开柜。',rationale:'这里 guard 是及物动词，宾语是需要看护的地点。',cs:1,me:'grammar',wrong:'The guards the entrance after sunset.',right:'The guard guards the entrance after sunset.',reason:'句子缺少主语名词；补上 the guard 后，动词与单数主语一致。',q:[
    [1,'meaning','词义','In “The ranger guarded the nest,” what did the ranger do?',['protected it','guessed its location','guided it away'],'protected it','guard 作动词表示守护或保护。'],
    [2,'collocation','搭配','To reduce the risk of infection, she tried to guard _____ germs.',['against','at','into'],'against','guard against 后接要防范的威胁。'],
    [3,'meaning','词义','At a museum entrance, a guard is usually a person who _____.',['keeps watch','writes the guidebook','repairs the exhibits'],'keeps watch','guard 的名词义可指警卫。'],
    [4,'meaning','词义','A padded guard worn by a player is protective _____.',['equipment','advice','permission'],'equipment','guard 也可指保护身体的护具。']
  ]});

  put('guardian', {domain:'学校',example:'A parent or guardian must sign the permission form before the field trip.',exampleZh:'郊游前，家长或监护人必须在许可表上签字。',scene:'The court appointed her older brother as guardian while she completed her studies abroad.',sceneZh:'她在国外完成学业期间，法院指定她的哥哥为监护人。',rationale:'appointed as 后接被指定担任身份的人。',me:'grammar',wrong:'The child’s guardian were waiting outside.',right:'The child’s guardian was waiting outside.',reason:'单数主语 guardian 应与 was 搭配。',q:[
    [1,'meaning','词义','On a school form, a guardian is an adult responsible for the child’s _____.',['care','loan interest','travel guide'],'care','guardian 可指承担照护责任的监护人。'],
    [1,'collocation','搭配','The court appointed her aunt _____ the child’s guardian.',['as','at','by'],'as','appoint someone as guardian 是自然搭配。'],
    [2,'word form','词义','In “guardian angel,” guardian describes someone who _____.',['protects','deceives','charges a fee'],'protects','guardian 也可作定语，表示守护或保护。'],
    [1,'distinction','辨析','A guardian is the person; guardianship is the legal _____.',['role or responsibility','building','signature'],'role or responsibility','-ship 名词表示身份或状态，guardian 指人。']
  ]});

  put('guardianship', {domain:'法律',example:'The judge granted temporary guardianship to the child’s aunt.',exampleZh:'法官把临时监护权授予了孩子的姑妈。',scene:'The school asked for proof of guardianship before releasing the student to the adult.',sceneZh:'学校在把学生交给该成年人前，要求出示监护关系证明。',rationale:'这里 guardianship 指对未成年人的法律照护身份。',me:'grammar',wrong:'The judge granted guardianships to her aunt for the child.',right:'The judge granted guardianship to her aunt for the child.',reason:'此处说一项监护权安排，通常用不可数形式 guardianship。',origin:'由 guardian 加 -ship 构成，表示监护身份或权利。',q:[
    [1,'meaning','词义','A court order establishing who may care for a child concerns _____.',['guardianship','a guesthouse','a guideline'],'guardianship','guardianship 指监护身份或监护权。'],
    [1,'collocation','搭配','The family applied _____ guardianship of the child.',['for','at','with'],'for','apply for guardianship 是常见搭配。'],
    [1,'distinction','辨析','The judge appointed a guardian; the legal status is _____.',['guardianship','guard','guidance'],'guardianship','guardian 是人，guardianship 是其身份或权利。'],
    [1,'context','语境','Which document is most likely to discuss guardianship?',['a family-court order','a concert review','a weather map'],'a family-court order','监护权属于法律与照护语境。']
  ]});

  put('guerrilla', {domain:'历史',example:'The guerrilla fighters moved through the hills in small groups.',exampleZh:'游击队员分成小队穿过山地。',scene:'The museum exhibit explains how guerrilla tactics differed from open-field battles.',sceneZh:'博物馆展览解释了游击战术与开阔地正面作战的不同。',rationale:'guerrilla 可作定语修饰 tactics，表示游击战的。',me:'spelling',wrong:'The article describes a guerilla campaign in the region.',right:'The article describes a guerrilla campaign in the region.',reason:'标准拼写是 guerrilla，包含两个 r 和两个 l。',origin:'英语借自西班牙语 guerrilla；不据此拆分英语词根。',q:[
    [1,'meaning','词义','A guerrilla fighter is associated with _____.',['irregular small-unit warfare','hotel management','legal guardianship'],'irregular small-unit warfare','guerrilla 常指游击队员或游击战方式。'],
    [1,'spelling','拼写','Choose the standard spelling.',['guerrilla','guerilla','guerrila'],'guerrilla','标准拼写为 guerrilla。'],
    [1,'grammar','词法','Which phrase uses guerrilla as a modifier?',['guerrilla tactics','guerrillas tactics','guerrillaly tactics'],'guerrilla tactics','名词作定语时用单数形式 guerrilla。'],
    [1,'context','语境','A small mobile force avoiding direct battles may be described as _____.',['guerrilla','guarantor','gullible'],'guerrilla','题干描述的是游击队作战方式。']
  ]});

  put('guess', {domain:'课堂',example:'Before opening the envelope, I guessed that the result would be close.',exampleZh:'打开信封前，我猜结果会很接近。',scene:'The guide asked us to guess how old the stone bridge was.',sceneZh:'向导让我们猜这座石桥有多少年历史。',rationale:'guess 后可直接接疑问词引导的间接问题。',me:'grammar',wrong:'She guess the answer after reading the clue.',right:'She guessed the answer after reading the clue.',reason:'描述已发生的猜测，用过去式 guessed。',q:[
    [1,'meaning','词义','You do not know the number, so you offer a likely answer. You _____.',['guess','guard','gush'],'guess','动词 guess 表示在不确定时猜测。'],
    [2,'meaning','词义','“I guessed the password on my first try” means I _____.',['gave the correct password by chance or inference','protected the password','wrote down a hint'],'gave the correct password by chance or inference','guess 也可表示猜中。'],
    [3,'meaning','词义','In informal American English, “I guess we can leave” is closest to _____.',['I suppose we can leave','I guarantee we can leave','I ordered everyone to leave'],'I suppose we can leave','美式口语中 guess 可表示想、认为。'],
    [4,'meaning','词义','“My guess is that the train is late” uses guess as a _____.',['noun for an estimate','verb for protection','word for a guide'],'noun for an estimate','guess 作名词可指猜测或估计。']
  ]});

  put('guest', {domain:'活动',example:'Every guest received a badge at the conference desk.',exampleZh:'每位来宾都在会议服务台领到一张胸牌。',scene:'The hotel keeps a quiet lounge for guests who arrive before their rooms are ready.',sceneZh:'酒店为房间尚未准备好的住客留了一间安静休息室。',rationale:'酒店语境中的 guest 是付费住客。',me:'grammar',wrong:'Each guest have a badge with a name on it.',right:'Each guest has a badge with a name on it.',reason:'each guest 是单数主语，谓语用 has。',q:[
    [1,'meaning','词义','At a wedding, a guest is someone who _____.',['has been invited','is guarding the building','is selling tickets'],'has been invited','guest 可指受邀参加活动的人。'],
    [2,'meaning','词义','At an inn, an overnight guest is a _____.',['person staying there','member of the staff','tour guidebook'],'person staying there','住店语境中 guest 指房客或旅客。'],
    [3,'meaning','词义','A guest speaker at a university is invited to _____.',['give a talk','repair the hall','sign as a guardian'],'give a talk','guest 可作定语，表示受邀参与的客座人员。'],
    [1,'roles','辨析','The host welcomes people; each welcomed person is a _____.',['guest','guard','guild'],'guest','host 是主人或主办方，guest 是受邀者。']
  ]});

  put('guesthouse', {domain:'旅行',example:'We stayed in a family-run guesthouse beside the harbor.',exampleZh:'我们住在港口旁一家家庭经营的小旅馆。',scene:'The guesthouse owner left a lantern outside so late arrivals could find the entrance.',sceneZh:'旅馆老板在外面留了一盏灯，方便晚到的客人找到入口。',rationale:'这里 guesthouse 指提供住宿的小型旅馆。',me:'grammar',wrong:'The guesthouse offer breakfast from seven to nine.',right:'The guesthouse offers breakfast from seven to nine.',reason:'单数主语 guesthouse 的一般现在时谓语加 -s。',origin:'guest 与 house 构成透明复合词。',q:[
    [1,'meaning','词义','A guesthouse is mainly a place where travelers can _____.',['stay overnight','borrow legal advice','exercise in a class'],'stay overnight','guesthouse 指小型住宿场所。'],
    [1,'collocation','搭配','They booked a room _____ a guesthouse near the station.',['at','under','between'],'at','book a room at a guesthouse 是自然搭配。'],
    [1,'word formation','构词','In guesthouse, the head word is house, so the compound names a _____.',['house for guests','guest who owns a house','guide to houses'],'house for guests','复合词中心词 house 表明它是一种住宿处。'],
    [1,'distinction','辨析','A guesthouse is a building; a guest is _____.',['a person staying or visiting','a booking form','the owner’s key'],'a person staying or visiting','guesthouse 指场所，guest 指人。']
  ]});

  put('guests', {domain:'餐饮',example:'The guests waited in the garden while the staff prepared dinner.',exampleZh:'工作人员准备晚餐时，客人们在花园里等候。',scene:'The host checked the list twice to make sure all the guests had a seat.',sceneZh:'主人核对了两遍名单，确保每位来宾都有座位。',rationale:'guests 是复数主语，后接复数谓语。',me:'grammar',wrong:'The guests has already taken their seats.',right:'The guests have already taken their seats.',reason:'复数主语 guests 与 have 搭配。',q:[
    [1,'meaning','词义','“The guests arrived early” means that _____.',['the invited people arrived early','the host arrived early','the room was locked'],'the invited people arrived early','guests 是 guest 的复数，指客人们。'],
    [1,'grammar','主谓一致','The guests _____ near the entrance.',['are waiting','is waiting','waits'],'are waiting','复数主语 guests 与 are 搭配。'],
    [1,'spelling','词形','Choose the regular plural of guest.',['guests','guestes','guest’s'],'guests','guest 直接加 -s。'],
    [1,'context','语境','A wedding planner checks the seating chart for all the _____.',['guests','gushers','gulfs'],'guests','座位表列出婚礼来宾。']
  ]});

  put('guidance', {domain:'教育',example:'The new researchers received guidance from a technician before using the microscope.',exampleZh:'新研究人员在使用显微镜前接受了技术员的指导。',scene:'The handbook offers guidance on choosing protective equipment for the field site.',sceneZh:'手册就如何为野外地点选择防护装备提供指导。',rationale:'guidance on 后接接受指导的主题。',me:'grammar',wrong:'The guidance from her tutors were practical.',right:'The guidance from her tutors was practical.',reason:'guidance 通常作不可数名词，谓语用单数 was。',origin:'由 guide 与名词后缀 -ance 构成。',q:[
    [1,'meaning','词义','A mentor’s guidance is _____.',['advice or direction','a person on a tour','a legal signature'],'advice or direction','guidance 指指导或建议。'],
    [1,'collocation','搭配','The booklet gives guidance _____ fire safety.',['on','at','into'],'on','guidance on a topic 是常见结构。'],
    [2,'meaning','词义','In a navigation system, guidance helps a vehicle _____.',['follow a route','host visitors','pay a guarantor'],'follow a route','guidance 也可指导航或路线引導。'],
    [1,'grammar','可数性','Choose the natural phrase.',['some useful guidance','many guidances','three guidance'],'some useful guidance','guidance 通常不可数，some useful guidance 自然。']
  ]});

  put('guide', {domain:'野外调查',example:'A local guide led the botanists to a patch of rare orchids.',exampleZh:'当地向导带植物学家来到一片稀有兰花生长地。',scene:'She used a diagram to guide the cable through a narrow channel.',sceneZh:'她照着示意图引导电缆穿过狭窄通道。',rationale:'此处动词 guide 表示引导物体通过一处空间。',me:'grammar',wrong:'The guide showed us how to reached the old fort.',right:'The guide showed us how to reach the old fort.',reason:'how to 后接动词原形 reach。',q:[
    [1,'meaning','词义','A guide leading hikers is a person who _____.',['shows them the way','writes the law','owns the hotel'],'shows them the way','guide 的第一义项可指带路的人。'],
    [2,'meaning','词义','A pocket guide to birds is most likely a _____.',['small reference book','protective helmet','guest list'],'small reference book','guide 可指指南或参考手册。'],
    [3,'meaning','词义','A workplace guide about safety can set out _____.',['rules and recommended practice','a list of sea bays','a person’s guilt'],'rules and recommended practice','guide 也可指指导原则或准则。'],
    [4,'grammar','用法','In “The signs guide visitors to the exit,” guide means _____.',['direct or lead','guess','guard against'],'direct or lead','guide 作动词表示引导、带领。']
  ]});

  put('guidebook', {domain:'旅行',example:'The guidebook lists two walking routes that avoid the steep pass.',exampleZh:'这本旅行指南列出了两条避开陡峭山口的徒步路线。',scene:'Before leaving the station, we checked the guidebook for the last ferry time.',sceneZh:'离开车站前，我们查了旅行指南上的末班渡船时间。',rationale:'guidebook 提供旅行地点与路线信息。',me:'grammar',wrong:'This guidebook contain a map of the old town.',right:'This guidebook contains a map of the old town.',reason:'单数主语 guidebook 的谓语需加 -s。',origin:'guide 与 book 构成透明复合词。',q:[
    [1,'meaning','词义','A guidebook about a city usually contains _____.',['information for visitors','a legal appointment','a weather instrument'],'information for visitors','guidebook 是供参考的指南书。'],
    [1,'collocation','搭配','She opened the guidebook _____ a map of the museum district.',['to','at','under'],'to','open a book to a page/map 表示翻到相关内容。'],
    [1,'word formation','构词','A guidebook is a kind of _____.',['book','person','protective guard'],'book','复合词的中心词 book 表明它是一种书。'],
    [1,'distinction','辨析','A guidebook is printed information; a guide can also be _____.',['a person leading a tour','a suitcase','a guesthouse room'],'a person leading a tour','guidebook 指书，guide 还可指向导。']
  ]});

  put('guideline', {domain:'职场',example:'The laboratory guideline requires staff to label every sample before storage.',exampleZh:'实验室准则要求员工在存放前给每份样本贴标签。',scene:'These guidelines explain how to report a damaged safety cabinet.',sceneZh:'这些指导方针说明了如何报告受损的安全柜。',rationale:'guidelines 可指一组建议或操作原则。',me:'grammar',wrong:'Please follow this guidelines when storing samples.',right:'Please follow these guidelines when storing samples.',reason:'复数 guidelines 应由 these 修饰。',q:[
    [1,'meaning','词义','A guideline is best described as _____.',['a recommended rule for action','a person responsible for a child','a type of instrument'],'a recommended rule for action','guideline 指指导方针或建议性规则。'],
    [1,'collocation','搭配','The handbook provides guidelines _____ safe storage.',['for','at','by'],'for','guidelines for an activity 是常见搭配。'],
    [2,'meaning','词义','A style guideline used by editors is a _____.',['reference standard','sea inlet','protective helmet'],'reference standard','guideline 也可指供参考的标准。'],
    [1,'grammar','数','The committee published three new _____.',['guidelines','guidelinees','guideline’s'],'guidelines','guideline 的规则复数为 guidelines。']
  ]});

  put('guild', {domain:'历史',example:'The weavers’ guild set standards for apprentices and finished cloth.',exampleZh:'织工行会为学徒培训和成品布料制定标准。',scene:'Several local guilds joined the parade to represent their trades.',sceneZh:'几个当地行业协会参加了游行，代表各自的行业。',rationale:'guild 可指按行业或共同兴趣组织起来的团体。',me:'grammar',wrong:'The craft guild meet every month to review applications.',right:'The craft guild meets every month to review applications.',reason:'单数主语 guild 的谓语用 meets。',q:[
    [1,'meaning','词义','A medieval guild of metalworkers was an association of _____.',['people in the same craft','hotel visitors','ship captains only'],'people in the same craft','guild 常指同一行业或手艺人的组织。'],
    [2,'meaning','词义','A modern writers’ guild is a _____.',['professional group','guard post','travel guide'],'professional group','guild 也可泛指有共同职业或兴趣的团体。'],
    [1,'grammar','复数','Several craft _____ shared the hall.',['guilds','guildes','guild’s'],'guilds','guild 的复数加 -s。'],
    [1,'distinction','辨析','A guild organizes members of a trade; a guard usually _____.',['protects a person or place','publishes a handbook','makes a guess'],'protects a person or place','guild 和 guard 拼写接近但词义不同。']
  ]});

  put('guile', {domain:'文学',example:'The fox used guile rather than force to persuade the crow to drop the bread.',exampleZh:'狐狸用诡计而不是蛮力，说服乌鸦丢下面包。',scene:'The negotiator rejected guile and explained the terms openly.',sceneZh:'谈判代表拒绝使用欺诈手段，而是公开解释条款。',rationale:'guile 指带欺骗性的机巧手段。',me:'grammar',wrong:'The spy relied on guilefully to hide the document.',right:'The spy relied on guile to hide the document.',reason:'介词 on 后需要名词 guile，不能用副词 guilefully。',q:[
    [1,'meaning','词义','A character who succeeds through guile uses _____.',['deceptive cleverness','legal supervision','physical strength only'],'deceptive cleverness','guile 表示带欺骗性的狡诈或诡计。'],
    [1,'collocation','搭配','The con artist relied on _____ to win the victims’ trust.',['guile','gullet','guild'],'guile','这里需要表示欺诈手段的名词。'],
    [1,'grammar','可数性','Which phrase is natural for this usually uncountable noun?',['a little guile','three guiles of trick','many guile'],'a little guile','guile 通常不可数，可说 a little guile。'],
    [1,'distinction','辨析','A guileless person is the opposite of someone who is _____.',['deceptively cunning','physically strong','a hotel guest'],'deceptively cunning','guileless 表示不狡诈，与 guile 的含义相反。']
  ]});

  put('guileless', {domain:'人际',example:'Her guileless question showed that she had misunderstood the joke.',exampleZh:'她天真的提问表明她误解了这个笑话。',scene:'The child gave a guileless account of how the vase had fallen.',sceneZh:'孩子坦率地讲述了花瓶是如何掉下来的。',rationale:'言语或叙述 guileless 表示坦率、没有欺骗心思。',me:'grammar',wrong:'The guileless child tell the story without hiding anything.',right:'The guileless child tells the story without hiding anything.',reason:'单数主语 child 的一般现在时谓语用 tells。',origin:'由 guile 加 -less 构成，-less 表示缺少。',q:[
    [1,'meaning','词义','A guileless remark is _____.',['innocent and not intended to deceive','carefully designed to trick someone','a legal promise'],'innocent and not intended to deceive','guileless 表示天真、没有欺骗心机。'],
    [1,'word formation','构词','In guileless, the suffix -less means _____.',['without','full of','able to'],'without','-less 表示“没有、缺少”。'],
    [2,'meaning','词义','A guileless explanation of an accident is _____.',['straightforward and candid','a deliberately false report','a set of safety rules'],'straightforward and candid','guileless 也可形容坦率的言行。'],
    [1,'contrast','辨析','Which word describes clever deception?',['guile','guileless','guiltless'],'guile','guile 指狡诈；guileless 指不狡诈。']
  ]});

  put('guilt', {domain:'情感与法律',example:'She felt guilt for ignoring the warning, although nobody was injured.',exampleZh:'尽管没有人受伤，她仍因忽视警告而感到内疚。',scene:'The new evidence cast doubt on the suspect’s guilt.',sceneZh:'新证据使人们对嫌疑人的罪责产生怀疑。',rationale:'这里 guilt 指法律上的罪责，而不是主观情绪。',cs:2,me:'grammar',wrong:'He felt guilt after he had broke the window.',right:'He felt guilt after he had broken the window.',reason:'过去完成时需要过去分词 broken。',q:[
    [1,'meaning','词义','A person may feel guilt after believing they have _____.',['done something wrong','welcomed a guest','read a guidebook'],'done something wrong','guilt 的第一义项是内疚感。'],
    [2,'meaning','词义','Evidence can establish a defendant’s guilt, meaning the person’s _____.',['legal responsibility for a crime','feeling of surprise','ability to guide a group'],'legal responsibility for a crime','法律语境的 guilt 指有罪或罪责。'],
    [1,'collocation','搭配','He admitted his guilt _____ the theft.',['for','at','under'],'for','guilt for an act 表示对某事感到内疚。'],
    [2,'distinction','辨析','A guilty verdict concerns guilt in the legal sense; remorse is a _____.',['feeling','court order','person appointed to care for a child'],'feeling','罪责是法律判断，remorse 是主观悔恨。']
  ]});

  put('guiltless', {domain:'法律',example:'The review found the employee guiltless of the charges against her.',exampleZh:'审查认定该员工没有被指控事项上的罪责。',scene:'Although guiltless of fraud, he still had to answer questions about the missing funds.',sceneZh:'尽管没有欺诈罪责，他仍须回答有关资金失踪的问题。',rationale:'guiltless of 后接被指控的行为或罪名。',me:'grammar',wrong:'The review found her guiltless for the charge.',right:'The review found her guiltless of the charge.',reason:'表示无某项罪责时通常用 guiltless of。',origin:'由 guilt 加 -less 构成，-less 表示没有。',q:[
    [1,'meaning','词义','A guiltless defendant is _____.',['not guilty','feeling intense guilt','responsible for a court'],'not guilty','guiltless 指无罪或无罪责。'],
    [1,'collocation','搭配','The inquiry found the officer guiltless _____ the allegation.',['of','at','with'],'of','常说 guiltless of an offense/allegation。'],
    [1,'word formation','构词','The suffix -less in guiltless contributes the meaning _____.',['without','full of','before'],'without','guiltless 表示没有罪责。'],
    [1,'distinction','辨析','Someone guiltless of theft did not commit it; someone guilty of theft is _____.',['responsible for it','a witness only','a legal guardian'],'responsible for it','guiltless 与 guilty 在是否有罪上相反。']
  ]});

  put('guilty', {domain:'法律与情感',example:'The jury found the driver guilty of reckless driving.',exampleZh:'陪审团裁定司机犯有鲁莽驾驶罪。',scene:'He felt guilty about leaving his colleague to finish the report alone.',sceneZh:'他因把报告留给同事独自完成而感到内疚。',rationale:'guilty 可指法律上有罪，也可指主观内疚。',me:'collocation',wrong:'The jury found the driver guilty for reckless driving.',right:'The jury found the driver guilty of reckless driving.',reason:'表示犯有某罪，常用 guilty of。',q:[
    [1,'meaning','词义','A court finds a person guilty when it decides that the person _____.',['committed the offense','was invited to the hearing','wrote the guideline'],'committed the offense','guilty 的法律义是有罪的。'],
    [2,'meaning','词义','If she felt guilty about missing the call, she felt _____.',['bad or responsible about it','proud of it','certain it never happened'],'bad or responsible about it','guilty 也可描述内疚感。'],
    [1,'collocation','搭配','The defendant was found guilty _____ theft.',['of','for','on'],'of','标准搭配是 guilty of a crime。'],
    [1,'grammar','词性','Choose the adjective in the correct place: “The _____ verdict surprised the family.”',['guilty','guilt','guiltiness'],'guilty','verdict 前需要形容词 guilty。']
  ]});

  put('guinea', {domain:'动物',example:'The guinea pig hid beneath its bedding when the vacuum cleaner started.',exampleZh:'吸尘器启动时，豚鼠躲到了垫料下面。',scene:'The veterinarian weighed each guinea pig before checking its teeth.',sceneZh:'兽医检查牙齿前，先称了每只豚鼠的体重。',rationale:'在 guinea pig 中 guinea 是复合名称的一部分，指豚鼠。',cs:1,me:'grammar',wrong:'The guinea pigs needs fresh water every day.',right:'The guinea pigs need fresh water every day.',reason:'复数主语 guinea pigs 应搭配 need。',q:[
    [1,'meaning','词义','A guinea pig is a small _____.',['rodent often kept as a pet','bird of prey','musical instrument'],'rodent often kept as a pet','guinea pig 指豚鼠。'],
    [1,'collocation','搭配','The children prepared fresh hay for their _____.',['guinea pig','gulf','guarantor'],'guinea pig','hay 是照料豚鼠的食物之一。'],
    [2,'meaning','历史用法','In older British usage, a guinea was a _____.',['gold coin worth twenty-one shillings','small sea bird','kind of protective helmet'],'gold coin worth twenty-one shillings','guinea 曾是英国旧金币名称。'],
    [3,'meaning','用法','In a country name, Guinea refers to _____.',['a place-name element, as in Papua New Guinea','a type of court order','a gym class'],'a place-name element, as in Papua New Guinea','Guinea 也出现在国家地名中。']
  ]});

  put('guise', {domain:'新闻',example:'The caller used the guise of a delivery worker to enter the building.',exampleZh:'来电者假扮成送货员进入了大楼。',scene:'The charity warned residents about scams carried out under the guise of a prize offer.',sceneZh:'慈善机构提醒居民警惕打着中奖名义实施的骗局。',rationale:'under the guise of 表示借某种表面身份或名目作掩护。',me:'grammar',wrong:'The caller acted under guise of a courier.',right:'The caller acted under the guise of a courier.',reason:'常见表达是 under the guise of，需有定冠词 the。',q:[
    [1,'meaning','词义','A person working under the guise of a technician is using a false _____.',['appearance or identity','weather forecast','legal guardian'],'appearance or identity','guise 指表面伪装或假身份。'],
    [1,'collocation','搭配','The message asked for bank details under the _____ of a security check.',['guise','gullet','guild'],'guise','under the guise of a security check 表示借安全检查之名。'],
    [1,'grammar','搭配','Complete the common phrase: under _____ guise of research.',['the','a few','many'],'the','固定表达通常是 under the guise of。'],
    [1,'distinction','辨析','A guise hides the truth; a guideline is _____.',['a recommended rule','a false identity','a small seabird'],'a recommended rule','guise 是伪装，guideline 是指导方针。']
  ]});

  put('guitar', {domain:'音乐',example:'Lena tuned her guitar before rehearsing the new song.',exampleZh:'莉娜在排练新歌前给吉他调了音。',scene:'A guitarist played a quiet melody on a guitar beside the station entrance.',sceneZh:'一位吉他手在车站入口旁用吉他弹奏轻柔的旋律。',rationale:'guitar 是可数乐器名词，常与 play、tune 等动词搭配。',me:'grammar',wrong:'My guitar need a new string before the concert.',right:'My guitar needs a new string before the concert.',reason:'单数主语 guitar 的谓语动词加 -s。',q:[
    [1,'meaning','词义','A guitar is a musical instrument usually played with _____.',['strings','keys only','a bow and no strings'],'strings','吉他是弦乐器。'],
    [1,'collocation','搭配','He learned to _____ the guitar by ear.',['tune','guard','gush'],'tune','tune the guitar 表示给吉他调音。'],
    [1,'grammar','冠词','She bought _____ guitar for her first lesson.',['a','an','the several'],'a','单数可数名词 guitar 前需要冠词。'],
    [1,'word family','词形','A person whose instrument is the guitar is a _____.',['guitarist','guitarly','guitard'],'guitarist','guitarist 指吉他手。']
  ]});

  put('gulf', {domain:'地理',example:'A narrow gulf separates the peninsula from the mainland.',exampleZh:'一道狭窄海湾将半岛与大陆隔开。',scene:'The survey found a gulf between residents’ priorities and the council’s budget.',sceneZh:'调查发现居民的优先事项与议会预算之间存在巨大差距。',rationale:'比喻义 gulf 指重大分歧或差距。',cs:2,me:'grammar',wrong:'Two gulf separate the islands from the coast.',right:'Two gulfs separate the islands from the coast.',reason:'gulf 的规则复数形式是 gulfs。',q:[
    [1,'meaning','词义','On a map, a gulf is a large part of the sea that is partly enclosed by _____.',['land','a city wall','a forest canopy'],'land','gulf 的地理义是伸入陆地的大片海湾。'],
    [2,'meaning','引申义','A gulf between generations can refer to a wide _____.',['difference in outlook','stretch of open water','protective barrier'],'difference in outlook','比喻义表示人与人之间的重大差异。'],
    [1,'collocation','搭配','The Gulf of Mexico is a large _____.',['body of water','mountain pass','legal association'],'body of water','海湾义常用于地名 Gulf of Mexico。'],
    [2,'context','语境','The report revealed a gulf in access to health care. This points to _____.',['a serious inequality','a storm at sea','a new travel guide'],'a serious inequality','此处 gulf 指服务可及性的巨大差距。']
  ]});

  put('gull', {domain:'海岸生态',example:'A gull dropped a shellfish onto the rocks to crack it open.',exampleZh:'一只海鸥把贝类丢到岩石上砸开。',scene:'The gulls gathered around the fishing boat as it returned to the pier.',sceneZh:'渔船返回码头时，海鸥们聚集在船周围。',rationale:'这里 gull 是海鸟名词；常见复数为 gulls。',me:'grammar',wrong:'The gulls was calling above the pier.',right:'The gulls were calling above the pier.',reason:'复数主语 gulls 与 were 搭配。',q:[
    [1,'meaning','词义','A gull circling a harbor is a kind of _____.',['seabird','court document','small lodging place'],'seabird','gull 可指海鸥类海鸟。'],
    [2,'meaning','词义','As a verb, to gull someone is to _____.',['deceive them','guide them safely','give them advice'],'deceive them','较少见的动词 gull 表示欺骗。'],
    [1,'collocation','搭配','A _____ of gulls followed the fishing boat.',['flock','gulf','guild'],'flock','描述鸟群常用 a flock of。'],
    [1,'grammar','复数','One gull, two _____.',['gulls','gullies','gulleys'],'gulls','鸟名 gull 的复数加 -s。']
  ]});

  put('gullet', {domain:'健康',example:'The doctor explained how food passes through the gullet on its way to the stomach.',exampleZh:'医生解释了食物如何经过食道进入胃。',scene:'The scan showed a small object lodged in the patient’s gullet.',sceneZh:'扫描显示一个小物体卡在患者的食道里。',rationale:'gullet 是连接口腔与胃的食道通道，日常也常说 throat 或 esophagus。',me:'grammar',wrong:'The gullet carry food from the mouth toward the stomach.',right:'The gullet carries food from the mouth toward the stomach.',reason:'单数主语 gullet 的一般现在时谓语加 -s。',q:[
    [1,'meaning','词义','The gullet carries swallowed food toward the _____.',['stomach','lungs only','outer ear'],'stomach','gullet 指食物通过的食道。'],
    [1,'context','语境','A physician would discuss the gullet in a lesson about _____.',['swallowing and digestion','weather patterns','musical instruments'],'swallowing and digestion','gullet 属于人体消化通道语境。'],
    [1,'distinction','辨析','A gullet is part of the digestive tract; a gull is _____.',['a seabird','a throat muscle','a guideline'],'a seabird','gullet 与 gull 拼写相近但义项不同。'],
    [1,'grammar','冠词','Choose the correct phrase: food passes through _____.',['the gullet','a gulletly','gulleting'],'the gullet','通常说 through the gullet。']
  ]});

  put('gullible', {domain:'网络安全',example:'The gullible buyer clicked a fake invoice before checking the sender.',exampleZh:'轻信的买家还没核对发件人就点开了假发票。',scene:'A gullible user may trust a message that imitates a familiar company.',sceneZh:'轻信的用户可能会相信冒充熟悉公司的信息。',rationale:'gullible 描述容易相信他人或轻易受骗的人。',me:'grammar',wrong:'He was gullible enough believe the fake notice.',right:'He was gullible enough to believe the fake notice.',reason:'be + adjective + enough 后接 to-infinitive。',q:[
    [1,'meaning','词义','A gullible person is especially likely to _____.',['believe a trick','guard a building','write a guideline'],'believe a trick','gullible 表示容易受骗、轻信。'],
    [1,'collocation','搭配','A gullible customer may be _____ by a false offer.',['deceived','guided through','hailed as'],'deceived','gullible 常与 deceive、trick 等概念相关。'],
    [1,'grammar','结构','She was gullible enough _____ the impersonator.',['to trust','trusting','trusted'],'to trust','形容词 enough 后接 to + 动词原形。'],
    [1,'distinction','辨析','Gullible means easily deceived; cautious means _____.',['careful before trusting','eager to believe anything','unable to read'],'careful before trusting','cautious 表示谨慎，与 gullible 的倾向相反。']
  ]});

  put('gullibly', {domain:'新闻',example:'He gullibly shared the unverified claim before reading the full report.',exampleZh:'他轻信地转发了未经证实的说法，之后才读完整份报告。',scene:'The account gullibly repeated a rumor that the local paper had already corrected.',sceneZh:'该账号轻信地重复了一则当地报纸已经更正的谣言。',rationale:'gullibly 是副词，修饰表示相信或传播信息的动词。',me:'grammar',wrong:'They gullibly believes every message that arrives.',right:'They gullibly believe every message that arrives.',reason:'复数主语 they 搭配动词原形 believe。',origin:'由形容词 gullible 加副词后缀 -ly 构成。',q:[
    [1,'meaning','词义','If someone gullibly accepts a rumor, they accept it _____.',['too readily, without checking','after proving it false','only under a court order'],'too readily, without checking','gullibly 表示轻信地、不加核实地。'],
    [1,'grammar','词性','In “She gullibly trusted the message,” gullibly modifies _____.',['trusted','message','she'],'trusted','副词 gullibly 修饰动词 trusted。'],
    [1,'word formation','构词','Which adjective is the base of gullibly?',['gullible','gull','gully'],'gullible','gullibly 由 gullible 加 -ly 构成。'],
    [1,'context','语境','A person forwards a suspicious link without checking it. They act _____.',['gullibly','guardedly','guidingly'],'gullibly','未核实便相信并转发，体现轻信。']
  ]});

  put('gully', {domain:'地理',example:'Heavy rain cut a deep gully through the dry hillside.',exampleZh:'暴雨在干燥的山坡上冲出一道深沟。',scene:'The farm channel drained into a gully beside the lower field.',sceneZh:'农场水渠的水排入下方田地旁的一条排水沟。',rationale:'gully 可指侵蚀形成的沟壑，也可指排水沟。',me:'grammar',wrong:'Several narrow gully crossed the slope.',right:'Several narrow gullies crossed the slope.',reason:'辅音字母加 y 结尾的 gully 变 y 为 i 再加 -es。',q:[
    [1,'meaning','词义','Rainwater carved a gully down the bare slope. It formed a narrow _____.',['erosion channel','professional association','sea inlet'],'erosion channel','gully 的地貌义是雨水侵蚀出的沟。'],
    [2,'meaning','词义','In farm drainage, a gully may be a _____.',['channel carrying water away','small fitness room','protective sleeve'],'channel carrying water away','gully 也可指排水沟。'],
    [1,'collocation','搭配','The storm left a deep _____ across the field.',['gully','gullible','guile'],'gully','deep gully 描述深沟地形。'],
    [1,'grammar','复数','Choose the plural: Two _____ cut across the hillside.',['gullies','gullys','gulleys'],'gullies','gully 的标准复数是 gullies。']
  ]});

  put('gulp', {domain:'日常生活',example:'After the long run, she gulped a glass of water and sat down.',exampleZh:'长跑后，她大口喝下一杯水，然后坐了下来。',scene:'He gave a nervous gulp before speaking to the crowded hall.',sceneZh:'在拥挤的大厅里发言前，他紧张地咽了一下口水。',rationale:'gulp 可作动词表示大口吞咽，也可作名词指一次吞咽动作。',me:'grammar',wrong:'He gulp the last mouthful before the bus arrived.',right:'He gulped the last mouthful before the bus arrived.',reason:'这里叙述过去动作，gulp 的过去式是 gulped。',q:[
    [1,'meaning','词义','If you gulp your drink, you _____.',['swallow it quickly in large mouthfuls','sip it slowly','pour it away'],'swallow it quickly in large mouthfuls','gulp 作动词表示大口吞咽。'],
    [1,'context','语境','Someone may gulp air after a sudden surprise because they _____.',['take a quick breath','start a song','fall asleep'],'take a quick breath','gulp 也可描述突然急促地吸气或吞咽。'],
    [1,'grammar','过去式','Yesterday, he _____ his water after the match.',['gulped','gulps','gulping'],'gulped','规则动词 gulp 的过去式加 -ed。'],
    [1,'distinction','辨析','A gulp is one quick swallow; a sip is _____.',['a small amount taken slowly','a loud gust of wind','a legal promise'],'a small amount taken slowly','gulp 与 sip 在吞咽方式和量上形成对比。']
  ]});

  put('gum', {domain:'身体与日用品',example:'The dentist checked the gum around the loose tooth.',exampleZh:'牙医检查了松动牙齿周围的牙龈。',scene:'A piece of gum stuck to the underside of the desk.',sceneZh:'一块口香糖粘在桌子底面。',rationale:'gum 有牙龈、口香糖、树胶和用胶粘等不同义项。',me:'grammar',wrong:'The gum around the tooth were swollen.',right:'The gum around the tooth was swollen.',reason:'这里 gum 指一处牙龈组织，作单数主语应配 was。',q:[
    [1,'meaning','词义','The dentist examined the gum around the tooth. Here gum means _____.',['flesh around the teeth','chewing candy','tree resin'],'flesh around the teeth','gum 的第一义项是牙龈。'],
    [2,'meaning','词义','She put her chewing gum in the wrapper. Here gum is _____.',['a soft substance chewed for flavor','tissue near a tooth','a type of glue'],'a soft substance chewed for flavor','chewing gum 指咀嚼的口香糖。'],
    [3,'meaning','词义','Some trees produce gum that can be used in products. This gum is _____.',['a sticky plant substance','a tooth','a piece of candy only'],'a sticky plant substance','gum 也可指树木分泌的树胶。'],
    [4,'meaning','词义','To gum two pieces of paper together is to _____.',['stick them with an adhesive','chew them','protect them with a guard'],'stick them with an adhesive','gum 可作动词表示用胶粘合。']
  ]});

  put('gun', {domain:'交通与机械',example:'The old patrol boat carried a small gun for defense.',exampleZh:'那艘旧巡逻艇配有一门小型火炮用于防卫。',scene:'The driver gunned the engine briefly to climb the steep ramp.',sceneZh:'司机短暂加大油门，让车爬上陡坡。',rationale:'gun 除武器名词外，也可作动词表示给发动机加大油门。',cs:3,me:'grammar',wrong:'She gunned the engine and drive up the ramp.',right:'She gunned the engine and drove up the ramp.',reason:'并列动作都发生在过去，drive 应改为过去式 drove。',q:[
    [1,'meaning','词义','A hand gun is a weapon designed to fire _____.',['bullets','water for irrigation','musical notes'],'bullets','gun 的常见名词义是枪械。'],
    [2,'meaning','词义','In an older military report, guns opening fire may refer to _____.',['artillery weapons firing','a guitar being tuned','a gust beginning'],'artillery weapons firing','gun 也可指大炮等火炮或其射击。'],
    [3,'meaning','动词义','The cyclist heard the engine gun as the driver _____.',['accelerated sharply','protected the vehicle','closed the door'],'accelerated sharply','gun 作动词可表示加大油门、猛加速。'],
    [3,'grammar','用法','Choose the sentence using gun as a verb.',['He gunned the engine to merge.','He cleaned the gun after use.','The gun was locked away.'],'He gunned the engine to merge.','gunned 的宾语 engine 表明这里是加大油门。']
  ]});

  put('gun down', {domain:'新闻报道',example:'The report said the gunman had tried to gun down a rival outside the courthouse.',exampleZh:'报道称，枪手曾试图在法院外枪杀一名对手。',scene:'Witnesses described how the attackers gunned down the guard and fled.',sceneZh:'目击者描述袭击者如何枪杀警卫后逃离。',rationale:'gun down 是表示枪杀的及物短语动词，报道中常用于暴力犯罪语境。',me:'grammar',wrong:'The suspect tried to gun downed the guard.',right:'The suspect tried to gun down the guard.',reason:'try to 后接动词原形，不能用过去式 downed。',q:[
    [1,'meaning','词义','A report that someone was gunned down says the person was _____.',['shot and killed','invited to speak','protected by a guardian'],'shot and killed','gun down 指开枪杀害。'],
    [1,'grammar','结构','They tried to _____ the witness, but the attack failed.',['gun down','gunned down','gunning down'],'gun down','try to 后接短语动词原形。'],
    [1,'word form','过去式','The past form is “The gang _____ the guard.”',['gunned down','gun downed','gunning down'],'gunned down','gun down 的过去式为 gunned down。'],
    [1,'register','语域','Gun down most often appears in reporting about _____.',['shooting violence','travel directions','gym classes'],'shooting violence','该短语表示枪杀，语境严重且暴力。']
  ]});

  put('guncotton', {domain:'化学史',example:'The museum label identifies the sample as guncotton, an old name for nitrocellulose.',exampleZh:'博物馆标签将样品标为 guncotton，这是硝化纤维素的旧称。',scene:'A historian noted that guncotton appears in the archive only as a material name.',sceneZh:'一位历史学者指出，档案中的 guncotton 只作为材料名称出现。',rationale:'这是硝化纤维素的历史名称；例句仅作词义识别。',me:'meaning',wrong:'The label says guncotton is ordinary cotton cloth.',right:'The label says guncotton is nitrocellulose.',reason:'guncotton 指硝化纤维素，不是普通棉布。',origin:'由 gun 与 cotton 构成的历史名称，指硝化纤维素；名称不代表普通棉织物。',q:[
    [1,'meaning','词义','A historical chemistry label uses guncotton for _____.',['nitrocellulose','ordinary cotton fabric','a type of firearm'],'nitrocellulose','guncotton 是硝化纤维素的旧称。'],
    [1,'distinction','辨析','The name guncotton contains cotton, but it does not mean _____.',['everyday cotton cloth','a chemical material','a historical term'],'everyday cotton cloth','不能按字面把它理解为普通棉布。'],
    [1,'register','语域','A modern text is more likely to use which technical name?',['nitrocellulose','guesthouse','gullibility'],'nitrocellulose','nitrocellulose 是更直接的化学名称。'],
    [1,'context','语境','Where would guncotton most plausibly appear today?',['a historical chemistry exhibit','a hair salon menu','a city travel guide'],'a historical chemistry exhibit','该词多见于化学史或旧材料名称。']
  ]});

  put('gunfire', {domain:'新闻',example:'Residents reported hearing gunfire several blocks from the station.',exampleZh:'居民报告说在车站几条街外听到了枪声。',scene:'The radio operator stopped transmitting when gunfire broke out near the bridge.',sceneZh:'桥附近响起枪声时，无线电操作员停止了发报。',rationale:'gunfire 通常作不可数名词，指枪炮射击或其声响。',me:'grammar',wrong:'The gunfire were heard shortly after midnight.',right:'The gunfire was heard shortly after midnight.',reason:'gunfire 通常作不可数单数名词，谓语用 was。',q:[
    [1,'meaning','词义','Gunfire refers to _____.',['shots being fired or their sound','a type of cotton cloth','a legal promise'],'shots being fired or their sound','gunfire 指枪炮射击行为或枪声。'],
    [1,'collocation','搭配','Police said they did not return _____.',['gunfire','guncotton','guidance'],'gunfire','return gunfire 表示还击。'],
    [1,'grammar','可数性','Choose the standard sentence.',['Gunfire was reported nearby.','A gunfire were reported nearby.','Three gunfires was reported nearby.'],'Gunfire was reported nearby.','gunfire 一般不可数；单发可说 a shot。'],
    [1,'distinction','辨析','One individual report from a weapon is often called a _____.',['shot','guild','gully'],'shot','shot 可指单次射击，gunfire 指整体射击。']
  ]});

  put('gunpowder', {domain:'历史',example:'The exhibit displays a sealed jar labeled gunpowder from the old fort.',exampleZh:'展览陈列着一只标有 gunpowder 的密封罐，来自旧堡垒。',scene:'The guide explained that the word gunpowder appears in early records of firearms.',sceneZh:'向导解释说，早期火器记录中就出现了 gunpowder 一词。',rationale:'例句只在历史展览中标识该物质，不涉及制备或使用方式。',me:'grammar',wrong:'The gunpowder were stored in a sealed display case.',right:'The gunpowder was stored in a sealed display case.',reason:'gunpowder 通常是不可数名词，使用单数谓语。',q:[
    [1,'meaning','词义','Gunpowder is a historical explosive material associated with _____.',['firearms and fireworks','hair care','legal guardianship'],'firearms and fireworks','gunpowder 指火药。'],
    [1,'context','语境','A museum label about gunpowder most likely belongs in an exhibit on _____.',['the history of weapons','modern hairstyles','city guesthouses'],'the history of weapons','gunpowder 常见于火器史语境。'],
    [1,'grammar','可数性','Choose the natural sentence.',['Gunpowder was kept in the display.','A gunpowder were kept in the display.','Many gunpowders was kept there.'],'Gunpowder was kept in the display.','gunpowder 通常作不可数名词。'],
    [1,'word formation','构词','In gunpowder, powder identifies the material as a kind of _____.',['powder','weapon owner','protective clothing'],'powder','复合词的中心词 powder 表示粉末状物质。']
  ]});

  put('gush', {domain:'日常表达',example:'Water gushed from the broken pipe and spread across the kitchen floor.',exampleZh:'水从破裂的管道中喷涌而出，漫过厨房地面。',scene:'During the interview, he gushed about the volunteers who had helped his family.',sceneZh:'采访中，他滔滔不绝地称赞了帮助过他一家的志愿者。',rationale:'gush 可表示液体喷涌，也可表示热情洋溢地夸赞。',me:'grammar',wrong:'Warm water gush from the damaged pipe every morning.',right:'Warm water gushes from the damaged pipe every morning.',reason:'不可数主语 water 作单数，谓语用 gushes。',q:[
    [1,'meaning','词义','Water gushed from the broken pipe. It _____.',['flowed out suddenly and forcefully','froze in place','was carefully measured'],'flowed out suddenly and forcefully','gush 表示液体突然大量涌出。'],
    [2,'meaning','引申义','She gushed about the play after the show. She spoke _____.',['with excited praise','in a quiet warning','as a legal witness'],'with excited praise','gush about someone or something 可表示热情称赞。'],
    [3,'meaning','名词义','A gush of water is _____.',['a sudden strong flow','a written guideline','a sea bird'],'a sudden strong flow','gush 也可作名词，指一阵喷涌。'],
    [1,'grammar','搭配','Choose the sentence with correct agreement.',['Oil gushes from the damaged valve.','Oil gush from the damaged valve.','Oils gushing from the valve.'],'Oil gushes from the damaged valve.','单数或不可数主语 oil 与 gushes 搭配。']
  ]});

  put('gusher', {domain:'石油工业',example:'The old field once had a gusher that sent oil high above the wellhead.',exampleZh:'那片老油田曾有一口自喷井，石油从井口喷得很高。',scene:'The archive photograph shows workers standing beside a capped gusher.',sceneZh:'档案照片显示工人站在一口已封闭的自喷井旁。',rationale:'gusher 可指石油自喷井，也可指说话热情洋溢的人。',me:'grammar',wrong:'The gusher produce oil without a pump in the old photograph.',right:'The gusher produces oil without a pump in the old photograph.',reason:'单数主语 gusher 的谓语应为 produces。',q:[
    [1,'meaning','词义','In an oil-field report, a gusher is a well that _____.',['sends oil up under natural pressure','stores guest luggage','measures wind speed'],'sends oil up under natural pressure','gusher 的专业名词义指自喷井。'],
    [2,'meaning','引申义','A person who is a gusher tends to _____.',['speak with excessive enthusiasm','avoid talking altogether','guard a building'],'speak with excessive enthusiasm','引申义可指滔滔不绝、热情夸赞的人。'],
    [1,'context','语境','A capped gusher would most likely be shown in a history of _____.',['oil drilling','music lessons','school gymnastics'],'oil drilling','自喷井属于石油开采语境。'],
    [1,'grammar','复数','Several oil _____ were visible in the old photograph.',['gushers','gusheres','gusher’s'],'gushers','gusher 的规则复数加 -s。']
  ]});

  put('gust', {domain:'天气',example:'A sudden gust blew the papers off the outdoor table.',exampleZh:'一阵突如其来的强风把户外桌上的文件吹落了。',scene:'Each gust shook the observatory door while the storm crossed the ridge.',sceneZh:'风暴越过山脊时，每一阵狂风都摇动着观测站的门。',rationale:'gust 是一阵突然增强的风，常与 wind 连用。',me:'grammar',wrong:'A gust of wind blow the gate shut.',right:'A gust of wind blows the gate shut.',reason:'单数主语 gust 与 blows 搭配。',q:[
    [1,'meaning','词义','A gust of wind is _____.',['a brief sudden rush of wind','a steady light drizzle','a legal instruction'],'a brief sudden rush of wind','gust 指一阵突然增强的风。'],
    [1,'collocation','搭配','A strong gust _____ the tent wall inward.',['pushed','guided','guessed'],'pushed','gust 可作主语，与风推动物体的动词搭配。'],
    [1,'grammar','量词','The usual phrase is a gust _____ wind.',['of','at','under'],'of','常说 a gust of wind。'],
    [1,'distinction','辨析','A gust is a short burst of wind; a breeze is usually _____.',['gentler and more continuous','a legal document','a sea bird'],'gentler and more continuous','breeze 通常较轻柔、持续。']
  ]});

  put('gusty', {domain:'天气预报',example:'The forecast warned of gusty conditions along the exposed coast.',exampleZh:'天气预报提醒海岸开阔地带会有阵风。',scene:'The pilot waited for the gusty crosswind to weaken before landing.',sceneZh:'飞行员等到阵风造成的侧风减弱后才降落。',rationale:'gusty 描述风阵较强或频繁的天气。',me:'grammar',wrong:'The gusty winds was difficult for the cyclists.',right:'The gusty winds were difficult for the cyclists.',reason:'复数主语 winds 与 were 搭配。',origin:'由 gust 加形容词后缀 -y 构成，表示阵风明显的。',q:[
    [1,'meaning','词义','Gusty weather has winds that _____.',['blow in strong irregular bursts','remain completely still','carry steady rain only'],'blow in strong irregular bursts','gusty 表示有强阵风的。'],
    [1,'collocation','搭配','Small boats may be unsafe in _____ conditions.',['gusty','guiltless','guileless'],'gusty','gusty conditions 常描述阵风天气。'],
    [1,'grammar','词性','The forecast predicts _____ winds on the ridge.',['gusty','gust','gustily'],'gusty','名词 winds 前用形容词 gusty。'],
    [1,'distinction','辨析','A gusty afternoon is characterized by gusts; a calm afternoon has _____.',['little or no wind','many sudden gusts','heavy hail'],'little or no wind','calm 与阵风明显的 gusty 相对。']
  ]});

  put('gut', {domain:'身体与判断',example:'The gut absorbs nutrients after food leaves the stomach.',exampleZh:'食物离开胃后，肠道会吸收营养。',scene:'She trusted her gut feeling and chose the quieter road home.',sceneZh:'她相信自己的直觉，选择了那条更安静的回家路线。',rationale:'gut 可指肠道、动物内脏、勇气、核心，也可作“直觉的”。',me:'grammar',wrong:'The gut absorb nutrients after digestion begins.',right:'The gut absorbs nutrients after digestion begins.',reason:'单数主语 gut 的谓语用 absorbs。',q:[
    [1,'meaning','词义','In a biology lesson, the gut is part of the system that _____.',['digests food','hears sound','pumps air into the lungs'],'digests food','gut 的第一义项指肠道或消化道。'],
    [2,'meaning','词义','A butcher may remove the gut of an animal before cooking it. Here gut means the _____.',['internal organs or intestines','outer skin only','animal’s habitat'],'internal organs or intestines','gut 也可指动物内脏。'],
    [3,'meaning','引申义','“She had the gut to challenge the unfair rule” means she had _____.',['courage','a stomachache','a guidebook'],'courage','口语表达 have the gut to 表示有胆量。'],
    [5,'meaning','形容词义','A gut reaction is an immediate response based on _____.',['instinct or intuition','a written guideline','a measured calculation only'],'instinct or intuition','gut 作定语可表示本能或直觉的。']
  ]});

  put('guy', {domain:'户外装备',example:'A steel guy held the tent steady when the wind rose.',exampleZh:'风势增强时，一根钢制拉索固定住了帐篷。',scene:'The guide greeted the group with “You guys can leave your packs here.”',sceneZh:'向导招呼大家说：“各位可以把背包放在这里。”',rationale:'guy 可指支帐篷的拉索，也可在口语中称呼一群人。',cs:3,me:'grammar',wrong:'The guy wire keep the tent from leaning.',right:'The guy wire keeps the tent from leaning.',reason:'单数主语 guy wire 的谓语应为 keeps。',q:[
    [1,'meaning','词义','In casual speech, “That guy fixed the bike” usually means _____.',['that man fixed it','that cable fixed it','that group fixed it'],'that man fixed it','guy 的常见口语义是男人或小伙子。'],
    [2,'usage','语用','A speaker addressing friends may say “You guys” to mean _____.',['you all','one unknown man','a tent rope'],'you all','口语复数称呼 you guys 常指一群人。'],
    [3,'meaning','专业义','A tent guy is a line used to _____.',['hold the tent steady','repair the fabric','mark a hiking trail'],'hold the tent steady','户外装备中的 guy 是固定帐篷的拉索。'],
    [1,'register','语域','In a formal letter, which is more suitable than “Hey, guys”?',['Dear colleagues','Hey, guy wire','Dear gully'],'Dear colleagues','you guys 较口语；正式称呼可用 colleagues。']
  ]});

  put('guys', {domain:'口语交流',example:'“Thanks, guys, for staying to help clean the room,” the coach said.',exampleZh:'教练说：“谢谢大家留下来帮忙打扫房间。”',scene:'The host told the guests, “You guys can choose any seat near the window.”',sceneZh:'主人对客人们说：“各位可以选窗边的任何座位。”',rationale:'guys 在口语中可称呼一群人，通常不严格限定为男性。',me:'grammar',wrong:'You guys is welcome to use the study room.',right:'You guys are welcome to use the study room.',reason:'you guys 指复数听众，谓语用 are。',q:[
    [1,'meaning','词义','In casual American speech, “You guys did a great job” addresses _____.',['a group of people','one rope','a single judge'],'a group of people','guys 是 guy 的复数，也常作口语群体称呼。'],
    [1,'usage','语用','Which situation best suits “Thanks, guys”?',['an informal conversation with a team','a formal court filing','a scientific species label'],'an informal conversation with a team','该称呼较口语，常用于熟人或团队。'],
    [1,'grammar','主谓一致','You guys _____ invited to join us.',['are','is','was'],'are','you guys 是复数表达，搭配 are。'],
    [1,'register','语域','For a formal mixed group, which alternative avoids informal guys?',['colleagues','guy wires','guestses'],'colleagues','正式场合可用 colleagues 等中性称呼。']
  ]});

  put('guzzle', {domain:'健康',example:'After the race, the runner guzzled water and rested in the shade.',exampleZh:'比赛结束后，跑步者大口喝水并在阴凉处休息。',scene:'The puppy guzzled its food so quickly that the owner switched to a slow feeder.',sceneZh:'小狗吃得太快，主人于是换用了慢食碗。',rationale:'guzzle 常带有快速、大量吞饮或进食的意味。',me:'grammar',wrong:'The puppy guzzle its food before the other dogs arrive.',right:'The puppy guzzles its food before the other dogs arrive.',reason:'单数主语 puppy 的一般现在时谓语加 -s。',q:[
    [1,'meaning','词义','If someone guzzles a drink, they _____.',['drink it quickly and in large amounts','sip it with care','pour it into a glass'],'drink it quickly and in large amounts','guzzle 表示狂饮或大口吞咽。'],
    [1,'context','语境','A car that guzzles fuel uses _____.',['a very large amount of fuel','no fuel at all','only electricity'],'a very large amount of fuel','guzzle 也可非正式地描述大量消耗资源。'],
    [1,'grammar','词形','The past tense of guzzle is _____.',['guzzled','guzzleded','guzzling'],'guzzled','以 e 结尾的 guzzle 加 -d 构成过去式。'],
    [1,'distinction','辨析','Guzzle suggests speed and excess; sip suggests _____.',['taking a small amount slowly','eating a full meal quickly','using a lot of fuel'],'taking a small amount slowly','sip 表示小口慢饮，与 guzzle 的方式相反。']
  ]});

  put('gym', {domain:'健身',example:'The gym closes early on Sundays, so we exercise at home.',exampleZh:'健身房周日提前关门，所以我们在家锻炼。',scene:'At school, the students have gym twice a week in the sports hall.',sceneZh:'在学校，学生每周在体育馆上两次体育课。',rationale:'gym 可指健身房，也可在美式用法中指体育课。',cs:2,me:'grammar',wrong:'The gym close at nine on weekdays.',right:'The gym closes at nine on weekdays.',reason:'单数主语 gym 的一般现在时谓语加 -s。',q:[
    [1,'meaning','词义','People go to a gym mainly to _____.',['exercise using equipment','attend a court hearing','buy a guidebook'],'exercise using equipment','gym 的常见义是健身房或体育馆。'],
    [2,'meaning','用法','In an American school schedule, gym may mean _____.',['physical education class','a legal guardian','a gym membership card only'],'physical education class','gym 也可口语指学校体育课。'],
    [1,'collocation','搭配','She signed up for a membership at the local _____.',['gym','gulf','guild'],'gym','gym membership 是健身房会员资格。'],
    [1,'grammar','冠词','They built _____ gym beside the swimming pool.',['a','an','many'],'a','gym 以辅音音素开头，单数前用 a。']
  ]});

  put('gymnasium', {domain:'体育设施',example:'The school gymnasium can be divided into two courts with a screen.',exampleZh:'学校体育馆可以用隔帘分成两个球场。',scene:'The community gymnasium offers exercise classes as well as court sports.',sceneZh:'社区体育中心除了球类场地外，还开设健身课程。',rationale:'gymnasium 可指体育馆或健身中心，具体含义看场所设施。',me:'grammar',wrong:'The gymnasium have two basketball courts.',right:'The gymnasium has two basketball courts.',reason:'单数主语 gymnasium 搭配 has。',origin:'经拉丁语来自希腊语 gymnasion；现代英语中指体育锻炼场所。',q:[
    [1,'meaning','词义','A school gymnasium is a large room used for _____.',['sports and physical education','overnight guests','court records'],'sports and physical education','gymnasium 常指学校体育馆。'],
    [2,'meaning','词义','A neighborhood gymnasium with exercise machines is a _____.',['fitness center','travel guide','sea bay'],'fitness center','gymnasium 也可指健身中心。'],
    [1,'word form','缩略','Gym is a common short form of _____.',['gymnasium','guarantor','gynecology'],'gymnasium','gym 是 gymnasium 的常用缩略形式。'],
    [1,'grammar','复数','The two school _____ host volleyball matches.',['gymnasiums','gymnasia only','gymnasium’s'],'gymnasiums','现代英语常用复数 gymnasiums。']
  ]});

  put('gymnastic', {domain:'体育',example:'The gymnast showed remarkable gymnastic control during the landing.',exampleZh:'体操运动员落地时展现了出色的体操控制能力。',scene:'The coach designed gymnastic drills that build balance and coordination.',sceneZh:'教练设计了培养平衡感和协调性的体操训练。',rationale:'gymnastic 是形容词，描述体操或需要体操技巧的动作。',me:'grammar',wrong:'The athlete performed a gymnasticly difficult move.',right:'The athlete performed a gymnastically difficult move.',reason:'副词形式为 gymnastically；gymnastic 是形容词。',q:[
    [1,'meaning','词义','A gymnastic movement requires _____.',['physical skill and control','a written permission form','a strong sea wind'],'physical skill and control','gymnastic 表示体操的或需要身体技巧的。'],
    [1,'grammar','词性','Choose the adjective: “She showed _____ ability.”',['gymnastic','gymnastics','gymnastically'],'gymnastic','名词 ability 前需要形容词 gymnastic。'],
    [1,'collocation','搭配','The routine included a difficult _____ maneuver.',['gymnastic','gynecological','gusty'],'gymnastic','gymnastic maneuver 指需要体操技巧的动作。'],
    [1,'distinction','辨析','Gymnastic describes a skill; gymnastics is the _____.',['sport or activity','person who performs it','building alone'],'sport or activity','gymnastic 是形容词，gymnastics 是运动项目名称。']
  ]});

  put('gymnastics', {domain:'体育',example:'Gymnastics requires balance, strength, and careful practice.',exampleZh:'体操需要平衡、力量和细致的练习。',scene:'Her younger brother watches gymnastics whenever the national team competes.',sceneZh:'国家队参赛时，她弟弟总会观看体操比赛。',rationale:'gymnastics 以 -s 结尾，但通常作为运动项目名称用单数谓语。',me:'grammar',wrong:'Gymnastics are her favorite sport.',right:'Gymnastics is her favorite sport.',reason:'表示这项运动时 gymnastics 通常按单数名词处理。',q:[
    [1,'meaning','词义','Gymnastics is a sport involving _____.',['controlled strength, balance, and movement','only long-distance swimming','repairing instruments'],'controlled strength, balance, and movement','gymnastics 指体操运动。'],
    [1,'grammar','主谓一致','Gymnastics _____ on the school timetable this term.',['is','are','have'],'is','运动项目义的 gymnastics 通常搭配单数谓语。'],
    [1,'collocation','搭配','She won a medal in artistic _____.',['gymnastics','guile','gypsum'],'gymnastics','artistic gymnastics 是体操项目名称。'],
    [1,'distinction','辨析','A gymnast is the athlete; gymnastics is the _____.',['sport','training hall only','protective equipment'],'sport','gymnast 指运动员，gymnastics 指运动项目。']
  ]});

  put('gynecologist', {domain:'医疗',example:'The gynecologist explained the screening results in plain language.',exampleZh:'妇科医生用浅显的语言解释了筛查结果。',scene:'She booked an appointment with a gynecologist for a routine consultation.',sceneZh:'她预约了妇科医生，进行常规咨询。',rationale:'gynecologist 是妇科学专业的医生；英式拼写常作 gynaecologist。',me:'grammar',wrong:'The gynecologist explain the results to each patient.',right:'The gynecologist explains the results to each patient.',reason:'单数主语 gynecologist 的谓语加 -s。',q:[
    [1,'meaning','词义','A gynecologist is a physician specializing in _____.',['women’s reproductive health','bone fossils','sports coaching'],'women’s reproductive health','gynecologist 指妇科医生。'],
    [1,'spelling','拼写','Which is the standard American spelling?',['gynecologist','gynaecologyst','gynecologyst'],'gynecologist','美式拼写为 gynecologist；英式常见 gynaecologist。'],
    [1,'collocation','搭配','She made an appointment _____ a gynecologist.',['with','at','by'],'with','make an appointment with a doctor。'],
    [1,'word family','词形','The medical field practiced by a gynecologist is _____.',['gynecology','gynecologicalist','gymnastics'],'gynecology','gynecology 是妇科学。']
  ]});

  put('gynecology', {domain:'医学',example:'She chose gynecology because she wanted to improve access to reproductive care.',exampleZh:'她选择妇科学，是因为希望改善生殖健康服务的可及性。',scene:'The hospital expanded its gynecology clinic to offer more routine appointments.',sceneZh:'医院扩建了妇科门诊，以提供更多常规预约。',rationale:'gynecology 是研究和诊治女性生殖系统的医学领域。',me:'grammar',wrong:'Gynecology are one branch of medicine.',right:'Gynecology is one branch of medicine.',reason:'gynecology 是单数学科名词，搭配 is。',q:[
    [1,'meaning','词义','Gynecology is the medical field concerned with _____.',['the female reproductive system','weather forecasting','physical education'],'the female reproductive system','gynecology 指妇科学。'],
    [1,'collocation','搭配','A hospital may have a department of _____.',['gynecology','gullibility','guncotton'],'gynecology','department of gynecology 是常见科室名称。'],
    [1,'grammar','词性','Choose the noun naming the specialty.',['gynecology','gynecologist','gynecological'],'gynecology','gynecology 是学科名称；gynecologist 指医生。'],
    [1,'distinction','辨析','A gynecologist is a doctor; gynecology is the doctor’s _____.',['medical specialty','appointment','patient'],'medical specialty','-logy 形式指学科领域。']
  ]});

  put('gypsum', {domain:'地质与建筑',example:'The plaster contains gypsum, a soft mineral used in building materials.',exampleZh:'这种灰泥含有石膏，一种用于建筑材料的软矿物。',scene:'The farm report notes that workers gypsum the soil to improve its structure.',sceneZh:'农场报告提到，工人给土壤施用石膏以改善其结构。',rationale:'gypsum 通常指矿物石膏；词典还列有少见动词义“施石膏处理”。',cs:2,me:'grammar',wrong:'The gypsum were delivered to the building site.',right:'The gypsum was delivered to the building site.',reason:'表示矿物材料时 gypsum 通常作不可数单数名词。',q:[
    [1,'meaning','词义','Gypsum is a soft mineral used in making _____.',['plaster and building materials','guitar strings only','weather reports'],'plaster and building materials','gypsum 的名词义是石膏矿物。'],
    [1,'context','语境','A geologist identifying gypsum would most likely be examining _____.',['a mineral sample','a legal form','a gym timetable'],'a mineral sample','gypsum 是矿物名称。'],
    [2,'meaning','动词义','To gypsum a field is to _____.',['apply gypsum to it','remove its crops','measure its rainfall'],'apply gypsum to it','词典所列动词义是用石膏处理。'],
    [1,'grammar','可数性','Choose the natural sentence about the material.',['Gypsum is used in plaster.','A gypsum are used in plaster.','Many gypsum is used there.'],'Gypsum is used in plaster.','材料义 gypsum 通常不可数。']
  ]});

  put('gypsy', {domain:'用语说明',example:'The archive labels the novel’s term “Gypsy” as an older name for Roma people.',exampleZh:'档案将小说中的“Gypsy”标注为对罗姆人的旧称。',scene:'The editor replaced “gypsy” in the caption with “Roma,” following the community’s preferred name.',sceneZh:'编辑按照该群体偏好的称谓，把说明文字中的“gypsy”改成了“Roma”。',rationale:'该称谓用于罗姆人时常被视为过时或冒犯；讲述现实群体时优先使用 Roma/Romani。',me:'usage',wrong:'The article calls every Roma family a gypsy family.',right:'The article calls every Roma family a Roma family.',reason:'把旧称当作对整个群体的统一自称不恰当；应优先采用 Roma/Romani。',q:[
    [1,'usage','用语','When referring respectfully to the ethnic group, which term is generally preferred?',['Roma or Romani','gullible','guy wire'],'Roma or Romani','gypsy 用作族群名称可能冒犯；优先用 Roma/Romani。'],
    [1,'register','语域','Why might an editor retain “Gypsy” in quotation marks in a historical novel review?',['to discuss the source’s dated wording','to recommend it as a universal label','to describe a gym class'],'to discuss the source’s dated wording','引号可表明讨论的是文本中的旧称，而非采用该称谓。'],
    [2,'meaning','旧义','In older figurative use, gypsy could describe a person as _____.',['wandering or itinerant','legally responsible for a child','a medical specialist'],'wandering or itinerant','该形容词义较旧且可能带刻板印象，应用需谨慎。'],
    [3,'meaning','旧用法','The rare verb gypsy is best treated as _____.',['dated and potentially offensive','a neutral everyday verb','a medical term'],'dated and potentially offensive','该动词义罕见过时，不宜作为中性常用表达。']
  ]});

  put('gyration', {domain:'物理',example:'The satellite’s slow gyration caused its antenna to sweep across the sky.',exampleZh:'卫星缓慢旋转，使天线扫过天空。',scene:'A dancer added one controlled gyration before holding the final pose.',sceneZh:'舞者定格最后姿势前做了一次受控旋转。',rationale:'gyration 是旋转动作或一次回旋，语体较正式。',me:'grammar',wrong:'The machine completed three gyration before stopping.',right:'The machine completed three gyrations before stopping.',reason:'three 后接复数 gyrations。',origin:'经拉丁语 gyratio 来自希腊语 gyros“圆”；此处只说明可支持的来源。',q:[
    [1,'meaning','词义','A gyration is a movement of _____.',['turning around an axis or center','moving in a straight line only','staying completely still'],'turning around an axis or center','gyration 指旋转或回旋。'],
    [1,'collocation','搭配','The dancer made a slow _____ before stopping.',['gyration','guardian','guideline'],'gyration','make a gyration 描述一次旋转动作。'],
    [1,'word family','词形','The verb meaning “to rotate” is _____.',['gyrate','gyration','gyratorily'],'gyrate','gyrate 是相关动词。'],
    [1,'register','语域','In everyday conversation, a simpler substitute for gyration is often _____.',['spin','guild','guilt'],'spin','spin 更口语、常见。']
  ]});

  put('gyre', {domain:'海洋科学',example:'Plastic fragments collected in the gyre had drifted for years.',exampleZh:'在环流区采集到的塑料碎片已经漂流多年。',scene:'Oceanographers tracked how the current gyred around the center of the basin.',sceneZh:'海洋学家追踪洋流如何围绕海盆中心旋转。',rationale:'gyre 可指大尺度环流或漩涡，也可作动词表示旋转。',cs:2,me:'grammar',wrong:'The current gyre around the basin yesterday.',right:'The current gyred around the basin yesterday.',reason:'叙述过去动作时，动词 gyre 的过去式为 gyred。',q:[
    [1,'meaning','专业义','An ocean gyre is a large system of _____.',['rotating currents','mountain caves','legal guardians'],'rotating currents','gyre 可指大尺度海洋环流。'],
    [1,'meaning','词义','In general use, a gyre can be a _____.',['whirlpool or circular movement','guesthouse','protective glove'],'whirlpool or circular movement','gyre 也可指旋涡或回旋。'],
    [2,'grammar','动词义','In “The water gyred around the drain,” gyred means it _____.',['rotated in a circle','froze instantly','became a mineral'],'rotated in a circle','gyre 可作动词表示盘旋、旋转。'],
    [1,'distinction','辨析','A gyre involves circular motion; a straight current moves _____.',['in one general direction','around a center','in repeated loops'],'in one general direction','直线流动与环流的方向不同。']
  ]});

  put('habit', {domain:'生活',example:'She has a habit of reviewing her notes before breakfast.',exampleZh:'她有早餐前复习笔记的习惯。',scene:'The counselor helped him recognize when a habit had become difficult to control.',sceneZh:'咨询师帮助他识别某种习惯何时变得难以控制。',rationale:'habit 可指惯常做法、难以控制的癖好，也可指宗教服饰。',me:'grammar',wrong:'He has a habit to check the door twice.',right:'He has a habit of checking the door twice.',reason:'表示做某事的习惯，常用 a habit of + 动名词。',q:[
    [1,'meaning','词义','A habit of reading before bed is a repeated _____.',['action or practice','legal decision','protective garment'],'action or practice','habit 的常见义是习惯、惯常做法。'],
    [2,'meaning','引申义','A gambling habit that someone cannot control is a _____.',['compulsive dependence','travel guide','professional guild'],'compulsive dependence','habit 也可指难以控制的癖好或瘾。'],
    [3,'meaning','历史用法','A monk’s habit is a type of _____.',['religious clothing','daily routine','medical specialty'],'religious clothing','habit 还可指修士或修女的道服。'],
    [1,'collocation','搭配','He has a habit _____ checking the lock twice.',['of','at','into'],'of','常说 have a habit of doing something。']
  ]});

  put('habitable', {domain:'建筑',example:'After repairs, the cottage was warm and habitable through the winter.',exampleZh:'修缮后，这间小屋整个冬天都温暖宜居。',scene:'Inspectors found the basement habitable once the ventilation system was replaced.',sceneZh:'更换通风系统后，检查人员认定地下室可以居住。',rationale:'habitable 表示环境适合居住，不只是有人住在里面。',me:'grammar',wrong:'The two rooms is habitable after the repair.',right:'The two rooms are habitable after the repair.',reason:'复数主语 rooms 应搭配 are。',origin:'由 inhabit 的词干与 -able 构成，表示适合居住。',q:[
    [1,'meaning','词义','A habitable house is one that is _____.',['suitable for people to live in','already sold','used only as a gym'],'suitable for people to live in','habitable 表示适宜居住的。'],
    [1,'collocation','搭配','The inspectors declared the repaired apartment _____.',['habitable','gullibly','gush'],'habitable','declare a place habitable 是自然表达。'],
    [1,'word formation','构词','The suffix -able in habitable contributes the sense “_____.',['can be lived in','without a home','a person who lives there'],'can be lived in','-able 表示能够或适合被做某事。'],
    [1,'distinction','辨析','A habitable room is fit to live in; an uninhabitable room is _____.',['unsafe or unsuitable for living','already furnished','larger than average'],'unsafe or unsuitable for living','uninhabitable 与 habitable 相反。']
  ]});

  put('habitat', {domain:'生态',example:'The wetland is a habitat for several rare amphibians.',exampleZh:'这片湿地是几种稀有两栖动物的栖息地。',scene:'The report describes the mountain habitat where the researchers found the plant.',sceneZh:'报告介绍了研究人员发现这种植物的山地生境。',rationale:'habitat 可指动植物栖息地，也可指人的居住环境。',cs:2,me:'grammar',wrong:'The frog habitat are shrinking each year.',right:'The frog habitat is shrinking each year.',reason:'这里主语是单数 habitat，谓语应为 is。',q:[
    [1,'meaning','词义','A marsh can be the habitat of a frog because it is the frog’s _____.',['natural home','protective helmet','travel guide'],'natural home','habitat 的主要义项是动植物的栖息地。'],
    [2,'meaning','词义','A person’s urban habitat refers to their _____.',['living environment','legal guardian','medical specialty'],'living environment','habitat 也可引申指人的居住环境。'],
    [1,'collocation','搭配','Road construction can destroy the animals’ natural _____.',['habitat','guile','gymnastics'],'habitat','natural habitat 是常见搭配。'],
    [1,'distinction','辨析','A habitat is where a species lives; a habit is _____.',['a repeated behavior','a physical location','a species'],'a repeated behavior','habitat 指生境，habit 指习惯。']
  ]});

  put('habitation', {domain:'住房',example:'The island has no permanent habitation during the winter months.',exampleZh:'冬季几个月里，这座岛上没有长期居住人口。',scene:'The cave shows signs of human habitation dating back thousands of years.',sceneZh:'洞穴中有数千年前人类居住的痕迹。',rationale:'habitation 可指居住行为或有人居住的地方，语体较正式。',me:'grammar',wrong:'The island has no permanent habitations during winter, so nobody live there.',right:'The island has no permanent habitation during winter, so nobody lives there.',reason:'此处泛指居住状态，用不可数 habitation；nobody 作单数主语用 lives。',q:[
    [1,'meaning','词义','The habitation of a place is the state of it being _____.',['occupied as a home','used as a gym','guarded by a guild'],'occupied as a home','habitation 可指居住这一状态或行为。'],
    [2,'meaning','词义','An isolated habitation in the forest is a _____.',['dwelling or settlement','legal guideline','sea bird'],'dwelling or settlement','habitation 也可指住所或居住点。'],
    [1,'register','语域','Which word is more common in everyday speech than habitation?',['living','gyration','guile'],'living','habitation 较正式，日常常用 living 或 home。'],
    [1,'collocation','搭配','Archaeologists found signs of human _____.',['habitation','guinea','gust'],'habitation','human habitation 是考古语境中的常见搭配。']
  ]});

  put('habitu', {domain:'旧式用语',example:'The village’s old habitu was to gather by the mill before sunrise on market days.',exampleZh:'这个村子旧时的惯例是在集市日天亮前到磨坊旁集合。',scene:'The local history describes the same habitu of meeting before sunrise, a custom residents say continued for generations.',sceneZh:'地方史记载了天亮前集合的同一惯例，居民说这一习俗延续了几代人。',rationale:'原词条收录 habitu 为罕见、较旧的名词，义近 habit/custom；本例按原词库释义使用，不把它说成现代常用词。',me:'grammar',wrong:'They kept a habitu of meeting before sunrise.',right:'They kept the habitu of meeting before sunrise.',reason:'原词库将 habitu 标为不可数名词，因此这里不应加不定冠词 a。',q:[
    [1,'meaning','词义','The old record says the village followed the same habitu each market day. What does habitu mean here?',['a customary way of doing things','a payment made at the market','a person who sells flour'],'a customary way of doing things','本词库释义为惯例或习惯，语体罕见、较旧。'],
    [1,'grammar','冠词','Choose the form matching the source entry’s uncountable label: “They followed ___ habitu.”',['the','a','many'],'the','该词条按不可数名词收录，用 the habitu，不用 a habitu。'],
    [1,'register','语域','How should a learner treat habitu in present-day writing?',['As a rare or dated word; prefer habit in ordinary use','As the usual everyday replacement for habit','As a standard verb meaning to train'],'As a rare or dated word; prefer habit in ordinary use','源词条标注其罕见，日常表达通常用 habit。'],
    [1,'distinction','辨析','In “the old habitu of gathering before dawn,” the word most nearly means:',['custom','address','harvest'],'custom','这里的语境是反复遵循的做法，不是地点或收成。']
  ]});

  put('habitual', {domain:'行为',example:'The habitual smoker asked the clinic for help quitting.',exampleZh:'那位有长期吸烟习惯的人向诊所寻求戒烟帮助。',scene:'She took her habitual seat near the window before the lecture began.',sceneZh:'讲座开始前，她坐到了自己惯常坐的窗边座位。',rationale:'habitual 表示反复发生或成为习惯的，可修饰行为、做法或位置。',me:'grammar',wrong:'He is a habitual arrive late for meetings.',right:'He is habitually late for meetings.',reason:'此处需要副词修饰形容词 late；habitual 是形容词。',q:[
    [1,'meaning','词义','A habitual action is one that is _____.',['done regularly','done only once','kept secret by law'],'done regularly','habitual 表示习惯性的、经常发生的。'],
    [1,'collocation','搭配','She returned to her _____ seat at the back of the room.',['habitual','habituate','habitation'],'habitual','habitual seat 指惯常坐的位置。'],
    [1,'grammar','词性','Choose the adjective: “He is a _____ visitor.”',['habitual','habitually','habituation'],'habitual','名词 visitor 前用形容词 habitual。'],
    [1,'distinction','辨析','Habitual describes a repeated pattern; occasional means _____.',['happening sometimes, not regularly','happening every day','impossible to change'],'happening sometimes, not regularly','occasional 与 habitual 的频率含义不同。']
  ]});

  put('habitually', {domain:'行为',example:'The river habitually floods the lower path after several days of rain.',exampleZh:'连下几天雨后，这条河常常会淹没较低的步道。',scene:'He habitually checked the door twice before leaving home.',sceneZh:'他离家前习惯性地检查两遍门锁。',rationale:'habitually 是副词，描述反复发生或由习惯造成的行为。',me:'grammar',wrong:'She habitually arrive before the office opens.',right:'She habitually arrives before the office opens.',reason:'单数主语 she 的一般现在时谓语应为 arrives。',origin:'由 habitual 加副词后缀 -ly 构成。',q:[
    [1,'meaning','词义','If someone habitually checks a lock twice, they do it _____.',['as a repeated habit','only by accident once','under legal instruction'],'as a repeated habit','habitually 表示习惯性地、经常地。'],
    [1,'grammar','词性','In “They habitually arrive early,” habitually modifies _____.',['arrive','they','early'],'arrive','副词 habitually 修饰动词 arrive。'],
    [2,'meaning','辨析','If a person acts habitually from a settled tendency, the behavior is _____.',['characteristic of their established habits','a single unusual accident','a legal status'],'characteristic of their established habits','第二义项强调由习性形成的惯常行为。'],
    [1,'word family','词形','Which form is the adverb corresponding to habitual?',['habitually','habitualness','habitable'],'habitually','副词形式为 habitually。']
  ]});

  put('habituate', {domain:'动物行为',example:'The keepers gradually habituated the rescued fox to the sound of nearby traffic.',exampleZh:'饲养员逐步让获救的狐狸适应附近的交通噪声。',scene:'Researchers habituated the birds to the observation screen before recording their behavior.',sceneZh:'记录鸟类行为前，研究人员先让它们适应观察屏幕。',rationale:'habituate someone or something to something 表示使逐渐习惯。',me:'collocation',wrong:'The keepers habituated the fox with traffic noise.',right:'The keepers habituated the fox to traffic noise.',reason:'常见结构为 habituate someone to something。',origin:'由 habit 加动词后缀 -uate 构成；此处只说明透明词形关系。',q:[
    [1,'meaning','词义','To habituate a rescued animal to people is to help it _____.',['become accustomed to their presence','avoid all food','learn a new species name'],'become accustomed to their presence','habituate someone to something 表示使逐渐习惯。'],
    [1,'collocation','搭配','The trainer habituated the puppy _____ the carrier.',['to','with','at'],'to','habituate 常与 to 连用。'],
    [1,'grammar','结构','Choose the correct infinitive phrase: They worked to habituate the birds _____ human voices.',['to','for','by'],'to','标准结构是 habituate the birds to human voices。'],
    [1,'distinction','辨析','Habituate means to make someone accustomed; hesitate means to _____.',['pause before acting','become used to a sound','give someone guidance'],'pause before acting','habituate 与 hesitate 词形近似但意思不同。']
  ]});

  put('habituation', {domain:'行为科学',example:'After a week of habituation, the lab mice no longer reacted to the quiet background hum.',exampleZh:'经过一周的习惯化后，实验鼠不再对轻微的背景嗡鸣作出反应。',scene:'The study measured habituation by tracking how often the animals turned toward the repeated sound.',sceneZh:'研究通过记录动物转向重复声音的次数来测量习惯化。',rationale:'habituation 是对反复刺激逐渐习惯、反应减弱的过程。',me:'grammar',wrong:'The mice showed a habituation to the harmless repeated tone.',right:'The mice showed habituation to the harmless repeated tone.',reason:'此处泛指习惯化过程，通常不用不定冠词 a。',origin:'由 habituate 加名词后缀 -ation 构成。',q:[
    [1,'meaning','词义','In behavioral science, habituation is a gradual reduction in response after _____.',['repeated exposure to a stimulus','one unexpected injury','a change of species'],'repeated exposure to a stimulus','habituation 指对重复刺激逐渐习惯。'],
    [1,'context','语境','A mouse stops turning toward a harmless repeated tone. This may show _____.',['habituation','guardianship','gyration'],'habituation','对无害重复声音反应减弱，是习惯化的例子。'],
    [1,'word family','词形','The verb meaning “make used to” is _____.',['habituate','habitation','habitual'],'habituate','habituate 是相关动词。'],
    [1,'grammar','可数性','Choose the standard research phrase.',['habituation to a repeated sound','a habituation to a repeated sound','many habituation'],'habituation to a repeated sound','habituation 通常作不可数过程名词。']
  ]});

  put('hacienda', {domain:'拉美历史',example:'The former hacienda now houses a small museum about the region’s sugar trade.',exampleZh:'这座旧庄园如今是一间介绍当地糖业贸易的小型博物馆。',scene:'Visitors walked through the hacienda’s central courtyard before touring the estate.',sceneZh:'游客先穿过庄园主宅的中央庭院，再参观整片庄园。',rationale:'hacienda 可指大型庄园，也可特指庄园主宅。',cs:2,me:'grammar',wrong:'The hacienda were built around a central courtyard.',right:'The hacienda was built around a central courtyard.',reason:'单数主语 hacienda 与 was 搭配。',origin:'英语借自西班牙语 hacienda；不将借词拆作英语词根。',q:[
    [1,'meaning','词义','A historic hacienda in Latin America was often a large _____.',['estate','gymnasium','guideline'],'estate','hacienda 常指大型地产或庄园。'],
    [2,'meaning','词义','In a description of an estate, the hacienda may mean the _____.',['main manor house','workers’ guidebook','mountain gully'],'main manor house','该词也可特指庄园主宅。'],
    [1,'origin','语源','Hacienda entered English from _____.',['Spanish','Old Norse','Japanese'],'Spanish','这是从西班牙语借入的词。'],
    [1,'context','语境','A former hacienda that grew sugar would most likely be connected with _____.',['a large agricultural estate','a fitness class','a coastal bird'],'a large agricultural estate','庄园常与大规模农业生产相关。']
  ]});

  put('hack', {domain:'科技与写作',example:'The journalist’s report exposed how a hacker had tried to hack the city’s public website.',exampleZh:'记者的报道揭露了黑客曾试图入侵市政公共网站。',scene:'The gardener used a small tool to hack away the dead stems, then hired a hack to drive the visitors home.',sceneZh:'园丁用小工具砍掉枯茎，之后雇了一辆出租车送访客回家。',rationale:'hack 有粗砍、入侵系统、开出租车等动词义，也有砍击和蹩脚写作者等名词义。',cs:2,me:'grammar',wrong:'The journalist reported that someone hack the website last night.',right:'The journalist reported that someone hacked the website last night.',reason:'last night 表示过去时间，动词用 hacked。',q:[
    [1,'meaning','动词义','To hack through a thick branch with a tool is to _____.',['cut it roughly with repeated blows','measure it carefully','guide it through a hole'],'cut it roughly with repeated blows','hack 的一义是粗砍或劈。'],
    [2,'meaning','动词义','In a cybersecurity report, to hack a website without permission is to _____.',['gain unauthorized access','write a printed guide','protect its users'],'gain unauthorized access','此处 hack 指未经授权侵入计算机系统。'],
    [3,'meaning','动词义','In older British usage, to hack for a living could mean to _____.',['work as a taxi driver','write safety guidelines','repair a guitar'],'work as a taxi driver','hack 还有较旧的“开出租车”用法。'],
    [5,'meaning','名词义','A hack writing routine articles for money may be a _____.',['poor or unoriginal writer','security guard','guitarist'],'poor or unoriginal writer','名词 hack 可贬义指平庸或受雇写手。']
  ]});

  put('hacker', {domain:'网络安全',example:'The security team thanked the hacker for reporting the flaw through its disclosure program.',exampleZh:'安全团队感谢这名黑客通过漏洞披露计划报告了缺陷。',scene:'A responsible hacker tests only systems covered by written authorization.',sceneZh:'负责任的安全研究人员只测试获得书面授权的系统。',rationale:'hacker 可泛指计算机高手，也常指未经许可侵入系统者；语境决定褒贬。',me:'grammar',wrong:'The hacker report the flaw to the company last week.',right:'The hacker reported the flaw to the company last week.',reason:'last week 指过去时间，report 应改为 reported。',origin:'由动词 hack 加表示人的后缀 -er 构成。',q:[
    [1,'meaning','词义','A hacker is a person with advanced computer skills who may _____.',['explore or gain access to computer systems','repair only gym equipment','guide a tour group'],'explore or gain access to computer systems','hacker 指计算机技术人员，常与系统访问相关。'],
    [1,'context','语境','A security team thanks a hacker who reports a flaw under written authorization. This is an example of _____.',['responsible security research','a guesthouse booking','a weather warning'],'responsible security research','授权与负责任披露使此处的 hacker 不必然带犯罪含义。'],
    [1,'word formation','构词','The suffix -er in hacker identifies _____.',['a person who hacks','a place to live','a repeated habit'],'a person who hacks','-er 常构成表示执行动作的人的名词。'],
    [1,'usage','语用','Why does “hacker” not always mean a criminal?',['It can also describe skilled or authorized security researchers.','It only means a taxi driver.','It is another word for guardian.'],'It can also describe skilled or authorized security researchers.','词语褒贬需结合是否授权及上下文判断。']
  ]});

  put('hackneyed', {domain:'写作',example:'The reviewer rejected the hackneyed ending in which the hero wakes from a dream.',exampleZh:'评论者否定了主人公从梦中醒来的老套结尾。',scene:'She replaced the hackneyed phrase with a specific detail from the interview.',sceneZh:'她把陈腐的套话换成了采访中的具体细节。',rationale:'hackneyed 常批评被用滥、缺乏新意的表达或情节。',me:'grammar',wrong:'The speech relied on hackney phrase that everyone had heard before.',right:'The speech relied on a hackneyed phrase that everyone had heard before.',reason:'需要形容词 hackneyed 修饰 phrase，并补上单数名词所需的冠词。',q:[
    [1,'meaning','词义','A hackneyed expression is one that has been _____.',['used so often that it feels unoriginal','carefully verified','kept secret'],'used so often that it feels unoriginal','hackneyed 表示陈腐、老套。'],
    [1,'collocation','搭配','The editor removed a _____ plot twist.',['hackneyed','habitable','gusty'],'hackneyed','hackneyed 常修饰 idea、phrase 或 plot。'],
    [1,'grammar','词性','The ending felt _____.',['hackneyed','hackney','hackneying'],'hackneyed','felt 后接形容词 hackneyed。'],
    [1,'distinction','辨析','A hackneyed idea has been used too often; an original idea is _____.',['fresh and new','habitual','gullible'],'fresh and new','original 与 hackneyed 在新颖性上相对。']
  ]});

  put('had better', {domain:'日常建议',example:'You had better save a copy before updating the operating system.',exampleZh:'更新操作系统前，你最好先保存一份副本。',scene:'We had better leave now if we want to catch the last ferry.',sceneZh:'如果想赶上末班渡船，我们最好现在出发。',rationale:'had better + 动词原形；常带紧迫感或不照做可能有后果的意味。',me:'grammar',wrong:'You had better to save the file before restarting.',right:'You had better save the file before restarting.',reason:'had better 后接动词原形，不加 to。',q:[
    [1,'grammar','结构','You had better _____ a backup before the update.',['make','to make','making'],'make','had better 后接动词原形。'],
    [1,'negative','否定','The warning is “You had better _____ touch that wire.”',['not','don’t','to not'],'not','否定形式为 had better not + 动词原形。'],
    [1,'meaning','语气','“We had better leave now” most naturally expresses _____.',['advice with some urgency','a completed past habit','a legal guarantee'],'advice with some urgency','had better 常表示紧迫建议或警告。'],
    [1,'tense','时间','Despite had, this expression usually concerns _____.',['present or future advice','only past events','a finished routine'],'present or future advice','had better 中的 had 不表示过去时。']
  ]});

  put('haft', {domain:'工具',example:'The conservator repaired the cracked haft of the ceremonial axe.',exampleZh:'修复人员修好了礼仪斧开裂的斧柄。',scene:'A craftsperson hafted the blade with a smooth ash-wood handle.',sceneZh:'工匠给刀刃装上了光滑的白蜡木刀柄。',rationale:'haft 多作名词指刀斧的柄；也有少见动词义“给工具装柄”。',cs:2,me:'meaning',wrong:'The worker grasped the haft, the sharp cutting edge of the knife.',right:'The worker grasped the blade, the sharp cutting edge of the knife.',reason:'haft 是供握持的柄；锋利的切割部分是 blade。',q:[
    [1,'meaning','词义','The haft of an axe is its _____.',['handle or shaft','cutting edge','protective helmet'],'handle or shaft','haft 指工具供握持的柄。'],
    [2,'meaning','动词义','To haft a knife is to _____.',['fit it with a handle','sharpen the blade','remove its guard'],'fit it with a handle','haft 可作动词，表示给工具装上柄。'],
    [1,'distinction','辨析','A worker holds the haft; the blade _____.',['does the cutting','stores the powder','guides the boat'],'does the cutting','haft 与 blade 分别是柄和刃。'],
    [1,'register','语域','In everyday instructions, which word is more common than haft?',['handle','gyration','guile'],'handle','handle 是日常更常见的柄、把手一词。']
  ]});

  put('haggle', {domain:'购物',example:'They haggled over the price of the used bicycle until both sides agreed.',exampleZh:'双方围绕二手自行车的价格讨价还价，直到达成一致。',scene:'The contract records several days of haggling over delivery dates and repair costs.',sceneZh:'合同记录了双方就交货日期和维修费用进行了数日磋商。',rationale:'haggle 可指讨价还价、争执条款，也可作名词指议价过程。',me:'collocation',wrong:'The buyer haggled the seller for a lower price.',right:'The buyer haggled with the seller for a lower price.',reason:'表示与某人讨价还价，通常说 haggle with someone。',q:[
    [1,'meaning','词义','To haggle over a price is to _____.',['bargain about it','pay it without discussion','write it in a guidebook'],'bargain about it','haggle 的常见动词义是讨价还价。'],
    [2,'meaning','词义','The two sides haggled over the contract terms. They _____.',['argued during negotiation','agreed without discussion','canceled the meeting'],'argued during negotiation','haggle 也可表示围绕条款争论或磋商。'],
    [3,'meaning','名词义','“After a long haggle, they agreed” means after a long _____.',['period of bargaining','walk through a gully','gym class'],'period of bargaining','名词 haggle 可指议价过程。'],
    [1,'collocation','搭配','She haggled _____ the shopkeeper over the price.',['with','at','to'],'with','haggle with someone over something。']
  ]});

  put('hail', {domain:'天气与新闻',example:'Hail damaged the greenhouse roof during the brief afternoon storm.',exampleZh:'午后短暂的风暴中，冰雹损坏了温室屋顶。',scene:'The crowd hailed the returning team as heroes when its bus reached the square.',sceneZh:'球队大巴抵达广场时，人群高呼他们是英雄。',rationale:'hail 可指冰雹、招呼或拦车、称赞，也可用于 hail from 表示来自。',cs:3,me:'grammar',wrong:'The fans hailed the team for heroes after the final.',right:'The fans hailed the team as heroes after the final.',reason:'表示称某人为某种身份，常用 hail someone as something。',q:[
    [1,'meaning','词义','Hail that falls from a storm consists of frozen _____.',['balls of ice','drops of oil','pieces of cotton'],'balls of ice','hail 作名词可指冰雹。'],
    [2,'meaning','搭配','She stepped to the curb to hail a taxi. She tried to _____.',['signal for the taxi to stop','praise the taxi as a hero','check the weather'],'signal for the taxi to stop','hail a taxi 表示招手叫车。'],
    [3,'collocation','搭配','The crowd hailed the athlete _____ a champion.',['as','for','by'],'as','hail someone as + 身份，表示称赞或誉为。'],
    [4,'meaning','用法','A singer who hails from Lagos _____.',['comes from Lagos','is praised by Lagos','calls a taxi there'],'comes from Lagos','hail from 表示来自某地。']
  ]});

  put('hailstorm', {domain:'天气',example:'A hailstorm shattered several skylights above the school library.',exampleZh:'一场冰雹暴打碎了学校图书馆上方几扇天窗。',scene:'Farmers moved young plants indoors after a hailstorm warning appeared on the radio.',sceneZh:'收音机播出冰雹暴预警后，农民把幼苗搬进了室内。',rationale:'hailstorm 是伴有冰雹的风暴，属于可数名词。',me:'grammar',wrong:'Two severe hailstorm damaged the crops overnight.',right:'Two severe hailstorms damaged the crops overnight.',reason:'two 后接复数 hailstorms。',origin:'由 hail 与 storm 构成透明复合词，中心词 storm。',q:[
    [1,'meaning','词义','A hailstorm is a storm that produces _____.',['hailstones','sea currents','strong praise'],'hailstones','hailstorm 指伴有冰雹的风暴。'],
    [1,'word formation','构词','The head of the compound hailstorm is _____.',['storm','hail','neither word'],'storm','复合词中心词 storm 表明它是一种风暴。'],
    [1,'grammar','复数','Several damaging _____ crossed the valley.',['hailstorms','hailstormes','hailstorm’s'],'hailstorms','hailstorm 的复数加 -s。'],
    [1,'distinction','辨析','A hailstorm is the weather event; hail is _____.',['the frozen precipitation itself','a type of guesthouse','the sound of a guitar'],'the frozen precipitation itself','hailstorm 指风暴事件，hail 指冰雹。']
  ]});

  put('hair', {domain:'身体与生物',example:'Her hair curled slightly in the sea air.',exampleZh:'她的头发在海风中微微卷曲。',scene:'The biologist found a single white hair caught on the animal’s collar.',sceneZh:'生物学家发现项圈上卡着一根白色的毛。',rationale:'hair 通常作不可数名词指头发整体；单根或动物毛发可用可数形式。',cs:3,me:'grammar',wrong:'She has long hairs that reaches her shoulders.',right:'She has long hair that reaches her shoulders.',reason:'指头发整体时 hair 通常不可数；整体作单数主语用 reaches。',q:[
    [1,'meaning','词义','“She has curly hair” refers to _____.',['the hair on her head as a whole','one strand only','a haircut appointment'],'the hair on her head as a whole','hair 指人的头发整体时通常不可数。'],
    [2,'meaning','词义','A white hair on an animal’s collar is one _____.',['strand or piece of fur','haircut','gymnasium'],'strand or piece of fur','hair 也可指动物毛或单根毛发。'],
    [3,'meaning','词义','“I had not a hair of doubt” uses hair to mean _____.',['a very small amount','a hairstyle','a protective covering'],'a very small amount','hair 可在固定表达中比喻极少量。'],
    [1,'grammar','数量','The brush had one _____ caught in it.',['hair','hairs','hairy'],'hair','one 后用单数 hair，指一根头发。']
  ]});

  put('hairbreadth', {domain:'体育报道',example:'The cyclist missed the fallen branch by a hairbreadth.',exampleZh:'骑车人差一点就撞上倒下的树枝。',scene:'The team won the final by a hairbreadth after a photo finish.',sceneZh:'照片判定后，这支队伍以极微弱优势赢得决赛。',rationale:'hairbreadth 指极小的距离或差距，常用 by a hairbreadth。',me:'collocation',wrong:'The runner won with a hairbreadth after a close finish.',right:'The runner won by a hairbreadth after a close finish.',reason:'固定说法通常为 win by a hairbreadth。',origin:'由 hair 与 breadth 构成，字面意象是一根头发的宽度。',q:[
    [1,'meaning','词义','Winning by a hairbreadth means winning _____.',['by an extremely small margin','by a very wide lead','after a long delay'],'by an extremely small margin','hairbreadth 比喻极小差距。'],
    [1,'collocation','搭配','The car passed the wall _____ a hairbreadth.',['by','with','on'],'by','常用搭配为 by a hairbreadth。'],
    [1,'word formation','构词','The literal image in hairbreadth is the width of a _____.',['single hair','road','wave'],'single hair','hair + breadth 表示极小宽度。'],
    [1,'context','语境','A hairbreadth escape is one in which someone _____.',['narrowly avoids danger','gets a new hairstyle','travels a long distance'],'narrowly avoids danger','该词也可形容险些出事或险胜。']
  ]});

  put('haircut', {domain:'生活',example:'I asked for a short haircut that would still fit beneath my cycling helmet.',exampleZh:'我要求剪一种仍能戴进骑行头盔里的短发型。',scene:'She showed the hairdresser a photo of the haircut she wanted.',sceneZh:'她给理发师看了自己想要的发型照片。',rationale:'haircut 可指剪发这件事，也可指剪成后的发式。',cs:2,me:'grammar',wrong:'He went to the salon for cut his hair.',right:'He went to the salon for a haircut.',reason:'此处 for 后需要名词 haircut；也可说 to get his hair cut。',q:[
    [1,'meaning','词义','“I need a haircut” most often means I need _____.',['my hair cut','a hairbrush','a hat fitted'],'my hair cut','haircut 可指理发这件事。'],
    [2,'meaning','词义','A short layered haircut describes the person’s _____.',['hairstyle','appointment time','hairdresser'],'hairstyle','haircut 也可指剪成后的发式。'],
    [1,'collocation','搭配','She decided to get a _____ before the wedding.',['haircut','haircuttinged','hairdresser'],'haircut','常说 get a haircut。'],
    [1,'grammar','构词','The compound haircut combines hair and _____.',['cut','coat','curl'],'cut','haircut 是 hair + cut 的复合词。']
  ]});

  put('hairdo', {domain:'时尚',example:'Her elaborate hairdo stayed in place throughout the outdoor ceremony.',exampleZh:'她精心做的发型在整个户外仪式期间都保持原样。',scene:'The actor arrived in a towering hairdo designed for the period drama.',sceneZh:'演员顶着为年代剧设计的高耸发型到场。',rationale:'hairdo 是偏口语的发型一词，复数通常写 hairdos。',me:'grammar',wrong:'The stylist recommended two new hairdoes for the show.',right:'The stylist recommended two new hairdos for the show.',reason:'hairdo 的常规复数是 hairdos，不是 hairdoes。',origin:'hair 与口语名词 do（发型、造型）构成复合词。',q:[
    [1,'meaning','词义','A hairdo is a person’s _____.',['arranged hairstyle','natural hair color','hairbrush'],'arranged hairstyle','hairdo 指做好的发型或发式。'],
    [1,'register','语域','Which term is more neutral and common in formal descriptions?',['hairstyle','hairdo only','gullet'],'hairstyle','hairstyle 比较中性，hairdo 较口语。'],
    [1,'grammar','复数','The performers wore elaborate _____.',['hairdos','hairdo’s','hairdoes'],'hairdos','hairdo 的复数通常加 -s。'],
    [1,'context','语境','A towering hairdo is most likely discussed in a story about _____.',['costume and styling','soil treatment','legal supervision'],'costume and styling','hairdo 属于发型与造型语境。']
  ]});

  put('hairdresser', {domain:'服务行业',example:'The hairdresser trimmed only the ends so the client could keep her length.',exampleZh:'美发师只修剪了发梢，让顾客保留原来的长度。',scene:'My hairdresser suggested a softer fringe that would grow out evenly.',sceneZh:'我的美发师建议剪一种长出来也比较均匀的柔和刘海。',rationale:'hairdresser 指以修剪或造型头发为职业的人。',me:'grammar',wrong:'The hairdresser cutted my fringe yesterday.',right:'The hairdresser cut my fringe yesterday.',reason:'cut 的过去式仍是 cut，不加 -ed。',origin:'由 hair 与 dresser 构成，dresser 在此与整理、打理有关。',q:[
    [1,'meaning','词义','A hairdresser works mainly with _____.',['people’s hair','legal contracts','weather forecasts'],'people’s hair','hairdresser 指理发师或美发师。'],
    [1,'collocation','搭配','She booked an appointment _____ her hairdresser.',['with','between','under'],'with','book an appointment with someone。'],
    [1,'grammar','过去式','The hairdresser _____ my hair yesterday.',['cut','cutted','cutting'],'cut','cut 的过去式与原形同形。'],
    [1,'distinction','辨析','A hairdresser may style hair; a barber traditionally often focuses on _____.',['cutting men’s hair and shaving','treating soil with gypsum','guiding a tour'],'cutting men’s hair and shaving','barber 的传统工作更偏理发和剃须。']
  ]});

  put('hairlike', {domain:'生物',example:'Under the microscope, the fungus showed hairlike filaments along its edge.',exampleZh:'显微镜下，真菌边缘呈现出毛发状细丝。',scene:'The plant’s hairlike roots spread through the damp soil.',sceneZh:'这种植物毛发状的根系伸展在潮湿土壤中。',rationale:'hairlike 是形容词，表示外形细长、类似毛发，不表示材质就是头发。',me:'grammar',wrong:'The synthetic fibers were made from real hairlike.',right:'The synthetic fibers were made to look hairlike.',reason:'hairlike 是形容词，需修饰名词或作表语，不能直接当名词。',origin:'由 hair 加 -like 构成，表示类似……的。',q:[
    [1,'meaning','词义','Hairlike fibers resemble _____.',['strands of hair','a haircut appointment','a sea current'],'strands of hair','-like 表示外观或性质相似。'],
    [1,'word formation','构词','The suffix -like in hairlike means _____.',['resembling or having the character of','without','a person who does'],'resembling or having the character of','-like 表示“像……的”。'],
    [1,'grammar','词性','The microscope showed _____ structures.',['hairlike','hair','hairdresser'],'hairlike','名词 structures 前需要形容词。'],
    [1,'distinction','辨析','Hairlike roots look like strands of hair but need not be made of _____.',['human hair','soil','water'],'human hair','hairlike 表示形状相似，不表示材质相同。']
  ]});

  put('hairy', {domain:'户外生活',example:'The hairy caterpillar stayed on the leaf while a bird searched nearby.',exampleZh:'长毛毛虫留在叶子上，鸟在附近寻找。',scene:'Crossing the icy roof was a hairy job, so the crew used a safety line.',sceneZh:'跨过结冰的屋顶很危险，因此工作人员系上了安全绳。',rationale:'hairy 可字面形容多毛，也可在口语中形容危险或棘手。',cs:2,me:'grammar',wrong:'The crew faced a hairy on the icy roof.',right:'The crew faced a hairy job on the icy roof.',reason:'hairy 是形容词，需修饰名词 job。',q:[
    [1,'meaning','词义','A hairy caterpillar is _____.',['covered with hairlike bristles','a legal guardian','a type of sea bay'],'covered with hairlike bristles','hairy 的字面义是多毛的。'],
    [2,'meaning','口语义','“That was a hairy landing” means the landing was _____.',['dangerous or difficult','covered in fur','a routine haircut'],'dangerous or difficult','口语中 hairy 可表示惊险或棘手。'],
    [1,'grammar','词性','It was a _____ climb down the icy cliff.',['hairy','hair','hairily'],'hairy','名词 climb 前用形容词 hairy。'],
    [2,'distinction','辨析','Hairy can describe a risky situation; hairlike describes _____.',['an appearance resembling strands of hair','a medical appointment','a person’s habit'],'an appearance resembling strands of hair','hairlike 描述形状相似，不表示危险。']
  ]});

  put('halcyon', {domain:'回忆',example:'She remembered the halcyon summers when the whole family stayed by the lake.',exampleZh:'她怀念全家都住在湖边的那些宁静美好夏日。',scene:'The memoir recalls the halcyon years before the factory closed.',sceneZh:'回忆录追述了工厂关闭前那段宁静美好的岁月。',rationale:'halcyon 多作文学性形容词，修饰 days、years 或 period；另有翠鸟相关的神话名词义。',cs:2,me:'meaning',wrong:'The halcyon were nesting beside the lake in the myth.',right:'The halcyon was nesting beside the lake in the myth.',reason:'此处用 halcyon 指一只翠鸟，单数主语应搭配 was。',q:[
    [1,'meaning','词义','Halcyon days are remembered as _____.',['peaceful and happy','stormy and dangerous','legally restricted'],'peaceful and happy','halcyon 常形容宁静幸福的时期。'],
    [1,'collocation','搭配','She looked back on the _____ years of her childhood.',['halcyon','gullible','gusty'],'halcyon','halcyon years 是常见文学搭配。'],
    [1,'register','语域','Halcyon in the sense “peaceful and happy” is especially common in _____.',['literary or reflective writing','technical passwords','shopping receipts'],'literary or reflective writing','该形容词义偏文学或回忆性表达。'],
    [2,'meaning','神话义','In Greek myth, the halcyon is associated with a _____.',['kingfisher','guardian angel','sea gulf'],'kingfisher','名词义与翠鸟及相关神话传说有关。']
  ]});

  put('hale', {domain:'健康',example:'At ninety, she remained hale enough to tend the garden every morning.',exampleZh:'九十岁时，她仍然很健壮，每天早上都能照料花园。',scene:'The biography portrays a hale farmer who continued walking the hills well into old age.',sceneZh:'传记描写了一位健壮的农民，他年老后仍常在山间行走。',rationale:'hale 作形容词表示健康强健，常见搭配是 hale and hearty；旧动词义表示拖走。',me:'meaning',wrong:'The hale patient was too weak to stand or walk.',right:'The frail patient was too weak to stand or walk.',reason:'hale 表示健壮，与 too weak 的描述矛盾；frail 表示虚弱。',q:[
    [1,'meaning','词义','A hale older person is _____.',['healthy and strong','easily deceived','legally appointed'],'healthy and strong','hale 指健康强健。'],
    [1,'collocation','搭配','The expression is “hale and _____.”',['hearty','hairy','guilty'],'hearty','固定搭配为 hale and hearty。'],
    [1,'grammar','词性','Despite his age, he remained _____.',['hale','halenessly','hailing'],'hale','remain 后可接形容词作表语。'],
    [2,'meaning','旧用法','In older writing, the verb hale may mean to _____.',['drag or force someone away','praise loudly','form a habit'],'drag or force someone away','这是较旧的动词义，现代日常很少用。']
  ]});
})(typeof window !== 'undefined' ? window : globalThis);
