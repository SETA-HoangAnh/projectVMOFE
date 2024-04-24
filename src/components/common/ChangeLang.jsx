
import { useTranslation } from 'react-i18next';
import Button from "@mui/material/Button";

export default function ChangeLang(){
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        localStorage.setItem('LOCALE', lang);
        i18n.changeLanguage(lang);
        window.location.reload();
    };

    return (
        <div>
            <Button onClick={() => changeLang('vi')}>Vi</Button>
            <Button onClick={() => changeLang('en')}>En</Button>
        </div>
    )
}