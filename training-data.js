// Trainingsdaten – 0=Sonntag, 1=Montag, ... 6=Samstag (wie JS Date.getDay())
const trainingWeek = [
  { // Sonntag
    weekday: 0,
    name: "Sonntag",
    sessions: [
      {
        time: "Ganztags",
        title: "Long easy run",
        type: "run",
        duration: "60 min",
        target: "114-132 bpm (Z2)",
        details: [
          "Flache Route wählen",
          "Konstantes, lockeres Tempo – Gespräch sollte möglich sein",
          "Ziel: durchgehend laufen ohne Run-Walk-Intervalle"
        ]
      }
    ]
  },
  { // Montag
    weekday: 1,
    name: "Montag",
    sessions: [
      {
        time: "Mittag",
        title: "Mobility",
        type: "mobility",
        duration: "15 min",
        target: null,
        details: [
          "Fokus: Hüfte, Schulter, Thorax"
        ]
      },
      {
        time: "Abend",
        title: "Oberkörper Krafttraining",
        type: "strength",
        duration: "60-90 min",
        target: "Push oder Pull (wöchentlich wechselnd)",
        details: [
          "Genaue Übungen noch zu ergänzen"
        ]
      }
    ]
  },
  { // Dienstag
    weekday: 2,
    name: "Dienstag",
    sessions: [
      {
        time: "Morgen",
        title: "Beinkraft Läufer-Fokus",
        type: "strength",
        duration: "30-60 min",
        target: null,
        details: [
          "Bulgarian Split Squats",
          "Step-ups",
          "Wadenheben"
        ]
      },
      {
        time: "Mittag",
        title: "Zwift Z2",
        type: "bike",
        duration: "2 h",
        target: "120-163 W / 114-132 bpm",
        details: [
          "Pettit oder freie Fahrt in Z2",
          "IsoCarb während der Fahrt",
          "Ultra Recovery direkt danach"
        ]
      }
    ]
  },
  { // Mittwoch
    weekday: 3,
    name: "Mittwoch",
    sessions: [
      {
        time: "Morgen",
        title: "Core Workout",
        type: "mobility",
        duration: "20-25 min",
        target: null,
        details: [
          "Plank",
          "Dead Bug",
          "Bird Dog",
          "Glute Bridge"
        ]
      },
      {
        time: "Mittag",
        title: "Zwift: The Gorby",
        type: "bike",
        duration: "~50 min",
        target: "240 W Intervalle",
        details: [
          "5x 5 min @ 240 W",
          "5 min Pause @ 120 W zwischen den Intervallen",
          "Ultra Recovery danach"
        ]
      }
    ]
  },
  { // Donnerstag
    weekday: 4,
    name: "Donnerstag",
    sessions: [
      {
        time: "Morgen",
        title: "Laufen: Run-Walk 3:1",
        type: "run",
        duration: "~33 min",
        target: "114-132 bpm (Z2)",
        details: [
          "3 min Laufen / 1 min Gehen im Wechsel",
          "Garmin-Workout ist geladen",
          "Bei zu hoher HF: Gehpausen nicht verkürzen"
        ]
      },
      {
        time: "Abend",
        title: "Mobility",
        type: "mobility",
        duration: "15 min",
        target: null,
        details: [
          "Fokus: Beine, Hüftbeuger, Waden (nach dem Lauf)"
        ]
      }
    ]
  },
  { // Freitag
    weekday: 5,
    name: "Freitag",
    sessions: [
      {
        time: "Morgen",
        title: "Mobility",
        type: "mobility",
        duration: "15 min",
        target: null,
        details: [
          "Fokus: Beine, Hüfte"
        ]
      },
      {
        time: "Mittag",
        title: "Zwift: Wout van Aert VO2max",
        type: "bike",
        duration: "57 min",
        target: "259 W Intervalle",
        details: [
          "6x 2 min @ 259 W",
          "2 min Pause zwischen den Intervallen",
          "Readiness-abhängig: bei HRV oder Body Battery < 60 stattdessen Pettit (Z2) fahren"
        ]
      }
    ]
  },
  { // Samstag
    weekday: 6,
    name: "Samstag",
    sessions: [
      {
        time: "Ganztags",
        title: "Ruhetag",
        type: "rest",
        duration: null,
        target: null,
        details: [
          "Aktive Erholung",
          "Spazieren"
        ]
      }
    ]
  }
];

const typeConfig = {
  strength: { label: "Kraft", color: "coral" },
  bike:     { label: "Rad",   color: "teal" },
  run:      { label: "Lauf",  color: "blue" },
  mobility: { label: "Mobility", color: "purple" },
  rest:     { label: "Ruhetag", color: "gray" }
};
