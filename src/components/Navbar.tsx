import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles, Compass, Heart, Sun, FileText, Users, Home } from 'lucide-react';

interface NavbarProps {
  onOpenReadingModal: () => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReadingModal,
  onOpenConsultationModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Daily Horoscope', path: '/horoscope' },
    { name: 'Birth Chart', path: '/birth-chart' },
    { name: 'Compatibility', path: '/compatibility' },
    { name: 'Astrologers', path: '/astrologers' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B1A]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-lg shadow-black/50'
          : 'bg-[#070B1A]/40 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            id="navbar-brand-logo"
            onClick={handleLinkClick}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            {/* Celestial Moon & Star Emblem */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#0D1328] to-[#1E2950] border border-[#D4AF37]/45 flex items-center justify-center shadow-md shadow-[#D4AF37]/15 group-hover:border-[#F4D77D] transition-colors">
              <svg className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8A9.006 9.006 0 0 0 12 3z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#F4D77D] rounded-full animate-ping opacity-60" />
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-white group-hover:text-[#F4D77D] transition-colors">
                ASTRO<span className="text-[#D4AF37]">VEDA</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#A8B0C5] font-light -mt-0.5">
                Vedic Cosmic Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium transition-colors relative py-1 group ${
                    isActive ? 'text-[#F4D77D] font-semibold' : 'text-[#A8B0C5] hover:text-[#F4D77D]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F4D77D] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              id="navbar-book-consultation-btn"
              onClick={onOpenConsultationModal}
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F4D77D] hover:text-white bg-[#121A38] hover:bg-[#1E2950] border border-[#D4AF37]/35 transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Book Consultation</span>
            </button>

            <button
              type="button"
              id="navbar-cta-button"
              onClick={onOpenReadingModal}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider text-[#070B1A] uppercase transition-all duration-300 bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Free Reading</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A8B0C5] hover:text-white hover:bg-[#0D1328] focus:outline-none border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F4D77D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden fixed inset-x-0 top-[68px] bg-[#070B1A]/98 backdrop-blur-2xl border-b border-[#D4AF37]/25 px-6 py-6 shadow-2xl transition-all animate-fadeIn z-50 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`text-base font-medium py-2.5 px-3 rounded-xl border flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#1E2950] border-[#F4D77D] text-[#F4D77D] font-bold'
                      : 'border-transparent text-[#A8B0C5] hover:text-white hover:bg-[#121A38]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#D4AF37]">✦</span>
                </Link>
              );
            })}

            <div className="pt-4 space-y-2.5 border-t border-white/10">
              <button
                type="button"
                id="mobile-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#121A38] border border-[#D4AF37]/35 rounded-full hover:bg-[#1E2950] flex items-center justify-center space-x-2"
              >
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>Book a Consultation</span>
              </button>

              <button
                type="button"
                id="mobile-drawer-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReadingModal();
                }}
                className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase text-[#070B1A] bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] rounded-full shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Reading</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

