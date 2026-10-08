import { Link } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { api, type GalleryItem } from "@/api";
import {
  Anchor,
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  ChevronRight,
  Compass,
  Eye,
  Fish,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Plane,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Trees,
  Utensils,
  Users,
  Waves,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Footer } from "./footer";
import { Header } from "./header";

import actPirogue from "@/assets/activity-pirogue.jpg";
import actQuad from "@/assets/images/quad.jpeg";
import actSnorkel from "@/assets/activity-snorkeling.jpg";
import actWhales from "@/assets/activity-whales.jpg";
import attrBaobabs from "@/assets/attraction-baobabs.jpg";
import attrSpiny from "@/assets/attraction-spiny.jpg";
import attrTortoises from "@/assets/attraction-tortoises.jpg";
import galBeach from "@/assets/images/ifaty_plage.jpeg";
import galPool from "@/assets/images/vue_piscine.jpg";
import galRestaurant from "@/assets/images/vue_table_manger.jpg";
import galSunset from "@/assets/images/vue_cocher_soleil.jpg";
import hero from "@/assets/images/vue_plage.jpg";
import presentation from "@/assets/images/vue_bengalow (1).jpg";
import roomDouble from "@/assets/images/deux_lit_twin.jpeg";
import roomDouble2 from "@/assets/room-double.jpg";
import roomGarden from "@/assets/images/bengalowTest.jpeg";
import roomSea from "@/assets/images/vue_bengalow2.jpg";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

const ROOMS = [
  {
    name: "Chambre Double",
    type: "Double",
    img: roomDouble2,
    features: ["1 grand lit"],
  },
  {
    name: "Chambre Twin",
    type: "Twin",
    img: roomDouble,
    features: ["1 grand lit", "1 petit lit"],
  },
  {
    name: "Chambre Familiale vue mer",
    type: "Familiale vue mer",
    img: roomSea,
    features: ["1 grand lit", "2 petits lits"],
  },
  {
    name: "Chambre Familiale côté jardin",
    type: "Familiale côté jardin",
    img: roomGarden,
    features: ["2 grands lits", "1 petit lit"],
  },
];

const ROOM_FILTERS = ["Tous", "Double", "Twin", "Familiale vue mer", "Familiale côté jardin"];

const ROOM_TYPE_OPTIONS = ROOMS.map((room) => room.name);

const PENSION_OPTIONS = [
  "Petit-déjeuner",
  "Demi-pension",
  "Pension complète",
];

const SERVICES = [
  { icon: Waves, label: "Deux piscines extérieures" },
  { icon: Bath, label: "Jacuzzi" },
  { icon: Utensils, label: "Restaurant & bar" },
  { icon: Wifi, label: "Wi-Fi gratuit" },
  { icon: Car, label: "Parking gratuit" },
  { icon: Plane, label: "Transfert aéroport" },
  { icon: ShieldCheck, label: "Réception 24h/24" },
  { icon: Sun, label: "Accès plage" },
];

const ACTIVITIES = [
  { name: "Snorkeling", cat: "Nautique", img: actSnorkel, icon: Fish },
  {
    name: "Sorties en pirogue",
    cat: "Nautique",
    img: actPirogue,
    icon: Sailboat,
  },
  {
    name: "Observation des baleines",
    cat: "Nature",
    img: actWhales,
    icon: Waves,
    note: "Juin à septembre",
  },
  { name: "Quad & 4x4", cat: "Aventure", img: actQuad, icon: Compass },
  { name: "Pêche sportive", cat: "Aventure", img: actPirogue, icon: Anchor },
  { name: "Randonnées", cat: "Nature", img: attrSpiny, icon: Mountain },
];

const ACT_FILTERS = ["Toutes", "Nautique", "Aventure", "Nature"];

const ATTRACTIONS = [
  {
    name: "Village des Tortues",
    img: attrTortoises,
    desc: "Sanctuaire de tortues endémiques - quelques minutes.",
  },
  {
    name: "Plage d'Ifaty",
    img: galBeach,
    desc: "Sable clair, eaux turquoise et sorties sur le récif.",
  },
  {
    name: "Forêt des baobabs",
    img: attrBaobabs,
    desc: "Paysages emblématiques du sud-ouest malgache.",
  },
  {
    name: "Forêt épineuse",
    img: attrSpiny,
    desc: "Écosystème unique, idéal pour une excursion nature.",
  },
];

const GALLERY = [
  { src: galPool, className: "row-span-2", alt: "Piscine de l'hôtel" },
  { src: galBeach, className: "", alt: "Plage d'Ifaty" },
  { src: galSunset, className: "", alt: "Coucher de soleil sur le lagon" },
  { src: galRestaurant, className: "", alt: "Restaurant de l'hôtel" },
  { src: roomSea, className: "", alt: "Bungalow vue mer" },
  { src: actSnorkel, className: "row-span-2", alt: "Snorkeling dans le lagon" },
  { src: roomGarden, className: "", alt: "Bungalow jardin" },
  { src: actPirogue, className: "", alt: "Pirogue traditionnelle" },
];

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-20 lg:px-8 lg:py-28 reveal ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".hero-parallax");
    if (!el) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        el.style.transform = `translateY(${Math.min(window.scrollY, 480) * 0.18}px)`;
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
    <section id="top" className="relative min-h-[92vh] overflow-hidden">
      <img
        src={hero}
        alt="Lagon d'Ifaty au coucher de soleil"
        className="hero-parallax absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-24 pb-28 text-white lg:px-8">
        <div className="max-w-4xl animate-float-up">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80 md:text-sm">
            Mangily - Ifaty - Madagascar
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Ifaty Beach Club, hôtel face au lagon
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Séjournez entre plage, piscines, bungalows tropicaux et excursions
            marines dans l'une des plus belles baies du sud-ouest malgache.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact">
              <Button
                size="lg"
                className="h-12 radius-pill border-0 bg-gradient-sunset px-8 text-primary-foreground transition-transform hover:scale-105 hover:opacity-90"
              >
                Vérifier les disponibilités
              </Button>
            </a>
            <Link to="/hebergements">
              <Button
                size="lg"
                variant="outline"
                className="h-12 radius-pill border-white/40 bg-white/10 px-8 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20 hover:text-white"
              >
                Voir les chambres
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-6 z-10 mx-auto grid max-w-5xl gap-3 radius-card border border-white/20 bg-white/12 p-4 text-white backdrop-blur-md sm:grid-cols-3 lg:bottom-8">
          {[
            { icon: BedDouble, value: "3 étoiles", label: "rénové en 2022" },
            { icon: MapPin, value: "27 km", label: "au nord de Tuléar" },
            { icon: Waves, value: "Lagon", label: "plage et excursions" },
          ].map((item) => (
            <div key={item.value} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center radius-panel bg-white/18">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xl font-semibold leading-none">
                  {item.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Presentation() {
  return (
    <section
      id="presentation"
      className="bg-secondary/40 px-5 py-20 lg:px-8 lg:py-28 reveal"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src={presentation}
            alt="Ifaty Beach Club face à la mer"
            className="h-[420px] w-full radius-card object-cover shadow-soft lg:h-[560px]"
            loading="lazy"
          />
          <div className="absolute -bottom-6 left-6 hidden items-center gap-3 radius-card bg-background p-5 shadow-soft md:flex">
            <span className="grid h-12 w-12 place-items-center radius-panel bg-gradient-sunset text-primary-foreground">
              <Star className="h-6 w-6 fill-current" />
            </span>
            <div>
              <div className="font-display text-xl font-semibold">
                Ambiance familiale
              </div>
              <div className="text-xs text-muted-foreground">
                Plage, jardin et lagon - portée de pas
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Bienvenue
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
            Un refuge tropical entre lagon, sable clair et baobabs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Niché à Mangily, l'Ifaty Beach Club réunit le confort d'un hôtel de
            bord de mer et l'esprit nature d'Ifaty : chambres lumineuses,
            bungalows avec terrasse, restaurant, piscines et départs
            d'excursions.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Waves, label: "Face au lagon turquoise" },
              { icon: Trees, label: "Jardin tropical" },
              { icon: Sparkles, label: "Rénovation complète 2022" },
              { icon: ShieldCheck, label: "Réception 24h/24" },
            ].map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="grid h-10 w-10 place-items-center radius-pill bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  const [filter, setFilter] = useState("Tous");
  const list =
    filter === "Tous" ? ROOMS : ROOMS.filter((room) => room.type === filter);

  return (
    <Section
      id="rooms"
      eyebrow="Hébergements"
      title="Chambres & bungalows"
      subtitle="Choisissez un cocon adapté à votre rythme : jardin, famille ou vue mer."
    >
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="list"
        aria-label="Filtrer les hébergements"
      >
        {ROOM_FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`radius-pill border px-4 py-2 text-sm transition-all ${
              filter === item
                ? "border-primary bg-primary text-primary-foreground shadow-card"
                : "border-border bg-background text-foreground hover:border-primary/60"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((room) => (
          <article
            key={room.name}
            className="group flex overflow-hidden radius-card bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft card-animated"
          >
            <div className="flex w-full flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.img}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {room.name}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between pt-5">
                  <Link to="/#contact"></Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/hebergements">
          <Button
            size="lg"
            className="h-12 radius-pill border-0 bg-gradient-sunset px-8 text-primary-foreground hover:opacity-90"
          >
            Voir tous les hébergements <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services & équipements"
      title="Tout pour un séjour fluide"
      className="bg-secondary/40"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.label}
            className="group flex flex-col items-center gap-3 radius-card bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <span className="grid h-12 w-12 place-items-center radius-panel bg-gradient-sunset text-primary-foreground transition-transform group-hover:scale-110">
              <service.icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-medium text-foreground">
              {service.label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs italic text-muted-foreground">
        Certains services peuvent varier selon la saison.
      </p>
    </Section>
  );
}

function Activities() {
  const [filter, setFilter] = useState("Toutes");
  const list =
    filter === "Toutes"
      ? ACTIVITIES
      : ACTIVITIES.filter((activity) => activity.cat === filter);

  return (
    <Section
      id="activities"
      eyebrow="Activités"
      title="Vivez le lagon, autrement"
      subtitle="Aventures nautiques, observation de la faune et explorations terrestres au départ de l'hôtel."
    >
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        aria-label="Filtrer les activités"
      >
        {ACT_FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`radius-pill border px-4 py-2 text-sm transition-all ${
              filter === item
                ? "border-accent bg-accent text-accent-foreground shadow-card"
                : "border-border bg-background text-foreground hover:border-accent/60"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((activity) => (
          <article
            key={activity.name}
            className="group relative h-72 overflow-hidden radius-card shadow-card card-animated"
          >
            <img
              src={activity.img}
              alt={activity.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute left-4 top-4 radius-pill bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              {activity.cat}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <div className="mb-1 flex items-center gap-2">
                <activity.icon className="h-5 w-5 text-accent" />
                <h3 className="font-display text-2xl font-semibold">
                  {activity.name}
                </h3>
              </div>
              {activity.note && (
                <p className="text-sm text-white/80">{activity.note}</p>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/activites">
          <Button
            size="lg"
            className="h-12 radius-pill border-0 bg-gradient-sunset px-8 text-primary-foreground hover:opacity-90"
          >
            Voir toutes les activités <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[] | null>(null);
  const [galleryError, setGalleryError] = useState(false);

  useEffect(() => {
    let active = true;
    api.getGallery()
      .then((items) => {
        if (active) setGalleryItems(items);
      })
      .catch(() => {
        if (active) setGalleryError(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const displayItems = galleryItems === null ? GALLERY : galleryItems;

  return (
    <Section id="gallery" eyebrow="Galerie" title="L'hôtel en images">
      {galleryError && (
        <p className="mb-4 text-center text-sm text-muted-foreground">
          Galerie momentanément indisponible — affichage de notre sélection.
        </p>
      )}
      {displayItems.length > 0 ? (
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4">
        {displayItems.map((image, index) => (
          <div
            key={"imageUrl" in image ? image.id : image.alt}
            className={`group relative overflow-hidden radius-card ${"className" in image ? image.className : index % 7 === 0 ? "row-span-2" : ""}`}
          >
            <img
              src={"imageUrl" in image ? image.imageUrl : image.src}
              alt={"imageUrl" in image ? "Image de la galerie Ifaty Beach Club" : image.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25" />
          </div>
        ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">Aucune photo disponible pour le moment.</p>
      )}
    </Section>
  );
}

function Attractions() {
  return (
    <Section
      id="attractions"
      eyebrow="À proximité"
      title="Explorez le Sud-Ouest malgache"
      className="bg-secondary/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ATTRACTIONS.map((attraction) => (
          <article
            key={attraction.name}
            className="group overflow-hidden radius-card bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={attraction.img}
                alt={attraction.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {attraction.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {attraction.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Ecology() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28 reveal">
      <div className="mx-auto max-w-6xl radius-card bg-gradient-to-br from-[oklch(0.95_0.04_145)] to-secondary p-8 shadow-card md:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 radius-pill bg-eco/20 px-3 py-1 text-xs font-medium text-foreground">
              <Leaf className="h-3.5 w-3.5" /> Engagement éco-responsable
            </div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              Un séjour respectueux du lagon
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une démarche durable pensée pour préserver l'Écosystème d'Ifaty et
              valoriser les ressources locales.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Sun,
                title: "Énergie solaire",
                text: "Production et eau chaude solaires",
              },
              {
                icon: Sparkles,
                title: "Rénovation 2022",
                text: "Confort modernisé et matériaux durables",
              },
              {
                icon: Leaf,
                title: "Ancrage local",
                text: "Soutien aux communautés et guides locaux",
              },
              {
                icon: Waves,
                title: "Lagon préservé",
                text: "Sensibilisation aux milieux marins",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="radius-card bg-background/70 p-4 backdrop-blur"
              >
                <item.icon className="mb-2 h-6 w-6 text-eco" />
                <div className="text-sm font-semibold text-foreground">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Avis des voyageurs"
      title="Pourquoi choisir cet hôtel ?"
      className="bg-secondary/40"
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="radius-card bg-card p-6 shadow-card border border-border/50">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Les avis soulignent principalement :
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "Son emplacement exceptionnel face au lagon",
                  color: "text-primary bg-primary/10",
                },
                {
                  icon: Sun,
                  text: "Ses magnifiques couchers de soleil",
                  color: "text-accent bg-accent/10",
                },
                {
                  icon: Waves,
                  text: "Ses piscines et espaces de détente",
                  color: "text-primary bg-primary/10",
                },
                {
                  icon: Anchor,
                  text: "La proximité des activités nautiques",
                  color: "text-accent bg-accent/10",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center radius-panel ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground mt-0.5 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7">
          <div className="radius-card bg-card p-6 shadow-card border border-border/50">
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
              L'Ifaty Beach Club Resort est particulièrement adapté aux
              voyageurs recherchant :
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Sun, text: "Un séjour balnéaire à Ifaty" },
                {
                  icon: Anchor,
                  text: "Des excursions marines et la découverte du lagon",
                },
                { icon: Fish, text: "L'observation des baleines en saison" },
                { icon: Users, text: "Des vacances en famille" },
                {
                  icon: Eye,
                  text: "Un cadre idéal pour admirer les couchers de soleil sur le canal du Mozambique.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center radius-pill bg-white text-primary shadow-sm">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-medium text-foreground leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Location() {
  return (
    <Section id="location" eyebrow="Localisation" title="Nous trouver">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="min-h-[380px] overflow-hidden radius-card shadow-soft">
          <iframe
            title="Localisation Ifaty Beach Club"
            src="https://www.google.com/maps?q=Mangily+Ifaty+Madagascar&output=embed"
            className="h-full min-h-[380px] w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <ul className="space-y-5">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                text: "B.P 285, Tuléar 601, Madagascar",
              },
              {
                icon: Car,
                title: "Depuis Tuléar",
                text: "Environ 27 km au nord par la RN9",
              },
              {
                icon: CalendarDays,
                title: "Accueil",
                text: "Réception ouverte 24h/24, transfert sur demande",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center radius-panel bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.text}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Mangily+Ifaty+Madagascar"
            target="_blank"
            rel="noreferrer"
            className="mt-8"
          >
            <Button className="h-12 radius-pill border-0 bg-gradient-sunset px-8 text-primary-foreground hover:opacity-90">
              Obtenir l'itinéraire
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [transfert, setTransfert] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Réservation"
      title="Demander une disponibilité"
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Merci ! Votre demande a bien été envoyée.");
          }}
          className="grid gap-4 radius-card bg-card p-6 shadow-card lg:col-span-3 md:p-8"
        >
          {/* Nom du client */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Nom du client</Label>
              <Input required placeholder="Votre nom" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" required placeholder="vous@email.com" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Téléphone</Label>
              <Input placeholder="+261 ..." />
            </div>
          </div>

          {/* Nombre de personnes : adultes et enfants avec âge */}
          <div>
            <Label>Nombre de personnes</Label>
            <div className="mt-1 grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-xs font-normal text-muted-foreground">
                  Adultes
                </Label>
                <Input type="number" min={1} defaultValue={2} />
              </div>
              <div>
                <Label className="text-xs font-normal text-muted-foreground">
                  Enfants
                </Label>
                <Input type="number" min={0} defaultValue={0} />
              </div>
            </div>
            <Input
              className="mt-2"
              placeholder="Âge des enfants (ex : 4 ans, 9 ans)"
            />
          </div>

          {/* Type et nombre de chambres */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Type de chambre</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un type de chambre" />
                </SelectTrigger>
                <SelectContent>
                  {ROOM_TYPE_OPTIONS.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Nombre de chambres</Label>
              <Input type="number" min={1} defaultValue={1} />
            </div>
          </div>

          {/* Choix de la pension */}
          <div>
            <Label>Choix de la pension</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une formule" />
              </SelectTrigger>
              <SelectContent>
                {PENSION_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Arrivée</Label>
              <Input type="date" required />
            </div>
            <div>
              <Label>Départ</Label>
              <Input type="date" required />
            </div>
          </div>

          {/* Demande de transfert */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="transfert"
              checked={transfert}
              onCheckedChange={(checked) => setTransfert(checked === true)}
            />
            <Label htmlFor="transfert" className="cursor-pointer font-normal">
              Je souhaite une demande de transfert (aéroport / gare)
            </Label>
          </div>

          {/* Particularités ou demandes spécifiques */}
          <div>
            <Label>Particularités ou demandes spécifiques</Label>
            <Textarea
              rows={4}
              placeholder="Régime alimentaire, lit bébé, lune de miel, etc."
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              type="submit"
              className="h-12 radius-pill border-0 bg-gradient-sunset px-7 text-primary-foreground hover:opacity-90"
            >
              Envoyer la demande
            </Button>
            <a
              href="https://wa.me/261385548382"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                type="button"
                variant="outline"
                className="h-12 radius-pill border-eco px-7 text-foreground hover:bg-eco/10"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </form>

        <aside className="relative overflow-hidden radius-card bg-gradient-hero p-8 text-white shadow-soft lg:col-span-2">
          <div className="absolute inset-0 bg-deep/30" />
          <div className="relative">
            <h3 className="mb-3 font-display text-2xl font-semibold">
              Besoin d'une réponse rapide ?
            </h3>
            <p className="mb-6 text-white/85">
              Contactez l'équipe directement pour organiser votre arrivée ou une
              excursion.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4" /> WhatsApp : +261 38 55 483
                82
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" /> contact@ifaty.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" /> B.P 285, Tuléar 601, Madagascar
              </li>
            </ul>
            <div className="mt-8 border-t border-white/20 pt-6 text-xs text-white/75">
              Réponse sous 24h selon disponibilité.
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
      href="https://wa.me/261385548382"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter l'hôtel sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center radius-pill bg-eco text-white shadow-soft transition-transform hover:scale-110 pulse-ring"
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
