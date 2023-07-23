import React, { useEffect, useState } from "react";
import NavTab from "../NavTab/NavTab";
import headerLogo from '../../images/logo.svg'
import './Header.css'
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const location = useLocation();

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

    const [isBurgermenuOpened, setIsBurgerMenuOpened] = useState(false);

    const OpenBurgerMenu = () => {
      setIsBurgerMenuOpened(true)
    }

    const closeBurgerMenu = () => {
      setIsBurgerMenuOpened(false)
    }

    const isMobile = useBurgerMenu();


    return(
      <div className={`header ${location.pathname === '/' ? 'header_type_colored' : ''}`}>
        <div className={`header__container ${location.pathname === '/' ? '' : 'header__container_type_auth'}`}>
          <Link to="/"><img src={headerLogo} className="header__logo" alt="" /></Link>
          {isMobile && (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile')
            ? <button onClick={OpenBurgerMenu} className="header__menu-btn"></button>
            : <NavTab />
          }
          <BurgerMenu isOpened={isBurgermenuOpened} onClose={closeBurgerMenu} />

        </div>

      </div>
    )
}

export default Header;
