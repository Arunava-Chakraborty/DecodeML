import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("visitedDecodeML");

    if (!alreadyVisited) {
      setShowSplash(true);
      document.body.style.overflow = "hidden";

      const splashTimer = setTimeout(() => {
        setFadeOut(true);
      }, 3000);

      const hideSplashTimer = setTimeout(() => {
        setShowSplash(false);
        setLoaded(true);
        localStorage.setItem("visitedDecodeML", "true");
        document.body.style.overflow = "auto";
      }, 3600);

      return () => {
        clearTimeout(splashTimer);
        clearTimeout(hideSplashTimer);
      };
    } else {
      setLoaded(true);
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <>
      {showSplash ? (
        <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
          <h1 className="splash-title">DecodeML</h1>
          <p className="splash-subtitle">
            We run on Python, caffeine, and sheer willpower.
          </p>
        </div>
      ) : loaded ? (
        <div className="home-container fade-in">
          <div className="overlay">
            <div className="hero-content">
              <h1 className="home-title">DecodeML</h1>
              <p className="home-subtitle">
                We run on Python, caffeine, and sheer willpower.
              </p>
              <div className="home-buttons">
                <button onClick={() => navigate("/docs")}>📘 Explore Docs</button>
                <button onClick={() => navigate("/blog")}>🧠 Read Blog</button>
                <button onClick={() => navigate("/playground")}>🧪 Playground</button>
                <button onClick={() => navigate("/viz")}>📊 Visualizer</button>
              </div>
            </div>

            <div className="features-section">
            <h2 className="inside-tagline-inline">
              <span className="typing-segment">Inside: 80% ML, </span>
              <span className="typing-segment">20% bad puns, </span>
              <span className="typing-segment">100% worth it.</span>
            </h2>


              <div className="inside-features">
                <div className="feature-card">"Real thoughts from real devs. No AI-generated fluff (we promise... maybe)."</div>
                <div className="feature-card">"Finally, documentation that doesn’t require a PhD in Hieroglyphics"</div>
                <div className="feature-card">“Talk to us — we’re more responsive than your training set.”</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
