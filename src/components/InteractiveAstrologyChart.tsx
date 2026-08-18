import React, { useState } from 'react';
import { Sparkles, Compass, Eye, Shield, Layers, CircleDot, Info, Orbit } from 'lucide-react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { DEFAULT_PLANETARY_INFLUENCES } from '../data/astrologyContent';

interface InteractiveAstrologyChartProps {
  sunSign?: string;
  moonSign?: string;
  risingSign?: string;
}

export const InteractiveAstrologyChart: React.FC<InteractiveAstrologyChartProps> = ({
  sunSign = 'Leo',
  moonSign = 'Pisces',
  risingSign = 'Libra',
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'planets' | 'houses' | 'aspects'>('overview');
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<number | null>(5);

  // 12 Zodiac Houses Data
  const houses = [
    { number: 1, name: '1st House (Lagna / Ascendant)', sign: 'Libra', theme: 'Self, Physical Vitality & Outer Persona', lord: 'Venus', highlight: 'Libra rising brings diplomatic charm, symmetry, and aesthetic poise.' },
    { number: 2, name: '2nd House (Dhana Bhava)', sign: 'Scorpio', theme: 'Wealth, Speech & Family Values', lord: 'Mars & Ketu', highlight: 'Rahu placed here inspires strategic wealth diversification.' },
    { number: 3, name: '3rd House (Sahaja Bhava)', sign: 'Sagittarius', theme: 'Courage, Siblings & Creative Skills', lord: 'Jupiter', highlight: 'Expansive courage and inspiring written/verbal communication.' },
    { number: 4, name: '4th House (Sukha Bhava)', sign: 'Capricorn', theme: 'Home, Mother & Emotional Peace', lord: 'Saturn', highlight: 'Venus seated here bestows sanctuary, aesthetic interior taste, and inner contentment.' },
    { number: 5, name: '5th House (Putra / Purva Punya)', sign: 'Aquarius', theme: 'Creativity, Intellect & Romance', lord: 'Saturn & Rahu', highlight: 'Sun in 5th House ignites majestic creative brilliance and magnetic leadership aura.' },
    { number: 6, name: '6th House (Shatru / Roga Bhava)', sign: 'Pisces', theme: 'Daily Work, Problem-Solving & Health', lord: 'Jupiter', highlight: 'Mercury exalted here brings razor-sharp analytical troubleshooting.' },
    { number: 7, name: '7th House (Kalatra Bhava)', sign: 'Aries', theme: 'Partnerships, Marriage & Alliances', lord: 'Mars', highlight: 'Dynamic, passionate partner dynamics that challenge growth.' },
    { number: 8, name: '8th House (Randhra / Ayu Bhava)', sign: 'Taurus', theme: 'Transformation, Esoteric Wisdom & Longevity', lord: 'Venus', highlight: 'Mars & Ketu here grant intense psychological acumen and occult discernment.' },
    { number: 9, name: '9th House (Bhagya / Dharma Bhava)', sign: 'Gemini', theme: 'Fortune, Higher Dharma & Mentorship', lord: 'Mercury', highlight: 'Jupiter placed here grants supreme philosophical luck and high ethical honor.' },
    { number: 10, name: '10th House (Karma Bhava)', sign: 'Cancer', theme: 'Career, Public Reputation & Legacy', lord: 'Moon', highlight: 'Saturn in 10th builds an enduring executive career legacy through patient mastery.' },
    { number: 11, name: '11th House (Labha Bhava)', sign: 'Leo', theme: 'Gains, Global Network & Aspirations', lord: 'Sun', highlight: 'High fulfillment of long-cherished ambitions through visionary community networks.' },
    { number: 12, name: '12th House (Vyaya / Moksha Bhava)', sign: 'Virgo', theme: 'Spiritual Liberation, Solitude & Intuition', lord: 'Mercury', highlight: 'Moon seated here unlocks profound empathic dream intuition and spiritual transcendence.' },
  ];

  // Aspects Data
  const aspects = [
    { title: 'Sun Trine Jupiter (9th House)', type: 'Trine (120°)', nature: 'Harmonious & Auspicious', desc: 'Bestows natural optimism, royal confidence, ethical magnetism, and supreme fortune in career ventures.' },
    { title: 'Moon Sextile Venus (4th House)', type: 'Sextile (60°)', nature: 'Gentle & Loving', desc: 'Promotes heartwarming artistic sensitivity, emotional resilience, and deep domestic tranquility.' },
    { title: 'Mercury Sextile Mars (8th House)', type: 'Sextile (60°)', nature: 'Dynamic Intellect', desc: 'Sharpens decisive problem-solving, strategic negotiation, and the courage to execute complex ideas.' },
    { title: 'Saturn Conjunction Midheaven (10th)', type: 'Conjunction (0°)', nature: 'Structural Mastery', desc: 'Endows enduring professional staying power, executive respect, and steady compounding prestige.' },
  ];

  return (
    <div className="rounded-3xl bg-[#0D1328]/90 border border-[#D4AF37]/30 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 via-[#9B8AFB]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#F4D77D] uppercase tracking-widest">
            <Orbit className="w-3.5 h-3.5" />
            <span>Ephemeris Sidereal Projection</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-playfair mt-1">
            Interactive Natal Kundli Wheel
          </h3>
          <p className="text-xs sm:text-sm text-[#A8B0C5]">
            Hover over planets and click house cusps to analyze planetary degrees & cosmic geometry.
          </p>
        </div>

        {/* Tab Controls: Overview | Planets | Houses | Aspects */}
        <div className="inline-flex p-1 rounded-2xl bg-[#070B1A] border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          {(['overview', 'planets', 'houses', 'aspects'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              id={`chart-tab-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#F4D77D] via-[#D4AF37] to-[#C99B22] text-[#070B1A] shadow-md font-bold'
                  : 'text-[#A8B0C5] hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Central Interactive Chart Stage */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left / Center: SVG Chart Wheel */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-square flex items-center justify-center">
            
            {/* Ambient Animated Rotating Constellation Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/20 pointer-events-none animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />

            {/* Custom SVG Birth Chart Wheel */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full filter drop-shadow-[0_0_25px_rgba(212,175,55,0.18)] select-none"
              aria-label="Vedic and Western Astrological Natal Wheel"
            >
              <defs>
                <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4D77D" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8C6D1F" />
                </linearGradient>

                <linearGradient id="aspectGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9B8AFB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
                </linearGradient>

                <radialGradient id="centerDial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1E2950" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#0D1328" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#070B1A" stopOpacity="1" />
                </radialGradient>
              </defs>

              {/* Background circular plate */}
              <circle cx="250" cy="250" r="240" fill="url(#centerDial)" stroke="url(#goldRing)" strokeWidth="2.5" />
              <circle cx="250" cy="250" r="195" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />
              <circle cx="250" cy="250" r="145" fill="none" stroke="#9B8AFB" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              <circle cx="250" cy="250" r="75" fill="#070B1A" stroke="url(#goldRing)" strokeWidth="1.5" />

              {/* 12 House Radial Spokes */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 250 + 75 * Math.cos(angle);
                const y1 = 250 + 75 * Math.sin(angle);
                const x2 = 250 + 240 * Math.cos(angle);
                const y2 = 250 + 240 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#D4AF37"
                    strokeWidth={i % 3 === 0 ? '1.5' : '0.75'}
                    strokeOpacity={i % 3 === 0 ? '0.6' : '0.25'}
                  />
                );
              })}

              {/* 12 Zodiac Symbols on Outer Rim */}
              {ZODIAC_SIGNS.map((z, idx) => {
                const angle = ((idx * 30 + 15) * Math.PI) / 180;
                const r = 217;
                const x = 250 + r * Math.cos(angle);
                const y = 250 + r * Math.sin(angle);
                return (
                  <g key={z.id} className="cursor-pointer">
                    <text
                      x={x}
                      y={y + 6}
                      textAnchor="middle"
                      fill={z.name === sunSign || z.name === moonSign || z.name === risingSign ? '#F4D77D' : '#A8B0C5'}
                      fontSize={z.name === sunSign || z.name === moonSign ? '18' : '15'}
                      fontWeight="bold"
                      className="transition-colors hover:fill-white"
                    >
                      {z.symbol}
                    </text>
                  </g>
                );
              })}

              {/* House Number Labels in Middle Rim */}
              {houses.map((h, idx) => {
                const angle = ((idx * 30 + 15) * Math.PI) / 180;
                const r = 168;
                const x = 250 + r * Math.cos(angle);
                const y = 250 + r * Math.sin(angle);
                const isSelected = selectedHouse === h.number;
                return (
                  <g
                    key={h.number}
                    onClick={() => setSelectedHouse(h.number)}
                    className="cursor-pointer group"
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r="12"
                      fill={isSelected ? '#D4AF37' : '#070B1A'}
                      stroke={isSelected ? '#F4D77D' : '#D4AF37'}
                      strokeWidth="1"
                      strokeOpacity="0.6"
                      className="group-hover:fill-[#D4AF37]/40 transition-colors"
                    />
                    <text
                      x={x}
                      y={y + 4}
                      textAnchor="middle"
                      fill={isSelected ? '#070B1A' : '#F4D77D'}
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {h.number}
                    </text>
                  </g>
                );
              })}

              {/* Geometrical Aspect Trines & Sextile Lines */}
              <polygon
                points="250,140 345,305 155,305"
                fill="none"
                stroke="url(#aspectGlow)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.8"
              />
              <polygon
                points="250,360 345,195 155,195"
                fill="none"
                stroke="#9B8AFB"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                opacity="0.6"
              />

              {/* Planet Nodes & Glyphs */}
              {DEFAULT_PLANETARY_INFLUENCES.slice(0, 7).map((p, idx) => {
                // Approximate radial placement based on house
                const angle = ((p.house * 30 - 15) * Math.PI) / 180;
                const r = 110;
                const px = 250 + r * Math.cos(angle);
                const py = 250 + r * Math.sin(angle);
                const isHovered = hoveredPlanet === p.planet;

                return (
                  <g
                    key={p.planet}
                    onMouseEnter={() => setHoveredPlanet(p.planet)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulsing halo on hover */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isHovered ? '18' : '14'}
                      fill="#070B1A"
                      stroke={isHovered ? '#F4D77D' : '#D4AF37'}
                      strokeWidth={isHovered ? '2' : '1'}
                      className="transition-all"
                    />
                    <text
                      x={px}
                      y={py + 5}
                      textAnchor="middle"
                      fill={p.planet === 'Sun' ? '#F4D77D' : p.planet === 'Moon' ? '#E0E7FF' : '#D4AF37'}
                      fontSize="13"
                      fontWeight="bold"
                    >
                      {p.glyph}
                    </text>
                  </g>
                );
              })}

              {/* Center Core Emblem */}
              <circle cx="250" cy="250" r="45" fill="#070B1A" stroke="url(#goldRing)" strokeWidth="1.5" />
              <text x="250" y="244" textAnchor="middle" fill="#F4D77D" fontSize="13" fontWeight="bold" fontFamily="Cinzel">
                VEDA
              </text>
              <text x="250" y="260" textAnchor="middle" fill="#A8B0C5" fontSize="8" letterSpacing="2">
                KUNDLI
              </text>
            </svg>

            {/* Subtle Chart Center Ring Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-20 h-20 rounded-full bg-[#D4AF37]/15 blur-lg" />
          </div>

          <div className="flex items-center space-x-4 mt-3 text-[11px] text-[#A8B0C5]">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#F4D77D]" />
              <span>Solar/Lunar Nodes</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#9B8AFB]" />
              <span>Aspect Harmonic Lines</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>12 House Cusps</span>
            </span>
          </div>
        </div>

        {/* Right: Dynamic Context Panel based on Active Tab */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#F4D77D] font-semibold uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Celestial Trinity Matrix</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#F4D77D] border border-[#D4AF37]/30">
                    Sidereal Lahiri
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-3 rounded-xl bg-[#0D1328] border border-amber-500/20">
                    <span className="text-[10px] text-[#A8B0C5] uppercase font-semibold">Sun Sign</span>
                    <p className="text-base font-bold text-[#F4D77D]">{sunSign}</p>
                    <span className="text-[10px] text-white/70">5th House</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D1328] border border-sky-500/20">
                    <span className="text-[10px] text-[#A8B0C5] uppercase font-semibold">Moon Sign</span>
                    <p className="text-base font-bold text-sky-300">{moonSign}</p>
                    <span className="text-[10px] text-white/70">12th House</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D1328] border border-purple-500/20">
                    <span className="text-[10px] text-[#A8B0C5] uppercase font-semibold">Rising Sign</span>
                    <p className="text-base font-bold text-purple-300">{risingSign}</p>
                    <span className="text-[10px] text-white/70">1st House</span>
                  </div>
                </div>

                <p className="text-xs text-[#A8B0C5] leading-relaxed pt-1">
                  Your chart exhibits an extraordinary equilibrium between Solar self-expressive charisma (Leo), Lunar spiritual empathy (Pisces), and an aesthetic, diplomatic Rising Ascendant (Libra).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070B1A]/80 border border-white/10 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#9B8AFB]" />
                  <span>Primary Yogic Conjunctions</span>
                </h4>
                <p className="text-xs text-[#A8B0C5] leading-relaxed">
                  ✦ <strong>Budhaditya & Dhana Yoga:</strong> Powerful 5th and 9th trinal lords create natural wealth generation, oratorical resonance, and executive advisory aptitude.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PLANETS */}
          {activeTab === 'planets' && (
            <div className="space-y-3 animate-fadeIn max-h-[380px] overflow-y-auto pr-1">
              <div className="flex items-center justify-between text-xs text-[#A8B0C5] px-1">
                <span>Select planet to view planetary dignity</span>
                <span className="text-[#F4D77D]">7 Classical + 2 Nodes</span>
              </div>

              {DEFAULT_PLANETARY_INFLUENCES.map((p) => {
                const isHovered = hoveredPlanet === p.planet;
                return (
                  <div
                    key={p.planet}
                    onMouseEnter={() => setHoveredPlanet(p.planet)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isHovered
                        ? 'bg-[#121A38] border-[#D4AF37] shadow-lg shadow-black/40'
                        : 'bg-[#070B1A] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-lg bg-[#0D1328] border border-[#D4AF37]/40 flex items-center justify-center text-[#F4D77D] text-xs font-bold font-serif">
                          {p.glyph}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-white">{p.planet}</span>
                          {p.planetSanskrit && (
                            <span className="text-[10px] text-[#A8B0C5] ml-1.5 font-light">({p.planetSanskrit})</span>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-semibold text-[#F4D77D]">{p.sign}</span>
                        <span className="text-[10px] text-[#A8B0C5] ml-1.5">• House {p.house}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#A8B0C5] leading-relaxed">
                      {p.meaning}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: HOUSES */}
          {activeTab === 'houses' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between text-xs text-[#A8B0C5] px-1">
                <span>Select a house (1 to 12)</span>
                <span className="text-[#F4D77D]">12 Bhavas (Life Arenas)</span>
              </div>

              {/* Quick House Selector Grid */}
              <div className="grid grid-cols-6 gap-1.5">
                {houses.map((h) => (
                  <button
                    key={h.number}
                    type="button"
                    onClick={() => setSelectedHouse(h.number)}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      selectedHouse === h.number
                        ? 'bg-[#D4AF37] text-[#070B1A] border-[#D4AF37]'
                        : 'bg-[#070B1A] text-[#A8B0C5] border-white/10 hover:text-white'
                    }`}
                  >
                    H{h.number}
                  </button>
                ))}
              </div>

              {/* Selected House Deep Dive */}
              {(() => {
                const current = houses.find((h) => h.number === selectedHouse) || houses[4];
                return (
                  <div className="p-4 rounded-2xl bg-[#070B1A] border border-[#D4AF37]/30 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] text-[#F4D77D] uppercase font-semibold tracking-wider">
                          House Analysis
                        </span>
                        <h4 className="text-sm font-bold text-white font-playfair">
                          {current.name}
                        </h4>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#121A38] text-white border border-white/15">
                        Zodiac: {current.sign}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0D1328] border border-white/5 space-y-1 text-xs">
                      <div className="text-[#A8B0C5]">
                        <span className="font-semibold text-white">Dominant Arena:</span> {current.theme}
                      </div>
                      <div className="text-[#A8B0C5]">
                        <span className="font-semibold text-white">Ruling Lord:</span> {current.lord}
                      </div>
                    </div>

                    <p className="text-xs text-[#A8B0C5] leading-relaxed">
                      {current.highlight}
                    </p>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 4: ASPECTS */}
          {activeTab === 'aspects' && (
            <div className="space-y-3 animate-fadeIn max-h-[380px] overflow-y-auto pr-1">
              <div className="flex items-center justify-between text-xs text-[#A8B0C5] px-1">
                <span>Key Angular Alignments (Drishti)</span>
                <span className="text-[#9B8AFB]">Trines, Sextiles & Squares</span>
              </div>

              {aspects.map((asp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#070B1A] border border-white/10 space-y-1.5 hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-white font-serif">{asp.title}</h5>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#9B8AFB]/15 text-[#9B8AFB] border border-[#9B8AFB]/30 font-medium">
                      {asp.type}
                    </span>
                  </div>
                  <div className="text-[10px] text-[#F4D77D] font-semibold">
                    ✦ {asp.nature}
                  </div>
                  <p className="text-[11px] text-[#A8B0C5] leading-relaxed">
                    {asp.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
