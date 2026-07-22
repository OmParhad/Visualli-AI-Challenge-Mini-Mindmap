import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.json({
        message: "Mindmap endpoint works!"
    });
});

export default router;