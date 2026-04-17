import { Link } from "react-router-dom";
import greenhouseImg from "@/assets/smart-greenhouse-hero.jpg";
import { Button } from "@/components/ui/button";
import RevealSection from "@/components/RevealSection";

const SmartGreenhouse = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={greenhouseImg} alt="Smart växthus med automatiserad odling och display" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24">
        <p className="text-xs font-light tracking-[0.4em] uppercase text-white/60 mb-10">Smart växthus</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-12 leading-[1.05] tracking-tight">
          Odla året runt – oavsett säsong
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-[1.9] font-light">
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
              <Link to="/smart-garden-analysis">Boka Trädgårdsanalys</Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGreenhouse;
