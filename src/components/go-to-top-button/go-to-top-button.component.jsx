import React from "react";
import {useEffect} from "react";
import "./go-to-top-button.styles.scss";
import "../../routes/navigation/navigation.component.jsx";


export const GoToTopButton = () => {

useEffect(() => {
    let timeOut;
    window.addEventListener("scroll", () => {
        clearTimeout(timeOut);

        if(window.scrollY >= 1000){
            showGoToTopButton();
        } else {
            hideGoToTopButton();
        }
    });
    
    window.addEventListener("scrollend", () => {
        timeOut = setTimeout(() => {
            hideGoToTopButton();
        }, 3000);
    });

    return () => {
        window.removeEventListener("scroll", () => {});
        window.removeEventListener("scrollend", () => {});
    };
}, []);


const showGoToTopButton = () => {
    const button = document.getElementById("go-to-top");
    button.classList.add("gtt-visible");
};

const hideGoToTopButton = () => {
    const button = document.getElementById("go-to-top");
    button.classList.remove("gtt-visible");
};

const gotToTop = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    window.scrollTo(0, 0);
}

    return (
        <button id="go-to-top" onClick={(evt) => gotToTop(evt) }>^</button>
    );
};