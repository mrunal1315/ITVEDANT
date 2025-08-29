import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <h1>Resume</h1>
      {/* <p>You can view or download my resume below:</p> */}
      <div className="resume-button-container">
        {/* View Resume */}
        <a
          href="/Mrunal_Khedekar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button view"
        >
          View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/Mrunal_Khedekar_Resume.pdf"
          download
          className="resume-button download"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
