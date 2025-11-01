import { NextRequest, NextResponse } from 'next/server';

/**
 * Next.js API Route to proxy requests to the chatbot backend
 * This solves the Mixed Content issue by making server-side requests
 * instead of client-side requests from HTTPS to HTTP
 */
export async function POST(request: NextRequest) {
  try {
    // Get the chatbot API URL from environment variable or use default
    const chatbotApiUrl = process.env.CHATBOT_API_URL || 'http://195.35.22.46:5000';
    
    // Get the request body from the client
    const body = await request.json();
    
    // Forward the request to the chatbot backend with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    try {
      const response = await fetch(`${chatbotApiUrl}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      // Check if the response is ok
      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json(
          {
            answer: `Chatbot server error: ${response.status} ${response.statusText}`,
            sources: [],
            status: 'error',
          },
          { status: response.status }
        );
      }

      // Parse and return the chatbot response
      const data = await response.json();
      
      return NextResponse.json(data);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        return NextResponse.json(
          {
            answer: 'The chatbot is taking too long to respond. Please try again with a simpler question.',
            sources: [],
            status: 'timeout',
          },
          { status: 504 }
        );
      }
      throw fetchError;
    }
  } catch (error: any) {
    console.error('Chatbot API error:', error);
    
    return NextResponse.json(
      {
        answer: 'Sorry, I encountered an error connecting to the chatbot server. Please try again later.',
        sources: [],
        status: 'error',
      },
      { status: 500 }
    );
  }
}

/**
 * Health check endpoint for the chatbot proxy
 */
export async function GET() {
  try {
    const chatbotApiUrl = process.env.CHATBOT_API_URL || 'http://195.35.22.46:5000';
    
    const response = await fetch(`${chatbotApiUrl}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Chatbot server is not responding' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ status: 'ok', chatbot: data });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Cannot connect to chatbot server' },
      { status: 500 }
    );
  }
}

