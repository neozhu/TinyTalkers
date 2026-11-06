"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Wind, Eye, ShieldCheck, HeartHandshake } from "lucide-react";
import { CampusAtmosphere } from "@/components/background-decorations";

const CampusShowcase = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "原版英文绘本馆",
      subtitle: "2,000+ 册原版进口绘本",
      desc: "涵盖牛津阅读树、大红狗 Clifford、苏斯博士等经典系列，学员在读期间享受终身免费借阅权限。"
    },
    {
      icon: Sparkles,
      title: "沉浸式小剧场教室",
      subtitle: "情景剧本与互动多媒体",
      desc: "全景互动投影、原声音响与戏剧道具箱，让孩子化身绘本主人公，在大胆表演中忘却开口羞怯。"
    },
    {
      icon: Wind,
      title: "医用级恒温新风系统",
      subtitle: "全天候 PM2.5 过滤除菌",
      desc: "每小时室内空气循环 4 次，儿童环保级原木软包桌椅与紫外线定时消毒，守护每一口纯净呼吸。"
    },
    {
      icon: Eye,
      title: "全透明教学观摩走廊",
      subtitle: "360° 可见，家长看得放心",
      desc: "单向透视观摩玻璃与智慧课堂回放系统，家长既不打扰课堂秩序，又能随时见证孩子的专注与欢笑。"
    }
  ];

  return (
    <section id="campus" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-emerald-50/15 to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      <CampusAtmosphere />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>安全舒心 · 专为儿童打造的温情空间</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            高品质校区环境与安全守护
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            每一个细节设计均从儿童心理与人体工程学出发，为孩子营造安全、温暖、充满探索欲的双语第二家园。
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-0.5">{item.title}</h3>
                  <div className="text-xs font-semibold text-[#F05A47] mb-2">{item.subtitle}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampusShowcase;
