# 🧠 Mini Mindmap

> AI-powered document-to-mindmap generator built with React, TypeScript, Express, and Google's Gemini API.

Mini Mindmap is a full-stack web application that transforms unstructured text into an interactive visual mindmap. Users can paste a document, generate a structured knowledge graph using AI, and explore each concept through an interactive node-based interface.

Developed as part of the **Visualli AI Engineering Challenge**.

---

## Preview



---

# Features

- Generate structured mind maps from plain text
- AI-powered summarization using Gemini
- Interactive node-link visualization
- Click any node to view its summary
- Responsive loading and error states
- Empty state for first-time users
- Backend schema validation using Zod
- Clean REST API architecture

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Flow
- Axios

## Backend

- Node.js
- Express
- TypeScript
- Google Gemini API
- Zod

---

# Architecture

```
                User Input
                     │
                     ▼
           React Frontend (Vite)
                     │
               REST API Request
                     │
                     ▼
            Express Backend API
                     │
              Gemini 2.5 Flash
                     │
          Structured JSON Response
                     │
          Zod Schema Validation
                     │
                     ▼
        Interactive React Flow Graph
```

---

# Project Structure

```
Mini-Mindmap
│
├── Backend
│   ├── controllers
│   ├── prompts
│   ├── routes
│   ├── services
│   ├── validators
│   ├── app.ts
│   └── server.ts
│
├── frontend
│   ├── components
│   ├── services
│   ├── types
│   ├── App.tsx
│   └── main.tsx
│
└── README.md
```

---

# Installation

## Clone

```bash
git clone https://github.com/yourusername/mini-mindmap.git
```

---

## Backend

```bash
cd Backend
npm install
```

Create a `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run

```bash
npm run dev
```

Backend runs on

```
http://localhost:3000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Design Decisions

This project was intentionally designed around a simple client-server architecture.

- React is responsible only for rendering and interaction.
- Express handles request validation and AI communication.
- Gemini generates the semantic structure.
- Zod validates every AI response before it reaches the frontend.
- React Flow renders the resulting graph while keeping the visualization interactive and lightweight.

This separation keeps the application modular, maintainable, and easy to extend.

---

# Error Handling

The application gracefully handles:

- Empty input
- Invalid requests
- Gemini API failures
- Invalid AI responses
- Schema validation failures
- Network errors

---

# Future Improvements

- Automatic graph layout using Dagre/ELK
- Mindmap persistence
- Export as PNG/PDF
- Authentication
- Collaborative editing
- Theme customization
- Search within mindmaps

---

# Learning Outcomes

Through this project, I gained practical experience with:

- Full-stack TypeScript development
- REST API design
- AI integration using Gemini
- Runtime schema validation
- Interactive graph visualization
- React component architecture
- Error handling patterns
- State management

---

# License

This project was developed for the **Visualli AI Engineering Challenge**.

Feel free to fork, explore, and build upon it for learning purposes.
