import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import PickupServiceAsset from "../assets/pickup-service.png";
export default function Mobile() {
  return (
    <div className="mobile">
      <div className="illustration">
        <img src={PickupServiceAsset} alt="Pickup Service Asset" />
      </div>
      <div className="container">
        <Typography text="Focused on Time Saving" type="title" />
        <Typography
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias sint, quae error facilis adipisci deserunt quidem numquam sit minima distinctio explicabo provident laborum? Quae saepe pariatur maxime fugit ratione labore ab suscipit eveniet laboriosam, totam facere neque."
          type="subTitle"
        />
        <Button text="Download the mobile app" />
      </div>
    </div>
  );
}
