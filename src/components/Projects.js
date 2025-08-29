import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Portfolio Website", description: "A personal website to showcase my work and skills." },
    { name: "E-commerce App", description: "A MERN stack e-commerce platform with cart and payment features." },
    { name: "Blog Platform", description: "A blogging website built with React and Node.js." }
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
