/* data/words/cet/author_o7.js — 常用词 O 收尾批，缺口 outshine ~ oxidize，共 26 条（单词，短语已清零）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（3 条 CET4：
 * outwards、owner、ownership）。
 * over-/out- 作前缀不作成分（同 non-/mis- 模式），取其后词根级：outshine←shine A2、
 * outstrip←strip B2、outweigh←weigh A2、overact←act A2、overawe←awe B2、overcharge←charge B1
 * （curated 对象格式）、overlie←lie A2、overpower←power A2、overrule←rule A2、overshadow←shadow
 * B1、overshoot←shoot A2、overview←view A2、overwinter←winter A1、overwork←work A1；
 * 组合词缺席留空（同 nonreader 先例）：overweight（weight 不在库）、outspoken（spoken 非词条）；
 * ownership 因 -ship 不在可继承清单留空（同 -age 先例）；owe B1 扫出后 owed/owing 继承。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_o7.js 必须在 _cet_helper.js 之后加载');

  W('outshine', 'verb', '/aʊtˈʃaɪn/', 'A2', [], '胜过；使相形见绌', 'To be much better than somebody or something.', [
    ['胜过；使相形见绌', 'To be much better than somebody or something.', '比某人或某物好得多。', '及物。', 'Her performance outshone all the others.', '她的表演胜过了其他所有人。', [], ['eclipse', 'transcend'], 'verb', '及物', '通用'],
  ], 'outshines~outshone~outshone~outshining', ['eclipse'], 'out- 前缀不作成分，取 shine A2（照耀），A2 继承；家族 eclipse 使黯然失色，近义 transcend 超越');

  W('outspoken', 'adjective', '/ˌaʊtˈspəʊkən/', '', [], '直言的；坦率的', 'Saying what you think frankly and honestly.', [
    ['直言的；坦率的', 'Saying what you think frankly and honestly.', '坦率说出想法的。', '定语或表语。', 'She was outspoken about the cuts.', '她对削减开支直言不讳。', [], ['vocal'], 'adjective', '定语/表语', '性格'],
  ], '', ['vocal'], 'out- 前缀不作成分，成分词 spoken 不在库（speak 虽在库但 spoken 非独立词条），无成分级可继，留空（同 nonreader 先例）；家族/近义 vocal 直率敢言的');

  W('outstrip', 'verb', '/aʊtˈstrɪp/', 'B2', [], '超过；供不应求', 'To go faster or be greater than somebody or something.', [
    ['超过；供不应求', 'To go faster or be greater than somebody or something.', '比某人或某物更快或更多。', '及物。', 'Demand outstripped the supply.', '需求超过了供应。', [], ['exceed', 'overtake'], 'verb', '及物', '通用'],
  ], 'outstrips~outstripped~outstripped~outstripping', ['exceed'], 'out- 前缀不作成分，取 strip B2（跑开、条带），B2 继承；家族 exceed 超过，近义 overtake 超越');

  W('outwards', 'adverb', '/ˈaʊtwədz/', 'B2', ['CET4'], '向外', 'Towards the outside or away from the centre.', [
    ['向外', 'Towards the outside or away from the centre.', '朝外部或远离中心。', '副词，英式常用，亦作 outward。', 'The doors open outwards.', '这些门向外开。', [], ['outward'], 'adverb', 'null', '通用'],
  ], '',['outward'], '←outward B2 + -s（词形），B2 继承（brief 根提示）；近义 outward 向外的');

  W('outweigh', 'verb', '/aʊtˈweɪ/', 'A2', [], '比……更重要；胜过', 'To be more important than something else.', [
    ['比……更重要；胜过', 'To be more important than something else.', '比其他事物更重要。', '及物。', 'The benefits outweigh the risks.', '益处大于风险。', [], ['override'], 'verb', '及物', '通用'],
  ], 'outweighs~outweighed~outweighed~outweighing',['weigh'], 'out- 前缀不作成分，取 weigh A2（称重），A2 继承；近义 override 推翻、压倒（队列原样引用）');

  W('overact', 'verb', '/ˌəʊvərˈækt/', 'A2', [], '表演过火', 'To act too dramatically on stage or screen.', [
    ['表演过火', 'To act too dramatically on stage or screen.', '在舞台或银幕上表演过头。', '不及物，亦可及物。', 'The comedian overacted in the final scene.', '喜剧演员在最后一幕表演过火了。', [], ['ham'], 'verb', '不及物', '文化'],
  ], 'overacts~overacted~overacted~overacting',['act'], 'over- 前缀不作成分，取 act A2（表演），A2 继承；近义 ham 演得过火（ham it up）');

  W('overawe', 'verb', '/ˌəʊvərˈɔː/', 'B2', [], '威吓住；使敬畏', 'To frighten or impress somebody so much that they obey.', [
    ['威吓住；使敬畏', 'To frighten or impress somebody so much that they obey.', '因震慑而使人服从。', '及物，正式用语。', 'The general overawed the young soldiers.', '将军震慑住了年轻士兵们。', [], ['intimidate'], 'verb', '及物', '心理'],
  ], 'overawes~overawed~overawed~overawing',['awe'], 'over- 前缀不作成分，取 awe B2（敬畏），B2 继承；近义 intimidate 恐吓、威慑');

  W('overcharge', 'verb', '/ˌəʊvəˈtʃɑːdʒ/', 'B1', [], '要价过高', 'To ask somebody to pay too much money.', [
    ['要价过高', 'To ask somebody to pay too much money.', '向某人要价过高。', '及物。', 'The garage overcharged us for the repair.', '修车厂收了我们过高的修理费。', [], ['rip'], 'verb', '及物', '商务'],
  ], 'overcharges~overcharged~overcharged~overcharging',['charge'], 'over- 前缀不作成分，取 charge B1（收费、要价），B1 继承（curated 核心词）；近义 rip 敲竹杠（rip off）');

  W('overlie', 'verb', '/ˌəʊvəˈlaɪ/', 'A2', [], '压覆；躺在……上面', 'To lie over or cover something.', [
    ['压覆；躺在……上面', 'To lie over or cover something.', '压在某物上面或将其覆盖。', '及物，地质与医学用语。', 'The clay overlies a bed of sand.', '黏土覆盖在沙层上面。', [], ['overlap'], 'verb', '及物', '科学'],
  ], 'overlies~overlay~overlain~overlying',['lie'], 'over- 前缀不作成分，取 lie A2（躺、位于），A2 继承；近义 overlap 重叠');

  W('overlooked', 'adjective', '/ˌəʊvəˈlʊkt/', 'B2', [], '被忽视的', 'Not noticed or considered.', [
    ['被忽视的', 'Not noticed or considered.', '没有被注意到或考虑到的。', '定语或表语。', 'The error was overlooked in review.', '这个错误在复查时被忽略了。', [], ['invisible'], 'adjective', '定语/表语', '通用'],
  ], '',['overlook'], '←overlook B2 + -ed（透明后缀），B2 继承（brief 根提示）；近义 invisible 看不见的、被忽略的');

  W('overly', 'adverb', '/ˈəʊvəli/', 'A1', [], '过于；过度', 'More than is normal or acceptable.', [
    ['过于；过度', 'More than is normal or acceptable.', '超出正常或可接受的程度。', '修饰形容词或副词。', 'The instructions were overly complicated.', '说明过于复杂了。', [], ['too'], 'adverb', 'null', '语法'],
  ], '',['over'], '←over A1 + -ly（副词后缀），A1 继承（brief 根提示）；近义 too 太、过于');

  W('overpower', 'verb', '/ˌəʊvəˈpaʊə(r)/', 'A2', [], '制服；压倒', 'To overcome somebody by force or greater strength.', [
    ['制服；压倒', 'To overcome somebody by force or greater strength.', '用力量或优势压倒某人。', '及物。', 'Two guards overpowered the thief.', '两名警卫制服了小偷。', [], ['overcome'], 'verb', '及物', '通用'],
  ], 'overpowers~overpowered~overpowered~overpowering',['power'], 'over- 前缀不作成分，取 power A2（力量），A2 继承；近义 overcome 克服、制服');

  W('overrule', 'verb', '/ˌəʊvəˈruːl/', 'A2', [], '否决；驳回', 'To decide against a previous decision or opinion.', [
    ['否决；驳回', 'To decide against a previous decision or opinion.', '对先前的决定或意见作出相反裁决。', '及物，法律常用。', 'The judges overruled the objection.', '法官驳回了异议。', [], ['override'], 'verb', '及物', '法律'],
  ], 'overrules~overruled~overruled~overruling', ['override'], 'over- 前缀不作成分，取 rule A2（裁决、规则），A2 继承；家族/近义 override 推翻、否决');

  W('overshadow', 'verb', '/ˌəʊvəˈʃædəʊ/', 'B1', [], '使相形见绌；遮蔽', 'To make somebody or something seem less important.', [
    ['使相形见绌；遮蔽', 'To make somebody or something seem less important.', '使某人或某物显得不那么重要。', '及物。', 'The scandal overshadowed the launch.', '丑闻盖过了发布会的风头。', [], ['dwarf', 'eclipse'], 'verb', '及物', '通用'],
  ], 'overshadows~overshadowed~overshadowed~overshadowing', ['dwarf'], 'over- 前缀不作成分，取 shadow B1（影子），B1 继承；家族 dwarf 使显得矮小，近义 eclipse 使黯然失色');

  W('overshoot', 'verb', '/ˌəʊvəˈʃuːt/', 'A2', [], '越过；超出目标', 'To go past a place or limit by mistake.', [
    ['越过；超出目标', 'To go past a place or limit by mistake.', '误过了某地或限度。', '及物，亦可不及物。', 'The plane overshot the runway.', '飞机冲出了跑道。', [], ['exceed'], 'verb', '及物', '交通'],
  ], 'overshoots~overshot~overshot~overshooting',['shoot'], 'over- 前缀不作成分，取 shoot A2（射出、疾行），A2 继承；近义 exceed 超过、超出');

  W('overview', 'noun', '/ˈəʊvəvjuː/', 'A2', [], '概览；概述', 'A general description or summary of something.', [
    ['概览；概述', 'A general description or summary of something.', '对某物的总体描述或总结。', '可数。', 'The course opens with an overview of the field.', '这门课以该领域概述开篇。', [], ['panorama'], 'noun', 'countable', '教育'],
  ], 'overviews', ['panorama'], 'over- 前缀不作成分，取 view A2（看、观点），A2 继承；家族/近义 panorama 全景、概览');

  W('overweight', 'adjective', '/ˌəʊvəˈweɪt/', '', [], '超重的；过胖的', 'Too heavy or too fat.', [
    ['超重的；过胖的', 'Too heavy or too fat.', '体重过重或过胖的。', '表语或定语。', 'The parcel was overweight, so she paid extra.', '包裹超重了，所以她多付了钱。', [], ['fat', 'obese'], 'adjective', '表语/定语', '健康'],
  ], '', ['fat', 'obese'], 'over- 前缀不作成分，成分词 weight 不在库（weigh 虽在库但 weight 为独立成分词未入词库），无成分级可继，留空（同 nonreader 先例）；家族 fat 胖的、obese 肥胖的，近义同');

  W('overwinter', 'verb', '/ˌəʊvəˈwɪntə(r)/', 'A1', [], '越冬', 'To survive through the winter.', [
    ['越冬', 'To survive through the winter.', '熬过冬天存活。', '不及物，生物学术语。', 'The bees overwinter in the hive.', '蜜蜂在蜂巢中越冬。', [], ['hibernate', 'winter'], 'verb', '不及物', '自然'],
  ], 'overwinters~overwintered~overwintered~overwintering', ['hibernate', 'winter'], 'over- 前缀不作成分，取 winter A1（冬天），A1 继承；家族 hibernate 冬眠、winter 冬天，近义同');

  W('overwork', 'noun', '/ˌəʊvəˈwɜːk/', 'A1', [], '过度工作', 'Too much work, or working too long.', [
    ['过度工作', 'Too much work, or working too long.', '过多的工作；或工作时间过长。', '不可数。', 'Overwork led to a collapse.', '过度工作导致了一次昏倒。', [], [], 'noun', 'uncountable', '职业'],
  ], '', ['overtime'], 'over- 前缀不作成分，取 work A1（工作），A1 继承；家族 overtime 加班时间；队列近义为空');

  W('ovum', 'noun', '/ˈəʊvəm/', '', [], '卵子；卵细胞', 'A female egg cell.', [
    ['卵子；卵细胞', 'A female egg cell.', '雌性生殖细胞。', '可数，生物学用语。', 'The ovum is fertilized in the tube.', '卵子在输卵管中受精。', [], ['egg'], 'noun', 'countable', '科学'],
  ], 'ova', ['egg'], '拉丁 ovum（卵）——与 egg 同源（拉丁对日耳曼）但拼写不可见，留空；家族/近义 egg 蛋、卵');

  W('owed', 'adjective', '/əʊd/', 'B1', [], '欠着的；应付的', 'Still to be paid.', [
    ['欠着的；应付的', 'Still to be paid.', '仍欠未付的。', '分词形容词，常作后置定语。', 'Ten pounds is still owed on the bill.', '账单上还欠十英镑。', [], ['due'], 'adjective', '表语', '金融'],
  ], '',['owe'], '←owe B1 + -d（分词形容词），B1 继承（brief 显示 ←?，自行扫根 owe）；近义 due 到期的、欠的');

  W('owing', 'adjective', '/ˈəʊɪŋ/', 'B1', [], '欠着的；应付的', 'Still to be paid.', [
    ['欠着的；应付的', 'Still to be paid.', '仍欠未付的。', '分词形容词；owing to 表由于。', 'There are five pounds owing on the bill.', '账上还欠五英镑。', [], ['indebted'], 'adjective', '表语', '金融'],
  ], '',['owe'], '←owe B1 + -ing（分词形容词），B1 继承（brief 显示 ←?，自行扫根 owe）；近义 indebted 负债的、感激的');

  W('owner', 'noun', '/ˈəʊnə(r)/', 'A1', ['CET4'], '主人；所有者', 'A person or group that owns something.', [
    ['主人；所有者', 'A person or group that owns something.', '拥有某物的人或团体。', '可数。', 'The owner of the shop opened early.', '店主很早就开门了。', ['owner of'], ['landlord', 'master', 'mistress'], 'noun', 'countable', '通用'],
  ], 'owners', ['landlord', 'own'], '←own A1 + -er（施事后缀），A1 继承（brief 根提示）；家族 landlord 房东、own 拥有，近义 master 主人、mistress 女主人');

  W('ownership', 'noun', '/ˈəʊnəʃɪp/', '', ['CET4'], '所有权；产权', 'The state of owning something.', [
    ['所有权；产权', 'The state of owning something.', '拥有某物的状态。', '不可数。', 'The ownership of the land is disputed.', '这片土地的产权有争议。', ['home ownership'], ['title'], 'noun', 'uncountable', '法律'],
  ], '', [], 'owner + ship；-ship 后缀不在可继承清单（同 -age 先例类推），owner 虽在库仍留空；近义 title 所有权凭证、产权');

  W('oxidation', 'noun', '/ˌɒksɪˈdeɪʃn/', 'B2', [], '氧化', 'The process of combining with oxygen.', [
    ['氧化', 'The process of combining with oxygen.', '与氧化合的过程。', '不可数。', 'Rust forms by the oxidation of iron.', '铁锈由铁氧化形成。', [], ['rust'], 'noun', 'uncountable', '科学'],
  ], '',['oxide'], '←oxide B2 + -ation（e→a 名化），B2 继承（brief 根提示）；近义 rust 生锈（氧化的结果）');

  W('oxidize', 'verb', '/ˈɒksɪdaɪz/', 'B2', [], '（使）氧化', 'To combine with oxygen, or make something do this.', [
    ['（使）氧化', 'To combine with oxygen, or make something do this.', '与氧化合；或使某物氧化。', '及物，亦可不及物。', 'The iron oxidizes quickly in damp air.', '铁在潮湿空气中很快氧化。', [], ['rust'], 'verb', '及物', '科学'],
  ], 'oxidizes~oxidized~oxidized~oxidizing',['oxide'], '←oxide B2 + -ize（透明后缀），B2 继承（brief 显示 ←?，经 oxidation 根提示确认 oxide B2）；近义 rust 生锈');
})(typeof window !== 'undefined' ? window : globalThis);
