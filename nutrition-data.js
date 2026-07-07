// Ernährungsdaten – gleiche Struktur wie training-data.js
// "target" wird für die geschätzten Nährwerte verwendet, "details" für die Zubereitung.
const nutritionWeek = [
  { // Sonntag
    weekday: 0,
    name: "Sonntag",
    sessions: [
      {
        time: "Vor dem Lauf (ca. 1-2h vorher)",
        title: "Kohlenhydratreiches, fettarmes Frühstück",
        type: "breakfast",
        duration: null,
        target: "Fokus: viel KH · wenig Fett & Ballaststoffe · moderat Eiweiss",
        details: [
          "Beispiel: 2 Toast mit Honig + Banane (ca. 300 kcal, 70g KH, 5g Eiweiss, 2g Fett)",
          "Grössere Mengen Fett, Ballaststoffe oder Eiweiss vor dem Lauf vermeiden – belastet den Magen",
          "Bei Nervosität im Magen: kleinere Menge, dafür früher essen"
        ]
      },
      {
        time: "Unterwegs (bei Bedarf)",
        title: "Schnelle Kohlenhydrate",
        type: "snack",
        duration: null,
        target: "Fokus: nur schnelle KH, kein Fett/Eiweiss nötig",
        details: [
          "Bei 1h Easy Run in normalen Bedingungen meist nicht zwingend nötig",
          "Bei Hitze oder wenn der Lauf länger dauert: Banane, Traubenzucker oder Gel alle 20-30 Min",
          "Reines Wasser reicht für 1h in der Regel aus"
        ]
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
        target: "ca. 340 kcal · 24g Eiweiss · 57g KH · 2g Fett",
        details: [
          "Toast toasten",
          "Magerquark daraufstreichen oder separat servieren",
          "Banane in Scheiben dazu"
        ]
      },
      {
        time: "Mittag",
        title: "3 hart gekochte Eier + 2 Scheiben Brot + Frischkäse + Gurke/Tomaten",
        type: "lunch",
        duration: null,
        target: "ca. 450 kcal · 28g Eiweiss · 32g KH · 22g Fett",
        details: [
          "Eier 8-10 Min hart kochen, abschrecken, schälen",
          "Brot mit Frischkäse bestreichen",
          "Gurke und Tomaten in Scheiben dazu"
        ]
      },
      {
        time: "Vor Gym",
        title: "Banane oder Joghurt",
        type: "snack",
        duration: null,
        target: "Banane ca. 105 kcal · Joghurt ca. 90 kcal",
        details: [
          "Ca. 30-45 Min vor dem Training, leicht verdaulich"
        ]
      },
      {
        time: "Abend",
        title: "Familienessen",
        type: "note",
        duration: null,
        target: null,
        details: [
          "Kein festes Rezept hinterlegt"
        ]
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
        target: "ca. 465 kcal · 11g Eiweiss · 92g KH · 6g Fett",
        details: [
          "Haferflocken mit Milch oder Pflanzendrink übergiessen",
          "Über Nacht im Kühlschrank quellen lassen",
          "Morgens mit Banane und Honig toppen"
        ]
      },
      {
        time: "Während Ride",
        title: "IsoCarb",
        type: "supplement",
        duration: null,
        target: null,
        details: [
          "Menge nach Herstellerangabe (Prozis Energy IsoCarb)",
          "In Trinkflasche mit Wasser auflösen"
        ]
      },
      {
        time: "Danach",
        title: "Ultra Recovery",
        type: "supplement",
        duration: null,
        target: null,
        details: [
          "Menge nach Herstellerangabe",
          "Im 0-30 Min Fenster nach dem Training"
        ]
      },
      {
        time: "Mittag",
        title: "150g Reis + 1 Dose Thunfisch + 100g Kichererbsen + Olivenöl + Zitrone",
        type: "lunch",
        duration: null,
        target: "ca. 590 kcal · 44g Eiweiss · 69g KH · 14g Fett",
        details: [
          "Reis nach Packungsanweisung kochen",
          "Thunfisch abtropfen lassen, mit Kichererbsen mischen",
          "Mit Olivenöl und Zitronensaft abschmecken"
        ]
      },
      {
        time: "Abend",
        title: "Familienessen (mehr KH)",
        type: "note",
        duration: null,
        target: null,
        details: [
          "Kein festes Rezept hinterlegt – Fokus auf mehr Kohlenhydrate"
        ]
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
        target: "ca. 420 kcal · 23g Eiweiss · 33g KH · 22g Fett",
        details: [
          "Eier verquirlen, in wenig Butter oder Öl stocken lassen",
          "Mit Toast und Joghurt servieren"
        ]
      },
      {
        time: "Mittag (2-3h vor Gorby)",
        title: "Brot + Quark + Frucht",
        type: "lunch",
        duration: null,
        target: "ca. 330 kcal · 24g Eiweiss · 52g KH · 2g Fett",
        details: [
          "Brot mit Magerquark bestreichen",
          "Frucht nach Wahl als Beilage"
        ]
      },
      {
        time: "Nach Gorby",
        title: "Ultra Recovery",
        type: "supplement",
        duration: null,
        target: null,
        details: [
          "Menge nach Herstellerangabe",
          "Im 0-30 Min Fenster nach dem Training"
        ]
      },
      {
        time: "Abend",
        title: "Familienessen (proteinreich)",
        type: "note",
        duration: null,
        target: null,
        details: [
          "Kein festes Rezept hinterlegt – Fokus auf Eiweiss"
        ]
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
        target: "ca. 105 kcal · 27g KH",
        details: [
          "Direkt vor dem Lauf, leicht verdaulich"
        ]
      },
      {
        time: "Nach Lauf",
        title: "Joghurt + Müsliriegel",
        type: "snack",
        duration: null,
        target: "ca. 210 kcal · 7g Eiweiss · 25g KH · 9g Fett",
        details: [
          "Direkt nach dem Lauf verzehren, kein Kochen nötig"
        ]
      },
      {
        time: "Mittag",
        title: "Vor Ort: Reis + Poulet + Gemüse",
        type: "lunch",
        duration: null,
        target: "ca. 480 kcal · 53g Eiweiss · 50g KH · 6g Fett",
        details: [
          "Wird auswärts zubereitet (Kantine/Restaurant)",
          "Ausgewogenes Verhältnis Reis, Poulet, Gemüse wählen"
        ]
      },
      {
        time: "Abend",
        title: "Familienessen",
        type: "note",
        duration: null,
        target: null,
        details: [
          "Kein festes Rezept hinterlegt"
        ]
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
