"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, MessageSquare } from "lucide-react";

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
      content: "北京市朝阳区建国路88号",
      subtitle: "交通便利，停车方便"
    },
    {
      icon: Phone,
      title: "联系电话",
      content: "400-123-4567",
      subtitle: "工作日 9:00-18:00"
    },
    {
      icon: Clock,
      title: "营业时间",
      content: "周一至周日 8:00-20:00",
      subtitle: "节假日正常营业"
    },
    {
      icon: Mail,
      title: "邮箱地址",
      content: "info@tinytalkers.com",
      subtitle: "欢迎咨询合作"
    }
  ];

  const quickLinks = [
    { label: "课程体系", id: "courses" },
    { label: "年度课程表", id: "schedule" },
    { label: "讲师团队", id: "teachers" },
    { label: "家长口碑", id: "testimonials" },
    { label: "常见问题", id: "faq" },
    { label: "立即预约", id: "booking" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">TinyTalkers</h3>
                <p className="text-sm text-gray-300">童言英语</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              专业少儿英语培训机构，致力于为3-12岁孩子提供优质的英语教育服务。
              让每个孩子都能自信地说英语，快乐地学英语。
            </p>
            
            {/* WeChat QR Code Placeholder */}
            <div className="bg-white rounded-lg p-4 inline-block">
              <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xs text-gray-600 text-center mt-2">微信咨询</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">快速导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2"
          >
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.title} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{info.title}</h5>
                      <p className="text-gray-300 text-sm">{info.content}</p>
                      <p className="text-gray-400 text-xs">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              准备让孩子开始英语学习之旅了吗？
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              立即预约免费试听课程，让专业的老师为您的孩子制定个性化学习方案
            </p>
            <Button
              onClick={() => scrollToSection("booking")}
              size="lg"
              className="px-8 py-3 text-lg"
            >
              立即预约试听
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 TinyTalkers童言英语. 保留所有权利.</p>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors">
                服务条款
              </a>
              <a href="#" className="hover:text-white transition-colors">
                退费政策
              </a>
              <a href="#" className="hover:text-white transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
