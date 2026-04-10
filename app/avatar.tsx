/**
 * 牛马 TI · 16 种类型头像
 * 风格参考 16personalities：圆脸小人 + 标志性配饰/表情 + 独特配色
 */

type AvatarProps = {
  code: string;
  size?: number;
};

export default function Avatar({ code, size = 200 }: AvatarProps) {
  const config = avatarConfigs[code];
  if (!config) return null;
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.38; // 头的半径

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* 背景圆 */}
      <circle cx={cx} cy={cy} r={s / 2} fill={config.bg} />

      {/* 身体（简化为半圆） */}
      <ellipse
        cx={cx}
        cy={s * 0.92}
        rx={s * 0.28}
        ry={s * 0.14}
        fill={config.bodyColor}
      />

      {/* 头 */}
      <circle cx={cx} cy={cy} r={r} fill={config.skinColor} />

      {/* 头发 */}
      {config.hair(cx, cy, r, s)}

      {/* 眼睛 */}
      {config.eyes(cx, cy, r, s)}

      {/* 嘴巴 */}
      {config.mouth(cx, cy, r, s)}

      {/* 配饰 */}
      {config.accessory(cx, cy, r, s)}
    </svg>
  );
}

// ============================================================
// 辅助绘制函数
// ============================================================

function normalEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      <circle cx={cx - gap} cy={ey} r={s * 0.028} fill="#2d2d2d" />
      <circle cx={cx + gap} cy={ey} r={s * 0.028} fill="#2d2d2d" />
    </>
  );
}

function tiredEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      <line x1={cx - gap - s*0.03} y1={ey} x2={cx - gap + s*0.03} y2={ey} stroke="#2d2d2d" strokeWidth={s*0.015} strokeLinecap="round" />
      <line x1={cx + gap - s*0.03} y1={ey} x2={cx + gap + s*0.03} y2={ey} stroke="#2d2d2d" strokeWidth={s*0.015} strokeLinecap="round" />
      {/* 眼袋 */}
      <path d={`M${cx - gap - s*0.025} ${ey + s*0.02} Q${cx - gap} ${ey + s*0.04} ${cx - gap + s*0.025} ${ey + s*0.02}`} stroke="#c4a882" strokeWidth={s*0.008} fill="none" />
      <path d={`M${cx + gap - s*0.025} ${ey + s*0.02} Q${cx + gap} ${ey + s*0.04} ${cx + gap + s*0.025} ${ey + s*0.02}`} stroke="#c4a882" strokeWidth={s*0.008} fill="none" />
    </>
  );
}

function sparkleEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      <circle cx={cx - gap} cy={ey} r={s * 0.035} fill="#2d2d2d" />
      <circle cx={cx + gap} cy={ey} r={s * 0.035} fill="#2d2d2d" />
      <circle cx={cx - gap + s*0.01} cy={ey - s*0.01} r={s * 0.012} fill="white" />
      <circle cx={cx + gap + s*0.01} cy={ey - s*0.01} r={s * 0.012} fill="white" />
    </>
  );
}

function angryEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      {/* 愤怒的眉毛 */}
      <line x1={cx - gap - s*0.03} y1={ey - s*0.05} x2={cx - gap + s*0.02} y2={ey - s*0.035} stroke="#2d2d2d" strokeWidth={s*0.018} strokeLinecap="round" />
      <line x1={cx + gap + s*0.03} y1={ey - s*0.05} x2={cx + gap - s*0.02} y2={ey - s*0.035} stroke="#2d2d2d" strokeWidth={s*0.018} strokeLinecap="round" />
      <circle cx={cx - gap} cy={ey} r={s * 0.028} fill="#2d2d2d" />
      <circle cx={cx + gap} cy={ey} r={s * 0.028} fill="#2d2d2d" />
    </>
  );
}

function cryingEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      {/* 闭合弧线眼 */}
      <path d={`M${cx - gap - s*0.025} ${ey} Q${cx - gap} ${ey + s*0.025} ${cx - gap + s*0.025} ${ey}`} stroke="#2d2d2d" strokeWidth={s*0.015} fill="none" strokeLinecap="round" />
      <path d={`M${cx + gap - s*0.025} ${ey} Q${cx + gap} ${ey + s*0.025} ${cx + gap + s*0.025} ${ey}`} stroke="#2d2d2d" strokeWidth={s*0.015} fill="none" strokeLinecap="round" />
      {/* 泪滴 */}
      <ellipse cx={cx - gap + s*0.03} cy={ey + s*0.04} rx={s*0.012} ry={s*0.018} fill="#7cb5e8" />
      <ellipse cx={cx + gap + s*0.03} cy={ey + s*0.04} rx={s*0.012} ry={s*0.018} fill="#7cb5e8" />
    </>
  );
}

function zenEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      <path d={`M${cx - gap - s*0.025} ${ey} Q${cx - gap} ${ey - s*0.02} ${cx - gap + s*0.025} ${ey}`} stroke="#2d2d2d" strokeWidth={s*0.015} fill="none" strokeLinecap="round" />
      <path d={`M${cx + gap - s*0.025} ${ey} Q${cx + gap} ${ey - s*0.02} ${cx + gap + s*0.025} ${ey}`} stroke="#2d2d2d" strokeWidth={s*0.015} fill="none" strokeLinecap="round" />
    </>
  );
}

function sneakyEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      {/* 半眯的眼 */}
      <path d={`M${cx - gap - s*0.028} ${ey} Q${cx - gap} ${ey - s*0.015} ${cx - gap + s*0.028} ${ey}`} stroke="#2d2d2d" strokeWidth={s*0.018} fill="none" strokeLinecap="round" />
      <path d={`M${cx + gap - s*0.028} ${ey} Q${cx + gap} ${ey - s*0.015} ${cx + gap + s*0.028} ${ey}`} stroke="#2d2d2d" strokeWidth={s*0.018} fill="none" strokeLinecap="round" />
    </>
  );
}

function dotEyes(cx: number, cy: number, _r: number, s: number) {
  const ey = cy - s * 0.02;
  const gap = s * 0.08;
  return (
    <>
      <circle cx={cx - gap} cy={ey} r={s * 0.018} fill="#2d2d2d" />
      <circle cx={cx + gap} cy={ey} r={s * 0.018} fill="#2d2d2d" />
    </>
  );
}

// 嘴巴
function smile(cx: number, cy: number, _r: number, s: number) {
  const my = cy + s * 0.08;
  return <path d={`M${cx - s*0.05} ${my} Q${cx} ${my + s*0.04} ${cx + s*0.05} ${my}`} stroke="#2d2d2d" strokeWidth={s*0.012} fill="none" strokeLinecap="round" />;
}

function flatMouth(cx: number, cy: number, _r: number, s: number) {
  const my = cy + s * 0.08;
  return <line x1={cx - s*0.04} y1={my} x2={cx + s*0.04} y2={my} stroke="#2d2d2d" strokeWidth={s*0.012} strokeLinecap="round" />;
}

function frownMouth(cx: number, cy: number, _r: number, s: number) {
  const my = cy + s * 0.09;
  return <path d={`M${cx - s*0.04} ${my} Q${cx} ${my - s*0.03} ${cx + s*0.04} ${my}`} stroke="#2d2d2d" strokeWidth={s*0.012} fill="none" strokeLinecap="round" />;
}

function openMouth(cx: number, cy: number, _r: number, s: number) {
  const my = cy + s * 0.08;
  return <ellipse cx={cx} cy={my} rx={s*0.03} ry={s*0.025} fill="#2d2d2d" />;
}

function smirkMouth(cx: number, cy: number, _r: number, s: number) {
  const my = cy + s * 0.08;
  return <path d={`M${cx - s*0.03} ${my} Q${cx + s*0.02} ${my + s*0.03} ${cx + s*0.05} ${my - s*0.01}`} stroke="#2d2d2d" strokeWidth={s*0.012} fill="none" strokeLinecap="round" />;
}

function bigSmile(cx: number, cy: number, _r: number, s: number) {
  const my = cy + s * 0.07;
  return (
    <>
      <path d={`M${cx - s*0.06} ${my} Q${cx} ${my + s*0.06} ${cx + s*0.06} ${my}`} stroke="#2d2d2d" strokeWidth={s*0.012} fill="none" strokeLinecap="round" />
    </>
  );
}

// 头发
function normalHair(color: string) {
  return (cx: number, cy: number, r: number, s: number) => (
    <path
      d={`M${cx - r} ${cy - s*0.02} Q${cx - r * 0.8} ${cy - r - s*0.08} ${cx} ${cy - r - s*0.04} Q${cx + r * 0.8} ${cy - r - s*0.08} ${cx + r} ${cy - s*0.02}`}
      fill={color}
    />
  );
}

function messyHair(color: string) {
  return (cx: number, cy: number, r: number, s: number) => (
    <>
      <path
        d={`M${cx - r} ${cy - s*0.02} Q${cx - r * 0.8} ${cy - r - s*0.1} ${cx - s*0.05} ${cy - r - s*0.06} L${cx} ${cy - r - s*0.12} L${cx + s*0.05} ${cy - r - s*0.06} Q${cx + r * 0.8} ${cy - r - s*0.1} ${cx + r} ${cy - s*0.02}`}
        fill={color}
      />
    </>
  );
}

function neatHair(color: string) {
  return (cx: number, cy: number, r: number, s: number) => (
    <>
      <path
        d={`M${cx - r - s*0.02} ${cy} Q${cx - r} ${cy - r - s*0.06} ${cx} ${cy - r - s*0.03} Q${cx + r} ${cy - r - s*0.06} ${cx + r + s*0.02} ${cy}`}
        fill={color}
      />
      {/* 偏分线 */}
      <line x1={cx - s*0.04} y1={cy - r - s*0.02} x2={cx - s*0.02} y2={cy - r + s*0.06} stroke={darken(color)} strokeWidth={s*0.008} />
    </>
  );
}

function spikyHair(color: string) {
  return (cx: number, cy: number, r: number, s: number) => (
    <path
      d={`M${cx - r} ${cy} Q${cx - r*0.9} ${cy - r*0.8} ${cx - r*0.5} ${cy - r - s*0.08} L${cx - r*0.2} ${cy - r} L${cx} ${cy - r - s*0.1} L${cx + r*0.2} ${cy - r} L${cx + r*0.5} ${cy - r - s*0.08} Q${cx + r*0.9} ${cy - r*0.8} ${cx + r} ${cy}`}
      fill={color}
    />
  );
}

function shortHair(color: string) {
  return (cx: number, cy: number, r: number, s: number) => (
    <path
      d={`M${cx - r} ${cy - s*0.04} Q${cx - r*0.5} ${cy - r - s*0.04} ${cx} ${cy - r - s*0.02} Q${cx + r*0.5} ${cy - r - s*0.04} ${cx + r} ${cy - s*0.04}`}
      fill={color}
    />
  );
}

function darken(hex: string): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 30);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 30);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 30);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// 配饰
function noAccessory() { return () => null; }

function crown() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      <polygon
        points={`${cx - s*0.08},${cy - r - s*0.04} ${cx - s*0.06},${cy - r - s*0.12} ${cx - s*0.03},${cy - r - s*0.06} ${cx},${cy - r - s*0.14} ${cx + s*0.03},${cy - r - s*0.06} ${cx + s*0.06},${cy - r - s*0.12} ${cx + s*0.08},${cy - r - s*0.04}`}
        fill="#FFD700"
        stroke="#DAA520"
        strokeWidth={s*0.005}
      />
    </g>
  );
}

function sunglasses() {
  return (cx: number, cy: number, _r: number, s: number) => {
    const ey = cy - s * 0.02;
    const gap = s * 0.08;
    return (
      <g>
        <rect x={cx - gap - s*0.04} y={ey - s*0.025} width={s*0.08} height={s*0.05} rx={s*0.01} fill="#1a1a1a" />
        <rect x={cx + gap - s*0.04} y={ey - s*0.025} width={s*0.08} height={s*0.05} rx={s*0.01} fill="#1a1a1a" />
        <line x1={cx - gap + s*0.04} y1={ey} x2={cx + gap - s*0.04} y2={ey} stroke="#1a1a1a" strokeWidth={s*0.012} />
      </g>
    );
  };
}

function coffee() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      {/* 杯子 */}
      <rect x={cx + r - s*0.02} y={cy + s*0.02} width={s*0.08} height={s*0.1} rx={s*0.01} fill="#8B4513" />
      <rect x={cx + r + s*0.05} y={cy + s*0.04} width={s*0.03} height={s*0.05} rx={s*0.015} fill="none" stroke="#8B4513" strokeWidth={s*0.008} />
      {/* 热气 */}
      <path d={`M${cx + r + s*0.01} ${cy} Q${cx + r + s*0.02} ${cy - s*0.02} ${cx + r + s*0.01} ${cy - s*0.04}`} stroke="#999" strokeWidth={s*0.006} fill="none" />
      <path d={`M${cx + r + s*0.04} ${cy} Q${cx + r + s*0.03} ${cy - s*0.02} ${cx + r + s*0.04} ${cy - s*0.04}`} stroke="#999" strokeWidth={s*0.006} fill="none" />
    </g>
  );
}

function megaphone() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      <polygon
        points={`${cx + r - s*0.02},${cy + s*0.04} ${cx + r + s*0.1},${cy - s*0.02} ${cx + r + s*0.1},${cy + s*0.1} `}
        fill="#FF6B35"
      />
      <rect x={cx + r - s*0.04} y={cy + s*0.03} width={s*0.04} height={s*0.06} rx={s*0.01} fill="#FF6B35" />
    </g>
  );
}

function firehat() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      {/* 帽檐 */}
      <ellipse cx={cx} cy={cy - r - s*0.01} rx={r + s*0.04} ry={s*0.03} fill="#CC0000" />
      {/* 帽身 */}
      <rect x={cx - s*0.1} y={cy - r - s*0.1} width={s*0.2} height={s*0.1} rx={s*0.03} fill="#CC0000" />
      {/* 徽章 */}
      <circle cx={cx} cy={cy - r - s*0.06} r={s*0.02} fill="#FFD700" />
    </g>
  );
}

function mask() {
  return (cx: number, cy: number, _r: number, s: number) => {
    const my = cy + s * 0.01;
    return (
      <g>
        {/* 面具轮廓（半脸） */}
        <path d={`M${cx - s*0.12} ${my - s*0.06} Q${cx - s*0.12} ${my + s*0.08} ${cx} ${my + s*0.1} Q${cx + s*0.12} ${my + s*0.08} ${cx + s*0.12} ${my - s*0.06}`} fill="none" stroke="#9B59B6" strokeWidth={s*0.01} strokeDasharray={`${s*0.02} ${s*0.015}`} />
      </g>
    );
  };
}

function phone() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      <rect x={cx + r - s*0.01} y={cy - s*0.02} width={s*0.06} height={s*0.1} rx={s*0.008} fill="#333" stroke="#555" strokeWidth={s*0.004} />
      <rect x={cx + r} y={cy - s*0.01} width={s*0.04} height={s*0.06} rx={s*0.002} fill="#4488ff" />
    </g>
  );
}

function fishingRod() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      <line x1={cx + r - s*0.02} y1={cy + s*0.06} x2={cx + r + s*0.1} y2={cy - s*0.08} stroke="#8B7355" strokeWidth={s*0.008} strokeLinecap="round" />
      <line x1={cx + r + s*0.1} y1={cy - s*0.08} x2={cx + r + s*0.1} y2={cy + s*0.04} stroke="#aaa" strokeWidth={s*0.004} />
      {/* 小鱼 */}
      <ellipse cx={cx + r + s*0.1} cy={cy + s*0.06} rx={s*0.02} ry={s*0.012} fill="#4FC3F7" />
    </g>
  );
}

function pillow() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      <ellipse cx={cx - r + s*0.02} cy={cy + s*0.06} rx={s*0.06} ry={s*0.04} fill="#B39DDB" stroke="#9575CD" strokeWidth={s*0.005} />
      <text x={cx - r + s*0.02} y={cy + s*0.07} textAnchor="middle" fontSize={s*0.025} fill="#7E57C2">Z</text>
    </g>
  );
}

function halo() {
  return (cx: number, cy: number, r: number, s: number) => (
    <ellipse cx={cx} cy={cy - r - s*0.06} rx={s*0.1} ry={s*0.025} fill="none" stroke="#FFD700" strokeWidth={s*0.008} />
  );
}

function teaCup() {
  return (cx: number, cy: number, r: number, s: number) => (
    <g>
      <rect x={cx + r - s*0.02} y={cy + s*0.02} width={s*0.07} height={s*0.08} rx={s*0.01} fill="#81C784" />
      <rect x={cx + r + s*0.04} y={cy + s*0.035} width={s*0.025} height={s*0.04} rx={s*0.012} fill="none" stroke="#81C784" strokeWidth={s*0.006} />
    </g>
  );
}

// ============================================================
// 16 种类型的配置
// ============================================================

type AvatarConfig = {
  bg: string;
  skinColor: string;
  bodyColor: string;
  hair: (cx: number, cy: number, r: number, s: number) => React.ReactNode;
  eyes: (cx: number, cy: number, r: number, s: number) => React.ReactNode;
  mouth: (cx: number, cy: number, r: number, s: number) => React.ReactNode;
  accessory: (cx: number, cy: number, r: number, s: number) => React.ReactNode;
};

const avatarConfigs: Record<string, AvatarConfig> = {
  // 救火队长 - 消防帽，疲惫但坚定
  JBLX: {
    bg: '#2C1810',
    skinColor: '#F5D6B8',
    bodyColor: '#CC0000',
    hair: shortHair('#4A3728'),
    eyes: tiredEyes,
    mouth: flatMouth,
    accessory: firehat(),
  },
  // 亲儿子 - 皇冠，自信微笑
  JBLZ: {
    bg: '#1A1A2E',
    skinColor: '#FDEBD0',
    bodyColor: '#2C3E7B',
    hair: neatHair('#2C2C2C'),
    eyes: sparkleEyes,
    mouth: smile,
    accessory: crown(),
  },
  // 技术烈士 - 黑眼圈，蓬乱头发，咖啡
  JBPX: {
    bg: '#1C1C2E',
    skinColor: '#E8CFA8',
    bodyColor: '#333344',
    hair: messyHair('#3D2B1F'),
    eyes: tiredEyes,
    mouth: frownMouth,
    accessory: coffee(),
  },
  // 卷生卷死 - 骷髅般疲惫，咖啡续命
  JBPZ: {
    bg: '#1A1A1A',
    skinColor: '#DEC5A0',
    bodyColor: '#2D2D2D',
    hair: messyHair('#2A2A2A'),
    eyes: tiredEyes,
    mouth: flatMouth,
    accessory: coffee(),
  },
  // 技术网红 - 喇叭，时尚发型
  JSLX: {
    bg: '#2D1B00',
    skinColor: '#F5D6B8',
    bodyColor: '#FF6B35',
    hair: spikyHair('#8B4513'),
    eyes: sparkleEyes,
    mouth: bigSmile,
    accessory: megaphone(),
  },
  // 内卷老六 - 墨镜，坏笑
  JSLZ: {
    bg: '#1A1A2E',
    skinColor: '#F0D0A0',
    bodyColor: '#1A1A1A',
    hair: neatHair('#1A1A1A'),
    eyes: sneakyEyes,
    mouth: smirkMouth,
    accessory: sunglasses(),
  },
  // 愤怒中坚 - 怒目，拳头
  JSPX: {
    bg: '#2E1A1A',
    skinColor: '#F0C8A0',
    bodyColor: '#8B0000',
    hair: spikyHair('#3D2B1F'),
    eyes: angryEyes,
    mouth: openMouth,
    accessory: noAccessory(),
  },
  // 破防汇报家 - 哭脸
  JSPZ: {
    bg: '#1A2030',
    skinColor: '#FDEBD0',
    bodyColor: '#4A5568',
    hair: normalHair('#4A3728'),
    eyes: cryingEyes,
    mouth: frownMouth,
    accessory: noAccessory(),
  },
  // 人间清醒 - 禅意，茶杯
  MBLX: {
    bg: '#1A2E1A',
    skinColor: '#F5D6B8',
    bodyColor: '#2E7D32',
    hair: shortHair('#3D2B1F'),
    eyes: zenEyes,
    mouth: smile,
    accessory: teaCup(),
  },
  // 老实人 Pro - 大笑脸，憨厚
  MBLZ: {
    bg: '#2E2A1A',
    skinColor: '#FDEBD0',
    bodyColor: '#5D4037',
    hair: normalHair('#4A3728'),
    eyes: normalEyes,
    mouth: bigSmile,
    accessory: noAccessory(),
  },
  // 祖传牛马 - 光环（苦行僧），疲惫
  MBPX: {
    bg: '#1E1E1E',
    skinColor: '#DEB887',
    bodyColor: '#3E3E3E',
    hair: shortHair('#2A2A2A'),
    eyes: tiredEyes,
    mouth: frownMouth,
    accessory: halo(),
  },
  // 沉默的羔羊 - 小小的，缩起来
  MBPZ: {
    bg: '#252530',
    skinColor: '#FDEBD0',
    bodyColor: '#6B6B7B',
    hair: normalHair('#5A4A3A'),
    eyes: dotEyes,
    mouth: flatMouth,
    accessory: noAccessory(),
  },
  // 摸鱼侠客 - 钓竿，开心
  MSLX: {
    bg: '#0D2137',
    skinColor: '#F5D6B8',
    bodyColor: '#1565C0',
    hair: normalHair('#3D2B1F'),
    eyes: zenEyes,
    mouth: bigSmile,
    accessory: fishingRod(),
  },
  // 带薪演员 - 面具
  MSLZ: {
    bg: '#2E1A2E',
    skinColor: '#F0D0A0',
    bodyColor: '#6A1B9A',
    hair: neatHair('#2C2C2C'),
    eyes: sparkleEyes,
    mouth: smirkMouth,
    accessory: mask(),
  },
  // 躺平哲学家 - 靠枕，安详
  MSPX: {
    bg: '#1E1E2E',
    skinColor: '#F5D6B8',
    bodyColor: '#5C6BC0',
    hair: shortHair('#3D2B1F'),
    eyes: zenEyes,
    mouth: smile,
    accessory: pillow(),
  },
  // 假性奋斗 boy - 手机，偷笑
  MSPZ: {
    bg: '#1A1A28',
    skinColor: '#FDEBD0',
    bodyColor: '#37474F',
    hair: normalHair('#2C2C2C'),
    eyes: sneakyEyes,
    mouth: smirkMouth,
    accessory: phone(),
  },
};
