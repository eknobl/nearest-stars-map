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
  },
  {
    name: "Ross 248",
    distance_ly: 10.30,
    ra: 355.4775, // 23h 41m 54.7s
    dec: 44.175,  // +44d 10m 30s
    spectral_class: "M5.5V",
    radius: 0.16,
    color: "#ff5555"
  },
  {
    name: "Epsilon Eridani",
    distance_ly: 10.52,
    ra: 53.2325,  // 03h 32m 55.8s
    dec: -9.4589, // -09d 27m 29s
    spectral_class: "K2V",
    radius: 0.735,
    color: "#ffddaa"
  },
  {
    name: "Lacaille 9352",
    distance_ly: 10.74,
    ra: 346.4667, // 23h 05m 52s
    dec: -35.8531,// -35d 51m 11s
    spectral_class: "M0.5V",
    radius: 0.47,
    color: "#ffcccc"
  },
  {
    name: "Ross 128",
    distance_ly: 11.03,
    ra: 176.935,  // 11h 47m 44.4s
    dec: 0.8061,  // +00d 48m 22s
    spectral_class: "M4V",
    radius: 0.197,
    color: "#ff8888"
  },
  {
    name: "EZ Aquarii A",
    distance_ly: 11.27,
    ra: 339.6458, // 22h 38m 33s
    dec: -15.2997,// -15d 17m 59s
    spectral_class: "M5V",
    radius: 0.11, // Estimate for M5
    color: "#ff5555"
  },
  {
    name: "Procyon A",
    distance_ly: 11.46,
    ra: 114.8255, // 07h 39m 18.1s
    dec: 5.225,   // +05d 13m 30s
    spectral_class: "F5IV-V",
    radius: 2.05,
    color: "#ffffdd"
  },
  {
    name: "Procyon B",
    distance_ly: 11.46,
    ra: 114.8255,
    dec: 5.225,
    spectral_class: "DQZ",
    radius: 0.012, // White dwarf
    color: "#ccddee"
  },
  {
    name: "61 Cygni A",
    distance_ly: 11.41,
    ra: 316.7248, // 21h 06m 53.9s
    dec: 38.7494, // +38d 44m 58s
    spectral_class: "K5V",
    radius: 0.665,
    color: "#ffcb60"
  },
  {
    name: "61 Cygni B",
    distance_ly: 11.41,
    ra: 316.7248,
    dec: 38.7494,
    spectral_class: "K7V",
    radius: 0.595,
    color: "#ff9966"
  },
  {
    name: "Struve 2398 A",
    distance_ly: 11.52,
    ra: 280.6831, // 18h 42m 44s
    dec: 59.6383, // +59d 38m 18s
    spectral_class: "M3V",
    radius: 0.34,
    color: "#ffbbbb"
  },
  {
    name: "Groombridge 34 A",
    distance_ly: 11.62,
    ra: 4.5958,   // 00h 18m 23s
    dec: 44.0231, // +44d 01m 23s
    spectral_class: "M1.5V",
    radius: 0.38,
    color: "#ffcccc"
  },
  {
    name: "DX Cancri",
    distance_ly: 11.82,
    ra: 127.4556, // 08h 29m 49.3s
    dec: 26.776,  // +26d 46m 33s
    spectral_class: "M6.5V",
    radius: 0.11,
    color: "#ff0000"
  }
];
