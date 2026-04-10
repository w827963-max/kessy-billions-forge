const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} Kessy Billions Integrated Limited. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
