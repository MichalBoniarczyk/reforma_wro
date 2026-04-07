'use client';
import Blackout from "@/components/UI/Blackout";

import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationMobile from "../../NavigationMobile";
import HeaderMobileContext from "./context";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { onBodyNoScrollable } from "@/utils/helpers/onBodyNoScrollable";
import useIsMobile from "@/hooks/useIsMobile";
import Logo from "@/components/UI/Logo";

const HeaderMobile = () => {
    const t = useTranslations('mobileHeader');
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const navButtonLabel = isNavigationOpen ? t('closeMenu') : t('openMenu');
    const isMobile = useIsMobile();

    if (!isMobile) {
        return null;
    }

    const handlerOpenNavigation = () => {
        setIsNavigationOpen(true);
        onBodyNoScrollable(true);
    }

    const handlerCloseNavigation = () => {
        setIsNavigationOpen(false);
        onBodyNoScrollable(false);
    }
    
    const valueContext = {
        isNavigationOpen,
        handlerCloseNavigation
    }

    return (
        <>
            <HeaderMobileContext.Provider value={valueContext}>
                <header className="flex md:hidden w-full h-[70px] sticky top-0 left-0 z-mobile-header  bg-black items-center px-4 shadow-md">
                    <Logo />
                    <button className="ml-auto mr-4 text-white" aria-label={navButtonLabel} onClick={handlerOpenNavigation}>
                        <FontAwesomeIcon icon={faNavicon} />
                    </button>
                </header>
                <NavigationMobile />
                <Blackout isActive={isNavigationOpen} onClick={handlerCloseNavigation} />
            </HeaderMobileContext.Provider>
        </>
    )
}

export default HeaderMobile;