import "./navigation.styles.scss";
import { useState } from "react";



const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const disableScroll = "disabled-scroll";
    const decreased = "decreased-opacity";
    const menuButton = document.getElementById("mobile-button");



    const toggleMenu = () => {
      if(isOpen){
            setIsOpen(false);
            document.body.classList.remove(`${disableScroll}`);
            menuButton.classList.remove(`${decreased}`);
      } else {

            setIsOpen(true);
            document.body.classList.add(`${disableScroll}`);
            document.getElementById("mobile-button").classList.add(`${decreased}`);
      }
    }



    return (
        <div className="navigation-section">
            <div className="navigation-container">
            <div className="home-link-container">
                <a className="home-link" href="/">Geronimo <br /> Viscontti</a>
            </div>
            <div id="navigation-container-mobile">
            <a href="#about" className="home-nav nav-link" onClick={toggleMenu}>About me</a>
            <a href="#skills" className="about-nav nav-link" onClick={toggleMenu}>My skills</a>
            <a href="#projects" className="skills-nav nav-link" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="projects-nav nav-link" onClick={toggleMenu}>Contact me</a>
            </div>
            <div id="navigation-container">
            <a href="#about" className="home-nav nav-link" >About me</a>
            <a href="#skills" className="about-nav nav-link" >My skills</a>
            <a href="#projects" className="skills-nav nav-link" >Projects</a>
            <a href="#contact" className="projects-nav nav-link" >Contact me</a>
            </div>
            <div className="cta-nav-link-container">
                <a href="#contact" className="get-in-touch-nav-link">Get in touch</a>
            </div>

            <button id="mobile-button" 
            className="mobile-menu-button open-menu-button"
            onClick={toggleMenu} >
            <ion-icon className="menu-icon" name="menu-outline"></ion-icon>
            </button>
            </div>
        </div>
    );
}


export default NavigationBar;