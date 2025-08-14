import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TinyTalkers童言英语 - 双语未来，从小开始",
  description: "专业少儿英语培训，3-12岁分龄教学，启蒙期、系统学习期、强化期三大课程体系，让孩子在兴趣中学，在互动中用，在成果中成长！",
  keywords: "少儿英语,英语培训,幼儿英语,小学英语,英语启蒙,双语教育",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
