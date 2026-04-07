'use client';
import { getNavigationItems } from '@/config/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { HOME_PATH } from '@/utils/consts/paths';

type Props = {
    isSticky?: boolean;
}

export default function Navigation({ isSticky }: Props) {
    const t = useTranslations('navigation');
    const pathname = usePathname();
    const navigationItems = getNavigationItems();
    const isHomePage = pathname === HOME_PATH;
     
    return (
        <nav className="flex space-x-6 mx-auto py-1 md:mr-8 md:ml-auto">
            {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.key}
                        href={item.href}
                        aria-label={item.ariaLabel}                        
                        className={clsx("px-3 py-1 rounded-md transition-colors duration-40 text-white text-xs hover:text-cyan-50 tracking-wide uppercase", {
                            'font-bold pointer-events-none': isActive                        
                        })}
                    >
                        {t(item.key)}
                    </Link>
                );
            })}
        </nav>
    );
}