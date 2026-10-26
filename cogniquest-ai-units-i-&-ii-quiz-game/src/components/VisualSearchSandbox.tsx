import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, Check, AlertTriangle, Layers, Compass, BrainCircuit } from 'lucide-react';

export const VisualSearchSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'a_star' | 'bfs_dfs' | 'csp_map' | 'hill_climbing' | 'mea'>('a_star');

  // A* Step State
  const [aStarStep, setAStarStep] = useState<number>(0);
  const aStarSteps = [
    {
      title: 'Step 1: Initialization',
      open: ['S [f=7, g=0, h=7]'],
      closed: [],
      current: 'S',
      action: 'Insert start node S into OPEN list with g(S)=0, h(S)=7.',
    },
    {
      title: 'Step 2: Expand S',
      open: ['A [f=12, g=4, h=8]', 'B [f=16, g=10, h=6]', 'C [f=16, g=11, h=5]'],
      closed: ['S'],
      current: 'S',
      action: 'Remove S from OPEN, put in CLOSED. Evaluate successors A, B, C.',
    },
    {
      title: 'Step 3: Explore Most Promising Node A',
      open: ['D [f=14, g=9, h=5]', 'B [f=16, g=10, h=6]', 'C [f=16, g=11, h=5]', 'B_alt [f=18, g=12, h=6]'],
      closed: ['S', 'A'],
      current: 'A',
      action: 'Node A has lowest f(A)=12. Remove A, put in CLOSED. Generate child D (g=4+5=9, h=5 -> f=14).',
    },
    {
      title: 'Step 4: Explore Node D',
      open: ['F [f=13, g=10, h=3]', 'B [f=16, g=10, h=6]', 'C [f=16, g=11, h=5]', 'H [f=32, g=25, h=7]'],
      closed: ['S', 'A', 'D'],
      current: 'D',
      action: 'Node D has lowest f(D)=14. Remove D, put in CLOSED. Successor F has g=9+1=10, h=3 -> f(F)=13.',
    },
    {
      title: 'Step 5: Explore Node F',
      open: ['B [f=16, g=10, h=6]', 'C [f=16, g=11, h=5]', 'G [f=23, g=23, h=0]'],
      closed: ['S', 'A', 'D', 'F'],
      current: 'F',
      action: 'Node F has lowest f(F)=13. Remove F. Goal node G generated with g=10+13=23, h=0 -> f(G)=23.',
    },
    {
      title: 'Step 6: Goal Reached & Optimal Path Reconstructed',
      open: ['B [f=16]', 'C [f=16]'],
      closed: ['S', 'A', 'D', 'F', 'G'],
      current: 'G',
      action: 'When G is removed from OPEN, optimal path is guaranteed: S -> A -> D -> F -> G with total cost = 23.',
    },
  ];

  // CSP Map Coloring State
  const [mapColors, setMapColors] = useState<{ A: string; B: string; C: string }>({
    A: '',
    B: '',
    C: '',
  });

  const isABConflict = mapColors.A && mapColors.B && mapColors.A === mapColors.B;
  const isBCConflict = mapColors.B && mapColors.C && mapColors.B === mapColors.C;
  const isACConflict = mapColors.A && mapColors.C && mapColors.A === mapColors.C;
  const hasConflict = isABConflict || isBCConflict || isACConflict;
  const isComplete = Boolean(mapColors.A && mapColors.B && mapColors.C);
  const isValidSolution = isComplete && !hasConflict;

  // MEA Interactive State
  const [meaStep, setMeaStep] = useState<number>(0);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Sandbox Navigation */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
              Interactive AI Laboratory & Demonstration
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-100">
              Units I & II Visual Algorithm Sandbox
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Live visualizers for classroom demonstration of Search, Heuristics, CSP, and MEA.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('a_star')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'a_star'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              A* Algorithm
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('csp_map')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'csp_map'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              CSP Map Coloring
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('hill_climbing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'hill_climbing'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Hill Climbing Regions
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mea')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'mea'
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Means-Ends Analysis
            </button>
          </div>
        </div>

        {/* ================= A* SEARCH TAB ================= */}
        {activeTab === 'a_star' && (
          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  {aStarSteps[aStarStep].title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Formula: <span className="font-mono text-sky-400">f(n) = g(n) + h(n)</span> (Ch-02 Part 2 Slides 29-39)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAStarStep(0)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
                <button
                  type="button"
                  disabled={aStarStep >= aStarSteps.length - 1}
                  onClick={() => setAStarStep((prev) => Math.min(aStarSteps.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <span>Step Forward</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/30 text-xs text-sky-200">
              <span className="font-bold text-sky-400">Action: </span>
              {aStarSteps[aStarStep].action}
            </div>

            {/* Live Data Structures View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* OPEN Priority Queue */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> OPEN List (Priority Queue - Min f(n))
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {aStarSteps[aStarStep].open.length} candidates
                  </span>
                </div>
                <div className="space-y-1.5 min-h-24">
                  {aStarSteps[aStarStep].open.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg text-xs font-mono flex items-center justify-between ${
                        idx === 0
                          ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold'
                          : 'bg-slate-900 border border-slate-800 text-slate-300'
                      }`}
                    >
                      <span>{item}</span>
                      {idx === 0 && <span className="text-[10px] text-amber-400">[Top: Lowest f]</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* CLOSED List */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> CLOSED List (Already Evaluated)
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {aStarSteps[aStarStep].closed.length} nodes
                  </span>
                </div>
                <div className="space-y-1.5 min-h-24">
                  {aStarSteps[aStarStep].closed.length === 0 ? (
                    <div className="text-xs text-slate-600 italic p-2">Empty list (No nodes evaluated yet)</div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {aStarSteps[aStarStep].closed.map((node, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold"
                        >
                          Node {node}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CSP MAP COLORING TAB ================= */}
        {activeTab === 'csp_map' && (
          <div className="mt-6 space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  Interactive Constraint Satisfaction: 3-Region Map Coloring
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Variables: A, B, C · Domain: {'{Red, Green, Blue}'} · Constraints: A ≠ B, B ≠ C, A ≠ C
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMapColors({ A: '', B: '', C: '' })}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Assignment</span>
              </button>
            </div>

            {/* Validation Banner */}
            {hasConflict ? (
              <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  <strong>Constraint Conflict Detected!</strong> Adjacent regions share the same color. Backtracking required.
                </span>
              </div>
            ) : isValidSolution ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Consistent & Complete Assignment!</strong> Every variable has a valid domain value satisfying all pairwise constraints.
                </span>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700 text-slate-300 text-xs">
                Select colors for all three adjacent regions to find a consistent assignment.
              </div>
            )}

            {/* Region Color Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(['A', 'B', 'C'] as const).map((region) => (
                <div key={region} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="text-sm font-bold text-slate-200 mb-2">Region {region}</div>
                  <div className="flex gap-2">
                    {[
                      { name: 'Red', bg: 'bg-rose-500', border: 'border-rose-400' },
                      { name: 'Green', bg: 'bg-emerald-500', border: 'border-emerald-400' },
                      { name: 'Blue', bg: 'bg-sky-500', border: 'border-sky-400' },
                    ].map((col) => (
                      <button
                        key={col.name}
                        type="button"
                        onClick={() => setMapColors((prev) => ({ ...prev, [region]: col.name }))}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                          mapColors[region] === col.name
                            ? `${col.bg} text-slate-950 shadow-md ${col.border}`
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {col.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= HILL CLIMBING TAB ================= */}
        {activeTab === 'hill_climbing' && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-100">
                Topography of Hill Climbing State Space
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Ch-02 Part 2 Slide 20-23: Why greedy local search can get trapped before finding the global maximum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">Local Maximum:</span>
                A state with higher objective value than all its immediate neighbors, but not the global best. Standard hill climbing terminates here.
              </div>
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">Global Maximum:</span>
                The absolute highest peak in the state space where the objective function reaches maximum.
              </div>
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1">Shoulder:</span>
                A flat plateau with an uphill edge allowing continued progress if the algorithm searches across the plateau.
              </div>
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">Ridge:</span>
                A narrow higher strip with slopes on both sides that appears like a peak from certain angles, causing premature failure.
              </div>
            </div>
          </div>
        )}

        {/* ================= MEANS-ENDS ANALYSIS TAB ================= */}
        {activeTab === 'mea' && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  Means-Ends Analysis (GPS 1961) Difference Elimination
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ch-02 Part 2 Slides 50-73: Newell & Simon General Problem Solver
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMeaStep(0)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
                <button
                  type="button"
                  disabled={meaStep >= 3}
                  onClick={() => setMeaStep((prev) => Math.min(3, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-bold text-xs flex items-center gap-1"
                >
                  <span>Apply Operator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-sky-400">Current MEA State:</div>
              {meaStep === 0 && (
                <p className="text-slate-300">
                  <strong>Initial State:</strong> Small diamond inside circle, black dot outside.
                  <br />
                  <span className="text-amber-400">Difference Detected:</span> Extra black dot present that is absent in goal state.
                </p>
              )}
              {meaStep === 1 && (
                <p className="text-slate-300">
                  <strong>Operator 1 Applied (Delete):</strong> Black dot has been deleted.
                  <br />
                  <span className="text-amber-400">Difference Detected:</span> Diamond is currently inside circle, whereas goal requires it outside.
                </p>
              )}
              {meaStep === 2 && (
                <p className="text-slate-300">
                  <strong>Operator 2 Applied (Move):</strong> Diamond has been moved outside the circle.
                  <br />
                  <span className="text-amber-400">Difference Detected:</span> Diamond size is small, whereas goal requires expanded size.
                </p>
              )}
              {meaStep === 3 && (
                <p className="text-emerald-300 font-bold">
                  <strong>Operator 3 Applied (Expand):</strong> Diamond resized to match goal state.
                  <br />
                  Zero differences remaining between CURRENT and GOAL. MEA reports SUCCESS!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
