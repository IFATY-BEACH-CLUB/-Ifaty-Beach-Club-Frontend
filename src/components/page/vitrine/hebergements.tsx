import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Users, ChevronRight, ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { Footer } from "./footer";
import roomDouble from "@/assets/room-double.jpg";
import roomGarden from "@/assets/room-bungalow-garden.jpg";
import roomSea from "@/assets/room-bungalow-sea.jpg";
import roomFamily from "@/assets/room-family.jpg";
import hero from "@/assets/hero-lagoon.jpg";

const ROOMS = [
  { name: "Chambre Double", type: "Double", capacity: 2, price: 65, img: roomDouble, features: ["Vue jardin", "Ventilateur", "Salle de bain privative", "Lit double confortable"], desc: "Une chambre cosy idéale pour les couples, baignée de lumière naturelle et au calme du jardin tropical." },
  { name: "Chambre Twin", type: "Twin", capacity: 2, price: 70, img: roomDouble, features: ["Lits jumeaux", "Climatisation", "Coffre-fort", "Bureau"], desc: "Parfaite pour deux voyageurs, avec deux lits séparés et le confort de la climatisation." },
  { name: "Chambre Triple", type: "Triple", capacity: 3, price: 85, img: roomFamily, features: ["3 personnes", "Ventilateur", "Coffre-fort", "Salle de bain privative"], desc: "Spacieuse et lumineuse, conçue pour les petites familles ou groupes d'amis." },
  { name: "Chambre Familiale", type: "Familiale", capacity: 4, price: 110, img: roomFamily, features: ["4 personnes", "Climatisation", "Espace salon", "2 chambres"], desc: "Le choix idéal pour les familles, avec un coin salon et de l'espace pour tous." },
  { name: "Bungalow Jardin", type: "Bungalow Jardin", capacity: 2, price: 95, img: roomGarden, features: ["Toit en chaume", "Terrasse privée", "Vue jardin", "Hamac"], desc: "Un cocon en toit de chaume au cœur du jardin tropical, terrasse privative et hamac." },
  { name: "Bungalow Vue Mer", type: "Bungalow Vue Mer", capacity: 2, price: 140, img: roomSea, features: ["Face au lagon", "Climatisation", "Coffre-fort", "Terrasse vue mer"], desc: "Réveillez-vous face au lagon turquoise. Le bungalow le plus prisé de l'hôtel." },
];
const FILTERS = ["Tous", "Double", "Twin", "Triple", "Familiale", "Bungalow Jardin", "Bungalow Vue Mer"];

export function HebergementsPage() {
  const [filter, setFilter] = useState("Tous");
  const list = filter === "Tous" ? ROOMS : ROOMS.filter((r) => r.type === filter);
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
          <img src={hero} alt="Ifaty Beach Club" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-6 left-6 z-10">
            <Link to="/">
              <Button variant="outline" size="sm" className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
              </Button>
            </Link>
          </div>
          <div className="relative z-10 text-center px-5 text-white max-w-3xl">
            <div className="inline-flex items-center gap-2 text-accent uppercase tracking-[0.3em] text-xs mb-4">
              <Waves className="h-4 w-4" /> Hébergements
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              Toutes nos chambres & bungalows
            </h1>
            <p className="mt-4 text-white/85 text-lg">
              Du confort intime aux bungalows face au lagon, trouvez le cocon qui vous ressemble.
            </p>
          </div>
        </section>

        {/* List */}
        <section className="py-16 lg:py-24 px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {FILTERS.map((f) => (
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
                  className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-background/95 backdrop-blur text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Users className="h-3 w-3" /> {r.capacity}&nbsp;pers.
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground">{r.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                    <ul className="mt-4 space-y-1.5">
                      {r.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ChevronRight className="h-3.5 w-3.5 text-accent" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6 flex items-end justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground">À partir de</div>
                        <div className="font-display text-2xl font-semibold text-primary">
                          {r.price}€<span className="text-sm text-muted-foreground font-sans">/nuit</span>
                        </div>
                      </div>
                      <Link to="/" hash="contact">
                        <Button size="sm" className="rounded-full bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90">
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
      </main>
      <Footer />
    </div>
  );
}
