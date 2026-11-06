"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingWatermarkMotifs } from "@/components/background-decorations";
import { Button } from "@/components/ui/button";
import { 
  Baby, 
  BookOpen, 
  Trophy, 
  Clock, 
  Users, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const CourseSystem = () => {
  const scrollToBooking = (stageName?: string) => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (stageName) {
        const selectTrigger = document.querySelector('[data-testid="stage-select"]') as HTMLElement;
        if (selectTrigger) {
          selectTrigger.click();
        }
      }
    }
  };

  const courses = [
    {
      stage: "启蒙期",
      ageRange: "3–6 岁",
      subtitle: "母语式启蒙 · 快乐磨耳朵",
      themeColor: "amber",
      icon: Baby,
      image: "/mascots/stage-beginner.jpg",
      imageAlt: "启蒙期伴学萌宝小恐龙与积木",
      badgeText: "兴趣建立阶段",
      goals: [
        "激发英语学习兴趣，告别抵触情绪",
        "建立纯正母语发音与自然拼读意识",
        "日常高频生活指令与基础需求开口说"
      ],
      highlights: [
        "TPR 全身反应互动教学法",
        "经典原版英文绘本沉浸阅读",
        "趣味儿歌律动与情景游戏"
      ],
      schedule: "35 分钟 / 节",
      frequency: "每周 2 次 (全年 80–96 课时)",
      classSize: "6–8 人精品小班",
      result: "能用英语表达日常喜怒哀乐与生活需求，养成自然口语习惯",
      priceRange: "¥8,000–¥14,000 / 年",
      isPopular: false
    },
    {
      stage: "系统学习期",
      ageRange: "6–10 岁",
      subtitle: "学科英语建构 · 听说读写全能",
      themeColor: "emerald",
      icon: BookOpen,
      image: "/mascots/stage-systematic.jpg",
      imageAlt: "系统学习期魔法阅读兔兔",
      badgeText: "最受家长推荐",
      goals: [
        "掌握核心语法框架与 1200+ 高频词汇",
        "从句子到短文，实现自主分级阅读",
        "自信进行完整英文对话与情景剧表演"
      ],
      highlights: [
        "牛津 / 剑桥少儿分级阅读教材",
        "戏剧表演小剧场，大胆开口表达",
        "伴随式家校反馈与阶段性学情档案"
      ],
      schedule: "50 分钟 / 节",
      frequency: "每周 2–3 次 (全年 80–144 课时)",
      classSize: "6–10 人互动小班",
      result: "能进行流利日常交流，轻松通读中阶分级读物，具备短文写作雏形",
      priceRange: "¥10,000–¥20,000 / 年",
      isPopular: true
    },
    {
      stage: "强化期",
      ageRange: "10 岁以上",
      subtitle: "学术思辨飞跃 · 国际考级冲刺",
      themeColor: "blue",
      icon: Trophy,
      image: "/mascots/stage-advanced.jpg",
      imageAlt: "强化期思辨学术领袖猫头鹰",
      badgeText: "能力拔高阶段",
      goals: [
        "掌握学术高阶词汇与复杂句型结构",
        "具备批判性思维，能用英文演讲辩论",
        "无缝衔接 KET / PET / 托福 Junior 权威测评"
      ],
      highlights: [
        "原版非虚构类阅读与思辨写作",
        "模拟联合国与主题演讲特训",
        "剑桥考评真题针对性解析与模考"
      ],
      schedule: "70 分钟 / 节",
      frequency: "每周 2–3 次 (全年 80–144 课时)",
      classSize: "6–12 人学术讨论班",
      result: "具备优异的学术读写与辩论能力，高通过率斩获剑桥 / 托福官方证书",
      priceRange: "¥12,000–¥28,000 / 年",
      isPopular: false
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border-y border-stone-200/60 relative overflow-hidden">
      <FloatingWatermarkMotifs />
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] opacity-25 pointer-events-none blur-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.45) 0%, rgba(254, 205, 211, 0.25) 50%, transparent 75%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-semibold text-rose-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>阶梯进阶 · 尊重儿童认知成长规律</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            三大科学课程体系，步步扎实进阶
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            不同年龄段的孩子语言习得机制截然不同。TinyTalkers 拒绝一刀切，为 3–12 岁儿童量身定制梯度方案。
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course, index) => {
            const isPopular = course.isPopular;

            return (
              <motion.div
                key={course.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 group ${
                  isPopular
                    ? "bg-[#FFFDF9] border-2 border-emerald-500/80 shadow-xl shadow-emerald-900/5 ring-4 ring-emerald-500/10"
                    : "bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300"
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                    {course.badgeText}
                  </div>
                )}

                <div>
                  {/* Visual 3D Mascot Character Banner (Replacing simple icons with rich illustrations) */}
                  <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden mb-5 bg-[#FFFDF9] border border-stone-200/60 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      className="object-cover"
                    />
                    {/* Stage Age Tag Pill */}
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-stone-200/70 text-xs font-bold text-slate-800">
                      {course.ageRange}
                    </div>
                  </div>

                  {/* Card Title & Meta */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">{course.stage}</h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-slate-600">
                        {course.badgeText}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{course.subtitle}</p>
                  </div>

                  {/* Core Goals Checklist */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      阶段核心目标
                    </span>
                    {course.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            course.themeColor === "amber"
                              ? "text-amber-600"
                              : course.themeColor === "emerald"
                              ? "text-emerald-600"
                              : "text-blue-600"
                          }`}
                        />
                        <span className="leading-snug">{goal}</span>
                      </div>
                    ))}
                  </div>

                  {/* Class Meta Box */}
                  <div className="my-6 p-4 rounded-2xl bg-stone-50/80 border border-stone-200/60 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        单节时长
                      </span>
                      <span className="font-semibold text-slate-800">{course.schedule}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        班级规模
                      </span>
                      <span className="font-semibold text-slate-800">{course.classSize}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 pt-1 border-t border-stone-200/50">
                      频次：{course.frequency}
                    </div>
                  </div>

                  {/* Measurable Learning Outcome */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-slate-900 block mb-1.5">
                      家长可感知的学习成果：
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed bg-amber-50/40 p-2.5 rounded-xl border border-amber-200/40">
                      {course.result}
                    </p>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-stone-200/70">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-500">学费参考</span>
                      <div className="text-lg font-black text-slate-900 tracking-tight">
                        {course.priceRange}
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                      含2节免费试听
                    </span>
                  </div>

                  <Button
                    onClick={() => scrollToBooking(course.stage)}
                    className={`w-full py-5 rounded-xl text-sm font-semibold transition-all ${
                      isPopular
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    预约 {course.stage} 免费试听
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseSystem;
