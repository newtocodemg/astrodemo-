import React, { useState } from 'react';
import { Sparkles, Star, Calendar, ShieldCheck, CheckCircle2, Video, Globe, Award, Clock, ArrowRight } from 'lucide-react';
import { ALL_ASTROLOGERS } from '../data/astrologyContent';
import { AstrologerProfile } from '../types';
import { ConsultationModal } from '../components/ConsultationModal';

export const AstrologersPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedAstrologer, setSelectedAstrologer] = useState<AstrologerProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const filterOptions = [
    'All',
    'Birth Chart Analysis',
    'Relationship Compatibility',
    'Career & Wealth Guidance',
    'Gemstone & Mantra Remedies',
  ];

  const filteredAstrologers = ALL_ASTROLOGERS.filter((a) => {
    if (filter === 'All') return true;
    return a.specializations.some((s) => s.toLowerCase().includes(filter.toLowerCase().slice(0, 8)));
  });

  const handleBook = (astrologer: AstrologerProfile) => {
    setSelectedAstrologer(astrologer);
    setIsModalOpen(true);
  };

  return (
    <div id="astrologers-page" className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 space-y-12">
      
      {/* Top Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#F4D77D] uppercase tracking-widest bg-[#D4AF37]/10 px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Strictly Vetted & Gold Medalist Astrologers</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Our Verified Vedic Astrologers
        </h1>
        <p className="text-base text-[#A8B0C5] max-w-2xl mx-auto">
          Connect with certified Jyotish Acharyas, Synastry specialists, and Vedic scholars for 1-on-1 private video guidance.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="flex items-center justify-center flex-wrap gap-2">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setFilter(opt)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
              filter === opt
                ? 'bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-[#070B1A] border-transparent font-bold shadow-md'
                : 'bg-[#0D1328] text-[#A8B0C5] border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {opt}
          </button>
        ))}
      </section>

      {/* Astrologers Directory Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredAstrologers.map((astrologer) => (
          <div
            key={astrologer.id}
            className="rounded-3xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/30 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md flex flex-col justify-between hover:border-[#F4D77D]/60 transition-all duration-300 group"
          >
            
            <div className="space-y-5">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative">
                  <img
                    src={astrologer.avatarUrl}
                    alt={astrologer.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#D4AF37]/50 shadow-lg group-hover:border-[#F4D77D] transition-colors"
                  />
                  <span className="absolute -bottom-2 -right-2 p-1 rounded-lg bg-[#070B1A] border border-[#D4AF37]/40 text-[#F4D77D]">
                    <Award className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair group-hover:text-[#F4D77D] transition-colors">
                      {astrologer.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#F4D77D] font-medium">
                    {astrologer.title}
                  </p>
                  
                  <div className="flex items-center space-x-3 text-xs text-[#A8B0C5] pt-1">
                    <span className="flex items-center space-x-1 text-amber-300 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>{astrologer.rating}</span>
                    </span>
                    <span>({astrologer.reviewsCount} verified reviews)</span>
                    <span>•</span>
                    <span className="text-white font-medium">{astrologer.experience}</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-[#A8B0C5] leading-relaxed">
                {astrologer.bio}
              </p>

              {/* Specializations Chips */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8B0C5]">
                  Core Specializations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {astrologer.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] bg-[#121A38] text-white border border-white/10"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credentials Checklist */}
              <div className="p-4 rounded-2xl bg-[#070B1A] border border-white/5 space-y-1.5 text-xs">
                {astrologer.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center space-x-2 text-[#A8B0C5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              {/* Languages & Slots */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A8B0C5] pt-1">
                <span className="flex items-center space-x-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Languages: <strong className="text-white">{astrologer.languages.join(', ')}</strong></span>
                </span>
                {astrologer.pricePerSession && (
                  <span className="text-[#F4D77D] font-bold">
                    {astrologer.pricePerSession}
                  </span>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-emerald-400 flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Next slot: {astrologer.availableSlots[0] || 'Tomorrow'}</span>
              </span>

              <button
                type="button"
                id={`book-astrologer-${astrologer.id}`}
                onClick={() => handleBook(astrologer)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>

          </div>
        ))}
      </section>

      {/* Satisfaction Guarantee Banner */}
      <section className="rounded-3xl bg-gradient-to-r from-[#121A38] to-[#0D1328] border border-[#D4AF37]/30 p-6 sm:p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#F4D77D] mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white font-playfair">
          The AstroVeda Confidentiality & Quality Guarantee
        </h3>
        <p className="text-xs sm:text-sm text-[#A8B0C5] max-w-xl mx-auto">
          Every session is strictly private, end-to-end encrypted, and guaranteed. If your consultation does not provide actionable clarity, our care team will reschedule or refund your session immediately.
        </p>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        astrologerName={selectedAstrologer?.name || 'Dr. Aarav Sharma'}
        defaultType="Birth Chart Reading"
      />

    </div>
  );
};
