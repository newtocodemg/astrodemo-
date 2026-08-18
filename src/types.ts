export interface ZodiacSign {
  id: string;
  name: string;
  sanskritName: string;
  symbol: string;
  dates: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  quality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulingPlanet: string;
  keywords: string[];
  shortDesc: string;
  fullDesc: string;
  strengths: string[];
  luckyDay: string;
  luckyColor: string;
  luckyNumber: string;
  luckyGemstone: string;
  bestMatches: string[];
  dailyForecast: {
    overview: string;
    loveRating: number;
    careerRating: number;
    financeRating: number;
    luckyTime: string;
    mood: string;
    compatSign: string;
    loveDesc?: string;
    careerDesc?: string;
    financeDesc?: string;
    energyScore?: number;
  };
}

export interface AstrologyService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  deliveryTime: string;
}

export interface BirthChartFormData {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  chartType: 'Vedic (Kundli)' | 'Western (Tropical)';
}

export interface PlanetaryInfluence {
  planet: string;
  planetSanskrit?: string;
  sign: string;
  house: number;
  degree?: string;
  meaning: string;
  isRetrograde?: boolean;
  glyph: string;
}

export interface PlanetaryPosition {
  planet: string;
  sign: string;
  house: number;
  degree: string;
  isRetrograde?: boolean;
}

export interface BirthChartResult {
  name: string;
  date: string;
  time: string;
  place: string;
  sunSign: string;
  moonSign: string;
  risingSign: string;
  nakshatra: string;
  summary: string;
  strengths: string[];
  elements: {
    fire: number;
    earth: number;
    air: number;
    water: number;
  };
  planetaryPositions: PlanetaryPosition[];
  lifeAspects: {
    personality: string;
    career: string;
    love: string;
    destiny: string;
  };
}

export interface AstrologerProfile {
  id: string;
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  avatarUrl: string;
  bio: string;
  specializations: string[];
  credentials: string[];
  languages: string[];
  availableSlots: string[];
  pricePerSession?: string;
}

export interface CompatibilityResult {
  person1: {
    name: string;
    dob: string;
    tob: string;
    sign: string;
  };
  person2: {
    name: string;
    dob: string;
    tob: string;
    sign: string;
  };
  overallScore: number;
  emotionalConnection: number;
  communication: number;
  chemistry: number;
  longTermPotential: number;
  summary: string;
  vedicKootas: {
    name: string;
    score: number;
    maxScore: number;
    desc: string;
  }[];
  strengths: string[];
  growthAreas: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  serviceUsed: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

