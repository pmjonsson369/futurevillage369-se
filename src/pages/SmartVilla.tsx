import { Link } from "react-router-dom";
import villaImg from "@/assets/smart-villa.jpg";
import { Button } from "@/components/ui/button";
import { Droplets, Sprout, Settings } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const systems = [
  {
    title: "Vattenhantering",
    desc: "Insamling av regnvatten, återanvändning av gråvatten och smart distribution",
    icon: Droplets,
  },
  {
    title: "Smart trädgård",
    desc: "Automatiserad bevattning och övervakning",
    icon: Sprout,
  },
  {
    title: "Automation",
    desc: "Sensorer och smart styrning som anpassar systemet över tid",
    icon: Settings,
  },
];

const SmartVilla = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={villaImg} alt="Smart Villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-xs font-light tracking-[0.35em] uppercase text-white/60 mb-6">Smart Villa</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
          Framtidens boende börjar hemma
        </h1>
        <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
          Ett system där vatten, odling och teknik samverkar
          <br className="hidden md:block" />
          för att skapa ett mer självförsörjande hem.
        </p>
      </div>
    </section>

    {/* Vad det är */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Vad det är</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Ett integrerat system för hemmet</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Smart Villa samlar vattenhantering, matproduktion och teknik i en helhet –
            <br className="hidden md:block" />
            anpassad för nordiska förhållanden.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Istället för separata lösningar får du ett system
            <br className="hidden md:block" />
            där allt fungerar tillsammans.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* System som ingår */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">System som ingår</p>
            <h2 className="text-3xl md:text-4xl font-serif">Tre delar som samverkar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {systems.map((s, i) => (
              <RevealSection key={s.title} delay={i * 120}>
                <div className="text-center group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <s.icon size={24} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif mb-4">{s.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-light">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Varför det är viktigt */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Varför det är viktigt</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Mindre beroende. Mer kontroll.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Ett mer självförsörjande hem minskar beroendet av externa system
            <br className="hidden md:block" />
            och ger dig bättre kontroll över vatten, mat och resurser.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            På sikt innebär det lägre kostnader, mindre slöseri
            <br className="hidden md:block" />
            och ett hem som samspelar med naturen.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* Framtid */}
    <section className="py-28 md:py-36 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Framtid</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-dark-foreground leading-tight">Byggt för att utvecklas över tid</h2>
          <p className="text-lg text-dark-muted leading-relaxed mb-14 font-light">
            Systemet kan byggas ut med energilösningar,
            <br className="hidden md:block" />
            klimatanpassning och mer avancerad automation.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartVilla;
