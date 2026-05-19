import { Link } from "react-router-dom";
import heroCinematic from "@/assets/hero-cinematic.jpg";
import showcaseMobile from "@/assets/showcase-mobile.jpg";
import ctaGreenhouse from "@/assets/cta-greenhouse-night.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Thermometer, Recycle, Droplets, Cpu, Sun, Leaf } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const premiumCards = [
  {
    icon: Sprout,
    title: "Smart Garden",
    desc: "Sensorer, automation och live-data direkt i mobilen.",
  },
  {
    icon: Thermometer,
    title: "Smart Greenhouse",
    desc: "Framtidens växthus anpassade för nordiskt klimat och året-runt-odling.",
  },
  {
    icon: Recycle,
    title: "Regenerativa System",
    desc: "Vatten, jord, mat och hållbar design i naturlig balans.",
  },
];

const services = [
  {
    icon: Leaf,
    title: "Trädgårdsanalys",
    desc: "En personlig analys med idéer för design, plantering, vattenflöde och framtida förbättringar.",
  },
  {
    icon: Cpu,
    title: "Smart Garden System",
    desc: "Automatiserad bevattning, miljösensorer och smart övervakning.",
  },
  {
    icon: Thermometer,
    title: "Smart Greenhouse",
    desc: "Kontrollerade klimatsystem för längre odlingssäsonger och vinterodling.",
  },
  {
    icon: Droplets,
    title: "Regenerativ Design",
    desc: "Regnvatteninsamling, odlingsbäddar, naturliga system och hållbar planering.",
  },
];

const handleGlassMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

const Index = () => (
  <div className="bg-dark text-dark-foreground">
    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCinematic}
          alt="Smart skandinaviskt växthus i kvällsljus"
          className="w-full h-full object-cover scale-105 animate-fade-in-slow img-tone"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
        <div className="absolute inset-0 grain-overlay opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-40">
        <p className="text-xs md:text-sm font-extralight tracking-[0.7em] uppercase text-white/70 mb-16 animate-fade-in">
          369&nbsp;&nbsp;Future&nbsp;&nbsp;Village
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.05] mb-12 tracking-[-0.02em] animate-fade-in max-w-4xl mx-auto">
          Smarta trädgårdar
          <br />
          & växthus för nordiskt liv
        </h1>
        <p className="text-base md:text-lg text-white/65 font-light mb-16 max-w-xl mx-auto leading-[1.9] animate-fade-in-slow">
          Vi designar intelligenta odlingsmiljöer där teknologi,
          vatten och natur samverkar i harmoni.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 h-auto">
            <Link to="/smart-garden-analysis">Boka trädgårdsanalys</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="btn-premium border-white/20 text-white bg-white/[0.04] hover:bg-white/[0.12] hover:text-white px-12 py-7 h-auto backdrop-blur-md">
            <Link to="/smart-garden">Utforska Smart Garden</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in-slow">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>

    {/* PREMIUM GLASS CARDS */}
    <section className="relative py-40 md:py-56 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-24">
            <p className="eyebrow mb-6">Systemet</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-foreground leading-[1.1]">
              Tre världar. <span className="text-primary/90">Ett ekosystem.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {premiumCards.map((c, i) => (
              <RevealSection key={c.title} delay={i * 150}>
                <div onMouseMove={handleGlassMove} className="glass-card p-10 lg:p-12 h-full group cursor-default">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                      <c.icon size={24} strokeWidth={1.2} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-5 tracking-tight">{c.title}</h3>
                    <p className="text-sm text-white/60 leading-[1.9] font-light">{c.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>

    {/* SHOWCASE SPLIT */}
    <section className="relative py-40 md:py-56 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <RevealSection>
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10">
            <img src={showcaseMobile} alt="Smart Garden mobilapp" loading="lazy" className="w-full h-[34rem] md:h-[42rem] object-cover img-tone" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Floating sensor chip */}
            <div className="absolute top-8 left-8 glass-card !rounded-2xl px-5 py-4 flex items-center gap-3 backdrop-blur-2xl">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Markfukt</p>
                <p className="text-sm text-white font-light">68% · optimal</p>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 glass-card !rounded-2xl px-5 py-4 flex items-center gap-3 backdrop-blur-2xl">
              <Sun size={16} className="text-primary" strokeWidth={1.2} />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Ljus idag</p>
                <p className="text-sm text-white font-light">6.4 h</p>
              </div>
            </div>
          </div>
        </RevealSection>
        <RevealSection delay={150}>
          <p className="eyebrow mb-6">Showcase</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-foreground leading-[1.1] mb-10">
            Odla smartare.
            <br />
            <span className="text-primary/90">Lev närmare naturen.</span>
          </h2>
          <p className="text-lg text-white/65 font-light leading-[1.9] max-w-lg">
            369 Future Village skapar moderna lösningar för människor som vill ha
            vackrare utemiljöer, intelligenta odlingssystem och en mer hållbar livsstil.
          </p>
        </RevealSection>
      </div>
    </section>

    {/* SERVICES */}
    <section className="relative py-40 md:py-56 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.1),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-24">
            <p className="eyebrow mb-6">Tjänster</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-foreground leading-[1.1]">
              Designat för det nordiska livet.
            </h2>
          </div>
        </RevealSection>
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <RevealSection key={s.title} delay={i * 120}>
              <div onMouseMove={handleGlassMove} className="glass-card p-10 lg:p-12 h-full group cursor-default">
                <div className="relative z-10 flex gap-8">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20">
                    <s.icon size={20} strokeWidth={1.2} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-4 tracking-tight">{s.title}</h3>
                    <p className="text-sm text-white/60 leading-[1.9] font-light">{s.desc}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* VISION */}
    <section className="relative py-44 md:py-64 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaGreenhouse} alt="" loading="lazy" className="w-full h-full object-cover img-tone scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        {/* particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="particle absolute rounded-full bg-primary/40"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      <RevealSection>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-8">Visionen</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-10">
            Det här är bara början.
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-[1.9]">
            369 Future Village bygger steg för steg mot framtidens självförsörjande
            miljöer där hem, trädgårdar, vatten, energi och matproduktion fungerar
            som ett levande ekosystem.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* FINAL CTA */}
    <section className="relative py-44 md:py-64 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaGreenhouse} alt="" loading="lazy" className="w-full h-full object-cover img-tone" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
      </div>
      <RevealSection>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-12 tracking-[-0.02em]">
            Redo att skapa
            <br />
            framtidens trädgård?
          </h2>
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 px-14 py-8 h-auto">
            <Link to="/contact" className="inline-flex items-center gap-3">
              Kontakta oss <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </div>
);

export default Index;
