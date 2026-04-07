'use client'
import { DeviceBreakpoints } from '@/utils/enums/breakpoints';
import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => window.innerWidth < DeviceBreakpoints.SM;
      setIsMobile(checkIsMobile());

      const handleResize = () => {
        setIsMobile(checkIsMobile());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
};

export default useIsMobile;