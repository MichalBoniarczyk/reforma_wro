'use client'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { FC } from "react";

type Props = {
    size: string;
    isVisible: boolean;
    arrowClasses?: string;
    onPrev: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

const ButtonArrowLeft: FC<Props> = ({size, arrowClasses, isVisible, onPrev}) => {
    const t = useTranslations('buttons');

    if (!isVisible) {
        return null;
    }

    return (
        <button className={clsx('left-2', arrowClasses)} onClick={onPrev} aria-label={t('previous')}>
            <FontAwesomeIcon icon={faArrowLeft} className={clsx("text-black", size)} />
        </button>
    )
}

export default ButtonArrowLeft