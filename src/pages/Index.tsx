import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TurningPointSection from "@/components/TurningPointSection";
import MethodSection from "@/components/MethodSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import FoundersSection from "@/components/FoundersSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import FinalStatementSection from "@/components/FinalStatementSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <TurningPointSection />
        <MethodSection />
        <DifferentiatorSection />
        <FoundersSection />
        <WhoIsItForSection />
        <FinalStatementSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
