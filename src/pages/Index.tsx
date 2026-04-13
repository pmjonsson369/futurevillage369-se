import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import introImg from "@/assets/intro.jpg";
import gardenImg from "@/assets/smart-garden.jpg";
import analysisImg from "@/assets/analysis.jpg";
import villaImg from "@/assets/smart-villa.jpg";
import ecoImg from "@/assets/ecovillage.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Smart Garden",
    desc: "Genomtänkt planering av din trädgård – från odling till ytor och skötsel.",
    img: gardenImg,
    link: "/smart-garden",
  },
  {
    title: "Smart Garden Analysis",
    desc: "Få en tydlig plan och konkreta förslag för din trädgård. Intropris: 1 499 kr.",
    img: analysisImg,
    link: "/smart-garden-analysis",
    highlight: true,
  },
  {
    title: "Smart Villa",
    desc: "Hem där trädgård, vatten och energi samverkar – framtidens boende.",
    img: villaImg,
    link: "/smart-villa",
  },
  {
    title: "Ecovillage",
    desc: "En vision om hållbart boende med fokus på helhet och gemenskap.",
    img: ecoImg,
    link: "/ecovillage",
  },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Skandinaviskt hus med genomtänkt trädgård" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/45" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-6">
          369 Future Village
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-6">
          Skapa en vacker, lättskött och genomtänkt trädgård
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Jag hjälper dig designa en trädgård där odling, ytor och funktion samspelar
          – anpassat efter din tomt och dina behov.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-garden-analysis">Boka Smart Garden Analysis</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/50 text-foreground hover:bg-white/10 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-growing-systems">Utforska tjänster</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="rounded-xl overflow-hidden">
          <img src={introImg} alt="Lugn trädgårdsmiljö" loading="lazy" className="w-full h-80 md:h-[28rem] object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Vad vi gör</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Design som fungerar i vardagen</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            369 Future Village handlar om att skapa miljöer som fungerar i vardagen
            – där design, natur och funktion hänger ihop.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Fokus ligger på att göra det enkelt att ha en trädgård som både är vacker
            och lätt att ta hand om.
          </p>
        </div>
      </div>
    </section>

    {/* Services overview */}
    <section className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Tjänster</p>
          <h2 className="text-3xl md:text-4xl font-serif">Vad vi erbjuder</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className={`group rounded-xl overflow-hidden bg-background border transition-all hover:shadow-lg ${s.highlight ? "border-primary/30 ring-1 ring-primary/10" : "border-border"}`}
            >
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                {s.highlight && (
                  <span className="inline-block text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                    Huvuderbjudande
                  </span>
                )}
                <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Läs mer <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Redo att komma igång?</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Boka en Smart Garden Analysis och få en tydlig plan för din trädgård.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg">
            <Link to="/smart-garden-analysis">Boka din analys – 1 499 kr</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-lg">
            <Link to="/kontakt">Kontakta mig</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;
