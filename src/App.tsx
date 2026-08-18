import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CelestialBackground } from './components/CelestialBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { BirthChartPage } from './pages/BirthChartPage';
import { HoroscopePage } from './pages/HoroscopePage';
import { CompatibilityPage } from './pages/CompatibilityPage';
import { AstrologersPage } from './pages/AstrologersPage';

import { BirthChartFormData } from './types';

function AppContent() {
  const navigate = useNavigate();

  // Shared state for Birth Chart details across pages
  const [formData, setFormData] = useState<BirthChartFormData>({
    fullName: 'Elena Rostova',
    dateOfBirth: '1996-08-15',
    timeOfBirth: '07:30',
    placeOfBirth: 'Mumbai, Maharashtra, India',
    chartType: 'Vedic (Kundli)',
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenReadingModal = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/birth-chart');
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white selection:bg-[#D4AF37]/30 selection:text-[#F4D77D] relative font-inter flex flex-col justify-between">
      {/* Subtle Starfield & Cosmic Background Atmosphere */}
      <CelestialBackground />

      {/* Sticky Header Navbar */}
      <Navbar
        onOpenReadingModal={handleOpenReadingModal}
        onOpenConsultationModal={() => setIsConsultationOpen(true)}
      />

      {/* Main Multi-Page Routed View */}
      <main className="relative z-10 flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                formData={formData}
                setFormData={setFormData}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            }
          />
          <Route
            path="/birth-chart"
            element={
              <BirthChartPage
                formData={formData}
                setFormData={setFormData}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            }
          />
          <Route
            path="/horoscope"
            element={
              <HoroscopePage
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            }
          />
          <Route
            path="/compatibility"
            element={<CompatibilityPage />}
          />
          <Route
            path="/astrologers"
            element={<AstrologersPage />}
          />
          {/* Fallback */}
          <Route
            path="*"
            element={
              <HomePage
                formData={formData}
                setFormData={setFormData}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer
        onOpenReadingModal={handleOpenReadingModal}
        onOpenConsultationModal={() => setIsConsultationOpen(true)}
      />

      {/* Global Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultType="Birth Chart Reading"
        astrologerName="Dr. Aarav Sharma"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
