'use client';

import Navigation from "../../Navigation";

import useScrollVisibility from "@/hooks/useScrollVisibility";
import { SCROLL_HEADER_THRESHOLD } from "@/utils/consts/scroll";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Logo from "@/components/UI/Logo";
import { HOME_PATH } from "@/utils/consts/paths";
import { ScrollDirection } from "@/utils/enums/scroll";

const HeaderDesktop = () => {
    const { isSticky } = useScrollVisibility({ threshold: SCROLL_HEADER_THRESHOLD, direction: ScrollDirection.DOWN });
    const pathname = usePathname();
    const isHomePage = pathname === HOME_PATH;
    
    return (
        <header className={
            clsx("hidden sticky md:flex top-0 left-0 w-full py-3 px-4 z-header items-center h-20 bg-black border-b border-neutral-800" , {

            })
        }>
            <div className="flex items-center">
                <Logo />
            </div>
            <Navigation isSticky={isSticky} />
        </header>
    )
}

export default HeaderDesktop;