import React from "react";
import SITES_DATA from "../../portfolio-sites.data.js";
import LiveSiteGallery from "../../components/live-site-gallery/live-site-gallery.component.jsx";
import Intro from "../../components/intro/intro.component.jsx";
import AboutMe from "../../components/about-me/about-me.component.jsx";
import MySkills from "../../components/my-skills/my-skills.component.jsx";
import CallToAction from "../../components/call-to-action/call-to-action.component.jsx";
import NavigationBar from "../navigation/navigation.component.jsx";
import Footer from "../../components/footer/footer.component.jsx";

const Home = () => {
  const data = SITES_DATA;
  console.log(data);

  return (
    <div className="home-container">
      <NavigationBar />
      <Intro />
      <AboutMe />
      <MySkills />
      <LiveSiteGallery sitesData={data} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
