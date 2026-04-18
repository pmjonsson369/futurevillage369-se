import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import introImg from "@/assets/intro.jpg";
import gardenAerial from "@/assets/garden-aerial.jpg";
import villaImg from "@/assets/smart-villa.jpg";
import ecoImg from "@/assets/ecovillage.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Leaf, Sun, Wifi } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const whatWeDo = [
  {
    title: "Smarta odlingssystem",
    desc: "Automatiserad bevattning och övervakning för enkel och hållbar matproduktion.",
  },
  {
    title: "Kartläggning av vattenflöden",
    desc: "Vi analyserar och förbättrar hur vatten rör sig i hem och områden.",
  },
  {
    title: "Design av sammanhängande system",
    desc: "Vi utvecklar lösningar där resurser används smart och fungerar tillsammans som en helhet.",
  },
];

const systemParts = [
  {
    title: "Vatten",
    desc: "System för att samla in, rena och återanvända vatten",
    icon: Droplets,
  },
  {
    title: "Odling",
    desc: "Matskogar och moderna odlingssystem",
    icon: Leaf,
  },
  {
    title: "Energi",
    desc: "Sol, vind och energilagring integrerat i boendet",
    icon: Sun,
  },
  {
    title: "Smarta system",
    desc: "Sensorer, data och uppkopplad styrning i realtid",
    icon: Wifi,
  },
];

const startHere = [
  {
    title: "Smart Villa",
    desc: "Ett sammanhängande system för hemmet där vatten, odling och teknik samverkar",
    link: "/smart-villa",
    cta: "Utforska",
    img: villaImg,
  },
  {
    title: "Smarta odlingssystem",
    desc: "Från trädgård till växthus – smart och automatiserad odling",
    link: "/smart-growing-systems",
    cta: "Läs mer",
    img: gardenImg,
  },
  {
    title: "Ekobyar",
    desc: "Pilotprojekt där vi kartlägger och utvecklar system i mindre samhällen",
    link: "/ecovillage",
    cta: "Läs mer",
    img: ecoImg,
  },
];

const Index = () => (
  <>
    {/* Hero – dark cinematic */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skandinaviskt hus med genomtänkt trädgård" className="w-full h-full object-cover scale-110 animate-fade-in-slow" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-40">
        <p className="text-[11px] md:text-xs font-light tracking-[0.5em] uppercase text-white/55 mb-16 animate-fade-in">
          369 Future Village
        </p>
        <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif text-white leading-[0.92] mb-16 tracking-[-0.02em] animate-fade-in">
          Smarta system för självförsörjande hem och ekobyar
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-light mb-20 max-w-2xl mx-auto leading-[2] tracking-wide animate-fade-in-slow">
          Vi börjar med vatten, odling och automation –
          <br className="hidden md:block" />
          och skapar grunden för ett sätt att leva
          <br className="hidden md:block" />
          där natur och teknik samspelar.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-slow">
          <Button asChild size="lg" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 text-base px-14 py-8 h-auto">
            <Link to="/smart-garden">Utforska Smart trädgård</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="btn-premium border-white/25 text-white bg-white/5 hover:bg-white/15 hover:text-white text-base px-14 py-8 h-auto backdrop-blur-md">
            <Link to="/ecovillage">Utforska ekobyar</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in-slow">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>

    {/* Vad vi gör */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img src={introImg} alt="Lugn trädgårdsmiljö" loading="lazy" className="w-full h-80 md:h-[32rem] object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Vad vi gör</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">Det vi utvecklar just nu</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-light">
              Vi utvecklar och testar enkla lösningar som hjälper hem och ekobyar att bli mer självförsörjande –
              <br className="hidden md:block" />
              med system som går att bygga ut över tid.
            </p>
            <div className="space-y-10">
              {whatWeDo.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Visionen – dark section */}
    <section className="py-28 md:py-36 lg:py-44 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Visionen</p>
          <p className="text-2xl md:text-3xl text-dark-foreground font-serif leading-relaxed">
            En framtid där hem producerar sin egen mat,
            <br className="hidden md:block" />
            hanterar sitt eget vatten och drivs av smarta system –
            <br className="hidden md:block" />
            som en naturlig del av vardagen.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* Systemet */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Systemet</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
              Vi designar system för vatten, odling, energi och övervakning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4 font-light">
              som fungerar både var för sig och tillsammans.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              Målet är att skapa en helhet där allt hänger ihop –
              <br className="hidden md:block" />
              enkelt, effektivt och i balans med naturen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-16 md:gap-20 mt-32">
            {systemParts.map((part, i) => (
              <RevealSection key={part.title} delay={i * 120}>
                <div className="text-center group">
                  <div className="icon-orb mb-10">
                    <part.icon size={32} className="text-primary" strokeWidth={1.1} />
                  </div>
                  <h3 className="text-lg font-serif mb-5 tracking-tight">{part.title}</h3>
                  <p className="text-sm text-muted-foreground leading-[1.9] font-light">{part.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Starta här */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Starta här</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Var börjar du?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {startHere.map((s, i) => (
              <RevealSection key={s.title} delay={i * 150}>
                <Link
                  to={s.link}
                  className="group block rounded-3xl overflow-hidden bg-background border border-border/60 transition-all duration-700 ease-out hover:shadow-[0_30px_80px_-30px_hsl(var(--foreground)/0.25)] hover:-translate-y-2 hover:border-primary/30"
                >
                  <div className="overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-72 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-xl font-serif mb-5 tracking-tight group-hover:text-primary transition-colors duration-500">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-[1.9] mb-8 font-light">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-500 group-hover:gap-4">
                      {s.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default Index;
