import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Sparar tid",
  "Fungerar när du är bortrest",
  "Starkare och friskare växter",
  "Ren och modern design",
  "Möjligt att bygga ut över tid",
];

const howItWorks = [
  {
    title: "Automatisk bevattning",
    desc: "Sensorer känner av när växterna behöver vatten",
  },
  {
    title: "Appstyrning",
    desc: "Du kan följa och justera systemet var du än är",
  },
  {
    title: "Diskret installation",
    desc: "All teknik är integrerad och knappt synlig",
  },
];

const SmartGrowingSystems = () => (
  <>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6">Smarta odlingssystem</p>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
          Från trädgård till växthus – odla smartare
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Ett system som börjar enkelt och kan utvecklas till odling året runt.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
          <Link to="/smart-garden-analysis">Trädgårdsanalys</Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Börja med en personlig genomgång av din trädgård – vi tittar på struktur, vattenflöde och möjligheter.
        </p>
      </div>
    </section>

    {/* Smart trädgård */}
    <section className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Smart trädgård</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Ett enklare sätt att odla</h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
          Här samverkar natur och teknik.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Smart trädgård är ett automatiserat system för dig som vill ha en vacker och fungerande trädgård utan att behöva lägga mycket tid på skötsel.
        </p>
      </div>
    </section>

    {/* Hur det fungerar */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Hur det fungerar</p>
          <h2 className="text-3xl md:text-4xl font-serif">Teknik som arbetar i bakgrunden</h2>
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
        <h2 className="text-3xl md:text-4xl font-serif mb-10">Mindre arbete. Bättre resultat.</h2>
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