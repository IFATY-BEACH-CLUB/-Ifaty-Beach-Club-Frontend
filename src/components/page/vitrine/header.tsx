import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Menu, Phone, X } from "lucide-react";
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

const SECTION_IDS = [
  "top",
  "presentation",
  "rooms",
  "services",
  "activities",
  "gallery",
  "attractions",
  "reviews",
  "location",
  "contact",
];

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

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = useCallback(
    (href: string) => href.startsWith("#") && activeSection === href.replace("#", ""),
    [activeSection],
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 shadow-card backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <Link
            to="/#top"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="h-12 w-12 overflow-hidden radius-pill bg-white shadow-soft ring-1 ring-white/40 transition-all group-hover:ring-accent/70">
              <img src={logo} alt="Ifaty Beach Club" className="h-full w-full object-cover" />
            </div>
            <div
              className={`leading-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            >
              <div className="font-display text-lg font-semibold">Ifaty Beach Club</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                Mangily, Madagascar
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => {
              const isHash = item.href.startsWith("#");
              const className = `text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90"
              } ${isActive(item.href) ? "nav-link-active" : ""}`;

              return isHash ? (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className={className}
                >
                  {item.label}
                </Link>
              ) : (
                <Link key={item.href} to={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+261346117982"
              className={`hidden items-center gap-2 text-sm font-medium transition-colors hover:text-accent xl:inline-flex ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              <Phone className="h-4 w-4" />
              +261 34 61 179 82
            </a>
            <Link to="/#contact" className="hidden sm:inline-flex">
              <Button className="radius-pill border-0 bg-gradient-sunset px-5 text-primary-foreground transition-transform hover:scale-105 hover:opacity-90">
                Réserver
              </Button>
            </Link>
            <button
              className={`radius-control p-2 transition-colors lg:hidden ${scrolled || open ? "text-foreground" : "text-white"}`}
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 top-16 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm lightbox-backdrop"
              onClick={() => setOpen(false)}
            />
            <div className="relative border-t border-border bg-background shadow-soft menu-slide-down">
              <div className="flex flex-col gap-1 px-5 py-5">
                {NAV.map((item) => {
                  const isHash = item.href.startsWith("#");
                  const linkClass = `radius-panel px-4 py-3 text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`;

                  return isHash ? (
                    <Link
                      key={item.href}
                      to={`/${item.href}`}
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link to="/#contact" onClick={() => setOpen(false)} className="mt-3">
                  <Button className="h-12 w-full radius-pill border-0 bg-gradient-sunset text-primary-foreground hover:opacity-90">
                    Réserver une chambre
                  </Button>
                </Link>
                <a
                  href="tel:+261346117982"
                  className="mt-2 flex items-center justify-center gap-2 radius-pill border border-border px-4 py-3 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Appeler l'hôtel
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut"
          className="fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center radius-pill bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-110 back-to-top-enter"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
