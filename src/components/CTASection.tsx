import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onGetReadingClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetReadingClick }) => {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Celestial Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0D1328] via-[#121A38] to-[#070B1A] border border-[#D4AF37]/30 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl">
        
        {/* Atmospheric Glowing Moon in Background */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-b from-[#F4D77D]/15 via-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />

        {/* Outer Circular Celestial Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#D4AF37]/15 pointer-events-none animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#070B1A]/80 border border-[#D4AF37]/40 text-[#F4D77D] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>✦ COSMIC DESTINY AWAITS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair leading-[1.15]">
            The Stars May Guide You. <br />
            <span className="gold-gradient-text">The Choice Is Still Yours.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#A8B0C5] max-w-2xl mx-auto leading-relaxed">
            Begin your journey of self-discovery with a personalized astrology reading. Gain unshakeable confidence in your relationships, career timing, and spiritual purpose.
          </p>

          {/* Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              id="cta-section-primary-btn"
              onClick={onGetReadingClick}
              className="group inline-flex items-center justify-center space-x-3 px-9 py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-full hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Get Your Personalized Reading</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-xs text-[#A8B0C5] pt-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Private & Confidential • Instant Demo Blueprint & PDF</span>
          </div>

        </div>

      </div>

    </section>
  );
};
