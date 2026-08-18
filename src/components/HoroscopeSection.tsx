import React, { useState } from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ZodiacSign } from '../types';
import { Sparkles, Heart, Briefcase, DollarSign, Star, Clock, Compass, ArrowRight } from 'lucide-react';

interface HoroscopeSectionProps {
  onOpenFullHoroscope: (sign: ZodiacSign, timeframe: 'today' | 'tomorrow' | 'weekly') => void;
}

export const HoroscopeSection: React.FC<HoroscopeSectionProps> = ({ onOpenFullHoroscope }) => {
  const [selectedSignId, setSelectedSignId] = useState<string>('leo');
  const [timeframe, setTimeframe] = useState<'yesterday' | 'today' | 'tomorrow'>('today');

  const selectedSign = ZODIAC_SIGNS.find((s) => s.id === selectedSignId) || ZODIAC_SIGNS[4]; // Default Leo

  const renderStars = (rating: number, max = 5) => {
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < rating ? 'text-[#F4D77D] fill-[#F4D77D]' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="horoscope" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-Time Ephemeris Forecast</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Today’s <span className="gold-gradient-text">Cosmic Forecast</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A8B0C5] leading-relaxed">
          Align your daily actions with celestial currents. Select your zodiac sign below to unlock today&apos;s guidance.
        </p>
      </div>

      {/* Horizontal Zodiac Selector */}
      <div className="mb-10 overflow-x-auto pb-4 pt-1 px-1 scrollbar-thin">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-max mx-auto justify-start md:justify-center">
          {ZODIAC_SIGNS.map((sign) => {
            const isSelected = sign.id === selectedSignId;
            return (
              <button
                key={sign.id}
                id={`horoscope-selector-${sign.id}`}
                onClick={() => setSelectedSignId(sign.id)}
                className={`group flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-[#070B1A] font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[#0D1328]/90 text-[#A8B0C5] border border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                <span className="text-base font-serif">{sign.symbol}</span>
                <span className="text-xs sm:text-sm">{sign.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Horoscope Forecast Showcase Card */}
      <div className="max-w-4xl mx-auto glass-panel-gold rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/10 via-[#9B8AFB]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Top Meta Bar: Sign Header & Timeframe Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/40 flex items-center justify-center text-3xl text-[#F4D77D] font-serif shadow-md">
              {selectedSign.symbol}
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
                  {selectedSign.name}
                </h3>
                <span className="text-xs text-[#9B8AFB] uppercase tracking-wider font-semibold">
                  — {timeframe === 'today' ? 'Today' : timeframe === 'tomorrow' ? 'Tomorrow' : 'Yesterday'}
                </span>
              </div>
              <p className="text-xs text-[#A8B0C5]">
                {selectedSign.dates} • Element: <span className="text-white font-medium">{selectedSign.element}</span>
              </p>
            </div>
          </div>

          {/* Timeframe Toggle Buttons */}
          <div className="flex items-center rounded-xl bg-[#070B1A] border border-white/10 p-1 self-stretch sm:self-auto">
            {(['yesterday', 'today', 'tomorrow'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  timeframe === t
                    ? 'bg-[#D4AF37] text-[#070B1A] shadow'
                    : 'text-[#A8B0C5] hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Forecast Narrative Quote */}
        <div className="my-8">
          <p className="text-lg sm:text-xl md:text-2xl text-white font-serif leading-relaxed italic">
            &ldquo;{selectedSign.dailyForecast.overview}&rdquo;
          </p>
        </div>

        {/* 3 Life Ratings + Auspicious Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          
          {/* Love Indicator */}
          <div className="p-4 rounded-xl bg-[#070B1A]/80 border border-rose-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#A8B0C5]">Love Energy</span>
                <span className="text-xs font-bold text-white">❤️ Romance</span>
              </div>
            </div>
            {renderStars(selectedSign.dailyForecast.loveRating)}
          </div>

          {/* Career Indicator */}
          <div className="p-4 rounded-xl bg-[#070B1A]/80 border border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#A8B0C5]">Career Drive</span>
                <span className="text-xs font-bold text-white">💼 Ambition</span>
              </div>
            </div>
            {renderStars(selectedSign.dailyForecast.careerRating)}
          </div>

          {/* Finance Indicator */}
          <div className="p-4 rounded-xl bg-[#070B1A]/80 border border-[#D4AF37]/20 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#F4D77D]">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#A8B0C5]">Wealth Flow</span>
                <span className="text-xs font-bold text-white">💰 Finance</span>
              </div>
            </div>
            {renderStars(selectedSign.dailyForecast.financeRating)}
          </div>

        </div>

        {/* Extra Auspicious Details & Full Reading CTA */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A8B0C5]">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F4D77D]" />
              <span>Auspicious Hours: <strong className="text-white">{selectedSign.dailyForecast.luckyTime}</strong></span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Compass className="w-3.5 h-3.5 text-[#9B8AFB]" />
              <span>Harmonious Ally: <strong className="text-[#F4D77D]">{selectedSign.dailyForecast.compatSign}</strong></span>
            </div>
          </div>

          <button
            type="button"
            id="read-full-horoscope-btn"
            onClick={() => onOpenFullHoroscope(selectedSign, 'today')}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F4D77D] hover:text-white transition-colors group cursor-pointer"
          >
            <span>Read Full Horoscope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
};
