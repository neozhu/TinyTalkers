"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Gift, Users, Clock } from "lucide-react";

const PricingSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const offers = [
    {
      icon: Gift,
      title: "免费试听 2 节课",
      description: "零风险体验，让孩子和家长都满意再报名"
    },
    {
      icon: Users,
      title: "两人同行立减 ¥500",
      description: "朋友一起学习，享受团报优惠"
    },
    {
      icon: Clock,
      title: "老学员推荐返课时 4 节",
      description: "推荐好友成功报名，双方都有课时奖励"
    }
  ];

  const priceDetails = [
    {
      stage: "启蒙期（3-6岁）",
      price: "¥8,000 - ¥14,000",
      period: "/ 年",
      features: [
        "30-40分钟/课",
        "每周2次课程",
        "全年80-96课时",
        "6-8人小班制",
        "TPR教学法",
        "亲子互动指导"
      ],
      popular: false
    },
    {
      stage: "系统学习期（6-10岁）",
      price: "¥10,000 - ¥20,000",
      period: "/ 年",
      features: [
        "50-60分钟/课",
        "每周2-3次课程",
        "全年80-144课时",
        "6-10人小班制",
        "分级阅读训练",
        "学习报告跟踪"
      ],
      popular: true
    },
    {
      stage: "强化期（10岁以上）",
      price: "¥12,000 - ¥28,000",
      period: "/ 年",
      features: [
        "60-90分钟/课",
        "每周2-3次课程",
        "全年80-144课时",
        "6-12人小班制",
        "考试备考指导",
        "一对一答疑"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            价格与优惠
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            透明的价格体系，丰富的优惠政策
            <br />
            让优质的英语教育惠及更多家庭
          </p>
        </motion.div>

        {/* Offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <motion.div key={offer.title} whileHover={{ y: -4 }}>
                <Card className="text-center">
                  <CardContent>
                    <div className="w-12 h-12 bg-rose-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{offer.title}</h3>
                    <p className="text-xs text-muted-foreground">{offer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {priceDetails.map((plan, index) => (
            <motion.div
              key={plan.stage}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    最受欢迎
                  </div>
                </div>
              )}
              
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {plan.stage}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    实际价格以校区为准
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-foreground">
                        <Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToBooking}
                    className="w-full mt-6"
                  >
                    立即预约试听
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-rose-50 rounded-2xl p-8 border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                灵活的付费方式
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  全年一次性缴费优惠 5-10%
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  支持分期付款，减轻经济压力
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  7天无理由退费保障
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  课程顾问一对一服务
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl mb-4">📞</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    专业课程顾问咨询
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    获取详细价格方案和个性化学习建议
                  </p>
                  <Button onClick={scrollToBooking} variant="outline">
                    立即咨询
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
