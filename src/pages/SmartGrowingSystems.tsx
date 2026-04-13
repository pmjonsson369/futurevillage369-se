import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Sparar tid",
  "Fungerar på semestern",
  "Friskare växter",
  "Ren design",
  "Skalbart system",
];

const howItWorks = [
  {
    title: "Automatiserad bevattning",
    desc: "Sensorer styr exakt när och var vatten behövs.",
  },
  {
    title: "Appstyrning",
    desc: "Kontrollera din trädgård var du än är.",
  },
  {
    title: "Dold infrastruktur",
    desc: "Ingen synlig teknik — allt är integrerat.",
  },
];

const SmartGrowingSystems = () => (
  <>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6">Smart Growing Systems</p>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
          Från trädgård till växthus. Odla smartare.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Ett progressivt system för modern matproduktion — från enkel start till året-runt-odling.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
          <Link to="/smart-garden-analysis">Smart Garden Analysis</Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Börja med en personlig analys av din trädgård — layout, vattenflöde och potential.
        </p>
      </div>
    </section>

    {/* Smart Garden */}
    <section className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Smart Garden</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Ett nytt sätt att odla</h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
          Där natur och teknik samverkar.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Smart Garden är ett automatiserat odlingssystem för moderna hem.
        </p>
      </div>
    </section>

    {/* Hur det fungerar */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Hur det fungerar</p>
          <h2 className="text-3xl md:text-4xl font-serif">Teknik som försvinner</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-serif mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fördelar */}
    <section className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Fördelar</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-10">Mindre arbete. Starkare växter.</h2>
        <div className="space-y-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3">
              <Check size={18} className="text-primary flex-shrink-0" />
              <span className="text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default SmartGrowingSystems;
