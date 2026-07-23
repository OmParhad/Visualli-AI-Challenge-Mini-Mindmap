export interface MindmapNode {
  id: string;
  label: string;
  summary: string;
}

export interface MindmapConnection {
  source: string;
  target: string;
  label?: string;
}

export interface Mindmap {
  title: string;
  rootId: string;
  nodes: MindmapNode[];
  connections: MindmapConnection[];
}