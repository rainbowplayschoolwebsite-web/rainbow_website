import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import PhilosophySection from "@/components/PhilosophySection";
import BrainSensesSection from "@/components/BrainSensesSection";

import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionCTA from "@/components/AdmissionCTA";
import FooterSection from "@/components/FooterSection";
import FloatingElements from "@/components/FloatingElements";
import FloatingCTA from "@/components/FloatingCTA";
import BackgroundGlow from "@/components/BackgroundGlow";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <BackgroundGlow />
      <FloatingElements />
      <FloatingCTA />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <BrainSensesSection />
        <AboutSection />
        <ProgramsSection />
        <PhilosophySection />

        <TrustSection />
        <TestimonialsSection />
        <AdmissionCTA />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
