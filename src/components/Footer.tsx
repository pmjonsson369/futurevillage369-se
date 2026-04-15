const Footer = () => (
  <footer className="bg-dark py-16 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center">
      <p className="font-serif text-xl text-dark-foreground mb-3">369 Future Village</p>
      <p className="text-sm text-dark-muted mb-10 font-light tracking-wide">Framtiden är regenerativ</p>
      <div className="border-t border-white/10 pt-8">
        <p className="text-xs text-dark-muted font-light tracking-wide">
          © {new Date().getFullYear()} 369 Future Village
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
