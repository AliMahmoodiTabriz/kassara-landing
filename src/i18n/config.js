import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';

// Basit dil tespiti - localStorage'dan kaydedilmiş dili kontrol et
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('kassara-language');
  return savedLanguage || 'en'; // Varsayılan İngilizce
};

// i18n'i hemen başlat
i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// IP tabanlı dil tespiti (i18n başlatıldıktan sonra)
const detectLanguageByIP = () => {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      // Türkiye ise Türkçe, değilse İngilizce
      const detectedLang = data.country_code === 'TR' ? 'tr' : 'en';
      const currentLang = i18n.language;
      
      // Sadece farklıysa değiştir
      if (detectedLang !== currentLang) {
        i18n.changeLanguage(detectedLang);
      }
    })
    .catch(error => {
      console.log('IP detection failed, keeping current language');
    });
};

// IP tespitini arka planda çalıştır
detectLanguageByIP();

// Dil değişikliklerini localStorage'a kaydet
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('kassara-language', lng);
});

export default i18n;

