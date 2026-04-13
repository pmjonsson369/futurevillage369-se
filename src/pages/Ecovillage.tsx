import { MapPin, Sprout, Radio, Eye } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Kartlägga vattenflöden" },
  { icon: Sprout, title: "Koppla ihop odlingsytor" },
  { icon: Radio, title: "Installera sensorer" },
  { icon: Eye, title: "Följa upp och analysera" },
];

const Ecovillage = () => (
  <>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6">Ekobyar</p>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
          Smarta system för ekobyar
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Vi hjälper ekobyar att förstå, förbättra och utveckla sina system – steg för steg.
        </p>
      </div>
    </section>

    {/* Arbetssätt */}
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Arbetssätt</p>
          <h2 className="text-3xl md:text-4xl font-serif">Börja smått. Lär över tid.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary" size={22} />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Steg {i + 1}</p>
              <h3 className="text-lg font-serif">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Ecovillage;