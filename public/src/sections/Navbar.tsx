import React from "react";
import Button from "../components/Button";
import ContactInfo from "../components/ContactInfo";
import Logo from "../components/Logo";

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <div className="info">
        <ContactInfo />
        <Button text="Download the mobile app" />
      </div>
    </nav>
  );
}
