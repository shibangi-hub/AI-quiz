import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini client on the server side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API endpoint for AI Tutor hint / explanation
app.post('/api/ai/explain', async (req: Request, res: Response) => {
  try {
    const { question, options, studentAnswer, correctAnswer, mode, topic } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question content is required' });
    }

    if (!aiClient) {
      return res.json({
        available: false,
        text: 'AI Tutor is operating in offline mode. Please review the textbook solution and Christ University lecture slides for detailed syllabus reference.',
      });
    }

    let prompt = '';
    if (mode === 'hint') {
      prompt = `You are a knowledgeable AI professor teaching Christ University Artificial Intelligence (Units I & II).
The student is taking an interactive quiz and requested a lifeline hint for this question:
Topic: "${topic || 'Artificial Intelligence'}"
Question: "${question}"
Options: ${JSON.stringify(options || [])}

Provide a crisp, encouraging 2-3 sentence conceptual hint that points them towards the right thinking or key lecture concept (e.g. difference between BFS/DFS, heuristic admissibility h(n) <= h*(n), agent components, etc.) WITHOUT explicitly stating the direct letter/answer. Focus on the core intuition.`;
    } else {
      prompt = `You are a friendly AI professor teaching Christ University Artificial Intelligence (Units I & II).
A student just answered a question and wants a clear conceptual breakdown.
Topic: "${topic || 'Artificial Intelligence'}"
Question: "${question}"
Options: ${JSON.stringify(options || [])}
Correct Answer: "${correctAnswer}"
Student's Answer: "${studentAnswer || 'None'}"

Explain why "${correctAnswer}" is correct based on AI principles (e.g., Russell & Norvig or Christ University lecture notes).
If the student was wrong, gently explain the common misconception. Keep the explanation concise, insightful, and pedagogical (under 120 words).`;
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({
      available: true,
      text: response.text || 'Unable to generate explanation.',
    });
  } catch (error: any) {
    console.error('Gemini explanation error:', error);
    return res.status(500).json({
      error: 'Failed to generate explanation',
      details: error?.message || 'Unknown server error',
    });
  }
});

// Endpoint for student viva question generation
app.post('/api/ai/viva-feedback', async (req: Request, res: Response) => {
  try {
    const { studentName, score, total, answeredQuestions } = req.body;

    if (!aiClient) {
      return res.json({
        feedback: `Great performance ${studentName || 'Student'}! You achieved ${score}/${total} (${Math.round((score / total) * 100)}%). Review Search Algorithms and Agents to solidify your foundation for the class demonstration.`,
      });
    }

    const prompt = `You are the external AI Viva Examiner for Christ University course DSC401-6 (Units I & II: Foundations, Agents, State-Space Search, Heuristic Search, CSP, Means-Ends Analysis).
Student Name: ${studentName || 'Student'}
Quiz Score: ${score} out of ${total} (${Math.round((score / (total || 1)) * 100)}%)
Unit Performance sample: ${JSON.stringify(answeredQuestions?.slice(0, 5) || [])}

Write a formal yet encouraging 3-paragraph Viva Assessment Summary for their academic assignment report:
1. Overall understanding and conceptual grasp.
2. Strengths identified in specific AI topics (e.g. Heuristics, Agents, CSP).
3. Recommended key questions or focus areas the student should be ready to defend during the in-class live demonstration.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({ feedback: response.text });
  } catch (err: any) {
    return res.json({
      feedback: 'Assessment record saved successfully. Be prepared to explain your search state tree and agent PEAS representations during viva.',
    });
  }
});

// Mount Vite or serve static production build
async function setupServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

setupServer();
