import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import introImg from "@/assets/intro.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const benefits = [
  "Sparar tid",
  "Fungerar när du är bortrest",
  "Starkare och friskare växter",
  "Ren och modern design",
  "Möjligt att bygga ut över tid",
  "Mer harmoni mellan natur och teknik",
];

const howItWorks = [
  { title: "Automatisk bevattning", desc: "Sensorer känner av när växterna behöver vatten" },
  { title: "Appstyrning", desc: "Du kan följa och justera systemet var du än är" },
  { title: "Diskret installation", desc: "All teknik är integrerad och knappt synlig" },
];

const SmartGarden = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={gardenImg} alt="Smart Garden" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-xs font-light tracking-[0.35em] uppercase text-white/60 mb-6">Smart trädgård</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
          Ett enklare sätt att odla
        </h1>
        <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
          Här samverkar natur och teknik.
        </p>
      </div>
    </section>

    {/* What it is */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Smart trädgård</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Smart trädgård är ett automatiserat system för dig som vill ha en vacker och fungerande trädgård
              <br className="hidden md:block" />
              utan att behöva lägga mycket tid på skötsel.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={introImg} alt="Trädgårdsplanering" loading="lazy" className="w-full h-72 md:h-[28rem] object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      </RevealSection>
    </section>

    {/* How it works */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Hur det fungerar</p>
            <h2 className="text-3xl md:text-4xl font-serif">Teknik som arbetar i bakgrunden</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((step, i) => (
              <RevealSection key={step.title} delay={i * 120}>
                <div className="text-center">
                  <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Fördelar</p>
            <h2 className="text-3xl md:text-4xl font-serif">Mindre arbete. Bättre resultat.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-4 bg-warm rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                <Check size={18} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-light">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Vision */}
    <section className="py-28 md:py-36 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Vision</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-dark-foreground leading-tight">Ett första steg mot något större</h2>
          <p className="text-lg text-dark-muted leading-relaxed mb-14 font-light">
            Systemet kan utvecklas vidare till växthus,
            <br className="hidden md:block" />
            vattenlösningar och helt integrerade miljöer.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
              <Link to="/smart-garden-analysis">Boka Trädgårdsanalys</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 text-base px-10 py-7 rounded-full transition-all duration-300">
              <Link to="/kontakt">Kontakta mig</Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGarden;
