import React from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import headerLogo from '../../images/logo.svg'
import './Header.css'

function Header() {
    return(
      <div className="header">
        <div className="header__container">
          <img src={headerLogo} className="header__logo" alt="" />
          <NavTab />
        </div>

      </div>
    )
}

export default Header;
