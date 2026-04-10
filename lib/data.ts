// 牛马 TI · 数据文件
// 4 个维度 × 16 种类型 × 32 道题 × 每题 3 选项

export type Axis =
  | 'J' | 'M'  // 卷度: 卷王 / 摸鱼
  | 'B' | 'S'  // 担当: 背锅 / 甩锅
  | 'L' | 'P'  // 情绪: 乐观 / 破防
  | 'X' | 'Z'; // 立场: 兄弟 / 资学

export type Niuma = {
  code: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  skill: string;
  quotes: string[];
  nemesis: string;        // 克星的 code
  teamBuilding: string;
};

export const niumaTypes: Niuma[] = [
  {
    code: 'JBLX',
    name: '救火队长',
    emoji: '🧯',
    tagline: '活最多的人，但老板只看得见亲儿子',
    description:
      '团队的隐形顶梁柱。线上出事第一个冲上去，周末加班是常态。嘴上说"没事我来"，心里也真没啥怨言——就是从来没被单独表扬过。兄弟们都喜欢他，老板总记不住他的名字。',
    skill: '一键修复 · 任何线上故障 5 分钟内定位',
    quotes: ['问题不大', '我来看看', '不用麻烦别人了'],
    nemesis: 'JSLZ',
    teamBuilding: '第一个到，最后一个走，还帮大家收拾空瓶',
  },
  {
    code: 'JBLZ',
    name: '亲儿子',
    emoji: '👑',
    tagline: '老板心中完美打工人',
    description:
      '卷得自然、扛得主动、说话比 PPT 还漂亮。别人加班是任务，他加班是修行。同事不一定喜欢他，但没人敢得罪他——因为他和老板吃同一桌。',
    skill: '向上管理之神 · 一句话让老板觉得自己很英明',
    quotes: ['这个 idea 我完全赞同', '我再想想有没有更优解', '放心交给我'],
    nemesis: 'MSPX',
    teamBuilding: '敬酒敬到 VP，记得住所有人的名字',
  },
  {
    code: 'JBPX',
    name: '技术烈士',
    emoji: '⚰️',
    tagline: '技术最好、锅最多、待遇最差',
    description:
      '组里技术最强的那个，代码写得最漂亮，锅背得最多，但从来没升过职。每天一边骂公司一边写代码，是兄弟们心中的神。离职时全组都哭，第二天老板说"他又不是不可替代"。',
    skill: '神级重构 · 能让十年屎山重获新生',
    quotes: ['这代码谁写的？……哦是我两年前写的', '算了我来吧', '真不想干了'],
    nemesis: 'JSLZ',
    teamBuilding: '喝多了开始讲技术，越讲越委屈',
  },
  {
    code: 'JBPZ',
    name: '卷生卷死',
    emoji: '💀',
    tagline: '用命换晋升，35 岁准时住院',
    description:
      '凌晨三点的字节真的是他发的，不是他发的朋友圈。身体已经垮了但还在卷，嘴上说"为了梦想"，其实只是不敢停下来。停下来，就怕自己这些年白熬了。',
    skill: '无限续命 · 靠红牛和美式续航 72 小时',
    quotes: ['再撑一下就好了', '这次一定能上', '下个财年再休假'],
    nemesis: 'MSPX',
    teamBuilding: '不参加，"我还要赶个需求"',
  },
  {
    code: 'JSLX',
    name: '技术网红',
    emoji: '📣',
    tagline: '对外刷脸一把好手，活让别人干',
    description:
      '知乎大 V、掘金高赞、会议演讲常客。组内实际负责的需求很少，但包装出去都像改变了世界。对兄弟真的不错，该帮忙还是会帮，就是名字永远在 PPT 第一页。',
    skill: '个人品牌 · 把任何小事包装成"行业洞察"',
    quotes: ['这个我写过文章', '有兴趣可以看看我的分享', '这个交给小 X 吧'],
    nemesis: 'JBPX',
    teamBuilding: '全场最会聊，临走前加一堆人微信',
  },
  {
    code: 'JSLZ',
    name: '内卷老六',
    emoji: '🕶️',
    tagline: '绩效刺客本客',
    description:
      '自己卷，还要拉新人一起卷；然后精准把锅甩给新人，绩效还是自己拿。笑嘻嘻的，老板身边永远有他。被坑过的人都记得，但没证据。',
    skill: '无形甩锅 · 甩完锅新人还以为是自己的错',
    quotes: ['我觉得你可以再想想', '这个当时不是你负责吗', '老板您看我这边……'],
    nemesis: 'MBLX',
    teamBuilding: '坐老板旁边，帮所有人点菜',
  },
  {
    code: 'JSPX',
    name: '愤怒中坚',
    emoji: '😤',
    tagline: '群里天天骂公司，周报一篇没落',
    description:
      '骂公司他最大声，朋友圈全是控诉。但 deadline 从来没 miss 过，周报从来没落下。属于"又爱又恨、走又走不掉"的那种——其实留下来的原因只有一个：房贷。',
    skill: '精准吐槽 · 一句话说中所有人痛点',
    quotes: ['这破公司', '这什么 sb 需求', '（然后周报还是交了）'],
    nemesis: 'JBLZ',
    teamBuilding: '带头吐槽，吐槽完自己买单',
  },
  {
    code: 'JSPZ',
    name: '破防汇报家',
    emoji: '😭',
    tagline: '哭着要资源，还真能要到',
    description:
      '哭腔大师。每次汇报都像在受刑，但神奇的是哭着哭着资源就批了、HC 就到账了。表面上天天想离职，实际上 KPI 一个没少。老板拿他没办法，同事也拿他没办法。',
    skill: '哭腔要资源 · 一句"真的好难"换半个团队',
    quotes: ['真的太难了', '我们是不是要放弃', '老板您看能不能……'],
    nemesis: 'MSLX',
    teamBuilding: '借着酒劲哭诉，第二天装作没发生',
  },
  {
    code: 'MBLX',
    name: '人间清醒',
    emoji: '🧘',
    tagline: '办公室定海神针',
    description:
      '不卷、不舔、不内耗。看得比谁都明白，下班比谁都快。绩效常年 M，他自己完全不在乎。兄弟们心里最稳的那个人，遇到破事找他，一句"都挺好"就治好了。',
    skill: '看破不说破 · 知道所有事，但从不参与',
    quotes: ['都挺好', '这事儿你别往心里去', '下班了走走走'],
    nemesis: 'JSLZ',
    teamBuilding: '第一个开酒，最后一个醉，带大家回家',
  },
  {
    code: 'MBLZ',
    name: '老实人 Pro',
    emoji: '😊',
    tagline: '"老板说的都对"，意外地混得还行',
    description:
      '憨厚型选手。让干啥干啥，出了事也不推脱，笑呵呵背锅。本来应该是祖传牛马，但因为情商够高、脸够厚，意外地一直混得不差——老板觉得他"靠谱"。',
    skill: '无敌笑脸 · 任何批评都能笑着接下',
    quotes: ['好的好的', '没事没事', '是我的问题'],
    nemesis: 'JSLZ',
    teamBuilding: '全场最勤快，主动给所有人倒酒',
  },
  {
    code: 'MBPX',
    name: '祖传牛马',
    emoji: '🐂',
    tagline: '牛马 TI 的原型',
    description:
      '活最脏、锅最多、话最少、情绪最差。每天靠兄弟的瑞幸续命，每天都想辞职但每天都还在。组里谁都心疼他，但没人帮得了他。他就是"牛马"这个词的肉身。',
    skill: '默默承受 · 再大的委屈都能消化在肚子里',
    quotes: ['嗯', '我知道了', '……'],
    nemesis: 'JSLZ',
    teamBuilding: '不想去，被兄弟拉去，坐角落闷头吃',
  },
  {
    code: 'MBPZ',
    name: '沉默的羔羊',
    emoji: '🐑',
    tagline: '想卷卷不动，想躺不敢躺',
    description:
      '最憋屈的一类。想卷卷不动，想舔不会舔，想润没有勇气。每天在各种念头之间反复内耗，最后什么都没做成。别人眼里"存在感低"，其实他内心每天上演三幕剧。',
    skill: '精神内耗 · 能在一件小事上想一整天',
    quotes: ['我是不是应该……', '如果我当时……', '算了'],
    nemesis: 'MBLX',
    teamBuilding: '去了全程不说话，第一个走',
  },
  {
    code: 'MSLX',
    name: '摸鱼侠客',
    emoji: '🐟',
    tagline: '办公室快乐源泉',
    description:
      '活不多、锅不背、梗一堆、人缘满分。绩效一般但没人想让他走——因为他在，气氛就在。老板几次想动他，都被同事的反对拦下来了。',
    skill: '带薪梗王 · 任何场景都能抛出金句',
    quotes: ['摆烂了摆烂了', '今天又是美好的一天', '走走走吃饭'],
    nemesis: 'JBPZ',
    teamBuilding: '团建策划委员会主席，梗王 C 位',
  },
  {
    code: 'MSLZ',
    name: '带薪演员',
    emoji: '🎭',
    tagline: '什么都没干，但老板觉得他干了一切',
    description:
      '最高明的摸鱼选手。会议上总能精准插话，周报写得天花乱坠，"存在感管理"做到极致。实际产出为零，绩效还稳 M+。技术上一问三不知，但 slides 做得漂亮。',
    skill: '空气汇报 · 汇报一小时，实际产出为零',
    quotes: ['这个我之前有考虑过', '我来协同一下', '我的 part 已经推进了'],
    nemesis: 'JBPX',
    teamBuilding: '全场最会说话，让老板觉得他最积极',
  },
  {
    code: 'MSPX',
    name: '躺平哲学家',
    emoji: '🛋️',
    tagline: '"爱谁谁"，心安理得地躺',
    description:
      '悟了的那种。不卷、不舔、不内耗、不焦虑。随时准备被优化，也随时准备润。别人眼里的"不求上进"，他眼里的"人间清醒 Pro"。钱包里常年备着离职信草稿。',
    skill: '无欲无求 · 再大的饼都不动心',
    quotes: ['爱谁谁', '不晋升就不晋升', '大不了润'],
    nemesis: 'JBPZ',
    teamBuilding: '可去可不去，去了也早走',
  },
  {
    code: 'MSPZ',
    name: '假性奋斗 boy',
    emoji: '🎬',
    tagline: '朋友圈凌晨三点的字节，实则在家呼呼大睡',
    description:
      '表演艺术家。朋友圈全是"加班打卡"，工位上常年放着咖啡，但电脑屏幕上是 B 站。内耗是真的内耗，奋斗是真的没有。最大的工作量，是维护那个"努力人设"。',
    skill: '人设营业 · 朋友圈定时发加班打卡',
    quotes: ['最近真的好累', '又要通宵了', '（然后回家打游戏）'],
    nemesis: 'MBLX',
    teamBuilding: '装作很忙不去，其实在家打王者',
  },
];

// ============================================================
// 32 道题 · 每维度 8 题 · 每题 3 个选项（两极 + 中间/梗）
// ============================================================

export type Choice = { text: string; value: Axis | null };

export type Question = {
  id: number;
  scenario: string;
  choices: [Choice, Choice, Choice];
};

export const questions: Question[] = [
  // ── 卷度 J / M ────────────────────────────────────────────

  {
    id: 1,
    scenario: '周五下午 5 点，产品说周一要给 VP 演示新功能。你周末约了朋友。',
    choices: [
      { text: '取消约会，周六到公司，争取提前交付', value: 'J' },
      { text: '"周一早上再看呗"，准时下班', value: 'M' },
      { text: '去赴约，但全程心不在焉地想方案', value: null },
    ],
  },
  {
    id: 2,
    scenario: '老板在群里发了一篇《高效能人士的七个习惯》，@全体成员。',
    choices: [
      { text: '认真读完并写了读后感发群里', value: 'J' },
      { text: '已读不回，继续摸鱼', value: 'M' },
      { text: '转发到"吐槽群"并配文"笑死"', value: null },
    ],
  },
  {
    id: 3,
    scenario: '组里有个内部工具烂得离谱，但没人管。你知道怎么优化，不过不算 KPI。',
    choices: [
      { text: '找个晚上默默重写了，然后在组会上演示', value: 'J' },
      { text: '又不是不能用，何必给自己加活', value: 'M' },
      { text: '写了个吐槽文档发到内网，让别人来修', value: null },
    ],
  },
  {
    id: 4,
    scenario: '晚上 10 点刷剧，工作群在讨论一个技术难题，你恰好知道答案。',
    choices: [
      { text: '放下遥控器，截屏分析发了条长消息', value: 'J' },
      { text: '"又不是我的活"，继续看剧', value: 'M' },
      { text: '发了句"明天再说吧兄弟们"然后静音', value: null },
    ],
  },
  {
    id: 5,
    scenario: '写周报。',
    choices: [
      { text: '图文并茂，分 1/2/3 点，附上数据截图', value: 'J' },
      { text: '"本周：改 bug。下周：继续改。"三行搞定', value: 'M' },
      { text: '把上周的周报改个日期重新发', value: null },
    ],
  },
  {
    id: 6,
    scenario: '公司新出了一门内部课程《高并发架构实战》，非强制。',
    choices: [
      { text: '第一天就报名，还做了笔记', value: 'J' },
      { text: '收藏了链接，此生再也没打开', value: 'M' },
      { text: '等同事看完了问他"值不值得看"', value: null },
    ],
  },
  {
    id: 7,
    scenario: '下班时间到了，手上还有个不紧急的任务没做完。',
    choices: [
      { text: '不走，干完再说', value: 'J' },
      { text: '准点关电脑走人，明天的事明天说', value: 'M' },
      { text: '电脑不关，外套搭椅子上，人先溜了', value: null },
    ],
  },
  {
    id: 8,
    scenario: '产品丢来一个"小需求"，你一看预估要三天。',
    choices: [
      { text: '立刻排期，"有挑战，安排"', value: 'J' },
      { text: '先问能不能砍需求，能不能延期，能不能换人', value: 'M' },
      { text: '回复"收到"，然后假装没看到', value: null },
    ],
  },

  // ── 担当 B / S ────────────────────────────────────────────

  {
    id: 9,
    scenario: '凌晨 2 点线上告警，是你三周前的代码导致的。没人发现是你。',
    choices: [
      { text: '爬起来修，群里说"已修复"——不提是谁的锅', value: 'B' },
      { text: '明天处理，到时候说"历史遗留问题"', value: 'S' },
      { text: '静音手机，翻个身继续睡', value: null },
    ],
  },
  {
    id: 10,
    scenario: '季度复盘，项目数据很难看。原因很多，但老板在找一个"负责人"，你是 owner。',
    choices: [
      { text: '主动站出来："我来说，我这边确实有做得不够的地方"', value: 'B' },
      { text: '把每个环节的问题客观列出来——反正不全是你', value: 'S' },
      { text: '拿起水杯假装喝水，避免眼神接触', value: null },
    ],
  },
  {
    id: 11,
    scenario: '实习生没经过你的 review 就上线了代码，炸了。老板问"怎么回事"。',
    choices: [
      { text: '"我没把好关，流程有漏洞，我来修"', value: 'B' },
      { text: '"实习生同学提交的，我后续加强 review"', value: 'S' },
      { text: '"建议全组复盘一下流程"——把锅抽象化', value: null },
    ],
  },
  {
    id: 12,
    scenario: '跨组合作出了线上事故，你文档没写清楚，对方实现也有问题。要写事故报告。',
    choices: [
      { text: '先写自己的问题："我文档不够详细"', value: 'B' },
      { text: '重点写"双方应该加强对齐"——暗示是对方的锅', value: 'S' },
      { text: '报告里只写"建议引入自动化测试"，谁的锅都不提', value: null },
    ],
  },
  {
    id: 13,
    scenario: '同事当着老板的面说"这个模块上次是你改的吧"，语气微妙。',
    choices: [
      { text: '"是我改的，有问题我来看"', value: 'B' },
      { text: '"我只改了一行，核心逻辑不是我的"', value: 'S' },
      { text: '假装没听到，低头疯狂敲键盘', value: null },
    ],
  },
  {
    id: 14,
    scenario: '老板让你负责一个谁都不想碰的祖传项目，维护成本极高。',
    choices: [
      { text: '"行，我来吧"——心里苦但还是接了', value: 'B' },
      { text: '"我手上活排满了，要不问问小王？"', value: 'S' },
      { text: '"可以，但我要加两个 HC"——先谈条件', value: null },
    ],
  },
  {
    id: 15,
    scenario: '上线后用户反馈了一个 bug，其实是产品需求写得模糊导致的。',
    choices: [
      { text: '"我应该当时多问一句，先修了"', value: 'B' },
      { text: '截图需求文档，@产品："这块你当时没写清楚"', value: 'S' },
      { text: '默默修了，然后在群里发需求文档截图，不说话', value: null },
    ],
  },
  {
    id: 16,
    scenario: '新人入职第一天就把测试环境搞崩了，所有人都看到了。',
    choices: [
      { text: '帮他一起修，私下教他怎么避免', value: 'B' },
      { text: '在群里说"新同学的环境配置问题，我看看"——提醒老板知道是谁', value: 'S' },
      { text: '发了个表情包"欢迎来到地狱"', value: null },
    ],
  },

  // ── 情绪 L / P ────────────────────────────────────────────

  {
    id: 17,
    scenario: '你花两个月做的功能，上线前一天被砍了。老板说"方向调整"。',
    choices: [
      { text: '"行吧，代码留着，正好歇一下"', value: 'L' },
      { text: '回工位愣了半小时，晚上开始刷 Boss 直聘', value: 'P' },
      { text: '把代码打包发到自己 GitHub，"以后创业用"', value: null },
    ],
  },
  {
    id: 18,
    scenario: '绩效自评 M+，结果拿了 M。你觉得不如你的同事拿了 M+。',
    choices: [
      { text: '"行吧，下半年继续"——真的只是有点可惜', value: 'L' },
      { text: '晚上翻来覆去，复盘每一个被忽视的贡献', value: 'P' },
      { text: '发朋友圈："努力不一定有回报，但不努力一定很舒服"', value: null },
    ],
  },
  {
    id: 19,
    scenario: '产品过来说需求又改了，之前写的代码有一半要重写。',
    choices: [
      { text: '深吸一口气，"行，重写也不是第一次了"', value: 'L' },
      { text: '"又改？？？"脸直接拉下来', value: 'P' },
      { text: '"改可以，请先请我喝杯瑞幸"', value: null },
    ],
  },
  {
    id: 20,
    scenario: '隔壁组朋友年终奖 8 个月，你只有 4 个月。问了一圈发现是组的问题。',
    choices: [
      { text: '"算了，组的事跟个人无关，够花就行"', value: 'L' },
      { text: '整个假期心情很差，回来第一天就约面试', value: 'P' },
      { text: '在组群里发"我们组明年一定更好"（阴阳怪气）', value: null },
    ],
  },
  {
    id: 21,
    scenario: '被老板在全组会上点名批评，说你"最近状态不太对"。',
    choices: [
      { text: '下楼抽根烟，回来继续干', value: 'L' },
      { text: '进厕所 20 分钟出不来，晚上失眠', value: 'P' },
      { text: '当场微笑说"谢谢老板关心"，内心毫无波动', value: null },
    ],
  },
  {
    id: 22,
    scenario: '周末被拉去加班，到公司发现只有你一个人来了。',
    choices: [
      { text: '"清净，效率更高"，开始干活', value: 'L' },
      { text: '拍了张空荡荡的办公室发朋友圈，配文"人间不值得"', value: 'P' },
      { text: '既然没人监督，打开 B 站开始摸鱼', value: null },
    ],
  },
  {
    id: 23,
    scenario: '你写的代码被新来的同事在 code review 里疯狂吐槽，评论写了十几条。',
    choices: [
      { text: '认真看完，觉得说得有道理就改', value: 'L' },
      { text: '血压飙升，想回怼但忍住了，心情差了一整天', value: 'P' },
      { text: '回复"已阅"，一条都不改', value: null },
    ],
  },
  {
    id: 24,
    scenario: '公司团建安排了"荒野求生"拓展训练，体力活很多。',
    choices: [
      { text: '"挺好玩的，去体验一下"', value: 'L' },
      { text: '光是想到就累了，提前一天开始焦虑', value: 'P' },
      { text: '请假，说"家里有事"', value: null },
    ],
  },

  // ── 立场 X / Z ────────────────────────────────────────────

  {
    id: 25,
    scenario: '老板要搞"996 冲刺两周"，你知道其实没那么紧急，是想在 VP 前表现。',
    choices: [
      { text: '私下跟兄弟说"别太拼"，周会上礼貌提出"可以分阶段交付"', value: 'X' },
      { text: '群里第一个响应："收到，我来排计划"', value: 'Z' },
      { text: '不说话，到点下班，用行动投票', value: null },
    ],
  },
  {
    id: 26,
    scenario: '考核前老板暗示你说说"谁表现不太好"。你知道小李最近产出差是因为家里出了事。',
    choices: [
      { text: '"小李有原因，可以给他点时间"——帮兄弟说话', value: 'X' },
      { text: '客观陈述产出数据，不提私事', value: 'Z' },
      { text: '"老板我觉得大家都挺好的"——谁也不得罪', value: null },
    ],
  },
  {
    id: 27,
    scenario: '公司裁员，你安全。天天一起吃饭的兄弟被列入名单，leader 来问你意见。',
    choices: [
      { text: '"他不应该被裁，我可以分活给他"', value: 'X' },
      { text: '"这个还是您判断，我服从安排"', value: 'Z' },
      { text: '偷偷告诉兄弟消息，让他自己做准备', value: null },
    ],
  },
  {
    id: 28,
    scenario: '老板推行打卡制度：迟到扣 50。大家觉得不合理，老板问"怎么样？"',
    choices: [
      { text: '第一个开口："弹性办公可能更适合我们"', value: 'X' },
      { text: '"可以试试"——先配合老板', value: 'Z' },
      { text: '不说话，之后每天踩点到，一分钟不差', value: null },
    ],
  },
  {
    id: 29,
    scenario: '老板在群里说"我们是一家人"，还发了个爱心 emoji。',
    choices: [
      { text: '心里呵呵，转发到吐槽群', value: 'X' },
      { text: '立刻回复"+1 老板说得对"并点赞', value: 'Z' },
      { text: '假装没看到，等别人先回再跟风', value: null },
    ],
  },
  {
    id: 30,
    scenario: '午饭时间，你可以选择跟谁坐一桌。',
    choices: [
      { text: '和同事们一起，边吃边吐槽', value: 'X' },
      { text: '想办法坐老板旁边，聊聊近期规划', value: 'Z' },
      { text: '戴上耳机一个人吃，谁也不想搭理', value: null },
    ],
  },
  {
    id: 31,
    scenario: '有人在小群里骂老板，骂得挺狠的。',
    choices: [
      { text: '跟着骂，"说得好"', value: 'X' },
      { text: '不说话，心里默默想要不要截图给老板', value: 'Z' },
      { text: '退出群聊，这种群太危险', value: null },
    ],
  },
  {
    id: 32,
    scenario: '绩效面谈时间到了。',
    choices: [
      { text: '先替组员争取加薪和资源', value: 'X' },
      { text: '重点展示自己的个人贡献和亮点', value: 'Z' },
      { text: '什么都不争取，"随便吧"', value: null },
    ],
  },
];

// ============================================================
// 结果计算
// ============================================================

export function computeResult(answers: (Axis | null)[]): string {
  const count: Record<Axis, number> = {
    J: 0, M: 0, B: 0, S: 0, L: 0, P: 0, X: 0, Z: 0,
  };
  for (const a of answers) {
    if (a !== null) count[a]++;
  }
  // 平局时随机打破，避免固定偏向某个类型
  const pick = (a: Axis, b: Axis) =>
    count[a] > count[b] ? a : count[b] > count[a] ? b : (Math.random() > 0.5 ? a : b);
  const d1 = pick('J', 'M');
  const d2 = pick('B', 'S');
  const d3 = pick('L', 'P');
  const d4 = pick('X', 'Z');
  return `${d1}${d2}${d3}${d4}`;
}

export function getTypeByCode(code: string): Niuma | undefined {
  return niumaTypes.find((t) => t.code === code);
}
