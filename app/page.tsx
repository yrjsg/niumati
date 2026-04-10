'use client';

import { useState, useRef, useCallback } from 'react';
import Avatar from './avatar';
import { generateShareImage } from './share';
import {
  questions,
  computeResult,
  getTypeByCode,
  type Axis,
  type Niuma,
  type Question,
} from '@/lib/data';

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
  return picked;
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

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center">
        <div className="text-6xl mb-6">🐂</div>
        <h1 className="text-6xl md:text-7xl font-bold mb-12 tracking-tight">
          牛马测试
        </h1>

        <button
          onClick={onStart}
          className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform"
        >
          开始测试 →
        </button>

        <p className="mt-10 text-xs text-neutral-600">
          免责声明：本测试纯属娱乐，结果不代表真实人格，更不代表绩效。
        </p>
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
    <main className="min-h-screen flex flex-col px-6 py-10 max-w-2xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-neutral-500 font-mono">
            {String(idx + 1).padStart(2, '0')} / {total}
          </span>
          <span className="text-xs text-neutral-500">牛马测试</span>
        </div>
        <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 leading-relaxed">
          {q.scenario}
        </h2>

        <div className="flex flex-col gap-4">
          {q.choices.map((c, i) => (
            <button
              key={i}
              onClick={() => onAnswer(c.value)}
              className="group p-6 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-xl text-left transition-all"
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
      </div>
    </main>
  );
}

// ============================================================

function Result({ type, onReset }: { type: Niuma; onReset: () => void }) {
  const nemesis = getTypeByCode(type.nemesis);
  const avatarRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);

  const handleShare = useCallback(async () => {
    setSharing(true);
    try {
      const svgEl = avatarRef.current?.querySelector('svg') as SVGSVGElement | null;
      const blob = await generateShareImage(type, svgEl);
      const file = new File([blob], `niumati-${type.code}.png`, { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: '牛马测试',
          text: `我是【${type.code} · ${type.name}】`,
          files: [file],
        });
      } else {
        // 降级：下载图片
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `niumati-${type.code}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch {
      // 用户取消分享，忽略
    } finally {
      setSharing(false);
    }
  }, [type]);

  return (
    <main className="min-h-screen flex flex-col px-6 py-12 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="mb-4" ref={avatarRef}>
          <Avatar code={type.code} size={160} />
        </div>
        <p className="text-xs text-neutral-500 mb-2 tracking-widest uppercase">
          你的牛马类型
        </p>
        <div className="font-mono text-5xl font-bold tracking-wider mb-4">
          {type.code}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{type.name}</h1>
        <p className="text-neutral-400 italic">「{type.tagline}」</p>
      </div>

      <p className="text-neutral-300 leading-loose mb-10 text-base md:text-lg">
        {type.description}
      </p>

      <div className="space-y-5 mb-12">
        <Info label="本命技能" value={type.skill} />
        <Info label="口头禅" value={type.quotes.map((q) => `"${q}"`).join(' · ')} />
        <Info
          label="天敌"
          value={
            nemesis
              ? `${nemesis.emoji} ${nemesis.name} (${nemesis.code})`
              : '—'
          }
        />
        <Info label="团建行为" value={type.teamBuilding} />
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
          {sharing ? '生成中...' : '分享结果'}
        </button>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-neutral-800 pl-4">
      <div className="text-xs text-neutral-500 mb-1 tracking-wide">{label}</div>
      <div className="text-neutral-200">{value}</div>
    </div>
  );
}
