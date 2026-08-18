import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Edit3, Sun, Moon, ArrowUpRight, Shield, Heart, Briefcase, DollarSign, Brain, Target, Compass, Download, ArrowRight, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { BirthChartFormData, BirthChartResult } from '../types';
import { generateDemoBirthChart, DEFAULT_PLANETARY_INFLUENCES } from '../data/astrologyContent';
import { InteractiveAstrologyChart } from '../components/InteractiveAstrologyChart';
import { EditBirthDetailsModal } from '../components/EditBirthDetailsModal';
import { DownloadReportModal } from '../components/DownloadReportModal';
import { ConsultationModal } from '../components/ConsultationModal';

interface BirthChartPageProps {
  formData: BirthChartFormData;
  setFormData: (data: BirthChartFormData) => void;
  onOpenConsultation?: () => void;
}

export const BirthChartPage: React.FC<BirthChartPageProps> = ({
  formData,
  setFormData,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const chart: BirthChartResult = generateDemoBirthChart(formData);

  const lifeAreas = [
    { title: 'Love & Relationships', icon: Heart, score: 86, color: 'from-pink-500 to-rose-400', desc: 'Deep soul resonance with Venus 4th house sanctuary harmony.' },
    { title: 'Career & Ambition', icon: Briefcase, score: 92, color: 'from-amber-400 to-[#D4AF37]', desc: 'High executive authority propelled by Saturn in 10th house karma.' },
    { title: 'Finance & Wealth', icon: DollarSign, score: 78, color: 'from-emerald-400 to-teal-500', desc: 'Steadily compounding prosperity driven by 2nd & 11th house trines.' },
    { title: 'Personal Growth & Mind', icon: Brain, score: 88, color: 'from-purple-400 to-indigo-400', desc: 'Rapid cognitive expansion and acute psychological discernment.' },
    { title: 'Life Purpose & Dharma', icon: Target, score: 91, color: 'from-yellow-400 to-orange-500', desc: 'Clear soul destiny centered on mentorship, creation, and leadership.' },
  ];

  return (
    <div id="birth-chart-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 space-y-16">
      
      {/* 1. TOP HEADER & USER INFO SECTION */}
      <section id="birth-chart-header" className="relative rounded-3xl bg-gradient-to-r from-[#0D1328] via-[#121A38] to-[#0D1328] border border-[#D4AF37]/35 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] tracking-widest uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/25">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Sidereal Ephemeris Dossier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
              Your Cosmic Blueprint
            </h1>
            <p className="text-sm sm:text-base text-[#A8B0C5] max-w-2xl">
              An authentic astronomical mapping of the celestial sphere at the exact moment and location of your birth.
            </p>
          </div>

          {/* User Details Box */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-[#070B1A]/80 border border-white/10 rounded-2xl p-4 sm:p-5">
            <div className="space-y-1.5 text-xs text-[#A8B0C5]">
              <div className="flex items-center space-x-2">
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-white font-semibold text-sm">{chart.name}</span>
              </div>
              <div className="flex items-center space-x-4 pt-1">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-[#A8B0C5]" />
                  <span>{chart.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#A8B0C5]" />
                  <span>{chart.time}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-[#A8B0C5]" />
                <span>{chart.place}</span>
              </div>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-4 flex sm:flex-col justify-end">
              <button
                type="button"
                id="edit-birth-details-button"
                onClick={() => setIsEditOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#1E2950] hover:bg-[#283668] text-white hover:text-[#F4D77D] border border-[#D4AF37]/30 text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer shadow-md"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Birth Details</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. COSMIC SUMMARY (Sun, Moon, Rising Cards) */}
      <section id="cosmic-summary-section" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
            Primary Planetary Trinity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
            The Pillars of Your Soul Architecture
          </h2>
          <p className="text-xs sm:text-sm text-[#A8B0C5]">
            The Sun defines your core vitality, the Moon your subconscious emotional tides, and the Rising Ascendant your outer manifestation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: SUN SIGN */}
          <div
            id="sun-sign-card"
            className="group relative rounded-3xl bg-gradient-to-b from-[#121A38]/90 to-[#0D1328]/90 border border-amber-500/30 p-7 shadow-xl hover:shadow-[0_0_30px_rgba(244,215,125,0.2)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4D77D] flex items-center space-x-1.5">
                <Sun className="w-4 h-4 text-[#F4D77D]" />
                <span>Sun Sign</span>
              </span>
              <span className="text-2xl">♌</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-playfair group-hover:text-[#F4D77D] transition-colors">
                {chart.sunSign} (Simha)
              </h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#F4D77D] to-transparent rounded-full" />
              <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed pt-2">
                Leo represents confidence, creativity and natural leadership. You radiate innate solar magnetism and flourish when executing visionary projects autonomously.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A8B0C5]">
              <span>House: <strong className="text-white">5th House</strong></span>
              <span>Element: <strong className="text-amber-400">Fire</strong></span>
            </div>
          </div>

          {/* Card 2: MOON SIGN */}
          <div
            id="moon-sign-card"
            className="group relative rounded-3xl bg-gradient-to-b from-[#121A38]/90 to-[#0D1328]/90 border border-sky-500/30 p-7 shadow-xl hover:shadow-[0_0_30px_rgba(147,197,253,0.2)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300 flex items-center space-x-1.5">
                <Moon className="w-4 h-4 text-sky-300" />
                <span>Moon Sign</span>
              </span>
              <span className="text-2xl">♓</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-playfair group-hover:text-sky-300 transition-colors">
                {chart.moonSign} (Meena)
              </h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-sky-400 to-transparent rounded-full" />
              <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed pt-2">
                Pisces embodies profound intuition, empathy and imaginative vision. Your emotional depth connects effortlessly with universal compassion and artistic synthesis.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A8B0C5]">
              <span>House: <strong className="text-white">12th House</strong></span>
              <span>Element: <strong className="text-sky-300">Water</strong></span>
            </div>
          </div>

          {/* Card 3: RISING SIGN */}
          <div
            id="rising-sign-card"
            className="group relative rounded-3xl bg-gradient-to-b from-[#121A38]/90 to-[#0D1328]/90 border border-purple-500/30 p-7 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300 flex items-center space-x-1.5">
                <ArrowUpRight className="w-4 h-4 text-purple-300" />
                <span>Rising Sign (Lagna)</span>
              </span>
              <span className="text-2xl">♎</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-playfair group-hover:text-purple-300 transition-colors">
                {chart.risingSign} (Tula)
              </h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-transparent rounded-full" />
              <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed pt-2">
                Libra radiates natural charm, diplomatic poise and artistic harmony. You meet the outer world with grace, equilibrium, and an innate sense of aesthetic justice.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A8B0C5]">
              <span>House: <strong className="text-white">1st House (Ascendant)</strong></span>
              <span>Element: <strong className="text-purple-300">Air</strong></span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE BIRTH CHART (SVG Wheel + Dynamic Tabs) */}
      <section id="interactive-chart-section">
        <InteractiveAstrologyChart
          sunSign={chart.sunSign}
          moonSign={chart.moonSign}
          risingSign={chart.risingSign}
        />
      </section>

      {/* 4. PLANETARY POSITIONS SECTION */}
      <section id="planetary-positions-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
              Planetary Dignity & Degrees
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-playfair mt-1">
              Your Planetary Influences
            </h2>
          </div>
          <span className="text-xs text-[#A8B0C5]">
            Calculated under Lahiri Ayanamsha (Sidereal Vedic Ephemeris)
          </span>
        </div>

        <div className="rounded-3xl bg-[#0D1328]/90 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#070B1A] text-[#F4D77D] uppercase font-semibold text-[11px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="py-4 px-6">Celestial Body</th>
                  <th className="py-4 px-6">Zodiac Sign</th>
                  <th className="py-4 px-6">House Placement</th>
                  <th className="py-4 px-6">Longitude Degree</th>
                  <th className="py-4 px-6">Core Astrological Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#A8B0C5]">
                {DEFAULT_PLANETARY_INFLUENCES.map((p, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#121A38]/70 hover:text-white transition-colors group cursor-default"
                  >
                    <td className="py-4 px-6 font-medium text-white flex items-center space-x-2.5">
                      <span className="w-6 h-6 rounded-lg bg-[#070B1A] border border-[#D4AF37]/30 text-[#F4D77D] flex items-center justify-center font-serif text-xs font-bold">
                        {p.glyph}
                      </span>
                      <span>
                        {p.planet}
                        {p.planetSanskrit && (
                          <span className="text-[10px] text-[#A8B0C5] ml-1 font-light">
                            ({p.planetSanskrit})
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#F4D77D]">
                      {p.sign}
                    </td>
                    <td className="py-4 px-6 text-white font-medium">
                      House {p.house}
                    </td>
                    <td className="py-4 px-6 font-mono text-[11px] text-[#A8B0C5]">
                      {p.degree || "15° 00'"}
                      {p.isRetrograde && (
                        <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-sans">
                          Retro
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-xs text-[#A8B0C5] group-hover:text-white/90 leading-relaxed max-w-xs">
                      {p.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. PERSONALITY INSIGHTS */}
      <section id="personality-insights-section" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
            Deep Psychological Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
            What Your Chart Says About You
          </h2>
          <p className="text-xs sm:text-sm text-[#A8B0C5]">
            Comprehensive synthesis of your unconscious archetypes, leadership dynamics, and soul growth pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. PERSONALITY */}
          <div className="rounded-3xl bg-[#0D1328]/90 border border-[#D4AF37]/30 p-6 space-y-3 hover:border-[#F4D77D] transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#F4D77D]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#F4D77D]">
              Personality Archetype
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed">
              Your chart suggests a naturally expressive and confident personality. You possess a compelling presence that naturally commands attention while upholding grace and symmetry.
            </p>
          </div>

          {/* 2. STRENGTHS */}
          <div className="rounded-3xl bg-[#0D1328]/90 border border-emerald-500/30 p-6 space-y-3 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Core Strengths
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed">
              Creativity, communication and leadership stand out strongly. You excel at synthesizing complex artistic ideas and mobilizing teams toward inspiring collective milestones.
            </p>
          </div>

          {/* 3. CHALLENGES */}
          <div className="rounded-3xl bg-[#0D1328]/90 border border-amber-500/30 p-6 space-y-3 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Karmic Challenges
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed">
              You may sometimes overthink decisions or take on too much responsibility. Practicing mindful delegation and allowing emotional rest prevents burnout during intense transit cycles.
            </p>
          </div>

          {/* 4. LIFE DIRECTION */}
          <div className="rounded-3xl bg-[#0D1328]/90 border border-purple-500/30 p-6 space-y-3 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Life Direction
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed">
              You are drawn toward meaningful work where you can influence and inspire others. Your highest fulfillment arrives when building enduring institutions and guiding creative minds.
            </p>
          </div>

        </div>
      </section>

      {/* 6. LIFE AREAS (Horizontal Progress Cards) */}
      <section id="life-areas-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
              Planetary Potency Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-playfair mt-1">
              Your Life Areas
            </h2>
          </div>
          <span className="text-[11px] text-[#A8B0C5] italic">
            Demo metrics designed to visualize thematic astrological planetary potencies.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lifeAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0D1328]/90 border border-white/10 hover:border-[#D4AF37]/40 transition-all space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-[#070B1A] border border-white/10 flex items-center justify-center text-[#F4D77D]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">{area.title}</span>
                  </div>
                  <span className="text-sm font-bold text-[#F4D77D] font-mono">{area.score}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#070B1A] rounded-full h-2 overflow-hidden border border-white/5">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${area.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${area.score}%` }}
                  />
                </div>

                <p className="text-[11px] text-[#A8B0C5]">{area.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. COSMIC INSIGHT (Large Highlighted Card) */}
      <section id="cosmic-insight-highlight-section">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#121A38] via-[#1E2950] to-[#0D1328] border-2 border-[#D4AF37]/50 p-8 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
          
          {/* Subtle background ornamentation */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#9B8AFB]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Cosmic Core Synthesis</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair leading-tight">
              Your Cosmic Insight
            </h3>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light font-serif">
              “You have a strong combination of creativity, intuition and ambition. Your chart suggests that you thrive when you have the freedom to build, express and lead.”
            </p>

            <div className="pt-3">
              <button
                type="button"
                id="explore-full-reading-btn"
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] px-6 py-3 rounded-full shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.03] transition-all cursor-pointer"
              >
                <span>Explore Full Reading</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CONSULTATION CTA & DOWNLOAD CHART */}
      <section id="deeper-reading-cta-section" className="rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/35 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Master Jyotish Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-playfair">
            Want a Deeper Reading?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B0C5]">
            Connect with an experienced astrologer for a personalized interpretation of your chart.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            id="book-consultation-main-btn"
            onClick={() => setIsConsultationOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] shadow-xl shadow-[#D4AF37]/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <button
            type="button"
            id="download-chart-btn"
            onClick={() => setIsDownloadOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:text-[#F4D77D] bg-[#121A38] hover:bg-[#1E2950] border border-white/15 hover:border-[#D4AF37]/50 shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Chart</span>
          </button>
        </div>

      </section>

      {/* Modals */}
      <EditBirthDetailsModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        initialData={formData}
        onSave={(updated) => setFormData(updated)}
      />

      <DownloadReportModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        chartResult={chart}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultType="Birth Chart Reading"
      />

    </div>
  );
};
