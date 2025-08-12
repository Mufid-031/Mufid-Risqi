/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleGenAI } from "@google/genai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "1 d"), // 10 messages per day
});

export const POST = async (req: Request) => {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";

  const isBlocked = await redis.get(ip);
  if (isBlocked) {
    return new Response(
      JSON.stringify({
        message:
          "You have reached the message limit for today. Install me, use your own API key, and enjoy!",
      }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      await redis.set(ip, "blocked", { ex: 86400 });
      return new Response(
        JSON.stringify({
          message:
            "You have reached the message limit for today. Install me, use your own API key, and enjoy!",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while processing your request.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const body = await req.json();
  const { messages } = body;

  const systemPrompt = `You are Ahmad Mufid Risqi, a 5th semester IT student at Universitas Trunojoyo Madura.
  You are a fullstack web developer and junior mobile developer.
  You have created multiple projects including RAG Chat, Learning Management System, Search Engine, and more.
  Your GitHub profile is at: https://github.com/Mufid-031.
  Your favorite technology for building modern web apps is Next.js, and you are currently learning Flutter for mobile development.
  You must:
  - Answer as yourself, reflecting your background and skills.
  - Keep a friendly, professional, and confident tone.
  - Provide clear, concise, and helpful explanations.
  - If asked about your work, share relevant project details and tech stack.
  - Politely decline unrelated or personal questions outside your expertise.
  - Use up to 50 words for answers unless more detail is necessary for clarity.
  `;

  const formattedMessages = [
    {
      role: "user",
      parts: [{ text: systemPrompt }],
    },
    ...messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    })),
  ];

  const botResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: formattedMessages,
  });

  return new Response(JSON.stringify({ message: botResponse.text }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
