import React from 'react';
import { Sparkles, HelpCircle, FastForward } from 'lucide-react';

interface LifelineBarProps {
  onUseFiftyFifty: () => void;
  onAskAITutor: () => void;
  onSkip: () => void;
  isFiftyFiftyUsed: boolean;
  isAITutorUsed: boolean;
  isSkipUsed: boolean;
  canUseFiftyFifty: boolean;
}

export const LifelineBar: React.FC<LifelineBarProps> = ({
  onUseFiftyFifty,
  onAskAITutor,
  onSkip,
  isFiftyFiftyUsed,
  isAITutorUsed,
  isSkipUsed,
  canUseFiftyFifty,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
      <div className="text-xs font-medium text-slate-400">
        Available Lifelines:
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onUseFiftyFifty}
          disabled={isFiftyFiftyUsed || !canUseFiftyFifty}
          title={
            !canUseFiftyFifty
              ? '50:50 only applies to 4-option MCQs'
              : isFiftyFiftyUsed
              ? '50:50 already used'
              : 'Eliminate two wrong choices'
          }
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isFiftyFiftyUsed || !canUseFiftyFifty
              ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-800'
              : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>50:50 {isFiftyFiftyUsed ? '(Used)' : ''}</span>
        </button>

        <button
          type="button"
          onClick={onAskAITutor}
          disabled={isAITutorUsed}
          title={isAITutorUsed ? 'AI Hint already used' : 'Ask AI Tutor for conceptual hint'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isAITutorUsed
              ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-800'
              : 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Tutor Hint {isAITutorUsed ? '(Used)' : ''}</span>
        </button>

        <button
          type="button"
          onClick={onSkip}
          disabled={isSkipUsed}
          title={isSkipUsed ? 'Skip already used' : 'Skip this question'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isSkipUsed
              ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-800'
              : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30'
          }`}
        >
          <FastForward className="w-3.5 h-3.5" />
          <span>Skip {isSkipUsed ? '(Used)' : ''}</span>
        </button>
      </div>
    </div>
  );
};
