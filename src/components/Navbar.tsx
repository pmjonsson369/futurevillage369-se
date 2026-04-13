import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Hem", path: "/" },
  { label: "Smart Villa", path: "/smart-villa" },
  { label: "Smart Growing Systems", path: "/smart-growing-systems" },
  { label: "Ekobyar", path: "/ekobyar" },
  { label: "Om", path: "/om" },
  { label: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
          369 Future Village
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`text-sm font-medium transition-colors ${location.pathname === l.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col py-4 px-6 gap-1">
            {links.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 text-base transition-colors ${location.pathname === l.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
