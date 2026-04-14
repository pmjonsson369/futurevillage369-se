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

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default About;
