const About = () => (
  <>
    <section className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6">Om</p>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
          Vi bygger grunden för framtidens sätt att leva
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          369 Future Village började med en enkel fråga:<br />
          Vad skulle hända om våra hem kunde ta hand om sig själva?
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Vi utvecklar system där teknik stödjer naturen – inte tvärtom.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Målet är att skapa miljöer som är hållbara, effektiva och vackra över tid.
        </p>
      </div>
    </section>
  </>
);

export default About;