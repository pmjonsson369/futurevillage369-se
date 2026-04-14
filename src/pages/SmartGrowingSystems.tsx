import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import analysisImg from "@/assets/analysis.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SmartGrowingSystems = () => (
  <>
    {/* Hero */}
    <section className="relative py-24 md:py-32 bg-warm">
      <div className="max-w-4xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Smarta odlingssystem</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Från trädgård till växthus – odla smartare
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Ett system som börjar enkelt
          <br className="hidden md:block" />
          och kan utvecklas till odling året runt.
        </p>
      </div>
    </section>

    {/* Trädgårdsanalys */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Trädgårdsanalys</p>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Börja med en personlig genomgång av din trädgård –
          <br className="hidden md:block" />
          vi tittar på struktur, vattenflöde och möjligheter.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/smart-garden-analysis" className="inline-flex items-center gap-2">
            Läs mer <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>

    {/* Smart trädgård */}
    <section className="section-padding bg-warm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="rounded-xl overflow-hidden">
          <img src={gardenImg} alt="Smart trädgård" loading="lazy" className="w-full h-72 md:h-96 object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Smart trädgård</p>
          <h2 className="text-3xl font-serif mb-4">Ett enklare sätt att odla</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Här samverkar natur och teknik.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Smart trädgård är ett automatiserat system för dig som vill ha en vacker och fungerande trädgård
            <br className="hidden md:block" />
            utan att behöva lägga mycket tid på skötsel.
          </p>

          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Hur det fungerar</p>
          <p className="text-xs text-muted-foreground mb-4">Teknik som arbetar i bakgrunden</p>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-base font-medium text-foreground mb-1">Automatisk bevattning</h4>
              <p className="text-sm text-muted-foreground">Sensorer känner av när växterna behöver vatten</p>
            </div>
            <div>
              <h4 className="text-base font-medium text-foreground mb-1">Appstyrning</h4>
              <p className="text-sm text-muted-foreground">Du kan följa och justera systemet var du än är</p>
            </div>
            <div>
              <h4 className="text-base font-medium text-foreground mb-1">Diskret installation</h4>
              <p className="text-sm text-muted-foreground">All teknik är integrerad och knappt synlig</p>
            </div>
          </div>

          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Fördelar</p>
          <p className="text-xs text-muted-foreground mb-4">Mindre arbete. Bättre resultat.</p>
          <ul className="space-y-2 mb-8">
            {["Sparar tid", "Fungerar när du är bortrest", "Starkare och friskare växter", "Ren och modern design", "Möjligt att bygga ut över tid"].map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Vision</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Ett första steg mot något större.
            <br />
            Systemet kan utvecklas vidare till växthus, vattenlösningar och helt integrerade miljöer.
          </p>
        </div>
      </div>
    </section>

    {/* Smart växthus */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center md:[&>*:first-child]:order-2">
        <div className="rounded-xl overflow-hidden">
          <img src={analysisImg} alt="Smart växthus" loading="lazy" className="w-full h-72 md:h-96 object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Smart växthus</p>
          <h2 className="text-3xl font-serif mb-4">Odla året runt – oavsett säsong</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Ett växthus med klimatkontroll,
            <br className="hidden md:block" />
            automatiserad bevattning och smart övervakning.
          </p>

          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Funktioner</p>
          <ul className="space-y-2 mb-8">
            {["Automatisk temperatur- och fuktstyrning", "Odling året runt", "Smart bevattning", "Sensorbaserad övervakning"].map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Utveckling</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Smart trädgård</span>
            <ArrowRight size={14} className="text-primary" />
            <span>Smart växthus</span>
            <ArrowRight size={14} className="text-primary" />
            <span>Fullt integrerat system</span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-warm">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-garden-analysis">Boka Smart Garden Analysis</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-lg">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default SmartGrowingSystems;
