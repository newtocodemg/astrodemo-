import React from 'react';
import { Compass, HeartHandshake, TrendingUp, SunMedium, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { ASTROLOGY_SERVICES } from '../data/servicesData';
import { AstrologyService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: AstrologyService) => void;
  onOpenBirthChart: () => void;
  onOpenHoroscope: () => void;
  onOpenCompatibility: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBirthChart,
  onOpenHoroscope,
  onOpenCompatibility,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'SunMedium':
        return <SunMedium className="w-6 h-6 text-[#F4D77D]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#9B8AFB]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const handleCardAction = (service: AstrologyService) => {
    if (service.id === 'birth-chart') {
      onOpenBirthChart();
    } else if (service.id === 'daily-horoscope') {
      onOpenHoroscope();
    } else if (service.id === 'marriage-compatibility') {
      onOpenCompatibility();
    } else {
      onSelectService(service);
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <span>✦ SACRED VEDIC OFFERINGS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Guidance For Every <span className="gold-gradient-text">Chapter Of Life</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A8B0C5] leading-relaxed">
          Explore the areas where astrology can offer perspective and clarity, illuminating your strengths and karmic timing.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {ASTROLOGY_SERVICES.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            onClick={() => handleCardAction(service)}
            className="group relative rounded-2xl bg-[#0D1328]/70 border border-white/10 hover:border-[#D4AF37]/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-sm"
          >
            {/* Top Hover Gradient Light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header row: Number + Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-cinzel text-xl font-bold text-[#D4AF37]/60 group-hover:text-[#F4D77D] transition-colors">
                  {service.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#070B1A] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/40 group-hover:scale-110 transition-all shadow-inner">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair mb-1 group-hover:text-[#F4D77D] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-[#9B8AFB] font-medium tracking-wide uppercase mb-3">
                {service.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-[#A8B0C5] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Mini Benefits Preview */}
              <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                {service.benefits.slice(0, 2).map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-xs text-[#A8B0C5]/90 space-x-2">
                    <span className="text-[#D4AF37] text-[10px]">✦</span>
                    <span className="line-clamp-1">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#F4D77D] border-t border-white/5">
              <span className="group-hover:translate-x-1 transition-transform">Explore Insights</span>
              <div className="w-7 h-7 rounded-full bg-[#070B1A] border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#070B1A] transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
