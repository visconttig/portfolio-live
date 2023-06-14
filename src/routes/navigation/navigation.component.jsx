import "./navigation.styles.scss";



const NavigationBar = () => {


    return (
        <div className="navigation-section">
            <div className="navigation-container">
            <div className="home-link-container">
                <a className="home-link" href="/">Geronimo <br /> Viscontti</a>
            </div>
            <div className="nav-links-container">
            <a href="#about" className="home-nav nav-link">About me</a>
            <a href="#skills" className="about-nav nav-link">My skills</a>
            <a href="#projects" className="skills-nav nav-link">Projects</a>
            <a href="#contact" className="projects-nav nav-link">Contact me</a>
            </div>
            <div className="cta-nav-link-container">
                <a target="_blank" rel="noopener noreferrer" href="mailto:visconttig@gmail.com?subject=Full-Stack%20[ACTION REQUIRED]&body=Hi%20Geronimo!%20I%20found%20your%20profile%20interesting%20and..." className="get-in-touch-nav-link">Get in touch</a>
            </div>

            <button id="mobile-button" className="mobile-menu-button open-menu-button">
            <ion-icon id="open-menu-icon" className="open-menu-icon" name="menu-outline"></ion-icon>
            <ion-icon id="close-menu-icon" name="close-outline"></ion-icon>
            </button>
            </div>
        </div>
    );
}


export default NavigationBar;