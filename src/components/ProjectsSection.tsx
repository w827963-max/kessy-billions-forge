import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const capabilities = [
  "ISO Portakabin Fabrication",
  "DNV 2.7-1 Container Fabrication",
  "Gas Rack Fabrication",
  "Barge & Tugboat Construction",
  "Sandblasting & Corrosion Control",
  "Pipeline Construction & Maintenance",
  "Platform Modification Works",
  "Tank Farm Construction",
];

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.1);

  return (
    <section id="projects" className="section-padding bg-deep-blue relative">
      <div className="container mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">Capabilities</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Projects & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            From offshore fabrication to onshore construction — our team delivers complex engineering projects safely and on time.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((c, i) => (
            <div
              key={c}
              className={`glass-card rounded-lg p-5 flex items-start gap-3 hover-lift transition-all duration-700 ease-out ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 80}ms` : "0ms" }}
            >
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
