import { useState, useEffect } from "react";

const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Set initial value
    handleResize();

    // Add event listener on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
