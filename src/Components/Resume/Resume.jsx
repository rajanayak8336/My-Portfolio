import React from "react";
import './Resume.css'

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>

      <div className="resume-buttons">
        <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          View Resume
        </a>

        <a href="/my_resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>

      <iframe src="/my_resume.pdf" title="Resume" width="100%" height="800px" style={{ border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px", }} />
    </section>
  );
};

export default Resume;