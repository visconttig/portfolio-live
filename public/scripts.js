document.onreadystatechange = () => {
    if(document.readyState === "complete"){

    const mobileButton = document.querySelector("#mobile-button");
    const navigationSection = document.querySelector(".navigation-section");

    mobileButton.addEventListener("click", () => {
        navigationSection.classList.toggle("mobile-navigation-open");
    });

    };
}