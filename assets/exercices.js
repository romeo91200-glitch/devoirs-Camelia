// Moteur d'exercices partagé par toutes les pages de jour.
// Une page de jour définit window.EXERCICES puis charge ce fichier.
//
// Types disponibles :
//   { type: "qcm", titre, consigne, questions: [{ q, choix: [...], bonne: index }] }
//   { type: "trous", titre, consigne, phrases: ["Le chat [mange] la souris."] }   // [réponse] = case à remplir
//   { type: "vraifaux", titre, consigne, questions: [{ q, vrai: true|false }] }
//   { type: "dictee", titre, consigne, mots: ["lire", { dire: "il est", ecrire: "est" }] }  // 🔊 puis on écrit
//   { type: "info", titre, texte }   // simple carte de consigne (rien à corriger)
//   { type: "histoire", titre, texte, lien }  // ▶ lit le texte à voix haute ; lien = audio de l'école (QR code)
// Une question de qcm/vraifaux peut avoir `dire: "..."` : un bouton 🔊 lit ce texte à voix haute.

(function () {
  const BRAVO = ["Bravo ! 🎉", "Super ! ⭐", "Génial ! 🌟", "Trop fort ! 💪", "Parfait ! 🌸"];
  const ESSAIE = ["Presque ! Réessaie 😊", "Pas tout à fait… 🤔", "Encore un petit effort ! 💫"];
  const hasard = l => l[Math.floor(Math.random() * l.length)];
  const norm = s => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[’']/g, "'");

  function parle(texte) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = "fr-FR";
    u.rate = 0.8;
    const voix = speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith("fr"));
    if (voix) u.voice = voix;
    speechSynthesis.speak(u);
  }

  function boutonEcoute(texte) {
    const b = document.createElement("button");
    b.className = "ecoute";
    b.type = "button";
    b.textContent = "🔊";
    b.title = "Écouter";
    b.onclick = () => parle(texte);
    return b;
  }

  const zone = document.getElementById("exercices");
  const scoreEl = document.getElementById("score");
  let points = 0, total = 0;

  function majScore() {
    scoreEl.textContent = points === total && total > 0
      ? `🏆 ${points} / ${total} : tout est juste, bravo Camélia !`
      : `⭐ ${points} / ${total}`;
  }

  function carte(exo) {
    const div = document.createElement("section");
    div.className = "exo";
    div.innerHTML = `<h2>${exo.titre || ""}</h2>${exo.consigne ? `<p class="consigne">${exo.consigne}</p>` : ""}`;
    zone.appendChild(div);
    return div;
  }

  // QCM et vrai/faux : un clic par question, le bon choix s'affiche en vert.
  function questionChoix(parent, texte, choix, bonne, dire) {
    total++;
    const q = document.createElement("div");
    q.className = "question";
    q.innerHTML = `<p>${texte}</p><div class="choix"></div><p class="retour-msg"></p>`;
    const boutons = q.querySelector(".choix");
    const msg = q.querySelector(".retour-msg");
    if (dire) q.firstChild.prepend(boutonEcoute(dire));
    let essais = 0;
    choix.forEach((c, i) => {
      const b = document.createElement("button");
      b.textContent = c;
      b.onclick = () => {
        essais++;
        if (i === bonne) {
          b.classList.add("bon");
          boutons.querySelectorAll("button").forEach(x => (x.disabled = true));
          msg.textContent = hasard(BRAVO);
          if (essais === 1) points++;
          majScore();
        } else {
          b.classList.add("faux");
          b.disabled = true;
          msg.textContent = hasard(ESSAIE);
        }
      };
      boutons.appendChild(b);
    });
    parent.appendChild(q);
  }

  const rendus = {
    qcm(exo) {
      const div = carte(exo);
      exo.questions.forEach(x => questionChoix(div, x.q, x.choix, x.bonne, x.dire));
    },
    vraifaux(exo) {
      const div = carte(exo);
      exo.questions.forEach(x => questionChoix(div, x.q, ["Vrai", "Faux"], x.vrai ? 0 : 1, x.dire));
    },
    info(exo) {
      const div = carte(exo);
      const p = document.createElement("div");
      p.className = "info";
      p.innerHTML = exo.texte;
      div.appendChild(p);
    },
    histoire(exo) {
      const div = carte(exo);
      const boutons = document.createElement("div");
      boutons.className = "choix";
      const lire = document.createElement("button");
      lire.className = "verifier";
      lire.textContent = "▶ Écouter l'histoire";
      lire.onclick = () => {
        if (!("speechSynthesis" in window)) return;
        if (speechSynthesis.speaking) {
          speechSynthesis.cancel();
          lire.textContent = "▶ Écouter l'histoire";
          return;
        }
        parle(exo.texte);
        lire.textContent = "⏹ Arrêter";
        const u = speechSynthesis;
        const fin = setInterval(() => {
          if (!u.speaking) { clearInterval(fin); lire.textContent = "▶ Écouter l'histoire"; }
        }, 500);
      };
      boutons.appendChild(lire);
      if (exo.lien) {
        const a = document.createElement("a");
        a.className = "verifier";
        a.href = exo.lien;
        a.target = "_blank";
        a.rel = "noopener";
        a.style.textDecoration = "none";
        a.textContent = "🎧 Version audio de l'école";
        boutons.appendChild(a);
      }
      div.appendChild(boutons);
    },
    dictee(exo) {
      const div = carte(exo);
      const champs = [];
      exo.mots.forEach((m, i) => {
        const mot = typeof m === "string" ? { dire: m, ecrire: m } : m;
        const ligne = document.createElement("p");
        ligne.className = "question";
        ligne.append(boutonEcoute(mot.dire), document.createTextNode(` ${i + 1}. `));
        const input = document.createElement("input");
        input.className = "trou";
        input.autocomplete = "off";
        input.autocapitalize = "off";
        input.spellcheck = false;
        input.dataset.reponses = mot.ecrire;
        ligne.appendChild(input);
        champs.push(input);
        total++;
        div.appendChild(ligne);
      });
      boutonVerifier(div, champs);
    },
    trous(exo) {
      const div = carte(exo);
      const champs = [];
      exo.phrases.forEach(p => {
        const ligne = document.createElement("p");
        ligne.className = "question";
        p.split(/(\[[^\]]+\])/).forEach(morceau => {
          const m = morceau.match(/^\[([^\]]+)\]$/);
          if (m) {
            const input = document.createElement("input");
            input.className = "trou";
            input.autocomplete = "off";
            input.dataset.reponses = m[1]; // plusieurs réponses possibles : [a|b]
            ligne.appendChild(input);
            champs.push(input);
            total++;
          } else {
            ligne.appendChild(document.createTextNode(morceau));
          }
        });
        div.appendChild(ligne);
      });
      boutonVerifier(div, champs);
    },
  };

  function boutonVerifier(div, champs) {
    const bouton = document.createElement("button");
    bouton.className = "verifier";
    bouton.textContent = "Vérifier ✔";
    const msg = document.createElement("p");
    msg.className = "retour-msg";
    bouton.onclick = () => {
      let justes = 0;
      champs.forEach(c => {
        const ok = c.dataset.reponses.split("|").some(r => norm(r) === norm(c.value));
        c.classList.toggle("bon", ok);
        c.classList.toggle("faux", !ok);
        if (ok) { justes++; c.disabled = true; }
      });
      msg.textContent = justes === champs.length ? hasard(BRAVO) : hasard(ESSAIE);
      if (justes === champs.length && !bouton.dataset.fini) {
        bouton.dataset.fini = "1";
        bouton.disabled = true;
        points += champs.length;
        majScore();
      }
    };
    div.append(bouton, msg);
  }

  if ("speechSynthesis" in window) speechSynthesis.getVoices();
  (window.EXERCICES || []).forEach(exo => rendus[exo.type](exo));
  majScore();

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js");
})();
