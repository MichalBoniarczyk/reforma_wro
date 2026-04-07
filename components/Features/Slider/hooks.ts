'use client'
import { useEffect, useState } from 'react';

const useDetectVisibility = (carouselRef: React.RefObject<HTMLElement>) => {
  const [visibility, setVisibility] = useState({
    firstChildVisible: false,
    lastChildVisible: false,
  });

  useEffect(() => {
    if (!carouselRef.current) {
      return
    };

    const observerOptions = {
      root: carouselRef.current,
      threshold: 0.9
    };

    const firstChild = carouselRef.current.firstElementChild;
    const lastChild = carouselRef.current.lastElementChild;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.target === firstChild) {
          setVisibility(prev => ({ ...prev, firstChildVisible: entry.isIntersecting }));
        } else if (entry.target === lastChild) {
          setVisibility(prev => ({ ...prev, lastChildVisible: entry.isIntersecting }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (firstChild) { 
      observer.observe(firstChild);
    }
    if (lastChild) {
      observer.observe(lastChild);
    }

    return () => {
      if (firstChild) {
        observer.unobserve(firstChild);
      }
      if (lastChild) {
        observer.unobserve(lastChild);
      }
    };
  }, [carouselRef]);

  return visibility;
};

export default useDetectVisibility;