import React, { useState, useEffect } from 'react';
import { X, Sparkles, BookOpen, Send, Loader2 } from 'lucide-react';
import { Question } from '../types/quiz';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  mode: 'hint' | 'explanation';
  userAnswer?: string | number | Record<string, string>;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  question,
  mode,
  userAnswer,
}) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [userQuery, setUserQuery] = useState<string>('');
  const [conversation, setConversation] = useState<Array<{ role: 'ai' | 'user'; text: string }>>([]);
  const [sendingFollowUp, setSendingFollowUp] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setLoading(true);
    setContent('');
    setConversation([]);

    const fetchExplanation = async () => {
      try {
        const res = await fetch('/api/ai/explain', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: question.question,
            options: question.options,
            studentAnswer: userAnswer,
            correctAnswer: question.correctAnswer,
            mode,
            topic: question.topic,
          }),
        });

        const data = await res.json();
        if (isMounted) {
          const initialText =
            data.text ||
            (mode === 'hint'
              ? question.hint
              : `${question.explanation} (Refer to ${question.slideReference})`);
          setContent(initialText);
          setConversation([{ role: 'ai', text: initialText }]);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          const fallback =
            mode === 'hint'
              ? `Hint: ${question.hint}`
              : `${question.explanation}\nLecture Reference: ${question.slideReference}`;
          setContent(fallback);
          setConversation([{ role: 'ai', text: fallback }]);
          setLoading(false);
        }
      }
    };

    fetchExplanation();

    return () => {
      isMounted = false;
    };
  }, [isOpen, question.id, mode]);

  const handleSendFollowUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim() || sendingFollowUp) return;

    const query = userQuery.trim();
    setUserQuery('');
    setConversation((prev) => [...prev, { role: 'user', text: query }]);
    setSendingFollowUp(true);

    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: `Regarding question on "${question.topic}": ${question.question}. The student asks: "${query}"`,
          options: question.options,
          correctAnswer: question.correctAnswer,
          mode: 'explanation',
          topic: question.topic,
        }),
      });
      const data = await res.json();
      setConversation((prev) => [
        ...prev,
        { role: 'ai', text: data.text || 'Keep analyzing the state space search principles!' },
      ]);
    } catch (err) {
      setConversation((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `In this topic (${question.topic}), remember to review the course slides: ${question.slideReference}.`,
        },
      ]);
    } finally {
      setSendingFollowUp(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 text-sm">
                AI Professor Tutor Lifeline
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {question.unit} · {question.topic}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat / Content Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 text-sm">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin text-sky-400" />
              <p className="text-xs font-mono">Consulting AI Knowledge Base...</p>
            </div>
          ) : (
            conversation.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    AI
                  </div>
                )}
                <div
                  className={`p-3.5 rounded-xl max-w-[85%] text-xs md:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sky-600 text-white rounded-tr-none'
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  {msg.role === 'ai' && idx === 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-700/40 flex items-center gap-1.5 text-xs font-mono text-sky-400">
                      <BookOpen className="w-3 h-3" />
                      <span>Christ Univ Slide: {question.slideReference}</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          {sendingFollowUp && (
            <div className="flex items-center gap-2 text-xs text-slate-400 pl-8">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
              <span>AI Tutor is thinking...</span>
            </div>
          )}
        </div>

        {/* Follow-up input form */}
        <form onSubmit={handleSendFollowUp} className="p-3 border-t border-slate-800 bg-slate-900/60 flex gap-2">
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ask a clarifying question about this AI concept..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            disabled={!userQuery.trim() || sendingFollowUp}
            className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold transition-all text-xs flex items-center gap-1"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
