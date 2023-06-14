import React from "react";
import "./about-me.styles.scss";

const AboutMe = () => {
  return (
    <div id="about" className="about-section section-helper">
      <div className="about-me-container container">
        <h2 className="about-title">About me</h2>
        <p>
          I'm a{" "}
          <strong>
            <span className="important">Full-Stack Web Developer</span>
          </strong>
          , using technologies like{" "}
          <strong>
            Javascript (ES 8+) Express, React, NodeJs, and databases
          </strong>{" "}
          (relational and not relational) like <strong>PostgreSql</strong>,{" "}
          <strong>MongoDb</strong> and Firestore (Firebase) among others.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
