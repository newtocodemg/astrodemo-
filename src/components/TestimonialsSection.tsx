import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/astrologyContent';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Client Transformations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Stories Written In <span className="gold-gradient-text">The Stars</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A8B0C5] leading-relaxed">
          Read how personalized cosmic blueprints have provided clarity during pivotal life moments.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            id={`testimonial-card-${item.id}`}
            className="group relative rounded-3xl bg-[#0D1328]/70 border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/40 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] backdrop-blur-md"
          >
            <div>
              {/* Star Rating + Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F4D77D] text-[#F4D77D]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors" />
              </div>

              {/* Quote Content */}
              <p className="text-sm sm:text-base text-white/90 font-serif leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white font-playfair">
                  {item.name}
                </h4>
                <p className="text-xs text-[#A8B0C5]">
                  {item.location}
                </p>
              </div>

              <span className="text-[10px] uppercase font-semibold text-[#9B8AFB] tracking-wider px-2.5 py-1 rounded-full bg-[#9B8AFB]/10 border border-[#9B8AFB]/20">
                {item.date}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
