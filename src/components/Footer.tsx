import { Link } from "react-router-dom";

const links = [
  { to: "/smart-garden", label: "Smart trädgård" },
  { to: "/smart-greenhouse", label: "Smart växthus" },
  { to: "/smart-growing-systems", label: "Regenerativa system" },
  { to: "/smart-garden-analysis", label: "Trädgårdsanalys" },
  { to: "/ecovillage", label: "Future Living" },
  { to: "/kontakt", label: "Kontakt" },
];

const Footer = () => (
  <footer className="bg-dark py-20 px-6 md:px-12 border-t border-white/[0.06]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-serif text-2xl text-dark-foreground tracking-tight mb-3">369 Future Village</p>
        <p className="text-xs text-dark-muted tracking-[0.4em] uppercase font-light">Scandinavian Smart Living</p>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-14">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-[11px] tracking-[0.25em] uppercase font-light text-dark-muted hover:text-dark-foreground transition-colors duration-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t border-white/[0.06] pt-8 text-center">
        <p className="text-[11px] text-dark-muted/70 font-light tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} 369 Future Village
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
