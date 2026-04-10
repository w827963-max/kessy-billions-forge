import { CheckCircle2 } from "lucide-react";

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

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-deep-blue relative">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">Capabilities</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Projects & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">
          From offshore fabrication to onshore construction — our team delivers complex engineering projects safely and on time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {capabilities.map((c, i) => (
          <div
            key={c}
            className="glass-card rounded-lg p-5 flex items-start gap-3 hover-lift"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
            <span className="text-sm font-medium">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
