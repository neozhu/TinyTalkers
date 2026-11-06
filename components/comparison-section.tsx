"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Sparkles, Award } from "lucide-react";

const ComparisonSection = () => {
  const comparisonItems = [
    {
      dimension: "班级规模与开口率",
      traditional: "15–25 人大班教学，每节课孩子独立开口时间不足 2 分钟，容易沦为“陪跑观众”",
      tinytalkers: "严格 6–8 人精品小班，每节课每位学员保证 15–20 次高频互动发言",
      tinytalkersWins: true
    },
    {
      dimension: "教学理念与课堂形态",
      traditional: "死记硬背单词表与语法规则，枯燥刷题，容易让孩子过早产生英语厌学抵触",
      tinytalkers: "TPR 全身反应互动 + 原版情景绘本小剧场，像习得母语一样自然自如表达",
      tinytalkersWins: true
    },
    {
      dimension: "师资配置与认证",
      traditional: "兼职流动性大，发音标准不一，中教单人负责全班，无暇顾及个体差异",
      tinytalkers: "100% TESOL/TKT 权威双重持证外教 + 专职双语助教全程双师伴随",
      tinytalkersWins: true
    },
    {
      dimension: "学情反馈透明度",
      traditional: "信息黑盒，家长仅凭期末一张试卷了解成绩，过程性成长无法跟踪",
      tinytalkers: "当堂中英学情卡 + 课后外教 1 对 1 发音视频反馈 + 每月 6 维能力雷达图",
      tinytalkersWins: true
    },
    {
      dimension: "调课补课与售后保障",
      traditional: "请假扣除课时，退费手续繁琐苛刻，休学期限限制极严",
      tinytalkers: "提前请假不扣课时，开课 7 天内无理由退费承诺，最长 3 个月休学保留学位",
      tinytalkersWins: true
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/40 to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 right-1/4 w-[600px] h-[400px] opacity-20 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(209, 250, 229, 0.3) 50%, transparent 75%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-semibold text-rose-700 mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>专业对比 · 还原教育本质</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            为什么越来越多家长选择 TinyTalkers？
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            把每一位孩子放在聚光灯下。拒绝流水线应试，用真正的母语情景唤醒开口自信。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[720px] rounded-3xl border border-stone-200/90 shadow-md bg-white overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-stone-50/80 border-b border-stone-200 p-5 font-bold text-sm text-slate-900">
              <div className="col-span-3">对比核心维度</div>
              <div className="col-span-4 text-slate-500 font-medium">传统大班培训机构</div>
              <div className="col-span-5 text-[#F05A47] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 fill-[#F05A47]/20" />
                <span>TinyTalkers 童言少儿英语</span>
              </div>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-stone-100">
              {comparisonItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 p-5 items-center hover:bg-stone-50/40 transition-colors text-xs sm:text-sm"
                >
                  {/* Dimension */}
                  <div className="col-span-3 font-bold text-slate-900 pr-4">
                    {item.dimension}
                  </div>

                  {/* Traditional */}
                  <div className="col-span-4 text-slate-500 pr-6 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.traditional}</span>
                  </div>

                  {/* TinyTalkers */}
                  <div className="col-span-5 text-slate-900 font-medium bg-[#FFFDF9] p-3 rounded-xl border border-amber-200/40 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-slate-800">{item.tinytalkers}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
