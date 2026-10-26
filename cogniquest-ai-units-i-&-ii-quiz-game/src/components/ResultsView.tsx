import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, Printer, Share2, Sparkles, BookOpen, Clock } from 'lucide-react';
import { Question, UserAnswerRecord, StudentProfile } from '../types/quiz';

interface ResultsViewProps {
  questions: Question[];
  answerRecords: UserAnswerRecord[];
  onRestart: () => void;
  studentProfile?: StudentProfile;
  mode: string;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  questions,
  answerRecords,
  onRestart,
  studentProfile,
  mode,
}) => {
  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState<boolean>(true);

  const correctCount = answerRecords.filter((r) => r.isCorrect).length;
  const totalCount = questions.length;
  const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  // Maximum Marks is 25 as per Christ University assignment
  const marksOutOf25 = ((correctCount / (totalCount || 1)) * 25).toFixed(1);

  // Trigger celebration confetti
  useEffect(() => {
    if (percentage >= 60) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [percentage]);

  // Request external AI Examiner remark
  useEffect(() => {
    let isMounted = true;
    const fetchFeedback = async () => {
      try {
        const res = await fetch('/api/ai/viva-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentName: studentProfile?.name || 'Candidate',
            score: correctCount,
            total: totalCount,
            answeredQuestions: questions.map((q, i) => ({
              topic: q.topic,
              unit: q.unit,
              isCorrect: answerRecords[i]?.isCorrect,
            })),
          }),
        });
        const data = await res.json();
        if (isMounted) {
          setAiFeedback(data.feedback || 'Excellent performance demonstrated.');
          setLoadingAi(false);
        }
      } catch (err) {
        if (isMounted) {
          setAiFeedback(
            `Solid effort! You scored ${marksOutOf25}/25 marks. Be prepared to explain search state trees and the 4 agent types during the classroom demonstration.`
          );
          setLoadingAi(false);
        }
      }
    };

    fetchFeedback();
    return () => {
      isMounted = false;
    };
  }, [correctCount, totalCount, marksOutOf25, studentProfile?.name]);

  const totalTimeSpent = answerRecords.reduce((acc, r) => acc + (r.timeSpentSeconds || 0), 0);
  const avgTime = totalCount > 0 ? (totalTimeSpent / totalCount).toFixed(1) : '0';

  // Unit breakdown
  const unit1Questions = questions.filter((q) => q.unit === 'Unit I');
  const unit2Questions = questions.filter((q) => q.unit === 'Unit II');

  const unit1Correct = questions.reduce(
    (acc, q, idx) => (q.unit === 'Unit I' && answerRecords[idx]?.isCorrect ? acc + 1 : acc),
    0
  );
  const unit2Correct = questions.reduce(
    (acc, q, idx) => (q.unit === 'Unit II' && answerRecords[idx]?.isCorrect ? acc + 1 : acc),
    0
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Printable Assessment Header / Official Report Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden print:border-none print:shadow-none print:p-2">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-1">
              CHRIST (Deemed to be University) · Department of Computer Science
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-100">
              DSC401-6: Artificial Intelligence · Viva & Quiz Assessment
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Candidate: <span className="text-slate-200 font-medium">{studentProfile?.name || 'Candidate Student'}</span>
              {studentProfile?.registerNumber && ` (Reg No: ${studentProfile.registerNumber})`} ·{' '}
              {studentProfile?.classSection || 'Unit I & II Examination'}
            </p>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Viva Sheet</span>
            </button>
            <button
              type="button"
              onClick={onRestart}
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Assessment</span>
            </button>
          </div>
        </div>

        {/* Score Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1">Assessment Marks</div>
            <div className="text-2xl md:text-3xl font-extrabold text-amber-400 font-mono">
              {marksOutOf25} <span className="text-sm font-normal text-slate-400">/ 25</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Official Rubric Score</div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1">Accuracy</div>
            <div className="text-2xl md:text-3xl font-extrabold text-sky-400 font-mono">
              {percentage}%
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              {correctCount} of {totalCount} Correct
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1">Unit I Grasp</div>
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-mono">
              {unit1Questions.length > 0
                ? `${Math.round((unit1Correct / unit1Questions.length) * 100)}%`
                : 'N/A'}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Foundations & Agents ({unit1Correct}/{unit1Questions.length})
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1">Unit II Grasp</div>
            <div className="text-2xl md:text-3xl font-extrabold text-purple-400 font-mono">
              {unit2Questions.length > 0
                ? `${Math.round((unit2Correct / unit2Questions.length) * 100)}%`
                : 'N/A'}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Search, CSP & MEA ({unit2Correct}/{unit2Questions.length})
            </div>
          </div>
        </div>

        {/* AI Examiner Evaluation Remark */}
        <div className="p-4 bg-sky-950/30 rounded-xl border border-sky-500/30 text-xs md:text-sm text-slate-200">
          <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>AI Examiner Viva Feedback & Classroom Demo Readiness:</span>
          </div>
          {loadingAi ? (
            <p className="text-slate-400 italic">Generating formal viva critique...</p>
          ) : (
            <p className="whitespace-pre-line leading-relaxed text-slate-300">
              {aiFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-200 px-1">
          Detailed Question-by-Question Transcript ({questions.length} Items)
        </h2>

        {questions.map((q, idx) => {
          const record = answerRecords[idx];
          const isCorrect = record?.isCorrect ?? false;
          const userAnsStr =
            typeof record?.userAnswer === 'object'
              ? JSON.stringify(record.userAnswer)
              : String(record?.userAnswer || 'Not Answered');
          const correctAnsStr =
            typeof q.correctAnswer === 'object'
              ? 'Complete constraint / pair matching satisfied'
              : String(q.correctAnswer);

          return (
            <div
              key={q.id}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 text-xs md:text-sm space-y-2.5"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200">Q{idx + 1}.</span>
                  <span className="text-sky-400 font-medium">{q.unit}</span>
                  <span aria-hidden="true">·</span>
                  <span>{q.topic}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  {isCorrect ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect
                    </span>
                  )}
                </div>
              </div>

              <div className="font-semibold text-slate-100">{q.question}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div
                  className={`p-2.5 rounded-lg border ${
                    isCorrect
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                  }`}
                >
                  <span className="font-bold block text-[11px] mb-0.5">Your Response:</span>
                  {userAnsStr}
                </div>

                <div className="p-2.5 rounded-lg border bg-slate-950/40 border-slate-800 text-slate-300">
                  <span className="font-bold block text-[11px] text-emerald-400 mb-0.5">
                    Correct Course Answer:
                  </span>
                  {correctAnsStr}
                </div>
              </div>

              <div className="p-2.5 bg-slate-800/40 rounded-lg text-xs text-slate-300 border border-slate-800">
                <span className="font-bold text-slate-200">Explanation: </span>
                {q.explanation}
                <div className="mt-1 text-sky-400 font-mono text-[11px] flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  <span>Syllabus Reference: {q.slideReference}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
