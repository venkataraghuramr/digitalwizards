import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';
import { z } from 'zod';

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate with zod
    const validatedData = subscribeSchema.parse(body);
    
    // Store subscription in our database
    const subscriber = await storage.createSubscriber({
      email: validatedData.email,
    });
    
    // Return success response
    return NextResponse.json({
      success: true,
      data: subscriber,
      message: 'Successfully subscribed to the newsletter'
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: error.errors[0].message || 'Invalid email provided'
        }, 
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to subscribe to the newsletter'
      }, 
      { status: 500 }
    );
  }
}