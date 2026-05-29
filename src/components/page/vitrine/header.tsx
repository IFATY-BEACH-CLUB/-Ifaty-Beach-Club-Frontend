import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/IfatyBeachClub.jpg";

const NAV = [
  { label: "Accueil", href: "#top" },
  { label: "Hébergements", href: "/hebergements" },
  { label: "Services", href: "#services" },
  { label: "Activités", href: "/activites" },
  { label: "Galerie", href: "#gallery" },
  { label: "Avis", href: "#reviews" },
  { label: "Localisation", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["top", "presentation", "rooms", "services", "activities", "gallery", "attractions", "reviews", "location", "contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = useCallback((href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href.replace("#", "");
    }
    return false;
  }, [activeSection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-card" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <Link to="/" hash="top" className="flex items-center gap-2 group">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-white/40 group-hover:ring-accent/60 transition-all">
              <img
                src={logo}
                alt="Ifaty Beach Club"
                className="h-full w-full object-cover"
              />
            </div>
            <div className={`leading-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
              <div className="font-display text-lg font-semibold">Ifaty Beach Club</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Madagascar</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => {
              const isExternal = n.href.startsWith("#");
              const active = isActive(n.href);
              const className = `text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90"
              } ${active ? "nav-link-active" : ""}`;
              return isExternal ? (
                <Link
                  key={n.href}
                  to="/"
                  hash={n.href.replace("#", "")}
                  className={className}
                >
                  {n.label}
                </Link>
              ) : (
                <Link
                  key={n.href}
                  to={n.href}
                  className={className}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/" hash="contact" className="hidden sm:inline-flex">
              <Button className="bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90 rounded-full px-5 hover:scale-105 transition-transform">
                Réserver
              </Button>
            </Link>
            <button
              className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile menu — full overlay */}
        {open && (
          <div className="lg:hidden fixed inset-0 top-16 z-40">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm lightbox-backdrop"
              onClick={() => setOpen(false)}
            />
            {/* Panel */}
            <div className="relative bg-background border-t border-border shadow-soft menu-slide-down">
              <div className="px-5 py-5 flex flex-col gap-1">
                {NAV.map((n) => {
                  const isExternal = n.href.startsWith("#");
                  const active = isActive(n.href);
                  const linkClass = `text-foreground py-3 px-4 rounded-xl transition-all font-medium text-sm ${
                    active ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  }`;
                  return isExternal ? (
                    <Link
                      key={n.href}
                      to="/"
                      hash={n.href.replace("#", "")}
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {n.label}
                    </Link>
                  ) : (
                    <Link
                      key={n.href}
                      to={n.href}
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {n.label}
                    </Link>
                  );
                })}
                <Link to="/" hash="contact" onClick={() => setOpen(false)} className="mt-3">
                  <Button className="w-full bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90 rounded-full h-12">
                    Réserver une chambre
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed bottom-24 right-6 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-soft hover:scale-110 transition-transform back-to-top-enter"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
