/**
 * 牛马 TI · 16 种类型头像 v2
 * 更卡通、更夸张、更有辨识度
 */

type AvatarProps = {
  code: string;
  size?: number;
};

export default function Avatar({ code, size = 200 }: AvatarProps) {
  const config = avatarConfigs[code];
  if (!config) return null;
  const s = size;

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* 背景 */}
      <circle cx="100" cy="100" r="100" fill={config.bg} />
      {config.render()}
    </svg>
  );
}

type AvatarConfig = {
  bg: string;
  render: () => React.ReactNode;
};

const avatarConfigs: Record<string, AvatarConfig> = {

  // ── JBLX 救火队长 ──────────────────────────
  // 消防帽 + 灭火器 + 疲惫黑眼圈 + 汗滴
  JBLX: {
    bg: '#2C1810',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#CC0000" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F5D6B8" />
        {/* 消防帽 - 大而醒目 */}
        <ellipse cx="100" cy="62" rx="58" ry="10" fill="#CC0000" />
        <rect x="72" y="35" width="56" height="30" rx="10" fill="#CC0000" />
        <rect x="72" y="55" width="56" height="10" fill="#AA0000" />
        <circle cx="100" cy="48" r="8" fill="#FFD700" />
        {/* 黑眼圈 */}
        <ellipse cx="82" cy="108" rx="10" ry="7" fill="#D4B896" />
        <ellipse cx="118" cy="108" rx="10" ry="7" fill="#D4B896" />
        {/* 眼睛 - 疲惫半睁 */}
        <path d="M75 103 Q82 97 89 103" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M111 103 Q118 97 125 103" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="102" r="2.5" fill="#2d2d2d" />
        <circle cx="118" cy="102" r="2.5" fill="#2d2d2d" />
        {/* 嘴巴 - 坚毅一字 */}
        <line x1="90" y1="120" x2="110" y2="120" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
        {/* 汗滴 */}
        <path d="M140 85 Q143 78 140 72" fill="#7CB5E8" />
        <circle cx="140" cy="86" r="3" fill="#7CB5E8" />
        {/* 灭火器 */}
        <rect x="148" y="110" width="14" height="35" rx="4" fill="#CC0000" stroke="#AA0000" strokeWidth="1.5" />
        <rect x="152" y="105" width="6" height="8" rx="2" fill="#555" />
        <path d="M158 108 L165 100" stroke="#555" strokeWidth="2" strokeLinecap="round" />
      </g>
    ),
  },

  // ── JBLZ 亲儿子 ──────────────────────────
  // 大皇冠 + 西装领带 + 闪闪眼 + 自信笑
  JBLZ: {
    bg: '#1A1A2E',
    render: () => (
      <g>
        {/* 身体 - 西装 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#1B2A5B" />
        {/* 领带 */}
        <polygon points="100,164 94,180 100,195 106,180" fill="#CC0000" />
        {/* 衬衫领子 */}
        <path d="M88 164 L100 174 L112 164" fill="white" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#FDEBD0" />
        {/* 整齐头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#1A1A3A" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#2C2C4C" />
        {/* 偏分线 */}
        <line x1="85" y1="53" x2="82" y2="72" stroke="#1A1A3A" strokeWidth="2" />
        {/* 皇冠 - 更大更闪 */}
        <polygon points="70,50 75,28 85,42 100,22 115,42 125,28 130,50" fill="#FFD700" stroke="#DAA520" strokeWidth="1.5" />
        <circle cx="85" cy="40" r="3" fill="#FF4444" />
        <circle cx="100" cy="30" r="3" fill="#4444FF" />
        <circle cx="115" cy="40" r="3" fill="#44CC44" />
        {/* 眼睛 - 闪闪大眼 */}
        <circle cx="82" cy="102" r="7" fill="#2d2d2d" />
        <circle cx="118" cy="102" r="7" fill="#2d2d2d" />
        <circle cx="85" cy="99" r="3" fill="white" />
        <circle cx="121" cy="99" r="3" fill="white" />
        <circle cx="80" cy="104" r="1.5" fill="white" />
        <circle cx="116" cy="104" r="1.5" fill="white" />
        {/* 自信微笑 */}
        <path d="M85 118 Q100 132 115 118" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 闪光 */}
        <path d="M145 70 L150 65 L148 72 L155 70 L148 75" fill="#FFD700" />
        <path d="M50 75 L45 70 L47 77 L40 75 L47 80" fill="#FFD700" />
      </g>
    ),
  },

  // ── JBPX 技术烈士 ──────────────────────────
  // 乱发 + 超大黑眼圈 + 咖啡 + 代码屏幕
  JBPX: {
    bg: '#1C1C2E',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#333344" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#E8CFA8" />
        {/* 蓬乱头发 */}
        <path d="M48 100 Q45 45 70 42 L65 30 L80 40 L85 25 L100 38 L115 25 L120 40 L135 30 L130 42 Q155 45 152 100" fill="#3D2B1F" />
        {/* 超大黑眼圈 */}
        <ellipse cx="80" cy="108" rx="14" ry="10" fill="#C4A070" />
        <ellipse cx="120" cy="108" rx="14" ry="10" fill="#C4A070" />
        {/* 眼睛 - 疲惫but专注 */}
        <line x1="72" y1="102" x2="88" y2="102" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
        <line x1="112" y1="102" x2="128" y2="102" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
        {/* 眼袋 */}
        <path d="M74 108 Q80 115 86 108" stroke="#B8956A" strokeWidth="1.5" fill="none" />
        <path d="M114 108 Q120 115 126 108" stroke="#B8956A" strokeWidth="1.5" fill="none" />
        {/* 嘴巴 - 苦涩 */}
        <path d="M90 122 Q100 117 110 122" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 大杯咖啡 */}
        <rect x="145" y="100" width="20" height="30" rx="4" fill="#6F4E37" />
        <rect x="163" y="108" width="8" height="14" rx="6" fill="none" stroke="#6F4E37" strokeWidth="2.5" />
        <path d="M150 97 Q152 90 150 84" stroke="#aaa" strokeWidth="1.5" fill="none" />
        <path d="M156 97 Q154 88 156 82" stroke="#aaa" strokeWidth="1.5" fill="none" />
        <path d="M162 97 Q164 91 162 86" stroke="#aaa" strokeWidth="1.5" fill="none" />
        <text x="155" y="120" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">BUG</text>
      </g>
    ),
  },

  // ── JBPZ 卷生卷死 ──────────────────────────
  // 红牛 + 枯槁脸 + 头顶冒烟 + 紧绷
  JBPZ: {
    bg: '#1A1A1A',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#2D2D2D" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#DEC5A0" />
        {/* 乱发 */}
        <path d="M48 100 Q46 48 75 45 L72 32 L88 42 L100 30 L112 42 L128 32 L125 45 Q154 48 152 100" fill="#2A2A2A" />
        {/* 头顶冒烟 */}
        <path d="M90 32 Q85 20 90 10" stroke="#666" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M100 28 Q95 15 100 5" stroke="#666" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M110 32 Q115 20 110 10" stroke="#666" strokeWidth="2" fill="none" opacity="0.6" />
        {/* 黑眼圈 */}
        <ellipse cx="82" cy="108" rx="12" ry="9" fill="#C4A882" />
        <ellipse cx="118" cy="108" rx="12" ry="9" fill="#C4A882" />
        {/* 眼睛 - 快要闭上 */}
        <line x1="74" y1="103" x2="90" y2="103" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
        <line x1="110" y1="103" x2="126" y2="103" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" />
        {/* 嘴巴 - 紧绷 */}
        <path d="M88 120 L95 122 L105 122 L112 120" stroke="#2d2d2d" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* 红牛 */}
        <rect x="145" y="95" width="16" height="32" rx="3" fill="#003DA5" stroke="#0050C8" strokeWidth="1" />
        <text x="153" y="116" textAnchor="middle" fontSize="7" fill="#FFD700" fontWeight="bold">R</text>
        {/* 倒计时数字 */}
        <text x="100" y="145" textAnchor="middle" fontSize="10" fill="#CC0000" fontFamily="monospace">03:47 AM</text>
      </g>
    ),
  },

  // ── JSLX 技术网红 ──────────────────────────
  // 潮发 + 话筒 + 闪光灯 + 大笑
  JSLX: {
    bg: '#2D1B00',
    render: () => (
      <g>
        {/* 身体 - 潮T */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#FF6B35" />
        <text x="100" y="188" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">TECH</text>
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F5D6B8" />
        {/* 潮流刺猬发 */}
        <path d="M48 100 Q45 60 60 50 L55 30 L70 45 L75 25 L85 42 L100 18 L115 42 L125 25 L130 45 L140 30 L145 50 Q155 60 152 100" fill="#FF8C00" />
        {/* 眼睛 - 闪亮大眼 */}
        <circle cx="82" cy="100" r="8" fill="#2d2d2d" />
        <circle cx="118" cy="100" r="8" fill="#2d2d2d" />
        <circle cx="85" cy="97" r="3.5" fill="white" />
        <circle cx="121" cy="97" r="3.5" fill="white" />
        {/* 大笑 */}
        <path d="M80 118 Q100 138 120 118" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M85 118 Q100 130 115 118" fill="white" />
        {/* 话筒 */}
        <circle cx="148" cy="108" r="10" fill="#333" stroke="#555" strokeWidth="2" />
        <rect x="146" y="118" width="4" height="25" rx="2" fill="#555" />
        {/* 点赞 */}
        <text x="42" y="80" fontSize="20">👍</text>
        <text x="36" y="70" fontSize="10" fill="#FF6B35">99+</text>
      </g>
    ),
  },

  // ── JSLZ 内卷老六 ──────────────────────────
  // 大墨镜 + 暗笑 + 背后有刀
  JSLZ: {
    bg: '#1A1A2E',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#1A1A1A" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F0D0A0" />
        {/* 整齐头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#1A1A1A" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#2A2A2A" />
        <line x1="88" y1="53" x2="85" y2="70" stroke="#1A1A1A" strokeWidth="2" />
        {/* 大墨镜 */}
        <rect x="64" y="92" width="28" height="22" rx="5" fill="#0a0a0a" />
        <rect x="108" y="92" width="28" height="22" rx="5" fill="#0a0a0a" />
        <line x1="92" y1="102" x2="108" y2="102" stroke="#0a0a0a" strokeWidth="3" />
        {/* 反光 */}
        <line x1="70" y1="96" x2="78" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
        <line x1="114" y1="96" x2="122" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
        {/* 坏笑 */}
        <path d="M88 122 Q96 128 105 125 Q112 122 116 118" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 背后的刀 */}
        <rect x="148" y="75" width="4" height="40" rx="1" fill="#888" />
        <polygon points="148,75 150,65 156,75" fill="#aaa" />
      </g>
    ),
  },

  // ── JSPX 愤怒中坚 ──────────────────────────
  // 怒发冲冠 + 青筋 + 拳头 + 嘴角抽搐
  JSPX: {
    bg: '#2E1A1A',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#8B0000" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F0C8A0" />
        {/* 怒发冲冠 */}
        <path d="M48 100 Q44 55 65 42 L58 18 L75 35 L82 10 L95 32 L100 5 L105 32 L118 10 L125 35 L142 18 L135 42 Q156 55 152 100" fill="#8B2500" />
        {/* 愤怒眉毛 */}
        <line x1="68" y1="86" x2="88" y2="92" stroke="#2d2d2d" strokeWidth="4" strokeLinecap="round" />
        <line x1="132" y1="86" x2="112" y2="92" stroke="#2d2d2d" strokeWidth="4" strokeLinecap="round" />
        {/* 圆眼怒视 */}
        <circle cx="80" cy="102" r="7" fill="white" />
        <circle cx="120" cy="102" r="7" fill="white" />
        <circle cx="82" cy="102" r="4.5" fill="#2d2d2d" />
        <circle cx="122" cy="102" r="4.5" fill="#2d2d2d" />
        {/* 青筋 */}
        <path d="M130 80 L134 76 L132 80 L136 78" stroke="#CC4444" strokeWidth="2" fill="none" />
        {/* 张嘴怒吼 */}
        <ellipse cx="100" cy="124" rx="12" ry="8" fill="#2d2d2d" />
        <path d="M90 121 L110 121" stroke="white" strokeWidth="1.5" />
        {/* 拳头 */}
        <circle cx="152" cy="130" r="14" fill="#F0C8A0" />
        <line x1="148" y1="124" x2="148" y2="136" stroke="#DDB090" strokeWidth="1.5" />
        <line x1="152" y1="122" x2="152" y2="136" stroke="#DDB090" strokeWidth="1.5" />
        <line x1="156" y1="124" x2="156" y2="136" stroke="#DDB090" strokeWidth="1.5" />
      </g>
    ),
  },

  // ── JSPZ 破防汇报家 ──────────────────────────
  // 大泪滴 + 嘴角下垂 + 纸巾
  JSPZ: {
    bg: '#1A2030',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#4A5568" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#FDEBD0" />
        {/* 普通头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#4A3728" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#5A4738" />
        {/* 眉毛 - 委屈 */}
        <path d="M70 88 Q80 84 90 90" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M110 90 Q120 84 130 88" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 闭眼含泪 */}
        <path d="M72 102 Q82 108 92 102" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M108 102 Q118 108 128 102" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 大泪滴 */}
        <path d="M88 108 Q90 118 86 125" fill="#7CB5E8" />
        <circle cx="87" cy="126" r="4" fill="#7CB5E8" />
        <path d="M124 108 Q126 118 122 125" fill="#7CB5E8" />
        <circle cx="123" cy="126" r="4" fill="#7CB5E8" />
        {/* 哭嘴 */}
        <path d="M88 132 Q100 126 112 132" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 纸巾 */}
        <rect x="140" y="110" width="22" height="16" rx="3" fill="white" opacity="0.9" />
        <rect x="142" y="126" width="18" height="8" rx="2" fill="#E0E0E0" />
      </g>
    ),
  },

  // ── MBLX 人间清醒 ──────────────────────────
  // 佛珠 + 茶杯 + 闭眼微笑 + 头顶莲花
  MBLX: {
    bg: '#1A2E1A',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#2E7D32" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F5D6B8" />
        {/* 短发 */}
        <path d="M48 100 Q52 55 100 52 Q148 55 152 100" fill="#3D2B1F" />
        <path d="M55 95 Q58 60 100 57 Q142 60 145 95" fill="#4D3B2F" />
        {/* 闭眼微笑 - 禅意 */}
        <path d="M72 100 Q82 94 92 100" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M108 100 Q118 94 128 100" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 佛系微笑 */}
        <path d="M85 118 Q100 130 115 118" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 腮红 */}
        <ellipse cx="72" cy="112" rx="8" ry="5" fill="#FFB6C1" opacity="0.4" />
        <ellipse cx="128" cy="112" rx="8" ry="5" fill="#FFB6C1" opacity="0.4" />
        {/* 茶杯 - 大的 */}
        <rect x="145" y="105" width="18" height="22" rx="4" fill="#81C784" />
        <rect x="161" y="110" width="8" height="12" rx="5" fill="none" stroke="#81C784" strokeWidth="2.5" />
        <path d="M150 102 Q152 95 150 90" stroke="#aaa" strokeWidth="1.5" fill="none" />
        <path d="M156 102 Q154 94 156 88" stroke="#aaa" strokeWidth="1.5" fill="none" />
        {/* 头顶 "佛" */}
        <text x="100" y="42" textAnchor="middle" fontSize="16" fill="#81C784" opacity="0.7">☯</text>
      </g>
    ),
  },

  // ── MBLZ 老实人Pro ──────────────────────────
  // 大笑脸 + 竖大拇指 + 红润脸蛋
  MBLZ: {
    bg: '#2E2A1A',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#5D4037" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#FDEBD0" />
        {/* 普通头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#4A3728" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#5A4738" />
        {/* 开心弯弯眼 */}
        <path d="M72 100 Q82 92 92 100" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M108 100 Q118 92 128 100" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* 红润脸蛋 */}
        <ellipse cx="70" cy="112" rx="10" ry="6" fill="#FF9999" opacity="0.5" />
        <ellipse cx="130" cy="112" rx="10" ry="6" fill="#FF9999" opacity="0.5" />
        {/* 咧嘴大笑 */}
        <path d="M80 116 Q100 140 120 116" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M84 118 Q100 135 116 118" fill="white" />
        {/* 竖大拇指 */}
        <circle cx="155" cy="120" r="10" fill="#FDEBD0" />
        <rect x="151" y="130" width="8" height="16" rx="3" fill="#FDEBD0" />
        <ellipse cx="155" cy="115" rx="5" ry="8" fill="#FDEBD0" />
      </g>
    ),
  },

  // ── MBPX 祖传牛马 ──────────────────────────
  // 牛角 + 锁链 + 枯槁 + 头顶乌云
  MBPX: {
    bg: '#1E1E1E',
    render: () => (
      <g>
        {/* 乌云 */}
        <ellipse cx="85" cy="20" rx="20" ry="12" fill="#333" opacity="0.7" />
        <ellipse cx="105" cy="18" rx="18" ry="10" fill="#333" opacity="0.7" />
        <ellipse cx="95" cy="15" rx="15" ry="10" fill="#444" opacity="0.7" />
        {/* 小雨滴 */}
        <line x1="82" y1="32" x2="82" y2="38" stroke="#555" strokeWidth="1.5" />
        <line x1="92" y1="30" x2="92" y2="36" stroke="#555" strokeWidth="1.5" />
        <line x1="102" y1="32" x2="102" y2="38" stroke="#555" strokeWidth="1.5" />
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#3E3E3E" />
        {/* 锁链 */}
        <circle cx="70" cy="170" r="6" fill="none" stroke="#888" strokeWidth="2.5" />
        <circle cx="80" cy="175" r="6" fill="none" stroke="#888" strokeWidth="2.5" />
        <circle cx="90" cy="170" r="6" fill="none" stroke="#888" strokeWidth="2.5" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#D4B896" />
        {/* 短发 - 稀疏 */}
        <path d="M48 100 Q52 58 100 55 Q148 58 152 100" fill="#2A2A2A" />
        {/* 牛角 */}
        <path d="M62 65 Q50 40 55 28" stroke="#888" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M138 65 Q150 40 145 28" stroke="#888" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* 超级黑眼圈 */}
        <ellipse cx="80" cy="108" rx="15" ry="11" fill="#B8956A" />
        <ellipse cx="120" cy="108" rx="15" ry="11" fill="#B8956A" />
        {/* 死鱼眼 */}
        <circle cx="80" cy="104" r="3" fill="#2d2d2d" />
        <circle cx="120" cy="104" r="3" fill="#2d2d2d" />
        <circle cx="81" cy="103" r="1" fill="white" opacity="0.5" />
        <circle cx="121" cy="103" r="1" fill="white" opacity="0.5" />
        {/* 苦涩嘴 */}
        <path d="M88 124 Q100 118 112 124" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    ),
  },

  // ── MBPZ 沉默的羔羊 ──────────────────────────
  // 缩小的身体 + 问号 + 小小的存在
  MBPZ: {
    bg: '#252530',
    render: () => (
      <g>
        {/* 身体 - 缩起来 */}
        <ellipse cx="100" cy="185" rx="35" ry="18" fill="#6B6B7B" />
        {/* 头 - 略小 */}
        <circle cx="100" cy="108" r="48" fill="#FDEBD0" />
        {/* 刘海遮脸 */}
        <path d="M52 105 Q54 55 100 52 Q146 55 148 105" fill="#5A4A3A" />
        <path d="M58 100 Q60 60 100 57 Q140 60 142 100" fill="#6A5A4A" />
        {/* 刘海更长，遮住半张脸 */}
        <path d="M58 100 Q65 80 100 75 Q110 76 115 80" fill="#6A5A4A" />
        {/* 小小的眼睛 - 从刘海下面露出来 */}
        <circle cx="85" cy="105" r="3" fill="#2d2d2d" />
        <circle cx="115" cy="105" r="3" fill="#2d2d2d" />
        {/* 小小的嘴 */}
        <line x1="95" y1="120" x2="105" y2="120" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" />
        {/* 头顶问号 */}
        <text x="130" y="60" fontSize="24" fill="#666" fontWeight="bold">?</text>
        {/* 省略号气泡 */}
        <circle cx="145" cy="90" r="3" fill="#555" />
        <circle cx="152" cy="82" r="3" fill="#555" />
        <circle cx="159" cy="74" r="3" fill="#555" />
      </g>
    ),
  },

  // ── MSLX 摸鱼侠客 ──────────────────────────
  // 渔夫帽 + 钓竿+鱼 + 墨镜 + 得意笑
  MSLX: {
    bg: '#0D2137',
    render: () => (
      <g>
        {/* 身体 - 休闲装 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#1565C0" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F5D6B8" />
        {/* 头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#3D2B1F" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#4D3B2F" />
        {/* 渔夫帽 */}
        <ellipse cx="100" cy="58" rx="60" ry="10" fill="#2196F3" />
        <path d="M55 58 Q55 35 100 32 Q145 35 145 58" fill="#2196F3" />
        <rect x="55" y="52" width="90" height="8" fill="#1976D2" />
        {/* 墨镜 - 炫酷 */}
        <rect x="66" y="94" width="24" height="18" rx="4" fill="#0a0a0a" />
        <rect x="110" y="94" width="24" height="18" rx="4" fill="#0a0a0a" />
        <line x1="90" y1="102" x2="110" y2="102" stroke="#0a0a0a" strokeWidth="3" />
        {/* 得意笑 */}
        <path d="M82 122 Q100 136 118 122" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M86 123 Q100 132 114 123" fill="white" />
        {/* 钓竿 */}
        <line x1="148" y1="130" x2="170" y2="60" stroke="#8B7355" strokeWidth="3" strokeLinecap="round" />
        <line x1="170" y1="60" x2="170" y2="110" stroke="#aaa" strokeWidth="1.5" />
        {/* 鱼 */}
        <ellipse cx="170" cy="118" rx="10" ry="6" fill="#4FC3F7" />
        <polygon points="180,118 188,112 188,124" fill="#4FC3F7" />
        <circle cx="166" cy="116" r="1.5" fill="#2d2d2d" />
      </g>
    ),
  },

  // ── MSLZ 带薪演员 ──────────────────────────
  // 双面面具 + 演员聚光灯
  MSLZ: {
    bg: '#2E1A2E',
    render: () => (
      <g>
        {/* 聚光灯 */}
        <path d="M100 0 L70 50 L130 50" fill="rgba(255,255,200,0.08)" />
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#6A1B9A" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F0D0A0" />
        {/* 整齐头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#2C2C2C" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#3C3C3C" />
        <line x1="88" y1="53" x2="85" y2="70" stroke="#2C2C2C" strokeWidth="2" />
        {/* 大眼睛 - 有算计 */}
        <circle cx="82" cy="100" r="7" fill="#2d2d2d" />
        <circle cx="118" cy="100" r="7" fill="#2d2d2d" />
        <circle cx="85" cy="98" r="2.5" fill="white" />
        <circle cx="121" cy="98" r="2.5" fill="white" />
        {/* 一边嘴角上扬 */}
        <path d="M85 120 Q95 126 108 122 Q116 118 120 114" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 喜剧面具 */}
        <g transform="translate(40,130) scale(0.35)">
          <circle cx="40" cy="40" r="30" fill="#FFD700" stroke="#DAA520" strokeWidth="3" />
          <path d="M25 35 Q40 50 55 35" stroke="#2d2d2d" strokeWidth="3" fill="none" />
          <circle cx="30" cy="28" r="3" fill="#2d2d2d" />
          <circle cx="50" cy="28" r="3" fill="#2d2d2d" />
        </g>
        {/* 悲剧面具 */}
        <g transform="translate(130,130) scale(0.35)">
          <circle cx="40" cy="40" r="30" fill="#9B59B6" stroke="#7D3C98" strokeWidth="3" />
          <path d="M25 42 Q40 30 55 42" stroke="white" strokeWidth="3" fill="none" />
          <circle cx="30" cy="28" r="3" fill="white" />
          <circle cx="50" cy="28" r="3" fill="white" />
        </g>
      </g>
    ),
  },

  // ── MSPX 躺平哲学家 ──────────────────────────
  // 躺着的姿势 + 枕头 + 安详 + 书
  MSPX: {
    bg: '#1E1E2E',
    render: () => (
      <g>
        {/* 身体 - 斜躺 */}
        <ellipse cx="105" cy="185" rx="42" ry="20" fill="#5C6BC0" transform="rotate(-5,105,185)" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#F5D6B8" />
        {/* 短发 */}
        <path d="M48 100 Q52 55 100 52 Q148 55 152 100" fill="#3D2B1F" />
        <path d="M55 95 Q58 60 100 57 Q142 60 145 95" fill="#4D3B2F" />
        {/* 闭眼安详 */}
        <path d="M72 100 Q82 94 92 100" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M108 100 Q118 94 128 100" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 佛系微笑 */}
        <path d="M88 118 Q100 128 112 118" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 枕头 */}
        <ellipse cx="48" cy="120" rx="22" ry="14" fill="#B39DDB" stroke="#9575CD" strokeWidth="2" />
        {/* ZZZ */}
        <text x="140" y="70" fontSize="14" fill="#7986CB" fontWeight="bold" opacity="0.8">Z</text>
        <text x="152" y="55" fontSize="18" fill="#7986CB" fontWeight="bold" opacity="0.6">Z</text>
        <text x="162" y="38" fontSize="22" fill="#7986CB" fontWeight="bold" opacity="0.4">Z</text>
        {/* 腮红 */}
        <ellipse cx="72" cy="112" rx="8" ry="5" fill="#FFB6C1" opacity="0.3" />
        <ellipse cx="128" cy="112" rx="8" ry="5" fill="#FFB6C1" opacity="0.3" />
      </g>
    ),
  },

  // ── MSPZ 假性奋斗boy ──────────────────────────
  // 手机偷看 + 一只眼偷瞄 + 假装在工作
  MSPZ: {
    bg: '#1A1A28',
    render: () => (
      <g>
        {/* 身体 */}
        <ellipse cx="100" cy="185" rx="42" ry="22" fill="#37474F" />
        {/* 头 */}
        <circle cx="100" cy="105" r="52" fill="#FDEBD0" />
        {/* 普通头发 */}
        <path d="M48 100 Q50 50 100 48 Q150 50 152 100" fill="#2C2C2C" />
        <path d="M55 95 Q58 55 100 53 Q142 55 145 95" fill="#3C3C3C" />
        {/* 一只眼偷瞄（左眼睁开偷看，右眼半闭） */}
        <circle cx="80" cy="100" r="6" fill="#2d2d2d" />
        <circle cx="83" cy="98" r="2" fill="white" />
        {/* 右眼半闭 */}
        <path d="M112 100 Q118 95 124 100" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 偷笑 */}
        <path d="M90 120 Q96 126 105 123 Q112 120 115 117" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 手机 - 发光的 */}
        <rect x="142" y="90" width="20" height="34" rx="3" fill="#222" stroke="#444" strokeWidth="1.5" />
        <rect x="145" y="94" width="14" height="22" rx="1" fill="#4488FF" />
        {/* 手机光照到脸上 */}
        <path d="M142 105 L130 100 L135 110 Z" fill="rgba(68,136,255,0.1)" />
        {/* 头顶"努力"标签（划掉的） */}
        <text x="100" y="38" textAnchor="middle" fontSize="12" fill="#666">
          <tspan textDecoration="line-through">努力中</tspan>
        </text>
      </g>
    ),
  },
};
