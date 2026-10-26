import React, { useState } from 'react';
import { X, GraduationCap, Award, CheckCircle2, Play } from 'lucide-react';
import { StudentProfile } from '../types/quiz';

interface VivaModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartViva: (profile: StudentProfile, timePerQuestion: number) => void;
}

export const VivaModeModal: React.FC<VivaModeModalProps> = ({
  isOpen,
  onClose,
  onStartViva,
}) => {
  const [name, setName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [classSection, setClassSection] = useState('DSC401 - Artificial Intelligence');
  const [timePerQuestion, setTimePerQuestion] = useState(45);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onStartViva(
      {
        name: name.trim(),
        registerNumber: registerNumber.trim() || 'REG-PENDING',
        classSection,
      },
      timePerQuestion
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-base">
                Classroom Viva Examination Mode
              </h3>
              <p className="text-xs text-slate-400">
                DSC401-6 Units I & II · 25 Maximum Marks
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/60 text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-amber-300">
              <Award className="w-4 h-4" />
              <span>Assignment Viva Protocol:</span>
            </div>
            <p>
              • 10 questions will be drawn completely at random from Units I & II.
            </p>
            <p>
              • Covers agents, uninformed/informed search, CSP, and MEA.
            </p>
            <p>
              • Generates an official downloadable assessment transcript for submission.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shibangi Chowdhury"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Register / Roll Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2441460"
                  value={registerNumber}
                  onChange={(e) => setRegisterNumber(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Course Code & Name
                </label>
                <input
                  type="text"
                  value={classSection}
                  onChange={(e) => setClassSection(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Timer per Viva Question
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '30 Seconds', val: 30 },
                  { label: '45 Seconds', val: 45 },
                  { label: '60 Seconds', val: 60 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setTimePerQuestion(item.val)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      timePerQuestion === item.val
                        ? 'bg-sky-500/20 border-sky-500 text-sky-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <Play className="w-4 h-4" />
              <span>Begin 10-Question Viva</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
