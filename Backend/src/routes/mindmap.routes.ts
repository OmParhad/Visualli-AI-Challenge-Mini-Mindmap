import { Router } from "express";
import { createMindmap } from "../controllers/mindmap.controller.js";

const router = Router();

router.post("/", createMindmap);

export default router;