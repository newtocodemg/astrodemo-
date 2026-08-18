import React from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ZodiacSign } from '../types';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface ZodiacGridProps {
  onSelectSign: (sign: ZodiacSign) => void;
}

export const ZodiacGrid: React.FC<ZodiacGridProps> = ({ onSelectSign }) => {
  return (
    <section id="zodiac" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Twelve Archetypes</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Explore Your <span className="gold-gradient-text">Zodiac</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A8B0C5] leading-relaxed">
          Discover the ruling planets, elemental balances, and sacred psychological archetypes woven into each constellation.
        </p>
      </div>

      {/* 12-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {ZODIAC_SIGNS.map((sign) => {
          const elementColor =
            sign.element === 'Fire'
              ? 'text-red-400 border-red-500/30 bg-red-500/10'
              : sign.element === 'Earth'
              ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
              : sign.element === 'Air'
              ? 'text-sky-400 border-sky-500/30 bg-sky-500/10'
              : 'text-blue-400 border-blue-500/30 bg-blue-500/10';

          return (
            <div
              key={sign.id}
              id={`zodiac-card-${sign.id}`}
              onClick={() => onSelectSign(sign)}
              className="group relative rounded-2xl bg-[#0D1328]/70 border border-white/10 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-md"
            >
              {/* Subtle Gold Hover Glow on Card Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Top Row: Symbol & Element Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#070B1A] border border-white/10 group-hover:border-[#D4AF37]/50 flex items-center justify-center text-2xl text-[#F4D77D] font-serif shadow-inner transition-colors">
                    {sign.symbol}
                  </div>
                  
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${elementColor}`}>
                    {sign.element}
                  </span>
                </div>

                {/* Name & Sanskrit Name */}
                <div className="flex items-baseline space-x-2 mb-1">
                  <h3 className="text-xl font-bold text-white font-playfair group-hover:text-[#F4D77D] transition-colors">
                    {sign.name}
                  </h3>
                  <span className="text-xs text-[#A8B0C5] font-serif italic">
                    ({sign.sanskritName})
                  </span>
                </div>

                {/* Date Range */}
                <p className="text-xs font-medium text-[#9B8AFB] mb-3">
                  {sign.dates}
                </p>

                {/* Personality Keywords */}
                <p className="text-xs text-[#A8B0C5] font-medium tracking-wide">
                  “{sign.keywords.join(' • ')}”
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A8B0C5] group-hover:text-[#F4D77D] transition-colors">
                <span>Ruling: {sign.rulingPlanet}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
