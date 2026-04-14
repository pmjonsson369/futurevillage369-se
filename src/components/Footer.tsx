import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center">
      <p className="font-serif text-lg text-foreground mb-2">369 Future Village</p>
      <p className="text-sm text-muted-foreground mb-8">Framtiden är regenerativ</p>
      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} 369 Future Village
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
