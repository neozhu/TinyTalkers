"use client";

import Image from "next/image";
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck } from "lucide-react";
import { TestimonialsQuoteWatermark } from "@/components/background-decorations";

const Testimonials = () => {
  const baseTestimonials = [
    {
      content: "Emma在TinyTalkers学了一年，从一开始的害羞不敢说，到现在能自信地用英语表达想法。外教很有耐心，TPR教学法让孩子每次上课都在笑声中度过，完全没有死记硬背的压力！",
      parentName: "王妈妈",
      childName: "Emma",
      childAge: "5岁",
      avatar: "/parents/parent-1.jpg",
      stage: "启蒙期",
      duration: "在读 1 年",
      highlight: "从抗拒开口到主动用英文问好"
    },
    {
      content: "儿子Leo在这里系统学会了自然拼读，现在看到任何原版英文绘本都能顺畅读出来。6人小班制让每个孩子每节课有至少15次独立开口机会，学习效果非常直观，强烈推荐！",
      parentName: "李爸爸",
      childName: "Leo",
      childAge: "7岁",
      avatar: "/parents/parent-2.jpg",
      stage: "系统学习期",
      duration: "在读 8 个月",
      highlight: "自然拼读自主阅读突破"
    },
    {
      content: "女儿Sophia准备考剑桥PET，在老师的针对性阅读与写作工作坊辅导下顺利高分通过！不仅学术英语提升显著，连逻辑思维和公众演讲气场都变强了，非常感恩老师们的悉心教导。",
      parentName: "张妈妈",
      childName: "Sophia",
      childAge: "11岁",
      avatar: "/parents/parent-3.jpg",
      stage: "强化期",
      duration: "在读 2 年",
      highlight: "高分通过剑桥PET考试"
    },
    {
      content: "Max性格好动，以前去过的大班机构根本坐不住。TinyTalkers的情景剧小班太适合他了，角色扮演和小短剧演练让他完全沉浸其中。家长群每节课后都有发音视频和详尽反馈，很放心。",
      parentName: "陈妈妈",
      childName: "Max",
      childAge: "6岁",
      avatar: "/parents/parent-4.jpg",
      stage: "启蒙期",
      duration: "在读 10 个月",
      highlight: "情景小剧场自信领衔"
    },
    {
      content: "起初担心全英文沉浸课堂孩子会听不懂产生挫败感，但中教助教和外教配合得特别默契，阶梯式过渡非常自然。现在去国外旅行，孩子已经能主动跟店员用英文点冰淇淋了！",
      parentName: "刘爸爸",
      childName: "Chloe",
      childAge: "8岁",
      avatar: "/parents/parent-5.jpg",
      stage: "系统学习期",
      duration: "在读 1.5 年",
      highlight: "真实场景自如生活对话"
    },
    {
      content: "课程体系非常清晰严密，从启蒙到系统学习，每一个月的目标清清楚楚，完全能对应上孩子的成长轨迹。班主任负责又有温度，是我们在少儿英语上做过最满意的投资。",
      parentName: "周妈妈",
      childName: "Ryan",
      childAge: "9岁",
      avatar: "/parents/parent-6.jpg",
      stage: "系统学习期",
      duration: "在读 1 年半",
      highlight: "学科阅读理解能力飞跃"
    }
  ];

  const testimonials = Array.from(
    { length: 18 },
    (_, i) => baseTestimonials[i % baseTestimonials.length]
  );
  const topRow = testimonials.slice(0, 9);
  const bottomRow = testimonials.slice(9);

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof baseTestimonials)[number];
  }) => (
    <div className="w-[340px] sm:w-[380px] shrink-0 p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/50 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            {testimonial.stage}
          </span>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Real Photo Avatar */}
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-rose-50 ring-1 ring-stone-200 shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.parentName}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 leading-tight">
              {testimonial.parentName}
            </div>
            <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
              {testimonial.childName} · {testimonial.childAge} ({testimonial.duration})
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-medium text-slate-500 bg-stone-100 px-2 py-0.5 rounded">
            {testimonial.highlight}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/40 to-[#FFFDF9] border-t border-stone-200/60 overflow-hidden relative">
      <TestimonialsQuoteWatermark />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 mb-3">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#F05A47]" />
          <span>真实就读反馈 · 口碑见证力量</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          来自 1,200+ 家长的真实声音
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          让每一个孩子收获闪闪发光的自信与流利表达，是 TinyTalkers 最值得骄傲的成绩。
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="flex gap-6 animate-marquee-left">
          {topRow.map((t, idx) => (
            <TestimonialCard key={`top-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee-right">
          {bottomRow.map((t, idx) => (
            <TestimonialCard key={`bottom-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Trust Quote Banner */}
      <div className="mt-14 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>所有学员评价均为 TinyTalkers 在读学员家长实名反馈</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
