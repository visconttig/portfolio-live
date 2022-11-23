import React from "react";
import "./live-site-gallery.styles.scss";
import LiveSite from "../live-site/live-site.component.jsx";

const LiveSiteGallery = ({ sitesData }) => {
  return (
    <div className="projects-section section-helper">
      <div className="gallery-container container">
        <h2 className="section-title">Projects</h2>
        {sitesData.map((site) => (
          <LiveSite key={site.title} siteData={site} />
        ))}
      </div>
    </div>
  );
};

export default LiveSiteGallery;
