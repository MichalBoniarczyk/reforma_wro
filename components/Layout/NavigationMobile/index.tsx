'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "use-intl";
import clsx from "clsx";
import { getNavigationItems } from "@/config/navigation";
import { useContext } from "react";
import HeaderMobileContext from "../Headers/Mobile/context";
import NavigationMobileHeader from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";

const NavigationMobile = () => {
    const t = useTranslations('navigation');
    const { isNavigationOpen, handlerCloseNavigation } = useContext(HeaderMobileContext);
    const navigationItems = getNavigationItems();
    const pathname = usePathname();

    return (
        <nav 
            className={clsx(
                "fixed top-0 left-0 w-[80%] h-[100vh] bg-white dark:bg-black z-mobile-navigation transition-transform duration-300 ease-in-out",
                {
                    "translate-x-0": isNavigationOpen,
                    "-translate-x-full": !isNavigationOpen
                }
            )}
        >
            <NavigationMobileHeader />
            <section className="flex flex-col gap-2 px-2 space-y-1 mt-4">
                {navigationItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={clsx("px-3 pt-2 pb-5 text-sm border-b border-neutral-300 dark:border-neutral-800 uppercase tracking-wide", {
                                'text-purple-primary dark:text-purple-300 font-semibold': isActive,
                                'text-black-primary dark:text-white-primary': !isActive,
                            })}
                            onClick={handlerCloseNavigation}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleRight} className={clsx("text-black-tertiary w-3 h-3 mr-1")} />
                            {t(item.key)}
                        </Link>
                    );
                })}
            </section>
        </nav>
    )
}

export default NavigationMobile;