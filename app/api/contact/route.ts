import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const result = formSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { message: 'Invalid form data', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = result.data;
    
    // Here you would typically send an email or store in database
    // For this example, we'll simulate an API call
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the form submission (in production, send to your email service)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    });
    
    // Return success response
    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}