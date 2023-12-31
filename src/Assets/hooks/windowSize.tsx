import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow:boolean = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width:any = hasWindow ? window.innerWidth : null;
    const height:any = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<any>(getWindowDimensions());
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }
  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}