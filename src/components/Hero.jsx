import React from "react";
import { FaDownload, FaPlay } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <h2>HI, I'M AKASH!</h2>
        <h1>
          CREATIVE <span className="highlight">DEVELOPER</span>
        </h1>

        <p className="hero-description">
          I’m a frontend Developer passionate about building dynamic and
          user-friendly web applications. I love turning ideas into real
          products using modern technologies like React, Node.js, and MongoDB.
          My focus is on writing clean code, solving problems efficiently, and
          continuously improving my skills.
        </p>

        <div className="btn-group">
          {/* --- FIXED LINK BELOW --- */}
          <a
            href="cv.pdf"
            download="Akash_Murugan_CV.pdf"
            className="btn-primary"
          >
            Download CV <FaDownload />
          </a>

          <a href="#projects" className="btn-watch">
            <span className="play-icon">
              <FaPlay />
            </span>{" "}
            See My Work
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hexagon-wrapper">
          <div className="hex-border"></div>
          <img src={profileImg} alt="Akash Murugan" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
