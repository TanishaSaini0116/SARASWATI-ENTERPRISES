import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { capacity, systemType } = await request.json();
    
    // Very basic dummy estimation logic
    let baseCost = 50000; // INR
    
    switch(systemType) {
      case 'ro-ind':
        baseCost = 250000;
        break;
      case 'stp':
        baseCost = 500000;
        break;
      case 'etp':
        baseCost = 600000;
        break;
      default:
        baseCost = 50000;
    }

    const estimatedCost = baseCost + (Number(capacity) * 50);

    return NextResponse.json({ 
      success: true, 
      estimatedCost,
      currency: 'INR',
      disclaimer: 'This is a rough estimate. Actual pricing depends on raw water analysis and site constraints.'
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to calculate estimate' }, { status: 500 });
  }
}
