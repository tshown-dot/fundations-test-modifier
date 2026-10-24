import React from 'react';
import { SkylineImage, PlaneImage, GrassImage, WormImage } from './FundationsIcons';

export interface BlankSlot {
  width?: number | string; // width in px or tailwind class
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
  // Proportions optimized for 1st and 2nd graders:
  // Total height: 68px
  // Skyline: y = 8px (slightly thicker solid)
  // Plane line: y = 30px (dashed)
  // Grass line: y = 52px (regular solid baseline)
  // Worm line: y = 64px (regular solid descender)
  const totalHeight = 68;

  return (
    <div className={`flex items-start w-full ${className}`}>
      {/* 1. Item Number Column (Fixed 32px width for 100% consistent alignment across all rows) */}
      <div className="w-8 shrink-0 flex items-start justify-end pr-1 pt-[22px]">
        {itemNumber !== undefined ? (
          <span className="font-serif text-2xl font-bold text-slate-900 leading-none">
            {itemNumber}.
          </span>
        ) : (
          /* Invisible spacer to maintain identical indentation on continuation lines */
          <div className="w-full" />
        )}
      </div>

      {/* 2. Authentic Guide Icons Column (Fixed 32px width, vertically centered on each line) */}
      {showIcons && (
        <div
          className="relative w-8 shrink-0 mr-2 select-none"
          style={{ height: `${totalHeight}px` }}
          aria-hidden="true"
        >
          {/* Skyline (centered at y = 8px) */}
          <div className="absolute top-[-2px] left-0.5 flex items-center justify-center w-6 h-5">
            <SkylineImage className="w-6 h-5 object-contain" />
          </div>

          {/* Plane line (centered at y = 30px) */}
          <div className="absolute top-[20px] left-0 flex items-center justify-center w-7 h-5">
            <PlaneImage className="w-7 h-5 object-contain" />
          </div>

          {/* Grass line (centered at y = 52px) */}
          <div className="absolute top-[42px] left-0.5 flex items-center justify-center w-6 h-5">
            <GrassImage className="w-6 h-5 object-contain" />
          </div>

          {/* Worm line (centered at y = 64px) */}
          <div className="absolute top-[54px] left-0.5 flex items-center justify-center w-6 h-5">
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
          viewBox="0 0 100 68"
        >
          {/* 1. Skyline: slightly thicker solid */}
          <line
            x1="0"
            y1="8"
            x2="100"
            y2="8"
            stroke="#1E293B"
            strokeWidth="1.8"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Plane line: dashed line */}
          <line
            x1="0"
            y1="30"
            x2="100"
            y2="30"
            stroke="#64748B"
            strokeWidth="1.3"
            strokeDasharray="6 4.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3. Grass line: regular solid line (baseline) */}
          <line
            x1="0"
            y1="52"
            x2="100"
            y2="52"
            stroke="#475569"
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
          />

          {/* 4. Worm line: regular solid line (descender) */}
          <line
            x1="0"
            y1="64"
            x2="100"
            y2="64"
            stroke="#64748B"
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Level 1 Scaffold Layer: Distinct blank underlines drawn on the Grass line */}
        {slots && slots.length > 0 && (
          <div className="absolute inset-0 flex items-center gap-x-2.5 z-10 pointer-events-none">
            {slots.map((slot, index) => {
              const defaultWidth = slot.isWider ? 'w-16' : 'w-10';
              const widthStyle =
                typeof slot.width === 'number'
                  ? { width: `${slot.width}px` }
                  : typeof slot.width === 'string' && slot.width.startsWith('w-')
                  ? {}
                  : slot.width
                  ? { width: slot.width }
                  : {};

              return (
                <React.Fragment key={index}>
                  <div
                    className={`relative h-[68px] flex flex-col justify-end ${
                      typeof slot.width === 'string' && slot.width.startsWith('w-')
                        ? slot.width
                        : !slot.width
                        ? defaultWidth
                        : ''
                    }`}
                    style={widthStyle}
                  >
                    {/* Dark, prominent blank underline resting exactly on the Grass line (y = 52px) */}
                    <div
                      className="absolute left-0 right-0 h-[3.5px] bg-slate-950 rounded-xs"
                      style={{ top: '50px' }}
                    />

                    {/* Pre-filled text if applicable */}
                    {slot.label && (
                      <div
                        className="absolute inset-x-0 text-center font-sans text-xl font-bold text-slate-800 leading-none"
                        style={{ top: '30px' }}
                      >
                        {slot.label}
                      </div>
                    )}
                  </div>

                  {/* Comma between sound slots (rests right on the grass line) */}
                  {commasBetweenSlots && index < slots.length - 1 && (
                    <div
                      className="relative h-[68px] flex items-end font-serif text-2xl font-black text-slate-950 select-none pb-[14px]"
                    >
                      ,
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            {/* Trailing punctuation cue (rests right on the grass line at the end of the sentence) */}
            {trailingPunctuation && (
              <div
                className="relative h-[68px] flex items-end font-serif text-3xl font-black text-slate-950 select-none pb-[12px] pl-0.5"
              >
                {trailingPunctuation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
