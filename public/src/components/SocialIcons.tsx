import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
export default function SocialIcons() {
  return (
    <ul className="social-icons">
      <li>
        <FaFacebookF />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaYoutube />
      </li>
      <li>
        <ImLinkedin />
      </li>
      <li>
        <FaInstagram />
      </li>
    </ul>
  );
}
