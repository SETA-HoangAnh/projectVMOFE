
import { useTranslation } from 'react-i18next';
import Button from "@mui/material/Button";

export default function ChangeLang(){
    const { i18n } = useTranslation();
    const changeVi = () => i18n.changeLanguage('vi');
    const changeEn = () => i18n.changeLanguage('en');
    return (
        <div>
            <Button onClick={changeVi}>Vi</Button>
            <Button onClick={changeEn}>En</Button>
        </div>
    )
}