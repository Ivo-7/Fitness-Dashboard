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
        target: "Ganzkörper",
        details: []
      },
      {
        time: "Abend",
        title: "Oberkörper Krafttraining",
        type: "strength",
        duration: "60-90 min",
        target: null,
        details: [
          "Schrägbankdrücken mit Kurzhanteln – 3x6, 40 kg Hanteln",
          "Schulterdrücken sitzend – 3x6, 25 kg Kurzhanteln",
          "Latziehen – 3x8, 80 kg",
          "Rudern mit V-Griff – 3x8, 80 kg",
          "Seitheben mit Kurzhanteln – 3x8, 12.5 kg Hanteln",
          "Bizeps Isolated Curl – 3x6, 15 kg Hanteln",
          "Bizeps Rotationscurl – 3x6, 15 kg Hanteln",
          "Hammer Curls – 3x6, 15 kg Hanteln",
          "Trizepsdrücken am Seil – 3x8, 55 kg"
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
          "Kreuzheben einbeinig – 3x10",
          "Split Squats – 3x10",
          "Step-ups – 3x10",
          "Wadenheben – 3x10",
          "Wadenheben exzentrisch – 3x10"
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
        target: "je 30 Sek Übung, 10 Sek Pause",
        details: [
          "Full body folds",
          "Lying leg raise",
          "Heel taps",
          "Reverse crunch",
          "Scissor raises",
          "Oblique crunch rechts",
          "Oblique crunch links",
          "Shoulder taps",
          "Plank up downs",
          "Static plank",
          "Side plank ups rechts",
          "Side plank ups links",
          "Static side plank rechts",
          "Static side plank links",
          "Full side crunch rechts",
          "Full side crunch links",
          "Explosive sit-up",
          "Knee slides",
          "Russian twists",
          "Controlled crunch",
          "Leg raise overhead",
          "V sit crunch",
          "Plank rotations",
          "Plank knee ins",
          "Serratus plank ups",
          "Flutter kicks",
          "Extended press ups",
          "Lower ab static hold",
          "L sit cross punch",
          "Mountain climbers"
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
        target: "Ganzkörper",
        details: []
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
        target: "Ganzkörper",
        details: []
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
