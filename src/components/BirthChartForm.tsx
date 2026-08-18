import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, User, ArrowRight, Star } from 'lucide-react';
import { BirthChartFormData, BirthChartResult } from '../types';
import { generateDemoBirthChart } from '../data/astrologyContent';
import confetti from 'canvas-confetti';

interface BirthChartFormProps {
  onGenerateChart: (result: BirthChartResult) => void;
}

export const BirthChartForm: React.FC<BirthChartFormProps> = ({ onGenerateChart }) => {
  const [formData, setFormData] = useState<BirthChartFormData>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    chartType: 'Vedic (Kundli)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFillSample = () => {
    setFormData({
      fullName: 'Aarav Patel',
      dateOfBirth: '1998-08-15',
      timeOfBirth: '08:45',
      placeOfBirth: 'Mumbai, Maharashtra, India',
      chartType: 'Vedic (Kundli)',
    });
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.timeOfBirth) newErrors.timeOfBirth = 'Time of birth is required';
    if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = 'Place of birth is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#F4D77D', '#9B8AFB', '#FFFFFF'],
        });
      } catch {
        // Safe fallback
      }
      const chart = generateDemoBirthChart(formData);
      onGenerateChart(chart);
    }, 1000);
  };

  return (
    <section id="birth-chart" className="relative -mt-6 sm:-mt-12 lg:-mt-16 z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="glass-panel-gold rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/80 relative overflow-hidden">
        
        {/* Subtle Cosmic Background Lights inside card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D4AF37]/10 via-[#9B8AFB]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-[#9B8AFB]/10 to-transparent rounded-full blur-xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs text-[#F4D77D] uppercase font-semibold tracking-wider mb-1">
              <Star className="w-3.5 h-3.5 fill-[#F4D77D]" />
              <span>Free Cosmic Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair">
              Discover Your <span className="gold-gradient-text">Cosmic Blueprint</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8B0C5] mt-1">
              Input your birth credentials to generate an instant Vedic Kundli and planetary personality synthesis.
            </p>
          </div>

          <button
            type="button"
            onClick={handleFillSample}
            id="fill-sample-chart-btn"
            className="text-xs text-[#9B8AFB] hover:text-white px-3 py-1.5 rounded-lg bg-[#9B8AFB]/10 border border-[#9B8AFB]/20 hover:border-[#9B8AFB]/40 transition-all self-end sm:self-auto cursor-pointer"
          >
            Auto-fill Demo Data ✦
          </button>
        </div>

        {/* Form Grid */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5]">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A8B0C5]">
                  <User className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Elena Rostova"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#070B1A]/80 border ${
                    errors.fullName ? 'border-red-400' : 'border-white/15 focus:border-[#D4AF37]'
                  } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            {/* Date of Birth */}
            <div className="space-y-1.5">
              <label htmlFor="dateOfBirth" className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5]">
                Date of Birth
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A8B0C5]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#070B1A]/80 border ${
                    errors.dateOfBirth ? 'border-red-400' : 'border-white/15 focus:border-[#D4AF37]'
                  } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                />
              </div>
              {errors.dateOfBirth && <p className="text-xs text-red-400 mt-1">{errors.dateOfBirth}</p>}
            </div>

            {/* Time of Birth */}
            <div className="space-y-1.5">
              <label htmlFor="timeOfBirth" className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5]">
                Time of Birth
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A8B0C5]">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <input
                  type="time"
                  id="timeOfBirth"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#070B1A]/80 border ${
                    errors.timeOfBirth ? 'border-red-400' : 'border-white/15 focus:border-[#D4AF37]'
                  } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                />
              </div>
              {errors.timeOfBirth && <p className="text-xs text-red-400 mt-1">{errors.timeOfBirth}</p>}
            </div>

            {/* Place of Birth */}
            <div className="space-y-1.5">
              <label htmlFor="placeOfBirth" className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5]">
                Place of Birth
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A8B0C5]">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  placeholder="City, State, Country"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#070B1A]/80 border ${
                    errors.placeOfBirth ? 'border-red-400' : 'border-white/15 focus:border-[#D4AF37]'
                  } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                />
              </div>
              {errors.placeOfBirth && <p className="text-xs text-red-400 mt-1">{errors.placeOfBirth}</p>}
            </div>

          </div>

          {/* Bottom Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs text-[#A8B0C5]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Calculated using Sidereal Ephemeris & Lahiri Ayanamsha</span>
            </div>

            <button
              type="submit"
              id="generate-birth-chart-submit-btn"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wider text-[#070B1A] uppercase transition-all duration-300 bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <span className="w-4 h-4 border-2 border-[#070B1A] border-t-transparent rounded-full animate-spin" />
                  <span>Aligning Planetary Orbits...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2 font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Birth Chart →</span>
                </span>
              )}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};
