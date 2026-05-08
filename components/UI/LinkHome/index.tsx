'use client';
import { LinksStyleType } from "@/utils/enums/links";
import clsx from "clsx";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
    readonly href: string;
    readonly arialLabel?: string;
    readonly type?: LinksStyleType;
    readonly wrapperStyle?: string;
    readonly isBlank?: string;
    readonly children: React.ReactNode;
}

const LinkHome: React.FC<Props> = ({
    href,
    arialLabel,
    type,
    wrapperStyle,
    isBlank = '',
    children
}) => {

    const style = useMemo(() => {
        switch (type) {
            case LinksStyleType.primary:
                return 'text-white bg-sky-600 hover:bg-sky-500';
            case LinksStyleType.secondary:
                return 'text-gray-700 bg-gray-200 hover:bg-gray-400';
            case LinksStyleType.green:
                return 'text-white bg-green-600 hover:bg-green-400';
            case LinksStyleType.red: 
                return 'text-white bg-red-600 hover:bg-red-400';
            default:
                return '';
        }

    }, [type])

    return (
        <div className={clsx("w-full flex justify-center items-center", wrapperStyle)}>
            <Link href={href} target={isBlank} aria-label={arialLabel} className={clsx('px-6 py-2 rounded-xl text-sm font-semibold transition duration-600 ease-in-out uppercase flex items-center justify-center gap-2', style)}>
                {children}
            </Link>
        </div>
    )
}

export default LinkHome;