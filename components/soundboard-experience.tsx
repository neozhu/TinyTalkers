"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Volume2, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Headphones, 
  Mic, 
  RotateCcw,
  Award,
  ArrowRight
} from "lucide-react";
import { SoundboardAtmosphere } from "@/components/background-decorations";

interface WordItem {
  id: string;
  word: string;
  phonetic: string;
  chinese: string;
  category: string;
  stage: string;
  sampleSentence: string;
}

const SoundboardExperience = () => {
  const [activeWordId, setActiveWordId] = useState<string>("apple");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);

  const sampleWords: WordItem[] = [
    {
      id: "apple",
      word: "Apple",
      phonetic: "/ˈæp.əl/",
      chinese: "苹果 · 经典短元音 /æ/",
      category: "自然拼读 A 阶",
      stage: "启蒙期 (3–6岁)",
      sampleSentence: "An apple a day keeps the doctor away!"
    },
    {
      id: "butterfly",
      word: "Butterfly",
      phonetic: "/ˈbʌt.ə.flaɪ/",
      chinese: "蝴蝶 · 三音节轻重音节奏",
      category: "趣味自然探索",
      stage: "启蒙期 (3–6岁)",
      sampleSentence: "Look at the colorful butterfly in the sunny garden!"
    },
    {
      id: "astronaut",
      word: "Astronaut",
      phonetic: "/ˈæs.trə.nɔːt/",
      chinese: "宇航员 · 复合元音与职业",
      category: "学科与科技词汇",
      stage: "系统学习期 (6–10岁)",
      sampleSentence: "The brave astronaut is exploring the mysterious red planet."
    },
    {
      id: "curiosity",
      word: "Curiosity",
      phonetic: "/ˌkjʊə.riˈɒs.ə.ti/",
      chinese: "好奇心 · 多音节语调重音",
      category: "思辨与品质探索",
      stage: "强化期 (10岁+)",
      sampleSentence: "Curiosity is the sparkling spark behind every great human discovery."
    }
  ];

  const activeWord = sampleWords.find(w => w.id === activeWordId) || sampleWords[0];

  // Synthesize clean audio and speech
  const playPronunciation = (wordItem: WordItem) => {
    setActiveWordId(wordItem.id);
    setIsPlaying(true);
    setScore(null);

    // 1. Play playful chime with Web Audio API if available
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch {
      // AudioContext not allowed or unsupported
    }

    // 2. Play speech synthesis
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`${wordItem.word}. ${wordItem.sampleSentence}`);
      utterance.lang = "en-US";
      utterance.rate = 0.85; // Slightly slower and clearer for kids
      utterance.pitch = 1.05; // Warm, friendly pitch

      utterance.onend = () => {
        setIsPlaying(false);
        // Simulate immediate AI score feedback
        setScore(Math.floor(Math.random() * 5) + 95); // 95 - 99
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setIsPlaying(false);
        setScore(98);
      }, 1500);
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="soundboard" className="pt-16 sm:pt-20 pb-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/50 to-[#FFFDF9] relative overflow-hidden">
      <SoundboardAtmosphere />
      {/* Background soft ambient blur */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-25 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(240, 90, 71, 0.25) 0%, rgba(254, 243, 199, 0.4) 60%, transparent 75%)"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-semibold text-rose-700 mb-3 shadow-xs">
            <Headphones className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>互动沉浸体验 · 点一点听地道发音</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            外教原声互动体验馆
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            点击下方示例词汇，感受母语外教的真实语调、节奏律动与趣味例句，体验孩子在课堂上的互动乐趣。
          </p>
        </div>

        {/* Interactive Soundboard Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xl shadow-stone-900/5">
          {/* Left Column: Word Selector Chips */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              点击切换发音样本词
            </div>
            {sampleWords.map((item) => {
              const isCurrent = item.id === activeWordId;
              return (
                <button
                  key={item.id}
                  onClick={() => playPronunciation(item)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group focus:outline-none ${
                    isCurrent
                      ? "bg-white border-[#F05A47] shadow-md shadow-rose-900/5 ring-2 ring-[#F05A47]/10"
                      : "bg-white/70 border-stone-200/80 hover:bg-white hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isCurrent
                          ? "bg-[#F05A47] text-white"
                          : "bg-stone-100 text-slate-600 group-hover:bg-[#F05A47]/10 group-hover:text-[#F05A47]"
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <Volume2 className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5 fill-current" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-slate-900">{item.word}</span>
                        <span className="text-xs font-mono text-slate-400">{item.phonetic}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.chinese}</div>
                    </div>
                  </div>

                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-stone-100 text-slate-600 shrink-0">
                    {item.stage.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Player & Soundwave Visualizer */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between min-h-[360px]">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  {activeWord.category}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  适龄：{activeWord.stage}
                </span>
              </div>

              {/* Main Display Word */}
              <div className="my-6 text-center">
                <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {activeWord.word}
                </h3>
                <div className="text-lg font-mono text-[#F05A47] font-semibold mt-1">
                  {activeWord.phonetic}
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  {activeWord.chinese}
                </p>
              </div>

              {/* Example Sentence with Audio Bubble */}
              <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/60 text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  课堂情景应用例句
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
                  &ldquo;{activeWord.sampleSentence}&rdquo;
                </p>
              </div>

              {/* Dynamic Soundwave Spectrum Animation */}
              <div className="flex items-center justify-center gap-1.5 my-6 h-12">
                {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 85, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isPlaying
                        ? {
                            height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`],
                            opacity: [0.6, 1, 0.6]
                          }
                        : { height: "20%", opacity: 0.3 }
                    }
                    transition={{
                      duration: 0.4 + (i % 3) * 0.1,
                      repeat: isPlaying ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className={`w-1.5 rounded-full transition-colors ${
                      isPlaying ? "bg-[#F05A47]" : "bg-stone-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Controls & Real-time AI Grading Demo */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                onClick={() => playPronunciation(activeWord)}
                disabled={isPlaying}
                className="w-full sm:w-auto bg-[#F05A47] hover:bg-[#DE4936] text-white font-semibold px-6 py-5 rounded-xl shadow-sm flex items-center gap-2"
              >
                <Volume2 className={`w-4 h-4 ${isPlaying ? "animate-pulse" : ""}`} />
                <span>{isPlaying ? "正在外教朗读中..." : "点击朗读单词与例句"}</span>
              </Button>

              {/* AI Score Feedback Tag */}
              <AnimatePresence>
                {score !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>AI 发音精准度得分：{score} 分 (极佳)</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Small Bottom Callout */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>提示：在实际课堂中，每节课配备趣味发音打卡与专属外教 1 对 1 发音口型纠偏。</span>
        </div>
      </div>
    </section>
  );
};

export default SoundboardExperience;
