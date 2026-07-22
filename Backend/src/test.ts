import { generateMindmap } from "./services/gemini.services";

async function main() {
    try {
        const result = await generateMindmap(`
Artificial Intelligence (AI) is the simulation of human intelligence in machines.
Machine learning is a subset of AI that enables computers to learn from data.
Deep learning uses neural networks with many layers.
AI is widely used in healthcare, finance, education, and robotics.
        `);

        console.log(JSON.stringify(result, null, 2));
    } catch (err) {
        console.error(err);
    }
}

if (process.env.MOCK_MODE === "true") {
    console.log("Running in mock mode. Returning a predefined mindmap.");
    const mockResult = {
    title: "Artificial Intelligence",
    rootId: "root",
    nodes: [
        {
            id: "root",
            label: "AI",
            summary: "Artificial Intelligence enables machines to perform intelligent tasks."
        },
        {
            id: "ml",
            label: "Machine Learning",
            summary: "Machine learning is a branch of AI."
        },
        {
            id: "dl",
            label: "Deep Learning",
            summary: "Deep learning uses neural networks."
        },
        {
            id: "health",
            label: "Healthcare",
            summary: "AI assists doctors in diagnosis."
        },
        {
            id: "robotics",
            label: "Robotics",
            summary: "Robotics often incorporates AI."
        }
    ],
    connections: [
        {
            from: "root",
            to: "ml",
            label: "includes"
        },
        {
            from: "ml",
            to: "dl",
            label: "contains"
        },
        {
            from: "root",
            to: "health",
            label: "used in"
        },
        {
            from: "root",
            to: "robotics",
            label: "used in"
        }
    ]
    };
    console.log(JSON.stringify(mockResult, null, 2));
}
main();