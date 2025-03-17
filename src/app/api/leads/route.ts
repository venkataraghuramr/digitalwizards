import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate with zod
    const validatedData = leadSchema.parse(body);
    
    // Store lead in our database
    const lead = await storage.createLead({
      name: validatedData.name,
      email: validatedData.email,
      service: validatedData.service,
      message: validatedData.message,
    });
    
    // Return success response
    return NextResponse.json({
      success: true,
      data: lead,
      message: 'Your information has been submitted successfully'
    });
  } catch (error) {
    console.error('Lead error:', error);
    
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
        message: 'Failed to submit your information. Please try again later.'
      }, 
      { status: 500 }
    );
  }
}