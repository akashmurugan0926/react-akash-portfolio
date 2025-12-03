import React from "react";

const About = () => {
  return (
    <section id="about" className="container" style={{ padding: "100px 20px" }}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">
          I’m a <strong>Frontend Developer</strong> passionate about building
          dynamic and user-friendly web applications. I love turning ideas into
          real products using modern technologies like{" "}
          <strong>React, Node.js, and MongoDB</strong>.
          <br />
          <br />
          My focus is on writing clean code, solving problems efficiently, and
          continuously improving my skills. I am currently building my portfolio
          to showcase my journey from a beginner to a professional developer.
        </p>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3>Fresh</h3>
            <p>perspective</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
