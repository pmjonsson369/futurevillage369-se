import { Link } from "react-router-dom";
import ecoImg from "@/assets/ecovillage.jpg";
import { Button } from "@/components/ui/button";

const workSteps = [
  "Kartlägga vattenflöden",
  "Koppla ihop odlingsytor",
  "Installera sensorer",
  "Följa upp och analysera",
];

const Ecovillage = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={ecoImg} alt="Ecovillage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Ekobyar</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">
          Smarta system för ekobyar
        </h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Vi hjälper ekobyar att förstå, förbättra
          <br className="hidden md:block" />
          och utveckla sina system – steg för steg.
        </p>
      </div>
    </section>

    {/* Vad det innebär */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Vad det innebär</p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Vi börjar med att förstå det som redan finns –
          <br className="hidden md:block" />
          vatten, odling och resurser –
          <br className="hidden md:block" />
          innan vi gör förändringar.
        </p>
      </div>
    </section>

    {/* Arbetssätt */}
    <section className="section-padding bg-warm">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Arbetssätt</p>
        <h2 className="text-3xl font-serif mb-8">Börja smått. Lär över tid.</h2>
        <ul className="space-y-3 mb-10">
          {workSteps.map((step) => (
            <li key={step} className="flex items-start gap-3 text-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {step}
            </li>
          ))}
        </ul>

        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Varför det är viktigt</p>
        <div className="space-y-3">
          <p className="text-base text-muted-foreground leading-relaxed">
            Bättre förståelse för hur systemen fungerar
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Mindre manuellt arbete
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Starkare och mer hållbara lösningar över tid
          </p>
        </div>
      </div>
    </section>

    {/* Framtid */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Framtid</p>
        <p className="text-xl font-serif text-foreground leading-relaxed mb-10">
          Från mindre pilotprojekt till fullt utvecklade system
          <br className="hidden md:block" />
          för hela samhällen.
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

export default Ecovillage;
