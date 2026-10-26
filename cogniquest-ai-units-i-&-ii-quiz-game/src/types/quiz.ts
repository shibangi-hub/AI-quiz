export type QuestionType =
  | 'mcq'
  | 'true_false'
  | 'assertion_reason'
  | 'fill_blank'
  | 'match'
  | 'scenario'
  | 'problem_solving';

export type Unit = 'Unit I' | 'Unit II';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface Question {
  id: string;
  unit: Unit;
  topic: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  scenarioContext?: string;
  diagramSvg?: 'bfs_dfs_tree' | 'a_star_graph' | 'hill_climbing_curve' | 'csp_map' | 'mea_shapes' | 'agent_peas';
  options?: string[];
  correctAnswer: string | number | Record<string, string>; // for match, it's Record<leftId, rightId>
  matchPairs?: MatchPair[];
  explanation: string;
  slideReference: string; // e.g. "Ch-01 Slide 6", "Ch-02 Part 2 Slide 29"
  hint: string;
}

export interface UserAnswerRecord {
  questionId: string;
  userAnswer: string | number | Record<string, string>;
  isCorrect: boolean;
  timeSpentSeconds: number;
  usedLifeline?: boolean;
}

export type QuizMode = 'viva_10' | 'practice_all' | 'time_challenge' | 'visual_sandbox' | 'question_bank';

export interface StudentProfile {
  name: string;
  registerNumber: string;
  classSection: string;
}
