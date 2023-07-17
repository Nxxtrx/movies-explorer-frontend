import React from "react";
import NavTab from "../NavTab/NavTab";
import headerLogo from '../../images/logo.svg'

function Header() {
    return(
        <div className="header">
            <img src={headerLogo} className="header__logo" alt="" />
            <NavTab />
        </div>
    )
}

export default Header;
