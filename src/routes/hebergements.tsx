import { createFileRoute } from "@tanstack/react-router";
import { HebergementsPage } from "@/components/page/vitrine/hebergements";
import roomSea from "@/assets/room-bungalow-sea.jpg";

export const Route = createFileRoute("/hebergements")({
  head: () => ({
    meta: [
      { title: "Hebergements - Chambres & bungalows | Ifaty Beach Club" },
      {
        name: "description",
        content:
          "Decouvrez toutes nos chambres et bungalows face au lagon d'Ifaty : doubles, twin, triples, familiales et bungalows vue mer.",
      },
      { property: "og:title", content: "Hebergements - Ifaty Beach Club" },
      {
        property: "og:description",
        content: "Chambres et bungalows confortables face au lagon turquoise d'Ifaty, Madagascar.",
      },
      { property: "og:image", content: roomSea },
    ],
  }),
  component: HebergementsPage,
});
