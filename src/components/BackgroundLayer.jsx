import React from "react";
import "./BackgroundLayer.css";
import darkImage from "../assets/bg_image.jpg";
import lightImage from "../assets/white_bg.jpg";

const BackgroundLayer = ({ darkMode }) => {
  const bgImage = darkMode ? darkImage : lightImage;

  return (
    <div
      className="background-layer"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    />
  );
};

export default BackgroundLayer;
