import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
export default function ContactInfo() {
  return (
    <ul className="contact-info">
      <li>
        <BsTelephoneFill />
        <span>+769 586 4558</span>
      </li>
      <li>
        <IoMail />
        <span>service@openauto.ca</span>
      </li>
    </ul>
  );
}
