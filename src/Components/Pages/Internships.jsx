import React from "react";
import './Internships.css'

const internships = [
  {
    company: "DECODE LABS",
    role: "Frontend Development Intern",
    duration: "Jun 2026 - Jul 2026",
    description:"Developed responsive websites using HTML, CSS, JavaScript and React.js.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    certificate: "/DecodeLabs_Internship_Certificate.pdf",
    lor: "/Letter_of_Recommendation.pdf",
  },
  {
    company: "CODE ALPHA",
    role: "Frontend Development Intern",
    duration: "Jun 2026 - Jul 2026",
    description:"Developed responsive websites using HTML, CSS, JavaScript and React.js.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    certificate: "/Certificate_Raja Nayak Googulothu.pdf",
    lor: "/LOR_Raja Nayak Googulothu.pdf",
  }
  
];

const Internships = () => {
  return (
    <section className="internship-section">
      <h1>My Internships</h1>

      <div className="internship-container">
        {internships.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.company}</h2>
            <h3>{item.role}</h3>

            <p className="duration">{item.duration}</p>

            <p>{item.description}</p>

            <div className="skills">
              {item.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className="buttons">
              <a href={item.certificate} target="_blank" rel="noreferrer">
                Certificate
              </a>

              <a href={item.lor} target="_blank" rel="noreferrer">
                LOR
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
