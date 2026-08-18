import React from 'react';
import { Sparkles, Calendar, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartJourney: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartJourney }) => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Birth Details',
      desc: 'Enter your date, exact time and place of birth to map your celestial sky.',
      icon: <Calendar className="w-6 h-6 text-[#D4AF37]" />,
      highlight: 'Takes < 2 minutes',
    },
    {
      number: '02',
      title: 'Reveal Your Chart',
      desc: 'Generate your personalized cosmic profile with full planetary positions and Nakshatra matrix.',
      icon: <Compass className="w-6 h-6 text-[#9B8AFB]" />,
      highlight: 'Vedic Sidereal Precision',
    },
    {
      number: '03',
      title: 'Understand Your Path',
      desc: 'Explore deep insights around relationships, career, financial timing, and personal dharma.',
      icon: <Sparkles className="w-6 h-6 text-[#F4D77D]" />,
      highlight: 'Actionable Clarity',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Simple & Transcendent Process</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Your Cosmic Journey In <span className="gold-gradient-text">3 Steps</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A8B0C5] leading-relaxed">
          Unlock timeless astronomical wisdom distilled into an effortless, modern experience.
        </p>
      </div>

      {/* Steps Container with Connecting Constellation Orbit Line */}
      <div className="relative">
        
        {/* Connecting Desktop Constellation Line */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-12 bg-gradient-to-r from-[#D4AF37]/20 via-[#9B8AFB]/40 to-[#D4AF37]/20 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent animate-pulse" />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              id={`step-card-${step.number}`}
              className="group relative rounded-3xl bg-[#0D1328]/80 border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] backdrop-blur-md"
            >
              <div>
                {/* Number Badge & Node */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  
                  <span className="font-cinzel text-3xl font-extrabold text-[#D4AF37]/40 group-hover:text-[#F4D77D] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair mb-3 group-hover:text-[#F4D77D] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A8B0C5] leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Step Highlight Pill */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#9B8AFB] tracking-wider uppercase">
                  ✦ {step.highlight}
                </span>
                <span className="text-xs text-[#D4AF37] font-semibold">Step {idx + 1} of 3</span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Bottom Action Trigger */}
      <div className="mt-14 text-center">
        <button
          type="button"
          onClick={onStartJourney}
          className="inline-flex items-center space-x-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
        >
          <span>Begin Your Chart Generation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
