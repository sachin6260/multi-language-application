import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the user-selected language is not available
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS attacks
    },
    react: {
      useSuspense: false // Disable suspense if you are not using it
    }
  });

export default i18n;
