/**
 * 生成分享卡片图片
 * 画布尺寸 750×1334（iPhone 6/7/8 屏幕比例，适合社交媒体）
 */

import type { Niuma } from '@/lib/data';
import QRCode from 'qrcode';

const SITE_URL = 'https://niumati.vercel.app';

const W = 750;
const H = 1334;

export async function generateShareImage(
  type: Niuma,
  avatarSvgElement: SVGSVGElement | null,
  quote?: { text: string; author: string }
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ── 背景 ──────────────────────────────────────────────
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
  ctx.moveTo(60, 80);
  ctx.lineTo(W - 60, 80);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(60, H - 80);
  ctx.lineTo(W - 60, H - 80);
  ctx.stroke();

  // ── 头部：头像(左) + 类型信息(中) + 二维码(右) ─────────
  const headerY = 130;
  const avatarSize = 160;
  const qrSize = 100;

  // 头像 - 左侧
  if (avatarSvgElement) {
    try {
      const svgClone = avatarSvgElement.cloneNode(true) as SVGSVGElement;
      svgClone.setAttribute('width', String(avatarSize));
      svgClone.setAttribute('height', String(avatarSize));
      const svgString = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = await loadImage(url);
      ctx.drawImage(img, 60, headerY, avatarSize, avatarSize);
      URL.revokeObjectURL(url);
    } catch {
      ctx.font = '80px serif';
      ctx.textAlign = 'left';
      ctx.fillText(type.emoji, 80, headerY + avatarSize * 0.7);
    }
  } else {
    ctx.font = '80px serif';
    ctx.textAlign = 'left';
    ctx.fillText(type.emoji, 80, headerY + avatarSize * 0.7);
  }

  // 类型信息 - 中间
  const infoX = 60 + avatarSize + 24;
  ctx.textAlign = 'left';

  ctx.font = '20px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('你的牛马类型', infoX, headerY + 28);

  ctx.font = 'bold 56px ui-monospace, SFMono-Regular, monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(type.code, infoX, headerY + 85);

  ctx.font = 'bold 36px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(type.name, infoX, headerY + 130);

  ctx.font = '22px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.fillText(`「${type.tagline}」`, infoX, headerY + 162);

  // 二维码 - 右侧
  try {
    const qrDataUrl = await QRCode.toDataURL(SITE_URL, {
      width: qrSize,
      margin: 1,
      color: { dark: '#ffffff', light: '#00000000' },
    });
    const qrImg = await loadImage(qrDataUrl);
    ctx.drawImage(qrImg, W - 60 - qrSize, headerY + 20, qrSize, qrSize);

    ctx.textAlign = 'center';
    ctx.font = '16px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillText('扫码测试', W - 60 - qrSize / 2, headerY + 20 + qrSize + 20);
  } catch {
    // QR 生成失败时跳过
  }

  // ── 描述 ──────────────────────────────────────────────
  let y = headerY + avatarSize + 60;
  ctx.font = '28px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.textAlign = 'left';
  const descLines = wrapText(ctx, type.description, W - 140);
  for (const line of descLines) {
    ctx.fillText(line, 70, y);
    y += 44;
  }

  // ── 名人名言 ──────────────────────────────────────────
  if (quote) {
    y += 20;
    // 名言背景框
    const boxPadding = 30;
    const quoteText = `「${quote.text}」`;
    ctx.font = '24px "PingFang SC", "Microsoft YaHei", sans-serif';
    const quoteLines = wrapText(ctx, quoteText, W - 140 - boxPadding * 2);
    const boxH = quoteLines.length * 38 + 40 + boxPadding * 2;

    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    const boxX = 70;
    const boxW = W - 140;
    roundRect(ctx, boxX, y, boxW, boxH, 16);

    ctx.textAlign = 'center';
    ctx.font = 'italic 24px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    let qy = y + boxPadding + 28;
    for (const line of quoteLines) {
      ctx.fillText(line, W / 2, qy);
      qy += 38;
    }
    ctx.font = '20px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillText(`—— ${quote.author}`, W / 2, qy + 10);
  }

  // ── 底部品牌 ──────────────────────────────────────────
  ctx.textAlign = 'center';
  ctx.font = 'bold 24px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  ctx.fillText('🐂 码农牛马测试', W / 2, H - 40);

  // ── 导出 PNG（PNG 在手机分享面板中预览兼容性更好）────
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

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
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
