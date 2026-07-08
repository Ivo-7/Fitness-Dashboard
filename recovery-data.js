// Recovery-Daten – gleiche Struktur wie training-data.js / nutrition-data.js
// recoveryWeek: Recovery-Fokus pro Tag, abgestimmt auf die jeweilige Trainingsbelastung
// recoveryTopics: allgemeines Grundlagenwissen, nicht wochentagsgebunden

const recoveryWeek = [
  { // Sonntag
    weekday: 0,
    name: "Sonntag",
    sessions: [
      {
        time: "Nach dem Long Easy Run",
        title: "Cool-down und Auffüllen",
        type: "mobility",
        duration: null,
        target: null,
        details: [
          "5-10 Min lockeres Gehen direkt nach dem Lauf",
          "Dehnen: Waden, Oberschenkelrückseite, Hüftbeuger",
          "Flüssigkeit und Kohlenhydrate auffüllen (siehe Ernährungstab)"
        ]
      }
    ]
  },
  { // Montag
    weekday: 1,
    name: "Montag",
    sessions: [
      {
        time: "Nach dem Oberkörpertraining",
        title: "Regeneration Oberkörper",
        type: "mobility",
        duration: null,
        target: null,
        details: [
          "Über den Tag verteilt ausreichend Eiweiss (siehe Ernährungstab)",
          "Leichtes Dehnen von Brust, Schulter und Rücken nach dem Training",
          "Muskelkater am Folgetag ist normal – stechende, einseitige Schmerzen dagegen abklären"
        ]
      }
    ]
  },
  { // Dienstag
    weekday: 2,
    name: "Dienstag",
    sessions: [
      {
        time: "Nach Beinkraft und Zwift Z2",
        title: "Beine entlasten",
        type: "mobility",
        duration: null,
        target: null,
        details: [
          "Nach der Beinkraft-Einheit: Waden und Oberschenkel dehnen",
          "Nach dem 2h Ride: Beine kurz hochlagern, ausreichend trinken",
          "Falls vorhanden: Foam Rolling für Oberschenkel und Waden"
        ]
      }
    ]
  },
  { // Mittwoch
    weekday: 3,
    name: "Mittwoch",
    sessions: [
      {
        time: "Nach Core und The Gorby",
        title: "Nervensystem erholen lassen",
        type: "mobility",
        duration: null,
        target: null,
        details: [
          "Intervalltraining belastet das Nervensystem stärker als lockere Einheiten",
          "Heute Abend besonders auf ausreichend Schlaf achten",
          "Leichte Mobilisation für Bauch und unteren Rücken nach dem Core-Workout"
        ]
      }
    ]
  },
  { // Donnerstag
    weekday: 4,
    name: "Donnerstag",
    sessions: [
      {
        time: "Nach dem Run-Walk",
        title: "Laufspezifische Regeneration",
        type: "mobility",
        duration: null,
        target: null,
        details: [
          "Abend-Mobility gezielt für Waden, Hüftbeuger und Oberschenkelrückseite nutzen",
          "In der Reconditioning-Phase: Belastung langsam steigern, Schmerzen nicht ignorieren",
          "Bei ungewohnten Beschwerden (z.B. Schienbein): Pause und ärztlich abklären"
        ]
      }
    ]
  },
  { // Freitag
    weekday: 5,
    name: "Freitag",
    sessions: [
      {
        time: "Vor dem VO2max-Training",
        title: "Readiness checken",
        type: "info",
        duration: null,
        target: null,
        details: [
          "Vor der Session HRV und Body Battery checken (unten eintragen)",
          "Bei HRV oder Body Battery unter 60: Intervalle gegen Pettit (Z2) tauschen",
          "VO2max-Intervalle sind intensiv – danach besonders auf Regeneration achten"
        ]
      }
    ]
  },
  { // Samstag
    weekday: 6,
    name: "Samstag",
    sessions: [
      {
        time: "Ruhetag",
        title: "Hauptsächlicher Erholungstag",
        type: "rest",
        duration: null,
        target: null,
        details: [
          "Aktive Erholung: lockeres Spazieren, kein intensives Training",
          "Guter Tag für zusätzlichen Schlaf oder ein Nickerchen",
          "Dem Körper Zeit geben, die Trainingswoche zu verarbeiten"
        ]
      }
    ]
  }
];

const supplementRoutine = [
  {
    time: "Morgen (nach dem Aufstehen)",
    title: "Vitamin D3 & K2",
    type: "supplement",
    duration: null,
    target: null,
    details: []
  },
  {
    time: "Nach dem Mittagessen",
    title: "Essential Multivitamin (Prozis) & Omega 3",
    type: "supplement",
    duration: null,
    target: null,
    details: []
  },
  {
    time: "Nachmittag",
    title: "Protein Shake mit Kreatin",
    type: "supplement",
    duration: null,
    target: null,
    details: []
  },
  {
    time: "Abend (vor dem Schlafen)",
    title: "Magnesium Bisglycinate, Zink & Ashwagandha Extrakt",
    type: "supplement",
    duration: null,
    target: "Ashwagandha nur Mo-Do",
    details: [
      "Freitag und Samstag: Ashwagandha aussetzen",
      "Magnesium und Zink an allen Tagen wie gewohnt"
    ]
  }
];

const recoveryTopics = [
  {
    time: "Wissen",
    title: "HRV (Herzfrequenzvariabilität)",
    type: "info",
    duration: null,
    target: "Zeigt, wie gut dein Nervensystem erholt ist",
    details: [
      "Höhere HRV = besser erholt, tiefere HRV = mehr Stress oder Ermüdung",
      "Schwankt normal von Tag zu Tag – der Trend über mehrere Tage zählt mehr als der Einzelwert",
      "Bei deutlich tieferer HRV als üblich: Intensität reduzieren (siehe Freitag-Hinweis)"
    ]
  },
  {
    time: "Wissen",
    title: "Body Battery",
    type: "info",
    duration: null,
    target: "Garmin-Wert für deine aktuelle Energiereserve (0-100)",
    details: [
      "Kombiniert HRV, Schlaf, Stresslevel und Aktivität zu einem Wert",
      "Unter 60 am Morgen: intensive Einheiten eher gegen eine lockere Z2-Fahrt tauschen",
      "Steigt vor allem durch Schlaf und Entspannung, sinkt durch Stress und Training"
    ]
  },
  {
    time: "Wissen",
    title: "Schlaf-Score",
    type: "info",
    duration: null,
    target: "Garmin-Bewertung deiner Schlafqualität",
    details: [
      "Tiefschlaf- und REM-Anteil sind für die Regeneration besonders wichtig",
      "Konstante Schlafenszeiten verbessern die Qualität oft mehr als reine Schlafdauer",
      "Ziel: 7-9h Schlaf, besonders nach intensiven Tagen wie Mittwoch und Freitag"
    ]
  },
  {
    time: "Wissen",
    title: "ACWR – Trainingsbelastung",
    type: "info",
    duration: null,
    target: "Verhältnis von akuter zu chronischer Trainingsbelastung",
    details: [
      "Zeigt an, ob die Trainingsbelastung zu schnell gesteigert wird",
      "Werte zwischen 0.8 und 1.3 gelten meist als sicherer Bereich",
      "Aktuell besonders relevant beim Laufaufbau nach der Wiedereinstiegsphase"
    ]
  },
  {
    time: "Wissen",
    title: "Aktive vs. passive Erholung",
    type: "info",
    duration: null,
    target: "Beide Formen haben ihren Platz im Trainingsplan",
    details: [
      "Aktive Erholung (z.B. Spazieren am Samstag): fördert die Durchblutung durch sanfte Bewegung",
      "Passive Erholung: Schlaf und Ruhe ohne zusätzliche Belastung",
      "Nach intensiven Tagen (Mittwoch, Freitag) ist vor allem die passive Erholung wichtig"
    ]
  },
  {
    time: "Wissen",
    title: "Muskelkater (DOMS)",
    type: "info",
    duration: null,
    target: "Normale Reaktion auf neue oder intensive Belastung",
    details: [
      "Tritt meist 24-48h nach dem Training auf, besonders bei neuen Übungen",
      "Leichte Bewegung und Dehnen können helfen, verschwindet meist von selbst",
      "Unterschied zu einer Verletzung: DOMS ist muskulär, beidseitig und nicht stechend"
    ]
  }
];
