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
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Smart Growing Systems</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">Smart Greenhouse</h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Förläng odlingssäsongen med ett smart och genomtänkt växthus.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Kommer snart</p>
        <h2 className="text-3xl font-serif mb-6">Växthus med smart design</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Vi utvecklar lösningar för smarta växthus som integreras med din trädgårdsplanering.
          Automatiserad bevattning, klimatstyrning och optimerade odlingsytor.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Vill du veta mer? Hör av dig så berättar jag om vad som är på gång.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
