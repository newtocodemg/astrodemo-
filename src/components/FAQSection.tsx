import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/astrologyContent';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D1328] border border-[#D4AF37]/30 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Curiosities & Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair tracking-tight">
          Frequently Asked <span className="gold-gradient-text">Questions</span>
        </h2>
        <p className="text-base text-[#A8B0C5] leading-relaxed max-w-xl mx-auto">
          Everything you need to know about our astrological methodology, readings, and consultations.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#0D1328] border-[#D4AF37]/40 shadow-lg shadow-black/40'
                  : 'bg-[#0D1328]/60 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-medium text-white font-playfair pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#D4AF37] text-[#070B1A] border-[#D4AF37] rotate-180'
                      : 'bg-[#070B1A] text-[#A8B0C5] border-white/10'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#A8B0C5] leading-relaxed border-t border-white/5 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
