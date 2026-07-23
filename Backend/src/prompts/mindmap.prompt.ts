export const mindmapPrompt = (text: string) => `
You are an API that generates mindmaps.

Return ONLY valid JSON.

Use EXACTLY this schema:

{
  "title": "string",
  "rootId": "string",
  "nodes": [
    {
      "id": "string",
      "label": "string",
      "summary": "string"
    }
  ],
  "connections": [
    {
      "from": "string",
      "to": "string",
      "label": "string"
    }
  ]
}

Rules:
- Return only JSON.
- Do not include markdown.
- Do not wrap the response in \`\`\`json.
- The root node id must equal rootId.
- Create between 5 and 9 nodes.
- Every node must have id, label and summary.
- Every connection must have from, to and label.
- All ids must be unique.

Text:
${text}
`;