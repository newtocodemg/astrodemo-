import React from 'react';
import { X, Sparkles, Heart, Shield, Gem, Sun, Star } from 'lucide-react';
import { ZodiacSign } from '../types';

interface SignDetailModalProps {
  sign: ZodiacSign | null;
  onClose: () => void;
  onCheckCompatibility: (signName: string) => void;
}

export const SignDetailModal: React.FC<SignDetailModalProps> = ({
  sign,
  onClose,
  onCheckCompatibility,
}) => {
  if (!sign) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0D1328] border border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden my-8">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#070B1A] via-[#151D3F] to-[#070B1A] p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/50 flex items-center justify-center text-4xl text-[#F4D77D] font-serif shadow-lg">
                {sign.symbol}
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#F4D77D] uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-[#F4D77D]" />
                  <span>{sign.element} Sign • {sign.quality} Quality</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
                  {sign.name} <span className="text-[#A8B0C5] text-lg italic font-normal">({sign.sanskritName})</span>
                </h3>
                <p className="text-xs text-[#9B8AFB] font-medium mt-0.5">
                  {sign.dates} • Ruled by {sign.rulingPlanet}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close sign detail"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Personality Essence */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] mb-2 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Archetypal Essence</span>
            </h4>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-serif italic bg-[#070B1A]/60 p-4 rounded-xl border border-white/5">
              &ldquo;{sign.fullDesc}&rdquo;
            </p>
          </div>

          {/* Key Strengths */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] mb-3 flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Core Strengths & Superpowers</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sign.strengths.map((str, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#070B1A] border border-white/5 text-xs text-[#A8B0C5]">
                  <span className="text-[#D4AF37]">✦</span>
                  <span className="font-medium text-white">{str}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lucky Cosmic Attributes Matrix */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] mb-3 flex items-center space-x-1.5">
              <Gem className="w-3.5 h-3.5 text-[#9B8AFB]" />
              <span>Auspicious Vedic Correspondences</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5">
                <span className="text-[#A8B0C5] block text-[10px] uppercase">Auspicious Day</span>
                <span className="font-semibold text-white mt-1 block">{sign.luckyDay}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5">
                <span className="text-[#A8B0C5] block text-[10px] uppercase">Sacred Color</span>
                <span className="font-semibold text-white mt-1 block">{sign.luckyColor}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5">
                <span className="text-[#A8B0C5] block text-[10px] uppercase">Lucky Numbers</span>
                <span className="font-semibold text-white mt-1 block">{sign.luckyNumber}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#070B1A] border border-white/5">
                <span className="text-[#A8B0C5] block text-[10px] uppercase">Vedic Gemstone</span>
                <span className="font-semibold text-[#F4D77D] mt-1 block">{sign.luckyGemstone}</span>
              </div>
            </div>
          </div>

          {/* Best Cosmic Matches */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#070B1A] via-[#121A38] to-[#070B1A] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center space-x-1.5 text-xs text-rose-400 font-semibold">
                <Heart className="w-3.5 h-3.5" />
                <span>Cosmic Chemistry Matches</span>
              </div>
              <p className="text-sm text-white font-medium">
                High resonance with: {sign.bestMatches.join(', ')}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onCheckCompatibility(sign.name);
              }}
              className="px-4 py-2 rounded-xl bg-[#9B8AFB]/15 hover:bg-[#9B8AFB]/25 text-[#F4D77D] border border-[#9B8AFB]/30 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap"
            >
              Test Compatibility →
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-[#070B1A] border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-semibold uppercase tracking-wider text-[#070B1A]"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
