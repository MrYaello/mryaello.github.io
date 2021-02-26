const flipcardsButton = document.getElementById("flipcardsButton");
const closeButtonFlipcards = document.getElementById("close-window-flipcards");
const dencryptButton = document.getElementById("dencryptButton");
const closeButtonDencrypt = document.getElementById("close-window-dencrypt")
const coffemachineButton = document.getElementById("coffemachineButton");
const closeButtonCoffemachine = document.getElementById("close-window-coffemachine");

flipcardsButton.addEventListener('click', function() {
    document.getElementById("flipcards").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonFlipcards.addEventListener('click', function() {
    document.getElementById("flipcards").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

dencryptButton.addEventListener('click', function() {
    document.getElementById("dencrypt").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonDencrypt.addEventListener('click', function() {
    document.getElementById("dencrypt").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

coffemachineButton.addEventListener('click', function() {
    document.getElementById("coffemachine").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonCoffemachine.addEventListener('click', function() {
    document.getElementById("coffemachine").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

function navSlide() {
    const burger = document.querySelector(".burger");
    const navBar = document.querySelector(".navigation-bar");
    const navItems = document.querySelectorAll(".navigation-item");

    burger.addEventListener("click", () => {
        navBar.classList.toggle("navigation-active");

        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}

navSlide();