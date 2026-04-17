import { Link } from "react-router-dom";
import analysisImg from "@/assets/analysis.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import RevealSection from "@/components/RevealSection";

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
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={analysisImg} alt="Trädgårdsanalys" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24">
        <p className="text-xs font-light tracking-[0.4em] uppercase text-white/60 mb-10">Huvuderbjudande</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-12 leading-[1.05] tracking-tight">Trädgårdsanalys</h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-[1.9] mb-14 font-light">
          Få en tydlig plan för din trädgård – med konkreta förslag som fungerar långsiktigt.
        </p>
        <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 py-8 h-auto">
          <a href="#boka">Boka nu – 1 499 kr</a>
        </Button>
      </div>
    </section>

    {/* What you get */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Vad du får</p>
            <h2 className="text-3xl md:text-4xl font-serif">En komplett plan för din trädgård</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-14 font-light">
            Jag går igenom din trädgård och visar hur du kan förbättra struktur,
            flöde och användning av ytor. Du får konkreta förslag som gör det enklare
            att skapa en trädgård som fungerar långsiktigt.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-4 bg-warm rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                <Check size={18} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Steps */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Så fungerar det</p>
            <h2 className="text-3xl md:text-4xl font-serif">Tre enkla steg</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <RevealSection key={step.title} delay={i * 120}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-serif mx-auto mb-6 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Price & CTA */}
    <section id="boka" className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Pris</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Trädgårdsanalys</h2>
          <div className="bg-warm rounded-2xl p-10 mb-10">
            <p className="text-sm text-muted-foreground mb-3 font-light">Intropris</p>
            <p className="text-5xl font-serif text-foreground mb-3">1 499 kr</p>
            <p className="text-sm text-muted-foreground font-light">Inkl. genomgång, plan och förslag</p>
          </div>
          <div className="space-y-5">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300 w-full">
              <Link to="/kontakt">Boka din analys</Link>
            </Button>
            <p className="text-sm text-muted-foreground font-light">
              Har du frågor? <Link to="/kontakt" className="text-primary hover:underline">Kontakta mig</Link>
            </p>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGardenAnalysis;
