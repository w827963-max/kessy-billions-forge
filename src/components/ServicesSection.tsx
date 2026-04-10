import {
  Flame, Truck, Building2, Zap, ShoppingCart, PackageCheck,
  Users, Layers, Fuel,
} from "lucide-react";

const services = [
  { icon: Flame, title: "Welding & Fabrication", desc: "Structural and pipeline welding, custom metal fabrication to international standards." },
  { icon: Truck, title: "Equipment Leasing", desc: "Heavy-duty equipment hiring for construction and oil & gas operations." },
  { icon: Building2, title: "Civil Construction", desc: "Roads, buildings, and industrial structures built with precision." },
  { icon: Zap, title: "Electrical Services", desc: "Electrical and mechanical engineering installations and maintenance." },
  { icon: ShoppingCart, title: "Procurement", desc: "Sourcing and supply of industrial materials and engineering components." },
  { icon: PackageCheck, title: "Logistics Support", desc: "End-to-end logistics coordination for project sites." },
  { icon: Users, title: "Manpower Supply", desc: "Skilled and semi-skilled labour for all engineering disciplines." },
  { icon: Layers, title: "Scaffolding", desc: "Safe, certified scaffolding erection and dismantling services." },
  { icon: Fuel, title: "Fuel Supply (AGO & PMS)", desc: "Reliable supply of diesel and petrol to industrial and commercial clients." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Our <span className="text-gradient">Services</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="glass-card rounded-lg p-6 hover-lift group cursor-default"
          >
            <div className="w-12 h-12 rounded-md gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
