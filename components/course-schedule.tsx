"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Users, Sparkles, Home } from "lucide-react";

const CourseSchedule = () => {
  const [activeStage, setActiveStage] = useState<'beginner' | 'systematic' | 'advanced'>('beginner');

  // 启蒙期课程表
  const beginnerSchedule = [
    {
      month: "9月",
      theme: "认识我自己",
      skills: "身体部位、感官",
      activity: "身体律动歌",
      homeExtension: "指指身体说词汇",
      icon: "👶"
    },
    {
      month: "10月",
      theme: "我的家人",
      skills: "家庭成员称呼",
      activity: "亲子角色扮演",
      homeExtension: "贴家庭合照做英文介绍",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      month: "11月",
      theme: "我的家",
      skills: "房间与家具",
      activity: "'找找看'游戏",
      homeExtension: "绘制家庭房间图",
      icon: "🏠"
    },
    {
      month: "12月",
      theme: "我的食物",
      skills: "水果、零食",
      activity: "超市购物游戏",
      homeExtension: "水果切片英语命名",
      icon: "🍎"
    },
    {
      month: "1月",
      theme: "动物乐园",
      skills: "宠物、农场动物",
      activity: "动物声音模仿",
      homeExtension: "动物卡片配对",
      icon: "🐱"
    },
    {
      month: "2月",
      theme: "衣服秀",
      skills: "衣物名称",
      activity: "换装表演",
      homeExtension: "衣服搭配英语对话",
      icon: "👗"
    }
  ];

  // 系统学习期课程表
  const systematicSchedule = [
    {
      month: "9月",
      theme: "日常交流",
      skills: "自我介绍、问候",
      activity: "情景对话赛",
      homeExtension: "用英语介绍自己",
      icon: "💬"
    },
    {
      month: "10月",
      theme: "家与学校",
      skills: "房间物品、校园生活",
      activity: "校园寻宝",
      homeExtension: "拍照记录校园",
      icon: "🏫"
    },
    {
      month: "11月",
      theme: "爱好与运动",
      skills: "爱好、体育",
      activity: "英语运动会",
      homeExtension: "爱好采访",
      icon: "⚽"
    },
    {
      month: "12月",
      theme: "食物与健康",
      skills: "餐饮点餐",
      activity: "英语餐厅",
      homeExtension: "菜单设计",
      icon: "🍽️"
    },
    {
      month: "1月",
      theme: "语法基础",
      skills: "be动词、一般现在时",
      activity: "语法卡牌游戏",
      homeExtension: "句型造句",
      icon: "📝"
    },
    {
      month: "2月",
      theme: "阅读拓展",
      skills: "分级绘本L2",
      activity: "小组朗读会",
      homeExtension: "亲子共读",
      icon: "📖"
    }
  ];

  // 强化期课程表
  const advancedSchedule = [
    {
      month: "9月",
      theme: "高阶语法1",
      skills: "现在完成时",
      activity: "实例造句",
      homeExtension: "生活记录",
      icon: "📚"
    },
    {
      month: "10月",
      theme: "阅读技巧",
      skills: "长篇文章理解",
      activity: "信息提取竞赛",
      homeExtension: "做阅读笔记",
      icon: "🔍"
    },
    {
      month: "11月",
      theme: "演讲口语",
      skills: "公众演讲技巧",
      activity: "演讲比赛",
      homeExtension: "家庭演讲",
      icon: "🎤"
    },
    {
      month: "12月",
      theme: "考试词汇",
      skills: "KET核心词汇",
      activity: "词汇挑战赛",
      homeExtension: "单词卡复习",
      icon: "📋"
    },
    {
      month: "1月",
      theme: "高阶语法2",
      skills: "条件句",
      activity: "辩论活动",
      homeExtension: "辩题准备",
      icon: "⚖️"
    },
    {
      month: "2月",
      theme: "写作技能",
      skills: "议论文写作",
      activity: "小组写作",
      homeExtension: "文章修改",
      icon: "✍️"
    }
  ];

  const stages = [
    {
      key: 'beginner' as const,
      title: '启蒙期 (3-6岁)',
      subtitle: 'TPR互动 + 歌谣 + 绘本 + 情景游戏',
      schedule: beginnerSchedule,
      duration: '30-40分钟/课',
      frequency: '每周2次'
    },
    {
      key: 'systematic' as const,
      title: '系统学习期 (6-10岁)',
      subtitle: '情景化教学 + 分级阅读 + 趣味语法',
      schedule: systematicSchedule,
      duration: '50-60分钟/课',
      frequency: '每周2-3次'
    },
    {
      key: 'advanced' as const,
      title: '强化期 (10岁+)',
      subtitle: '高阶语法 + 学术阅读 + 演讲辩论 + 考试训练',
      schedule: advancedSchedule,
      duration: '60-90分钟/课',
      frequency: '每周2-3次'
    }
  ];

  const currentStage = stages.find(stage => stage.key === activeStage)!;

  const features = [
    {
      icon: Calendar,
      title: "循序渐进",
      description: "根据儿童认知发展规律，科学安排学习进度"
    },
    {
      icon: BookOpen,
      title: "主题式教学",
      description: "每月围绕生活主题，让英语学习更贴近实际"
    },
    {
      icon: Users,
      title: "多元互动",
      description: "游戏、歌曲、表演多种形式，激发学习兴趣"
    },
    {
      icon: Sparkles,
      title: "文化融合",
      description: "中西文化结合，培养国际化视野"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
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
            年度课程表
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精心设计的月度主题教学，让孩子在熟悉的生活场景中学习英语
            <br />
            每个主题都有对应的趣味活动和实践机会
          </p>
        </motion.div>

        {/* Stage Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-lg border p-1 shadow-sm">
            {stages.map((stage) => (
              <Button
                key={stage.key}
                onClick={() => setActiveStage(stage.key)}
                variant={activeStage === stage.key ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeStage === stage.key
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {stage.title}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Current Stage Info */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="bg-rose-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentStage.title}
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              {currentStage.subtitle}
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-600">
              <span>📅 {currentStage.frequency}</span>
              <span>⏰ {currentStage.duration}</span>
              <span>📚 全年48周</span>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card className="text-center" key={feature.title}>
                <CardContent>
                  <div className="w-12 h-12 bg-rose-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div
          key={`${activeStage}-schedule`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {currentStage.schedule.map((item, index) => (
            <motion.div
              key={`${activeStage}-${item.month}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden flex flex-col">
                <img
                  src={`https://source.unsplash.com/seed/${activeStage}-${index}/400x200?kid`}
                  alt={item.theme}
                  className="w-full h-32 object-cover"
                />
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {item.month}
                    </CardTitle>
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <CardDescription className="text-lg font-medium text-blue-600">
                    {item.theme}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-gray-600" />
                      核心技能
                    </h4>
                    <p className="text-sm text-gray-700">{item.skills}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-gray-600" />
                      课堂活动
                    </h4>
                    <p className="text-sm text-gray-700">{item.activity}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Home className="w-4 h-4 mr-2 text-gray-600" />
                      家庭延伸
                    </h4>
                    <p className="text-sm text-gray-700">{item.homeExtension}</p>
                  </div>

                  <div className="pt-4 mt-auto border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{currentStage.frequency}</span>
                      <span>小班互动</span>
                      <span>成果展示</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-rose-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              完整学年，系统进阶
            </h3>
            <p className="text-lg opacity-90 mb-6">
              9月开学季到次年6月结业，完整覆盖学年周期
              <br />
              每个阶段都有明确的学习目标和可见的成长轨迹
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">40+</div>
                <div className="text-sm opacity-90">周课程设计</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm opacity-90">互动活动</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">6次</div>
                <div className="text-sm opacity-90">阶段测评</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSchedule;
