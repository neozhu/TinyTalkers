"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Users, 
  Home, 
  Apple, 
  Cat, 
  Shirt, 
  MessageSquare, 
  School, 
  Activity, 
  UtensilsCrossed, 
  BookOpen, 
  TreePine, 
  Globe, 
  Mic2, 
  Compass, 
  FileText, 
  Award, 
  Sparkles,
  CalendarDays,
  ArrowRight
} from "lucide-react";

type StageKey = "beginner" | "systematic" | "advanced";

const CourseSchedule = () => {
  const [activeStage, setActiveStage] = useState<StageKey>("beginner");

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scheduleData = {
    beginner: {
      title: "启蒙期（3–6岁）年度进阶规划",
      tagline: "以生活认知与多感官情景为主线，每月沉浸式玩转一个高频生活主题",
      color: "amber",
      items: [
        {
          month: "9月",
          theme: "认识我自己",
          icon: Smile,
          skills: "身体五官、动作表达 (head, eyes, clap, jump)",
          activity: "身体律动歌《Head Shoulders Knees & Toes》",
          homeTask: "指认身体器官并快速用英文呼应"
        },
        {
          month: "10月",
          theme: "我的温暖家人",
          icon: Users,
          skills: "家庭成员称呼与问候 (mom, dad, grandma, hug)",
          activity: "亲子情景换装角色扮演游戏",
          homeTask: "翻看家庭相册，向父母用英文介绍家庭成员"
        },
        {
          month: "11月",
          theme: "温馨的家",
          icon: Home,
          skills: "房间与家具方位词 (bedroom, sofa, table, on/in)",
          activity: "“找找看”室内英语寻宝行动",
          homeTask: "为自己的小卧室绘制英文空间标签"
        },
        {
          month: "12月",
          theme: "缤纷美味食物",
          icon: Apple,
          skills: "常见水果与餐桌礼仪 (apple, milk, I want, please)",
          activity: "小小超市英文收银与挑选体验",
          homeTask: "日常用餐时进行英文食物“报菜名”打卡"
        },
        {
          month: "1月",
          theme: "奇妙动物乐园",
          icon: Cat,
          skills: "农场与野生动物拟声 (cat, dog, lion, big/small)",
          activity: "经典动物叫声模仿大赛与绘本剧",
          homeTask: "制作动物英文剪影翻翻卡"
        },
        {
          month: "2月",
          theme: "潮流换装秀",
          icon: Shirt,
          skills: "日常衣物与季节穿搭 (coat, shoes, hat, hot/cold)",
          activity: "四季衣物英文搭配时装秀",
          homeTask: "早晨挑选衣物时用英文说出穿戴名称"
        }
      ]
    },
    systematic: {
      title: "系统学习期（6–10岁）年度进阶规划",
      tagline: "从基础词句向学科英语与长篇阅读跨越，建立系统性英语思维",
      color: "emerald",
      items: [
        {
          month: "9月",
          theme: "破冰与日常社交",
          icon: MessageSquare,
          skills: "完整自我介绍、兴趣分享与自然拼读回顾",
          activity: "“我是小小外交官”情景对话排练",
          homeTask: "录制一段 1 分钟英文兴趣爱好展示短视频"
        },
        {
          month: "10月",
          theme: "校园探险记",
          icon: School,
          skills: "学科名词、教室指令与时间表达",
          activity: "校园寻宝与英文地图导览设计",
          homeTask: "用英文手绘并标注自己的理想学校一日计划表"
        },
        {
          month: "11月",
          theme: "活力运动与爱好",
          icon: Activity,
          skills: "球类运动、乐器与频度副词 (often, always)",
          activity: "模拟英语趣味运动会赛况解说",
          homeTask: "用 3-5 句英文记录一次周末家庭运动"
        },
        {
          month: "12月",
          theme: "小主厨的美食工坊",
          icon: UtensilsCrossed,
          skills: "西餐点餐、食材配方与数量计量单位",
          activity: "全英文披萨工坊点单角色互换",
          homeTask: "与家长一起手绘一份双语早餐菜单"
        },
        {
          month: "1月",
          theme: "时态与故事创想",
          icon: BookOpen,
          skills: "一般现在时与现在进行时对比、分级绘本续写",
          activity: "“如果我是超人”故事连环接龙",
          homeTask: "阅读一本英文短篇故事并口述 3 个核心情节"
        },
        {
          month: "2月",
          theme: "大自然的奥秘",
          icon: TreePine,
          skills: "天气四季、动植物栖息地与环境保护词汇",
          activity: "小小气象播报员与生态科普分享",
          homeTask: "完成一份大自然观察手抄报 (附带英文短句)"
        }
      ]
    },
    advanced: {
      title: "强化期（10岁+）年度学术拔高规划",
      tagline: "对标剑桥 KET/PET 官方标准，聚焦学术英语、公众演讲与思辨表达",
      color: "blue",
      items: [
        {
          month: "9月",
          theme: "全球视野与多元文化",
          icon: Globe,
          skills: "国家地理、文化风俗与长难句解析",
          activity: "模拟联合国初级辩论：世界各地的节日文化",
          homeTask: "搜集一个国家的特色文化并撰写 100 词介绍"
        },
        {
          month: "10月",
          theme: "公众演讲特训",
          icon: Mic2,
          skills: "TED 风格演讲框架构思、肢体语言与语调起伏",
          activity: "3分钟“改变世界的一个小发明”即兴演说",
          homeTask: "录制脱稿英文演讲视频并进行同伴互评"
        },
        {
          month: "11月",
          theme: "科学与未来科技",
          icon: Compass,
          skills: "科技学术词汇、人工智能探讨与因果逻辑连接词",
          activity: "未来科技产品提案发布会模拟",
          homeTask: "针对“AI 是否会取代家庭教师”写一段论证短文"
        },
        {
          month: "12月",
          theme: "剑桥读写考级冲刺",
          icon: FileText,
          skills: "PET 深度阅读理解定位法、书信及叙事文写作实战",
          activity: "真题限时写作工作坊与外教一对一批改",
          homeTask: "完成一篇标准 PET 格式的友谊感谢信"
        },
        {
          month: "1月",
          theme: "听力技巧与口语面试",
          icon: Award,
          skills: "抓取听力转折词、剑桥口语考官高频问答策略",
          activity: "全真一对一考级口语考场模拟",
          homeTask: "听力精听跟读打卡并归纳常考陷阱词"
        },
        {
          month: "2月",
          theme: "学术论文与汇报展示",
          icon: Sparkles,
          skills: "研究报告结构、图表数据描述与文献引用基础",
          activity: "期末学术课题汇报答辩会",
          homeTask: "提交一份学期综合个人英文探究项目展示 PPT"
        }
      ]
    }
  };

  const currentStageData = scheduleData[activeStage];

  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50/40 to-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Soft Stage Lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] opacity-25 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 243, 199, 0.45) 0%, rgba(254, 215, 170, 0.2) 50%, transparent 75%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-slate-700 mb-3">
            <CalendarDays className="w-3.5 h-3.5 text-slate-600" />
            <span>精细化月度主题 · 全年学习看得见</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            年度进阶课程表（精选月度主题）
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            每个月设定一个沉浸式探索主题，兼顾课堂趣味互动与家庭延伸习惯，确保孩子学以致用。
          </p>
        </div>

        {/* Stage Tabs Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-stone-200/60 rounded-2xl border border-stone-300/50 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveStage("beginner")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeStage === "beginner"
                  ? "bg-white text-amber-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              启蒙期 (3–6岁)
            </button>
            <button
              onClick={() => setActiveStage("systematic")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeStage === "systematic"
                  ? "bg-white text-emerald-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              系统学习期 (6–10岁)
            </button>
            <button
              onClick={() => setActiveStage("advanced")}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activeStage === "advanced"
                  ? "bg-white text-blue-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              强化期 (10岁+)
            </button>
          </div>
        </div>

        {/* Active Stage Subtitle Banner */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-slate-900">{currentStageData.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{currentStageData.tagline}</p>
        </div>

        {/* Schedule Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentStageData.items.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Month & Theme */}
                    <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            activeStage === "beginner"
                              ? "bg-amber-50 text-amber-700 border border-amber-200/50"
                              : activeStage === "systematic"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                              : "bg-blue-50 text-blue-700 border border-blue-200/50"
                          }`}
                        >
                          <IconComp className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-400 block leading-tight">
                            {item.month}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-tight mt-0.5">
                            {item.theme}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Skill Details */}
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="font-bold text-slate-800 block mb-0.5">核心词汇与技能</span>
                        <p className="text-slate-600 leading-relaxed">{item.skills}</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/50">
                        <span className="font-bold text-slate-800 block mb-0.5">课堂趣味互动</span>
                        <p className="text-slate-600 leading-relaxed">{item.activity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Home Extension Task */}
                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">家庭延伸：</span>
                    {item.homeTask}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Schedule Bottom Reassurance */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs max-w-2xl mx-auto">
            <div className="text-left flex-1">
              <div className="text-sm font-bold text-slate-900">想知道孩子的英语水平适合哪个具体月份的课？</div>
              <div className="text-xs text-slate-500 mt-0.5">预约 1 对 1 外教水平评测，为您定制专属阶段学习规划方案</div>
            </div>
            <Button
              onClick={scrollToBooking}
              className="bg-[#F05A47] hover:bg-[#DE4936] text-white text-xs font-semibold px-5 py-5 rounded-xl shrink-0"
            >
              免费评测定位
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSchedule;
