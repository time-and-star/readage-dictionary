/* data/words/cet/author_f8.js · 手敲词条 F（八·尾批）：fume ~ fuzz（含短语 function word）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_f8.js 必须在 _cet_helper.js 之后加载');

  W('fume', 'verb/noun', '/fjuːm/', '', [], '冒烟；生气', 'To give off smoke, or to be angry.', [
    ['冒烟；生气', 'To give off smoke, or to be angry.', '冒出烟，或生气。', '可数（烟）或不及物动词：fume at。', 'He fumed at the delay.', '他为耽搁生闷气。', ['fume at'], ['rage'], 'verb/noun', 'null', '情感'],
  ], 'fumes~fumed~fumed~fuming', [], '拉丁 fumus（烟）——无库内派生根；近义 rage 怒火');

  W('fumes', 'noun', '/fjuːmz/', '', [], '烟雾（复数）', 'Strong-smelling smoke or gas; plural of fume.', [
    ['烟雾（复数）', 'Strong-smelling smoke or gas; plural of fume.', '气味刺鼻的烟或气；fume 的复数。', '复数：petrol fumes 汽油味。', 'The garage reeked of fumes.', '车库一股烟味。', ['petrol fumes'], ['smoke'], 'noun', 'countable', '健康'],
  ], '', ['smoke'], '←fume（本批新词、无等级）+ -s，故仍留空；家族 smoke 烟');

  W('function word', 'noun', '/ˈfʌŋkʃn wɜːd/', '', [], '功能词', 'A word with grammar use, like a preposition.', [
    ['功能词', 'A word with grammar use, like a preposition.', '起语法作用的词，如介词。', '可数，语法用语；相对 content word 实义词。', 'Is is a function word.', 'is 是功能词。', [], ['particle', 'preposition'], 'noun', 'countable', '语法'],
  ], '', ['particle', 'preposition'], 'function 功能 + word 词；近义 particle 小品词、preposition 介词。短语分级留空').phrase = true;

  W('funding', 'noun', '/ˈfʌndɪŋ/', 'B1', ['CET4'], '资金；拨款', 'Money given for a purpose.', [
    ['资金；拨款', 'Money given for a purpose.', '为某目的给的钱。', '不可数：raise funding。', 'The project needs funding.', '项目需要资金。', ['raise funding'], ['finance'], 'noun', 'uncountable', '商务'],
  ], '', ['finance'], '←fund B1 + -ing，B1 继承；家族 finance 财政');

  W('funds', 'noun', '/fʌndz/', 'B1', [], '资金（复数）', 'Money for spending; plural of fund.', [
    ['资金（复数）', 'Money for spending; plural of fund.', '花的钱；fund 的复数。', '复数。', 'The funds ran out.', '资金用完了。', [], ['capital', 'means', 'money', 'pocket', 'purse'], 'noun', 'countable', '商务'],
  ], '', ['capital', 'pocket'], '←fund B1 + -s，B1 继承；家族 capital 资本、pocket 腰包，近义 means 财力、money 钱、purse 钱包');

  W('fungus', 'noun', '/ˈfʌŋɡəs/', '', [], '真菌', 'A plant-like thing such as mould.', [
    ['真菌', 'A plant-like thing such as mould.', '霉菌一类的东西。', '可数，复数 fungi。', 'Mushrooms are fungi.', '蘑菇是真菌。', [], ['mold', 'mushroom'], 'noun', 'countable', '科学'],
  ], 'fungi', ['mold', 'mushroom'], '拉丁 fungus——无库内派生根；家族 mold 霉、mushroom 蘑菇');

  W('funny', 'adjective', '/ˈfʌni/', 'A1', ['CET4'], '好笑的；奇怪的', 'Making you laugh, or strange.', [
    ['好笑的；奇怪的', 'Making you laugh, or strange.', '逗笑的，或奇怪的。', 'a funny story 笑话。', 'He told a funny joke.', '他讲了个笑话。', [], ['comic'], 'adjective', '定语/表语', '情感'],
  ], '', ['comic'], '←fun A1 + -ny，A1 继承；家族 comic 滑稽的');

  W('furious', 'adjective', '/ˈfjʊəriəs/', 'C1', ['CET6'], '狂怒的', 'Very angry.', [
    ['狂怒的', 'Very angry.', '非常生气的。', 'be furious with/about。', 'She was furious with him.', '她对他大怒。', ['furious with'], ['angry', 'mad'], 'adjective', '定语/表语', '情感'],
  ], '', [], '←fury C1 狂怒 + -ous（y→ious，同 envious），C1 继承；近义 angry 生气的、mad 发疯的');

  W('furlough', 'noun/verb', '/ˈfɜːləʊ/', '', [], '休假；强制休假', 'Time off work, paid or not.', [
    ['休假；强制休假', 'Time off work, or unpaid leave.', '不上班的时间，或无薪假。', '可数或及物动词，美式。', 'Workers faced furlough.', '工人面临强制休假。', [], ['layoff'], 'noun/verb', 'null', '职业'],
  ], 'furloughs~furloughed~furloughed~furloughing', [], '荷兰语 verlof——无库内派生根；近义 layoff 解雇（裁员）。分级留空');

  W('furrow', 'noun/verb', '/ˈfʌrəʊ/', '', [], '犁沟；皱纹', 'A cut in soil, or a deep line.', [
    ['犁沟；皱纹', 'A cut in soil, or a deep line.', '土里的沟，或深纹。', '可数或及物动词。', 'The plough cut a furrow.', '犁开了一道沟。', [], ['trench', 'wrinkle'], 'noun/verb', 'null', '自然'],
  ], 'furrows~furrowed~furrowed~furrowing', ['trench'], 'fur 毛 + -row——假切分（与 fur 无关，古英语 furh 犁沟），故留空；家族 trench 沟，近义 wrinkle 皱纹');

  W('fussy', 'adjective', '/ˈfʌsi/', 'C1', [], '挑剔的', 'Hard to please about details.', [
    ['挑剔的', 'Hard to please about details.', '细节上难伺候的。', 'a fussy eater 挑食的人。', 'The baby is fussy today.', '宝宝今天很闹。', [], ['particular'], 'adjective', '定语/表语', '性格'],
  ], '', [], '←fuss C1 大惊小怪 + -y，C1 继承；近义 particular 挑剔的');

  W('fuzz', 'noun', '/fʌz/', '', [], '绒毛', 'Soft short hair or fibres.', [
    ['绒毛', 'Soft short hair or fibres.', '柔软的短毛或纤维。', '不可数。', 'Peach skin has fuzz.', '桃皮有绒毛。', [], ['nap'], 'noun', 'uncountable', '外貌'],
  ], '', [], '拟声语源——无库内派生根；近义 nap 绒面。分级留空');

})(typeof window !== 'undefined' ? window : globalThis);
