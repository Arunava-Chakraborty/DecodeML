import React from "react";
import "../styles/About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; // Replace with your image

const About = () => {
  return (
    <div className="about-container">
      {/* Profile Section */}
      <div className="about-header">
        <img src={profilePic} alt="Profile" className="about-avatar" />
        <div>
          <h1>Arunava Chakraborty</h1>
          <p className="about-role">ML Engineer • Tech Explorer • Blogger</p>
          <p className="about-intro">
            Passionate about decoding machine learning—one algorithm at a time.
            I build tools, write blogs, and love visualizing how machines learn.
          </p>
          <div className="about-socials">
            <a href="https://github.com/Arunava-Chakraborty"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/arunava-chakraborty/"><FaLinkedin /></a>
            <a href="mailto:you@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="about-timeline">
        <h2>📍 My Journey</h2>
        <ul className="timeline">
          <li><strong>2025</strong> — Joined LTIMindtree as a Graduate Engineer Trainee</li>
          <li><strong>2023–2025</strong> — Built DecodeML and explored ML software engineering</li>
          <li><strong>2021–2023</strong> — Studied CS & participated in ML hackathons</li>
        </ul>
      </div>

      {/* GitHub Contributions */}
      <div className="about-github">
        <h2>💻 GitHub Activity</h2>
        <img src={`https://ghchart.rshah.org/yourusername`} alt="GitHub Contributions" />
      </div>

      {/* Linked Blogs/Projects */}
      <div className="about-links">
        <h2>🔗 Featured</h2>
        <div className="about-cards">
          <a href="/projects"><div className="about-card">Projects →</div></a>
          <a href="/blog"><div className="about-card">Blog Posts →</div></a>
        </div>
      </div>
    </div>
  );
};

export default About;
