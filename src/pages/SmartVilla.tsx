import { Link } from "react-router-dom";
import villaImg from "@/assets/smart-villa.jpg";
import { Button } from "@/components/ui/button";

const SmartVilla = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={villaImg} alt="Smart Villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Framtidsvision</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">Smart Villa</h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Hem där trädgård, vatten och energi samverkar naturligt.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Konceptet</p>
        <h2 className="text-3xl font-serif mb-6">Framtidens boende – redan idag</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Smart Villa handlar om att skapa hem som fungerar i harmoni med sin omgivning.
          Trädgården blir en del av husets system – med vattenhantering, energiproduktion och
          naturlig odling som samverkar.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          På sikt kan samma tänk användas för att skapa hem där trädgård, vatten
          och energi samverkar – ett boende som är både hållbart och bekvämt.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Vi börjar med det som fungerar idag – smart planering av trädgård och utemiljö –
          och bygger vidare mot mer integrerade lösningar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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

export default SmartVilla;
