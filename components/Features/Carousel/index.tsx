'use client'
import { FC, MouseEvent, TouchEvent, useCallback, useRef, useState } from "react";
import Carousel from "./Carousel";

type Props = {
    data: unknown[]
    selectedItem: number
    setSelectedItem: (item: number) => void
}

const CarouselContainer: FC<Props> = ({
    data,
    selectedItem,
    setSelectedItem
}) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    
    const onNext = useCallback((e: MouseEvent | TouchEvent<HTMLButtonElement>) => {
        if (selectedItem > data.length - 1) {
            return
        }
        
        setIsTransitioning(true)
        
        setTimeout(() => {
            setSelectedItem(prevState => prevState + 1)
            
            setTimeout(() => {
                setIsTransitioning(false)
            }, 500)

        }, 500)
    }, [selectedItem, data.length, setSelectedItem])

    const onPrev = useCallback((e: MouseEvent | TouchEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
        if (selectedItem <= 0) {
            return
        }

        setIsTransitioning(true)

        setTimeout(() => {
            setSelectedItem(prevState => prevState - 1)
            
            setTimeout(() => {
                setIsTransitioning(false)
            }, 300)
            
        }, 300)
        
    }, [selectedItem, setSelectedItem])

    const props = {
        data,
        carouselRef,
        isTransitioning,
        activeElem: selectedItem,
        isLeftArrowArrowVisible: selectedItem > 1,
        isRightArrowArrowVisible: selectedItem <= data.length - 1,
        arrowClasses: 'absolute top-1/2 -translate-y-1/2 rounded-full bg-white/40 hover:bg-white size-10 sm:size-12 transition duration-400 hover:bg-white hover:shadow-md z-10',
        onNext,
        onPrev
    }
    
    return <Carousel {...props} />
}

export default CarouselContainer