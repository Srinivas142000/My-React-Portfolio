import webdev from "../assets/img/webdev.png";
import appdev from "../assets/img/appdev.png";
import codedev from "../assets/img/codedev.png";
import dbdev from "../assets/img/dbdev.png";
import colorSharp from "../assets/img/color-sharp.png";
import "../css/skills.css"; // Import the CSS file for scrolling styles

export const Skills = () => {
  const skills = [
    { name: "Python", imagetype: "codedev" },
    { name: "Java", imagetype: "codedev" },
    { name: "JavaScript", imagetype: "webdev" },
    { name: "Node.js", imagetype: "webdev" },
    { name: "React", imagetype: "webdev" },
    { name: "Go", imagetype: "appdev" },
    { name: "C++", imagetype: "codedev" },
    { name: "C", imagetype: "codedev" },
    { name: "Typescript", imagetype: "webdev" },
    { name: "Spring Boot", imagetype: "webdev" },
    { name: "Vue", imagetype: "webdev" },
    { name: "MongoDB", imagetype: "dbdev" },
    { name: "Redis", imagetype: "dbdev" },
    { name: "Docker", imagetype: "appdev" },
    { name: "AWS", imagetype: "appdev" },
    { name: "GitHub", imagetype: "webdev" },
    { name: "TensorFlow", imagetype: "appdev" },
    { name: "PySpark", imagetype: "appdev" },
    { name: "Angular", imagetype: "webdev" },
    { name: "Swift", imagetype: "appdev" },
    { name: "iOS SDK", imagetype: "appdev" },
    { name: "Android SDK", imagetype: "appdev" },
    { name: "React Native", imagetype: "appdev" },
    { name: "Kotlin", imagetype: "appdev" },
    { name: "Jupyter", imagetype: "appdev" },
    { name: "MATLAB", imagetype: "appdev" },
    { name: "PostgreSQL", imagetype: "dbdev" }
  ];

  const imgdir = {
    codedev: codedev,
    webdev: webdev,
    appdev: appdev,
    dbdev: dbdev
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I have honed these skills through a combination of practical project experience and comprehensive online courses.</p>
              
              <div className="scroll-container">
                <div className="scroll-wrapper">
                  <div className="scroll-content">
                    {skills.map((skill, index) => (
                      <div key={index} className="scroll-item">
                        <img src={imgdir[skill.imagetype]} alt={skill.name} />
                        <h5>{skill.name}</h5>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate content for infinite scrolling */}
                  <div className="scroll-content">
                    {skills.map((skill, index) => (
                      <div key={`duplicate-${index}`} className="scroll-item">
                        <img src={imgdir[skill.imagetype]} alt={skill.name} />
                        <h5>{skill.name}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
