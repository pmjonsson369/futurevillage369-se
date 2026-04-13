import ecoImg from "@/assets/ecovillage.jpg";

const EcovillageSection = () => (
  <section id="ecovillage" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src={ecoImg}
          alt="Ekologiskt boende med odlingar och natur"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
          Vision
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Ecovillage</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          En vision om hur framtidens boende kan utvecklas – med fokus på
          hållbarhet och helhet.
        </p>
      </div>
    </div>
  </section>
);

export default EcovillageSection;
