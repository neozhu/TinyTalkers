import { z } from 'zod';

export const bookingSchema = z.object({
  parentName: z.string().min(2, '家长姓名不能少于2个字符'),
  phone: z.string().regex(/^1[3-9]\d{9}$/, '请输入正确的手机号码'),
  childAgeOrGrade: z.string().min(1, '请填写孩子年龄或年级'),
  stage: z.enum(['启蒙期', '系统学习期', '强化期'], {
    message: '请选择意向阶段'
  }),
  note: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
