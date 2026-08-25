import {
  Background,
  Controls,
  ReactFlow,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import type { Mindmap } from "../types/mindmap";

type Props = {
  mindmap: Mindmap;
  onNodeClick: (id: string) => void;
};

export default function MindmapDiagram({
  mindmap,
  onNodeClick,
}: Props) {

const nodes: Node[] = mindmap.nodes.map((node, index) => ({
  id: node.id,
  data: {
    label: node.label,
  },
  position: {
    x: (index % 3) * 260,
    y: Math.floor(index / 3) * 180,
  },
  style: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #2563eb",
    background: "#ffffff",
    color: "#1e293b",
    fontWeight: 600,
    minWidth: 120,
    textAlign: "center",
  },
}));
  
const edges: Edge[] = (mindmap.connections ?? []).map((edge, index) => ({
  id: String(index),
  source: edge.from,
  target: edge.to,
  label: edge.label,
  animated: true,
}));

  return (
   <div
  style={{
    width: "100%",
    height: "100%",
  }}
>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={((_event, node) => onNodeClick(node.id)) as NodeMouseHandler}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}