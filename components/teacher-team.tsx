"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  Heart, 
  Star, 
  Check, 
  Target, 
  Lightbulb, 
  Handshake,
  GraduationCap
} from "lucide-react";

const TeacherTeam = () => {
  const teachers = [
    {
      name: "Emily Chen",
      title: "启蒙期主教",
      experience: "8年少儿英语教学经验",
      image: "/teachers/teacher-1.jpg",
      quote: "让害羞的孩子在欢笑中主动张嘴，是教育最神奇的魔法。",
      highlights: ["TESOL 国际英语教师认证", "儿童发展心理学背景", "TPR 全身反应法专家"],
    },
    {
      name: "Olivia Brown",
      title: "系统学习期主教",
      experience: "6年学科英语教学经验",
      image: "/teachers/teacher-2.jpg",
      quote: "自然拼读不是机械背诵，而是探索文字密码的钥匙。",
      highlights: ["英国爱丁堡大学教育学硕士", "剑桥 TKT 核心模块满分", "牛津分级阅读资深导师"],
    },
    {
      name: "Sophia Johnson",
      title: "强化期学术主教",
      experience: "10年国际学术英语经验",
      image: "/teachers/teacher-3.jpg",
      quote: "用批判性思辨武装语言，孩子能走上世界任何讲台。",
      highlights: ["剑桥官方 PET/FCE 备考教练", "前模拟联合国金牌指导", "青少年辩论与学术写作专精"],
    },
    {
      name: "David Wilson",
      title: "外教口语与演讲教练",
      experience: "7年母语少儿口语教学经验",
      image: "/teachers/teacher-4.jpg",
      quote: "每个孩子都有一座好奇的宇宙，我教他们如何用英文去探索。",
      highlights: ["英国利兹大学文学学士", "CELTA 剑桥成人英语教学认证", "青少年即兴演讲特训名师"],
    },
    {
      name: "Emma Garcia",
      title: "双语教研主管",
      experience: "9年双语教研管理经验",
      image: "/teachers/teacher-5.jpg",
      quote: "每一次课堂设计的背后，都是对孩子注意力的精准把握。",
      highlights: ["海外知名双语学校教学背景", "全国少儿英语赛道评委", "新锐教师内训导师"],
    },
    {
      name: "Ava Thompson",
      title: "伴随式助教主管",
      experience: "5年课后辅导经验",
      image: "/teachers/teacher-6.jpg",
      quote: "细致到每一次发音纠错，给孩子最温暖的守护。",
      highlights: ["应用心理学学士", "一对一学情辅导专家", "家长课后好评率 99%"],
    },
  ];

  const teamStats = [
    { number: "100%", label: "TESOL/TKT 双重持证", icon: Award },
    { number: "7.5年", label: "团队平均授课教龄", icon: BookOpen },
    { number: "98.6%", label: "家长满意与转介绍率", icon: Heart },
    { number: "4.98", label: "教学综合评分 (满分5.0)", icon: Star }
  ];

  return (
    <section id="teachers" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/40 to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] opacity-20 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 215, 170, 0.4) 0%, rgba(254, 205, 211, 0.25) 50%, transparent 75%)"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-slate-700 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-slate-600" />
            <span>严格筛选 · 录取率仅 2.8%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            懂孩子、更懂教育的专家师资
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            不仅具备权威教学资格认证，更懂得以爱心和耐心激发孩子内在探索欲。
          </p>
        </motion.div>

        {/* Team Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {teamStats.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs text-center"
              >
                <div className="w-10 h-10 bg-rose-50 rounded-xl mx-auto mb-3 flex items-center justify-center text-[#F05A47]">
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-rose-100/60 ring-2 ring-[#F05A47]/20 shrink-0">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{teacher.name}</h3>
                    <div className="text-xs font-medium text-[#F05A47]">{teacher.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{teacher.experience}</div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs italic text-slate-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                  &ldquo;{teacher.quote}&rdquo;
                </p>

                {/* Credentials list */}
                <div className="space-y-1.5">
                  {teacher.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaching Philosophy Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            TinyTalkers 核心教学信仰
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            我们坚信语言是一门“用出来”的生活技能，而非“考出来”的死板学科。因材施教，激发天性中的表达欲。
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-amber-200/60">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3">
                <Target className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">分阶定制教学</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                依据孩子认知发育曲线量身定制教学进度，不让任何一个孩子掉队。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-emerald-200/60">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3">
                <Lightbulb className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">沉浸情景启发</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                通过角色扮演与趣味探究，引导孩子用英文像母语一样主动思考与联想。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-blue-200/60">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-3">
                <Handshake className="w-5 h-5 stroke-[2]" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">温情家校共育</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                课后精准辅导与阶段性音视频成长档案，让家长的每一次陪伴都有清晰回响。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherTeam;
