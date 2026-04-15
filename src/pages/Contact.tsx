import contactImg from "@/assets/contact.jpg";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import RevealSection from "@/components/RevealSection";

const Contact = () => (
  <>
    {/* Hero */}
    <section className="section-padding bg-warm">
      <RevealSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.35em] uppercase text-primary mb-6">Kontakt</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Låt oss bygga något tillsammans
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
              Oavsett om du har ett projekt, en idé eller bara är nyfiken –
              <br className="hidden md:block" />
              hör gärna av dig.
            </p>
            <div className="space-y-5">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/85 hover:shadow-lg hover:shadow-primary/20 text-base px-10 py-7 rounded-full transition-all duration-300 w-full md:w-auto">
                <a href="mailto:369futurevillage@gmail.com" className="inline-flex items-center gap-3">
                  <Mail size={18} />
                  Kontakta mig
                </a>
              </Button>
              <p className="text-sm text-muted-foreground font-light">
                369futurevillage@gmail.com
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={contactImg} alt="Arbetsplats" loading="lazy" className="w-full h-72 md:h-[28rem] object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
      </RevealSection>
    </section>
  </>
);

export default Contact;
