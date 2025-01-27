import React from "react";
import homeLogo from "../../../../assets/home-1-svgrepo-com.svg";
import profileLogo from "../../../../assets/profile-1335-svgrepo-com.svg";
import contactUsLogo from "../../../../assets/contact-svgrepo-com.svg";
import aboutUsLogo from "../../../../assets/team-svgrepo-com.svg";
import servicesLogo from "../../../../assets/delivery-scooter-svgrepo-com.svg";

function NavbarLinks() {
  return (
    <ul className="navbar-links">
      <li className="nav-item">
        <img className="nav-imgs" src={homeLogo} alt="Service" />
        Home
      </li>
      <li className="nav-item">
        <img className="nav-imgs" src={profileLogo} alt="" />
        Profile
      </li>
      <li className="nav-item">
        <img className="nav-imgs" src={contactUsLogo} alt="" />
        Contact Us
      </li>
      <li className="nav-item">
        <img className="nav-imgs" src={aboutUsLogo} alt="" />
        About Us
      </li>
      <li className="nav-item">
        <img className="nav-imgs" src={servicesLogo} alt="" />
        Services
      </li>
    </ul>
  );
}

export default NavbarLinks;
