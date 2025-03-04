import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Form validation schema
const subscribeSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const result = subscribeSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { message: 'Invalid email address', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    const { email } = result.data;
    
    // In a real implementation, you would add this email to your newsletter service
    // For example with Mailchimp, ConvertKit, etc.
    // For this example, we'll just log it
    
    console.log('Newsletter subscription:', { email, subscribedAt: new Date().toISOString() });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return success response
    return NextResponse.json({ 
      message: 'Subscription successful',
      email 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}