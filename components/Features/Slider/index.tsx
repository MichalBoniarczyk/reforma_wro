'use client'
import { type FC, type MouseEvent, type TouchEvent, useCallback, useEffect, useRef } from "react";
import useDetectVisibility from "./hooks";
import Slider from "./Slider";

type Props = {
    sliderContainerClasses: string
    children: React.ReactNode
}

const SliderContainer: FC<Props> = ({
    sliderContainerClasses,
    children
}) => {
    const sliderRef = useRef<HTMLElement>(null!)
    const { firstChildVisible, lastChildVisible } = useDetectVisibility(sliderRef);

    const scrollBy = useCallback((val: number) => {
        const scrollWidth = sliderRef?.current?.children[0].scrollWidth
        const left = val * scrollWidth

        sliderRef?.current?.scrollBy({
            left,
            behavior: 'smooth'
        })          
    }, [])

    const onNext = useCallback((e: MouseEvent | TouchEvent<HTMLButtonElement>) => {
        e.preventDefault()
        scrollBy(1)
    }, [scrollBy])

    const onPrev = useCallback((e: MouseEvent | TouchEvent<HTMLButtonElement>) => {
        e.preventDefault()
        scrollBy(-1)
    }, [scrollBy])

    const props = {
        children,
        sliderRef,
        isLeftArrowVisible: !firstChildVisible, 
        isRightArrowVisible: !lastChildVisible,
        arrowClasses: 'absolute top-1/2 -translate-y-1/2 rounded-full bg-white size-10 cursor-pointer transition duration-400 shadow-xl z-10',
        sliderContainerClasses,
        onNext,
        onPrev
    }
    
    return <Slider {...props} />
}

export default SliderContainer