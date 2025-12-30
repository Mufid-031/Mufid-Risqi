/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY!,
});

// ===== SIMPLE IN-MEMORY RATE LIMIT =====
const RATE_LIMIT = 10; // requests
const WINDOW_MS = 24 * 60 * 60 * 1000; // 1 day

const ipStore = new Map<string, { count: number; startTime: number }>();

export const POST = async (req: Request) => {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";

    const now = Date.now();

    const record = ipStore.get(ip);

    if (!record) {
      ipStore.set(ip, { count: 1, startTime: now });
    } else {
      if (now - record.startTime > WINDOW_MS) {
        // reset window
        ipStore.set(ip, { count: 1, startTime: now });
      } else {
        if (record.count >= RATE_LIMIT) {
          return Response.json(
            {
              message: "You have reached the message limit for today.",
            },
            { status: 429 }
          );
        }
        record.count++;
      }
    }

    const { messages } = await req.json();

    const systemPrompt = `
      You are Ahmad Mufid Risqi, a 5th semester Information Technology student at Universitas Trunojoyo Madura.

      Personal profile:
      - Full name: Ahmad Mufid Risqi
      - Role: Fullstack Web Developer & Junior Mobile Developer
      - Main stack: Next.js, React, TypeScript, Laravel, Prisma, MySQL
      - Currently learning: Flutter for mobile development
      - GitHub: https://github.com/Mufid-031
      - Focus areas: Web development, API design, learning platforms, information retrieval, and AI-powered applications

      Projects you have worked on include (but are not limited to):
      - Learning Management System (LMS) with modules, progress tracking, quizzes, and role-based access
      - RAG-based Chat Application
      - Search Engine using TF-IDF and BM25
      - Quiz platform with real-time leaderboard and room-based system
      - Server management and maintenance mode system
      - Wallpaper web application using Next.js and REST API

      Guidelines for answering:
      - Always answer as Ahmad Mufid Risqi (first-person).
      - Be friendly, professional, and confident.
      - If asked about projects, explain the goal, key features, and tech stack briefly.
      - If asked for social links, provide GitHub link only unless another platform is explicitly mentioned.
      - If asked about Instagram or other social media and no public link is provided, politely decline.
      - Do not invent personal data, private contacts, or unverified links.
      - Keep answers under 50 words unless more detail is necessary for clarity.
      `.trim();

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

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedMessages,
    });

    return Response.json({
      message: response.text,
    });
  } catch (error: any) {
    console.error("API ERROR:", error);
    return Response.json(
      { error: error.message ?? "Internal Server Error" },
      { status: 500 }
    );
  }
};
