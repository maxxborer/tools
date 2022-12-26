/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from 'i18next-http-backend';
import LocalStorageBackend from 'i18next-localstorage-cache';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources from "virtual:i18next-loader"; // eslint-disable-line import/no-unresolved

i18n
  .use(ChainedBackend)
  .use(detector)
  .use(initReactI18next)
  .init({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    resources,
    debug: !!$env.isDev,
    defaultNS: "translation",
    // fallbackNS: 'translation',
    fallbackLng: "en", // use en if detected lng is not available
    saveMissing: true, // send not translated keys to endpoint
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend
      ],
      backendOptions: [{
        expirationTime: ($env.isDev ? 1 : 7 * 24) * 60 * 60 * 1000 // 7 days
      }, {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }
  })
  .catch(console.error);

export default i18n;
