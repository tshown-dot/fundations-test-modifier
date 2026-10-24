import React, { useState } from 'react';
import { level2Units } from './data/level2Units';
import { level1Units } from './data/level1Units';
import { ModificationLevel, ModificationSettings } from './types/fundations';
import { FundationsTestSheet } from './components/FundationsTestSheet';
import { Printer, Settings2, Sparkles, BookOpen, User, CheckCircle2 } from 'lucide-react';

const LEVEL_1_PRESET: ModificationSettings = {
  level: 'level1',
  soundBlanksCount: true,
  soundShowCommas: true,
  wordTapBlanks: true,
  wordWiderDigraphSuffix: true,
  trickWordLetterBlanks: true,
  sentenceWordBlanks: true,
  sentencePunctuationCue: true,
};

const BASELINE_PRESET: ModificationSettings = {
  level: 'baseline',
  soundBlanksCount: false,
  soundShowCommas: false,
  wordTapBlanks: false,
  wordWiderDigraphSuffix: false,
  trickWordLetterBlanks: false,
  sentenceWordBlanks: false,
  sentencePunctuationCue: false,
};

export const App: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<number>(2); // 1 or 2
  const [selectedUnit, setSelectedUnit] = useState<number>(4);
  const [studentName, setStudentName] = useState<string>('');
  const [activeTier, setActiveTier] = useState<ModificationLevel>('level1');
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [customSettings, setCustomSettings] = useState<ModificationSettings>(LEVEL_1_PRESET);

  // Pick dataset based on grade
  const availableUnits = selectedGrade === 1 ? level1Units : level2Units;
  const currentKey = `level-${selectedGrade}-unit-${selectedUnit}`;
  const currentTest = availableUnits[currentKey] || Object.values(availableUnits)[0];

  // Resolve current active settings
  const currentSettings: ModificationSettings =
    activeTier === 'baseline'
      ? BASELINE_PRESET
      : activeTier === 'level1'
      ? LEVEL_1_PRESET
      : activeTier === 'custom'
      ? { ...customSettings, level: 'custom' }
      : LEVEL_1_PRESET;

  const handlePrint = () => {
    window.print();
  };

  const handleGradeChange = (grade: number) => {
    setSelectedGrade(grade);
    setSelectedUnit(grade === 1 ? 3 : 1);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16 print:bg-white print:p-0 print:m-0 print:min-h-0">
      {/* ================= TOP TEACHER CONTROL BAR (Hidden on Print) ================= */}
      <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Branding & Grade/Unit Selector */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif font-black text-amber-700 text-xl shadow-xs">
                F
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-bold text-slate-900 tracking-tight">
                    Fundations Test Modifier
                  </h1>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-300">
                    IEP Scaffold Engine
                  </span>
                </div>
                
                {/* Grade & Unit Dropdowns */}
                <div className="flex items-center gap-3 mt-1">
                  {/* Grade Selector */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-500">Grade:</span>
                    <select
                      value={selectedGrade}
                      onChange={(e) => handleGradeChange(Number(e.target.value))}
                      className="text-xs font-bold bg-white border border-slate-300 text-slate-800 rounded-md px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-2xs"
                    >
                      <option value={1}>1st Grade (Level 1)</option>
                      <option value={2}>2nd Grade (Level 2)</option>
                    </select>
                  </div>

                  {/* Unit Selector */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-500">Unit:</span>
                    <select
                      value={selectedUnit}
                      onChange={(e) => setSelectedUnit(Number(e.target.value))}
                      className="text-xs font-bold bg-amber-50 border border-amber-300 text-amber-900 rounded-md px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-2xs"
                    >
                      {Object.values(availableUnits).map((u) => (
                        <option key={u.unit} value={u.unit}>
                          Unit {u.unit} Assessment
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              {/* Student Name */}
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Student name (optional)"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 w-48 transition"
                />
              </div>

              {/* View Teacher Answer Key */}
              <button
                onClick={() => setShowAnswerKey(!showAnswerKey)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition cursor-pointer ${
                  showAnswerKey
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                {showAnswerKey ? 'Hide Dictation Key' : 'Dictation & Marking Key'}
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-md bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                Print Test Sheet
              </button>
            </div>
          </div>

          {/* Tier Selection Bar */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                Modification Tier:
              </span>

              {/* Baseline */}
              <button
                onClick={() => setActiveTier('baseline')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                  activeTier === 'baseline'
                    ? 'bg-slate-800 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Standard Baseline
              </button>

              {/* Level 1 */}
              <button
                onClick={() => setActiveTier('level1')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                  activeTier === 'level1'
                    ? 'bg-amber-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Level 1 (Least Modified)
              </button>

              {/* Level 2 (Placeholder) */}
              <button
                onClick={() => setActiveTier('level2')}
                disabled
                className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 text-slate-400 cursor-not-allowed opacity-60"
                title="Level 2 will be defined next"
              >
                Level 2 (Moderate) [Next]
              </button>

              {/* Level 3 (Placeholder) */}
              <button
                onClick={() => setActiveTier('level3')}
                disabled
                className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 text-slate-400 cursor-not-allowed opacity-60"
                title="Level 3 will be defined next"
              >
                Level 3 (Most Modified) [Next]
              </button>

              {/* Super User Custom Toggle */}
              <button
                onClick={() => setActiveTier('custom')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition cursor-pointer ${
                  activeTier === 'custom'
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs font-semibold'
                    : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50'
                }`}
              >
                <Settings2 className="w-3.5 h-3.5" />
                Custom Super User
              </button>
            </div>

            {/* Active Tier Summary Pill */}
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>
                {activeTier === 'baseline' && 'Standard Fundations 4-line grid, unmodified.'}
                {activeTier === 'level1' &&
                  `Level 1 Active for Grade ${selectedGrade}: Sound count blanks, tap unit blanks, sentence word blanks.`}
                {activeTier === 'custom' && 'Super User Mode: Toggle individual scaffolds below.'}
              </span>
            </div>
          </div>

          {/* Super User Custom Toggles (if active) */}
          {activeTier === 'custom' && (
            <div className="mt-3 p-3 bg-indigo-50/70 border border-indigo-200 rounded-lg flex flex-wrap gap-x-6 gap-y-2 text-xs text-indigo-950 animate-fadeIn">
              <span className="font-bold text-indigo-900 w-full mb-1">
                Super User Checkboxes (Customize for Student IEP):
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customSettings.soundBlanksCount}
                  onChange={(e) =>
                    setCustomSettings({ ...customSettings, soundBlanksCount: e.target.checked })
                  }
                  className="rounded text-indigo-600"
                />
                <span>Sounds: Show blank slots for each spelling choice</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customSettings.wordTapBlanks}
                  onChange={(e) =>
                    setCustomSettings({ ...customSettings, wordTapBlanks: e.target.checked })
                  }
                  className="rounded text-indigo-600"
                />
                <span>Words: Show blank slots for tap units</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customSettings.wordWiderDigraphSuffix}
                  onChange={(e) =>
                    setCustomSettings({
                      ...customSettings,
                      wordWiderDigraphSuffix: e.target.checked,
                    })
                  }
                  className="rounded text-indigo-600"
                />
                <span>Words: Wider slots for digraphs, suffixes, and welded sounds</span>
              </label>
              {selectedGrade === 2 && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customSettings.trickWordLetterBlanks}
                    onChange={(e) =>
                      setCustomSettings({
                        ...customSettings,
                        trickWordLetterBlanks: e.target.checked,
                      })
                    }
                    className="rounded text-indigo-600"
                  />
                  <span>Trick Words: 1 blank line per letter</span>
                </label>
              )}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customSettings.sentenceWordBlanks}
                  onChange={(e) =>
                    setCustomSettings({
                      ...customSettings,
                      sentenceWordBlanks: e.target.checked,
                    })
                  }
                  className="rounded text-indigo-600"
                />
                <span>Sentences: Blank line for each word</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customSettings.sentencePunctuationCue}
                  onChange={(e) =>
                    setCustomSettings({
                      ...customSettings,
                      sentencePunctuationCue: e.target.checked,
                    })
                  }
                  className="rounded text-indigo-600"
                />
                <span>Sentences: Pre-print punctuation mark at end</span>
              </label>
            </div>
          )}

          {/* Teacher Dictation & District Marking Key Drawer */}
          {showAnswerKey && (
            <div className="mt-3 p-4 bg-amber-50/90 border border-amber-200 rounded-lg text-xs text-slate-800 shadow-sm animate-fadeIn">
              <div className="font-bold text-amber-900 text-sm mb-2 flex items-center justify-between">
                <span>
                  Teacher Dictation & District Marking Key (Grade {currentTest.level} Unit {currentTest.unit})
                </span>
                <span className="text-xs font-normal text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded">
                  2025–2026 District Directions
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Sounds */}
                <div className="bg-white p-3 rounded border border-amber-200 shadow-2xs">
                  <div className="font-bold text-slate-900 mb-1.5 pb-1 border-b border-amber-100">
                    Sounds (Dictate sound):
                  </div>
                  <ol className="list-decimal list-inside space-y-1">
                    {currentTest.sounds.map((s) => (
                      <li key={s.number}>
                        {s.prompt} &rarr;{' '}
                        <span className="font-mono font-bold text-amber-950">
                          {s.answers.join(', ')}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Words & District Marking Rubric */}
                <div className="bg-white p-3 rounded border border-amber-200 shadow-2xs md:col-span-2">
                  <div className="font-bold text-slate-900 mb-1.5 pb-1 border-b border-amber-100">
                    Words & District Marking Directions:
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5">
                    {currentTest.words.map((w) => (
                      <li key={w.number} className="leading-relaxed">
                        <span className="font-bold text-slate-900">{w.word}</span>
                        {w.markingDescription && (
                          <span className="text-slate-600 text-[11px] block pl-4">
                            &bull; {w.markingDescription}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sentences & Trick Words */}
                <div className="bg-white p-3 rounded border border-amber-200 shadow-2xs">
                  <div className="font-bold text-slate-900 mb-1.5 pb-1 border-b border-amber-100">
                    {selectedGrade === 2 ? 'Trick Words & Sentences:' : 'Sentences (Dictate):'}
                  </div>
                  {selectedGrade === 2 && currentTest.trickWords.length > 0 && (
                    <div className="mb-2">
                      <span className="font-semibold text-slate-700">Trick Words:</span>
                      <p className="font-bold text-slate-900 mt-0.5">
                        {currentTest.trickWords.map((t) => `${t.number}. ${t.word}`).join(' • ')}
                      </p>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-slate-700">Sentences:</span>
                    <ol className="list-decimal list-inside space-y-1 mt-0.5 italic text-slate-800">
                      {currentTest.sentences.map((st) => (
                        <li key={st.number}>"{st.text}"</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= MAIN SHEET PREVIEW ================= */}
      <main className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 print:m-0 print:p-0 print:max-w-none print:w-full">
        <FundationsTestSheet
          testData={currentTest}
          settings={currentSettings}
          studentName={studentName}
        />
      </main>
    </div>
  );
};
