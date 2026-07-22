export const mindmapPrompt = (text: string) => `
Generate a mindmap from the following text.

Requirements:
- 5 to 9 nodes
- labels must be 1-4 words
- summaries must be one sentence
- all ids unique
- rootId must exist
- all connections valid

Input:

${text}
`;