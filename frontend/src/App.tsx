import { useState } from "react";
import { generateMindmap } from "./services/api";
import type { Mindmap } from "./types/mindmap";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [mindmap, setMindmap] = useState<Mindmap | null>(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await generateMindmap(text);
      setMindmap(data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate mindmap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 20,
      }}
    >
      <h1>Mini Mindmap Generator</h1>

      <textarea
        rows={12}
        style={{ width: "100%" }}
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

      {mindmap && (
        <pre>{JSON.stringify(mindmap, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;