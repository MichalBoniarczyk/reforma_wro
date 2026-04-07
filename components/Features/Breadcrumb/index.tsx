'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const Breadcrumb = () => {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('commons');

    const formatSegmentToTitle = (segment: string) => {
        return segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, letter => letter.toUpperCase());
    };

    const segments = pathname.split('/').filter(Boolean).filter(seg => seg !== locale);

    let href = '';
    const breadcrumbItems = [
        {
            label: t('home'),
            href: '/',
            active: false
        },
        ...segments.map((segment, idx) => {
            href += `/${segment}`;
            return {
                label: formatSegmentToTitle(segment),
                href: idx === segments.length - 1 ? '' : href,
                active: idx === segments.length - 1
            };
        })
    ];
    
    return (
        <nav className="flex items-center space-x-1 px-2 md:px-4 py-4 md:py-3 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-900 overflow-x-auto" aria-label="Breadcrumb">
            {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && item.label !== null && (
                        <span className="mx-1 md:mx-2 w-3 h-3 text-gray-400 text-xs" >/</span>
                    )}
                    
                    {item.active ? (
                        <span className="text-sky-600 dark:text-sky-400 font-semibold flex items-center text-xs md:text-sm">
                            {item.label}
                        </span>
                    ) : (
                        <Link 
                            href={item.href}
                            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 flex items-center text-xs md:text-sm"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;