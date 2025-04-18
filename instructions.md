Create a brand‑new Vite + React + TypeScript project that provides a step‑by‑step UI for capturing any raw “idea,” running a short clarification dialogue, then producing five Markdown support documents: a PRD, Tech Stack rationale, Frontend spec, Backend spec, and an Implementation Plan. The generated code should be ready to run locally with npm/yarn.

Requirements:

1. **Project Setup**  
   - Use Vite with React and TypeScript.  
   - Include ESLint, Prettier, and a sample .env.example with OPENAI_API_KEY.  
   - Use functional components and React Hooks.

2. **App Flow & UI**  
   - A multi‑step interface (e.g. a stepper or wizard):  
     1. **Idea Input**: Text field for “Enter your raw idea.”  
     2. **Clarification Dialogue**: Dynamically ask 4–6 questions one at a time to refine scope, users, features, metrics, constraints, timeline.  
     3. **Document Generation**: Show progress while calling the OpenAI API.  
     4. **Output**: Render each of the five documents in separate tabs or accordions, each in Markdown preview.  
   - Allow the user to download each document as a `.md` file.

3. **Components & Structure**  
   - **App.tsx**: Manages global state (current step, answers, generated docs).  
   - **components/IdeaForm.tsx**: Captures initial idea.  
   - **components/ClarificationStep.tsx**: Presents one question at a time, captures answer, advances.  
   - **components/DocsViewer.tsx**: Renders the five Markdown docs with tabs or an accordion.  
   - **components/DownloadButton.tsx**: Exports a given Markdown string as a `.md` file.  
   - **contexts/IdeationContext.tsx**: Provides state for idea, answers, docs.  
   - **utils/openai.ts**: Wrapper around `fetch` or `axios` to call OpenAI’s chat/completions endpoint.

4. **OpenAI Integration**  
   - After the clarification step, call the OpenAI API once with a system prompt that:  
     1. Summarizes the user’s idea and answers.  
     2. Instructs the model to produce five separate Markdown documents—`prd.md`, `tech-stack.md`, `frontend.md`, `backend.md`, `implementation-plan.md`—each following the detailed structure defined below.  
   - Show a loading indicator during the API call.

5. **Document Structure**  
   - **Product Requirements Document (`prd.md`)**:  
     - **Overview:** goal statement, user personas, problem statement, value proposition.  
     - **Features:** prioritized list (MVP vs. future).  
     - **User Flows & Wireframes:** ASCII or Mermaid‑style diagrams.  
     - **Success Metrics & KPIs.**  

   - **Tech Stack Rationale (`tech-stack.md`)**:  
     - **Frontend:** framework, state management, styling approach.  
     - **Backend:** runtime, framework, API style (REST vs. GraphQL), auth, hosting.  
     - **Database & Storage:** relational or NoSQL, CDN, object store.  
     - **DevOps & CI/CD:** pipeline, containerization, infra as code.  
     - **Why Each:** 2–3 sentences of pros/cons and fit to your constraints.  

   - **Frontend Specification (`frontend.md`)**:  
     - **Component Library & Tree:** list of all React/Vue/Svelte components, props, events.  
     - **Pages & Routes:** path, purpose, state needs.  
     - **Data Flow & State Management:** global vs. local state, caching strategy.  
     - **UI/UX Notes:** accessibility, responsiveness, animation hooks.  

   - **Backend Specification (`backend.md`)**:  
     - **Architecture Diagram:** ASCII or Mermaid.  
     - **API Endpoints:** path, method, request/response schemas.  
     - **Database Schema:** tables/collections with fields, indexes, relations.  
     - **Security:** auth flows, input validation, rate limiting.  
     - **Third‑Party Integrations:** list and purpose.  

   - **Implementation Plan (`implementation-plan.md`)**:  
     - **Purpose:** A comprehensive build plan that **synthesizes** the PRD, Tech Stack, Frontend & Backend specs into a phase‑by‑phase execution strategy, with granular tasks and timelines.  
     - **Structure:**  
       1. **Phase 1: Discovery & Design**  
          - Review PRD and tech‑stack.md, refine wireframes and architecture spikes.  
          - Tasks: user research validation, finalize component & API contracts, prototype key flows.  
          - Deliverables & Dates.  
       2. **Phase 2: Core Development**  
          - Build out infrastructure per tech‑stack.md.  
          - Implement frontend components and routes as defined in frontend.md.  
          - Develop backend endpoints and database schemas from backend.md.  
          - Tasks: repo scaffolding, CI/CD setup, core feature builds.  
          - Deliverables & Dates.  
       3. **Phase 3: Integration & Testing**  
          - Integrate frontend with backend, ensure contract adherence.  
          - Tasks: unit tests, integration tests, API contract tests, component tests.  
          - Deliverables & Dates.  
       4. **Phase 4: Polish & Deployment**  
          - Address UX/UI tweaks, performance tuning, security audits.  
          - Tasks: accessibility audit, load testing, deploy to staging/production.  
          - Deliverables & Dates.  
       5. **Phase 5: Launch & Iteration**  
          - Monitor metrics (from PRD), gather user feedback.  
          - Tasks: bug triage, iterative improvements, analytics setup, rollout plan.  
          - Deliverables & Dates.  

6. **Styling & UX**  
   - Use a simple, clean design. You may pick a lightweight UI library (e.g. Chakra, Material UI, or Tailwind CSS).  
   - Ensure mobile responsiveness.  
   - Provide feedback on each step and error handling.

7. **Deliverables**  
   - Full file tree and code for each file.  
   - `README.md` with setup & run instructions.

Make it as self‑contained and developer‑friendly as possible—so that running `npm install && npm run dev` spins up a working app.  
