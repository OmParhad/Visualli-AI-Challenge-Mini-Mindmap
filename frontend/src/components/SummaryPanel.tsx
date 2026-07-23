import type { MindmapNode } from "../types/mindmap";

type Props = {
  node: MindmapNode | null;
};

export default function SummaryPanel({ node }: Props) {
  if (!node) {
    return (
      <div
        style={{
          padding: 20,
          borderLeft: "1px solid #ddd",
        }}
      >
        <h3>Summary</h3>
        <p>Select a node to view its summary.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 20,
        borderLeft: "1px solid #ddd",
      }}
    >
      <h3>{node.label}</h3>
      <p>{node.summary}</p>
    </div>
  );
}