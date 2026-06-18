import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Anchor,
  Compass,
  Eye,
  Fish,
  Mountain,
  Sailboat,
  Sparkles,
  Sun,
  Users,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "./footer";
import { Header } from "./header";
import actPirogue from "@/assets/activity-pirogue.jpg";
import actQuad from "@/assets/activity-quad.jpg";
import actSnorkel from "@/assets/activity-snorkeling.jpg";
import actWhales from "@/assets/activity-whales.jpg";
import attrSpiny from "@/assets/attraction-spiny.jpg";
import hero from "@/assets/hero-lagoon.jpg";

const ACTIVITIES = [
  {
    name: "Snorkeling",
    cat: "Nautique",
    img: actSnorkel,
    icon: Fish,
    desc: "Explorez les jardins coralliens - quelques mètres du rivage.",
  },
  {
    name: "Sorties en pirogue",
    cat: "Nautique",
    img: actPirogue,
    icon: Sailboat,
    desc: "Glissez sur le lagon à bord d'une pirogue traditionnelle vezo.",
  },
  {
    name: "Bateau à moteur",
    cat: "Nautique",
    img: actPirogue,
    icon: Anchor,
    desc: "Rejoignez rapidement les spots plus éloignés du récif.",
  },
  {
    name: "Observation des baleines",
    cat: "Nature",
    img: actWhales,
    icon: Waves,
    note: "Juin à septembre",
    desc: "Rencontre mémorable avec les baleines à bosse du canal du Mozambique.",
  },
  {
    name: "Pêche sportive",
    cat: "Aventure",
    img: actPirogue,
    icon: Fish,
    desc: "Sortie en mer avec un guide expérimenté pour les passionnés.",
  },
  {
    name: "Bouée tractée",
    cat: "Famille",
    img: actSnorkel,
    icon: Waves,
    desc: "Sensations accessibles pour petits et grands sur le lagon.",
  },
  {
    name: "Quad & 4x4",
    cat: "Aventure",
    img: actQuad,
    icon: Compass,
    desc: "Partez explorer la brousse, les dunes et les villages alentour.",
  },
  {
    name: "Randonnées",
    cat: "Nature",
    img: attrSpiny,
    icon: Mountain,
    desc: "Découvrez la forêt épineuse et les paysages de baobabs.",
  },
  {
    name: "Découverte du lagon",
    cat: "Famille",
    img: actSnorkel,
    icon: Eye,
    desc: "Demi-journ-e guidée à la rencontre du récif et de sa faune.",
  },
];

const FILTERS = ["Toutes", "Nautique", "Aventure", "Nature", "Famille"];

export function ActivitesPage() {
  const [filter, setFilter] = useState("Toutes");
  const list =
    filter === "Toutes" ? ACTIVITIES : ACTIVITIES.filter((activity) => activity.cat === filter);

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
            alt="Activités à Ifaty"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
              <Sparkles className="h-4 w-4" /> Activités
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Lagon, nature et aventures
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Organisez vos sorties nautiques, vos excursions nature et vos aventures terrestres
              directement depuis l'hôtel.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 px-5 py-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
            {[
              { icon: Sun, label: "Départs selon météo" },
              { icon: Users, label: "Activités famille" },
              { icon: Waves, label: "Guides locaux" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-3 radius-card bg-background/70 px-4 py-3 text-sm font-medium shadow-card"
              >
                <item.icon className="h-5 w-5 text-accent" />
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
                  className="group flex flex-col overflow-hidden radius-card bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activity.img}
                      alt={activity.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3 radius-pill bg-background/95 px-3 py-1 text-xs font-medium backdrop-blur">
                      {activity.cat}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <activity.icon className="h-5 w-5 text-accent" />
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {activity.name}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{activity.desc}</p>
                    {activity.note && (
                      <p className="mt-auto pt-4 text-xs font-medium uppercase tracking-wider text-accent">
                        {activity.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/#contact">
                <Button
                  size="lg"
                  className="h-12 radius-pill border-0 bg-gradient-sunset px-8 text-primary-foreground hover:opacity-90"
                >
                  Réserver une activit-
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 radius-card bg-card p-6 shadow-card lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold">
                Une sortie dépend toujours de la mer.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Envoyez vos dates : l'équipe vous proposera les meilleurs créneaux selon la saison,
                la météo et la marée.
              </p>
            </div>
            <Link to="/#contact">
              <Button className="h-12 radius-pill border-0 bg-gradient-sunset px-7 text-primary-foreground hover:opacity-90">
                Planifier mon séjour
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

