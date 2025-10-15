import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const GET = async () => {
  try {
    const prompt = "Hello, how are you?";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return new Response(JSON.stringify(result.response.text()), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
