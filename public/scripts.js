document.onreadystatechange = () => {
    if(document.readyState === "complete"){

        // alert("Some of the links are down because the cloud services provider's subscription plans changed. \nI'm already aware and I'm working on it as I have time. \n\nThanks for understanding.");

    const mobileButton = document.querySelector("#mobile-button");
    const navigationSection = document.querySelector(".navigation-section");
    const navLinks = document.querySelectorAll("a.nav-link");
    console.log(navLinks);

    mobileButton.addEventListener("click", () => {
        navigationSection.classList.toggle("mobile-navigation-open");
    });

    navLinks.forEach((nav) => {
        nav.addEventListener("click", () => {
            console.log("clicked");
            navigationSection.classList.remove("mobile-navigation-open");
        });
    })

    };
}