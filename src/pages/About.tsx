import { Link } from "react-router-dom";
import aboutImg from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";
import RevealSection from "@/components/RevealSection";

const About = () => (
  <>
    {/* Hero */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.35em] uppercase text-primary mb-6">Om</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Vi bygger grunden för framtidens sätt att leva
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              369 Future Village började med en enkel fråga:
            </p>
            <p className="text-xl text-foreground font-serif italic leading-relaxed mb-8">
              Vad skulle hända om våra hem kunde ta hand om sig själva?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Vi utvecklar system där teknik stödjer naturen –
              <br className="hidden md:block" />
              inte tvärtom.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Målet är att skapa miljöer som är hållbara,
              <br className="hidden md:block" />
              effektiva och vackra över tid.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={aboutImg} alt="Naturlig trädgårdsmiljö" loading="lazy" className="w-full h-72 md:h-[28rem] object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      </RevealSection>
    </section>

    {/* Samarbete */}
    <section className="section-padding bg-background">
      <RevealSection>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-primary mb-6">Samarbete</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8">Vill du jobba med mig?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            Jag samarbetar med personer och projekt som vill utveckla
            <br className="hidden md:block" />
            smarta, hållbara och genomtänkta miljöer.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Det kan till exempel vara:
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed mb-14 space-y-3 font-light">
            <p>– Arkitekter</p>
            <p>– Fastighetsutvecklare</p>
            <p>– Ekobyar och community-projekt</p>
            <p>– Privatpersoner med visioner</p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-14 font-light">
            Om du är intresserad av att samarbeta eller vill veta mer,
            <br className="hidden md:block" />
            hör gärna av dig.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </RevealSection>
    </section>
  </>
);

export default About;
