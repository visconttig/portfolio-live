import React, {useEffect} from "react";
    
const HubspotContactForm = props => {
    const { portalId, formId } = props;
    useEffect(() => {
        const script = document.createElement('script');
        script.src='//js.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
};

export default HubspotContactForm;