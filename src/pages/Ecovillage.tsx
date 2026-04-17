import { Link } from "react-router-dom";
import ecoImg from "@/assets/ecovillage.jpg";
import { Button } from "@/components/ui/button";
import RevealSection from "@/components/RevealSection";

const workSteps = [
  "Kartlägga vattenflöden",
  "Koppla ihop odlingsytor",
  "Installera sensorer",
  "Följa upp och analysera",
];

const Ecovillage = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img src={ecoImg} alt="Ecovillage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24">
        <p className="text-xs font-light tracking-[0.4em] uppercase text-white/60 mb-10">Ekobyar</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-12 leading-[1.05] tracking-tight">
          Smarta system för ekobyar
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-[1.9] font-light">
          Vi hjälper ekobyar att förstå, förbättra
          <br className="hidden md:block" />
          och utveckla sina system – steg för steg.
        </p>
      </div>
    </section>

    {/* Vad det innebär */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Vad det innebär</p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Vi börjar med att förstå det som redan finns –
            <br className="hidden md:block" />
            vatten, odling och resurser –
            <br className="hidden md:block" />
            innan vi gör förändringar.
          </p>
        </div>
      </RevealSection>
    </section>

    {/* Arbetssätt */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Arbetssätt</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 leading-tight">Börja smått. Lär över tid.</h2>
          <ul className="space-y-4 mb-14">
            {workSteps.map((step) => (
              <li key={step} className="flex items-start gap-4 text-foreground font-light">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {step}
              </li>
            ))}
          </ul>

          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Varför det är viktigt</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Att förstå hur vatten, odling och resurser samverkar i en ekoby
            <br className="hidden md:block" />
            är avgörande för att kunna utveckla den på ett hållbart sätt.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
            Genom att kartlägga och arbeta med systemen som en helhet
            <br className="hidden md:block" />
            skapas bättre förutsättningar för både människor och miljö.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Det leder till:
          </p>
          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              – En tydligare bild av hur vatten, odling och resurser
              <br className="hidden md:block" />
              faktiskt fungerar i praktiken
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              – Mindre manuellt arbete genom smartare
              <br className="hidden md:block" />
              och mer automatiserade lösningar
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              – Mer hållbara system som utvecklas
              <br className="hidden md:block" />
              och förbättras över tid
            </p>
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Framtid */}
    <section className="py-28 md:py-36 px-6 md:px-12 bg-dark">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-6">Framtid</p>
          <p className="text-xl md:text-2xl font-serif text-dark-foreground leading-relaxed mb-8">
            Det som börjar som mindre pilotprojekt
            <br className="hidden md:block" />
            kan över tid utvecklas till fullt integrerade system
            <br className="hidden md:block" />
            för hela samhällen.
          </p>
          <p className="text-lg text-dark-muted leading-relaxed mb-14 font-light">
            Genom att steg för steg förstå, testa och förbättra varje del
            <br className="hidden md:block" />
            skapas en stabil grund där vatten, odling och resurser
            <br className="hidden md:block" />
            samverkar i en fungerande helhet.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </>
);

export default Ecovillage;
