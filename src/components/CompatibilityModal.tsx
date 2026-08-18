import React, { useState } from 'react';
import { X, Sparkles, Heart, Flame, Shield, Check, ArrowRight } from 'lucide-react';
import { ZODIAC_SIGNS } from '../data/zodiacData';

interface CompatibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSign1?: string;
  onBookConsultation: () => void;
}

export const CompatibilityModal: React.FC<CompatibilityModalProps> = ({
  isOpen,
  onClose,
  initialSign1,
  onBookConsultation,
}) => {
  const [sign1Id, setSign1Id] = useState<string>(
    initialSign1 ? initialSign1.toLowerCase() : 'leo'
  );
  const [sign2Id, setSign2Id] = useState<string>('sagittarius');

  if (!isOpen) return null;

  const sign1 = ZODIAC_SIGNS.find((s) => s.id === sign1Id) || ZODIAC_SIGNS[4];
  const sign2 = ZODIAC_SIGNS.find((s) => s.id === sign2Id) || ZODIAC_SIGNS[8];

  // Calculate realistic compatibility score based on elements and qualities
  const calculateScore = () => {
    if (sign1.id === sign2.id) return 88;
    if (sign1.element === sign2.element) return 96; // Same element = great harmony
    if (
      (sign1.element === 'Fire' && sign2.element === 'Air') ||
      (sign1.element === 'Air' && sign2.element === 'Fire') ||
      (sign1.element === 'Earth' && sign2.element === 'Water') ||
      (sign1.element === 'Water' && sign2.element === 'Earth')
    ) {
      return 92; // Complementary elements
    }
    return 78;
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0D1328] border border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden my-8">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#070B1A] via-[#1A1230] to-[#070B1A] p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-rose-300 uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                <span>Cosmic Chemistry & Synastry Matcher</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
                Zodiac Relationship Compatibility
              </h3>
              <p className="text-xs sm:text-sm text-[#A8B0C5]">
                Compare elemental alchemy, communication rhythm, and emotional harmony across the stars.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close compatibility modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Sign Selectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            
            {/* Sign 1 Selector */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-[#070B1A] border border-white/10 space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5]">
                First Partner
              </label>
              <select
                value={sign1Id}
                onChange={(e) => setSign1Id(e.target.value)}
                className="w-full bg-[#0D1328] border border-white/15 rounded-xl px-3 py-2.5 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              >
                {ZODIAC_SIGNS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.symbol} {s.name} ({s.element})
                  </option>
                ))}
              </select>

              <div className="flex items-center justify-between text-xs text-[#A8B0C5] pt-1">
                <span>Element: <strong className="text-white">{sign1.element}</strong></span>
                <span>Ruling: <strong className="text-[#F4D77D]">{sign1.rulingPlanet}</strong></span>
              </div>
            </div>

            {/* Middle Alchemy Icon */}
            <div className="md:col-span-1 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#070B1A] border border-[#D4AF37]/40 flex items-center justify-center text-[#F4D77D] shadow-md">
                <Sparkles className="w-5 h-5 text-rose-400" />
              </div>
            </div>

            {/* Sign 2 Selector */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-[#070B1A] border border-white/10 space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5]">
                Second Partner
              </label>
              <select
                value={sign2Id}
                onChange={(e) => setSign2Id(e.target.value)}
                className="w-full bg-[#0D1328] border border-white/15 rounded-xl px-3 py-2.5 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
              >
                {ZODIAC_SIGNS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.symbol} {s.name} ({s.element})
                  </option>
                ))}
              </select>

              <div className="flex items-center justify-between text-xs text-[#A8B0C5] pt-1">
                <span>Element: <strong className="text-white">{sign2.element}</strong></span>
                <span>Ruling: <strong className="text-[#F4D77D]">{sign2.rulingPlanet}</strong></span>
              </div>
            </div>

          </div>

          {/* Result Showcase Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121A38] to-[#070B1A] border border-[#D4AF37]/30 text-center relative overflow-hidden">
            
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#F4D77D] mb-1">
              <span>Overall Harmony Index</span>
            </div>

            <div className="flex items-center justify-center space-x-3 my-2">
              <span className="text-5xl sm:text-6xl font-bold font-playfair gold-gradient-text">
                {score}%
              </span>
            </div>

            <p className="text-base sm:text-lg text-white font-serif italic max-w-xl mx-auto mb-4">
              &ldquo;
              {score >= 90
                ? `${sign1.name} and ${sign2.name} share an exquisite celestial resonance! Their mutual elements ignite inspirational growth and effortless deep communication.`
                : `${sign1.name} and ${sign2.name} cultivate a fascinating dynamic where contrasting perspectives create magnetic attraction and profound maturity.`}
              &rdquo;
            </p>

            {/* Compatibility Dimension Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-4 border-t border-white/10">
              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#A8B0C5]">❤️ Passion & Chemistry</span>
                  <span className="text-rose-400 font-bold">{Math.min(99, score + 2)}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-400 h-full rounded-full" style={{ width: `${Math.min(99, score + 2)}%` }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#A8B0C5]">💬 Communication Flow</span>
                  <span className="text-sky-400 font-bold">{Math.max(70, score - 5)}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full" style={{ width: `${Math.max(70, score - 5)}%` }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#A8B0C5]">✨ Long-Term Alignment</span>
                  <span className="text-[#F4D77D] font-bold">{score}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: `${score}%` }} />
                </div>
              </div>
            </div>

          </div>

          {/* Vedic 36-Point Ashtakoota Milan Highlight */}
          <div className="p-4 rounded-xl bg-[#070B1A] border border-white/10 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#9B8AFB]">
              <Shield className="w-4 h-4" />
              <span>Vedic 36 Guna Milan & Manglik Assessment</span>
            </div>
            <p className="text-xs text-[#A8B0C5] leading-relaxed">
              For marriage and committed unions, an exact birth-time Kundli matching reveals Nadi dosha, Bhakoot harmony, and Tara strength. Schedule a synastry consultation for personalized mitigation remedies.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-[#070B1A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-white/15 text-xs font-medium text-white hover:bg-white/10"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="inline-flex items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-semibold uppercase tracking-wider text-[#070B1A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
          >
            <span>Book Marriage Synastry Session</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
