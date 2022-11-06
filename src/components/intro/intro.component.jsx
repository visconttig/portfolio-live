import React from "react";
import "./intro.styles.scss";

const Intro = () => {
  return (
    <div className="first-section section">
      <div className="intro-container container">
        <h1 className="intro-title">
          Hi, my name is <span>Gerónimo Viscontti</span>
          <br />
          I'm the Developer you need.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
