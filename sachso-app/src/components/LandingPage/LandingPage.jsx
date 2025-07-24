import Header from "./sections/Header";
import Footer from "./sections/Footer";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
function LandingPage() {
  return (
    <div className="bg-[#f8f9fe]">
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
