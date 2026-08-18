import React from 'react';
import { X, Sparkles, Download, Calendar, Compass, Shield, Heart, Briefcase, UserCheck } from 'lucide-react';
import { BirthChartResult } from '../types';

interface BirthChartModalProps {
  result: BirthChartResult | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const BirthChartModal: React.FC<BirthChartModalProps> = ({
  result,
  onClose,
  onBookConsultation,
}) => {
  if (!result) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0D1328] border border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#070B1A] via-[#121A38] to-[#070B1A] p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F4D77D] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#F4D77D]" />
                <span>Personalized Vedic Cosmic Profile (DEMO)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair pt-1">
                Cosmic Blueprint: <span className="gold-gradient-text">{result.name}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#A8B0C5]">
                Born {result.date} at {result.time} • {result.place} • Nakshatra: <span className="text-[#F4D77D] font-medium">{result.nakshatra}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close birth chart modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* The Big 3 Trinity (Sun, Moon, Rising) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Sun Sign */}
            <div className="p-5 rounded-2xl bg-[#070B1A]/80 border border-[#D4AF37]/30 flex flex-col items-center text-center relative overflow-hidden group hover:border-[#F4D77D] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#F4D77D] font-serif text-2xl mb-2">
                ☉
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-widest text-[#A8B0C5]">Core Soul & Vitality</span>
              <h4 className="text-2xl font-bold text-white font-playfair my-1">
                Sun in <span className="text-[#F4D77D]">{result.sunSign}</span>
              </h4>
              <p className="text-xs text-[#A8B0C5] leading-relaxed">
                Governs your conscious ego, intrinsic vitality, ambition, and primary life mission.
              </p>
            </div>

            {/* Moon Sign */}
            <div className="p-5 rounded-2xl bg-[#070B1A]/80 border border-[#9B8AFB]/30 flex flex-col items-center text-center relative overflow-hidden group hover:border-[#9B8AFB] transition-all">
              <div className="w-12 h-12 rounded-full bg-[#9B8AFB]/15 flex items-center justify-center text-[#9B8AFB] font-serif text-2xl mb-2">
                ☽
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-widest text-[#A8B0C5]">Subconscious & Emotion</span>
              <h4 className="text-2xl font-bold text-white font-playfair my-1">
                Moon in <span className="text-[#9B8AFB]">{result.moonSign}</span>
              </h4>
              <p className="text-xs text-[#A8B0C5] leading-relaxed">
                Rules your inner psychological landscape, instinctual reactions, and emotional fulfillment.
              </p>
            </div>

            {/* Rising Sign */}
            <div className="p-5 rounded-2xl bg-[#070B1A]/80 border border-white/15 flex flex-col items-center text-center relative overflow-hidden group hover:border-[#F4D77D] transition-all">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-serif text-2xl mb-2">
                ↑
              </div>
              <span className="text-[11px] uppercase font-semibold tracking-widest text-[#A8B0C5]">Ascendant & Aura</span>
              <h4 className="text-2xl font-bold text-white font-playfair my-1">
                Rising in <span className="text-[#F4D77D]">{result.risingSign}</span>
              </h4>
              <p className="text-xs text-[#A8B0C5] leading-relaxed">
                Shapes your external presence, initial impression on the world, and physical constitution.
              </p>
            </div>

          </div>

          {/* Overall Cosmic Synthesis Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121A38] to-[#070B1A] border border-[#D4AF37]/20 relative">
            <div className="flex items-center space-x-2 text-xs uppercase font-semibold tracking-wider text-[#F4D77D] mb-2">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Cosmic Synthesis</span>
            </div>
            <p className="text-base sm:text-lg text-white font-serif leading-relaxed italic">
              &ldquo;{result.summary}&rdquo;
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {result.strengths.map((strength, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#A8B0C5]">
                  <span className="text-[#D4AF37]">✦</span>
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Elements Balance */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A8B0C5] mb-4">
              Elemental Distribution
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-[#070B1A] border border-red-500/20">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-red-400 font-medium">🔥 Fire</span>
                  <span className="text-white font-semibold">{result.elements.fire}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-red-400 h-full rounded-full" style={{ width: `${result.elements.fire}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070B1A] border border-emerald-500/20">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-emerald-400 font-medium">🌱 Earth</span>
                  <span className="text-white font-semibold">{result.elements.earth}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${result.elements.earth}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070B1A] border border-sky-500/20">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-sky-400 font-medium">💨 Air</span>
                  <span className="text-white font-semibold">{result.elements.air}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full" style={{ width: `${result.elements.air}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070B1A] border border-blue-500/20">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-blue-400 font-medium">💧 Water</span>
                  <span className="text-white font-semibold">{result.elements.water}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: `${result.elements.water}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Life Dimensions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A8B0C5]">
              Life Focus Dimensions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-[#070B1A] border border-white/10 space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#F4D77D]">
                  <UserCheck className="w-4 h-4" />
                  <span>Personality & Aura</span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  {result.lifeAspects.personality}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B1A] border border-white/10 space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#9B8AFB]">
                  <Briefcase className="w-4 h-4" />
                  <span>Career & Leadership</span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  {result.lifeAspects.career}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B1A] border border-white/10 space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400">
                  <Heart className="w-4 h-4" />
                  <span>Love & Karmic Chemistry</span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  {result.lifeAspects.love}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B1A] border border-white/10 space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#D4AF37]">
                  <Shield className="w-4 h-4" />
                  <span>Soul Mission & Dharma</span>
                </div>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  {result.lifeAspects.destiny}
                </p>
              </div>

            </div>
          </div>

          {/* Planetary Placements Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A8B0C5]">
              Planetary Ephemeris Positions (Kundli Grahas)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#070B1A]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#121A38] text-[#A8B0C5] uppercase text-[10px] tracking-wider border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Planet (Graha)</th>
                    <th className="py-3 px-4">Zodiac Sign</th>
                    <th className="py-3 px-4">House (Bhava)</th>
                    <th className="py-3 px-4">Exact Degree</th>
                    <th className="py-3 px-4">Motion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white">
                  {result.planetaryPositions.map((pos, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-2.5 px-4 font-medium text-[#F4D77D]">{pos.planet}</td>
                      <td className="py-2.5 px-4">{pos.sign}</td>
                      <td className="py-2.5 px-4 text-[#9B8AFB]">House {pos.house}</td>
                      <td className="py-2.5 px-4 font-mono text-[#A8B0C5]">{pos.degree}</td>
                      <td className="py-2.5 px-4">
                        {pos.isRetrograde ? (
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                            Retrograde (R)
                          </span>
                        ) : (
                          <span className="text-[#A8B0C5] text-[10px]">Direct</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#070B1A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A8B0C5] text-center sm:text-left">
            <span className="text-[#D4AF37]">✦ Full 24-page Kundli</span> report available with personal astrologer review.
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-white/15 text-xs font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              <span>Save / Print</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-semibold uppercase tracking-wider text-[#070B1A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span>Book Expert Reading</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
