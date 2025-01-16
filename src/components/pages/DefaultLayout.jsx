import { Outlet } from "react-router-dom";

import HeaderContent from "./HeaderContent";
import FooterContent from "./FooterContent";



export default function DefaultLayout() {
    return (
        <div>
            <HeaderContent />
            <Outlet />
            <FooterContent />
        </div>
    );
};