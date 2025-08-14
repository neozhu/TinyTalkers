"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Emma在TinyTalkers学了一年，从一开始的害羞不敢说，到现在能自信地用英语表达想法。老师们很有耐心，教学方法也很有趣，孩子每次上课都很开心！",
      parentName: "王妈妈",
      childName: "Emma",
      childAge: "5岁",
      avatar: "👩",
      rating: 5,
      stage: "启蒙期",
      highlight: "从害羞到自信"
    },
    {
      content: "儿子Leo在这里学会了自然拼读，现在看到英语单词就能读出来，阅读兴趣大大提高。小班制教学让每个孩子都能得到关注，值得推荐！",
      parentName: "李爸爸",
      childName: "Leo",
      childAge: "7岁",
      avatar: "👨",
      rating: 5,
      stage: "系统学习期",
      highlight: "自然拼读突破"
    },
    {
      content: "女儿Sophia准备考PET，在老师的指导下顺利通过了考试。不仅英语水平提高了，学习方法也更加科学有效。感谢所有老师的用心教导！",
      parentName: "张妈妈",
      childName: "Sophia",
      childAge: "11岁",
      avatar: "👩‍💼",
      rating: 5,
      stage: "强化期",
      highlight: "PET考试通过"
    },
    {
      content: "Max在这里不仅学英语，还学会了如何自信地表达自己。老师经常组织各种活动，让孩子在玩中学，在学中成长。家长群里的反馈也很及时。",
      parentName: "陈妈妈",
      childName: "Max",
      childAge: "6岁",
      avatar: "👩‍🎓",
      rating: 5,
      stage: "启蒙期",
      highlight: "自信表达能力"
    },
    {
      content: "起初担心孩子适应不了全英文环境，但老师们很专业，循序渐进地引导。现在孩子的发音标准了很多，词汇量也大大增加。",
      parentName: "刘爸爸",
      childName: "Chloe",
      childAge: "8岁",
      avatar: "👨‍💻",
      rating: 5,
      stage: "系统学习期",
      highlight: "发音标准提升"
    },
    {
      content: "TinyTalkers的课程设计很科学，从启蒙到系统学习，每个阶段都有明确的目标。孩子学得开心，家长也很放心。强烈推荐给其他家长！",
      parentName: "周妈妈",
      childName: "Ryan",
      childAge: "9岁",
      avatar: "👩‍⚕️",
      rating: 5,
      stage: "系统学习期",
      highlight: "科学课程体系"
    }
  ];

  const stats = [
    { number: "1000+", label: "在读学员" },
    { number: "98%", label: "家长满意度" },
    { number: "95%", label: "续费率" },
    { number: "4.9", label: "综合评分" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            家长口碑
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听其他家长和孩子的真实体验
            <br />
            用事实证明我们的教学品质
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="text-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border"
            >
              <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <CardContent className="p-5">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  {/* Parent and Child Info */}
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm mr-2">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {testimonial.parentName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.childName} · {testimonial.childAge}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs font-medium text-rose-600">
                        {testimonial.stage}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-rose-50 rounded-2xl p-8 border text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              成功案例
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              我们的学员在各类英语考试和比赛中屡创佳绩
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold mb-1 text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">KET/PET通过率</div>
              </div>
              <div className="bg-card rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold mb-1 text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">英语竞赛获奖</div>
              </div>
              <div className="bg-card rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold mb-1 text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">升入理想学校</div>
              </div>
              <div className="bg-card rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold mb-1 text-foreground">3年</div>
                <div className="text-sm text-muted-foreground">平均学习周期</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
