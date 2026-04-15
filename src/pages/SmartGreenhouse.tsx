import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import { Button } from "@/components/ui/button";
import RevealSection from "@/components/RevealSection";

const SmartGreenhouse = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={gardenImg} alt="Smart Greenhouse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-xs font-light tracking-[0.35em] uppercase text-white/60 mb-6">Smart växthus</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
          Odla året runt – oavsett säsong
        </h1>
        <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
          Ett växthus med klimatkontroll,
          <br className="hidden md:block" />
          automatiserad bevattning och smart övervakning.
        </p>
      </div>
    </section>

    {/* Funktioner */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Funktioner</p>
          <ul className="space-y-4 mb-14">
            {["Automatisk temperatur- och fuktstyrning", "Odling året runt", "Smart bevattning", "Sensorbaserad övervakning"].map((f) => (
              <li key={f} className="flex items-start gap-4 text-foreground font-light">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
              <Link to="/kontakt">Kontakta mig</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-10 py-7 rounded-full transition-all duration-300">
              <Link to="/smart-garden-analysis">Boka Smart Garden Analysis</Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGreenhouse;
