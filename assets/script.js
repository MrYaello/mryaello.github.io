const flipcardsButton = document.getElementById("flipcardsButton");
const closeButtonFlipcards = document.getElementById("close-window-flipcards");
const dencryptButton = document.getElementById("dencryptButton");
const closeButtonDencrypt = document.getElementById("close-window-dencrypt")
const coffemachineButton = document.getElementById("coffemachineButton");
const closeButtonCoffemachine = document.getElementById("close-window-coffemachine");
const burger = document.querySelector(".burger");
const navBar = document.querySelector(".navigation-bar");
const navItems = document.querySelectorAll(".navigation-item");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

flipcardsButton.addEventListener('click', openFlipcards);
function openFlipcards() {
    document.getElementById("flipcards").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
}

dencryptButton.addEventListener('click', openDencrypt)
function openDencrypt() {
    document.getElementById("dencrypt").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
}

coffemachineButton.addEventListener('click', openCoffeMachine);
function openCoffeMachine() {
    document.getElementById("coffemachine").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
}

closeButtonFlipcards.addEventListener('click', closeFlipcards);
function closeFlipcards() {
    document.getElementById("flipcards").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
}

closeButtonDencrypt.addEventListener('click', closeDencrypt);
function closeDencrypt() {
    document.getElementById("dencrypt").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
}

closeButtonCoffemachine.addEventListener('click', closeCoffeMachine);
function closeCoffeMachine() {
    document.getElementById("coffemachine").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
}

function navSlide() {
    burger.addEventListener("click", () => {
        navBar.classList.toggle("navigation-active");

        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}

if (vw <= 768) {
    var element = document.querySelector("nav");
    var position = element.getBoundingClientRect();
    navBar.style.cssText += `top: ${position.bottom - 1}px`;
    window.addEventListener('scroll', function() {
        position = element.getBoundingClientRect();
        var navPosition = position.bottom;
        navBar.style.cssText += `top: ${navPosition - 1}px`;
    });
}
navSlide();