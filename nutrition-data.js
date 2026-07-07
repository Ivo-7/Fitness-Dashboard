// Ernährungsdaten – gleiche Struktur wie training-data.js
const nutritionWeek = [
  { // Sonntag
    weekday: 0,
    name: "Sonntag",
    sessions: [
      {
        time: "Ganztags",
        title: "Gutes Frühstück vor dem Wandern, Snacks mitnehmen",
        type: "note",
        duration: null,
        target: null,
        details: []
      }
    ]
  },
  { // Montag
    weekday: 1,
    name: "Montag",
    sessions: [
      {
        time: "Frühstück",
        title: "2 Toast + 150g Magerquark + Banane",
        type: "breakfast",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Mittag",
        title: "3 hart gekochte Eier + 2 Scheiben Brot + Frischkäse + Gurke/Tomaten",
        type: "lunch",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Vor Gym",
        title: "Banane oder Joghurt",
        type: "snack",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Abend",
        title: "Frau kocht",
        type: "note",
        duration: null,
        target: null,
        details: []
      }
    ]
  },
  { // Dienstag
    weekday: 2,
    name: "Dienstag",
    sessions: [
      {
        time: "Frühstück",
        title: "80g Overnight Oats + Banane + Honig",
        type: "breakfast",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Während Ride",
        title: "IsoCarb",
        type: "supplement",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Danach",
        title: "Ultra Recovery",
        type: "supplement",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Mittag",
        title: "150g Reis + 1 Dose Thunfisch + 100g Kichererbsen + Olivenöl + Zitrone",
        type: "lunch",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Abend",
        title: "Frau kocht (mehr KH)",
        type: "note",
        duration: null,
        target: null,
        details: []
      }
    ]
  },
  { // Mittwoch
    weekday: 3,
    name: "Mittwoch",
    sessions: [
      {
        time: "Frühstück",
        title: "2 Eier Rührei + 2 Toast + Joghurt",
        type: "breakfast",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Mittag (2-3h vor Gorby)",
        title: "Brot + Quark + Frucht",
        type: "lunch",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Nach Gorby",
        title: "Ultra Recovery",
        type: "supplement",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Abend",
        title: "Frau kocht (proteinreich)",
        type: "note",
        duration: null,
        target: null,
        details: []
      }
    ]
  },
  { // Donnerstag
    weekday: 4,
    name: "Donnerstag",
    sessions: [
      {
        time: "Vor Lauf",
        title: "Banane",
        type: "snack",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Nach Lauf",
        title: "Joghurt + Müsliriegel",
        type: "snack",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Mittag",
        title: "Vor Ort: Reis + Poulet + Gemüse",
        type: "lunch",
        duration: null,
        target: null,
        details: []
      },
      {
        time: "Abend",
        title: "Frau kocht",
        type: "note",
        duration: null,
        target: null,
        details: []
      }
    ]
  },
  { // Freitag
    weekday: 5,
    name: "Freitag",
    sessions: [
      {
        time: "Ganztags",
        title: "Alle Mahlzeiten gemeinsam mit Frau",
        type: "note",
        duration: null,
        target: null,
        details: [
          "Abend etwas weniger KH (Ruhetag)"
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
        title: "Gemeinsam, weniger KH, Gemüse-Fokus",
        type: "rest",
        duration: null,
        target: null,
        details: [
          "Ruhetag"
        ]
      }
    ]
  }
];

const shoppingList = [
  "Thunfisch-Dosen 2x",
  "Eier 12x",
  "Magerquark 500g",
  "Joghurt natur 4x200g",
  "Frischkäse 1x",
  "Haferflocken 500g",
  "Reis 1kg",
  "Toastbrot",
  "Bananen 6-8x",
  "Müsliriegel 4-5x",
  "Kichererbsen-Dosen 1-2x",
  "Gurken",
  "Cherrytomaten",
  "Tiefkühlgemüse 1kg",
  "Äpfel/Beeren",
  "Zitronen 2x",
  "Olivenöl",
  "Honig"
];
