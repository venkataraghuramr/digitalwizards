import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate with zod
    const validatedData = contactSchema.parse(body);
    
    // Store inquiry in our database
    const inquiry = await storage.createInquiry({
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
    });
    
    // Return success response
    return NextResponse.json({
      success: true,
      data: inquiry,
      message: 'Your message has been sent successfully'
    });
  } catch (error) {
    console.error('Contact error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: error.errors[0].message || 'Invalid form data provided'
        }, 
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send your message. Please try again later.'
      }, 
      { status: 500 }
    );
  }
}