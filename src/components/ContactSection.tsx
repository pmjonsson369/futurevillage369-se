import contactImg from "@/assets/contact.jpg";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src={contactImg}
          alt="Lugn arbetsplats med anteckningsbok"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Kontakt</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Vill du ha hjälp att utveckla din trädgård?
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          Hör av dig så berättar jag mer eller bokar en analys.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-lg"
        >
          <a href="mailto:kontakt@369futurevillage.se">Kontakta mig</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
