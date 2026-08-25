import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { MindmapSchema, type Mindmap } from "../vaildators/mindmap.schema.js";
import { mindmapPrompt } from "../prompts/mindmap.prompt.js";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing.");
}

const ai = new GoogleGenAI({ apiKey });

export async function generateMindmap(text: string): Promise<Mindmap> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: mindmapPrompt(text),
    config: {
      responseMimeType: "application/json",
    },
  });

  const raw = response.text;

  if (!raw) {
    throw new Error("Empty response from Gemini API.");
  }

  return MindmapSchema.parse(JSON.parse(raw));
}

export default ai;
