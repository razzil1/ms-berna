import React from "react";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import "./styles.scss";

const Logo = () => (
  <div className="logo center-text">
    <DirectionsBoatIcon className="logo__image" />
    <span className="logo__text"> MS Berna</span>
  </div>
);

export default Logo;
