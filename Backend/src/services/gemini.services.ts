import process from "node:process";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { Mindmap, MindmapSchema } from "../vaildators/mindmap.schema.js";
import { mindmapPrompt } from "../prompts/mindmap.prompt.js";

dotenv.config();

console.log("Current working directory:", process.cwd());
console.log("API Key:", process.env.GEMINI_API_KEY);


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
const prompt = `
Generate a mindmap from the following text.

Rules:
- Return ONLY valid JSON.
- Title should summarize the topic.
- Create between 5 and 9 nodes.
- Node labels should be 1-4 words.
- Each summary should be exactly one sentence.
- All node ids must be unique.
- rootId must match an existing node.
- Every connection must reference valid node ids.

Text:

${text}
`;


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

// 👇 Add these logs
console.log("========== RAW GEMINI RESPONSE ==========");
console.log(raw);
console.log("=========================================");



// 👇 Add these logs too
const parsed = JSON.parse(raw);

console.log("========== PARSED ==========");
console.dir(parsed, { depth: null });

// Stop here temporarily
return parsed as Mindmap;
}

console.log("Current working directory:", process.cwd());
console.log("API Key:", process.env.GEMINI_API_KEY);
export default ai;