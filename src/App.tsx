import React, { useState } from 'react';
import { level2Units } from './data/level2Units';
import { level1Units } from './data/level1Units';
import {
  ModificationLevel,
  ModificationSettings,
  UnitTestData,
  CustomSections,
  SectionModLevel,
} from './types/fundations';
import { FundationsTestSheet } from './components/FundationsTestSheet';
import { DatabaseManager } from './components/DatabaseManager';
import {
  Printer,
  Settings2,
  Sparkles,
  BookOpen,
  User,
  CheckCircle2,
  Layers,
  Database,
  Volume2,
  PenTool,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';

const BASELINE_PRESET: ModificationSettings = {
  level: 'baseline',
  soundBlanksCount: false,
  soundShowCommas: false,
  soundTileBoxes: false,
  wordTapBlanks: false,
  wordWiderDigraphSuffix: false,
  wordTileTemplate: false,
  wordShowMarkingPrompt: false,
  trickWordLetterBlanks: false,
  trickWordMultipleChoice: false,
  sentenceWordBlanks: false,
  sentencePunctuationCue: false,
  sentenceClozeScaffold: false,
};

const LEVEL_1_PRESET: ModificationSettings = {
  level: 'level1',
  soundBlanksCount: true,
  soundShowCommas: true,
  soundTileBoxes: false,
  wordTapBlanks: true,
  wordWiderDigraphSuffix: true,
  wordTileTemplate: false,
  wordShowMarkingPrompt: false,
  trickWordLetterBlanks: true,
  trickWordMultipleChoice: false,
  sentenceWordBlanks: true,
  sentencePunctuationCue: true,
  sentenceClozeScaffold: false,
};

const LEVEL_2_PRESET: ModificationSettings = {
  level: 'level2',
  soundBlanksCount: false,
  soundShowCommas: true,
  soundTileBoxes: true,
  wordTapBlanks: false,
  wordWiderDigraphSuffix: false,
  wordTileTemplate: true,
  wordShowMarkingPrompt: true,
  trickWordLetterBlanks: false,
  trickWordMultipleChoice: true,
  sentenceWordBlanks: false,
  sentencePunctuationCue: true,
  sentenceClozeScaffold: true,
};

const DEFAULT_CUSTOM_SECTIONS: CustomSections = {
  sounds: 'level2',
  words: 'level2',
  trickWords: 'level2',
  sentences: 'level2',
};

function computeSettingsFromSections(sections: CustomSections): ModificationSettings {
  return {
    level: 'custom',
    // Sounds
    soundBlanksCount: sections.sounds === 'level1',
    soundShowCommas: sections.sounds === 'level1',
    soundTileBoxes: sections.sounds === 'level2',

    // Words
    wordTapBlanks: sections.words === 'level1',
    wordWiderDigraphSuffix: sections.words === 'level1',
    wordTileTemplate: sections.words === 'level2',
    wordShowMarkingPrompt: sections.words === 'level2',

    // Trick Words
    trickWordLetterBlanks: sections.trickWords === 'level1',
    trickWordMultipleChoice: sections.trickWords === 'level2',

    // Sentences
    sentenceWordBlanks: sections.sentences === 'level1',
    sentencePunctuationCue: sections.sentences !== 'none',
    sentenceClozeScaffold: sections.sentences === 'level2',
  };
}

export const App: React.FC = () => {
  const queryParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const [selectedGrade, setSelectedGrade] = useState<number>(() => {
    const g = Number(queryParams.get('grade'));
    return g === 1 || g === 2 ? g : 2;
  });
  const [selectedUnit, setSelectedUnit] = useState<number>(() => {
    const u = Number(queryParams.get('unit'));
    return u >= 1 ? u : 4;
  });
  const [studentName, setStudentName] = useState<string>('');
  const [activeTier, setActiveTier] = useState<ModificationLevel>('level2');
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [customSections, setCustomSections] = useState<CustomSections>(() => {
    try {
      const saved = localStorage.getItem('fundations_custom_sections_v2');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_CUSTOM_SECTIONS;
  });
  const [viewMode, setViewMode] = useState<'sheet' | 'database'>('sheet');

  const handleUpdateSection = (section: keyof CustomSections, tier: SectionModLevel) => {
    setCustomSections((prev) => {
      const updated = { ...prev, [section]: tier };
      try {
        localStorage.setItem('fundations_custom_sections_v2', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleQuickSetAll = (tier: SectionModLevel) => {
    const updated: CustomSections = {
      sounds: tier,
      words: tier,
      trickWords: tier,
      sentences: tier,
    };
    setCustomSections(updated);
    try {
      localStorage.setItem('fundations_custom_sections_v2', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Custom user unit overrides saved in localStorage
  const [customUnits, setCustomUnits] = useState<Record<string, UnitTestData>>(() => {
    try {
      const saved = localStorage.getItem('fundations_custom_units_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Pick dataset based on grade and merge with any user overrides
  const baseUnits = selectedGrade === 1 ? level1Units : level2Units;
  const availableUnits: Record<string, UnitTestData> = {
    ...baseUnits,
    ...Object.fromEntries(
      Object.entries(customUnits).filter(([k]) => k.startsWith(`level-${selectedGrade}-`))
    ),
  };

  const currentKey = `level-${selectedGrade}-unit-${selectedUnit}`;
  const currentTest = availableUnits[currentKey] || Object.values(availableUnits)[0];
  const isCustomized = Boolean(customUnits[currentKey]);

  const handleSaveUnit = (updatedUnit: UnitTestData) => {
    const key = `level-${updatedUnit.level}-unit-${updatedUnit.unit}`;
    const updatedMap = {
      ...customUnits,
      [key]: updatedUnit,
    };
    setCustomUnits(updatedMap);
    try {
      localStorage.setItem('fundations_custom_units_v1', JSON.stringify(updatedMap));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleResetUnit = () => {
    const key = `level-${selectedGrade}-unit-${selectedUnit}`;
    const updatedMap = { ...customUnits };
    delete updatedMap[key];
    setCustomUnits(updatedMap);
    try {
      localStorage.setItem('fundations_custom_units_v1', JSON.stringify(updatedMap));
    } catch (e) {
      console.error('Failed to reset in localStorage', e);
    }
  };

  // Resolve current active settings
  const currentSettings: ModificationSettings =
    activeTier === 'baseline'
      ? BASELINE_PRESET
      : activeTier === 'level1'
      ? LEVEL_1_PRESET
      : activeTier === 'level2'
      ? LEVEL_2_PRESET
      : activeTier === 'custom'
      ? computeSettingsFromSections(customSections)
      : LEVEL_2_PRESET;

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

              {/* Database Manager Button */}
              <button
                onClick={() => setViewMode(viewMode === 'sheet' ? 'database' : 'sheet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md border transition cursor-pointer ${
                  viewMode === 'database'
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs'
                    : 'bg-slate-900 text-amber-300 hover:bg-slate-800 border-slate-700 shadow-xs'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                {viewMode === 'sheet' ? 'Database Manager' : 'Back to Test Sheet'}
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

              {/* Level 2 (Moderate) */}
              <button
                onClick={() => setActiveTier('level2')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                  activeTier === 'level2'
                    ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Level 2 (Moderate Support)
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
                  `Level 1 Active: Sound count blanks, tap unit blanks, sentence word blanks.`}
                {activeTier === 'level2' &&
                  `Level 2 Active: Sound tile boxes, connected word tile template, trick word bank, 3-tier cloze sentences.`}
                {activeTier === 'custom' && (
                  <span>
                    <strong>Super User Active:</strong> Sounds ({customSections.sounds === 'none' ? 'No Mod' : customSections.sounds === 'level1' ? 'Level 1' : 'Level 2'}), Words ({customSections.words === 'none' ? 'No Mod' : customSections.words === 'level1' ? 'Level 1' : 'Level 2'}){selectedGrade === 2 ? `, Trick Words (${customSections.trickWords === 'none' ? 'No Mod' : customSections.trickWords === 'level1' ? 'Level 1' : 'Level 2'})` : ''}, Sentences ({customSections.sentences === 'none' ? 'No Mod' : customSections.sentences === 'level1' ? 'Level 1' : 'Level 2'})
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Super User Custom Section Controls */}
          {activeTier === 'custom' && (
            <div className="mt-4 p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl shadow-xs animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-indigo-200/80">
                <div>
                  <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                    Super User Section Controls (Mix & Match for Student IEP/504)
                  </h4>
                  <p className="text-xs text-indigo-800/80 mt-0.5">
                    Choose No Mod, Level 1, or Level 2 independently for each section of the test.
                  </p>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs">
                  <span className="text-[11px] font-medium text-indigo-700 mr-1">Quick Apply:</span>
                  <button
                    type="button"
                    onClick={() => handleQuickSetAll('none')}
                    className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded font-medium text-[11px] transition-colors cursor-pointer shadow-2xs"
                  >
                    All No Mod
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSetAll('level1')}
                    className="px-2.5 py-1 bg-white hover:bg-sky-50 text-sky-800 border border-sky-300 rounded font-medium text-[11px] transition-colors cursor-pointer shadow-2xs"
                  >
                    All Level 1
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSetAll('level2')}
                    className="px-2.5 py-1 bg-white hover:bg-indigo-50 text-indigo-800 border border-indigo-300 rounded font-medium text-[11px] transition-colors cursor-pointer shadow-2xs"
                  >
                    All Level 2
                  </button>
                </div>
              </div>

              {/* 4 Section Cards Grid (or 3 for Grade 1) */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  selectedGrade === 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                } gap-3 mt-3`}
              >
                {/* 1. Sounds Card */}
                <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                        1. Sounds
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          customSections.sounds === 'none'
                            ? 'bg-slate-100 text-slate-700'
                            : customSections.sounds === 'level1'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-indigo-100 text-indigo-800'
                        }`}
                      >
                        {customSections.sounds === 'none'
                          ? 'No Mod'
                          : customSections.sounds === 'level1'
                          ? 'Level 1'
                          : 'Level 2'}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded-md text-[11px] font-medium">
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('sounds', 'none')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.sounds === 'none'
                            ? 'bg-white text-slate-900 font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        No Mod
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('sounds', 'level1')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.sounds === 'level1'
                            ? 'bg-sky-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Level 1
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('sounds', 'level2')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.sounds === 'level2'
                            ? 'bg-indigo-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Level 2
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-[10.5px] text-slate-600 leading-snug min-h-[32px] flex items-center border-t border-slate-100 pt-1.5">
                    {customSections.sounds === 'none' && 'Standard open 4-lines without hints.'}
                    {customSections.sounds === 'level1' && 'Count blanks (e.g. ___, ___) for multiple spellings.'}
                    {customSections.sounds === 'level2' && 'Color-coded Fundations sound tile boxes.'}
                  </div>
                </div>

                {/* 2. Words Card */}
                <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <PenTool className="w-3.5 h-3.5 text-indigo-600" />
                        2. Words
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          customSections.words === 'none'
                            ? 'bg-slate-100 text-slate-700'
                            : customSections.words === 'level1'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-indigo-100 text-indigo-800'
                        }`}
                      >
                        {customSections.words === 'none'
                          ? 'No Mod'
                          : customSections.words === 'level1'
                          ? 'Level 1'
                          : 'Level 2'}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded-md text-[11px] font-medium">
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('words', 'none')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.words === 'none'
                            ? 'bg-white text-slate-900 font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        No Mod
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('words', 'level1')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.words === 'level1'
                            ? 'bg-sky-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Level 1
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('words', 'level2')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.words === 'level2'
                            ? 'bg-indigo-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Level 2
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-[10.5px] text-slate-600 leading-snug min-h-[32px] flex items-center border-t border-slate-100 pt-1.5">
                    {customSections.words === 'none' && 'Standard open 4-lines without segmentation.'}
                    {customSections.words === 'level1' && 'Tapping dashes per sound (wider for digraphs/suffixes).'}
                    {customSections.words === 'level2' && 'Connected color-coded tile template framing lines.'}
                  </div>
                </div>

                {/* 3. Trick Words Card (Grade 2 only) */}
                {selectedGrade === 2 && (
                  <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                          3. Trick Words
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            customSections.trickWords === 'none'
                              ? 'bg-slate-100 text-slate-700'
                              : customSections.trickWords === 'level1'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {customSections.trickWords === 'none'
                            ? 'No Mod'
                            : customSections.trickWords === 'level1'
                            ? 'Level 1'
                            : 'Level 2'}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded-md text-[11px] font-medium">
                        <button
                          type="button"
                          onClick={() => handleUpdateSection('trickWords', 'none')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            customSections.trickWords === 'none'
                              ? 'bg-white text-slate-900 font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          No Mod
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUpdateSection('trickWords', 'level1')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            customSections.trickWords === 'level1'
                              ? 'bg-sky-600 text-white font-bold shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Level 1
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUpdateSection('trickWords', 'level2')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            customSections.trickWords === 'level2'
                              ? 'bg-indigo-600 text-white font-bold shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Level 2
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 text-[10.5px] text-slate-600 leading-snug min-h-[32px] flex items-center border-t border-slate-100 pt-1.5">
                      {customSections.trickWords === 'none' && 'Standard open 4-lines.'}
                      {customSections.trickWords === 'level1' && 'Letter blanks (1 discrete dash per letter).'}
                      {customSections.trickWords === 'level2' && '3-Option multiple-choice recognition bank & copy line.'}
                    </div>
                  </div>
                )}

                {/* 4. Sentences Card */}
                <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-indigo-600" />
                        {selectedGrade === 2 ? '4. Sentences' : '3. Sentences'}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          customSections.sentences === 'none'
                            ? 'bg-slate-100 text-slate-700'
                            : customSections.sentences === 'level1'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-indigo-100 text-indigo-800'
                        }`}
                      >
                        {customSections.sentences === 'none'
                          ? 'No Mod'
                          : customSections.sentences === 'level1'
                          ? 'Level 1'
                          : 'Level 2'}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded-md text-[11px] font-medium">
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('sentences', 'none')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.sentences === 'none'
                            ? 'bg-white text-slate-900 font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        No Mod
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('sentences', 'level1')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.sentences === 'level1'
                            ? 'bg-sky-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Level 1
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateSection('sentences', 'level2')}
                        className={`py-1 rounded text-center transition-all cursor-pointer ${
                          customSections.sentences === 'level2'
                            ? 'bg-indigo-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Level 2
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-[10.5px] text-slate-600 leading-snug min-h-[32px] flex items-center border-t border-slate-100 pt-1.5">
                    {customSections.sentences === 'none' && 'Standard open 4-lines without word breaks.'}
                    {customSections.sentences === 'level1' && 'Discrete blanks for each word in sentence.'}
                    {customSections.sentences === 'level2' && '3-Tier cloze (untested text, trick capsules, tap dashes).'}
                  </div>
                </div>
              </div>
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

      {/* ================= MAIN CONTENT ================= */}
      {viewMode === 'database' ? (
        <DatabaseManager
          grade={selectedGrade}
          onGradeChange={handleGradeChange}
          unit={selectedUnit}
          onUnitChange={setSelectedUnit}
          unitData={currentTest}
          onSaveUnit={handleSaveUnit}
          onResetUnit={handleResetUnit}
          onBackToTest={() => setViewMode('sheet')}
          availableUnits={availableUnits}
          isCustomized={isCustomized}
        />
      ) : (
        <main className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 print:m-0 print:p-0 print:max-w-none print:w-full">
          <FundationsTestSheet
            testData={currentTest}
            settings={currentSettings}
            studentName={studentName}
          />
        </main>
      )}
    </div>
  );
};
