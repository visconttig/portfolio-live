import React from "react";
import "./call-to-action.styles.scss";

const CallToAction = () => {


    return (
        <div id="contact" className="call-to-action-section section-helper">
            <div className="container cta-card">
                <h2 className="cta-title">Get in touch!</h2>
                <div className="cta-container">
                        <div className="cta-text-container">
                            <div className="cta-text">
                            <p>I'm hard-working, coachable and if I don't know something I promiss you what I can learn it (And I'll do it). </p>
                            </div>
                            <a href="mailto:visconttig@gmail.com?subject=Full-Stack%20[ACTION REQUIRED]&body=Hi%20Geronimo!%20I%20found%20your%20profile%20interesting%20and..." className="cta-button"
                            target="_blank" rel="noopener noreferrer">Contact me</a>
                        </div>
                        <div className="cta-image-container">
                            <img src={process.env.PUBLIC_URL + "/images/contact-image.png"} alt="contact, phone and email icons" />
                        </div>
                </div>
            </div>
        </div>
    );
}



export default CallToAction;