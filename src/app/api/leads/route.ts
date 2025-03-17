import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { insertLeadSchema } from '../../../../shared/schema';
import { storage } from '../../../../server/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertLeadSchema.parse(body);
    
    const lead = await storage.createLead(validatedData);
    
    return NextResponse.json({
      success: true,
      message: "Lead form submitted successfully",
      data: lead
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