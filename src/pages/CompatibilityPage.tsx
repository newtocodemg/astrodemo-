import React, { useState } from 'react';
import { Sparkles, Heart, MessageCircle, Flame, Sprout, Calendar, Clock, User, Compass, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ConsultationModal } from '../components/ConsultationModal';

export const CompatibilityPage: React.FC = () => {
  const [person1, setPerson1] = useState({
    name: 'Aarav Patel',
    dob: '1995-07-28',
    tob: '08:15 AM',
    sign: 'Leo',
  });

  const [person2, setPerson2] = useState({
    name: 'Meera Sen',
    dob: '1997-03-12',
    tob: '06:45 PM',
    sign: 'Pisces',
  });

  const [calculated, setCalculated] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Ashtakoota Milan (36 Gunas)
  const gunas = [
    { name: 'Nadi (Health & Genetic Karma)', score: 7, max: 8, desc: 'High physical and spiritual harmony with favorable genetic confluence.' },
    { name: 'Bhakoot (Emotional Wealth & Family)', score: 6, max: 7, desc: 'Deep soul affinity; supportive family life and financial stability.' },
    { name: 'Gana (Temperament & Ego Harmony)', score: 5, max: 6, desc: 'Deva and Manushya gana complement, fostering mutual patience and respect.' },
    { name: 'Maitri (Planetary Friendship)', score: 4, max: 5, desc: 'Sun and Jupiter lords share natural benefic affinity and noble values.' },
    { name: 'Yoni (Physical & Romantic Instincts)', score: 3, max: 4, desc: 'Strong magnetic intimacy and mutual affectionate devotion.' },
    { name: 'Tara (Destiny & Auspicious Luck)', score: 3, max: 3, desc: 'Param Mitra tara indicates continuous mutual blessing and karmic support.' },
    { name: 'Vashya (Mutual Attraction & Dominance)', score: 2, max: 2, desc: 'Balanced equilibrium without toxic power struggles.' },
    { name: 'Varna (Spiritual Alignment)', score: 1, max: 1, desc: 'Shared philosophical values and mutual evolutionary drive.' },
  ];

  const totalGunas = gunas.reduce((acc, g) => acc + g.score, 0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(false);
    setTimeout(() => {
      setCalculated(true);
    }, 400);
  };

  return (
    <div id="compatibility-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 space-y-14">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-widest bg-[#D4AF37]/10 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
          <Heart className="w-3.5 h-3.5 text-pink-400" />
          <span>Vedic Ashtakoota & Planetary Synastry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Discover Your Cosmic Compatibility
        </h1>
        <p className="text-base text-[#A8B0C5] max-w-2xl mx-auto">
          Analyze the planetary synastry and elemental chemistry between two souls.
        </p>
      </section>

      {/* Two Person Input Cards Form */}
      <form onSubmit={handleCalculate} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PERSON 1 CARD */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/30 p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F4D77D]/15 border border-[#F4D77D]/40 flex items-center justify-center text-[#F4D77D] font-bold text-xs">
                  1
                </div>
                <h3 className="text-lg font-bold text-white font-playfair">
                  First Soul (Native A)
                </h3>
              </div>
              <span className="text-xs text-[#F4D77D] font-semibold">
                {person1.sign}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={person1.name}
                  onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  placeholder="e.g. Aarav Patel"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={person1.dob}
                    onChange={(e) => setPerson1({ ...person1, dob: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Time of Birth</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={person1.tob}
                    onChange={(e) => setPerson1({ ...person1, tob: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                    placeholder="08:15 AM"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Zodiac Sign Archetype</span>
                </label>
                <select
                  value={person1.sign}
                  onChange={(e) => setPerson1({ ...person1, sign: e.target.value })}
                  className="w-full bg-[#070B1A] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  {ZODIAC_SIGNS.map((z) => (
                    <option key={z.id} value={z.name}>
                      {z.symbol} {z.name} ({z.sanskritName}) - {z.element}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* PERSON 2 CARD */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-pink-500/30 p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-400/15 border border-pink-400/40 flex items-center justify-center text-pink-400 font-bold text-xs">
                  2
                </div>
                <h3 className="text-lg font-bold text-white font-playfair">
                  Second Soul (Native B)
                </h3>
              </div>
              <span className="text-xs text-pink-300 font-semibold">
                {person2.sign}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-pink-400" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={person2.name}
                  onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-pink-400 focus:outline-none"
                  placeholder="e.g. Meera Sen"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-pink-400" />
                    <span>Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={person2.dob}
                    onChange={(e) => setPerson2({ ...person2, dob: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-pink-400 focus:outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-pink-400" />
                    <span>Time of Birth</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={person2.tob}
                    onChange={(e) => setPerson2({ ...person2, tob: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-pink-400 focus:outline-none"
                    placeholder="06:45 PM"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A8B0C5] uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Zodiac Sign Archetype</span>
                </label>
                <select
                  value={person2.sign}
                  onChange={(e) => setPerson2({ ...person2, sign: e.target.value })}
                  className="w-full bg-[#070B1A] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:border-pink-400 focus:outline-none"
                >
                  {ZODIAC_SIGNS.map((z) => (
                    <option key={z.id} value={z.name}>
                      {z.symbol} {z.name} ({z.sanskritName}) - {z.element}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            id="check-compatibility-btn"
            className="px-10 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] shadow-xl shadow-[#D4AF37]/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center space-x-2"
          >
            <Heart className="w-4 h-4 text-pink-700" />
            <span>Check Compatibility</span>
          </button>
        </div>
      </form>

      {/* COMPATIBILITY RESULTS DASHBOARD */}
      {calculated && (
        <section id="compatibility-results-section" className="space-y-8 animate-fadeIn">
          
          {/* Main Score Hero Card */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#121A38] via-[#1E2950] to-[#0D1328] border-2 border-[#D4AF37]/40 p-8 sm:p-10 md:p-12 shadow-2xl overflow-hidden text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
              
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Karmic Synastry Alignment</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair">
                  {person1.name} & {person2.name}
                </h2>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light font-serif">
                  A deeply inspiring elemental union. The solar fire and magnetic warmth of {person1.sign} blend harmoniously with the soulful intuition and empathetic grace of {person2.sign}.
                </p>
                <div className="flex items-center space-x-3 text-xs text-[#A8B0C5] pt-1">
                  <span>Vedic Ashtakoota Score: <strong className="text-[#F4D77D]">{totalGunas} / 36 Gunas</strong></span>
                  <span>•</span>
                  <span>Category: <strong className="text-emerald-400">Uttam (Highly Auspicious)</strong></span>
                </div>
              </div>

              {/* Circular Overall Compatibility Score Dial */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#070B1A] border-4 border-[#D4AF37] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)] shrink-0">
                <span className="text-3xl sm:text-4xl font-bold text-[#F4D77D] font-mono">87%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8B0C5] mt-1">
                  Overall Affinity
                </span>
                <div className="absolute -inset-2 rounded-full border border-dashed border-[#F4D77D]/40 animate-spin-slow pointer-events-none" />
              </div>

            </div>
          </div>

          {/* 4 Core Pillars: Emotional, Communication, Chemistry, Potential */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#0D1328]/90 border border-pink-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400 flex items-center space-x-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Emotional Connection</span>
                </span>
                <span className="text-sm font-bold text-pink-300 font-mono">91%</span>
              </div>
              <div className="w-full bg-[#070B1A] rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-rose-400 h-2 rounded-full w-[91%]" />
              </div>
              <p className="text-[11px] text-[#A8B0C5]">
                Intuitive emotional understanding allows both partners to feel profoundly heard and protected.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1328]/90 border border-sky-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Communication</span>
                </span>
                <span className="text-sm font-bold text-sky-300 font-mono">84%</span>
              </div>
              <div className="w-full bg-[#070B1A] rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 rounded-full w-[84%]" />
              </div>
              <p className="text-[11px] text-[#A8B0C5]">
                Mercurial harmonics foster stimulating dialogue, mutual intellectual curiosity, and swift conflict resolution.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1328]/90 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Magnetic Chemistry</span>
                </span>
                <span className="text-sm font-bold text-amber-300 font-mono">89%</span>
              </div>
              <div className="w-full bg-[#070B1A] rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full w-[89%]" />
              </div>
              <p className="text-[11px] text-[#A8B0C5]">
                Electric physical attraction and romantic spontaneity keep the connection vibrant across all phases.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1328]/90 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Long-Term Potential</span>
                </span>
                <span className="text-sm font-bold text-emerald-300 font-mono">82%</span>
              </div>
              <div className="w-full bg-[#070B1A] rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full w-[82%]" />
              </div>
              <p className="text-[11px] text-[#A8B0C5]">
                Shared core values and aligned domestic visions construct a durable, prosperous family foundation.
              </p>
            </div>

          </div>

          {/* Detailed Vedic Ashtakoota Milan Breakdown Table */}
          <div className="rounded-3xl bg-[#0D1328]/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="p-6 bg-[#070B1A] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-white font-playfair">
                  Vedic 36 Gunas Ashtakoota Analysis
                </h3>
                <p className="text-xs text-[#A8B0C5]">
                  Detailed breakdown across all 8 classical Vedic marriage & soul dimensions.
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#F4D77D] border border-[#D4AF37]/30 font-semibold self-start sm:self-auto">
                Total: {totalGunas} / 36 Points
              </span>
            </div>

            <div className="divide-y divide-white/5">
              {gunas.map((g, idx) => (
                <div key={idx} className="p-4 sm:px-6 hover:bg-[#121A38]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-white">{g.name}</span>
                    <p className="text-xs text-[#A8B0C5]">{g.desc}</p>
                  </div>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="font-mono font-bold text-[#F4D77D] text-sm">
                      {g.score} / {g.max}
                    </span>
                    <span className="text-emerald-400">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA: Book Synastry Consultation */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0D1328] to-[#121A38] border border-[#D4AF37]/30 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair">
              Want a 1-on-1 In-Depth Couple Synastry Reading?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B0C5] max-w-xl mx-auto">
              Connect with Acharya Meera Joshi to analyze your composite Navamsha (D9) charts, auspicious wedding muhurtas, and personalized relationship remedies.
            </p>
            <button
              type="button"
              id="book-synastry-consultation-btn"
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>Book Synastry Consultation</span>
            </button>
          </div>

        </section>
      )}

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultType="Relationship Reading"
        astrologerName="Acharya Meera Joshi"
      />

    </div>
  );
};
