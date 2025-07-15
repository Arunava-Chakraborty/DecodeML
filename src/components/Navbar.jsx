import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="nav-logo">
          DecodeML
        </NavLink>
      </div>
      <div className="nav-center">
        <NavLink to="/" end className="nav-item">Home</NavLink>
        <NavLink to="/docs" className="nav-item">Docs</NavLink>
        <NavLink to="/blog" className="nav-item">Blog</NavLink>
        <NavLink to="/Playground" className="nav-item">PlayGround</NavLink>
        <NavLink to="/Projects" className="nav-item">Projects</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
      </div>
      <div className="nav-right">
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
