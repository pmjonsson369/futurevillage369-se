import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import { Button } from "@/components/ui/button";

const SmartGreenhouse = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={gardenImg} alt="Smart Greenhouse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Smart växthus</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
          Odla året runt – oavsett säsong
        </h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Ett växthus med klimatkontroll,
          <br className="hidden md:block" />
          automatiserad bevattning och smart övervakning.
        </p>
      </div>
    </section>

    {/* Funktioner */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Funktioner</p>
        <ul className="space-y-3 mb-10">
          {["Automatisk temperatur- och fuktstyrning", "Odling året runt", "Smart bevattning", "Sensorbaserad övervakning"].map((f) => (
            <li key={f} className="flex items-start gap-3 text-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-lg">
            <Link to="/smart-garden-analysis">Boka Smart Garden Analysis</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default SmartGreenhouse;
