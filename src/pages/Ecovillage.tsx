import { Link } from "react-router-dom";
import ecoImg from "@/assets/ecovillage.jpg";
import { Button } from "@/components/ui/button";

const Ecovillage = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={ecoImg} alt="Ecovillage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">Vision</p>
        <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground mb-6">Ecovillage</h1>
        <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Framtidens boende med fokus på hållbarhet, gemenskap och helhet.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Visionen</p>
        <h2 className="text-3xl font-serif mb-6">Hållbart boende i gemenskap</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          En vision om hur framtidens boende kan utvecklas – med fokus på
          hållbarhet och helhet. Mindre fotavtryck, mer livskvalitet.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Ecovillage bygger på idén att hem, odling och gemenskap kan designas
          tillsammans – för att skapa platser som är bra för både människor och miljö.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Vi börjar i det lilla – med smarta trädgårdar och genomtänkta utemiljöer –
          och arbetar mot en större vision.
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

export default Ecovillage;
