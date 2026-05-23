import { Link } from "react-router-dom";
import heroGreenhouse from "@/assets/hero-cinematic-greenhouse.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import sectionGreenhouse from "@/assets/section-greenhouse.jpg";
import sectionSprinklers from "@/assets/section-sprinklers.jpg";
import sectionGardenBeds from "@/assets/section-garden-beds.jpg";
import sectionRainwater from "@/assets/section-rainwater.jpg";
import sectionBranding from "@/assets/section-branding.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/RevealSection";

type Section = {
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  cta?: { label: string; to: string };
  reverse?: boolean;
};

const sections: Section[] = [
  {
    eyebrow: "Smart växthus",
    title: "Intelligenta växthus för nordiskt klimat",
    desc: "Premium-växthus med kontrollerat klimat, varm belysning och intelligenta sensorer — designade för att odla året om i nordisk natur.",
    image: sectionGreenhouse,
    alt: "Modernt svart växthus i nordisk skog vid skymning",
    cta: { label: "Utforska Smart växthus", to: "/smart-greenhouse" },
  },
  {
    eyebrow: "Smart garden systems",
    title: "Smart bevattning & live-data",
    desc: "Sensorer som mäter fukt, temperatur och ljus i realtid. Bevattningen anpassar sig automatiskt — du följer allt direkt i mobilen.",
    image: sectionSprinklers,
    alt: "Smart trädgård med automatisk bevattning i kvällsljus",
    cta: { label: "Utforska Smart trädgård", to: "/smart-garden" },
    reverse: true,
  },
  {
    eyebrow: "Smart garden setup",
    title: "Premium Smart Garden Setup",
    desc: "Skandinaviskt designade odlingsbäddar i matt svart, integrerad LED-belysning och intelligenta moduler — en komplett premium-installation.",
    image: sectionGardenBeds,
    alt: "Premium svarta odlingsbäddar med integrerad belysning",
    cta: { label: "Boka trädgårdsanalys", to: "/smart-garden-analysis" },
  },
  {
    eyebrow: "Regenerativa system",
    title: "Smart vattenhantering",
    desc: "Slutna kretslopp för regnvatten och näring. Naturliga system i balans med miljön — för en självförsörjande framtid.",
    image: sectionRainwater,
    alt: "Minimalistiskt svart regnvattensystem i nordisk trädgård",
    cta: { label: "Läs mer om regenerativa system", to: "/smart-growing-systems" },
    reverse: true,
  },
];

const Index = () => (
  <div className="bg-dark text-dark-foreground">
    {/* HERO — FULLSCREEN CINEMATIC VIDEO */}
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          src={heroVideoAsset.url}
          poster={heroGreenhouse}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        {/* Cinematic dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
        <div className="absolute inset-0 grain-overlay opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 py-40 md:py-48">
        <p className="text-[10px] md:text-[11px] font-light tracking-[0.8em] uppercase text-white/50 mb-12 md:mb-16 animate-fade-in">
          369&nbsp;&nbsp;Future&nbsp;&nbsp;Village
        </p>
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-serif text-white leading-[1.05] mb-10 md:mb-12 tracking-[-0.035em] animate-fade-in max-w-4xl mx-auto text-glow font-light">
          Framtidens smarta trädgårdar
          <br />
          <span className="text-white/80">för nordiskt liv.</span>
        </h1>
        <p className="text-base md:text-lg text-white/55 font-light mb-16 md:mb-20 max-w-xl mx-auto leading-[1.9] animate-fade-in-slow">
          Intelligenta odlingsmiljöer där teknologi, natur och design samverkar i harmoni.
        </p>
        <div className="flex flex-col items-center gap-8 animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-white text-black hover:bg-white/90 px-12 py-7 h-auto">
            <Link to="/smart-garden-analysis">Boka Smart Trädgårdsanalys</Link>
          </Button>
          <a
            href="#vision"
            className="text-xs tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors duration-500 font-light border-b border-white/20 hover:border-white/60 pb-1"
          >
            Utforska visionen
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in-slow">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>

    {/* CINEMATIC ALTERNATING SECTIONS */}
    {sections.map((s, i) => (
      <section key={s.title} className="relative py-28 md:py-40 px-6 md:px-12 bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <RevealSection delay={s.reverse ? 120 : 0}>
            <div className={`relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden ring-1 ring-white/10 ${s.reverse ? "md:order-2" : ""}`}>
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover img-tone scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </RevealSection>
          <RevealSection delay={s.reverse ? 0 : 120}>
            <div className={s.reverse ? "md:order-1" : ""}>
              <p className="eyebrow mb-5">{s.eyebrow}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.08] mb-8 tracking-[-0.02em]">
                {s.title}
              </h2>
              <p className="text-base md:text-lg text-white/60 font-light leading-[1.9] mb-10 max-w-lg">
                {s.desc}
              </p>
              {s.cta && (
                <Button asChild variant="outline" className="btn-premium border-white/20 text-white bg-white/[0.04] hover:bg-white/[0.12] hover:text-white px-8 py-6 h-auto backdrop-blur-md">
                  <Link to={s.cta.to} className="inline-flex items-center gap-3">
                    {s.cta.label} <ArrowRight size={14} />
                  </Link>
                </Button>
              )}
            </div>
          </RevealSection>
        </div>
      </section>
    ))}

    {/* VISION */}
    <section id="vision" className="relative py-32 md:py-44 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-6">Visionen</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.15] mb-8">
            Det här är bara början.
          </h2>
          <p className="text-base md:text-lg text-white/60 font-light leading-[1.9]">
            369 Future Village bygger steg för steg mot framtidens självförsörjande
            miljöer där natur, teknologi och mänskligt välmående samverkar.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* BRANDING / FINAL CTA */}
    <section className="relative py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionBranding} alt="" loading="lazy" className="w-full h-full object-cover img-tone" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />
      </div>
      <RevealSection>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6 text-white/70">Scandinavian Smart Living</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.08] mb-12 tracking-[-0.02em]">
            Framtidens nordiska
            <br />
            smart living brand
          </h2>
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 h-auto">
            <Link to="/kontakt" className="inline-flex items-center gap-3">
              Ansök om pilotprojekt <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </div>
);

export default Index;
