# Project Creator

Project Creator is a Vite + React + TypeScript application that helps you turn raw product ideas into actionable technical documentation. It guides you through a step-by-step UI to clarify your idea, then generates five Markdown documents: a Product Requirements Document (PRD), Tech Stack rationale, Frontend spec, Backend spec, and an Implementation Plan. All documents are generated using the OpenAI API and can be previewed and downloaded from the app.

---

## Features

- **Multi-step Wizard:**
  - **Idea Input:** Enter your raw idea.
  - **Clarification Dialogue:** Answer 4–6 dynamic questions to refine your idea (users, features, metrics, constraints, timeline, etc).
  - **Document Generation:** Calls OpenAI to generate five detailed Markdown documents.
  - **Output Viewer:** Preview each document in a tabbed interface and download as `.md` files.
- **Modern React UI:** Clean, responsive, and accessible interface.
- **State Management:** Uses React Context for global state.
- **OpenAI Integration:** Uses your API key to generate content.

---

## Generated Documents

1. **Product Requirements Document (`prd.md`):**
   - Overview, user personas, problem statement, value proposition
   - Features (MVP vs. future)
   - User flows & wireframes (ASCII/Mermaid diagrams)
   - Success metrics & KPIs
2. **Tech Stack Rationale (`tech-stack.md`):**
   - Frontend, backend, database, DevOps, and rationale for each
3. **Frontend Specification (`frontend.md`):**
   - Component tree, pages/routes, state management, UI/UX notes
4. **Backend Specification (`backend.md`):**
   - Architecture diagram, API endpoints, database schema, security, integrations
5. **Implementation Plan (`implementation-plan.md`):**
   - Phase-by-phase build plan with granular tasks and timelines

---

## Getting Started

### 1. Clone & Install

```sh
git clone <your-repo-url>
cd ProjectCreator
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env` and add your OpenAI API key:

```sh
cp .env.example .env
# Edit .env to set VITE_OPENAI_API_KEY
```

### 3. Run the App

```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

- `src/App.tsx` — Main app logic and stepper
- `src/components/IdeaForm.tsx` — Idea input form
- `src/components/ClarificationStep.tsx` — Clarification dialogue
- `src/components/DocsViewer.tsx` — Markdown document viewer
- `src/components/DownloadButton.tsx` — Download `.md` files
- `src/contexts/IdeationContext.tsx` — App state context
- `src/utils/openai.ts` — OpenAI API integration

---

## Requirements
- Node.js v18+
- OpenAI API key

---

## License
MIT

---

## Credits
Created by Daniele L. Efford. Powered by Vite, React, and OpenAI.
