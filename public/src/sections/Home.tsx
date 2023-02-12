import React from "react";
import Typography from "../components/Typography";
import Form from "../components/Form";
import PickupIllustrationAsset from "../assets/pickup-illustration.png";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="text-data">
          <Typography
            text="Vehicle Maintenance From the Comfort of Your Home"
            type="title"
          />
          <Typography
            text="Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free."
            type="subTitle"
          />
        </div>
        <Form />
      </div>
      <div className="illustration">
        <img src={PickupIllustrationAsset} alt="Pickup Illustration" />
      </div>
      <div className="home-social-icons">
        <SocialIcons />
      </div>
    </div>
  );
}
