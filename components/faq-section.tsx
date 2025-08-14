"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock } from "lucide-react";

const FAQSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "是否提供免费试听课？",
      answer: "是的！我们为每位新学员提供2节免费试听课。您可以带孩子先体验我们的教学方式和课堂氛围，满意后再决定是否报名。试听课需要提前预约，我们会根据孩子的年龄安排合适的班级。"
    },
    {
      question: "课程的上课频率和时长是怎样的？",
      answer: "不同阶段的课程安排如下：\n• 启蒙期（3-6岁）：30-40分钟/课，每周2次\n• 系统学习期（6-10岁）：50-60分钟/课，每周2-3次\n• 强化期（10岁+）：60-90分钟/课，每周2-3次\n\n我们根据不同年龄段孩子的专注力特点设计课时长度，确保学习效果最大化。"
    },
    {
      question: "如何确定孩子适合哪个阶段的课程？",
      answer: "我们会为每位新学员进行免费的英语水平测试，包括：\n• 听力理解测试\n• 口语表达评估\n• 词汇量检测\n• 学习兴趣调查\n\n根据测试结果和孩子的年龄、性格特点，我们会推荐最适合的课程阶段，确保孩子能够跟上学习进度并获得成就感。"
    },
    {
      question: "班级规模是多少？师生比如何？",
      answer: "我们坚持小班制教学：\n• 启蒙期：6-8人/班\n• 系统学习期：6-10人/班\n• 强化期：6-12人/班\n\n每班配备1名主教老师和1名助教，确保每个孩子都能得到充分的关注和个性化指导。小班制让孩子有更多开口练习的机会。"
    },
    {
      question: "如果孩子需要请假或退课，有什么政策？",
      answer: "我们的请假和退课政策如下：\n• 请假：提前24小时通知可安排补课\n• 退课：开课7天内可无理由退费\n• 转班：可根据学习进度调整班级\n• 休学：最长可申请3个月休学，保留学位\n\n我们理解每个家庭的实际情况，会尽力为您提供灵活的解决方案。"
    },
    {
      question: "家长可以了解孩子的学习进度吗？",
      answer: "当然可以！我们提供多种家校沟通方式：\n• 每节课后的学习反馈\n• 每月的学习报告\n• 家长微信群实时沟通\n• 每季度的家长会\n• 阶段性测评报告\n• 学习视频分享\n\n家长还可以预约与老师一对一沟通，讨论孩子的学习情况和改进建议。"
    },
    {
      question: "你们的老师都有什么资质？",
      answer: "我们的教师团队都具备专业资质：\n• 100%持有TESOL/TEFL等国际英语教学证书\n• 本科及以上学历，英语或教育相关专业\n• 平均6年以上少儿英语教学经验\n• 定期参加教学培训和考核\n• 具备儿童心理学基础知识\n\n所有老师在上岗前都要经过严格的面试、试讲和培训。"
    },
    {
      question: "课程费用包含哪些内容？",
      answer: "课程费用全包含以下内容：\n• 所有课堂教学费用\n• 教材和学习资料\n• 学习用品（练习册、贴纸等）\n• 阶段性测评\n• 学习报告制作\n• 家长沟通服务\n• 节日活动和展示会\n\n没有任何隐性收费，让家长明明白白消费。"
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "电话咨询",
      description: "400-123-4567",
      action: "立即拨打"
    },
    {
      icon: MessageCircle,
      title: "在线咨询",
      description: "微信客服在线解答",
      action: "添加微信"
    },
    {
      icon: Clock,
      title: "预约参观",
      description: "实地了解教学环境",
      action: "立即预约"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-xl text-gray-600">
            解答家长最关心的问题，让您更了解我们的课程
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.title}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                <Button
                  onClick={scrollToBooking}
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  {option.action}
                </Button>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              还有其他问题？
            </h3>
            <p className="text-lg opacity-90 mb-6">
              我们的课程顾问随时为您答疑解惑
              <br />
              预约咨询，获得专业的学习规划建议
            </p>
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              立即咨询
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
