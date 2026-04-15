import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import introImg from "@/assets/intro.jpg";
import gardenImg from "@/assets/smart-garden.jpg";
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
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skandinaviskt hus med genomtänkt trädgård" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <p className="text-sm font-light tracking-[0.35em] uppercase text-white/60 mb-8">
          369 Future Village
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8">
          Smarta system för självförsörjande hem och ekobyar
        </h1>
        <p className="text-lg md:text-xl text-white/75 font-light mb-14 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Vi börjar med vatten, odling och automation –
          <br className="hidden md:block" />
          och skapar grunden för ett sätt att leva
          <br className="hidden md:block" />
          där natur och teknik samspelar.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
            <Link to="/smart-garden">Utforska Smart trädgård</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 text-base px-10 py-7 rounded-full transition-all duration-300">
            <Link to="/ecovillage">Utforska ekobyar</Link>
          </Button>
        </div>
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

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20">
            {systemParts.map((part, i) => (
              <RevealSection key={part.title} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <part.icon size={24} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-serif mb-4">{part.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{part.desc}</p>
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
          <div className="grid md:grid-cols-3 gap-10">
            {startHere.map((s, i) => (
              <RevealSection key={s.title} delay={i * 150}>
                <Link
                  to={s.link}
                  className="group rounded-2xl overflow-hidden bg-background border border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
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
