import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import introImg from "@/assets/intro.jpg";
import gardenImg from "@/assets/smart-garden.jpg";
import villaImg from "@/assets/smart-villa.jpg";
import ecoImg from "@/assets/ecovillage.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  },
  {
    title: "Odling",
    desc: "Matskogar och moderna odlingssystem",
  },
  {
    title: "Energi",
    desc: "Sol, vind och energilagring integrerat i boendet",
  },
  {
    title: "Smarta system",
    desc: "Sensorer, data och uppkopplad styrning i realtid",
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
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skandinaviskt hus med genomtänkt trädgård" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/45" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-6">
          369 Future Village
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-6">
          Smarta system för självförsörjande hem och ekobyar
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Vi börjar med vatten, odling och automation –
          <br className="hidden md:block" />
          och skapar grunden för ett sätt att leva
          <br className="hidden md:block" />
          där natur och teknik samspelar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-garden">Utforska Smart trädgård</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/50 text-foreground hover:bg-white/10 text-base px-8 py-6 rounded-lg">
            <Link to="/ecovillage">Utforska ekobyar</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Vad vi gör */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="rounded-xl overflow-hidden">
          <img src={introImg} alt="Lugn trädgårdsmiljö" loading="lazy" className="w-full h-80 md:h-[28rem] object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Vad vi gör</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Det vi utvecklar just nu</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Vi utvecklar och testar enkla lösningar som hjälper hem och ekobyar att bli mer självförsörjande –
            <br className="hidden md:block" />
            med system som går att bygga ut över tid.
          </p>
          <div className="space-y-8">
            {whatWeDo.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Visionen */}
    <section className="section-padding bg-warm">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Visionen</p>
        <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed">
          En framtid där hem producerar sin egen mat,
          <br className="hidden md:block" />
          hanterar sitt eget vatten och drivs av smarta system –
          <br className="hidden md:block" />
          som en naturlig del av vardagen.
        </p>
      </div>
    </section>

    {/* Systemet */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Systemet</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Vi designar system för vatten, odling, energi och övervakning
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            som fungerar både var för sig och tillsammans.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Målet är att skapa en helhet där allt hänger ihop –
            <br className="hidden md:block" />
            enkelt, effektivt och i balans med naturen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {systemParts.map((part) => (
            <div key={part.title} className="text-center">
              <h3 className="text-lg font-serif mb-3">{part.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{part.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Starta här */}
    <section className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Starta här</p>
          <h2 className="text-3xl md:text-4xl font-serif">Var börjar du?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {startHere.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="group rounded-xl overflow-hidden bg-background border border-border transition-all hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {s.cta} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;
