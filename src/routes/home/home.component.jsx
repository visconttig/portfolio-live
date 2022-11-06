import React from "react";
import SITES_DATA from "../../portfolio-sites.data.js";
import LiveSiteGallery from "../../components/live-site-gallery/live-site-gallery.component.jsx";
import Intro from "../../components/intro/intro.component.jsx";
import AboutMe from "../../components/about-me/about-me.component.jsx";
import MySkills from "../../components/my-skills/my-skills.component.jsx";

const Home = () => {
  const data = SITES_DATA;
  console.log(data);

  return (
    <div className="home-container">
      <Intro />
      <AboutMe />
      <MySkills />
      <LiveSiteGallery sitesData={data} />
    </div>
  );
};

export default Home;
