import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Banknote,
  BedDouble,
  CalendarClock,
  ClipboardList,
  Handshake,
  Leaf,
  Mail,
  ScrollText,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Footer } from "./footer";
import { Header } from "./header";
import hero from "@/assets/hero-lagoon.jpg";

function InfoTable({
  head,
  rows,
}: {
  head: [string, string];
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="overflow-hidden radius-card border border-border/60 shadow-card">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-secondary/50">
            <th className="px-4 py-3 font-semibold text-foreground">{head[0]}</th>
            <th className="px-4 py-3 font-semibold text-foreground">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={row.label}
              className={idx % 2 === 0 ? "bg-background" : "bg-secondary/20"}
            >
              <td className="px-4 py-3 align-top font-medium text-foreground">
                {row.label}
              </td>
              <td className="px-4 py-3 align-top text-muted-foreground">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PartenairesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section
          id="top"
          className="relative flex h-[52vh] min-h-[380px] items-center justify-center overflow-hidden"
        >
          <img
            src={hero}
            alt="Espace partenaires Ifaty Beach Club"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-white">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
              <Handshake className="h-4 w-4" /> Partenaires & agences
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Cahier des charges hôtelier 2027
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Conditions de réservation, tarifs et responsabilités pour les agences de
              voyage et tours opérateurs.
            </p>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-4 sm:grid-cols-3">
              <div className="radius-card bg-card p-5 text-sm shadow-card">
                <div className="font-semibold text-foreground">Établissement</div>
                <div className="mt-1 text-muted-foreground">
                  Hôtel Ifaty Beach Club Resort
                </div>
              </div>
              <div className="radius-card bg-card p-5 text-sm shadow-card">
                <div className="font-semibold text-foreground">Localisation</div>
                <div className="mt-1 text-muted-foreground">
                  Mangily, Toliara, Madagascar
                </div>
              </div>
              <div className="radius-card bg-card p-5 text-sm shadow-card">
                <div className="font-semibold text-foreground">Référence</div>
                <div className="mt-1 text-muted-foreground">
                  Cahier des charges — 2027
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible defaultValue="objet" className="w-full">
              <AccordionItem value="objet">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <ScrollText className="h-4 w-4 text-primary" /> 1. Objet et périmètre
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 px-1 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Objet.</strong> Le présent cahier des
                    charges formalise les prestations, conditions de réservation, modalités
                    financières, règles d'annulation et responsabilités applicables aux
                    partenaires de l'Hôtel Ifaty Beach Club Resort pour l'année 2027.
                  </p>
                  <p>
                    <strong className="text-foreground">Périmètre.</strong> Il s'adresse aux
                    agences de voyages, tours opérateurs et autres organismes agréés
                    organisant des séjours ou prestations pour leurs clients.
                  </p>
                  <p>
                    <strong className="text-foreground">Acceptation.</strong> Toute réservation
                    effectuée par un partenaire implique l'acceptation pleine et entière des
                    conditions prévues dans le présent document, ainsi que l'engagement d'en
                    informer le client.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="capacite">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <BedDouble className="h-4 w-4 text-primary" /> 2. Présentation et capacité
                    d'accueil
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 px-1 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    L'Ifaty Beach Club Resort dispose de 23 chambres, réparties entre un
                    environnement côté jardin et un côté bord de mer avec vue. Niveau de
                    confort annoncé : hôtel 3 étoiles.
                  </p>
                  <BulletList
                    items={[
                      "Chambres doubles et chambres familiales.",
                      "Une chambre est équipée d'une cuisine.",
                      "Certaines chambres disposent d'une télévision.",
                      "Toutes les unités disposent de ventilateurs.",
                      "Climatisation disponible avec supplément de 50 000 Ariary par jour.",
                      "Coffre-fort disponible dans chaque chambre.",
                      "Chambres dédiées aux chauffeurs et guides, à réserver simultanément avec les chambres clients.",
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prestations">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-primary" /> 3. Prestations et services
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 px-1 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <div className="mb-2 font-semibold text-foreground">3.1 Hébergement</div>
                    <p>
                      Les réservations doivent préciser le type et le nombre de chambres
                      ainsi que les besoins spécifiques.
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">3.2 Restauration</div>
                    <InfoTable
                      head={["Espace", "Capacité"]}
                      rows={[
                        { label: "Restaurant principal", value: "Jusqu'à 50 personnes" },
                        { label: "Terrasse pergola", value: "Jusqu'à 20 personnes" },
                        { label: "Pergola front de mer", value: "Jusqu'à 40 personnes" },
                      ]}
                    />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      3.3 Activités et services complémentaires
                    </div>
                    <BulletList
                      items={[
                        "Sorties en bateau à moteur ou en pirogue.",
                        "Snorkeling.",
                        "Sorties baleines en saison.",
                        "Location de quad ou de voiture.",
                        "Salle de massage avec huiles essentielles locales.",
                        "Deux piscines.",
                        "Jacuzzi.",
                        "Organisation de transferts pour les clients.",
                      ]}
                    />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      3.4 Engagement en faveur du tourisme durable
                    </div>
                    <p>
                      L'établissement utilise une centrale solaire pour l'alimentation en
                      électricité de ses installations, dans une démarche de réduction de
                      son empreinte écologique.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="commercial">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <Banknote className="h-4 w-4 text-primary" /> 4. Conditions commerciales
                    2027
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 px-1 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Les tarifs sont exprimés en Ariary (MGA) et sont valables pour l'année
                    2027. Toute révision des tarifs est communiquée aux partenaires avant
                    l'année suivante.
                  </p>
                  <BulletList
                    items={[
                      "Taxe communale : 2 000 MGA par nuitée et par chambre.",
                      "Vignette touristique : 5 000 MGA par nuitée et par chambre.",
                      "Remise agence : 10 % sur le montant de l'hébergement.",
                      "Remise groupe : 15 % sur le montant de l'hébergement pour une réservation de plus de 30 personnes.",
                      "Option demi-pension : remise de 20 % sur le montant total de l'hébergement lorsque la formule demi-pension est choisie.",
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="horaires">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 text-primary" /> 5. Horaires et règles de
                    séjour
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-1 text-sm leading-relaxed text-muted-foreground">
                  <InfoTable
                    head={["Service", "Condition"]}
                    rows={[
                      {
                        label: "Check-in",
                        value: "Arrivée possible à tout moment ; accès à la chambre dès l'arrivée.",
                      },
                      { label: "Check-out", value: "Départ au plus tard à 11h00." },
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="reservation">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-primary" /> 6. Procédure de
                    réservation
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 px-1 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      6.1 Informations obligatoires à la demande
                    </div>
                    <BulletList
                      items={[
                        "Nom du client.",
                        "Nombre de personnes : adultes et enfants avec âge.",
                        "Type et nombre de chambres.",
                        "Choix de la pension : petit-déjeuner, demi-pension, pension complète, etc.",
                        "Demande de transfert.",
                        "Particularités ou demandes spécifiques : régime alimentaire, lit bébé, lune de miel, etc.",
                      ]}
                    />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      6.2 Traitement de la demande
                    </div>
                    <p>
                      L'hôtel enregistre la demande et répond par email. Il communique la
                      date limite de confirmation, fixée à 60 jours avant l'arrivée des
                      clients. Si un autre client sollicite les mêmes chambres, l'hôtel
                      informe en priorité l'agence afin qu'elle puisse confirmer ou annuler
                      la demande.
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">6.3 Modifications</div>
                    <p>
                      Toute modification de dates, de nombre de chambres ou de services
                      supplémentaires doit être notifiée par écrit. La modification est
                      traitée selon disponibilité et confirmée par email.
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      6.4 Confirmation et acompte
                    </div>
                    <p>
                      L'agence doit confirmer la réservation par email avant la date limite
                      de 60 jours. Après confirmation, l'hôtel transmet une facture
                      proforma. La réservation est considérée comme validée uniquement
                      après réception du paiement de 50 % du montant total au plus tard 60
                      jours avant l'arrivée.
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      6.5 Rooming list — groupes
                    </div>
                    <BulletList
                      items={[
                        "Noms et prénoms des clients.",
                        "Âge et conditions physiques si possible.",
                        "Type de chambre attribué à chaque client.",
                        "Demandes spécifiques liées à chaque chambre.",
                      ]}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="paiement">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <Banknote className="h-4 w-4 text-primary" /> 7. Conditions de paiement
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 px-1 text-sm leading-relaxed text-muted-foreground">
                  <BulletList
                    items={[
                      "Acompte : 50 % du montant total au moment de la confirmation et au plus tard 60 jours avant l'arrivée.",
                      "Solde : à régler avant l'enregistrement des clients à l'hôtel.",
                      "Motif de virement/versement : mentionner le nom du client.",
                      "Copie de la transaction : à transmettre à l'hôtel pour validation.",
                      "La confirmation de paiement est envoyée après réception effective du règlement sur le compte bancaire.",
                      "Tous les frais bancaires et frais de transaction sont à la charge de l'agence.",
                    ]}
                  />
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      Coordonnées bancaires (CGV 2027)
                    </div>
                    <InfoTable
                      head={["Champ", "Valeur"]}
                      rows={[
                        { label: "Titulaire", value: "SOCIETE IFATY BEACH CLUB RESORT" },
                        { label: "Domiciliation", value: "BOA — Agence Toliara" },
                        { label: "Code banque", value: "00009" },
                        { label: "Code guichet", value: "06000" },
                        { label: "Compte", value: "1 769641 007 0" },
                        { label: "Clé RIB", value: "25" },
                      ]}
                    />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      7.1 Retard de paiement
                    </div>
                    <BulletList
                      items={[
                        "Intérêts de retard : 5 % du montant dû par tranche de 10 jours de retard.",
                        "Au-delà de 30 jours de retard, l'hôtel peut suspendre les accords commerciaux avec l'agence concernée.",
                        "Les contrats en cours sont alors honorés uniquement après paiement intégral ou, à défaut, avant l'arrivée des clients.",
                        "Après paiement complet, les conditions contractuelles peuvent être rétablies.",
                      ]}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="annulation">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-primary" /> 8. Annulations et no-show
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 px-1 text-sm leading-relaxed text-muted-foreground">
                  <InfoTable
                    head={["Situation", "Pénalité"]}
                    rows={[
                      {
                        label: "Annulation à moins de 30 jours avant l'arrivée",
                        value: "50 % du montant total de la réservation",
                      },
                      {
                        label: "Annulation à moins de 10 jours avant l'arrivée",
                        value: "100 % du montant total de la réservation",
                      },
                      { label: "No-show", value: "100 % du montant total de la réservation" },
                      {
                        label: "Annulation partielle d'un groupe",
                        value:
                          "Pénalité calculée proportionnellement au nombre de chambres annulées",
                      },
                    ]}
                  />
                  <p>
                    Toute annulation ou modification doit être communiquée par écrit à
                    l'hôtel, par email.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="responsabilites">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> 9. Répartition des
                    responsabilités
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 px-1 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      9.1 Engagement de l'hôtel
                    </div>
                    <p className="mb-2">
                      L'hôtel s'engage à fournir des services conformes à la qualité
                      attendue.
                    </p>
                    <BulletList
                      items={[
                        "Force majeure : grèves, catastrophes naturelles, événements imprévus ou situations indépendantes de la volonté de l'hôtel.",
                        "Comportement des clients : l'hôtel décline toute responsabilité pour les dommages causés par les clients.",
                        "Vols et pertes : l'hôtel ne peut être tenu responsable des vols ou pertes d'objets personnels ; un coffre-fort est disponible dans chaque chambre.",
                      ]}
                    />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      9.2 Engagement de l'agence de voyage
                    </div>
                    <BulletList
                      items={[
                        "Transmettre correctement les informations relatives aux réservations.",
                        "Assurer le recueil des paiements.",
                        "Veiller au respect des conditions de séjour par ses clients.",
                        "Informer les clients des conditions applicables.",
                      ]}
                    />
                  </div>
                  <div>
                    <div className="mb-2 font-semibold text-foreground">
                      9.3 Engagement du client
                    </div>
                    <BulletList
                      items={[
                        "Respecter les règles et consignes de l'hôtel.",
                        "En cas de non-respect des règles ou de comportement perturbateur, l'hôtel se réserve le droit de mettre fin au séjour sans remboursement.",
                        "Toute violation des lois locales, notamment en matière de tourisme sexuel, est signalée aux autorités compétentes.",
                      ]}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="litiges">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-primary" /> 10. Réclamations,
                    litiges et force majeure
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-1 text-sm leading-relaxed text-muted-foreground">
                  <BulletList
                    items={[
                      "Toute réclamation concernant les prestations doit être adressée par écrit à l'hôtel, par email.",
                      "L'hôtel s'engage à traiter les réclamations de manière professionnelle et dans les meilleurs délais.",
                      "En cas de différend, l'hôtel et l'agence s'efforcent de rechercher une solution amiable dans les meilleurs délais.",
                      "Aucune partie n'est responsable lorsque l'exécution des obligations est empêchée par un événement de force majeure tel que défini par la législation applicable.",
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="engagement">
                <AccordionTrigger className="px-1 text-base">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" /> 11. Engagement du partenaire
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 px-1 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    En collaborant avec l'Ifaty Beach Club Resort, le partenaire s'engage à
                    respecter les procédures de réservation, les délais de confirmation et
                    de paiement, les conditions d'annulation ainsi que les règles de séjour
                    et de communication des informations clients.
                  </p>
                  <p>
                    Les collaborateurs/partenaires doivent retourner le présent document
                    signé et cacheté afin de pouvoir bénéficier des avantages commerciaux
                    de l'hôtel.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 radius-card bg-gradient-hero p-8 text-center text-white shadow-soft">
              <h2 className="font-display text-2xl font-semibold">
                Devenir partenaire de l'Ifaty Beach Club Resort
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
                Pour recevoir le cahier des charges complet à signer et cacheter, ou pour
                toute question sur les conditions 2027, contactez directement l'équipe
                commerciale.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:contact@ifaty.com">
                  <Button className="h-12 radius-pill border-0 bg-white px-7 text-[color:var(--deep)] hover:opacity-90">
                    <Mail className="mr-2 h-4 w-4" /> Contacter l'équipe
                  </Button>
                </a>
                <Link to="/#contact">
                  <Button
                    variant="outline"
                    className="h-12 radius-pill border-white/60 px-7 text-white hover:bg-white/10"
                  >
                    Faire une demande de disponibilité
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
