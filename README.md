# Les devoirs de Camélia

Site statique (HTML/CSS/JS, sans build) publié sur Netlify depuis ce dépôt.

## Structure

- `index.html` : page d'accueil, un dossier par jour. Le prochain dossier (aujourd'hui ou plus tard) clignote avec « Devoirs du jour ».
- `assets/jours.js` : la liste des jours affichés sur l'accueil.
- `assets/exercices.js` : moteur d'exercices partagé (QCM, texte à trous, vrai/faux, dictée avec 🔊, carte de consigne).
- `assets/style.css` : styles communs.
- `devoirs/AAAA-MM-JJ/index.html` : les exercices pour le jour où les devoirs sont à rendre.

## Ajouter un jour

1. Copier un dossier existant (ex. `devoirs/2026-10-08/`) vers `devoirs/AAAA-MM-JJ/` et remplacer `window.EXERCICES`.
2. Ajouter `{ date: "AAAA-MM-JJ", titre: "..." }` dans `assets/jours.js`.

## Netlify

Aucune commande de build, dossier de publication : la racine du dépôt (voir `netlify.toml`).

## Application Android

Le site est installable (PWA) : `manifest.webmanifest`, `icons/`, `sw.js` (réseau d'abord, cache hors connexion).
Les pages de jour doivent garder les balises `manifest` / `theme-color` du `<head>` (déjà présentes si on copie un dossier existant).
