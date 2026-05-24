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
    eyebrow: "Smart trädgård",
    title: "Smarta trädgårdar där teknologi och natur samverkar.",
    desc: "Sensorer, intelligent bevattning och varm kvällsbelysning — en trädgård som lever av sig själv och växer i harmoni med dig.",
    image: sectionSprinklers,
    alt: "Premium smart trädgård i kvällsljus med integrerad belysning",
    cta: { label: "Utforska Smart trädgård", to: "/smart-garden" },
  },
  {
    eyebrow: "Smart växthus",
    title: "Premium-växthus för året-runt odling i nordiskt klimat.",
    desc: "Intelligent klimatkontroll, varm belysning och naturlig arkitektur. Vinter utanför — varmt, levande och grönt inne.",
    image: sectionGreenhouse,
    alt: "Modernt svart växthus i nordisk skog vid skymning",
    cta: { label: "Upptäck Smart växthus", to: "/smart-greenhouse" },
    reverse: true,
  },
  {
    eyebrow: "Regenerativa system",
    title: "Naturliga system för vatten, odling och hållbar balans.",
    desc: "Regnvatteninsamling, friska jordar och slutna kretslopp. Tysta, vackra system som arbetar med naturen — inte mot den.",
    image: sectionRainwater,
    alt: "Minimalistiskt svart regnvattensystem i nordisk trädgård",
    cta: { label: "Upptäck mer", to: "/smart-growing-systems" },
  },
  {
    eyebrow: "Trädgårdsanalys",
    title: "Personlig analys för smartare och vackrare utemiljöer.",
    desc: "En exklusiv designupplevelse. Vi kartlägger din trädgårds potential och översätter den till en konkret plan — från första moodboard till färdig miljö.",
    image: sectionGardenBeds,
    alt: "Premium svarta odlingsbäddar med integrerad belysning",
    cta: { label: "Boka analys", to: "/smart-garden-analysis" },
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/90" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white leading-[1.02] mb-8 md:mb-10 tracking-[-0.035em] animate-fade-in max-w-4xl text-glow font-light">
          Smarta trädgårdar för framtidens nordiska livsstil.
        </h1>
        <p className="text-base md:text-xl text-white/70 font-light mb-12 md:mb-14 max-w-xl leading-[1.8] animate-fade-in-slow">
          Intelligenta växthus, hållbar design och smarta odlingsmiljöer i harmoni med naturen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-white/95 text-black hover:bg-white px-10 py-7 h-auto">
            <Link to="/smart-garden-analysis">Boka trädgårdsanalys</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="btn-premium border-white/30 text-white bg-white/[0.06] hover:bg-white/[0.14] hover:text-white px-10 py-7 h-auto backdrop-blur-md">
            <Link to="/smart-garden">Utforska Smart trädgård</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CINEMATIC ALTERNATING SECTIONS */}
    {sections.map((s) => (
      <section key={s.title} className="relative py-24 md:py-40 px-6 md:px-12 bg-dark overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.08] mb-8 tracking-[-0.02em]">
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

    {/* VISION — FUTURE LIVING */}
    <section id="vision" className="relative py-32 md:py-44 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-6">Future Living</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.15] mb-8 tracking-[-0.02em]">
            Framtidens nordiska livsstil i harmoni med natur och teknologi.
          </h2>
          <p className="text-base md:text-lg text-white/55 font-light leading-[1.9] mb-10">
            Det här är bara början. Steg för steg bygger vi miljöer där människa, natur och intelligent teknologi rör sig som ett.
          </p>
          <Button asChild variant="outline" className="btn-premium border-white/20 text-white bg-white/[0.04] hover:bg-white/[0.12] hover:text-white px-8 py-6 h-auto backdrop-blur-md">
            <Link to="/ecovillage" className="inline-flex items-center gap-3">
              Se visionen <ArrowRight size={14} />
            </Link>
          </Button>
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
          <Button asChild size="lg" className="btn-premium bg-white/95 text-black hover:bg-white px-12 py-7 h-auto">
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
