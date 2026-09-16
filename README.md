# 12-Week Ankle & Elbow Rehab

A single-page, mobile-first, offline-capable rehab site for two concurrent injuries:

- **Ankle** — anterolateral pain, suspected anterior ankle impingement, history of repeated inversion sprains.
  Hard constraint: **no exercise enters end-range dorsiflexion.**
- **Elbow** — suspected distal biceps tendinopathy. Progresses isometric → heavy slow eccentric → full range,
  and loads **both** elbow flexion and forearm supination. No wide-grip pulling.

Built for a home gym: resistance bands, dumbbells, a step, a pull-up bar.

## What's in it

| | |
|---|---|
| Pain rule | Stated at the top: ≤3/10 during, settles within 24 h, reduce load if worse next morning |
| Hard limits | Explicit do-not lists for both injuries, with the reasoning |
| Phases | 3 phases × 4 weeks, each with objective criteria for moving on |
| Week view | 5 sessions/week, switchable per phase, linked to the exercises |
| Exercises | 23 exercises: target tissue, rationale, sets/reps/tempo/rest/frequency, 3 form cues, the common mistake, progression, and an inline demo video |
| Calendar | 12 weeks × 5 sessions = 60 tick-boxes, `localStorage`-persisted, with % complete and current/best streak |
| Progress log | Weekly knee-to-wall (both sides), single-leg heel-raise reps, pain scores, notes — plus JSON export/import |

## Video verification

Every video ID was verified on **16 September 2026** by two independent checks:

1. **Liveness** — YouTube's oEmbed endpoint, confirming the video is public and returning its real title and channel
   (`tools/verify_videos.sh`).
2. **Embeddability** — each ID loaded through the YouTube IFrame Player API in a real browser, capturing `onError`
   (codes 101/150 mean embedding is disabled). `tools/embedtest.html`.

70 candidates were checked; all 70 passed both. The 24 used on the site are the best match per exercise.
No URL on this site was guessed or constructed from memory.

Where a verified demo shows the *standard* version of a movement that the hard limits rule out — a heel drop off a
step, a supinated chin-up grip, a full-range dorsiflexion pull — the exercise card carries a **"Modified for you"**
note stating exactly what to do differently.

Re-run the checks any time:

```bash
./tools/verify_videos.sh tools/ids.txt
```

## Offline

A service worker precaches the page, CSS and JS, and caches video thumbnails at runtime, so the programme, the
tick-boxes and the log all work with no connection after the first load. **The videos themselves are hosted on
YouTube and need a network** — this is stated on the page rather than hidden.

## Local development

```bash
python3 -m http.server 8777
```

Then open <http://127.0.0.1:8777>. Bump `CACHE` in `sw.js` when you change `index.html`, `app.css`, `app.js` or `data.js`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell and all static prose |
| `data.js` | `PHASES`, `EXERCISES`, `SESSIONS` — the whole programme as data |
| `app.js` | Rendering, video facades, calendar state, streaks, log, export/import |
| `app.css` | Design tokens, light + dark, mobile-first |
| `sw.js` | Offline shell |
| `tools/` | Video verification harness |

## Disclaimer

General information, not personalised medical advice, and not a diagnosis. Both conditions here are *suspected*.
Repeated inversion sprains can leave bony changes, an osteochondral lesion or a loose body that need imaging rather
than exercise — if pain is not trending down by the end of phase 1, get assessed.
