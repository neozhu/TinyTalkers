"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-rose-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              <span className="text-rose-600">自信说英语</span>
              <br />
              让世界触手可及
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mt-6 font-medium"
            >
              <span className="text-blue-600">启蒙（3–6岁）</span> |{" "}
              <span className="text-green-600">进阶（6–10岁）</span> |{" "}
              <span className="text-orange-600">强化（10岁+）</span>
              <br />
              三阶段科学规划
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mt-4"
            >
              沉浸式小班 · 外教领读 · 家校共育 · 成果看得见
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("booking")}
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                立即预约试听
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("courses")}
                className="text-lg px-8 py-6 border-2 border-rose-600 text-rose-600 hover:bg-rose-50 transition-all duration-300"
              >
                了解课程体系
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3-12</div>
                <div className="text-sm text-gray-600">岁年龄覆盖</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">6-12</div>
                <div className="text-sm text-gray-600">人小班制</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-gray-600">家长满意度</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/3] bg-rose-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">🎓</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    快乐学英语
                    <br />
                    自信说世界
                  </p>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                免费试听
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                小班制教学
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
