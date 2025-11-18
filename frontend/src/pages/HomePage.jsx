import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import WhyAsianWorkers from '../components/WhyAsianWorkers';
import ProcessSection from '../components/ProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientsPartnersSection from '../components/ClientsPartnersSection';
import FAQSection from '../components/FAQSection';
import ContactForms from '../components/ContactForms';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyAsianWorkers />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ClientsPartnersSection />
      <FAQSection />
      <ContactForms />
      <Footer />
    </div>
  );
}