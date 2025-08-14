import { NextRequest, NextResponse } from 'next/server';
import { db, bookings } from '@/lib/db';
import { bookingSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 验证数据
    const validatedData = bookingSchema.parse(body);
    
    // 插入数据库
    const result = await db.insert(bookings).values({
      parentName: validatedData.parentName,
      phone: validatedData.phone,
      childAgeOrGrade: validatedData.childAgeOrGrade,
      stage: validatedData.stage,
      note: validatedData.note || null,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: '预约成功，我们将尽快联系您！' 
    });
  } catch (error) {
    console.error('Booking error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: '提交数据有误，请检查表单' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allBookings = await db.select().from(bookings);
    return NextResponse.json(allBookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
