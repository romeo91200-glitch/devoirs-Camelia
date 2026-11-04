# Les devoirs de Camélia

Site statique (HTML/CSS/JS, sans build) publié sur Netlify depuis ce dépôt.

## Structure

- `index.html` : page d'accueil, un dossier par jour. Le prochain dossier (après aujourd'hui) clignote avec « Devoirs du jour ».
- `assets/jours.js` : la liste des jours affichés sur l'accueil.
- `assets/exercices.js` : moteur d'exercices partagé (QCM, texte à trous, vrai/faux, dictée avec 🔊, carte de consigne).
- `assets/brouillon.js` : bouton « ✏️ Brouillon » qui ouvre une feuille à carreaux sur la moitié de l'écran pour écrire au doigt ou à la souris. Chaque page de jour le charge après `exercices.js`.
- `assets/style.css` : styles communs.
- `devoirs/AAAA-MM-JJ/index.html` : les exercices pour le jour où les devoirs sont à rendre.

## Ajouter un jour

1. Copier un dossier existant (ex. `devoirs/2026-10-08/`) vers `devoirs/AAAA-MM-JJ/`, remplacer `window.DEVOIRS` (onglet « Les devoirs » : le travail recopié tel quel depuis les photos) et `window.EXERCICES` (onglet « Entraînement »).
2. Ajouter `{ date: "AAAA-MM-JJ", titre: "..." }` dans `assets/jours.js`.

## Hébergement

Tous les liens sont relatifs : le site marche à la racine d'un domaine (Netlify, Cloudflare Pages) comme dans un sous-dossier (GitHub Pages : `https://<compte>.github.io/devoirs-camelia/`). Garder des liens relatifs dans les nouvelles pages.

## Netlify

Aucune commande de build, dossier de publication : la racine du dépôt (voir `netlify.toml`).

## Application Android

Le site est installable (PWA) : `manifest.webmanifest`, `icons/`, `sw.js` (réseau d'abord, cache hors connexion).
Les pages de jour doivent garder les balises `manifest` / `theme-color` du `<head>` (déjà présentes si on copie un dossier existant).
