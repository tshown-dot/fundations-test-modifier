import React from 'react';
import { UnitTestData, ModificationSettings } from '../types/fundations';
import { FundationsGridRow, BlankSlot } from './FundationsGridRow';

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
  // Sound slots: discrete blanks on the grass line
  const getSoundSlots = (answers: string[]): BlankSlot[] | undefined => {
    if (!settings.soundBlanksCount) return undefined;
    return answers.map(() => ({
      width: 52,
    }));
  };

  // Word slots: blanks per tap unit (wider for digraphs/suffixes)
  const getWordSlots = (wordItem: (typeof testData.words)[0]): BlankSlot[] | undefined => {
    if (!settings.wordTapBlanks) return undefined;
    return wordItem.tapUnits.map((unit) => {
      const isWider = settings.wordWiderDigraphSuffix && (unit.isDigraphOrSuffix || unit.text.length > 1);
      return {
        isWider,
        width: isWider ? (unit.text.length >= 3 ? 60 : 48) : 34,
      };
    });
  };

  // Trick word slots: 1 blank line per letter
  const getTrickWordSlots = (word: string): BlankSlot[] | undefined => {
    if (!settings.trickWordLetterBlanks) return undefined;
    return Array.from({ length: word.length }).map(() => ({
      width: 32,
    }));
  };

  // Sentence word slots: EXPAND to fill the entire writing line across the page
  const s1Words = testData.sentences[0]?.words || [];
  const s1Line1Words = s1Words.slice(0, Math.ceil(s1Words.length / 2));
  const s1Line2Words = s1Words.slice(Math.ceil(s1Words.length / 2));

  const s2Words = testData.sentences[1]?.words || [];

  const getSentenceWordSlots = (words: string[]): BlankSlot[] | undefined => {
    if (!settings.sentenceWordBlanks) return undefined;
    return words.map((w) => ({
      flexGrow: Math.max(1, Math.min(3, Math.round(w.length / 2.5))),
    }));
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center font-sans print:gap-0">
      {/* ================= PAGE 1: Sounds & Words (Clean pure white, NO grey borders) ================= */}
      <div className="print-page bg-white text-black w-[8.5in] h-[11in] px-9 py-7 shadow-md flex flex-col justify-between border-0 print:border-none print:shadow-none print:px-6 print:py-4">
        <div className="flex flex-col flex-1 justify-between">
          {/* Header */}
          <div>
            <div className="text-center mb-1.5">
              <h2 className="font-serif text-lg tracking-wide text-slate-800">
                {testData.title || 'Fundations: End of Unit Test'}
              </h2>
              <h1 className="font-serif text-4xl font-extrabold tracking-wider text-slate-900 mt-0.5">
                Dictation
              </h1>
            </div>

            {/* Name & Date Row */}
            <div className="flex justify-between items-baseline mb-3 text-base font-medium text-slate-800 px-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg font-bold">Name</span>
                <div className="w-80 border-b-2 border-slate-700 pb-0.5 px-2 font-sans font-normal text-slate-900 text-lg">
                  {studentName}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg font-bold">Date</span>
                <div className="w-64 border-b-2 border-slate-700 pb-0.5"></div>
              </div>
            </div>
          </div>

          {/* SECTION: Sounds (with 28px breathing room between items) */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Sounds:
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              {/* Column 1: Items 1, 2, 3 */}
              <div className="flex flex-col gap-y-7">
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
              <div className="flex flex-col gap-y-7">
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

          {/* SECTION: Words (with 28px breathing room between items) */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Words:
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-7">
              {/* Column 1: Items 1, 2, 3 */}
              <div className="flex flex-col gap-y-7">
                {testData.words.slice(0, 3).map((item) => (
                  <FundationsGridRow
                    key={item.number}
                    itemNumber={item.number}
                    slots={getWordSlots(item)}
                  />
                ))}
              </div>

              {/* Column 2: Items 4, 5 */}
              <div className="flex flex-col gap-y-7">
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

          {/* Page 1 Subtle Footer */}
          <div className="text-right text-xs text-slate-400 print:hidden select-none pt-1">
            Page 1 of 2
          </div>
        </div>
      </div>

      {/* ================= PAGE 2: Trick Words & Sentences (Clean pure white, NO grey borders) ================= */}
      <div className="print-page bg-white text-black w-[8.5in] h-[11in] px-9 py-7 shadow-md flex flex-col justify-between border-0 print:border-none print:shadow-none print:px-6 print:py-4">
        <div className="flex flex-col flex-1 justify-between">
          {/* SECTION: Trick Words */}
          <div className="mb-2">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Trick Words:
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
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
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Sentences:
            </h3>

            {/* Sentence 1 */}
            <div className="mb-5 space-y-3">
              {/* Line 1 */}
              <FundationsGridRow
                itemNumber={1}
                slots={getSentenceWordSlots(s1Line1Words)}
              />
              {/* Line 2 continuation (no itemNumber, perfectly indented, full row width) */}
              <FundationsGridRow
                slots={getSentenceWordSlots(s1Line2Words)}
                trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[0]?.punctuation || '.' : undefined}
              />
            </div>

            {/* Sentence 2 */}
            <div className="space-y-3">
              {/* Line 1 */}
              <FundationsGridRow
                itemNumber={2}
                slots={getSentenceWordSlots(s2Words)}
                trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[1]?.punctuation || '.' : undefined}
              />
              {/* Line 2 continuation (full width writing line) */}
              <FundationsGridRow />
            </div>
          </div>

          {/* BOTTOM: Scoring Guide (No logos, clean layout) */}
          <div className="border-t-2 border-slate-500 pt-3 mt-2">
            {/* Scoring Row 1 */}
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 mb-2 px-1">
              <div>Sounds: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
              <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
              <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /2</div>
              <div>Marking: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
            </div>

            {/* Scoring Row 2: Sentences Breakdown */}
            <div className="flex gap-12 items-center text-sm font-semibold text-slate-800 mb-2.5 px-1">
              <div className="font-bold text-slate-900">Sentences:</div>
              <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
              <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /3</div>
            </div>

            {/* Checkboxes: Legibility, Capitalization, Punctuation, Phrasing */}
            <div className="flex justify-between items-center text-sm font-medium text-slate-800 mb-3 px-1">
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

            {/* Footer: Final Score & Grade */}
            <div className="flex justify-end items-baseline gap-10 pt-2 border-t border-dashed border-slate-300 px-1 text-base font-bold text-slate-800">
              <div>
                Score: <span className="inline-block w-20 border-b-2 border-slate-700 text-center font-normal"></span> /{testData.totalScore || 25}
              </div>
              <div>
                Grade: <span className="inline-block w-24 border-b-2 border-slate-700 text-center font-normal"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
