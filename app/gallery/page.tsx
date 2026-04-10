'use client';
import Avatar from '../avatar';

const codes = [
  'JBLX','JBLZ','JBPX','JBPZ',
  'JSLX','JSLZ','JSPX','JSPZ',
  'MBLX','MBLZ','MBPX','MBPZ',
  'MSLX','MSLZ','MSPX','MSPZ',
];

const names: Record<string, string> = {
  JBLX:'救火队长', JBLZ:'亲儿子', JBPX:'技术烈士', JBPZ:'卷生卷死',
  JSLX:'技术网红', JSLZ:'内卷老六', JSPX:'愤怒中坚', JSPZ:'破防汇报家',
  MBLX:'人间清醒', MBLZ:'老实人Pro', MBPX:'祖传牛马', MBPZ:'沉默的羔羊',
  MSLX:'摸鱼侠客', MSLZ:'带薪演员', MSPX:'躺平哲学家', MSPZ:'假性奋斗boy',
};

export default function Gallery() {
  return (
    <main className="min-h-screen bg-black p-6">
      <h1 className="text-2xl font-bold text-center mb-8">头像画廊</h1>
      <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
        {codes.map(code => (
          <div key={code} className="text-center">
            <Avatar code={code} size={160} />
            <div className="text-xs text-neutral-500 mt-2 font-mono">{code}</div>
            <div className="text-xs text-neutral-400">{names[code]}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
