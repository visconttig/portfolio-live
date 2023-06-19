import React from "react";
import "./live-site.styles.scss";

const LiveSite = ({ siteData }) => {
  const { title, description, skills, image, siteUrl } = siteData;

  return (
    <>
      <div className="main-container">
        <h2 className="title title2">{title}</h2>
        <div className="live-site-container">
          <div className="image-container">
            {/* <img src={image} /> */}
            <img
              src={process.env.PUBLIC_URL + `${image}`}
              alt="Portfolio website"
            />
            <button className="see-live-button">
              <a target="_blank" rel="noopener noreferrer" href={siteUrl}>
                SEE LIVE
              </a>
            </button>
          </div>
          <div className="description-container">
            <p className="description"> {description} </p>
            <div className="skills-row">
              {skills.map((skill) => (
                <ul>
                  <li className="skill"> {skill} </li>
                </ul>
              ))}
            </div>
          </div>
          {/* <button className="see-live-button">
          <a target="_blank" rel="noopener noreferrer" href={siteUrl}>
            SEE LIVE
          </a>
        </button> */}
        </div>
      </div>
    </>
  );
};

export default LiveSite;
