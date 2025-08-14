"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, BookOpen, Heart, Star, Check } from "lucide-react";

const TeacherTeam = () => {
  const teachers = [
    {
      name: "Emily Chen",
      title: "启蒙期主教",
      experience: "8年教学经验",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      highlights: ["TESOL认证", "儿童心理学背景", "TPR教学专家"],
    },
    {
      name: "Olivia Brown",
      title: "系统期主教",
      experience: "6年教学经验",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      highlights: ["英语教育硕士", "剑桥英语认证", "阅读写作指导"],
    },
    {
      name: "Sophia Johnson",
      title: "强化期主教",
      experience: "10年教学经验",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      highlights: ["雅思官方培训师", "演讲辩论教练", "学术写作专家"],
    },
    {
      name: "Mia Davis",
      title: "课程顾问",
      experience: "7年教学经验",
      image: "https://randomuser.me/api/portraits/women/76.jpg",
      highlights: ["教育技术认证", "课程体系设计", "家校沟通达人"],
    },
    {
      name: "Emma Garcia",
      title: "教研主管",
      experience: "9年教学经验",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      highlights: ["双语教研背景", "课堂活动设计", "教师培训导师"],
    },
    {
      name: "Ava Thompson",
      title: "助教主管",
      experience: "5年教学经验",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      highlights: ["教育心理学", "课堂管理", "家长满意度95%"],
    },
  ];

  const teamStats = [
    { number: "100%", label: "持证上岗", icon: Award },
    { number: "6+", label: "平均教龄", icon: BookOpen },
    { number: "95%", label: "家长满意度", icon: Heart },
    { number: "4.9", label: "教学评分", icon: Star }
  ];

  return (
    <section id="teachers" className="py-20 bg-gray-50">
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
            讲师团队
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            汇聚国内外优秀英语教育专家
            <br />
            用专业和爱心陪伴每个孩子的成长
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-4 mb-16"
        >
          {teamStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div key={stat.label} whileHover={{ y: -4 }}>
                <Card className="text-center">
                  <CardContent>
                    <div className="w-10 h-10 bg-rose-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Teacher Cards */}
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <CardHeader className="items-center text-center">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full object-cover mb-3 mx-auto"
                  />
                  <CardTitle className="text-sm">{teacher.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {teacher.title}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground">
                    {teacher.experience}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-xs text-muted-foreground space-y-1 text-left">
                    {teacher.highlights.map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="w-3 h-3 text-rose-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-rose-50 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
              我们的教学理念
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto text-center">
              以学生为中心，因材施教。我们相信每个孩子都有无限潜力，
              用爱心、耐心和专业知识，点亮孩子的英语学习之路。
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-2 text-foreground">个性化教学</h4>
                  <p className="text-sm text-muted-foreground">根据每个孩子的特点制定学习方案</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <h4 className="font-semibold mb-2 text-foreground">启发式学习</h4>
                  <p className="text-sm text-muted-foreground">培养孩子的思考能力和创造力</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-semibold mb-2 text-foreground">家校共育</h4>
                  <p className="text-sm text-muted-foreground">与家长密切配合，共同促进成长</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeacherTeam;
