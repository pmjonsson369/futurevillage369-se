import introImg from "@/assets/intro.jpg";

const IntroSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="rounded-xl overflow-hidden">
        <img
          src={introImg}
          alt="Lugn trädgårdsmiljö med grönska"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-80 md:h-[28rem] object-cover"
        />
      </div>
      <div>
        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
          369 Future Village handlar om att skapa miljöer som fungerar i vardagen
          – där design, natur och funktion hänger ihop.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Fokus ligger på att göra det enkelt att ha en trädgård som både är vacker
          och lätt att ta hand om.
        </p>
      </div>
    </div>
  </section>
);

export default IntroSection;
