# Les devoirs de Camélia

Site statique (HTML/CSS/JS, sans build) publié sur Netlify depuis ce dépôt.

## Structure

- `index.html` : page d'accueil, un dossier par jour. Le dossier du jour clignote avec « Devoirs du jour ».
- `assets/jours.js` : la liste des jours affichés sur l'accueil.
- `assets/exercices.js` : moteur d'exercices partagé (QCM, texte à trous, vrai/faux).
- `assets/style.css` : styles communs.
- `devoirs/AAAA-MM-JJ/index.html` : les exercices d'un jour.

## Ajouter un jour

1. Copier `devoirs/2026-10-07/` vers `devoirs/AAAA-MM-JJ/` et remplacer `window.EXERCICES`.
2. Ajouter `{ date: "AAAA-MM-JJ", titre: "..." }` dans `assets/jours.js`.

## Netlify

Aucune commande de build, dossier de publication : la racine du dépôt (voir `netlify.toml`).
