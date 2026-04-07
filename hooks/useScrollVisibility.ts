'use client';

import { SCROLL_DEFAULT_THRESHOLD } from "@/utils/consts/scroll";
import { ScrollDirection } from "@/utils/enums/scroll";
import { useEffect, useState } from "react";

type Props = {
    threshold?: number;
    direction?: ScrollDirection
}

const useScrollVisibility = ({ threshold = SCROLL_DEFAULT_THRESHOLD, direction = ScrollDirection.DOWN }: Props) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection.UP | ScrollDirection.DOWN | null>(null);

    useEffect(() => {
        setIsSticky(window.scrollY > threshold);
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const currentDirecrtion = currentScrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP;
            setScrollDirection(currentDirecrtion);
            setScrollY(currentScrollY);

            let shouldBeVisible = false;

            switch (direction) {
                case ScrollDirection.UP:
                    shouldBeVisible = currentScrollY < threshold;
                    break;
                case ScrollDirection.DOWN:
                    shouldBeVisible = currentScrollY > threshold;
                    break;
                case ScrollDirection.BOTH:
                    shouldBeVisible = currentScrollY > threshold || currentScrollY < threshold;
                    break;
                default:
                    shouldBeVisible = false;
            }
            setIsSticky(shouldBeVisible);
            lastScrollY = currentScrollY;
        }
        window.addEventListener('scroll', handleScroll);
    }, [threshold, direction]);

    return {
        isSticky,
        scrollY,
        scrollDirection,
        isScrollingUp: scrollDirection === ScrollDirection.UP,
        isScrollingDown: scrollDirection === ScrollDirection.DOWN
    }

}

export default useScrollVisibility;