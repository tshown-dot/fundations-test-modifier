import React from 'react';
import { SentenceItem } from '../types/fundations';

interface Level2SentenceFrameProps {
  sentence: SentenceItem;
  itemNumber: number;
}

export const Level2SentenceFrame: React.FC<Level2SentenceFrameProps> = ({
  sentence,
  itemNumber,
}) => {
  const cleanWord = (w: string) => w.replace(/[.,!?;:]/g, '').toLowerCase();

  return (
    <div className="flex items-start w-full my-3">
      {/* Item Number */}
      <div className="w-8 shrink-0 flex items-start justify-end pr-2 pt-1">
        <span className="font-serif text-2xl font-bold text-slate-900 leading-none">
          {itemNumber}.
        </span>
      </div>

      {/* Sentence Frame with 3-tier word tokens */}
      <div className="flex-1 flex flex-wrap items-end gap-x-3.5 gap-y-6 pt-1">
        {sentence.words.map((rawWord, idx) => {
          const word = rawWord.replace(/[.,!?;:]/g, '');
          const isPhonetic = sentence.phoneticWords.some(
            (pw) => cleanWord(pw) === cleanWord(word)
          );
          const isTrick = sentence.trickWords.some(
            (tw) => cleanWord(tw) === cleanWord(word)
          );

          if (isTrick) {
            // Trick Word: circled blank capsule
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex items-center justify-center px-4 py-1.5 border-2 border-slate-700 rounded-full bg-amber-50/70 min-w-[90px] shadow-2xs">
                  <span className="font-sans text-xs font-bold text-amber-900 tracking-wide">
                    ( Trick Word )
                  </span>
                </div>
              </div>
            );
          }

          if (isPhonetic) {
            // Phonetic Word: blank line with discrete sound/tapping dashes underneath
            const tapCount = Math.max(3, Math.min(6, Math.round(word.length * 0.8)));
            const lineWidth = Math.max(70, Math.min(130, word.length * 16 + 24));

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Writing line */}
                <div
                  className="border-b-[3px] border-slate-900 h-8 flex items-end justify-center"
                  style={{ width: `${lineWidth}px` }}
                />
                {/* Discrete tapping dashes underneath */}
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  {Array.from({ length: tapCount }).map((_, dIdx) => (
                    <span
                      key={dIdx}
                      className="w-3.5 h-1 bg-slate-500 rounded-full inline-block"
                      title="Tap sound"
                    />
                  ))}
                </div>
              </div>
            );
          }

          // Untested Word: printed directly in standard text
          return (
            <div key={idx} className="pb-1.5">
              <span className="font-serif text-2xl font-bold text-slate-800 tracking-wide">
                {rawWord}
              </span>
            </div>
          );
        })}

        {/* Punctuation Box at end of sentence */}
        <div className="pb-1.5">
          <span className="inline-flex items-center justify-center w-7 h-8 border-2 border-slate-700 rounded-xs bg-slate-50 font-serif text-2xl font-black text-slate-900">
            {sentence.punctuation || '.'}
          </span>
        </div>
      </div>
    </div>
  );
};
