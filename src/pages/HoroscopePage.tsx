import React, { useState } from 'react';
import { Sparkles, Calendar, Heart, Briefcase, DollarSign, Zap, Compass, Moon, Sun, Clock, Gem, Flame, Droplets, Wind, Mountain, ChevronRight } from 'lucide-react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ConsultationModal } from '../components/ConsultationModal';

interface HoroscopePageProps {
  onOpenConsultation?: () => void;
}

export const HoroscopePage: React.FC<HoroscopePageProps> = () => {
  const [selectedSignId, setSelectedSignId] = useState<string>('leo');
  const [timeframe, setTimeframe] = useState<'yesterday' | 'today' | 'tomorrow'>('today');
  const [tab, setTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const selectedSign = ZODIAC_SIGNS.find((z) => z.id === selectedSignId) || ZODIAC_SIGNS[4];

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire': return <Flame className="w-3.5 h-3.5 text-amber-400" />;
      case 'Water': return <Droplets className="w-3.5 h-3.5 text-sky-400" />;
      case 'Air': return <Wind className="w-3.5 h-3.5 text-purple-400" />;
      case 'Earth': return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
      default: return <Sparkles className="w-3.5 h-3.5 text-[#F4D77D]" />;
    }
  };

  return (
    <div id="horoscope-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 space-y-12">
      
      {/* Top Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-widest bg-[#D4AF37]/10 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-Time Planetary Transits</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Your Daily Horoscope
        </h1>
        <p className="text-base text-[#A8B0C5] max-w-2xl mx-auto">
          Guidance for today, written in the language of the stars.
        </p>
      </section>

      {/* 12 Zodiac Signs Selector Strip / Grid */}
      <section className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {ZODIAC_SIGNS.map((z) => {
            const isSelected = z.id === selectedSignId;
            return (
              <button
                key={z.id}
                type="button"
                id={`horoscope-zodiac-select-${z.id}`}
                onClick={() => setSelectedSignId(z.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1E2950] to-[#0D1328] border-[#F4D77D] shadow-[0_0_20px_rgba(212,175,55,0.25)] scale-[1.02]'
                    : 'bg-[#0D1328]/80 border-white/10 hover:border-white/25 hover:bg-[#121A38]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-2xl ${isSelected ? 'scale-110 text-[#F4D77D]' : 'text-white/80 group-hover:text-white'} transition-transform`}>
                    {z.symbol}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#070B1A] border border-white/10 flex items-center space-x-1 text-[#A8B0C5]">
                    {getElementIcon(z.element)}
                    <span>{z.element}</span>
                  </span>
                </div>

                <div className="mt-2.5">
                  <h3 className={`text-sm font-bold ${isSelected ? 'text-[#F4D77D]' : 'text-white'}`}>
                    {z.name}
                  </h3>
                  <span className="text-[10px] text-[#A8B0C5] block">{z.dates}</span>
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4D77D] to-[#D4AF37]" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Selected Sign Daily Dashboard */}
      <section className="rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/35 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl space-y-8">
        
        {/* Sign Header & Timeframe Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#121A38] to-[#1E2950] border-2 border-[#D4AF37]/50 flex items-center justify-center text-3xl text-[#F4D77D] shadow-lg shadow-[#D4AF37]/15">
              {selectedSign.symbol}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
                  {selectedSign.name}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#F4D77D] border border-[#D4AF37]/30 font-serif">
                  {selectedSign.sanskritName}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B0C5] mt-0.5">
                {selectedSign.dates} • Ruled by <strong className="text-white">{selectedSign.rulingPlanet}</strong>
              </p>
            </div>
          </div>

          {/* Timeframe selector (Yesterday / Today / Tomorrow) */}
          <div className="flex items-center space-x-2 bg-[#070B1A] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            {(['yesterday', 'today', 'tomorrow'] as const).map((t) => (
              <button
                key={t}
                type="button"
                id={`timeframe-btn-${t}`}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  timeframe === t
                    ? 'bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-[#070B1A] font-bold shadow-md'
                    : 'text-[#A8B0C5] hover:text-white'
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* View Tabs: Daily Forecast | Weekly Horizon | Monthly Transits */}
        <div className="flex items-center space-x-3 text-xs font-semibold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setTab('daily')}
            className={`pb-2 border-b-2 transition-colors ${
              tab === 'daily' ? 'border-[#F4D77D] text-[#F4D77D]' : 'border-transparent text-[#A8B0C5] hover:text-white'
            }`}
          >
            Daily Reading
          </button>
          <button
            type="button"
            onClick={() => setTab('weekly')}
            className={`pb-2 border-b-2 transition-colors ${
              tab === 'weekly' ? 'border-[#F4D77D] text-[#F4D77D]' : 'border-transparent text-[#A8B0C5] hover:text-white'
            }`}
          >
            Weekly Forecast
          </button>
          <button
            type="button"
            onClick={() => setTab('monthly')}
            className={`pb-2 border-b-2 transition-colors ${
              tab === 'monthly' ? 'border-[#F4D77D] text-[#F4D77D]' : 'border-transparent text-[#A8B0C5] hover:text-white'
            }`}
          >
            Monthly Transits
          </button>
        </div>

        {/* Main Forecast Body */}
        {tab === 'daily' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Overview Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121A38]/70 border border-[#D4AF37]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Today's Cosmic Atmosphere</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair mb-3">
                Daily Overview
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-serif">
                {timeframe === 'yesterday'
                  ? `Reflective energetic cycles settled in yesterday for ${selectedSign.name}, helping clear lingering ambiguities in your primary partnerships.`
                  : timeframe === 'tomorrow'
                  ? `Tomorrow brings a dynamic surge of creative momentum. Prepare your priorities tonight so you can seize emerging professional overtures with decisive precision.`
                  : selectedSign.dailyForecast.overview}
              </p>
            </div>

            {/* Pillar Scores: Love, Career, Finance, Energy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Love & Romance */}
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-pink-500/25 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center space-x-1.5">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Love & Harmony</span>
                  </span>
                  <span className="text-xs font-bold text-white">
                    {'★'.repeat(selectedSign.dailyForecast.loveRating)}{'☆'.repeat(5 - selectedSign.dailyForecast.loveRating)}
                  </span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  Venusian aspects favor heartfelt expressions and soothing mutual empathy. Ideal evening for intimate dialogue.
                </p>
              </div>

              {/* Career & Ambition */}
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-amber-500/25 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4D77D] flex items-center space-x-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Career & Drive</span>
                  </span>
                  <span className="text-xs font-bold text-white">
                    {'★'.repeat(selectedSign.dailyForecast.careerRating)}{'☆'.repeat(5 - selectedSign.dailyForecast.careerRating)}
                  </span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  Your focused stamina earns peer validation. Present structured proposals during your auspicious afternoon hours.
                </p>
              </div>

              {/* Finance & Wealth */}
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-emerald-500/25 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Finance & Assets</span>
                  </span>
                  <span className="text-xs font-bold text-white">
                    {'★'.repeat(selectedSign.dailyForecast.financeRating)}{'☆'.repeat(5 - selectedSign.dailyForecast.financeRating)}
                  </span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  Prudent budgeting yields long-term security. Favorable day for analyzing investments and fine-tuning spending.
                </p>
              </div>

              {/* Energy & Vitality Level */}
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-purple-500/25 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center space-x-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Energy & Vitality</span>
                  </span>
                  <span className="text-xs font-bold text-[#F4D77D] font-mono">92%</span>
                </div>
                <div className="w-full bg-[#121A38] rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-400 to-[#F4D77D] h-2 rounded-full w-[92%]" />
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  High solar resonance. Channel this vitality into dynamic physical exercise or creative brainstorming.
                </p>
              </div>

            </div>

            {/* Daily Cosmic Constants (Lucky number, color, time, compatible sign) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#070B1A] border border-white/10 text-xs">
              <div className="space-y-1">
                <span className="text-[#A8B0C5] flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>Auspicious Hours</span>
                </span>
                <p className="font-semibold text-white">{selectedSign.dailyForecast.luckyTime}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[#A8B0C5] flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Auspicious Color</span>
                </span>
                <p className="font-semibold text-[#F4D77D]">{selectedSign.luckyColor}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[#A8B0C5] flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-[#D4AF37]" />
                  <span>Lucky Numerology</span>
                </span>
                <p className="font-semibold text-white">{selectedSign.luckyNumber}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[#A8B0C5] flex items-center space-x-1">
                  <Heart className="w-3 h-3 text-[#D4AF37]" />
                  <span>Harmonious Sign</span>
                </span>
                <p className="font-semibold text-pink-300">{selectedSign.dailyForecast.compatSign}</p>
              </div>
            </div>

          </div>
        )}

        {/* Weekly Tab */}
        {tab === 'weekly' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-[#070B1A] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white font-playfair">
                Weekly Astro-Cycle for {selectedSign.name}
              </h3>
              <p className="text-sm text-[#A8B0C5] leading-relaxed">
                As the Moon transits your complementary water houses early this week, emotional breakthroughs unlock creative confidence. Mid-week brings auspicious Mercury aspects for contracts, culminating in a festive weekend of social warmth.
              </p>
            </div>
          </div>
        )}

        {/* Monthly Tab */}
        {tab === 'monthly' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-[#070B1A] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white font-playfair">
                Monthly Major Planetary Transits
              </h3>
              <p className="text-sm text-[#A8B0C5] leading-relaxed">
                Major Jupiter trines highlight professional expansion, while Saturn's disciplined gaze encourages shedding outdated routines. Focus on consolidating your core assets and cultivating deeper spiritual clarity.
              </p>
            </div>
          </div>
        )}

        {/* CTA to Consult or Explore Birth Chart */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white font-playfair">
              Need Specific Timing for a Major Life Event?
            </h4>
            <p className="text-xs text-[#A8B0C5]">
              Consult 1-on-1 with a verified Jyotish Acharya for Muhurta & personalized Dasha forecasts.
            </p>
          </div>

          <button
            type="button"
            id="horoscope-book-consultation-btn"
            onClick={() => setIsConsultationOpen(true)}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            Book Astro-Timing Session
          </button>
        </div>

      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultType="General Consultation"
      />

    </div>
  );
};
