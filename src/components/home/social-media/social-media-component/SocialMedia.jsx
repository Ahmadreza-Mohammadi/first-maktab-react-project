import React from "react";
import "./social-media.css";
import SocialMediaLinks from "../social-media-links/SocialMediaLinks";
import SocialMediaComments from "../social-media-comments/SocialMediaComments";

function SocialMedia() {
  return (
    <>
    <div className="social-media-container">
      <SocialMediaLinks />
    </div>
      <SocialMediaComments />
    </>
    
  );
}

export default SocialMedia;
