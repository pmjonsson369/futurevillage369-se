import { Link } from "react-router-dom";
import gardenImg from "@/assets/smart-garden.jpg";
import analysisImg from "@/assets/analysis.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const systems = [
  {
    title: "Smart Garden",
    desc: "Planera din trädgård så att odling, gångar, ytor och skötsel fungerar tillsammans. Resultatet blir en trädgård som är lättare att ta hand om och mer harmonisk att vara i.",
    img: gardenImg,
    link: "/smart-garden",
  },
  {
    title: "Smart Garden Analysis",
    desc: "Få en professionell genomgång av din trädgård med konkreta förslag på förbättringar. Du får en tydlig plan för struktur, flöde och odling.",
    img: analysisImg,
    link: "/smart-garden-analysis",
    price: "1 499 kr",
  },
];

const SmartGrowingSystems = () => (
  <>
    {/* Hero */}
    <section className="relative py-24 md:py-32 bg-warm">
      <div className="max-w-4xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Tjänster</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Smart Growing Systems</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Genomtänkta system för trädgård och odling – designade för att vara enkla, funktionella och hållbara.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto space-y-20">
        {systems.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="rounded-xl overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-72 md:h-96 object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-4">{s.title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              {s.price && (
                <div className="bg-warm rounded-xl p-5 mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Intropris</p>
                  <p className="text-2xl font-serif text-foreground">{s.price}</p>
                </div>
              )}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to={s.link} className="inline-flex items-center gap-2">
                  Läs mer <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-warm">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">Börja med en analys</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Boka en Smart Garden Analysis och få en konkret plan för din trädgård.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
          <Link to="/smart-garden-analysis">Boka din analys – 1 499 kr</Link>
        </Button>
      </div>
    </section>
  </>
);

export default SmartGrowingSystems;
