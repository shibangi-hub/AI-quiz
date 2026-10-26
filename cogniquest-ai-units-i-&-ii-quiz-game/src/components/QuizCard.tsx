import React, { useState, useEffect } from 'react';
import { Question } from '../types/quiz';
import { DiagramViewer } from './DiagramViewer';
import { CheckCircle2, XCircle, BookOpen, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswerSubmit: (answer: string | number | Record<string, string>) => void;
  onNextQuestion: () => void;
  eliminatedOptions?: string[];
  isSubmitted: boolean;
  userAnswer?: string | number | Record<string, string>;
  isCorrect?: boolean;
  onAskAiExplainDeeper: () => void;
  aiExplanationLoading?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswerSubmit,
  onNextQuestion,
  eliminatedOptions = [],
  isSubmitted,
  userAnswer,
  isCorrect,
  onAskAiExplainDeeper,
  aiExplanationLoading = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [matchSelections, setMatchSelections] = useState<Record<string, string>>({});

  useEffect(() => {
    setSelectedOption('');
    setMatchSelections({});
  }, [question.id]);

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleMatchSelect = (leftId: string, rightVal: string) => {
    if (isSubmitted) return;
    setMatchSelections((prev) => ({
      ...prev,
      [leftId]: rightVal,
    }));
  };

  const handleSubmit = () => {
    if (question.type === 'match') {
      if (Object.keys(matchSelections).length === (question.matchPairs?.length || 0)) {
        onAnswerSubmit(matchSelections);
      }
    } else {
      if (selectedOption) {
        onAnswerSubmit(selectedOption);
      }
    }
  };

  const isOptionEliminated = (opt: string) => eliminatedOptions.includes(opt);

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl backdrop-blur-sm">
      {/* Top Metadata Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-sky-400 font-medium">{question.unit}</span>
          <span aria-hidden="true">·</span>
          <span>{question.topic}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span
            className={`font-medium ${
              question.difficulty === 'Easy'
                ? 'text-emerald-400'
                : question.difficulty === 'Medium'
                ? 'text-amber-400'
                : 'text-rose-400'
            }`}
          >
            {question.difficulty}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-500">{question.type.replace('_', ' ').toUpperCase()}</span>
        </div>
      </div>

      {/* Scenario Callout if present */}
      {question.scenarioContext && (
        <div className="mb-4 p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/60 text-sm text-slate-300">
          <span className="font-semibold text-amber-300 block mb-1">Real-World Case / Scenario:</span>
          {question.scenarioContext}
        </div>
      )}

      {/* Question Text */}
      <h2 className="text-lg md:text-xl font-semibold text-slate-100 mb-4 leading-relaxed whitespace-pre-line">
        {question.question}
      </h2>

      {/* Diagram Viewer if applicable */}
      {question.diagramSvg && <DiagramViewer type={question.diagramSvg} />}

      {/* Answer Formats */}
      <div className="my-6">
        {/* Match The Following Format */}
        {question.type === 'match' && question.matchPairs && (
          <div className="space-y-3">
            <p className="text-xs text-slate-400 mb-2">
              Select the corresponding description for each item on the left:
            </p>
            {question.matchPairs.map((pair) => (
              <div
                key={pair.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 bg-slate-800/40 rounded-xl border border-slate-800 items-center"
              >
                <div className="font-medium text-slate-200 text-sm">{pair.left}</div>
                <div>
                  <select
                    disabled={isSubmitted}
                    value={matchSelections[pair.id] || ''}
                    onChange={(e) => handleMatchSelect(pair.id, e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="">-- Match with target --</option>
                    {question.matchPairs?.map((p) => {
                      const rightKey = p.right.split(':')[0];
                      return (
                        <option key={p.id} value={rightKey}>
                          {p.right}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Standard Options (MCQ, True/False, Fill Blank, Scenario, Problem Solving) */}
        {question.type !== 'match' && question.options && (
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, idx) => {
              const isEliminated = isOptionEliminated(option);
              const isSelected = selectedOption === option;
              const isOptionCorrect = option === question.correctAnswer;
              const wasUserChoice = userAnswer === option;

              let buttonStyle =
                'bg-slate-800/40 hover:bg-slate-800 text-slate-200 border-slate-700/60';

              if (isSelected && !isSubmitted) {
                buttonStyle = 'bg-sky-950/60 text-sky-200 border-sky-500 shadow-sm';
              }

              if (isSubmitted) {
                if (isOptionCorrect) {
                  buttonStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-200';
                } else if (wasUserChoice && !isCorrect) {
                  buttonStyle = 'bg-rose-950/70 border-rose-500 text-rose-200';
                } else {
                  buttonStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              if (isEliminated && !isSubmitted) {
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-800/50 bg-slate-900/20 text-slate-600 line-through text-sm flex items-center justify-between"
                  >
                    <span>{option}</span>
                    <span className="text-xs font-mono text-slate-600 no-underline">[50:50 Eliminated]</span>
                  </div>
                );
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isSubmitted || isEliminated}
                  onClick={() => handleSelectOption(option)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-start gap-3 cursor-pointer ${buttonStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs shrink-0 font-semibold ${
                      isSelected && !isSubmitted
                        ? 'bg-sky-500 text-white'
                        : isSubmitted && isOptionCorrect
                        ? 'bg-emerald-500 text-white'
                        : isSubmitted && wasUserChoice && !isCorrect
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-700/60 text-slate-300'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-snug">{option}</span>
                  {isSubmitted && isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isSubmitted && wasUserChoice && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Action / Submit Buttons */}
      {!isSubmitted ? (
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={
              question.type === 'match'
                ? Object.keys(matchSelections).length !== (question.matchPairs?.length || 0)
                : !selectedOption
            }
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              (question.type === 'match' &&
                Object.keys(matchSelections).length === (question.matchPairs?.length || 0)) ||
              (question.type !== 'match' && selectedOption)
                ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-800'
            }`}
          >
            <span>Lock & Submit Answer</span>
          </button>
        </div>
      ) : (
        /* Feedback Box & In-Depth Lecture Citation */
        <div className="mt-6 pt-5 border-t border-slate-800 space-y-4 animate-in fade-in duration-300">
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              isCorrect
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-sm">
              <div className="font-bold mb-1">
                {isCorrect ? 'Correct! Excellent recall.' : 'Incorrect.'}
              </div>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-2">
                {question.explanation}
              </p>
              <div className="flex items-center gap-2 text-xs text-sky-400 font-mono mt-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Reference: {question.slideReference}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onAskAiExplainDeeper}
              disabled={aiExplanationLoading}
              className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{aiExplanationLoading ? 'Consulting AI Tutor...' : 'AI Tutor Explanation'}</span>
            </button>

            <button
              type="button"
              onClick={onNextQuestion}
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all ml-auto"
            >
              <span>{currentIndex + 1 === totalQuestions ? 'Finish & View Score' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
