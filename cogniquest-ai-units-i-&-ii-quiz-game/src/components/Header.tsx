import React from 'react';
import { QuizMode } from '../types/quiz';

interface HeaderProps {
  currentMode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  onOpenVivaModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenVivaModal,
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      {/* Zone 1: Brand Wordmark */}
      <div
        onClick={() => onSelectMode('practice_all')}
        className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
      >
        <div className="w-7 h-7 rounded-lg bg-sky-500 text-slate-950 font-extrabold flex items-center justify-center text-sm shadow-md shadow-sky-500/20">
          AI
        </div>
        <span>CogniQuest AI</span>
      </div>

      {/* Zone 2: 4–5 single-line clean navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <button
          type="button"
          onClick={onOpenVivaModal}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 text-left ${
            currentMode === 'viva_10' ? 'text-sky-400 font-semibold' : ''
          }`}
        >
          Viva Exam
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('practice_all')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 text-left ${
            currentMode === 'practice_all' ? 'text-sky-400 font-semibold' : ''
          }`}
        >
          Practice Bank
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('time_challenge')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 text-left ${
            currentMode === 'time_challenge' ? 'text-sky-400 font-semibold' : ''
          }`}
        >
          Speed Attack
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('visual_sandbox')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 text-left ${
            currentMode === 'visual_sandbox' ? 'text-sky-400 font-semibold' : ''
          }`}
        >
          Lab Sandbox
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('question_bank')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 text-left ${
            currentMode === 'question_bank' ? 'text-sky-400 font-semibold' : ''
          }`}
        >
          Repository
        </button>
      </nav>

      {/* Zone 3: 1 Primary Action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={onOpenVivaModal}
          className="px-4 py-2 text-xs font-bold text-slate-950 bg-sky-400 rounded-lg hover:bg-sky-300 transition-colors whitespace-nowrap shrink-0 shadow-md shadow-sky-500/20"
        >
          Start 10-Q Viva (25M)
        </button>
      </div>
    </header>
  );
};
