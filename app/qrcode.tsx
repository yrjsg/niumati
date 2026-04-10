'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const SITE_URL = 'https://niumati.vercel.app';

export default function QRCodeBlock({ size = 120 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, SITE_URL, {
      width: size,
      margin: 1,
      color: { dark: '#ffffff', light: '#00000000' },
    });
  }, [size]);

  return (
    <div className="flex flex-col items-center gap-2">
      <canvas ref={canvasRef} />
      <span className="text-xs text-neutral-500">扫码来测测你是哪种牛马</span>
    </div>
  );
}

export { SITE_URL };
