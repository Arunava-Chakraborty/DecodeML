import React from "react";
import "../styles/About.css";
import profilePic from "../assets/User-Avatar-PNG-Transparent-Image.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="about-page">
      {/* === Left Section === */}
      <div className="bio-section">
        <img src={profilePic} alt="Profile" className="bio-avatar" />
        <h1>Arunava Chakraborty</h1>
        <h3>ML Enthusiast • Tech Explorer • Blogger</h3>
        <p>
        I build things that break... and then fix them to teach machines how to learn. From ML models and data pipelines to visual explainers and blogs, I like turning machine learning into something interactive, beautiful, and kind of fun. Big fan of messy notebooks, clean UIs, and long walks through Scikit-learn docs.
        </p>


        <div className="social-links">
          <a href="https://github.com/Arunava-Chakraborty" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>
          <a href="https://leetcode.com/Arunava_Chakraborty/" target="_blank">
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* === Right Section === */}
      <div className="widgets-section">
        {/* Contact First */}
        <div className="widget contact-box">
          <h3>📬 Contact Me</h3>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Stats Second */}
        <div className="dual-stats">
          <div className="stat-block">
            <h3>📊 GitHub</h3>
            <img
              src="https://ghchart.rshah.org/Arunava-Chakraborty"
              alt="GitHub Chart"
            />
          </div>

          <div className="stat-block">
            <h3>🧠 LeetCode</h3>
            <img
              src="https://leetcard.jacoblin.cool/Arunava_Chakraborty?theme=dark&font=baloo&ext=activity"
              alt="LeetCode card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
