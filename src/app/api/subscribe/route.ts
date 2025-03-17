import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../../server/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const result = await storage.createSubscriber({
      email: body.email,
    });
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error in subscribe API route:', error);
    return NextResponse.json(
      { error: 'Failed to submit subscription' },
      { status: 500 }
    );
  }
}