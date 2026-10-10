// Leçons recopiées telles quelles depuis les photos, réutilisées par plusieurs jours.
// Une page de jour charge ce fichier avant son script, puis utilise ${window.LECONS.C8} dans window.DEVOIRS.
(function () {
  const maison = (n, sommes) => `<div class="maison-lecon"><b>Maison du ${n}</b><br>${sommes.join("<br>")}</div>`;
  const decompositions = n => Array.from({ length: n + 1 }, (_, i) => `${i} + ${n - i}`);

  const listeO1 = [
    "un - une", "il y a", "et", "est", "dans", "c'est", "elle", "les - des",
    "nous - vous", "avec", "son - mon - ton", "vrai - faux", "ses - mes - tes", "je - chez",
    "mais - jamais", "que-qui-parce que", "toujours", "donc", "mais - jamais", "quand - pourquoi",
  ];

  window.LECONS = {
    C8: `<p class="titre-lecon">Les maisons des nombres <span>C 8</span></p>
      <p>⚠️ <i>Tu dois connaître par cœur toutes les manières d'obtenir 1, 2, 3, 4, 5 et 6.</i></p>
      <div class="maisons-lecon">${[1, 2, 3, 4, 5, 6].map(n => maison(n, decompositions(n))).join("")}</div>
      <p class="bulle">Pour t'entraîner, il faut que tu saches répondre à des questions comme :<br>
        - 2 + 3 = ?<br>- 4 + « combien » = 5 ?<br>- Combien j'ajoute à 2 pour obtenir 6 ?<br>- Quelles sont toutes les additions égales à 4 ?</p>
      <p>⚠️ <i>Tu dois connaître par cœur toutes les manières d'obtenir 7, 8, 9 et 10.</i></p>
      <div class="maisons-lecon">${[7, 8, 9].map(n => maison(n, decompositions(n))).join("")}</div>
      <div class="maison-lecon large"><b>Maison du 10</b><br>0 + 10 &nbsp; 1 + 9 &nbsp; 2 + 8 &nbsp; 3 + 7 &nbsp; 4 + 6 &nbsp; 5 + 5<br>6 + 4 &nbsp; 7 + 3 &nbsp; 8 + 2 &nbsp; 9 + 1 &nbsp; 10 + 0</div>
      <p class="bulle">Pour t'entraîner, il faut que tu saches répondre à des questions comme :<br>
        - 5 + 3 = ?<br>- 6 + « combien » = 8 ?<br>- combien j'ajoute à 2 pour obtenir 10 ?</p>
      <p>Les additions qui font 10 (on les appelle les compléments à 10) sont à connaître par cœur. Elles sont très importantes pour calculer rapidement.</p>`,

    // liste = numéro de la liste du jour (surlignée)
    O1: liste => `<p class="titre-lecon">Les mots outils <span>O 1</span></p>
      <table class="tableau">${listeO1.map((m, i) =>
        `<tr${i + 1 === liste ? ' class="surligne"' : ""}><td>${i + 1}</td><td>${m}</td></tr>`).join("")}</table>
      <p><b><u>Pour apprendre les mots outils (à l'attention des parents)</u></b><br>
      L'élève doit savoir <b>identifier/lire ces mots instantanément</b>. Il doit également savoir <b>écrire les mots surlignés</b>, sans avoir recours à un modèle. Pour l'aider, vous pouvez :<br>
      1) L'élève doit s'entraîner à savoir les lire rapidement.<br>
      2) Faire épeler chaque mot avec le cahier sous les yeux puis sans le modèle.<br>
      3) Faire recopier le mot surligné sur une ardoise ou un cahier de brouillon avec le modèle sous les yeux puis sans le modèle.<br>
      4) Faire une dictée.<br>
      5) Revoir régulièrement les listes déjà travaillées.</p>`,

    G1: `<p class="titre-lecon">La phrase <span>G 1</span></p>
      <p>Une phrase est une suite de mots qui a du <b>sens</b>.</p>
      <p><span class="cursive">C'est l'heure du repas.</span> ⇨ C'est une phrase.<br>
      <span class="cursive"><s>Heure repas du</s></span> ⇨ Ce n'est pas une phrase.</p>
      <p>Une phrase commence toujours par <b><u>une majuscule</u></b> et se termine toujours par <b><u>un point</u></b>.</p>
      <p class="cursive">↳ <b>L</b>e renard est dans sa tanière<b>.</b><br>↳ <b>L</b>e tapis de maman est beau<b>.</b></p>`,

    G2: `<p class="titre-lecon">Les signes de ponctuation <span>G 2</span></p>
      <p><b>La ponctuation</b> <u>donne du sens</u> au texte et permet à celui qui nous écoute lire de nous comprendre car elle indique <b><u>les pauses et l'intonation</u></b>.</p>
      <table class="tableau ponctuation">
        <tr><td>.</td><td><b>Le point</b> 🛑</td><td>Il marque la fin d'une <b>phrase déclarative ou impérative</b>. Après le point, on met toujours une majuscule.<br><span class="cursive">Le chat miaule.</span> &nbsp; Prends ton ardoise.</td></tr>
        <tr><td>!</td><td><b>Le point d'exclamation</b></td><td>Il marque la fin d'une <b>phrase impérative</b> ou à la <b>forme exclamative</b>.<br>Il marque des sentiments : <b>peur, joie, colère, étonnement…</b> La voix doit bien marquer l'intonation qui correspond.<br><span class="cursive">Je suis heureuse !</span> &nbsp; Assis-toi !</td></tr>
        <tr><td>?</td><td><b>Le point d'interrogation</b></td><td>Il marque la fin d'une <b>phrase interrogative</b>.<br>Il sert à <u>poser une question</u>, à <b>interroger</b>.<br><span class="cursive">Que manges-tu ? / Où vas-tu ?</span></td></tr>
      </table>`,
  };
})();
