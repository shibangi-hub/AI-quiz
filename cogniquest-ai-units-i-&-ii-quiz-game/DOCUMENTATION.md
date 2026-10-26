# DSC401-6: Artificial Intelligence – Interactive Quiz Game & Viva Simulator
## Comprehensive Project Documentation & Technical Architecture Report

**Course:** DSC401-6 – Artificial Intelligence  
**Syllabus Coverage:** Units I & II  
**Institution:** Christ (Deemed to be University)  
**Maximum Assignment Marks:** 25  

---

## 1. Executive Summary & Overview

**CogniQuest AI** is a full-stack interactive academic assessment and quiz application engineered specifically to cover all concepts prescribed in **Units I & II of Artificial Intelligence**. It provides students and evaluators with a 65-question bank across seven question formats, an automated **10-Question Random Viva Examination Mode** mapped to the official 25-mark rubric, an interactive **Visual State-Space & Algorithm Sandbox** for classroom demonstrations, and an intelligent **Server-Side AI Tutor** powered by Google Gemini.

---

## 2. API Key Usage & Security Architecture

### Is an API Key used in this product?
**YES.** The application integrates the **Google Gemini API Key (`GEMINI_API_KEY`)**.

### Detailed API Key Specification

| Attribute | Details |
| :--- | :--- |
| **API Key Name** | `GEMINI_API_KEY` |
| **Service Provider** | Google Cloud / Google AI Studio (`@google/genai` TypeScript SDK) |
| **Execution Environment** | **Server-side only** (`server.ts` running on Node.js/Express) |
| **Client Exposure** | **Zero Exposure** (Never sent to the browser, hidden from network inspect panels and client bundles) |
| **Model Deployed** | `gemini-3.8-flash` |
| **Configuration** | Injected via environment variables (`process.env.GEMINI_API_KEY`) |

### What is the API Key used for?

The `GEMINI_API_KEY` powers three real-time pedagogical capabilities through dedicated server endpoints:

1. **Interactive "Ask AI Tutor" Hint Lifeline (`POST /api/ai/explain` with `mode: 'hint'`)**:
   - When a student is stuck on a challenging search, agent, or CSP question, they can invoke the **AI Tutor Hint** lifeline.
   - The server queries Gemini 3.8-Flash with prompt constraints instructing the model to act as an AI professor.
   - It synthesizes a crisp, 2–3 sentence conceptual hint that activates student recall (e.g., reminding them that admissible heuristics must never overestimate $h^*(n)$) **without spoiling the direct option letter or answer**.

2. **In-Depth Post-Answer Conceptual Breakdown & Interactive Q&A (`POST /api/ai/explain` with `mode: 'explanation'`)**:
   - When a student completes a question, they can click **"AI Tutor Explanation"** or type custom follow-up questions in the chat modal.
   - The model analyzes the student's selected answer versus the syllabus correct answer, explaining why the correct choice holds from first principles and demystifying the distractor misconceptions.

3. **External Viva Examiner Critique & Academic Submission Report (`POST /api/ai/viva-feedback`)**:
   - Upon completing the 10-Question Classroom Viva Mode, the student's results (score, unit distribution, correct vs. incorrect topics) are submitted to this endpoint.
   - Gemini evaluates the candidate's performance across foundations, search algorithms, heuristic optimality, and CSPs to produce a formal, 3-paragraph **Viva Examiner Report** detailing strengths and topics to defend during in-class demonstration.

4. **Graceful Fallback & Offline Resilience**:
   - If the API key is not configured or network requests time out, the application does not fail or display blank states.
   - It automatically falls back to curated offline slide citations and textbook explanations embedded directly in the 65-question database.

---

## 3. Technology Stack & Libraries Used

### Frontend Architecture
- **React 19 (`react`, `react-dom` v19.0.1)**: Modern component architecture, functional hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`), and error-boundary resilience.
- **TypeScript 7 (`typescript` v7.0.2)**: Strict type safety for question data schemas, PEAS structures, match pairs, and viva transcripts.
- **Tailwind CSS v4 (`@tailwindcss/vite` v4.3.3)**: High-performance design system implementing clean neutral slate backgrounds, accessible contrast ratios, and responsive layouts.
- **Lucide React (`lucide-react` v0.546.0)**: Clean iconography for timers, checkmarks, lifelines, branches, and academic badges.
- **Canvas Confetti (`canvas-confetti` v1.9.4)**: Gamified celebratory particle animations triggered upon achieving a passing grade ($\ge 60\%$) on the viva assessment.
- **Motion (`motion` v12.23.24)**: Hardware-accelerated UI transitions and card fades.

### Backend & Server Architecture
- **Node.js with Express (`express` v4.21.2)**: Lightweight server hosting API endpoints and proxying AI queries securely.
- **Vite 8 (`vite` v8.3.0)**: Lightning-fast development server with middleware integration in development mode and static production bundling.
- **TSX (`tsx` v4.21.0)**: Direct TypeScript execution engine for `server.ts`.
- **Dotenv (`dotenv` v17.2.3)**: Secure environment variable management.
- **Google GenAI SDK (`@google/genai` v2.4.0)**: Official Google GenAI TypeScript client configured with custom telemetry headers (`User-Agent: aistudio-build`).

---

## 4. Question Bank & Curriculum Alignment

The application includes **65 comprehensive questions** strictly derived from Christ (Deemed to be University) lecture presentations:

### Syllabus Modules Covered:
1. **Foundations of AI**: Definition of intelligence, John McCarthy (1960), 4 quadrants (Thinking/Acting Humanly/Rationally), 13 application sectors (AEG bot in Data Security, TeslaBot, Erica & Sophia in Robotics, etc.).
2. **Turing Test**: Alan Turing (1950) Imitation Game, 3 participants (Judge C, Human B, Machine A), 4 core criteria (NLP, Knowledge Representation, Reasoning, Learning), Advantages and Limitations.
3. **Intelligent & Rational Agents**: Sensors and Actuators, Percept, Percept Sequence, Rationality vs. Perfection (expected performance vs. impossible omniscience), Information gathering & exploration.
4. **5 Types of AI Agents**: Simple Reflex (Condition-Action rules, current percept only), Model-based Reflex (internal state, world evolution model), Goal-based (searching and planning), Utility-based (utility function mapping states to real numbers, optimization), Learning Agent (Learning element, Critic, Performance element, Problem generator).
5. **Nature of Environments**: 7 properties with real-world slide comparisons:
   - Fully vs. Partially Observable (Chess vs. Poker)
   - Deterministic vs. Stochastic (Calculator vs. Driving)
   - Static vs. Dynamic (Crossword vs. Drone Soccer)
   - Discrete vs. Continuous (Chess vs. Steering/Speed)
   - Single-Agent vs. Multi-Agent (Crossword solver vs. Stock trading)
   - Known vs. Unknown (Video game physics vs. Deep-sea exploration)
   - Episodic vs. Sequential (Factory product inspection vs. Chess)
6. **PEAS Framework**: Detailed Performance, Environment, Actuators, and Sensors matrices for Medical Diagnosis, Vacuum Cleaner, Part-picking Robot, and Autonomous Driving.
7. **Problems & Problem Formulation**: Goal formulation first; 4 components (Initial State, Successor Function, Goal Test, Path Cost); Indian Traveller problem (Pune to Chennai), Chess Checkmate.
8. **Problem Characteristics**: Decomposability, Ignorable (Theorem proving) vs. Recoverable (8-Puzzle) vs. Irrecoverable (Chess), Predictable universe (Certain vs. Uncertain outcomes in Bridge), Absolute (Marcus reasoning 40 A.D.) vs. Relative solutions, Consistent vs. dynamic knowledge bases.
9. **State-Space Search & Production Systems**: State-space graphs, 8-puzzle and 15-puzzle sliding grids, Tic-tac-toe trees, Production system components (IF-THEN rules, Working memory, Control strategy, Inference engine), Fever/Flu diagnostic rules.
10. **Search Program Design Issues**: Completeness, Optimality, Time complexity $O(b^d)$, Space complexity $O(b^d)$, Branching factor $b$, Depth $d$, Repeated states and Closed lists, Memory-bounded algorithms (IDDFS, RBFS, SMA*).
11. **Uninformed Search**:
    - **Breadth-First Search (BFS)**: FIFO queue, level-by-level, complete, optimal for uniform step cost, exponential memory $O(b^d)$.
    - **Depth-First Search (DFS)**: LIFO stack / recursive, linear memory $O(bm)$, non-optimal, risk of infinite loops.
    - **Iterative Deepening Search (IDDFS)**: Combines BFS completeness/optimality with DFS $O(bd)$ low memory.
12. **Informed (Heuristic) Search Strategies**:
    - Heuristics: Rule of thumb, shortcut knowledge, $h(n) \ge 0$.
    - Admissibility: $h(n) \le h^*(n)$ (never overestimates).
    - Pure Heuristic Search (OPEN and CLOSED list, expands min $h(n)$).
    - Greedy Best-First Search ($f(n) = h(n)$, priority queue, non-optimal).
    - A\* Search ($f(n) = g(n) + h(n)$, Dijkstra variant, guaranteed optimal when $h$ is admissible).
13. **Hill Climbing**: Local search, greedy steepest ascent, State-space diagram topography (Local Maximum, Global Maximum, Plateau / Flat Local Maximum, Ridge, Shoulder, Current State), Block World $+1/-1$ heuristic calculation.
14. **Constraint Satisfaction Problems (CSP)**: Variables $X$, Domains $D$, Constraints $C$, Complete vs. Consistent assignments, 3-region Map Coloring ($A \ne B, B \ne C, A \ne C$), Sudoku, Timetabling, and Exam Scheduling.
15. **Means-Ends Analysis (MEA)**: Allen Newell & Herbert Simon (1961) General Problem Solver (GPS), difference reduction between CURRENT and GOAL, Operator Subgoaling, recursive `FIRST-PART` / `LAST-PART`, shape transformations (Delete dot $\to$ Move square $\to$ Expand square).

---

## 5. Question Formats Included

The 65-question bank is distributed across all seven prescribed formats:
1. **Multiple Choice Questions (MCQ)**: 4 distinct options with single correct key.
2. **True / False**: Direct conceptual evaluations.
3. **Assertion – Reason (A & R)**: Two linked statements testing cause-and-effect reasoning.
4. **Fill in the Blanks**: Core terminology and equation completion.
5. **Interactive Match the Following**: Multi-pair dropdown matching with simultaneous validation.
6. **Real-World Scenarios (12+ questions)**: Real industry applications (conveyor belt picking, TeslaBot, AEG security bots, Netflix recommendations, flight booking).
7. **Problem-Solving & State-Space Calculations (8+ questions)**: Step-by-step queue tracing, A\* $f(n)=g(n)+h(n)$ calculations, 8-puzzle branching factors, and Block World heuristic scores.

---

## 6. Key Application Modules & Features

1. **Classroom Viva Examination Mode (10 Random Questions)**:
   - Takes student details (Name, Register Number, Course Code).
   - Randomly samples 5 questions from Unit I and 5 questions from Unit II.
   - Calculates score and converts it to the official **25 Maximum Marks** scale.
   - Generates a printable academic transcript with the AI Examiner's critique for classroom viva defense.

2. **Interactive Practice Mode**:
   - Filter by Unit I, Unit II, or All.
   - Instant correctness feedback with exact slide citations (e.g., `Ch-01 Slide 31`, `Ch-02 Part 2 Slide 29`).
   - Integrated lifelines: **50:50**, **AI Tutor Hint**, and **Skip**.

3. **Visual Algorithm & State-Space Sandbox**:
   - **A\* Evaluation Stepper**: Live step-by-step trace of $f(n) = g(n) + h(n)$ with interactive `OPEN` priority queue and `CLOSED` set transitions.
   - **CSP Map Coloring Simulator**: Live 3-region interactive map ($A, B, C$) where students assign colors and observe real-time constraint conflict detection ($A \ne B, B \ne C, A \ne C$).
   - **Hill Climbing Topography Explorer**: Visual state-space curve highlighting Local Maxima, Global Maxima, Shoulders, Ridges, and Plateaus.
   - **Means-Ends Analysis (GPS) Stepper**: Live 3-step geometric difference elimination (`Delete dot` $\to$ `Move square` $\to$ `Expand square`).

4. **Complete Question Bank Repository**:
   - Full keyword search across questions, topics, and explanations.
   - Multi-parameter filtering by Unit, Topic, and Question Type.
   - One-click answer reveal toggle.
   - **"Export Printable Bank"** button to print or save the complete question bank as a PDF study guide.
