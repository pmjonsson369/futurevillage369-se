import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-winter-greenhouse.jpg";
import showcaseImg from "@/assets/showcase-app.jpg";
import ctaImg from "@/assets/cta-greenhouse-night.jpg";
import greenhouseImg from "@/assets/smart-greenhouse-hero.jpg";
import gardenImg from "@/assets/smart-garden.jpg";
import ecoImg from "@/assets/ecovillage.jpg";
import analysisImg from "@/assets/analysis.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Sprout, Droplets, Activity, Leaf, ThermometerSun, Recycle } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const features = [
  {
    icon: Cpu,
    title: "Smart Garden",
    desc: "Sensors, automation and live environmental data directly in your phone.",
  },
  {
    icon: ThermometerSun,
    title: "Smart Greenhouse",
    desc: "Future-ready greenhouses designed for Nordic climate and year-round growing.",
  },
  {
    icon: Recycle,
    title: "Regenerative Systems",
    desc: "Water, soil, food and sustainable design working together naturally.",
  },
];

const services = [
  {
    icon: Activity,
    title: "Garden Analysis",
    desc: "A personalized analysis with ideas for design, planting, water flow and future improvements.",
    img: analysisImg,
  },
  {
    icon: Sprout,
    title: "Smart Garden System",
    desc: "Automated irrigation, environmental sensors and smart monitoring.",
    img: gardenImg,
  },
  {
    icon: ThermometerSun,
    title: "Smart Greenhouse",
    desc: "Controlled climate systems for longer growing seasons and winter cultivation.",
    img: greenhouseImg,
  },
  {
    icon: Droplets,
    title: "Regenerative Design",
    desc: "Rainwater harvesting, growing beds, natural systems and sustainable planning.",
    img: ecoImg,
  },
];

const Index = () => (
  <div className="bg-dark text-dark-foreground">
    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Scandinavian smart greenhouse glowing in winter dusk"
          className="w-full h-full object-cover scale-105 animate-fade-in-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-32">
        <p className="text-[11px] md:text-xs font-light tracking-[0.6em] uppercase text-white/70 mb-12 animate-fade-in">
          369&nbsp;&nbsp;Future&nbsp;&nbsp;Village
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] mb-10 tracking-[-0.02em] animate-fade-in">
          Smart Gardens & Greenhouses
          <br className="hidden md:block" />
          for Nordic Living
        </h1>
        <p className="text-base md:text-lg text-white/70 font-light mb-14 max-w-2xl mx-auto leading-[1.9] animate-fade-in-slow">
          We design intelligent growing environments where technology,
          <br className="hidden md:block" />
          water and nature work together in harmony.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 py-7 h-auto">
            <Link to="/smart-garden-analysis">Book Garden Analysis</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="btn-premium border-white/25 text-white bg-white/5 hover:bg-white/15 hover:text-white text-base px-12 py-7 h-auto backdrop-blur-md">
            <Link to="/smart-garden">Explore Smart Garden</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>

    {/* FEATURE GLASS CARDS */}
    <section className="relative section-padding-sm bg-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />
      <RevealSection>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <RevealSection key={f.title} delay={i * 120}>
                <div className="glass-card p-10 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary/25 group-hover:ring-primary/50">
                    <f.icon size={24} className="text-primary" strokeWidth={1.4} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-[1.9] font-light">{f.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* VISUAL SHOWCASE */}
    <section className="section-padding bg-dark relative overflow-hidden">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-primary mb-6">Living systems</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-[1.05] tracking-tight">
              Grow smarter.
              <br />
              Live closer to nature.
            </h2>
            <p className="text-lg text-white/65 leading-[1.9] font-light max-w-lg">
              369 Future Village creates modern solutions for people who want beautiful outdoor spaces,
              intelligent growing systems and a more sustainable lifestyle.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src={showcaseImg} alt="Smart garden mobile interface floating above plants" loading="lazy" className="w-full h-[32rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-5 hidden sm:flex items-center gap-3">
              <Droplets size={18} className="text-primary" strokeWidth={1.4} />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Soil moisture</p>
                <p className="text-sm text-white font-light">62% · Optimal</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-5 hidden sm:flex items-center gap-3">
              <ThermometerSun size={18} className="text-primary" strokeWidth={1.4} />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Climate</p>
                <p className="text-sm text-white font-light">21°C · Stable</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* SERVICES */}
    <section className="section-padding-sm bg-dark relative">
      <RevealSection>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-primary mb-6">Services</p>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">A complete approach</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <RevealSection key={s.title} delay={i * 100}>
                <div className="glass-card overflow-hidden group h-full">
                  <div className="overflow-hidden h-64">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover img-tone transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 ring-1 ring-primary/25 flex items-center justify-center">
                        <s.icon size={18} className="text-primary" strokeWidth={1.4} />
                      </div>
                      <h3 className="text-xl font-serif text-white tracking-tight">{s.title}</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-[1.9] font-light">{s.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* VISION */}
    <section className="relative py-40 md:py-56 px-6 overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.15),transparent_40%)]" />
      </div>
      <RevealSection>
        <div className="relative max-w-3xl mx-auto text-center">
          <Leaf size={28} className="text-primary mx-auto mb-10" strokeWidth={1.1} />
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-primary mb-8">The vision</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12 leading-[1.1] tracking-tight">
            This is only the beginning.
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-[1.9]">
            369 Future Village is gradually building toward future self-sustaining environments
            where homes, gardens, water, energy and food systems function as one living ecosystem.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* FINAL CTA */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaImg} alt="Luxury greenhouse glowing at night with subtle fog" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>
      <RevealSection>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12 leading-[1.05] tracking-tight">
            Ready to create
            <br />
            your future garden?
          </h2>
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-14 py-8 h-auto">
            <Link to="/kontakt">
              Contact Us <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </div>
);

export default Index;
