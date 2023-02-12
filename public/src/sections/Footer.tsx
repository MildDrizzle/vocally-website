import React from "react";
import SocialIcons from "../components/SocialIcons";
import ContactInfo from "../components/ContactInfo";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="brand">
        <Logo />
        <span>Open Auto @ all rights reserved</span>
      </div>
      <div className="social">
        <ContactInfo />
        <SocialIcons />
      </div>
    </footer>
  );
}
