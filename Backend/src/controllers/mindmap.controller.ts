import { Request, Response } from "express";
import { generateMindmap } from "../services/gemini.services.js";

export const createMindmap = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Text is required",
      });
    }

    const mindmap = await generateMindmap(text);

    return res.status(200).json(mindmap);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to generate mindmap",
    });
  }
};