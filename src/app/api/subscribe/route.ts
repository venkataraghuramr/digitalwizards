import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { insertSubscriberSchema } from '../../../../shared/schema';
import { storage } from '../../../../server/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertSubscriberSchema.parse(body);
    
    const subscriber = await storage.createSubscriber(validatedData);
    
    return NextResponse.json({
      success: true,
      message: "Subscribed to newsletter successfully",
      data: subscriber
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