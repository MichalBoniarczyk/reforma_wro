'use client'

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { FC } from "react";

type Props = {
    size: string;
    arrowClasses: string;
    isVisible: boolean;
    onNext: (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

const ButtonArrowRight: FC<Props> = ({size, arrowClasses, isVisible, onNext}) => {
    const t = useTranslations('buttons');

    if (!isVisible) {
        return null;
    }

    return (
        <button className={clsx('right-2', arrowClasses)} aria-label={t('next')} onClick={onNext}>
             <FontAwesomeIcon icon={faArrowRight} className={clsx("text-black", size)} />
        </button>
    )
}

export default ButtonArrowRight