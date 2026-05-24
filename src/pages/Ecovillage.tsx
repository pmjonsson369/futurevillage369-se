import { Link } from "react-router-dom";
import ecoImg from "@/assets/ecovillage.jpg";
import brandingImg from "@/assets/section-branding.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const FutureLiving = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={ecoImg} alt="Future Living — nordisk livsstil i harmoni med natur" className="w-full h-full object-cover img-tone scale-105 animate-fade-in-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/95" />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <p className="text-[11px] font-light tracking-[0.5em] uppercase text-white/60 mb-10 animate-fade-in">Future Living</p>
        <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5rem] font-serif text-white mb-10 leading-[1.04] tracking-[-0.035em] max-w-4xl text-glow font-light animate-fade-in">
          Framtiden känns nära.
        </h1>
        <p className="text-base md:text-xl text-white/65 max-w-xl leading-[1.85] font-light animate-fade-in-slow">
          Framtidens nordiska livsstil — i harmoni med natur och teknologi.
        </p>
      </div>
    </section>

    {/* Vision */}
    <section className="py-32 md:py-44 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Visionen</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.15] mb-10 tracking-[-0.02em]">
            Miljöer där människa, natur och intelligent teknologi rör sig som ett.
          </h2>
          <p className="text-base md:text-lg text-white/55 font-light leading-[1.9]">
            Smarta trädgårdar. Intelligenta växthus. Regenerativa system.
            Steg för steg bygger vi grunden för framtida communities byggda på lugn, självförsörjning och nordisk design.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* Closing CTA */}
    <section className="relative py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={brandingImg} alt="" loading="lazy" className="w-full h-full object-cover img-tone" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />
      </div>
      <RevealSection>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-6 text-white/70">Pilot</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-12 tracking-[-0.02em]">
            Vill du vara med från början?
          </h2>
          <Button asChild size="lg" className="btn-premium bg-white/95 text-black hover:bg-white px-12 py-7 h-auto">
            <Link to="/kontakt" className="inline-flex items-center gap-3">
              Ansök om pilotprojekt <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </>
);

export default FutureLiving;
