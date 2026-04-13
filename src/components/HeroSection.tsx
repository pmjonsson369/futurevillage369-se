import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Skandinaviskt hus med genomtänkt trädgård i solljus"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto text-center px-6 pt-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-6">
        Skapa en vacker, lättskött och genomtänkt trädgård
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
        Jag hjälper dig designa en trädgård där odling, ytor och funktion samspelar
        – anpassat efter din tomt och dina behov.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg"
      >
        <a href="#analysis">Boka Smart Garden Analysis</a>
      </Button>
    </div>
  </section>
);

export default HeroSection;
