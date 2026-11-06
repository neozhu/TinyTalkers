"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  RotateCw, 
  Tv2, 
  Gamepad2, 
  Mic, 
  FileCheck, 
  Trophy,
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LearningLoopTimelineTrack } from "@/components/background-decorations";

const LearningLoop = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNum: "01",
      title: "课前 5min 趣味微课热身",
      tagline: "动画绘本前置唤醒，带问题进课堂",
      icon: Tv2,
      color: "amber",
      description: "开课前通过精炼生动的 3 分钟原创情景微动画，提前感知本节课的核心主题词汇与语境，拒绝‘零输入盲目上课’。",
      keyDeliverable: "自主完成 3 题听音辨词小游戏，点燃求知欲望",
      parentView: "在家长小程序端可随时查看课前预习完成状态"
    },
    {
      stepNum: "02",
      title: "课中 40min 沉浸式情景互动",
      tagline: "TPR 互动 + 角色小剧场，开口率 >90%",
      icon: Gamepad2,
      color: "rose",
      description: "母语外教主导高频互动，结合道具实物、情景扮演与团队 PK。每个孩子每节课平均拥有 15–20 次独立整句表达机会。",
      keyDeliverable: "告别死记硬背，在纯正语言环境中建立母语思维",
      parentView: "教室配备全透明单向观摩走廊或线上课堂回放"
    },
    {
      stepNum: "03",
      title: "课后 10min 智能发音口型打卡",
      tagline: "外教真人示范视频，一对一针对性精纠",
      icon: Mic,
      color: "emerald",
      description: "课后配套发音评测工具与外教定制示范短视频。孩子录制 30 秒口语小作业，外教亲自听取并出具音频批改鼓励语音。",
      keyDeliverable: "标准英美母语自然发音，及时纠正错误发音习惯",
      parentView: "24 小时内收到老师发音评语与鼓励小星星勋章"
    },
    {
      stepNum: "04",
      title: "当堂中英双语学情反馈",
      tagline: "拒绝信息黑盒，每节课成效透明可查",
      icon: FileCheck,
      color: "blue",
      description: "双语助教详细记录孩子在课堂上的注意力、主动开口次数、核心句型掌握度，生成专属图文学情卡推送至家长微信。",
      keyDeliverable: "多维雷达图直观展现听说表现与成长轨迹",
      parentView: "课后 1 小时内收到定制化学情反馈报告"
    },
    {
      stepNum: "05",
      title: "阶段性学术展演与荣誉见证",
      tagline: "从日常对话到舞台演说，自信看得见",
      icon: Trophy,
      color: "purple",
      description: "每学期举办两次英文戏剧展演会与家长开放日。颁发国际认可的阶段进阶证书与学员独家高清口语演讲成长纪录片。",
      keyDeliverable: "站上舞台大方脱稿演讲，自信表达毫无怯场",
      parentView: "珍藏记录孩子从零基础到流利表达的蜕变历程"
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="learning-loop" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/50 to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      <LearningLoopTimelineTrack />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-slate-700 mb-3 shadow-xs">
            <RotateCw className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>全流程可追溯 · 效果看得见</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            沉浸式 5 步教学闭环
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            不是单纯的一节 45 分钟课，而是一个涵盖“预习–沉浸–纠偏–反馈–展演”的严密成长生态。
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((st, idx) => {
            const isSelected = activeStep === idx;
            const IconC = st.icon;
            return (
              <button
                key={st.stepNum}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 relative focus:outline-none ${
                  isSelected
                    ? "bg-white border-[#F05A47] shadow-md shadow-rose-900/5 ring-2 ring-[#F05A47]/10"
                    : "bg-white/60 border-stone-200 hover:bg-white hover:border-stone-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#F05A47]" : "text-slate-400"}`}>
                    {st.stepNum}
                  </span>
                  <IconC className={`w-4 h-4 ${isSelected ? "text-[#F05A47]" : "text-slate-400"}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                  {st.title.split(" ")[1] || st.title}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {st.tagline.split("，")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card with Motion */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200/90 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black text-white px-2.5 py-0.5 rounded-md bg-[#F05A47]">
                    STEP {current.stepNum}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    5 步教学闭环之第 {activeStep + 1} 环节
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Key Deliverable Boxes */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/50 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 mr-1.5">学员关键收获：</span>
                      <span>{current.keyDeliverable}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/50 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 mr-1.5">家长透明感知：</span>
                      <span>{current.parentView}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Graphical Card */}
              <div className="lg:col-span-5 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-stone-200/80 flex flex-col justify-between min-h-[300px]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#F05A47] flex items-center justify-center mx-auto mb-4">
                    <CurrentIcon className="w-8 h-8 stroke-[1.8]" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1">
                    {current.title}
                  </div>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    {current.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-stone-100 text-center">
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-[#F05A47] hover:bg-[#DE4936] text-white font-semibold py-5 rounded-xl text-xs sm:text-sm shadow-xs"
                  >
                    预约全流程体验课
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <span className="text-[10px] text-slate-400 mt-2 block">
                    试听课包含完整闭环课前预习包与课后学情诊断
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LearningLoop;
