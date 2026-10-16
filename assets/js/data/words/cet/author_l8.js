/* data/words/cet/author_l8.js · 手敲词条 L（八·引用缺口收尾批）：love story ~ lyrical（18 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（lovely/lover/lower/loyalty/luncheon/luxurious/lyrical 见条目）。
 * 短语 1 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_l8.js 必须在 _cet_helper.js 之后加载');

  W('love story', 'noun', '/ˌlʌv ˈstɔːri/', '', [], '爱情故事', 'A story about two people in love.', [
    ['爱情故事', 'A story about two people who love each other.', '讲述恋人相爱故事的作品。', '可数。', 'The film is a love story set in Paris.', '这部电影是以巴黎为背景的爱情故事。', [], ['romance'], 'noun', 'countable', '情感'],
  ], '', [], 'love + story；近义 romance 爱情故事。短语分级留空').phrase = true;

  W('loveliness', 'noun', '/ˈlʌvlinəs/', 'A1', [], '美丽；可爱', 'The quality of being very beautiful.', [
    ['美丽；可爱', 'The quality of being very beautiful and pleasant.', '非常美丽可爱的特质。', '不可数。', 'They admired the loveliness of the garden.', '他们欣赏花园的美丽。', [], ['beauty'], 'noun', 'uncountable', '通用'],
  ], '',['love'], '←love A1 + -ly + -ness（透明后缀，同 likeness 模式），A1 继承；近义 beauty 美');

  W('lovely', 'adjective', '/ˈlʌvli/', 'A1', ['CET4'], '可爱的；美好的', 'Very pleasant, beautiful or enjoyable.', [
    ['可爱的；美好的', 'Very pleasant, beautiful or enjoyable.', '令人愉快、美丽动人的。', '定语或表语。', 'What a lovely day!', '多美好的一天！', [], ['gorgeous', 'nice', 'pretty', 'sweet'], 'adjective', '定语/表语', '通用'],
  ], '',['love'], '←love A1 + -ly（透明后缀），A1 继承（brief 根提示）；近义 gorgeous 绝妙的、nice 好的、pretty 漂亮的、sweet 甜美可人的');

  W('lover', 'noun', '/ˈlʌvə/', 'A1', ['CET4'], '爱好者；恋人', 'A person who loves something.', [
    ['爱好者；恋人', 'A person who loves something deeply, or a person in a sexual relationship.', '热爱某事的人；也指情人。', '可数。', 'He is a music lover.', '他是个音乐爱好者。', [], ['mistress'], 'noun', 'countable', '情感'],
  ], 'lovers',['mistress', 'love'], '←love A1 + -er（施事后缀），A1 继承（brief 根提示）；家族/近义 mistress 情妇');

  W('loving', 'adjective', '/ˈlʌvɪŋ/', 'A1', [], '充满爱的', 'Showing love and care.', [
    ['充满爱的', 'Showing love and care towards other people.', '表现出关爱与温柔的。', '定语。', 'She is a loving mother.', '她是一位慈爱的母亲。', [], ['fond'], 'adjective', '定语', '情感'],
  ], '',['fond', 'love'], '←love A1 + -ing（透明后缀），A1 继承（brief 根提示）；家族/近义 fond 喜爱的');

  W('lower', 'adjective/verb', '/ˈləʊə/', 'A1', ['CET4'], '较低的；降低', 'Low in position; to move down.', [
    ['较低的；降低', 'Not high in position; to move something down.', '位置不高的；也指把…放低。', '形容词比较级与动词两用，动词及物。', 'Put the box on the lower shelf.', '把箱子放到下面那层架子上。', ['lower the volume'], ['downgrade', 'downstairs', 'inferior', 'reduce'], 'adjective/verb', 'null', '通用'],
  ], '',['downgrade', 'reduce', 'low'], '←low A1 + -er（比较级），A1 继承（brief 根提示）；家族 downgrade 降低、reduce 减少，近义 downstairs 楼下的、inferior 较差的');

  W('lowest', 'adjective', '/ˈləʊɪst/', 'A1', [], '最低的', 'Smallest in degree or position.', [
    ['最低的', 'Smallest in degree or lowest in position.', '程度最小或位置最低的。', '最高级，定语。', 'It was the lowest score in class.', '这是班上最低分。', [], ['minimum'], 'adjective', '定语', '通用'],
  ], '',['minimum', 'low'], '←low A1 + -est（最高级），A1 继承（brief 根提示）；家族/近义 minimum 最低的');

  W('lowly', 'adjective', '/ˈləʊli/', 'A1', [], '低微的；卑贱的', 'Low in rank or position.', [
    ['低微的；卑贱的', 'Low in rank or position, not important.', '地位低下的、不起眼的。', '定语。', 'He started as a lowly clerk.', '他从一个低微的职员做起。', [], ['humble'], 'adjective', '定语', '职业'],
  ], '',['humble', 'low'], '←low A1 + -ly（透明后缀），A1 继承（brief 根提示）；家族/近义 humble 卑微的');

  W('loyalty', 'noun', '/ˈlɔɪəlti/', 'B2', ['CET4'], '忠诚；忠心', 'Faithfulness to someone or something.', [
    ['忠诚；忠心', 'Faithfulness to a person, group or belief.', '对人、团体或信念的忠心。', '不可数：loyalty to。', 'Her loyalty never wavered.', '她的忠诚从未动摇。', ['loyalty to'], ['faith'], 'noun', 'uncountable', '性格'],
  ], '',['loyal'], '←loyal B2 + -ty（透明后缀，同 -ity），B2 继承；近义 faith 忠诚');

  W('lubricant', 'noun', '/ˈluːbrɪkənt/', 'C1', [], '润滑剂', 'A substance that reduces friction.', [
    ['润滑剂', 'A substance that reduces friction between moving parts.', '减少运动部件间摩擦的物质。', '可数。', 'Oil acts as a lubricant.', '油起润滑作用。', [], ['grease'], 'noun', 'countable', '工业'],
  ], 'lubricants',['grease', 'lubricate'], '←lubricate C1（词干 lubric-）+ -ant（工具/施事后缀，ate→ant），C1 继承；家族/近义 grease 润滑脂');

  W('lucid', 'adjective', '/ˈluːsɪd/', '', [], '清晰的；明白的', 'Easy to understand.', [
    ['清晰的；明白的', 'Expressed clearly and easy to understand.', '表达清楚、容易理解的。', '定语或表语。', 'She gave a lucid explanation.', '她作了清晰的说明。', [], ['intelligible'], 'adjective', '定语/表语', '通用'],
  ], '', [], '拉丁 lucidus（明亮）——无库内派生根，故留空；近义 intelligible 易懂的');

  W('lumber', 'noun', '/ˈlʌmbə/', '', [], '木材；木料', 'Wood prepared for building.', [
    ['木材；木料', 'Wood prepared for building.', '加工备用的木材。', '不可数，美式用语。', 'The builders stored lumber outside.', '建筑工人把木料堆在外面。', [], ['timber', 'wood'], 'noun', 'uncountable', '工业'],
  ], '', ['timber'], '无库内派生根，故留空；家族/近义 timber 木材、wood 木头');

  W('luncheon', 'noun', '/ˈlʌntʃən/', 'A1', ['CET4'], '（正式）午餐；午餐会', 'A formal lunch.', [
    ['（正式）午餐；午餐会', 'A formal lunch, or a gathering for one.', '正式的午餐；也指午餐会。', '可数，正式用语。', 'They held a formal luncheon.', '他们办了正式的午餐会。', [], ['lunch'], 'noun', 'countable', '饮食'],
  ], 'luncheons', ['lunch'], '词核 lunch A1 + 扩展音节——现代切分 lunch 可见，A1 继承；家族/近义 lunch 午餐');

  W('lunchtime', 'noun', '/ˈlʌntʃtaɪm/', 'A1', [], '午餐时间', 'The time when people eat lunch.', [
    ['午餐时间', 'The time when people eat lunch.', '人们吃午饭的时间。', '不可数。', 'We met at lunchtime.', '我们在午餐时间见了面。', [], ['noon'], 'noun', 'uncountable', '饮食'],
  ], '', ['noon'], 'lunch + time——首成分 lunch 在库，A1 继承（首成分规则）；家族/近义 noon 中午');

  W('lunge', 'noun/verb', '/lʌndʒ/', '', [], '猛扑；猛冲', 'A sudden forward move.', [
    ['猛扑；猛冲', 'A sudden forward move, or to move suddenly forward.', '突然向前扑；也指猛冲。', '名词与动词两用。', 'The dog made a lunge at the intruder.', '狗向闯入者猛扑过去。', [], ['grab'], 'noun/verb', 'null', '通用'],
  ], 'lunges~lunged~lunged~lunging', [], '无库内派生根（与 lounge 不同词），故留空；近义 grab 猛扑、抓取');

  W('lurk', 'verb', '/lɜːk/', '', [], '潜伏；埋伏', 'To wait secretly in a hidden place.', [
    ['潜伏；埋伏', 'To wait secretly in a hidden place to surprise someone.', '暗中躲藏、伺机而动。', '不及物。', 'A snake lurked under the leaves.', '一条蛇潜伏在树叶下。', [], ['hide'], 'verb', '不及物', '通用'],
  ], 'lurks~lurked~lurked~lurking', [], '无库内派生根，故留空；近义 hide 躲藏');

  W('luxurious', 'adjective', '/lʌɡˈzʊəriəs/', 'B1', ['CET4'], '奢华的；高档的', 'Very comfortable and expensive.', [
    ['奢华的；高档的', 'Very comfortable and expensive, of very high quality.', '昂贵而舒适的、极高档的。', '定语。', 'They stayed at a luxurious hotel.', '他们住在一家豪华酒店。', ['luxurious hotel'], ['luxury'], 'adjective', '定语', '通用'],
  ], '', ['luxury'], '←luxury B1 + -ous（y→i，透明后缀），B1 继承；家族/近义 luxury 奢华');

  W('lyrical', 'adjective', '/ˈlɪrɪkl/', 'B2', ['CET6'], '抒情的', 'Expressing strong emotion beautifully.', [
    ['抒情的', 'Expressing strong emotion in a beautiful way.', '以优美方式抒发感情的。', '定语。', 'Her writing is lyrical and warm.', '她的文字抒情而温暖。', [], ['lyric'], 'adjective', '定语', '文学'],
  ], '', ['lyric'], '←lyric B2 + -al（透明后缀），B2 继承；家族/近义 lyric 抒情诗的、抒情的');

})(typeof window !== 'undefined' ? window : globalThis);
