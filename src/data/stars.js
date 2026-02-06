export const stars = [
  {
    name: "Sun",
    distance_ly: 0.0000158, // Effectively 0 for visualization but physically distinct
    ra: 0,
    dec: 0,
    spectral_class: "G2V",
    radius: 1, // Relative to Sol
    color: "#FDB813" // Custom override for Sun
  },
  {
    name: "Proxima Centauri",
    distance_ly: 4.2465,
    ra: 217.4289, // 14h 29m 42.9s -> decimal degrees
    dec: -62.6794,
    spectral_class: "M5.5Ve",
    radius: 0.14,
    color: "#ff3333" // Reddish
  },
  {
    name: "Alpha Centauri A",
    distance_ly: 4.37,
    ra: 219.90206, // 14h 39m 36.4s
    dec: -60.833,
    spectral_class: "G2V",
    radius: 1.22,
    color: "#FDB813"
  },
  {
    name: "Alpha Centauri B",
    distance_ly: 4.37,
    ra: 219.90206, // Approximate to A for visual simplicity at this scale if not separating binary carefully
    dec: -60.833,
    spectral_class: "K1V",
    radius: 0.86,
    color: "#ffddaa" // Orange-ish
  },
  {
    name: "Barnard's Star",
    distance_ly: 5.96,
    ra: 269.45208, // 17h 57m 48.5s
    dec: 4.6933,
    spectral_class: "M4.0Ve",
    radius: 0.196,
    color: "#ff5555"
  },
  {
    name: "Wolf 359",
    distance_ly: 7.78,
    ra: 164.1208, // 10h 56m 29s
    dec: 7.0133,
    spectral_class: "M6.0V",
    radius: 0.16,
    color: "#ff0000"
  },
  {
    name: "Lalande 21185",
    distance_ly: 8.29,
    ra: 165.833, // 11h 03m 20s
    dec: 35.97,
    spectral_class: "M2.0V",
    radius: 0.39,
    color: "#ffaaaa"
  },
  {
    name: "Sirius A",
    distance_ly: 8.60,
    ra: 101.287, // 06h 45m 08.9s
    dec: -16.7161,
    spectral_class: "A1V",
    radius: 1.71,
    color: "#aaddff" // White-blue
  },
  {
    name: "Sirius B",
    distance_ly: 8.60,
    ra: 101.287,
    dec: -16.7161,
    spectral_class: "DA2", // White Dwarf
    radius: 0.0084,
    color: "#ccddee"
  },
  {
    name: "Luyten 726-8 A",
    distance_ly: 8.73,
    ra: 26.262, // 01h 39m 01.3s
    dec: -17.95,
    spectral_class: "M5.5V",
    radius: 0.14,
    color: "#ff7777"
  },
  {
    name: "Luyten 726-8 B",
    distance_ly: 8.73,
    ra: 26.262,
    dec: -17.95,
    spectral_class: "M6.0V",
    radius: 0.14,
    color: "#ffaaaa"
  },
  {
    name: "Ross 154",
    distance_ly: 9.68,
    ra: 287.458, // 19h 09m 50s
    dec: -67.48, // -67d 29m 0s (approx)
    spectral_class: "M3.5Ve",
    radius: 0.17,
    color: "#ffcccc"
  }
];
