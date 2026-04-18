import { Link } from "react-router-dom";
import greenhouseImg from "@/assets/smart-greenhouse-hero.jpg";
import detailImg from "@/assets/smart-greenhouse.jpg";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Thermometer, Droplets, Activity } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const features = [
  "Automatisk temperatur- och fuktstyrning",
  "Odling året runt",
  "Smart bevattning",
  "Sensorbaserad övervakning",
];

const steps = [
  { title: "Klimatkontroll", desc: "Temperatur och fukt regleras automatiskt", icon: Thermometer },
  { title: "Smart bevattning", desc: "Vatten doseras efter växternas behov", icon: Droplets },
  { title: "Övervakning", desc: "Sensorer följer odlingen i realtid", icon: Activity },
];

const forWhom = [
  "Den som vill odla året runt – oavsett säsong",
  "Familjer som vill ha färska grönsaker hemma",
  "Trädgårdsintresserade som vill kombinera natur och teknik",
];

const SmartGreenhouse = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <img src={greenhouseImg} alt="Smart växthus med automatiserad odling och display" className="w-full h-full object-cover img-tone" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
        <p className="text-xs font-light tracking-[0.5em] uppercase text-white/55 mb-12">Smart växthus</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white mb-14 leading-[0.95] tracking-[-0.02em]">
          Odla året runt
          <br />
          – oavsett säsong
        </h1>
        <p className="text-lg md:text-2xl text-white/75 max-w-2xl mx-auto leading-[1.8] font-light mb-14">
          Ett växthus med klimatkontroll,
          <br className="hidden md:block" />
          automatiserad bevattning och smart övervakning.
        </p>
        <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-14 py-8 h-auto">
          <Link to="/kontakt">Kontakta mig</Link>
        </Button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>

    {/* Vad du får */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6">Vad du får</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Funktioner</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-5 bg-warm rounded-2xl p-7 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <Check size={20} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                <span className="text-foreground font-light">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Före / Efter */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow mb-6">Före / Efter</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Från säsongsodling till året runt</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl overflow-hidden relative group">
              <img src={detailImg} alt="Före" loading="lazy" className="w-full h-80 md:h-[26rem] object-cover img-tone transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-8 left-8 text-xs font-light tracking-[0.4em] uppercase text-white/80">Före</p>
            </div>
            <div className="rounded-3xl overflow-hidden relative group">
              <img src={greenhouseImg} alt="Efter" loading="lazy" className="w-full h-80 md:h-[26rem] object-cover img-tone transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-8 left-8 text-xs font-light tracking-[0.4em] uppercase text-white/80">Efter</p>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Hur det fungerar */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <p className="eyebrow mb-6">Hur det fungerar</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Tre system i samspel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((s, i) => (
              <RevealSection key={s.title} delay={i * 140}>
                <div className="text-center group">
                  <div className="icon-orb mb-10">
                    <s.icon size={30} className="text-primary" strokeWidth={1.1} />
                  </div>
                  <h3 className="text-xl font-serif mb-5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.9] font-light">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* För vem */}
    <section className="section-padding bg-warm">
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

    {/* CTA */}
    <section className="py-40 md:py-56 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Nästa steg</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-dark-foreground leading-tight">Redo att odla året runt?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 py-8 h-auto">
              <Link to="/kontakt">
                Kontakta mig <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-premium border-white/25 text-white bg-white/5 hover:bg-white/15 hover:text-white text-base px-12 py-8 h-auto">
              <Link to="/smart-garden-analysis">Boka Trädgårdsanalys</Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGreenhouse;
