import Hero from "@/components/Hero";
import MemoryGallery from "@/components/MemoryGallery";
import LoveLetters from "@/components/LoveLetters";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MemoryGallery />
      <LoveLetters />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Index;