import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <section id="skills">
      <h1>Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

