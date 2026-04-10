'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Avatar from './avatar';
import QRCodeBlock from './qrcode';
import { generateShareImage } from './share';
import {
  questions,
  computeResult,
  getTypeByCode,
  type Axis,
  type Niuma,
  type Question,
} from '@/lib/data';
import pkg from '../package.json';

const VERSION = pkg.version;

type Stage = 'intro' | 'quiz' | 'result';

/** 从每个维度（8 题）随机抽 4 题，共 16 题 */
function sampleQuestions(): Question[] {
  // 按维度分组：1-8 卷度, 9-16 担当, 17-24 情绪, 25-32 立场
  const groups = [
    questions.slice(0, 8),
    questions.slice(8, 16),
    questions.slice(16, 24),
    questions.slice(24, 32),
  ];
  const picked: Question[] = [];
  for (const group of groups) {
    const shuffled = [...group].sort(() => Math.random() - 0.5);
    picked.push(...shuffled.slice(0, 4));
  }
  // 打乱每题的选项顺序（避免 null 总是 C）
  return picked.map(q => ({
    ...q,
    choices: [...q.choices].sort(() => Math.random() - 0.5),
  }));
}

export default function Home() {
  const [stage, setStage] = useState<Stage>('intro');
  const [answers, setAnswers] = useState<(Axis | null)[]>([]);
  const [idx, setIdx] = useState(0);
  const [quiz, setQuiz] = useState<Question[]>([]);

  const reset = () => {
    setStage('intro');
    setAnswers([]);
    setIdx(0);
    setQuiz([]);
  };

  const start = () => {
    setStage('quiz');
    setAnswers([]);
    setIdx(0);
    setQuiz(sampleQuestions());
  };

  const answer = (value: Axis | null) => {
    const next = [...answers, value];
    setAnswers(next);
    if (next.length === quiz.length) {
      setStage('result');
    } else {
      setIdx(idx + 1);
    }
  };

  if (stage === 'intro') return <Intro onStart={start} />;
  if (stage === 'quiz' && quiz.length > 0)
    return (
      <Quiz
        q={quiz[idx]}
        idx={idx}
        total={quiz.length}
        onAnswer={answer}
      />
    );

  const code = computeResult(answers);
  const type = getTypeByCode(code)!;
  return <Result type={type} onReset={reset} />;
}

// ============================================================

function getGreeting(): string {
  const now = new Date();
  const day = now.getDay(); // 0=周日
  const hour = now.getHours();
  const min = now.getMinutes();
  const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
  const dayName = dayNames[day];
  const t = hour + min / 60; // 精确时间，如 14.5 = 14:30

  // 周末
  if (day === 0 || day === 6) {
    if (hour < 10) return `周${dayName}早上${hour}点，牛马居然没有睡懒觉？是被OnCall叫醒的吗 😴`;
    if (hour < 14) return `周${dayName}上午好，不会真有人周末还在加班吧？不会吧不会吧 🤡`;
    if (hour < 18) return `周${dayName}下午${hour}点，请问你是在家摸鱼还是在公司摸鱼？ 🐟`;
    return `周${dayName}晚上${hour}点，周末的夜晚属于自己——除非你还在改bug 🌙`;
  }

  // 工作日 · 牛马作息表
  if (hour < 7) return `凌晨${hour}点还没睡？是加班到现在还是焦虑到现在？ 🥲`;
  if (hour < 9) return `周${dayName}早上${hour}点，牛马还在被窝里，闹钟已经按掉三次了 😴`;
  if (hour === 9) return `周${dayName}上午9点，牛马刚睁眼，离到公司还有一小时，不急 🥱`;
  if (t < 10.5) return `周${dayName}上午${hour}点，牛马刚到工位，先泡杯咖啡打开电脑假装在启动 ☕`;
  if (hour < 12) return `周${dayName}上午${hour}点，假装工作了一会儿，该想中午吃什么了 🤔`;
  if (t < 12.5) return `周${dayName}中午12点，午饭时间！今天吃什么不重要，重要的是慢慢吃 🍜`;
  if (t < 14) return `周${dayName}下午${hour}点，饭后遛弯中，这是牛马一天中最自由的时刻 🚶`;
  if (t < 14.5) return `周${dayName}下午2点，趴在工位上午睡，口水流到键盘上了 😪💤`;
  if (hour < 16) return `周${dayName}下午${hour}点，午睡醒了，假装打开IDE，实际上在刷手机 📱`;
  if (hour < 17) return `周${dayName}下午${hour}点，奶茶时间到！今天喝什么？牛马的快乐就这么简单 🧋`;
  if (hour < 18) return `周${dayName}下午${hour}点，奶茶喝完了，离晚饭还有一会儿，再摸一下 🐟`;
  if (t < 19) return `周${dayName}傍晚${hour}点，晚饭+遛弯时间，牛马的第二次放风 🌆`;
  if (hour < 21) return `周${dayName}晚上${hour}点，回到工位开始"工作"——打开B站叫工作吗？ 📺`;
  if (t < 21.5) return `周${dayName}晚上9点半，再坚持一下！打车报销的时间快到了 🚕`;
  if (hour < 22) return `周${dayName}晚上${hour}点，打车走人！今天又是充实的一天（并没有） 🏃‍♂️💨`;
  if (hour < 23) return `周${dayName}晚上${hour}点，到家了，躺床上刷手机到凌晨，明天继续循环 📱🛏️`;
  return `周${dayName}深夜${hour}点，还没睡？明天10点还要"早起"上班呢 🌚`;
}

function Intro({ onStart }: { onStart: () => void }) {
  const greeting = useMemo(() => getGreeting(), []);

  return (
    <main className="min-h-screen flex flex-col px-6 py-16">
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl w-full mx-auto text-center">
        <div className="text-6xl mb-6">🐂</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
          码农牛马测试
        </h1>

        <button
          onClick={onStart}
          className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform"
        >
          开始测试 →
        </button>

        <p className="mt-10 text-sm text-neutral-400 leading-relaxed px-4">
          {greeting}
        </p>
      </div>

      <div className="text-center">
        <p className="text-xs text-neutral-600">
          免责声明：本测试纯属娱乐，结果不代表真实人格，更不代表绩效。
        </p>
        <p className="mt-2 text-xs text-neutral-700 font-mono">v{VERSION}</p>
      </div>
    </main>
  );
}

// ============================================================

function Quiz({
  q,
  idx,
  total,
  onAnswer,
}: {
  q: Question;
  idx: number;
  total: number;
  onAnswer: (v: Axis | null) => void;
}) {
  const progress = (idx / total) * 100;

  return (
    <main className="h-screen flex flex-col px-6 py-10 max-w-2xl mx-auto overflow-hidden">
      {/* 顶部进度条 — 固定高度 */}
      <div className="shrink-0 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-neutral-500 font-mono">
            {String(idx + 1).padStart(2, '0')} / {total}
          </span>
          <span className="text-xs text-neutral-500">码农牛马测试</span>
        </div>
        <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 题目区域 — 靠上 */}
      <div className="shrink-0 pt-4 pb-8">
        <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
          {q.scenario}
        </h2>
      </div>

      {/* 选项区域 — 固定在屏幕中上部 */}
      <div className="flex-1 flex flex-col justify-start pt-[10vh] gap-3 min-h-0">
        {q.choices.map((c, i) => (
          <button
            key={i}
            onClick={() => onAnswer(c.value)}
            className="group p-5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-xl text-left transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 shrink-0 rounded-full border border-neutral-700 group-hover:border-white flex items-center justify-center text-sm text-neutral-500 group-hover:text-white font-mono transition">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="text-neutral-200 group-hover:text-white text-base md:text-lg">
                {c.text}
              </div>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}

// ============================================================

const FAMOUS_QUOTES = [
  { text: '有些人出生在罗马，有些人出生就是牛马。', author: '鲁迅（可能说过）' },
  { text: '我思故我在，我卷故我累。', author: '笛卡尔·加班版' },
  { text: '生活不止眼前的苟且，还有明天和后天的苟且。', author: '高晓松·打工版' },
  { text: '天将降大任于斯人也，必先让他改需求。', author: '孟子·互联网版' },
  { text: '人生就像一盒巧克力，你永远不知道下一个 bug 在哪。', author: '阿甘·程序员版' },
  { text: '不要问公司能为你做什么，要问你今晚能不能加班。', author: '肯尼迪·HR版' },
  { text: '世界上只有两种程序员：被骂过的和没被发现的。', author: '佚名' },
  { text: '三十年河东，三十年河西，打工人永远在河里。', author: '民间智慧' },
  { text: '给我一个支点，我能撬动整个项目的进度条——往后退。', author: '阿基米德·PM版' },
  { text: '代码写得好，不如PPT做得好。', author: '职场达尔文' },
  { text: '我来，我见，我加班。', author: '凯撒·字节版' },
  { text: '知识就是力量，但改不了你是牛马的事实。', author: '培根·现实版' },
  { text: '世上无难事，只要肯放弃。', author: '毛主席·摸鱼版' },
  { text: '每一个成功的项目背后，都有一群濒临崩溃的牛马。', author: '项目管理学' },
  { text: '长风破浪会有时，直挂云帆去摸鱼。', author: '李白·当代版' },
  { text: '落霞与孤鹜齐飞，加班与bug共一色。', author: '王勃·996版' },
  { text: '今朝有酒今朝醉，明日bug明日改。', author: '罗隐·程序员版' },
  { text: '问君能有几多愁，恰似上线前夜改需求。', author: '李煜·产品版' },
  { text: '少壮不努力，老大当牛马。', author: '汉乐府·现实版' },
  { text: '书山有路勤为径，代码无涯苦作舟。', author: '韩愈·码农版' },
  { text: '一入代码深似海，从此摸鱼是路人。', author: '崔郊·转行版' },
  { text: '两个黄鹂鸣翠柳，领导又把需求改。', author: '杜甫·敏捷版' },
  { text: '床前明月光，疑是代码亮。举头望进度，低头写bug。', author: '李白·通宵版' },
  { text: '海内存知己，天涯共加班。', author: '王勃·互联网版' },
  { text: '春眠不觉晓，醒来改bug。夜来需求声，代码删多少。', author: '孟浩然·迭代版' },
  { text: '横看成岭侧成峰，怎么看都是在摸鱼。', author: '苏轼·工位版' },
  { text: '桃花潭水深千尺，不及领导画的饼。', author: '李白·团建版' },
  { text: '千山鸟飞绝，万径人踪灭。独钓工位中，加班又一夜。', author: '柳宗元·996版' },
  { text: '停车坐爱枫林晚，不想上班想躺平。', author: '杜牧·周一版' },
  { text: '曾经沧海难为水，除却摸鱼不是班。', author: '元稹·打工版' },
  { text: '黑发不知勤学早，白首方悔入错行。', author: '颜真卿·CS版' },
  { text: '莫愁前路无知己，天下谁人不加班。', author: '高适·大厂版' },
];

function pickQuote() {
  return FAMOUS_QUOTES[Math.floor(Math.random() * FAMOUS_QUOTES.length)];
}

function Result({ type, onReset }: { type: Niuma; onReset: () => void }) {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);
  const [shareTip, setShareTip] = useState('');
  const quote = useMemo(() => pickQuote(), []);

  const handleShare = useCallback(async () => {
    setSharing(true);
    try {
      const svgEl = avatarRef.current?.querySelector('svg') as SVGSVGElement | null;
      const blob = await generateShareImage(type, svgEl, quote);
      const file = new File([blob], `niumati-${type.code}.jpg`, { type: 'image/jpeg' });

      // 优先使用系统分享（手机端）
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `我是${type.name}`,
        });
        setShareTip('分享成功');
        setTimeout(() => setShareTip(''), 2000);
        return;
      }

      // 桌面端：复制到剪贴板（剪贴板需要 PNG）
      const pngCanvas = document.createElement('canvas');
      const img = new Image();
      const blobUrl = URL.createObjectURL(blob);
      await new Promise<void>((resolve) => {
        img.onload = () => {
          pngCanvas.width = img.width;
          pngCanvas.height = img.height;
          pngCanvas.getContext('2d')!.drawImage(img, 0, 0);
          URL.revokeObjectURL(blobUrl);
          resolve();
        };
        img.src = blobUrl;
      });
      const pngBlob = await new Promise<Blob>((resolve) => {
        pngCanvas.toBlob((b) => resolve(b!), 'image/png');
      });
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': pngBlob }),
      ]);
      setShareTip('已复制到剪贴板');
      setTimeout(() => setShareTip(''), 2000);
    } catch (e) {
      // 用户取消分享不算错误
      if (e instanceof Error && e.name === 'AbortError') {
        setSharing(false);
        return;
      }
      // 降级为下载
      try {
        const svgEl = avatarRef.current?.querySelector('svg') as SVGSVGElement | null;
        const blob = await generateShareImage(type, svgEl, quote);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `niumati-${type.code}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
        setShareTip('已下载图片');
        setTimeout(() => setShareTip(''), 2000);
      } catch {
        // ignore
      }
    } finally {
      setSharing(false);
    }
  }, [type, quote]);

  return (
    <main className="min-h-screen flex flex-col px-6 py-12 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="shrink-0" ref={avatarRef}>
          <Avatar code={type.code} size={100} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-neutral-500 mb-1 tracking-widest uppercase">
            你的牛马类型
          </p>
          <div className="font-mono text-3xl md:text-4xl font-bold tracking-wider mb-1">
            {type.code}
          </div>
          <h1 className="text-xl md:text-2xl font-bold mb-1">{type.name}</h1>
          <p className="text-neutral-400 italic text-sm">「{type.tagline}」</p>
        </div>
      </div>

      <p className="text-neutral-300 leading-loose mb-10 text-base md:text-lg">
        {type.description}
      </p>

      <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 mb-6 text-center">
        <p className="text-neutral-300 italic text-base leading-relaxed mb-2">
          「{quote.text}」
        </p>
        <p className="text-neutral-600 text-xs">—— {quote.author}</p>
      </div>

      <div className="flex justify-center mb-10">
        <QRCodeBlock size={120} />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onReset}
          className="flex-1 px-6 py-3 border border-neutral-700 hover:bg-neutral-900 rounded-full transition"
        >
          再测一次
        </button>
        <button
          onClick={handleShare}
          disabled={sharing}
          className="flex-1 px-6 py-3 bg-white text-black hover:bg-neutral-200 rounded-full font-semibold transition disabled:opacity-50"
        >
          {sharing ? '生成中...' : shareTip || '分享结果'}
        </button>
      </div>

      <p className="mt-8 text-center text-xs text-neutral-700 font-mono">v{VERSION}</p>
    </main>
  );
}
