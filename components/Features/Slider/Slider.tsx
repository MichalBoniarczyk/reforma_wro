'use client'
import clsx from "clsx";
import type { FC, MouseEvent, TouchEvent } from "react";

import ButtonArrowLeft from "@/components/UI/Arrows/ButtonLeft";
import ButtonArrowRight from "@/components/UI/Arrows/ButtonRight";

type Props = {
    children: React.ReactNode;
    sliderRef: React.RefObject<HTMLElement>;
    isLeftArrowVisible: boolean;
    isRightArrowVisible: boolean;
    arrowClasses: string;
    sliderContainerClasses: string;
    onNext: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void;
    onPrev: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void;
};

const Slider: FC<Props> = ({
    children,
    isLeftArrowVisible,
    isRightArrowVisible,
    arrowClasses,
    sliderRef,
    sliderContainerClasses,
    onNext,
    onPrev
}) => (
    <section className='relative w-full'>
        <ButtonArrowLeft size="text-md" isVisible={isLeftArrowVisible} arrowClasses={arrowClasses} onPrev={onPrev} />
        <ButtonArrowRight size="text-md" isVisible={isRightArrowVisible} arrowClasses={arrowClasses} onNext={onNext} />
        <section className={clsx(sliderContainerClasses)} ref={sliderRef}>
            {children}
        </section>
    </section>
)

export default Slider