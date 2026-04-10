/**
 * 生成分享卡片图片
 * 画布尺寸 750×1334（iPhone 6/7/8 屏幕比例，适合社交媒体）
 */

import type { Niuma } from '@/lib/data';

const W = 750;
const H = 1334;

export async function generateShareImage(
  type: Niuma,
  avatarSvgElement: SVGSVGElement | null
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ── 背景 ──────────────────────────────────────────────
  // 渐变深色背景
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#0a0a0a');
  grad.addColorStop(0.6, '#111118');
  grad.addColorStop(1, '#0a0a0a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // 装饰线条
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(60, 100);
  ctx.lineTo(W - 60, 100);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(60, H - 100);
  ctx.lineTo(W - 60, H - 100);
  ctx.stroke();

  // ── 头像 ──────────────────────────────────────────────
  let avatarY = 180;
  const avatarSize = 240;

  if (avatarSvgElement) {
    try {
      const svgClone = avatarSvgElement.cloneNode(true) as SVGSVGElement;
      svgClone.setAttribute('width', String(avatarSize));
      svgClone.setAttribute('height', String(avatarSize));
      const svgString = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = await loadImage(url);
      ctx.drawImage(img, (W - avatarSize) / 2, avatarY, avatarSize, avatarSize);
      URL.revokeObjectURL(url);
    } catch {
      // fallback: 画 emoji
      ctx.font = '120px serif';
      ctx.textAlign = 'center';
      ctx.fillText(type.emoji, W / 2, avatarY + avatarSize * 0.7);
    }
  } else {
    ctx.font = '120px serif';
    ctx.textAlign = 'center';
    ctx.fillText(type.emoji, W / 2, avatarY + avatarSize * 0.7);
  }

  // ── 标签 ──────────────────────────────────────────────
  let y = avatarY + avatarSize + 50;
  ctx.textAlign = 'center';

  // "你的牛马类型"
  ctx.font = '24px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('你的牛马类型', W / 2, y);
  y += 60;

  // 代号
  ctx.font = 'bold 80px ui-monospace, SFMono-Regular, monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(type.code, W / 2, y);
  y += 60;

  // 名字
  ctx.font = 'bold 52px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(type.name, W / 2, y);
  y += 50;

  // tagline
  ctx.font = 'italic 28px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.fillText(`「${type.tagline}」`, W / 2, y);
  y += 70;

  // ── 描述 ──────────────────────────────────────────────
  ctx.font = '26px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.textAlign = 'left';
  const descLines = wrapText(ctx, type.description, W - 140);
  for (const line of descLines) {
    ctx.fillText(line, 70, y);
    y += 40;
  }
  y += 30;

  // ── 技能 & 口头禅 ─────────────────────────────────────
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '22px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText('本命技能', 70, y);
  y += 32;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '26px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText(type.skill, 70, y);
  y += 50;

  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '22px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText('口头禅', 70, y);
  y += 32;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '26px "PingFang SC", "Microsoft YaHei", sans-serif';
  const quotesStr = type.quotes.map(q => `"${q}"`).join('  ·  ');
  const quoteLines = wrapText(ctx, quotesStr, W - 140);
  for (const line of quoteLines) {
    ctx.fillText(line, 70, y);
    y += 38;
  }

  // ── 底部品牌 ──────────────────────────────────────────
  ctx.textAlign = 'center';
  ctx.font = 'bold 28px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillText('🐂 牛马测试', W / 2, H - 60);

  ctx.font = '20px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillText('来测测你是哪种牛马', W / 2, H - 30);

  // ── 导出 ──────────────────────────────────────────────
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), 'image/png');
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let current = '';
  for (const char of text) {
    const test = current + char;
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(current);
      current = char;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}
