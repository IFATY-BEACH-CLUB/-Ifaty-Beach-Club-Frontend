import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Fish, Sailboat, Anchor, Waves, Compass, Mountain, Eye, ArrowLeft, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { Footer } from "./footer";
import actSnorkel from "@/assets/activity-snorkeling.jpg";
import actPirogue from "@/assets/activity-pirogue.jpg";
import actWhales from "@/assets/activity-whales.jpg";
import actQuad from "@/assets/activity-quad.jpg";
import attrSpiny from "@/assets/attraction-spiny.jpg";
import hero from "@/assets/hero-lagoon.jpg";

const ACTIVITIES = [
  { name: "Snorkeling", cat: "Nautique", img: actSnorkel, icon: Fish, desc: "Explorez les jardins coralliens à quelques mètres du rivage." },
  { name: "Sorties en pirogue", cat: "Nautique", img: actPirogue, icon: Sailboat, desc: "Glissez sur le lagon à bord d'une pirogue traditionnelle vezo." },
  { name: "Bateau à moteur", cat: "Nautique", img: actPirogue, icon: Anchor, desc: "Découverte rapide des spots les plus secrets du lagon." },
  { name: "Observation des baleines", cat: "Nature", img: actWhales, icon: Waves, note: "Juin à septembre", desc: "Rencontre inoubliable avec les baleines à bosse du canal du Mozambique." },
  { name: "Pêche sportive", cat: "Aventure", img: actPirogue, icon: Fish, desc: "Sortie en mer avec un guide expérimenté pour les passionnés." },
  { name: "Bouée tractée", cat: "Famille", img: actSnorkel, icon: Waves, desc: "Sensations garanties pour petits et grands sur le lagon." },
  { name: "Quad & 4x4", cat: "Aventure", img: actQuad, icon: Compass, desc: "Partez explorer la brousse, les dunes et les villages alentour." },
  { name: "Randonnées", cat: "Nature", img: attrSpiny, icon: Mountain, desc: "Découvrez la forêt épineuse et ses baobabs millénaires." },
  { name: "Découverte du lagon", cat: "Famille", img: actSnorkel, icon: Eye, desc: "Demi-journée guidée à la rencontre du récif et de sa faune." },
];
const FILTERS = ["Toutes", "Nautique", "Aventure", "Nature", "Famille"];

export function ActivitesPage() {
  const [filter, setFilter] = useState("Toutes");
  const list = filter === "Toutes" ? ACTIVITIES : ACTIVITIES.filter((a) => a.cat === filter);
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
          <img src={hero} alt="Activités Ifaty" className="absolute inset-0 h-full w-full object-cover" />
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
              <Sparkles className="h-4 w-4" /> Activités
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              Vivez le lagon, autrement
            </h1>
            <p className="mt-4 text-white/85 text-lg">
              Aventures nautiques, observation de la faune et explorations terrestres.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 px-5 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {FILTERS.map((f) => (
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
                  className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.name}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-background/95 backdrop-blur text-xs font-medium px-3 py-1 rounded-full">
                      {a.cat}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <a.icon className="h-5 w-5 text-accent" />
                      <h3 className="font-display text-xl font-semibold text-foreground">{a.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                    {a.note && (
                      <p className="mt-auto pt-3 text-xs uppercase tracking-wider text-accent font-medium">
                        {a.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/" hash="contact">
                <Button size="lg" className="rounded-full px-8 h-12 bg-gradient-sunset text-primary-foreground border-0 hover:opacity-90">
                  Réserver une activité
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
