import React, { useState } from 'react';
import { X, Sparkles, Heart, Briefcase, DollarSign, Compass, Calendar, Moon } from 'lucide-react';
import { ZodiacSign } from '../types';

interface FullHoroscopeModalProps {
  sign: ZodiacSign | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const FullHoroscopeModal: React.FC<FullHoroscopeModalProps> = ({
  sign,
  onClose,
  onBookConsultation,
}) => {
  const [tab, setTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  if (!sign) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0D1328] border border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden my-8">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#070B1A] via-[#121A38] to-[#070B1A] p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/40 flex items-center justify-center text-3xl text-[#F4D77D] font-serif shadow-md">
                {sign.symbol}
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#F4D77D] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Comprehensive Ephemeris Analysis</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
                  {sign.name} Cosmic Forecast
                </h3>
                <p className="text-xs text-[#A8B0C5]">
                  {sign.dates} • Element: {sign.element} • Ruling: {sign.rulingPlanet}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close full horoscope"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Timeframe Tabs */}
          <div className="flex items-center space-x-2 mt-6">
            {(['daily', 'weekly', 'monthly'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  tab === t
                    ? 'bg-[#D4AF37] text-[#070B1A] shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#070B1A] text-[#A8B0C5] border border-white/10 hover:text-white'
                }`}
              >
                {t === 'daily' ? 'Daily Horizon' : t === 'weekly' ? 'Weekly Transit' : 'Monthly Blueprint'}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {tab === 'daily' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/20 space-y-2">
                <span className="text-xs text-[#F4D77D] uppercase font-semibold tracking-wider flex items-center space-x-1.5">
                  <Moon className="w-3.5 h-3.5" />
                  <span>Planetary Alignment Today</span>
                </span>
                <p className="text-base text-white font-serif leading-relaxed italic">
                  &ldquo;{sign.dailyForecast.overview}&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#070B1A] border border-rose-500/20 space-y-2">
                  <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold">
                    <Heart className="w-4 h-4" />
                    <span>Love & Affinity</span>
                  </div>
                  <p className="text-xs text-[#A8B0C5] leading-relaxed">
                    Venus highlights heartwarming honesty. Single {sign.name} natives may connect through shared creative interests.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070B1A] border border-emerald-500/20 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>Career & Impact</span>
                  </div>
                  <p className="text-xs text-[#A8B0C5] leading-relaxed">
                    Productivity is amplified during your auspicious hours ({sign.dailyForecast.luckyTime}). Pitch ideas with boldness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070B1A] border border-[#D4AF37]/20 space-y-2">
                  <div className="flex items-center space-x-2 text-[#F4D77D] text-xs font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>Wealth & Value</span>
                  </div>
                  <p className="text-xs text-[#A8B0C5] leading-relaxed">
                    Favorable for strategic planning rather than impulsive spending. Review investments methodically.
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab === 'weekly' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-white/10 space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F4D77D]">
                  Weekly Planetary Orbit (Moon & Mercury Synergy)
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  This week prompts significant forward movement. Mid-week brings clarity in negotiations, while the weekend invites soul rejuvenation and intimate bonding with close loved ones.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B1A]/80 border border-white/5 space-y-2">
                <span className="text-xs text-[#9B8AFB] font-semibold uppercase tracking-wider">Auspicious Focus of the Week</span>
                <p className="text-xs text-[#A8B0C5]">
                  Wear shades of {sign.luckyColor} and maintain calm mental focus during key presentations.
                </p>
              </div>
            </div>
          )}

          {tab === 'monthly' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-white/10 space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F4D77D]">
                  Monthly Eclipse & Dasha Outlook
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  Major shifts in your 9th and 10th houses illuminate professional expansion, spiritual learning, and long-awaited recognition. Trust your inner compass during pivotal decisions.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 bg-[#070B1A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-[#A8B0C5]">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>Want a personalized transit reading for your exact birth time?</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
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
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-semibold uppercase tracking-wider text-[#070B1A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span>Book Astrologer</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
