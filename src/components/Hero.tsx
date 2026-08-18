import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Eye } from 'lucide-react';

interface HeroProps {
  onGetReadingClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetReadingClick, onExploreClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            
            {/* Top Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0D1328]/80 border border-[#D4AF37]/30 text-[#F4D77D] text-xs font-semibold tracking-widest uppercase shadow-md shadow-black/30 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4D77D] animate-pulse" />
              <span>✦ PERSONALIZED ASTROLOGY</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] font-playfair">
                Your Birth Chart. <br />
                <span className="gold-gradient-text drop-shadow-[0_4px_24px_rgba(212,175,55,0.25)]">
                  Your Cosmic Story.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#A8B0C5] max-w-2xl font-normal leading-relaxed">
              Explore your planetary influences, discover your strengths, and gain a deeper understanding of the path ahead with timeless Vedic wisdom and modern precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                type="button"
                id="hero-cta-primary"
                onClick={onGetReadingClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-semibold tracking-wider text-[#070B1A] uppercase transition-all duration-300 bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
              >
                <span className="flex items-center space-x-2 font-semibold">
                  <span>Get My Free Reading</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                type="button"
                id="hero-cta-secondary"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-medium text-white transition-all duration-300 bg-[#0D1328]/70 hover:bg-[#0D1328] border border-white/15 hover:border-[#D4AF37]/50 rounded-full backdrop-blur-md hover:text-[#F4D77D] text-center"
              >
                <span className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-[#9B8AFB]" />
                  <span>Explore Astrology</span>
                </span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#A8B0C5]/90 pt-1">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>No credit card required</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-[#9B8AFB]" />
                <span>Takes less than 2 minutes</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#F4D77D]" />
                <span>100% Private & Vedic Precision</span>
              </div>
            </div>

          </div>

          {/* Right Column (Celestial Visual) */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
            <div
              className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] flex items-center justify-center transition-transform duration-700 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
              }}
            >
              {/* Outer Radiant Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9B8AFB]/20 via-[#D4AF37]/15 to-transparent blur-3xl scale-110" />

              {/* Orbit Ring 1 (Constellations & Zodiac Wheel) */}
              <div className="absolute inset-2 sm:inset-4 rounded-full border border-[#D4AF37]/25 animate-spin-slow">
                {zodiacSymbols.map((symbol, index) => {
                  const angle = (index * 360) / 12;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 175; // Approx for desktop
                  return (
                    <div
                      key={index}
                      className="absolute hidden sm:flex items-center justify-center w-7 h-7 -ml-3.5 -mt-3.5 rounded-full bg-[#0D1328]/90 border border-[#D4AF37]/40 text-[#F4D77D] text-xs font-serif font-bold shadow-md shadow-black/50 transition-transform hover:scale-125"
                      style={{
                        top: `calc(50% + ${Math.sin(rad) * radius}px)`,
                        left: `calc(50% + ${Math.cos(rad) * radius}px)`,
                        transform: `rotate(${-angle}deg)`,
                      }}
                    >
                      {symbol}
                    </div>
                  );
                })}
              </div>

              {/* Orbit Ring 2 (Planetary Trajectories) */}
              <div className="absolute inset-10 sm:inset-14 rounded-full border border-dashed border-[#9B8AFB]/30 animate-spin-reverse-slow">
                {/* Orbiting Planet 1: Jupiter */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F4D77D] shadow-[0_0_15px_rgba(212,175,55,0.8)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                {/* Orbiting Planet 2: Venus */}
                <div className="absolute -bottom-2.5 left-1/3 w-5 h-5 rounded-full bg-gradient-to-tr from-[#9B8AFB] to-[#E0D8FF] shadow-[0_0_12px_rgba(155,138,251,0.8)]" />
              </div>

              {/* Orbit Ring 3 (Inner Sacred Geometry) */}
              <div className="absolute inset-20 sm:inset-24 rounded-full border border-white/10 flex items-center justify-center">
                <svg className="w-full h-full text-[#D4AF37]/20" viewBox="0 0 100 100">
                  <polygon points="50,5 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <polygon points="50,95 90,15 10,15" fill="none" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>

              {/* Central Glowing Celestial Moon */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#FDF8E2] via-[#E8D190] to-[#8C6D1F] shadow-[0_0_60px_rgba(244,215,125,0.4)] p-1 animate-float-gentle overflow-hidden flex items-center justify-center">
                
                {/* Moon Surface Texture Details */}
                <div className="absolute inset-0 rounded-full bg-[#18203E]/20 mix-blend-multiply pointer-events-none" />
                <div className="absolute top-6 left-8 w-12 h-12 rounded-full bg-[#A89045]/30 blur-xs" />
                <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#8C6D1F]/25 blur-sm" />
                <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-[#9E8236]/30 blur-xs" />
                
                {/* Lunar Crescent Shadow Accent */}
                <div className="absolute -right-4 -bottom-4 w-full h-full rounded-full bg-gradient-to-tl from-[#070B1A]/70 via-transparent to-transparent" />
                
                {/* Center Core Sparkle */}
                <div className="relative z-10 text-center">
                  <span className="font-cinzel text-xs sm:text-sm tracking-widest text-[#070B1A] font-extrabold uppercase drop-shadow-sm">
                    ✦ ASTROVEDA ✦
                  </span>
                </div>
              </div>

              {/* Floating Orbiting Satellite / Star Badges */}
              <div className="absolute -top-2 right-4 sm:right-10 px-3 py-1 rounded-full bg-[#0D1328]/90 border border-[#D4AF37]/40 text-[11px] text-[#F4D77D] font-medium shadow-lg backdrop-blur-md flex items-center space-x-1 animate-pulse">
                <span>☉ Sun in Leo</span>
              </div>

              <div className="absolute -bottom-4 left-4 sm:left-8 px-3 py-1 rounded-full bg-[#0D1328]/90 border border-[#9B8AFB]/40 text-[11px] text-[#9B8AFB] font-medium shadow-lg backdrop-blur-md flex items-center space-x-1">
                <span>☽ Moon in Pisces</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
