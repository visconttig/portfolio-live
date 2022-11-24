import React from "react";
import "./call-to-action.styles.scss";
// import contactImage from "../../assets/images/contact-image.png";

const CallToAction = () => {


    return (
        <div className="call-to-action-section section-helper">
            <div className="container cta-card">
                <h2 className="cta-title">Get in touch!</h2>
                <div className="cta-container">
                    <div className="cta-text-container">
                    <div className="cta-text">
                    <p>I'm hard-working, coachable and if I don't know something I promiss you what I can learn it (And I'll do it). </p>
                    </div>
                    <a href="mailto:visconttig@gmail.com" className="cta-button">Contact me</a>
                    </div>
                    <div className="cta-image-container">
                        {/* <img src={contactImage} alt="email logo" className="cta-image" /> */}
                        <img src={process.env.PUBLIC_URL + "/images/contact-image.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default CallToAction;