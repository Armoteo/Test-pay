import { useState, useEffect } from 'react';

function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  function handleResize() {
    setIsMobile(window.innerWidth < 576);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useMobile;
