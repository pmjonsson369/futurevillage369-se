import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:369futurevillage@gmail.com?subject=Kontakt från ${name}&body=${encodeURIComponent(message)}%0A%0AFrån: ${name} (${email})`;
  };

  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-xl mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-6">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Låt oss bygga något tillsammans
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oavsett om du har ett projekt, en idé eller bara är nyfiken – hör gärna av dig.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Namn</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-card border-border text-foreground"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border text-foreground"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Meddelande</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-card border-border text-foreground resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-lg w-full">
              Skicka meddelande
            </Button>
          </form>

          <div className="mt-10 text-center">
            <a href="mailto:369futurevillage@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail size={16} />
              369futurevillage@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;