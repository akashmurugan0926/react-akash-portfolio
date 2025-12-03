import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#080a11",
          color: "#555",
          fontSize: "14px",
          marginTop: "50px",
        }}
      >
        &copy; 2025 Akash Murugan. Built with React.
      </footer>
    </div>
  );
}

export default App;
