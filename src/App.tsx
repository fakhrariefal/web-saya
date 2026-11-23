import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ValueBentoSection from './components/ValueBentoSection';
import WorkflowSection from './components/WorkflowSection';
import LegalitySection from './components/LegalitySection';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';
import type { ServiceOption } from './utils/rfq';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(
    'General Supplier / Procurement'
  );

  const scrollToInquiry = () => {
    const target = document.getElementById('penawaran');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForRfq = (service: ServiceOption) => {
    setSelectedService(service);
    scrollToInquiry();
  };

  return (
    <div className="min-h-screen bg-white text-[#0B2C4D]">
      <Navbar onRequestRfq={scrollToInquiry} />

      <main>
        <HeroSection onConsultClick={scrollToInquiry} />
        <PillarsSection onSelectServiceForRfq={handleSelectServiceForRfq} />
        <ValueBentoSection />
        <WorkflowSection />
        <LegalitySection />
        <InquirySection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      <Footer />
    </div>
  );
}
