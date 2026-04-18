import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import introImg from "@/assets/garden-planning.jpg";
import detailImg from "@/assets/smart-garden-detail.jpg";
import aerialImg from "@/assets/garden-aerial.jpg";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
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

const forWhom = [
  "Villaägare som vill ha en vacker trädgård utan tidskrävande skötsel",
  "Familjer som ofta är bortresta",
  "Den som vill kombinera natur och modern teknik",
];

const SmartGarden = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <img src={gardenImg} alt="Smart Garden" className="w-full h-full object-cover img-tone" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
        <p className="text-xs font-light tracking-[0.5em] uppercase text-white/55 mb-12">Smart trädgård</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white mb-14 leading-[0.95] tracking-[-0.02em]">
          Ett enklare sätt
          <br />
          att odla
        </h1>
        <p className="text-lg md:text-2xl text-white/75 max-w-2xl mx-auto leading-[1.8] font-light mb-14">
          Här samverkar natur och teknik.
        </p>
        <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-14 py-8 h-auto">
          <Link to="/smart-garden-analysis">Boka Trädgårdsanalys</Link>
        </Button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>

    {/* What it is */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="eyebrow mb-6">Översikt</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">Smart trädgård</h2>
            <p className="text-lg text-muted-foreground leading-[1.9] font-light">
              Smart trädgård är ett automatiserat system för dig som vill ha en vacker och fungerande trädgård
              <br className="hidden md:block" />
              utan att behöva lägga mycket tid på skötsel.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={introImg} alt="Trädgårdsplanering" loading="lazy" className="w-full h-80 md:h-[34rem] object-cover img-tone transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Vad du får */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6">Vad du får</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Mindre arbete. Bättre resultat.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-5 bg-background rounded-2xl p-7 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <Check size={20} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                <span className="text-foreground font-light">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Före / Efter */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6">Före / Efter</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Skillnaden är tydlig</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl overflow-hidden relative group">
              <img src={aerialImg} alt="Före" loading="lazy" className="w-full h-80 md:h-[26rem] object-cover img-tone transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-8 left-8 text-xs font-light tracking-[0.4em] uppercase text-white/80">Före</p>
            </div>
            <div className="rounded-3xl overflow-hidden relative group">
              <img src={detailImg} alt="Efter" loading="lazy" className="w-full h-80 md:h-[26rem] object-cover img-tone transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-8 left-8 text-xs font-light tracking-[0.4em] uppercase text-white/80">Efter</p>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* How it works */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <p className="eyebrow mb-6">Hur det fungerar</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Teknik som arbetar i bakgrunden</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {howItWorks.map((step, i) => (
              <RevealSection key={step.title} delay={i * 140}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 ring-1 ring-primary/15 text-primary flex items-center justify-center text-base font-serif mx-auto mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-serif mb-5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.9] font-light">{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* För vem */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">För vem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-16">Passar dig som...</h2>
          <ul className="space-y-6 text-left">
            {forWhom.map((f) => (
              <li key={f} className="flex items-start gap-5 text-foreground font-light text-lg leading-relaxed">
                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>
    </section>

    {/* Vision / CTA */}
    <section className="py-40 md:py-56 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Vision</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-dark-foreground leading-tight">Ett första steg mot något större</h2>
          <p className="text-lg md:text-xl text-dark-muted leading-[1.9] mb-16 font-light">
            Systemet kan utvecklas vidare till växthus,
            <br className="hidden md:block" />
            vattenlösningar och helt integrerade miljöer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 py-8 h-auto">
              <Link to="/smart-garden-analysis">
                Boka Trädgårdsanalys <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-premium border-white/25 text-white bg-white/5 hover:bg-white/15 hover:text-white text-base px-12 py-8 h-auto">
              <Link to="/kontakt">Kontakta mig</Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGarden;
