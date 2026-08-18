import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BirthChartForm } from '../components/BirthChartForm';
import { ServicesSection } from '../components/ServicesSection';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { ZodiacGrid } from '../components/ZodiacGrid';
import { SignDetailModal } from '../components/SignDetailModal';
import { HoroscopeSection } from '../components/HoroscopeSection';
import { FullHoroscopeModal } from '../components/FullHoroscopeModal';
import { HowItWorks } from '../components/HowItWorks';
import { AstrologerSection } from '../components/AstrologerSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { BirthChartFormData, BirthChartResult, ZodiacSign, AstrologyService } from '../types';

interface HomePageProps {
  formData: BirthChartFormData;
  setFormData: (data: BirthChartFormData) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  formData,
  setFormData,
  onOpenConsultation,
}) => {
  const navigate = useNavigate();

  // Modals inside home
  const [selectedService, setSelectedService] = useState<AstrologyService | null>(null);
  const [selectedZodiacSign, setSelectedZodiacSign] = useState<ZodiacSign | null>(null);
  const [fullHoroscopeSign, setFullHoroscopeSign] = useState<ZodiacSign | null>(null);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGenerateBirthChart = (result: BirthChartResult) => {
    // Save details to state & navigate to /birth-chart
    setFormData({
      fullName: result.name,
      dateOfBirth: result.date,
      timeOfBirth: result.time,
      placeOfBirth: result.place,
      chartType: 'Vedic (Kundli)',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/birth-chart');
  };

  return (
    <div id="home-page" className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <Hero
        onGetReadingClick={() => scrollTo('#birth-chart')}
        onExploreClick={() => scrollTo('#services')}
      />

      {/* Interactive Birth Chart Details Card Form */}
      <BirthChartForm
        onGenerateChart={handleGenerateBirthChart}
      />

      {/* 6 Astrology Guidance Services */}
      <ServicesSection
        onSelectService={(service) => setSelectedService(service)}
        onOpenBirthChart={() => scrollTo('#birth-chart')}
        onOpenHoroscope={() => navigate('/horoscope')}
        onOpenCompatibility={() => navigate('/compatibility')}
      />

      {/* 12-Card Zodiac Grid */}
      <ZodiacGrid
        onSelectSign={(sign) => setSelectedZodiacSign(sign)}
      />

      {/* Daily Cosmic Forecast Section */}
      <HoroscopeSection
        onOpenFullHoroscope={(sign) => setFullHoroscopeSign(sign)}
      />

      {/* How It Works (3 Steps) */}
      <HowItWorks
        onStartJourney={() => scrollTo('#birth-chart')}
      />

      {/* Featured Astrologer (Dr. Aarav Sharma) */}
      <AstrologerSection
        onBookConsultation={onOpenConsultation}
      />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Dramatic Premium CTA Banner */}
      <CTASection
        onGetReadingClick={() => scrollTo('#birth-chart')}
      />

      {/* Accordion FAQ */}
      <FAQSection />

      {/* Modals on Home */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={onOpenConsultation}
      />

      <SignDetailModal
        sign={selectedZodiacSign}
        onClose={() => setSelectedZodiacSign(null)}
        onCheckCompatibility={(signName) => {
          setSelectedZodiacSign(null);
          navigate('/compatibility');
        }}
      />

      <FullHoroscopeModal
        sign={fullHoroscopeSign}
        onClose={() => setFullHoroscopeSign(null)}
        onBookConsultation={onOpenConsultation}
      />
    </div>
  );
};
