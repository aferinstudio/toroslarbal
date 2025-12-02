    // Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    // 1. HTML Elementlerini Seçme
    const honeyJar = document.getElementById('honey-jar');
    const honeyDripPath = document.getElementById('honey-drip-path');
    
    // Eğer elementler bulunamazsa, fonksiyonu durdur. (Mühendislik Kontrolü)
    if (!honeyJar || !honeyDripPath) {
        console.error("Bal animasyonu elementleri bulunamadı!");
        return;
    }

    // 2. Sayfa Kaydırma Olayını Dinleme
    window.addEventListener('scroll', () => {
        // Sayfanın ne kadar kaydırıldığını hesaplama
        const scrollPosition = window.scrollY;
        
        // Kaydırma değerini 0 ile 1 arasında normalize etme (0: en üst, 1: en alt)
        // Burada 5000 piksel kaydırmadan sonra animasyonun bitmesini varsayalım
        const maxScroll = 5000; 
        let scrollRatio = Math.min(1, scrollPosition / maxScroll);

        // =======================================
        // KAVANOZ DÖNME ANİMASYONU
        // =======================================
        // Başlangıç eğimi 30 derece, tam devrilme (dökülme) 90 derece olsun.
        const startRotation = 30;
        const maxRotation = 90;
        const currentRotation = startRotation + (maxRotation - startRotation) * scrollRatio;
        
        honeyJar.style.transform = `rotate(${currentRotation}deg)`;

        // =======================================
        // BAL DÖKÜLME (UZAMA) ANİMASYONU
        // =======================================
        // Maksimum dökülme yüksekliği 1000 piksel olsun.
        const maxHeight = 1000;
        const currentHeight = maxHeight * scrollRatio;
        
        honeyDripPath.style.height = `${currentHeight}px`;

        // Bal damlasının rengini kaydırma oranına göre biraz koyulaştırabiliriz (opsiyonel)
        if (currentHeight > 0) {
            honeyDripPath.style.opacity = 1;
        } else {
            honeyDripPath.style.opacity = 0;
        }
    });
});