import contactImg from "@/assets/contact.jpg";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => (
  <>
    {/* Hero */}
    <section className="section-padding bg-warm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">Kontakt</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Låt oss bygga något tillsammans
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Oavsett om du har ett projekt, en idé eller bara är nyfiken –
            <br className="hidden md:block" />
            hör gärna av dig.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg w-full md:w-auto">
              <a href="mailto:369futurevillage@gmail.com" className="inline-flex items-center gap-2">
                <Mail size={18} />
                Kontakta mig
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              369futurevillage@gmail.com
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={contactImg} alt="Arbetsplats" loading="lazy" className="w-full h-72 md:h-96 object-cover" />
        </div>
      </div>
    </section>
  </>
);

export default Contact;
