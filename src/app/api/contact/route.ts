import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const result = await storage.createInquiry({
      name: body.name,
      email: body.email,
      subject: body.subject || '',
      message: body.message,
    });
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}