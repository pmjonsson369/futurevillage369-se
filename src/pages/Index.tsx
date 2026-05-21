import { Link } from "react-router-dom";
import heroGreenhouse from "@/assets/hero-cinematic-greenhouse.jpg";
import greenhouseExperience from "@/assets/greenhouse-interior-cinematic.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Droplets,
  Activity,
  Snowflake,
  CloudRain,
  Leaf,
  Cpu,
  Thermometer,
  Sprout,
  Sun,
  Wind,
  Gauge,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";

const gardenFeatures = [
  {
    icon: Droplets,
    title: "Smart bevattning",
    desc: "Automatiserade flöden som anpassar sig efter väder, jord och årstid.",
  },
  {
    icon: Activity,
    title: "Sensorer & live-data",
    desc: "Mät fukt, temperatur och ljus i realtid – direkt i mobilen.",
  },
  {
    icon: Snowflake,
    title: "Året-runt odling",
    desc: "Förläng säsongen och odla även under nordiska vintrar.",
  },
  {
    icon: CloudRain,
    title: "Regnvatten & hållbara system",
    desc: "Slutna kretslopp för vatten och näring – inspirerade av naturen.",
  },
];

const services = [
  {
    icon: Leaf,
    title: "Smart trädgård",
    desc: "Smarta trädgårdar där teknologi och natur samverkar.",
  },
  {
    icon: Thermometer,
    title: "Smart växthus",
    desc: "Premium-växthus för året-runt odling i nordiskt klimat.",
  },
  {
    icon: Droplets,
    title: "Regenerativa system",
    desc: "Naturliga system för vatten, odling och hållbar balans.",
  },
  {
    icon: Sprout,
    title: "Trädgårdsanalys",
    desc: "Personlig analys för smartare och vackrare utemiljöer.",
  },
  {
    icon: Cpu,
    title: "Future Living",
    desc: "Framtidens nordiska livsstil i harmoni med natur och teknologi.",
  },
];

const handleGlassMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

// Premium hand-crafted phone mockup — no AI text, fully legible
const PhoneMockup = () => (
  <div className="relative mx-auto w-[280px] sm:w-[300px] md:w-[320px] aspect-[9/19] rounded-[2.8rem] bg-gradient-to-b from-neutral-900 to-black p-[10px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
    {/* Screen */}
    <div className="relative w-full h-full rounded-[2.3rem] bg-[#0a0d0c] overflow-hidden">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-3 text-[10px] text-white/70 font-medium">
        <span>09:41</span>
        <span className="flex gap-1 items-center">
          <span className="w-3 h-1.5 bg-white/70 rounded-[1px]" />
          <span className="w-4 h-2 border border-white/70 rounded-sm" />
        </span>
      </div>

      {/* App content */}
      <div className="px-5 pt-10 pb-5 h-full flex flex-col">
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Trädgården</p>
          <h4 className="text-white text-lg font-serif mt-1">Översikt</h4>
        </div>

        {/* Primary stat */}
        <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-4 mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Droplets size={14} strokeWidth={1.4} className="text-primary" />
              <span className="text-[11px] text-white/60">Jordfuktighet</span>
            </div>
            <span className="text-[10px] text-primary">Optimal</span>
          </div>
          <p className="text-white text-2xl font-light">68<span className="text-sm text-white/40">%</span></p>
          <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[68%] bg-primary rounded-full" />
          </div>
        </div>

        {/* Grid stats */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Thermometer size={11} strokeWidth={1.4} className="text-white/50" />
              <span className="text-[9px] text-white/50 uppercase tracking-wider">Temp</span>
            </div>
            <p className="text-white text-base font-light">21°<span className="text-[10px] text-white/40">C</span></p>
          </div>
          <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Wind size={11} strokeWidth={1.4} className="text-white/50" />
              <span className="text-[9px] text-white/50 uppercase tracking-wider">Luft</span>
            </div>
            <p className="text-white text-base font-light">54<span className="text-[10px] text-white/40">%</span></p>
          </div>
          <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Sun size={11} strokeWidth={1.4} className="text-white/50" />
              <span className="text-[9px] text-white/50 uppercase tracking-wider">Ljus</span>
            </div>
            <p className="text-white text-base font-light">6.4<span className="text-[10px] text-white/40">h</span></p>
          </div>
          <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Gauge size={11} strokeWidth={1.4} className="text-white/50" />
              <span className="text-[9px] text-white/50 uppercase tracking-wider">pH</span>
            </div>
            <p className="text-white text-base font-light">6.8</p>
          </div>
        </div>

        {/* Irrigation status */}
        <div className="rounded-2xl bg-primary/10 ring-1 ring-primary/30 p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <CloudRain size={14} strokeWidth={1.4} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] text-white font-medium">Bevattning aktiv</p>
            <p className="text-[9px] text-white/50">Zon 2 · 4 min kvar</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

const Index = () => (
  <div className="bg-dark text-dark-foreground">
    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={heroVideoAsset.url}
          poster={heroGreenhouse}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover img-tone"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-0 grain-overlay opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
        <p className="text-[10px] md:text-xs font-extralight tracking-[0.7em] uppercase text-white/60 mb-10 animate-fade-in">
          369&nbsp;&nbsp;Future&nbsp;&nbsp;Village
        </p>
        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] font-serif text-white leading-[0.95] mb-10 tracking-[-0.035em] animate-fade-in max-w-5xl mx-auto text-glow">
          Smarta trädgårdar
          <br />
          <span className="text-white/90">&amp; växthus</span>
        </h1>
        <p className="text-base md:text-lg text-white/60 font-light mb-14 max-w-md mx-auto leading-[1.9] animate-fade-in-slow">
          Intelligenta odlingsmiljöer där teknologi och natur samverkar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 h-auto">
            <Link to="/smart-garden-analysis">Boka trädgårdsanalys</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="btn-premium border-white/20 text-white bg-white/[0.04] hover:bg-white/[0.12] hover:text-white px-10 py-7 h-auto backdrop-blur-md">
            <Link to="/smart-garden">Utforska Smart Garden</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in-slow">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </div>
    </section>

    {/* SMART GARDEN FEATURES */}
    <section className="relative py-32 md:py-44 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="eyebrow mb-5">Smart Garden</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-foreground leading-[1.1] mb-6">
              Intelligens i varje droppe.
            </h2>
            <p className="text-base text-white/55 font-light leading-[1.9]">
              Fyra grundpelare som gör din trädgård smartare, vackrare och mer hållbar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {gardenFeatures.map((f, i) => (
              <RevealSection key={f.title} delay={i * 120}>
                <div onMouseMove={handleGlassMove} className="glass-card p-8 h-full group cursor-default">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                      <f.icon size={20} strokeWidth={1.2} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-serif text-white mb-3 tracking-tight">{f.title}</h3>
                    <p className="text-sm text-white/55 leading-[1.8] font-light">{f.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>

    {/* SMART GREENHOUSE EXPERIENCE */}
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img src={greenhouseExperience} alt="Interiör av modernt växthus i kvällsljus" loading="lazy" className="w-full h-full object-cover img-tone scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-black/70 to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <RevealSection>
          <p className="eyebrow mb-5">Smart Greenhouse</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-8">
            Framtidens nordiska växthusliv.
          </h2>
          <p className="text-base md:text-lg text-white/65 font-light leading-[1.9] mb-10 max-w-lg">
            Ett kontrollerat klimat, varm belysning och intelligenta sensorer.
            Styr allt direkt från mobilen – och odla året om.
          </p>
          <Button asChild variant="outline" className="btn-premium border-white/20 text-white bg-white/[0.04] hover:bg-white/[0.12] hover:text-white px-8 py-6 h-auto backdrop-blur-md">
            <Link to="/smart-greenhouse" className="inline-flex items-center gap-3">
              Läs mer <ArrowRight size={14} />
            </Link>
          </Button>
        </RevealSection>
        <RevealSection delay={150}>
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </RevealSection>
      </div>
    </section>

    {/* SERVICES */}
    <section className="relative py-32 md:py-44 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-20">
            <p className="eyebrow mb-5">Tjänster</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-foreground leading-[1.1]">
              Designat för det nordiska livet.
            </h2>
          </div>
        </RevealSection>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <RevealSection key={s.title} delay={i * 120}>
              <div onMouseMove={handleGlassMove} className="glass-card p-10 h-full group cursor-default">
                <div className="relative z-10 flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20">
                    <s.icon size={20} strokeWidth={1.2} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-sm text-white/55 leading-[1.9] font-light">{s.desc}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* VISION — short & subtle */}
    <section className="relative py-32 md:py-44 px-6 md:px-12 bg-dark">
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

    {/* FINAL CTA */}
    <section className="relative py-36 md:py-52 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroGreenhouse} alt="" loading="lazy" className="w-full h-full object-cover img-tone" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />
      </div>
      <RevealSection>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-12 tracking-[-0.02em]">
            Redo att skapa
            <br />
            framtidens trädgård?
          </h2>
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 h-auto">
            <Link to="/kontakt" className="inline-flex items-center gap-3">
              Kontakta oss <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </div>
);

export default Index;
