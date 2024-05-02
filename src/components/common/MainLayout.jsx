import { Outlet } from "react-router-dom";

export default function MainLayout(){
document.body.style.backgroundImage = 'url(src/assets/image/background.jpg)';

    return <div>
        <Outlet></Outlet>
    </div>
}