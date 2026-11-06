"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, MessageCircle, Sparkles, QrCode } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "校区地址",
      content: "北京市朝阳区建国路88号 SOHO现代城 A座 3层",
      subtitle: "地铁1/14号线大望路站直达，地下停车场车位充足"
    },
    {
      icon: Phone,
      title: "咨询热线",
      content: "400-880-6899",
      subtitle: "工作日 09:00 - 20:30 (周末节假日正常接听)"
    },
    {
      icon: Clock,
      title: "校区接待时间",
      content: "周二至周日 08:30 - 20:30",
      subtitle: "周一为教研备课日，仅接待预约来访"
    },
    {
      icon: Mail,
      title: "教学服务邮箱",
      content: "contact@tinytalkers.com",
      subtitle: "欢迎家校建言与商务教研合作"
    }
  ];

  const quickLinks = [
    { label: "课程体系", id: "courses" },
    { label: "年度课程表", id: "schedule" },
    { label: "价格与特惠", id: "pricing" },
    { label: "师资团队", id: "teachers" },
    { label: "家长口碑", id: "testimonials" },
    { label: "常见问题", id: "faq" },
  ];

  return (
    <footer className="bg-stone-900 text-stone-200 border-t border-stone-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F05A47] to-[#E03824] flex items-center justify-center text-white shadow-sm">
                <MessageCircle className="w-5 h-5 fill-white/20 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  TinyTalkers
                </span>
                <span className="text-xs text-stone-400 tracking-wider mt-0.5">
                  童言少儿英语
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 mb-6 leading-relaxed max-w-sm">
              专注 3–12 岁少儿英语自然母语习得与思维构建。沉浸式互动小班教学，让孩子在兴趣中学，在成果中快乐成长。
            </p>

            {/* WeChat Consultant QR Box */}
            <div className="bg-stone-800/80 rounded-2xl p-4 inline-flex items-center gap-3.5 border border-stone-700/60">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-stone-900 shrink-0">
                <QrCode className="w-9 h-9 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">微信扫码咨询</div>
                <div className="text-[11px] text-stone-400 mt-0.5">即刻获取电子版招生手册与试听课礼券</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              快速导航
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs sm:text-sm text-stone-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              校区与服务信息
            </h4>
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((info) => {
                const IconComp = info.icon;
                return (
                  <div key={info.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-stone-800 border border-stone-700 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-[#F05A47]">
                      <IconComp className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-xs text-white mb-0.5">{info.title}</h5>
                      <p className="text-stone-300 text-xs leading-snug">{info.content}</p>
                      <p className="text-stone-500 text-[11px] mt-0.5">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} TinyTalkers 童言少儿英语. 保留所有权利. 京ICP备20250012号-1
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-stone-400">
            <span className="hover:text-white cursor-pointer transition-colors">隐私保护说明</span>
            <span className="hover:text-white cursor-pointer transition-colors">无理由退费承诺</span>
            <span className="hover:text-white cursor-pointer transition-colors">教师资质公示</span>
            <span className="hover:text-white cursor-pointer transition-colors">安全办学资质</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
