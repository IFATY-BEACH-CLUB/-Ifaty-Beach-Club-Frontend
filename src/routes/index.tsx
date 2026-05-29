import { createFileRoute } from "@tanstack/react-router";
import { VitrineHomePage } from "@/components/page/vitrine";
import hero from "@/assets/hero-lagoon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ifaty Beach Club - Hotel face au lagon, Madagascar" },
      {
        name: "description",
        content:
          "Hotel 3 etoiles a Mangily, Ifaty. Bungalows face mer, deux piscines, excursions marines et couchers de soleil inoubliables a Madagascar.",
      },
      { property: "og:title", content: "Ifaty Beach Club - Votre paradis face au lagon" },
      {
        property: "og:description",
        content: "Sejour balneaire, snorkeling, baleines et nuits etoilees sur le lagon d'Ifaty.",
      },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VitrineHomePage,
});
