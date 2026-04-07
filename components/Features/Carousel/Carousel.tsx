'use client'
import type { FC } from "react";
import Image from "next/image";
import ButtonArrowLeft from "@/components/UI/Arrows/ButtonLeft";
import ButtonArrowRight from "@/components/UI/Arrows/ButtonRight";
import clsx from "clsx";
import Spinner from "@/components/UI/Spinner";
import { SpinnerColor, SpinnerSize } from "@/utils/enums/spinner";

type Props = {
    activeElem: number
    isLeftArrowArrowVisible: boolean
    isRightArrowArrowVisible: boolean
    arrowClasses: string
    isTransitioning: boolean
    carouselRef: React.RefObject<HTMLDivElement>
    onNext: () => void
    onPrev: () => void
}

const Carousel: FC<Props> = ({
    activeElem,
    isTransitioning,
    isLeftArrowArrowVisible,
    isRightArrowArrowVisible,
    arrowClasses,
    carouselRef,
    onNext,
    onPrev
}) => (
    <section className='relative w-full'>
        <ButtonArrowLeft size="text-md" isVisible={isLeftArrowArrowVisible} arrowClasses={arrowClasses} onPrev={onPrev} />
        <ButtonArrowRight size="text-md" isVisible={isRightArrowArrowVisible} arrowClasses={arrowClasses} onNext={onNext} />
        <section className='flex w-full sm:w-max-[1200px]' ref={carouselRef}>
            <div className="overflow-y-auto flex-shrink-0 w-full h-full">
                {isTransitioning && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex-center">
                        <Spinner color={SpinnerColor.BLACK} size={SpinnerSize.XLARGE} />
                    </div>
                )}
                <section className={clsx("w-full h-[100vh] overflow-y-scroll transition-transform duration-1000 delay-100 ease-in-out relative", {
                    'opacity-100 scale-100': !isTransitioning,
                    'opacity-0 scale-98': isTransitioning
                })}>
                <Image src={`/images/slider/img-${activeElem}.avif`} alt='' className='object-cover' width={1920} height={1020} />
                </section>
            </div>
        </section>
    </section>
)

export default Carousel