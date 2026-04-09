import villaImg from "@/assets/smart-villa.jpg";

const SmartVillaSection = () => (
  <section id="smart-villa" className="section-padding bg-warm">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="order-2 md:order-1">
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
          Framtidsvision
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Smart Villa</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          På sikt kan samma tänk användas för att skapa hem där trädgård, vatten
          och energi samverkar.
        </p>
      </div>
      <div className="order-1 md:order-2 rounded-xl overflow-hidden">
        <img
          src={villaImg}
          alt="Skandinaviskt trähus i naturlig omgivning"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
    </div>
  </section>
);

export default SmartVillaSection;
