// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from '../Components/Lang/en/global.json';
import translationAZ from '../Components/Lang/en/global.json';

// Configuration
i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationAZ }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
