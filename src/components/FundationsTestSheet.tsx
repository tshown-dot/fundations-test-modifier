import React from 'react';
import { UnitTestData, ModificationSettings, WordItem, SoundItem, SentenceItem, SentenceWordToken } from '../types/fundations';
import { FundationsGridRow, BlankSlot, GridTile } from './FundationsGridRow';
import { getTileType, calculateTapCount } from '../utils/tileHelper';
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

  // Sound slots for Level 1: discrete blanks on the grass line
  const getSoundSlots = (answers: string[]): BlankSlot[] | undefined => {
    if (!settings.soundBlanksCount) return undefined;
    return answers.map(() => ({
      width: 46,
    }));
  };

  // Sound tiles for Level 2: color-coded sound tile boxes framing the 4 lines
  const getSoundTiles = (soundItem?: SoundItem): GridTile[] | undefined => {
    if (!settings.soundTileBoxes || !soundItem) return undefined;
    return soundItem.answers.map((ans) => {
      const tileType = getTileType(ans, {
        isSuffix: ans === 'ed' || ans === 's' || ans === 'es',
        isWelded: soundItem.prompt.includes('ng') || soundItem.prompt.includes('nk') || soundItem.prompt.includes('old'),
      });
      return {
        type: tileType,
        isRectangle: tileType === 'welded' || tileType === 'suffix',
      };
    });
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

  // Word tiles for Level 2: color-coded tile train framing the 4 lines
  const getWordTiles = (wordItem?: WordItem): GridTile[] | undefined => {
    if (!settings.wordTileTemplate || !wordItem) return undefined;
    return wordItem.tapUnits.map((unit) => {
      const tileType = getTileType(unit.text, {
        isSuffix: unit.type === 'suffix',
        isWelded: unit.type === 'welded',
      });
      return {
        type: tileType,
        isRectangle: tileType === 'welded' || tileType === 'suffix',
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

  // Sentence words breakdown
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

  // Tokenize sentences for Level 2: Untested text, Trick empty capsule, Phonetic blank with tapping dashes
  const getSentenceTokens = (sentence?: SentenceItem): SentenceWordToken[] => {
    if (!sentence) return [];
    const phoneticSet = new Set((sentence.phoneticWords || []).map((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '')));
    const trickSet = new Set((sentence.trickWords || []).map((w) => w.toLowerCase().replace(/[^a-z0-9]/gi, '')));

    return sentence.words.map((word) => {
      const clean = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
      let type: 'untested' | 'phonetic' | 'trick' = 'untested';
      if (trickSet.has(clean)) {
        type = 'trick';
      } else if (phoneticSet.has(clean)) {
        type = 'phonetic';
      }
      return {
        word,
        type,
        tapCount: type === 'phonetic' ? calculateTapCount(clean) : undefined,
      };
    });
  };

  const s1Tokens = getSentenceTokens(testData.sentences[0]);
  const s1TokensLine1 = s1Tokens.slice(0, Math.ceil(s1Tokens.length / 2));
  const s1TokensLine2 = s1Tokens.slice(Math.ceil(s1Tokens.length / 2));

  const s2Tokens = getSentenceTokens(testData.sentences[1]);
  const s2TokensLine1 = s2Tokens.slice(0, Math.ceil(s2Tokens.length / 2));
  const s2TokensLine2 = s2Tokens.slice(Math.ceil(s2Tokens.length / 2));

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
              {Boolean(settings.soundTileBoxes) && (
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

            {/* 4-Line Writing Grid with Authentic Icons (Level 1: blanks, Level 2: tiles directly on lines) */}
            <div className="flex flex-col gap-y-7">
              {/* Row 1: Items 1 and 2 */}
              <div className="grid grid-cols-2 gap-x-12">
                <FundationsGridRow
                  itemNumber={1}
                  slots={getSoundSlots(testData.sounds[0]?.answers || [])}
                  tiles={getSoundTiles(testData.sounds[0])}
                  commasBetweenSlots={settings.soundShowCommas && (testData.sounds[0]?.answers.length || 0) > 1}
                />
                <FundationsGridRow
                  itemNumber={2}
                  slots={getSoundSlots(testData.sounds[1]?.answers || [])}
                  tiles={getSoundTiles(testData.sounds[1])}
                  commasBetweenSlots={settings.soundShowCommas && (testData.sounds[1]?.answers.length || 0) > 1}
                />
              </div>

              {/* Row 2: Items 3 and 4 */}
              <div className="grid grid-cols-2 gap-x-12">
                <FundationsGridRow
                  itemNumber={3}
                  slots={getSoundSlots(testData.sounds[2]?.answers || [])}
                  tiles={getSoundTiles(testData.sounds[2])}
                  commasBetweenSlots={settings.soundShowCommas && (testData.sounds[2]?.answers.length || 0) > 1}
                />
                <FundationsGridRow
                  itemNumber={4}
                  slots={getSoundSlots(testData.sounds[3]?.answers || [])}
                  tiles={getSoundTiles(testData.sounds[3])}
                  commasBetweenSlots={settings.soundShowCommas && (testData.sounds[3]?.answers.length || 0) > 1}
                />
              </div>

              {/* Row 3: Item 5 */}
              <div className="grid grid-cols-2 gap-x-12">
                <FundationsGridRow
                  itemNumber={5}
                  slots={getSoundSlots(testData.sounds[4]?.answers || [])}
                  tiles={getSoundTiles(testData.sounds[4])}
                  commasBetweenSlots={settings.soundShowCommas && (testData.sounds[4]?.answers.length || 0) > 1}
                />
                <div />
              </div>
            </div>
          </div>

          {/* SECTION: Words */}
          <div className="my-auto">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3 tracking-wide pl-1">
              Words:
            </h3>

            {/* 4-Line Writing Grid with Authentic Icons (Level 1: tap blanks, Level 2: connected tiles directly on lines, NO giveaway text) */}
            <div className="flex flex-col gap-y-7">
              {/* Row 1: Items 1 and 2 */}
              <div className="grid grid-cols-2 gap-x-12">
                <FundationsGridRow
                  itemNumber={1}
                  slots={getWordSlots(testData.words[0])}
                  tiles={getWordTiles(testData.words[0])}
                />
                <FundationsGridRow
                  itemNumber={2}
                  slots={getWordSlots(testData.words[1])}
                  tiles={getWordTiles(testData.words[1])}
                />
              </div>

              {/* Row 2: Items 3 and 4 */}
              <div className="grid grid-cols-2 gap-x-12">
                <FundationsGridRow
                  itemNumber={3}
                  slots={getWordSlots(testData.words[2])}
                  tiles={getWordTiles(testData.words[2])}
                />
                <FundationsGridRow
                  itemNumber={4}
                  slots={getWordSlots(testData.words[3])}
                  tiles={getWordTiles(testData.words[3])}
                />
              </div>

              {/* Row 3: Item 5 */}
              <div className="grid grid-cols-2 gap-x-12">
                <FundationsGridRow
                  itemNumber={5}
                  slots={getWordSlots(testData.words[4])}
                  tiles={getWordTiles(testData.words[4])}
                />
                <div />
              </div>
            </div>
          </div>

          {/* Bottom Space */}
          <div className="h-2"></div>
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

              {/* If Level 2 Multiple Choice is active, render vertical stack with 2 under 1 and clear space */}
              {settings.trickWordMultipleChoice ? (
                <div className="flex flex-col gap-y-4">
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

            {/* Authentic 4-Line Fundations Writing Rows for all levels */}
            <div>
              {/* Line Cluster 1: Sentence 1 */}
              <div className={`${isLevel1 ? 'mb-14' : 'mb-6'} flex flex-col gap-y-5`}>
                <FundationsGridRow
                  itemNumber={1}
                  slots={getSentenceWordSlots(s1Line1Words)}
                  sentenceTokens={settings.sentenceClozeScaffold ? s1TokensLine1 : undefined}
                />
                <FundationsGridRow
                  slots={getSentenceWordSlots(s1Line2Words)}
                  sentenceTokens={settings.sentenceClozeScaffold ? s1TokensLine2 : undefined}
                  trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[0]?.punctuation || '.' : undefined}
                />
              </div>

              {/* Line Cluster 2: Sentence 2 */}
              <div className="flex flex-col gap-y-5">
                <FundationsGridRow
                  itemNumber={2}
                  slots={getSentenceWordSlots(s2Words.length > 4 ? s2TokensLine1.map((t) => t.word) : s2Words)}
                  sentenceTokens={settings.sentenceClozeScaffold ? (s2Tokens.length > 4 ? s2TokensLine1 : s2Tokens) : undefined}
                  trailingPunctuation={settings.sentenceClozeScaffold && s2Tokens.length <= 4 && settings.sentencePunctuationCue ? testData.sentences[1]?.punctuation || '.' : undefined}
                />
                <FundationsGridRow
                  slots={getSentenceWordSlots(s2Words.length > 4 ? s2TokensLine2.map((t) => t.word) : [])}
                  sentenceTokens={settings.sentenceClozeScaffold && s2Tokens.length > 4 ? s2TokensLine2 : undefined}
                  trailingPunctuation={settings.sentencePunctuationCue ? testData.sentences[1]?.punctuation || '.' : undefined}
                />
              </div>
            </div>
          </div>

          {/* Solid divider line separating Sentences from the Scoring section */}
          <div className="w-full border-b-2 border-slate-700 my-3" />

          {/* BOTTOM: Scoring Guide */}
          <div className="pt-1">
            {isLevel1 ? (
              /* Grade 1 Scoring Format */
              <>
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800 mb-2 px-1">
                  <div>Sounds: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Marking: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Sentences (Words): <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                </div>
                <div className="flex justify-end items-center gap-3 text-base font-bold text-slate-900 border-t border-slate-300 pt-1.5 px-1">
                  <span>Total:</span>
                  <div className="w-16 border-b-2 border-slate-900"></div>
                  <span>/ {testData.totalScore || 25}</span>
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
                  <div>Sentences (Words): <span className="inline-block w-14 border-b-2 border-slate-700"></span> /5</div>
                  <div>Trick Words: <span className="inline-block w-14 border-b-2 border-slate-700"></span> /3</div>
                </div>
                <div className="flex justify-end items-center gap-3 text-base font-bold text-slate-900 border-t border-slate-300 pt-1.5 px-1">
                  <span>Total:</span>
                  <div className="w-16 border-b-2 border-slate-900"></div>
                  <span>/ {testData.totalScore || 25}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};