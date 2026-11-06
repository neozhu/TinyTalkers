"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Volume2, 
  Star, 
  Baby, 
  BookOpen, 
  Trophy, 
  CheckCircle2, 
  Users2,
  ChevronDown,
  MessageCircle
} from "lucide-react";
import { PlayfulMascotSticker } from "@/components/playful-mascots";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center bg-transparent pt-28 pb-20 sm:pb-24 overflow-hidden">
      {/* =========================================================================
          BACKGROUND LAYER: Rich Ambient Atmosphere with Subtle Motion
          ========================================================================= */}
      
      {/* 1. Animated Ambient Lighting Blooms (Breathing gentle glows) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.06, 1],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] opacity-45 pointer-events-none blur-3xl z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.5) 0%, rgba(254, 205, 211, 0.35) 45%, rgba(255, 253, 249, 0) 70%)"
        }}
      />

      {/* Left Warm Coral Flare */}
      <motion.div 
        animate={{ 
          x: [0, 16, 0],
          y: [0, 12, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-24 -left-20 w-[520px] h-[520px] rounded-full blur-[100px] opacity-25 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(240, 90, 71, 0.25) 0%, rgba(254, 205, 211, 0.15) 50%, transparent 70%)"
        }}
      />

      {/* Right Soft Mint/Emerald Glow */}
      <motion.div 
        animate={{ 
          x: [0, -14, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 11, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-24 -right-20 w-[550px] h-[550px] rounded-full blur-[110px] opacity-22 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(209, 250, 229, 0.45) 0%, rgba(167, 243, 208, 0.2) 50%, transparent 70%)"
        }}
      />

      {/* 2. Tactile Dot Grid with Soft Vignette Mask */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#1E293B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }}
      />

      {/* 3. Subtle Animated Learning Trajectory (SVG dashed flight curves) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M -80 230 C 320 140, 580 340, 1080 190 C 1280 130, 1460 210, 1560 170"
          stroke="#F05A47"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <path
          d="M 120 590 C 420 670, 780 530, 1220 610"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      {/* 4. Playful Mascots with Simple English Dialogues & Real Voice Pronunciation */}
      {/* Playful Mascot 1: Toby leaping for a star (Left Flank) */}
      <PlayfulMascotSticker
        id="mascot-star"
        name="Toby 吉祥物小拓拓"
        imageSrc="/mascots/playful-star.jpg"
        englishDialogue="Look! A magic star! ⭐"
        chineseDialogue="看！好闪亮的小星星！"
        positionClasses="top-28 left-3 lg:left-8 hidden md:flex"
        bubblePosition="top"
        floatDuration={7}
        floatDelay={0}
      />

      {/* Playful Mascot 2: Puppy stacking ABC blocks (Right Flank) */}
      <PlayfulMascotSticker
        id="mascot-blocks"
        name="Buddy 积木小玩偶"
        imageSrc="/mascots/playful-blocks.jpg"
        englishDialogue="A-B-C, let's play together! 🎈"
        chineseDialogue="快来和我一起玩积木！"
        positionClasses="top-24 right-3 lg:right-8 hidden lg:flex"
        bubblePosition="top"
        floatDuration={8}
        floatDelay={1.2}
      />

      {/* Playful Mascot 3: Baby Dino greeting (Bottom Left Transition Area) */}
      <PlayfulMascotSticker
        id="mascot-dino"
        name="Dino 萌趣恐龙玩偶"
        imageSrc="/mascots/stage-beginner.jpg"
        englishDialogue="Hello! What's your name? 👋"
        chineseDialogue="你好呀！你叫什么名字？"
        positionClasses="bottom-28 left-4 lg:left-12 hidden xl:flex"
        bubblePosition="top"
        floatDuration={9}
        floatDelay={2.4}
      />

      {/* Floating Sparkle Stars */}
      <motion.div
        animate={{ opacity: [0.3, 0.75, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 right-1/3 text-amber-400/50 pointer-events-none z-0 hidden sm:block"
        aria-hidden="true"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-36 left-1/3 text-[#F05A47]/40 pointer-events-none z-0 hidden sm:block"
        aria-hidden="true"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      {/* =========================================================================
          FOREGROUND CONTENT CONTAINER
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-xs sm:text-sm font-medium text-rose-700 mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#F05A47] animate-pulse" />
              <span>秋季新学期学位开放预定</span>
              <span className="text-rose-400">·</span>
              <span className="text-rose-600 font-semibold">前 50 名立送 2 节全真试听</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              让孩子在欢笑中
              <span className="relative whitespace-nowrap text-[#F05A47] mx-2">
                自信开口
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#F05A47]/25 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              用双语探索更大的世界
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              专为 3–12 岁少儿打造的分龄互动英语体系。摒弃死记硬背，采用纯正母语习得情景教学，让孩子真正听得懂、说得出、乐表达。
            </p>

            {/* Three Stages Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/60 text-xs font-semibold text-amber-900">
                <Baby className="w-3.5 h-3.5 text-amber-600" />
                <span>启蒙期 (3–6岁) 趣味磨耳朵</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/60 text-xs font-semibold text-emerald-900">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>系统期 (6–10岁) 听说读写进阶</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/60 text-xs font-semibold text-blue-900">
                <Trophy className="w-3.5 h-3.5 text-blue-600" />
                <span>强化期 (10岁+) 演讲思辨与考级</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("booking")}
                className="w-full sm:w-auto bg-[#F05A47] hover:bg-[#DE4936] text-white text-base font-semibold px-8 py-6 rounded-xl shadow-md shadow-rose-500/20 hover:shadow-lg transition-all"
              >
                免费预约 2 节试听课
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("courses")}
                className="w-full sm:w-auto border-stone-300 text-slate-700 hover:text-slate-900 hover:bg-stone-100 text-base font-medium px-7 py-6 rounded-xl transition-all"
              >
                查看完整课程规划
              </Button>
            </div>

            {/* Trust Reassurance Proofs */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-stone-200/80 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">6-8人</div>
                <div className="text-xs text-slate-500 mt-0.5">精品小班纯正互动</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">持证母语/双语外教</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#F05A47] tracking-tight">98.6%</div>
                <div className="text-xs text-slate-500 mt-0.5">家长持续续班口碑</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Craft Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Showcase Card */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xl shadow-stone-900/5">
              {/* Header with 3D Brand Mascot Toby */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-amber-50 ring-2 ring-[#F05A47]/20 shadow-xs shrink-0">
                    <Image
                      src="/mascots/hero-mascot.jpg"
                      alt="TinyTalkers 吉祥物小拓拓 Toby"
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-slate-900">吉祥物 Toby 的伴学日记</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                        趣味伴学
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Leo 同学 · 6岁 · 启蒙进阶中</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  已开口表达
                </span>
              </div>

              {/* Classroom Scenario Simulation */}
              <div className="my-5 p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/40">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-medium text-amber-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    今日课堂情景练习
                  </span>
                  <span>自然拼读第 24 课</span>
                </div>
                
                {/* Simulated Audio/Dialogue Bubble */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F05A47]/10 flex items-center justify-center shrink-0 text-[#F05A47]">
                      <Volume2 className="w-4 h-4 animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-900">
                        &ldquo;Look! The friendly dinosaur has a giant red strawberry!&rdquo;
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="h-1.5 w-6 rounded-full bg-[#F05A47]" />
                        <span className="h-1.5 w-12 rounded-full bg-[#F05A47]/80" />
                        <span className="h-1.5 w-8 rounded-full bg-[#F05A47]/60" />
                        <span className="h-1.5 w-16 rounded-full bg-[#F05A47]/40" />
                        <span className="h-1.5 w-4 rounded-full bg-stone-200" />
                        <span className="text-[10px] text-slate-400 ml-auto font-mono">发音分: 96</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-600">
                  <span>外教评语：语音语调极具节奏感，敢于大声自然表达！</span>
                </div>
              </div>

              {/* Milestone Progress Bar */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-medium text-slate-700">
                  <span>阶段目标达成率</span>
                  <span className="text-[#F05A47] font-bold">88%</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 via-rose-500 to-[#F05A47] h-full rounded-full w-[88%]" />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 pt-0.5">
                  <span>自然拼读熟记</span>
                  <span>日常常用指令</span>
                  <span>自主简单绘本</span>
                </div>
              </div>

              {/* Floating Reassurance Badges */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>支持随时免费试听</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="font-semibold text-slate-800 ml-1">5.0</span>
                </div>
              </div>
            </div>

            {/* Subtle floating accent pill */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-stone-200/80 shadow-lg text-xs font-medium text-slate-800 flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Users2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-slate-900 font-bold block">1对1 英语水平评测</span>
                <span className="text-slate-500 text-[10px]">试听课现场出具专属报告</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          TRANSITION LAYER: Seamless Organic Bridge to Next Screen (#soundboard)
          ========================================================================= */}
      
      {/* 1. Soft feathering gradient blend into next section */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent via-[#FFFDF9]/60 to-[#FFFDF9] pointer-events-none z-10" />

      {/* 2. Gentle organic wave curve divider */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 text-[#FFFDF9]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 3. Interactive Downward Exploration Cue Bridge */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={() => scrollToSection("soundboard")}
          className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-stone-200/90 text-xs font-semibold text-slate-600 hover:text-slate-900 shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F05A47] group-hover:scale-125 transition-transform" />
          <span>向下探索 · 外教原声互动体验</span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F05A47] transition-colors" />
          </motion.span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
