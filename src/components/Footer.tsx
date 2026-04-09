import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="font-serif text-lg text-foreground mb-2">369 Future Village</p>
          <p className="text-sm text-muted-foreground">Smart trädgårdsdesign för vardagen.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-3">Tjänster</p>
          <ul className="space-y-2">
            <li><Link to="/smart-garden" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Smart Garden</Link></li>
            <li><Link to="/smart-garden-analysis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Smart Garden Analysis</Link></li>
            <li><Link to="/smart-villa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Smart Villa</Link></li>
            <li><Link to="/ecovillage" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ecovillage</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-3">Kontakt</p>
          <ul className="space-y-2">
            <li><Link to="/om" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Om mig</Link></li>
            <li><Link to="/kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link></li>
            <li><a href="mailto:kontakt@369futurevillage.se" className="text-sm text-muted-foreground hover:text-foreground transition-colors">kontakt@369futurevillage.se</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} 369 Future Village. Alla rättigheter förbehållna.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
