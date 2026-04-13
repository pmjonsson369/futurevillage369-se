import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Sprout, Cpu } from "lucide-react";

const systems = [
  {
    icon: Droplets,
    title: "Vattenhantering",
    desc: "Regnvatteninsamling, återvinning av gråvatten och smart distribution.",
  },
  {
    icon: Sprout,
    title: "Smart Garden",
    desc: "Automatiserad bevattning och övervakning för året-runt-odling.",
  },
  {
    icon: Cpu,
    title: "Automation",
    desc: "Sensorer, data och intelligent styrning — redo för framtiden.",
  },
];

const SmartVilla = () => (
  <>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6">Smart Villa</p>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
          Framtidens boende — börjar hemma
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Ett sammankopplat system där vatten, odling och teknik samverkar för att skapa en mer självbärande villa.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
          <a href="#system">Utforska systemet</a>
        </Button>
      </div>
    </section>

    {/* Vad det är */}
    <section className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Vad det är</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Ett integrerat system för hemmiljöer</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Smart Villa sammanför vattenhantering, matproduktion och automation i ett enda system — anpassat för skandinaviska förhållanden.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Istället för separata lösningar fungerar allt som en intelligent helhet.
        </p>
      </div>
    </section>

    {/* System som ingår */}
    <section id="system" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">System som ingår</p>
          <h2 className="text-3xl md:text-4xl font-serif">Tre system som arbetar tillsammans</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-8 border border-border text-center">
              <s.icon className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-serif mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Varför det är viktigt */}
    <section className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Varför det är viktigt</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Mindre beroende. Mer kontroll.</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          En självbärande villa minskar beroendet av externa system — och ger dig mer kontroll över vatten, mat och resurser.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          På sikt minskar systemen kostnader, avfall och skapar ett hem som arbetar med naturen.
        </p>
      </div>
    </section>

    {/* Framtidsvision */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Framtidsvision</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Designad för att växa</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Smart Villa är byggd för att expandera med energisystem, klimatanpassning och mer automation.
        </p>
      </div>
    </section>
  </>
);

export default SmartVilla;
