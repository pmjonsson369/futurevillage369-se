import aboutImg from "@/assets/about.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-warm">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Om mig</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Jag arbetar med att analysera och designa trädgårdar med fokus på
          helhet, funktion och enkelhet.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Målet är att skapa lösningar som fungerar i verkligheten – inte bara
          på bild.
        </p>
      </div>
      <div className="order-1 md:order-2 rounded-xl overflow-hidden">
        <img
          src={aboutImg}
          alt="Naturlig trädgårdsmiljö"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
