import { Link } from "react-router-dom";
import aboutImg from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";

const About = () => (
  <>
    {/* Hero */}
    <section className="section-padding bg-warm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Om mig</h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Jag arbetar med att analysera och designa trädgårdar med fokus på
            helhet, funktion och enkelhet.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Målet är att skapa lösningar som fungerar i verkligheten – inte bara
            på bild. Varje trädgård är unik, och jag anpassar alltid efter dina
            förutsättningar och behov.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Med 369 Future Village vill jag visa att en genomtänkt trädgård inte
            behöver vara komplicerad – den behöver bara vara planerad.
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
        <h2 className="text-3xl font-serif mb-6">Vill du veta mer?</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Hör av dig så berättar jag mer om hur jag kan hjälpa dig med din trädgård.
        </p>
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

export default About;
