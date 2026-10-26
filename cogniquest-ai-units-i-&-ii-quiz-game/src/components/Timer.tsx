import React, { useEffect, useState, useRef } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialSeconds: number;
  onTimeUp: () => void;
  isPaused?: boolean;
  questionKey: string; // changes when question changes to reset timer if per-question
}

export const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  onTimeUp,
  isPaused = false,
  questionKey,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;
  const hasTriggeredRef = useRef<boolean>(false);

  // Reset timer and trigger guard whenever questionKey or initialSeconds changes
  useEffect(() => {
    setSecondsLeft(initialSeconds);
    hasTriggeredRef.current = false;
  }, [initialSeconds, questionKey]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, questionKey]);

  // Safely trigger timeout callback in an effect (outside of render & state updater)
  useEffect(() => {
    if (secondsLeft === 0 && !isPaused && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      onTimeUpRef.current();
    }
  }, [secondsLeft, isPaused]);

  const percentage = Math.max(0, Math.min(100, (secondsLeft / (initialSeconds || 1)) * 100));
  const isUrgent = secondsLeft <= 10;

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSeconds = secondsLeft % 60;
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-colors ${
        isUrgent
          ? 'bg-rose-950/40 border-rose-500/50 text-rose-400 animate-pulse'
          : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-rose-400' : 'text-sky-400'}`} />
      <span className="tabular-nums">{formattedTime}</span>
      <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
        <div
          className={`h-full transition-all duration-1000 ${
            isUrgent ? 'bg-rose-500' : 'bg-sky-400'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
