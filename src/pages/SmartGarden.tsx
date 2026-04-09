import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import introImg from "@/assets/intro.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Smart planering av ytor",
  "Struktur för odling",
  "Mindre underhåll",
  "Mer funktion och balans",
  "Bättre flöde i trädgården",
  "Anpassat efter dina behov",
];

const steps = [
  { title: "Analys", desc: "Vi går igenom din nuvarande trädgård och identifierar möjligheter." },
  { title: "Planering", desc: "Jag skapar en plan för ytor, odling och struktur." },
  { title: "Genomförande", desc: "Du får konkreta förslag att jobba med – steg för steg." },
];

const SmartGarden = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={gardenImg} alt="Smart Garden" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Smart Growing Systems</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">Smart Garden</h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          En trädgård som är genomtänkt från början – där odling, ytor och skötsel fungerar tillsammans.
        </p>
      </div>
    </section>

    {/* What it is */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Vad det är</p>
          <h2 className="text-3xl font-serif mb-6">En trädgård designad för att fungera</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Istället för att gissa dig fram planerar vi din trädgård så att allt
            fungerar tillsammans – odling, gångar, ytor och skötsel.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Resultatet blir en trädgård som är lättare att ta hand om och mer
            harmonisk att vara i.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={introImg} alt="Trädgårdsplanering" loading="lazy" className="w-full h-72 md:h-96 object-cover" />
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="section-padding bg-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Process</p>
          <h2 className="text-3xl font-serif">Hur det fungerar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-serif mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-serif mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Fördelar</p>
          <h2 className="text-3xl font-serif">Varför Smart Garden?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 bg-warm rounded-lg p-4">
              <Check size={18} className="text-primary flex-shrink-0" />
              <span className="text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-warm">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">Börja med en analys</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Det enklaste sättet att komma igång är att boka en Smart Garden Analysis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-garden-analysis">Boka Smart Garden Analysis</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-lg">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default SmartGarden;
