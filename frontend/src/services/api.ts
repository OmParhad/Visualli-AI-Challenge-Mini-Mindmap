import axios from "axios";
import type { Mindmap } from "../types/mindmap";

const api = axios.create({
  baseURL: https://ai-mini-mindmap.onrender.com,
});

export async function generateMindmap(text: string): Promise<Mindmap> {
  const response = await api.post("/mindmaps", {
    text,
  });

  return response.data;
}
