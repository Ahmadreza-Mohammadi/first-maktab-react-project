import React from "react";
import "./navbar.css";
import NavLogo from "../navLogo/NavLogo";

import NavbarLinks from "../navbarLinks/NavbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-name">Milano Pizza</span>
       <NavLogo />
      </div>
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
