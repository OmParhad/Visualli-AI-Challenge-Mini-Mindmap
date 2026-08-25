import "./App.css";
import axios from "axios";
import { useState } from "react";
import { generateMindmap } from "./services/api";
import type { Mindmap } from "./types/mindmap";

import MindmapDiagram from "./components/Mindmapdiagram";
import SummaryPanel from "./components/SummaryPanel";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [mindmap, setMindmap] = useState<Mindmap | null>(null);
  const [error, setError] = useState("");

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const selectedNode =
    mindmap?.nodes.find((node) => node.id === selectedNodeId) ?? null;

  const handleGenerate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await generateMindmap(text);

      console.log("Mindmap from backend:", data);

      setMindmap(data);
      setSelectedNodeId(null);
    } catch (err) {
      console.error(err);
      const message = axios.isAxiosError(err)
        ? err.response?.data?.error
        : null;
      setError(
        typeof message === "string" ? message : "Failed to generate mindmap."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Mini Mindmap Generator</h1>

      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your document..."
      />

      <br />
      <br />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Mindmap"}
      </button>

      {loading && <p>Generating...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !mindmap && !error && (
        <p style={{ marginTop: 20 }}>
          No mindmap generated yet.
        </p>
      )}

      {mindmap && (
        <div className="workspace">
          <div className="diagram">
            <MindmapDiagram
              mindmap={mindmap}
              onNodeClick={setSelectedNodeId}
            />
          </div>

          <div className="summary">
            <SummaryPanel node={selectedNode} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;