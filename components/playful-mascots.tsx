"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Volume2, Sparkles } from "lucide-react";

interface PlayfulMascotProps {
  id: string;
  name: string;
  imageSrc: string;
  englishDialogue: string;
  chineseDialogue: string;
  positionClasses: string;
  bubblePosition?: "top" | "bottom" | "left" | "right";
  floatDuration?: number;
  floatDelay?: number;
}

export const PlayfulMascotSticker: React.FC<PlayfulMascotProps> = ({
  id,
  name,
  imageSrc,
  englishDialogue,
  chineseDialogue,
  positionClasses,
  bubblePosition = "top",
  floatDuration = 7,
  floatDelay = 0,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakDialogue = () => {
    setIsSpeaking(true);

    // 1. Play playful chime with Web Audio API
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch {
      // AudioContext fallback
    }

    // 2. Browser SpeechSynthesis for natural English pronunciation
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      // Strip emojis from text-to-speech
      const cleanText = englishDialogue.replace(/[\u{1F300}-\u{1F9FF}]/gu, "");
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1.2; // friendlier tone for kids

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsSpeaking(false), 2200);
    }
  };

  const isRowLayout = bubblePosition === "left" || bubblePosition === "right";

  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [-0.6, 0.6, -0.6]
      }}
      transition={{ 
        duration: floatDuration, 
        delay: floatDelay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute ${positionClasses} z-10 flex ${
        isRowLayout 
          ? (bubblePosition === "left" ? "flex-row items-center gap-2" : "flex-row-reverse items-center gap-2")
          : (bubblePosition === "top" ? "flex-col items-center" : "flex-col-reverse items-center")
      } select-none group`}
    >
      {/* Comic Speech Bubble */}
      <motion.button
        type="button"
        onClick={speakDialogue}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`relative ${bubblePosition === "top" ? "mb-2" : bubblePosition === "bottom" ? "mt-2" : ""} px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border text-left shadow-lg transition-all cursor-pointer ${
          isSpeaking 
            ? "border-[#F05A47] ring-2 ring-[#F05A47]/20 shadow-rose-900/10" 
            : "border-amber-200/90 hover:border-amber-400 shadow-stone-900/5"
        }`}
        title="点击收听玩偶对白发音"
      >
        <div className="flex items-center gap-1.5 mb-0.5 whitespace-nowrap">
          <span className="text-[11px] font-bold text-slate-900 tracking-tight flex items-center gap-1">
            {englishDialogue}
          </span>
          <span
            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              isSpeaking ? "bg-[#F05A47] text-white animate-pulse" : "bg-rose-50 text-[#F05A47]"
            }`}
          >
            <Volume2 className="w-2.5 h-2.5" />
          </span>
        </div>
        <div className="text-[10px] text-slate-500 font-normal whitespace-nowrap">
          {chineseDialogue}
        </div>

        {/* Tail Arrow depending on position */}
        {bubblePosition === "top" && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-white" />
        )}
        {bubblePosition === "bottom" && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-b-[8px] border-b-white" />
        )}
        {bubblePosition === "left" && (
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white" />
        )}
        {bubblePosition === "right" && (
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-white" />
        )}
      </motion.button>

      {/* Mascot Die-Cut Sticker Avatar */}
      <div 
        onClick={speakDialogue}
        className="relative cursor-pointer group-hover:scale-105 transition-transform duration-300 shrink-0"
      >
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-rose-100 p-0.5 shadow-md shadow-stone-900/10 ring-4 ring-white">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover rounded-[14px]"
          />
        </div>

        {/* Floating audio prompt tag */}
        <div className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-white/95 border border-stone-200/80 shadow-xs text-[9px] font-bold text-[#F05A47] flex items-center gap-0.5">
          <Sparkles className="w-2.5 h-2.5" />
          <span>点我发音</span>
        </div>
      </div>
    </motion.div>
  );
};
