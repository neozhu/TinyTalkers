"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  CalendarDays, 
  Gift, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Lock
} from "lucide-react";
import { bookingSchema, type BookingFormData } from "@/lib/validations";

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    parentName: "",
    phone: "",
    childAgeOrGrade: "",
    stage: "启蒙期",
    note: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    try {
      bookingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      if (error.errors) {
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
      }
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          parentName: "",
          phone: "",
          childAgeOrGrade: "",
          stage: "启蒙期",
          note: "",
        });
      } else {
        setErrors({ submit: result.message || '提交失败，请稍后重试' });
      }
    } catch (error) {
      setErrors({ submit: '网络连接异常，请检查网络后重试' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const trialPerks = [
    {
      icon: Gift,
      title: "免费体验 2 节小班课",
      description: "零门槛真实融入课堂，亲身体验沉浸式互动教学效果"
    },
    {
      icon: CalendarDays,
      title: "1对1 专业英语测评",
      description: "包含发音感知、词汇理解与逻辑表达多维能力诊断"
    },
    {
      icon: CheckCircle2,
      title: "专属个性化成长规划",
      description: "资深教研根据测评结果量身出具阶段性进阶方案"
    }
  ];

  const steps = [
    { num: "1", title: "在线提交预约信息", desc: "仅需 30 秒填写基本情况" },
    { num: "2", title: "课程顾问电话确认", desc: "沟通孩子基础与校区时间" },
    { num: "3", title: "到校沉浸试听体验", desc: "45分钟全真小班互动" },
    { num: "4", title: "领取综合评估报告", desc: "客观反馈，满意后再报名" },
  ];

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-white border-t border-stone-200/60">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-emerald-200 shadow-md"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-emerald-600">
              <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              预约申请提交成功！
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              感谢您的信任！TinyTalkers 课程顾问将在 <span className="font-bold text-slate-900">2 小时内</span>（工作时间）通过电话与您确认孩子的试听校区与课表安排。
            </p>
            <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-xs text-slate-500 mb-6 text-left space-y-1">
              <div>• 顾问将提前发送课前预习绘本及教室导航地图</div>
              <div>• 如遇紧急需求，可直接拨打服务专线：400-880-6899</div>
            </div>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-5 rounded-xl text-sm"
            >
              返回继续浏览
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-[#FFFDF9] border-t border-stone-200/60 relative overflow-hidden">
      {/* Background Soft Glow Behind Booking Form */}
      <div 
        className="absolute bottom-10 right-10 w-[700px] h-[500px] opacity-25 blur-3xl pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 215, 170, 0.45) 0%, rgba(240, 90, 71, 0.15) 50%, transparent 75%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F05A47]" />
            <span>开启孩子的双语探索之旅</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            立即预约 2 节免费试听
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            带孩子零风险亲身感受课堂魅力，满意再入学。
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Perks & Process */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                试听课专属礼遇
              </h3>
              <div className="space-y-4">
                {trialPerks.map((perk, idx) => {
                  const IconComp = perk.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 text-[#F05A47]">
                        <IconComp className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{perk.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{perk.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Steps Timeline Box */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                极速服务流程
              </h4>
              <div className="space-y-3.5">
                {steps.map((st) => (
                  <div key={st.num} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                      {st.num}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{st.title}</div>
                      <div className="text-[11px] text-slate-500">{st.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-stone-100/70 p-3.5 rounded-xl border border-stone-200/60">
              <Lock className="w-4 h-4 text-slate-600 shrink-0" />
              <span>我们严格遵循隐私保护规范，您的信息仅用于排课联系，严禁外泄。</span>
            </div>
          </div>

          {/* Right Column: High-Craft Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-stone-200/90 shadow-md">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  填写试听预约信息
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  请填写以下信息，我们的教研顾问将为您快速匹配对应年级班次
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Parent Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="parentName" className="text-xs font-bold text-slate-800">
                    家长姓名 <span className="text-[#F05A47]">*</span>
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="如：王女士 / 李先生"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className={`h-11 rounded-xl text-sm ${
                      errors.parentName ? 'border-red-500 focus-visible:ring-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.parentName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-bold text-slate-800">
                    联系电话 (用于接收试听短信与排课通知) <span className="text-[#F05A47]">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="请输入11位手机号码"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`h-11 rounded-xl text-sm ${
                      errors.phone ? 'border-red-500 focus-visible:ring-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Child Age or Grade */}
                <div className="space-y-1.5">
                  <Label htmlFor="childAge" className="text-xs font-bold text-slate-800">
                    孩子当前年龄 / 年级 <span className="text-[#F05A47]">*</span>
                  </Label>
                  <Input
                    id="childAge"
                    type="text"
                    placeholder="如：4岁半 / 幼儿园大班 / 小学二年级"
                    value={formData.childAgeOrGrade}
                    onChange={(e) => handleInputChange('childAgeOrGrade', e.target.value)}
                    className={`h-11 rounded-xl text-sm ${
                      errors.childAgeOrGrade ? 'border-red-500 focus-visible:ring-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.childAgeOrGrade && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.childAgeOrGrade}
                    </p>
                  )}
                </div>

                {/* Preferred Stage */}
                <div className="space-y-1.5">
                  <Label htmlFor="stage" className="text-xs font-bold text-slate-800">
                    意向体验阶段 <span className="text-[#F05A47]">*</span>
                  </Label>
                  <Select
                    value={formData.stage}
                    onValueChange={(value) => handleInputChange('stage', value)}
                  >
                    <SelectTrigger 
                      data-testid="stage-select"
                      className={`h-11 rounded-xl text-sm ${
                        errors.stage ? 'border-red-500' : 'border-stone-300'
                      }`}
                    >
                      <SelectValue placeholder="请选择意向阶段" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="启蒙期">启蒙期 (3–6岁) 趣味磨耳朵与自然拼读</SelectItem>
                      <SelectItem value="系统学习期">系统学习期 (6–10岁) 听说读写全能进阶</SelectItem>
                      <SelectItem value="强化期">强化期 (10岁+) 学术思辨与考级拔高</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.stage && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.stage}
                    </p>
                  )}
                </div>

                {/* Optional Note */}
                <div className="space-y-1.5">
                  <Label htmlFor="note" className="text-xs font-bold text-slate-800">
                    补充说明 (选填)
                  </Label>
                  <Textarea
                    id="note"
                    placeholder="可填写孩子的性格特点、过往学英语经历或期望上课时间（如周六上午）"
                    value={formData.note}
                    onChange={(e) => handleInputChange('note', e.target.value)}
                    rows={2}
                    className="rounded-xl text-sm border-stone-300"
                  />
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.submit}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F05A47] hover:bg-[#DE4936] text-white font-bold py-6 rounded-xl text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>正在为您锁定试听名额...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>立即提交 · 免费领取 2 节试听课</span>
                      </div>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    试听无任何隐形消费
                  </span>
                  <span>•</span>
                  <span>随时可调换班次时间</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
