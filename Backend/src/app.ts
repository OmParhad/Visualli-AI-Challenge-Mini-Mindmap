import express from "express";
import cors from "cors";
import mindmapRoutes from "./routes/mindmap.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/mindmaps", mindmapRoutes);
app.use("/api/mindmaps", mindmapRoutes);

app.get("/", (req, res) => {
    res.send("Mini Mindmap API is running 🚀");
});

export default app;