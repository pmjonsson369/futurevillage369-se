import analysisImg from "@/assets/analysis.jpg";
import { Button } from "@/components/ui/button";

const includes = [
  "Genomgång av din nuvarande trädgård",
  "Förslag på förbättringar",
  "Plan för odling och ytor",
  "Visuell riktning",
];

const AnalysisSection = () => (
  <section id="analysis" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src={analysisImg}
          alt="Trädgårdsplan och ritning med riktig trädgård"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
          Huvuderbjudande
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-2">
          Trädgårdsanalys
        </h2>
        <p className="text-lg text-foreground font-medium mb-4">
          Få en tydlig plan för din trädgård
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Jag går igenom din trädgård och visar hur du kan förbättra struktur,
          flöde och användning av ytor.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Du får konkreta förslag som gör det enklare att skapa en trädgård som
          fungerar långsiktigt.
        </p>

        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Ingår
        </p>
        <ul className="space-y-2.5 mb-8">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-warm rounded-xl p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-1">Intropris</p>
          <p className="text-3xl font-serif text-foreground">1 499 kr</p>
        </div>

        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-lg w-full md:w-auto"
        >
          <a href="#contact">Boka din analys</a>
        </Button>
      </div>
    </div>
  </section>
);

export default AnalysisSection;
