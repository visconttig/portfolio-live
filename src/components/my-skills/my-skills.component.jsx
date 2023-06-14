import React from "react";
import "./my-skills.styles.scss";
import  skillsSet from "../../skills-data.js";

const MySkills = () => {
  const skillsData = skillsSet;
  
  return (
    <div id="skills" className="skills-section section-helper">
      <div className="skills-card container">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <ul className="skills-list">
          {skillsData.map((skill) => (
            <li
            className={skill.important ? "important" : "not-important"}
            > {skill.name} </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MySkills;
