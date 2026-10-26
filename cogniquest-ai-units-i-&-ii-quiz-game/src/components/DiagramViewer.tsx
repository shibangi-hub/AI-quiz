import React from 'react';

interface DiagramViewerProps {
  type?: 'bfs_dfs_tree' | 'a_star_graph' | 'hill_climbing_curve' | 'csp_map' | 'mea_shapes' | 'agent_peas';
}

export const DiagramViewer: React.FC<DiagramViewerProps> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    case 'bfs_dfs_tree':
      return (
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 my-4 text-center">
          <div className="text-xs font-semibold text-sky-400 mb-2 uppercase tracking-wider">
            Lecture Search Tree Diagram (Ch-02 Part 1)
          </div>
          <svg viewBox="0 0 500 240" className="w-full max-h-60 mx-auto">
            {/* Level lines */}
            <line x1="20" y1="30" x2="480" y2="30" stroke="#334155" strokeDasharray="3 3" />
            <text x="25" y="24" fill="#64748b" fontSize="10">Level 0</text>
            <line x1="20" y1="80" x2="480" y2="80" stroke="#334155" strokeDasharray="3 3" />
            <text x="25" y="74" fill="#64748b" fontSize="10">Level 1</text>
            <line x1="20" y1="140" x2="480" y2="140" stroke="#334155" strokeDasharray="3 3" />
            <text x="25" y="134" fill="#64748b" fontSize="10">Level 2</text>
            <line x1="20" y1="200" x2="480" y2="200" stroke="#334155" strokeDasharray="3 3" />
            <text x="25" y="194" fill="#64748b" fontSize="10">Level 3 (Goal)</text>

            {/* Tree edges */}
            <line x1="250" y1="35" x2="150" y2="85" stroke="#94a3b8" strokeWidth="2" />
            <line x1="250" y1="35" x2="350" y2="85" stroke="#94a3b8" strokeWidth="2" />

            <line x1="150" y1="85" x2="100" y2="145" stroke="#94a3b8" strokeWidth="2" />
            <line x1="150" y1="85" x2="190" y2="145" stroke="#94a3b8" strokeWidth="2" />

            <line x1="350" y1="85" x2="320" y2="145" stroke="#94a3b8" strokeWidth="2" />
            <line x1="350" y1="85" x2="390" y2="145" stroke="#94a3b8" strokeWidth="2" />

            <line x1="100" y1="145" x2="70" y2="205" stroke="#94a3b8" strokeWidth="2" />
            <line x1="100" y1="145" x2="130" y2="205" stroke="#94a3b8" strokeWidth="2" />
            <line x1="190" y1="145" x2="220" y2="205" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Nodes */}
            <circle cx="250" cy="35" r="16" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
            <text x="250" y="40" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="13">S</text>

            <circle cx="150" cy="85" r="15" fill="#38bdf8" />
            <text x="150" y="90" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">A</text>

            <circle cx="350" cy="85" r="15" fill="#38bdf8" />
            <text x="350" y="90" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">H</text>

            <circle cx="100" cy="145" r="14" fill="#60a5fa" />
            <text x="100" y="150" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">B</text>

            <circle cx="190" cy="145" r="14" fill="#60a5fa" />
            <text x="190" y="150" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">C</text>

            <circle cx="320" cy="145" r="14" fill="#60a5fa" />
            <text x="320" y="150" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">I</text>

            <circle cx="390" cy="145" r="14" fill="#60a5fa" />
            <text x="390" y="150" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">J</text>

            <circle cx="70" cy="205" r="14" fill="#93c5fd" />
            <text x="70" y="210" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">D</text>

            <circle cx="130" cy="205" r="14" fill="#93c5fd" />
            <text x="130" y="210" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">E</text>

            <circle cx="220" cy="205" r="16" fill="#10b981" stroke="#34d399" strokeWidth="3" />
            <text x="220" y="210" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">G</text>
          </svg>
        </div>
      );

    case 'a_star_graph':
      return (
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 my-4 text-center">
          <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
            A* Search Evaluation Tree: f(n) = g(n) + h(n) (Ch-02 Part 2)
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-h-60 mx-auto">
            {/* Edges with cost labels */}
            <line x1="270" y1="35" x2="160" y2="100" stroke="#64748b" strokeWidth="2" />
            <text x="200" y="60" fill="#f59e0b" fontSize="11" fontWeight="bold">g=4</text>

            <line x1="270" y1="35" x2="380" y2="100" stroke="#64748b" strokeWidth="2" />
            <text x="335" y="60" fill="#f59e0b" fontSize="11" fontWeight="bold">g=10</text>

            <line x1="160" y1="100" x2="120" y2="175" stroke="#64748b" strokeWidth="2" />
            <text x="125" y="140" fill="#f59e0b" fontSize="11" fontWeight="bold">g=+5</text>

            <line x1="120" y1="175" x2="220" y2="175" stroke="#10b981" strokeWidth="2" />
            <text x="165" y="170" fill="#f59e0b" fontSize="11" fontWeight="bold">g=+1</text>

            <line x1="220" y1="175" x2="330" y2="175" stroke="#10b981" strokeWidth="2.5" />
            <text x="270" y="170" fill="#f59e0b" fontSize="11" fontWeight="bold">g=+13</text>

            {/* Nodes */}
            {/* Start Node S */}
            <circle cx="270" cy="35" r="18" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
            <text x="270" y="36" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="12">S</text>
            <text x="270" y="49" textAnchor="middle" fill="#fee2e2" fontSize="9">h=7</text>

            {/* Node A */}
            <circle cx="160" cy="100" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="160" y="101" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="12">A</text>
            <text x="160" y="114" textAnchor="middle" fill="#e0f2fe" fontSize="9">h=8</text>
            <rect x="135" y="122" width="50" height="16" rx="4" fill="#0f172a" stroke="#0284c7" />
            <text x="160" y="133" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">f = 4+8=12</text>

            {/* Node B */}
            <circle cx="380" cy="100" r="18" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="380" y="101" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="12">B</text>
            <text x="380" y="114" textAnchor="middle" fill="#f1f5f9" fontSize="9">h=6</text>
            <rect x="355" y="122" width="50" height="16" rx="4" fill="#0f172a" stroke="#64748b" />
            <text x="380" y="133" textAnchor="middle" fill="#cbd5e1" fontSize="9">f = 10+6=16</text>

            {/* Node D */}
            <circle cx="120" cy="175" r="16" fill="#0284c7" stroke="#38bdf8" />
            <text x="120" y="177" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="11">D</text>
            <text x="120" y="188" textAnchor="middle" fill="#e0f2fe" fontSize="8">h=5</text>

            {/* Node F */}
            <circle cx="220" cy="175" r="16" fill="#0284c7" stroke="#38bdf8" />
            <text x="220" y="177" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="11">F</text>
            <text x="220" y="188" textAnchor="middle" fill="#e0f2fe" fontSize="8">h=3</text>

            {/* Goal Node G */}
            <circle cx="330" cy="175" r="18" fill="#10b981" stroke="#34d399" strokeWidth="3" />
            <text x="330" y="176" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="12">G</text>
            <text x="330" y="188" textAnchor="middle" fill="#d1fae5" fontSize="8">h=0</text>
            <rect x="305" y="196" width="50" height="16" rx="4" fill="#0f172a" stroke="#10b981" />
            <text x="330" y="208" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Total = 23</text>
          </svg>
        </div>
      );

    case 'hill_climbing_curve':
      return (
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 my-4 text-center">
          <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wider">
            Hill Climbing State-Space Landscape (Ch-02 Part 2 Slide 20)
          </div>
          <svg viewBox="0 0 520 220" className="w-full max-h-60 mx-auto">
            {/* Coordinate axes */}
            <line x1="40" y1="190" x2="490" y2="190" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="40" y1="190" x2="40" y2="20" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="480" y="205" fill="#94a3b8" fontSize="11">State Space (X)</text>
            <text x="50" y="28" fill="#94a3b8" fontSize="11">Objective Function (Y)</text>

            {/* Landscape Curve */}
            <path
              d="M 45 180 Q 80 170, 95 120 L 115 120 Q 125 120, 135 70 Q 145 35, 160 40 Q 175 45, 185 100 Q 195 160, 215 170 Q 230 175, 240 120 Q 248 95, 260 100 Q 275 110, 285 160 Q 295 150, 310 140 L 335 140 Q 350 145, 365 180"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            {/* Callouts */}
            {/* Shoulder */}
            <line x1="105" y1="120" x2="70" y2="90" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="45" y="85" fill="#f59e0b" fontSize="10" fontWeight="bold">Shoulder</text>

            {/* Global Maximum */}
            <circle cx="160" cy="40" r="4" fill="#10b981" />
            <text x="160" y="28" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">Global Maximum</text>

            {/* Local Maximum */}
            <circle cx="260" cy="100" r="4" fill="#fb7185" />
            <text x="260" y="90" textAnchor="middle" fill="#fda4af" fontSize="10">Local Max</text>

            {/* Flat Local Maximum / Plateau */}
            <line x1="322" y1="140" x2="360" y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="365" y="118" fill="#fcd34d" fontSize="10">Flat Local Max / Plateau</text>

            {/* Current State */}
            <circle cx="235" cy="140" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
            <text x="235" y="160" textAnchor="middle" fill="#93c5fd" fontSize="10">Current State</text>
          </svg>
        </div>
      );

    case 'csp_map':
      return (
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 my-4 text-center">
          <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">
            Constraint Satisfaction: 3-Region Map Coloring (Ch-02 Part 2)
          </div>
          <svg viewBox="0 0 420 180" className="w-full max-h-48 mx-auto">
            {/* Regions A, B, C */}
            <polygon points="120,30 210,30 165,110" fill="#ef4444" fillOpacity="0.8" stroke="#f87171" strokeWidth="2" />
            <text x="165" y="65" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">Region A</text>
            <text x="165" y="80" textAnchor="middle" fill="#fee2e2" fontSize="10">(Red)</text>

            <polygon points="210,30 300,30 255,110" fill="#10b981" fillOpacity="0.8" stroke="#34d399" strokeWidth="2" />
            <text x="255" y="65" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">Region B</text>
            <text x="255" y="80" textAnchor="middle" fill="#d1fae5" fontSize="10">(Green)</text>

            <polygon points="165,110 255,110 210,175" fill="#3b82f6" fillOpacity="0.8" stroke="#60a5fa" strokeWidth="2" />
            <text x="210" y="138" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">Region C</text>
            <text x="210" y="152" textAnchor="middle" fill="#dbeafe" fontSize="10">(Blue)</text>

            {/* Constraint text */}
            <text x="350" y="50" fill="#94a3b8" fontSize="11" fontWeight="bold">Constraints:</text>
            <text x="350" y="70" fill="#e2e8f0" fontSize="10">A ≠ B</text>
            <text x="350" y="88" fill="#e2e8f0" fontSize="10">B ≠ C</text>
            <text x="350" y="106" fill="#e2e8f0" fontSize="10">A ≠ C</text>
          </svg>
        </div>
      );

    case 'mea_shapes':
      return (
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 my-4 text-center">
          <div className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
            Means-Ends Analysis: 3-Operator Sequence (Ch-02 Part 2 Slide 69-73)
          </div>
          <svg viewBox="0 0 540 120" className="w-full max-h-36 mx-auto">
            {/* Step 1: Initial */}
            <rect x="20" y="20" width="80" height="80" rx="8" fill="#1e293b" stroke="#475569" />
            <circle cx="60" cy="60" r="22" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="54" y="54" width="12" height="12" transform="rotate(45 60 60)" fill="#10b981" />
            <circle cx="75" cy="35" r="4" fill="#f8fafc" />
            <text x="60" y="112" textAnchor="middle" fill="#94a3b8" fontSize="10">Initial State</text>

            <line x1="105" y1="60" x2="135" y2="60" stroke="#38bdf8" strokeWidth="2" />
            <text x="120" y="52" textAnchor="middle" fill="#38bdf8" fontSize="9">1. Delete</text>

            {/* Step 2: Dot deleted */}
            <rect x="140" y="20" width="80" height="80" rx="8" fill="#1e293b" stroke="#475569" />
            <circle cx="180" cy="60" r="22" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="174" y="54" width="12" height="12" transform="rotate(45 180 60)" fill="#10b981" />
            <text x="180" y="112" textAnchor="middle" fill="#94a3b8" fontSize="10">Dot Removed</text>

            <line x1="225" y1="60" x2="255" y2="60" stroke="#38bdf8" strokeWidth="2" />
            <text x="240" y="52" textAnchor="middle" fill="#38bdf8" fontSize="9">2. Move</text>

            {/* Step 3: Diamond moved outside */}
            <rect x="260" y="20" width="80" height="80" rx="8" fill="#1e293b" stroke="#475569" />
            <circle cx="290" cy="65" r="18" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="314" y="32" width="12" height="12" transform="rotate(45 320 38)" fill="#10b981" />
            <text x="300" y="112" textAnchor="middle" fill="#94a3b8" fontSize="10">Moved Outside</text>

            <line x1="345" y1="60" x2="375" y2="60" stroke="#38bdf8" strokeWidth="2" />
            <text x="360" y="52" textAnchor="middle" fill="#38bdf8" fontSize="9">3. Expand</text>

            {/* Step 4: Goal State */}
            <rect x="380" y="20" width="80" height="80" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
            <circle cx="410" cy="65" r="18" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="425" y="25" width="22" height="22" transform="rotate(45 436 36)" fill="#10b981" />
            <text x="420" y="112" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Goal State</text>
          </svg>
        </div>
      );

    case 'agent_peas':
      return (
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 my-4 text-center">
          <div className="text-xs font-semibold text-amber-400 mb-2 uppercase tracking-wider">
            Agent-Environment Interaction Architecture (Ch-01 Part 2)
          </div>
          <svg viewBox="0 0 480 140" className="w-full max-h-36 mx-auto">
            {/* Environment Box */}
            <rect x="20" y="25" width="130" height="90" rx="12" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
            <text x="85" y="65" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">Environment</text>
            <text x="85" y="82" textAnchor="middle" fill="#94a3b8" fontSize="10">(Physical / Virtual)</text>

            {/* Percepts arrow */}
            <path d="M 150 45 Q 240 20, 310 45" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="235" y="28" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Percepts (Sensors)</text>

            {/* Agent Box */}
            <rect x="310" y="25" width="140" height="90" rx="12" fill="#0f766e" stroke="#14b8a6" strokeWidth="2" />
            <text x="380" y="55" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">Intelligent Agent</text>
            <text x="380" y="73" textAnchor="middle" fill="#ccfbf1" fontSize="10">Internal State & Logic</text>
            <text x="380" y="90" textAnchor="middle" fill="#99f6e4" fontSize="9">Max Performance (P)</text>

            {/* Actions arrow */}
            <path d="M 310 95 Q 240 120, 150 95" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="235" y="125" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Actions (Actuators)</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
