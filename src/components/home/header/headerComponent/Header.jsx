import React from "react";
import "./header.css";
import HeaderCard from "../headerCard/HeaderCard";
import Subscription from "../subscription/Subscription";
import Offers from "../offers/Offers";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left-side">
        <Subscription />
        <Offers />
      </div>
      <HeaderCard />
    </div>
  );
}

export default Header;
