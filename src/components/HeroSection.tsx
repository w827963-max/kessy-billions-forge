import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Industrial welding and fabrication"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 gradient-overlay" />

    <div className="relative z-10 container text-center px-4">
      <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in">
        Engineering Excellence Since Day One
      </p>
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
        Delivering Reliable
        <br />
        <span className="text-gradient">Engineering Solutions</span>
        <br />
        Across Industries
      </h1>
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        Oil &amp; Gas · Construction · Industrial Services — trusted by leading operators across Nigeria.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <a href="#contact" className="gradient-accent text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
          Contact Us
        </a>
        <a href="#contact" className="border border-foreground/30 text-foreground px-8 py-3.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">
          Request a Quote
        </a>
      </div>
    </div>

    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
      <ChevronDown size={28} />
    </a>
  </section>
);

export default HeroSection;
