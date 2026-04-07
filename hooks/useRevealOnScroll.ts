'use client';

import { useEffect, useRef, useState } from "react";

type UseRevealOnScrollOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

const useRevealOnScroll = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: UseRevealOnScrollOptions = {}) => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

export default useRevealOnScroll;