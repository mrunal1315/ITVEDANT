import React, { Suspense, lazy } from "react";
import "./styles.css";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
