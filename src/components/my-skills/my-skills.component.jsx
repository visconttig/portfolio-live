import React from "react";
import "./my-skills.styles.scss";

const skillSet = [
  "Javascript",
  "React",
  "MongoDB",
  "CSS 3",
  "CSS Flexbox",
  "CSS Grid",
  "HTML 5",
  "Express.js",
  "Node.js",
  "NPM",
  "Yarn",
  "Bootstrap",
  "JQuery",
  "Linux Shell",
  "Lodash",
  "Mongoose",
  "Java SE 8",
  "Ejs",
  "PostgreSQL",
  "MongoDB Atlas",
  "Firebase",
  "OAuth2",
  "MailChimp",
  "Heroku",
  "Netlify",
  "Git/GitHub",
  "Sass",
  "Styled Components",
];

const MySkills = () => {
  return (
    <div className="skills-section section-helper">
      <div className="skills-container container">
        <h2 className="skills-title">My Skills</h2>
        <ul className="skills-list">
          {skillSet.map((skill) => (
            <li> {skill} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
