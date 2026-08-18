import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, Phone, User, Mail, MessageSquare, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
  astrologerName?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'Birth Chart Reading',
  astrologerName = 'Dr. Aarav Sharma',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-03-15');
  const [time, setTime] = useState('11:00 AM EST');
  const [consultationType, setConsultationType] = useState(defaultType);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      const generatedId = `AV-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F4D77D', '#9B8AFB'],
        });
      } catch {
        // Safe fallback
      }
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      id="consultation-booking-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={handleClose}
    >
      <div
        id="consultation-booking-modal-container"
        className="relative w-full max-w-xl bg-gradient-to-b from-[#0D1328] to-[#070B1A] border border-[#D4AF37]/35 rounded-3xl shadow-2xl shadow-black overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#070B1A] via-[#121A38] to-[#070B1A] p-6 sm:p-7 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#F4D77D] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private 1-on-1 Guidance</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-playfair">
                Book a Vedic Consultation
              </h3>
              <p className="text-xs text-[#A8B0C5]">
                With {astrologerName} & verified AstroVeda master practitioners.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="p-2 rounded-full text-[#A8B0C5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-2xl font-bold text-white font-playfair">
                  Your consultation request has been received.
                </h4>
                <p className="text-sm text-[#A8B0C5] max-w-md mx-auto">
                  An AstroVeda advisor will contact you shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/30 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#A8B0C5]">Reference ID:</span>
                  <span className="text-[#F4D77D] font-mono font-bold">{referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#A8B0C5]">Client Name:</span>
                  <span className="text-white font-semibold">{name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#A8B0C5]">Type:</span>
                  <span className="text-white font-semibold">{consultationType}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#A8B0C5]">Preferred Timing:</span>
                  <span className="text-[#F4D77D] font-semibold">{date} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A8B0C5]">Astrologer:</span>
                  <span className="text-white font-semibold">{astrologerName}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-bold uppercase tracking-wider text-[#070B1A] shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Type */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4D77D]">
                  Consultation Type
                </label>
                <select
                  value={consultationType}
                  onChange={(e) => setConsultationType(e.target.value)}
                  className="w-full bg-[#070B1A] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="Birth Chart Reading">Birth Chart Reading (Kundli & Dasha Timing)</option>
                  <option value="Relationship Reading">Relationship Reading (Synastry & Compatibility)</option>
                  <option value="Career Reading">Career Reading (Vocation & Dhana Yogas)</option>
                  <option value="General Consultation">General Consultation (Life Guidance & Remedies)</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Your Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Preferred Time</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['10:00 AM EST', '2:30 PM EST', '6:00 PM EST'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-all ${
                        time === t
                          ? 'bg-[#D4AF37]/20 border-[#F4D77D] text-white font-semibold'
                          : 'bg-[#070B1A] border-white/10 text-[#A8B0C5] hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8B0C5] flex items-center space-x-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#A8B0C5]" />
                  <span>Optional Notes & Specific Questions</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any specific focal questions, career crossroads, or relationship dynamics you wish to address..."
                  className="w-full px-4 py-2 rounded-xl bg-[#070B1A] border border-white/15 text-white text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
                />
              </div>

              {error && <p className="text-xs text-red-400">{error}</p>}

              <div className="flex items-center space-x-2 text-[11px] text-[#A8B0C5] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>100% confidential & encrypted. Includes full session recording and custom PDF report.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="request-consultation-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-xs font-bold uppercase tracking-wider text-[#070B1A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75 flex items-center justify-center space-x-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request Consultation'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

