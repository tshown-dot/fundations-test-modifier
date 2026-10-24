import React from 'react';
import { UnitTestData, ModificationSettings, WordItem, SoundItem } from '../types/fundations';
import { FundationsGridRow, BlankSlot } from './FundationsGridRow';
import { FundationsTile } from './FundationsTile';
import { getTileType } from '../utils/tileHelper';
import { Level2SentenceFrame } from './Level2SentenceFrame';
import { Level2TrickWordBank } from './Level2TrickWordBank';

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
  const isLevel1 = testData.level === 1;
  const isLevel2Mode = settings.level === 'level2';

  // Sound slots for Level 1: discrete blanks on the grass line
  const getSoundSlots = (answers: string[]): BlankSlot[] | undefined => {
    if (!settings.soundBlanksCount) return undefined;
    return answers.map(() => ({
      width: 46,
    }));
  };

  // Word slots for Level 1: blanks per tap unit (wider for digraphs/suffixes)
  const getWordSlots = (wordItem?: WordItem): BlankSlot[] | undefined => {
    if (!settings.wordTapBlanks || !wordItem) return undefined;
    return wordItem.tapUnits.map((unit) => {
      const isWider = settings.wordWiderDigraphSuffix && (unit.isDigraphOrSuffix || unit.text.length > 1);
      return {
        isWider,
        width: isWider ? (unit.text.length >= 3 ? 54 : 44) : 28,
      };
    });
  };

  // Trick word slots for Level 1: 1 blank line per letter
  const getTrickWordSlots = (word: string): BlankSlot[] | undefined => {
    if (!settings.trickWordLetterBlanks) return undefined;
    return Array.from({ length: word.length }).map(() => ({
      width: 26,
    }));
  };

  // Sentence word slots for Level 1: expand to fill the bounded writing line
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

  // Render a Level 2 Sound Item (Blank Color-Coded Tile Boxes)
  const renderLevel2Sound = (item: SoundItem) => (
    <div className="flex items-center gap-2">
      <div className="w-8 shrink-0 font-serif text-2xl font-bold text-slate-900 text-right pr-1">
        {item.number}.
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {item.answers.map((ans, idx) => {
          const tileType = getTileType(ans, {
            isSuffix: ans === 'ed' || ans === 's' || ans === 'es',
            isWelded: item.prompt.includes('ng') || item.prompt.includes('nk') || item.prompt.includes('old'),
          });

          return (
            <React.Fragment key={idx}>
              <FundationsTile type={tileType} />
              {idx < item.answers.length - 1 && (
                <span className="font-serif text-2xl font-black text-slate-900 self-center">
                  ,
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  // Render a Level 2 Word Item (Connected Tile Sequence + Explicit Marking Directive)
  const renderLevel2Word = (item?: WordItem) => {
    if (!item) return <div />;

    return (
      <div className="flex items-start gap-2">
        {/* Item Number */}
        <div className="w-8 shrink-0 font-serif text-2xl font-bold text-slate-900 text-right pr-1 pt-2">
          {item.number}.
        </div>

        {/* Word Tiles Train & Marking Directive */}
        <div className="flex flex-col">
          {/* Connected sequence of color-coded tile boxes matching phonetic structure */}
          <div className="inline-flex items-center -space-x-[2px] shadow-2xs rounded-sm overflow-hidden">
            {item.tapUnits.map((unit, idx) => {
              const tileType = getTileType(unit.text, {
                isSuffix: unit.type === 'suffix',
                isWelded: unit.type === 'welded',
              });
              return <FundationsTile key={idx} type={tileType} />;
            })}
          </div>

          {/* Explicit Marking Directive from 2025-2026 District Directions */}
          {settings.wordShowMarkingPrompt && (
            <div className="text-[11px] font-semibold text-slate-600 italic mt-1.5 max-w-[270px] leading-tight">
              &bull; {item.markingDescription || 'Spell the word and mark the syllable.'}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center font-sans print:gap-0">
      {/* ================= PAGE 1: Sounds & Words ================= */}
      <div className="print-page bg-white text-black w-[8.5in] h-[11in] px-16 py-7 flex flex-col justify-between border-0 shadow-none print:border-none print:shadow-none print:px-14 print:py-6 box-border">
        <div className="flex flex-col flex-1 justify-between max-w-[670px] mx-auto w-full">
          {/* Header */}
          <div>
            <div className="text-center mb-1.5">
              <h2 className="font-serif text-lg tracking-wide text-slate-800">
                Fundations: End of Unit {testData.unit} Test
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
            <div className="flex items-center justify-between mb-3 pl-1">
              <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-wide">
                Sounds:
              </h3>
              {isLevel2Mode && (
                <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-yellow-100 border border-yellow-400 rounded-xs inline-block" /> Consonant
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-100 border border-orange-400 rounded-xs inline-block" /> Vowel
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-3 bg-emerald-100 border border-emerald-500 rounded-xs inline-block" /> Glued Sound
                  </span>
                </div>
              )}
            </div>

            {/* If Level 2 Tiles are active, render tiles; otherwise render Fundations 4-lines */}
            {settings.soundTileBoxes ? (
              <div className="flex flex-col gap-y-7">
                {/* Row 1: Items 1 and 2 */}
                <div className="grid grid-cols-2 gap-x-12">
                  {renderLevel2Sound(testData.sounds[0])}
                  {renderLevel2Sound(testData.sounds[1])}
                </div>
                {/* Row 2: Items 3 and 4 */}
                <div className="grid grid-cols-2 gap-x-12">
                  {renderLevel2Sound(testData.sounds[2])}
                  {renderLevel2Sound(testData.sounds[3])}
                </div>
                {/* Row 3: Item 5 */}
                <div className="grid grid-cols-2 gap-x-12">
                  {renderLevel2Sound(testData.sounds[4])}
                  <div />
                </div>
              </div>
            ) : (
              /* Standard or Level 1 4-Line Grid */
              <div className="flex flex-col gap-y-10">
                {/* Row 1: Items 1 and 2 */}
                <div className="grid grid-cols-2 gap-x-12">
                  <FundationsGridRow
                    itemNumber={1}
                    slots={getSoundSlots(testData.sounds[0]?.answers || [])}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(testData.sounds[0]?.answers || [])?.length || 0) > 1}
                  />
                  <FundationsGridRow
                    itemNumber={2}
                    slots={getSoundSlots(testData.sounds[1]?.answers || [])}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(testData.sounds[1]?.answers || [])?.length || 0) > 1}
                  />
                </div>

                {/* Row 2: Items 3 and 4 */}
                <div className="grid grid-cols-2 gap-x-12">
                  <FundationsGridRow
                    itemNumber={3}
                    slots={getSoundSlots(testData.sounds[2]?.answers || [])}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(testData.sounds[2]?.answers || [])?.length || 0) > 1}
                  />
                  <FundationsGridRow
                    itemNumber={4}
                    slots={getSoundSlots(testData.sounds[3]?.answers || [])}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(testData.sounds[3]?.answers || [])?.length || 0) > 1}
                  />
                </div>

                {/* Row 3: Item 5 */}
                <div className="grid grid-cols-2 gap-x-12">
                  <FundationsGridRow
                    itemNumber={5}
                    slots={getSoundSlots(testData.sounds[4]?.answers || [])}
                    commasBetweenSlots={settings.soundShowCommas && (getSoundSlots(testData.sounds[4]?.answers || [])?.length || 0) > 1}
                  />
                  <div />
                </div>
              </div>
            )}
          </div>

          {/* SECTION: Words */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 tracking-wide pl-1">
              Words:
            </h3>

            {/* If Level 2 Tiles are active, render connected tiles + marking directive; otherwise Fundations 4-lines */}
            {settings.wordTileTemplate ? (
              <div className="flex flex-col gap-y-6">
                {/* Row 1: Items 1 and 2 */}
                <div className="grid grid-cols-2 gap-x-12">
                  {renderLevel2Word(testData.words[0])}
                  {renderLevel2Word(testData.words[1])}
                </div>
                {/* Row 2: Items 3 and 4 */}
                <div className="grid grid-cols-2 gap-x-12">
                  {renderLevel2Word(testData.words[2])}
                  {renderLevel2Word(testData.words[3])}
                </div>
                {/* Row 3: Item 5 */}
                <div className="grid grid-cols-2 gap-x-12">
                  {renderLevel2Word(testData.words[4])}
                  <div />
                </div>
              </div>
            ) : (
              /* Standard or Level 1 4-Line Grid */
              <div className="flex flex-col gap-y-10">
                {/* Row 1: Items 1 and 2 */}
                <div className="grid grid-cols-2 gap-x-12">
                  <FundationsGridRow
                    itemNumber={1}
                    slots={getWordSlots(testData.words[0])}
                  />
                  <FundationsGridRow
                    itemNumber={2}
                    slots={getWordSlots(testData.words[1])}
                  />
                </div>

                {/* Row 2: Items 3 and 4 */}
                <div className="grid grid-cols-2 gap-x-12">
                  <FundationsGridRow
                    itemNumber={3}
                    slots={getWordSlots(testData.words[2])}
                  />
                  <FundationsGridRow
                    itemNumber={4}
                    slots={getWordSlots(testData.words[3])}
                  />
                </div>

                {/* Row 3: Item 5 */}
                <div className="grid grid-cols-2 gap-x-12">
                  <FundationsGridRow
                    itemNumber={5}
                    slots={getWordSlots(testData.words[4])}
                  />
                  <div />
                </div>
              </div>
            )}
          </div>

          {/* Page 1 Subtle Footer */}
          <div className="text-right text-xs text-slate-400 print:hidden select-none pt-1">
            Page 1 of 2
          </div>
        </div>
      </div>

      {/* ================= PAGE 2: Sentences (+ Trick Words for Level 2) ================= */}
      <div className="print-page bg-white text-black w-[8.5in] h-[11in] px-16 py-7 flex flex-col justify-between border-0 shadow-none print:border-none print:shadow-none print:px-14 print:py-6 box-border">
        <div className="flex flex-col flex-1 justify-between max-w-[670px] mx-auto w-full">
          {/* SECTION: Trick Words (Only shown for Level 2; Grade 1 has no separate trick words section) */}
          {!isLevel1 && testData.trickWords.length > 0 && (
            <div className="mb-2">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
                Trick Words:
              </h3>

              {/* If Level 2 Multiple Choice is active, render 3-option word bank; otherwise Fundations 4-lines */}
              {settings.trickWordMultipleChoice ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {testData.trickWords.map((item) => (
                    <Level2TrickWordBank key={item.number} item={item} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {testData.trickWords.map((item) => (
                    <FundationsGridRow
                      key={item.number}
                      itemNumber={item.number}
                      slots={getTrickWordSlots(item.word)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SECTION: Sentences */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 tracking-wide pl-1">
              Sentences:
            </h3>

            {/* If Level 2 Cloze Scaffold is active, render 3-tier tokenized sentence frame */}
            {settings.sentenceClozeScaffold ? (
              <div className="flex flex-col gap-y-6 my-2">
                <Level2SentenceFrame
                  sentence={testData.sentences[0]}
                  itemNumber={1}
                />
                <Level2SentenceFrame
                  sentence={testData.sentences[1]}
                  itemNumber={2}
                />
              </div>
            ) : (
              /* Standard or Level 1 4-Line Writing Rows */
              <div>
                {/* Line Cluster 1: Sentence 1 */}
                <div className={`${isLevel1 ? 'mb-16' : 'mb-12'} flex flex-col gap-y-6`}>
                  <FundationsGridRow
                    itemNumber={1}
                    slots={getSentenceWordSlots(s1Line1Words)}
                  />
                  <FundationsGridRow
                    slots={getSentenceWordSlots(s1Line2Words)}
                    trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[0]?.punctuation || '.' : undefined}
                  />
                </div>

                {/* Line Cluster 2: Sentence 2 */}
                <div className="flex flex-col gap-y-6">
                  <FundationsGridRow
                    itemNumber={2}
                    slots={getSentenceWordSlots(s2Words)}
                    trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[1]?.punctuation || '.' : undefined}
                  />
                  <FundationsGridRow />
                </div>
              </div>
            )}
          </div>

          {/* Solid divider line separating Sentences from the Scoring section */}
          <div className="w-full border-b-2 border-slate-700 my-4" />

          {/* BOTTOM: Scoring Guide */}
          <div className="pt-1">
            {isLevel1 ? (
              /* Grade 1 Scoring Format */
              <>
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800 mb-2 px-1">
                  <div>Sounds: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Marking: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                </div>

                <div className="flex gap-12 items-center text-sm font-semibold text-slate-800 mb-3 px-1">
                  <div className="font-bold text-slate-900">Sentences:</div>
                  <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Trick Words in Sentence: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                </div>
              </>
            ) : (
              /* Grade 2 Scoring Format */
              <>
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800 mb-2 px-1">
                  <div>Sounds: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /2</div>
                  <div>Marking: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                </div>

                <div className="flex gap-12 items-center text-sm font-semibold text-slate-800 mb-3 px-1">
                  <div className="font-bold text-slate-900">Sentences:</div>
                  <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /3</div>
                </div>
              </>
            )}

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
