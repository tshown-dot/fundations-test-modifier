import React from 'react';
import { TileColorType } from '../types/fundations';
import { getTileStyles } from '../utils/tileHelper';

interface FundationsTileProps {
  type: TileColorType;
  letter?: string; // if pre-filled, or empty for student write-in
  className?: string;
  showInternalGuides?: boolean;
}

export const FundationsTile: React.FC<FundationsTileProps> = ({
  type,
  letter = '',
  className = '',
  showInternalGuides = true,
}) => {
  const { container } = getTileStyles(type);

  return (
    <div
      className={`relative flex items-center justify-center select-none font-sans font-bold text-lg ${container} ${className}`}
    >
      {/* Subtle internal writing guideline for early writers */}
      {showInternalGuides && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {/* Dashed plane line at 50% */}
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Solid grass baseline at 78% */}
          <line
            x1="8"
            y1="78"
            x2="92"
            y2="78"
            stroke="#000"
            strokeWidth="2.5"
          />
        </svg>
      )}

      {/* Pre-filled text if present, otherwise blank for student */}
      {letter && (
        <span className="relative z-10 text-slate-900 font-bold text-xl leading-none">
          {letter}
        </span>
      )}
    </div>
  );
};
