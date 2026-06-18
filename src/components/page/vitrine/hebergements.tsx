import { Link } from "react-router-dom";
import { useState } from "react";
import { Bath, ChevronRight, ShieldCheck, Waves, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "./footer";
import { Header } from "./header";
import hero from "@/assets/hero-lagoon.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomGarden from "@/assets/room-bungalow-garden.jpg";
import roomSea from "@/assets/room-bungalow-sea.jpg";

const ROOMS = [
  {
    name: "Chambre Double",
    type: "Double",
    capacity: 2,
    price: 65,
    img: roomDouble,
    features: ["Vue jardin", "Ventilateur", "Salle de bain privative", "Lit double confortable"],
    desc: "Une chambre cosy pour les couples, lumineuse et au calme du jardin tropical.",
  },
  {
    name: "Chambre Twin",
    type: "Twin",
    capacity: 2,
    price: 70,
    img: roomDouble,
    features: ["Lits jumeaux", "Climatisation", "Coffre-fort", "Bureau"],
    desc: "Parfaite pour deux voyageurs, avec deux lits séparés et le confort de la climatisation.",
  },
  {
    name: "Chambre Triple",
    type: "Triple",
    capacity: 3,
    price: 85,
    img: roomFamily,
    features: ["3 personnes", "Ventilateur", "Coffre-fort", "Salle de bain privative"],
    desc: "Spacieuse et pratique pour les petites familles ou les groupes d'amis.",
  },
  {
    name: "Chambre Familiale",
    type: "Familiale",
    capacity: 4,
    price: 110,
    img: roomFamily,
    features: ["4 personnes", "Climatisation", "Espace salon", "2 chambres"],
    desc: "Le choix idéal pour les familles, avec un coin salon et de l'espace pour tous.",
  },
  {
    name: "Bungalow Jardin",
    type: "Bungalow Jardin",
    capacity: 2,
    price: 95,
    img: roomGarden,
    features: ["Toit en chaume", "Terrasse privée", "Vue jardin", "Hamac"],
    desc: "Un cocon au cœur du jardin tropical, avec terrasse privative pour ralentir vraiment.",
  },
  {
    name: "Bungalow Vue Mer",
    type: "Bungalow Vue Mer",
    capacity: 2,
    price: 140,
    img: roomSea,
    features: ["Face au lagon", "Climatisation", "Coffre-fort", "Terrasse vue mer"],
    desc: "Réveillez-vous face au lagon turquoise dans le bungalow le plus prisé de l'hôtel.",
  },
];

const FILTERS = [
  "Tous",
  "Double",
  "Twin",
  "Triple",
  "Familiale",
  "Bungalow Jardin",
  "Bungalow Vue Mer",
];

export function HebergementsPage() {
  const [filter, setFilter] = useState("Tous");
  const list = filter === "Tous" ? ROOMS : ROOMS.filter((room) => room.type === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section
          id="top"
          className="relative flex h-[62vh] min-h-[430px] items-center justify-center overflow-hidden"
        >
          <img
            src={hero}
            alt="Hébergements Ifaty Beach Club"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
              <Waves className="h-4 w-4" /> Hébergements
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Chambres & bungalows à Ifaty
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Des chambres simples et confortables aux bungalows face mer, trouvez l'espace qui
              correspond à votre séjour.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 px-5 py-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
            {[
              { icon: Wifi, label: "Wi-Fi gratuit" },
              { icon: Bath, label: "Salle de bain privative" },
              { icon: ShieldCheck, label: "Réception 24h/24" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-3 radius-card bg-background/70 px-4 py-3 text-sm font-medium shadow-card"
              >
                <item.icon className="h-5 w-5 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {FILTERS.map((item) => (
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
                  className="group flex flex-col overflow-hidden radius-card bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={room.img}
                      alt={room.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* <div className="absolute left-3 top-3 flex items-center gap-1 radius-pill bg-background/95 px-3 py-1 text-xs font-medium backdrop-blur">
                      <Users className="h-3 w-3" /> {room.capacity} pers.
                    </div> */}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {room.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {room.desc}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {room.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-accent" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-end justify-between pt-6">
                      {/* <div>
                        <div className="text-xs text-muted-foreground">À partir de</div>
                        <div className="font-display text-2xl font-semibold text-primary">
                          {room.price}€
                          <span className="font-sans text-sm text-muted-foreground">/nuit</span>
                        </div>
                      </div> */}
                      <Link to="/#contact">
                        <Button
                          size="sm"
                          className="radius-pill border-0 bg-gradient-sunset text-primary-foreground hover:opacity-90"
                        >
                          Réserver
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 px-5 py-16 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 radius-card bg-card p-6 text-center shadow-card md:flex-row md:text-left">
            <div>
              <h2 className="font-display text-2xl font-semibold">
                Vous hésitez entre deux catégories ?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Envoyez vos dates et préférences, l'équipe vous orientera vers la chambre la plus
                adaptée.
              </p>
            </div>
            <Link to="/#contact">
              <Button className="h-12 radius-pill border-0 bg-gradient-sunset px-7 text-primary-foreground hover:opacity-90">
                Demander conseil
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

