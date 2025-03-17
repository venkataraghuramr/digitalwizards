import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { insertInquirySchema } from '../../../../shared/schema';
import { storage } from '../../../../server/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertInquirySchema.parse(body);
    
    const inquiry = await storage.createInquiry(validatedData);
    
    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      data: inquiry
    }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ 
        success: false, 
        message: error.errors.map(e => e.message).join(', ')
      }, { status: 400 });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: error instanceof Error ? error.message : "An unexpected error occurred" 
      }, { status: 500 });
    }
  }
}