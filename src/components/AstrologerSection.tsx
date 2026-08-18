import React from 'react';
import { Sparkles, Calendar, Star, Award, CheckCircle2, ShieldCheck, Video, Clock } from 'lucide-react';
import { FEATURED_ASTROLOGER } from '../data/astrologyContent';

interface AstrologerSectionProps {
  onBookConsultation: () => void;
}

export const AstrologerSection: React.FC<AstrologerSectionProps> = ({ onBookConsultation }) => {
  return (
    <section id="astrologer" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Vedic Masters</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Meet Your <span className="gold-gradient-text">Astrologer</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A8B0C5] leading-relaxed">
          Ground your life decisions with personalized 1-on-1 counsel from seasoned Vedic scholars.
        </p>
      </div>

      {/* Featured Astrologer Profile Showcase Card */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl">
        
        {/* Glow Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/10 via-[#9B8AFB]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Astrologer Portrait & Credential Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl p-1.5 bg-gradient-to-tr from-[#D4AF37] via-[#9B8AFB] to-[#F4D77D] shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              
              {/* Image Frame */}
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#070B1A] relative">
                <img
                  src={FEATURED_ASTROLOGER.avatarUrl}
                  alt={FEATURED_ASTROLOGER.name}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0D1328] border border-[#D4AF37]/50 text-xs font-semibold text-[#F4D77D] shadow-lg flex items-center space-x-1.5 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Verified Jyotish Acharya</span>
              </div>
            </div>

            {/* Rating & Consultations Count */}
            <div className="flex items-center space-x-4 mt-6 text-xs text-[#A8B0C5]">
              <div className="flex items-center space-x-1 text-[#F4D77D]">
                <Star className="w-4 h-4 fill-[#F4D77D]" />
                <span className="font-bold text-white text-sm">{FEATURED_ASTROLOGER.rating}</span>
                <span className="text-[#A8B0C5]">({FEATURED_ASTROLOGER.reviewsCount}+ reviews)</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#9B8AFB]" />
                <span className="text-[#9B8AFB] font-medium">{FEATURED_ASTROLOGER.experience}</span>
              </div>
            </div>

          </div>

          {/* Astrologer Bio & Specializations */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#9B8AFB] mb-1">
                <span>Principal Astrological Advisor</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white font-playfair">
                {FEATURED_ASTROLOGER.name}
              </h3>
              <p className="text-sm font-medium text-[#F4D77D] mt-0.5">
                {FEATURED_ASTROLOGER.title}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#A8B0C5] leading-relaxed">
              {FEATURED_ASTROLOGER.bio}
            </p>

            {/* Specializations Tags */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] mb-3">
                Core Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {FEATURED_ASTROLOGER.specializations.map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#070B1A] border border-white/10 text-xs text-white/90 font-medium flex items-center space-x-1.5"
                  >
                    <span className="text-[#D4AF37]">✦</span>
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
              {FEATURED_ASTROLOGER.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-[#A8B0C5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                id="book-consultation-astrologer-btn"
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all cursor-pointer"
              >
                <Video className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <span className="text-xs text-[#A8B0C5] flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live 1-on-1 Video Session with PDF Dossier</span>
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
