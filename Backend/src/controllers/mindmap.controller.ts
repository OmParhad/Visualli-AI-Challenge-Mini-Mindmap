import { Request, Response } from "express";
import { generateMindmap } from "../services/gemini.services.js";
import { CreateMindmapSchema } from "../vaildators/mindmap.schema.js";

export const createMindmap = async (req: Request, res: Response) => {
  try {
    const result = CreateMindmapSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.issues[0]?.message ?? "Invalid request",
      });
    }

    const mindmap = await generateMindmap(result.data.text);

    return res.status(200).json(mindmap);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to generate mindmap",
    });
  }
};