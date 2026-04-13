import { Link } from "react-router-dom";
import analysisImg from "@/assets/analysis.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const includes = [
  "Genomgång av din nuvarande trädgård",
  "Förslag på förbättringar",
  "Plan för odling och ytor",
  "Visuell riktning",
];

const steps = [
  { title: "Boka", desc: "Välj en tid som passar dig – det tar bara en minut." },
  { title: "Analys", desc: "Jag besöker eller går igenom din trädgård noggrant." },
  { title: "Leverans", desc: "Du får en tydlig plan med konkreta förslag." },
];

const SmartGardenAnalysis = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={analysisImg} alt="Smart Garden Analysis" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Huvuderbjudande</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">Smart Garden Analysis</h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed mb-8">
          Få en tydlig plan för din trädgård – med konkreta förslag som fungerar långsiktigt.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
          <a href="#boka">Boka nu – 1 499 kr</a>
        </Button>
      </div>
    </section>

    {/* What you get */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Vad du får</p>
          <h2 className="text-3xl font-serif">En komplett plan för din trädgård</h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-12">
          Jag går igenom din trädgård och visar hur du kan förbättra struktur,
          flöde och användning av ytor. Du får konkreta förslag som gör det enklare
          att skapa en trädgård som fungerar långsiktigt.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {includes.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-warm rounded-lg p-5">
              <Check size={18} className="text-primary flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps */}
    <section className="section-padding bg-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Så fungerar det</p>
          <h2 className="text-3xl font-serif">Tre enkla steg</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-serif mx-auto mb-5">
                {i + 1}
              </div>
              <h3 className="text-lg font-serif mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Price & CTA */}
    <section id="boka" className="section-padding bg-background">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Pris</p>
        <h2 className="text-3xl font-serif mb-4">Smart Garden Analysis</h2>
        <div className="bg-warm rounded-2xl p-8 mb-8">
          <p className="text-sm text-muted-foreground mb-2">Intropris</p>
          <p className="text-5xl font-serif text-foreground mb-2">1 499 kr</p>
          <p className="text-sm text-muted-foreground">Inkl. genomgång, plan och förslag</p>
        </div>
        <div className="space-y-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg w-full">
            <Link to="/kontakt">Boka din analys</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Har du frågor? <Link to="/kontakt" className="text-primary hover:underline">Kontakta mig</Link>
          </p>
        </div>
      </div>
    </section>
  </>
);

export default SmartGardenAnalysis;
