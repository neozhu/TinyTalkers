"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, BookOpen, Trophy, Clock, Users, Target } from "lucide-react";

const CourseSystem = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courses = [
    {
      stage: "启蒙期",
      ageRange: "3-6岁",
      icon: Baby,
      goals: [
        "建立英语兴趣",
        "培养语音语调基础",
        "简单单词表达需求"
      ],
      content: [
        "儿歌律动、英语绘本",
        "日常口语、情景游戏", 
        "TPR全身反应法",
        "家庭成员、身体部位"
      ],
      schedule: "30-40分钟 / 每周2次",
      duration: "全年80-96课",
      results: "能用英语表达简单需求，理解常见日常指令",
      price: "¥8,000-¥14,000/年"
    },
    {
      stage: "系统学习期",
      ageRange: "6-10岁",
      icon: BookOpen,
      goals: [
        "掌握基础语法与词汇",
        "提升听说读写能力",
        "建立学习自信心"
      ],
      content: [
        "日常对话、语法基础",
        "分级阅读、趣味写作",
        "小剧场表演、情景演练",
        "词汇扩展、听力训练"
      ],
      schedule: "50-60分钟 / 每周2-3次",
      duration: "全年80-144课",
      results: "能进行流畅对话，阅读分级读物，写简单段落",
      price: "¥10,000-¥20,000/年"
    },
    {
      stage: "强化期",
      ageRange: "10岁以上",
      icon: Trophy,
      goals: [
        "全面提升学术英语",
        "达到国际考试水准",
        "具备演讲写作能力"
      ],
      content: [
        "高阶语法、学术词汇",
        "演讲辩论、面试模拟",
        "KET/PET/托福Junior备考",
        "议论文、记叙文写作"
      ],
      schedule: "60-90分钟 / 每周2-3次",
      duration: "全年80-144课",
      results: "英语口语流利，能写议论文，通过国际英语考试",
      price: "¥12,000-¥28,000/年"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
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
            课程体系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            根据孩子不同年龄阶段的语言发展规律，精心设计三大课程体系
            <br />
            让孩子在兴趣中学，在互动中用，在成果中成长
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.stage}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-card hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-rose-500 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">适合年龄</div>
                        <div className="text-lg font-bold text-foreground">{course.ageRange}</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {course.stage}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {course.price}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Goals */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Target className="w-4 h-4 text-muted-foreground mr-2" />
                        <h4 className="font-semibold text-foreground">课程目标</h4>
                      </div>
                      <ul className="space-y-1">
                        {course.goals.map((goal, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2 flex-shrink-0"></div>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center mb-3">
                        <BookOpen className="w-4 h-4 text-muted-foreground mr-2" />
                        <h4 className="font-semibold text-foreground">核心内容</h4>
                      </div>
                      <ul className="space-y-1">
                        {course.content.map((item, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Clock className="w-4 h-4 text-muted-foreground mr-1" />
                          <span className="text-sm font-medium text-foreground">课时安排</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{course.schedule}</p>
                        <p className="text-sm text-muted-foreground">{course.duration}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Users className="w-4 h-4 text-muted-foreground mr-1" />
                          <span className="text-sm font-medium text-foreground">班级规模</span>
                        </div>
                        <p className="text-sm text-muted-foreground">6-12人精品小班</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">学习成果</h4>
                      <p className="text-sm text-muted-foreground">{course.results}</p>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={scrollToBooking}
                      className="w-full bg-rose-600 hover:bg-rose-700"
                    >
                      立即预约试听
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-rose-50 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              不确定孩子适合哪个阶段？
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              我们提供免费英语水平测试，为您的孩子量身定制学习方案
            </p>
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="bg-rose-600 hover:bg-rose-700"
            >
              预约免费测试
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSystem;
