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

i18next
    // .use(languageDetector)
    // .use(backend)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi',
        fallbackLng: 'vi', // use en if detected lng is not available
        interpolation: {
            escapeValue: false, // react already safes from xss
            formatSeparator: ',',
        },
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',
    });

export default i18next;
