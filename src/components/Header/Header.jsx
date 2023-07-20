import React from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import headerLogo from '../../images/logo.svg'
import './Header.css'
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

    return(
      <div className={`header ${location.pathname === '/' ? 'header_type_colored' : ''}`}>
        <div className={`header__container ${location.pathname === '/' ? '' : 'header__container_type_auth'}`}>
          <Link to="/"><img src={headerLogo} className="header__logo" alt="" /></Link>
          <NavTab />
        </div>

      </div>
    )
}

export default Header;
