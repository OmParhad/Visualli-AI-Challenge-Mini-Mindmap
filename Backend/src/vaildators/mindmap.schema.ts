import { z } from "zod"

export const MindmapNodeSchema = z.object({
  id: z.string(),

  label: z.string(),

  summary: z.string(),
});

export const MindmapConnectionSchema = z.object({
  from: z.string(),
  to: z.string(),
  label: z.string(),
});

export const MindmapSchema = z.object({
  title: z.string(),
  rootId: z.string(),
  nodes: z.array(MindmapNodeSchema),
  connections: z.array(MindmapConnectionSchema),
});

export const CreateMindmapSchema = z.object({
  text: z
    .string()
    .trim()
    .min(20, "Input is too short to summarize.")
    .max(20000, "Input exceeds maximum allowed length."),
});

export type CreateMindmap = z.infer<typeof CreateMindmapSchema>;
export type MindmapNode = z.infer<typeof MindmapNodeSchema>;
export type MindmapConnection = z.infer<typeof MindmapConnectionSchema>;
export type Mindmap = z.infer<typeof MindmapSchema>;