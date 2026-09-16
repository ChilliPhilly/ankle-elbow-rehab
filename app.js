/* ---------- storage ---------- */
const KEY_SESS = "rehab.sessions.v1";
const KEY_LOG  = "rehab.log.v1";
const TOTAL_WEEKS = 12;

const safeGet = (k, fallback) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch (e) { return fallback; }
};
const safeSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

let ticks = safeGet(KEY_SESS, {});
let logs  = safeGet(KEY_LOG, {});

const byId = (id) => EXERCISES.find((e) => e.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- video facade: thumbnail in, iframe on tap, never leaves the page ---------- */
function videoMarkup(vid, title, chan) {
  return `<div class="vid" data-vid="${esc(vid)}" data-title="${esc(title)}" data-chan="${esc(chan)}"></div>`;
}
let vidIndex = 0;
function hydrateVideo(el) {
  const id = el.dataset.vid, title = el.dataset.title, chan = el.dataset.chan;
  // first thumbnail loads eagerly so the page has an image immediately; the rest are lazy
  const loadMode = (vidIndex++ === 0) ? "eager" : "lazy";
  el.innerHTML =
    `<button class="vidbtn" type="button" aria-label="Play demo video: ${esc(title)}">` +
      `<img class="vidthumb" src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="" loading="${loadMode}" width="480" height="360">` +
      `<span class="playicon" aria-hidden="true"></span>` +
    `</button>` +
    `<p class="vidmeta"><span class="vidtitle">${esc(title)}</span><span class="vidchan">${esc(chan)}</span>` +
    `<a class="vidlink" href="https://www.youtube.com/watch?v=${esc(id)}" target="_blank" rel="noopener noreferrer">open on YouTube</a></p>`;
  el.querySelector(".vidbtn").addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.className = "vidframe";
    frame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
    frame.title = title;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    el.querySelector(".vidbtn").replaceWith(frame);
  }, { once: true });
}
const hydrateAllVideos = (root = document) => root.querySelectorAll(".vid:not([data-live])").forEach((el) => { el.dataset.live = "1"; hydrateVideo(el); });

/* ---------- phases ---------- */
function renderPhases() {
  document.getElementById("phaseCards").innerHTML = PHASES.map((p) => `
    <article class="phase phase--${p.n}">
      <header>
        <span class="pnum">Phase ${p.n}</span>
        <span class="pwk">${esc(p.weeks)}</span>
        <h3>${esc(p.name)}</h3>
      </header>
      <p class="paim">${esc(p.aim)}</p>
      <h4>What you work on</h4>
      <ul class="pfocus">${p.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <h4>${p.n < 3 ? `Move to phase ${p.n + 1} when <em>all</em> of these are true` : "You are finished when <em>all</em> of these are true"}</h4>
      <ul class="pexit">${p.exit.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    </article>`).join("");
}

/* ---------- week view ---------- */
function renderWeek(phase) {
  document.getElementById("weekGrid").innerHTML = SESSIONS[phase].map((s) => `
    <article class="wday">
      <header><span class="wkey">${esc(s.key)}</span><span class="wdayname">${esc(s.day)}</span></header>
      <h3>${esc(s.name)}</h3>
      <ol class="wlist">${s.items.map((i) => {
        const ex = byId(i);
        return `<li><a href="#ex-${esc(i)}">${esc(ex ? ex.name : i)}</a><span class="wdose">${esc(ex ? ex.sets + " × " + ex.reps : "")}</span></li>`;
      }).join("")}</ol>
    </article>`).join("");
}

/* ---------- exercise library ---------- */
function exerciseCard(e) {
  const phaseChips = [1, 2, 3].map((n) => `<span class="chip ${e.phases.includes(n) ? "chip--on chip--p" + n : "chip--off"}">P${n}</span>`).join("");
  return `
  <article class="ex" id="ex-${esc(e.id)}" data-region="${esc(e.region)}" data-phases="${e.phases.join(",")}">
    <header class="exhead">
      <div class="extitle">
        <span class="region region--${esc(e.region)}">${e.region === "ankle" ? "Ankle" : "Elbow"}</span>
        <h3>${esc(e.name)}</h3>
        <p class="target"><b>Target tissue:</b> ${esc(e.target)}</p>
      </div>
      <div class="chips">${phaseChips}</div>
    </header>

    <p class="why"><b>Why it is in the programme.</b> ${esc(e.why)}</p>

    <dl class="dose">
      <div><dt>Sets</dt><dd>${esc(e.sets)}</dd></div>
      <div><dt>Reps</dt><dd>${esc(e.reps)}</dd></div>
      <div><dt>Tempo</dt><dd>${esc(e.tempo)}</dd></div>
      <div><dt>Rest</dt><dd>${esc(e.rest)}</dd></div>
      <div><dt>Frequency</dt><dd>${esc(e.freq)}</dd></div>
    </dl>

    ${e.safety ? `<p class="safety"><b>Hard limit:</b> ${esc(e.safety)}</p>` : ""}

    <div class="exbody">
      <div class="excol">
        <h4>Form cues</h4>
        <ul class="cues">${e.cues.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        <p class="mistake"><b>Most common mistake:</b> ${esc(e.mistake)}</p>
        ${e.prog ? `<p class="progression"><b>How to progress:</b> ${esc(e.prog)}</p>` : ""}
      </div>
      <div class="excol excol--vid">
        ${videoMarkup(e.video.id, e.video.title, e.video.chan)}
        ${e.videoNote ? `<p class="vnote"><b>Modified for you:</b> ${esc(e.videoNote)}</p>` : ""}
      </div>
    </div>
  </article>`;
}

function renderExercises() {
  document.getElementById("exList").innerHTML = EXERCISES.map(exerciseCard).join("");
  hydrateAllVideos(document.getElementById("exList"));
}

function applyFilter(f) {
  document.querySelectorAll("#exList .ex").forEach((el) => {
    const region = el.dataset.region;
    const phases = el.dataset.phases.split(",");
    let show = true;
    if (f === "ankle" || f === "elbow") show = region === f;
    else if (f[0] === "p") show = phases.includes(f[1]);
    el.hidden = !show;
  });
}

/* ---------- calendar ---------- */
const sessionOrder = () => {
  const out = [];
  for (let w = 1; w <= TOTAL_WEEKS; w++) SESSIONS[phaseForWeek(w)].forEach((s) => out.push(`w${w}${s.key}`));
  return out;
};
const ORDER = sessionOrder();

function renderCalendar() {
  let html = "";
  for (let w = 1; w <= TOTAL_WEEKS; w++) {
    const p = phaseForWeek(w);
    html += `<article class="calweek calweek--p${p}">
      <header class="calhead"><span class="calwk">Week ${w}</span><span class="calphase">Phase ${p}</span></header>
      <div class="calrow">` +
      SESSIONS[p].map((s) => {
        const id = `w${w}${s.key}`;
        const on = !!ticks[id];
        return `<label class="tick ${on ? "is-on" : ""}" for="t_${id}" title="${esc(s.name)}">
            <input type="checkbox" id="t_${id}" data-sid="${id}" ${on ? "checked" : ""}>
            <span class="tickkey">${esc(s.key)}</span>
            <span class="tickday">${esc(s.day)}</span>
          </label>`;
      }).join("") +
      `</div></article>`;
  }
  document.getElementById("calGrid").innerHTML = html;
  document.querySelectorAll('#calGrid input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", () => {
      if (cb.checked) ticks[cb.dataset.sid] = true; else delete ticks[cb.dataset.sid];
      cb.closest(".tick").classList.toggle("is-on", cb.checked);
      safeSet(KEY_SESS, ticks);
      renderStats();
    });
  });
}

function renderStats() {
  const total = ORDER.length;
  const done = ORDER.filter((id) => ticks[id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  // best streak = longest run of consecutive completed sessions in programme order
  // current streak = run of completed sessions ending at the most recently completed one
  let best = 0, run = 0, lastDoneIdx = -1;
  ORDER.forEach((id, i) => {
    if (ticks[id]) { run++; if (run > best) best = run; lastDoneIdx = i; }
    else run = 0;
  });
  let current = 0;
  for (let i = lastDoneIdx; i >= 0 && ticks[ORDER[i]]; i--) current++;

  document.getElementById("statPct").textContent = pct + "%";
  document.getElementById("statDone").innerHTML = done + "<small>/" + total + "</small>";
  document.getElementById("statStreak").textContent = current;
  document.getElementById("statBest").textContent = best;
  document.getElementById("barFill").style.width = pct + "%";
}

/* ---------- progress log ---------- */
const LOG_FIELDS = [
  { k: "date",    type: "date",   ph: "" },
  { k: "ktwL",    type: "number", ph: "cm",   step: "0.5", min: "0" },
  { k: "ktwR",    type: "number", ph: "cm",   step: "0.5", min: "0" },
  { k: "hrL",     type: "number", ph: "reps", step: "1",   min: "0" },
  { k: "hrR",     type: "number", ph: "reps", step: "1",   min: "0" },
  { k: "pAnkle",  type: "number", ph: "0–10", step: "1",   min: "0", max: "10" },
  { k: "pElbow",  type: "number", ph: "0–10", step: "1",   min: "0", max: "10" },
  { k: "notes",   type: "text",   ph: "How did it feel?" }
];

function renderLog() {
  let html = "";
  for (let w = 1; w <= TOTAL_WEEKS; w++) {
    const row = logs["w" + w] || {};
    const p = phaseForWeek(w);
    html += `<tr class="logrow logrow--p${p}"><th scope="row" class="stick">${w}<small>P${p}</small></th>` +
      LOG_FIELDS.map((f) => {
        const attrs = [
          `type="${f.type}"`, `data-w="w${w}"`, `data-k="${f.k}"`,
          `value="${esc(row[f.k] || "")}"`,
          f.ph ? `placeholder="${esc(f.ph)}"` : "",
          f.step ? `step="${f.step}"` : "", f.min !== undefined ? `min="${f.min}"` : "",
          f.max !== undefined ? `max="${f.max}"` : "",
          `aria-label="Week ${w} ${f.k}"`,
          f.type === "number" ? `inputmode="decimal"` : ""
        ].filter(Boolean).join(" ");
        return `<td class="td--${f.k}"><input ${attrs}></td>`;
      }).join("") + `</tr>`;
  }
  document.getElementById("logBody").innerHTML = html;
  document.querySelectorAll("#logBody input").forEach((inp) => {
    inp.addEventListener("input", () => {
      const w = inp.dataset.w, k = inp.dataset.k;
      logs[w] = logs[w] || {};
      if (inp.value === "") delete logs[w][k]; else logs[w][k] = inp.value;
      if (Object.keys(logs[w]).length === 0) delete logs[w];
      safeSet(KEY_LOG, logs);
    });
  });
}

/* ---------- sources ---------- */
function renderSources() {
  const rows = EXERCISES.map((e) => `<li><b>${esc(e.name)}</b> — <a href="https://www.youtube.com/watch?v=${esc(e.video.id)}" target="_blank" rel="noopener noreferrer">${esc(e.video.title)}</a> <span class="srcchan">${esc(e.video.chan)}</span></li>`).join("");
  document.getElementById("srcList").innerHTML =
    `<ol class="srcol">${rows}<li><b>Single-leg heel raise test</b> — <a href="https://www.youtube.com/watch?v=TbXGtsx3Y3Y" target="_blank" rel="noopener noreferrer">Single Leg Heel Raise Test</a> <span class="srcchan">Evolution Physical Therapy &amp; Fitness</span></li></ol>`;
  document.getElementById("vidCount").textContent = EXERCISES.length + 1;
}

/* ---------- export / import ---------- */
function exportData() {
  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), sessions: ticks, log: logs }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "rehab-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function importData(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (d.sessions && typeof d.sessions === "object") { ticks = d.sessions; safeSet(KEY_SESS, ticks); }
      if (d.log && typeof d.log === "object") { logs = d.log; safeSet(KEY_LOG, logs); }
      renderCalendar(); renderStats(); renderLog();
      alert("Backup restored.");
    } catch (e) { alert("That file could not be read as a rehab backup."); }
  };
  r.readAsText(file);
}

/* ---------- boot ---------- */
renderPhases();
renderWeek(1);
renderExercises();
renderCalendar();
renderStats();
renderLog();
renderSources();
hydrateAllVideos();

document.querySelectorAll(".pbtn").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".pbtn").forEach((x) => { x.classList.remove("is-on"); x.setAttribute("aria-selected", "false"); });
  b.classList.add("is-on"); b.setAttribute("aria-selected", "true");
  renderWeek(+b.dataset.phase);
}));

document.querySelectorAll(".fbtn").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".fbtn").forEach((x) => x.classList.remove("is-on"));
  b.classList.add("is-on");
  applyFilter(b.dataset.filter);
}));

document.getElementById("resetCal").addEventListener("click", () => {
  if (confirm("Clear every session tick? Your progress log will be kept.")) {
    ticks = {}; safeSet(KEY_SESS, ticks); renderCalendar(); renderStats();
  }
});
document.getElementById("exportBtn").addEventListener("click", exportData);
document.getElementById("importFile").addEventListener("change", (e) => { if (e.target.files[0]) importData(e.target.files[0]); e.target.value = ""; });

/* ---------- offline + self-updating ----------
   updateViaCache:"none" stops the browser serving sw.js from its own HTTP cache
   (GitHub Pages marks everything max-age=600). And when a new worker takes control,
   reload once — otherwise a deploy needs two refreshes: one to install the new
   worker, another to actually see it. */
const BUILD = "2026-09-16 · v6";
const stampEl = document.getElementById("buildStamp");
if (stampEl) stampEl.textContent = BUILD;

if ("serviceWorker" in navigator) {
  const hadController = !!navigator.serviceWorker.controller;
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController || reloading) return; // a first-ever install must not reload
    reloading = true;
    location.reload();
  });
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" })
      .then((reg) => { reg.update(); setInterval(() => reg.update(), 60 * 60 * 1000); })
      .catch(() => {});
  });
}
