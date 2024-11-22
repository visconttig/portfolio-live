document.onreadystatechange = () => {
    if(document.readyState === "complete"){

    const mobileButton = document.querySelector("#mobile-button");
    const navigationSection = document.querySelector(".navigation-section");
    const navLinks = document.querySelectorAll("a.nav-link");

    mobileButton.addEventListener("click", () => {
        navigationSection.classList.toggle("mobile-navigation-open");
    });

    navLinks.forEach((nav) => {
        nav.addEventListener("click", () => {
            navigationSection.classList.remove("mobile-navigation-open");
        });
    })

    };
}