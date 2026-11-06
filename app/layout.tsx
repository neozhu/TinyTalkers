import type { Metadata } from "next";
import { AmbientBackgroundBlobs } from "@/components/background-decorations";
import "./globals.css";

export const metadata: Metadata = {
  title: "TinyTalkers 童言少儿英语 - 双语未来，从小自信开口",
  description: "专业 3–12 岁少儿英语培训机构。启蒙期、系统学习期、强化期三大阶梯课程体系，沉浸式小班纯正母语情景教学，免费试听2节精品课！",
  keywords: "少儿英语,少儿英语培训,幼小英语衔接,剑桥少儿英语,自然拼读,英语启蒙,双语教育",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFFDF9] text-slate-800 font-sans antialiased relative selection:bg-rose-500/20 selection:text-rose-950">
        <AmbientBackgroundBlobs />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
