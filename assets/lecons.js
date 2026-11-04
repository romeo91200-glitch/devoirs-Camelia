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

    N1: `<p class="titre-lecon">Les nombres de 1 à 10 <span>N 1</span></p>
      <table class="tableau nombres">${["un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix"].map((m, i) =>
        `<tr><td>${i + 1}</td><td class="cursive">${m}</td><td>${m}</td><td>${"●".repeat(i + 1)}</td></tr>`).join("")}</table>
      <p>① - ② - ③ - ④ - ⑤ - ⑥ - ⑦ - ⑧ - ⑨ - ⑩</p>`,

    N2: `<p class="titre-lecon">Les chiffres <span>N 2</span></p>
      <p class="chiffres">0 1 2 3<br>4 5 6 7<br>8 9</p>
      <p class="gros">0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9</p>`,

    N3: `<p class="titre-lecon">Comparaison des nombres (1) <span>N 3</span></p>
      <p><i>plus, moins, autant que</i></p>
      <p class="gros">🔪🔪🔪🔪 &nbsp;&nbsp; 🍴🍴🍴🍴🍴🍴</p>
      <p class="bulle">Il y a <b>plus</b> de fourchettes <b>que</b> de couteaux.</p>
      <p class="bulle">Il y a <b>moins</b> de couteaux <b>que</b> de fourchettes.</p>
      <p class="bulle">Il y a <b>autant</b> de tasses <b>que</b> de cuillères.</p>
      <p class="gros">☕☕☕☕☕<br>🥄🥄🥄🥄🥄</p>`,

    N4: `<p class="titre-lecon">Les nombres de 10 à 19 <span>N 4</span></p>
      <table class="tableau">
        <tr><td>10</td><td>🖐️🖐️</td><td class="cursive">dix</td><td>dix</td></tr>
        ${["onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"].map((m, i) =>
          `<tr><td>${11 + i}</td><td>10 + ${i + 1}</td><td class="cursive">${m}</td><td>${m}</td></tr>`).join("")}
      </table>`,

    N6: `<p class="titre-lecon">Dénombrer en utilisant le groupement par 10 <span>N 6</span></p>
      <p><u>Pour dénombrer une collection :</u><br>
      - Je fais des groupes de 10 unités.<br>
      - J'échange chaque paquet de 10 unités contre 1 dizaine.<br>
      - Je compte les unités qui restent.</p>
      <p><i><u>Exemple :</u></i> 43 billes.</p>
      <table class="tableau du"><tr><td>d</td><td>u</td></tr><tr><td>4</td><td>3</td></tr></table>
      <p>Je peux faire 4 paquets de 10 billes, que j'échange contre 4 dizaines. &nbsp; Il reste 3 billes seules.</p>
      <p>Lola a une dizaine de crayons. Ils ne sont pas rangés.<br>
      Sami a aussi une dizaine de crayons. Ils sont rangés dans une pochette.<br>
      Une dizaine de crayons, c'est 10 crayons. <b>1 dizaine = 10 unités</b></p>
      <p class="bulle"><b><u>Règle d'échange</u></b> : 10 unités = 1 dizaine</p>`,

    N8: `<p class="titre-lecon">Comparer et ranger <span>N 8</span></p>
      <p>Pour <b><u>comparer</u></b> des quantités, on utilise les symboles <b>&lt;</b>, <b>&gt;</b> et <b>=</b>.</p>
      <p class="gros">🐘 &gt; 🐭 &nbsp;&nbsp;&nbsp; 10 &lt; 23</p>
      <p>La pointe montre toujours le plus petit nombre.</p>
      <p><b>&lt;</b> plus petit : 3 &lt; 5 &nbsp;&nbsp; <b>=</b> égal : 4 = 3 + 1 &nbsp;&nbsp; <b>&gt;</b> plus grand : 5 &gt; 3</p>
      <p><b>Ranger</b> les nombres du plus petit au plus grand, c'est ranger les quantités qu'ils représentent dans <u>l'ordre croissant</u>.</p>
      <p><b>Ranger</b> les nombres du plus grand au plus petit, c'est ranger les quantités qu'ils représentent dans <u>l'ordre décroissant</u>.</p>
      <p>L'ordre croissant : 🐭 🦁 🦒 &nbsp;&nbsp; L'ordre décroissant : 🦒 🦁 🐭</p>`,

    C1: `<p class="titre-lecon">Additionner <span>C 1</span></p>
      <p><b>Additionner</b> ça veut dire <b><u>ajouter</u></b> une quantité avec une ou des autre(s). La quantité <b>augmente</b>.</p>
      <p>Lorsque <b>j'ajoute</b> des objets, j'utilise le signe <b style="color:#d03030">+</b> (plus).</p>
      <p class="gros" style="text-align:center">⚪⚪⚪⚪ <span style="color:#d03030">+3</span> ⇨ ⚪⚪⚪⚪⚫⚫⚫<br>4 + 3 = 7</p>
      <p>Pour écrire le calcul correspondant, il suffit d'écrire le nombre d'objet du début, celui qu'on ajoute et écrire le tout séparé par le signe <b>+</b>. Cela s'appelle <b><u>une addition</u></b>.</p>
      <p>Le résultat d'une addition est <b><u>une somme</u></b>, on l'écrit après le symbole <b>« égal à »</b> &nbsp; 4 + 3 = <b>⑦</b></p>
      <p>Pour trouver <b>la somme</b> après avoir ajouté des choses on peut :</p>
      <p class="bulle"><b>Dessiner et tout recompter.</b> <i>C'est la procédure la plus longue !</i><br>
        <i><u>Exemple</u> : J'ai 4 jetons. J'en ajoute 3. Je les dessine, je compte tout : j'ai 7 en tout.</i></p>
      <p class="bulle"><b>Utiliser la bande numérique.</b><br>
        <i><u>Ex</u> : J'ai 4 jetons. J'en ajoute 3. Je pars du nombre 4, et j'avance de 3 cases. J'arrive sur le 7.</i><br>
        <span class="gros">1 2 3 ④ 5 6 <mark>7</mark> 8</span></p>
      <p class="bulle"><b>Utiliser les doigts et/ou calculer de tête.</b><br>
        <i><u>Ex</u> : J'ai 4 jetons. J'en ajoute 3. Je pars du nombre 4 dans ma tête et je continue de compter en levant 3 doigts un par un. J'arrive sur le nombre 7.</i> &nbsp; 💭4 → 5 → 6 → 7</p>`,

    C2: `<p class="titre-lecon">Soustraire <span>C 2</span></p>
      <p><b>Soustraire</b> ça veut dire <b><u>enlever</u></b> une quantité d'une autre. La quantité <b>diminue</b>.</p>
      <p>Lorsque <b>je retire</b> des objets, j'utilise le signe <b style="color:#1d4ed8">−</b> (moins).</p>
      <p class="gros" style="text-align:center">⚪⚪⚪⚪⚪ <span style="color:#1d4ed8">−1</span> = ⚪⚪⚪⚪<br>5 − 1 = 4</p>
      <p>Pour écrire le calcul correspondant, il suffit d'écrire le nombre d'objet du début, celui qu'on retire et écrire le tout séparé par le signe <b>−</b>. Cela s'appelle <b><u>une soustraction</u></b>.</p>
      <p>Le résultat d'une soustraction est <b><u>une différence</u></b>, on l'écrit après le symbole <b>« égal à »</b> &nbsp; 5 - 1 = <b>④</b></p>
      <p>Pour trouver <b>la différence</b> (le résultat) après avoir enlevé des choses on peut :</p>
      <p class="bulle"><b>Barrer et tout recompter.</b><br>
        <i><u>Exemple</u> : J'ai 8 jetons. J'en enlève 3. Je les barre et je compte ce qu'il reste : 5 jetons.</i></p>
      <p class="bulle"><b>Utiliser la bande numérique.</b><br>
        <i><u>Ex</u> : J'ai 8 jetons. J'en enlève 3. Je pars du nombre 8 et je recule de 3 cases. J'arrive sur le 5.</i><br>
        <span class="gros">1 2 3 4 <mark>5</mark> 6 7 ⑧ 9</span></p>
      <p class="bulle"><b>Utiliser les doigts.</b><br>
        <i><u>Ex</u> : J'ai 8 jetons. J'en enlève 3. Je pars du nombre 8 dans ma tête, et je décompte en levant 3 doigts au fur et à mesure. J'arrive à 5.</i> &nbsp; 💭8 → 7 → 6 → 5</p>`,

    C3: `<p class="titre-lecon">Ajouter 1, enlever 1 <span>C 3</span></p>
      <p class="bulle"><b>Ajouter 1</b> : C'est « dire » le nombre <b style="color:#1d4ed8">suivant</b>.<br>
        <span class="gros">8 9 10 11 12 13 14 ⑮ → <mark>16</mark> 17 18 19 20 21 22</span><br>
        <i style="color:#d03030">Exemple : 15 + 1 = 16</i></p>
      <p class="bulle"><b>Retrancher 1</b> : C'est « dire » le nombre <b style="color:#1d4ed8">juste avant</b>.<br>
        <span class="gros">8 9 10 11 <mark>12</mark> ← ⑬ 14 15 16 17 18 19 20 21 22</span><br>
        <i style="color:#d03030">Exemple : 13 - 1 = 12</i></p>`,

    C4: `<p class="titre-lecon">Les doubles <span>C 4</span></p>
      <p>Le double c'est quand on ajoute deux fois le même nombre.</p>
      <p class="gros" style="columns:2">1 + 1 = 2<br>2 + 2 = 4<br>3 + 3 = 6<br>4 + 4 = 8<br>5 + 5 = 10<br>6 + 6 = 12<br>7 + 7 = 14<br>8 + 8 = 16<br>9 + 9 = 18<br>10 + 10 = 20</p>
      <p class="cursive">❤️ à connaître par cœur</p>`,

    MOITIES: `<p class="titre-lecon">Les moitiés <span></span></p>
      <p>Quand on connaît les doubles, on retrouve très vite les moitiés.<br>6 + 6 = 12 &nbsp; 12 est le double de 6. → 6 est la moitié de 12.</p>
      <p>On se sert des moitiés dans des situations équitables.</p>
      <p class="bulle">Si je veux te donner la moitié de mes bonbons, je partage en 2 parts égales. La moitié de 8, c'est 4.</p>
      <table class="tableau"><tr><td>2</td><td>La moitié de 2, c'est 1</td></tr><tr><td>4</td><td>La moitié de 4, c'est 2</td></tr><tr><td>6</td><td>La moitié de 6, c'est 3</td></tr><tr><td>8</td><td>La moitié de 8, c'est 4</td></tr><tr><td>10</td><td>La moitié de 10, c'est 5</td></tr><tr><td>20</td><td>La moitié de 20, c'est 10</td></tr></table>
      <p><i>Le bord droit de la leçon est coupé sur la photo : quelques mots sont devinés.</i></p>`,
  };
})();
