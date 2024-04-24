import i18next from 'i18next';
// import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import backend from 'i18next-http-backend';

// import AppConstants from '../common/constants';

import EN from './en-US.json';
import VI from './vi-VN.json';
// import CN from './zh-CN.json';

const resources = {
    en: {
        translations: EN,
    },
    vi: {
        translations: VI,
    },
    // zh: {
    //     translations: CN,
    // },
};

const storedLocale = localStorage.getItem('LOCALE');


i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: storedLocale || 'en',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        ns: ['translations'],
        defaultNS: 'translations',
    });


export default i18next;
