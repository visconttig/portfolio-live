import React from "react";
import "./my-skills.styles.scss";
import  skillsSet from "../../skills-data.js";

const MySkills = () => {
  const skillsData = skillsSet;
  
  return (
    <div className="skills-section section-helper">
      <div className="skills-card">
      <div className="skills-container container">
        <h2 className="skills-title">My Skills</h2>
        <ul className="skills-list">
          {skillsData.map((skill) => (
            <li> {skill} </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MySkills;
