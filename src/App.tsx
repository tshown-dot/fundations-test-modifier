import React, { useState } from 'react';
import { sampleTests } from './data/curriculum';
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
  const [selectedTestKey] = useState<string>('level-2-unit-4');
  const [studentName, setStudentName] = useState<string>('');
  const [activeTier, setActiveTier] = useState<ModificationLevel>('level1');
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [customSettings, setCustomSettings] = useState<ModificationSettings>(LEVEL_1_PRESET);

  const currentTest = sampleTests[selectedTestKey];

  // Resolve current active settings
  const currentSettings: ModificationSettings =
    activeTier === 'baseline'
      ? BASELINE_PRESET
      : activeTier === 'level1'
      ? LEVEL_1_PRESET
      : activeTier === 'custom'
      ? { ...customSettings, level: 'custom' }
      : LEVEL_1_PRESET; // fallback

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16">
      {/* ================= TOP TEACHER CONTROL BAR (Hidden on Print) ================= */}
      <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Branding & Unit Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif font-black text-amber-700 text-xl shadow-xs">
                F
              </div>
              <div>
                <h1 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  Fundations Test Modifier
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-300">
                    IEP Scaffold Engine
                  </span>
                </h1>
                <p className="text-xs text-slate-500">
                  Level {currentTest.level} • Unit {currentTest.unit} Assessment
                </p>
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
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition ${
                  showAnswerKey
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                {showAnswerKey ? 'Hide Dictation Key' : 'Dictation Key'}
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
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
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
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition ${
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
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition ${
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
                  'Level 1 Active: Sound count blanks, tap unit blanks (wider digraphs/suffixes), 1-line per letter trick words, sentence word blanks + period.'}
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
                <span>Words: Wider slots for digraphs and suffixes</span>
              </label>
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

          {/* Teacher Dictation Key Drawer */}
          {showAnswerKey && (
            <div className="mt-3 p-4 bg-amber-50/90 border border-amber-200 rounded-lg text-xs text-slate-800 shadow-sm">
              <div className="font-bold text-amber-900 text-sm mb-2 flex items-center justify-between">
                <span>Teacher Dictation & Marking Key (Level 2 Unit 4)</span>
                <span className="text-xs font-normal text-amber-700">For Teacher Administration Only</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-2.5 rounded border border-amber-200">
                  <div className="font-semibold text-slate-900 mb-1">Sounds (Say sound):</div>
                  <ol className="list-decimal list-inside space-y-0.5">
                    <li>/d/ &rarr; <span className="font-mono font-bold">d, ed</span></li>
                    <li>/t/ &rarr; <span className="font-mono font-bold">t, ed</span></li>
                    <li>/ing/ &rarr; <span className="font-mono font-bold">ing</span></li>
                    <li>/s/ &rarr; <span className="font-mono font-bold">s</span></li>
                    <li>/z/ &rarr; <span className="font-mono font-bold">z, s</span></li>
                  </ol>
                </div>
                <div className="bg-white p-2.5 rounded border border-amber-200 md:col-span-2">
                  <div className="font-semibold text-slate-900 mb-1">Words & Markings:</div>
                  <ol className="list-decimal list-inside space-y-0.5">
                    <li><span className="font-bold">bunches</span>: breve on u, closed syllable (c), circle suffix -es</li>
                    <li><span className="font-bold">swishing</span>: breve on i, closed syllable (c), circle suffix -ing</li>
                    <li><span className="font-bold">coldest</span>: macron on o, closed exception (c/), circle suffix -est</li>
                    <li><span className="font-bold">spelled</span>: /d/ over ed, breve on e, closed (c), circle suffix -ed</li>
                    <li><span className="font-bold">dusted</span>: /id/ over ed, breve on u, closed (c), circle suffix -ed</li>
                  </ol>
                </div>
                <div className="bg-white p-2.5 rounded border border-amber-200">
                  <div className="font-semibold text-slate-900 mb-1">Trick Words & Sentences:</div>
                  <div className="mb-1 font-semibold text-slate-700">Trick Words:</div>
                  <p className="font-bold">1. again &bull; 2. animal</p>
                  <div className="mt-2 font-semibold text-slate-700">Sentences:</div>
                  <p className="italic">1. "The fastest foxes sprinted there by the hills."</p>
                  <p className="italic mt-1">2. "Please use the blocks."</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= MAIN SHEET PREVIEW ================= */}
      <main className="max-w-5xl mx-auto mt-8 px-4 sm:px-6">
        <FundationsTestSheet
          testData={currentTest}
          settings={currentSettings}
          studentName={studentName}
        />
      </main>
    </div>
  );
};
