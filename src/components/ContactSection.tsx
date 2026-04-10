import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-deep-blue">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">Get In Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Contact <span className="text-gradient">Us</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md gradient-accent flex items-center justify-center shrink-0">
              <Phone size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a href="tel:+2348038968587" className="text-muted-foreground hover:text-primary transition-colors block text-sm">
                +234 803 896 8587
              </a>
              <a href="tel:+2348114110433" className="text-muted-foreground hover:text-primary transition-colors block text-sm">
                +234 811 411 0433
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md gradient-accent flex items-center justify-center shrink-0">
              <Mail size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:kessyjossy81@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                kessyjossy81@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md gradient-accent flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-muted-foreground text-sm">
                No. 16 Uqua Road, Eket,<br />
                Akwa Ibom State, Nigeria
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/2348038968587"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.7-1.394A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.82-6.29-2.191l-.44-.365-3.12.924.864-3.157-.38-.456A9.934 9.934 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form
          className="glass-card rounded-lg p-6 md:p-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:kessyjossy81@gmail.com?subject=Quote Request";
          }}
        >
          <div>
            <label className="text-sm font-medium mb-1.5 block">Full Name</label>
            <input
              type="text"
              required
              className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <input
              type="email"
              required
              className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <textarea
              rows={5}
              required
              className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-accent text-primary-foreground py-3 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
