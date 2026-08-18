import React from 'react';
import { X, Sparkles, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { AstrologyService } from '../types';

interface ServiceDetailModalProps {
  service: AstrologyService | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0D1328] border border-[#D4AF37]/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden my-8">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#070B1A] via-[#121A38] to-[#070B1A] p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#F4D77D] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Service Blueprint #{service.number}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-playfair">
                {service.title}
              </h3>
              <p className="text-xs text-[#9B8AFB] uppercase tracking-wider font-medium">
                {service.tagline}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close service details"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] mb-2">
              Overview & Methodology
            </h4>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {service.description} Our certified Vedic astrologers utilize ancient Parashari formulas and high-precision astronomical algorithms to deliver actionable, life-transforming clarity.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] mb-3">
              What This Analysis Uncovers
            </h4>
            <div className="space-y-2.5">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-[#070B1A]/70 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#A8B0C5]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-[#9B8AFB] bg-[#9B8AFB]/10 p-3.5 rounded-xl border border-[#9B8AFB]/20">
            <Clock className="w-4 h-4 text-[#9B8AFB] shrink-0" />
            <span>Format: <strong>{service.deliveryTime}</strong> with optional 1-on-1 audio/video explanation session.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#070B1A] border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-white/15 text-xs font-medium text-white hover:bg-white/10"
          >
            Back
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="inline-flex items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-semibold uppercase tracking-wider text-[#070B1A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 mr-1.5" />
            <span>Schedule Session</span>
          </button>
        </div>

      </div>
    </div>
  );
};
