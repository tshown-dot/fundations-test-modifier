import React from 'react';
import { UnitTestData, ModificationSettings } from '../types/fundations';
import { FundationsGridRow, BlankSlot } from './FundationsGridRow';
import { EchoOwlIcon } from './FundationsIcons';

interface FundationsTestSheetProps {
  testData: UnitTestData;
  settings: ModificationSettings;
  studentName?: string;
}

export const FundationsTestSheet: React.FC<FundationsTestSheetProps> = ({
  testData,
  settings,
  studentName = '',
}) => {
  // Helper to build sound slots
  const getSoundSlots = (answers: string[]): BlankSlot[] | undefined => {
    if (!settings.soundBlanksCount) return undefined;
    return answers.map(() => ({
      width: 46,
    }));
  };

  // Helper to build word slots (blanks per tap unit)
  const getWordSlots = (wordItem: (typeof testData.words)[0]): BlankSlot[] | undefined => {
    if (!settings.wordTapBlanks) return undefined;
    return wordItem.tapUnits.map((unit) => {
      const isWider = settings.wordWiderDigraphSuffix && (unit.isDigraphOrSuffix || unit.text.length > 1);
      return {
        isWider,
        width: isWider ? (unit.text.length >= 3 ? 50 : 42) : 26,
      };
    });
  };

  // Helper to build trick word slots (1 line per letter)
  const getTrickWordSlots = (word: string): BlankSlot[] | undefined => {
    if (!settings.trickWordLetterBlanks) return undefined;
    return Array.from({ length: word.length }).map(() => ({
      width: 24,
    }));
  };

  // Split sentence 1 into 2 lines if needed
  const s1Words = testData.sentences[0]?.words || [];
  const s1Line1Words = s1Words.slice(0, Math.ceil(s1Words.length / 2));
  const s1Line2Words = s1Words.slice(Math.ceil(s1Words.length / 2));

  const s2Words = testData.sentences[1]?.words || [];

  const getSentenceWordSlots = (words: string[]): BlankSlot[] | undefined => {
    if (!settings.sentenceWordBlanks) return undefined;
    return words.map((w) => {
      const baseWidth = Math.max(36, Math.min(85, w.length * 11 + 14));
      return { width: baseWidth };
    });
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center font-sans print:gap-0">
      {/* ================= PAGE 1: Sounds & Words ================= */}
      <div className="print-page bg-white text-black w-[8.5in] min-h-[11in] p-10 shadow-xl rounded-md flex flex-col justify-between border border-slate-200 print:border-none print:shadow-none print:p-8">
        <div>
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-serif text-lg tracking-wide text-slate-800">
              {testData.title || 'Fundations: End of Unit Test'}
            </h2>
            <h1 className="font-serif text-4xl font-extrabold tracking-wider mt-1 text-slate-900">
              Dictation
            </h1>
          </div>

          {/* Name & Date Row */}
          <div className="flex justify-between items-baseline mb-8 text-base font-medium text-slate-800">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-bold">Name</span>
              <div className="w-64 border-b-2 border-slate-700 pb-0.5 px-2 font-sans font-normal text-slate-900">
                {studentName}
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-bold">Date</span>
              <div className="w-56 border-b-2 border-slate-700 pb-0.5"></div>
            </div>
          </div>

          {/* SECTION: Sounds */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 tracking-wide">
              Sounds:
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-7">
              {/* Column 1: Items 1, 2, 3 */}
              <div className="space-y-6">
                {testData.sounds.slice(0, 3).map((item) => (
                  <FundationsGridRow
                    key={item.number}
                    itemNumber={item.number}
                    slots={getSoundSlots(item.answers)}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(item.answers)?.length || 0) > 1}
                  />
                ))}
              </div>

              {/* Column 2: Items 4, 5 */}
              <div className="space-y-6">
                {testData.sounds.slice(3, 5).map((item) => (
                  <FundationsGridRow
                    key={item.number}
                    itemNumber={item.number}
                    slots={getSoundSlots(item.answers)}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(item.answers)?.length || 0) > 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* SECTION: Words */}
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 tracking-wide">
              Words:
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-7">
              {/* Column 1: Items 1, 2, 3 */}
              <div className="space-y-6">
                {testData.words.slice(0, 3).map((item) => (
                  <FundationsGridRow
                    key={item.number}
                    itemNumber={item.number}
                    slots={getWordSlots(item)}
                  />
                ))}
              </div>

              {/* Column 2: Items 4, 5 */}
              <div className="space-y-6">
                {testData.words.slice(3, 5).map((item) => (
                  <FundationsGridRow
                    key={item.number}
                    itemNumber={item.number}
                    slots={getWordSlots(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 1 footer hint (non-print or subtle) */}
        <div className="text-right text-xs text-slate-400 pt-4 print:hidden">
          Page 1 of 2
        </div>
      </div>

      {/* ================= PAGE 2: Trick Words & Sentences ================= */}
      <div className="print-page bg-white text-black w-[8.5in] min-h-[11in] p-10 shadow-xl rounded-md flex flex-col justify-between border border-slate-200 print:border-none print:shadow-none print:p-8">
        <div>
          {/* SECTION: Trick Words */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 tracking-wide">
              Trick Words:
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {testData.trickWords.map((item) => (
                <FundationsGridRow
                  key={item.number}
                  itemNumber={item.number}
                  slots={getTrickWordSlots(item.word)}
                />
              ))}
            </div>
          </div>

          {/* SECTION: Sentences */}
          <div className="mb-6">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 tracking-wide">
              Sentences:
            </h3>

            {/* Sentence 1 */}
            <div className="mb-7">
              {/* Row 1 with item number */}
              <FundationsGridRow
                itemNumber={1}
                slots={getSentenceWordSlots(s1Line1Words)}
              />
              {/* Row 2 continuation (no item number) */}
              <div className="mt-3">
                <FundationsGridRow
                  slots={getSentenceWordSlots(s1Line2Words)}
                  trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[0]?.punctuation || '.' : undefined}
                />
              </div>
            </div>

            {/* Sentence 2 */}
            <div className="mb-6">
              {/* Row 1 with item number */}
              <FundationsGridRow
                itemNumber={2}
                slots={getSentenceWordSlots(s2Words)}
                trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[1]?.punctuation || '.' : undefined}
              />
              {/* Row 2 continuation (standard blank grid line if baseline or extra writing room) */}
              <div className="mt-3">
                <FundationsGridRow />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Scoring Block & Wilson Fundations Logo */}
        <div className="border-t border-slate-300 pt-4 mt-auto">
          {/* Scoring Row 1 */}
          <div className="flex justify-between items-center text-sm font-medium text-slate-800 mb-2">
            <div>Sounds: <span className="inline-block w-10 border-b border-slate-700"></span> /5</div>
            <div>Words: <span className="inline-block w-10 border-b border-slate-700"></span> /5</div>
            <div>Trick Words: <span className="inline-block w-10 border-b border-slate-700"></span> /2</div>
            <div>Marking: <span className="inline-block w-10 border-b border-slate-700"></span> /5</div>
          </div>

          {/* Scoring Row 2: Sentences Breakdown */}
          <div className="flex gap-10 items-center text-sm font-medium text-slate-800 mb-4">
            <div className="font-semibold text-slate-900">Sentences:</div>
            <div>Words: <span className="inline-block w-10 border-b border-slate-700"></span> /5</div>
            <div>Trick Words: <span className="inline-block w-10 border-b border-slate-700"></span> /3</div>
          </div>

          {/* Checkboxes: Legibility, Capitalization, Punctuation, Phrasing */}
          <div className="flex justify-between items-center text-sm font-medium text-slate-800 mb-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 h-4 border-2 border-slate-700 rounded-xs inline-block"></span>
              <span>Legibility</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 h-4 border-2 border-slate-700 rounded-xs inline-block"></span>
              <span>Capitalization</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 h-4 border-2 border-slate-700 rounded-xs inline-block"></span>
              <span>Punctuation</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 h-4 border-2 border-slate-700 rounded-xs inline-block"></span>
              <span>Phrasing</span>
            </label>
          </div>

          {/* Footer: Owl Logo + Final Score */}
          <div className="flex justify-between items-end pt-2 border-t border-dashed border-slate-300">
            {/* Fundations Logo + Mascot */}
            <div className="flex items-center gap-3">
              <EchoOwlIcon className="w-12 h-12" />
              <div>
                <div className="flex items-center gap-1 font-black text-lg tracking-wider text-slate-900 font-serif">
                  <span className="bg-amber-100 border border-amber-400 px-1 rounded-xs">f</span>
                  <span className="bg-amber-100 border border-amber-400 px-1 rounded-xs">u</span>
                  <span className="bg-amber-100 border border-amber-400 px-1 rounded-xs">n</span>
                  <span className="text-red-600 font-sans text-xl font-black">/</span>
                  <span className="tracking-normal font-sans font-bold text-slate-800">dations</span>
                  <sup className="text-xs">®</sup>
                </div>
                <div className="text-[11px] text-slate-500 font-medium tracking-tight">
                  Wilson Language Basics
                </div>
              </div>
            </div>

            {/* Total Score & Grade */}
            <div className="flex items-baseline gap-6 text-base font-bold text-slate-800">
              <div>
                Score: <span className="inline-block w-16 border-b border-slate-700 text-center font-normal"></span> /{testData.totalScore || 25}
              </div>
              <div>
                Grade: <span className="inline-block w-20 border-b border-slate-700 text-center font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
