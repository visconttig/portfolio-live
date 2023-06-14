import React from "react";
import "./live-site-gallery.styles.scss";
import LiveSite from "../live-site/live-site.component.jsx";

const LiveSiteGallery = ({ sitesData }) => {
  return (
    <div id="projects" className="projects-section section-helper">
      <h2 className="section-title">Projects</h2>
      <div className="gallery-container container">
        {sitesData.map((site) => (
          <LiveSite key={site.title} siteData={site} />
        ))}
      </div>
    </div>
  );
};

export default LiveSiteGallery;
