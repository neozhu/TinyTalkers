"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Gift, 
  Users2, 
  Sparkles, 
  ShieldCheck, 
  BadgePercent, 
  Clock,
  ArrowRight
} from "lucide-react";

const PricingSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const offers = [
    {
      icon: Gift,
      title: "免费试听 2 节全真课",
      description: "零门槛真实体验小班课堂氛围，课后出具完整多维语言发展评测报告"
    },
    {
      icon: Users2,
      title: "双人同行各立减 ¥500",
      description: "好朋友一起组班学习，激发同伴竞争与互动兴趣，享受专属团报特惠"
    },
    {
      icon: Clock,
      title: "老带新赠送 4 节课时",
      description: "老学员成功推荐新学员报名，双方均可额外获赠价值 ¥960 的精品辅导课时"
    }
  ];

  const priceTiers = [
    {
      stage: "启蒙期（3–6岁）",
      price: "¥8,000 – ¥14,000",
      period: "学年费用",
      popular: false,
      tag: "兴趣启蒙",
      features: [
        "全年 80–96 课时（35分钟/节）",
        "每周 2 次，6–8 人精品小班",
        "赠送原版进口绘本与磨耳朵音频包",
        "TPR 互动多感官情景教具包",
        "双语班主任伴随式辅导答疑",
        "每学期 2 次家长开放日公开课"
      ]
    },
    {
      stage: "系统学习期（6–10岁）",
      price: "¥10,000 – ¥20,000",
      period: "学年费用",
      popular: true,
      tag: "最受家长推荐",
      features: [
        "全年 80–144 课时（50分钟/节）",
        "每周 2–3 次，6–10 人互动班",
        "牛津 / 剑桥少儿分级阅读全套教材",
        "线上智能自然拼读配套练习系统",
        "期末英文话剧展演与视频成长记录",
        "每月末 1 对 1 学情个性化分析会"
      ]
    },
    {
      stage: "强化期（10岁以上）",
      price: "¥12,000 – ¥28,000",
      period: "学年费用",
      popular: false,
      tag: "学术拔高",
      features: [
        "全年 80–144 课时（70分钟/节）",
        "每周 2–3 次，6–12 人讨论班",
        "原版非虚构思辨阅读与精细化写作",
        "剑桥 KET / PET / 托福真题全真模考",
        "模拟联合国公众演讲专项辩论工作坊",
        "官方考试指导与考官级口语精练"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Subtle Pricing Bloom */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-25 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 205, 211, 0.3) 0%, rgba(254, 243, 199, 0.35) 45%, transparent 70%)"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 mb-3">
            <BadgePercent className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>收费透明规范 · 支持阶段分期</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            透明价格与限时新生福利
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            无隐形二次收费，教材、测评与教辅材料全包。签约保障试听满意再入学。
          </p>
        </motion.div>

        {/* Benefits Cards Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer, idx) => {
            const IconC = offer.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-amber-200/50 shadow-xs flex items-start gap-4 hover:border-amber-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700">
                  <IconC className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{offer.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{offer.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {priceTiers.map((tier, index) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.stage}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  isPopular
                    ? "bg-[#FFFDF9] border-2 border-[#F05A47] shadow-xl shadow-rose-900/5 ring-4 ring-rose-500/10"
                    : "bg-white border border-stone-200 shadow-xs hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F05A47] text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                    {tier.tag}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-slate-700 inline-block mb-2">
                      {tier.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{tier.stage}</h3>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ {tier.period}</span>
                    </div>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 pt-6 border-t border-stone-100">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      费用包含服务
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-8 mt-6 border-t border-stone-100">
                  <Button
                    onClick={scrollToBooking}
                    className={`w-full py-5 rounded-xl text-sm font-semibold transition-all ${
                      isPopular
                        ? "bg-[#F05A47] hover:bg-[#DE4936] text-white shadow-sm"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    申请该阶段免费试听
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <p className="text-[11px] text-center text-slate-400 mt-2.5 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    试听满意后可签署正式服务协议
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
