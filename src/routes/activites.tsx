import { createFileRoute } from "@tanstack/react-router";
import { ActivitesPage } from "@/components/page/vitrine/activites";
import actWhales from "@/assets/activity-whales.jpg";

export const Route = createFileRoute("/activites")({
  head: () => ({
    meta: [
      { title: "Activites & excursions | Ifaty Beach Club" },
      {
        name: "description",
        content:
          "Snorkeling, sorties en pirogue, observation des baleines, quad, peche sportive et bien plus a Ifaty, Madagascar.",
      },
      { property: "og:title", content: "Activites - Ifaty Beach Club" },
      {
        property: "og:description",
        content:
          "Vivez le lagon d'Ifaty : aventures nautiques, observation de la faune et explorations terrestres.",
      },
      { property: "og:image", content: actWhales },
    ],
  }),
  component: ActivitesPage,
});
