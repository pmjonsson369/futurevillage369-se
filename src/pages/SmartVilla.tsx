import { Link } from "react-router-dom";
import villaImg from "@/assets/smart-villa.jpg";
import { Button } from "@/components/ui/button";

const systems = [
  {
    title: "Vattenhantering",
    desc: "Insamling av regnvatten, återanvändning av gråvatten och smart distribution",
  },
  {
    title: "Smart trädgård",
    desc: "Automatiserad bevattning och övervakning",
  },
  {
    title: "Automation",
    desc: "Sensorer och smart styrning som anpassar systemet över tid",
  },
];

const SmartVilla = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={villaImg} alt="Smart Villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Smart Villa</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
          Framtidens boende börjar hemma
        </h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Ett system där vatten, odling och teknik samverkar
          <br className="hidden md:block" />
          för att skapa ett mer självförsörjande hem.
        </p>
      </div>
    </section>

    {/* Vad det är */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Vad det är</p>
        <h2 className="text-3xl font-serif mb-6">Ett integrerat system för hemmet</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Smart Villa samlar vattenhantering, matproduktion och teknik i en helhet –
          <br className="hidden md:block" />
          anpassad för nordiska förhållanden.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Istället för separata lösningar får du ett system
          <br className="hidden md:block" />
          där allt fungerar tillsammans.
        </p>
      </div>
    </section>

    {/* System som ingår */}
    <section className="section-padding bg-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">System som ingår</p>
          <h2 className="text-3xl font-serif">Tre delar som samverkar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((s) => (
            <div key={s.title} className="text-center">
              <h3 className="text-lg font-serif mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Varför det är viktigt */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Varför det är viktigt</p>
        <h2 className="text-3xl font-serif mb-6">Mindre beroende. Mer kontroll.</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Ett mer självförsörjande hem minskar beroendet av externa system
          <br className="hidden md:block" />
          och ger dig bättre kontroll över vatten, mat och resurser.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          På sikt innebär det lägre kostnader, mindre slöseri
          <br className="hidden md:block" />
          och ett hem som samspelar med naturen.
        </p>
      </div>
    </section>

    {/* Framtid */}
    <section className="section-padding bg-warm">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Framtid</p>
        <h2 className="text-3xl font-serif mb-6">Byggt för att utvecklas över tid</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Systemet kan byggas ut med energilösningar,
          <br className="hidden md:block" />
          klimatanpassning och mer avancerad automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default SmartVilla;
