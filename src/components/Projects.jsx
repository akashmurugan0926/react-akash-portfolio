import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Weather App",
      desc: "A React application fetching real-time weather data via API.",
      link: "https://akashmurugan0926.github.io/react-weather/",
      tech: "React, API, CSS",
    },
    {
      id: 2,
      title: "Todo App",
      desc: "A task management tool to organize daily activities efficiently.",
      link: "https://akashmurugan0926.github.io/react-todos/",
      tech: "React, LocalStorage",
    },
    {
      id: 3,
      title: "Calculator",
      desc: "A fully functional calculator built with React logic.",
      link: "https://akashmurugan0926.github.io/react-calculator/",
      tech: "React, Math Logic",
    },
  ];

  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p
              style={{
                color: "#00f2a9",
                fontSize: "12px",
                marginBottom: "15px",
              }}
            >
              {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                display: "inline-flex",
              }}
            >
              View Demo <FaExternalLinkAlt style={{ marginLeft: "8px" }} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
