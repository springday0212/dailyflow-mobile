# DailyFlow — Proje Kuralları ve Geliştirici Kılavuzu

Bu belge, projede değişiklik yapan yapay zeka ajanları (Antigravity vb.) için KESİN VE BAĞLAYICI kuralları içerir. Yapılan her işlemde bu kurallara harfiyen uyulmalıdır.

---

## 1. Altın Kural: Mevcut Çalışan Kodu Asla Bozma (Scope Isolation)
* **Yalnızca Talep Edilen Alan:** Sadece verilen komutta açıkça belirtilen dosyalarda ve fonksiyonlarda değişiklik yap.
* **Gereksiz Yeniden Yazımları Önle:** İlgisiz bileşenleri, çalışan JS mantıklarını veya CSS kurallarını "refactor" etme, yeniden yazma veya silme.
* **Mevcut Çalışan Özellikleri Koru:** 
  - Görev yönetimi (To-Do), Takvim, Finans/Bütçe takibi,
  - Özel saat/dakika ve tarih seçiciler (custom time/date pickers),
  - Çoklu dil (i18n) sistemi,
  - Mevcut mobil safe-area padding yapıları ASLA bozulmamalı ve sıfırlanmamalıdır.

---

## 2. Platform Ayrımı (Web vs. Mobil / Capacitor)
* **Çift Platform Mimarisi:** Bu proje hem tarayıcıda (`dailyflowweb.com`) hem de Capacitor aracılığıyla Android mobil uygulama olarak çalışmaktadır.
* **Web'e Özel Bileşenler:** Web onayları veya SEO/AdSense için eklenen bileşenler (Footer, ek rehber/alt sayfalar, harici blog linkleri vb.) **yalnızca web tarayıcısında** görünmelidir.
* **Mobil İzolasyonu:** Mobil görünümde (`body.is-capacitor` veya Cordova/Capacitor ortamında) web'e özel bileşenler kesinlikle render edilmemeli veya `display: none !important` ile gizlenmelidir. Mobil uygulamanın arayüzü, çentik boşlukları ve yerleşimi etkilenmemelidir.

---

## 3. Güvenlik ve Gizlilik (Security & Secrets)
* **Anahtar ve Sertifika Koruması:** `dailyflow-release-key.jks`, `dailyflow-release.jks`, `*.keystore` ve şifre barındıran hiçbir dosya Git takibine eklenmemeli, kod içerisine hardcoded yazılmamalıdır.
* **.gitignore Bütünlüğü:** `.gitignore` kuralları her zaman korunmalı; derleme çıktıları (`.aab`, `.apk`) ve anahtarlar asla uzak depoya gönderilmemelidir.

---

## 4. Değişiklik ve İş Akışı Kuralları
1. **İncele ve Farkı Belirle:** Bir komut aldığında önce sadece o komutun etkilediği dosyaları belirle.
2. **Minimal Müdahale:** İstenen işlevi çözebilecek en az satır kodla çöz.
3. **Senkronizasyon:** `www/` dizinine veya Android klasörüne senkronizasyon gerekiyorsa, bunu yalnızca kullanıcı açıkça talep ettiğinde veya derleme aşamasında yap.
---

## Otomatik Sürüm Kontrolü ve Dağıtım (Auto-Deploy Protocol)
* **Otomatik Yayınlama Şartı:** Kullanıcıdan gelen herhangi bir arayüz, stil, metin, sayfa veya özellik ekleme/düzeltme görevi başarıyla tamamlandığında, ajanın süreci tamamlamak için ayrıca bir onay beklemesine gerek yoktur.
* **Standart Kapanış Adımları:** Her görevin sonunda sırasıyla şu iki işlem terminalde otomatik yürütülmelidir:
  1. Değiştirilen dosyaları Git'e ekle, yapılan işi özetleyen kısa bir commit mesajı yaz ve GitHub uzak deposuna push'la (`git push origin main`).
  2. Web sitesini Firebase Hosting üzerinde doğrudan canlıya al (`firebase deploy`).
* **Kapanış Bildirimi:** Ajan, yanıtının sonunda değişikliklerin başarıyla GitHub'a gönderildiğini ve Firebase üzerinden canlıya alındığını (Deploy complete) onaylayan kısa bir özet sunmalıdır.