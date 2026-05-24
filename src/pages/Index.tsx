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
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
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
        {/* Subtle cinematic dark gradient — focus on video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/90" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white leading-[1.02] mb-8 md:mb-10 tracking-[-0.035em] animate-fade-in max-w-4xl text-glow font-light">
          Framtidens smarta trädgårdar för nordiskt liv.
        </h1>
        <p className="text-base md:text-xl text-white/65 font-light mb-12 md:mb-14 max-w-xl leading-[1.8] animate-fade-in-slow">
          Där teknologi, natur och design samverkar i harmoni.
        </p>
        <div className="animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-white/95 text-black hover:bg-white px-10 py-7 h-auto">
            <Link to="/smart-garden-analysis">Boka Smart Trädgårdsanalys</Link>
          </Button>
        </div>
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
