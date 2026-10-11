// Brouillon : une feuille à carreaux pour écrire au doigt ou à la souris,
// ouverte sur une moitié de l'écran à côté des devoirs (en bas sur un téléphone en hauteur).
(function () {
  const ouvrir = document.createElement("button");
  ouvrir.type = "button";
  ouvrir.className = "bouton-brouillon";
  ouvrir.textContent = "✏️ Brouillon";

  const panneau = document.createElement("aside");
  panneau.className = "brouillon";
  panneau.hidden = true;
  panneau.innerHTML = `
    <div class="outils">
      <button type="button" data-couleur="#222" class="actif" title="Crayon noir">⚫</button>
      <button type="button" data-couleur="#1d4ed8" title="Crayon bleu">🔵</button>
      <button type="button" data-couleur="#dc2626" title="Crayon rouge">🔴</button>
      <button type="button" data-gomme title="Gomme">🧽</button>
      <button type="button" data-effacer title="Tout effacer">🗑️</button>
      <button type="button" data-fermer title="Fermer">✖</button>
    </div>
    <canvas></canvas>`;
  document.body.append(ouvrir, panneau);

  const canvas = panneau.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  let couleur = "#222", gomme = false, trace = null;

  // Redimensionne la feuille sans perdre ce qui est déjà écrit.
  function ajuster() {
    const r = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (!w || !h || (w === canvas.width && h === canvas.height)) return;
    const copie = document.createElement("canvas");
    copie.width = canvas.width; copie.height = canvas.height;
    if (canvas.width && canvas.height) copie.getContext("2d").drawImage(canvas, 0, 0);
    canvas.width = w; canvas.height = h;
    ctx.drawImage(copie, 0, 0);
  }

  function point(e) {
    const r = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    return { x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr };
  }

  canvas.addEventListener("pointerdown", e => {
    canvas.setPointerCapture(e.pointerId);
    trace = point(e);
    const dpr = window.devicePixelRatio || 1;
    ctx.lineCap = ctx.lineJoin = "round";
    ctx.lineWidth = (gomme ? 28 : 4) * dpr;
    ctx.globalCompositeOperation = gomme ? "destination-out" : "source-over";
    ctx.strokeStyle = couleur;
    ctx.beginPath(); ctx.moveTo(trace.x, trace.y); ctx.lineTo(trace.x + 0.1, trace.y); ctx.stroke();
  });
  canvas.addEventListener("pointermove", e => {
    if (!trace) return;
    const p = point(e);
    ctx.beginPath(); ctx.moveTo(trace.x, trace.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    trace = p;
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach(t => canvas.addEventListener(t, () => (trace = null)));

  panneau.querySelector(".outils").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.effacer !== undefined) return ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (b.dataset.fermer !== undefined) return basculer(false);
    gomme = b.dataset.gomme !== undefined;
    if (!gomme) couleur = b.dataset.couleur;
    panneau.querySelectorAll("[data-couleur],[data-gomme]").forEach(x => x.classList.toggle("actif", x === b));
  });

  function basculer(ouvert) {
    panneau.hidden = !ouvert;
    document.body.classList.toggle("avec-brouillon", ouvert);
    ouvrir.textContent = ouvert ? "✖ Fermer le brouillon" : "✏️ Brouillon";
    if (ouvert) requestAnimationFrame(ajuster);
  }
  ouvrir.onclick = () => basculer(panneau.hidden);
  window.addEventListener("resize", () => { if (!panneau.hidden) ajuster(); });
})();
