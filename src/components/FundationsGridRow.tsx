import React from 'react';
import { SkylineImage, PlaneImage, GrassImage, WormImage } from './FundationsIcons';

export interface BlankSlot {
  width?: number | string; // width in px or tailwind class
  flexGrow?: number; // allow slots to expand across the full row (for sentences)
  label?: string; // e.g. pre-filled text or hint
  isWider?: boolean;
}

interface FundationsGridRowProps {
  itemNumber?: number | string;
  slots?: BlankSlot[]; // if provided, renders distinct blank slots on the grass line
  commasBetweenSlots?: boolean; // puts a comma between slots (for Sounds)
  trailingPunctuation?: string; // e.g. "." at the end of a sentence
  className?: string;
  showIcons?: boolean;
}

export const FundationsGridRow: React.FC<FundationsGridRowProps> = ({
  itemNumber,
  slots,
  commasBetweenSlots = false,
  trailingPunctuation,
  className = '',
  showIcons = true,
}) => {
  // Line Proportions:
  // Total height: 78px
  // Skyline: y = 8px (slightly thicker solid)
  // Plane line: y = 34px (dashed line, 26px below skyline)
  // Grass line: y = 60px (regular solid baseline, 26px below plane line)
  // Worm line: y = 74px (regular solid descender, 14px below grass line)
  const totalHeight = 78;

  return (
    <div className={`flex items-start w-full ${className}`}>
      {/* 1. Item Number Column (Fixed 32px width for 100% consistent alignment across all rows) */}
      <div className="w-8 shrink-0 flex items-start justify-end pr-1 pt-[28px]">
        {itemNumber !== undefined ? (
          <span className="font-serif text-2xl font-bold text-slate-900 leading-none">
            {itemNumber}.
          </span>
        ) : (
          /* Invisible spacer to maintain identical indentation on continuation lines */
          <div className="w-full" />
        )}
      </div>

      {/* 2. Authentic Guide Icons Column (Fixed 28px width, vertically centered on each line) */}
      {showIcons && (
        <div
          className="relative w-7 shrink-0 mr-2 select-none"
          style={{ height: `${totalHeight}px` }}
          aria-hidden="true"
        >
          {/* Skyline (centered at y = 8px) */}
          <div className="absolute top-[-2px] left-0 flex items-center justify-center w-6 h-5">
            <SkylineImage className="w-6 h-5 object-contain" />
          </div>

          {/* Plane line (centered at y = 34px) */}
          <div className="absolute top-[24px] left-0 flex items-center justify-center w-7 h-5">
            <PlaneImage className="w-7 h-5 object-contain" />
          </div>

          {/* Grass line (centered at y = 60px) */}
          <div className="absolute top-[50px] left-0 flex items-center justify-center w-6 h-5">
            <GrassImage className="w-6 h-5 object-contain" />
          </div>

          {/* Worm line (centered at y = 74px) */}
          <div className="absolute top-[64px] left-0 flex items-center justify-center w-6 h-5">
            <WormImage className="w-6 h-5 object-contain" />
          </div>
        </div>
      )}

      {/* 3. The 4-Line Writing Grid Container */}
      <div className="relative flex-1" style={{ height: `${totalHeight}px` }}>
        {/* Continuous 4 Guidelines across the entire row */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 78"
        >
          {/* 1. Skyline: slightly thicker solid line */}
          <line
            x1="0"
            y1="8"
            x2="100"
            y2="8"
            stroke="#1E293B"
            strokeWidth="2.2"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Plane line: dashed line */}
          <line
            x1="0"
            y1="34"
            x2="100"
            y2="34"
            stroke="#64748B"
            strokeWidth="1.4"
            strokeDasharray="6 4.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3. Grass line: regular solid line (baseline) */}
          <line
            x1="0"
            y1="60"
            x2="100"
            y2="60"
            stroke="#475569"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* 4. Worm line: regular solid line (descender) */}
          <line
            x1="0"
            y1="74"
            x2="100"
            y2="74"
            stroke="#64748B"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Level 1 Scaffold Layer: Distinct blank underlines drawn on the Grass line */}
        {slots && slots.length > 0 && (
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
                    {/* Dark, prominent blank underline resting exactly on the Grass line (y = 60px) */}
                    <div
                      className="absolute left-0 right-0 h-[3.5px] bg-slate-950 rounded-xs"
                      style={{ top: '58px' }}
                    />

                    {/* Pre-filled text if applicable */}
                    {slot.label && (
                      <div
                        className="absolute inset-x-0 text-center font-sans text-xl font-bold text-slate-800 leading-none"
                        style={{ top: '36px' }}
                      >
                        {slot.label}
                      </div>
                    )}
                  </div>

                  {/* Comma between sound slots (rests right on the grass line) */}
                  {commasBetweenSlots && index < slots.length - 1 && (
                    <div className="relative h-[78px] flex items-end font-serif text-2xl font-black text-slate-950 select-none pb-[18px]">
                      ,
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            {/* Trailing punctuation cue (rests right on the grass line at the end of the sentence) */}
            {trailingPunctuation && (
              <div className="relative h-[78px] flex items-end font-serif text-3xl font-black text-slate-950 select-none pb-[14px] pl-1">
                {trailingPunctuation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
