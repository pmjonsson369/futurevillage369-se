import { Link } from "react-router-dom";
import aboutImg from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";

const About = () => (
  <>
    {/* Hero */}
    <section className="section-padding bg-warm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Om</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Vi bygger grunden för framtidens sätt att leva
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            369 Future Village började med en enkel fråga:
          </p>
          <p className="text-lg text-foreground font-serif italic leading-relaxed mb-6">
            Vad skulle hända om våra hem kunde ta hand om sig själva?
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Vi utvecklar system där teknik stödjer naturen –
            <br className="hidden md:block" />
            inte tvärtom.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Målet är att skapa miljöer som är hållbara,
            <br className="hidden md:block" />
            effektiva och vackra över tid.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={aboutImg} alt="Naturlig trädgårdsmiljö" loading="lazy" className="w-full h-72 md:h-96 object-cover" />
        </div>
      </div>
    </section>

    {/* Samarbete */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Samarbete</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Vill du jobba med mig?</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Jag samarbetar med personer och projekt som vill utveckla
          <br className="hidden md:block" />
          smarta, hållbara och genomtänkta miljöer.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Det kan till exempel vara:
        </p>
        <div className="text-base text-muted-foreground leading-relaxed mb-10 space-y-2">
          <p>– Arkitekter</p>
          <p>– Fastighetsutvecklare</p>
          <p>– Ekobyar och community-projekt</p>
          <p>– Privatpersoner med visioner</p>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Om du är intresserad av att samarbeta eller vill veta mer,
          <br className="hidden md:block" />
          hör gärna av dig.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
          <Link to="/kontakt">Kontakta mig</Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;
