/* Programme data. Every video.id below was verified live + embeddable on 2026-09-16. */

const PHASES = [
  {
    n: 1, weeks: "Weeks 1–4", name: "Calm and load without provoking",
    aim: "Take the irritability out of both tissues while still loading them hard. Isometrics do the heavy lifting: they give the tendon and the calf a strong stimulus with almost no joint movement, so the ankle never reaches the painful range and the elbow never travels through the painful arc.",
    focus: [
      "Daily isometric holds for calf and biceps",
      "Mid-range band work for the evertors — the muscles that stop an inversion sprain",
      "Single-leg balance, rebuilt from the floor up",
      "Neutral-grip (hammer) work to keep elbow flexor strength while the tendon settles"
    ],
    exit: [
      "Pain during every phase-1 exercise is 3/10 or less, and settles within 24 hours",
      "Seven consecutive days with no morning-after increase in either ankle or elbow",
      "Single-leg isometric calf raise: 45 seconds, heel high, pain ≤3/10",
      "Isometric biceps hold at 90°: 45 seconds at a solid effort, pain ≤3/10",
      "Single-leg balance: 45 seconds steady with eyes open, both sides"
    ]
  },
  {
    n: 2, weeks: "Weeks 5–8", name: "Heavy slow loading",
    aim: "Build real capacity. Heavy slow resistance — controlled lifting, deliberately slow lowering — is the best-evidenced way to remodel a painful tendon and the fastest way to rebuild calf strength. The ankle still never reaches end-range dorsiflexion; the range is managed with a heel wedge and step height instead.",
    focus: [
      "Single-leg heel raises on flat floor, no heel drop, heavy and slow",
      "Heel-elevated split squats and step-ups for single-leg strength",
      "Slow eccentric curls and eccentric neutral-grip chin-ups for the distal biceps",
      "Loaded supination — the half of the biceps' job that curls miss"
    ],
    exit: [
      "25 or more single-leg heel raises on the injured side, full height, no heel drop",
      "Injured-side heel raise reps within 10% of the other side",
      "Heel-elevated split squat: 3 × 10 holding 12–16 kg, pain ≤3/10 and no pinch",
      "5 slow (5-second) eccentric neutral-grip chin-ups, pain ≤3/10",
      "Eccentric dumbbell curl with a weight you would call genuinely heavy, pain ≤3/10",
      "Fourteen consecutive days with no morning-after flare",
      "20 minutes of easy running on flat ground, pain-free during and next morning"
    ]
  },
  {
    n: 3, weeks: "Weeks 9–12", name: "Return to sport",
    aim: "Rebuild the qualities AFL and running actually demand: elastic ankle stiffness, controlled landing, and the ability to change direction without the foot rolling. The elbow goes to full range and full supination — the exact positions that used to hurt — because avoiding them forever is not a result.",
    focus: [
      "Pogo hops and reactive calf work for ankle stiffness",
      "Lateral bounds and single-leg landings — rehearsing the sprain mechanism under control",
      "Full-range supinated curls, Zottman curls, full neutral-grip chin-ups",
      "Progressive reintroduction of running volume, then change of direction, then contact"
    ],
    exit: [
      "Single hop for distance: injured side within 90% of the other side",
      "30 continuous lateral bounds with a clean stick on each landing, no pinch",
      "Single-leg drop landing from 30 cm, silent and controlled, both sides",
      "Full-range supinated curls and full neutral-grip chin-ups at pain ≤2/10",
      "A full training session in your sport with no next-morning flare",
      "Confidence — if you are still guarding the ankle when you cut, you are not done"
    ]
  }
];

const EXERCISES = [
  /* ─────────────── ANKLE ─────────────── */
  {
    id: "iso-calf", region: "ankle", phases: [1, 2, 3],
    name: "Isometric Calf Raise Hold",
    target: "Gastrocnemius, soleus and the Achilles tendon",
    why: "This loads the whole calf–Achilles complex hard while the ankle barely moves, so you build tolerance without ever approaching the range that hurts. Long isometric holds also tend to dull tendon and joint pain for an hour or two afterwards, which makes everything you do next in the session easier. It is the right first exercise of every early session.",
    sets: "5 sets", reps: "30–45 second holds", tempo: "2s up / hold / 3s down to flat",
    rest: "60 s", freq: "5–6 × per week",
    cues: [
      "Rise onto the balls of the feet until the heels are as high as they will go, then stop moving — the work is in holding the position.",
      "Keep the weight through the big toe and second toe. If it drifts to the little-toe side you are training the position that sprains you.",
      "Stand tall with a soft knee and a braced trunk; do not let the hips settle back."
    ],
    mistake: "Letting the heels sink slowly through the hold. It is a hold, not a slow lower — when the heel starts dropping, the set is finished.",
    safety: "Lower only to flat ground. The heel never goes below the level of the toes.",
    prog: "Start on two feet. Progress to two feet with a loaded backpack, then to a single leg, then single leg loaded.",
    video: { id: "XF5YDmVyhHw", title: "Achilles Tendinopathy Rehab – Single Leg Isometric Calf Raise Hold", chan: "Stronger Teams" }
  },
  {
    id: "seated-calf", region: "ankle", phases: [1, 2, 3],
    name: "Seated Calf Raise (Soleus)",
    target: "Soleus",
    why: "The soleus absorbs several times bodyweight every stride you run and is the main brake on the ankle when you land. Bending the knee takes the gastrocnemius out of the equation and puts the load squarely on the soleus — and it lets you load heavily while the ankle stays in comfortable mid-range.",
    sets: "3–4 sets", reps: "12–15", tempo: "1s up / 2s squeeze / 3s down",
    rest: "60–90 s", freq: "3 × per week",
    cues: [
      "Sit with the knee bent to about 90°, dumbbell resting on the thigh close to the knee.",
      "Drive through the ball of the foot and hold the top position for a full two seconds.",
      "Keep the pressure under the big toe — the foot should not roll to the outside as you press."
    ],
    mistake: "Bouncing through the bottom to chase reps. The soleus responds to slow, deliberate time under tension, not tempo.",
    safety: "Feet flat on the floor, never on the edge of a step. No heel drop at the bottom.",
    prog: "Add dumbbell weight on the thigh week to week. By the end of phase 2 you should need most of what you own.",
    video: { id: "Lv9rklLUp2k", title: "Ankle exercise – Seated calf raise / heel raise", chan: "sportsinjuryclinic.net" }
  },
  {
    id: "sl-heel-raise", region: "ankle", phases: [2, 3],
    name: "Single-Leg Heel Raise (Flat Floor)",
    target: "Gastrocnemius, soleus, Achilles tendon",
    why: "Your headline strength exercise and your headline test. Running, AFL and landing all happen on one leg, and two-legged calf work hides a deficit on the injured side indefinitely. Doing it on flat floor rather than a step is what keeps it legal for you.",
    sets: "4 sets", reps: "8–15", tempo: "1s up / 1s hold / 3s down",
    rest: "90 s", freq: "3 × per week",
    cues: [
      "Fingertips on a wall for balance only — no pushing down through the hand.",
      "Rise to maximum heel height every single rep; the moment the height drops, the set is over.",
      "Keep the hip, knee and ankle stacked and the weight over the big toe."
    ],
    mistake: "Cheating the last few reps by pushing off the wall or swinging the free leg. Stop at the last honest rep and add a set instead.",
    safety: "Flat floor only. Lower to flat foot and stop — do not let the heel drop below the toes.",
    prog: "Bodyweight → holding dumbbells → dumbbells plus a loaded backpack. Reps to failure is your weekly test number.",
    videoNote: "This demo shows the general running progression. Do yours on flat floor and stop the lowering at flat foot — ignore any version performed off the edge of a step.",
    video: { id: "vj1Bm90f5jU", title: "Single Leg Heel Raise – Running Exercise Progressions", chan: "Coach Noah" }
  },
  {
    id: "band-eversion", region: "ankle", phases: [1, 2, 3],
    name: "Banded Ankle Eversion",
    target: "Peroneus longus and brevis (the evertors)",
    why: "The single most transferable exercise here for stopping the next sprain. The peroneals are the active defence against the foot rolling inward, and after repeated inversion sprains they are reliably weaker and slower to fire. This trains them in exactly the mid-range where your ankle is pain-free.",
    sets: "3 sets", reps: "15 each side", tempo: "2s out / 1s hold / 3s back",
    rest: "45 s", freq: "4–5 × per week",
    cues: [
      "Anchor the band to something solid at floor level and sit with the leg straight out.",
      "Turn the sole of the foot outward and slightly up — lead with the little-toe edge.",
      "Lock the shin and knee completely still. Only the foot moves."
    ],
    mistake: "Rotating the whole leg at the hip to fake extra range. If the kneecap moves, you are not training the peroneals.",
    prog: "Move up a band colour when you can complete 3 × 15 with a controlled 3-second return.",
    video: { id: "xfrncpP5ONQ", title: "Ankle Eversion with Resistive Band", chan: "AskDoctorJo" }
  },
  {
    id: "band-inversion", region: "ankle", phases: [1, 2, 3],
    name: "Banded Ankle Inversion",
    target: "Tibialis posterior",
    why: "Balances the evertor work. Tibialis posterior supports the arch and controls how fast the foot flattens when you land — a strong evertor with a weak invertor is just a different imbalance. It also has no dorsiflexion component, so it costs you nothing.",
    sets: "3 sets", reps: "15 each side", tempo: "2s in / 1s hold / 3s back",
    rest: "45 s", freq: "4–5 × per week",
    cues: [
      "Band anchored to the outside; turn the sole inward against the resistance.",
      "Keep the ankle in neutral height — this is rotation, not a pull toward the shin.",
      "Shin stays still; the movement is entirely below the ankle."
    ],
    mistake: "Combining it with a hard dorsiflexion pull. Keep the two separate — inversion only.",
    safety: "Do not add dorsiflexion to this movement. Rotation only.",
    video: { id: "v_zjz5mOvuY", title: "Ankle exercise – inversion with band", chan: "sportsinjuryclinic.net" }
  },
  {
    id: "band-dorsi", region: "ankle", phases: [1, 2, 3],
    name: "Banded Dorsiflexion — Mid-Range Only",
    target: "Tibialis anterior",
    why: "Tibialis anterior decelerates the foot as it hits the ground and controls the shin over the foot when you cut. You want that strength. Doing it seated with a band gives you the muscle work with zero joint compression — provided you stop short of the end range.",
    sets: "3 sets", reps: "15 each side", tempo: "2s up / 1s hold / 3s down",
    rest: "45 s", freq: "3–4 × per week",
    cues: [
      "Sit with the leg out, band looped over the top of the foot and anchored in front of you.",
      "Pull the foot toward the shin to roughly three-quarters of your available range, then stop.",
      "Resist the band on the way back down — the return is half the exercise."
    ],
    mistake: "Treating it as a stretch and pulling into the end range. This is strength work for the muscle, not mobility work for the joint.",
    safety: "Stop well before any pinch at the front of the ankle. If you feel it, you have gone too far — reduce the range immediately.",
    videoNote: "The demo pulls into full dorsiflexion. You must not. Work to about three-quarters of your range and stop short of any pinch at the front of the ankle.",
    video: { id: "mzxXYtmkY6o", title: "How to do a banded dorsiflexion", chan: "Complete Physio" }
  },
  {
    id: "sl-balance", region: "ankle", phases: [1, 2],
    name: "Single-Leg Balance Progression",
    target: "Proprioception, peroneals, hip stabilisers",
    why: "Chronic ankle instability is as much a sensorimotor problem as a strength one — after repeated sprains the ankle stops reporting its own position accurately. Balance training is one of the few interventions with good evidence for actually reducing recurrent sprain rates, so this earns its place every session.",
    sets: "3 sets", reps: "30–45 seconds each leg", tempo: "Steady, no bouncing",
    rest: "30 s", freq: "5 × per week",
    cues: [
      "Stand tall, knee softly bent, weight spread across the whole foot.",
      "Let the foot make small corrections rather than locking rigid — you want it working, not braced.",
      "Fix your eyes on one point until the eyes-closed progression."
    ],
    mistake: "Gripping hard with the toes and going rigid. Stay relaxed enough that small corrections happen naturally.",
    prog: "Firm floor, eyes open → firm floor, eyes closed → cushion or folded towel, eyes open → cushion, with head turns → cushion, catching a ball off a wall.",
    video: { id: "PNiCgb5mJW4", title: "Single Leg Balance With Progressions", chan: "POGO Physio" }
  },
  {
    id: "sl-balance-reach", region: "ankle", phases: [2, 3],
    name: "Single-Leg Balance with 4-Way Reach",
    target: "Proprioception under load, glute medius, peroneals",
    why: "Static balance stops challenging you quickly. Reaching the free leg out in four directions forces the standing ankle and hip to control a moving centre of mass, which is much closer to what happens on a football field.",
    sets: "3 sets", reps: "6 reaches per direction, each leg", tempo: "3s out / 3s back",
    rest: "45 s", freq: "2–3 × per week",
    cues: [
      "Reach the free foot forward, across, out to the side and behind — tap lightly, do not put weight on it.",
      "Hinge from the hip and keep the standing shin as upright as you can.",
      "Control the return just as slowly as the reach."
    ],
    mistake: "Reaching so far forward that the standing knee travels well over the toes — that drives the exact dorsiflexion you are avoiding.",
    safety: "Keep the forward reach short enough that the standing shin stays close to upright and you feel no pinch at the front of the ankle.",
    videoNote: "The demo includes a heel-float variation and long forward reaches. Keep your heel down and shorten the forward reach so the shin stays upright.",
    video: { id: "mwLYbnOyuaQ", title: "Heel Float Single Leg Balance with 4-way Reach", chan: "Fitness Pain Free" }
  },
  {
    id: "split-squat", region: "ankle", phases: [2, 3],
    name: "Heel-Elevated Split Squat",
    target: "Quadriceps, glutes, calf complex, single-leg control",
    why: "You need single-leg strength for AFL and running, and the standard way of building it — lunges and split squats — demands the dorsiflexion you cannot give. Elevating the front heel removes precisely that range while leaving the strength stimulus intact. This is the workaround that makes the rest of the leg trainable.",
    sets: "3 sets", reps: "8–10 each leg", tempo: "3s down / 1s pause / 1s up",
    rest: "90 s", freq: "2 × per week",
    cues: [
      "Front heel on a 2–5 cm wedge, plate or the edge of a book — enough that the shin can travel without the ankle closing up.",
      "Drop straight down, back knee toward the floor, trunk upright.",
      "Drive up through the whole front foot, not just the toes."
    ],
    mistake: "Chasing depth. A shorter range done pain-free builds more than a deep one that leaves you sore tomorrow.",
    safety: "Stop the descent above the depth where you feel the pinch. If a higher wedge is needed, use one — there is no prize for a low heel.",
    prog: "Bodyweight → dumbbells at the sides → dumbbells plus a slower eccentric. Rear-foot-elevated only once the front-heel version is comfortable.",
    videoNote: "Use the front-heel-elevated version shown here, and stop above your pinch depth regardless of how deep the demo goes.",
    video: { id: "7srjK2p6T6c", title: "Front Heel Elevated Split Squat", chan: "Chaplin Performance" }
  },
  {
    id: "step-up", region: "ankle", phases: [2, 3],
    name: "Step-Up (Concentric Focus)",
    target: "Quadriceps, glutes, single-leg push",
    why: "A step-up is a split squat where you control the dorsiflexion demand with one dial: step height. Low step, upright shin, no pinch. It builds the single-leg pushing strength that AFL acceleration and hill running need.",
    sets: "3 sets", reps: "10 each leg", tempo: "1s up / 2s down",
    rest: "60–90 s", freq: "2 × per week",
    cues: [
      "Whole foot on the step, weight through the mid-foot and heel.",
      "Push the floor away with the top leg — do not push off the bottom foot to launch.",
      "Lower under control with the trailing leg rather than collapsing onto the working ankle."
    ],
    mistake: "Going too high too soon. A high step forces the shin forward and closes the front of the ankle.",
    safety: "Pick a step height where the front shin stays fairly upright. Knee-height boxes are for later, if at all.",
    prog: "Raise the step only after you can add 16 kg of dumbbells at the current height with no pinch.",
    video: { id: "vOiHvzj5XhA", title: "Step Up Tutorial – Proper Form and Technique", chan: "Runna" }
  },
  {
    id: "band-walk", region: "ankle", phases: [1, 2, 3],
    name: "Lateral Band Walk",
    target: "Gluteus medius and minimus",
    why: "Ankle sprains are not purely an ankle problem. When the hip cannot control the leg, the whole limb collapses inward on landing and the foot is left rolling over the outside edge. Strengthening hip abduction protects the ankle from above, and it is free — no dorsiflexion involved at all.",
    sets: "3 sets", reps: "15 steps each direction", tempo: "Controlled, 1s per step",
    rest: "45 s", freq: "3 × per week",
    cues: [
      "Band around the ankles or just above the knees, feet hip-width, knees softly bent.",
      "Step sideways and keep tension on the band the whole time — never let the feet clack together.",
      "Keep the trunk upright and still; the movement is all at the hips."
    ],
    mistake: "Bobbing up and down or leaning the torso away from the lead leg. Stay level and let the hip do the work.",
    video: { id: "5wUk8wQNUT8", title: "Lateral Band Walks for Glute Medius Activation", chan: "GPS Human Performance" }
  },
  {
    id: "pogo", region: "ankle", phases: [3],
    name: "Pogo Hops",
    target: "Achilles and calf elastic capacity, ankle stiffness",
    why: "Running and AFL need a springy ankle that stores and returns energy, and that quality is lost fast after an injury. Pogos rebuild it — and because they happen entirely on the balls of the feet, the ankle never approaches dorsiflexion. They are unusually well suited to your restriction.",
    sets: "4 sets", reps: "15–20 seconds continuous", tempo: "Fast — minimal ground contact",
    rest: "60 s", freq: "2 × per week",
    cues: [
      "Stay on the balls of the feet; heels kiss the floor at most.",
      "Stiff ankle, straight-ish knee — bounce from the ankle, not by squatting.",
      "Think quiet and quick. Short contacts beat high hops."
    ],
    mistake: "Turning it into a squat jump. If the knees are bending a lot, you are training the wrong tissue.",
    safety: "Stop the set if you feel any pinch at the front of the ankle or if the landings start getting loud.",
    prog: "Two legs in place → two legs travelling forward and back → single leg in place → single leg travelling.",
    video: { id: "7SIfCcfP4g0", title: "Pogo hops | plyometric exercise for runners", chan: "The Irish Physio TV" }
  },
  {
    id: "lat-bound", region: "ankle", phases: [3],
    name: "Lateral Bound and Stick",
    target: "Frontal-plane control, peroneals, glutes",
    why: "The mechanism that sprains your ankle is landing on a foot that is rolling inward while you are moving sideways. This drill rehearses exactly that moment under control, at a distance you choose. It is the closest thing the programme has to inoculation, and it is why it comes last.",
    sets: "4 sets", reps: "5 each direction", tempo: "Explosive out / 3s frozen landing",
    rest: "90 s", freq: "2 × per week",
    cues: [
      "Push hard off the outside leg, land on the opposite leg and freeze for a full three seconds.",
      "Land mid-foot with the knee tracking over the middle of the foot — not caving inward.",
      "Start short. Add distance only when every landing is silent and still."
    ],
    mistake: "Chasing distance before control. If you need a second hop to catch your balance, the bound was too far.",
    safety: "Even, non-slip surface. Stop for the day if you cannot stick the landing cleanly.",
    prog: "Short bound and stick → longer bound → bound with a 2-second pause then immediate return → continuous bounds.",
    video: { id: "XDBHOQoAa3w", title: "Lateral Bound with Stick", chan: "Champion Physical Therapy and Performance" }
  },
  {
    id: "sl-landing", region: "ankle", phases: [3],
    name: "Single-Leg Drop Landing",
    target: "Landing mechanics, force absorption, ankle and hip control",
    why: "Marking and landing in AFL, and catching an edge on a board, both end with your full bodyweight arriving on one leg. Training the landing itself — rather than only the jump — is what builds the reflexive control that stops an awkward landing becoming a sprain.",
    sets: "3 sets", reps: "6 each leg", tempo: "Land and hold 3s",
    rest: "90 s", freq: "1–2 × per week",
    cues: [
      "Step off the box — do not jump up first. You are training the landing, not the jump.",
      "Land softly through the ball of the foot then the heel, absorbing with hip and knee.",
      "Freeze for three seconds. If you wobble or hop, the box is too high."
    ],
    mistake: "Landing stiff-legged and loud. Soft and quiet is the whole point.",
    safety: "Start at 15–20 cm and progress to 30 cm at most. If you get a pinch at the front of the ankle on landing, lower the box.",
    prog: "15 cm double-leg → 15 cm single-leg → 25–30 cm single-leg → single-leg landing with a head turn or a catch.",
    video: { id: "aLZfpWTk69U", title: "Single Leg Landing Exercise | Injury Prevention for Athletes", chan: "3DPT" }
  },

  /* ─────────────── ELBOW ─────────────── */
  {
    id: "iso-biceps", region: "elbow", phases: [1, 2],
    name: "Isometric Biceps Hold at 90°",
    target: "Distal biceps tendon",
    why: "Isometric holds let you put a large, sustained load through the tendon without the elbow travelling through the arc that hurts. For many people they also take the edge off tendon pain for an hour or two afterwards. That combination — real stimulus, no provocative movement, short-term pain relief — is why phase 1 is built on them.",
    sets: "5 sets", reps: "30–45 second holds", tempo: "Static hold at 90°",
    rest: "60 s", freq: "Daily in phase 1",
    cues: [
      "Elbow bent to 90° and pinned to your side, palm fully turned up — the supinated position is what loads the distal biceps.",
      "Hold the dumbbell dead still. No creeping upward, no sagging down.",
      "Pick an effort where pain sits at or below 3/10 for the entire hold, not a maximum effort."
    ],
    mistake: "Going too heavy, so the shoulder rolls forward and the elbow drifts away from the ribs to help.",
    prog: "Increase the dumbbell weight before increasing the hold time. Once 45 seconds at a genuinely heavy weight is comfortable, you are ready for eccentrics.",
    videoNote: "Hold at 90° with the palm fully supinated, and choose a weight that keeps pain ≤3/10 for the whole 45 seconds.",
    video: { id: "10T4-2c6108", title: "Dumbbell Bicep Curl (Isometric Hold)", chan: "Seattle Fire Department" }
  },
  {
    id: "iso-supination", region: "elbow", phases: [1, 2],
    name: "Isometric Supination Hold",
    target: "Distal biceps tendon (supination function), supinator",
    why: "This is the exercise most home rehab plans miss. The distal biceps is the body's most powerful forearm supinator — turning the palm up is at least half of its job. If you only ever curl, you leave that half untrained, and it is usually the half that hurts when you load a bar or a kite bar. Train it from day one.",
    sets: "5 sets", reps: "30 second holds each arm", tempo: "Static hold in mid-supination",
    rest: "45 s", freq: "Daily in phase 1",
    cues: [
      "Elbow at 90° and tucked against your side; band anchored so it resists your palm turning up.",
      "Turn the palm to about halfway up and hold it there against the band.",
      "The elbow does not move and does not drift — the rotation happens in the forearm."
    ],
    mistake: "Letting the shoulder rotate to create the turn. Pin the upper arm and make the forearm do it.",
    prog: "Shorten the band or step further from the anchor to increase resistance. Then move to the dumbbell rotations in phase 2.",
    video: { id: "I_qwpiYeGPg", title: "Supination (Isometric) – Band", chan: "Physio REHAB" }
  },
  {
    id: "hammer-curl", region: "elbow", phases: [1, 2, 3],
    name: "Hammer Curl",
    target: "Brachialis, brachioradialis, biceps",
    why: "A neutral grip shifts a good share of the load onto brachialis and brachioradialis and away from the distal biceps' supination role. That lets you keep training elbow flexion strength through phase 1 while the tendon is still irritable, instead of losing it and having to rebuild from zero later.",
    sets: "3 sets", reps: "10–12 each arm", tempo: "1s up / 1s hold / 3s down",
    rest: "60 s", freq: "2–3 × per week",
    cues: [
      "Palms face each other the whole way — no rotating at the top.",
      "Elbow stays at your side; no swinging the weight up with the shoulder.",
      "Lower for a deliberate three seconds every rep."
    ],
    mistake: "Letting the palm turn up near the top, which quietly turns it back into the movement that hurts.",
    prog: "Add weight gradually across phases. In phase 1 it should feel moderate, not maximal.",
    video: { id: "zC3nLlEvin4", title: "How To: Dumbbell Hammer Curl", chan: "ScottHermanFitness" }
  },
  {
    id: "ecc-curl", region: "elbow", phases: [2, 3],
    name: "Slow Eccentric Dumbbell Curl",
    target: "Distal biceps tendon",
    why: "Heavy slow eccentric loading is the best-evidenced way to remodel a painful tendon. The lowering phase is where the tendon takes the most force and gets the strongest remodelling signal, so you use both arms (or the good arm) to lift and only the painful arm to lower. That lets you load the tendon heavier than it could lift on its own.",
    sets: "4 sets", reps: "6–8", tempo: "Lift with both hands / 1s pause / 4–5s lower with the painful arm only",
    rest: "2 min", freq: "3 × per week, at least 48 hours apart",
    cues: [
      "Curl up using both hands, or the other hand assisting, then release and lower with the injured arm alone.",
      "Count the lower out loud — four or five full seconds, evenly paced, all the way to straight.",
      "Palm stays supinated throughout the lower; this is the position that trains the tendon."
    ],
    mistake: "Letting the last 20° of the lower go quickly. The bottom of the range is where the tendon is longest and the stimulus is greatest.",
    safety: "Expect some discomfort at up to 3/10 — that is acceptable. If it is still worse the next morning, drop the weight by 20%.",
    prog: "Add weight, not reps. When the lower feels easy at 4 seconds, add load rather than extending to 6.",
    video: { id: "CXwk1L9mdVc", title: "Slow eccentric bicep curls tutorial", chan: "Dominic Munnelly" }
  },
  {
    id: "db-supination", region: "elbow", phases: [2, 3],
    name: "Dumbbell Supination Rotations",
    target: "Distal biceps tendon, supinator",
    why: "The moving, loaded progression from the isometric supination hold. Holding a dumbbell at one end creates a long lever, so even a light weight produces meaningful rotational load — which is exactly what the distal biceps needs and what it almost never gets in a normal gym programme.",
    sets: "3 sets", reps: "10–12 each arm", tempo: "2s turn up / 1s hold / 4s turn down",
    rest: "60 s", freq: "2–3 × per week",
    cues: [
      "Hold the dumbbell by one end only, so the weight hangs on the thumb side.",
      "Elbow bent to 90° and locked against your ribs — it must not move.",
      "Turn the palm fully up, pause, then resist the whole way back down for four seconds."
    ],
    mistake: "Using a light dumbbell held in the middle. Balanced in the middle there is no rotational load at all — hold one end.",
    prog: "Start with 2–4 kg held at one end; that is harder than it sounds. Progress the weight, then extend the range to full supination.",
    video: { id: "9XVf_yGLXNk", title: "Wrist Strengthening – Pronation and Supination with Dumbbell", chan: "Pure Physiotherapy" }
  },
  {
    id: "ecc-chin", region: "elbow", phases: [2, 3],
    name: "Eccentric Neutral-Grip Chin-Up",
    target: "Distal biceps tendon under high load, lats, forearms",
    why: "Chin-ups are what hurt, so chin-ups are what you have to rebuild — but on your terms. Jumping or stepping to the top and lowering slowly loads the tendon heavily while keeping you out of the weak, painful bottom position at first. A neutral grip keeps the forearm out of the pronated position that levers the distal biceps hardest.",
    sets: "3 sets", reps: "4–6", tempo: "Step or jump up / 5s lower",
    rest: "2 min", freq: "2 × per week",
    cues: [
      "Neutral grip — palms facing each other on parallel handles.",
      "Get to the top with a box or a jump, then lower for a controlled count of five.",
      "Keep the shoulders down and back; do not let the shoulder blades shrug up at the bottom."
    ],
    mistake: "Dropping through the last third. That bottom range is exactly where the tendon needs the control.",
    safety: "Neutral or narrow grip only. Wide-grip pulling is out for the whole programme — it forces the forearm into pronation and levers the distal biceps.",
    prog: "5-second lowers → 8-second lowers → add a weight vest or dumbbell between the feet → full chin-ups in phase 3.",
    videoNote: "The demo uses a supinated palms-toward-you grip. Use a neutral grip instead — palms facing each other.",
    video: { id: "p5WNABLKwcU", title: "The Eccentric (Negative) Chin-Up", chan: "Testosterone Nation" }
  },
  {
    id: "neutral-chin", region: "elbow", phases: [3],
    name: "Neutral-Grip Chin-Up",
    target: "Distal biceps, brachialis, lats",
    why: "The full movement, restored. By phase 3 the tendon has had eight weeks of progressive loading and can handle the concentric as well as the lowering. Keeping the neutral grip permanently is sensible — it is the friendliest grip for the distal biceps and costs you nothing in back development.",
    sets: "4 sets", reps: "As many as you can do well", tempo: "1s up / 1s hold / 3s down",
    rest: "2 min", freq: "2 × per week",
    cues: [
      "Palms facing each other, hands about shoulder-width.",
      "Pull the elbows down to your ribs rather than thinking about pulling with the hands.",
      "Full range at the bottom, but stop short of hanging completely limp at the shoulder."
    ],
    mistake: "Widening the grip as fatigue sets in. When the grip drifts wide, the set is over.",
    safety: "Still no wide-grip pulling, even now.",
    video: { id: "CcSKoDZU-TE", title: "Neutral Grip Pull Ups | SFS Exercise Library", chan: "SET FOR SET" }
  },
  {
    id: "zottman", region: "elbow", phases: [3],
    name: "Zottman Curl",
    target: "Biceps, brachialis, forearm pronators and supinators",
    why: "Supinated on the way up, pronated on the way down — it trains flexion and rotation in the same rep, which is exactly the combination the distal biceps does in life. The pronated lowering also builds forearm robustness, which is directly useful for the grip demands of kitesurfing.",
    sets: "3 sets", reps: "10 each arm", tempo: "1s up supinated / rotate / 3s down pronated",
    rest: "75 s", freq: "1–2 × per week",
    cues: [
      "Curl up with the palm up, rotate the palm down at the top, lower with the palm down.",
      "Rotate at the top, not on the way down — a clean switch at the peak.",
      "Use noticeably less weight than a normal curl; the pronated lower is the limiting factor."
    ],
    mistake: "Bringing curl weight to a Zottman. Start light — the pronated lowering is far harder than it looks.",
    safety: "Phase 3 only. Reverse-grip loading is the last thing added back, not the first.",
    video: { id: "ZrpRBgswtHs", title: "How To: Zottman Curl", chan: "ScottHermanFitness" }
  },
  {
    id: "full-curl", region: "elbow", phases: [3],
    name: "Full-Range Supinated Dumbbell Curl",
    target: "Distal biceps tendon through full range",
    why: "The final step: full range, full supination, under load — the exact thing that used to hurt. Ending the programme still avoiding this position would mean the tendon has never been proven at the range you actually need. Reintroduced only once phase 2 criteria are met.",
    sets: "3 sets", reps: "8–10 each arm", tempo: "2s up / 1s hold / 3s down",
    rest: "75 s", freq: "2 × per week",
    cues: [
      "Start fully straight with the palm turned up, and curl through the whole range.",
      "Keep the elbow at your side and finish with a deliberate squeeze at the top.",
      "Control the bottom — the last 20° toward straight is where the tendon is most loaded."
    ],
    mistake: "Cutting the bottom of the range because it feels vulnerable. A partial range now means a tendon that is still untested where you need it.",
    safety: "If pain at the crease exceeds 3/10 or is worse the next morning, go back to eccentrics for another week before retrying.",
    video: { id: "DgTlETfEuEU", title: "How To Do A Standing Supinated Dumbbell Bicep Curl", chan: "Live Lean TV Daily Exercises" }
  }
];

/* Weekly session templates per phase. 5 sessions per week × 12 weeks = 60 ticks. */
const SESSIONS = {
  1: [
    { key: "A", day: "Mon", name: "Ankle — isometrics & bands", items: ["iso-calf", "seated-calf", "band-eversion", "band-inversion", "band-dorsi", "sl-balance"] },
    { key: "B", day: "Tue", name: "Elbow — isometrics",        items: ["iso-biceps", "iso-supination", "hammer-curl"] },
    { key: "C", day: "Wed", name: "Ankle — balance & hips",     items: ["iso-calf", "band-eversion", "sl-balance", "band-walk"] },
    { key: "D", day: "Fri", name: "Elbow — isometrics",         items: ["iso-biceps", "iso-supination", "hammer-curl"] },
    { key: "E", day: "Sat", name: "Combined — light",           items: ["iso-calf", "band-eversion", "sl-balance", "iso-biceps", "iso-supination"] }
  ],
  2: [
    { key: "A", day: "Mon", name: "Ankle — heavy slow",         items: ["sl-heel-raise", "seated-calf", "split-squat", "band-eversion"] },
    { key: "B", day: "Tue", name: "Elbow — eccentrics",         items: ["ecc-curl", "db-supination", "hammer-curl"] },
    { key: "C", day: "Wed", name: "Ankle — strength & control", items: ["sl-heel-raise", "step-up", "band-walk", "sl-balance-reach", "band-eversion"] },
    { key: "D", day: "Fri", name: "Elbow — pulling",            items: ["ecc-chin", "ecc-curl", "db-supination"] },
    { key: "E", day: "Sat", name: "Combined + easy run",        items: ["seated-calf", "split-squat", "hammer-curl", "iso-supination"] }
  ],
  3: [
    { key: "A", day: "Mon", name: "Ankle — power",              items: ["pogo", "sl-heel-raise", "split-squat", "band-eversion"] },
    { key: "B", day: "Tue", name: "Elbow — full range",         items: ["full-curl", "db-supination", "neutral-chin"] },
    { key: "C", day: "Wed", name: "Landing & cutting",          items: ["pogo", "lat-bound", "sl-landing", "sl-balance-reach", "band-walk"] },
    { key: "D", day: "Fri", name: "Elbow — pulling & rotation", items: ["neutral-chin", "zottman", "ecc-curl"] },
    { key: "E", day: "Sat", name: "Sport integration",          items: ["pogo", "lat-bound", "step-up", "full-curl", "hammer-curl"] }
  ]
};

const phaseForWeek = (w) => (w <= 4 ? 1 : w <= 8 ? 2 : 3);
