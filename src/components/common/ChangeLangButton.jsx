import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from "@mui/material/Button";

export default function ChangeLang(){
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('LOCALE') || 'en');

    const changeLang = (lang) => {
        setCurrentLang(lang);
        localStorage.setItem('LOCALE', lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <Button onClick={() => changeLang('vi')} disabled={currentLang === 'vi'}>Vi</Button>
            <Button onClick={() => changeLang('en')} disabled={currentLang === 'en'}>En</Button>
        </div>
    )
}