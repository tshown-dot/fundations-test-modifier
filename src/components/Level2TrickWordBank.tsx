import React from 'react';
import { TrickWordItem } from '../types/fundations';
import { getTrickWordOptions } from '../data/trickWordDistractors';

interface Level2TrickWordBankProps {
  item: TrickWordItem;
}

export const Level2TrickWordBank: React.FC<Level2TrickWordBankProps> = ({ item }) => {
  const options = getTrickWordOptions(item.word);

  return (
    <div className="flex items-start w-full gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50/50">
      {/* Item Number */}
      <div className="w-6 shrink-0 pt-1 font-serif text-2xl font-bold text-slate-900 text-right pr-1">
        {item.number}.
      </div>

      <div className="flex-1 flex flex-col gap-2">
        {/* 3-Option Word Bank Row */}
        <div className="flex items-center gap-6">
          {options.map((opt, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-md border border-slate-300 hover:border-amber-400 transition shadow-2xs"
            >
              <span className="w-4 h-4 border-2 border-slate-700 rounded-full inline-block" />
              <span className="font-serif text-lg font-bold text-slate-800 tracking-wide">
                {opt}
              </span>
            </label>
          ))}
        </div>

        {/* Copy line */}
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Copy:
          </span>
          <div className="flex-1 border-b-2 border-slate-700 h-6" />
        </div>
      </div>
    </div>
  );
};
