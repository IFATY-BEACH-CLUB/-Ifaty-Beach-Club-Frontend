import { Link } from "react-router-dom";
import { Facebook, Heart, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo/IfatyBeachClub.jpg";

const quickLinks = [
  { label: "Accueil", to: "/#top" },
  { label: "Hébergements", to: "/hebergements" },
  { label: "Activités", to: "/activites" },
  { label: "Galerie", to: "/#gallery" },
  { label: "Contact", to: "/#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--deep)] px-5 pt-16 pb-8 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden radius-pill bg-white ring-1 ring-white/20">
              <img src={logo} alt="Ifaty Beach Club" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Ifaty Beach Club</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                Hôtel face au lagon
              </div>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Hôtel 3 étoiles à Mangily, Ifaty. Bungalows, piscines, restaurant, excursions marines et
            couchers de soleil inoubliables au sud-ouest de Madagascar.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="radius-pill bg-white/10 px-3 py-1">Réception 24h/24</span>
            <span className="radius-pill bg-white/10 px-3 py-1">Transfert aéroport</span>
            <span className="radius-pill bg-white/10 px-3 py-1">Wi-Fi gratuit</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={`${link.to}-${link.label}`}>
                <Link to={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>VJF5+F99, Mangily, Ifaty, Madagascar</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+261346117982" className="transition-colors hover:text-white">
                +261 34 61 179 82
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a
                href="mailto:contact@ifatybeachclub.mg"
                className="transition-colors hover:text-white"
              >
                contact@ifatybeachclub.mg
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Suivez-nous</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: "https://wa.me/261346117982", label: "WhatsApp" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center radius-pill bg-white/10 transition-all hover:scale-110 hover:bg-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/261346117982"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 radius-pill bg-white px-5 py-3 text-sm font-semibold text-[color:var(--deep)] transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
        <span>© {new Date().getFullYear()} Ifaty Beach Club - Tous droits réservés</span>
        <span className="flex items-center gap-1">
          Fait avec <Heart className="h-3 w-3 fill-current text-accent" /> à Madagascar
        </span>
      </div>
    </footer>
  );
}
