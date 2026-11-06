"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "课程体系", id: "courses" },
    { label: "原声体验", id: "soundboard" },
    { label: "水平测评", id: "assessment" },
    { label: "教学闭环", id: "learning-loop" },
    { label: "年度课表", id: "schedule" },
    { label: "办学优势", id: "comparison" },
    { label: "价格特惠", id: "pricing" },
    { label: "师资团队", id: "teachers" },
    { label: "家长口碑", id: "testimonials" },
    { label: "常见问题", id: "faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-2.5"
          : "bg-[#FFFDF9]/80 backdrop-blur-xs py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2.5 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F05A47] to-[#E03824] flex items-center justify-center shadow-sm shadow-rose-500/20 text-white transition-transform group-hover:scale-105">
              <MessageCircle className="w-5 h-5 fill-white/20 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#F05A47] transition-colors leading-none">
                TinyTalkers
              </span>
              <span className="text-xs font-medium text-slate-500 tracking-wider mt-0.5">
                童言少儿英语
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-0.5 bg-stone-100/80 p-1.5 rounded-full border border-stone-200/60">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-[#F05A47] hover:bg-[#DE4936] text-white shadow-sm hover:shadow font-medium px-5 rounded-full transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              免费预约试听
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#F05A47] focus:outline-none"
              aria-label="切换菜单"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-2 pb-4 px-3 bg-white/95 backdrop-blur-xl border border-stone-200/80 rounded-2xl shadow-xl space-y-1">
            <div className="grid grid-cols-2 gap-1 pb-2 border-b border-stone-100">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 text-left text-xs font-medium text-slate-700 hover:text-[#F05A47] hover:bg-rose-50/50 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection("booking")}
                className="w-full bg-[#F05A47] hover:bg-[#DE4936] text-white py-5 rounded-xl font-medium text-xs sm:text-sm"
              >
                <Sparkles className="w-4 h-4 mr-1.5" />
                免费预约试听（2节体验课）
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
