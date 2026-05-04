import { Link } from "react-router-dom";
import gardenImg from "@/assets/garden-aerial.jpg";
import greenhouseImg from "@/assets/smart-greenhouse.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const SmartGrowingSystems = () => (
  <>
    {/* Hero */}
    <section className="relative py-56 md:py-72 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto text-center px-6">
        <p className="text-xs md:text-sm font-extralight tracking-[0.6em] uppercase text-white/80 mb-14 animate-fade-in">Smarta odlingssystem</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-dark-foreground mb-14 leading-[1.02] tracking-[-0.02em] animate-fade-in">
          Från trädgård till växthus – odla smartare
        </h1>
        <p className="text-base md:text-lg text-dark-muted leading-[2] max-w-2xl mx-auto font-light animate-fade-in-slow">
          Ett system som börjar enkelt
          <br className="hidden md:block" />
          och kan utvecklas till odling året runt.
        </p>
      </div>
    </section>

    {/* Trädgårdsanalys */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Trädgårdsanalys</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
            Börja med en personlig genomgång av din trädgård –
            <br className="hidden md:block" />
            vi tittar på struktur, vattenflöde och möjligheter.
          </p>
          <Button asChild className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 h-auto">
            <Link to="/smart-garden-analysis" className="inline-flex items-center gap-2">
              Läs mer <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </RevealSection>
    </section>

    {/* Smart trädgård */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img src={gardenImg} alt="Smart trädgård" loading="lazy" className="w-full h-72 md:h-[28rem] object-cover img-tone transition-transform duration-700 hover:scale-105" />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Smart trädgård</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Ett enklare sätt att odla</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Här samverkar natur och teknik.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light">
              Smart trädgård är ett automatiserat system för dig som vill ha en vacker och fungerande trädgård
              <br className="hidden md:block" />
              utan att behöva lägga mycket tid på skötsel.
            </p>

            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Hur det fungerar</p>
            <p className="text-sm text-muted-foreground mb-6 font-light">Teknik som arbetar i bakgrunden</p>
            <div className="space-y-5 mb-12">
              <div>
                <h4 className="text-base font-medium text-foreground mb-1">Automatisk bevattning</h4>
                <p className="text-sm text-muted-foreground font-light">Sensorer känner av när växterna behöver vatten</p>
              </div>
              <div>
                <h4 className="text-base font-medium text-foreground mb-1">Appstyrning</h4>
                <p className="text-sm text-muted-foreground font-light">Du kan följa och justera systemet var du än är</p>
              </div>
              <div>
                <h4 className="text-base font-medium text-foreground mb-1">Diskret installation</h4>
                <p className="text-sm text-muted-foreground font-light">All teknik är integrerad och knappt synlig</p>
              </div>
            </div>

            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Fördelar</p>
            <p className="text-sm text-muted-foreground mb-6 font-light">Mindre arbete. Bättre resultat.</p>
            <ul className="space-y-3 mb-12">
              {["Sparar tid", "Fungerar när du är bortrest", "Starkare och friskare växter", "Ren och modern design", "Möjligt att bygga ut över tid", "Mer harmoni mellan natur och teknik"].map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground text-sm font-light">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Vision</p>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Ett första steg mot något större.
              <br />
              Systemet kan utvecklas vidare till växthus, vattenlösningar och helt integrerade miljöer.
            </p>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Smart växthus */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="md:order-2 rounded-2xl overflow-hidden">
            <img src={greenhouseImg} alt="Smart växthus med smart odling och display" loading="lazy" className="w-full h-72 md:h-[28rem] object-cover img-tone transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="md:order-1">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Smart växthus</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Odla året runt – oavsett säsong</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light">
              Ett växthus med klimatkontroll,
              <br className="hidden md:block" />
              automatiserad bevattning och smart övervakning.
            </p>

            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Funktioner</p>
            <ul className="space-y-3 mb-12">
              {["Automatisk temperatur- och fuktstyrning", "Odling året runt", "Smart bevattning", "Sensorbaserad övervakning"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground text-sm font-light">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">Utveckling</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-light">
              <span>Smart trädgård</span>
              <ArrowRight size={14} className="text-primary" />
              <span>Smart växthus</span>
              <ArrowRight size={14} className="text-primary" />
              <span>Fullt integrerat system</span>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* CTA */}
    <section className="py-28 md:py-36 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
              <Link to="/smart-garden-analysis">Boka Trädgårdsanalys</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 text-base px-10 py-7 rounded-full transition-all duration-300">
              <Link to="/kontakt">Kontakta mig</Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default SmartGrowingSystems;
