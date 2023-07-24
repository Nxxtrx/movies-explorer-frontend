import { useState, useEffect } from "react";

const useBurgerMenu = (breakpoint = 769) => {
  const [isBurgerMemuVisible, setBurgerMenuVisible] = useState(false);

  const handleResize = () => {
    setBurgerMenuVisible(window.innerWidth < breakpoint);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () =>  window.removeEventListener('resize', handleResize);
  }, []);

  return isBurgerMemuVisible;
}

export default useBurgerMenu;
