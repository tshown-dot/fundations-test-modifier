import React, { useState } from 'react';
import { UnitTestData, TileColorType, SentenceWordToken, WordTapUnit } from '../types/fundations';
import { FundationsGridRow } from './FundationsGridRow';
import { getTileType } from '../utils/tileHelper';
import { 
  Database, 
  ArrowLeft, 
  RotateCcw, 
  Download, 
  Check, 
  Layers, 
  Sparkles, 
  Split, 
  FileText 
} from 'lucide-react';

interface DatabaseManagerProps {
  grade: number; // 1 or 2
  onGradeChange: (grade: number) => void;
  unit: number;
  onUnitChange: (unit: number) => void;
  unitData: UnitTestData;
  onSaveUnit: (updated: UnitTestData) => void;
  onResetUnit: () => void;
  onBackToTest: () => void;
  availableUnits: Record<string, UnitTestData>;
  isCustomized: boolean;
}

export const DatabaseManager: React.FC<DatabaseManagerProps> = ({
  grade,
  onGradeChange,
  unit,
  onUnitChange,
  unitData,
  onSaveUnit,
  onResetUnit,
  onBackToTest,
  availableUnits,
  isCustomized,
}) => {
  const [data, setData] = useState<UnitTestData>(unitData);
  const [savedToast, setSavedToast] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'words' | 'sounds' | 'trickWords' | 'sentences' | 'raw'>('words');

  // Sync state if unitData prop changes
  React.useEffect(() => {
    setData(unitData);
  }, [unitData]);

  // Quick word splitter helper: "c-old-est" -> WordTapUnit[]
  const splitWordToTapUnits = (hyphenated: string): WordTapUnit[] => {
    const segments = hyphenated.split('-').map((s) => s.trim()).filter(Boolean);
    return segments.map((seg) => {
      const tileType = getTileType(seg);
      const unitType: 'single' | 'digraph' | 'blend' | 'suffix' | 'welded' =
        tileType === 'suffix' ? 'suffix' : tileType === 'welded' ? 'welded' : seg.length > 1 ? 'digraph' : 'single';

      return {
        text: seg,
        isDigraphOrSuffix: tileType === 'suffix' || tileType === 'welded' || seg.length > 1,
        type: unitType,
        tileType,
      };
    });
  };

  const handleWordTapUnitsChange = (wordIndex: number, hyphenated: string) => {
    const updatedWords = [...data.words];
    const targetWord = updatedWords[wordIndex];
    if (!targetWord) return;

    targetWord.tapUnits = splitWordToTapUnits(hyphenated);
    const updated = { ...data, words: updatedWords };
    setData(updated);
    onSaveUnit(updated);
    showToast();
  };

  const handleTileTypeChange = (wordIndex: number, tapIndex: number, newType: TileColorType) => {
    const updatedWords = [...data.words];
    const targetWord = updatedWords[wordIndex];
    if (!targetWord || !targetWord.tapUnits[tapIndex]) return;

    targetWord.tapUnits[tapIndex].tileType = newType;
    if (newType === 'suffix') {
      targetWord.tapUnits[tapIndex].type = 'suffix';
      targetWord.tapUnits[tapIndex].isDigraphOrSuffix = true;
    } else if (newType === 'welded') {
      targetWord.tapUnits[tapIndex].type = 'welded';
      targetWord.tapUnits[tapIndex].isDigraphOrSuffix = true;
    }

    const updated = { ...data, words: updatedWords };
    setData(updated);
    onSaveUnit(updated);
    showToast();
  };

  const handleSoundAnswersChange = (soundIndex: number, answersCsv: string) => {
    const updatedSounds = [...data.sounds];
    const answers = answersCsv.split(',').map((s) => s.trim()).filter(Boolean);
    updatedSounds[soundIndex] = {
      ...updatedSounds[soundIndex],
      answers,
    };
    const updated = { ...data, sounds: updatedSounds };
    setData(updated);
    onSaveUnit(updated);
    showToast();
  };

  const handleSoundPromptChange = (soundIndex: number, prompt: string) => {
    const updatedSounds = [...data.sounds];
    updatedSounds[soundIndex] = {
      ...updatedSounds[soundIndex],
      prompt,
    };
    const updated = { ...data, sounds: updatedSounds };
    setData(updated);
    onSaveUnit(updated);
    showToast();
  };

  const handleTrickWordChange = (twIndex: number, word: string, distractorsCsv: string) => {
    const updatedTrick = [...data.trickWords];
    const distractors = distractorsCsv.split(',').map((s) => s.trim()).filter(Boolean);
    updatedTrick[twIndex] = {
      ...updatedTrick[twIndex],
      word: word.trim(),
      distractors,
    };
    const updated = { ...data, trickWords: updatedTrick };
    setData(updated);
    onSaveUnit(updated);
    showToast();
  };

  // Toggle word role in sentences (Untested -> Trick -> Phonetic -> Untested)
  const toggleSentenceWordRole = (sentenceIndex: number, word: string) => {
    const updatedSentences = [...data.sentences];
    const targetSentence = updatedSentences[sentenceIndex];
    if (!targetSentence) return;

    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const isPhonetic = targetSentence.phoneticWords.some((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '') === cleanWord);
    const isTrick = targetSentence.trickWords.some((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '') === cleanWord);

    let newPhonetic = [...targetSentence.phoneticWords];
    let newTrick = [...targetSentence.trickWords];

    if (!isPhonetic && !isTrick) {
      // Untested -> Trick
      newTrick.push(word);
    } else if (isTrick) {
      // Trick -> Phonetic
      newTrick = newTrick.filter((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '') !== cleanWord);
      newPhonetic.push(word);
    } else {
      // Phonetic -> Untested
      newPhonetic = newPhonetic.filter((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '') !== cleanWord);
    }

    targetSentence.phoneticWords = newPhonetic;
    targetSentence.trickWords = newTrick;

    const updated = { ...data, sentences: updatedSentences };
    setData(updated);
    onSaveUnit(updated);
    showToast();
  };

  const showToast = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(availableUnits, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `fundations_level_${grade}_curriculum.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Header Bar */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToTest}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-semibold transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Test Sheet
            </button>
            <div className="h-6 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-amber-400" />
              <h1 className="text-lg font-bold text-white tracking-wide">
                Fundations Curriculum Database
              </h1>
              {isCustomized && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Custom Edits Active
                </span>
              )}
            </div>
          </div>

          {/* Grade & Unit Pickers */}
          <div className="flex items-center gap-4">
            {/* Grade Switcher */}
            <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => onGradeChange(1)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition cursor-pointer ${
                  grade === 1 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Grade 1
              </button>
              <button
                onClick={() => onGradeChange(2)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition cursor-pointer ${
                  grade === 2 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Grade 2
              </button>
            </div>

            {/* Unit Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Unit:</span>
              <select
                value={unit}
                onChange={(e) => onUnitChange(Number(e.target.value))}
                className="bg-slate-900 text-amber-400 font-bold text-sm px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                {Object.keys(availableUnits)
                  .map((k) => availableUnits[k])
                  .sort((a, b) => a.unit - b.unit)
                  .map((u) => (
                    <option key={u.unit} value={u.unit} className="bg-slate-900 text-white">
                      Unit {u.unit}
                    </option>
                  ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onResetUnit}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition cursor-pointer"
                title="Reset this unit to default district OCR data"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Unit
              </button>
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition cursor-pointer"
                title="Download full curriculum JSON file"
              >
                <Download className="w-3.5 h-3.5" />
                Export JSON
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Auto-save Toast Indicator */}
      {savedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold animate-fade-in">
          <Check className="w-4 h-4" />
          Changes saved automatically!
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6 flex-1 flex flex-col gap-6">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('words')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                activeTab === 'words'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Split className="w-4 h-4" />
              Words & Tap Segmentation ({data.words?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('sounds')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                activeTab === 'sounds'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Sounds & Sound Tiles ({data.sounds?.length || 0})
            </button>
            {grade === 2 && (
              <button
                onClick={() => setActiveTab('trickWords')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                  activeTab === 'trickWords'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                Trick Words & Distractors ({data.trickWords?.length || 0})
              </button>
            )}
            <button
              onClick={() => setActiveTab('sentences')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                activeTab === 'sentences'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              Sentence Word Classifier ({data.sentences?.length || 0})
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-xs bg-yellow-200 border border-amber-400 inline-block" /> Consonant / Digraph
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-xs bg-orange-200 border border-orange-400 inline-block" /> Vowel
            </span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-3 rounded-xs bg-emerald-200 border border-emerald-500 inline-block" /> Glued Sound
            </span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-3 rounded-xs bg-yellow-300 border border-yellow-500 inline-block" /> Suffix
            </span>
          </div>
        </div>

        {/* TAB 1: WORDS & TAP SEGMENTATION */}
        {activeTab === 'words' && (
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Split className="w-4 h-4 text-amber-400" />
                  Grade {grade} &bull; Unit {unit} Words & Tap Segmentation
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Adjust how each word is broken into tap units using the hyphenated input (e.g. <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300">c-old-est</code> or <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300">b-u-n-ch-es</code>). Glued sounds and suffixes will automatically receive green and yellow rectangles!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {data.words.map((wordItem, wordIdx) => {
                const hyphenated = wordItem.tapUnits.map((u) => u.text).join('-');
                return (
                  <div
                    key={wordItem.number}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-4 shadow-sm"
                  >
                    {/* Header Row: Word Number & Target */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-2xl font-black text-amber-400">
                          {wordItem.number}.
                        </span>
                        <span className="font-serif text-3xl font-bold text-white tracking-wide">
                          "{wordItem.word}"
                        </span>
                        {wordItem.baseword && (
                          <span className="text-xs font-medium text-slate-400">
                            (Base: <span className="text-amber-300">{wordItem.baseword}</span>
                            {wordItem.suffix && <span> + Suffix: <span className="text-amber-300">-{wordItem.suffix}</span></span>})
                          </span>
                        )}
                      </div>

                      {/* Tap count badge */}
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-slate-300 border border-slate-700">
                        {wordItem.tapUnits.length} Tap Units / Tiles
                      </span>
                    </div>

                    {/* Interactive Tap Unit Chips */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-semibold text-slate-400 mr-2">
                        Detected Tiles:
                      </span>
                      {wordItem.tapUnits.map((unit, tapIdx) => {
                        const tileType = unit.tileType || getTileType(unit.text, {
                          isSuffix: unit.type === 'suffix',
                          isWelded: unit.type === 'welded',
                        });

                        return (
                          <div
                            key={tapIdx}
                            className={`flex flex-col items-center px-3 py-1.5 rounded-lg border text-xs font-bold shadow-xs ${
                              tileType === 'vowel'
                                ? 'bg-orange-500/20 text-orange-200 border-orange-500/50'
                                : tileType === 'welded'
                                ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/50'
                                : tileType === 'suffix'
                                ? 'bg-yellow-500/20 text-yellow-200 border-yellow-500/50'
                                : 'bg-amber-500/20 text-amber-200 border-amber-500/50'
                            }`}
                          >
                            <span className="text-lg font-black tracking-wide">
                              {unit.text}
                            </span>
                            <div className="flex items-center gap-1 mt-1">
                              <select
                                value={tileType}
                                onChange={(e) => handleTileTypeChange(wordIdx, tapIdx, e.target.value as TileColorType)}
                                className="bg-slate-900 text-[10px] font-semibold text-slate-300 rounded px-1 py-0.5 border border-slate-700 cursor-pointer"
                              >
                                <option value="consonant">Consonant</option>
                                <option value="vowel">Vowel</option>
                                <option value="welded">Glued Sound (Green)</option>
                                <option value="suffix">Suffix (Yellow Rect)</option>
                              </select>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Quick Hyphenated Splitter */}
                    <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-700/80">
                      <span className="text-xs font-bold text-slate-400 whitespace-nowrap">
                        Quick Split (use hyphens):
                      </span>
                      <input
                        type="text"
                        defaultValue={hyphenated}
                        onBlur={(e) => handleWordTapUnitsChange(wordIdx, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleWordTapUnitsChange(wordIdx, (e.target as HTMLInputElement).value);
                          }
                        }}
                        className="flex-1 bg-slate-800 text-amber-300 font-mono text-sm px-3 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-amber-400"
                        placeholder="e.g. c-old-est or b-u-n-ch-es"
                      />
                      <span className="text-[11px] text-slate-500 italic">
                        Press Enter or click away to apply
                      </span>
                    </div>

                    {/* Live Fundations 4-Line Preview */}
                    <div className="bg-white p-4 rounded-lg shadow-inner flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Live Print Preview (How students see it on 4 lines):
                      </span>
                      <FundationsGridRow
                        itemNumber={wordItem.number}
                        tiles={wordItem.tapUnits.map((u) => {
                          const t = u.tileType || getTileType(u.text, {
                            isSuffix: u.type === 'suffix',
                            isWelded: u.type === 'welded',
                          });
                          return {
                            type: t,
                            isRectangle: t === 'welded' || t === 'suffix',
                          };
                        })}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: SOUNDS & SOUND TILES */}
        {activeTab === 'sounds' && (
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Grade {grade} &bull; Unit {unit} Sounds
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Manage the prompt sound and expected spellings (e.g. /d/ &rarr; <code className="bg-slate-900 px-1 py-0.5 rounded text-amber-300">d, ed</code>). Multiple answers will generate separate sound tile boxes on the lines separated by commas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {data.sounds.map((soundItem, soundIdx) => {
                const answersCsv = soundItem.answers.join(', ');
                return (
                  <div
                    key={soundItem.number}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-2xl font-black text-amber-400">
                          {soundItem.number}.
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-400">Prompt:</span>
                          <input
                            type="text"
                            value={soundItem.prompt}
                            onChange={(e) => handleSoundPromptChange(soundIdx, e.target.value)}
                            className="bg-slate-900 text-amber-300 font-bold text-base px-3 py-1 rounded border border-slate-700 w-28 text-center"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-1 max-w-md ml-6">
                        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
                          Answers (CSV):
                        </span>
                        <input
                          type="text"
                          defaultValue={answersCsv}
                          onBlur={(e) => handleSoundAnswersChange(soundIdx, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSoundAnswersChange(soundIdx, (e.target as HTMLInputElement).value);
                            }
                          }}
                          className="flex-1 bg-slate-900 text-white font-mono text-sm px-3 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-amber-400"
                          placeholder="e.g. d, ed or c, k, ck"
                        />
                      </div>
                    </div>

                    {/* Live Print Preview */}
                    <div className="bg-white p-4 rounded-lg shadow-inner flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Live Print Preview:
                      </span>
                      <FundationsGridRow
                        itemNumber={soundItem.number}
                        tiles={soundItem.answers.map((ans) => {
                          const t = getTileType(ans, {
                            isSuffix: ans === 'ed' || ans === 's' || ans === 'es',
                            isWelded: soundItem.prompt.includes('ng') || soundItem.prompt.includes('nk') || soundItem.prompt.includes('old'),
                          });
                          return {
                            type: t,
                            isRectangle: t === 'welded' || t === 'suffix',
                          };
                        })}
                        commasBetweenSlots={soundItem.answers.length > 1}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: TRICK WORDS */}
        {activeTab === 'trickWords' && grade === 2 && (
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Grade 2 &bull; Unit {unit} Trick Words
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Specify the target Trick Word and its 2 distractors to create the 3-option multiple choice bank.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {data.trickWords.map((twItem, twIdx) => {
                const distractorsCsv = (twItem.distractors || []).join(', ');
                return (
                  <div
                    key={twItem.number}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-serif text-2xl font-black text-amber-400">
                        {twItem.number}.
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400">Target Word:</span>
                        <input
                          type="text"
                          value={twItem.word}
                          onChange={(e) => handleTrickWordChange(twIdx, e.target.value, distractorsCsv)}
                          className="bg-slate-900 text-amber-300 font-bold text-base px-3 py-1 rounded border border-slate-700 w-36 text-center"
                        />
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
                          Distractors (2):
                        </span>
                        <input
                          type="text"
                          defaultValue={distractorsCsv}
                          onBlur={(e) => handleTrickWordChange(twIdx, twItem.word, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleTrickWordChange(twIdx, twItem.word, (e.target as HTMLInputElement).value);
                            }
                          }}
                          className="flex-1 bg-slate-900 text-white font-mono text-sm px-3 py-1 rounded border border-slate-700"
                          placeholder="e.g. agan, agen"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: SENTENCE WORD CLASSIFIER */}
        {activeTab === 'sentences' && (
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  Grade {grade} &bull; Unit {unit} Sentence Word Classifier
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Click any word in the sentence to cycle its scaffold: <span className="text-slate-300 font-bold">Untested (printed on lines)</span> &rarr; <span className="text-amber-300 font-bold">Trick Word (empty capsule)</span> &rarr; <span className="text-sky-300 font-bold">Phonetic (blank with tapping dashes)</span>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {data.sentences.map((sentItem, sentIdx) => {
                const words = sentItem.words || [];
                return (
                  <div
                    key={sentItem.number}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-2xl font-black text-amber-400">
                          {sentItem.number}.
                        </span>
                        <span className="font-serif text-xl font-bold text-white">
                          "{sentItem.text}"
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">
                        {words.length} Words
                      </span>
                    </div>

                    {/* Interactive Word Token Classifier */}
                    <div className="flex flex-wrap items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700/80">
                      <span className="text-xs font-bold text-slate-400 w-full mb-1">
                        Click any word to change its role:
                      </span>
                      {words.map((word, wIdx) => {
                        const clean = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
                        const isPhonetic = sentItem.phoneticWords.some((pw) => pw.toLowerCase().replace(/[^a-z0-9]/gi, '') === clean);
                        const isTrick = sentItem.trickWords.some((tw) => tw.toLowerCase().replace(/[^a-z0-9]/gi, '') === clean);

                        return (
                          <button
                            key={wIdx}
                            onClick={() => toggleSentenceWordRole(sentIdx, word)}
                            className={`flex flex-col items-center px-3 py-1.5 rounded-lg border text-xs font-bold transition cursor-pointer select-none ${
                              isTrick
                                ? 'bg-amber-500/25 text-amber-200 border-amber-400 shadow-xs'
                                : isPhonetic
                                ? 'bg-sky-500/25 text-sky-200 border-sky-400 shadow-xs'
                                : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                            }`}
                          >
                            <span className="text-base font-bold font-serif">{word}</span>
                            <span className="text-[10px] uppercase font-bold mt-0.5 tracking-wider">
                              {isTrick ? 'Trick Word (Pill)' : isPhonetic ? 'Phonetic (Tap)' : 'Untested (Text)'}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Sentence Print Preview */}
                    <div className="bg-white p-4 rounded-lg shadow-inner flex flex-col gap-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Live Sentence Preview on 4 Lines:
                      </span>
                      {(() => {
                        const phoneticSet = new Set((sentItem.phoneticWords || []).map((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '')));
                        const trickSet = new Set((sentItem.trickWords || []).map((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '')));
                        const tokens: SentenceWordToken[] = words.map((w) => {
                          const cl = w.toLowerCase().replace(/[^a-z0-9]/gi, '');
                          let t: 'untested' | 'phonetic' | 'trick' = 'untested';
                          if (trickSet.has(cl)) t = 'trick';
                          else if (phoneticSet.has(cl)) t = 'phonetic';
                          return {
                            word: w,
                            type: t,
                            tapCount: t === 'phonetic' ? Math.max(3, cl.length) : undefined,
                          };
                        });
                        const l1 = tokens.slice(0, Math.ceil(tokens.length / 2));
                        const l2 = tokens.slice(Math.ceil(tokens.length / 2));

                        return (
                          <div className="flex flex-col gap-4">
                            <FundationsGridRow
                              itemNumber={sentItem.number}
                              sentenceTokens={l1}
                            />
                            <FundationsGridRow
                              sentenceTokens={l2}
                              trailingPunctuation={sentItem.punctuation || '.'}
                            />
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};