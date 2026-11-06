"use client";

import React from "react";

/**
 * AmbientBackgroundBlobs:
 * Global atmospheric ambient lighting with warm pastel tones (amber, coral, mint)
 * and an ultra-fine stipple grain for tactile depth.
 * Opacities are strictly calibrated (0.02 - 0.25) so foreground text remains 100% crisp.
 */
export const AmbientBackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Right Warm Amber Glow */}
      <div 
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full blur-[100px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(254, 215, 170, 0.6) 0%, rgba(254, 243, 199, 0.3) 50%, transparent 75%)"
        }}
      />

      {/* Mid Left Soft Coral Glow */}
      <div 
        className="absolute top-[32%] -left-40 w-[600px] h-[600px] rounded-full blur-[110px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(240, 90, 71, 0.25) 0%, rgba(254, 205, 211, 0.2) 50%, transparent 70%)"
        }}
      />

      {/* Lower Right Soft Mint/Emerald Glow */}
      <div 
        className="absolute top-[65%] -right-40 w-[650px] h-[650px] rounded-full blur-[120px] opacity-18"
        style={{
          background: "radial-gradient(circle, rgba(209, 250, 229, 0.5) 0%, rgba(167, 243, 208, 0.25) 50%, transparent 70%)"
        }}
      />

      {/* Subtle organic paper stipple grid - kept ultra faint to preserve 100% text contrast */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(#1E293B 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />
    </div>
  );
};

/**
 * FloatingWatermarkMotifs:
 * Educational typography and iconography watermarks (Aa, Bb, stars)
 * Kept ultra-faint (0.02 - 0.035) to provide visual delight without distracting reading.
 */
export const FloatingWatermarkMotifs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Faint Alphabet Letter "Aa" */}
      <div className="absolute top-12 left-6 sm:left-14 text-[120px] sm:text-[140px] font-black text-amber-900/[0.03] leading-none font-mono">
        Aa
      </div>

      {/* Faint Letter "Bb" */}
      <div className="absolute top-44 right-8 sm:right-20 text-[130px] sm:text-[150px] font-black text-rose-900/[0.025] leading-none font-mono">
        Bb
      </div>

      {/* Faint Letter "Cc" */}
      <div className="absolute bottom-16 left-12 text-[120px] sm:text-[140px] font-black text-emerald-900/[0.025] leading-none font-mono">
        Cc
      </div>

      {/* Subtle Floating Stars & Sparkles */}
      <svg
        className="absolute top-1/4 right-1/4 w-8 h-8 text-amber-500/[0.045]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>
      <svg
        className="absolute bottom-1/3 left-1/5 w-9 h-9 text-[#F05A47]/[0.04]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>
    </div>
  );
};

/**
 * SoundboardAtmosphere:
 * Acoustic radial ripples and subtle floating audio note motifs for the soundboard section.
 */
export const SoundboardAtmosphere = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Concentric sound ripple rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-rose-300/[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-amber-300/[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-rose-400/[0.06]" />

      {/* Floating Musical Notes Watermark */}
      <svg
        className="absolute top-16 right-16 w-12 h-12 text-[#F05A47]/[0.035]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
      <svg
        className="absolute bottom-20 left-16 w-10 h-10 text-amber-600/[0.03]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    </div>
  );
};

/**
 * LearningLoopTimelineTrack:
 * Subtle connected looping trajectory linking the 5 learning steps visually.
 */
export const LearningLoopTimelineTrack = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <svg
        className="absolute top-36 left-0 w-full h-32 opacity-15 hidden sm:block"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 50,60 Q 300,10 600,60 T 1150,60"
          stroke="#F05A47"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>
      {/* Soft warm spotlight behind the steps card */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] rounded-full blur-[100px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(254, 215, 170, 0.4) 0%, rgba(254, 205, 211, 0.2) 60%, transparent 80%)"
        }}
      />
    </div>
  );
};

/**
 * TestimonialsQuoteWatermark:
 * Oversized elegant quotation marks in the background for social proof.
 */
export const TestimonialsQuoteWatermark = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <div className="absolute top-8 left-8 sm:left-24 text-[180px] sm:text-[220px] font-serif font-black text-rose-900/[0.025] leading-none select-none">
        “
      </div>
      <div className="absolute bottom-8 right-8 sm:right-24 text-[180px] sm:text-[220px] font-serif font-black text-amber-900/[0.02] leading-none select-none">
        ”
      </div>
    </div>
  );
};

/**
 * CampusAtmosphere:
 * Calming warmth with subtle sunbeam and leaf watermark for the campus environment.
 */
export const CampusAtmosphere = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[450px] rounded-full blur-[110px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(209, 250, 229, 0.5) 0%, rgba(254, 243, 199, 0.3) 50%, transparent 75%)"
        }}
      />
      {/* Subtle shield / safety emblem watermark */}
      <svg
        className="absolute bottom-12 right-12 w-28 h-28 text-emerald-800/[0.02]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
      </svg>
    </div>
  );
};
