import { Request, Response, Router } from "express";

const router = Router();

export const createMindmap = (req: Request, res: Response) => {
  res.status(201).json({ message: "Mindmap created" });
};

router.post("/", createMindmap);

export default router;