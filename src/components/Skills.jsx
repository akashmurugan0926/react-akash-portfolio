import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },

    // UPDATED LINES BELOW:
    { name: "Node.js (Basic Knowledge)", icon: <FaNodeJs />, color: "#339933" },
    {
      name: "MongoDB (Basic Knowledge)",
      icon: <FaDatabase />,
      color: "#47A248",
    },

    {
      name: "Git & GitHub (Basic Knowledge)",
      icon: <FaGitAlt />,
      color: "#F05032",
    },
  ];

  return (
    <section id="skills" className="container" style={{ padding: "80px 20px" }}>
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
