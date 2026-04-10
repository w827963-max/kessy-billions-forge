import aboutBg from "@/assets/about-bg.jpg";
import { Target, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-deep-blue relative overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src={aboutBg}
              alt="Construction site at sunset"
              className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="gradient-accent text-primary-foreground text-sm font-bold px-4 py-2 rounded">
                10+ Years Experience
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Building the Future with <span className="text-gradient">Precision & Integrity</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kessy Billions Integrated Limited is a multi-disciplinary engineering company specializing in
              welding &amp; fabrication, equipment leasing, construction, and industrial support services. We
              serve the oil &amp; gas, maritime, and construction industries with unwavering commitment to
              safety, quality, and timely delivery.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card rounded-lg p-5">
                <Target className="text-primary mb-3" size={28} />
                <h3 className="font-heading text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deliver reliable, safe, and high-quality engineering solutions that exceed expectations.
                </p>
              </div>
              <div className="glass-card rounded-lg p-5">
                <Eye className="text-primary mb-3" size={28} />
                <h3 className="font-heading text-lg font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Become a leading engineering solutions provider across West Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
