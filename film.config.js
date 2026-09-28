/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "siber-kalkan",
    "title": "Siber Kalkan",
    "titleEn": "Cyber Shield",
    "grade": 6,
    "theme": "Bilişim Etiği ve Siber Güvenlik",
    "code": "BTY.6.4.3",
    "outcome": "Siber ortamda güvenlik önlemlerini yönetebilme",
    "outcomeEn": "Managing security measures in cyberspace",
    "duration": 137,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 16.3,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 16.3,
      "t1": 46.5,
      "name": "Siber riskler",
      "en": "Cyber risks",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 46.5,
      "t1": 70.6,
      "name": "Önlemler",
      "en": "Protections",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 70.6,
      "t1": 99.7,
      "name": "Bilgi güvenliği",
      "en": "Information security",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 99.7,
      "t1": 121.6,
      "name": "Durumu değerlendir",
      "en": "Judge the situation",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 121.6,
      "t1": 137,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
