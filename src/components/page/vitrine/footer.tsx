import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo/IfatyBeachClub.jpg";

export function Footer() {
  return (
    <footer className="bg-[color:var(--deep)] text-white pt-16 pb-8 px-5 lg:px-8 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-sunset/10 blur-[80px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
              <img
                src={logo}
                alt="Ifaty Beach Club"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="font-display text-lg font-semibold">Ifaty Beach Club</div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Hôtel 3 étoiles face au lagon d'Ifaty. Bungalows, piscines, excursions et couchers de soleil inoubliables.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link to="/" hash="top" className="hover:text-accent transition-colors">Accueil</Link>
            </li>
            <li>
              <Link to="/hebergements" className="hover:text-accent transition-colors">Chambres</Link>
            </li>
            <li>
              <Link to="/activites" className="hover:text-accent transition-colors">Activités</Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="hover:text-accent transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>VJF5+F99, Mangily, Ifaty</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+261346117982" className="hover:text-white transition-colors">+261 34 61 179 82</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:contact@ifatybeachclub.mg" className="hover:text-white transition-colors">contact@ifatybeachclub.mg</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Suivez-nous</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: "https://wa.me/261346117982", label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:scale-110 grid place-items-center transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/50 leading-relaxed">
            Réception ouverte 24h/24<br />
            Transfert aéroport disponible
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <span>© {new Date().getFullYear()} Ifaty Beach Club — Tous droits réservés</span>
        <span className="flex items-center gap-1">
          Fait avec <Heart className="h-3 w-3 text-accent fill-current" /> à Madagascar
        </span>
      </div>
    </footer>
  );
}
