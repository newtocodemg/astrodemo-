import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Compass, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReadingModal: () => void;
  onOpenConsultationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReadingModal,
  onOpenConsultationModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050814] border-t border-[#D4AF37]/15 pt-16 pb-12 overflow-hidden">
      
      {/* Subtle Cosmic Top Line Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#0D1328] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8A9.006 9.006 0 0 0 12 3z" />
                </svg>
              </div>
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-white group-hover:text-[#F4D77D] transition-colors">
                ASTRO<span className="text-[#D4AF37]">VEDA</span>
              </span>
            </Link>

            <p className="text-sm text-[#A8B0C5] max-w-sm leading-relaxed">
              Modern astrology for a more meaningful journey. Discover what the stars have written for your relationships, career, and soul destiny.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0D1328] border border-white/10 flex items-center justify-center text-[#A8B0C5] hover:text-[#F4D77D] hover:border-[#D4AF37]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#0D1328] border border-white/10 flex items-center justify-center text-[#A8B0C5] hover:text-[#F4D77D] hover:border-[#D4AF37]/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#0D1328] border border-white/10 flex items-center justify-center text-[#A8B0C5] hover:text-[#F4D77D] hover:border-[#D4AF37]/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Explore Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F4D77D]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B0C5]">
              <li>
                <Link
                  to="/horoscope"
                  onClick={scrollToTop}
                  className="hover:text-[#F4D77D] transition-colors"
                >
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link
                  to="/birth-chart"
                  onClick={scrollToTop}
                  className="hover:text-[#F4D77D] transition-colors"
                >
                  Birth Chart (Kundli)
                </Link>
              </li>
              <li>
                <Link
                  to="/compatibility"
                  onClick={scrollToTop}
                  className="hover:text-[#F4D77D] transition-colors"
                >
                  Relationship Compatibility
                </Link>
              </li>
              <li>
                <Link
                  to="/astrologers"
                  onClick={scrollToTop}
                  className="hover:text-[#F4D77D] transition-colors"
                >
                  Meet Verified Astrologers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Bookings */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F4D77D]">
              Consultations
            </h4>
            <ul className="space-y-2 text-sm text-[#A8B0C5]">
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultationModal}
                  className="hover:text-[#F4D77D] transition-colors text-left"
                >
                  Book 1-on-1 Session
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReadingModal}
                  className="hover:text-[#F4D77D] transition-colors text-left"
                >
                  Instant Cosmic Blueprint
                </button>
              </li>
              <li>
                <Link
                  to="/astrologers"
                  onClick={scrollToTop}
                  className="hover:text-[#F4D77D] transition-colors"
                >
                  Vedic Astrologer Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Quick Cosmic Badge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F4D77D]">
              Vedic Assurance
            </h4>
            <div className="p-4 rounded-2xl bg-[#0D1328] border border-white/10 space-y-2 text-xs text-[#A8B0C5]">
              <div className="flex items-center space-x-1.5 text-white font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Sidereal Calculations</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Grounded in ancient Jyotish principles, refined with contemporary clarity.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B0C5]">
          <div>
            © 2026 AstroVeda. All rights reserved.
          </div>

          <div className="flex items-center space-x-1">
            <span>Designed & developed by</span>
            <a
              href="https://newtocode.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4D77D] hover:text-white font-semibold underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#F4D77D] transition-colors"
            >
              &lt;/&gt; newtocode
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

