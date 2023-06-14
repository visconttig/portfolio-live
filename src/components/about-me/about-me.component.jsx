import React from "react";
import "./about-me.styles.scss";

const AboutMe = () => {
  return (
    <div id="about" className="about-section section-helper">
      <div className="about-me-container container">
        <h2 className="about-title">About me</h2>
        <p>
        I'm a <strong><span className="important">Full-Stack Web Developer</span></strong>, using technologies like <strong>Javascript (ES 6) Express, React, NodeJs, and databases</strong> (relational and not relational) like <strong>PostgreSql</strong>, <strong>MongoDb</strong> and Firestore (Firebase) among others.
          <span className="not-important-text">
          <br />
          Even though now I focus most of my time in the MERN Stack, I started my programming journey with Java.
          <br />
A few years ago I'd been seriously studying Java, including some of the new up-to-date topics like Lambda, Advanced Generics (JDK 8) , Modules (JDK 9) and other topics introduced in JDK 11 (Trough Oracle Univerity). 
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
