import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [growingOpen, setGrowingOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isGrowingActive = ["/smart-growing-systems", "/smart-garden", "/smart-greenhouse", "/smart-garden-analysis"].includes(location.pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
          369 Future Village
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Hem
            </Link>
          </li>
          <li className="relative group" onMouseEnter={() => setGrowingOpen(true)} onMouseLeave={() => setGrowingOpen(false)}>
            <Link
              to="/smart-growing-systems"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${isGrowingActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Smarta odlingssystem
              <ChevronDown size={14} className={`transition-transform ${growingOpen ? "rotate-180" : ""}`} />
            </Link>
            {growingOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                  <Link to="/smart-garden" className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Smart trädgård
                  </Link>
                  <Link to="/smart-greenhouse" className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Smart växthus
                  </Link>
                  <Link to="/smart-garden-analysis" className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    Trädgårdsanalys
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link to="/smart-villa" className={`text-sm font-medium transition-colors ${isActive("/smart-villa") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Smart Villa
            </Link>
          </li>
          <li>
            <Link to="/ecovillage" className={`text-sm font-medium transition-colors ${isActive("/ecovillage") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Ekobyar
            </Link>
          </li>
          <li>
            <Link to="/om" className={`text-sm font-medium transition-colors ${isActive("/om") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Om
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className={`text-sm font-medium transition-colors ${isActive("/kontakt") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col py-4 px-6 gap-1">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block py-2.5 text-base text-muted-foreground hover:text-foreground transition-colors">
                Hem
              </Link>
            </li>
            <li>
              <button
                onClick={() => setGrowingOpen(!growingOpen)}
                className="flex items-center justify-between w-full py-2.5 text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                Smarta odlingssystem
                <ChevronDown size={16} className={`transition-transform ${growingOpen ? "rotate-180" : ""}`} />
              </button>
              {growingOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link to="/smart-garden" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                    Smart trädgård
                  </Link>
                  <Link to="/smart-greenhouse" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                    Smart växthus
                  </Link>
                  <Link to="/smart-garden-analysis" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                    Trädgårdsanalys
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/smart-villa" onClick={() => setOpen(false)} className="block py-2.5 text-base text-muted-foreground hover:text-foreground transition-colors">
                Smart Villa
              </Link>
            </li>
            <li>
              <Link to="/ecovillage" onClick={() => setOpen(false)} className="block py-2.5 text-base text-muted-foreground hover:text-foreground transition-colors">
                Ekobyar
              </Link>
            </li>
            <li>
              <Link to="/om" onClick={() => setOpen(false)} className="block py-2.5 text-base text-muted-foreground hover:text-foreground transition-colors">
                Om
              </Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={() => setOpen(false)} className="block py-2.5 text-base text-muted-foreground hover:text-foreground transition-colors">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
