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
      width: 48,
    }));
  };

  // Word slots: blanks per tap unit (wider for digraphs/suffixes)
  const getWordSlots = (wordItem: (typeof testData.words)[0]): BlankSlot[] | undefined => {
    if (!settings.wordTapBlanks) return undefined;
    return wordItem.tapUnits.map((unit) => {
      const isWider = settings.wordWiderDigraphSuffix && (unit.isDigraphOrSuffix || unit.text.length > 1);
      return {
        isWider,
        width: isWider ? (unit.text.length >= 3 ? 56 : 46) : 30,
      };
    });
  };

  // Trick word slots: 1 blank line per letter
  const getTrickWordSlots = (word: string): BlankSlot[] | undefined => {
    if (!settings.trickWordLetterBlanks) return undefined;
    return Array.from({ length: word.length }).map(() => ({
      width: 28,
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
      {/* ================= PAGE 1: Sounds & Words ================= */}
      <div className="print-page bg-white text-black w-[8.5in] h-[11in] px-14 py-7 flex flex-col justify-between border-0 shadow-none print:border-none print:shadow-none print:px-12 print:py-5">
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
                <div className="w-72 border-b-2 border-slate-700 pb-0.5 px-2 font-sans font-normal text-slate-900 text-lg">
                  {studentName}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg font-bold">Date</span>
                <div className="w-56 border-b-2 border-slate-700 pb-0.5"></div>
              </div>
            </div>
          </div>

          {/* SECTION: Sounds */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 tracking-wide pl-1">
              Sounds:
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {/* Column 1: Items 1, 2, 3 */}
              <div className="flex flex-col gap-y-10">
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
              <div className="flex flex-col gap-y-10">
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
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 tracking-wide pl-1">
              Words:
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {/* Column 1: Items 1, 2, 3 */}
              <div className="flex flex-col gap-y-10">
                {testData.words.slice(0, 3).map((item) => (
                  <FundationsGridRow
                    key={item.number}
                    itemNumber={item.number}
                    slots={getWordSlots(item)}
                  />
                ))}
              </div>

              {/* Column 2: Items 4, 5 */}
              <div className="flex flex-col gap-y-10">
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

      {/* ================= PAGE 2: Trick Words & Sentences ================= */}
      <div className="print-page bg-white text-black w-[8.5in] h-[11in] px-14 py-7 flex flex-col justify-between border-0 shadow-none print:border-none print:shadow-none print:px-12 print:py-5">
        <div className="flex flex-col flex-1 justify-between">
          {/* SECTION: Trick Words */}
          <div className="mb-1">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Trick Words:
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {testData.trickWords.map((item) => (
                <FundationsGridRow
                  key={item.number}
                  itemNumber={item.number}
                  slots={getTrickWordSlots(item.word)}
                />
              ))}
            </div>
          </div>

          {/* SECTION: Sentences (Spacious gaps between clusters) */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Sentences:
            </h3>

            {/* Line Cluster 1: Sentence 1 */}
            <div className="mb-14 flex flex-col gap-y-6">
              {/* Line 1 */}
              <FundationsGridRow
                itemNumber={1}
                slots={getSentenceWordSlots(s1Line1Words)}
              />
              {/* Line 2 continuation */}
              <FundationsGridRow
                slots={getSentenceWordSlots(s1Line2Words)}
                trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[0]?.punctuation || '.' : undefined}
              />
            </div>

            {/* Line Cluster 2: Sentence 2 */}
            <div className="flex flex-col gap-y-6">
              {/* Line 1 */}
              <FundationsGridRow
                itemNumber={2}
                slots={getSentenceWordSlots(s2Words)}
                trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[1]?.punctuation || '.' : undefined}
              />
              {/* Line 2 continuation (clean writing line for students) */}
              <FundationsGridRow />
            </div>
          </div>

          {/* Solid divider line separating Sentences from the Scoring section */}
          <div className="w-full border-b-2 border-slate-700 my-4" />

          {/* BOTTOM: Scoring Guide */}
          <div className="pt-1">
            {/* Scoring Row 1 */}
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 mb-2 px-1">
              <div>Sounds: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
              <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
              <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /2</div>
              <div>Marking: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
            </div>

            {/* Scoring Row 2: Sentences Breakdown */}
            <div className="flex gap-12 items-center text-sm font-semibold text-slate-800 mb-3 px-1">
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
            <div className="flex justify-end items-baseline gap-10 pt-1 px-1 text-base font-bold text-slate-800">
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
