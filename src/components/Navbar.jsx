import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <span>//</span> AKASH
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="menu-btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
