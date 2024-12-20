import React from "react";
import "./live-site.styles.scss";

const LiveSite = ({ siteData }) => {
  const { title, 
    description, 
    skills, 
    image, 
    siteUrl, 
    githubUrl,
    isLive } = siteData;

  return (
    <>
      <div className="main-container">
        <h2 className="title title2">{title}</h2>
        <div className="live-site-container">
          <div className="image-container">
            <img
              src={process.env.PUBLIC_URL + `${image}`}
              alt="Portfolio website"
            />
            <div className="buttons-container">
            <button className="see-live-button github-button">
              <a target="_blank" rel="noopener noreferrer" href={githubUrl}>See on GitHub</a>
            </button>
            { isLive && (<button className="see-live-button">
              <a target="_blank" rel="noopener noreferrer" href={siteUrl}>
                See Live
              </a>
            </button>)}
            </div>
          </div>
          <div className="description-container">
            <p className="description"> {description} </p>
            <div className="skills-row">
              {skills.map((skill) => (
                <ul key={skill}>
                  <li className="skill"> {skill} </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSite;
