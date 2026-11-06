"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, CheckCircle2 } from "lucide-react";

interface ToastItem {
  id: number;
  location: string;
  parent: string;
  child: string;
  stage: string;
  timeAgo: string;
}

const mockBookings: ToastItem[] = [
  { id: 1, location: "北京市朝阳区", parent: "张妈妈", child: "5岁半", stage: "启蒙期（3–6岁）", timeAgo: "3分钟前" },
  { id: 2, location: "北京市海淀区", parent: "李爸爸", child: "7岁", stage: "系统学习期（6–10岁）", timeAgo: "6分钟前" },
  { id: 3, location: "北京市西城区", parent: "陈妈妈", child: "4岁", stage: "启蒙期（3–6岁）", timeAgo: "12分钟前" },
  { id: 4, location: "北京市东城区", parent: "王妈妈", child: "11岁", stage: "强化期（10岁+）", timeAgo: "18分钟前" },
  { id: 5, location: "北京市丰台区", parent: "周爸爸", child: "8岁半", stage: "系统学习期（6–10岁）", timeAgo: "25分钟前" },
];

const LiveBookingToast = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissedPermanently, setIsDismissedPermanently] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissedPermanently) return;

    // Show first toast after 3.5s
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    // Rotate toasts every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIdx(prev => (prev + 1) % mockBookings.length);
        setIsVisible(true);
      }, 1000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissedPermanently]);

  if (isDismissedPermanently) return null;

  const current = mockBookings[currentIdx];

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-stone-200/90 shadow-xl shadow-stone-900/10 flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div className="flex-1 cursor-pointer" onClick={scrollToBooking}>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
                <span>{current.location} · 预约动态</span>
                <span className="font-mono">{current.timeAgo}</span>
              </div>
              <p className="text-xs text-slate-800 leading-snug">
                <span className="font-bold text-slate-900">{current.parent}</span> 刚刚为孩子({current.child})预约了
                <span className="font-semibold text-[#F05A47] ml-1">{current.stage}</span>
              </p>
            </div>

            <button
              onClick={() => setIsDismissedPermanently(true)}
              className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1 rounded-md"
              aria-label="关闭通知"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveBookingToast;
