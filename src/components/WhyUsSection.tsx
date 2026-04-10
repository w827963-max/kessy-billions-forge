import { Shield, Award, Wrench, Clock } from "lucide-react";

const reasons = [
  { icon: Users2, title: "Skilled Workforce", desc: "Certified engineers, welders, and technicians with deep industry experience." },
  { icon: Shield, title: "Quality Control", desc: "Rigorous QA/QC systems aligned with international standards." },
  { icon: Wrench, title: "Modern Equipment", desc: "State-of-the-art tools and machinery for superior results." },
  { icon: Clock, title: "Reliable Delivery", desc: "On-time project completion with transparent communication." },
];

import { Users2 } from "lucide-react";

const WhyUsSection = () => (
  <section id="why-us" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          The <span className="text-gradient">Kessy Billions</span> Advantage
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div key={r.title} className="text-center group">
            <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <r.icon size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
