import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';

// IP tabanlı dil tespiti
const detectLanguage = () => {
  // Önce localStorage'dan kaydedilmiş dili kontrol et
  const savedLanguage = localStorage.getItem('kassara-language');
  if (savedLanguage) {
    return savedLanguage;
  }

  // IP tabanlı ülke tespiti (async olmadan)
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      // Türkiye ise Türkçe, değilse İngilizce
      const detectedLang = data.country_code === 'TR' ? 'tr' : 'en';
      i18n.changeLanguage(detectedLang);
    })
    .catch(error => {
      console.log('IP detection failed, using default language');
      // Hata durumunda varsayılan olarak İngilizce
      i18n.changeLanguage('en');
    });

  // Varsayılan olarak İngilizce döndür
  return 'en';
};

const detectedLanguage = detectLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en }
    },
    lng: detectedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('kassara-language', lng);
});

export default i18n;

