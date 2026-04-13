import gardenImg from "@/assets/smart-garden.jpg";
import { Button } from "@/components/ui/button";

const bullets = [
  "Smart planering av ytor",
  "Struktur för odling",
  "Mindre underhåll",
  "Mer funktion och balans",
];

const SmartGardenSection = () => (
  <section id="smart-garden" className="section-padding bg-warm">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="order-2 md:order-1">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
          Smart Garden
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          En trädgård som är genomtänkt från början
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Istället för att gissa dig fram planerar vi din trädgård så att allt
          fungerar tillsammans – odling, gångar, ytor och skötsel.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Resultatet blir en trädgård som är lättare att ta hand om och mer
          harmonisk att vara i.
        </p>
        <ul className="space-y-3 mb-8">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-foreground">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
        >
          <a href="#analysis">Boka analys</a>
        </Button>
      </div>
      <div className="order-1 md:order-2 rounded-xl overflow-hidden">
        <img
          src={gardenImg}
          alt="Trädgård med odlingslådor och strukturerad design"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
    </div>
  </section>
);

export default SmartGardenSection;
