/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.5, tr: "Arkadaşım oyun hesabının şifresini bana verdi", en: "My friend gave me his game password",
      note: "Karo'nun arkadaşı tatile giderken \"Hesabımda görevleri sen yap\" diyerek oyun şifresini Karo'ya verdi. Sence bu güvenli mi?" },
    { scene: 1, start: 9.3, end: 15, tr: "Siber kalkanımızı kuralım", en: "Let's build our cyber shield",
      note: "Siber ortamdaki riskleri ve önlemleri öğrenelim." },
    { scene: 2, start: 17.8, end: 23.7, tr: "Kimlik avı: sahte sayfayla şifre çalmak", en: "Phishing: stealing passwords with fake pages",
      note: "Kimlik avında gerçeğine benzeyen sahte bir giriş sayfası hazırlanır; oraya yazılan şifre çalınır." },
    { scene: 2, start: 24.5, end: 30.5, tr: "Zayıf şifre: hesabı kolayca ele geçirtir", en: "Weak passwords make accounts easy to take over",
      note: "123456 ya da doğum tarihi gibi şifreler kolayca tahmin edilir ve hesap ele geçirilir." },
    { scene: 2, start: 31.3, end: 37.1, tr: "Korsan yazılım: içinden virüs çıkabilir", en: "Pirated software can hide viruses",
      note: "Lisanssız, korsan programların içine zararlı yazılımlar gizlenmiş olabilir." },
    { scene: 2, start: 37.9, end: 45.1, tr: "Sistem açıkları ve şifre paylaşmak da risk", en: "System flaws and shared passwords are risks too",
      note: "Güncellenmeyen programlardaki açıklardan veriler sızdırılabilir. Şifremizi başkasıyla paylaşmak da hesabımızı riske atar." },
    { scene: 3, start: 48, end: 55.3, tr: "Güçlü, farklı şifre ve iki adımlı doğrulama", en: "Strong, unique passwords and two-step verification",
      note: "Her hesapta farklı ve güçlü bir şifre kullanırız. İki adımlı doğrulamada şifreye ek olarak telefona gelen kodu da gireriz." },
    { scene: 3, start: 56.1, end: 61.8, tr: "Güncelle ve antivirüs kullan", en: "Update and use antivirus",
      note: "Güncellemeler sistem açıklarını kapatır. Antivirüs programı zararlı yazılımları yakalar." },
    { scene: 3, start: 62.6, end: 69.3, tr: "Önemli dosyaları yedekle", en: "Back up important files",
      note: "Önemli dosyalarımızı buluta ya da harici belleğe yedekleriz. Bir sorun olursa dosyalarımız kaybolmaz." },
    { scene: 4, start: 72, end: 77.7, tr: "Bilgi güvenliğinin üç bileşeni", en: "The three parts of information security",
      note: "Bilgi güvenliğinin üç temel bileşeni vardır: gizlilik, bütünlük ve erişilebilirlik. Örnekleri gruplayalım." },
    { scene: 4, start: 78.5, end: 84.2, tr: "Gizlilik: yalnızca izinliler görür", en: "Confidentiality: only allowed people see it",
      note: "Şifremizi paylaşmamak ve mesajlarımızı yalnızca bizim okumamız gizlilikle ilgilidir." },
    { scene: 4, start: 85, end: 90.7, tr: "Bütünlük: izinsiz değiştirilemez", en: "Integrity: no unauthorised changes",
      note: "Notlarımızı yalnızca öğretmenin değiştirebilmesi ve ödevimizin izinsiz değiştirilememesi bütünlüktür." },
    { scene: 4, start: 91.5, end: 98.3, tr: "Erişilebilirlik: gerektiğinde ulaşırız", en: "Availability: there when we need it",
      note: "Yedeklediğimiz ödeve her zaman ulaşabilmek ve okul sitesinin açık kalması erişilebilirliktir." },
    { scene: 5, start: 101.1, end: 107.3, tr: "Arkadaşımın şifresini kullanmayıp uyarmak", en: "Not using my friend's password and warning him",
      note: "Karo şifreyi kullanmadı. Arkadaşına şifresini kimseyle paylaşmamasını ve değiştirmesini söyledi. Güvenli ve doğru davranış." },
    { scene: 5, start: 108, end: 113.8, tr: "Her hesapta aynı şifreyi kullanmak", en: "Using the same password everywhere",
      note: "Bir hesabın şifresi çalınırsa aynı şifreyi kullandığımız bütün hesaplar tehlikeye girer. Riskli." },
    { scene: 5, start: 114.5, end: 120.3, tr: "Güncelleme uyarısını hep ertelemek", en: "Always postponing updates",
      note: "Güncellemeleri ertelemek sistem açıklarını açık bırakır. Riskli." },
    { scene: 6, start: 123, end: 129.2, tr: "Aklında kalsın: şifre diş fırçası gibidir", en: "Remember: a password is like a toothbrush",
      note: "Aklında kalsın: şifre diş fırçası gibidir; kimseyle paylaşılmaz ve düzenli değiştirilir." },
    { scene: 6, start: 129.9, end: 135.7, tr: "Siber kalkanın hep açık olsun!", en: "Keep your cyber shield up!",
      note: "Önlemlerini aldıkça siber kalkanın güçlenir!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
