import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, CheckCircle, Eye, EyeOff, Printer, FileText } from 'lucide-react';
import { Question, QuestionType, Unit } from '../types/quiz';
import { TOPIC_LIST } from '../data/questionBank';
import { DiagramViewer } from './DiagramViewer';

interface QuestionBankBrowserProps {
  questions: Question[];
}

export const QuestionBankBrowser: React.FC<QuestionBankBrowserProps> = ({ questions }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch =
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.explanation.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesUnit = selectedUnit === 'all' || q.unit === selectedUnit;
      const matchesTopic = selectedTopic === 'All Topics' || q.topic === selectedTopic;
      const matchesType = selectedType === 'all' || q.type === selectedType;

      return matchesSearch && matchesUnit && matchesTopic && matchesType;
    });
  }, [questions, searchQuery, selectedUnit, selectedTopic, selectedType]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handlePrint = () => {
    setShowAllAnswers(true);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
              Course Syllabus Question Repository
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-100">
              Units I & II Complete Question Bank ({questions.length} Items)
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Curated for DSC401-6 Assignment submission, viva demonstration, and review.
            </p>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              type="button"
              onClick={() => setShowAllAnswers(!showAllAnswers)}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              {showAllAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAllAnswers ? 'Hide Answers' : 'Reveal All Answers'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export Printable Bank</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 print:hidden">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search keyword or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="all">All Units (Unit I & II)</option>
            <option value="Unit I">Unit I: Foundations & Agents</option>
            <option value="Unit II">Unit II: Search, CSP & MEA</option>
          </select>

          {/* Topic Filter */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            {TOPIC_LIST.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Format Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="all">All Formats</option>
            <option value="mcq">Multiple Choice (MCQ)</option>
            <option value="true_false">True / False</option>
            <option value="assertion_reason">Assertion – Reason</option>
            <option value="fill_blank">Fill in the Blanks</option>
            <option value="match">Match the Following</option>
            <option value="scenario">Real-World Scenario</option>
            <option value="problem_solving">Problem-Solving / Heuristic</option>
          </select>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80">
          <span>Showing {filteredQuestions.length} of {questions.length} questions</span>
          <span className="font-mono text-slate-500">DSC401-6 Reference Bank</span>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const isRevealed = showAllAnswers || expandedIds.has(q.id);

          return (
            <div
              key={q.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 text-sm space-y-3 transition-colors hover:border-slate-700/80"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-200">Item #{idx + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-sky-400 font-medium">{q.unit}</span>
                  <span aria-hidden="true">·</span>
                  <span>{q.topic}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-500 text-[11px]">
                    {q.type.replace('_', ' ').toUpperCase()}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleExpand(q.id)}
                    className="text-xs text-sky-400 hover:underline print:hidden"
                  >
                    {isRevealed ? 'Hide Solution' : 'View Solution'}
                  </button>
                </div>
              </div>

              {q.scenarioContext && (
                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 text-xs text-slate-300">
                  <span className="font-semibold text-amber-300">Case Context: </span>
                  {q.scenarioContext}
                </div>
              )}

              <p className="font-medium text-slate-100 whitespace-pre-line leading-relaxed">
                {q.question}
              </p>

              {q.diagramSvg && <DiagramViewer type={q.diagramSvg} />}

              {/* Options display */}
              {q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, oIdx) => {
                    const isCorrect = opt === q.correctAnswer;
                    return (
                      <div
                        key={oIdx}
                        className={`p-2.5 rounded-lg border ${
                          isRevealed && isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-semibold'
                            : 'bg-slate-950/50 border-slate-800/80 text-slate-300'
                        }`}
                      >
                        <span className="font-mono mr-1.5 text-slate-500">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Match Pairs display */}
              {q.matchPairs && (
                <div className="space-y-1.5 text-xs">
                  {q.matchPairs.map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-slate-950/40 border border-slate-800/80 gap-1"
                    >
                      <span className="font-medium text-slate-200">{p.left}</span>
                      <span className="text-sky-400 font-mono">{p.right}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Solution & Explanation */}
              {isRevealed && (
                <div className="pt-3 border-t border-slate-800/80 bg-slate-950/40 p-3 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>
                      Correct Answer:{' '}
                      {typeof q.correctAnswer === 'object'
                        ? 'All matching pairs verified'
                        : String(q.correctAnswer)}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                  <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px] pt-1">
                    <BookOpen className="w-3 h-3" />
                    <span>Christ University Reference: {q.slideReference}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
