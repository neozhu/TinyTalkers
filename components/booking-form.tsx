"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { CheckCircle, AlertCircle, Send, Calendar, Gift } from "lucide-react";
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
      setErrors({ submit: '网络错误，请稍后重试' });
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

  const benefits = [
    {
      icon: Gift,
      title: "免费试听2节课",
      description: "零风险体验教学质量"
    },
    {
      icon: Calendar,
      title: "免费水平测试",
      description: "专业评估学习起点"
    },
    {
      icon: CheckCircle,
      title: "个性化学习方案",
      description: "量身定制课程计划"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="max-w-md mx-auto">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  预约成功！
                </h3>
                <p className="text-gray-600 mb-6">
                  感谢您的信任！我们的课程顾问将在24小时内与您联系，为您安排免费试听课程。
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full"
                >
                  继续了解课程
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            立即预约试听
          </h2>
          <p className="text-xl text-gray-600">
            填写预约信息，开启孩子的英语学习之旅
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                预约即享专属福利
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">预约流程</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3">1</div>
                  填写预约信息
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3">2</div>
                  课程顾问电话联系
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3">3</div>
                  安排免费试听课程
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3">4</div>
                  制定个性化学习方案
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  预约试听课程
                </CardTitle>
                <CardDescription>
                  请填写以下信息，我们将为您安排合适的试听时间
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Name */}
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">
                      家长姓名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="parentName"
                      type="text"
                      placeholder="请输入家长姓名"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      className={errors.parentName ? 'border-red-500' : ''}
                    />
                    {errors.parentName && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      手机号码 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="请输入手机号码"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Child Age */}
                  <div className="space-y-2">
                    <Label htmlFor="childAge" className="text-sm font-medium text-gray-700">
                      孩子年龄/年级 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="childAge"
                      type="text"
                      placeholder="如：5岁 或 小学二年级"
                      value={formData.childAgeOrGrade}
                      onChange={(e) => handleInputChange('childAgeOrGrade', e.target.value)}
                      className={errors.childAgeOrGrade ? 'border-red-500' : ''}
                    />
                    {errors.childAgeOrGrade && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.childAgeOrGrade}
                      </p>
                    )}
                  </div>

                  {/* Stage */}
                  <div className="space-y-2">
                    <Label htmlFor="stage" className="text-sm font-medium text-gray-700">
                      意向阶段 <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.stage}
                      onValueChange={(value) => handleInputChange('stage', value)}
                    >
                      <SelectTrigger className={errors.stage ? 'border-red-500' : ''}>
                        <SelectValue placeholder="请选择意向阶段" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="启蒙期">启蒙期（3-6岁）</SelectItem>
                        <SelectItem value="系统学习期">系统学习期（6-10岁）</SelectItem>
                        <SelectItem value="强化期">强化期（10岁以上）</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.stage && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.stage}
                      </p>
                    )}
                  </div>

                  {/* Note */}
                  <div className="space-y-2">
                    <Label htmlFor="note" className="text-sm font-medium text-gray-700">
                      备注信息
                    </Label>
                    <Textarea
                      id="note"
                      placeholder="请告诉我们孩子的英语基础、学习目标或其他特殊需求"
                      value={formData.note}
                      onChange={(e) => handleInputChange('note', e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Submit Error */}
                  {errors.submit && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.submit}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-lg py-6"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        提交中...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        立即预约试听
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    提交即表示您同意我们的服务条款，我们承诺保护您的隐私信息
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
