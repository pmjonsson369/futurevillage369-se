import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sprout, Sun, Cpu } from "lucide-react";

const systems = [
  {
    icon: Droplets,
    title: "Vatten",
    desc: "System för att samla in, rena och återanvända vatten",
  },
  {
    icon: Sprout,
    title: "Odling",
    desc: "Matskogar och moderna odlingssystem",
  },
  {
    icon: Sun,
    title: "Energi",
    desc: "Sol, vind och energilagring integrerat i boendet",
  },
  {
    icon: Cpu,
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
  },
  {
    title: "Smarta odlingssystem",
    desc: "Från trädgård till växthus – smart och automatiserad odling",
    link: "/smart-growing-systems",
    cta: "Läs mer",
  },
  {
    title: "Ekobyar",
    desc: "Pilotprojekt där vi kartlägger och utvecklar system i mindre samhällen",
    link: "/ekobyar",
    cta: "Läs mer",
  },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="min-h-[90vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
          Smarta system för självförsörjande hem och ekobyar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Vi börjar med vatten, odling och automation – och skapar grunden för ett sätt att leva där natur och teknik samspelar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-growing-systems">Utforska Smart trädgård</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-accent text-base px-8 py-6 rounded-lg">
            <Link to="/ekobyar">Utforska ekobyar</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Vad vi gör */}
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Vad vi gör</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Det vi utvecklar just nu</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
          Vi utvecklar och testar enkla lösningar som hjälper hem och ekobyar att bli mer självförsörjande – med system som går att bygga ut över tid.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent/50 rounded-xl p-8 border border-border">
            <Sprout className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-serif mb-3">Smarta odlingssystem</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automatiserad bevattning och övervakning för enkel och hållbar matproduktion.
            </p>
          </div>
          <div className="bg-accent/50 rounded-xl p-8 border border-border">
            <Droplets className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-serif mb-3">Kartläggning av vattenflöden</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vi analyserar och förbättrar hur vatten rör sig i hem och områden.
            </p>
          </div>
          <div className="bg-accent/50 rounded-xl p-8 border border-border">
            <Cpu className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-serif mb-3">Design av sammanhängande system</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vi utvecklar lösningar där resurser används smart och fungerar tillsammans som en helhet.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Visionen */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Visionen</p>
        <h2 className="text-3xl md:text-4xl font-serif leading-snug">
          En framtid där hem producerar sin egen mat, hanterar sitt eget vatten och drivs av smarta system – som en naturlig del av vardagen.
        </h2>
      </div>
    </section>

    {/* Systemet */}
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Systemet</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Sammankopplade system</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Vi designar system för vatten, odling, energi och övervakning som fungerar både var för sig och tillsammans.
            Målet är att skapa en helhet där allt hänger ihop – enkelt, effektivt och i balans med naturen.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border text-center">
              <s.icon className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-serif mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Starta här */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Starta här</p>
          <h2 className="text-3xl md:text-4xl font-serif">Var börjar du?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {startHere.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all"
            >
              <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                {s.cta} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;