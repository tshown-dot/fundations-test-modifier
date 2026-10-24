import React from 'react';
import { TrickWordItem } from '../types/fundations';
import { getTrickWordOptions } from '../data/trickWordDistractors';
import { FundationsGridRow } from './FundationsGridRow';

interface Level2TrickWordBankProps {
  item: TrickWordItem;
}

export const Level2TrickWordBank: React.FC<Level2TrickWordBankProps> = ({ item }) => {
  const options = getTrickWordOptions(item.word);

  return (
    <div className="flex flex-col w-full gap-2">
      {/* 1. Item Number & 3-Option Word Bank Row */}
      <div className="flex items-center gap-3 pl-1">
        <div className="w-8 shrink-0 font-serif text-2xl font-bold text-slate-900 text-right pr-1">
          {item.number}.
        </div>

        <div className="flex items-center gap-6">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-lg border-2 border-slate-300 bg-white shadow-2xs"
            >
              <span className="w-4 h-4 border-2 border-slate-700 rounded-full inline-block" />
              <span className="font-serif text-xl font-bold text-slate-900 tracking-wide">
                {opt}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Authentic Fundations 4-Line Grid for Copying */}
      <div className="w-full pl-6">
        <FundationsGridRow showIcons={true} />
      </div>
    </div>
  );
};
