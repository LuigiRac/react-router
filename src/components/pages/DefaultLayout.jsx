import { Outlet } from "react-router-dom";

import HeaderContent from "../components/pages/HeaderContent";
import FooterContent from "../components/pages/FooterContent";


export default function DefaultLayout() {
    return (
        <div>
            <HeaderContent />
            <Outlet />
            <FooterContent />
        </div>
    );
};