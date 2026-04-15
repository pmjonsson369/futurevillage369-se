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
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={ecoImg} alt="Ecovillage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-xs font-light tracking-[0.35em] uppercase text-white/60 mb-6">Ekobyar</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
          Smarta system för ekobyar
        </h1>
        <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
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
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Bättre förståelse för hur systemen fungerar
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Mindre manuellt arbete
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Starkare och mer hållbara lösningar över tid
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
          <p className="text-2xl font-serif text-dark-foreground leading-relaxed mb-14">
            Från mindre pilotprojekt till fullt utvecklade system
            <br className="hidden md:block" />
            för hela samhällen.
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
