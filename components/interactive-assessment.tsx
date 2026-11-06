"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Award, 
  Clock, 
  Target,
  BookOpen,
  Baby,
  Trophy,
  HelpCircle
} from "lucide-react";

type QuestionStep = 1 | 2 | 3 | 4;

interface AssessmentState {
  ageGroup: string;
  currentLevel: string;
  mainGoal: string;
}

const InteractiveAssessment = () => {
  const [step, setStep] = useState<QuestionStep>(1);
  const [assessment, setAssessment] = useState<AssessmentState>({
    ageGroup: "",
    currentLevel: "",
    mainGoal: ""
  });

  const ageOptions = [
    { label: "3–4 岁 (幼儿小班)", value: "3-4", desc: "语言敏感黄金启蒙期", icon: Baby },
    { label: "5–6 岁 (幼小衔接)", value: "5-6", desc: "自然拼读与自主阅读准备", icon: Sparkles },
    { label: "7–9 岁 (小学中低年级)", value: "7-9", desc: "系统学科英语与完整对话", icon: BookOpen },
    { label: "10–12 岁 (小学高年级)", value: "10-12", desc: "思辨表达、学术读写与考级", icon: Trophy }
  ];

  const currentLevelOptions = [
    { label: "零基础 / 极少接触", value: "zero", desc: "只认识极少数单词或字母，不敢开口" },
    { label: "学过简单单词 / 儿歌", value: "basic", desc: "能听懂日常简短指令，但无法连成整句" },
    { label: "有拼读意识 / 简单绘本", value: "intermediate", desc: "能跟读短句，但在陌生人前害羞表达" },
    { label: "有一定自主阅读 / 交流能力", value: "advanced", desc: "需要系统拔高语法深度与学术写作" }
  ];

  const goalOptions = [
    { label: "摆脱死记硬背，产生浓厚兴趣", value: "interest", desc: "在欢笑互动中自信主动开口" },
    { label: "攻克自然拼读，实现见词能读", value: "phonics", desc: "打通自主阅读与原版绘本能力" },
    { label: "听说读写齐头并进，领先同龄人", value: "comprehensive", desc: "建立地道母语思维与表达逻辑" },
    { label: "剑桥 KET/PET 考级冲刺与名校面试", value: "academic", desc: "学术英语与高阶演说思辨" }
  ];

  const handleSelectAge = (val: string) => {
    setAssessment(prev => ({ ...prev, ageGroup: val }));
    setStep(2);
  };

  const handleSelectLevel = (val: string) => {
    setAssessment(prev => ({ ...prev, currentLevel: val }));
    setStep(3);
  };

  const handleSelectGoal = (val: string) => {
    setAssessment(prev => ({ ...prev, mainGoal: val }));
    setStep(4);
  };

  const resetAssessment = () => {
    setAssessment({ ageGroup: "", currentLevel: "", mainGoal: "" });
    setStep(1);
  };

  const scrollToBooking = (suggestedStage: string) => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const selectTrigger = document.querySelector('[data-testid="stage-select"]') as HTMLElement;
      if (selectTrigger) {
        selectTrigger.click();
      }
    }
  };

  // Determine recommendation based on age and level
  const getRecommendation = () => {
    if (assessment.ageGroup === "3-4" || assessment.ageGroup === "5-6") {
      return {
        stage: "启蒙期（3–6岁）",
        subStage: "L1-L2 萌芽趣味磨耳朵班",
        timeEstimate: "35分钟 / 节，每周2次",
        classSize: "6–8 人精品外教小班",
        focus: ["TPR 动作感知与儿歌律动", "44 个核心自然拼读字母发音", "高频生活情景无压力开口"],
        projectedMilestone: "入学 6 个月内能主动用英文表达日常需求，并朗读 20+ 本基础分级绘本",
        badgeColor: "bg-amber-50 text-amber-800 border-amber-200"
      };
    } else if (assessment.ageGroup === "7-9") {
      return {
        stage: "系统学习期（6–10岁）",
        subStage: "L3-L4 学科英语进阶班",
        timeEstimate: "50分钟 / 节，每周2次",
        classSize: "6–10 人互动小班",
        focus: ["牛津/剑桥少儿核心语法框架", "分级阅读理解与情景戏剧表演", "1200+ 核心词汇自主造句"],
        projectedMilestone: "入学 8 个月内实现 300 词原版读物流畅自主阅读，能完成 2 分钟全英文即兴对话",
        badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
      };
    } else {
      return {
        stage: "强化期（10岁以上）",
        subStage: "L5-L6 学术思辨与考级精英班",
        timeEstimate: "70分钟 / 节，每周2次",
        classSize: "6–12 人学术讨论班",
        focus: ["非虚构学术长难句深度精读", "模拟联合国演讲与论证性写作", "剑桥 KET/PET 全真题型攻坚"],
        projectedMilestone: "入学 1 年内达到剑桥 PET 优秀评级水平，具备独立英文研究报告撰写能力",
        badgeColor: "bg-blue-50 text-blue-800 border-blue-200"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="assessment" className="py-24 bg-gradient-to-b from-stone-50/70 via-amber-50/20 to-stone-50/70 border-t border-stone-200/70 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] opacity-25 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(209, 250, 229, 0.3) 55%, transparent 75%)"
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200/80 text-xs font-semibold text-slate-700 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>智能定位 · 60秒找到最佳匹配方案</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            测一测：孩子适合哪个学习阶梯？
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            无需繁琐表格，只需 3 个快速选择，即可获得针对孩子年龄与基础的科学规划建议。
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>测评进度：第 {step} / 3 步</span>
                <span>{step === 1 ? "孩子年龄" : step === 2 ? "当前基础" : "核心目标"}</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#F05A47] h-full transition-all duration-400 ease-out rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Steps Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Age */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">
                  第 1 步：孩子的年龄段是？
                </h3>
                <p className="text-xs text-slate-500 mb-6 text-center sm:text-left">
                  我们严格按照语言敏感期进行分龄教学，确保同班孩子认知发展同步。
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {ageOptions.map((opt) => {
                    const IconComp = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelectAge(opt.value)}
                        className="p-5 rounded-2xl border border-stone-200 hover:border-[#F05A47] hover:bg-rose-50/20 text-left transition-all duration-200 group flex items-start gap-4 focus:outline-none"
                      >
                        <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-[#F05A47] group-hover:text-white text-slate-700 flex items-center justify-center shrink-0 transition-colors">
                          <IconComp className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div>
                          <div className="text-base font-bold text-slate-900 group-hover:text-[#F05A47] transition-colors">
                            {opt.label}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Current Level */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    第 2 步：孩子目前的英语基础情况是？
                  </h3>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-slate-700 underline"
                  >
                    上一步
                  </button>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  客观选择孩子当前的状态，我们将为其匹配最舒适的学习坡度。
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {currentLevelOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectLevel(opt.value)}
                      className="p-5 rounded-2xl border border-stone-200 hover:border-[#F05A47] hover:bg-rose-50/20 text-left transition-all duration-200 group focus:outline-none"
                    >
                      <div className="text-base font-bold text-slate-900 group-hover:text-[#F05A47] transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Main Goal */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    第 3 步：您近期最希望孩子重点突破的目标是？
                  </h3>
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-slate-400 hover:text-slate-700 underline"
                  >
                    上一步
                  </button>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  明确核心驱动力，便于教研老师在试听课上对孩子进行针对性启发与引导。
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {goalOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectGoal(opt.value)}
                      className="p-5 rounded-2xl border border-stone-200 hover:border-[#F05A47] hover:bg-rose-50/20 text-left transition-all duration-200 group focus:outline-none"
                    >
                      <div className="text-base font-bold text-slate-900 group-hover:text-[#F05A47] transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Diagnosis Result Report */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      诊断匹配报告
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">
                      为您智能推荐：{rec.stage}
                    </h3>
                  </div>
                  <button
                    onClick={resetAssessment}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 self-start sm:self-auto py-1 px-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    重新自测
                  </button>
                </div>

                {/* Recommendation Detail Box */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/60">
                      <div className="text-xs font-bold text-amber-900 mb-1">推荐班型定位</div>
                      <div className="text-base font-bold text-slate-900">{rec.subStage}</div>
                      <div className="text-xs text-slate-600 mt-1 flex items-center gap-3">
                        <span>规格：{rec.classSize}</span>
                        <span>•</span>
                        <span>课时：{rec.timeEstimate}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        专属核心教学发力点
                      </div>
                      <div className="space-y-2">
                        {rec.focus.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                      <div className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1">
                        <Award className="w-4 h-4 text-emerald-700" />
                        预估 1 年成长里程碑
                      </div>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        {rec.projectedMilestone}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Fast Conversion Card */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between text-center">
                    <div>
                      <div className="w-12 h-12 bg-[#F05A47]/10 text-[#F05A47] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">领取针对性试听</h4>
                      <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                        试听课上外教将重点针对该阶段测试孩子的具体词句反应与拼读语感。
                      </p>
                    </div>

                    <div>
                      <Button
                        onClick={() => scrollToBooking(rec.stage)}
                        className="w-full bg-[#F05A47] hover:bg-[#DE4936] text-white font-semibold py-5 rounded-xl text-xs sm:text-sm shadow-sm"
                      >
                        免费试听对应班级
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                      <div className="text-[10px] text-slate-400 mt-2">
                        现场出具更详尽的 6 维纸质能力图谱
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAssessment;
