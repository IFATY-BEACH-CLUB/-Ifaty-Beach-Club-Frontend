# 🏨 Ifaty Beach Club — Analyse Design & Plan d'Amélioration

## 📊 État Actuel

Le site vitrine est **déjà bien structuré** avec une base solide :
- ✅ Palette de couleurs cohérente (lagon, sable, sunset)
- ✅ Typographie double (Playfair Display + Poppins)
- ✅ Grid responsive (Tailwind v4)
- ✅ Hero immersif plein écran
- ✅ SEO meta tags sur chaque route
- ✅ Bouton WhatsApp flottant

---

## 🔍 Problèmes Identifiés & Améliorations

### 1. 🎭 **Animations au scroll absentes**
- **Problème** : Les sections apparaissent instantanément. Pas de reveal progressif.
- **Amélioration** : Ajouter un `IntersectionObserver` pour animer les sections au scroll (fade-in + slide-up) via un hook `useScrollReveal`.

### 2. 📱 **Menu mobile basique**
- **Problème** : Le menu mobile est un simple dropdown sans animation, sans overlay sombre.
- **Amélioration** : Transformer en slide panel plein écran avec animation, overlay backdrop, et fermeture au clic sur les liens.

### 3. 🖼️ **Galerie sans lightbox**
- **Problème** : Les images de la galerie ne sont pas cliquables. L'utilisateur ne peut pas zoomer.
- **Amélioration** : Ajouter un modal lightbox avec navigation (précédent/suivant) et fermeture.

### 4. 🔝 **Pas de bouton "Retour en haut"**
- **Problème** : Le site est très long. Aucun moyen rapide de revenir en haut.
- **Amélioration** : Bouton flottant "Back to top" qui apparaît après un scroll.

### 5. 🏷️ **Indicateur de section active manquant dans le header**
- **Problème** : Le header ne montre pas quel lien/section est actuellement visible.
- **Amélioration** : Soulignement/highlight du lien de nav correspondant à la section visible via `IntersectionObserver`.

### 6. ❓ **Pas de section FAQ**
- **Problème** : Aucune FAQ. Les visiteurs doivent contacter l'hôtel pour des questions simples.
- **Amélioration** : Ajouter une section FAQ avec accordion (questions fréquentes sur réservation, transfert, saisons, etc.)

### 7. 🎨 **Transitions de filtre sans animation**
- **Problème** : Le changement de filtre dans Rooms/Activities fait un rendu abrupt.
- **Amélioration** : Ajouter une animation CSS de transition (layout animation) lors du filtrage.

### 8. 📄 **Pages Hébergements/Activités sans Header/Footer**
- **Problème** : Les sous-pages `/hebergements` et `/activites` n'ont pas de Header ni Footer partagés.
- **Amélioration** : Intégrer le Header et Footer dans ces pages pour une navigation cohérente.

### 9. 🌐 **Langue du `<html>` en anglais**
- **Problème** : `<html lang="en">` alors que le contenu est 100% français.
- **Amélioration** : Changer en `<html lang="fr">`.

### 10. 🎬 **Hero sans effet parallaxe**
- **Problème** : L'image hero est statique.
- **Amélioration** : Ajout d'un subtil effet parallaxe au scroll pour le hero.

### 11. ⭐ **Reviews section — note déplacée**
- **Problème** : La mention "Les services peuvent varier selon la saison" est sous les avis, pas les services.
- **Amélioration** : Déplacer cette note sous la section Services.

### 12. 🔗 **Footer — liens en `<a>` brut au lieu de `<Link>`**
- **Problème** : Les liens de navigation du footer utilisent `<a href>` au lieu de `<Link>` de TanStack Router.
- **Amélioration** : Utiliser `<Link>` pour les routes internes (SPA navigation).

### 13. 📐 **Cards d'activités — hauteurs inconstantes**
- **Problème** : Sur la page `/activites`, les cartes ont des tailles variables selon le contenu.
- **Amélioration** : Uniformiser avec `flex flex-col` + `flex-1` sur le contenu.

### 14. 🎯 **Hover effects manquants sur certains éléments**
- **Problème** : Les cards Reviews et Attractions n'ont pas de hover elevation.
- **Amélioration** : Ajouter `hover:-translate-y-1` + `hover:shadow-soft` sur les cards Reviews.

### 15. 📺 **Loading skeleton absent**
- **Problème** : Les images chargées en lazy n'ont pas de placeholder.
- **Amélioration** : Ajouter un fond `bg-muted` avec animation pulse comme placeholder pendant le chargement.

---

## 🛠️ Plan d'Implémentation

| # | Changement | Fichier(s) | Priorité |
|---|-----------|------------|----------|
| 1 | Scroll reveal animations | `styles.css` + `index.tsx` | 🔴 Haute |
| 2 | Menu mobile amélioré | `header.tsx` | 🔴 Haute |
| 3 | Header/Footer sur sous-pages | `hebergements.tsx` + `activites.tsx` | 🔴 Haute |
| 4 | Galerie lightbox | `index.tsx` | 🟡 Moyenne |
| 5 | Bouton Back to top | `index.tsx` | 🟡 Moyenne |
| 6 | Section FAQ | `index.tsx` | 🟡 Moyenne |
| 7 | Animation de filtrage | `index.tsx` + `styles.css` | 🟢 Basse |
| 8 | Parallaxe Hero | `index.tsx` + `styles.css` | 🟢 Basse |
| 9 | Lang="fr" | `__root.tsx` | 🔴 Haute |
| 10 | Reviews note déplacée | `index.tsx` | 🟡 Moyenne |
| 11 | Footer links → `<Link>` | `footer.tsx` | 🟡 Moyenne |
| 12 | Hover effects Reviews | `index.tsx` | 🟢 Basse |
| 13 | Image loading placeholders | `styles.css` | 🟢 Basse |
| 14 | Active nav indicator | `header.tsx` | 🟡 Moyenne |
| 15 | Cards hauteur uniforme | `activites.tsx` | 🟢 Basse |

---

> **Prochaine étape** : Implémentation de toutes les améliorations identifiées.
