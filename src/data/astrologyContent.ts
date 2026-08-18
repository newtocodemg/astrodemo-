import { Testimonial, FAQItem, BirthChartFormData, BirthChartResult, AstrologerProfile, PlanetaryInfluence } from '../types';

export const FEATURED_ASTROLOGER: AstrologerProfile = {
  id: 'dr-aarav-sharma',
  name: 'Dr. Aarav Sharma',
  title: 'Vedic Astrology Specialist & Jyotish Acharya',
  experience: '15+ Years Experience',
  rating: 4.96,
  reviewsCount: 3840,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  bio: 'Honored with prestigious astrological gold medals from the Indian Institute of Astrological Sciences. Dr. Aarav combines ancient classical Parashari principles with modern psychological perspectives to bring grounded, pragmatic clarity to thousands of seekers worldwide.',
  specializations: [
    'Vedic Astrology (Jyotish)',
    'Birth Chart Analysis',
    'Relationship Compatibility',
    'Career & Wealth Guidance',
    'Planetary Transit Timing',
    'Gemstone & Mantra Remedies',
  ],
  credentials: [
    'Ph.D. in Vedic Studies & Astro-Mathematics',
    '15,000+ Consultations Delivered Globally',
    'Featured on BBC, The Times & MindBodyGreen',
    'Founding Mentor at AstroVeda Vedic Academy',
  ],
  languages: ['English', 'Hindi', 'Sanskrit'],
  availableSlots: [
    'Tomorrow, 10:00 AM - 11:00 AM EST',
    'Tomorrow, 2:30 PM - 3:30 PM EST',
    'Thursday, 11:30 AM - 12:30 PM EST',
    'Friday, 4:00 PM - 5:00 PM EST',
  ],
  pricePerSession: '$120 / 60-min session',
};

export const ALL_ASTROLOGERS: AstrologerProfile[] = [
  FEATURED_ASTROLOGER,
  {
    id: 'acharya-meera-joshi',
    name: 'Acharya Meera Joshi',
    title: 'Nakshatra Synastry & Vedic Relationship Scholar',
    experience: '12+ Years Experience',
    rating: 4.95,
    reviewsCount: 2910,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Specializing in deep 36-point Ashtakoota Milan, Navamsha D-9 compatibility, and karmic marriage dynamics. Acharya Meera brings compassionate emotional depth and practical marital remedies.',
    specializations: [
      'Relationship Compatibility',
      'Navamsha (D9) Chart',
      'Karmic Bond Resolution',
      'Family Harmony',
    ],
    credentials: [
      'M.A. in Sanskrit & Classical Jyotisha',
      'Over 9,500 couple synastry sessions conducted',
      'Keynote speaker at Global Vedic Summit',
    ],
    languages: ['English', 'Hindi', 'Gujarati'],
    availableSlots: [
      'Tomorrow, 1:00 PM - 2:00 PM EST',
      'Wednesday, 11:00 AM - 12:00 PM EST',
      'Friday, 3:00 PM - 4:00 PM EST',
    ],
    pricePerSession: '$110 / 60-min session',
  },
  {
    id: 'pandit-vikramaditya-shastri',
    name: 'Pandit Vikramaditya Shastri',
    title: 'Career, Dhana Yoga & Prashna Master',
    experience: '20+ Years Experience',
    rating: 4.98,
    reviewsCount: 4620,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'A 4th-generation astrologer renowned for acute business timing, executive transitions, and Prashna (horary) resolution. Known for pinpoint timing of promotions, ventures, and financial expansions.',
    specializations: [
      'Career & Executive Timing',
      'Dhana & Raj Yogas',
      'Prashna (Horary) Astrology',
      'Business Venture Muhurta',
    ],
    credentials: [
      'Jyotish Ratna & Vachaspati Fellow',
      'Senior advisor to tech founders and executives',
      '20+ years of unblemished Vedic practice',
    ],
    languages: ['English', 'Hindi', 'Marathi'],
    availableSlots: [
      'Today, 4:30 PM - 5:30 PM EST',
      'Thursday, 9:00 AM - 10:00 AM EST',
      'Saturday, 1:00 PM - 2:00 PM EST',
    ],
    pricePerSession: '$140 / 60-min session',
  },
  {
    id: 'dr-sunita-rao',
    name: 'Dr. Sunita Rao',
    title: 'Vedic Gemologist & Astro-Vastu Practitioner',
    experience: '10+ Years Experience',
    rating: 4.92,
    reviewsCount: 1840,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Dr. Sunita blends planetary gemstone resonance with energetic Vastu principles. She specializes in counteracting challenging Saturn/Rahu transits with certified therapeutic stones and space harmonization.',
    specializations: [
      'Gemstone Recommendations',
      'Saturn Sade Sati Remediation',
      'Astro-Vastu & Home Energy',
      'Holistic Wellness Jyotish',
    ],
    credentials: [
      'Certified Gemological Institute of India Fellow',
      'Doctor of Philosophy in Astro-Vastu Science',
      'Author of "Crystals of the Constellations"',
    ],
    languages: ['English', 'Hindi', 'Kannada'],
    availableSlots: [
      'Wednesday, 3:30 PM - 4:30 PM EST',
      'Friday, 10:00 AM - 11:00 AM EST',
      'Saturday, 11:00 AM - 12:00 PM EST',
    ],
    pricePerSession: '$95 / 60-min session',
  },
];

// Default planetary influences as requested in Prompt Section 4
export const DEFAULT_PLANETARY_INFLUENCES: PlanetaryInfluence[] = [
  {
    planet: 'Sun',
    planetSanskrit: 'Surya',
    sign: 'Leo',
    house: 5,
    degree: "24° 12'",
    glyph: '☉',
    meaning: 'Natural confidence, leadership, creative self-expression, and strong vitality.',
  },
  {
    planet: 'Moon',
    planetSanskrit: 'Chandra',
    sign: 'Pisces',
    house: 12,
    degree: "11° 45'",
    glyph: '☽',
    meaning: 'Profound emotional intuition, deep spiritual empathy, and active imaginative inner world.',
  },
  {
    planet: 'Mercury',
    planetSanskrit: 'Budha',
    sign: 'Virgo',
    house: 6,
    degree: "18° 09'",
    glyph: '☿',
    meaning: 'Analytical intellect, acute problem-solving capability, and precise communicative clarity.',
  },
  {
    planet: 'Venus',
    planetSanskrit: 'Shukra',
    sign: 'Cancer',
    house: 4,
    degree: "15° 50'",
    glyph: '♀',
    meaning: 'Emotional devotion, love for peaceful sanctuary, and deep nurturing affection in relationships.',
  },
  {
    planet: 'Mars',
    planetSanskrit: 'Mangala',
    sign: 'Scorpio',
    house: 8,
    degree: "04° 18'",
    glyph: '♂',
    meaning: 'Unwavering determination, intense psychological focus, and powerful transformative drive.',
  },
  {
    planet: 'Jupiter',
    planetSanskrit: 'Guru',
    sign: 'Sagittarius',
    house: 9,
    degree: "29° 33'",
    glyph: '♃',
    meaning: 'Expansive philosophical wisdom, spiritual optimism, and fortune in higher knowledge exploration.',
  },
  {
    planet: 'Saturn',
    planetSanskrit: 'Shani',
    sign: 'Capricorn',
    house: 10,
    degree: "08° 22'",
    glyph: '♄',
    meaning: 'Disciplined ambition, enduring career legacy, executive patience, and structural mastery.',
    isRetrograde: true,
  },
  {
    planet: 'Rahu (North Node)',
    planetSanskrit: 'Rahu',
    sign: 'Taurus',
    house: 2,
    degree: "14° 02'",
    glyph: '☊',
    meaning: 'Karmic hunger for material stability, innovative wealth accumulation, and expressive speech.',
    isRetrograde: true,
  },
  {
    planet: 'Ketu (South Node)',
    planetSanskrit: 'Ketu',
    sign: 'Scorpio',
    house: 8,
    degree: "14° 02'",
    glyph: '☋',
    meaning: 'Innate mastery of esoteric truths, subconscious detachment, and intuitive occult awareness.',
    isRetrograde: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya M.',
    location: 'San Francisco, CA',
    rating: 5,
    quote:
      'The birth chart reading gave me a completely different perspective on my career decisions. The experience felt personal, deeply grounded, and incredibly insightful. I was at a crossroads between two executive roles, and the planetary timing was spot on.',
    serviceUsed: 'Vedic Birth Chart & Career Dossier',
    date: 'February 2026',
  },
  {
    id: '2',
    name: 'Julian Vance',
    location: 'London, UK',
    rating: 5,
    quote:
      'AstroVeda has completely elevated my perception of astrology. No fluff or vague horoscopes — Dr. Aarav dissected our synastry with surgical precision. It unlocked profound emotional breakthroughs for our marriage.',
    serviceUsed: 'Marriage Compatibility & Synastry',
    date: 'January 2026',
  },
  {
    id: '3',
    name: 'Ananya Deshmukh',
    location: 'Mumbai, India',
    rating: 5,
    quote:
      'The daily forecasts and planetary dasha analysis are my morning ritual. The interface is stunning, serene, and deeply intelligent. It feels like having an ancient cosmic master right in your pocket.',
    serviceUsed: 'Planetary Guidance & Daily Transits',
    date: 'February 2026',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What information do I need for a birth chart?',
    answer:
      'To calculate an exact Vedic or Western birth chart (Kundli), you need three core inputs: your exact date of birth, exact time of birth (to determine your Rising/Ascendant sign which changes every 2 hours), and your city/place of birth (for geographic coordinates and local sidereal time).',
  },
  {
    id: 'faq-2',
    question: 'How accurate is astrology?',
    answer:
      'Astrology is an ancient mathematical and symbolic science reflecting the cosmic mirror principle: "As above, so below." When computed with exact astronomical ephemeris algorithms and interpreted by skilled Vedic practitioners, it provides profound probabilistic insights into behavioral tendencies, psychological archetypes, and auspicious timing cycles.',
  },
  {
    id: 'faq-3',
    question: 'Can I check relationship compatibility?',
    answer:
      'Yes! Our platform provides both Western synastry and classical 36-point Vedic Ashtakoota Milan. This examines emotional harmony (Moon), attraction and values (Venus/Mars), communication flow (Mercury), and long-term soul alignment across 8 vital compatibility dimensions.',
  },
  {
    id: 'faq-4',
    question: 'Can I book a consultation?',
    answer:
      'Absolutely. You can schedule 1-on-1 private video consultations with our verified Vedic masters, including Dr. Aarav Sharma. Each consultation includes a recorded session, a custom PDF report, and remedial guidance tailored to your specific life questions.',
  },
  {
    id: 'faq-5',
    question: 'What is Vedic astrology?',
    answer:
      'Vedic astrology, or Jyotish ("The Science of Light"), is a 5,000-year-old tradition originating in ancient India. Unlike Western astrology which uses the tropical zodiac, Vedic astrology uses the sidereal zodiac aligned with the real fixed constellations, emphasizing the Moon sign, 27 Nakshatras (lunar mansions), and predictive Dasha time cycles.',
  },
  {
    id: 'faq-6',
    question: 'Can I get a daily horoscope?',
    answer:
      'Yes! AstroVeda provides daily updated cosmic forecasts calculated against real-time planetary transits for all 12 zodiac signs. Each day features love, career, and financial energy scores along with auspicious hours and focus areas.',
  },
];

// Helper to generate a realistic, rich demo chart from user inputs
export function generateDemoBirthChart(data: BirthChartFormData): BirthChartResult {
  const name = data.fullName.trim() || 'Priya Sharma';
  const dob = data.dateOfBirth || '1996-08-15';
  const tob = data.timeOfBirth || '07:30 AM';
  const place = data.placeOfBirth || 'New Delhi, India';

  return {
    name,
    date: dob,
    time: tob,
    place,
    sunSign: 'Leo',
    moonSign: 'Pisces',
    risingSign: 'Libra',
    nakshatra: 'Magha',
    summary: 'You have a strong combination of creativity, intuition and ambition. Your chart suggests that you thrive when you have the freedom to build, express and lead.',
    strengths: [
      'Natural creative eloquence with an eye for structural harmony',
      'Deep emotional intuition and perceptive empathic radar',
      'Charismatic leadership that inspires trust and collaboration',
      'Steadfast dedication to purposeful, long-term mastery',
    ],
    elements: {
      fire: 38,
      earth: 22,
      air: 24,
      water: 16,
    },
    planetaryPositions: [
      { planet: 'Sun', sign: 'Leo', house: 5, degree: "24° 12'", isRetrograde: false },
      { planet: 'Moon', sign: 'Pisces', house: 12, degree: "11° 45'", isRetrograde: false },
      { planet: 'Mercury', sign: 'Virgo', house: 6, degree: "18° 09'", isRetrograde: false },
      { planet: 'Venus', sign: 'Cancer', house: 4, degree: "15° 50'", isRetrograde: false },
      { planet: 'Mars', sign: 'Scorpio', house: 8, degree: "04° 18'", isRetrograde: false },
      { planet: 'Jupiter', sign: 'Sagittarius', house: 9, degree: "29° 33'", isRetrograde: false },
      { planet: 'Saturn', sign: 'Capricorn', house: 10, degree: "08° 22'", isRetrograde: true },
      { planet: 'Rahu', sign: 'Taurus', house: 2, degree: "14° 02'", isRetrograde: true },
      { planet: 'Ketu', sign: 'Scorpio', house: 8, degree: "14° 02'", isRetrograde: true },
    ],
    lifeAspects: {
      personality: 'Your chart suggests a naturally expressive and confident personality with an innate aesthetic grace.',
      career: 'You are drawn toward meaningful work where you can influence, inspire and build enduring value.',
      love: 'Your Moon in Pisces seeks soulful emotional intimacy and deep mutual understanding with a loyal partner.',
      destiny: 'Your soul direction revolves around synthesising artistic innovation, heartfelt mentorship, and ethical leadership.',
    },
  };
}

