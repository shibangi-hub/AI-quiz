import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { QuizCard } from './components/QuizCard';
import { LifelineBar } from './components/LifelineBar';
import { Timer } from './components/Timer';
import { VivaModeModal } from './components/VivaModeModal';
import { ResultsView } from './components/ResultsView';
import { QuestionBankBrowser } from './components/QuestionBankBrowser';
import { VisualSearchSandbox } from './components/VisualSearchSandbox';
import { AITutorModal } from './components/AITutorModal';
import { QUESTION_BANK } from './data/questionBank';
import { Question, UserAnswerRecord, QuizMode, StudentProfile } from './types/quiz';
import { Flame, Trophy, Sparkles, BookOpen, Layers, Play } from 'lucide-react';

export default function App() {
  const [currentMode, setCurrentMode] = useState<QuizMode>('practice_all');
  const [activeUnitFilter, setActiveUnitFilter] = useState<'All' | 'Unit I' | 'Unit II'>('All');
  const [isVivaModalOpen, setIsVivaModalOpen] = useState<boolean>(false);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | undefined>(undefined);

  // Active Quiz State
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answerRecords, setAnswerRecords] = useState<UserAnswerRecord[]>([]);
  const [isCurrentSubmitted, setIsCurrentSubmitted] = useState<boolean>(false);
  const [currentUserAnswer, setCurrentUserAnswer] = useState<any>(undefined);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean>(false);
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);

  // Gamification & Scoring
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

  // Timer Configuration
  const [timerSeconds, setTimerSeconds] = useState<number>(45);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  // Lifelines State for current session
  const [isFiftyFiftyUsed, setIsFiftyFiftyUsed] = useState<boolean>(false);
  const [isAITutorUsed, setIsAITutorUsed] = useState<boolean>(false);
  const [isSkipUsed, setIsSkipUsed] = useState<boolean>(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);

  // AI Tutor Modal State
  const [isAITutorModalOpen, setIsAITutorModalOpen] = useState<boolean>(false);
  const [aiTutorMode, setAiTutorMode] = useState<'hint' | 'explanation'>('hint');

  // Shuffle helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Start Viva Examination (Exactly 10 Random Questions)
  const handleStartViva = (profile: StudentProfile, timePerQ: number) => {
    setStudentProfile(profile);
    setIsVivaModalOpen(false);
    setCurrentMode('viva_10');

    // Pick 10 random questions: balance 5 from Unit I, 5 from Unit II
    const unit1 = QUESTION_BANK.filter((q) => q.unit === 'Unit I');
    const unit2 = QUESTION_BANK.filter((q) => q.unit === 'Unit II');

    const shuffled1 = shuffleArray(unit1).slice(0, 5);
    const shuffled2 = shuffleArray(unit2).slice(0, 5);
    const viva10 = shuffleArray([...shuffled1, ...shuffled2]);

    setActiveQuestions(viva10);
    resetQuizRun(timePerQ, true);
  };

  // Start Practice or Time Challenge
  const initializeMode = useCallback((mode: QuizMode, unit: 'All' | 'Unit I' | 'Unit II') => {
    let pool = QUESTION_BANK;
    if (unit !== 'All') {
      pool = QUESTION_BANK.filter((q) => q.unit === unit);
    }

    if (mode === 'viva_10') {
      const u1 = QUESTION_BANK.filter((q) => q.unit === 'Unit I');
      const u2 = QUESTION_BANK.filter((q) => q.unit === 'Unit II');
      pool = [...shuffleArray(u1).slice(0, 5), ...shuffleArray(u2).slice(0, 5)];
    } else if (mode === 'time_challenge') {
      pool = shuffleArray(pool).slice(0, 15);
    }

    setActiveQuestions(pool);
    resetQuizRun(mode === 'time_challenge' ? 30 : 60, mode !== 'practice_all');
  }, []);

  const resetQuizRun = (timerSec: number, enableTimer: boolean) => {
    setCurrentQuestionIndex(0);
    setAnswerRecords([]);
    setIsCurrentSubmitted(false);
    setCurrentUserAnswer(undefined);
    setIsCurrentCorrect(false);
    setIsQuizComplete(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setIsFiftyFiftyUsed(false);
    setIsAITutorUsed(false);
    setIsSkipUsed(false);
    setEliminatedOptions([]);
    setTimerSeconds(timerSec);
    setIsTimerActive(enableTimer);
  };

  useEffect(() => {
    if (currentMode !== 'viva_10' && currentMode !== 'question_bank' && currentMode !== 'visual_sandbox') {
      initializeMode(currentMode, activeUnitFilter);
    }
  }, [currentMode, activeUnitFilter, initializeMode]);

  const currentQuestion = activeQuestions[currentQuestionIndex];

  // Handle Answer Submission
  const handleAnswerSubmit = useCallback((userAnswer: string | number | Record<string, string>) => {
    if (isCurrentSubmitted || !currentQuestion) return;

    let correct = false;
    if (currentQuestion.type === 'match') {
      const correctMap = currentQuestion.correctAnswer as Record<string, string>;
      const userMap = userAnswer as Record<string, string>;
      const keys = Object.keys(correctMap);
      correct = keys.length > 0 && keys.every((k) => userMap[k] === correctMap[k]);
    } else {
      correct = String(userAnswer).trim().toLowerCase() === String(currentQuestion.correctAnswer).trim().toLowerCase();
    }

    setIsCurrentSubmitted(true);
    setCurrentUserAnswer(userAnswer);
    setIsCurrentCorrect(correct);

    if (correct) {
      setStreak((prevStreak) => {
        const newStreak = prevStreak + 1;
        setMaxStreak((prevMax) => Math.max(prevMax, newStreak));
        const points = 100 + newStreak * 15;
        setScore((prevScore) => prevScore + points);
        return newStreak;
      });
    } else {
      setStreak(0);
    }

    setAnswerRecords((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        userAnswer,
        isCorrect: correct,
        timeSpentSeconds: 10,
      },
    ]);
  }, [isCurrentSubmitted, currentQuestion]);

  const handleTimeExpired = useCallback(() => {
    if (!isCurrentSubmitted && currentQuestion) {
      handleAnswerSubmit('Timed Out');
    }
  }, [isCurrentSubmitted, currentQuestion, handleAnswerSubmit]);

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsCurrentSubmitted(false);
      setCurrentUserAnswer(undefined);
      setIsCurrentCorrect(false);
      setEliminatedOptions([]);
    } else {
      setIsQuizComplete(true);
    }
  };

  // Lifeline: 50:50
  const handleUseFiftyFifty = () => {
    if (isFiftyFiftyUsed || !currentQuestion?.options || currentQuestion.options.length < 4) return;
    const incorrect = currentQuestion.options.filter((opt) => opt !== currentQuestion.correctAnswer);
    const shuffledIncorrect = shuffleArray(incorrect);
    const toEliminate = shuffledIncorrect.slice(0, 2);
    setEliminatedOptions(toEliminate);
    setIsFiftyFiftyUsed(true);
  };

  // Lifeline: Ask AI Tutor Hint
  const handleUseAITutor = () => {
    if (!currentQuestion) return;
    setAiTutorMode('hint');
    setIsAITutorModalOpen(true);
    setIsAITutorUsed(true);
  };

  // Lifeline: Skip
  const handleSkipQuestion = () => {
    if (isSkipUsed || !currentQuestion) return;
    setIsSkipUsed(true);
    setAnswerRecords((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        userAnswer: 'Skipped via Lifeline',
        isCorrect: false,
        timeSpentSeconds: 0,
        usedLifeline: true,
      },
    ]);
    handleNextQuestion();
  };

  // Deep Explanation request
  const handleAskAiExplainDeeper = () => {
    setAiTutorMode('explanation');
    setIsAITutorModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          setIsQuizComplete(false);
        }}
        onOpenVivaModal={() => setIsVivaModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 md:py-8">
        {/* Viva Modal */}
        <VivaModeModal
          isOpen={isVivaModalOpen}
          onClose={() => setIsVivaModalOpen(false)}
          onStartViva={handleStartViva}
        />

        {/* AI Tutor Discussion Modal */}
        {currentQuestion && (
          <AITutorModal
            isOpen={isAITutorModalOpen}
            onClose={() => setIsAITutorModalOpen(false)}
            question={currentQuestion}
            mode={aiTutorMode}
            userAnswer={currentUserAnswer}
          />
        )}

        {/* ================= VIEW 1: RESULTS VIEW ================= */}
        {isQuizComplete ? (
          <ResultsView
            questions={activeQuestions}
            answerRecords={answerRecords}
            onRestart={() => resetQuizRun(timerSeconds, isTimerActive)}
            studentProfile={studentProfile}
            mode={currentMode}
          />
        ) : currentMode === 'question_bank' ? (
          /* ================= VIEW 2: QUESTION BANK REPOSITORY ================= */
          <QuestionBankBrowser questions={QUESTION_BANK} />
        ) : currentMode === 'visual_sandbox' ? (
          /* ================= VIEW 3: INTERACTIVE LAB SANDBOX ================= */
          <VisualSearchSandbox />
        ) : (
          /* ================= VIEW 4: ACTIVE QUIZ / VIVA RUNNER ================= */
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Context Hero & Mode Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
              <div>
                <div className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-0.5">
                  DSC401-6 · Artificial Intelligence
                </div>
                <h1 className="text-base md:text-lg font-bold text-slate-100">
                  {currentMode === 'viva_10'
                    ? `Live Viva Session · ${studentProfile?.name || 'Student Candidate'}`
                    : currentMode === 'time_challenge'
                    ? 'Speed Attack Challenge'
                    : 'Interactive Practice Mode (Units I & II)'}
                </h1>
                <p className="text-xs text-slate-400">
                  {currentMode === 'viva_10'
                    ? '10 Random Questions sampled for classroom evaluation (Max Marks: 25)'
                    : 'Deep concept reinforcement covering all Christ University lecture slides'}
                </p>
              </div>

              {/* Unit Filter (in practice mode) */}
              {currentMode === 'practice_all' && (
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-medium">
                  {(['All', 'Unit I', 'Unit II'] as const).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setActiveUnitFilter(u)}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeUnitFilter === u
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {u === 'All' ? 'Units I & II' : u}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Score & Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-400">Score</span>
                <span className="text-base font-bold text-amber-400 font-mono tabular-nums">
                  {score} pts
                </span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-400" /> Streak
                </span>
                <span className="text-base font-bold text-orange-400 font-mono tabular-nums">
                  {streak}x
                </span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-400">Completed</span>
                <span className="text-base font-bold text-sky-400 font-mono tabular-nums">
                  {currentQuestionIndex} / {activeQuestions.length}
                </span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center justify-between">
                <span className="text-xs text-slate-400">Timer</span>
                {isTimerActive && !isCurrentSubmitted ? (
                  <Timer
                    initialSeconds={timerSeconds}
                    onTimeUp={handleTimeExpired}
                    questionKey={currentQuestion?.id || '0'}
                  />
                ) : (
                  <span className="text-xs font-mono text-slate-500">Untimed</span>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-sky-400 h-full transition-all duration-300"
                style={{
                  width: `${
                    activeQuestions.length > 0
                      ? ((currentQuestionIndex + (isCurrentSubmitted ? 1 : 0)) /
                          activeQuestions.length) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>

            {/* Lifelines Toolbar */}
            <LifelineBar
              onUseFiftyFifty={handleUseFiftyFifty}
              onAskAITutor={handleUseAITutor}
              onSkip={handleSkipQuestion}
              isFiftyFiftyUsed={isFiftyFiftyUsed}
              isAITutorUsed={isAITutorUsed}
              isSkipUsed={isSkipUsed}
              canUseFiftyFifty={Boolean(
                currentQuestion?.options && currentQuestion.options.length >= 4 && !isCurrentSubmitted
              )}
            />

            {/* Question Card */}
            {currentQuestion ? (
              <QuizCard
                question={currentQuestion}
                currentIndex={currentQuestionIndex}
                totalQuestions={activeQuestions.length}
                onAnswerSubmit={handleAnswerSubmit}
                onNextQuestion={handleNextQuestion}
                eliminatedOptions={eliminatedOptions}
                isSubmitted={isCurrentSubmitted}
                userAnswer={currentUserAnswer}
                isCorrect={isCurrentCorrect}
                onAskAiExplainDeeper={handleAskAiExplainDeeper}
              />
            ) : (
              <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800">
                <p className="text-sm text-slate-400">Loading questions...</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-800/80 py-4 px-6 text-center text-xs text-slate-500">
        <div>
          DSC401-6 Artificial Intelligence Assignment · Units I & II · Christ (Deemed to be University)
        </div>
      </footer>
    </div>
  );
}
