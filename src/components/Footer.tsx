const Footer = () => (
  <footer className="border-t border-border bg-background py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-serif text-lg text-foreground">369 Future Village</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} 369 Future Village. Alla rättigheter förbehållna.
      </p>
    </div>
  </footer>
);

export default Footer;
