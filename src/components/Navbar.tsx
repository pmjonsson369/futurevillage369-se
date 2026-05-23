import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Hem" },
  { to: "/smart-garden", label: "Smart trädgård" },
  { to: "/smart-greenhouse", label: "Smart växthus" },
  { to: "/smart-growing-systems", label: "Regenerativa system" },
  { to: "/smart-garden-analysis", label: "Trädgårdsanalys" },
  { to: "/ecovillage", label: "Future Living" },
  { to: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
          369 Future Village
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`relative text-[13px] font-light tracking-[0.12em] uppercase transition-colors duration-300 ${
                  isActive(item.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-500 ${
                    isActive(item.to) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground transition-transform duration-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out bg-background/95 backdrop-blur-2xl border-b border-border/40 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-8 px-8 gap-1">
          {navItems.map((item, i) => (
            <li
              key={item.to}
              className="transition-all duration-500"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className={`block py-4 text-lg font-light tracking-[0.08em] border-b border-border/20 transition-colors duration-300 ${
                  isActive(item.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
