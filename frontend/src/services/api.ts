import axios from "axios";
import type { Mindmap } from "../types/mindmap";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api",
});

export async function generateMindmap(text: string): Promise<Mindmap> {
  const response = await api.post("/mindmaps", {
    text,
  });

  return response.data;
}
