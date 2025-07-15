import React from "react";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <h1 className="splash-title">DecodeML</h1>
      <p className="splash-tagline">
        We run on <span>Python</span>, <span>caffeine</span>, and <span>sheer willpower</span>.
      </p>
    </div>
  );
};

export default SplashScreen;
