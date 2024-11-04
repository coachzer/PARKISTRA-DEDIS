// app/api/instagram/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching Instagram posts' }, { status: 500 });
  }
}
