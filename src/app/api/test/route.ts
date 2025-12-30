import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GOOGLE_GENAI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY! });
export const GET = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Why is the sky blue?",
  });
  console.log(response.text);
};
