import React from "react";
import "./header.css";
import HeaderCard from "../headerCard/HeaderCard";
import Subscription from "../subscription/Subscription";

function Header() {
  return (
    <div className="header-container">
      <Subscription />
      <HeaderCard />
    </div>
  );
}

export default Header;
