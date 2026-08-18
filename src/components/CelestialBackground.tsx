import React, { useMemo } from 'react';

export const CelestialBackground: React.FC = () => {
  // Generate random static stars for high performance
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base Cosmic Gradient */}
      <div className="absolute inset-0 bg-[#070B1A]" />

      {/* Atmospheric Nebula Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#9B8AFB]/10 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-gradient-to-bl from-[#D4AF37]/8 via-[#9B8AFB]/8 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#0D1328] via-[#9B8AFB]/6 to-transparent rounded-full blur-3xl opacity-40" />

      {/* Star Particles */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white transition-opacity"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: star.size > 2 ? '0 0 6px 1px rgba(244, 215, 125, 0.6)' : 'none',
              animation: `pulse-glow ${star.duration}s ease-in-out infinite ${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Constellation Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="celestial-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="1.5" fill="#F4D77D" />
            <line x1="60" y1="60" x2="120" y2="60" stroke="#F4D77D" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="60" y1="60" x2="60" y2="120" stroke="#F4D77D" strokeWidth="0.5" strokeDasharray="4 8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#celestial-grid)" />
      </svg>
    </div>
  );
};
