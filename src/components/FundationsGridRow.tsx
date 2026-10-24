import React from 'react';
import { SkylineIcon, PlaneIcon, GrassIcon, WormIcon } from './FundationsIcons';

export interface BlankSlot {
  width?: number | string; // width in px or tailwind class
  label?: string; // e.g. pre-filled text or hint
  isWider?: boolean;
  isPunctuation?: boolean;
}

interface FundationsGridRowProps {
  itemNumber?: number | string;
  width?: string;
  slots?: BlankSlot[]; // if provided, renders distinct blank slots
  commasBetweenSlots?: boolean; // puts a comma between slots (for Sounds)
  trailingPunctuation?: string; // e.g. "." at the end of a sentence
  className?: string;
  showIcons?: boolean;
}

export const FundationsGridRow: React.FC<FundationsGridRowProps> = ({
  itemNumber,
  width = 'w-full',
  slots,
  commasBetweenSlots = false,
  trailingPunctuation,
  className = '',
  showIcons = true,
}) => {
  // Height metrics matching authentic Fundations proportions
  // Skyline: y=4px, Plane: y=18px (dashed), Grass: y=32px (baseline), Worm: y=42px
  const totalHeight = 46;

  return (
    <div className={`flex items-start gap-1.5 ${width} ${className}`}>
      {/* Item Number */}
      {itemNumber !== undefined && (
        <div className="w-6 shrink-0 pt-2 font-serif text-xl font-bold text-slate-800 text-right pr-0.5">
          {itemNumber}.
        </div>
      )}

      {/* 4 Guide Icons on Left */}
      {showIcons && (
        <div
          className="relative w-4.5 shrink-0 flex flex-col justify-between select-none"
          style={{ height: `${totalHeight}px` }}
          aria-hidden="true"
        >
          {/* Skyline icon (top) */}
          <div className="absolute top-[0px] left-0">
            <SkylineIcon className="w-4 h-4 opacity-75" />
          </div>
          {/* Plane icon (middle-upper) */}
          <div className="absolute top-[12px] left-0">
            <PlaneIcon className="w-4 h-4 opacity-75" />
          </div>
          {/* Grass icon (grass line) */}
          <div className="absolute top-[25px] left-0">
            <GrassIcon className="w-4 h-4 opacity-80" />
          </div>
          {/* Worm icon (worm line) */}
          <div className="absolute top-[36px] left-0">
            <WormIcon className="w-4 h-4 opacity-75" />
          </div>
        </div>
      )}

      {/* Writing Grid Container */}
      <div className="relative flex-1" style={{ height: `${totalHeight}px` }}>
        {/* If NO slots are specified -> Standard Continuous Fundations Grid */}
        {!slots || slots.length === 0 ? (
          <svg
            className="w-full h-full block"
            preserveAspectRatio="none"
            viewBox="0 0 100 46"
          >
            {/* Skyline (solid line) */}
            <line x1="0" y1="6" x2="100" y2="6" stroke="#94A3B8" strokeWidth="0.8" />
            {/* Plane line (dashed line) */}
            <line
              x1="0"
              y1="19"
              x2="100"
              y2="19"
              stroke="#94A3B8"
              strokeWidth="0.8"
              strokeDasharray="3 3"
            />
            {/* Grass line (solid baseline) */}
            <line x1="0" y1="32" x2="100" y2="32" stroke="#475569" strokeWidth="1.2" />
            {/* Worm line (solid line) */}
            <line x1="0" y1="42" x2="100" y2="42" stroke="#94A3B8" strokeWidth="0.8" />
          </svg>
        ) : (
          /* Modified Slots Mode: discrete slots with Fundations guide lines passing through */
          <div className="relative w-full h-full flex items-center">
            {/* Background 4-lines that guide the row */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 46"
            >
              {/* Skyline */}
              <line x1="0" y1="6" x2="100" y2="6" stroke="#CBD5E1" strokeWidth="0.6" />
              {/* Plane line (dashed) */}
              <line
                x1="0"
                y1="19"
                x2="100"
                y2="19"
                stroke="#CBD5E1"
                strokeWidth="0.6"
                strokeDasharray="2.5 2.5"
              />
              {/* Grass line */}
              <line x1="0" y1="32" x2="100" y2="32" stroke="#94A3B8" strokeWidth="0.6" />
              {/* Worm line */}
              <line x1="0" y1="42" x2="100" y2="42" stroke="#CBD5E1" strokeWidth="0.6" />
            </svg>

            {/* Individual blanks / slots */}
            <div className="relative z-10 flex items-center flex-wrap gap-x-2 gap-y-1">
              {slots.map((slot, index) => {
                const defaultWidth = slot.isWider ? 'w-14' : 'w-8';
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
                      className={`relative flex flex-col justify-end h-[46px] ${
                        typeof slot.width === 'string' && slot.width.startsWith('w-')
                          ? slot.width
                          : !slot.width
                          ? defaultWidth
                          : ''
                      }`}
                      style={widthStyle}
                    >
                      {/* Prominent dark Grass Line underline for this slot */}
                      <div className="absolute top-[31px] inset-x-0 h-[2.5px] bg-slate-900 rounded-xs" />
                      
                      {/* Pre-filled label / letter / word if provided */}
                      {slot.label && (
                        <div className="absolute top-[12px] inset-x-0 text-center font-sans text-base font-semibold text-slate-800 leading-none">
                          {slot.label}
                        </div>
                      )}
                    </div>

                    {/* Comma between sound slots */}
                    {commasBetweenSlots && index < slots.length - 1 && (
                      <span className="font-serif text-xl font-bold text-slate-800 self-end mb-2 mr-1">
                        ,
                      </span>
                    )}
                  </React.Fragment>
                );
              })}

              {/* Trailing punctuation cue (e.g., period at the end of sentence) */}
              {trailingPunctuation && (
                <span className="font-serif text-2xl font-black text-slate-900 self-end mb-2 ml-0.5">
                  {trailingPunctuation}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
