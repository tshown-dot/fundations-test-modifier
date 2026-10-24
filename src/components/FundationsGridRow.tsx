import React from 'react';
import { SkylineImage, PlaneImage, GrassImage, WormImage } from './FundationsIcons';
import { TileColorType, SentenceWordToken } from '../types/fundations';

export interface BlankSlot {
  width?: number | string; // width in px or tailwind class
  flexGrow?: number; // allow slots to expand across the full row (for sentences)
  label?: string; // e.g. pre-filled text or hint
  isWider?: boolean;
}

export interface GridTile {
  type: TileColorType;
  text?: string;
  isRectangle?: boolean;
}

interface FundationsGridRowProps {
  itemNumber?: number | string;
  slots?: BlankSlot[]; // Level 1 discrete underlines
  tiles?: GridTile[]; // Level 2 color-coded tiles resting on the 4 lines
  sentenceTokens?: SentenceWordToken[]; // Level 2 sentence frame resting on the 4 lines
  commasBetweenSlots?: boolean; // puts a comma between slots/tiles (for Sounds)
  trailingPunctuation?: string; // e.g. "." at the end of a sentence
  className?: string;
  showIcons?: boolean;
  children?: React.ReactNode;
}

export const FundationsGridRow: React.FC<FundationsGridRowProps> = ({
  itemNumber,
  slots,
  tiles,
  sentenceTokens,
  commasBetweenSlots = false,
  trailingPunctuation,
  className = '',
  showIcons = true,
  children,
}) => {
  // Proportions:
  // Total height: 78px
  // 4 Lines EVENLY SPACED (exact 22px between each line):
  // Line 1 (Skyline): y = 6px
  // Line 2 (Plane line): y = 28px (6 + 22)
  // Line 3 (Grass line): y = 50px (28 + 22)
  // Line 4 (Worm line): y = 72px (50 + 22)
  const totalHeight = 78;

  return (
    <div className={`flex items-start w-full ${className}`}>
      {/* 1. Item Number Column (Aligned with the Grass baseline at y = 50px) */}
      <div className="w-8 shrink-0 flex items-start justify-end pr-1 pt-[18px]">
        {itemNumber !== undefined ? (
          <span className="font-serif text-2xl font-bold text-slate-900 leading-none">
            {itemNumber}.
          </span>
        ) : (
          /* Invisible spacer to maintain identical indentation on continuation lines */
          <div className="w-full" />
        )}
      </div>

      {/* 2. Authentic Guide Icons Column (Centered vertically on each of the 4 evenly spaced lines) */}
      {showIcons && (
        <div
          className="relative w-7 shrink-0 mr-2 select-none"
          style={{ height: `${totalHeight}px` }}
          aria-hidden="true"
        >
          {/* Skyline (centered at y = 6px) */}
          <div className="absolute top-[-4px] left-0 flex items-center justify-center w-6 h-5">
            <SkylineImage className="w-6 h-5 object-contain" />
          </div>

          {/* Plane line (centered at y = 28px) */}
          <div className="absolute top-[18px] left-0 flex items-center justify-center w-7 h-5">
            <PlaneImage className="w-7 h-5 object-contain" />
          </div>

          {/* Grass line (centered at y = 50px) */}
          <div className="absolute top-[40px] left-0 flex items-center justify-center w-6 h-5">
            <GrassImage className="w-6 h-5 object-contain" />
          </div>

          {/* Worm line (centered at y = 72px) */}
          <div className="absolute top-[62px] left-0 flex items-center justify-center w-6 h-5">
            <WormImage className="w-6 h-5 object-contain" />
          </div>
        </div>
      )}

      {/* 3. The 4-Line Writing Grid Container */}
      <div className="relative flex-1" style={{ height: `${totalHeight}px` }}>
        {/* Continuous 4 Guidelines across the entire row (Exact 22px even spacing) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 78"
        >
          {/* 1. Skyline: slightly thicker solid line */}
          <line
            x1="0"
            y1="6"
            x2="100"
            y2="6"
            stroke="#1E293B"
            strokeWidth="2.2"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Plane line: dashed line (22px below Skyline) */}
          <line
            x1="0"
            y1="28"
            x2="100"
            y2="28"
            stroke="#64748B"
            strokeWidth="1.4"
            strokeDasharray="6 4.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3. Grass line: regular solid line (22px below Plane line - baseline) */}
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="#475569"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* 4. Worm line: regular solid line (22px below Grass line - descender) */}
          <line
            x1="0"
            y1="72"
            x2="100"
            y2="72"
            stroke="#64748B"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Level 2 Tile Overlay: Color-coded Fundations sound tile boxes directly framing the 4 lines */}
        {tiles && tiles.length > 0 && (
          <div className="absolute inset-0 flex items-center gap-0.5 z-10 pointer-events-none pl-0.5">
            {tiles.map((tile, index) => {
              let bgBorder = 'bg-yellow-200/45 border-amber-400';
              let widthClass = tile.isRectangle ? 'w-20' : 'w-12';

              if (tile.type === 'vowel') {
                bgBorder = 'bg-orange-200/45 border-orange-400';
                widthClass = tile.isRectangle ? 'w-20' : 'w-12';
              } else if (tile.type === 'welded') {
                bgBorder = 'bg-emerald-200/45 border-emerald-500';
                widthClass = 'w-20';
              } else if (tile.type === 'suffix') {
                bgBorder = 'bg-yellow-200/55 border-yellow-500';
                widthClass = 'w-20';
              }

              return (
                <React.Fragment key={index}>
                  <div
                    className={`h-[68px] ${widthClass} rounded-md border-2 ${bgBorder} flex items-center justify-center select-none shadow-2xs`}
                    style={{ marginTop: '4px' }}
                  >
                    {tile.text && (
                      <span className="font-serif text-2xl font-bold text-slate-900 pb-3">
                        {tile.text}
                      </span>
                    )}
                  </div>

                  {/* Comma between sound tiles */}
                  {commasBetweenSlots && index < tiles.length - 1 && (
                    <div className="relative h-[78px] flex items-end font-serif text-2xl font-black text-slate-950 select-none pb-[26px] px-1">
                      ,
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Level 2 Sentence Frame: Untested words printed directly on the lines, Trick capsule, Phonetic blank with tapping dashes */}
        {sentenceTokens && sentenceTokens.length > 0 && (
          <div className="absolute inset-0 flex items-center gap-x-5 z-10 pointer-events-none pl-0.5 pr-1">
            {sentenceTokens.map((token, index) => {
              if (token.type === 'untested') {
                return (
                  <div
                    key={index}
                    className="font-serif text-2xl font-bold text-slate-900 select-none pb-[26px] px-1"
                  >
                    {token.word}
                  </div>
                );
              }

              if (token.type === 'trick') {
                return (
                  <div
                    key={index}
                    className="min-w-[95px] h-[50px] rounded-full border-2 border-slate-700 bg-white/75 shadow-2xs flex items-center justify-center mb-[14px]"
                  >
                    {/* Clean empty oval pill on the lines - NO text */}
                  </div>
                );
              }

              if (token.type === 'phonetic') {
                const tapCount = token.tapCount || Math.max(3, token.word.length);
                const tapDots = Array.from({ length: tapCount });
                return (
                  <div
                    key={index}
                    className="flex-1 min-w-[85px] max-w-[150px] relative h-[78px] flex flex-col justify-end pb-[26px]"
                  >
                    {/* Prominent writing baseline slot resting on Grass line */}
                    <div
                      className="absolute left-0 right-0 h-[3.5px] bg-slate-950 rounded-xs"
                      style={{ top: '48.5px' }}
                    />
                    {/* Discrete sound tapping dashes underneath Grass line */}
                    <div
                      className="absolute left-0 right-0 flex justify-evenly pointer-events-none"
                      style={{ top: '56px' }}
                    >
                      {tapDots.map((_, dotIdx) => (
                        <div
                          key={dotIdx}
                          className="w-4 h-[2.5px] bg-slate-600 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                );
              }

              return null;
            })}

            {/* Trailing Punctuation Box cue */}
            {trailingPunctuation && (
              <div className="w-7 h-9 border-2 border-slate-800 bg-white/90 rounded-xs flex items-center justify-center font-serif text-2xl font-bold text-slate-900 select-none mb-[22px]">
                {trailingPunctuation}
              </div>
            )}
          </div>
        )}

        {/* Level 1 Scaffold Layer: Distinct blank underlines resting on the Grass line (y = 50px) */}
        {slots && slots.length > 0 && !tiles && !sentenceTokens && (
          <div className="absolute inset-0 flex items-center gap-x-2 z-10 pointer-events-none pr-0.5">
            {slots.map((slot, index) => {
              const defaultWidth = slot.isWider ? 'w-14' : 'w-9';
              const widthStyle: React.CSSProperties = {
                ...(slot.flexGrow !== undefined
                  ? { flex: `${slot.flexGrow} ${slot.flexGrow} 0px` }
                  : typeof slot.width === 'number'
                  ? { width: `${slot.width}px` }
                  : slot.width && !slot.width.startsWith('w-')
                  ? { width: slot.width }
                  : {}),
              };

              return (
                <React.Fragment key={index}>
                  <div
                    className={`relative h-[78px] flex flex-col justify-end ${
                      typeof slot.width === 'string' && slot.width.startsWith('w-')
                        ? slot.width
                        : !slot.width && slot.flexGrow === undefined
                        ? defaultWidth
                        : ''
                    }`}
                    style={widthStyle}
                  >
                    {/* Dark, prominent blank underline resting exactly on the Grass line (y = 50px) */}
                    <div
                      className="absolute left-0 right-0 h-[3.5px] bg-slate-950 rounded-xs"
                      style={{ top: '48.5px' }}
                    />

                    {/* Pre-filled text if applicable */}
                    {slot.label && (
                      <div
                        className="absolute inset-x-0 text-center font-sans text-xl font-bold text-slate-800 leading-none"
                        style={{ top: '28px' }}
                      >
                        {slot.label}
                      </div>
                    )}
                  </div>

                  {/* Comma between sound slots (rests right on the grass line at y = 50px) */}
                  {commasBetweenSlots && index < slots.length - 1 && (
                    <div className="relative h-[78px] flex items-end font-serif text-2xl font-black text-slate-950 select-none pb-[26px]">
                      ,
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            {/* Trailing punctuation cue (rests right on the grass line at y = 50px) */}
            {trailingPunctuation && (
              <div className="relative h-[78px] flex items-end font-serif text-3xl font-black text-slate-950 select-none pb-[22px] pl-1">
                {trailingPunctuation}
              </div>
            )}
          </div>
        )}

        {/* Custom child overlay if provided */}
        {children}
      </div>
    </div>
  );
};
