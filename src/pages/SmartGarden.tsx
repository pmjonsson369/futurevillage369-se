import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import introImg from "@/assets/intro.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Sparar tid",
  "Fungerar när du är bortrest",
  "Starkare och friskare växter",
  "Ren och modern design",
  "Möjligt att bygga ut över tid",
];

const howItWorks = [
  { title: "Automatisk bevattning", desc: "Sensorer känner av när växterna behöver vatten" },
  { title: "Appstyrning", desc: "Du kan följa och justera systemet var du än är" },
  { title: "Diskret installation", desc: "All teknik är integrerad och knappt synlig" },
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
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Smart trädgård</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
          Ett enklare sätt att odla
        </h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Här samverkar natur och teknik.
        </p>
      </div>
    </section>

    {/* What it is */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6">Smart trädgård</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Smart trädgård är ett automatiserat system för dig som vill ha en vacker och fungerande trädgård
            <br className="hidden md:block" />
            utan att behöva lägga mycket tid på skötsel.
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
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Hur det fungerar</p>
          <h2 className="text-3xl font-serif">Teknik som arbetar i bakgrunden</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step) => (
            <div key={step.title} className="text-center">
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
          <h2 className="text-3xl font-serif">Mindre arbete. Bättre resultat.</h2>
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

    {/* Vision */}
    <section className="section-padding bg-warm">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Vision</p>
        <h2 className="text-3xl font-serif mb-6">Ett första steg mot något större</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Systemet kan utvecklas vidare till växthus,
          <br className="hidden md:block" />
          vattenlösningar och helt integrerade miljöer.
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
