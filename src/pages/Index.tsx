import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import LeadMagnetSection from "@/components/landing/LeadMagnetSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ProblemSection />
      <SocialProofSection />
      <LeadMagnetSection />
      <Footer />
    </div>
  );
};

export default Index;
