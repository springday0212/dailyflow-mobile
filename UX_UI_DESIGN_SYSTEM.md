# DailyFlow — Genel UX / UI Tasarım Sistemi ve Kuralları

Bu belge, DailyFlow projesinde yeni bir sayfa, bileşen, modal veya arayüz parçası oluştururken yapay zeka ajanlarının harfiyen uyması gereken görsel ve ergonomik tasarım kurallarını belirler.

---

## 1. Mobil Web Ergonomisi ve Dokunmatik Standartları (Touch Targets)
* **Minimum Dokunma Alanı:** Tüm butonlar, gezinme bağlantıları, ikon düğmeleri ve form kontrolleri mobilde en az `44x44px` (tercihen `48x48px`) dokunma alanına sahip olmalıdır.
* **Tıklama Boşlukları (Spacing / Gap):** Yan yana veya alt alta duran tıklanabilir öğeler arasında yanlış tıklamaları önlemek için en az `12px` (`0.75rem`) boşluk bırakılmalıdır.
* **Başparmak Erişimi:** Mobil gezinme öğeleri ve ana aksiyon butonları tek elle kolay ulaşılabilecek şekilde tasarlanmalıdır.

---

## 2. Tipografi ve Metin Okunabilirliği
* **Taban Yazı Boyutu:** Mobil tarayıcılarda gövde metinleri (`body`) asla `15px` veya `16px` değerinin altına inmemelidir.
* **Satır Yüksekliği (Line Height):** Okuma kolaylığı için uzun metinlerde ve paragraflarda `line-height: 1.6` ile `1.7` arasında tutulmalıdır.
* **Okuma Genişliği:** Masaüstü ve geniş ekranlarda metin blokları kullanıcının gözünü yormayacak şekilde `max-width: 720px` veya `800px` ile sınırlandırılmalı ve ortalanmalıdır (`margin: 0 auto`).

---

## 3. Duyarlı Düzen (Responsive Layout) ve Sıfır Yatay Kaydırma
* **Taşma Engeli (Zero Horizontal Scroll):** Sayfalarda kesinlikle sağa-sola kayma (yatay scroll) veya istenmeyen taşmalar olmamalıdır (`overflow-x: hidden; width: 100%; box-sizing: border-box;`).
* **Konteyner Boşlukları (Safe Padding):** Tüm bağımsız sayfa ve içerik kapsayıcıları mobilde kenarlardan minimum `16px` (`1rem`), tablet/masaüstünde `24px`–`32px` iç boşluk (`padding`) almalıdır.
* **Görsel ve Bileşen Uyumları:** Eklenen kartlar, kutular ve görseller esnek olmalı (`max-width: 100%; height: auto;`), küçük ekranlarda ekrandan taşmamalıdır.

---

## 4. Renk Paleti ve Tema Uyumu (CSS Değişkenleri)
* **Sabit Renk Kullanma Yasağı:** Sayfa ve bileşen arka planlarında veya metin renklerinde rastgele sabit renk kodları (`#ffffff`, `#000000` vb.) kullanılmamalıdır.
* **Değişken Entegrasyonu:** Mevcut temanın açık (Light), koyu (Dark), Matcha Garden ve Café Royal modlarıyla kusursuz çalışması için mutlaka `styles.css` içindeki CSS değişkenleri kullanılmalıdır:
  - Arka planlar: `var(--bg)`, `var(--card)`, `var(--surface)`
  - Metinler: `var(--text)`, `var(--muted)`
  - Çizgiler ve Kenarlıklar: `var(--line)`
  - Vurgular / Aksiyonlar: `var(--accent)`, `var(--primary)`
* **Görsel Hiyerarşi:** Başlıklar, ara başlıklar ve kartlar arasında kontrast farkı net olmalı; soft pastel atmosferi korunmalıdır.

---

## 5. Sayfa İçi Gezinme ve Sayfa Yapısı
* **Geri Dönüş Yolu (Breadcrumbs / Back Button):** Ana sayfa dışındaki her alt sayfada, sayfanın en üstünde mobilde rahat tıklanan net bir "← Back to DailyFlow" bağlantısı bulunmalıdır.
* **Bütünleşik Alt Bilgi (Footer):** Tüm alt sayfaların en altında standart responsive footer bileşeni yer almalı ve tutarlılık sağlanmalıdır.