import React from "react";
import Navbar from "../navigation/navbar/Navbar";
import Header from "../header/header-component/Header";
import SocialMedia from "../social-media/social-media-component/SocialMedia";
import Footer from "../footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default HomePage;
