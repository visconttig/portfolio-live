import React from "react";
import "./call-to-action.styles.scss";
import HubspotContactForm from "./HubspotContactForm";

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
                            
                            <HubspotContactForm
                            portalId="48516265"
                            formId="9f9ce74c-5433-4b7c-aa53-f664264de485" />
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