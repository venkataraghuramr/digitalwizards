import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const result = await storage.createLead({
      name: body.name,
      email: body.email,
      service: body.service || '',
      message: body.message || '',
    });
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error in leads API route:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead form' },
      { status: 500 }
    );
  }
}