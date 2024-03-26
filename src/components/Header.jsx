import React from "react";
import { LogoURL } from "./Utils/constants";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={LogoURL} alt="Company logo" />
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contant</li>
                    <li>Yo</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;