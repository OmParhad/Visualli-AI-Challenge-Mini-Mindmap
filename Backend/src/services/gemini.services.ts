import process from "node:process";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { MindmapSchema, type Mindmap } from "../vaildators/mindmap.schema.js";
import { mindmapPrompt } from "../prompts/mindmap.prompt.js";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing.");
}

const ai = new GoogleGenAI({
    apiKey,
});

export async function generateMindmap(text: string):Promise<Mindmap> {

    // Empty input
    if (!text.trim()) {
        throw new Error("Input text cannot be empty.");
    }

    // Too short
    if (text.trim().length < 50) {
        throw new Error(
            "Input is too short to generate a meaningful mindmap."
        );
    }

    // Too long
    if (text.length > 15000) {
        throw new Error(
            "Input is too long. Please provide a shorter document."
        );
    }
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

const parsed = JSON.parse(raw);

return MindmapSchema.parse(parsed);
}
export default ai;