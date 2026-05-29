import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Waves, Sun, Wifi, Car, Utensils, Bath, MapPin, Phone, Mail,
  ShieldCheck, Sparkles, Plane, Users, Eye, Trees, Fish,
  Sailboat, Compass, Anchor, Mountain, Leaf, Star,
  MessageCircle, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "./footer";
import { Header } from "./header";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import hero from "@/assets/hero-lagoon.jpg";
import presentation from "@/assets/presentation.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomGarden from "@/assets/room-bungalow-garden.jpg";
import roomSea from "@/assets/room-bungalow-sea.jpg";
import roomFamily from "@/assets/room-family.jpg";
import actSnorkel from "@/assets/activity-snorkeling.jpg";
import actPirogue from "@/assets/activity-pirogue.jpg";
import actWhales from "@/assets/activity-whales.jpg";
import actQuad from "@/assets/activity-quad.jpg";
import attrBaobabs from "@/assets/attraction-baobabs.jpg";
import attrTortoises from "@/assets/attraction-tortoises.jpg";
import attrSpiny from "@/assets/attraction-spiny.jpg";
import galBeach from "@/assets/gallery-beach.jpg";
import galRestaurant from "@/assets/gallery-restaurant.jpg";
import galSunset from "@/assets/gallery-sunset.jpg";
import galPool from "@/assets/gallery-pool.jpg";

function Hero() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".hero-parallax");
    if (!el) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 480);
        el.style.transform = `translateY(${offset * 0.2}px)`;
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Lagon d'Ifaty au coucher de soleil"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover hero-parallax"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 text-center px-5 max-w-4xl text-white animate-float-up">
        <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-white/80 mb-4">
          Mangily · Ifaty · Madagascar
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
          Votre paradis face au <span className="text-gradient-sunset">lagon d'Ifaty</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
          Séjour balnéaire, excursions marines et couchers de soleil inoubliables à Madagascar.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact">
            <Button size="lg" className="bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90 rounded-full px-8 h-12 hover:scale-105 transition-transform">
              Réserver une chambre
            </Button>
          </a>
          <a href="#presentation">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm hover:scale-105 transition-transform">
              Découvrir l'hôtel
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 scroll-indicator text-white/70 text-xs tracking-widest">
        ↓ DÉFILER
      </div>
    </section>
  );
}

function Presentation() {
  return (
    <section id="presentation" className="py-20 lg:py-28 px-5 lg:px-8 bg-secondary/40 reveal">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={presentation}
            alt="L'hôtel Ifaty Beach Club face à la mer"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl shadow-soft w-full h-[420px] lg:h-[560px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-soft p-5 hidden md:flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-sunset grid place-items-center text-primary-foreground">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold">3 étoiles</div>
              <div className="text-xs text-muted-foreground">Rénovation complète 2022</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-3">Bienvenue</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
            Un refuge tropical entre lagon et baobabs
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Niché à Mangily, station balnéaire d'Ifaty, à 27&nbsp;km au nord de Tuléar (RN9),
            l'Ifaty Beach Club est un hôtel 3&nbsp;étoiles en bord de mer, entièrement rénové en
            2022. Une ambiance familiale et nature, pensée pour les amoureux du grand bleu.
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Waves, label: "Face au lagon turquoise" },
              { icon: Trees, label: "Jardin tropical" },
              { icon: Sparkles, label: "Rénové en 2022" },
              { icon: MapPin, label: "Mangily, Ifaty" },
            ].map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-foreground">
                <span className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

function Section({ id, eyebrow, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 px-5 lg:px-8 reveal ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

const ROOMS = [
  { name: "Chambre Double", type: "Double", capacity: 2, price: 65, img: roomDouble, features: ["Vue jardin", "Ventilateur", "Salle de bain privative"] },
  { name: "Chambre Twin", type: "Twin", capacity: 2, price: 70, img: roomDouble, features: ["Lits jumeaux", "Climatisation", "Coffre-fort"] },
  { name: "Chambre Triple", type: "Triple", capacity: 3, price: 85, img: roomFamily, features: ["3 personnes", "Ventilateur", "Coffre-fort"] },
  { name: "Chambre Familiale", type: "Familiale", capacity: 4, price: 110, img: roomFamily, features: ["4 personnes", "Climatisation", "Espace salon"] },
  { name: "Bungalow Jardin", type: "Bungalow Jardin", capacity: 2, price: 95, img: roomGarden, features: ["Toit en chaume", "Terrasse privée", "Vue jardin"] },
  { name: "Bungalow Vue Mer", type: "Bungalow Vue Mer", capacity: 2, price: 140, img: roomSea, features: ["Face au lagon", "Climatisation", "Coffre-fort"] },
];
const ROOM_FILTERS = ["Tous", "Double", "Twin", "Triple", "Familiale", "Bungalow Jardin", "Bungalow Vue Mer"];

function Rooms() {
  const [filter, setFilter] = useState("Tous");
  const list = filter === "Tous" ? ROOMS : ROOMS.filter((r) => r.type === filter);
  return (
    <Section
      id="rooms"
      eyebrow="Hébergements"
      title="Chambres & bungalows"
      subtitle="Du confort intime aux bungalows face au lagon, choisissez votre cocon."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {ROOM_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              filter === f
                ? "bg-primary text-primary-foreground border-primary shadow-card"
                : "bg-background text-foreground border-border hover:border-primary/60"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {list.map((r) => (
          <article
            key={r.name}
            className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all hover:-translate-y-1 card-animated"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={r.img}
                alt={r.name}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-background/95 backdrop-blur text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Users className="h-3 w-3" /> {r.capacity}&nbsp;pers.
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground">{r.name}</h3>
              <ul className="mt-3 space-y-1.5">
                {r.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <ChevronRight className="h-3.5 w-3.5 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">À partir de</div>
                  <div className="font-display text-2xl font-semibold text-primary">{r.price}€<span className="text-sm text-muted-foreground font-sans">/nuit</span></div>
                </div>
                <a href="#contact">
                  <Button variant="outline" size="sm" className="rounded-full">Voir détails</Button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/hebergements">
          <Button size="lg" className="rounded-full px-8 h-12 bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90">
            Voir tous les hébergements
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

const SERVICES = [
  { icon: Waves, label: "Deux piscines extérieures" },
  { icon: Bath, label: "Jacuzzi" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Sparkles, label: "Bar" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: Car, label: "Parking gratuit" },
  { icon: Bath, label: "Massages" },
  { icon: Plane, label: "Transfert aéroport" },
  { icon: ShieldCheck, label: "Réception 24h/24" },
  { icon: Sun, label: "Plage privée" },
  { icon: Trees, label: "Jardin panoramique" },
  { icon: Eye, label: "Vue mer directe" },
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services & équipements"
      title="Tout pour un séjour sans souci"
      className="bg-secondary/40"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.label}
            className="group bg-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
          >
            <span className="h-12 w-12 rounded-xl bg-gradient-sunset text-primary-foreground grid place-items-center group-hover:scale-110 transition-transform">
              <s.icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-medium text-foreground">{s.label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8 italic">
        Les services peuvent varier selon la saison.
      </p>
    </Section>
  );
}

const ACTIVITIES = [
  { name: "Snorkeling", cat: "Nautique", img: actSnorkel, icon: Fish },
  { name: "Sorties en pirogue", cat: "Nautique", img: actPirogue, icon: Sailboat },
  { name: "Bateau à moteur", cat: "Nautique", img: actPirogue, icon: Anchor },
  { name: "Observation des baleines", cat: "Nature", img: actWhales, icon: Waves, note: "Juin à septembre" },
  { name: "Pêche sportive", cat: "Aventure", img: actPirogue, icon: Fish },
  { name: "Bouée tractée", cat: "Famille", img: actSnorkel, icon: Waves },
  { name: "Quad & 4x4", cat: "Aventure", img: actQuad, icon: Compass },
  { name: "Randonnées", cat: "Nature", img: attrSpiny, icon: Mountain },
  { name: "Découverte du lagon", cat: "Famille", img: actSnorkel, icon: Eye },
];
const ACT_FILTERS = ["Toutes", "Nautique", "Aventure", "Nature", "Famille"];

function Activities() {
  const [filter, setFilter] = useState("Toutes");
  const list = filter === "Toutes" ? ACTIVITIES : ACTIVITIES.filter((a) => a.cat === filter);
  return (
    <Section
      id="activities"
      eyebrow="Activités"
      title="Vivez le lagon, autrement"
      subtitle="Aventures nautiques, observation de la faune et explorations terrestres."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {ACT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              filter === f
                ? "bg-accent text-accent-foreground border-accent shadow-card"
                : "bg-background text-foreground border-border hover:border-accent/60"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((a) => (
          <article
            key={a.name}
            className="group relative h-72 rounded-3xl overflow-hidden shadow-card cursor-pointer card-animated"
          >
            <img
              src={a.img}
              alt={a.name}
              width={1024}
              height={768}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full">
              {a.cat}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-2 mb-1">
                <a.icon className="h-5 w-5 text-accent" />
                <h3 className="font-display text-2xl font-semibold">{a.name}</h3>
              </div>
              {a.note && <p className="text-sm text-white/80">{a.note}</p>}
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/activites">
          <Button size="lg" className="rounded-full px-8 h-12 bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90">
            Voir toutes les activités
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

const ATTRACTIONS = [
  { name: "Village des Tortues", img: attrTortoises, desc: "Sanctuaire de tortues endémiques à quelques minutes." },
  { name: "Plage d'Ifaty", img: galBeach, desc: "Sable blanc et eaux turquoises à perte de vue." },
  { name: "Plage de Mangily", img: galBeach, desc: "La station balnéaire animée du Sud-Ouest." },
  { name: "Forêt des baobabs", img: attrBaobabs, desc: "Les géants millénaires de Madagascar." },
  { name: "Forêt épineuse", img: attrSpiny, desc: "Écosystème unique du Sud-Ouest malgache." },
];

function Attractions() {
  return (
    <Section
      id="attractions"
      eyebrow="À proximité"
      title="Explorez le Sud-Ouest malgache"
      className="bg-secondary/40"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ATTRACTIONS.map((a) => (
          <article key={a.name} className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all group">
            <div className="h-48 overflow-hidden">
              <img src={a.img} alt={a.name} width={1024} height={768} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-foreground">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
            </div>
          </article>
        ))}
        <div className="rounded-3xl overflow-hidden shadow-card min-h-[280px]">
          <iframe
            title="Carte Ifaty"
            src="https://www.google.com/maps?q=Mangily%20Ifaty%20Madagascar&output=embed"
            className="w-full h-full min-h-[280px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}

function Ecology() {
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[oklch(0.95_0.04_145)] to-secondary relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-eco/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco/20 text-foreground text-xs font-medium mb-4 pulse-ring">
              <Leaf className="h-3.5 w-3.5" /> Engagement éco-responsable
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
              Un séjour respectueux du lagon
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Notre démarche durable, pensée pour préserver l'écosystème exceptionnel d'Ifaty.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Sun, t: "Énergie solaire 24h/24", d: "Électricité produite par panneaux solaires" },
              { icon: Bath, t: "Eau chaude solaire", d: "Chauffage 100% renouvelable" },
              { icon: Sparkles, t: "Rénovation 2022", d: "Matériaux locaux et durables" },
              { icon: Leaf, t: "Démarche éthique", d: "Soutien aux communautés locales" },
            ].map((e) => (
              <li key={e.t} className="bg-background/70 backdrop-blur rounded-2xl p-4">
                <e.icon className="h-6 w-6 text-eco mb-2" />
                <div className="font-semibold text-foreground text-sm">{e.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{e.d}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: galPool, h: "row-span-2", alt: "Piscine" },
  { src: galBeach, h: "", alt: "Plage" },
  { src: galSunset, h: "", alt: "Coucher de soleil" },
  { src: galRestaurant, h: "", alt: "Restaurant" },
  { src: roomSea, h: "", alt: "Bungalow vue mer" },
  { src: actSnorkel, h: "row-span-2", alt: "Snorkeling" },
  { src: roomGarden, h: "", alt: "Bungalow jardin" },
  { src: actPirogue, h: "", alt: "Pirogue" },
];

function Gallery() {
  return (
    <Section id="gallery" eyebrow="Galerie" title="L'hôtel en images">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
        {GALLERY.map((g, i) => (
          <div key={i} className={`relative overflow-hidden rounded-2xl group ${g.h}`}>
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
          </div>
        ))}
      </div>
    </Section>
  );
}

const REVIEWS = [
  { name: "Sophie L.", rating: 5, text: "Vue directe sur le lagon, couchers de soleil à couper le souffle. Un vrai paradis !" },
  { name: "Marc D.", rating: 5, text: "Les bungalows face mer sont sublimes. L'équipe est aux petits soins, on a adoré." },
  { name: "Claire R.", rating: 4, text: "Piscines, plage, snorkeling... on n'a pas vu le temps passer. À refaire en famille." },
  { name: "Antoine P.", rating: 5, text: "L'observation des baleines en septembre fut magique. Hôtel parfaitement situé." },
];

function Reviews() {
  return (
    <Section id="reviews" eyebrow="Avis clients" title="Ils ont vécu Ifaty" className="bg-secondary/40">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {REVIEWS.map((r) => (
          <article key={r.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all">
            <div className="flex gap-0.5 text-accent mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-current" : "opacity-30"}`} />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed">"{r.text}"</p>
            <div className="mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">— {r.name}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Location() {
  return (
    <Section id="location" eyebrow="Localisation" title="Nous trouver">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl overflow-hidden shadow-soft min-h-[380px]">
          <iframe
            title="Localisation Ifaty Beach Club"
            src="https://www.google.com/maps?q=Mangily+Ifaty+Madagascar&output=embed"
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <ul className="space-y-5">
            <li className="flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <MapPin />
              </span>
              <div>
                <div className="font-semibold text-foreground">Adresse</div>
                <div className="text-muted-foreground text-sm">VJF5+F99, Mangily, Ifaty, Madagascar</div>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Phone />
              </span>
              <div>
                <div className="font-semibold text-foreground">Téléphone</div>
                <a href="tel:+261346117982" className="text-muted-foreground text-sm hover:text-primary">+261 34 61 179 82</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Car />
              </span>
              <div>
                <div className="font-semibold text-foreground">Depuis Tuléar</div>
                <div className="text-muted-foreground text-sm">Environ 27 km au nord par la RN9</div>
              </div>
            </li>
          </ul>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Mangily+Ifaty+Madagascar"
            target="_blank"
            rel="noreferrer"
            className="mt-8"
          >
            <Button className="bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90 rounded-full px-8 h-12">
              Obtenir l'itinéraire
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Réservation" title="Demander une disponibilité">
      <div className="grid lg:grid-cols-5 gap-8">
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Merci ! Votre demande a bien été envoyée."); }}
          className="lg:col-span-3 bg-card rounded-3xl p-8 shadow-card grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label>Nom</Label><Input required placeholder="Votre nom" /></div>
            <div><Label>Email</Label><Input type="email" required placeholder="vous@email.com" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label>Téléphone</Label><Input placeholder="+261 ..." /></div>
            <div><Label>Personnes</Label><Input type="number" min={1} defaultValue={2} /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><Label>Arrivée</Label><Input type="date" required /></div>
            <div><Label>Départ</Label><Input type="date" required /></div>
          </div>
          <div><Label>Message</Label><Textarea rows={4} placeholder="Vos préférences, questions..." /></div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="submit" className="bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90 rounded-full px-7 h-12">
              Envoyer la demande
            </Button>
            <a href="https://wa.me/261346117982" target="_blank" rel="noreferrer">
              <Button type="button" variant="outline" className="rounded-full px-7 h-12 border-eco text-foreground hover:bg-eco/10">
                <MessageCircle className="mr-2 h-4 w-4" /> Réserver sur WhatsApp
              </Button>
            </a>
          </div>
        </form>
        <aside className="lg:col-span-2 rounded-3xl p-8 bg-gradient-hero text-white shadow-soft relative overflow-hidden">
          <div className="absolute inset-0 bg-deep/30" />
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold mb-3">Une question rapide ?</h3>
            <p className="text-white/85 mb-6">Notre équipe vous répond en moins de 24h.</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +261 34 61 179 82</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> contact@ifatybeachclub.mg</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Mangily, Ifaty</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/20 text-xs text-white/75">
              Réception ouverte 24h/24
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/261346117982"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-eco text-white grid place-items-center shadow-soft hover:scale-110 transition-transform pulse-ring"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function VitrineHomePage() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <Rooms />
        <Services />
        <Activities />
        <Gallery />
        <Attractions />
        <Ecology />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
