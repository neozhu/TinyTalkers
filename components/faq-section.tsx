"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, MessageCircle, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "试听课是真的免费吗？包含哪些具体内容？",
      answer: "完全免费，无任何押金或隐形绑定！每位新学员均享 2 节全真小班体验课，包含：\n1. 课前 1 对 1 专业英语水平能力评测；\n2. 45 分钟沉浸式外教真实课堂体验；\n3. 课后出具多维语言素养诊断报告与专属阶段规划方案。"
    },
    {
      question: "孩子没有任何英语基础，能跟上全英文小班吗？",
      answer: "完全不用担心！对于 3–6 岁启蒙期孩子，我们采用国际成熟的 TPR（Total Physical Response 全身反应法）与多感官情景教学。老师通过夸张的肢体语言、生动教具、趣味儿歌与绘本引导，孩子即使不认识单词，也能像习得母语一样依靠情景理解并自然模仿发音。同时每个班级均配备专职双语助教老师，随时关照孩子的心理状态。"
    },
    {
      question: "班级人数一般多少人？老师能否照顾到每个孩子？",
      answer: "我们严格恪守精品小班制原则：\n• 启蒙期：6–8 人/班\n• 系统学习期：6–10 人/班\n• 强化期：6–12 人/班\n\n小班制确保每节课每个孩子平均有 15 次以上单独开口互动机会，彻底告别传统机构‘大班只听不练、默默当观众’的弊端。"
    },
    {
      question: "如果临时有事需要请假或调课，补课政策是怎样的？",
      answer: "我们提供高度灵活的人性化调补课机制：\n• 提前 24 小时在家长端小程序请假，不扣除课时；\n• 支持同级别其他班级跨班补课，或由助教安排一对一核心知识点回放串讲；\n• 因家庭长途旅行或生病，可申请最长 3 个月休学期，学位与课时全额保留。"
    },
    {
      question: "外教老师都有哪些资质？发音和教学品质如何保障？",
      answer: "TinyTalkers 的授课外教录取率仅为 2.8%：\n• 100% 来自以英语为母语的国家（英、美、加、澳）；\n• 100% 持有国际公认的 TESOL / TEFL / CELTA 国际英语教师认证资格；\n• 拥有 5 年以上少儿一线教育经验，并通过严格的儿童心理学考核与背景调查。"
    },
    {
      question: "家长如何实时掌握孩子在校的学习进度与反馈？",
      answer: "我们建立了一体化家校透明共育体系：\n• 每节课后：教师微信群发送当日核心词汇句型与学员课堂精彩发音短视频；\n• 每月末：出具学员阶段性学情档案与词汇掌握度雷达图；\n• 每季度：举办 1 对 1 家长面谈会，深入沟通下一步成长目标。"
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "官方咨询热线",
      description: "400-880-6899",
      subtext: "工作日 09:00 - 20:30"
    },
    {
      icon: MessageCircle,
      title: "微信顾问一对一",
      description: "添加课程规划师",
      subtext: "5分钟内响应解答"
    },
    {
      icon: CalendarCheck,
      title: "校区开放日探访",
      description: "实地参观沉浸式教室",
      subtext: "亲子绘本馆免费开放"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/50 to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] opacity-20 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 243, 199, 0.4) 0%, rgba(254, 215, 170, 0.25) 50%, transparent 75%)"
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-slate-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>解开您的每一个顾虑</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            家长最关心的热点问题
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            透明、真诚的解答，让您在做决定前清晰了解每一个细节。
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#FFFDF9] rounded-2xl border border-stone-200/80 px-6 data-[state=open]:border-[#F05A47]/40 data-[state=open]:bg-white transition-all shadow-xs"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base sm:text-lg font-bold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-stone-100 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Options Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {contactOptions.map((opt, idx) => {
            const IconComp = opt.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFDF9] border border-stone-200/80 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#F05A47] mx-auto mb-3 flex items-center justify-center">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{opt.title}</h3>
                  <div className="text-sm font-semibold text-slate-800">{opt.description}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{opt.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-stone-900 to-slate-900 text-white text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              名额有限 · 本月仅余 35 个试听席位
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              仍有疑问？不妨直接带孩子来体验
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              孩子的真实笑容和开口表现，就是最好的答案。立即免费锁定试听名额。
            </p>
            <Button
              onClick={scrollToBooking}
              className="bg-[#F05A47] hover:bg-[#DE4936] text-white font-semibold px-8 py-6 rounded-xl text-sm shadow-md"
            >
              立即预约 2 节免费试听
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
