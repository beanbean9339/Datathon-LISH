import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import CreativeSection from "@/components/sections/CreativeSection";
import ArtworkSection from "@/components/sections/ArtworkSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CreativeSection />
      <ArtworkSection />
      <ContactSection />
    </div>
  );
};

export default Index;
