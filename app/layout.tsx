import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '码农牛马测试 · 你是哪种牛马？',
  description: '16 种打工人类型 · 16 道题 · 你是哪一种牛马？',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
