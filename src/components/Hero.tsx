import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-romantic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-romantic opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white animate-float">
          For My Love
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
          Distance means nothing when someone means everything. 
          This little corner of the internet is filled with all the love, 
          memories, and dreams we share together.
        </p>
        <Button 
          size="lg" 
          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-glow"
        >
          Explore Our Story 💕
        </Button>
      </div>
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-white/20 text-2xl animate-float">💖</div>
        <div className="absolute top-1/3 right-1/4 text-white/20 text-3xl animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute bottom-1/3 left-1/3 text-white/20 text-2xl animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-1/4 right-1/3 text-white/20 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>💝</div>
      </div>
    </section>
  );
};

export default Hero;